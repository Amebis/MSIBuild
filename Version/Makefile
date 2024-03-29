#    ​​​​SPDX-License-Identifier: GPL-3.0-or-later
#    Copyright © 1991-2022 Amebis
#    Copyright © 2016 GÉANT

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
$(MSIBUILD_UPGRADE_GUID)	0			257		OLDPRODUCTS
$(MSIBUILD_UPGRADE_GUID)	$(MSIBUILD_VERSION_INST)			2		NEWPRODUCTS
<<NOKEEP

!ENDIF


######################################################################
# Build MSM module!
######################################################################

!INCLUDE "..\MSM.mak"
