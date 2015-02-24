#
#    MSIBuild, Copyright (C) Amebis
#
#    This program is free software; you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation; either version 2 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
#
#    See the GNU General Public License for more details, included in the file
#    LICENSE.rtf which you should have received along with this program.
#
#    If you did not receive a copy of the GNU General Public License,
#    write to the Free Software Foundation, Inc., 675 Mass Ave,
#    Cambridge, MA 02139, USA.
#
#    Amebis can be contacted at http://www.amebis.si
#

######################################################################
# Parameter validation
######################################################################

!IFNDEF MSIBUILD_OUTPUT_DIR
!ERROR Parameter MSIBUILD_OUTPUT_DIR is undefined.
!ENDIF

!IFNDEF MSIBUILD_ROOT
!ERROR Parameter MSIBUILD_ROOT is undefined.
!ENDIF

!IFNDEF MSIBUILD_TARGET
!ERROR Parameter MSIBUILD_TARGET is undefined.
!ENDIF

!IFNDEF MSIBUILD_VENDOR_NAME
!ERROR Parameter MSIBUILD_VENDOR_NAME is undefined.
!ENDIF

!IFNDEF MSIBUILD_VENDOR_URL
!ERROR Parameter MSIBUILD_VENDOR_URL is undefined.
!ENDIF

!IFNDEF MSIBUILD_PRODUCT_NAME
!ERROR Parameter MSIBUILD_PRODUCT_NAME is undefined.
!ENDIF

!IFNDEF MSIBUILD_PRODUCT_DESC
!ERROR Parameter MSIBUILD_PRODUCT_DESC is undefined.
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
!ELSE
MSIBUILD_PLAT=$(PLAT)
!ENDIF

######################################################################
# Target stubs
######################################################################

All ::

Clean ::

!IF $(MSIBUILD_PHASE) == 0

######################################################################
# Setup Phase
# - Version info parsing
######################################################################

All :: \
	"$(MSIBUILD_ROOT)\Version\Version.mak" \
	"$(MSIBUILD_OUTPUT_DIR)\PackageGUID.mak"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_PHASE=1 All

Clean ::
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_PHASE=100 Clean

"$(MSIBUILD_ROOT)\Version\Version.mak" ::
	cd $(@D)
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) Version
	cd "$(MAKEDIR)"

"$(MSIBUILD_OUTPUT_DIR)\PackageGUID.mak" ::
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	novguid.exe MSIBUILD_PACKAGE_GUID | sed.exe -e "s/set //i" >> "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL

!ELSEIF $(MSIBUILD_PHASE) == 1

######################################################################
# 1st Phase
# - Module preparation, generating dependency lists and first version
#   of MSI package
######################################################################

!INCLUDE "$(MSIBUILD_ROOT)\Version\Version.mak"
!INCLUDE "$(MSIBUILD_OUTPUT_DIR)\PackageGUID.mak"

All :: \
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).1.msi" \
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.dep"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_PHASE=2 All

"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).1.msi" : $(MSIBUILD_MODULES) $(MSIBUILD_MODULES_PRECOMPILED)
	-if exist $@ del /f /q $@
	copy /y "$(MSIBUILD_ROOT)\Empty.msi" "$(@:"=).tmp" > NUL
	!if not exist "$(**R:"=).msmcfg" msidb.exe -d "$(@:"=).tmp" -m $**
	msiinfo.exe "$(@:"=).tmp" /nologo /C $(MSIBUILD_CODEPAGE) /T "$(MSIBUILD_PRODUCT_NAME) $(MSIBUILD_VERSION_STR) ($(PLAT))" /J "$(MSIBUILD_PRODUCT_DESC)" /A "$(MSIBUILD_VENDOR_NAME)" /P "$(MSIBUILD_PLAT);$(MSIBUILD_LANGID)" /G $(MSIBUILD_MSI_VERSION_MIN) /V $(MSIBUILD_PACKAGE_GUID) /W 0 /O ""
	!if exist "$(**R:"=).msmcfg" msimsm.exe "$(@:"=).tmp" $** /N "$(**R:"=).msmcfg" /D "$(**R:"=).log" /Sd "$(MSIBUILD_OUTPUT_DIR)" /F
	move /y "$(@:"=).tmp" $@ > NUL

