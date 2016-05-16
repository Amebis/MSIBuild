#
#    Copyright 1991-2016 Amebis
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

!INCLUDE "..\..\..\include\MSIBuildCfg.mak"
!IFDEF MSIBUILD_HAS_VERSION
!INCLUDE "..\Version\Version.mak"
!ENDIF

MSIBUILD_IS_LOCALIZEABLE=1


######################################################################
# _Validation

All :: "$(LANG).$(PLAT).$(CFG)._Validation-1.idt"

"$(LANG).$(PLAT).$(CFG)._Validation-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Table	Column	Nullable	MinValue	MaxValue	KeyTable	KeyColumn	Category	Set	Description
s32	s32	s4	I4	I4	S255	I2	S32	S255	S255
_Validation	Table	Column
ActionText	Action	N					Identifier		Name of action to be described.
ActionText	Description	Y					Text		Localized description displayed in progress dialog and log when action is executing.
ActionText	Template	Y					Template		Optional localized format template used to format action data records for display during action execution.
AdminExecuteSequence	Action	N					Identifier		Name of action to invoke, either in the engine or the handler DLL.
AdminExecuteSequence	Condition	Y					Condition		Optional expression which skips the action if evaluates to expFalse.If the expression syntax is invalid, the engine will terminate, returning iesBadActionData.
AdminExecuteSequence	Sequence	Y	-4	32767					Number that determines the sort order in which the actions are to be executed. Leave blank to suppress action.
BBControl	Attributes	Y	0	2147483647					A 32-bit word that specifies the attribute flags to be applied to this control.
BBControl	BBControl	N					Identifier		Name of the control. This name must be unique within a billboard, but can repeat on different billboard.
BBControl	Billboard_	N			Billboard	1	Identifier		External key to the Billboard table, name of the billboard.
BBControl	Height	N	0	32767					Height of the bounding rectangle of the control.
BBControl	Text	Y					Text		A string used to set the initial text contained within a control (if appropriate).
BBControl	Type	N					Identifier		The type of the control.
BBControl	Width	N	0	32767					Width of the bounding rectangle of the control.
BBControl	X	N	0	32767					Horizontal coordinate of the upper left corner of the bounding rectangle of the control.
BBControl	Y	N	0	32767					Vertical coordinate of the upper left corner of the bounding rectangle of the control.
Billboard	Action	Y					Identifier		The name of an action. The billboard is displayed during the progress messages received from this action.
Billboard	Billboard	N					Identifier		Name of the billboard.
Billboard	Feature_	N			Feature	1	Identifier		An external key to the Feature Table. The billboard is shown only if this feature is being installed.
Billboard	Ordering	Y	0	32767					A positive integer. If there is more than one billboard corresponding to an action they will be shown in the order defined by this column.
CheckBox	Property	N					Identifier		A named property to be tied to the item.
CheckBox	Value	Y					Formatted		The value string associated with the item.
Control	Attributes	Y	0	2147483647					A 32-bit word that specifies the attribute flags to be applied to this control.
Control	Control	N					Identifier		Name of the control. This name must be unique within a dialog, but can repeat on different dialogs. 
Control	Control_Next	Y			Control	2	Identifier		The name of an other control on the same dialog. This link defines the tab order of the controls. The links have to form one or more cycles!
Control	Dialog_	N			Dialog	1	Identifier		External key to the Dialog table, name of the dialog.
Control	Height	N	0	32767					Height of the bounding rectangle of the control.
Control	Help	Y					Text		The help strings used with the button. The text is optional. 
Control	Property	Y					Identifier		The name of a defined property to be linked to this control. 
Control	Text	Y					Formatted		A string used to set the initial text contained within a control (if appropriate).
Control	Type	N					Identifier		The type of the control.
Control	Width	N	0	32767					Width of the bounding rectangle of the control.
Control	X	N	0	32767					Horizontal coordinate of the upper left corner of the bounding rectangle of the control.
Control	Y	N	0	32767					Vertical coordinate of the upper left corner of the bounding rectangle of the control.
ControlCondition	Action	N						Default;Disable;Enable;Hide;Show	The desired action to be taken on the specified control.
ControlCondition	Condition	N					Condition		A standard conditional statement that specifies under which conditions the action should be triggered.
ControlCondition	Control_	N			Control	2	Identifier		A foreign key to the Control table, name of the control.
ControlCondition	Dialog_	N			Dialog	1	Identifier		A foreign key to the Dialog table, name of the dialog.
ControlEvent	Argument	N					Formatted		A value to be used as a modifier when triggering a particular event.
ControlEvent	Condition	Y					Condition		A standard conditional statement that specifies under which conditions an event should be triggered.
ControlEvent	Control_	N			Control	2	Identifier		A foreign key to the Control table, name of the control
ControlEvent	Dialog_	N			Dialog	1	Identifier		A foreign key to the Dialog table, name of the dialog.
ControlEvent	Event	N					Formatted		An identifier that specifies the type of the event that should take place when the user interacts with control specified by the first two entries.
ControlEvent	Ordering	Y	0	2147483647					An integer used to order several events tied to the same control. Can be left blank.
Dialog	Attributes	Y	0	2147483647					A 32-bit word that specifies the attribute flags to be applied to this dialog.
Dialog	Control_Cancel	Y			Control	2	Identifier		Defines the cancel control. Hitting escape or clicking on the close icon on the dialog is equivalent to pushing this button.
Dialog	Control_Default	Y			Control	2	Identifier		Defines the default control. Hitting return is equivalent to pushing this button.
Dialog	Control_First	N			Control	2	Identifier		Defines the control that has the focus when the dialog is created.
Dialog	Dialog	N					Identifier		Name of the dialog.
Dialog	HCentering	N	0	100					Horizontal position of the dialog on a 0-100 scale. 0 means left end, 100 means right end of the screen, 50 center.
Dialog	Height	N	0	32767					Height of the bounding rectangle of the dialog.
Dialog	Title	Y					Formatted		A text string specifying the title to be displayed in the title bar of the dialog's window.
Dialog	VCentering	N	0	100					Vertical position of the dialog on a 0-100 scale. 0 means top end, 100 means bottom end of the screen, 50 center.
Dialog	Width	N	0	32767					Width of the bounding rectangle of the dialog.
InstallUISequence	Action	N					Identifier		Name of action to invoke, either in the engine or the handler DLL.
InstallUISequence	Condition	Y					Condition		Optional expression which skips the action if evaluates to expFalse.If the expression syntax is invalid, the engine will terminate, returning iesBadActionData.
InstallUISequence	Sequence	Y	-4	32767					Number that determines the sort order in which the actions are to be executed. Leave blank to suppress action.
ListBox	Order	N	1	32767					A positive integer used to determine the ordering of the items within one list..The integers do not have to be consecutive.
ListBox	Property	N					Identifier		A named property to be tied to this item. All the items tied to the same property become part of the same listbox.
ListBox	Text	Y					Text		The visible text to be assigned to the item. Optional. If this entry or the entire column is missing, the text is the same as the value.
ListBox	Value	N					Formatted		The value string associated with this item. Selecting the line will set the associated property to this value.
ListView	Binary_	Y			Binary	1	Identifier		The name of the icon to be displayed with the icon. The binary information is looked up from the Binary Table.
ListView	Order	N	1	32767					A positive integer used to determine the ordering of the items within one list..The integers do not have to be consecutive.
ListView	Property	N					Identifier		A named property to be tied to this item. All the items tied to the same property become part of the same listview.
ListView	Text	Y					Text		The visible text to be assigned to the item. Optional. If this entry or the entire column is missing, the text is the same as the value.
ListView	Value	N					Identifier		The value string associated with this item. Selecting the line will set the associated property to this value.
RadioButton	Height	N	0	32767					The height of the button.
RadioButton	Help	Y					Text		The help strings used with the button. The text is optional.
RadioButton	Order	N	1	32767					A positive integer used to determine the ordering of the items within one list..The integers do not have to be consecutive.
RadioButton	Property	N					Identifier		A named property to be tied to this radio button. All the buttons tied to the same property become part of the same group.
RadioButton	Text	Y					Text		The visible title to be assigned to the radio button.
RadioButton	Value	N					Formatted		The value string associated with this button. Selecting the button will set the associated property to this value.
RadioButton	Width	N	0	32767					The width of the button.
RadioButton	X	N	0	32767					The horizontal coordinate of the upper left corner of the bounding rectangle of the radio button.
RadioButton	Y	N	0	32767					The vertical coordinate of the upper left corner of the bounding rectangle of the radio button.
TextStyle	Color	Y	0	16777215					A long integer indicating the color of the string in the RGB format (Red, Green, Blue each 0-255, RGB = R + 256*G + 256^2*B).
TextStyle	FaceName	N					Text		A string indicating the name of the font used. Required. The string must be at most 31 characters long.
TextStyle	Size	N	0	32767					The size of the font used. This size is given in our units (1/12 of the system font height). Assuming that the system font is set to 12 point size, this is equivalent to the point size.
TextStyle	StyleBits	Y	0	15					A combination of style bits.
TextStyle	TextStyle	N					Identifier		Name of the style. The primary key of this table. This name is embedded in the texts to indicate a style change.
UIText	Key	N					Identifier		A unique key that identifies the particular string.
UIText	Text	Y					Text		The localized version of the string.
<<NOKEEP


