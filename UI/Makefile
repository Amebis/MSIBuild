!INCLUDE "..\..\include\MSIBuildCfg.mak"
!IFDEF MSIBUILD_HAS_VERSION
!INCLUDE "..\Version\Version.mak"
!ENDIF

MSIBUILD_IS_LOCALIZEABLE=1


######################################################################
# AdminUISequence

All :: "$(LANG).$(PLAT).$(CFG).AdminUISequence-1.idt"

"$(LANG).$(PLAT).$(CFG).AdminUISequence-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Action	Condition	Sequence
s$(MSIBUILD_LENGTH_ID)	S255	I2
AdminUISequence	Action
dlgFailed		-3
dlgUserExit		-2
dlgFinished		-1
caSetInstallModeAdmin		10
caSetDefaultUIFontVista	VersionNT>=600	50
caSetDlgStrongFontVista	VersionNT>=600	51
caSetDlgTitleFontVista	VersionNT>=600	52
dlgPrepare		140
CostInitialize		800
FileCost		900
CostFinalize		1000
dlgAdminInstallPoint		1230
dlgProgress		1280
ExecuteAction		1300
<<NOKEEP


######################################################################
# Binary

All :: \
	"$(LANG).$(PLAT).$(CFG).Binary-1" \
	"$(LANG).$(PLAT).$(CFG).Binary-1\UIWarning.ico" \
	"$(LANG).$(PLAT).$(CFG).Binary-1\UIInfo.ico" \
	"$(LANG).$(PLAT).$(CFG).Binary-1\UIFolderNew.ico" \
	"$(LANG).$(PLAT).$(CFG).Binary-1\UIFolderUp.ico" \
	"$(LANG).$(PLAT).$(CFG).Binary-1.idt"

"$(LANG).$(PLAT).$(CFG).Binary-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Name	Data
s$(MSIBUILD_LENGTH_ID)	v0
Binary	Name
binUIOpozorilo.ico	UIWarning.ico
binUIObvestilo.ico	UIInfo.ico
binUIMapaNova.ico	UIFolderNew.ico
binUIMapaGor.ico	UIFolderUp.ico
<<NOKEEP

"$(LANG).$(PLAT).$(CFG).Binary-1\UIWarning.ico" : "Binary\UIWarning.ico"
	copy /y $** $@ > NUL

"$(LANG).$(PLAT).$(CFG).Binary-1\UIInfo.ico" : "Binary\UIInfo.ico"
	copy /y $** $@ > NUL

"$(LANG).$(PLAT).$(CFG).Binary-1\UIFolderNew.ico" : "Binary\UIFolderNew.ico"
	copy /y $** $@ > NUL

"$(LANG).$(PLAT).$(CFG).Binary-1\UIFolderUp.ico" : "Binary\UIFolderUp.ico"
	copy /y $** $@ > NUL


######################################################################
# CheckBox

All :: "$(LANG).$(PLAT).$(CFG).CheckBox-2.idt"

"Sl.$(PLAT).$(CFG).CheckBox-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Value
s$(MSIBUILD_LENGTH_ID)	S64
1250	CheckBox	Property
<<NOKEEP

"De.$(PLAT).$(CFG).CheckBox-2.idt" : "Sl.$(PLAT).$(CFG).CheckBox-2.idtx" "..\res\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).CheckBox-2.idt" : "Sl.$(PLAT).$(CFG).CheckBox-2.idtx" "..\res\en_GB.po"
	rcxgettext.exe idtp $@ $**

"It.$(PLAT).$(CFG).CheckBox-2.idt" : "Sl.$(PLAT).$(CFG).CheckBox-2.idtx" "..\res\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).CheckBox-2.idt" : "Sl.$(PLAT).$(CFG).CheckBox-2.idtx"
	copy /y $** $@ > NUL


######################################################################
# Control

All :: "$(LANG).$(PLAT).$(CFG).Control-2.idt"

