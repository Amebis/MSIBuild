!IFNDEF MSI_IMENIK_CILJ
!ERROR Spremenljivka MSI_IMENIK_CILJ ni definirana!
!ENDIF

!IFNDEF MSI_IMENIK_MSM
!ERROR Spremenljivka MSI_IMENIK_MSM ni definirana!
!ENDIF

!IFNDEF MSI_CILJ
!ERROR Spremenljivka MSI_CILJ ni definirana!
!ENDIF

!IFNDEF MSI_AVTOR
!ERROR Spremenljivka MSI_AVTOR ni definirana!
!ENDIF

!IFNDEF MSI_URL_AVTORJA
!ERROR Spremenljivka MSI_URL_AVTORJA ni definirana!
!ENDIF

!IFNDEF MSI_IME_IZDELKA
!ERROR Spremenljivka MSI_IME_IZDELKA ni definirana!
!ENDIF

!IFNDEF MSI_OPIS_IZDELKA
!ERROR Spremenljivka MSI_OPIS_IZDELKA ni definirana!
!ENDIF

!IFNDEF MSI_KODNA_TABELA
!ERROR Spremenljivka MSI_KODNA_TABELA ni definirana!
!ENDIF

!IFNDEF MSI_PLATFORMA
MSI_PLATFORMA=Win32
!ENDIF

!IFNDEF MSI_KODA_JEZIKA
!ERROR Spremenljivka MSI_KODA_JEZIKA ni definirana!
!ENDIF

!IFNDEF MSI_VERZIJA
!ERROR Spremenljivka MSI_VERZIJA ni definirana!
!ENDIF

!IFNDEF MSI_TIP_ID
!ERROR Spremenljivka MSI_TIP_ID ni definirana!
!ENDIF

!IFNDEF MSI_TIP_POMOC
!ERROR Spremenljivka MSI_TIP_POMOC ni definirana!
!ENDIF

!IFNDEF MSI_FAZA
MSI_FAZA=0
!ENDIF

!IFNDEF IMENIK_ASKUPNO
IMENIK_ASKUPNO=C:\Inetpub\spletne-skripte\ASkupno
!ENDIF

!IF "$(MSI_PLATFORMA)" == "Win32"
MSI_PLATFORMA2=Intel
!ELSE
MSI_PLATFORMA2=$(MSI_PLATFORMA)
!ENDIF

Vse ::

Pocisti ::

!IF $(MSI_FAZA) == 0

######################################################################
# Pripravljalna faza
# - Priprava podatkov o verziji.
######################################################################

Vse :: \
	"$(MSI_IMENIK_MSM)\Verzija\Verzija.mak" \
	"$(MSI_IMENIK_CILJ)\GUIDPaketa.mak"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSI_FAZA=1 Vse

Pocisti ::
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSI_FAZA=100 Pocisti

"$(MSI_IMENIK_MSM)\Verzija\Verzija.mak" ::
	cd $(@D)
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) Verzija
	cd "$(MAKEDIR)"
	
"$(MSI_IMENIK_CILJ)\GUIDPaketa.mak" ::
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

!INCLUDE "$(MSI_IMENIK_MSM)\Verzija\Verzija.mak"
!INCLUDE "$(MSI_IMENIK_CILJ)\GUIDPaketa.mak"

Vse :: \
	"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).1.msi" \
	"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.dep"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSI_FAZA=2 Vse

"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).1.msi" : $(MSI_MODULI) $(MSI_MODULI_DODATNI)
	-if exist $@ del /f /q $@
	copy /y "$(MSI_IMENIK_MSM)\Empty.msi" "$(@:"=).tmp" > NUL
	!if not exist "$(**R:"=).msmcfg" msidb.exe -d "$(@:"=).tmp" -m $**
	msiinfo.exe "$(@:"=).tmp" /nologo /C $(MSI_KODNA_TABELA) /T "$(MSI_IME_IZDELKA) $(MSI_VERZIJA_STR) ($(MSI_PLATFORMA))" /J "$(MSI_OPIS_IZDELKA)" /A "$(MSI_AVTOR)" /P "$(MSI_PLATFORMA2);$(MSI_KODA_JEZIKA)" /G $(MSI_VERZIJA) /V $(MSI_GUID_PAKETA) /W 0 /O ""
	!if exist "$(**R:"=).msmcfg" msimsm.exe "$(@:"=).tmp" $** /N "$(**R:"=).msmcfg" /D "$(**R:"=).log" /Sd "$(MSI_IMENIK_CILJ)" /F
	move /y "$(@:"=).tmp" $@ > NUL

"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.dep" : "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).1.msi"
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	cscript.exe "$(IMENIK_ASKUPNO)\MSI.wsf" //Job:NarediDEP //Nologo "$(@:"=).tmp" "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.msi" $**
	move /y "$(@:"=).tmp" $@ > NUL

