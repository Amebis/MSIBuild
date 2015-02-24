#
#    MSIBuild, Copyright (C) Amebis
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

!INCLUDE "..\..\include\MSIBuildCfg.mak"
!IFDEF MSIBUILD_HAS_VERSION
!INCLUDE "..\Version\Version.mak"
!ENDIF

MSIBUILD_IS_LOCALIZEABLE=1

MSIBUILD_PRODUCT_NAME_FULL=$(MSIBUILD_PRODUCT_NAME) $(MSIBUILD_VERSION_STR)
!IF "$(CFG)" == "Debug"
MSIBUILD_PRODUCT_NAME_FULL=$(MSIBUILD_PRODUCT_NAME_FULL) Diag
!ENDIF
!IFDEF MSIBUILD_HAS_X64
!IFDEF PLAT
MSIBUILD_PRODUCT_NAME_FULL=$(MSIBUILD_PRODUCT_NAME_FULL) $(PLAT)
!ENDIF
!ENDIF


!IFDEF UI_DUMMY

######################################################################
# ___ (stub for creating new tables)

All :: "$(LANG).$(PLAT).$(CFG).___-1.idt"

"$(LANG).$(PLAT).$(CFG).___-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
<<NOKEEP


######################################################################
# ___ (stub for creating new localizable tables)

All :: \
	"$(LANG).$(PLAT).$(CFG).___-1.idt" \
	"$(LANG).$(PLAT).$(CFG).___-2.idt"

"$(LANG).$(PLAT).$(CFG).___-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
<<NOKEEP

"En.$(PLAT).$(CFG).___-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
<<NOKEEP

"De.$(PLAT).$(CFG).___-2.idt" : "En.$(PLAT).$(CFG).___-2.idtx" "..\L10N\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).___-2.idt" : "En.$(PLAT).$(CFG).___-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).___-2.idt" : "En.$(PLAT).$(CFG).___-2.idtx" "..\L10N\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).___-2.idt" : "En.$(PLAT).$(CFG).___-2.idtx" "..\L10N\sl_SI.po"
	rcxgettext.exe idtp $@ $**

!ENDIF


######################################################################
# _Validation

All :: "$(LANG).$(PLAT).$(CFG)._Validation-1.idt"

