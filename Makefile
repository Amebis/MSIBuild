#    ​​​​SPDX-License-Identifier: GPL-3.0-or-later
#    Copyright © 1991-2022 Amebis
#    Copyright © 2016 GÉANT

######################################################################
# Parameter validation
######################################################################

!IFNDEF MSIBUILD_PRODUCT_NAME
!ERROR Parameter MSIBUILD_PRODUCT_NAME is undefined.
!ENDIF

!IFNDEF MSIBUILD_CODEPAGE
!ERROR Parameter MSIBUILD_CODEPAGE is undefined.
!ENDIF

!IFNDEF MSIBUILD_LANGID
!ERROR Parameter MSIBUILD_LANGID is undefined.
!ENDIF

!IFNDEF MSIBUILD_MSI_VERSION_MIN
!ERROR Parameter MSIBUILD_MSI_VERSION_MIN is undefined.
!ENDIF

!IFNDEF MSIBUILD_LENGTH_ID
!ERROR Parameter MSIBUILD_LENGTH_ID is undefined.
!ENDIF

!IFNDEF MSIBUILD_LENGTH_HELP
!ERROR Parameter MSIBUILD_LENGTH_HELP is undefined.
!ENDIF

!IFNDEF MSIBUILD_PHASE
MSIBUILD_PHASE=0
!ENDIF

!IFNDEF PLAT
PLAT=Win32
!ENDIF
!IF "$(PLAT)" == "Win32"
MSIBUILD_PLAT=Intel
!ELSEIF "$(PLAT)" == "x64"
MSIBUILD_PLAT=x64
!IF $(MSIBUILD_MSI_VERSION_MIN) < 150
!ERROR x64 platform is supported on MSI 1.5 or later. Please, specify MSIBUILD_MSI_VERSION_MIN=150 for x64 builds.
!ENDIF
!ELSEIF "$(PLAT)" == "ARM64"
MSIBUILD_PLAT=Arm64
!IF $(MSIBUILD_MSI_VERSION_MIN) < 500
!ERROR ARM64 platform is supported on MSI 5.0 or later. Please, specify MSIBUILD_MSI_VERSION_MIN=500 for ARM64 builds.
!ENDIF
!ELSE
!ERROR Unsupported platform: $(PLAT)
!ENDIF
!IF "$(PROCESSOR_ARCHITECTURE)" == "AMD64" || "$(PROCESSOR_ARCHITECTURE)" == "ARM64"
MSIBUILD_MSM_MS_REPO=$(PROGRAMW6432) (x86)\Common Files\Merge Modules
!ELSE
MSIBUILD_MSM_MS_REPO=$(COMMONPROGRAMFILES)\Merge Modules
!ENDIF
!IFDEF MSIBUILD_VENDOR_NAME
MSIINFO_FLAGS=/A "$(MSIBUILD_VENDOR_NAME)"
!ELSE
MSIINFO_FLAGS=
!ENDIF

######################################################################
# Target Stubs
######################################################################

All ::

Clean ::

!IF $(MSIBUILD_PHASE) == 0

######################################################################
# Setup Phase
# - Version info parsing
######################################################################

All :: \
	"..\MSIBuild\Version\$(PKG)Version.mak" \
	"$(TEMP)\$(PKG)$(LANG).$(PLAT).$(CFG).PackageGUID.mak"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_PHASE=1 All

Clean ::
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_PHASE=100 Clean

"..\MSIBuild\Version\$(PKG)Version.mak" ::
	cd $(@D)
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) Version
	cd "$(MAKEDIR)"

"$(TEMP)\$(PKG)$(LANG).$(PLAT).$(CFG).PackageGUID.mak" ::
	cscript.exe "..\MSIBuild\MSI.wsf" //Job:MakeGUID //Nologo /M:MSIBUILD_PACKAGE_GUID > "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL

!ELSEIF $(MSIBUILD_PHASE) == 1