$(MSI_MODULI) ::
	cd $(@D)
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSM_IMA_VERZIJO=1
	cd "$(MAKEDIR)"

!ELSEIF $(MSI_FAZA) == 2

######################################################################
# 2. faza
# - Dopolnitev namestitvenega paketa z verzijami in dolžinami datotek.
######################################################################

!INCLUDE "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.dep"
!INCLUDE "$(MSI_IMENIK_MSM)\Verzija\Verzija.mak"

Vse :: \
!IFDEF MSI_STISNI
	"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.dep" \
!ENDIF
	"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.msi"
!IFDEF MSI_STISNI
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSI_FAZA=3 Vse
!ENDIF

"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.msi" : "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).1.msi"
	-if exist $@ del /f /q $@
	-if exist "$(*:"=).out" del /f /q "$(*:"=).out"
	copy /y "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).1.msi" "$(@:"=).tmp" > NUL
	msifiler.exe -v -h -d "$(@:"=).tmp" >> "$(*:"=).out"
	move /y "$(@:"=).tmp" $@ > NUL

"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.dep" : "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).1.msi"
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	cscript.exe "$(IMENIK_ASKUPNO)\MSI.wsf" //Job:NarediDEP //Nologo "$(@:"=).tmp" "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).cab" $**
	move /y "$(@:"=).tmp" $@ > NUL

!ELSEIF $(MSI_FAZA) == 3

######################################################################
# 3. faza
# - Kompresija namestitvenega paketa
######################################################################

!INCLUDE "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.dep"
!INCLUDE "$(MSI_IMENIK_MSM)\Verzija\Verzija.mak"

Vse :: \
	"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.msi"

"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.ddf" : "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.msi"
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	cscript.exe "$(IMENIK_ASKUPNO)\MSI.wsf" //Job:NarediDDF //Nologo "$(@:"=).tmp" $** /O:"$(MSI_IMENIK_CILJ)\$(MSI_CILJ)" /K:LZX
	move /y "$(@:"=).tmp" $@ > NUL

"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).cab" \
"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).inf" \
"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).rpt" : "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.ddf"
	makecab.exe /F "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.ddf"

"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.msi" : \
	"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.msi" \
	"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).cab" \
	"$(MSI_IMENIK_CILJ)\$(MSI_CILJ).inf"
	-if exist $@ del /f /q $@
	copy /y "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.msi" "$(@:"=).tmp" > NUL
	cscript.exe "$(IMENIK_ASKUPNO)\MSI.wsf" //Job:NastaviCAB //Nologo "$(@:"=).tmp" "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).inf" /V
	msiinfo.exe "$(@:"=).tmp" /nologo /U 4
!IFDEF MANIFESTCERTIFICATETHUMBPRINT
	signcode.exe -i "$(MSI_URL_AVTORJA)" -sha1 "$(MANIFESTCERTIFICATETHUMBPRINT)" -t "$(MANIFESTTIMESTAMPURL)" -n "$(MSI_IME_IZDELKA)" "$(@:"=).tmp" > NUL
!ENDIF
	attrib.exe +r "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL

!ELSE

######################################################################
# Èistilna faza faza
# - Èišèenje modulov
######################################################################

Pocisti :: $(MSI_MODULI) $(MSI_MODULI_DODATNI)
	cd "$(MSI_IMENIK_MSM)\Verzija"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) Pocisti
	cd "$(MAKEDIR)"
	-if exist "$(MSI_IMENIK_CILJ)\GUIDPaketa.mak"    del /f /q "$(MSI_IMENIK_CILJ)\GUIDPaketa.mak"
	-if exist "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).1.msi" del /f /q "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).1.msi"
	-if exist "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.dep" del /f /q "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.dep"
	-if exist "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.msi" del /f /q "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.msi"
	-if exist "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.out" del /f /q "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).2.out"
	-if exist "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.dep" del /f /q "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.dep"
	-if exist "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.ddf" del /f /q "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.ddf"
	-if exist "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.msi" del /f /q "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.msi"
	-if exist "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.out" del /f /q "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).3.out"
	-if exist "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).cab"   del /f /q "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).cab"
	-if exist "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).inf"   del /f /q "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).inf"
	-if exist "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).rpt"   del /f /q "$(MSI_IMENIK_CILJ)\$(MSI_CILJ).rpt"

$(MSI_MODULI) ::
	cd $(@D)
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) Pocisti
	cd "$(MAKEDIR)"

!IFDEF MSI_MODULI_DODATNI
$(MSI_MODULI_DODATNI) ::
	cd $(@D)
	-if exist "*.log" del /f /q "*.log"
	cd "$(MAKEDIR)"
!ENDIF

!ENDIF