"Sl.$(PLAT).$(CFG).Control-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog_	Control	Type	X	Y	Width	Height	Attributes	Property	Text	Control_Next	Help
s$(MSIBUILD_LENGTH_ID)	s50	s20	i2	i2	i2	i2	I4	S50	L0	S50	L$(MSIBUILD_LENGTH_HELP)
1250	Control	Dialog_	Control
dlgPrepare	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgPrepare	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Namestitev programa [SimpleProductName] se pripravlja. Prosimo, poèakajte ...	ctlProgressBar	
dlgPrepare	ctlProgressBar	ProgressBar	30	155	340	15	65537		Konèano	ctlActionText	
dlgPrepare	ctlActionText	Text	30	175	340	15	196611			ctlBannerBitmap	
dlgLicenseAgreement	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgLicenseAgreement	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Prosimo, da pazljivo preberete splošne pogoje.	ctlAgreementText	
dlgLicenseAgreement	ctlIAgree	CheckBox	15	265	300	15	19	IAgree	&Strinjam se s splošnimi pogoji.	ctlContinue	
dlgLicenseAgreement	ctlContinue	PushButton	325	265	60	20	3		&Nadaljuj	ctlBannerBitmap	
dlgTypeSetup	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgTypeSetup	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Izberite vrsto namestitve.	ctlInstall	
dlgTypeSetup	ctlInstall	PushButton	140	130	120	40	3		[DlgTitleFont][ButtonTextInstall] 	ctlCustomize	Namesti najbolj obièajne dele programa. Primerno za veèino uporabnikov.|
dlgTypeSetup	ctlCustomize	PushButton	165	190	70	25	3		Po &meri	ctlBannerBitmap	Omogoèa, da sami izberete, kateri deli bodo namešèeni in kam.|
!IFDEF MSIBUILD_HAS_X64
!IF "$(PLAT)" == "Win32"
dlgTypeSetup	ctlWoW64Icon	Icon	15	234	24	24	5242880		binUIOpozorilo.ico		Opozorilo|
dlgTypeSetup	ctlWoW64Label	Text	44	234	341	15	196610		[DlgStrongFont]Namestili boste 32-bitno razlièico na 64-bitni operacijski sistem.		
dlgTypeSetup	ctlWoW64Text	Text	44	249	341	36	196610		32-bitna razlièica programa bo sicer delovala na vašem operacijskem sistemu, toda ta program je na voljo tudi v 64-bitni razlièici, ki je primernejša za vaš operacijski sistem. Priporoèamo, da namestite raje 64-bitno razlièico tega programa.		
!ENDIF
!ENDIF
dlgResume	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgResume	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Kliknite »Nadaljuj« za nadaljevanje namestitve programa [SimpleProductName].	ctlContinue	
dlgResume	ctlContinue	PushButton	325	265	60	20	3		&Nadaljuj	ctlBannerBitmap	
dlgTypeMaintenance	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgTypeMaintenance	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Vzdrževanje programa [SimpleProductName] 	ctlText	
dlgTypeMaintenance	ctlText	Text	15	60	370	24	196611		Vzdrževanje vam omogoèa, da spremenite, kateri deli so namešèeni na vašem raèunalniku, ali celo odstranite program [SimpleProductName].	ctlButtons	
dlgTypeMaintenance	ctlButtons	RadioButtonGroup	45	99	310	117	3	InstallModeRB		ctlContinue	
dlgTypeMaintenance	ctlContinue	PushButton	325	265	60	20	3		&Nadaljuj	ctlBannerBitmap	
dlgAdminInstallPoint	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgAdminInstallPoint	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Priprava namestitvene podobe programa [SimpleProductName] 	ctlText	
dlgAdminInstallPoint	ctlText	Text	15	60	370	24	3		Za program [SimpleProductName] boste pripravili namestitveno podobo, ki olajšuje preprostejše skupinsko namešèanje.	ctlPathEditLabel	
dlgAdminInstallPoint	ctlPathEditLabel	Text	15	94	370	12	3		&Vpišite želeno mapo ali pritisnite »Prebrskaj«:	ctlPathEdit	
dlgAdminInstallPoint	ctlPathEdit	PathEdit	15	106	370	18	3	TARGETDIR		ctlBrowse	
dlgAdminInstallPoint	ctlBrowse	PushButton	325	129	60	20	3		Prebrskaj	ctlPrepare	
dlgAdminInstallPoint	ctlPrepare	PushButton	140	245	120	40	3		[DlgStrongFont]&Pripravi zdaj	ctlBannerBitmap	
dlgCustomize	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgCustomize	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][TitleCustomize] 	ctlTreeLabel	
dlgCustomize	ctlTreeLabel	Text	15	60	370	15	3		Kliknite na ikone v drevesu spodaj, da izberete dele, ki jih želite namestiti:	ctlTree	
dlgCustomize	ctlTree	SelectionTree	15	75	370	93	7	_BrowseProperty	Drevo izbire	ctlBox	
dlgCustomize	ctlBox	GroupBox	15	173	370	82	1			ctlItemDescription	
dlgCustomize	ctlItemDescription	Text	20	182	360	24	131075		Opis trenutno izbranega elementa	ctlItemSize	
dlgCustomize	ctlItemSize	Text	20	206	360	24	131075		Velikost trenutno izbranega elementa	ctlLocationLabel	
dlgCustomize	ctlLocationLabel	Text	20	235	40	15	3		Mapa:	ctlLocation	
dlgCustomize	ctlLocation	Text	60	235	255	15	131075			ctlBrowse	
dlgCustomize	ctlBrowse	PushButton	320	230	60	20	3		Prebrskaj	ctlReset	
dlgCustomize	ctlReset	PushButton	15	265	60	20	3		&Povrni	ctlDiskCost	Vrne izbiro delov za namestitev v prvotno stanje.|
dlgCustomize	ctlDiskCost	PushButton	80	265	60	20	3		&Poraba	ctlInstall	Prikaže porabo prostora po pogonih glede na trenutno izbiro delov.|
dlgCustomize	ctlInstall	PushButton	305	265	80	20	3		[ButtonTextInstall] 	ctlBannerBitmap	
dlgBrowse	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgBrowse	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Izberite mapo za namestitev.	ctlDirectoryComboLabel	
dlgBrowse	ctlDirectoryComboLabel	Text	15	60	40	15	3		&Glej v:	ctlDirectoryCombo	
dlgBrowse	ctlDirectoryCombo	DirectoryCombo	55	60	280	80	393227	_BrowseProperty		ctlUp	
dlgBrowse	ctlUp	PushButton	340	60	18	18	3670019		binUIMapaGor.ico	ctlNewFolder	V nadrejeno mapo|
dlgBrowse	ctlNewFolder	PushButton	365	60	18	18	3670019		binUIMapaNova.ico	ctlDirectoryList	Ustvari novo mapo|
dlgBrowse	ctlDirectoryList	DirectoryList	15	83	370	149	15	_BrowseProperty		ctlPathEditLabel	
dlgBrowse	ctlPathEditLabel	Text	15	237	50	15	3		&Ime mape:	ctlPathEdit	
dlgBrowse	ctlPathEdit	PathEdit	65	237	320	18	11	_BrowseProperty		ctlOK	
dlgBrowse	ctlOK	PushButton	260	265	60	20	3		&V redu	ctlCancel	
dlgBrowse	ctlCancel	PushButton	325	265	60	20	3		Prekini	ctlBannerBitmap	
dlgBrowseAdmin	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgBrowseAdmin	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Izberite mapo za namestitveno podobo.	ctlDirectoryComboLabel	
dlgBrowseAdmin	ctlDirectoryComboLabel	Text	15	60	40	15	3		&Glej v:	ctlDirectoryCombo	
dlgBrowseAdmin	ctlDirectoryCombo	DirectoryCombo	55	60	280	80	458755	TARGETDIR		ctlUp	
dlgBrowseAdmin	ctlUp	PushButton	340	60	18	18	3670019		binUIMapaGor.ico	ctlNewFolder	V nadrejeno mapo|
dlgBrowseAdmin	ctlNewFolder	PushButton	365	60	18	18	3670019		binUIMapaNova.ico	ctlDirectoryList	Ustvari novo mapo|
dlgBrowseAdmin	ctlDirectoryList	DirectoryList	15	83	370	149	7	TARGETDIR		ctlPathEditLabel	
dlgBrowseAdmin	ctlPathEditLabel	Text	15	237	50	15	3		&Ime mape:	ctlPathEdit	
dlgBrowseAdmin	ctlPathEdit	PathEdit	65	237	320	18	3	TARGETDIR		ctlOK	
dlgBrowseAdmin	ctlOK	PushButton	260	265	60	20	3		&V redu	ctlCancel	
dlgBrowseAdmin	ctlCancel	PushButton	325	265	60	20	3		Prekini	ctlBannerBitmap	
dlgDiskCost	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgDiskCost	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Prostorske zahteve	ctlVolumeList	
dlgDiskCost	ctlVolumeList	VolumeCostList	15	60	370	195	393223		{60}{60}{60}{60}{60}	ctlClose	
dlgDiskCost	ctlClose	PushButton	325	265	60	20	3		&Zapri	ctlBannerBitmap	
dlgOutOfDisk	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgOutOfDisk	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Premalo prostora	ctlVolumeListLabel	
dlgOutOfDisk	ctlVolumeListLabel	Text	15	60	370	36	3		Oznaèeni pogoni (èe obstajajo) nimajo dovolj prostora za trenutno izbrane dele. Lahko sprostite nekaj prostora na izbranih pogonih, izberete manj delov za namestitev ali pa izberete druge pogone za namestitev.	ctlVolumeList	
dlgOutOfDisk	ctlVolumeList	VolumeCostList	15	96	370	159	393223		{60}{60}{60}{60}{60}	ctlClose	
dlgOutOfDisk	ctlClose	PushButton	325	265	60	20	3		&Zapri	ctlBannerBitmap	
dlgOutOfDiskRB	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgOutOfDiskRB	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Premalo prostora	ctlVolumeListLabel	
dlgOutOfDiskRB	ctlVolumeListLabel	Text	15	60	370	36	3		Oznaèeni pogoni (èe obstajajo) nimajo dovolj prostora za trenutno izbrane dele. Lahko sprostite nekaj prostora na izbranih pogonih, izberete manj delov za namestitev ali pa izberete druge pogone za namestitev.	ctlVolumeList	
dlgOutOfDiskRB	ctlVolumeList	VolumeCostList	15	96	370	118	4587527		{60}{60}{60}{60}{60}	ctlText	
dlgOutOfDiskRB	ctlText	Text	15	219	370	36	3		Lahko se odloèite, da onemogoèite možnost obnovitve prvotnega stanja. Obnovitev prvotnega stanja omogoèa namestitvi ponovno vrnitev v stanje raèunalnika pred namestitvijo, èe namestitev ne uspe. Kliknite »Da«, èe želite tvegati, da vrnitev v prvotno stanje ne bo možna.	ctlYes	
dlgOutOfDiskRB	ctlYes	PushButton	260	265	60	20	3		&Da	ctlNo	
dlgOutOfDiskRB	ctlNo	PushButton	325	265	60	20	3		&Ne	ctlBannerBitmap	
dlgProgress	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgProgress	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][Progress1] [SimpleProductName] ...	ctlProgressBar	
dlgProgress	ctlProgressBar	ProgressBar	30	155	340	15	65537		Konèano	ctlActionText	
dlgProgress	ctlActionText	Text	30	175	340	15	196611			ctlBannerBitmap	
dlgWait	ctlText	Text	15	15	230	12	3		[WaitMessage] 		
dlgCancel	ctlIcon	Icon	15	15	24	24	5242881		binUIObvestilo.ico	ctlText	Obvestilo|
dlgCancel	ctlText	Text	44	15	201	24	3		Ali ste preprièani, da želite prekiniti namestitev programa [SimpleProductName]?	ctlYes	
dlgCancel	ctlYes	PushButton	67	49	60	20	3		&Da	ctlNo	
dlgCancel	ctlNo	PushButton	132	49	60	20	3		&Ne	ctlIcon	
dlgError	ErrorIcon	Icon	15	15	24	24	5242881		binUIObvestilo.ico		Obvestilo|
dlgError	ErrorText	Text	44	15	201	60	3		Besedilo		
dlgError	O	PushButton	100	85	60	20	3		&V redu		
dlgError	C	PushButton	100	85	60	20	3		Prekini		
dlgError	Y	PushButton	100	85	60	20	3		&Da		
dlgError	N	PushButton	100	85	60	20	3		&Ne		
dlgError	A	PushButton	100	85	60	20	3		Prekini		
dlgError	R	PushButton	100	85	60	20	3		&Ponovi		
dlgError	I	PushButton	100	85	60	20	3		P&rezri		
FilesInUse	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
FilesInUse	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Datoteke v uporabi	ctlText	
FilesInUse	ctlText	Text	15	60	370	24	3		Naslednji programi uporabljajo datoteke, ki jih mora ta namestitev posodobiti. Prosimo, zaprite te programe in nato kliknite gumb »Ponovi« za nadaljevanje ali »Prekini« za konèanje:	ctlList	
FilesInUse	ctlList	ListBox	15	84	370	171	3	FileInUseProcess		ctlRetry	
FilesInUse	ctlRetry	PushButton	195	265	60	20	3		&Ponovi	ctlIgnore	
FilesInUse	ctlIgnore	PushButton	260	265	60	20	3		P&rezri	ctlAbort	
FilesInUse	ctlAbort	PushButton	325	265	60	20	3		Prekini	ctlBannerBitmap	
dlgFinished	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgFinished	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][Progress2] programa [SimpleProductName] je konèana.	ctlClose	
dlgFinished	ctlClose	PushButton	325	265	60	20	3		&Zapri	ctlBannerBitmap	
dlgUserExit	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgUserExit	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][Progress2] programa [SimpleProductName] je bila prekinjena.	ctlText1	
dlgUserExit	ctlText1	Text	15	60	370	24	196611		Namestitev programa [SimpleProductName] je bila prekinjena na vašo zahtevo, zato program ni bil namešèen. Vaš sistem je v stanju, kot je bil pred zaèetkom namestitve.	ctlText2	
dlgUserExit	ctlText2	Text	15	89	370	12	196611		Èe ste namestitev prekinili pomotoma, jo ponovno poženite.	ctlClose	
dlgUserExit	ctlClose	PushButton	325	265	60	20	3		&Zapri	ctlBannerBitmap	
dlgFailed	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIGlava.bmp	ctlTitle	
dlgFailed	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][Progress2] programa [SimpleProductName] se je zakljuèila predèasno.	ctlText1	
dlgFailed	ctlText1	Text	15	60	370	24	196611		Namestitev programa [SimpleProductName] se je zakljuèila predèasno zaradi napake, zato program ni bil namešèen. Vaš sistem je v stanju, kot je bil pred zaèetkom namestitve.	ctlText2	
dlgFailed	ctlText2	Text	15	89	370	24	196611		Prosimo, poskusite ponovno ali se obrnite na [Manufacturer] (tel. [ARPHELPTELEPHONE]).	ctlClose	
dlgFailed	ctlClose	PushButton	325	265	60	20	3		&Zapri	ctlBannerBitmap	
<<NOKEEP