######################################################################
# 1st Phase
# - Module preparation, generating dependency lists and first version
#   of MSI package
######################################################################

!INCLUDE "..\MSIBuild\Version\$(PKG)Version.mak"
!INCLUDE "$(TEMP)\$(PKG)$(LANG).$(PLAT).$(CFG).PackageGUID.mak"

All :: \
	"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).1.msi" \
	"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).2.dep"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_PHASE=2 All

"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).1.msi" : $(MSIBUILD_MODULES) $(MSIBUILD_MODULES_PRECOMPILED)
	-if exist $@ del /f /q $@
	copy /y "..\MSIBuild\Empty.msi" "$(@:"=).tmp" > NUL
	!if not exist "$(**R:"=).msmcfg" "$(WINDOWSSDKVERBINPATH)x86\msidb.exe" -d "$(@:"=).tmp" -m $**
	"$(WINDOWSSDKVERBINPATH)x86\msiinfo.exe" "$(@:"=).tmp" /nologo /C $(MSIBUILD_CODEPAGE) /T "$(MSIBUILD_PRODUCT_NAME) $(MSIBUILD_VERSION_STR) ($(PLAT))" $(MSIINFO_FLAGS) /P "$(MSIBUILD_PLAT);$(MSIBUILD_LANGID)" /G $(MSIBUILD_MSI_VERSION_MIN) /V $(MSIBUILD_PACKAGE_GUID) /W 0 /O ""
	!if exist "$(**R:"=).msmcfg" msimsm.exe "$(@:"=).tmp" $** /N "$(**R:"=).msmcfg" /D "$(**R:"=).log" /Sd "..\..\output" /F
	move /y "$(@:"=).tmp" $@ > NUL

"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).2.dep" : "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).1.msi"
	cscript.exe "..\MSIBuild\MSI.wsf" //Job:MakeDEP //Nologo "$(@:"=).tmp" "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).2.msi" $**
	move /y "$(@:"=).tmp" $@ > NUL

$(MSIBUILD_MODULES) ::
	cd $(@D)
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_HAS_VERSION=1
	cd "$(MAKEDIR)"

!IFDEF MSIBUILD_MODULES_PRECOMPILED
$(MSIBUILD_MODULES_PRECOMPILED) ::
	if exist "$(MSIBUILD_MSM_MS_REPO)\$(@F:"=)" $(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_PHASE=90 MSIBUILD_MSM_SRC="$(MSIBUILD_MSM_MS_REPO)\$(@F:"=)" MSIBUILD_MSM_DST=$@ All
!ENDIF

!ELSEIF $(MSIBUILD_PHASE) == 2

######################################################################
# 2nd Phase
# - MSI package population with exact file versions and sizes
######################################################################

!INCLUDE "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).2.dep"
!INCLUDE "..\MSIBuild\Version\$(PKG)Version.mak"

All :: \
!IFDEF MSIBUILD_COMPRESS
	"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).3.dep" \
!ENDIF
	"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).2.msi"
!IFDEF MSIBUILD_COMPRESS
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_PHASE=3 All
!ENDIF

"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).2.msi" : "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).1.msi"
	-if exist $@ del /f /q $@
	copy /y "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).1.msi" "$(@:"=).tmp" > NUL
	"$(WINDOWSSDKVERBINPATH)x86\msifiler.exe" -v -h -d "$(@:"=).tmp" > "$(*:"=).out"
	move /y "$(@:"=).tmp" $@ > NUL

"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).3.dep" : "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).1.msi"
	cscript.exe "..\MSIBuild\MSI.wsf" //Job:MakeDEP //Nologo "$(@:"=).tmp" "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).cab" $**
	move /y "$(@:"=).tmp" $@ > NUL

!ELSEIF $(MSIBUILD_PHASE) == 3

######################################################################
# 3rd Phase
# - MSI package compression
######################################################################

!INCLUDE "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).3.dep"
!INCLUDE "..\MSIBuild\Version\$(PKG)Version.mak"