######################################################################
# ActionText

All :: "$(LANG).$(PLAT).$(CFG).ActionText-2.idt"

"En.$(PLAT).$(CFG).ActionText-2.idtx" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Action	Description	Template
s$(MSIBUILD_LENGTH_ID)	L0	L0
1252	ActionText	Action
Advertise	Advertising application	
AllocateRegistrySpace	Allocating registry space	Free space: [1]
AppSearch	Searching for installed applications	Property: [1], Signature: [2]
BindImage	Binding executables	File: [1]
CCPSearch	Searching for qualifying products	
CostFinalize	Computing space requirements	
CostInitialize	Computing space requirements	
CreateFolders	Creating folders	Folder: [1]
CreateShortcuts	Creating shortcuts	Shortcut: [1]
DeleteServices	Deleting services	Service: [1]
DuplicateFiles	Creating duplicate files	File: [1], Folder: [9], Size: [6]
FileCost	Computing space requirements	
FindRelatedProducts	Searching for related applications	Found application: [1]
GenerateScript	Generating script operations for action:	[1]
InstallAdminPackage	Copying network install files	File: [1], Folder: [9], Size: [6]
InstallFiles	Copying new files	File: [1], Folder: [9], Size: [6]
InstallODBC	Installing ODBC components	
InstallServices	Installing new services	Service: [2]
InstallSFPCatalogFile	Installing system catalog	File: [1], Dependencies: [2]
InstallValidate	Validating install	
LaunchConditions	Evaluating launch conditions	
MigrateFeatureStates	Migrating feature states from related applications	Application: [1]
MoveFiles	Moving files	File: [1], Folder: [9], Size: [6]
MsiPublishAssemblies	Publishing assembly information	Application Context:[1], Assembly Name:[2]
MsiUnpublishAssemblies	Unpublishing assembly information	Application Context:[1], Assembly Name:[2]
PatchFiles	Patching files	File: [1], Folder: [2], Size: [3]
ProcessComponents	Updating component registration	
PublishComponents	Publishing Qualified Components	Component ID: [1], Qualifier: [2]
PublishFeatures	Publishing Product Features	Feature: [1]
PublishProduct	Publishing product information	
RegisterClassInfo	Registering Class servers	Class Id: [1]
RegisterComPlus	Registering COM+ Applications and Components	AppId: [1]{{, AppType: [2], Users: [3], RSN: [4]}}
RegisterExtensionInfo	Registering extension servers	Extension: [1]
RegisterFonts	Registering fonts	Font: [1]
RegisterMIMEInfo	Registering MIME info	MIME Content Type: [1], Extension: [2]
RegisterProduct	Registering product	[1]
RegisterProgIdInfo	Registering programme identifiers	ProgId: [1]
RegisterTypeLibraries	Registering type libraries	LibID: [1]
RegisterUser	Registering user	[1]
RemoveDuplicateFiles	Removing duplicated files	File: [1], Folder: [9]
RemoveEnvironmentStrings	Updating environment strings	Name: [1], Value: [2], Action [3]
RemoveExistingProducts	Removing applications	Application: [1], Command line: [2]
RemoveFiles	Removing files	File: [1], Folder: [9]
RemoveFolders	Removing folders	Folder: [1]
RemoveIniValues	Removing INI files entries	File: [1], Section: [2], Key: [3], Value: [4]
RemoveODBC	Removing ODBC components	
RemoveRegistryValues	Removing system registry values	Key: [1], Name: [2]
RemoveShortcuts	Removing shortcuts	Shortcut: [1]
RMCCPSearch	Searching for qualifying products	
Rollback	Rolling back action:	[1]
RollbackCleanup	Removing backup files	File: [1]
SelfRegModules	Registering modules	File: [1], Folder: [2]
SelfUnregModules	Unregistering modules	File: [1], Folder: [2]
SetODBCFolders	Initializing ODBC directories	
StartServices	Starting services	Service: [1]
StopServices	Stopping services	Service: [1]
UnmoveFiles	Removing moved files	File: [1], Folder: [9]
UnpublishComponents	Unpublishing Qualified Components	Component ID: [1], Qualifier: [2]
UnpublishFeatures	Unpublishing Product Features	Feature: [1]
UnpublishProduct	Unpublishing product information	
UnregisterClassInfo	Unregister Class servers	Class Id: [1]
UnregisterComPlus	Unregistering COM+ Applications and Components	AppId: [1]{{, AppType: [2]}}
UnregisterExtensionInfo	Unregistering extension servers	Extension: [1]
UnregisterFonts	Unregistering fonts	Font: [1]
UnregisterMIMEInfo	Unregistering MIME info	MIME Content Type: [1], Extension: [2]
UnregisterProgIdInfo	Unregistering programme identifiers	ProgId: [1]
UnregisterTypeLibraries	Unregistering type libraries	LibID: [1]
WriteEnvironmentStrings	Updating environment strings	Name: [1], Value: [2], Action [3]
WriteIniValues	Writing INI files values	File: [1], Section: [2], Key: [3], Value: [4]
WriteRegistryValues	Writing system registry values	Key: [1], Name: [2], Value: [3]
<<NOKEEP

