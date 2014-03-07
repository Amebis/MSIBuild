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

"Sl.$(PLAT).$(CFG).___-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
<<NOKEEP

"De.$(PLAT).$(CFG).___-2.idt" : "Sl.$(PLAT).$(CFG).___-2.idtx" "..\res\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).___-2.idt" : "Sl.$(PLAT).$(CFG).___-2.idtx" "..\res\en_GB.po"
	rcxgettext.exe idtp $@ $**

"It.$(PLAT).$(CFG).___-2.idt" : "Sl.$(PLAT).$(CFG).___-2.idtx" "..\res\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).___-2.idt" : "Sl.$(PLAT).$(CFG).___-2.idtx"
	copy /y $** $@ > NUL

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
ComboBox	Order	N	1	32767					A positive integer used to determine the ordering of the items within one list.The integers do not have to be consecutive.
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

"Sl.$(PLAT).$(CFG).ActionText-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Action	Description	Template
s$(MSIBUILD_LENGTH_ID)	L0	L0
1250	ActionText	Action
Advertise	Program za oglaševanje	
AllocateRegistrySpace	Rezervacija prostora v sistemskem registru	Nezaseden prostor: [1]
AppSearch	Iskanje namešèenih programov	Lastnost: [1], podpis: [2]
BindImage	Povezovanje izvedljivih datotek	Datoteka: [1]
CCPSearch	Iskanje ustreznih izdelkov	
CostFinalize	Raèunanje potrebnega prostora	
CostInitialize	Raèunanje potrebnega prostora	
CreateFolders	Ustvarjanje map	Mapa: [1]
CreateShortcuts	Ustvarjanje bližnjic	Bližnjica: [1]
DeleteServices	Brisanje storitev	Storitev: [1]
DuplicateFiles	Ustvarjanje kopij datotek	Datoteka: [1], mapa: [9], velikost: [6]
FileCost	Raèunanje potrebnega prostora	
FindRelatedProducts	Iskanje sorodnih programov	Najden program: [1]
GenerateScript	Generiranje skriptnih operacij za dejanje:	[1]
InstallAdminPackage	Kopiranje datotek za omrežno namestitev	Datoteka: [1], mapa: [9], velikost: [6]
InstallFiles	Kopiranje novih datotek	Datoteka: [1], mapa: [9], velikost: [6]
InstallODBC	Namešèanje komponent ODBC	
InstallServices	Namešèanje novih storitev	Storitev: [2]
InstallSFPCatalogFile	Namešèanje sistemskega kataloga	Datoteka: [1], odvisnosti: [2]
InstallValidate	Preverjanje veljavnosti namestitve	
LaunchConditions	Ocenjevanje zagonskih pogojev	
MigrateFeatureStates	Preseljevanje stanja funkcij iz sorodnih programov	Program: [1]
MoveFiles	Premikanje datotek	Datoteka: [1], mapa: [9], velikost: [6]
MsiPublishAssemblies	Objava informacij o izgradnji	Kontekst programa:[1], ime izgradnje:[2]
MsiUnpublishAssemblies	Umik objave informacij o izgradnji	Kontekst programa:[1], ime izgradnje:[2]
PatchFiles	Popravljanje datotek	Datoteka: [1], mapa: [2], velikost: [3]
ProcessComponents	Posodabljanje registracije komponent	
PublishComponents	Objava ustreznih komponent	ID komponente: [1], kvalifikator: [2]
PublishFeatures	Objava funkcij izdelka	Funkcija: [1]
PublishProduct	Objava informacij o izdelku	
RegisterClassInfo	Registracija strežnikov za razrede	Class Id: [1]
RegisterComPlus	Registracija programov in komponent COM+	IdApl: [1]{{, TipApl: [2], Uporabniki: [3], RSN: [4]}}
RegisterExtensionInfo	Registracija strežnikov za dodatke	Dodatek: [1]
RegisterFonts	Registracija pisav	Pisava: [1]
RegisterMIMEInfo	Registracija informacij MIME	Vrsta vsebine MIME: [1], dodatek: [2]
RegisterProduct	Registracija izdelka	[1]
RegisterProgIdInfo	Registracija identifikatorjev programa	ProgId: [1]
RegisterTypeLibraries	Registriranje knjižnic tipov	LibID: [1]
RegisterUser	Registracija uporabnika	[1]
RemoveDuplicateFiles	Odstranjevanje podvojenih datotek	Datoteka: [1], mapa: [9]
RemoveEnvironmentStrings	Posodabljanje nizov okolja	Ime: [1], vrednost: [2], dejanje [3]
RemoveExistingProducts	Odstranjevanje programov	Program: [1], Ukazna vrstica: [2]
RemoveFiles	Odstranjevanje datotek	Datoteka: [1], mapa: [9]
RemoveFolders	Odstranjevanje map	Mapa: [1]
RemoveIniValues	Odstranjevanje vnosov datotek INI	Datoteka: [1], razdelek: [2], kljuè: [3], vrednost: [4]
RemoveODBC	Odstranjevanje komponent ODBC	
RemoveRegistryValues	Odstranjevanje vrednosti iz sistemskega registra	Kljuè: [1], ime: [2]
RemoveShortcuts	Odstranjevanje bližnjic	Bližnjica: [1]
RMCCPSearch	Iskanje ustreznih izdelkov	
Rollback	Povrnitveno dejanje:	[1]
RollbackCleanup	Odstranjevanje varnostnih kopij datotek	Datoteka: [1]
SelfRegModules	Registracija modulov	Datoteka: [1], mapa: [2]
SelfUnregModules	Brisanje registracije modulov	Datoteka: [1], mapa: [2]
SetODBCFolders	Inicializacija imenikov ODBC	
StartServices	Zagon storitev	Storitev: [1]
StopServices	Ustavitev storitev	Storitev: [1]
UnmoveFiles	Odstranjevanje premaknjenih datotek	Datoteka: [1], mapa: [9]
UnpublishComponents	Umik objave ustreznih komponent	ID komponente: [1], kvalifikator: [2]
UnpublishFeatures	Umik objave možnosti izdelka	Funkcija: [1]
UnpublishProduct	Umik objave podatkov o izdelku	
UnregisterClassInfo	Brisanje registracije strežnikov razreda	Class Id: [1]
UnregisterComPlus	Brisanje registracije programov in komponent COM+	IdApl: [1]{{, TipApl: [2]}}
UnregisterExtensionInfo	Brisanje registracije strežnikov za dodatke	Dodatek: [1]
UnregisterFonts	Brisanje registracije pisav	Pisava: [1]
UnregisterMIMEInfo	Brisanje registracije informacij MIME	Vrsta vsebine MIME: [1], dodatek: [2]
UnregisterProgIdInfo	Brisanje registracije identifikatorjev programa	ProgId: [1]
UnregisterTypeLibraries	Brisanje registracije knjižnic tipov	LibID: [1]
WriteEnvironmentStrings	Posodabljanje nizov okolja	Ime: [1], vrednost: [2], dejanje [3]
WriteIniValues	Zapisovanje vrednosti datotek INI	Datoteka: [1], razdelek: [2], kljuè: [3], vrednost: [4]
WriteRegistryValues	Zapisovanje vrednosti v sistemski register	Kljuè: [1], ime: [2], vrednost: [3]
<<NOKEEP

