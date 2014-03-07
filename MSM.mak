All :: "$(LANG).$(PLAT).$(CFG).msm"

Clean ::
	-if exist "$(LANG).$(PLAT).$(CFG).*-1.idt"      del /f /q "$(LANG).$(PLAT).$(CFG).*-1.idt"
	-if exist "$(LANG).$(PLAT).$(CFG).Binary-1\*.*" del /f /q "$(LANG).$(PLAT).$(CFG).Binary-1\*.*"
	-if exist "$(LANG).$(PLAT).$(CFG).Icon-1\*.*"   del /f /q "$(LANG).$(PLAT).$(CFG).Icon-1\*.*"
!IFDEF MSIBUILD_IS_LOCALIZEABLE
	-if exist "$(LANG).$(PLAT).$(CFG).*-2.idt"      del /f /q "$(LANG).$(PLAT).$(CFG).*-2.idt"
	-if exist "$(LANG).$(PLAT).$(CFG).*-2.idtx"     del /f /q "$(LANG).$(PLAT).$(CFG).*-2.idtx"
	-if exist "$(LANG).$(PLAT).$(CFG).Binary-2\*.*" del /f /q "$(LANG).$(PLAT).$(CFG).Binary-2\*.*"
	-if exist "$(LANG).$(PLAT).$(CFG).Icon-2\*.*"   del /f /q "$(LANG).$(PLAT).$(CFG).Icon-2\*.*"
!ENDIF
	-if exist "$(LANG).$(PLAT).$(CFG).lst"          del /f /q "$(LANG).$(PLAT).$(CFG).lst"
	-if exist "$(LANG).$(PLAT).$(CFG).msm"          del /f /q "$(LANG).$(PLAT).$(CFG).msm"


######################################################################
# Module compilation
######################################################################

!IFDEF MSIBUILD_IS_LOCALIZEABLE

######################################################################
# Since msidb utility doesn't append tables from IDL files to MSM
# module correctly, create separate MSM modules and merge.

"$(LANG).$(PLAT).$(CFG).msm" : $(LANG).$(PLAT).$(CFG).*-1.idt $(LANG).$(PLAT).$(CFG).*-2.idt
	-if exist $@ del /f /q $@
	-if exist "$(@:"=)-1.tmp" del /f /q "$(@:"=)-1.tmp"
	-if exist "$(@:"=)-2.tmp" del /f /q "$(@:"=)-2.tmp"
	msidb.exe -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(LANG).$(PLAT).$(CFG).*-1.idt
	msidb.exe -c -d "$(@:"=)-2.tmp" -f "$(MAKEDIR)" -i $(LANG).$(PLAT).$(CFG).*-2.idt
	msidb.exe -d "$(@:"=)-1.tmp" -m "$(@:"=)-2.tmp"
	del /f /q "$(@:"=)-2.tmp"
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ELSE

######################################################################
# Module is not localizeable => the compilation is trivial.

"$(LANG).$(PLAT).$(CFG).msm" : $(LANG).$(PLAT).$(CFG).*-1.idt
	-if exist $@ del /f /q $@
	-if exist "$(@:"=)-1.tmp" del /f /q "$(@:"=)-1.tmp"
	msidb.exe -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(LANG).$(PLAT).$(CFG).*-1.idt
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ENDIF


######################################################################
# Dependencies
######################################################################

"$(LANG).$(PLAT).$(CFG).Binary-1.idt" : $(LANG).$(PLAT).$(CFG).Binary-1\*.*

"$(LANG).$(PLAT).$(CFG).Binary-2.idt" : $(LANG).$(PLAT).$(CFG).Binary-2\*.*

"$(LANG).$(PLAT).$(CFG).Icon-1.idt" : $(LANG).$(PLAT).$(CFG).Icon-1\*.*

"$(LANG).$(PLAT).$(CFG).Icon-2.idt" : $(LANG).$(PLAT).$(CFG).Icon-2\*.*


######################################################################
# Folder creation
######################################################################

"$(LANG).$(PLAT).$(CFG).Binary-1" :
	if not exist $@ md $@

"$(LANG).$(PLAT).$(CFG).Icon-1" :
	if not exist $@ md $@

!IFDEF MSIBUILD_IS_LOCALIZEABLE

"$(LANG).$(PLAT).$(CFG).Binary-2" :
	if not exist $@ md $@

"$(LANG).$(PLAT).$(CFG).Icon-2" :
	if not exist $@ md $@

!ENDIF