"De.$(PLAT).$(CFG).ActionText-2.idt" : "En.$(PLAT).$(CFG).ActionText-2.idtx" "..\locale\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).ActionText-2.idt" : "En.$(PLAT).$(CFG).ActionText-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).ActionText-2.idt" : "En.$(PLAT).$(CFG).ActionText-2.idtx" "..\locale\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).ActionText-2.idt" : "En.$(PLAT).$(CFG).ActionText-2.idtx" "..\locale\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# AdminExecuteSequence

All :: "$(LANG).$(PLAT).$(CFG).AdminExecuteSequence-1.idt"

"$(LANG).$(PLAT).$(CFG).AdminExecuteSequence-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Action	Condition	Sequence
s$(MSIBUILD_LENGTH_ID)	S255	I2
AdminExecuteSequence	Action
CostInitialize		800
FileCost		900
CostFinalize		1000
InstallValidate		1400
InstallInitialize		1500
InstallAdminPackage		3900
InstallFiles		4000
InstallFinalize		6600
<<NOKEEP


######################################################################
# AdminUISequence

All :: "$(LANG).$(PLAT).$(CFG).AdminUISequence-1.idt"

"$(LANG).$(PLAT).$(CFG).AdminUISequence-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
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


#######################################################################
## BBControl
#
#All :: "$(LANG).$(PLAT).$(CFG).BBControl-1.idt"
#
#"$(LANG).$(PLAT).$(CFG).BBControl-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
#	-if exist $@ del /f /q $@
#	move /y << $@ > NUL
#Billboard_	BBControl	Type	X	Y	Width	Height	Attributes	Text
#s50	s50	s50	i2	i2	i2	i2	I4	L50
#BBControl	Billboard_	BBControl
#<<NOKEEP


#######################################################################
## Billboard
#
#All :: "$(LANG).$(PLAT).$(CFG).Billboard-1.idt"
#
#"$(LANG).$(PLAT).$(CFG).Billboard-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
#	-if exist $@ del /f /q $@
#	move /y << $@ > NUL
#Billboard	Feature_	Action	Ordering
#s50	s$(MSIBUILD_LENGTH_ID)	S50	I2
#Billboard	Billboard
#<<NOKEEP


######################################################################
# Binary

All :: \
	"$(LANG).$(PLAT).$(CFG).Binary-1" \
	"$(LANG).$(PLAT).$(CFG).Binary-1\UIWarning.ico" \
	"$(LANG).$(PLAT).$(CFG).Binary-1\UIInfo.ico" \
	"$(LANG).$(PLAT).$(CFG).Binary-1\UIFolderNew.ico" \
	"$(LANG).$(PLAT).$(CFG).Binary-1\UIFolderUp.ico" \
	"$(LANG).$(PLAT).$(CFG).Binary-1.idt"

"$(LANG).$(PLAT).$(CFG).Binary-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Name	Data
s$(MSIBUILD_LENGTH_ID)	v0
Binary	Name
binUIWarning.ico	UIWarning.ico
binUIInfo.ico	UIInfo.ico
binUIFolderNew.ico	UIFolderNew.ico
binUIFolderUp.ico	UIFolderUp.ico
<<NOKEEP

"$(LANG).$(PLAT).$(CFG).Binary-1\UIWarning.ico" : "Binary\UIWarning.ico"
	copy /y $** $@ > NUL

