!INCLUDE "..\..\..\include\MSINast.mak"

!IFNDEF DATOTEKA_KONST
!ERROR Spremenljivka DATOTEKA_KONST ni definirana!
!ENDIF

Vse ::

Pocisti ::
	-if exist "Verzija.mak" del /f /q "Verzija.mak"

!IFNDEF MSI_IMA_VERZIJO

######################################################################
# 1. faza
# - Priprava datoteke z verzijo.
######################################################################

Vse :: "Verzija.mak"
	$(MAKE) /f "Makefile" /$(MAKEFLAGS) MSI_IMA_VERZIJO=1

Verzija :: "Verzija.mak"

"Verzija.mak" : "$(DATOTEKA_KONST)"
	-if exist $@ del /f /q $@
	-if exist "$(@:"=).tmp" del /f /q "$(@:"=).tmp"
	grep.exe -e "#define[[:space:]]*.*_VERZIJA[[:space:]]*0x"   "$(DATOTEKA_KONST)" | sed.exe -e "s/.*0x\(.*\)/MSI_VERZIJA_INT=\1/g"            >> "$(@:"=).tmp"
	grep.exe -e "#define[[:space:]]*.*_VERZIJA_STR[[:space:]]"  "$(DATOTEKA_KONST)" | sed.exe -e "s/[^\"]*\"\([^\"]*\)\"/MSI_VERZIJA_STR=\1/g"  >> "$(@:"=).tmp"
	grep.exe -e "#define[[:space:]]*.*_VERZIJA_INST[[:space:]]" "$(DATOTEKA_KONST)" | sed.exe -e "s/[^\"]*\"\([^\"]*\)\"/MSI_VERZIJA_INST=\1/g" >> "$(@:"=).tmp"
	grep.exe -e "#define[[:space:]]*.*_VERZIJA_GUID[[:space:]]" "$(DATOTEKA_KONST)" | sed.exe -e "s/[^\"]*\"\([^\"]*\)\"/MSI_VERZIJA_GUID=\1/g" >> "$(@:"=).tmp"
	move /y "$(@:"=).tmp" $@ > NUL

!ELSE

######################################################################
# 2. faza
# - Imamo datoteko z verzijo, pripravimo druge datoteke in modul.
######################################################################

!INCLUDE "Verzija.mak"

!IFNDEF MSI_GUID_UP
!ERROR Spremenljivka MSI_GUID_UP ni definirana!
!ENDIF

!IFNDEF MSI_VERZIJA_INST
!ERROR Spremenljivka MSI_VERZIJA_INST ni definirana!
!ENDIF

!IFNDEF MSI_VERZIJA_STR
!ERROR Spremenljivka MSI_VERZIJA_STR ni definirana!
!ENDIF

!IFNDEF MSI_VERZIJA_GUID
!ERROR Spremenljivka MSI_VERZIJA_GUID ni definirana!
!ENDIF


######################################################################
# Property

Vse :: "$(JEZIK).$(CFG).$(PLAT).Property-1.idt"

"$(JEZIK).$(CFG).$(PLAT).Property-1.idt" : "Makefile" "Verzija.mak" "..\..\..\include\MSINast.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Value
s$(MSI_TIP_ID)	l0
Property	Property
ProductVersion	$(MSI_VERZIJA_INST)
DisplayVersion	$(MSI_VERZIJA_STR)
ProductCode	$(MSI_VERZIJA_GUID)
UpgradeCode	$(MSI_GUID_UP)
<<NOKEEP


######################################################################
# Upgrade

Vse :: "$(JEZIK).$(CFG).$(PLAT).Upgrade-1.idt"

"$(JEZIK).$(CFG).$(PLAT).Upgrade-1.idt" : "Makefile" "Verzija.mak" "..\..\..\include\MSINast.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
UpgradeCode	VersionMin	VersionMax	Language	Attributes	Remove	ActionProperty
s38	S20	S20	S255	i4	S255	s$(MSI_TIP_ID)
Upgrade	UpgradeCode	VersionMin	VersionMax	Language	Attributes
$(MSI_GUID_UP)	0			257		OLDPRODUCTFOUND
$(MSI_GUID_UP)	$(MSI_VERZIJA_INST)			2		NEWPRODUCTFOUND
<<NOKEEP

!ENDIF


######################################################################
# Izdelava modula MSM
######################################################################

!INCLUDE "..\MSM.mak"