"De.$(PLAT).$(CFG).Control-2.idt" : "Sl.$(PLAT).$(CFG).Control-2.idtx" "..\res\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).Control-2.idt" : "Sl.$(PLAT).$(CFG).Control-2.idtx" "..\res\en_GB.po"
	rcxgettext.exe idtp $@ $**

"It.$(PLAT).$(CFG).Control-2.idt" : "Sl.$(PLAT).$(CFG).Control-2.idtx" "..\res\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).Control-2.idt" : "Sl.$(PLAT).$(CFG).Control-2.idtx"
	copy /y $** $@ > NUL


######################################################################
# ControlCondition

All :: "$(LANG).$(PLAT).$(CFG).ControlCondition-1.idt"

"$(LANG).$(PLAT).$(CFG).ControlCondition-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog_	Control_	Action	Condition
s$(MSIBUILD_LENGTH_ID)	s50	s50	s255
ControlCondition	Dialog_	Control_	Action	Condition
dlgLicenseAgreement	ctlContinue	Disable	NOT IAgree
dlgLicenseAgreement	ctlContinue	Enable	IAgree
!IFDEF MSIBUILD_HAS_X64
!IF "$(PLAT)" == "Win32"
dlgTypeSetup	ctlWoW64Icon	Show	VersionNT64
dlgTypeSetup	ctlWoW64Label	Show	VersionNT64
dlgTypeSetup	ctlWoW64Text	Show	VersionNT64
!ENDIF
!ENDIF
dlgCustomize	ctlLocationLabel	Disable	Installed
dlgCustomize	ctlLocation	Disable	Installed
dlgCustomize	ctlBrowse	Disable	Installed
<<NOKEEP