"De.$(PLAT).$(CFG).ActionText-2.idt" : "Sl.$(PLAT).$(CFG).ActionText-2.idtx" "..\res\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).ActionText-2.idt" : "Sl.$(PLAT).$(CFG).ActionText-2.idtx" "..\res\en_GB.po"
	rcxgettext.exe idtp $@ $**

"It.$(PLAT).$(CFG).ActionText-2.idt" : "Sl.$(PLAT).$(CFG).ActionText-2.idtx" "..\res\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).ActionText-2.idt" : "Sl.$(PLAT).$(CFG).ActionText-2.idtx"
	copy /y $** $@ > NUL


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

"Sl.$(PLAT).$(CFG).CustomAction-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Action	Type	Source	Target
s$(MSIBUILD_LENGTH_ID)	i2	S$(MSIBUILD_LENGTH_ID)	S255
1250	CustomAction	Action
caNewerProductFound	19		Novejša verzija programskega paketa [SimpleProductName] je že namešèena.
caFaultyProductFound	19		Ta namestitveni paket ne more nadgraditi trenutno namešèenega programskega paketa [SimpleProductName]. Prosimo, najprej odstranite namešèeni programski paket in nato poskusite ponovno.
<<NOKEEP

"De.$(PLAT).$(CFG).CustomAction-2.idt" : "Sl.$(PLAT).$(CFG).CustomAction-2.idtx" "..\res\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).CustomAction-2.idt" : "Sl.$(PLAT).$(CFG).CustomAction-2.idtx" "..\res\en_GB.po"
	rcxgettext.exe idtp $@ $**

"It.$(PLAT).$(CFG).CustomAction-2.idt" : "Sl.$(PLAT).$(CFG).CustomAction-2.idtx" "..\res\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).CustomAction-2.idt" : "Sl.$(PLAT).$(CFG).CustomAction-2.idtx"
	copy /y $** $@ > NUL


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

