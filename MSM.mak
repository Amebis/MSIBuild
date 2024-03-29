#    ​​​​SPDX-License-Identifier: GPL-3.0-or-later
#    Copyright © 1991-2022 Amebis
#    Copyright © 2016 GÉANT

All :: "$(PKG)$(LANG).$(PLAT).$(CFG).msm"

Clean ::
	-if exist      "$(PKG)*-1.idt"        del /f /q "$(PKG)*-1.idt"
	-for /d %d IN ("$(PKG)*.Binary-1") do @rd /s /q "%d"
	-for /d %d IN ("$(PKG)*.Icon-1"  ) do @rd /s /q "%d"
!IFDEF MSIBUILD_IS_LOCALIZEABLE
	-if exist      "$(PKG)*-2.idt"        del /f /q "$(PKG)*-2.idt"
	-if exist      "$(PKG)*-2.idtx"       del /f /q "$(PKG)*-2.idtx"
	-for /d %d IN ("$(PKG)*.Binary-2") do @rd /s /q "%d"
	-for /d %d IN ("$(PKG)*.Icon-2"  ) do @rd /s /q "%d"
!ENDIF
	-if exist      "$(PKG)*.lst"          del /f /q "$(PKG)*.lst"
	-if exist      "$(PKG)*.msm"          del /f /q "$(PKG)*.msm"


######################################################################
# Module compilation
######################################################################

!IFDEF MSIBUILD_IS_LOCALIZEABLE

######################################################################
# Since msidb utility doesn't append tables from IDL files to MSM
# module correctly, create separate MSM modules and merge.

"$(PKG)$(LANG).$(PLAT).$(CFG).msm" : $(PKG)$(LANG).$(PLAT).$(CFG).*-1.idt $(PKG)$(LANG).$(PLAT).$(CFG).*-2.idt
	"$(WINDOWSSDKVERBINPATH)x86\msidb.exe" -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(PKG)$(LANG).$(PLAT).$(CFG).*-1.idt
	"$(WINDOWSSDKVERBINPATH)x86\msidb.exe" -c -d "$(@:"=)-2.tmp" -f "$(MAKEDIR)" -i $(PKG)$(LANG).$(PLAT).$(CFG).*-2.idt
	"$(WINDOWSSDKVERBINPATH)x86\msidb.exe"    -d "$(@:"=)-1.tmp" -m "$(@:"=)-2.tmp"
	del /f /q "$(@:"=)-2.tmp"
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ELSE

######################################################################
# Module is not localizeable => the compilation is trivial.

"$(PKG)$(LANG).$(PLAT).$(CFG).msm" : $(PKG)$(LANG).$(PLAT).$(CFG).*-1.idt
	"$(WINDOWSSDKVERBINPATH)x86\msidb.exe" -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(PKG)$(LANG).$(PLAT).$(CFG).*-1.idt
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ENDIF


######################################################################
# Dependencies
######################################################################

"$(PKG)$(LANG).$(PLAT).$(CFG).Binary-1.idt" : $(PKG)$(LANG).$(PLAT).$(CFG).Binary-1\*.*

"$(PKG)$(LANG).$(PLAT).$(CFG).Binary-2.idt" : $(PKG)$(LANG).$(PLAT).$(CFG).Binary-2\*.*

"$(PKG)$(LANG).$(PLAT).$(CFG).Icon-1.idt" : $(PKG)$(LANG).$(PLAT).$(CFG).Icon-1\*.*

"$(PKG)$(LANG).$(PLAT).$(CFG).Icon-2.idt" : $(PKG)$(LANG).$(PLAT).$(CFG).Icon-2\*.*


######################################################################
# Folder creation
######################################################################

"$(PKG)$(LANG).$(PLAT).$(CFG).Binary-1" :
	if not exist $@ md $@

"$(PKG)$(LANG).$(PLAT).$(CFG).Icon-1" :
	if not exist $@ md $@

"$(PKG)$(LANG).$(PLAT).$(CFG).Binary-2" :
	if not exist $@ md $@

"$(PKG)$(LANG).$(PLAT).$(CFG).Icon-2" :
	if not exist $@ md $@