######################################################################
# ControlEvent

All :: \
	"$(LANG).$(PLAT).$(CFG).ControlEvent-1.idt" \
	"$(LANG).$(PLAT).$(CFG).ControlEvent-2.idt"

"$(LANG).$(PLAT).$(CFG).ControlEvent-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog_	Control_	Event	Argument	Condition	Ordering
s$(MSIBUILD_LENGTH_ID)	s50	s50	s255	S255	I2
ControlEvent	Dialog_	Control_	Event	Argument	Condition
dlgPrepare	ctlBannerBitmap	SpawnDialog	dlgCancel	1	1000
dlgLicenseAgreement	ctlBannerBitmap	SpawnDialog	dlgCancel	1	1000
dlgLicenseAgreement	ctlContinue	SpawnWaitDialog	dlgWait	CostingComplete=1	100
dlgLicenseAgreement	ctlContinue	EndDialog	Return	IAgree	1000
dlgTypeSetup	ctlBannerBitmap	SpawnDialog	dlgCancel	1	1000
dlgTypeSetup	ctlInstall	[InstallMode]	Typical	1	100
dlgTypeSetup	ctlInstall	SetInstallLevel	3	1	101
dlgTypeSetup	ctlInstall	EndDialog	Return	OutOfDiskSpace<>1	1000
dlgTypeSetup	ctlInstall	SpawnDialog	dlgOutOfDiskRB	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND (PROMPTROLLBACKCOST="P" OR NOT PROMPTROLLBACKCOST)	1001
dlgTypeSetup	ctlInstall	EndDialog	Return	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1002
dlgTypeSetup	ctlInstall	EnableRollback	False	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1003
dlgTypeSetup	ctlInstall	SpawnDialog	dlgOutOfDisk	(OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=1) OR (OutOfDiskSpace=1 AND PROMPTROLLBACKCOST="F")	1004
dlgTypeSetup	ctlCustomize	[InstallMode]	Custom	1	100
dlgTypeSetup	ctlCustomize	NewDialog	dlgCustomize	1	1000
dlgResume	ctlBannerBitmap	SpawnDialog	dlgCancel	1	1000
dlgResume	ctlContinue	SpawnWaitDialog	dlgWait	CostingComplete=1	100
dlgResume	ctlContinue	EndDialog	Return	OutOfDiskSpace<>1	1000
dlgResume	ctlContinue	SpawnDialog	dlgOutOfDiskRB	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND (PROMPTROLLBACKCOST="P" OR NOT PROMPTROLLBACKCOST)	1001
dlgResume	ctlContinue	EndDialog	Return	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1002
dlgResume	ctlContinue	EnableRollback	False	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1003
dlgResume	ctlContinue	SpawnDialog	dlgOutOfDisk	(OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=1) OR (OutOfDiskSpace=1 AND PROMPTROLLBACKCOST="F")	1004
dlgTypeMaintenance	ctlBannerBitmap	SpawnDialog	dlgCancel	1	1000
dlgTypeMaintenance	ctlContinue	[InstallMode]	[InstallModeRB]	1	10
dlgTypeMaintenance	ctlContinue	NewDialog	dlgCustomize	InstallMode="Change"	1000
dlgTypeMaintenance	ctlContinue	ReinstallMode	ecmus	InstallMode="Repair" AND OutOfDiskSpace<>1	100
dlgTypeMaintenance	ctlContinue	Reinstall	All	InstallMode="Repair" AND OutOfDiskSpace<>1	101
dlgTypeMaintenance	ctlContinue	EndDialog	Return	InstallMode="Repair" AND OutOfDiskSpace<>1	102
dlgTypeMaintenance	ctlContinue	SpawnDialog	dlgOutOfDiskRB	InstallMode="Repair" AND OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND (PROMPTROLLBACKCOST="P" OR NOT PROMPTROLLBACKCOST)	1000
dlgTypeMaintenance	ctlContinue	EndDialog	Return	InstallMode="Repair" AND OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1001
dlgTypeMaintenance	ctlContinue	EnableRollback	False	InstallMode="Repair" AND OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1002
dlgTypeMaintenance	ctlContinue	SpawnDialog	dlgOutOfDisk	InstallMode="Repair" AND ((OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=1) OR (OutOfDiskSpace=1 AND PROMPTROLLBACKCOST="F"))	1003
dlgTypeMaintenance	ctlContinue	Remove	All	InstallMode="Remove" AND OutOfDiskSpace<>1	100
dlgTypeMaintenance	ctlContinue	EndDialog	Return	InstallMode="Remove" AND OutOfDiskSpace<>1	1000
dlgTypeMaintenance	ctlContinue	SpawnDialog	dlgOutOfDiskRB	InstallMode="Remove" AND OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND (PROMPTROLLBACKCOST="P" OR NOT PROMPTROLLBACKCOST)	1001
dlgTypeMaintenance	ctlContinue	EndDialog	Return	InstallMode="Remove" AND OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1002
dlgTypeMaintenance	ctlContinue	EnableRollback	False	InstallMode="Remove" AND OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1003
dlgTypeMaintenance	ctlContinue	SpawnDialog	dlgOutOfDisk	InstallMode="Remove" AND ((OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=1) OR (OutOfDiskSpace=1 AND PROMPTROLLBACKCOST="F"))	1004
dlgAdminInstallPoint	ctlBrowse	SpawnDialog	dlgBrowseAdmin	1	1000
dlgAdminInstallPoint	ctlBannerBitmap	SpawnDialog	dlgCancel	1	1000
dlgAdminInstallPoint	ctlPrepare	SetTargetPath	TARGETDIR	1	100
dlgAdminInstallPoint	ctlPrepare	EndDialog	Return	OutOfDiskSpace<>1	1000
dlgAdminInstallPoint	ctlPrepare	SpawnDialog	dlgOutOfDiskRB	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND (PROMPTROLLBACKCOST="P" OR NOT PROMPTROLLBACKCOST)	1001
dlgAdminInstallPoint	ctlPrepare	EndDialog	Return	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1002
dlgAdminInstallPoint	ctlPrepare	EnableRollback	False	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1003
dlgAdminInstallPoint	ctlPrepare	SpawnDialog	dlgOutOfDisk	(OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=1) OR (OutOfDiskSpace=1 AND PROMPTROLLBACKCOST="F")	1004
dlgCustomize	ctlBrowse	SelectionBrowse	dlgBrowse	1	1000
dlgCustomize	ctlDiskCost	SpawnDialog	dlgDiskCost	1	1000
dlgCustomize	ctlInstall	EndDialog	Return	OutOfDiskSpace<>1	1000
dlgCustomize	ctlInstall	SpawnDialog	dlgOutOfDiskRB	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND (PROMPTROLLBACKCOST="P" OR NOT PROMPTROLLBACKCOST)	1001
dlgCustomize	ctlInstall	EndDialog	Return	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1002
dlgCustomize	ctlInstall	EnableRollback	False	OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=0 AND PROMPTROLLBACKCOST="D"	1003
dlgCustomize	ctlInstall	SpawnDialog	dlgOutOfDisk	(OutOfDiskSpace=1 AND OutOfNoRbDiskSpace=1) OR (OutOfDiskSpace=1 AND PROMPTROLLBACKCOST="F")	1004
dlgCustomize	ctlReset	Reset	0	1	1000
dlgCustomize	ctlBannerBitmap	SpawnDialog	dlgCancel	1	1000
dlgDiskCost	ctlClose	EndDialog	Return	1	1000
dlgOutOfDisk	ctlClose	EndDialog	Return	1	1000
dlgOutOfDiskRB	ctlNo	EndDialog	Return	1	1000
dlgOutOfDiskRB	ctlYes	EnableRollback	False	1	100
dlgOutOfDiskRB	ctlYes	EndDialog	Return	1	1000
dlgBrowse	ctlCancel	Reset	0	1	100
dlgBrowse	ctlCancel	EndDialog	Return	1	1000
dlgBrowse	ctlNewFolder	DirectoryListNew	0	1	1000
dlgBrowse	ctlOK	SetTargetPath	[_BrowseProperty]	1	100
dlgBrowse	ctlOK	EndDialog	Return	1	1000
dlgBrowse	ctlUp	DirectoryListUp	0	1	1000
dlgBrowseAdmin	ctlCancel	Reset	0	1	100
dlgBrowseAdmin	ctlCancel	EndDialog	Return	1	1000
dlgBrowseAdmin	ctlNewFolder	DirectoryListNew	0	1	1000
dlgBrowseAdmin	ctlOK	SetTargetPath	TARGETDIR	1	100
dlgBrowseAdmin	ctlOK	EndDialog	Return	1	1000
dlgBrowseAdmin	ctlUp	DirectoryListUp	0	1	1000
dlgProgress	ctlBannerBitmap	SpawnDialog	dlgCancel	1	1000
dlgWait	ctlText	EndDialog	Exit	1	1000
dlgCancel	ctlYes	EndDialog	Exit	1	1000
dlgCancel	ctlNo	EndDialog	Return	1	1000
dlgError	O	EndDialog	ErrorOk	1	1000
dlgError	C	EndDialog	ErrorCancel	1	1000
dlgError	Y	EndDialog	ErrorYes	1	1000
dlgError	N	EndDialog	ErrorNo	1	1000
dlgError	A	EndDialog	ErrorAbort	1	1000
dlgError	R	EndDialog	ErrorRetry	1	1000
dlgError	I	EndDialog	ErrorIgnore	1	1000
FilesInUse	ctlRetry	EndDialog	Retry	1	1000
FilesInUse	ctlIgnore	EndDialog	Ignore	1	1000
FilesInUse	ctlAbort	EndDialog	Exit	1	1000
dlgFinished	ctlClose	EndDialog	Return	1	1000
dlgUserExit	ctlClose	EndDialog	Exit	1	1000
dlgFailed	ctlClose	EndDialog	Exit	1	1000
<<NOKEEP