"$(LANG).$(PLAT).$(CFG)._Validation-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Table	Column	Nullable	MinValue	MaxValue	KeyTable	KeyColumn	Category	Set	Description
s32	s32	s4	I4	I4	S255	I2	S32	S255	S255
_Validation	Table	Column
_Validation	Category	Y						Text;Formatted;Template;Condition;Guid;Path;Version;Language;Identifier;Binary;UpperCase;LowerCase;Filename;Paths;AnyPath;WildCardFilename;RegPath;KeyFormatted;CustomSource;Property;Cabinet;Shortcut;URL	String category
_Validation	Column	N					Identifier		Name of column
_Validation	Description	Y					Text		Description of column
_Validation	KeyColumn	Y	1	32					Column to which foreign key connects
_Validation	KeyTable	Y					Identifier		For foreign key, Name of table to which data must link
_Validation	MaxValue	Y	-2147483647	2147483647					Maximum value allowed
_Validation	MinValue	Y	-2147483647	2147483647					Minimum value allowed
_Validation	Nullable	N						Y;N;@	Whether the column is nullable
_Validation	Set	Y					Text		Set of values that are permitted
_Validation	Table	N					Identifier		Name of table
ActionText	Action	N					Identifier		Name of action to be described.
ActionText	Description	Y					Text		Localized description displayed in progress dialog and log when action is executing.
ActionText	Template	Y					Template		Optional localized format template used to format action data records for display during action execution.
AdminExecuteSequence	Action	N					Identifier		Name of action to invoke, either in the engine or the handler DLL.
AdminExecuteSequence	Condition	Y					Condition		Optional expression which skips the action if evaluates to expFalse.If the expression syntax is invalid, the engine will terminate, returning iesBadActionData.
AdminExecuteSequence	Sequence	Y	-4	32767					Number that determines the sort order in which the actions are to be executed. Leave blank to suppress action.
AdminUISequence	Action	N					Identifier		Name of action to invoke, either in the engine or the handler DLL.
AdminUISequence	Condition	Y					Condition		Optional expression which skips the action if evaluates to expFalse.If the expression syntax is invalid, the engine will terminate, returning iesBadActionData.
AdminUISequence	Sequence	Y	-4	32767					Number that determines the sort order in which the actions are to be executed. Leave blank to suppress action.
AdvtExecuteSequence	Action	N					Identifier		Name of action to invoke, either in the engine or the handler DLL.
AdvtExecuteSequence	Condition	Y					Condition		Optional expression which skips the action if evaluates to expFalse.If the expression syntax is invalid, the engine will terminate, returning iesBadActionData.
AdvtExecuteSequence	Sequence	Y	-4	32767					Number that determines the sort order in which the actions are to be executed. Leave blank to suppress action.
AdvtUISequence	Action	N					Identifier		Name of action to invoke, either in the engine or the handler DLL.
AdvtUISequence	Condition	Y					Condition		Optional expression which skips the action if evaluates to expFalse.If the expression syntax is invalid, the engine will terminate, returning iesBadActionData.
AdvtUISequence	Sequence	Y	-4	32767					Number that determines the sort order in which the actions are to be executed. Leave blank to suppress action.
AppId	ActivateAtStorage	Y	0	1					
AppId	AppId	N					Guid		
AppId	DllSurrogate	Y					Text		
AppId	LocalService	Y					Text		
AppId	RemoteServerName	Y					Formatted		
AppId	RunAsInteractiveUser	Y	0	1					
AppId	ServiceParameters	Y					Text		
AppSearch	Property	N					Identifier		The property associated with a Signature
AppSearch	Signature_	N			Signature;RegLocator;IniLocator;DrLocator;CompLocator	1	Identifier		The Signature_ represents a unique file signature and is also the foreign key in the Signature, RegLocator, IniLocator, CompLocator and the DrLocator tables.
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
Binary	Data	N					Binary		The unformatted binary data.
Binary	Name	N					Identifier		Unique key identifying the binary data.
BindImage	File_	N			File	1	Identifier		The index into the File table. This must be an executable file.
BindImage	Path	Y					Paths		A list of ; delimited paths that represent the paths to be searched for the import DLLS. The list is usually a list of properties each enclosed within square brackets [] .
CCPSearch	Signature_	N			Signature;RegLocator;IniLocator;DrLocator;CompLocator	1	Identifier		The Signature_ represents a unique file signature and is also the foreign key in the Signature, RegLocator, IniLocator, CompLocator and the DrLocator tables.
CheckBox	Property	N					Identifier		A named property to be tied to the item.
CheckBox	Value	Y					Formatted		The value string associated with the item.
Class	AppId_	Y			AppId	1	Guid		Optional AppID containing DCOM information for associated application (string GUID).
Class	Argument	Y					Formatted		optional argument for LocalServers.
Class	Attributes	Y		32767					Class registration attributes.
Class	CLSID	N					Guid		The CLSID of an OLE factory.
Class	Component_	N			Component	1	Identifier		Required foreign key into the Component Table, specifying the component for which to return a path when called through LocateComponent.
Class	Context	N					Identifier		The numeric server context for this server. CLSCTX_xxxx
Class	DefInprocHandler	Y					Filename	1;2;3	Optional default inproc handler. Only optionally provided if Context=CLSCTX_LOCAL_SERVER. Typically "ole32.dll" or "mapi32.dll"
Class	Description	Y					Text		Localized description for the Class.
Class	Feature_	N			Feature	1	Identifier		Required foreign key into the Feature Table, specifying the feature to validate or install in order for the CLSID factory to be operational.
Class	FileTypeMask	Y					Text		Optional string containing information for the HKCRthis CLSID) key. If multiple patterns exist, they must be delimited by a semicolon, and numeric subkeys will be generated: 0,1,2...
Class	Icon_	Y			Icon	1	Identifier		Optional foreign key into the Icon Table, specifying the icon file associated with this CLSID. Will be written under the DefaultIcon key.
Class	IconIndex	Y	-32767	32767					Optional icon index.
Class	ProgId_Default	Y			ProgId	1	Text		Optional ProgId associated with this CLSID.
ComboBox	Order	N	1	32767					A positive integer used to determine the ordering of the items within one list. The integers do not have to be consecutive.
ComboBox	Property	N					Identifier		A named property to be tied to this item. All the items tied to the same property become part of the same combobox.
ComboBox	Text	Y					Formatted		The visible text to be assigned to the item. Optional. If this entry or the entire column is missing, the text is the same as the value.
ComboBox	Value	N					Formatted		The value string associated with this item. Selecting the line will set the associated property to this value.
CompLocator	ComponentId	N					Guid		A string GUID unique to this component, version, and language.
CompLocator	Signature_	N					Identifier		The table key. The Signature_ represents a unique file signature and is also the foreign key in the Signature table.
CompLocator	Type	Y	0	1					A boolean value that determines if the registry value is a filename or a directory location.
Complus	Component_	N			Component	1	Identifier		Foreign key referencing Component that controls the ComPlus component.
Complus	ExpType	Y	0	32767					ComPlus component attributes.
Component	Attributes	N							Remote execution option, one of irsEnum
Component	Component	N					Identifier		Primary key used to identify a particular component record.
Component	ComponentId	Y					Guid		A string GUID unique to this component, version, and language.
Component	Condition	Y					Condition		A conditional statement that will disable this component if the specified condition evaluates to the 'True' state. If a component is disabled, it will not be installed, regardless of the 'Action' state associated with the component.
Component	Directory_	N			Directory	1	Identifier		Required key of a Directory table record. This is actually a property name whose value contains the actual path, set either by the AppSearch action or with the default setting obtained from the Directory table.
Component	KeyPath	Y			File;Registry;ODBCDataSource	1	Identifier		Either the primary key into the File table, Registry table, or ODBCDataSource table. This extract path is stored when the component is installed, and is used to detect the presence of the component and to return the path to it.
Condition	Condition	Y					Condition		Expression evaluated to determine if Level in the Feature table is to change.
Condition	Feature_	N			Feature	1	Identifier		Reference to a Feature entry in Feature table.
Condition	Level	N	0	32767					New selection Level to set in Feature table if Condition evaluates to TRUE.
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
CreateFolder	Component_	N			Component	1	Identifier		Foreign key into the Component table.
CreateFolder	Directory_	N			Directory	1	Identifier		Primary key, could be foreign key into the Directory table.
CustomAction	Action	N					Identifier		Primary key, name of action, normally appears in sequence table unless private use.
CustomAction	Source	Y					CustomSource		The table reference of the source of the code.
CustomAction	Target	Y					Formatted		Excecution parameter, depends on the type of custom action
CustomAction	Type	N	1	4095					The numeric custom action type, consisting of source location, code type, entry, option flags.
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
Directory	DefaultDir	N					DefaultDir		The default sub-path under parent's path.
Directory	Directory	N					Identifier		Unique identifier for directory entry, primary key. If a property by this name is defined, it contains the full path to the directory.
Directory	Directory_Parent	Y			Directory	1	Identifier		Reference to the entry in this table specifying the default parent directory. A record parented to itself or with a Null parent represents a root of the install tree.
DrLocator	Depth	Y	0	32767					The depth below the path to which the Signature_ is recursively searched. If absent, the depth is assumed to be 0.
DrLocator	Parent	Y					Identifier		The parent file signature. It is also a foreign key in the Signature table. If null and the Path column does not expand to a full path, then all the fixed drives of the user system are searched using the Path.
DrLocator	Path	Y					AnyPath		The path on the user system. This is a either a subpath below the value of the Parent or a full path. The path may contain properties enclosed within [ ] that will be expanded.
DrLocator	Signature_	N					Identifier		The Signature_ represents a unique file signature and is also the foreign key in the Signature table.
DuplicateFile	Component_	N			Component	1	Identifier		Foreign key referencing Component that controls the duplicate file.
DuplicateFile	DestFolder	Y					Identifier		Name of a property whose value is assumed to resolve to the full pathname to a destination folder.
DuplicateFile	DestName	Y					Filename		Filename to be given to the duplicate file.
DuplicateFile	File_	N			File	1	Identifier		Foreign key referencing the source file to be duplicated.
DuplicateFile	FileKey	N					Identifier		Primary key used to identify a particular file entry
Environment	Component_	N			Component	1	Identifier		Foreign key into the Component table referencing component that controls the installing of the environmental value.
Environment	Environment	N					Identifier		Unique identifier for the environmental variable setting
Environment	Name	N					Text		The name of the environmental value.
Environment	Value	Y					Formatted		The value to set in the environmental settings.
Error	Error	N	0	32767					Integer error number, obtained from header file IError(...) macros.
Error	Message	Y					Template		Error formatting template, obtained from user ed. or localizers.
EventMapping	Attribute	N					Identifier		The name of the control attribute, that is set when this event is received.
EventMapping	Control_	N			Control	2	Identifier		A foreign key to the Control table, name of the control.
EventMapping	Dialog_	N			Dialog	1	Identifier		A foreign key to the Dialog table, name of the Dialog.
EventMapping	Event	N					Identifier		An identifier that specifies the type of the event that the control subscribes to.
Extension	Component_	N			Component	1	Identifier		Required foreign key into the Component Table, specifying the component for which to return a path when called through LocateComponent.
Extension	Extension	N					Text		The extension associated with the table row.
Extension	Feature_	N			Feature	1	Identifier		Required foreign key into the Feature Table, specifying the feature to validate or install in order for the CLSID factory to be operational.
Extension	MIME_	Y			MIME	1	Text		Optional Context identifier, typically "type/format" associated with the extension
Extension	ProgId_	Y			ProgId	1	Text		Optional ProgId associated with this extension.
Feature	Attributes	N						0;1;2;4;5;6;8;9;10;16;17;18;20;21;22;24;25;26;32;33;34;36;37;38;48;49;50;52;53;54	Feature attributes
Feature	Description	Y					Text		Longer descriptive text describing a visible feature item.
Feature	Directory_	Y			Directory	1	UpperCase		The name of the Directory that can be configured by the UI. A non-null value will enable the browse button.
Feature	Display	Y	0	32767					Numeric sort order, used to force a specific display ordering.
Feature	Feature	N					Identifier		Primary key used to identify a particular feature record.
Feature	Feature_Parent	Y			Feature	1	Identifier		Optional key of a parent record in the same table. If the parent is not selected, then the record will not be installed. Null indicates a root item.
Feature	Level	N	0	32767					The install level at which record will be initially selected. An install level of 0 will disable an item and prevent its display.
Feature	Title	Y					Text		Short text identifying a visible feature item.
FeatureComponents	Component_	N			Component	1	Identifier		Foreign key into Component table.
FeatureComponents	Feature_	N			Feature	1	Identifier		Foreign key into Feature table.
File	Attributes	Y	0	32767					Integer containing bit flags representing file attributes (with the decimal value of each bit position in parentheses)
File	Component_	N			Component	1	Identifier		Foreign key referencing Component that controls the file.
File	File	N					Identifier		Primary key, non-localized token, must match identifier in cabinet. For uncompressed files, this field is ignored.
File	FileName	N					Filename		File name used for installation, may be localized. This may contain a "short name|long name" pair.
File	FileSize	N	0	2147483647					Size of file in bytes (long integer).
File	Language	Y					Language		List of decimal language Ids, comma-separated if more than one.
File	Sequence	N	1	32767					Sequence with respect to the media images; order must track cabinet order.
File	Version	Y			File	1	Version		Version string for versioned files; Blank for unversioned files.
FileSFPCatalog	File_	N			File	1	Identifier		File associated with the catalog
FileSFPCatalog	SFPCatalog_	N			SFPCatalog	1	Filename		Catalog associated with the file
Font	File_	N			File	1	Identifier		Primary key, foreign key into File table referencing font file.
Font	FontTitle	Y					Text		Font name.
Icon	Data	N					Binary		Binary stream. The binary icon data in PE (.DLL or .EXE) or icon (.ICO) format.
Icon	Name	N					Identifier		Primary key. Name of the icon file.
IniFile	Action	N						0;1;3	The type of modification to be made, one of iifEnum
IniFile	Component_	N			Component	1	Identifier		Foreign key into the Component table referencing component that controls the installing of the .INI value.
IniFile	DirProperty	Y					Identifier		Foreign key into the Directory table denoting the directory where the .INI file is.
IniFile	FileName	N					Filename		The .INI file name in which to write the information
IniFile	IniFile	N					Identifier		Primary key, non-localized token.
IniFile	Key	N					Formatted		The .INI file key below Section.
IniFile	Section	N					Formatted		The .INI file Section.
IniFile	Value	N					Formatted		The value to be written.
IniLocator	Field	Y	0	32767					The field in the .INI line. If Field is null or 0 the entire line is read.
IniLocator	FileName	N					Filename		The .INI file name.
IniLocator	Key	N					Text		Key value (followed by an equals sign in INI file).
IniLocator	Section	N					Text		Section name within in file (within square brackets in INI file).
IniLocator	Signature_	N					Identifier		The table key. The Signature_ represents a unique file signature and is also the foreign key in the Signature table.
IniLocator	Type	Y	0	2					An integer value that determines if the .INI value read is a filename or a directory location or to be used as is w/o interpretation.
InstallExecuteSequence	Action	N					Identifier		Name of action to invoke, either in the engine or the handler DLL.
InstallExecuteSequence	Condition	Y					Condition		Optional expression which skips the action if evaluates to expFalse.If the expression syntax is invalid, the engine will terminate, returning iesBadActionData.
InstallExecuteSequence	Sequence	Y	-4	32767					Number that determines the sort order in which the actions are to be executed. Leave blank to suppress action.
InstallUISequence	Action	N					Identifier		Name of action to invoke, either in the engine or the handler DLL.
InstallUISequence	Condition	Y					Condition		Optional expression which skips the action if evaluates to expFalse.If the expression syntax is invalid, the engine will terminate, returning iesBadActionData.
InstallUISequence	Sequence	Y	-4	32767					Number that determines the sort order in which the actions are to be executed. Leave blank to suppress action.
IsolatedComponent	Component_Application	N			Component	1	Identifier		Key to Component table item for application
IsolatedComponent	Component_Shared	N			Component	1	Identifier		Key to Component table item to be isolated
LaunchCondition	Condition	N					Condition		Expression which must evaluate to TRUE in order for install to commence.
LaunchCondition	Description	N					Text		Localizable text to display when condition fails and install must abort.
ListBox	Order	N	1	32767					A positive integer used to determine the ordering of the items within one list..The integers do not have to be consecutive.
ListBox	Property	N					Identifier		A named property to be tied to this item. All the items tied to the same property become part of the same listbox.
ListBox	Text	Y					Text		The visible text to be assigned to the item. Optional. If this entry or the entire column is missing, the text is the same as the value.
ListBox	Value	N					Formatted		The value string associated with this item. Selecting the line will set the associated property to this value.
ListView	Binary_	Y			Binary	1	Identifier		The name of the icon to be displayed with the icon. The binary information is looked up from the Binary Table.
ListView	Order	N	1	32767					A positive integer used to determine the ordering of the items within one list..The integers do not have to be consecutive.
ListView	Property	N					Identifier		A named property to be tied to this item. All the items tied to the same property become part of the same listview.
ListView	Text	Y					Text		The visible text to be assigned to the item. Optional. If this entry or the entire column is missing, the text is the same as the value.
ListView	Value	N					Identifier		The value string associated with this item. Selecting the line will set the associated property to this value.
LockPermissions	Domain	Y					Text		Domain name for user whose permissions are being set. (usually a property)
LockPermissions	LockObject	N					Identifier		Foreign key into Registry or File table
LockPermissions	Permission	Y	-2147483647	2147483647					Permission Access mask. Full Control = 268435456 (GENERIC_ALL = 0x10000000)
LockPermissions	Table	N					Identifier	Directory;File;Registry	Reference to another table name
LockPermissions	User	N					Text		User for permissions to be set. (usually a property)
Media	Cabinet	Y					Cabinet		If some or all of the files stored on the media are compressed in a cabinet, the name of that cabinet.
Media	DiskId	N	1	32767					Primary key, integer to determine sort order for table.
Media	DiskPrompt	Y					Text		Disk name: the visible text actually printed on the disk. This will be used to prompt the user when this disk needs to be inserted.
Media	LastSequence	N	0	32767					File sequence number for the last file for this media.
Media	Source	Y					Property		The property defining the location of the cabinet file.
Media	VolumeLabel	Y					Text		The label attributed to the volume.
MIME	CLSID	Y					Guid		Optional associated CLSID.
MIME	ContentType	N					Text		Primary key. Context identifier, typically "type/format".
MIME	Extension_	N			Extension	1	Text		Optional associated extension (without dot)
ModuleComponents	Component	N			Component	1	Identifier		Component contained in the module.
ModuleComponents	Language	N			ModuleSignature	2			Default language ID for module (may be changed by transform).
ModuleComponents	ModuleID	N			ModuleSignature	1	Identifier		Module containing the component.
ModuleDependency	ModuleID	N			ModuleSignature	1	Identifier		Module requiring the dependency.
ModuleDependency	ModuleLanguage	N			ModuleSignature	2			Language of module requiring the dependency.
ModuleDependency	RequiredID	N							String.GUID of required module.
ModuleDependency	RequiredLanguage	N							LanguageID of the required module.
ModuleDependency	RequiredVersion	Y					Version		Version of the required version.
ModuleExclusion	ExcludedID	N							String.GUID of excluded module.
ModuleExclusion	ExcludedLanguage	N							Language of excluded module.
ModuleExclusion	ExcludedMaxVersion	Y					Version		Maximum version of excluded module.
ModuleExclusion	ExcludedMinVersion	Y					Version		Minimum version of excluded module.
ModuleExclusion	ModuleID	N			ModuleSignature	1	Identifier		String.GUID of module with exclusion requirement.
ModuleExclusion	ModuleLanguage	N			ModuleSignature	2			LanguageID of module with exclusion requirement.
ModuleSignature	Language	N							Default decimal language of module.
ModuleSignature	ModuleID	N					Identifier		Module identifier (String.GUID).
ModuleSignature	Version	N					Version		Version of the module.
MoveFile	Component_	N			Component	1	Identifier		If this component is not "selected" for installation or removal, no action will be taken on the associated MoveFile entry
MoveFile	DestFolder	N					Identifier		Name of a property whose value is assumed to resolve to the full path to the destination directory
MoveFile	DestName	Y					Filename		Name to be given to the original file after it is moved or copied. If blank, the destination file will be given the same name as the source file
MoveFile	FileKey	N					Identifier		Primary key that uniquely identifies a particular MoveFile record
MoveFile	Options	N	0	1					Integer value specifying the MoveFile operating mode, one of imfoEnum
MoveFile	SourceFolder	Y					Identifier		Name of a property whose value is assumed to resolve to the full path to the source directory
MoveFile	SourceName	Y					WildCardFilename		Name of the source file(s) to be moved or copied. Can contain the '*' or '?' wildcards.
MsiAssembly	Attributes	Y							Assembly attributes
MsiAssembly	Component_	N			Component	1	Identifier		Foreign key into Component table.
MsiAssembly	Feature_	N			Feature	1	Identifier		Foreign key into Feature table.
MsiAssembly	File_Application	Y			File	1	Identifier		Foreign key into File table, denoting the application context for private assemblies. Null for global assemblies.
MsiAssembly	File_Manifest	Y			File	1	Identifier		Foreign key into the File table denoting the manifest file for the assembly.
MsiAssemblyName	Component_	N			Component	1	Identifier		Foreign key into Component table.
MsiAssemblyName	Name	N					Text		The name part of the name-value pairs for the assembly name.
MsiAssemblyName	Value	N					Text		The value part of the name-value pairs for the assembly name.
MsiDigitalCertificate	CertData	N					Binary		A certificate context blob for a signer certificate
MsiDigitalCertificate	DigitalCertificate	N					Identifier		A unique identifier for the row
MsiDigitalSignature	DigitalCertificate_	N			MsiDigitalCertificate	1	Identifier		Foreign key to MsiDigitalCertificate table identifying the signer certificate
MsiDigitalSignature	Hash	Y					Binary		The encoded hash blob from the digital signature
MsiDigitalSignature	SignObject	N					Text		Foreign key to Media table
MsiDigitalSignature	Table	N					Identifier		Reference to another table name (only Media table is supported)
MsiFileHash	File_	N			File	1	Identifier		Primary key, foreign key into File table referencing file with this hash
MsiFileHash	HashPart1	N							Size of file in bytes (long integer).
MsiFileHash	HashPart2	N							Size of file in bytes (long integer).
MsiFileHash	HashPart3	N							Size of file in bytes (long integer).
MsiFileHash	HashPart4	N							Size of file in bytes (long integer).
MsiFileHash	Options	N	0	32767					Various options and attributes for this hash.
MsiPatchHeaders	Header	N					Binary		Binary stream. The patch header, used for patch validation.
MsiPatchHeaders	StreamRef	N					Identifier		Primary key. A unique identifier for the row.
MsiSFCBypass	File_	N					Identifier		foreign key to File.File
ODBCAttribute	Attribute	N					Text		Name of ODBC driver attribute
ODBCAttribute	Driver_	N			ODBCDriver	1	Identifier		Reference to ODBC driver in ODBCDriver table
ODBCAttribute	Value	Y					Text		Value for ODBC driver attribute
ODBCDataSource	Component_	N			Component	1	Identifier		Reference to associated component
ODBCDataSource	DataSource	N					Identifier		Primary key, non-localized.internal token for data source
ODBCDataSource	Description	N					Text		Text used as registered name for data source
ODBCDataSource	DriverDescription	N					Text		Reference to driver description, may be existing driver
ODBCDataSource	Registration	N	0	1					Registration option: 0=machine, 1=user, others t.b.d.
ODBCDriver	Component_	N			Component	1	Identifier		Reference to associated component
ODBCDriver	Description	N					Text		Text used as registered name for driver, non-localized
ODBCDriver	Driver	N					Identifier		Primary key, non-localized.internal token for driver
ODBCDriver	File_	N			File	1	Identifier		Reference to key driver file
ODBCDriver	File_Setup	Y			File	1	Identifier		Optional reference to key driver setup DLL
ODBCSourceAttribute	Attribute	N					Text		Name of ODBC data source attribute
ODBCSourceAttribute	DataSource_	N			ODBCDataSource	1	Identifier		Reference to ODBC data source in ODBCDataSource table
ODBCSourceAttribute	Value	Y					Text		Value for ODBC data source attribute
ODBCTranslator	Component_	N			Component	1	Identifier		Reference to associated component
ODBCTranslator	Description	N					Text		Text used as registered name for translator
ODBCTranslator	File_	N			File	1	Identifier		Reference to key translator file
ODBCTranslator	File_Setup	Y			File	1	Identifier		Optional reference to key translator setup DLL
ODBCTranslator	Translator	N					Identifier		Primary key, non-localized.internal token for translator
Patch	Attributes	N	0	32767					Integer containing bit flags representing patch attributes
Patch	File_	N					Identifier		Primary key, non-localized token, foreign key to File table, must match identifier in cabinet.
Patch	Header	N					Binary		Binary stream. The patch header, used for patch validation.
Patch	PatchSize	N	0	2147483647					Size of patch in bytes (long integer).
Patch	Sequence	N	0	32767					Primary key, sequence with respect to the media images; order must track cabinet order.
Patch	StreamRef_	Y					Identifier		Identifier. Foreign key to the StreamRef column of the MsiPatchHeaders table.
PatchPackage	Media_	N	0	32767					Foreign key to DiskId column of Media table. Indicates the disk containing the patch package.
PatchPackage	PatchId	N					Guid		A unique string GUID representing this patch.
ProgId	Class_	Y			Class	1	Guid		The CLSID of an OLE factory corresponding to the ProgId.
ProgId	Description	Y					Text		Localized description for the Program identifier.
ProgId	Icon_	Y			Icon	1	Identifier		Optional foreign key into the Icon Table, specifying the icon file associated with this ProgId. Will be written under the DefaultIcon key.
ProgId	IconIndex	Y	-32767	32767					Optional icon index.
ProgId	ProgId	N					Text		The Program Identifier. Primary key.
ProgId	ProgId_Parent	Y			ProgId	1	Text		The Parent Program Identifier. If specified, the ProgId column becomes a version independent prog id.
Property	Property	N					Identifier		Name of property, uppercase if settable by launcher or loader.
Property	Value	N					Text		String value for property. Never null or empty.
PublishComponent	AppData	Y					Text		This is localisable Application specific data that can be associated with a Qualified Component.
PublishComponent	Component_	N			Component	1	Identifier		Foreign key into the Component table.
PublishComponent	ComponentId	N					Guid		A string GUID that represents the component id that will be requested by the alien product.
PublishComponent	Feature_	N			Feature	1	Identifier		Foreign key into the Feature table.
PublishComponent	Qualifier	N					Text		This is defined only when the ComponentId column is an Qualified Component Id. This is the Qualifier for ProvideComponentIndirect.
RadioButton	Height	N	0	32767					The height of the button.
RadioButton	Help	Y					Text		The help strings used with the button. The text is optional.
RadioButton	Order	N	1	32767					A positive integer used to determine the ordering of the items within one list..The integers do not have to be consecutive.
RadioButton	Property	N					Identifier		A named property to be tied to this radio button. All the buttons tied to the same property become part of the same group.
RadioButton	Text	Y					Text		The visible title to be assigned to the radio button.
RadioButton	Value	N					Formatted		The value string associated with this button. Selecting the button will set the associated property to this value.
RadioButton	Width	N	0	32767					The width of the button.
RadioButton	X	N	0	32767					The horizontal coordinate of the upper left corner of the bounding rectangle of the radio button.
RadioButton	Y	N	0	32767					The vertical coordinate of the upper left corner of the bounding rectangle of the radio button.
Registry	Component_	N			Component	1	Identifier		Foreign key into the Component table referencing component that controls the installing of the registry value.
Registry	Key	N					RegPath		The key for the registry value.
Registry	Name	Y					Formatted		The registry value name.
Registry	Registry	N					Identifier		Primary key, non-localized token.
Registry	Root	N	-1	3					The predefined root key for the registry value, one of rrkEnum.
Registry	Value	Y					Formatted		The registry value.
RegLocator	Key	N					RegPath		The key for the registry value.
RegLocator	Name	Y					Formatted		The registry value name.
RegLocator	Root	N	0	3					The predefined root key for the registry value, one of rrkEnum.
RegLocator	Signature_	N					Identifier		The table key. The Signature_ represents a unique file signature and is also the foreign key in the Signature table. If the type is 0, the registry values refers a directory, and _Signature is not a foreign key.
RegLocator	Type	Y	0	18					An integer value that determines if the registry value is a filename or a directory location or to be used as is w/o interpretation.
RemoveFile	Component_	N			Component	1	Identifier		Foreign key referencing Component that controls the file to be removed.
RemoveFile	DirProperty	N					Identifier		Name of a property whose value is assumed to resolve to the full pathname to the folder of the file to be removed.
RemoveFile	FileKey	N					Identifier		Primary key used to identify a particular file entry
RemoveFile	FileName	Y					WildCardFilename		Name of the file to be removed.
RemoveFile	InstallMode	N						1;2;3	Installation option, one of iimEnum.
RemoveIniFile	Action	N						2;4	The type of modification to be made, one of iifEnum.
RemoveIniFile	Component_	N			Component	1	Identifier		Foreign key into the Component table referencing component that controls the deletion of the .INI value.
RemoveIniFile	DirProperty	Y					Identifier		Foreign key into the Directory table denoting the directory where the .INI file is.
RemoveIniFile	FileName	N					Filename		The .INI file name in which to delete the information
RemoveIniFile	Key	N					Formatted		The .INI file key below Section.
RemoveIniFile	RemoveIniFile	N					Identifier		Primary key, non-localized token.
RemoveIniFile	Section	N					Formatted		The .INI file Section.
RemoveIniFile	Value	Y					Formatted		The value to be deleted. The value is required when Action is iifIniRemoveTag
RemoveRegistry	Component_	N			Component	1	Identifier		Foreign key into the Component table referencing component that controls the deletion of the registry value.
RemoveRegistry	Key	N					RegPath		The key for the registry value.
RemoveRegistry	Name	Y					Formatted		The registry value name.
RemoveRegistry	RemoveRegistry	N					Identifier		Primary key, non-localized token.
RemoveRegistry	Root	N	-1	3					The predefined root key for the registry value, one of rrkEnum
ReserveCost	Component_	N			Component	1	Identifier		Reserve a specified amount of space if this component is to be installed.
ReserveCost	ReserveFolder	Y					Identifier		Name of a property whose value is assumed to resolve to the full path to the destination directory
ReserveCost	ReserveKey	N					Identifier		Primary key that uniquely identifies a particular ReserveCost record
ReserveCost	ReserveLocal	N	0	2147483647					Disk space to reserve if linked component is installed locally.
ReserveCost	ReserveSource	N	0	2147483647					Disk space to reserve if linked component is installed to run from the source location.
SelfReg	Cost	Y	0	32767					The cost of registering the module.
SelfReg	File_	N			File	1	Identifier		Foreign key into the File table denoting the module that needs to be registered.
ServiceControl	Arguments	Y					Formatted		Arguments for the service. Separate by [~].
ServiceControl	Component_	N			Component	1	Identifier		Required foreign key into the Component Table that controls the startup of the service
ServiceControl	Event	N	0	187					Bit field: Install: 0x1 = Start, 0x2 = Stop, 0x8 = Delete, Uninstall: 0x10 = Start, 0x20 = Stop, 0x80 = Delete
ServiceControl	Name	N					Formatted		Name of a service. /, \, comma and space are invalid
ServiceControl	ServiceControl	N					Identifier		Primary key, non-localized token.
ServiceControl	Wait	Y	0	1					Boolean for whether to wait for the service to fully start
ServiceInstall	Arguments	Y					Formatted		Arguments to include in every start of the service, passed to WinMain
ServiceInstall	Component_	N			Component	1	Identifier		Required foreign key into the Component Table that controls the startup of the service
ServiceInstall	Dependencies	Y					Formatted		Other services this depends on to start. Separate by [~], and end with [~][~]
ServiceInstall	Description	Y					Text		Description of service.
ServiceInstall	DisplayName	Y					Formatted		External Name of the Service
ServiceInstall	ErrorControl	N	-2147483647	2147483647					Severity of error if service fails to start
ServiceInstall	LoadOrderGroup	Y					Formatted		LoadOrderGroup
ServiceInstall	Name	N					Formatted		Internal Name of the Service
ServiceInstall	Password	Y					Formatted		password to run service with. (with StartName)
ServiceInstall	ServiceInstall	N					Identifier		Primary key, non-localized token.
ServiceInstall	ServiceType	N	-2147483647	2147483647					Type of the service
ServiceInstall	StartName	Y					Formatted		User or object name to run service as
ServiceInstall	StartType	N	0	3					Type of the service
SFPCatalog	Catalog	N					Binary		SFP Catalog
SFPCatalog	Dependency	Y					Formatted		Parent catalog - only used by SFP
SFPCatalog	SFPCatalog	N					Filename		File name for the catalog.
Shortcut	Arguments	Y					Formatted		The command-line arguments for the shortcut.
Shortcut	Component_	N			Component	1	Identifier		Foreign key into the Component table denoting the component whose selection gates the the shortcut creation/deletion.
Shortcut	Description	Y					Text		The description for the shortcut.
Shortcut	Directory_	N			Directory	1	Identifier		Foreign key into the Directory table denoting the directory where the shortcut file is created.
Shortcut	Hotkey	Y	0	32767					The hotkey for the shortcut. It has the virtual-key code for the key in the low-order byte, and the modifier flags in the high-order byte. 
Shortcut	Icon_	Y			Icon	1	Identifier		Foreign key into the File table denoting the external icon file for the shortcut.
Shortcut	IconIndex	Y	-32767	32767					The icon index for the shortcut.
Shortcut	Name	N					Filename		The name of the shortcut to be created.
Shortcut	Shortcut	N					Identifier		Primary key, non-localized token.
Shortcut	ShowCmd	Y						1;3;7	The show command for the application window.The following values may be used.
Shortcut	Target	N					Shortcut		The shortcut target. This is usually a property that is expanded to a file or a folder that the shortcut points to.
Shortcut	WkDir	Y					Identifier		Name of property defining location of working directory.
Signature	FileName	N					Filename		The name of the file. This may contain a "short name|long name" pair.
Signature	Languages	Y					Language		The languages supported by the file.
Signature	MaxDate	Y	0	2147483647					The maximum creation date of the file.
Signature	MaxSize	Y	0	2147483647					The maximum size of the file. 
Signature	MaxVersion	Y					Text		The maximum version of the file.
Signature	MinDate	Y	0	2147483647					The minimum creation date of the file.
Signature	MinSize	Y	0	2147483647					The minimum size of the file.
Signature	MinVersion	Y					Text		The minimum version of the file.
Signature	Signature	N					Identifier		The table key. The Signature represents a unique file signature.
SxsMsmGenComponents	Guid	N					Guid		ComponentId
SxsMsmGenComponents	Component_	N					Identifier		Component Name
TextStyle	Color	Y	0	16777215					A long integer indicating the color of the string in the RGB format (Red, Green, Blue each 0-255, RGB = R + 256*G + 256^2*B).
TextStyle	FaceName	N					Text		A string indicating the name of the font used. Required. The string must be at most 31 characters long.
TextStyle	Size	N	0	32767					The size of the font used. This size is given in our units (1/12 of the system font height). Assuming that the system font is set to 12 point size, this is equivalent to the point size.
TextStyle	StyleBits	Y	0	15					A combination of style bits.
TextStyle	TextStyle	N					Identifier		Name of the style. The primary key of this table. This name is embedded in the texts to indicate a style change.
TypeLib	Component_	N			Component	1	Identifier		Required foreign key into the Component Table, specifying the component for which to return a path when called through LocateComponent.
TypeLib	Cost	Y	0	2147483647					The cost associated with the registration of the typelib. This column is currently optional.
TypeLib	Description	Y					Text		
TypeLib	Directory_	Y			Directory	1	Identifier		Optional. The foreign key into the Directory table denoting the path to the help file for the type library.
TypeLib	Feature_	N			Feature	1	Identifier		Required foreign key into the Feature Table, specifying the feature to validate or install in order for the type library to be operational.
TypeLib	Language	N	0	32767					The language of the library.
TypeLib	LibID	N					Guid		The GUID that represents the library.
TypeLib	Version	Y	0	32767					The version of the library. The major version is in the upper 8 bits of the short integer. The minor version is in the lower 8 bits.
UIText	Key	N					Identifier		A unique key that identifies the particular string.
UIText	Text	Y					Text		The localized version of the string.
Upgrade	ActionProperty	N					UpperCase		The property to set when a product in this set is found.
Upgrade	Attributes	N	0	2147483647					The attributes of this product set.
Upgrade	Language	Y					Language		A comma-separated list of languages for either products in this set or products not in this set.
Upgrade	Remove	Y					Formatted		The list of features to remove when uninstalling a product from this set. The default is "ALL".
Upgrade	UpgradeCode	N					Guid		The UpgradeCode GUID belonging to the products in this set.
Upgrade	VersionMax	Y					Text		The maximum ProductVersion of the products in this set. The set may or may not include products with this particular version.
Upgrade	VersionMin	Y					Text		The minimum ProductVersion of the products in this set. The set may or may not include products with this particular version.
Verb	Argument	Y					Formatted		Optional value for the command arguments.
Verb	Command	Y					Formatted		The command text.
Verb	Extension_	N			Extension	1	Text		The extension associated with the table row.
Verb	Sequence	Y	0	32767					Order within the verbs for a particular extension. Also used simply to specify the default verb.
Verb	Verb	N					Text		The verb for the command.
<<NOKEEP