"$(LANG).$(PLAT).$(CFG).Binary-1\UIInfo.ico" : "Binary\UIInfo.ico"
	copy /y $** $@ > NUL

"$(LANG).$(PLAT).$(CFG).Binary-1\UIFolderNew.ico" : "Binary\UIFolderNew.ico"
	copy /y $** $@ > NUL

"$(LANG).$(PLAT).$(CFG).Binary-1\UIFolderUp.ico" : "Binary\UIFolderUp.ico"
	copy /y $** $@ > NUL


#######################################################################
## CheckBox
#
#All :: "$(LANG).$(PLAT).$(CFG).CheckBox-2.idt"
#
#"En.$(PLAT).$(CFG).CheckBox-2.idtx" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
#	-if exist $@ del /f /q $@
#	move /y << $@ > NUL
#Property	Value
#s$(MSIBUILD_LENGTH_ID)	S64
#1252	CheckBox	Property
#<<NOKEEP
#
#"De.$(PLAT).$(CFG).CheckBox-2.idt" : "En.$(PLAT).$(CFG).CheckBox-2.idtx" "..\locale\de_DE.po"
#	rcxgettext.exe idtp $@ $**
#
#"En.$(PLAT).$(CFG).CheckBox-2.idt" : "En.$(PLAT).$(CFG).CheckBox-2.idtx"
#	copy /y $** $@ > NUL
#
#"It.$(PLAT).$(CFG).CheckBox-2.idt" : "En.$(PLAT).$(CFG).CheckBox-2.idtx" "..\locale\it_IT.po"
#	rcxgettext.exe idtp $@ $**
#
#"Sl.$(PLAT).$(CFG).CheckBox-2.idt" : "En.$(PLAT).$(CFG).CheckBox-2.idtx" "..\locale\sl_SI.po"
#	rcxgettext.exe idtp $@ $**


#######################################################################
## ComboBox
#
#All :: "$(LANG).$(PLAT).$(CFG).ComboBox-2.idt"
#
#"En.$(PLAT).$(CFG).ComboBox-2.idtx" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
#	-if exist $@ del /f /q $@
#	move /y << $@ > NUL
#Property	Order	Value	Text
#s$(MSIBUILD_LENGTH_ID)	i2	s64	L64
#1252	ComboBox	Property	Order
#<<NOKEEP
#
#"De.$(PLAT).$(CFG).ComboBox-2.idt" : "En.$(PLAT).$(CFG).ComboBox-2.idtx" "..\locale\de_DE.po"
#	rcxgettext.exe idtp $@ $**
#
#"En.$(PLAT).$(CFG).ComboBox-2.idt" : "En.$(PLAT).$(CFG).ComboBox-2.idtx"
#	copy /y $** $@ > NUL
#
#"It.$(PLAT).$(CFG).ComboBox-2.idt" : "En.$(PLAT).$(CFG).ComboBox-2.idtx" "..\locale\it_IT.po"
#	rcxgettext.exe idtp $@ $**
#
#"Sl.$(PLAT).$(CFG).ComboBox-2.idt" : "En.$(PLAT).$(CFG).ComboBox-2.idtx" "..\locale\sl_SI.po"
#	rcxgettext.exe idtp $@ $**


######################################################################
# Control

All :: "$(LANG).$(PLAT).$(CFG).Control-2.idt"