"Sl.$(PLAT).$(CFG).ControlEvent-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog_	Control_	Event	Argument	Condition	Ordering
s$(MSIBUILD_LENGTH_ID)	s50	s50	s255	S255	I2
1250	ControlEvent	Dialog_	Control_	Event	Argument	Condition
dlgLicenseAgreement	ctlContinue	[WaitMessage]	Ugotavljanje potrebnega prostora za namestitev ...	1	99
dlgResume	ctlContinue	[WaitMessage]	Ugotavljanje potrebnega prostora za namestitev ...	1	99
dlgTypeMaintenance	ctlContinue	[ButtonTextInstall]	&Spremeni zdaj	InstallMode="Change"	500
dlgTypeMaintenance	ctlContinue	[TitleCustomize]	Sprememba namešèenih delov	InstallMode="Change"	501
dlgTypeMaintenance	ctlContinue	[Progress1]	Spreminjam	InstallMode="Change"	502
dlgTypeMaintenance	ctlContinue	[Progress2]	Sprememba	InstallMode="Change"	503
dlgTypeMaintenance	ctlContinue	[Progress1]	Obnavljam	InstallMode="Repair"	504
dlgTypeMaintenance	ctlContinue	[Progress2]	Obnova	InstallMode="Repair"	505
dlgTypeMaintenance	ctlContinue	[Progress1]	Odstranjujem	InstallMode="Remove"	506
dlgTypeMaintenance	ctlContinue	[Progress2]	Odstranitev	InstallMode="Remove"	507
<<NOKEEP