######################################################################
# ActionText

All :: "$(LANG).$(PLAT).$(CFG).ActionText-2.idt"

"En.$(PLAT).$(CFG).ActionText-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
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

"De.$(PLAT).$(CFG).ActionText-2.idt" : "En.$(PLAT).$(CFG).ActionText-2.idtx" "..\L10N\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).ActionText-2.idt" : "En.$(PLAT).$(CFG).ActionText-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).ActionText-2.idt" : "En.$(PLAT).$(CFG).ActionText-2.idtx" "..\L10N\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).ActionText-2.idt" : "En.$(PLAT).$(CFG).ActionText-2.idtx" "..\L10N\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# AdminExecuteSequence

All :: "$(LANG).$(PLAT).$(CFG).AdminExecuteSequence-1.idt"

"$(LANG).$(PLAT).$(CFG).AdminExecuteSequence-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
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
# AdvtExecuteSequence

All :: "$(LANG).$(PLAT).$(CFG).AdvtExecuteSequence-1.idt"

"$(LANG).$(PLAT).$(CFG).AdvtExecuteSequence-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Action	Condition	Sequence
s$(MSIBUILD_LENGTH_ID)	S255	I2
AdvtExecuteSequence	Action
CostInitialize		800
CostFinalize		1000
InstallValidate		1400
InstallInitialize		1500
CreateShortcuts		4500
RegisterClassInfo		4600
RegisterExtensionInfo		4700
RegisterProgIdInfo		4800
RegisterMIMEInfo		4900
PublishComponents		6200
PublishFeatures		6300
PublishProduct		6400
InstallFinalize		6600
<<NOKEEP