All :: \
	"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).3.msi"

"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).3.ddf" : "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).2.msi"
	cscript.exe "..\MSIBuild\MSI.wsf" //Job:MakeDDF //Nologo "$(@:"=).tmp" $** /O:"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG)" /C:LZX
	move /y "$(@:"=).tmp" $@ > NUL

"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).cab" \
"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).inf" \
"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).rpt" : "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).3.ddf"
	makecab.exe /F "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).3.ddf"

"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).3.msi" : \
	"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).2.msi" \
	"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).cab" \
	"..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).inf"
	-if exist $@ del /f /q $@
	copy /y "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).2.msi" "$(@:"=).tmp" > NUL
	cscript.exe "..\MSIBuild\MSI.wsf" //Job:SetCAB //Nologo "$(@:"=).tmp" "..\..\output\$(PKG)$(LANG).$(PLAT).$(CFG).inf" /E
	"$(WINDOWSSDKVERBINPATH)x86\msiinfo.exe" "$(@:"=).tmp" /nologo /U 4
!IFDEF MANIFESTCERTIFICATETHUMBPRINT
	signtool.exe sign /sha1 "$(MANIFESTCERTIFICATETHUMBPRINT)" /fd sha256 /tr "$(MANIFESTTIMESTAMPRFC3161URL)" /td sha256 /d "$(MSIBUILD_PRODUCT_NAME)" /q "$(@:"=).tmp"
!ENDIF
	attrib.exe +r "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL

!ELSEIF $(MSIBUILD_PHASE) == 90

######################################################################
# MSM Copy from Repository Phase
######################################################################

All :: "$(MSIBUILD_MSM_DST)"

"$(MSIBUILD_MSM_DST)" : "$(MSIBUILD_MSM_SRC)"
	copy /y $** $@ > NUL

!ELSE

######################################################################
# Cleanup Phase
# - Cleaning modules
######################################################################

Clean :: $(MSIBUILD_MODULES) $(MSIBUILD_MODULES_PRECOMPILED)
	cd "..\MSIBuild\Version"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) Clean
	cd "$(MAKEDIR)"
	-if exist "..\..\output\$(PKG)*.1.msi" del /f /q "..\..\output\$(PKG)*.1.msi"
	-if exist "..\..\output\$(PKG)*.2.dep" del /f /q "..\..\output\$(PKG)*.2.dep"
	-if exist "..\..\output\$(PKG)*.2.msi" del /f /q "..\..\output\$(PKG)*.2.msi"
	-if exist "..\..\output\$(PKG)*.2.out" del /f /q "..\..\output\$(PKG)*.2.out"
	-if exist "..\..\output\$(PKG)*.3.dep" del /f /q "..\..\output\$(PKG)*.3.dep"
	-if exist "..\..\output\$(PKG)*.3.ddf" del /f /q "..\..\output\$(PKG)*.3.ddf"
	-if exist "..\..\output\$(PKG)*.3.msi" del /f /q "..\..\output\$(PKG)*.3.msi"
	-if exist "..\..\output\$(PKG)*.3.out" del /f /q "..\..\output\$(PKG)*.3.out"
	-if exist "..\..\output\$(PKG)*.cab"   del /f /q "..\..\output\$(PKG)*.cab"
	-if exist "..\..\output\$(PKG)*.inf"   del /f /q "..\..\output\$(PKG)*.inf"
	-if exist "..\..\output\$(PKG)*.rpt"   del /f /q "..\..\output\$(PKG)*.rpt"

$(MSIBUILD_MODULES) ::
	cd $(@D)
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) Clean
	cd "$(MAKEDIR)"

!IFDEF MSIBUILD_MODULES_PRECOMPILED
$(MSIBUILD_MODULES_PRECOMPILED) ::
	cd $(@D)
	-if exist "*.log" del /f /q "*.log"
	cd "$(MAKEDIR)"
!ENDIF

!ENDIF
