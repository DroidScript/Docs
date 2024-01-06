/** all types */
declare type all = any;
/** Boolean */
declare type bin = boolean;
/** app object */
declare type dso = AppObject;
/** game object */
declare type gvo = GameObject;
/** smartwatch object */
declare type swo = SmartWatchObject;
/** JavaScript object */
declare type jso = JSObject;
/** Function */
declare type fnc = Function;
/** List */
declare type lst = any[];
/** Number */
declare type num = number;
/** Object */
declare type obj = object;
/** String */
declare type str = string;
/** ui object */
declare type uio = UIObject;
/** of objects */
declare type lst_obj = any[];
/** of numbers */
declare type lst_num = number[];
/** bytes */
declare type num_byt = number;
/** hexadecimal 0xrrggbb */
declare type num_col = number;
/** datetime in milliseconds (from JS Date object) */
declare type num_dat = number;
/** angle in degrees (0..360) */
declare type num_deg = number;
/** 0-255 */
declare type num_dhx = number;
/** factor */
declare type num_fac = number;
/** float */
declare type num_flt = number;
/** frames per second */
declare type num_fps = number;
/** fraction (0..1) */
declare type num_frc = number;
/** gigabytes */
declare type num_gbt = number;
/** hertz */
declare type num_hrz = number;
/** integer */
declare type num_int = number;
/** meters */
declare type num_met = number;
/** milliseconds */
declare type num_mls = number;
/** maximum transmission unit */
declare type num_mtu = number;
/** percent */
declare type num_prc = number;
/** pixel */
declare type num_pxl = number;
/** angle in radient (0..2*π) */
declare type num_rad = number;
/** seconds */
declare type num_sec = number;
/** account Email */
declare type str_acc = string;
/** base64 encoded */
declare type str_b64 = string;
/** <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ... */
declare type str_col = string;
/** comma “,” separated */
declare type str_com = string|string[];
/** comma separated email addresses or names */
declare type str_eml = string;
/** float */
declare type str_flt = string;
/** format */
declare type str_fmt = string;
/** html code */
declare type str_htm = string;
/** hexadecimal “00”..“FF” */
declare type str_hex = string;
/** integer */
declare type str_int = string;
/** javascript code */
declare type str_jsc = string;
/** JSON object */
declare type str_jsn = string;
/** separated */
declare type str_lst = string;
/** mimetype */
declare type str_mim = string;
/** mode */
declare type str_mod = string;
/** number */
declare type str_num = string;
/** object id “#id” */
declare type str_oid = string;
/** “Default”, “Portrait”, “Landscape” */
declare type str_ort = string;
/** pipe “|” separated */
declare type str_pip = string;
/** file path or content:// uri */
declare type str_ptc = string;
/** path to file or folder ( “/absolute/...” or “relative/...” ) */
declare type str_pth = string;
/** path to file ( “/absolute/...” or “relative/...” ) */
declare type str_ptf = string;
/** path to folder ( “/absolute/...” or “relative/...” ) */
declare type str_ptd = string;
/** “/absolute/...” path to a file */
declare type str_pfa = string;
/** “relative/...” path to a file */
declare type str_pfr = string;
/** “/absolute/...” path to a folder */
declare type str_pda = string;
/** “relative/...” path to a folder */
declare type str_pdr = string;
/** integer in pixels */
declare type str_pxl = string;
/** semicolon “;” separated */
declare type str_smc = string;
/** sql code */
declare type str_sql = string;
/** style */
declare type str_sty = string;
/** URI encoded */
declare type str_uri = string;
/** url path */
declare type str_url = string;


class DsMUI {

	/**
	 * Adds a nice pop-up at the top. See CreateAlert for a full documentation
	 * @param text Popup text
	 * @param icon Material icon
	 */
	AddAlert(text: str, icon: str, color: str_col): MuiAlert;

	/**
	 * Adds a simple alert with a single button. See CreateAlertSimple for a full documentation
	 * @param text Text of the alert
	 * @param btnText Button text. Default is OKAY
	 */
	AddAlertSimple(text: str, btnText: str, color: str_col): MuiAlertSimple;

	/**
	 * #AddAppBar.md
	 * @param p1 Title text|Hint
	 * @param p2 Material Icon
	 * @param options 
 	 * &emsp; `Rectangle` - for Modern Appbar
	 */
	AddAppBar(parent: DsLayout, p1: str, p2: str, p3: "controls"|"color", options: string | ("Elegant"|"Modern"|"Default"|"Round"|"Rectangle")[]): MuiAppBar;

	/**
	 * Adds an elegant appbar on a given layout. See CreateAppBarElegant for a full documentation
	 * @param title Title text
	 * @param leadingIcon Material icon font
	 * @param options material icon font for the right controls
	 */
	AddAppBarElegant(parent: DsLayout, title: str, leadingIcon: str, options: str_com): MuiAppBarElegant;

	/**
	 * Adds a modern appbar on a given layout. See CreateAppBarModern for a full documentation
	 * @param hint Hint text for the search input
	 * @param controlIcon Material font for the control icon
	 */
	AddAppBarModern(parent: DsLayout, hint: str, controlIcon: str, options: "Round"|"Rectangle", color: str_col): MuiAppBarModern;

	/**
	 * Adds a banner dialog. See CreateBanner for a full documentation
	 * @param okText Truthy button text
	 * @param cancelText Falsey button text
	 */
	AddBanner(text: str, okText: str, cancelText: str): MuiBanner;

	/** Adds a MUI button to a given layout. See CreateButtonElegant, CreateButtonFlat, CreateButtonRaised, CreateButtonRaisedO, CreateButtonRound, and CreateButtonRoundO for full documentation */
	AddButton(parent: DsLayout, text: str, width: num_frc, height: num_frc, options: "raised"|"raisedo"|"roundo"|"round"|"elegant"|"outlined"|"contained"|"text"|"flat"): MuiButton;

	/** Adds a contained material button on a given layout. See CreateButtonContained for full documentation */
	AddButtonContained(parent: DsLayout, text: str, width: num_frc, height: num_frc): MuiButtonContained;

	/** Add an elegant button on a given layout. See CreateButtonElegant for full documentation */
	AddButtonElegant(parent: DsLayout, text: str, width: num_frc, height: num_frc, color: str_col): MuiButtonElegant;

	/** Adds a flat button on given layout. See CreateButtonFlat for full documentation */
	AddButtonFlat(parent: DsLayout, text: str, width: num_frc, height: num_frc, color: str_col, backColor: str_col): MuiButtonFlat;

	/** An outlined material button. See CreateButtonOutlined for full documentation */
	AddButtonOutlined(parent: DsLayout, text: str, width: num_frc, height: num_frc): MuiButtonOutlined;

	/** Adds a raised material button on a given layout. See CreateButtonRaised for full documentation */
	AddButtonRaised(parent: DsLayout, text: str, width: num_frc, height: num_frc, color: str_col, txtcolor: str_col): MuiButtonRaised;

	/** Adds an outlined material raised button on a given layout. See CreateButtonRaisedO for full documentation */
	AddButtonRaisedO(parent: DsLayout, text: str, width: num_frc, height: num_frc, color: str_col, backColor: str_col): MuiButtonRaisedO;

	/** Adds a round material button on a given layout. See CreateButtonRound for full documentation */
	AddButtonRound(parent: DsLayout, text: str, width: num_frc, height: num_frc, color: str_col, txtcolor: str_col): MuiButtonRound;

	/** Adds an outlined material round button on a given layout. See CreateButtonRoundO for full documentation */
	AddButtonRoundO(parent: DsLayout, text: str, width: num_frc, height: num_frc, color: str_col, backColor: str_col): MuiButtonRoundO;

	/** Adds a text button on a given layout. See CreateButtonFlat for full documentation */
	AddButtonText(parent: DsLayout, text: str, width: num_frc, height: num_frc): MuiButtonText;

	/**
	 * Adds a toggleable button on a given layout. See CreateButtonToggle for a full documentation
	 * @param text Button text
	 */
	AddButtonToggle(parent: DsLayout, text: str, width: num_frc, height: num_frc, value: bin, callback: () => void): MuiButtonToggle;