######################################################################
# AppSearch

All :: "$(LANG).$(PLAT).$(CFG).AppSearch-1.idt"

"$(LANG).$(PLAT).$(CFG).AppSearch-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Signature_
s$(MSIBUILD_LENGTH_ID)	s$(MSIBUILD_LENGTH_ID)
AppSearch	Property	Signature_
<<NOKEEP


######################################################################
# BBControl

All :: "$(LANG).$(PLAT).$(CFG).BBControl-1.idt"

"$(LANG).$(PLAT).$(CFG).BBControl-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Billboard_	BBControl	Type	X	Y	Width	Height	Attributes	Text
s50	s50	s50	i2	i2	i2	i2	I4	L50
BBControl	Billboard_	BBControl
<<NOKEEP


######################################################################
# Billboard

All :: "$(LANG).$(PLAT).$(CFG).Billboard-1.idt"

"$(LANG).$(PLAT).$(CFG).Billboard-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Billboard	Feature_	Action	Ordering
s50	s$(MSIBUILD_LENGTH_ID)	S50	I2
Billboard	Billboard
<<NOKEEP


######################################################################
# Binary

All :: \
	"$(LANG).$(PLAT).$(CFG).Binary-1" \
	"$(LANG).$(PLAT).$(CFG).Binary-1.idt"