"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.dep" : "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).1.msi"
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	cscript.exe "$(MSIBUILD_ROOT)\MSI.wsf" //Job:MakeDEP //Nologo "$(@:"=).tmp" "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.msi" $**
	move /y "$(@:"=).tmp" $@ > NUL

$(MSIBUILD_MODULES) ::
	cd $(@D)
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_HAS_VERSION=1
	cd "$(MAKEDIR)"

!ELSEIF $(MSIBUILD_PHASE) == 2

######################################################################
# 2nd Phase
# - MSI package population with exact file versions and sizes
######################################################################

!INCLUDE "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.dep"
!INCLUDE "$(MSIBUILD_ROOT)\Version\Version.mak"

All :: \
!IFDEF MSIBUILD_COMPRESS
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.dep" \
!ENDIF
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.msi"
!IFDEF MSIBUILD_COMPRESS
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_PHASE=3 All
!ENDIF

"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.msi" : "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).1.msi"
	-if exist $@ del /f /q $@
	-if exist "$(*:"=).out" del /f /q "$(*:"=).out"
	copy /y "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).1.msi" "$(@:"=).tmp" > NUL
	msifiler.exe -v -h -d "$(@:"=).tmp" >> "$(*:"=).out"
	move /y "$(@:"=).tmp" $@ > NUL

"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.dep" : "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).1.msi"
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	cscript.exe "$(MSIBUILD_ROOT)\MSI.wsf" //Job:MakeDEP //Nologo "$(@:"=).tmp" "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).cab" $**
	move /y "$(@:"=).tmp" $@ > NUL

!ELSEIF $(MSIBUILD_PHASE) == 3

######################################################################
# 3rd Phase
# - MSI package compression
######################################################################

!INCLUDE "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.dep"
!INCLUDE "$(MSIBUILD_ROOT)\Version\Version.mak"

All :: \
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.msi"

"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.ddf" : "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.msi"
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	cscript.exe "$(MSIBUILD_ROOT)\MSI.wsf" //Job:MakeDDF //Nologo "$(@:"=).tmp" $** /O:"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET)" /C:LZX
	move /y "$(@:"=).tmp" $@ > NUL

"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).cab" \
"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).inf" \
"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).rpt" : "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.ddf"
	makecab.exe /F "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.ddf"

"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.msi" : \
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.msi" \
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).cab" \
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).inf"
	-if exist $@ del /f /q $@
	copy /y "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.msi" "$(@:"=).tmp" > NUL
	cscript.exe "$(MSIBUILD_ROOT)\MSI.wsf" //Job:SetCAB //Nologo "$(@:"=).tmp" "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).inf" /E
	msiinfo.exe "$(@:"=).tmp" /nologo /U 4
!IFDEF MANIFESTCERTIFICATETHUMBPRINT
	signtool.exe sign /sha1 "$(MANIFESTCERTIFICATETHUMBPRINT)" /t "$(MANIFESTTIMESTAMPURL)" /d "$(MSIBUILD_PRODUCT_NAME)" /du "$(MSIBUILD_VENDOR_URL)" /q "$(@:"=).tmp"
!ENDIF
	attrib.exe +r "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL

!ELSE

######################################################################
# Cleanup phase
# - Cleaning modules
######################################################################

Clean :: $(MSIBUILD_MODULES) $(MSIBUILD_MODULES_PRECOMPILED)
	cd "$(MSIBUILD_ROOT)\Version"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) Clean
	cd "$(MAKEDIR)"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\PackageGUID.mak"          del /f /q "$(MSIBUILD_OUTPUT_DIR)\PackageGUID.mak"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).1.msi" del /f /q "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).1.msi"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.dep" del /f /q "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.dep"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.msi" del /f /q "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.msi"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.out" del /f /q "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.out"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.dep" del /f /q "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.dep"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.ddf" del /f /q "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.ddf"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.msi" del /f /q "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.msi"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.out" del /f /q "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.out"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).cab"   del /f /q "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).cab"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).inf"   del /f /q "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).inf"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).rpt"   del /f /q "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).rpt"

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