"En.$(PLAT).$(CFG).Control-2.idtx" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog_	Control	Type	X	Y	Width	Height	Attributes	Property	Text	Control_Next	Help
s$(MSIBUILD_LENGTH_ID)	s50	s20	i2	i2	i2	i2	I4	S50	L0	S50	L$(MSIBUILD_LENGTH_HELP)
1252	Control	Dialog_	Control
dlgPrepare	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgPrepare	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Preparing [SimpleProductName] installation. Please wait...	ctlProgressBar	
dlgPrepare	ctlProgressBar	ProgressBar	30	155	340	15	65537		Progress done	ctlActionText	
dlgPrepare	ctlActionText	Text	30	175	340	15	196611			ctlBannerBitmap	
dlgLicenseAgreement	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgLicenseAgreement	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Please read the following general terms carefully.	ctlAgreementText	
dlgLicenseAgreement	ctlIAgree	CheckBox	15	265	300	15	19	IAgree	I &accept the General Terms.	ctlContinue	
dlgLicenseAgreement	ctlContinue	PushButton	325	265	60	20	3		&Continue	ctlBannerBitmap	
dlgTypeSetup	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgTypeSetup	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Choose setup type.	ctlInstall	
dlgTypeSetup	ctlInstall	PushButton	140	130	120	40	3		[DlgTitleFont][ButtonTextInstall] 	ctlCustomize	Installs the most common programme features. Recommended for most users.|
dlgTypeSetup	ctlCustomize	PushButton	165	190	70	25	3		C&ustomize	ctlBannerBitmap	Allows users to change the way features are installed.|
!IFDEF MSIBUILD_HAS_X64
!IF "$(PLAT)" == "Win32"
dlgTypeSetup	ctlWoW64Icon	Icon	15	234	24	24	5242880		binUIWarning.ico		Exclamation icon|
dlgTypeSetup	ctlWoW64Label	Text	44	234	341	15	196610		[DlgStrongFont]You are about to install the 32-bit variant on the 64-bit operating system.		
dlgTypeSetup	ctlWoW64Text	Text	44	249	341	36	196610		Although, 32-bit variant should work with your operating system, this programme is also available as 64-bit variant, which is more appropriate for your operating system. The installation of the 64-bit variant is recommended.		
!ENDIF
!ENDIF
dlgResume	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgResume	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Click "Next" to resume [SimpleProductName] installation.	ctlContinue	
dlgResume	ctlContinue	PushButton	325	265	60	20	3		&Continue	ctlBannerBitmap	
dlgTypeMaintenance	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgTypeMaintenance	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][SimpleProductName] Maintenance	ctlText	
dlgTypeMaintenance	ctlText	Text	15	60	370	24	196611		Maintenance allows you to change the way features are installed on your computer or even to remove [SimpleProductName] from your computer.	ctlButtons	
dlgTypeMaintenance	ctlButtons	RadioButtonGroup	45	99	310	117	3	InstallModeRB		ctlContinue	
dlgTypeMaintenance	ctlContinue	PushButton	325	265	60	20	3		&Continue	ctlBannerBitmap	
dlgAdminInstallPoint	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgAdminInstallPoint	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][SimpleProductName] Administrative Install Image Preparation	ctlText	
dlgAdminInstallPoint	ctlText	Text	15	60	370	24	3		You are about to prepare installation image for [SimpleProductName], to allow easier group deployment.	ctlPathEditLabel	
dlgAdminInstallPoint	ctlPathEditLabel	Text	15	94	370	12	3		&Enter desired folder or click "Browse":	ctlPathEdit	
dlgAdminInstallPoint	ctlPathEdit	PathEdit	15	106	370	18	3	TARGETDIR		ctlBrowse	
dlgAdminInstallPoint	ctlBrowse	PushButton	325	129	60	20	3		Br&owse	ctlPrepare	
dlgAdminInstallPoint	ctlPrepare	PushButton	140	245	120	40	3		[DlgStrongFont]&Prepare Now	ctlBannerBitmap	
dlgCustomize	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgCustomize	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][TitleCustomize] 	ctlTreeLabel	
dlgCustomize	ctlTreeLabel	Text	15	60	370	15	3		Click on the icons in the tree below to change the features to be installed:	ctlTree	
dlgCustomize	ctlTree	SelectionTree	15	75	370	93	7	_BrowseProperty	Tree of selections	ctlBox	
dlgCustomize	ctlBox	GroupBox	15	173	370	82	1			ctlItemDescription	
dlgCustomize	ctlItemDescription	Text	20	182	360	24	131075		Multiline description of the currently selected item.	ctlItemSize	
dlgCustomize	ctlItemSize	Text	20	206	360	24	131075		The size of the currently selected item.	ctlLocationLabel	
dlgCustomize	ctlLocationLabel	Text	20	235	40	15	3		Folder:	ctlLocation	
dlgCustomize	ctlLocation	Text	60	235	255	15	131075			ctlBrowse	
dlgCustomize	ctlBrowse	PushButton	320	230	60	20	3		Br&owse	ctlReset	
dlgCustomize	ctlReset	PushButton	15	265	60	20	3		&Reset	ctlDiskCost	Resets feature selection to initial state.|
dlgCustomize	ctlDiskCost	PushButton	80	265	60	20	3		Disk &Usage	ctlInstall	Shows space requirement by volumes, according to current feature selection.|
dlgCustomize	ctlInstall	PushButton	305	265	80	20	3		[ButtonTextInstall] 	ctlBannerBitmap	
dlgBrowse	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgBrowse	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Change current destination folder.	ctlDirectoryComboLabel	
dlgBrowse	ctlDirectoryComboLabel	Text	15	60	40	15	3		&Look in:	ctlDirectoryCombo	
dlgBrowse	ctlDirectoryCombo	DirectoryCombo	55	60	280	80	393227	_BrowseProperty		ctlUp	
dlgBrowse	ctlUp	PushButton	340	60	18	18	3670019		binUIFolderUp.ico	ctlNewFolder	Up One Level|
dlgBrowse	ctlNewFolder	PushButton	365	60	18	18	3670019		binUIFolderNew.ico	ctlDirectoryList	Create A New Folder|
dlgBrowse	ctlDirectoryList	DirectoryList	15	83	370	149	15	_BrowseProperty		ctlPathEditLabel	
dlgBrowse	ctlPathEditLabel	Text	15	237	50	15	3		&Folder:	ctlPathEdit	
dlgBrowse	ctlPathEdit	PathEdit	65	237	320	18	11	_BrowseProperty		ctlOK	
dlgBrowse	ctlOK	PushButton	260	265	60	20	3		OK	ctlCancel	
dlgBrowse	ctlCancel	PushButton	325	265	60	20	3		Cancel	ctlBannerBitmap	
dlgBrowseAdmin	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgBrowseAdmin	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Change current administrative installation folder.	ctlDirectoryComboLabel	
dlgBrowseAdmin	ctlDirectoryComboLabel	Text	15	60	40	15	3		&Look in:	ctlDirectoryCombo	
dlgBrowseAdmin	ctlDirectoryCombo	DirectoryCombo	55	60	280	80	458755	TARGETDIR		ctlUp	
dlgBrowseAdmin	ctlUp	PushButton	340	60	18	18	3670019		binUIFolderUp.ico	ctlNewFolder	Up One Level|
dlgBrowseAdmin	ctlNewFolder	PushButton	365	60	18	18	3670019		binUIFolderNew.ico	ctlDirectoryList	Create A New Folder|
dlgBrowseAdmin	ctlDirectoryList	DirectoryList	15	83	370	149	7	TARGETDIR		ctlPathEditLabel	
dlgBrowseAdmin	ctlPathEditLabel	Text	15	237	50	15	3		&Folder:	ctlPathEdit	
dlgBrowseAdmin	ctlPathEdit	PathEdit	65	237	320	18	3	TARGETDIR		ctlOK	
dlgBrowseAdmin	ctlOK	PushButton	260	265	60	20	3		OK	ctlCancel	
dlgBrowseAdmin	ctlCancel	PushButton	325	265	60	20	3		Cancel	ctlBannerBitmap	
dlgDiskCost	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgDiskCost	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Disk Space Requirements	ctlVolumeList	
dlgDiskCost	ctlVolumeList	VolumeCostList	15	60	370	195	393223		{60}{60}{60}{60}{60}	ctlClose	
dlgDiskCost	ctlClose	PushButton	325	265	60	20	3		&Close	ctlBannerBitmap	
dlgOutOfDisk	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgOutOfDisk	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Out of Disk Space	ctlVolumeListLabel	
dlgOutOfDisk	ctlVolumeListLabel	Text	15	60	370	36	3		The highlighted volumes (if any) do not have enough disk space available for the currently selected features. You can either remove some files from the highlighted volumes, or choose to install less features onto local drive(s), or select different destination drive(s).	ctlVolumeList	
dlgOutOfDisk	ctlVolumeList	VolumeCostList	15	96	370	159	393223		{60}{60}{60}{60}{60}	ctlClose	
dlgOutOfDisk	ctlClose	PushButton	325	265	60	20	3		&Close	ctlBannerBitmap	
dlgOutOfDiskRB	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgOutOfDiskRB	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Out of Disk Space	ctlVolumeListLabel	
dlgOutOfDiskRB	ctlVolumeListLabel	Text	15	60	370	36	3		The highlighted volumes (if any) do not have enough disk space available for the currently selected features. You can either remove some files from the highlighted volumes, or choose to install less features onto local drive(s), or select different destination drive(s).	ctlVolumeList	
dlgOutOfDiskRB	ctlVolumeList	VolumeCostList	15	96	370	118	4587527		{60}{60}{60}{60}{60}	ctlText	
dlgOutOfDiskRB	ctlText	Text	15	219	370	36	3		Alternatively, you may choose to disable the installer's rollback functionality. This allows the installer to restore your computer's original state should the installation be interrupted in any way. Click Yes if you wish to take the risk to disable rollback.	ctlYes	
dlgOutOfDiskRB	ctlYes	PushButton	260	265	60	20	3		&Yes	ctlNo	
dlgOutOfDiskRB	ctlNo	PushButton	325	265	60	20	3		&No	ctlBannerBitmap	
dlgProgress	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgProgress	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][Progress1] [SimpleProductName]...	ctlProgressBar	
dlgProgress	ctlProgressBar	ProgressBar	30	155	340	15	65537		Progress done	ctlActionText	
dlgProgress	ctlActionText	Text	30	175	340	15	196611			ctlBannerBitmap	
dlgWait	ctlText	Text	15	15	230	12	3		[WaitMessage] 		
dlgCancel	ctlIcon	Icon	15	15	24	24	5242881		binUIInfo.ico	ctlText	Information icon|
dlgCancel	ctlText	Text	44	15	201	24	3		Are you sure you want to cancel [SimpleProductName] installation?	ctlYes	
dlgCancel	ctlYes	PushButton	67	49	60	20	3		&Yes	ctlNo	
dlgCancel	ctlNo	PushButton	132	49	60	20	3		&No	ctlIcon	
dlgError	ErrorIcon	Icon	15	15	24	24	5242881		binUIInfo.ico		Information icon|
dlgError	ErrorText	Text	44	15	201	60	3		Information text		
dlgError	O	PushButton	100	85	60	20	3		OK		
dlgError	C	PushButton	100	85	60	20	3		Cancel		
dlgError	Y	PushButton	100	85	60	20	3		&Yes		
dlgError	N	PushButton	100	85	60	20	3		&No		
dlgError	A	PushButton	100	85	60	20	3		Cancel		
dlgError	R	PushButton	100	85	60	20	3		&Retry		
dlgError	I	PushButton	100	85	60	20	3		&Ignore		
FilesInUse	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
FilesInUse	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont]Files in Use	ctlText	
FilesInUse	ctlText	Text	15	60	370	24	3		The following applications are using files that need to be updated by this setup. Close these applications and then click Retry to continue the installation or Cancel to exit it.	ctlList	
FilesInUse	ctlList	ListBox	15	84	370	171	3	FileInUseProcess		ctlRetry	
FilesInUse	ctlRetry	PushButton	195	265	60	20	3		&Retry	ctlIgnore	
FilesInUse	ctlIgnore	PushButton	260	265	60	20	3		&Ignore	ctlAbort	
FilesInUse	ctlAbort	PushButton	325	265	60	20	3		Cancel	ctlBannerBitmap	
dlgFinished	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgFinished	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][SimpleProductName] [Progress1] Completed	ctlClose	
dlgFinished	ctlClose	PushButton	325	265	60	20	3		&Close	ctlBannerBitmap	
dlgUserExit	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgUserExit	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][SimpleProductName] [Progress2] Interrupted	ctlText1	
dlgUserExit	ctlText1	Text	15	60	370	24	196611		[SimpleProductName] setup was interrupted on your request. Therefore, the programme was not installed. Your system has not been modified.	ctlText2	
dlgUserExit	ctlText2	Text	15	89	370	12	196611		If you interrupted the installation by accident, please run the installation again.	ctlClose	
dlgUserExit	ctlClose	PushButton	325	265	60	20	3		&Close	ctlBannerBitmap	
dlgFailed	ctlBannerBitmap	Bitmap	0	0	400	45	1		binUIHeader.bmp	ctlTitle	
dlgFailed	ctlTitle	Text	15	15	320	15	196611		[DlgTitleFont][SimpleProductName] [Progress2] Ended Prematurely	ctlText1	
dlgFailed	ctlText1	Text	15	60	370	24	196611		[SimpleProductName] setup ended prematurely because of an error. Therefore, the programme was not installed. Your system has not been modified.	ctlText2	
dlgFailed	ctlText2	Text	15	89	370	24	196611		Please try again, or contact [Manufacturer] (phone [ARPHELPTELEPHONE]).	ctlClose	
dlgFailed	ctlClose	PushButton	325	265	60	20	3		&Close	ctlBannerBitmap	
<<NOKEEP

