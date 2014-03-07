Vse :: "$(JEZIK).$(CFG).$(PLAT).msm"

Pocisti ::
	-if exist "$(JEZIK).$(CFG).$(PLAT).*-1.idt"      del /f /q "$(JEZIK).$(CFG).$(PLAT).*-1.idt"
	-if exist "$(JEZIK).$(CFG).$(PLAT).Binary-1\*.*" del /f /q "$(JEZIK).$(CFG).$(PLAT).Binary-1\*.*"
	-if exist "$(JEZIK).$(CFG).$(PLAT).Icon-1\*.*"   del /f /q "$(JEZIK).$(CFG).$(PLAT).Icon-1\*.*"
!IFDEF MSM_IMA_LOKALIZACIJO
	-if exist "$(JEZIK).$(CFG).$(PLAT).*-2.idt"      del /f /q "$(JEZIK).$(CFG).$(PLAT).*-2.idt"
	-if exist "$(JEZIK).$(CFG).$(PLAT).*-2.idtx"     del /f /q "$(JEZIK).$(CFG).$(PLAT).*-2.idtx"
	-if exist "$(JEZIK).$(CFG).$(PLAT).Binary-2\*.*" del /f /q "$(JEZIK).$(CFG).$(PLAT).Binary-2\*.*"
	-if exist "$(JEZIK).$(CFG).$(PLAT).Icon-2\*.*"   del /f /q "$(JEZIK).$(CFG).$(PLAT).Icon-2\*.*"
!ENDIF
	-if exist "$(JEZIK).$(CFG).$(PLAT).lst"          del /f /q "$(JEZIK).$(CFG).$(PLAT).lst"
	-if exist "$(JEZIK).$(CFG).$(PLAT).msm"          del /f /q "$(JEZIK).$(CFG).$(PLAT).msm"


######################################################################
# Izdelava modula
######################################################################

!IFDEF MSM_IMA_LOKALIZACIJO

######################################################################
# Ker orodje msidb ne zna pravilno prilepiti v modul tabel iz datotek
# IDL, naredimo loèeno dva modula in jih nato zlepimo.

"$(JEZIK).$(CFG).$(PLAT).msm" : $(JEZIK).$(CFG).$(PLAT).*-1.idt $(JEZIK).$(CFG).$(PLAT).*-2.idt
	-if exist $@ del /f /q $@
	-if exist "$(@:"=)-1.tmp" del /f /q "$(@:"=)-1.tmp"
	-if exist "$(@:"=)-2.tmp" del /f /q "$(@:"=)-2.tmp"
	msidb.exe -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(JEZIK).$(CFG).$(PLAT).*-1.idt
	msidb.exe -c -d "$(@:"=)-2.tmp" -f "$(MAKEDIR)" -i $(JEZIK).$(CFG).$(PLAT).*-2.idt
	msidb.exe -d "$(@:"=)-1.tmp" -m "$(@:"=)-2.tmp"
	del /f /q "$(@:"=)-2.tmp"
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ELSE

######################################################################
# Modul ni lokaliziran, zato je njegova izdelava trivialna.

"$(JEZIK).$(CFG).$(PLAT).msm" : $(JEZIK).$(CFG).$(PLAT).*-1.idt
	-if exist $@ del /f /q $@
	-if exist "$(@:"=)-1.tmp" del /f /q "$(@:"=)-1.tmp"
	msidb.exe -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(JEZIK).$(CFG).$(PLAT).*-1.idt
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ENDIF


######################################################################
# Odvisnosti
######################################################################

"$(JEZIK).$(CFG).$(PLAT).Binary-1.idt" : $(JEZIK).$(CFG).$(PLAT).Binary-1\*.*

"$(JEZIK).$(CFG).$(PLAT).Binary-2.idt" : $(JEZIK).$(CFG).$(PLAT).Binary-2\*.*

"$(JEZIK).$(CFG).$(PLAT).Icon-1.idt" : $(JEZIK).$(CFG).$(PLAT).Icon-1\*.*

"$(JEZIK).$(CFG).$(PLAT).Icon-2.idt" : $(JEZIK).$(CFG).$(PLAT).Icon-2\*.*


######################################################################
# Ustvarjanje imenikov
######################################################################

"$(JEZIK).$(CFG).$(PLAT).Binary-1" :
	if not exist $@ md $@

"$(JEZIK).$(CFG).$(PLAT).Icon-1" :
	if not exist $@ md $@

!IFDEF MSM_IMA_LOKALIZACIJO

"$(JEZIK).$(CFG).$(PLAT).Binary-2" :
	if not exist $@ md $@

"$(JEZIK).$(CFG).$(PLAT).Icon-2" :
	if not exist $@ md $@

!ENDIF