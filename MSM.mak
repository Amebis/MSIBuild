Vse :: "$(LANG).$(CFG).$(PLAT).msm"

Pocisti ::
	-if exist "$(LANG).$(CFG).$(PLAT).*-1.idt"      del /f /q "$(LANG).$(CFG).$(PLAT).*-1.idt"
	-if exist "$(LANG).$(CFG).$(PLAT).Binary-1\*.*" del /f /q "$(LANG).$(CFG).$(PLAT).Binary-1\*.*"
	-if exist "$(LANG).$(CFG).$(PLAT).Icon-1\*.*"   del /f /q "$(LANG).$(CFG).$(PLAT).Icon-1\*.*"
!IFDEF MSIBUILD_IS_LOCALIZEABLE
	-if exist "$(LANG).$(CFG).$(PLAT).*-2.idt"      del /f /q "$(LANG).$(CFG).$(PLAT).*-2.idt"
	-if exist "$(LANG).$(CFG).$(PLAT).*-2.idtx"     del /f /q "$(LANG).$(CFG).$(PLAT).*-2.idtx"
	-if exist "$(LANG).$(CFG).$(PLAT).Binary-2\*.*" del /f /q "$(LANG).$(CFG).$(PLAT).Binary-2\*.*"
	-if exist "$(LANG).$(CFG).$(PLAT).Icon-2\*.*"   del /f /q "$(LANG).$(CFG).$(PLAT).Icon-2\*.*"
!ENDIF
	-if exist "$(LANG).$(CFG).$(PLAT).lst"          del /f /q "$(LANG).$(CFG).$(PLAT).lst"
	-if exist "$(LANG).$(CFG).$(PLAT).msm"          del /f /q "$(LANG).$(CFG).$(PLAT).msm"


######################################################################
# Izdelava modula
######################################################################

!IFDEF MSIBUILD_IS_LOCALIZEABLE

######################################################################
# Ker orodje msidb ne zna pravilno prilepiti v modul tabel iz datotek
# IDL, naredimo loèeno dva modula in jih nato zlepimo.

"$(LANG).$(CFG).$(PLAT).msm" : $(LANG).$(CFG).$(PLAT).*-1.idt $(LANG).$(CFG).$(PLAT).*-2.idt
	-if exist $@ del /f /q $@
	-if exist "$(@:"=)-1.tmp" del /f /q "$(@:"=)-1.tmp"
	-if exist "$(@:"=)-2.tmp" del /f /q "$(@:"=)-2.tmp"
	msidb.exe -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(LANG).$(CFG).$(PLAT).*-1.idt
	msidb.exe -c -d "$(@:"=)-2.tmp" -f "$(MAKEDIR)" -i $(LANG).$(CFG).$(PLAT).*-2.idt
	msidb.exe -d "$(@:"=)-1.tmp" -m "$(@:"=)-2.tmp"
	del /f /q "$(@:"=)-2.tmp"
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ELSE

######################################################################
# Modul ni lokaliziran, zato je njegova izdelava trivialna.

"$(LANG).$(CFG).$(PLAT).msm" : $(LANG).$(CFG).$(PLAT).*-1.idt
	-if exist $@ del /f /q $@
	-if exist "$(@:"=)-1.tmp" del /f /q "$(@:"=)-1.tmp"
	msidb.exe -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(LANG).$(CFG).$(PLAT).*-1.idt
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ENDIF


######################################################################
# Odvisnosti
######################################################################

"$(LANG).$(CFG).$(PLAT).Binary-1.idt" : $(LANG).$(CFG).$(PLAT).Binary-1\*.*

"$(LANG).$(CFG).$(PLAT).Binary-2.idt" : $(LANG).$(CFG).$(PLAT).Binary-2\*.*

"$(LANG).$(CFG).$(PLAT).Icon-1.idt" : $(LANG).$(CFG).$(PLAT).Icon-1\*.*

"$(LANG).$(CFG).$(PLAT).Icon-2.idt" : $(LANG).$(CFG).$(PLAT).Icon-2\*.*


######################################################################
# Ustvarjanje imenikov
######################################################################

"$(LANG).$(CFG).$(PLAT).Binary-1" :
	if not exist $@ md $@

"$(LANG).$(CFG).$(PLAT).Icon-1" :
	if not exist $@ md $@

!IFDEF MSIBUILD_IS_LOCALIZEABLE

"$(LANG).$(CFG).$(PLAT).Binary-2" :
	if not exist $@ md $@

"$(LANG).$(CFG).$(PLAT).Icon-2" :
	if not exist $@ md $@

!ENDIF