"$(LANG).$(PLAT).$(CFG).Binary-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Name	Data
s$(MSIBUILD_LENGTH_ID)	v0
Binary	Name
<<NOKEEP


######################################################################
# CheckBox

All :: "$(LANG).$(PLAT).$(CFG).CheckBox-1.idt"

"$(LANG).$(PLAT).$(CFG).CheckBox-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Value
s$(MSIBUILD_LENGTH_ID)	S64
CheckBox	Property
<<NOKEEP


######################################################################
# ComboBox

All :: "$(LANG).$(PLAT).$(CFG).ComboBox-1.idt"

"$(LANG).$(PLAT).$(CFG).ComboBox-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Order	Value	Text
s$(MSIBUILD_LENGTH_ID)	i2	s64	L64
ComboBox	Property	Order
<<NOKEEP


######################################################################
# Control

All :: "$(LANG).$(PLAT).$(CFG).Control-1.idt"

"$(LANG).$(PLAT).$(CFG).Control-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog_	Control	Type	X	Y	Width	Height	Attributes	Property	Text	Control_Next	Help
s$(MSIBUILD_LENGTH_ID)	s50	s20	i2	i2	i2	i2	I4	S50	L0	S50	L$(MSIBUILD_LENGTH_HELP)
Control	Dialog_	Control
<<NOKEEP


######################################################################
# ControlCondition

All :: "$(LANG).$(PLAT).$(CFG).ControlCondition-1.idt"

"$(LANG).$(PLAT).$(CFG).ControlCondition-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog_	Control_	Action	Condition
s$(MSIBUILD_LENGTH_ID)	s50	s50	s255
ControlCondition	Dialog_	Control_	Action	Condition
<<NOKEEP


######################################################################
# ControlEvent

All :: "$(LANG).$(PLAT).$(CFG).ControlEvent-1.idt"

"$(LANG).$(PLAT).$(CFG).ControlEvent-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog_	Control_	Event	Argument	Condition	Ordering
s$(MSIBUILD_LENGTH_ID)	s50	s50	s255	S255	I2
ControlEvent	Dialog_	Control_	Event	Argument	Condition
<<NOKEEP


######################################################################
# CreateFolder

All :: "$(LANG).$(PLAT).$(CFG).CreateFolder-1.idt"

"$(LANG).$(PLAT).$(CFG).CreateFolder-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Directory_	Component_
s$(MSIBUILD_LENGTH_ID)	s$(MSIBUILD_LENGTH_ID)
CreateFolder	Directory_	Component_
<<NOKEEP


######################################################################
# CustomAction

All :: "$(LANG).$(PLAT).$(CFG).CustomAction-2.idt"

"En.$(PLAT).$(CFG).CustomAction-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Action	Type	Source	Target
s$(MSIBUILD_LENGTH_ID)	i2	S$(MSIBUILD_LENGTH_ID)	S255
1252	CustomAction	Action
!IFDEF MSIBUILD_NO_WOW64
!IF "$(PLAT)" == "Win32"
caWoW64Unsupported	19		You are attempting to install the 32-bit variant of [SimpleProductName] on a 64-bit operating system. 32-bit variant will not work with your operating system. The installation of the 64-bit variant is recommended.
!ENDIF
!ENDIF
caNewerProductFound	19		A newer version of [SimpleProductName] is already installed.
caFaultyProductFound	19		This package cannot upgrade the currently installed [SimpleProductName]. Please remove the old package first and retry.
<<NOKEEP