"De.$(PLAT).$(CFG).Control-2.idt" : "En.$(PLAT).$(CFG).Control-2.idtx" "..\locale\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).Control-2.idt" : "En.$(PLAT).$(CFG).Control-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).Control-2.idt" : "En.$(PLAT).$(CFG).Control-2.idtx" "..\locale\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).Control-2.idt" : "En.$(PLAT).$(CFG).Control-2.idtx" "..\locale\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# ControlCondition

All :: "$(LANG).$(PLAT).$(CFG).ControlCondition-1.idt"

"$(LANG).$(PLAT).$(CFG).ControlCondition-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
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

"$(LANG).$(PLAT).$(CFG).ControlEvent-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
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

"En.$(PLAT).$(CFG).ControlEvent-2.idtx" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog_	Control_	Event	Argument	Condition	Ordering
s$(MSIBUILD_LENGTH_ID)	s50	s50	s255	S255	I2
1252	ControlEvent	Dialog_	Control_	Event	Argument	Condition
dlgLicenseAgreement	ctlContinue	[WaitMessage]	Determining required space for installation...	1	99
dlgResume	ctlContinue	[WaitMessage]	Determining required space for installation...	1	99
dlgTypeMaintenance	ctlContinue	[ButtonTextInstall]	&Modify now	InstallMode="Change"	500
dlgTypeMaintenance	ctlContinue	[TitleCustomize]	Installed Features Selection	InstallMode="Change"	501
dlgTypeMaintenance	ctlContinue	[Progress1]	Modifying	InstallMode="Change"	502
dlgTypeMaintenance	ctlContinue	[Progress2]	Modification	InstallMode="Change"	503
dlgTypeMaintenance	ctlContinue	[Progress1]	Repairing	InstallMode="Repair"	504
dlgTypeMaintenance	ctlContinue	[Progress2]	Repair	InstallMode="Repair"	505
dlgTypeMaintenance	ctlContinue	[Progress1]	Removing	InstallMode="Remove"	506
dlgTypeMaintenance	ctlContinue	[Progress2]	Removal	InstallMode="Remove"	507
<<NOKEEP