"Sl.$(PLAT).$(CFG).Error-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Error	Message
i2	L0
1250	Error	Error
0	{{Usodna napaka: }}
1	{{Napaka [1]. }}
2	Opozorilo [1]. 
3	
4	Informacije [1]. 
5	Namestitveni program je med namešèanjem paketa odkril neprièakovano napako. To lahko pomeni težave s paketom. Koda napake je [1]. {{Argumenti so: [2], [3], [4]}}
6	
7	{{Disk je poln: }}
8	Dejanje [Time]: [1]. [2]
9	[SimpleProductName]
10	{[2]}{, [3]}{, [4]}
11	Vrsta sporoèila: [1], argument: [2]
12	=== Zaèetek pisanja dnevnika: [Date] [Time] ===
13	=== Konec pisanja dnevnika: [Date] [Time] ===
14	Zaèetek dejanja [Time]: [1].
15	Konec dejanja [Time]: [1]. Vrnjena vrednost [2].
16	Preostali èas: {[1] min }{[2] s}
17	Zmanjkalo je pomnilnika. Zaprite druge programe in nato poskusite znova.
18	Namestitveni program se ne odziva veè.
19	Namestitveni program se je konèal prezgodaj.
20	Poèakajte, da Windows vzpostavi [SimpleProductName]
21	Zbiranje potrebnih informacij ...
22	Odstranjevanje starih razlièic tega programa ...
23	Priprava na odstranitev starih razlièic tega programa ...
32	Namestitev izdelka [SimpleProductName] je bila uspešno dokonèana.
33	Namestitev izdelka [SimpleProductName] ni uspela.
1101	Prišlo je do napake pri branju iz datoteke: [2]. {{ Sistemska napaka [3].}} Preverite, ali datoteka obstaja in ali imate dostop do nje.
1301	Datoteke »[2]« ni mogoèe ustvariti. Mapa s tem imenom že obstaja. Prekinite namestitev in poskusite namestiti znova v drugo mapo.
1302	Vstavite disk: [2]
1303	Namestitveni program nima zadostnih pravic za dostop do mape: [2]. Namestitve ni mogoèe nadaljevati. Prijavite se kot skrbnik ali pa se obrnite na skrbnika sistema.
1304	Pri pisanju v datoteko je prišlo do napake: [2]. Preverite, ali imate dostop do te mape.
1305	Pri branju iz datoteke je prišlo do napake: [2]. {{Sistemska napaka [3].}} Preverite, ali datoteka obstaja in ali imate dostop do nje.
1306	Drug program ima izkljuèni dostop do datoteke »[2]«. Zaprite vse druge programe in kliknite »Ponovi«.
1307	Na disku ni dovolj prostora za namestitev te datoteke: [2]. Sprostite nekaj prostora na disku in kliknite »Ponovi«. Èe želite namestitev preklicati, kliknite »Prekini«.
1308	Izvorne datoteke: [2] ni bilo mogoèe najti. Preverite, ali datoteka obstaja in ali imate dostop do nje.
1309	Prišlo je do napake pri branju iz datoteke: [3]. {{ Sistemska napaka [2].}} Preverite, ali datoteka obstaja in ali imate dostop do nje.
1310	Prišlo je do napake pri pisanju v datoteko: [3]. {{ Sistemska napaka [2].}} Preverite, ali imate dostop do te mape.
1311	Izvorne datoteke{{(kabinetna datoteka)}}: [2] ni bilo mogoèe najti. Preverite, ali datoteka obstaja in ali imate dostop do nje.
1312	Mape »[2]« ni mogoèe ustvariti. Datoteka s tem imenom že obstaja. Preimenujte ali odstranite jo in nato kliknite »Ponovi«. Èe želite operacijo prekiniti, kliknite »Prekini«.
1313	Nosilec [2] trenutno ni na voljo. Izberite drugega.
1314	Navedena pot »[2]« ni na voljo.
1315	V navedeno mapo »[2]« ni mogoèe pisati.
1316	Prišlo je do omrežne napake med poskusom branja iz datoteke: [2]
1317	Prišlo je do napake med poskusom ustvarjanja mape: [2]
1318	Prišlo je do omrežne napake med poskusom ustvarjanja mape: [2]
1319	Prišlo je do omrežne napake med poskusom odpiranja kabinetne datoteke z izvornimi datotekami: [2]
1320	Navedena pot je predolga: [2]
1321	Namestitveni program nima ustreznih pravic za spreminjanje te datoteke: [2].
1322	Del poti do mape »[2]« je neveljaven. Ali je prazen ali pa presega dolžino, ki jo dovoljuje sistem.
1323	Pot do mape »[2]« vsebuje besede, ki v poteh niso veljavne.
1324	Pot do mape »[2]« vsebuje neveljaven znak.
1325	»[2]« ni veljavno kratko ime datoteke.
1326	Napaka pri pridobivanju varnosti datoteke: [3] GetLastError: [2]
1327	Neveljaven pogon: [2]
1328	Napaka pri uporabi popravka za datoteko [2]. Mogoèe je bila posodobljena kako drugaèe in je ta popravek ne more veè spremeniti. Za dodatne informacije se obrnite na svojega dobavitelja popravka. {{Sistemska napaka: [3]}}
1329	Zahtevane datoteke ni mogoèe namestiti, ker kabinetna datoteka [2] ni digitalno podpisana. To lahko pomeni, da je kabinetna datoteka poškodovana.
1330	Zahtevane datoteke ni mogoèe namestiti, ker je digitalni podpis kabinetne datoteke [2] neveljaven. To lahko pomeni, da je kabinetna datoteka poškodovana.{{ Napako [3] je vrnil WinVerifyTrust.}}
1331	Datoteke [2] ni bilo mogoèe pravilno prekopirati: napaka CRC.
1332	Datoteke [2] ni bilo mogoèe pravilno premakniti: napaka CRC.
1333	Datoteke [2] ni bilo mogoèe pravilno pravilno popraviti: napaka CRC.
1334	Datoteke »[2]« ni mogoèe namestiti, ker je ni mogoèe najti v kabinetni datoteki »[3]«. To lahko pomeni, da je prišlo do omrežne napake, do napake pri branju s CD-ROM-a ali do težav v paketu.
1335	Kabinetna datoteka »[2]«, ki je potrebna za to namestitev, je poškodovana in je ni mogoèe uporabiti. To lahko pomeni, da je prišlo do omrežne napake, do napake pri branju s CD-ROM-a ali do težav v paketu.
1336	Pri ustvarjanju zaèasne datoteke, ki je potrebna za dokonèanje namestitve, je prišlo do napake.{{ Mapa: [3]. Koda sistemske napake: [2]}}
1401	Kljuèa: [2] ni bilo mogoèe ustvariti. {{ Sistemska napaka [3].}} Preverite, ali imate pravice za dostop do tega kljuèa ali pa se obrnite na svojo tehnièno službo. 
1402	Kljuèa: [2] ni bilo mogoèe odpreti. {{ Sistemska napaka [3].}} Preverite, ali imate pravice za dostop do tega kljuèa ali pa se obrnite na svojo tehnièno službo. 
1403	Vrednosti [2] ni bilo mogoèe izbrisati iz kljuèa [3]. {{ Sistemska napaka [4].}} Preverite, ali imate pravice za dostop do tega kljuèa ali pa se obrnite na svojo tehnièno službo. 
1404	Kljuèa [2] ni bilo mogoèe izbrisati. {{ Sistemska napaka [3].}} Preverite, ali imate pravice za dostop do tega kljuèa ali pa se obrnite na svojo tehnièno službo. 
1405	Vrednosti [2] ni bilo mogoèe prebrati iz kljuèa [3]. {{ Sistemska napaka [4].}} Preverite, ali imate pravice za dostop do tega kljuèa ali pa se obrnite na svojo tehnièno službo. 
1406	Vrednosti [2] ni bilo mogoèe zapisati v kljuè [3]. {{ Sistemska napaka [4].}} Preverite, ali imate pravice za dostop do tega kljuèa ali pa se obrnite na svojo tehnièno službo.
1407	Imen vrednosti za kljuè [2] ni bilo mogoèe dobiti. {{ Sistemska napaka [3].}} Preverite, ali imate pravice za dostop do tega kljuèa ali pa se obrnite na svojo tehnièno službo.
1408	Imen podkljuèev za kljuè [2] ni bilo mogoèe dobiti. {{ Sistemska napaka [3].}} Preverite, ali imate pravice za dostop do tega kljuèa ali pa se obrnite na svojo tehnièno službo.
1409	Varnostnih informacij za kljuè [2] ni bilo mogoèe prebrati. {{ Sistemska napaka [3].}} Preverite, ali imate pravice za dostop do tega kljuèa ali pa se obrnite na svojo tehnièno službo.
1410	Prostora, ki je na voljo za register, ni bilo mogoèe poveèati. Namestitev tega programa zahteva [2] KB prostega prostora za register.
1500	Izvaja se še ena namestitev. Dokonèati morate prvo namestitev, preden nadaljujete s to namestitvijo.
1501	Napaka pri dostopu do varnih podatkov. Preverite, ali je Windows Installer pravilno konfiguriran, in poskusite znova.
1502	Uporabnik »[2]« je prej že sprožil namestitev izdelka »[3]«. Omenjeni uporabnik bo moral ponovno zagnati namestitev, da bi lahko uporabljal ta izdelek. Trenutna namestitev se bo nadaljevala.
1503	Uporabnik »[2]« je prej že sprožil namestitev izdelka »[3]«. Omenjeni uporabnik bo moral ponovno zagnati namestitev, da bi lahko uporabljal ta izdelek.
1601	Zmanjkalo je prostora na disku -- nosilec: »[2]«; potreben prostor: [3] KB; prostor na voljo: [4] KB. Sprostite nekaj prostora na disku in poskusite znova.
1602	Ali ste preprièani, da želite preklicati?
1603	Datoteko [2][3] uporablja{ ta proces: ime: [4], ID: [5], naslov okna: »[6]«}. Zaprite ta program in poskusite znova.
1604	Izdelek »[2]« je že namešèen in prepreèuje namešèanje tega izdelka. Izdelka nista združljiva.
1605	Na nosilcu »[2]« trdega diska ni dovolj prostora za nadaljevanje namestitve z omogoèeno obnovitvijo. Na voljo je le [4] KB prostora, potrebujete pa ga [3] KB. Kliknite »Prezri«, èe želite nadaljevati namestitev brez shranjevanja informacij o obnovitvi, »Ponovi«, èe želite ponovno preveriti prostor na disku, ali »Prekini«, èe želite konèati namestitev.
1606	Do omrežnega mesta [2] ni bilo mogoèe priti.
1607	Preden nadaljujete z namestitvijo, morate zapreti te programe:
1608	V raèunalniku ni bilo mogoèe najti ustreznih, prej namešèenih izdelkov, potrebnih za to namestitev.
1609	Pri uporabi varnostnih nastavitev je prišlo do napake. [2] ni veljaven uporabnik skupine. Razlog za napako so lahko težave s paketom ali pri povezavi s kontrolnikom domene v omrežju. Preverite omrežno povezavo in kliknite »Ponovi« oziroma »Prekini«, èe želite konèati namestitev. {{Uporabnikovega SID-a ni bilo mogoèe najti, sistemska napaka [3]}}
1633	Ta namestitveni paket ni podprt na tej platformi. Obrnite se na proizvajalca programske opreme.
1701	Kljuè [2] ni veljaven. Preverite, ali ste vnesli pravi kljuè.
1702	Pred nadaljevanjem konfiguracije za [2] mora namestitveni program ponovno zagnati sistem. Èe želite ponovni zagon zdaj, kliknite »Da«. Èe želite sistem sami ponovno zagnati pozneje, kliknite »Ne«.
1703	Èe želite uveljaviti spremembe konfiguracije za [2], morate sistem ponovno zagnati. Kliknite »Da«, èe ga želite ponovno zagnati zdaj, oziroma »Ne«, èe ga nameravate sami zagnati pozneje.
1704	Namestitev za [2] je trenutno ustavljena. Èe želite nadaljevati, morate razveljaviti spremembe, ki jih je naredila. Ali jih želite razveljaviti?
1705	Prejšnja namestitev tega izdelka se še izvaja. Èe želite nadaljevati, morate razveljaviti spremembe, ki jih je naredila omenjena namestitev. Ali želite razveljaviti spremembe?
1706	Veljavnega namestitvenega paketa izdelka [2] ni bilo mogoèe najti. Poskusite ponoviti namestitev z veljavnim namestitvenim paketom »[3]«.
1707	Namestitev je bila uspešno dokonèana.
1708	Namestitev ni uspela.
1709	Izdelek: [2] -- [3]
1710	Raèunalnik lahko povrnete v prejšnje stanje ali pa nadaljujete z namestitvijo pozneje. Ali želite obnoviti prejšnje stanje?
1711	Med pisanjem namestitvenih informacij na disk je prišlo do napake. Poskrbite, da bo na disku dovolj prostora in kliknite »Ponovi«. Èe želite namestitev prekiniti, kliknite »Prekini«.
1712	Ene ali veè datotek, potrebnih za obnovitev prejšnjega stanja raèunalnika, ni bilo mogoèe najti. Obnovitev ne bo mogoèa.
1713	[2] ne more namestiti enega od zahtevanih izdelkov. Obrnite se na svojo tehnièno službo. {{Sistemska napaka: [3].}}
1714	Starejše razlièice [2] ni mogoèe odstraniti. Obrnite se na svojo tehnièno službo. {{Sistemska napaka [3].}}
1715	Namešèeno [2]
1716	Konfigurirano [2]
1717	Odstranjeno [2]
1718	Datoteka [2] je bila zavrnjena zaradi neskladnosti s politiko o digitalnih podpisih.
1719	Storitev Windows Installer ni dostopna. Morda program Windows izvajate v varnem naèinu ali pa Windows Installer ni pravilno namešèen. Obrnite se na svojo tehnièno službo.
1720	Težave s paketom Windows Installer. Skript, ki so potrebni za dokonèanje namestitve, ni mogoèe izvesti. Obrnite se na svojo tehnièno službo ali na proizvajalca paketa. {{Dejanje po meri [2] napaka v skriptih [3], [4]: [5] vrstica [6], stolpec [7], [8] }}
1721	Težave s paketom Windows Installer. Programa, ki je potreben za dokonèanje namestitve, ni mogoèe zagnati. Obrnite se na svojo tehnièno službo ali na proizvajalca paketa. {{Dejanje: [2], mesto: [3], ukaz: [4] }}
1722	Težave s paketom Windows Installer. Program, ki se izvaja kot del namestitve, ni bil dokonèan po prièakovanjih. Obrnite se na svojo tehnièno službo ali na proizvajalca paketa. {{Dejanje [2], mesto: [3], ukaz: [4] }}
1723	Težave s paketom Windows Installer. Knjižnice DLL, ki je potrebna za dokonèanje namestitve, ni mogoèe izvesti. Obrnite se na svojo tehnièno službo ali na proizvajalca paketa. {{Dejanje [2], vnos: [3], knjižnica: [4] }}
1724	Odstranitev je bila uspešno dokonèana.
1725	Odstranitev ni uspela.
1726	Oglaševanje je bilo uspešno dokonèano.
1727	Oglaševanje ni uspelo.
1728	Konfiguracija je bila uspešno dokonèana.
1729	Konfiguriracija ni uspela.
1730	Ta program lahko odstrani le skrbnik. Èe ga želite odstraniti, se prijavite kot skrbnik ali pa se za pomoè obrnite na svojo tehnièno službo.
1801	Pot [2] ni veljavna. Navedite veljavno pot.
1802	Zmanjkalo je pomnilnika. Zaprite druge programe in nato poskusite znova.
1803	V pogonu [2] ni diska. Vstavite disk in kliknite »Ponovi« ali pa kliknite »Prekini«, èe se želite vrniti na prej izbrani nosilec.
1804	V pogonu [2] ni diska. Vstavite disk in kliknite »Ponovi« ali pa kliknite »Prekini«, èe se želite vrniti v pogovorno okno za brskanje in izbrati drug nosilec.
1805	Mapa [2] ne obstaja. Vnesite pot do obstojeèe mape.
1806	Nimate zadostnih pravic za branje te mape.
1807	Veljavne ciljne mape za namestitev ni bilo mogoèe doloèiti.
1901	Pri poskusu branja iz izvorne namestitvene zbirke podatkov je prišlo do napake: [2].
1902	Razporejanje ponovnega zagona: preimenovanje datoteke [2] v [3]. Za dokonèanje operacije je potreben ponovni zagon.
1903	Razporejanje ponovnega zagona: brisanje datoteke [2]. Za dokonèanje operacije je potreben ponovni zagon.
1904	Registracija modula [2] ni uspela. HRESULT [3]. Obrnite se na svojo tehnièno službo.
1905	Brisanje registracije modula [2] ni uspelo. HRESULT [3]. Obrnite se na svojo tehnièno službo.
1906	Paketa [2] ni bilo mogoèe shraniti v predpomnilnik. Napaka: [3]. Obrnite se na svojo tehnièno službo.
1907	Pisave [2] ni bilo mogoèe registrirati. Preverite, ali imate zadostne pravice za namešèanje pisav in ali sistem podpira to pisavo.
1908	Registracije pisave [2] ni bilo mogoèe izbrisati. Preverite, ali imate zadostne pravice za odstranjevanje pisav.
1909	Bližnjice [2] ni bilo mogoèe ustvariti. Preverite, ali ciljna mapa obstaja in ali imate dostop do nje.
1910	Bližnjice [2] ni bilo mogoèe odstraniti. Preverite, ali datoteka z bližnjico obstaja in ali imate dostop do nje.
1911	Knjižnice tipov za datoteko [2] ni bilo mogoèe registrirati. Obrnite se na svojo tehnièno službo.
1912	Registracije knjižnice tipov za datoteko [2] ni bilo mogoèe izbrisati. Obrnite se na svojo tehnièno službo.
1913	Datoteke INI [2][3] ni bilo mogoèe posodobiti. Preverite, ali datoteka obstaja in ali imate dostop do nje.
1914	Datoteke [2] ni bilo mogoèe razporediti tako, da bi ob zagonu zamenjala datoteko [3]. Preverite, ali imate dovoljenje za pisanje v datoteko [3].
1915	Prišlo je do napake pri odstranjevanju upravitelja ODBC gonilnikov, napaka ODBC [2]: [3]. Obrnite se na svojo tehnièno službo.
1916	Prišlo je do napake pri namešèanju upravitelja ODBC gonilnikov, napaka ODBC [2]: [3]. Obrnite se na svojo tehnièno službo.
1917	Prišlo je do napake pri odstranjevanju gonilnika ODBC: [4], napaka ODBC [2]: [3]. Preverite, ali imate ustrezne pravice za odstranjevanje ODBC gonilnikov.
1918	Prišlo je do napake pri namešèanju gonilnika ODBC: [4], napaka ODBC [2]: [3]. Preverite, ali datoteka [4] obstaja in ali imate dostop do nje.
1919	Prišlo je do napake pri konfiguriranju vira podatkov ODBC: [4], napaka ODBC [2]: [3]. Preverite, ali datoteka [4] obstaja in ali imate dostop do nje.
1920	Zagon storitve »[2]« ([3]) ni uspel. Preverite, ali imate ustrezne pravice za zaganjanje sistemskih storitev.
1921	Storitve »[2]« ([3]) ni bilo mogoèe ustaviti. Preverite, ali imate ustrezne pravice za ustavljanje sistemskih storitev.
1922	Storitve »[2]« ([3]) ni bilo mogoèe izbrisati. Preverite, ali imate ustrezne pravice za odstranjevanje sistemskih storitev.
1923	Storitve »[2]« ([3]) ni bilo mogoèe namestiti. Preverite, ali imate ustrezne pravice za namešèanje sistemskih storitev.
1924	Spremenljivke okolja »[2]« ni bilo mogoèe posodobiti. Preverite, ali imate ustrezne pravice za spreminjanje spremenljivk okolja.
1925	Nimate ustreznih pravic za dokonèanje te namestitve za vse uporabnike tega raèunalnika. Prijavite se kot skrbnik in nato ponovite namestitev.
1926	Za datoteko »[3]« ni bilo mogoèe nastaviti varnosti. Napaka: [2]. Preverite, ali imate ustrezne pravice za spreminjanje varnostnih dovoljenj za to datoteko.
1927	Komponentne storitve (COM+ 1.0) v tem raèunalniku niso namešèene. Potrebujete jih za uspešno dokonèanje te namestitve. Najdete jih v Windows 2000.
1928	Napaka pri registraciji programa COM+. Èe želite veè informacij, se obrnite na svojo tehnièno službo.
1929	Napaka pri brisanju registracije programa COM+. Èe želite veè informacij, se obrnite na svojo tehnièno službo.
1930	Ni mogoèe spremeniti opisa storitve »[2]« ([3]).
1931	Storitev Windows Installer ne more posodobiti sistemske datoteke »[2]«, ker je program Windows datoteko zašèitil. Èe želite, da ta program deluje pravilno, boste morda morali posodobiti operacijski sistem. {{Razlièica paketa: [3], Razlièica zašèitenega OS: [4]}}
1932	Storitev Windows Installer ne more posodobiti zašèitene datoteke programa Windows »[2]«. {{Razlièica paketa: [3], Razlièica zašèitenega OS: [4], Napaka SFP: [5]}}
1933	Storitev Windows Installer ne more posodobiti ene ali veè zašèitenih datotek programa Windows. {{SFP-napaka: [2]. Seznam zašèitenih datotek:\r\n[3]}}
1934	Uporabniške namestitve so s pravili za ta raèunalnik onemogoèene.
1935	Med namestitvijo izgradne komponente [2] je prišlo do napake. HRESULT: [3]. {{izgradni vmesnik: [4], funkcija: [5], ime izgradnje: [6]}}
2401	Poskus 64-bitne operacije v registru na 32-bitnem operacijskem sistemu za kljuè »[2]«.
2943	Ta verzija operacijskega sistema Windows ne omogoèa distribucije 64-bitnih namestitvenih paketov. Skripta »[2]« so namenjena 64-bitnim namestitvenim paketom.
<<NOKEEP

