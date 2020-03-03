#
#    Copyright 1991-2020 Amebis
#    Copyright 2016 GÉANT
#
#    This file is part of MSIBuild.
#
#    MSIBuild is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    MSIBuild is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with MSIBuild. If not, see <http://www.gnu.org/licenses/>.
#

!IFNDEF MSIBUILD_MSM_BASE
MSIBUILD_MSM_BASE=$(LANG).$(PLAT).$(CFG)
!ENDIF

All :: "$(PKG)$(MSIBUILD_MSM_BASE).msm"

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

"$(PKG)$(MSIBUILD_MSM_BASE).msm" : $(PKG)$(MSIBUILD_MSM_BASE).*-1.idt $(PKG)$(MSIBUILD_MSM_BASE).*-2.idt
	msidb.exe -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(PKG)$(MSIBUILD_MSM_BASE).*-1.idt
	msidb.exe -c -d "$(@:"=)-2.tmp" -f "$(MAKEDIR)" -i $(PKG)$(MSIBUILD_MSM_BASE).*-2.idt
	msidb.exe    -d "$(@:"=)-1.tmp" -m "$(@:"=)-2.tmp"
	del /f /q "$(@:"=)-2.tmp"
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ELSE

######################################################################
# Module is not localizeable => the compilation is trivial.

"$(PKG)$(MSIBUILD_MSM_BASE).msm" : $(PKG)$(MSIBUILD_MSM_BASE).*-1.idt
	msidb.exe -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(PKG)$(MSIBUILD_MSM_BASE).*-1.idt
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ENDIF


######################################################################
# Dependencies
######################################################################

"$(PKG)$(MSIBUILD_MSM_BASE).Binary-1.idt" : $(PKG)$(MSIBUILD_MSM_BASE).Binary-1\*.*

"$(PKG)$(MSIBUILD_MSM_BASE).Binary-2.idt" : $(PKG)$(MSIBUILD_MSM_BASE).Binary-2\*.*

"$(PKG)$(MSIBUILD_MSM_BASE).Icon-1.idt" : $(PKG)$(MSIBUILD_MSM_BASE).Icon-1\*.*

"$(PKG)$(MSIBUILD_MSM_BASE).Icon-2.idt" : $(PKG)$(MSIBUILD_MSM_BASE).Icon-2\*.*


######################################################################
# Folder creation
######################################################################

"$(PKG)$(MSIBUILD_MSM_BASE).Binary-1" :
	if not exist $@ md $@

"$(PKG)$(MSIBUILD_MSM_BASE).Icon-1" :
	if not exist $@ md $@

!IFDEF MSIBUILD_IS_LOCALIZEABLE

"$(PKG)$(MSIBUILD_MSM_BASE).Binary-2" :
	if not exist $@ md $@

"$(PKG)$(MSIBUILD_MSM_BASE).Icon-2" :
	if not exist $@ md $@

!ENDIF
