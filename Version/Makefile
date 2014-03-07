!INCLUDE "..\..\include\MSIBuildCfg.mak"

!IFNDEF MSIBUILD_VERSION_FILE
!ERROR Parameter MSIBUILD_VERSION_FILE is undefined.
!ENDIF

All ::

Clean ::
	-if exist "Version.mak" del /f /q "Version.mak"

!IFNDEF MSIBUILD_HAS_VERSION

######################################################################
# 1st Phase
# - Parse C++ version file and create NMake friendly variant.
######################################################################

All :: "Version.mak"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSIBUILD_HAS_VERSION=1

Version :: "Version.mak"

"Version.mak" : "$(MSIBUILD_VERSION_FILE)"
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	grep.exe -e "#define[[:space:]]*.*_VERSION[[:space:]]*0x"   "$(MSIBUILD_VERSION_FILE)" | sed.exe -e "s/.*0x\(.*\)/MSIBUILD_VERSION_NUM=\1/g"            >> "$(@:"=).tmp"
	grep.exe -e "#define[[:space:]]*.*_VERSION_STR[[:space:]]"  "$(MSIBUILD_VERSION_FILE)" | sed.exe -e "s/[^\"]*\"\([^\"]*\)\"/MSIBUILD_VERSION_STR=\1/g"  >> "$(@:"=).tmp"
	grep.exe -e "#define[[:space:]]*.*_VERSION_INST[[:space:]]" "$(MSIBUILD_VERSION_FILE)" | sed.exe -e "s/[^\"]*\"\([^\"]*\)\"/MSIBUILD_VERSION_INST=\1/g" >> "$(@:"=).tmp"
	grep.exe -e "#define[[:space:]]*.*_VERSION_GUID[[:space:]]" "$(MSIBUILD_VERSION_FILE)" | sed.exe -e "s/[^\"]*\"\([^\"]*\)\"/MSIBUILD_VERSION_GUID=\1/g" >> "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL

!ELSE

######################################################################
# 2nd Phase
# - Version file is ready, prepare the rest and compile module.
######################################################################

!INCLUDE "Version.mak"

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

All :: "$(LANG).$(PLAT).$(CFG).Property-1.idt"

"$(LANG).$(PLAT).$(CFG).Property-1.idt" : "Makefile" "Version.mak" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
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

All :: "$(LANG).$(PLAT).$(CFG).Upgrade-1.idt"

"$(LANG).$(PLAT).$(CFG).Upgrade-1.idt" : "Makefile" "Version.mak" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
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