"De.$(PLAT).$(CFG).Error-2.idt" : "Sl.$(PLAT).$(CFG).Error-2.idtx" "..\res\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).Error-2.idt" : "Sl.$(PLAT).$(CFG).Error-2.idtx" "..\res\en_GB.po"
	rcxgettext.exe idtp $@ $**

"It.$(PLAT).$(CFG).Error-2.idt" : "Sl.$(PLAT).$(CFG).Error-2.idtx" "..\res\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).Error-2.idt" : "Sl.$(PLAT).$(CFG).Error-2.idtx"
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

"Sl.$(PLAT).$(CFG).Property-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Property	Value
s$(MSIBUILD_LENGTH_ID)	l0
1250	Property	Property
ProductLanguage	1060
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

"Sl.$(PLAT).$(CFG).UIText-2.idtx" : "Makefile" "..\..\include\MSIBuildCfg.mak"
	-if exist $@ del /f /q $@
	move /y << $@ > NUL
Key	Text
s$(MSIBUILD_LENGTH_ID)	L255
1250	UIText	Key
AbsentPath	
bytes	 bajtov
GB	 GB
KB	 KB
MB	 MB
MenuAbsent	Ta del ne bo namešèen
MenuAdvertise	Del bo namešèen ob prvi uporabi
MenuAllCD	Celotna komponenta bo namešèena na plošèi CD
MenuAllLocal	Celotna komponenta bo namešèena na lokalni disk
MenuAllNetwork	Celotna komponenta bo namešèena za zagon iz omrežja
MenuCD	Namešèeno za zagon iz plošèe CD
MenuLocal	Namešèeno za zagon iz lokalnega diska
MenuNetwork	Namešèeno za zagon iz omrežja
NewFolder	Mapa|Nova mapa
ScriptInProgress	Zbiranje potrebnih informacij ...
SelAbsentAbsent	Ta del bo še vedno odstranjen
SelAbsentAdvertise	Ta del bo ponastavljen za zagon ob prvi uporabi
SelAbsentCD	Ta del bo ponastavljen za zagon iz plošèe CD
SelAbsentLocal	Ta del bo namešèen na lokalni disk
SelAbsentNetwork	Ta del bo ponastavljen za zagon iz omrežja
SelAdvertiseAbsent	Ta del bo odstranjen
SelAdvertiseAdvertise	Ta del bo namešèen ob prvi uporabi
SelAdvertiseCD	Ta del bo ponastavljen za zagon iz plošèe CD
SelAdvertiseLocal	Ta del bo namešèen na lokalni disk
SelAdvertiseNetwork	Ta del bo ponastavljen za zagon iz omrežja
SelCDAbsent	Ta del bo odstranjen, ne boste ga mogli zagnati niti iz plošèe CD
SelCDAdvertise	Ta del bo ponastavljen za zagon ob prvi uporabi
SelCDCD	Ta del bo še vedno namešèen za zagon iz plošèe CD
SelCDLocal	Ta del bo namešèen na lokalni disk
SelChildCostNeg	Ta del bo sprostil [1] na vašem disku.
SelChildCostPos	Ta del zahteva [1] na vašem disku.
SelCostPending	Raèunam potreben prostor za ta del ...
SelLocalAbsent	Ta del bo odstranjen
SelLocalAdvertise	Ta del bo odstranjen iz vašega lokalnega diska, vendar bo ponastavljen za zagon ob prvi uporabi
SelLocalCD	Ta del bo odstranjen iz vašega lokalnega diska, vendar bo ponastavljen za zagon iz plošèe CD
SelLocalLocal	Ta del bo še vedno namešèen na vašem lokalnem disku
SelLocalNetwork	Ta del bo odstranjen iz vašega lokalnega diska, vendar bo ponastavljen za zagon iz omrežja
SelNetworkAbsent	Ta del bo odstranjen, ne boste ga mogli zagnati niti iz omrežja
SelNetworkAdvertise	Ta del bo ponastavljen za zagon ob prvi uporabi
SelNetworkLocal	Ta del bo namešèen na lokalni disk
SelNetworkNetwork	Ta del bo še vedno namešèen za zagon iz omrežja
SelParentCostNegNeg	Ta komponenta zaseda [1] na vašem lokalnem disku. Ima izbranih [2] od [3] delov. Deli zasedajo [4] na vašem lokalnem disku.
SelParentCostNegPos	Ta komponenta zaseda [1] na vašem lokalnem disku. Ima izbranih [2] od [3] delov. Deli zasedajo [4] na vašem lokalnem disku.
SelParentCostPosNeg	Ta komponenta zaseda [1] na vašem lokalnem disku. Ima izbranih [2] od [3] delov. Deli zasedajo [4] na vašem lokalnem disku.
SelParentCostPosPos	Ta komponenta zaseda [1] na vašem lokalnem disku. Ima izbranih [2] od [3] delov. Deli zasedajo [4] na vašem lokalnem disku.
TimeRemaining	Preostalo èasa: {[1] min }{[2] sek}
VolumeCostAvailable	Na voljo
VolumeCostDifference	Razlika
VolumeCostRequired	Potrebno
VolumeCostSize	Velikost
VolumeCostVolume	Pogon
<<NOKEEP

"De.$(PLAT).$(CFG).UIText-2.idt" : "Sl.$(PLAT).$(CFG).UIText-2.idtx" "..\res\de_DE.po"
	rcxgettext.exe idtp $@ $**

"En.$(PLAT).$(CFG).UIText-2.idt" : "Sl.$(PLAT).$(CFG).UIText-2.idtx" "..\res\en_GB.po"
	rcxgettext.exe idtp $@ $**

"It.$(PLAT).$(CFG).UIText-2.idt" : "Sl.$(PLAT).$(CFG).UIText-2.idtx" "..\res\it_IT.po"
	rcxgettext.exe idtp $@ $**

"Sl.$(PLAT).$(CFG).UIText-2.idt" : "Sl.$(PLAT).$(CFG).UIText-2.idtx"
	copy /y $** $@ > NUL


######################################################################
# Build MSM module!
######################################################################

!INCLUDE "..\MSM.mak"
