#
#    MSIBuild, Copyright (C) Amebis 2015
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

!IFNDEF MSIBUILD_MSM_BASE
MSIBUILD_MSM_BASE=$(LANG).$(PLAT).$(CFG)
!ENDIF

All :: "$(MSIBUILD_MSM_BASE).msm"

Clean ::
	-if exist "$(MSIBUILD_MSM_BASE).*-1.idt"      del /f /q "$(MSIBUILD_MSM_BASE).*-1.idt"
	-if exist "$(MSIBUILD_MSM_BASE).Binary-1\*.*" del /f /q "$(MSIBUILD_MSM_BASE).Binary-1\*.*"
	-if exist "$(MSIBUILD_MSM_BASE).Icon-1\*.*"   del /f /q "$(MSIBUILD_MSM_BASE).Icon-1\*.*"
!IFDEF MSIBUILD_IS_LOCALIZEABLE
	-if exist "$(MSIBUILD_MSM_BASE).*-2.idt"      del /f /q "$(MSIBUILD_MSM_BASE).*-2.idt"
	-if exist "$(MSIBUILD_MSM_BASE).*-2.idtx"     del /f /q "$(MSIBUILD_MSM_BASE).*-2.idtx"
	-if exist "$(MSIBUILD_MSM_BASE).Binary-2\*.*" del /f /q "$(MSIBUILD_MSM_BASE).Binary-2\*.*"
	-if exist "$(MSIBUILD_MSM_BASE).Icon-2\*.*"   del /f /q "$(MSIBUILD_MSM_BASE).Icon-2\*.*"
!ENDIF
	-if exist "$(MSIBUILD_MSM_BASE).lst"          del /f /q "$(MSIBUILD_MSM_BASE).lst"
	-if exist "$(MSIBUILD_MSM_BASE).msm"          del /f /q "$(MSIBUILD_MSM_BASE).msm"


######################################################################
# Module compilation
######################################################################

!IFDEF MSIBUILD_IS_LOCALIZEABLE

######################################################################
# Since msidb utility doesn't append tables from IDL files to MSM
# module correctly, create separate MSM modules and merge.

"$(MSIBUILD_MSM_BASE).msm" : $(MSIBUILD_MSM_BASE).*-1.idt $(MSIBUILD_MSM_BASE).*-2.idt
	-if exist $@ del /f /q $@
	-if exist "$(@:"=)-1.tmp" del /f /q "$(@:"=)-1.tmp"
	-if exist "$(@:"=)-2.tmp" del /f /q "$(@:"=)-2.tmp"
	msidb.exe -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(MSIBUILD_MSM_BASE).*-1.idt
	msidb.exe -c -d "$(@:"=)-2.tmp" -f "$(MAKEDIR)" -i $(MSIBUILD_MSM_BASE).*-2.idt
	msidb.exe -d "$(@:"=)-1.tmp" -m "$(@:"=)-2.tmp"
	del /f /q "$(@:"=)-2.tmp"
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ELSE

######################################################################
# Module is not localizeable => the compilation is trivial.

"$(MSIBUILD_MSM_BASE).msm" : $(MSIBUILD_MSM_BASE).*-1.idt
	-if exist $@ del /f /q $@
	-if exist "$(@:"=)-1.tmp" del /f /q "$(@:"=)-1.tmp"
	msidb.exe -c -d "$(@:"=)-1.tmp" -f "$(MAKEDIR)" -i $(MSIBUILD_MSM_BASE).*-1.idt
	move /y "$(@:"=)-1.tmp" $@ > NUL

!ENDIF


######################################################################
# Dependencies
######################################################################

"$(MSIBUILD_MSM_BASE).Binary-1.idt" : $(MSIBUILD_MSM_BASE).Binary-1\*.*

"$(MSIBUILD_MSM_BASE).Binary-2.idt" : $(MSIBUILD_MSM_BASE).Binary-2\*.*

"$(MSIBUILD_MSM_BASE).Icon-1.idt" : $(MSIBUILD_MSM_BASE).Icon-1\*.*

"$(MSIBUILD_MSM_BASE).Icon-2.idt" : $(MSIBUILD_MSM_BASE).Icon-2\*.*


######################################################################
# Folder creation
######################################################################

"$(MSIBUILD_MSM_BASE).Binary-1" :
	if not exist $@ md $@

"$(MSIBUILD_MSM_BASE).Icon-1" :
	if not exist $@ md $@

!IFDEF MSIBUILD_IS_LOCALIZEABLE

"$(MSIBUILD_MSM_BASE).Binary-2" :
	if not exist $@ md $@

"$(MSIBUILD_MSM_BASE).Icon-2" :
	if not exist $@ md $@

!ENDIF
