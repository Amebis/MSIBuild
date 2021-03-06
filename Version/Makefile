#
#    Copyright © 1991-2021 Amebis
#    Copyright © 2016 GÉANT
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

!INCLUDE "..\..\..\include\$(PKG)MSIBuildCfg.mak"

!IFNDEF MSIBUILD_VERSION_FILE
!ERROR Parameter MSIBUILD_VERSION_FILE is undefined.
!ENDIF

PKG_ID = $(PKG:.=_)
PKG_ID = $(PKG_ID:-=_)
PKG_ID = $(PKG_ID:"=)

All ::

Clean ::
	-if exist "$(PKG)Version.mak" del /f /q "$(PKG)Version.mak"

!IFNDEF MSIBUILD_HAS_VERSION

######################################################################
# 1st Phase
# - Parse C++ version file and create NMake friendly variant.
######################################################################

All :: "$(PKG)Version.mak"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_HAS_VERSION=1

Version :: "$(PKG)Version.mak"

"$(PKG)Version.mak" : "$(MSIBUILD_VERSION_FILE)"
	grep.exe -e "#define[[:space:]]*.*_VERSION[[:space:]]*0x"           "$(MSIBUILD_VERSION_FILE)" | sed.exe -e "s/.*0x\(.*\)/MSIBUILD_VERSION_INT=\1/g"            >  "$(@:"=).tmp"
	grep.exe -e "#define[[:space:]]*.*_VERSION_STR[[:space:]]"          "$(MSIBUILD_VERSION_FILE)" | sed.exe -e "s/[^\"]*\"\([^\"]*\)\"/MSIBUILD_VERSION_STR=\1/g"  >> "$(@:"=).tmp"
	grep.exe -e "#define[[:space:]]*.*_VERSION_INST[[:space:]]"         "$(MSIBUILD_VERSION_FILE)" | sed.exe -e "s/[^\"]*\"\([^\"]*\)\"/MSIBUILD_VERSION_INST=\1/g" >> "$(@:"=).tmp"
	grep.exe -e "#define[[:space:]]*.*$(PKG_ID)VERSION_GUID[[:space:]]" "$(MSIBUILD_VERSION_FILE)" | sed.exe -e "s/[^\"]*\"\([^\"]*\)\"/MSIBUILD_VERSION_GUID=\1/g" >> "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL

!ELSE

######################################################################
# 2nd Phase
# - Version file is ready, prepare the rest and compile module.
######################################################################

!INCLUDE "$(PKG)Version.mak"

!IFNDEF MSIBUILD_UPGRADE_GUID
!ERROR Parameter MSIBUILD_UPGRADE_GUID is undefined.
!ENDIF

!IFNDEF MSIBUILD_VERSION_INST
!ERROR Parameter MSIBUILD_VERSION_INST is undefined.
!ENDIF

!IFNDEF MSIBUILD_VERSION_STR
!ERROR Parameter MSIBUILD_VERSION_STR is undefined.
!ENDIF

!IFNDEF MSIBUILD_VERSION_GUID
!ERROR Parameter MSIBUILD_VERSION_GUID is undefined.
!ENDIF


######################################################################
# Property

All :: "$(PKG)$(LANG).$(PLAT).$(CFG).Property-1.idt"

"$(PKG)$(LANG).$(PLAT).$(CFG).Property-1.idt" : "Makefile" "$(PKG)Version.mak" "..\..\..\include\$(PKG)MSIBuildCfg.mak"
	move /y << $@ > NUL
Property	Value
s$(MSIBUILD_LENGTH_ID)	l0
Property	Property
ProductVersion	$(MSIBUILD_VERSION_INST)
DisplayVersion	$(MSIBUILD_VERSION_STR)
ProductCode	$(MSIBUILD_VERSION_GUID)
UpgradeCode	$(MSIBUILD_UPGRADE_GUID)
<<NOKEEP


######################################################################
# Upgrade

All :: "$(PKG)$(LANG).$(PLAT).$(CFG).Upgrade-1.idt"

"$(PKG)$(LANG).$(PLAT).$(CFG).Upgrade-1.idt" : "Makefile" "$(PKG)Version.mak" "..\..\..\include\$(PKG)MSIBuildCfg.mak"
	move /y << $@ > NUL
UpgradeCode	VersionMin	VersionMax	Language	Attributes	Remove	ActionProperty
s38	S20	S20	S255	i4	S255	s$(MSIBUILD_LENGTH_ID)
Upgrade	UpgradeCode	VersionMin	VersionMax	Language	Attributes
$(MSIBUILD_UPGRADE_GUID)	0			257		OLDPRODUCTFOUND
$(MSIBUILD_UPGRADE_GUID)	$(MSIBUILD_VERSION_INST)			2		NEWPRODUCTFOUND
<<NOKEEP

!ENDIF


######################################################################
# Build MSM module!
######################################################################

!INCLUDE "..\MSM.mak"
