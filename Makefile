!IFNDEF MSIBUILD_OUTPUT_DIR
!ERROR Spremenljivka MSIBUILD_OUTPUT_DIR ni definirana!
!ENDIF

!IFNDEF MSIBUILD_ROOT
!ERROR Spremenljivka MSIBUILD_ROOT ni definirana!
!ENDIF

!IFNDEF MSIBUILD_TARGET
!ERROR Spremenljivka MSIBUILD_TARGET ni definirana!
!ENDIF

!IFNDEF MSIBUILD_VENDOR_NAME
!ERROR Spremenljivka MSIBUILD_VENDOR_NAME ni definirana!
!ENDIF

!IFNDEF MSIBUILD_VENDOR_URL
!ERROR Spremenljivka MSIBUILD_VENDOR_URL ni definirana!
!ENDIF

!IFNDEF MSIBUILD_PRODUCT_NAME
!ERROR Spremenljivka MSIBUILD_PRODUCT_NAME ni definirana!
!ENDIF

!IFNDEF MSIBUILD_PRODUCT_DESC
!ERROR Spremenljivka MSIBUILD_PRODUCT_DESC ni definirana!
!ENDIF

!IFNDEF MSIBUILD_CODEPAGE
!ERROR Spremenljivka MSIBUILD_CODEPAGE ni definirana!
!ENDIF

!IFNDEF PLAT
PLAT=Win32
!ENDIF

!IFNDEF MSIBUILD_LANGID
!ERROR Spremenljivka MSIBUILD_LANGID ni definirana!
!ENDIF

!IFNDEF MSIBUILD_MSI_VERSION_MIN
!ERROR Spremenljivka MSIBUILD_MSI_VERSION_MIN ni definirana!
!ENDIF

!IFNDEF MSIBUILD_LENGTH_ID
!ERROR Spremenljivka MSIBUILD_LENGTH_ID ni definirana!
!ENDIF

!IFNDEF MSIBUILD_LENGTH_HELP
!ERROR Spremenljivka MSIBUILD_LENGTH_HELP ni definirana!
!ENDIF

!IFNDEF MSI_FAZA
MSI_FAZA=0
!ENDIF

!IFNDEF IMENIK_ASKUPNO
IMENIK_ASKUPNO=C:\Inetpub\spletne-skripte\ASkupno
!ENDIF

!IF "$(PLAT)" == "Win32"
MSI_PLATFORMA2=Intel
!ELSE
MSI_PLATFORMA2=$(PLAT)
!ENDIF

Vse ::

Pocisti ::

!IF $(MSI_FAZA) == 0

######################################################################
# Pripravljalna faza
# - Priprava podatkov o verziji.
######################################################################

Vse :: \
	"$(MSIBUILD_ROOT)\Verzija\Verzija.mak" \
	"$(MSIBUILD_OUTPUT_DIR)\GUIDPaketa.mak"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSI_FAZA=1 Vse

Pocisti ::
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSI_FAZA=100 Pocisti

"$(MSIBUILD_ROOT)\Verzija\Verzija.mak" ::
	cd $(@D)
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) Verzija
	cd "$(MAKEDIR)"
	
"$(MSIBUILD_OUTPUT_DIR)\GUIDPaketa.mak" ::
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	novguid.exe MSI_GUID_PAKETA | sed -e "s/set //i" >> "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL

!ELSEIF $(MSI_FAZA) == 1

######################################################################
# 1. faza
# - Priprava modulov, spiskov odvisnih datotek in zaèetne verzije
#   namestitvenega paketa.
######################################################################

!INCLUDE "$(MSIBUILD_ROOT)\Verzija\Verzija.mak"
!INCLUDE "$(MSIBUILD_OUTPUT_DIR)\GUIDPaketa.mak"

Vse :: \
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).1.msi" \
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.dep"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSI_FAZA=2 Vse