	/**
	 * Adds a card on a given layout. See CreateCard for a full documentation
	 * @param options 
 	 * &emsp; `title`\
 	 * &emsp; `body`\
 	 * &emsp; `image`\
 	 * &emsp; `buttonText`\
 	 * &emsp; `color`\
 	 * &emsp; `width`\
 	 * &emsp; `dividerAvatar`\
 	 * &emsp; `dividerBody`\
 	 * &emsp; `avatar`\
 	 * &emsp; `avatarOnTop`\
 	 * &emsp; `buttonType`
	 */
	AddCard(parent: DsLayout, options: {title: str, body: str, image: str_ptf, buttonText: str_com, color: str, width: num_frc, dividerAvatar: bin, dividerBody: bin, avatar: str_pth, avatarOnTop: bin, buttonType: "raised"|"raisedoutline"|"round"|"roundoutline"|"flat"}): MuiCard;

	/**
	 * Adds an MUI Checkbox on a given layout. See CreateCheckbox for a full documentation
	 * @param list A comma separated string
	 */
	AddCheckbox(parent: DsLayout, list: lst, width: num_frc, height: num_frc, color: str_col): MuiCheckbox;

	/**
	 * Adds an MUI checklist dialog. See CreateCheckList for a full documentation
	 * @param list An array of objects of the form {name: string, check: boolean}
	 */
	AddCheckList(parent: DsTextEdit, title: str, list: lst_obj, color: str_col, bottom: bin): MuiCheckList;

	/** Creates a color picker dialog where you can select a range of MUI predefined colors */
	AddColorPicker(parent: DsTextEdit, title: "Title"): MuiColorPicker;

	/**
	 * Adds a new DataTable Control
	 * @param columns An array of strings of the form Name:Type for column header. Where 'Name' is the column name and 'Type is the column type [Can be Sortable or Numeric]'
	 * @param values An array of strings of the form Val1:Val2:Val3...
	 * @param width Fraction of the screen width
	 * @param height Fraction of the screen height
	 */
	AddDataTable(parent: DsLayout, columns: lst, values: lst, width: num, height: num, options: string | ("Selectable")[]): MuiDataTable;

	/**
	 * Adds a date picker dialog. See CreateDatePicker for a full documentation
	 * @param yyyy Full year
	 * @param mm [0-11]
	 * @param dd [1-31]
	 */
	AddDatePicker(parent: DsTextEdit, yyyy: num_int, mm: num_int, dd: num_int, color: str_col): MuiDatePicker;

	/**
	 * Adds a customizable materialize dialog. See CreateDialog for a full documentation
	 * @param body Body text
	 * @param okText Truthy button text
	 * @param cancelText Falsey button text
	 * @param divider Show divider or hide
	 */
	AddDialog(title: "Title", body: str, okText: str, cancelText: str, divider: bin): MuiDialog;

	/** Adds a divider to a given layout. See CreateDivider for a full documentation */
	AddDivider(parent: DsLayout, height: Optional): MuiDivider;

	/**
	 * Adds a floating action button. See CreateFAB, CreateFABElegant and CreateFABOutline for a full documentation
	 * @param icon Material icon fonts
	 */
	AddFAB(parent: DsLayout, icon: str, color: str_col, options: string | ("outline"|"elegant"|"default")[]): MuiFAB;

	/**
	 * Adds an elegant floating action button. See CreateFABElegant for a full documentation
	 * @param icon Material icon fonts
	 */
	AddFABElegant(parent: DsLayout, icon: str, color: str_col): MuiFABElegant;

	/**
	 * Adds an outlined floating action button on a given layout. See CreateFABOutline for a full documentation
	 * @param icon Material icon font
	 */
	AddFABOutline(parent: DsLayout, icon: str, color: str_col, backColor: str_col): MuiFABOutline;

	/**
	 * Adds a layout. See CreateLayout for a full documentation
	 * @param options Comma separated DroidScript layout options
	 */
	AddLayout(parent: DsLayout, type: "Linear"|"Absolute"|"Frame"|"Card", options: str): MuiLayout;

	/** Adds an MUI control on a given layout. See CreateList, CreateListModern and CreateListSimple for a full documentation */
	AddList(parent: DsLayout, list: str, width: num, height: num, options: string | ("simple"|"modern"|"default"|"divider")[]): MuiList;

	/**
	 * Adds a more customizable list dialog or checklist dialog. See CreateListDialog and CreateCheckList for a full documentation on each type
	 * @param list An array of objects
	 */
	AddListDialog(parent: DsTextEdit, title: str, list: lst, color: str_col, options: string | ("CheckList"|"ListDialog"|"Bottom")[]): MuiListDialog;

	/**
	 * Adds a ListModern control on a given layout. See CreateListModern for a full documentation
	 * @param list An array of object elements. See list example
	 */
	AddListModern(parent: DsLayout, list: lst, width: num, height: num, options: "Initial"|"Material"|"Avatar"|"RightIcon"|"RightNote"|"Selectable"): MuiListModern;

	/**
	 * Adds a simple list for navigation purposes. See CreateListSimple for a full documentation
	 * @param list 
 	 * &emsp; `title`\
 	 * &emsp; `icon`\
 	 * &emsp; `color`\
 	 * &emsp; `badge`
	 */
	AddListSimple(parent: DsLayout, list: { title: str, icon: str, color: str_col, badge: num }, width: num_frc, height: num_frc, options: "Divider"): MuiListSimple;

	/** Adds a simple menu */
	AddMenu(list: string | ("list")[], width: num_frc, height: num_frc, position: "Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"): MuiMenu;

	/** MUI menu with material icon font. See CreateMenuWithIcon for a full documentation */
	AddMenuWithIcon(list: str, width: num_frc, height: num_frc, position: "Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"): MuiMenuWithIcon;

	/**
	 * Adds a modal. See CreateModal for a full documentation
	 * @param body Body text. If you want to customize the modal layout pass an empty string.
	 * @param okTxt Truthy button text
	 * @param cancelTxt Falsy button text
	 * @param options Dialog options with additional Full option
	 */
	AddModal(title: str, body: str, okTxt: str, cancelTxt: str, options: str): MuiModal;

	/** Adds a picker dialog such as time, date or color. See CreateDatePicker, CreateTimePicker and CreateColorPicker for a full documentation */
	AddPicker(parent: DsTextEdit, options: "Date"|"Color"|"Time"): MuiPicker;

	/** #AddRadio.md */
	AddRadio(parent: DsLayout, list: string | ("strings")[], width: num, height: num, options: string | ("Buttons"|"Material"|"Normal")[], p1: "color"|"orientation", color: str_col, backColor: str_col): MuiRadio;

	/**
	 * Adds a radio button control
	 * @param list A comma separated strings
	 */
	AddRadioButtons(parent: DsLayout, list: lst, width: num, height: num, orientation: "Vertical"|"Horizontal", color: str_col, backColor: str_col): MuiRadioButtons;

	/**
	 * Adds a material radio control
	 * @param list A comma separated strings
	 */
	AddRadioMaterial(parent: DsLayout, list: lst, width: num, height: num, orientation: "Vertical"|"Horizontal", color: str_col, backColor: str_col): MuiRadioMaterial;

	/**
	 * Adds an MUI basic seekbar
	 * @param value Must be between 0 and range
	 * @param range The maximum value of your seekbar
	 */
	AddSeekBar(parent: DsLayout, value: num, range: num, width: num, color: str_col): MuiSeekBar;

	/** Adds an MUI Switch to a given control. See CreateSwitch for a full documentation */
	AddSwitch(parent: DsLayout, value: bin, color: str_col): MuiSwitch;

	/** Adds an MUI SwitchSettings to a given layout. See CreateSwitchSettings for a full documentation */
	AddSwitchSettings(parent: DsLayout, text: str, width: num_frc, height: num_frc, value: bin, color: str_col, backColor: str_col): MuiSwitchSettings;

	/**
	 * Adds an MUI tab on a given layout. See CreateTabFixed for a full documentation
	 * @param options DS layout options|Fix
	 */
	AddTabs(parent: DsLayout, title: string | ("titles")[], width: num, height: num, options: str_com, color: str_col, animation: bin): MuiTabs;

	/**
	 * Adds a filled text input with icon on the left
	 * @param options DS TextEdit options
	 * @param icon Material icon font
	 * @param hint Hint or label text
	 * @param label Show or hide label
	 */
	AddTEFilledIconLeft(parent: DsLayout, width: num, options: str_com, icon: str, hint: str, label: bin, color: str_col): MuiTEFilledIconLeft;