"De.$(PLAT).$(CFG).ControlEvent-2.idt" : "Sl.$(PLAT).$(CFG).ControlEvent-2.idtx" "..\res\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).ControlEvent-2.idt" : "Sl.$(PLAT).$(CFG).ControlEvent-2.idtx" "..\res\en_GB.po"
	rcxgettext.exe idtp $@ $**

"It.$(PLAT).$(CFG).ControlEvent-2.idt" : "Sl.$(PLAT).$(CFG).ControlEvent-2.idtx" "..\res\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).ControlEvent-2.idt" : "Sl.$(PLAT).$(CFG).ControlEvent-2.idtx"
	copy /y $** $@ > NUL


######################################################################
# CustomAction

All :: "$(LANG).$(PLAT).$(CFG).CustomAction-1.idt"

"$(LANG).$(PLAT).$(CFG).CustomAction-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Action	Type	Source	Target
s$(MSIBUILD_LENGTH_ID)	i2	S$(MSIBUILD_LENGTH_ID)	S255
CustomAction	Action
caSetDefaultUIFontVista	51	DefaultUIFont	tsDlgVista
caSetDlgStrongFontVista	51	DlgStrongFont	{\tsStrongVista}
caSetDlgTitleFontVista	51	DlgTitleFont	{\tsTitleVista}
caSetInstallModeAdmin	51	InstallMode	Server Image
<<NOKEEP