"De.$(PLAT).$(CFG).ControlEvent-2.idt" : "En.$(PLAT).$(CFG).ControlEvent-2.idtx" "..\locale\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).ControlEvent-2.idt" : "En.$(PLAT).$(CFG).ControlEvent-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).ControlEvent-2.idt" : "En.$(PLAT).$(CFG).ControlEvent-2.idtx" "..\locale\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).ControlEvent-2.idt" : "En.$(PLAT).$(CFG).ControlEvent-2.idtx" "..\locale\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# CustomAction

All :: "$(LANG).$(PLAT).$(CFG).CustomAction-1.idt"

"$(LANG).$(PLAT).$(CFG).CustomAction-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
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

"$(LANG).$(PLAT).$(CFG).Dialog-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
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

"En.$(PLAT).$(CFG).Dialog-2.idtx" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog	HCentering	VCentering	Width	Height	Attributes	Title	Control_First	Control_Default	Control_Cancel
s$(MSIBUILD_LENGTH_ID)	i2	i2	i2	i2	I4	L128	s50	S50	S50
1252	Dialog	Dialog
dlgError	50	50	260	120	65539	Installer Information	ErrorText		
<<NOKEEP

"De.$(PLAT).$(CFG).Dialog-2.idt" : "En.$(PLAT).$(CFG).Dialog-2.idtx" "..\locale\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).Dialog-2.idt" : "En.$(PLAT).$(CFG).Dialog-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).Dialog-2.idt" : "En.$(PLAT).$(CFG).Dialog-2.idtx" "..\locale\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).Dialog-2.idt" : "En.$(PLAT).$(CFG).Dialog-2.idtx" "..\locale\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# EventMapping

All :: "$(LANG).$(PLAT).$(CFG).EventMapping-1.idt"

"$(LANG).$(PLAT).$(CFG).EventMapping-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
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

"$(LANG).$(PLAT).$(CFG).InstallUISequence-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
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
LaunchConditions	NOT Installed	100
!IFDEF MSIBUILD_NO_WOW64
!IF "$(PLAT)" == "Win32"
caWoW64Unsupported	VersionNT64	101
!ENDIF
!ENDIF
dlgPrepare		140
FindRelatedProducts		200
caNewerProductFound	NEWPRODUCTFOUND	201
AppSearch		400
CCPSearch	NOT Installed	500
RMCCPSearch	NOT Installed	600
ValidateProductID		700
CostInitialize		800
FileCost		900
CostFinalize		1000
MigrateFeatureStates		1200
dlgLicenseAgreement	NOT Installed	1210
dlgTypeSetup	NOT Installed	1250
dlgResume	Installed AND (RESUME OR Preselected)	1251
dlgTypeMaintenance	Installed AND NOT RESUME AND NOT Preselected	1252
dlgProgress		1280
ExecuteAction		1300
<<NOKEEP


######################################################################
# ListBox

All :: "$(LANG).$(PLAT).$(CFG).ListBox-1.idt"

"$(LANG).$(PLAT).$(CFG).ListBox-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Order	Value	Text
s$(MSIBUILD_LENGTH_ID)	i2	s64	L64
ListBox	Property	Order
<<NOKEEP


#######################################################################
## ListView
#
#All :: "$(LANG).$(PLAT).$(CFG).ListView-1.idt"
#
#"$(LANG).$(PLAT).$(CFG).ListView-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
#	-if exist $@ del /f /q $@
#	move /y << $@ > NUL
#Property	Order	Value	Text	Binary_
#s$(MSIBUILD_LENGTH_ID)	i2	s64	L64	S$(MSIBUILD_LENGTH_ID)
#ListView	Property	Order
#<<NOKEEP


######################################################################
# Property

All :: \
	"$(LANG).$(PLAT).$(CFG).Property-1.idt" \
	"$(LANG).$(PLAT).$(CFG).Property-2.idt"

"$(LANG).$(PLAT).$(CFG).Property-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
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

"En.$(PLAT).$(CFG).Property-2.idtx" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Value
s$(MSIBUILD_LENGTH_ID)	l0
1252	Property	Property
Progress1	Installing
Progress2	Setup
Setup	Setup
Wizard	Setup Wizard
TitleCustomize	Custom Installation
ButtonTextInstall	&Install Now
<<NOKEEP