	/**
	 * Adds a filled text input with icon on the right on a given layout. See CreateTEFilledIconRight for full documentaion
	 * @param options DS TextEdit options
	 * @param icon Material icon font
	 * @param hint Hint or label text
	 * @param label Show or hide label
	 */
	AddTEFilledIconRight(parent: DsLayout, width: num, options: str_com, icon: str, hint: str, label: bin, color: str_col): MuiTEFilledIconRight;

	/**
	 * Adds a material outlined text input with icon on the left
	 * @param options DS TextEdit options with additional 'Round' option.
	 * @param icon Material icon font
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	AddTEOutlineIconLeft(parent: DsLayout, width: num, options: str_com, icon: str, hint: str, label: bin, color: str_col, backColor: str_col): MuiTEOutlineIconLeft;

	/**
	 * Adds a material outlined text input with icon on the right
	 * @param options DS TextEdit options with additional 'Round' option.
	 * @param icon Material icon font
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	AddTEOutlineIconRight(parent: DsLayout, width: num, options: str_com, icon: str, hint: str, label: bin, color: str_col, backColor: str_col): MuiTEOutlineIconRight;

	/**
	 * Adds an elegant search textedit on a given layout. See CreateTESearchElegant for full documentation
	 * @param hint Hint text
	 * @param icon Material icon font
	 */
	AddTESearchElegant(parent: DsLayout, width: num, hint: str, icon: str, iconPos: "Right"|"Left", color: str_col, option: "Small"|"Normal"|"Border"): MuiTESearchElegant;

	/**
	 * Creates a unique text input
	 * @param hint Hint text
	 * @param icon Material icon font
	 */
	AddTESearchUnique(parent: DsLayout, width: num, hint: str, icon: str, iconColor: str_col): MuiTESearchUnique;

	/**
	 * Adds a mui text control to the layout. See CreateTextH1, CreateTextH2, CreateTextH3, CreateTextH4, CreateTextH5, CreateTextH6, CreateTextJumbo, CreateTextParagraph and CreateTextSecondary for full documentation on each type of mui typhography
	 * @param options DS text options with addition Thin|Light|Regular|Medium|Bold,h1|h2|h3|h4|h5|h6|secondary|jumbo|paragraph
	 */
	AddText(parent: DsLayout, text: str, width: num, height: num, options: str, color: str_col): MuiText;

	/**
	 * Adds a material filled textarea
	 * @param hint Hint text
	 * @param label Show or hide label
	 */
	AddTextArea(parent: DsLayout, width: num, height: num, options: string | ("filled"|"outline"|"active")[], hint: str, label: bin, color: str_col, backColor: str_col): MuiTextArea;

	/**
	 * Add a material filled textarea on a given layout. See CreateTextAreaFilled for  a full documentation
	 * @param hint Hint text
	 * @param label Show or hide label
	 */
	AddTextAreaFilled(parent: DsLayout, width: num, height: num, hint: str, label: bin, color: str_col): MuiTextAreaFilled;

	/**
	 * Adds an active filled textarea
	 * @param hint Hint|Label text
	 * @param label Hides or show label
	 */
	AddTextAreaFilledA(parent: DsLayout, width: num, height: num, hint: str, label: bin, color: str_col): MuiTextAreaFilledA;

	/**
	 * Add an outlined material textarea
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	AddTextAreaOutline(parent: DsLayout, width: num, height: num, hint: str, label: bin, color: str_col, backColor: str_col): MuiTextAreaOutline;

	/**
	 * Add an active outlined material textarea
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	AddTextAreaOutlineA(parent: DsLayout, width: num, height: num, hint: str, label: bin, color: str_col, backColor: str_col): MuiTextAreaOutlineA;

	/**
	 * #AddTextEdit.md
	 * @param options outline|filled|unique|search|active|icon and for icon can be  left|right
	 * @param p1 See corresponding MUI TextEdit
	 * @param p2 See corresponding MUI TextEdit
	 * @param p3 See corresponding MUI TextEdit
	 * @param p4 See corresponding MUI TextEdit
	 * @param p5 See corresponding MUI TextEdit
	 */
	AddTextEdit(parent: DsLayout, width: num, options: str, p1: str, p2: str, p3: str, p4: str, p5: str): MuiTextEdit;

	/**
	 * Adds the most common type of material text input
	 * @param options Comma separated DS TextEdit options
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	AddTextEditFilled(parent: DsLayout, width: num, options: str, hint: str, label: bin, color: str_col): MuiTextEditFilled;

	/**
	 * Add an active filled material text input
	 * @param options Comma separated DS TextEdit options
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	AddTextEditFilledA(parent: DsLayout, width: num, options: str, hint: str, label: bin, color: str_col): MuiTextEditFilledA;

	/**
	 * Adds an outlined material text input
	 * @param options Comma separated DS TextEdit options with additional 'Round' option.
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	AddTextEditOutline(parent: DsLayout, width: num, options: str, hint: str, label: bin): MuiTextEditOutline;

	/**
	 * Adds an active outlined material text input
	 * @param options Comma separated DS TextEdit options with additional 'Round' option.
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	AddTextEditOutlineA(parent: DsLayout, width: num, options: str, hint: str, label: bin, color: str_col, backColor: str_col): MuiTextEditOutlineA;

	/**
	 * Adds a customize search style text input
	 * @param options Comma separated DS TextEdit options
	 * @param hint Hint text
	 */
	AddTextEditSearch(parent: DsLayout, width: num, options: str, hint: str, color: str_col, backColor: str_col): MuiTextEditSearch;

	/**
	 * Adds a unique textedit customization
	 * @param hint Hint text
	 * @param icon Material icon font
	 * @param iconCOlor Icon color
	 */
	AddTextEditUnique(parent: DsLayout, width: num, hint: str, icon: str, iconCOlor: str_col): MuiTextEditUnique;