######################################################################
# Dialog

All :: \
	"$(LANG).$(PLAT).$(CFG).Dialog-1.idt" \
	"$(LANG).$(PLAT).$(CFG).Dialog-2.idt"

"$(LANG).$(PLAT).$(CFG).Dialog-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog	HCentering	VCentering	Width	Height	Attributes	Title	Control_First	Control_Default	Control_Cancel
s$(MSIBUILD_LENGTH_ID)	i2	i2	i2	i2	I4	L128	s50	S50	S50
Dialog	Dialog
dlgPrepare	50	50	400	300	1	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlBannerBitmap	ctlBannerBitmap
dlgLicenseAgreement	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlContinue	ctlBannerBitmap
dlgTypeSetup	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlInstall	ctlBannerBitmap
dlgResume	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlContinue	ctlBannerBitmap
dlgTypeMaintenance	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlContinue	ctlBannerBitmap
dlgAdminInstallPoint	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlPrepare	ctlBannerBitmap
dlgCustomize	50	50	400	300	35	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle		ctlBannerBitmap
dlgBrowse	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlOK	ctlCancel
dlgBrowseAdmin	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlOK	ctlCancel
dlgDiskCost	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlClose	ctlClose
dlgOutOfDisk	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlClose	ctlClose
dlgOutOfDiskRB	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlNo	
dlgProgress	50	50	400	300	1	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlBannerBitmap	ctlBannerBitmap
dlgWait	50	50	260	42	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlText		ctlText
dlgCancel	50	50	260	84	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlText	ctlNo	
FilesInUse	50	50	400	300	19	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlRetry	ctlAbort
dlgFinished	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlClose	ctlClose
dlgUserExit	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlClose	ctlClose
dlgFailed	50	50	400	300	3	[Setup] [SimpleProductName] [DisplayVersion]	ctlTitle	ctlClose	ctlClose
<<NOKEEP

"Sl.$(PLAT).$(CFG).Dialog-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog	HCentering	VCentering	Width	Height	Attributes	Title	Control_First	Control_Default	Control_Cancel
s$(MSIBUILD_LENGTH_ID)	i2	i2	i2	i2	I4	L128	s50	S50	S50
1250	Dialog	Dialog
dlgError	50	50	260	120	65539	Napaka	ErrorText		
<<NOKEEP

"De.$(PLAT).$(CFG).Dialog-2.idt" : "Sl.$(PLAT).$(CFG).Dialog-2.idtx" "..\res\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).Dialog-2.idt" : "Sl.$(PLAT).$(CFG).Dialog-2.idtx" "..\res\en_GB.po"
	rcxgettext.exe idtp $@ $**

"It.$(PLAT).$(CFG).Dialog-2.idt" : "Sl.$(PLAT).$(CFG).Dialog-2.idtx" "..\res\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).Dialog-2.idt" : "Sl.$(PLAT).$(CFG).Dialog-2.idtx"
	copy /y $** $@ > NUL


######################################################################
# EventMapping

All :: "$(LANG).$(PLAT).$(CFG).EventMapping-1.idt"

"$(LANG).$(PLAT).$(CFG).EventMapping-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog_	Control_	Event	Attribute
s$(MSIBUILD_LENGTH_ID)	s50	s50	s50
EventMapping	Dialog_	Control_	Event
dlgPrepare	ctlActionText	ActionText	Text
dlgPrepare	ctlProgressBar	SetProgress	Progress
dlgProgress	ctlActionText	ActionText	Text
dlgProgress	ctlProgressBar	SetProgress	Progress
dlgCustomize	ctlDiskCost	SelectionNoItems	Enabled
dlgCustomize	ctlItemDescription	SelectionDescription	Text
dlgCustomize	ctlItemSize	SelectionSize	Text
dlgCustomize	ctlLocation	SelectionPath	Text
dlgCustomize	ctlLocation	SelectionPathOn	Enabled
dlgCustomize	ctlLocationLabel	SelectionPathOn	Enabled
dlgCustomize	ctlInstall	SelectionNoItems	Enabled
dlgCustomize	ctlReset	SelectionNoItems	Enabled
dlgBrowse	ctlDirectoryCombo	IgnoreChange	IgnoreChange
dlgBrowseAdmin	ctlDirectoryCombo	IgnoreChange	IgnoreChange
<<NOKEEP