"De.$(PLAT).$(CFG).Property-2.idt" : "En.$(PLAT).$(CFG).Property-2.idtx" "..\locale\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).Property-2.idt" : "En.$(PLAT).$(CFG).Property-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).Property-2.idt" : "En.$(PLAT).$(CFG).Property-2.idtx" "..\locale\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).Property-2.idt" : "En.$(PLAT).$(CFG).Property-2.idtx" "..\locale\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# RadioButton

All :: "$(LANG).$(PLAT).$(CFG).RadioButton-2.idt"

"En.$(PLAT).$(CFG).RadioButton-2.idtx" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Order	Value	X	Y	Width	Height	Text	Help
s$(MSIBUILD_LENGTH_ID)	i2	s64	i2	i2	i2	i2	L64	L$(MSIBUILD_LENGTH_HELP)
1252	RadioButton	Property	Order
InstallModeRB	1	Change	0	0	370	15	&Modify	Allows you to change the which features are installed.|
InstallModeRB	2	Repair	0	20	370	15	&Repair	Repairs errors in the most recent installation state - fixes missing or corrupt files, shortcuts and registry entries.|
InstallModeRB	3	Remove	0	40	370	15	&Remove	Removes the programme from your computer.|
<<NOKEEP

"De.$(PLAT).$(CFG).RadioButton-2.idt" : "En.$(PLAT).$(CFG).RadioButton-2.idtx" "..\locale\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).RadioButton-2.idt" : "En.$(PLAT).$(CFG).RadioButton-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).RadioButton-2.idt" : "En.$(PLAT).$(CFG).RadioButton-2.idtx" "..\locale\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).RadioButton-2.idt" : "En.$(PLAT).$(CFG).RadioButton-2.idtx" "..\locale\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# TextStyle

All :: "$(LANG).$(PLAT).$(CFG).TextStyle-1.idt"

"$(LANG).$(PLAT).$(CFG).TextStyle-1.idt" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
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
# UIText

All :: "$(LANG).$(PLAT).$(CFG).UIText-2.idt"

"En.$(PLAT).$(CFG).UIText-2.idtx" : "Makefile" "..\..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Key	Text
s$(MSIBUILD_LENGTH_ID)	L255
1252	UIText	Key
AbsentPath	
bytes	bytes
GB	GB
KB	KB
MB	MB
MenuAbsent	Entire feature will be unavailable
MenuAdvertise	Feature will be installed when required
MenuAllCD	Entire feature will be installed to run from CD
MenuAllLocal	Entire feature will be installed on local hard drive
MenuAllNetwork	Entire feature will be installed to run from network
MenuCD	Will be installed to run from CD
MenuLocal	Will be installed on local hard drive
MenuNetwork	Will be installed to run from network
NewFolder	Folder|New Folder
ScriptInProgress	Gathering required information...
SelAbsentAbsent	This feature will remain uninstalled
SelAbsentAdvertise	This feature will be set to be installed when required
SelAbsentCD	This feature will be installed to run from CD
SelAbsentLocal	This feature will be installed on the local hard drive
SelAbsentNetwork	This feature will be installed to run from the network
SelAdvertiseAbsent	This feature will become unavailable
SelAdvertiseAdvertise	Will be installed when required
SelAdvertiseCD	This feature will be installed to run from CD
SelAdvertiseLocal	This feature will be installed on the local hard drive
SelAdvertiseNetwork	This feature will be installed to run from the network
SelCDAbsent	This feature will be uninstalled completely, you won't be able to run it from CD
SelCDAdvertise	This feature will be set to be installed when required
SelCDCD	This feature will remain to be run from CD
SelCDLocal	This feature will be installed on the local hard drive
SelChildCostNeg	This feature frees up [1] on your hard drive.
SelChildCostPos	This feature requires [1] on your hard drive.
SelCostPending	Compiling cost for this feature...
SelLocalAbsent	This feature will become unavailable
SelLocalAdvertise	This feature will be removed from your local hard drive, but will be set to be installed when required
SelLocalCD	This feature will be removed from your local hard drive, but will be still available to run from CD
SelLocalLocal	This feature will remain on you local hard drive
SelLocalNetwork	This feature will be removed from your local hard drive, but will be still available to run from the network
SelNetworkAbsent	This feature will be uninstalled completely, you won't be able to run it from the network
SelNetworkAdvertise	This feature will be set to be installed when required
SelNetworkLocal	This feature will be installed on the local hard drive
SelNetworkNetwork	This feature will remain to be run from the network
SelParentCostNegNeg	This feature requires [1] on your hard drive. It has [2] of [3] subfeatures selected. The subfeatures require [4] on your hard drive.
SelParentCostNegPos	This feature requires [1] on your hard drive. It has [2] of [3] subfeatures selected. The subfeatures require [4] on your hard drive.
SelParentCostPosNeg	This feature requires [1] on your hard drive. It has [2] of [3] subfeatures selected. The subfeatures require [4] on your hard drive.
SelParentCostPosPos	This feature requires [1] on your hard drive. It has [2] of [3] subfeatures selected. The subfeatures require [4] on your hard drive.
TimeRemaining	Time remaining: {[1] minutes }{[2] seconds}
VolumeCostAvailable	Available
VolumeCostDifference	Difference
VolumeCostRequired	Required
VolumeCostSize	Disk Size
VolumeCostVolume	Volume
<<NOKEEP

"De.$(PLAT).$(CFG).UIText-2.idt" : "En.$(PLAT).$(CFG).UIText-2.idtx" "..\locale\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).UIText-2.idt" : "En.$(PLAT).$(CFG).UIText-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).UIText-2.idt" : "En.$(PLAT).$(CFG).UIText-2.idtx" "..\locale\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).UIText-2.idt" : "En.$(PLAT).$(CFG).UIText-2.idtx" "..\locale\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# Build MSM module!
######################################################################

!INCLUDE "..\MSM.mak"