	/**
	 * Adds an H1 text to a layout. See CreateTextH1 for full documentation
	 * @param options DS text options
	 */
	AddTextH1(parent: DsLayout, text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH1;

	/**
	 * Adds an H2 text to a layout. See CreateTextH2 for full documentation
	 * @param options DS text options
	 */
	AddTextH2(parent: DsLayout, text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH2;

	/**
	 * Adds an H3 text to a layout. See CreateTextH3 for full documentation
	 * @param options DS text options
	 */
	AddTextH3(parent: DsLayout, text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH3;

	/**
	 * Adds an H4 text to a layout. See CreateTextH4 for full documentation
	 * @param options DS text options
	 */
	AddTextH4(parent: DsLayout, text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH4;

	/**
	 * Adds an H5 text to a layout. See CreateTextH5 for full documentation
	 * @param options DS text options
	 */
	AddTextH5(parent: DsLayout, text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH5;

	/**
	 * Adds an H6 text to a layout. See CreateTextH6 for full documentation
	 * @param options DS text options
	 */
	AddTextH6(parent: DsLayout, text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH6;

	/**
	 * Creates an extra large text
	 * @param options DS text options
	 */
	AddTextJumbo(parent: DsLayout, text: str, width: num, height: num, options: str, color: str_col): MuiTextJumbo;

	/**
	 * Adds a paragraph text to a layout. See CreateTextParagraph for full documentation
	 * @param options DS text options
	 */
	AddTextParagraph(parent: DsLayout, text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextParagraph;

	/**
	 * Adds a secondary text to a layout. See CreateTextSecondary for full documentation
	 * @param options DS text options
	 */
	AddTextSecondary(parent: DsLayout, text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextSecondary;

	/**
	 * Adds a time picker
	 * @param hour [0-24]
	 * @param minute 0-59
	 */
	AddTimePicker(parent: DsTextEdit, hour: num, minute: num, color: str_col): MuiTimePicker;

	/** #colors.md */
	colors: obj;

	/**
	 * A nice pop-up at the top of your current layout
	 * @param text Popup text
	 * @param icon Material icon
	 */
	CreateAlert(text: str, icon: str, color: str_col): MuiAlert;

	/**
	 * Create a simple alert with a single button
	 * @param text Text of the alert
	 * @param btnText Button text. Default is OKAY
	 */
	CreateAlertSimple(text: str, btnText: str, color: str_col): MuiAlertSimple;

	/**
	 * The most common type of material design app bar
	 * @param title Title text
	 * @param leadingIcon A material font icon for the leading control
	 * @param controls material icon font for the right controls
	 */
	CreateAppBar(title: str, leadingIcon: str, controls: str_com): MuiAppBar;

	/**
	 * A more elegant appbar implementation
	 * @param title Title text
	 * @param leadingIcon Material icon font
	 * @param options material icon font for the right controls
	 */
	CreateAppBarElegant(title: str, leadingIcon: str, options: str_com): MuiAppBarElegant;

	/**
	 * A modern appbar with a search input, leading icon and trailing icon
	 * @param hint Hint text for the search input
	 * @param controlIcon Material font for the control icon
	 */
	CreateAppBarModern(hint: str, controlIcon: str, options: "Round"|"Rectangle", color: str_col): MuiAppBarModern;

	/**
	 * A banner dialog is a nice popup that slides from the top of your current page
	 * @param okText Truthy button text
	 * @param cancelText Falsey button text
	 */
	CreateBanner(text: str, okText: str, cancelText: str): MuiBanner;

	/** An contained material button */
	CreateButtonContained(text: str, width: num_frc, height: num_frc): MuiButtonContained;

	/** An elegant button */
	CreateButtonElegant(text: str, width: num_frc, height: num_frc, color: str_col): MuiButtonElegant;

	/** Just a flat button */
	CreateButtonFlat(text: str, width: num_frc, height: num_frc, color: str_col, backColor: str_col): MuiButtonFlat;

	/** An outlined material button */
	CreateButtonOutlined(text: str, width: num_frc, height: num_frc): MuiButtonOutlined;

	/** The basic type of material button */
	CreateButtonRaised(text: str, width: num_frc, height: num_frc, color: str_col, txtcolor: str_col): MuiButtonRaised;

	/** An outlined material raised button */
	CreateButtonRaisedO(text: str, width: num_frc, height: num_frc, color: str_col, backColor: str_col): MuiButtonRaisedO;

	/** A round material button */
	CreateButtonRound(text: str, width: num_frc, height: num_frc, color: str_col, txtcolor: str_col): MuiButtonRound;

	/** An outlined material round button */
	CreateButtonRoundO(text: str, width: num_frc, height: num_frc, color: str_col, backColor: str_col): MuiButtonRoundO;

	/** Adds a text button. See CreateButtonFlat for full documentation */
	CreateButtonText(text: str, width: num_frc, height: num_frc): MuiButtonText;

	/** Create button toggle */
	CreateButtonToggle(text: str, width: num_frc, height: num_frc, value: bin, callback: () => void, color: str_col, backColor: str_col): MuiButtonToggle;

	/**
	 * #CreateCard.md
	 * @param options 
 	 * &emsp; `title`\
 	 * &emsp; `body`\
 	 * &emsp; `image`\
 	 * &emsp; `buttonText`\
 	 * &emsp; `color`\
 	 * &emsp; `width`\
 	 * &emsp; `dividerAvatar`\
 	 * &emsp; `dividerBody`\
 	 * &emsp; `avatar`\
 	 * &emsp; `avatarOnTop`\
 	 * &emsp; `buttonType`
	 */
	CreateCard(options: {title: str, body: str, image: str_ptf, buttonText: str_com, color: str, width: num_frc, dividerAvatar: bin, dividerBody: bin, avatar: str_pth, avatarOnTop: bin, buttonType: "raised"|"raisedoutline"|"round"|"roundoutline"|"flat"}): MuiCard;

	/**
	 * Checkbox is a powerful control when you want the user to select multiple items in a group
	 * @param list A comma separated string
	 */
	CreateCheckbox(list: lst, width: num_frc, height: num_frc, color: str_col): MuiCheckbox;

	/**
	 * Check list is a dialog type checkbox list. Let the user select items in a nice popup
	 * @param list An array of objects of the form {name: string, check: boolean}
	 */
	CreateCheckList(title: str, list: lst_obj, color: str_col, bottom: bin): MuiCheckList;

	/** Creates a color picker dialog where you can select a range of MUI predefined colors */
	CreateColorPicker(title: str): MuiColorPicker;

	/**
	 * Creates a new DataTable Control
	 * @param columns An array of strings of the form Name:Type for column header. Where 'Name' is the column name and 'Type is the column type [Can be Sortable or Numeric]'
	 * @param values An array of strings of the form Val1:Val2:Val3...
	 * @param width Fraction of the screen width
	 * @param height Fraction of the screen height
	 */
	CreateDataTable(columns: lst, values: lst, width: num, height: num, options: string | ("Selectable")[]): MuiDataTable;

	/**
	 * Creates a materialize date picker dialog
	 * @param yyyy Full year
	 * @param mm [0-11]
	 * @param dd [1-31]
	 */
	CreateDatePicker(yyyy: num_int, mm: num_int, dd: num_int, color: str_col): MuiDatePicker;

	/**
	 * Creates a customizable materialize dialog
	 * @param body Body text
	 * @param okText Truthy button text
	 * @param cancelText Falsey button text
	 * @param divider Show divider or hide
	 */
	CreateDialog(title: "Title", body: str, okText: str, cancelText: str, divider: bin): MuiDialog;

	/** Creates a divider which you can add to your layout */
	CreateDivider(height: Optional): MuiDivider;

	/**
	 * Creates a floating action button
	 * @param icon Material icon fonts
	 */
	CreateFAB(icon: str, color: str_col): MuiFAB;

	/**
	 * An elegant floating action button
	 * @param icon Material icon fonts
	 */
	CreateFABElegant(icon: str, color: str_col): MuiFABElegant;

	/**
	 * Creates an outlined floating action button
	 * @param icon Material icon font
	 */
	CreateFABOutline(icon: str, color: str_col, backColor: str_col): MuiFABOutline;

	/**
	 * #CreateLayout.md
	 * @param options Comma separated DroidScript layout options
	 */
	CreateLayout(type: "Linear"|"Absolute"|"Frame"|"Card", options: str): MuiLayout;

	/** A manipulation of the DroidScript list object */
	CreateList(list: str, width: num, height: num, options: str): MuiList;

	/**
	 * Creates a more customizable list dialog
	 * @param list An array of objects of the form {name: 'string', icon: 'material-icon', color: 'string'}
	 */
	CreateListDialog(title: str, list: lst_obj, color: str_col, bottom: bin): MuiListDialog;

	/**
	 * #CreateListModern.md
	 * @param list An array of object elements. See list example
	 */
	CreateListModern(list: lst, width: num, height: num, options: "Initial"|"Material"|"Avatar"|"RightIcon"|"RightNote"|"Selectable"): MuiListModern;

	/**
	 * Creates a simple list that has an optional badge and icon with no body text
	 * @param list 
 	 * &emsp; `title`\
 	 * &emsp; `icon`\
 	 * &emsp; `color`\
 	 * &emsp; `badge`
	 */
	CreateListSimple(list: { title: str, icon: str, color: str_col, badge: num }, width: num_frc, height: num_frc, options: "Divider"): MuiListSimple;

	/** Creates a simple menu */
	CreateMenu(list: string | ("list")[], width: num_frc, height: num_frc, position: "Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"): MuiMenu;

	/** Advance MUI implementation of material design menu with additional icon using material icon font */
	CreateMenuWithIcon(list: str, width: num_frc, height: num_frc, position: "Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"): MuiMenuWithIcon;

	/**
	 * #CreateModal.md
	 * @param body Body text. If you want to customize the modal layout pass an empty string.
	 * @param okTxt Truthy button text
	 * @param cancelTxt Falsy button text
	 * @param options Dialog options with additional Full option
	 */
	CreateModal(title: str, body: str, okTxt: str, cancelTxt: str, show: bin, options: str): MuiModal;

	/** Creates a radio control. A radio control allows the user to select only one item in a list */
	CreateRadio(list: string | ("strings")[], width: num, height: num, color: str_col): MuiRadio;

	/**
	 * Creates a radio button control. A radio control allows the user to select only one item in a list. For selecting multiple items in a list, use checkbox
	 * @param list A comma separated strings
	 */
	CreateRadioButtons(list: lst, width: num, height: num, orientation: "Vertical"|"Horizontal", color: str_col, backColor: str_col): MuiRadioButtons;

	/**
	 * Creates a material radio control. A radio control allows the user to select only one item in a list. For selecting multiple items in a list, use checkbox
	 * @param list A comma separated strings
	 */
	CreateRadioMaterial(list: lst, width: num, height: num, orientation: "Vertical"|"Horizontal", color: str_col, backColor: str_col): MuiRadioMaterial;

	/**
	 * An MUI implementation of a basic seekbar
	 * @param value Must be between 0 and range
	 * @param range The maximum value of your seekbar
	 */
	CreateSeekBar(value: num, range: num, width: num, color: str_col): MuiSeekBar;

	/**
	 * Creates a material designed dropdown or spinner
	 * @param list String. A comma separated options
	 */
	CreateSpinner(list: lst, width: num_frc, height: num_frc): MuiSpinner;

	/** Creates a switch that can be toggled on and off */
	CreateSwitch(value: bin, color: str_col): MuiSwitch;

	/** Creates a switchable settings that can be toggled on and off */
	CreateSwitchSettings(text: str, width: num_frc, height: num_frc, value: bin, color: str_col, backColor: str_col): MuiSwitchSettings;

	/**
	 * #CreateTabFixed.md
	 * @param options DS layout options
	 */
	CreateTabFixed(title: string | ("titles")[], width: num, height: num, options: str_com, color: str_col, animation: bin): MuiTabFixed;

	/**
	 * Creates a filled text input with icon on the left
	 * @param options DS TextEdit options
	 * @param icon Material icon font
	 * @param hint Hint or label text
	 * @param label Show or hide label
	 */
	CreateTEFilledIconLeft(width: num, options: str_com, icon: str, hint: str, label: bin, color: str_col): MuiTEFilledIconLeft;

	/**
	 * Creates a filled text input with icon on the right
	 * @param options DS TextEdit options
	 * @param icon Material icon font
	 * @param hint Hint or label text
	 * @param label Show or hide label
	 */
	CreateTEFilledIconRight(width: num, options: str_com, icon: str, hint: str, label: bin, color: str_col): MuiTEFilledIconRight;

	/**
	 * Creates a material outlined text input with icon on the left
	 * @param options DS TextEdit options with additional 'Round' option.
	 * @param icon Material icon font
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	CreateTEOutlineIconLeft(width: num, options: str_com, icon: str, hint: str, label: bin, color: str_col, backColor: str_col): MuiTEOutlineIconLeft;

	/**
	 * Creates a material outlined text input with icon on the right
	 * @param options DS TextEdit options with additional 'Round' option.
	 * @param icon Material icon font
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	CreateTEOutlineIconRight(width: num, options: str_com, icon: str, hint: str, label: bin, color: str_col, backColor: str_col): MuiTEOutlineIconRight;

	/**
	 * #CreateTESearchElegant.md
	 * @param hint Hint text
	 * @param icon Material icon font
	 */
	CreateTESearchElegant(width: num, hint: str, icon: str, iconPos: "Right"|"Left", color: str_col, option: "Small"|"Normal"|"Border"): MuiTESearchElegant;

	/**
	 * Creates a unique text input
	 * @param hint Hint text
	 * @param icon Material icon font
	 */
	CreateTESearchUnique(width: num, hint: str, icon: str, iconColor: str_col): MuiTESearchUnique;

	/**
	 * Creates a material filled textarea
	 * @param hint Hint text
	 * @param label Show or hide label
	 */
	CreateTextAreaFilled(width: num, height: num, hint: str, label: bin, color: str_col): MuiTextAreaFilled;

	/**
	 * Creates an active filled textarea
	 * @param hint Hint|Label text
	 * @param label Hides or show label
	 */
	CreateTextAreaFilledA(width: num, height: num, hint: str, label: bin, color: str_col): MuiTextAreaFilledA;

	/**
	 * Creates an outlined material textarea
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	CreateTextAreaOutline(width: num, height: num, hint: str, label: bin, color: str_col, backColor: str_col): MuiTextAreaOutline;

	/**
	 * Creates an active outlined material textarea
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	CreateTextAreaOutlineA(width: num, height: num, hint: str, label: bin, color: str_col, backColor: str_col): MuiTextAreaOutlineA;

	/**
	 * Creates the most common type of material text input
	 * @param options Comma separated DS TextEdit options
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	CreateTextEditFilled(width: num, options: str, hint: str, label: bin, color: str_col): MuiTextEditFilled;

	/**
	 * Creates an active filled material text input
	 * @param options Comma separated DS TextEdit options
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	CreateTextEditFilledA(width: num, options: str, hint: str, label: bin, color: str_col): MuiTextEditFilledA;

	/**
	 * Creates an outlined material text input
	 * @param options Comma separated DS TextEdit options with additional 'Round' option.
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	CreateTextEditOutline(width: num, options: str, hint: str, label: bin, color: str_col, backColor: str_col): MuiTextEditOutline;

	/**
	 * Creates an active outlined material text input
	 * @param options Comma separated DS TextEdit options with additional 'Round' option.
	 * @param hint Hint|Label text
	 * @param label Show or hide label
	 */
	CreateTextEditOutlineA(width: num, options: str, hint: str, label: bin, color: str_col, backColor: str_col): MuiTextEditOutlineA;

	/**
	 * Creates a customize search style text input
	 * @param options Comma separated DS TextEdit options
	 * @param hint Hint text
	 */
	CreateTextEditSearch(width: num, options: str, hint: str, color: str_col, backColor: str_col): MuiTextEditSearch;

	/**
	 * Creates a unique textedit customization
	 * @param hint Hint text
	 * @param icon Material icon font
	 * @param iconCOlor Icon color
	 */
	CreateTextEditUnique(width: num, hint: str, icon: str, iconCOlor: str_col): MuiTextEditUnique;

	/**
	 * Creates a heading text 1
	 * @param options DS text options
	 */
	CreateTextH1(text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH1;

	/**
	 * Creates a heading text 2
	 * @param options DS text options
	 */
	CreateTextH2(text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH2;

	/**
	 * Creates a heading text 3
	 * @param options DS text options
	 */
	CreateTextH3(text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH3;

	/**
	 * Creates a heading text 4
	 * @param options DS text options
	 */
	CreateTextH4(text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH4;

	/**
	 * Creates a heading text 5
	 * @param options DS text options
	 */
	CreateTextH5(text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH5;

	/**
	 * Creates a heading text 6
	 * @param options DS text options
	 */
	CreateTextH6(text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH6;

	/**
	 * Creates an extra large text
	 * @param options DS text options
	 */
	CreateTextJumbo(text: str, width: num, height: num, options: str, color: str_col): MuiTextJumbo;

	/**
	 * Creates a paragraph text
	 * @param options DS text options
	 */
	CreateTextParagraph(text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextParagraph;

	/**
	 * Creates a secondary text
	 * @param options DS text options
	 */
	CreateTextSecondary(text: str, width: num, height: num, options: str, color: str_col, fontWeight: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextSecondary;

	/**
	 * Creates a material design time picker
	 * @param hour [0-24]
	 * @param minute 0-59
	 */
	CreateTimePicker(hour: num, minute: num, color: str_col): MuiTimePicker;

	/** #fonts.md */
	fonts: obj;

	/** Show a menu on a given control */
	ShowMenu(control: dso, list: str_lst, width: num_frc): obj;

}

class MuiAlert {

	/** Calls a function when alert is close */
	SetOnClose(callback: (isBtnClick: bin) => void): void;
}


class MuiAlertSimple {

	/** Calls a function when button is click */
	SetOnTouch(callback: (isBtnClick: bin) => void): void;
}


class MuiAppBar {

	/**
	 * Sets a new heading icon
	 * @param newIcon New material icon font
	 */
	SetMenuIcon(newIcon: str): void;

	/**
	 * Change the color of the heading icon
	 * @param newColor New color of the heading icon
	 */
	SetMenuIconColor(newColor: str_col): void;

	/** Calls a function when the right controls are click */
	SetOnControlTouch(callback: (btnTxt: str, index: num_int) => void): void;

	/** Calls a function when the heading icon is click */
	SetOnMenuTouch(callback: () => void): void;

	/**
	 * Sets a new title
	 * @param newTitle New title text
	 */
	SetTitleText(newTitle: str): void;

	/** Change the color of the title */
	SetTitleTextColor(newColor: str_col): void;
}


class MuiAppBarElegant {

	/**
	 * Sets a new heading icon
	 * @param newIcon New material icon font
	 */
	SetMenuIcon(newIcon: str): void;

	/**
	 * Change the color of the heading icon
	 * @param newColor New color of the heading icon
	 */
	SetMenuIconColor(newColor: str_col): void;

	/** Calls a function when the right controls are click */
	SetOnControlTouch(callback: (btnTxt: str, index: num_int) => void): void;

	/** Calls a function when the heading icon is click */
	SetOnMenuTouch(callback: () => void): void;

	/**
	 * Sets a new title
	 * @param newTitle New title text
	 */
	SetTitleText(newTitle: str): void;

	/** Change the color of the title */
	SetTitleTextColor(newColor: str_col): void;
}


class MuiAppBarModern {

	/** Calls a function when right control is touch */
	SetOnControlTouch(callback: () => void): void;

	/** Call a function when the menu icon is touch */
	SetOnMenuTouch(callback: () => void): void;

	/** Clear history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): void;

	/** Get cursor pos */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard (line can still be inserted via Shift+Enter) */
	SetOnEnter(callback: () => void): void;

	/** Define a callback function which is called when the user focuses the control */
	SetOnFocus(callback: () => void): void;

	/** Undo an action */
	Undo(): void;
}


class MuiBanner {

	/** Calls a function when buttons are click (prev. SetOnTouchOK) */
	SetOnTouch(callback: (isOkBtnClick: bin, btnText: str) => void): void;
}


class MuiButtonContained {

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";

	/** Set style */
	SetStyle(clr1: str_col, clr2: str_col, radius: num, strokeClr: str_col, strokeWidth: num, shadow: num): void;
}


class MuiButtonElegant {

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";

	/** Set style */
	SetStyle(clr1: str_col, clr2: str_col, radius: num, strokeClr: str_col, strokeWidth: num, shadow: num): void;
}


class MuiButtonFlat {

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";

	/** Set style */
	SetStyle(clr1: str_col, clr2: str_col, radius: num, strokeClr: str_col, strokeWidth: num, shadow: num): void;
}


class MuiButtonOutlined {

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";

	/** Set style */
	SetStyle(clr1: str_col, clr2: str_col, radius: num, strokeClr: str_col, strokeWidth: num, shadow: num): void;
}


class MuiButtonRaised {

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";

	/** Set style */
	SetStyle(clr1: str_col, clr2: str_col, radius: num, strokeClr: str_col, strokeWidth: num, shadow: num): void;
}


class MuiButtonRaisedO {

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";

	/** Set style */
	SetStyle(clr1: str_col, clr2: str_col, radius: num, strokeClr: str_col, strokeWidth: num, shadow: num): void;
}


class MuiButtonRound {

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";

	/** Set style */
	SetStyle(clr1: str_col, clr2: str_col, radius: num, strokeClr: str_col, strokeWidth: num, shadow: num): void;
}


class MuiButtonRoundO {

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";

	/** Set style */
	SetStyle(clr1: str_col, clr2: str_col, radius: num, strokeClr: str_col, strokeWidth: num, shadow: num): void;
}


class MuiButtonToggle {

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";

	/** Set style */
	SetStyle(clr1: str_col, clr2: str_col, radius: num, strokeClr: str_col, strokeWidth: num, shadow: num): void;
}


class MuiCard {

	/** Calls a function when buttons are click */
	SetOnButtonTouch(callback: (btnText: str, cardName: str) => void): void;

	/** Calls a function when the image is click */
	SetOnImageTouch(callback: (cardName: str) => void): void;

	/** Calls a function when avatar is click */
	SetOnAvatarTouch(callback: (cardName: str) => void): void;

	/** Calls a function when title item is click */
	SetOnTitleTouch(callback: (title: str, cardName: str) => void): void;
}


class MuiCheckbox {

	/** Calls a function when the checkbox is click */
	SetOnTouch(callback: (index: num_int, checked: bin) => void): void;

	/**
	 * Get the check items in the list
	 * @return List of indexes for slected items
	 */
	GetCheckItem(): lst;

	/**
	 * Checks the corresponding item/items in the checkbox list
	 * @param index You can also pass an array of indexes e.g. [1, 3]
	 */
	CheckItemByIndex(index: num_int): void;

	/**
	 * Unchecks the corresponding item/items in the checkbox list
	 * @param index You can also pass an array of indexes e.g. [1, 3]
	 */
	UncheckItemByIndex(index: num_int): void;
}


class MuiCheckList {

	/** Calls a function when the checklist is submitted */
	SetOnSubmit(callback: (lst: lst) => void): void;
}


class MuiColorPicker {

	/** Calls a function when a user click the OK button */
	SetOnSelect(callback: (color: str_col) => void): void;
}


class MuiDataTable {

	/**
	 * Append a row to the table
	 * @param row A colon ':' separated entries for the new row.
	 */
	AppendRow(row: str): void;

	/**
	 * Prepend a row to the table
	 * @param row A colon ':' separated entries for the new row.
	 */
	PrependRow(row: str): void;

	/**
	 * Remove a row at a given index or indexes
	 * @param index An array of indexes you want to remove. It can also be just a number for a single index.
	 */
	RemoveRows(index: lst): void;

	/** Get the selected rows. This function is synchronous. You need to pass a callback */
	GetSelectedRows(callback: (indexes: lst) => void): void;

	/** Calls a function when the selection status of the table changes */
	SetOnSelectionStatus(callback: (isTrue: bin) => void): void;

	/** Calls a function when a row in the table is click */
	SetOnTouch(callback: (row: str, index: num_int) => void): void;

	/** Calls a function when the Table is ready and rendered already */
	SetOnReady(callback: () => void): void;

	/** Calls a function when the Table is on progress */
	SetOnProgress(callback: (value: num) => void): void;

	/**
	 * Set the rows of the table to a new values of data
	 * @param values A comma separated strings of the form "Val1:Val2:Val3:..."
	 */
	SetRows(values: lst): void;

	/**
	 * Add a footer layout to the table where you can add controls
	 * @param type Type of layout. Can be Linear|Absolute|Frame. Default to Linear
	 * @param options A comma separated layout options. Default to Horizontal|Right|VCenter
	 * @param height A fraction of the screen height.
	 */
	AddFooter(type: str, options: str, height: num): MuiFooter;
}


class MuiDatePicker {

	/** Calls a function when a user click the OK button */
	SetOnSelect(callback: (date: str, yyyy: num_int, mm: num_int, dd: num_int) => void): void;
}


class MuiDialog {

	/** Calls a function when buttons are click (prev. SetOnTouchOK) */
	SetOnTouch(callback: (isOkBtnClick: bin, btnText: str) => void): void;
}


class MuiDivider {
}


class MuiFAB {

	/**
	 * Sets a new material icon
	 * @param icon Material icon font
	 */
	SetIcon(icon: str): void;

	/** Sets the text color */
	SetIconColor(color: str_col): void;

	/**
	 * Returns the icon
	 * @return Material icon font
	 */
	GetIcon(): str;

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";
}


class MuiFABElegant {

	/**
	 * Sets a new material icon
	 * @param icon Material icon font
	 */
	SetIcon(icon: str): void;

	/** Sets the text color */
	SetIconColor(color: str_col): void;

	/**
	 * Returns the icon
	 * @return Material icon font
	 */
	GetIcon(): str;

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";
}


class MuiFABOutline {

	/**
	 * Sets a new material icon
	 * @param icon Material icon font
	 */
	SetIcon(icon: str): void;

	/** Sets the text color */
	SetIconColor(color: str_col): void;

	/**
	 * Returns the icon
	 * @return Material icon font
	 */
	GetIcon(): str;

	/** Data */
	data: obj;

	/** Get type */
	GetType(): "Button";
}


class MuiList {

	/** Add item */
	AddItem(title: str, body: str, image: str_ptf): MuiItem;

	/** Get item */
	GetItem(title: str): obj;

	/** Get item by index */
	GetItemByIndex(index: num): obj;

	/** Get length */
	GetLength(): num_int;

	/** Get list */
	GetList(delim: str): obj;

	/** Get type */
	GetType(): "List";

	/** Insert item */
	InsertItem(index: num, title: str, body: str, image: str_ptf): void;

	/** Remove all */
	RemoveAll(): void;

	/** Remove item */
	RemoveItem(title: str): void;

	/** Remove item by index */
	RemoveItemByIndex(index: num): void;

	/** Scroll to item */
	ScrollToItem(title: str, body: str): void;

	/** Scroll to item by index */
	ScrollToItemByIndex(index: num): void;

	/** Select item */
	SelectItem(title: str, body: str, scroll: bin): void;

	/** Select item by index */
	SelectItemByIndex(index: num, scroll: bin): void;

	/** Set column widths */
	SetColumnWidths(icon: ?, title: str, body: str, mode: ?): void;

	/** Set divider */
	SetDivider(height: num, color: str_col): void;

	/** Set ellipsize1 */
	SetEllipsize1(mode: ?): void;

	/** Set ellipsize2 */
	SetEllipsize2(mode: ?): void;

	/** Set hi text color1 */
	SetHiTextColor1(clr: ?): void;

	/** Set hi text color2 */
	SetHiTextColor2(clr: ?): void;

	/** Set icon margins */
	SetIconMargins(left: ?, top: ?, right: ?, bottom: ?, mode: ?): void;

	/** Set icon size */
	SetIconSize(size: ?, mode: ?): void;

	/** Set item */
	SetItem(title: str, newTitle: ?, newBody: num, newImage: ?): void;

	/** Set item by index */
	SetItemByIndex(index: num, newTitle: ?, newBody: num, newImage: ?): void;

	/** Set list */
	SetList(list: ?, delim: str): void;

	/** Set text color1 */
	SetTextColor1(clr: str_col): void;

	/** Set text color2 */
	SetTextColor2(clr: str_col): void;

	/** Set text margins */
	SetTextMargins(left: ?, top: ?, right: ?, bottom: ?, mode: ?, options: str_com): void;

	/** Set text shadow1 */
	SetTextShadow1(radius: num, dx: num, dy: num, color: str_col): void;

	/** Set text shadow2 */
	SetTextShadow2(radius: num, dx: num, dy: num, color: str_col): void;

	/** Set text size1 */
	SetTextSize1(size: ?, mode: ?): void;

	/** Set text size2 */
	SetTextSize2(size: ?, mode: ?): void;
}


class MuiListDialog {

	/** Calls a function selects an item in the list */
	SetOnSelect(callback: (name: str, index: num_int) => void): void;
}


class MuiListModern {

	/** Calls a function when an item is click */
	SetOnTouch(callback: (title: str, body: str, index: num_int) => void): void;

	/** Calls a function when an item in the list is select */
	SetOnSelect(callback: (index: num_int, isSelected: bin) => void): void;

	/** Calls a function when an icon or avatar is click. The same as SetIconOnTouch */
	SetAvatarOnTouch(callback: (index: num_int) => void): void;

	/** Enable or disable selectable option */
	SetSelectable(selectable: bin): void;

	/** Calls a function when a right icon is click */
	SetControlOnTouch(callback: (index: num_int) => void): void;

	/**
	 * Appends an item at the bottom of the list
	 * @param data A single element of the list
	 */
	AppendItem(data: obj): void;

	/** Removes a single item in the list */
	RemoveItem(index: num_int): void;

	/**
	 * Removes multiple items in the list
	 * @param indexes An array of indexes.
	 */
	RemoveItems(indexes: lst): void;

	/**
	 * Set a new title to a respective index
	 * @param newTitle New title text
	 */
	SetTitleText(newTitle: str, index: num_int): void;

	/**
	 * Set a new body to a respective index
	 * @param newBody New body text
	 */
	SetBodyText(newBody: str, index: num_int): void;

	/**
	 * Set a new material icon to the right icon
	 * @param newIcon New right icon
	 */
	SetRightIcon(newIcon: str, index: num_int): void;

	/**
	 * Set a new note text for a respective item on the list
	 * @param newNote New note text
	 */
	SetNoteText(newNote: str, index: num_int): void;

	/**
	 * Sets a new list
	 * @param list List Modern list
	 */
	SetList(list: obj): void;

	/** Removes an item at the bottom of the list */
	PopItem(): void;

	/** Removes an item at the beginning of the list */
	ShiftItem(): void;

	/** Returns the current list object */
	GetList(): obj;

	/** Returns the respective item in the list */
	GetItem(index: num_int): obj;

	/**
	 * Returns the selected items in the list
	 * @return List of indexes for slected items
	 */
	GetSelectedItems(): lst;

	/** Highlight a respective item in the list */
	Highlight(index: num_int): void;

	/** Removes a highlight to a respective item in the list */
	RemoveHighlight(index: num_int): void;

	/**
	 * Set a new image to a respective item in the list
	 * @param newImagePath Path to the new image
	 */
	SetImage(newImagePath: str_ptf, index: num_int): void;

	/**
	 * Set item
	 * @param data A single element of the list object
	 */
	SetItem(data: obj, index: num_int): void;
}


class MuiListSimple {

	/** Calls a function when an item is click */
	SetOnTouch(callback: (title: str, index: num_int, icon: str, badge: num) => void): void;

	/**
	 * Appends an item at the bottom of the list
	 * @param data A single element of the list
	 */
	AppendItem(data: obj): void;

	/** Removes an item in the list */
	RemoveItem(index: num_int): void;

	/** Sets a new badge */
	SetBadge(newBadge: num_int, index: num_int): void;

	/**
	 * Sets a new title to a corresponding item
	 * @param newTitle New title text
	 */
	SetTitleText(newTitle: str, index: num_int): void;

	/** Returns the current list object */
	GetList(): obj;

	/**
	 * Sets a new list
	 * @param list ListSimple list
	 */
	SetList(list: obj): void;
}


class MuiMenu {

	/** Calls a function when item is click */
	SetOnSelect(callback: (title: str, index: num_int) => void): void;

	/**
	 * Set a new list of options
	 * @param list A comma separated options
	 */
	SetList(list: lst): void;
}


class MuiMenuWithIcon {

	/** Calls a function when item is click */
	SetOnSelect(callback: (text: str, index: num_int) => void): void;
}


class MuiModal {

	/** Calls a function when control buttons are click */
	SetOnTouch(callback: (isOkBtnClick: bin, btnText: str) => void): void;

	/** Get the layout of the modal where you can add your controls */
	GetLayout(): DsLayout;

	/** Sets a new title to the modal */
	SetTitle(title: str): void;

	/** Sets a new title to the modal */
	SetHeaderColor(color: str_col): void;
}


class MuiRadio {

	/** Calls a function when the user selects an item in the list */
	SetOnSelect(callback: (name: str, index: num_int) => void): void;

	/** Checks a corresponding item */
	CheckItemByIndex(index: num_int): void;

	/** Gets the checked item in the list */
	GetCheckItem(): "title"|"index";

	/** Get item */
	GetItem(title: str): obj;

	/** Get item by index */
	GetItemByIndex(index: num): obj;

	/** Get length */
	GetLength(): num_int;

	/** Get list */
	GetList(delim: str): obj;

	/** Get type */
	GetType(): "List";

	/** Insert item */
	InsertItem(index: num, title: str, body: str, image: str_ptf): void;

	/** Remove all */
	RemoveAll(): void;

	/** Remove item */
	RemoveItem(title: str): void;

	/** Remove item by index */
	RemoveItemByIndex(index: num): void;

	/** Scroll to item */
	ScrollToItem(title: str, body: str): void;

	/** Scroll to item by index */
	ScrollToItemByIndex(index: num): void;

	/** Select item */
	SelectItem(title: str, body: str, scroll: ?): void;

	/** Select item by index */
	SelectItemByIndex(index: num, scroll: ?): void;

	/** Set column widths */
	SetColumnWidths(icon: ?, title: str, body: str, mode: ?): void;

	/** Set divider */
	SetDivider(height: num, color: str_col): void;

	/** Set ellipsize1 */
	SetEllipsize1(mode: ?): void;

	/** Set ellipsize2 */
	SetEllipsize2(mode: ?): void;

	/** Set hi text color1 */
	SetHiTextColor1(clr: ?): void;

	/** Set hi text color2 */
	SetHiTextColor2(clr: ?): void;

	/** Set list */
	SetList(list: ?, delim: str): void;

	/** Set text color1 */
	SetTextColor1(clr: ?): void;

	/** Set text color2 */
	SetTextColor2(clr: ?): void;

	/** Set text margins */
	SetTextMargins(left: ?, top: ?, right: ?, bottom: ?, mode: ?, options: str_com): void;

	/** Set text shadow1 */
	SetTextShadow1(radius: num, dx: num, dy: num, color: str_col): void;

	/** Set text shadow2 */
	SetTextShadow2(radius: num, dx: num, dy: num, color: str_col): void;

	/** Set text size1 */
	SetTextSize1(size: ?, mode: ?): void;

	/** Set text size2 */
	SetTextSize2(size: ?, mode: ?): void;
}


class MuiRadioButtons {

	/** Calls a function when the user selects an item in the list */
	SetOnSelect(callback: (name: str, index: num_int) => void): void;

	/** Checks a corresponding item */
	CheckItemByIndex(index: num_int): void;

	/** Gets the checked item in the list */
	GetCheckItem(): "title"|"index";

	/** Show or Hide the list */
	Toggle(): void;

	/** Returns the corresponding item */
	GetItem(index: num_int): "title";

	/**
	 * Gets the list
	 * @return Array of titles
	 */
	GetList(): lst;

	/** Get type */
	GetType(): "Radio";
}


class MuiRadioMaterial {

	/** Calls a function when the user selects an item in the list */
	SetOnSelect(callback: (name: str, index: num_int) => void): void;

	/** Checks a corresponding item */
	CheckItemByIndex(index: num_int): void;

	/** Gets the checked item in the list */
	GetCheckItem(): "title"|"index";

	/** Show or Hide the list */
	Toggle(): void;

	/** Returns the corresponding item */
	GetItem(index: num_int): "title";

	/**
	 * Gets the list
	 * @return Array of titles
	 */
	GetList(): lst;

	/** Get type */
	GetType(): "Radio";
}


class MuiSeekBar {

	/** Get the current value of the seekbar */
	GetValue(): num;

	/**
	 * Set the number of decimals to the value
	 * @param decimals The number of decimals
	 */
	SetDecimals(decimals: num_int): void;

	/** Calls a function when the seekbar is touch */
	SetOnTouch(callback: (value: num) => void): void;

	/**
	 * Sets a new value to the seekbar
	 * @param value Must be between 0 and range
	 */
	SetValue(value: num): void;

	/** Get type */
	GetType(): "Seekbar";
}


class MuiSpinner {

	/** Calls a function when value changes */
	SetOnChange(callback: (value: str, index: num_int) => void): void;

	/**
	 * Select an option
	 * @param value Must be one of the provided values
	 */
	SelectItem(value: str): void;

	/**
	 * Select an option with a given index
	 * @param index The index of the option in the given values
	 */
	SelectItemByIndex(index: num_int): void;

	/**
	 * Sets a new list of options
	 * @param list A comma separated values for options.
	 */
	SetList(list: lst): void;

	/**
	 * Sets the hint when there is no active selection
	 * @param hint The hint text.
	 */
	SetHint(hint: str): void;
}


class MuiSwitch {

	/** Get the current value of the switch */
	GetValue(): bin;

	/** Calls a function when switch is click */
	SetOnTouch(callback: (value: bin) => void): void;

	/** Sets the value of the switch */
	SetValue(value: bin): void;

	/** Get type */
	GetType(): "Seekbar";
}


class MuiSwitchSettings {

	/** Get the current value of the switch */
	GetValue(): bin;

	/** Calls a function when switch is click */
	SetOnTouch(callback: (text: str, value: bin) => void): void;

	/** Sets the value of the switch */
	SetValue(value: bin): void;

	/** Get type */
	GetType(): "Seekbar";
}


class MuiTabFixed {

	/**
	 * Get the corresponding layout of a given name where you can add your controls
	 * @param name The layout name
	 */
	GetLayout(name: str): DsLayout;

	/** Open the a tab by passing an index */
	SetActiveTabByIndex(index: num): void;

	/** Calls a function when the tab is click */
	SetOnSelect(callback: (name: str, index: num_int) => void): void;

	/** Get type */
	GetType(): "Tab";
}


class MuiTEFilledIconLeft {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;
}


class MuiTEFilledIconRight {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;
}


class MuiTEOutlineIconLeft {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;
}


class MuiTEOutlineIconRight {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;
}


class MuiTESearchElegant {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Define a callback function which is called when the user pressed the icon */
	SetIconOnTouch(callback: () => void): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;
}


class MuiTESearchUnique {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;
}


class MuiTextAreaFilled {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;
}


class MuiTextAreaFilledA {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;
}


class MuiTextAreaOutline {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;
}


class MuiTextAreaOutlineA {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;
}


class MuiTextEditFilled {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;
}


class MuiTextEditFilledA {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;
}


class MuiTextEditOutline {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;
}


class MuiTextEditOutlineA {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;
}


class MuiTextEditSearch {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;
}


class MuiTextEditUnique {

	/** Clear input history */
	ClearHistory(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): void;

	/** Get selected text */
	GetSelectedText(): void;

	/** Get selection end */
	GetSelectionEnd(): void;

	/** Get selection start */
	GetSelectionStart(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Undo an action */
	Undo(): void;
}


class MuiTextH1 {

	/** Data */
	data: obj;

	/** Get html */
	GetHtml(): obj;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Get type */
	GetType(): "Text";

	/** Log */
	Log(msg: str, options: str_com): void;

	/** Set log */
	SetLog(maxLines: num_int): void;
}


class MuiTextH2 {

	/** Data */
	data: obj;

	/** Get html */
	GetHtml(): obj;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Get type */
	GetType(): "Text";

	/** Log */
	Log(msg: str, options: str_com): void;

	/** Set log */
	SetLog(maxLines: num_int): void;
}


class MuiTextH3 {

	/** Data */
	data: obj;

	/** Get html */
	GetHtml(): obj;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Get type */
	GetType(): "Text";

	/** Log */
	Log(msg: str, options: str_com): void;

	/** Set log */
	SetLog(maxLines: num_int): void;
}


class MuiTextH4 {

	/** Data */
	data: obj;

	/** Get html */
	GetHtml(): obj;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Get type */
	GetType(): "Text";

	/** Log */
	Log(msg: str, options: str_com): void;

	/** Set log */
	SetLog(maxLines: num_int): void;
}


class MuiTextH5 {

	/** Data */
	data: obj;

	/** Get html */
	GetHtml(): obj;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Get type */
	GetType(): "Text";

	/** Log */
	Log(msg: str, options: str_com): void;

	/** Set log */
	SetLog(maxLines: num_int): void;
}


class MuiTextH6 {

	/** Data */
	data: obj;

	/** Get html */
	GetHtml(): obj;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Get type */
	GetType(): "Text";

	/** Log */
	Log(msg: str, options: str_com): void;

	/** Set log */
	SetLog(maxLines: num_int): void;
}


class MuiTextJumbo {

	/** Data */
	data: obj;

	/** Get html */
	GetHtml(): obj;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Get type */
	GetType(): "Text";

	/** Log */
	Log(msg: str, options: str_com): void;

	/** Set log */
	SetLog(maxLines: num_int): void;
}


class MuiTextParagraph {

	/** Data */
	data: obj;

	/** Get html */
	GetHtml(): obj;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Get type */
	GetType(): "Text";

	/** Log */
	Log(msg: str, options: str_com): void;

	/** Set log */
	SetLog(maxLines: num_int): void;
}


class MuiTextSecondary {

	/** Data */
	data: obj;

	/** Get html */
	GetHtml(): obj;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Get type */
	GetType(): "Text";

	/** Log */
	Log(msg: str, options: str_com): void;

	/** Set log */
	SetLog(maxLines: num_int): void;
}


class MuiTimePicker {

	/** Calls a function when the user selects a time */
	SetOnSelect(callback: (time: str, hour: num_int, minute: num_int, pos: "AM"|"PM") => void): void;
}


class MuiShowMenu {

	/** Calls a function when the user selects an item */
	SetOnSelect(callback: (title: str) => void): void;
}