######################################################################
# InstallUISequence

All :: "$(LANG).$(PLAT).$(CFG).InstallUISequence-1.idt"

"$(LANG).$(PLAT).$(CFG).InstallUISequence-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Action	Condition	Sequence
s$(MSIBUILD_LENGTH_ID)	S255	I2
InstallUISequence	Action
dlgFailed		-3
dlgUserExit		-2
dlgFinished		-1
caSetDefaultUIFontVista	VersionNT>=600	50
caSetDlgStrongFontVista	VersionNT>=600	51
caSetDlgTitleFontVista	VersionNT>=600	52
dlgPrepare		140
dlgLicenseAgreement	NOT Installed	1210
dlgTypeSetup	NOT Installed	1250
dlgResume	Installed AND (RESUME OR Preselected)	1251
dlgTypeMaintenance	Installed AND NOT RESUME AND NOT Preselected	1252
dlgProgress		1280
<<NOKEEP


######################################################################
# Property

All :: \
	"$(LANG).$(PLAT).$(CFG).Property-1.idt" \
	"$(LANG).$(PLAT).$(CFG).Property-2.idt"

"$(LANG).$(PLAT).$(CFG).Property-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Value
s$(MSIBUILD_LENGTH_ID)	l0
Property	Property
DefaultUIFont	tsDlgXP
DlgStrongFont	{\tsStrongXP}
DlgTitleFont	{\tsTitleXP}
ErrorDialog	dlgError
InstallModeRB	Change
<<NOKEEP

"Sl.$(PLAT).$(CFG).Property-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Value
s$(MSIBUILD_LENGTH_ID)	l0
1250	Property	Property
Progress1	Namešèam
Progress2	Namestitev
Setup	Namestitev
Wizard	Èarovnik za namestitev
TitleCustomize	Namestitev po meri
ButtonTextInstall	&Namesti zdaj
<<NOKEEP

"De.$(PLAT).$(CFG).Property-2.idt" : "Sl.$(PLAT).$(CFG).Property-2.idtx" "..\res\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).Property-2.idt" : "Sl.$(PLAT).$(CFG).Property-2.idtx" "..\res\en_GB.po"
	rcxgettext.exe idtp $@ $**

"It.$(PLAT).$(CFG).Property-2.idt" : "Sl.$(PLAT).$(CFG).Property-2.idtx" "..\res\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).Property-2.idt" : "Sl.$(PLAT).$(CFG).Property-2.idtx"
	copy /y $** $@ > NUL


######################################################################
# RadioButton

All :: "$(LANG).$(PLAT).$(CFG).RadioButton-2.idt"

"Sl.$(PLAT).$(CFG).RadioButton-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Order	Value	X	Y	Width	Height	Text	Help
s$(MSIBUILD_LENGTH_ID)	i2	s64	i2	i2	i2	i2	L64	L$(MSIBUILD_LENGTH_HELP)
1250	RadioButton	Property	Order
InstallModeRB	1	Change	0	0	370	15	&Spremeni	Omogoèa, da sami izberete, kateri deli programa so namešèeni.|
InstallModeRB	2	Repair	0	20	370	15	Ob&novi	Odpravi napake pri namestitvi programa - popravi pokvarjene ali manjkajoèe datoteke, bližnjice in zapise v registru.|
InstallModeRB	3	Remove	0	40	370	15	&Odstrani	Odstrani program z vašega raèunalnika.|
<<NOKEEP

"De.$(PLAT).$(CFG).RadioButton-2.idt" : "Sl.$(PLAT).$(CFG).RadioButton-2.idtx" "..\res\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).RadioButton-2.idt" : "Sl.$(PLAT).$(CFG).RadioButton-2.idtx" "..\res\en_GB.po"
	rcxgettext.exe idtp $@ $**

"It.$(PLAT).$(CFG).RadioButton-2.idt" : "Sl.$(PLAT).$(CFG).RadioButton-2.idtx" "..\res\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).RadioButton-2.idt" : "Sl.$(PLAT).$(CFG).RadioButton-2.idtx"
	copy /y $** $@ > NUL


######################################################################
# TextStyle

All :: "$(LANG).$(PLAT).$(CFG).TextStyle-1.idt"

"$(LANG).$(PLAT).$(CFG).TextStyle-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
TextStyle	FaceName	Size	Color	StyleBits
s$(MSIBUILD_LENGTH_ID)	s32	i2	I4	I2
TextStyle	TextStyle
tsDlgXP	Tahoma	8		0
tsStrongXP	Tahoma	8		1
tsTitleXP	Tahoma	10		1
tsDlgVista	Segoe UI	9		0
tsStrongVista	Segoe UI	9		1
tsTitleVista	Segoe UI	11		1
<<NOKEEP


######################################################################
# Build MSM module!
######################################################################

!INCLUDE "..\MSM.mak"