"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).1.msi" : $(MSIBUILD_MODULES) $(MSIBUILD_MODULES_PRECOMPILED)
	-if exist $@ del /f /q $@
	copy /y "$(MSIBUILD_ROOT)\Empty.msi" "$(@:"=).tmp" > NUL
	!if not exist "$(**R:"=).msmcfg" msidb.exe -d "$(@:"=).tmp" -m $**
	msiinfo.exe "$(@:"=).tmp" /nologo /C $(MSIBUILD_CODEPAGE) /T "$(MSIBUILD_PRODUCT_NAME) $(MSI_VERZIJA_STR) ($(PLAT))" /J "$(MSIBUILD_PRODUCT_DESC)" /A "$(MSIBUILD_VENDOR_NAME)" /P "$(MSI_PLATFORMA2);$(MSIBUILD_LANGID)" /G $(MSIBUILD_MSI_VERSION_MIN) /V $(MSI_GUID_PAKETA) /W 0 /O ""
	!if exist "$(**R:"=).msmcfg" msimsm.exe "$(@:"=).tmp" $** /N "$(**R:"=).msmcfg" /D "$(**R:"=).log" /Sd "$(MSIBUILD_OUTPUT_DIR)" /F
	move /y "$(@:"=).tmp" $@ > NUL

"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.dep" : "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).1.msi"
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	cscript.exe "$(IMENIK_ASKUPNO)\MSI.wsf" //Job:NarediDEP //Nologo "$(@:"=).tmp" "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.msi" $**
	move /y "$(@:"=).tmp" $@ > NUL

$(MSIBUILD_MODULES) ::
	cd $(@D)
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSM_IMA_VERZIJO=1
	cd "$(MAKEDIR)"

!ELSEIF $(MSI_FAZA) == 2

######################################################################
# 2. faza
# - Dopolnitev namestitvenega paketa z verzijami in dolžinami datotek.
######################################################################

!INCLUDE "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.dep"
!INCLUDE "$(MSIBUILD_ROOT)\Verzija\Verzija.mak"

Vse :: \
!IFDEF MSIBUILD_COMPRESS
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.dep" \
!ENDIF
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.msi"
!IFDEF MSIBUILD_COMPRESS
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSI_FAZA=3 Vse
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
	cscript.exe "$(IMENIK_ASKUPNO)\MSI.wsf" //Job:NarediDEP //Nologo "$(@:"=).tmp" "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).cab" $**
	move /y "$(@:"=).tmp" $@ > NUL

!ELSEIF $(MSI_FAZA) == 3

######################################################################
# 3. faza
# - Kompresija namestitvenega paketa
######################################################################

!INCLUDE "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.dep"
!INCLUDE "$(MSIBUILD_ROOT)\Verzija\Verzija.mak"

Vse :: \
	"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.msi"

"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).3.ddf" : "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).2.msi"
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	cscript.exe "$(IMENIK_ASKUPNO)\MSI.wsf" //Job:NarediDDF //Nologo "$(@:"=).tmp" $** /O:"$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET)" /K:LZX
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
	cscript.exe "$(IMENIK_ASKUPNO)\MSI.wsf" //Job:NastaviCAB //Nologo "$(@:"=).tmp" "$(MSIBUILD_OUTPUT_DIR)\$(MSIBUILD_TARGET).inf" /V
	msiinfo.exe "$(@:"=).tmp" /nologo /U 4
!IFDEF MANIFESTCERTIFICATETHUMBPRINT
	signcode.exe -i "$(MSIBUILD_VENDOR_URL)" -sha1 "$(MANIFESTCERTIFICATETHUMBPRINT)" -t "$(MANIFESTTIMESTAMPURL)" -n "$(MSIBUILD_PRODUCT_NAME)" "$(@:"=).tmp" > NUL
!ENDIF
	attrib.exe +r "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL

!ELSE

######################################################################
# Èistilna faza faza
# - Èišèenje modulov
######################################################################

Pocisti :: $(MSIBUILD_MODULES) $(MSIBUILD_MODULES_PRECOMPILED)
	cd "$(MSIBUILD_ROOT)\Verzija"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) Pocisti
	cd "$(MAKEDIR)"
	-if exist "$(MSIBUILD_OUTPUT_DIR)\GUIDPaketa.mak"    del /f /q "$(MSIBUILD_OUTPUT_DIR)\GUIDPaketa.mak"
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
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) Pocisti
	cd "$(MAKEDIR)"

!IFDEF MSIBUILD_MODULES_PRECOMPILED
$(MSIBUILD_MODULES_PRECOMPILED) ::
	cd $(@D)
	-if exist "*.log" del /f /q "*.log"
	cd "$(MAKEDIR)"
!ENDIF

!ENDIF