"De.$(PLAT).$(CFG).CustomAction-2.idt" : "En.$(PLAT).$(CFG).CustomAction-2.idtx" "..\L10N\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).CustomAction-2.idt" : "En.$(PLAT).$(CFG).CustomAction-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).CustomAction-2.idt" : "En.$(PLAT).$(CFG).CustomAction-2.idtx" "..\L10N\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).CustomAction-2.idt" : "En.$(PLAT).$(CFG).CustomAction-2.idtx" "..\L10N\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# Dialog

All :: "$(LANG).$(PLAT).$(CFG).Dialog-1.idt"

"$(LANG).$(PLAT).$(CFG).Dialog-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog	HCentering	VCentering	Width	Height	Attributes	Title	Control_First	Control_Default	Control_Cancel
s$(MSIBUILD_LENGTH_ID)	i2	i2	i2	i2	I4	L128	s50	S50	S50
Dialog	Dialog
<<NOKEEP


######################################################################
# Error

All :: "$(LANG).$(PLAT).$(CFG).Error-2.idt"

"En.$(PLAT).$(CFG).Error-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Error	Message
i2	L0
1252	Error	Error
0	{{Fatal error: }}
1	{{Error [1]. }}
2	Warning [1]. 
3	
4	Info [1]. 
5	The installer has encountered an unexpected error installing this package. This may indicate a problem with this package. The error code is [1]. {{The arguments are: [2], [3], [4]}}
6	
7	{{Disk full: }}
8	Action [Time]: [1]. [2]
9	[SimpleProductName]
10	{[2]}{, [3]}{, [4]}
11	Message type: [1], Argument: [2]
12	=== Logging started: [Date] [Time] ===
13	=== Logging stopped: [Date] [Time] ===
14	Action start [Time]: [1].
15	Action ended [Time]: [1]. Return value [2].
16	Time remaining: {[1] minutes }{[2] seconds}
17	Out of memory. Shut down other applications before retrying.
18	Installer is no longer responding.
19	Installer stopped prematurely.
20	Please wait while Windows configures [SimpleProductName]
21	Gathering required information...
22	Removing older versions of this application...
23	Preparing to remove older versions of this application...
32	[SimpleProductName] Setup completed successfully.
33	{[SimpleProductName] }Setup failed.
1101	Error reading from file: [2]. {{ System error [3].}} Verify that the file exists and that you can access it.
1301	Cannot create the file '[2]'. A folder with this name already exists. Cancel the install and try installing to a different location.
1302	Please insert the disk: [2]
1303	The installer has insufficient privileges to access this folder: [2]. The installation cannot continue. Log on as administrator or contact your system administrator.
1304	Error writing to file: [2]. Verify that you have access to that folder.
1305	Error reading from file [2]. {{ System error [3].}} Verify that the file exists and that you can access it.
1306	Another application has exclusive access to the file '[2]'. Please shut down all other applications, then click Retry.
1307	There is not enough disk space to install this file: [2]. Free some disk space and click Retry, or click Cancel to exit.
1308	Source file not found: [2]. Verify that the file exists and that you can access it.
1309	Error reading from file: [3]. {{ System error [2].}} Verify that the file exists and that you can access it.
1310	Error writing to file: [3]. {{ System error [2].}} Verify that you have access to that folder.
1311	Source file not found{{(cabinet)}}: [2]. Verify that the file exists and that you can access it.
1312	Cannot create the folder '[2]'. A file with this name already exists. Please rename or remove the file and click retry, or click Cancel to exit.
1313	The volume [2] is currently unavailable. Please select another.
1314	The specified path '[2]' is unavailable.
1315	Unable to write to the specified folder: [2].
1316	A network error occurred while attempting to read from the file: [2]
1317	An error occurred while attempting to create the folder: [2]
1318	A network error occurred while attempting to create the folder: [2]
1319	A network error occurred while attempting to open the source file cabinet: [2]
1320	The specified path is too long: [2]
1321	The Installer has insufficient privileges to modify this file: [2].
1322	A portion of the folder path '[2]' is invalid. It is either empty or exceeds the length allowed by the system.
1323	The folder path '[2]' contains words that are not valid in folder paths.
1324	The folder path '[2]' contains an invalid character.
1325	'[2]' is not a valid short file name.
1326	Error getting file security: [3] GetLastError: [2]
1327	Invalid Drive: [2]
1328	Error applying patch to file [2]. It has probably been updated by other means, and can no longer be modified by this patch. For more information contact your patch vendor. {{System Error: [3]}}
1329	A file that is required cannot be installed because the cabinet file [2] is not digitally signed. This may indicate that the cabinet file is corrupt.
1330	A file that is required cannot be installed because the cabinet file [2] has an invalid digital signature. This may indicate that the cabinet file is corrupt.{{ Error [3] was returned by WinVerifyTrust.}}
1331	Failed to correctly copy [2] file: CRC error.
1332	Failed to correctly move [2] file: CRC error.
1333	Failed to correctly patch [2] file: CRC error.
1334	The file '[2]' cannot be installed because the file cannot be found in cabinet file '[3]'. This could indicate a network error, an error reading from the CD-ROM, or a problem with this package.
1335	The cabinet file '[2]' required for this installation is corrupt and cannot be used. This could indicate a network error, an error reading from the CD-ROM, or a problem with this package.
1336	There was an error creating a temporary file that is needed to complete this installation.{{ Folder: [3]. System error code: [2]}}
1401	Could not create key: [2]. {{ System error [3].}} Verify that you have sufficient access to that key, or contact your support personnel. 
1402	Could not open key: [2]. {{ System error [3].}} Verify that you have sufficient access to that key, or contact your support personnel. 
1403	Could not delete value [2] from key [3]. {{ System error [4].}} Verify that you have sufficient access to that key, or contact your support personnel. 
1404	Could not delete key [2]. {{ System error [3].}} Verify that you have sufficient access to that key, or contact your support personnel. 
1405	Could not read value [2] from key [3]. {{ System error [4].}} Verify that you have sufficient access to that key, or contact your support personnel. 
1406	Could not write value [2] to key [3]. {{ System error [4].}} Verify that you have sufficient access to that key, or contact your support personnel.
1407	Could not get value names for key [2]. {{ System error [3].}} Verify that you have sufficient access to that key, or contact your support personnel.
1408	Could not get sub key names for key [2]. {{ System error [3].}} Verify that you have sufficient access to that key, or contact your support personnel.
1409	Could not read security information for key [2]. {{ System error [3].}} Verify that you have sufficient access to that key, or contact your support personnel.
1410	Could not increase the available registry space. [2] KB of free registry space is required for the installation of this application.
1500	Another installation is in progress. You must complete that installation before continuing this one.
1501	Error accessing secured data. Please make sure the Windows Installer is configured properly and try the install again.
1502	User '[2]' has previously initiated an install for product '[3]'. That user will need to run that install again before they can use that product. Your current install will now continue.
1503	User '[2]' has previously initiated an install for product '[3]'. That user will need to run that install again before they can use that product.
1601	Out of disk space -- Volume: '[2]'; required space: [3] KB; available space: [4] KB. Free some disk space and retry.
1602	Are you sure you want to cancel?
1603	The file [2][3] is being held in use{ by the following process: Name: [4], Id: [5], Window Title: '[6]'}. Close that application and retry.
1604	The product '[2]' is already installed, preventing the installation of this product. The two products are incompatible.
1605	There is not enough disk space on the volume '[2]' to continue the install with recovery enabled. [3] KB are required, but only [4] KB are available. Click Ignore to continue the install without saving recovery information, click Retry to check for available space again, or click Cancel to quit the installation.
1606	Could not access network location [2].
1607	The following applications should be closed before continuing the install:
1608	Could not find any previously installed compliant products on the machine for installing this product.
1609	An error occurred while applying security settings. [2] is not a valid user or group. This could be a problem with the package, or a problem connecting to a domain controller on the network. Check your network connection and click Retry, or Cancel to end the install. {{Unable to locate the user's SID, system error [3]}}
1633	This installation package is not supported on this platform. Contact your application vendor.
1701	The key [2] is not valid. Verify that you entered the correct key.
1702	The installer must restart your system before configuration of [2] can continue. Click Yes to restart now or No if you plan to manually restart later.
1703	You must restart your system for the configuration changes made to [2] to take effect. Click Yes to restart now or No if you plan to manually restart later.
1704	An installation for [2] is currently suspended. You must undo the changes made by that installation to continue. Do you want to undo those changes?
1705	A previous installation for this product is in progress. You must undo the changes made by that installation to continue. Do you want to undo those changes?
1706	An installation package for the product [2] cannot be found. Try the installation again using a valid copy of the installation package '[3]'.
1707	Installation completed successfully.
1708	Installation failed.
1709	Product: [2] -- [3]
1710	You may either restore your computer to its previous state or continue the install later. Would you like to restore?
1711	An error occurred while writing installation information to disk. Check to make sure enough disk space is available, and click Retry, or Cancel to end the install.
1712	One or more of the files required to restore your computer to its previous state could not be found. Restoration will not be possible.
1713	[2] cannot install one of its required products. Contact your technical support group. {{System Error: [3].}}
1714	The older version of [2] cannot be removed. Contact your technical support group. {{System Error [3].}}
1715	Installed [2]
1716	Configured [2]
1717	Removed [2]
1718	File [2] was rejected by digital signature policy.
1719	The Windows Installer Service could not be accessed. This can occur if you are running Windows in safe mode, or if the Windows Installer is not correctly installed. Contact your support personnel for assistance.
1720	There is a problem with this Windows Installer package. A script required for this install to complete could not be run. Contact your support personnel or package vendor. {{Custom action [2] script error [3], [4]: [5] Line [6], Column [7], [8] }}
1721	There is a problem with this Windows Installer package. A programme required for this install to complete could not be run. Contact your support personnel or package vendor. {{Action: [2], location: [3], command: [4] }}
1722	There is a problem with this Windows Installer package. A programme run as part of the setup did not finish as expected. Contact your support personnel or package vendor. {{Action [2], location: [3], command: [4] }}
1723	There is a problem with this Windows Installer package. A DLL required for this install to complete could not be run. Contact your support personnel or package vendor. {{Action [2], entry: [3], library: [4] }}
1724	Removal completed successfully.
1725	Removal failed.
1726	Advertisement completed successfully.
1727	Advertisement failed.
1728	Configuration completed successfully.
1729	Configuration failed.
1730	You must be an Administrator to remove this application. To remove this application, you can log on as an Administrator, or contact your technical support group for assistance.
1801	The path [2] is not valid. Please specify a valid path.
1802	Out of memory. Shut down other applications before retrying.
1803	There is no disk in drive [2]. Please insert one and click Retry, or click Cancel to go back to the previously selected volume.
1804	There is no disk in drive [2]. Please insert one and click Retry, or click Cancel to return to the browse dialog and select a different volume.
1805	The folder [2] does not exist. Please enter a path to an existing folder.
1806	You have insufficient privileges to read this folder.
1807	A valid destination folder for the install could not be determined.
1901	Error attempting to read from the source install database: [2].
1902	Scheduling reboot operation: Renaming file [2] to [3]. Must reboot to complete operation.
1903	Scheduling reboot operation: Deleting file [2]. Must reboot to complete operation.
1904	Module [2] failed to register. HRESULT [3]. Contact your support personnel.
1905	Module [2] failed to unregister. HRESULT [3]. Contact your support personnel.
1906	Failed to cache package [2]. Error: [3]. Contact your support personnel.
1907	Could not register font [2]. Verify that you have sufficient permissions to install fonts, and that the system supports this font.
1908	Could not unregister font [2]. Verify that you that you have sufficient permissions to remove fonts.
1909	Could not create Shortcut [2]. Verify that the destination folder exists and that you can access it.
1910	Could not remove Shortcut [2]. Verify that the shortcut file exists and that you can access it.
1911	Could not register type library for file [2]. Contact your support personnel.
1912	Could not unregister type library for file [2]. Contact your support personnel.
1913	Could not update the ini file [2][3]. Verify that the file exists and that you can access it.
1914	Could not schedule file [2] to replace file [3] on reboot. Verify that you have write permissions to file [3].
1915	Error removing ODBC driver manager, ODBC error [2]: [3]. Contact your support personnel.
1916	Error installing ODBC driver manager, ODBC error [2]: [3]. Contact your support personnel.
1917	Error removing ODBC driver: [4], ODBC error [2]: [3]. Verify that you have sufficient privileges to remove ODBC drivers.
1918	Error installing ODBC driver: [4], ODBC error [2]: [3]. Verify that the file [4] exists and that you can access it.
1919	Error configuring ODBC data source: [4], ODBC error [2]: [3]. Verify that the file [4] exists and that you can access it.
1920	Service '[2]' ([3]) failed to start. Verify that you have sufficient privileges to start system services.
1921	Service '[2]' ([3]) could not be stopped. Verify that you have sufficient privileges to stop system services.
1922	Service '[2]' ([3]) could not be deleted. Verify that you have sufficient privileges to remove system services.
1923	Service '[2]' ([3]) could not be installed. Verify that you have sufficient privileges to install system services.
1924	Could not update environment variable '[2]'. Verify that you have sufficient privileges to modify environment variables.
1925	You do not have sufficient privileges to complete this installation for all users of the machine. Log on as administrator and then retry this installation.
1926	Could not set file security for file '[3]'. Error: [2]. Verify that you have sufficient privileges to modify the security permissions for this file.
1927	Component Services (COM+ 1.0) are not installed on this computer. This installation requires Component Services in order to complete successfully. Component Services are available on Windows 2000.
1928	Error registering COM+ Application. Contact your support personnel for more information.
1929	Error unregistering COM+ Application. Contact your support personnel for more information.
1930	The description for service '[2]' ([3]) could not be changed.
1931	The Windows Installer service cannot update the system file [2] because the file is protected by Windows. You may need to update your operating system for this programme to work correctly. {{Package version: [3], OS Protected version: [4]}}
1932	The Windows Installer service cannot update the protected Windows file [2]. {{Package version: [3], OS Protected version: [4], SFP Error: [5]}}
1933	The Windows Installer service cannot update one or more protected Windows files. {{SFP Error: [2]. List of protected files:\r\n[3]}}
1934	User installations are disabled via policy on the machine.
1935	An error occured during the installation of assembly component [2]. HRESULT: [3]. {{assembly interface: [4], function: [5], assembly name: [6]}}
2401	64-bit registry operation attempted on 32-bit operating system for key [2].
2943	This version of Windows does not support deploying 64-bit packages. The script [2] is for a 64-bit package.
<<NOKEEP

"De.$(PLAT).$(CFG).Error-2.idt" : "En.$(PLAT).$(CFG).Error-2.idtx" "..\L10N\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).Error-2.idt" : "En.$(PLAT).$(CFG).Error-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).Error-2.idt" : "En.$(PLAT).$(CFG).Error-2.idtx" "..\L10N\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).Error-2.idt" : "En.$(PLAT).$(CFG).Error-2.idtx" "..\L10N\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# EventMapping

All :: "$(LANG).$(PLAT).$(CFG).EventMapping-1.idt"

"$(LANG).$(PLAT).$(CFG).EventMapping-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Dialog_	Control_	Event	Attribute
s$(MSIBUILD_LENGTH_ID)	s50	s50	s50
EventMapping	Dialog_	Control_	Event
<<NOKEEP


######################################################################
# Extension

All :: "$(LANG).$(PLAT).$(CFG).Extension-1.idt"

"$(LANG).$(PLAT).$(CFG).Extension-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Extension	Component_	ProgId_	MIME_	Feature_
s255	s$(MSIBUILD_LENGTH_ID)	S255	S$(MSIBUILD_LENGTH_ID)	s$(MSIBUILD_LENGTH_ID)
Extension	Extension	Component_
<<NOKEEP


######################################################################
# InstallExecuteSequence

All :: "$(LANG).$(PLAT).$(CFG).InstallExecuteSequence-1.idt"

"$(LANG).$(PLAT).$(CFG).InstallExecuteSequence-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Action	Condition	Sequence
s$(MSIBUILD_LENGTH_ID)	S255	I2
InstallExecuteSequence	Action
LaunchConditions	NOT Installed	100
!IFDEF MSIBUILD_NO_WOW64
!IF "$(PLAT)" == "Win32"
caWoW64Unsupported	VersionNT64	101
!ENDIF
!ENDIF
FindRelatedProducts		200
caNewerProductFound	NEWPRODUCTFOUND	201
AppSearch		400
CCPSearch	NOT Installed	500
RMCCPSearch	NOT Installed	600
ValidateProductID		700
CostInitialize		800
FileCost		900
CostFinalize		1000
SetODBCFolders	NOT Installed	1100
MigrateFeatureStates		1200
InstallValidate		1400
InstallInitialize		1500
AllocateRegistrySpace	NOT Installed	1550
ProcessComponents		1600
UnpublishComponents		1700
UnpublishFeatures		1800
StopServices	VersionNT	1900
DeleteServices	VersionNT	2000
UnregisterComPlus		2100
SelfUnregModules		2200
UnregisterTypeLibraries		2300
RemoveODBC		2400
UnregisterFonts		2500
RemoveRegistryValues		2600
UnregisterClassInfo		2700
UnregisterExtensionInfo		2800
UnregisterProgIdInfo		2900
UnregisterMIMEInfo		3000
RemoveIniValues		3100
RemoveShortcuts		3200
RemoveEnvironmentStrings		3300
RemoveDuplicateFiles		3400
RemoveFiles		3500
RemoveFolders		3600
CreateFolders		3700
MoveFiles		3800
InstallFiles		4000
PatchFiles		4090
DuplicateFiles		4210
BindImage		4300
CreateShortcuts		4500
RegisterClassInfo		4600
RegisterExtensionInfo		4700
RegisterProgIdInfo		4800
RegisterMIMEInfo		4900
WriteRegistryValues		5000
WriteIniValues		5100
WriteEnvironmentStrings		5200
RegisterFonts		5300
InstallODBC		5400
RegisterTypeLibraries		5500
SelfRegModules		5600
RegisterComPlus		5700
InstallServices	VersionNT	5800
StartServices	VersionNT	5900
RegisterUser		6000
RegisterProduct		6100
PublishComponents		6200
PublishFeatures		6300
PublishProduct		6400
InstallFinalize		6600
RemoveExistingProducts		6700
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
LaunchConditions	NOT Installed	100
!IFDEF MSIBUILD_NO_WOW64
!IF "$(PLAT)" == "Win32"
caWoW64Unsupported	VersionNT64	101
!ENDIF
!ENDIF
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
ExecuteAction		1300
<<NOKEEP


######################################################################
# LaunchCondition

All :: "$(LANG).$(PLAT).$(CFG).LaunchCondition-1.idt"

"$(LANG).$(PLAT).$(CFG).LaunchCondition-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Condition	Description
s255	l255
LaunchCondition	Condition
<<NOKEEP


######################################################################
# ListBox

All :: "$(LANG).$(PLAT).$(CFG).ListBox-1.idt"

"$(LANG).$(PLAT).$(CFG).ListBox-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Order	Value	Text
s$(MSIBUILD_LENGTH_ID)	i2	s64	L64
ListBox	Property	Order
<<NOKEEP


######################################################################
# ListView

All :: "$(LANG).$(PLAT).$(CFG).ListView-1.idt"

"$(LANG).$(PLAT).$(CFG).ListView-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Order	Value	Text	Binary_
s$(MSIBUILD_LENGTH_ID)	i2	s64	L64	S$(MSIBUILD_LENGTH_ID)
ListView	Property	Order
<<NOKEEP


######################################################################
# LockPermissions

All :: "$(LANG).$(PLAT).$(CFG).LockPermissions-1.idt"

"$(LANG).$(PLAT).$(CFG).LockPermissions-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
LockObject	Table	Domain	User	Permission
s$(MSIBUILD_LENGTH_ID)	s32	S255	s255	I4
LockPermissions	LockObject	Table	Domain	User
<<NOKEEP


######################################################################
# ModuleComponents

All :: "$(LANG).$(PLAT).$(CFG).ModuleComponents-1.idt"

"$(LANG).$(PLAT).$(CFG).ModuleComponents-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Component	ModuleID	Language
s$(MSIBUILD_LENGTH_ID)	s$(MSIBUILD_LENGTH_ID)	i2
ModuleComponents	Component	ModuleID	Language
<<NOKEEP


######################################################################
# ModuleDependency

All :: "$(LANG).$(PLAT).$(CFG).ModuleDependency-1.idt"

"$(LANG).$(PLAT).$(CFG).ModuleDependency-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
ModuleID	ModuleLanguage	RequiredID	RequiredLanguage	RequiredVersion
s$(MSIBUILD_LENGTH_ID)	i2	s$(MSIBUILD_LENGTH_ID)	i2	S32
ModuleDependency	ModuleID	ModuleLanguage	RequiredID	RequiredLanguage
<<NOKEEP


######################################################################
# ModuleSignature

All :: "$(LANG).$(PLAT).$(CFG).ModuleSignature-1.idt"

"$(LANG).$(PLAT).$(CFG).ModuleSignature-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
ModuleID	Language	Version
s$(MSIBUILD_LENGTH_ID)	i2	s20
ModuleSignature	ModuleID	Language
<<NOKEEP


######################################################################
# MsiAssembly

All :: "$(LANG).$(PLAT).$(CFG).MsiAssembly-1.idt"

"$(LANG).$(PLAT).$(CFG).MsiAssembly-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Component_	Feature_	File_Manifest	File_Application	Attributes
s$(MSIBUILD_LENGTH_ID)	s$(MSIBUILD_LENGTH_ID)	S$(MSIBUILD_LENGTH_ID)	S$(MSIBUILD_LENGTH_ID)	I2
MsiAssembly	Component_
<<NOKEEP


######################################################################
# MsiAssemblyName

All :: "$(LANG).$(PLAT).$(CFG).MsiAssemblyName-1.idt"

"$(LANG).$(PLAT).$(CFG).MsiAssemblyName-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Component_	Name	Value
s$(MSIBUILD_LENGTH_ID)	s255	s255
MsiAssemblyName	Component_	Name
<<NOKEEP


######################################################################
# MsiFileHash

All :: "$(LANG).$(PLAT).$(CFG).MsiFileHash-1.idt"

"$(LANG).$(PLAT).$(CFG).MsiFileHash-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
File_	Options	HashPart1	HashPart2	HashPart3	HashPart4
s$(MSIBUILD_LENGTH_ID)	i2	i4	i4	i4	i4
MsiFileHash	File_
<<NOKEEP


######################################################################
# MsiSFCBypass

All :: "$(LANG).$(PLAT).$(CFG).MsiSFCBypass-1.idt"

"$(LANG).$(PLAT).$(CFG).MsiSFCBypass-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
File_
s$(MSIBUILD_LENGTH_ID)
MsiSFCBypass	File_
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
!IFDEF MSIBUILD_VENDOR_URL
ARPURLINFOABOUT	$(MSIBUILD_VENDOR_URL)
!ENDIF
!IFDEF MSIBUILD_VENDOR_ADDRESS
ARPCONTACT	$(MSIBUILD_VENDOR_ADDRESS)
!ENDIF
!IFDEF MSIBUILD_VENDOR_PHONE
ARPHELPTELEPHONE	$(MSIBUILD_VENDOR_PHONE)
!ENDIF
!IFDEF MSIBUILD_PRODUCT_URL
ARPHELPLINK	$(MSIBUILD_PRODUCT_URL)
!ENDIF
!IFDEF MSIBUILD_PRODUCT_UPGRADE_URL
ARPURLUPDATEINFO	$(MSIBUILD_PRODUCT_UPGRADE_URL)
!ENDIF
Manufacturer	$(MSIBUILD_VENDOR_NAME)
MSICHECKCRCS	1
ProductID	none
ProductName	$(MSIBUILD_PRODUCT_NAME_FULL)
SimpleProductName	$(MSIBUILD_PRODUCT_NAME)
PROMPTROLLBACKCOST	P
<<NOKEEP

"En.$(PLAT).$(CFG).Property-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Value
s$(MSIBUILD_LENGTH_ID)	l0
1252	Property	Property
ProductLanguage	1033
<<NOKEEP

"De.$(PLAT).$(CFG).Property-2.idt" : "En.$(PLAT).$(CFG).Property-2.idtx" "..\L10N\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).Property-2.idt" : "En.$(PLAT).$(CFG).Property-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).Property-2.idt" : "En.$(PLAT).$(CFG).Property-2.idtx" "..\L10N\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).Property-2.idt" : "En.$(PLAT).$(CFG).Property-2.idtx" "..\L10N\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# RadioButton

All :: "$(LANG).$(PLAT).$(CFG).RadioButton-1.idt"

"$(LANG).$(PLAT).$(CFG).RadioButton-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Order	Value	X	Y	Width	Height	Text	Help
s$(MSIBUILD_LENGTH_ID)	i2	s64	i2	i2	i2	i2	L64	L$(MSIBUILD_LENGTH_HELP)
RadioButton	Property	Order
<<NOKEEP


######################################################################
# RegLocator

All :: "$(LANG).$(PLAT).$(CFG).RegLocator-1.idt"

"$(LANG).$(PLAT).$(CFG).RegLocator-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Signature_	Root	Key	Name	Type
s$(MSIBUILD_LENGTH_ID)	i2	s255	S255	I2
RegLocator	Signature_
<<NOKEEP


######################################################################
# Signature

All :: "$(LANG).$(PLAT).$(CFG).Signature-1.idt"

"$(LANG).$(PLAT).$(CFG).Signature-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Signature	FileName	MinVersion	MaxVersion	MinSize	MaxSize	MinDate	MaxDate	Languages
s$(MSIBUILD_LENGTH_ID)	s255	S20	S20	I4	I4	I4	I4	S255
Signature	Signature
<<NOKEEP


######################################################################
# SxsMsmGenComponents

All :: "$(LANG).$(PLAT).$(CFG).SxsMsmGenComponents-1.idt"

"$(LANG).$(PLAT).$(CFG).SxsMsmGenComponents-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Component_	Guid
s$(MSIBUILD_LENGTH_ID)	s38
SxsMsmGenComponents	Component_
<<NOKEEP


######################################################################
# TextStyle

All :: "$(LANG).$(PLAT).$(CFG).TextStyle-1.idt"

"$(LANG).$(PLAT).$(CFG).TextStyle-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
TextStyle	FaceName	Size	Color	StyleBits
s$(MSIBUILD_LENGTH_ID)	s32	i2	I4	I2
TextStyle	TextStyle
<<NOKEEP


######################################################################
# TypeLib

All :: "$(LANG).$(PLAT).$(CFG).TypeLib-1.idt"

"$(LANG).$(PLAT).$(CFG).TypeLib-1.idt" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
LibID	Language	Component_	Version	Description	Directory_	Feature_	Cost
s38	i2	s$(MSIBUILD_LENGTH_ID)	I2	L128	S$(MSIBUILD_LENGTH_ID)	s$(MSIBUILD_LENGTH_ID)	I4
TypeLib	LibID	Language	Component_
<<NOKEEP


######################################################################
# UIText

All :: "$(LANG).$(PLAT).$(CFG).UIText-2.idt"

"En.$(PLAT).$(CFG).UIText-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
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

"De.$(PLAT).$(CFG).UIText-2.idt" : "En.$(PLAT).$(CFG).UIText-2.idtx" "..\L10N\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).UIText-2.idt" : "En.$(PLAT).$(CFG).UIText-2.idtx"
	copy /y $** $@ > NUL

"It.$(PLAT).$(CFG).UIText-2.idt" : "En.$(PLAT).$(CFG).UIText-2.idtx" "..\L10N\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).UIText-2.idt" : "En.$(PLAT).$(CFG).UIText-2.idtx" "..\L10N\sl_SI.po"
	rcxgettext.exe idtp $@ $**


######################################################################
# Build MSM module!
######################################################################

!INCLUDE "..\MSM.mak"
