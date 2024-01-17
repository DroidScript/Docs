declare var MUI: DsMUI;
declare type MuiTextEdit = MuiTextEditFilled | MuiTextEditFilledA | MuiTextEditOutline | MuiTextEditOutlineA | MuiTextEditSearch | MuiTextEditUnique;
declare type MuiTextArea = MuiTextAreaFilled | MuiTextAreaFilledA | MuiTextAreaOutline | MuiTextAreaOutlineA;
declare type MuiText = MuiTextH1 | MuiTextH2 | MuiTextH3 | MuiTextH4 | MuiTextH5 | MuiTextH6 | MuiTextJumbo | MuiTextParagraph | MuiTextSecondary;
declare type MuiTabs = MuiTabFixed;
declare type MuiPicker = MuiColorPicker | MuiDatePicker | MuiTimePicker;
declare type MuiButton = MuiButtonContained | MuiButtonElegant | MuiButtonFlat | MuiButtonOutlined | MuiButtonRaised | MuiButtonRaisedO | MuiButtonRound | MuiButtonRoundO | MuiButtonText | MuiButtonToggle;
declare type MuiObject = MuiAlert | MuiAlertSimple | MuiAppBar | MuiAppBarElegant | MuiAppBarModern | MuiBanner | MuiButtonContained | MuiButtonElegant | MuiButtonFlat | MuiButtonOutlined | MuiButtonRaised | MuiButtonRaisedO | MuiButtonRound | MuiButtonRoundO | MuiButtonText | MuiButtonToggle | MuiCard | MuiCheckbox | MuiCheckList | MuiColorPicker | MuiDataTable | MuiDatePicker | MuiDialog | MuiDivider | MuiFAB | MuiFABElegant | MuiFABOutline | MuiList | MuiListDialog | MuiListModern | MuiListSimple | MuiMenu | MuiMenuWithIcon | MuiModal | MuiRadio | MuiRadioButtons | MuiRadioMaterial | MuiSeekBar | MuiSpinner | MuiSwitch | MuiSwitchSettings | MuiTabFixed | MuiTEFilledIconLeft | MuiTEFilledIconRight | MuiTEOutlineIconLeft | MuiTEOutlineIconRight | MuiTESearchElegant | MuiTESearchUnique | MuiTextAreaFilled | MuiTextAreaFilledA | MuiTextAreaOutline | MuiTextAreaOutlineA | MuiTextEditFilled | MuiTextEditFilledA | MuiTextEditOutline | MuiTextEditOutlineA | MuiTextEditSearch | MuiTextEditUnique | MuiTextH1 | MuiTextH2 | MuiTextH3 | MuiTextH4 | MuiTextH5 | MuiTextH6 | MuiTextJumbo | MuiTextParagraph | MuiTextSecondary | MuiTimePicker;
/** MUI object */
declare type muo = MuiObject;

declare class DsMUI {

	/**
	 * Adds a nice pop-up at the top
	 * @param text `Popup text`
	 * @param icon `Material icon`
	 */
	AddAlert(text: str, icon?: str, color?: str_col): MuiAlert;

	/**
	 * Adds a simple alert with a single button
	 * @param text `Text of the alert`
	 * @param btnText `Button text. Default is OKAY`
	 */
	AddAlertSimple(text: str, btnText?: str, color?: str_col): MuiAlertSimple;

	/**
	 * Adds an appbar on a given layout
	 * @param p1 `Title text`, `Hint`
	 * @param p2 `Material Icon`
	 * @param options <br>
 	 * &emsp; `Rectangle` - for Modern Appbar
	 */
	AddAppBar(parent: DsLayout, p1?: str, p2?: str, p3?: "controls"|"color", options?: string | ("Elegant"|"Modern"|"Default"|"Round"|"Rectangle")[]): MuiAppBar;

	/**
	 * Adds an elegant appbar on a given layout
	 * @param title `Title text`
	 * @param leadingIcon `Material icon font`
	 * @param options `material icon font for the right controls`
	 */
	AddAppBarElegant(parent: DsLayout, title: str, leadingIcon?: str, options?: str_com): MuiAppBarElegant;

	/**
	 * Adds a modern appbar on a given layout
	 * @param hint `Hint text for the search input`
	 * @param controlIcon `Material font for the control icon`
	 */
	AddAppBarModern(parent: DsLayout, hint: str, controlIcon?: str, options?: "Round"|"Rectangle", color?: str_col): MuiAppBarModern;

	/**
	 * Adds a banner dialog
	 * @param okText `Truthy button text`
	 * @param cancelText `Falsey button text`
	 */
	AddBanner(text: str, okText?: str, cancelText?: str): MuiBanner;

	/** Adds a MUI button to a given layout */
	AddButton(parent: DsLayout, text: str, width?: num_frc, height?: num_frc, options?: "raised"|"raisedo"|"roundo"|"round"|"elegant"|"outlined"|"contained"|"text"|"flat"): MuiButton;

	/** Adds a contained material button on a given layout */
	AddButtonContained(parent: DsLayout, text: str, width?: num_frc, height?: num_frc): MuiButtonContained;

	/** Add an elegant button on a given layout */
	AddButtonElegant(parent: DsLayout, text: str, width?: num_frc, height?: num_frc, color?: str_col): MuiButtonElegant;

	/** Adds a flat button on given layout */
	AddButtonFlat(parent: DsLayout, text: str, width?: num_frc, height?: num_frc, color?: str_col, backColor?: str_col): MuiButtonFlat;

	/** An outlined material button */
	AddButtonOutlined(parent: DsLayout, text: str, width?: num_frc, height?: num_frc): MuiButtonOutlined;

	/** Adds a raised material button on a given layout */
	AddButtonRaised(parent: DsLayout, text: str, width?: num_frc, height?: num_frc, color?: str_col, txtcolor?: str_col): MuiButtonRaised;

	/** Adds an outlined material raised button on a given layout */
	AddButtonRaisedO(parent: DsLayout, text: str, width?: num_frc, height?: num_frc, color?: str_col, backColor?: str_col): MuiButtonRaisedO;

	/** Adds a round material button on a given layout */
	AddButtonRound(parent: DsLayout, text: str, width?: num_frc, height?: num_frc, color?: str_col, txtcolor?: str_col): MuiButtonRound;

	/** Adds an outlined material round button on a given layout */
	AddButtonRoundO(parent: DsLayout, text: str, width?: num_frc, height?: num_frc, color?: str_col, backColor?: str_col): MuiButtonRoundO;

	/** Adds a text button on a given layout */
	AddButtonText(parent: DsLayout, text: str, width?: num_frc, height?: num_frc): MuiButtonText;

	/**
	 * Adds a toggleable button on a given layout
	 * @param text `Button text`
	 */
	AddButtonToggle(parent: DsLayout, text: str, width?: num_frc, height?: num_frc, value?: bin, callback?: () => void): MuiButtonToggle;

	/**
	 * Adds a card on a given layout
	 * @param options \{title, body, image, buttonText, color, width, dividerAvatar, dividerBody, avatar, avatarOnTop, buttonType}
	 */
	AddCard(parent: DsLayout, options?: {title: str, body: str, image: str_ptf, buttonText: str_com, color: str, width: num_frc, dividerAvatar: bin, dividerBody: bin, avatar: str_pth, avatarOnTop: bin, buttonType: "raised"|"raisedoutline"|"round"|"roundoutline"|"flat"}): MuiCard;

	/**
	 * Adds an MUI Checkbox on a given layout
	 * @param list A comma separated string
	 */
	AddCheckbox(parent: DsLayout, list: lst, width?: num_frc, height?: num_frc, color?: str_col): MuiCheckbox;

	/**
	 * Adds an MUI checklist dialog
	 * @param list An array of objects of the form {name: string, check: boolean}
	 */
	AddCheckList(parent: DsTextEdit, title: str, list: lst_obj, color?: str_col, bottom?: bin): MuiCheckList;

	/** Creates a color picker dialog where you can select a range of MUI predefined colors */
	AddColorPicker(parent: DsTextEdit, title: "Title"): MuiColorPicker;

	/**
	 * Adds a new DataTable Control
	 * @param columns An array of strings of the form Name:Type for column header. Where 'Name' is the column name and 'Type is the column type [Can be Sortable or Numeric]'
	 * @param values An array of strings of the form Val1:Val2:Val3...
	 * @param width `Fraction of the screen width`
	 * @param height `Fraction of the screen height`
	 */
	AddDataTable(parent: DsLayout, columns: lst, values: lst, width?: num, height?: num, options?: string | ("Selectable")[]): MuiDataTable;

	/**
	 * Adds a date picker dialog
	 * @param yyyy `Full year`
	 * @param mm [0-11]
	 * @param dd [1-31]
	 */
	AddDatePicker(parent: DsTextEdit, yyyy?: num_int, mm?: num_int, dd?: num_int, color?: str_col): MuiDatePicker;

	/**
	 * Adds a customizable materialize dialog
	 * @param body `Body text`
	 * @param okText `Truthy button text`
	 * @param cancelText `Falsey button text`
	 * @param divider `Show divider or hide`
	 */
	AddDialog(title: "Title", body: str, okText?: str, cancelText?: str, divider?: bin): MuiDialog;

	/** Adds a divider to a given layout */
	AddDivider(parent: DsLayout, height?: num_pxl): MuiDivider;

	/**
	 * Adds a floating action button
	 * @param icon `Material icon fonts`
	 */
	AddFAB(parent: DsLayout, icon?: str, color?: str_col, options?: string | ("outline"|"elegant"|"default")[]): MuiFAB;

	/**
	 * Adds an elegant floating action button
	 * @param icon `Material icon fonts`
	 */
	AddFABElegant(parent: DsLayout, icon?: str, color?: str_col): MuiFABElegant;

	/**
	 * Adds an outlined floating action button on a given layout
	 * @param icon `Material icon font`
	 */
	AddFABOutline(parent: DsLayout, icon?: str, color?: str_col, backColor?: str_col): MuiFABOutline;

	/**
	 * Adds a layout
	 * @param options `Comma separated DroidScript layout options`
	 */
	AddLayout(parent: DsLayout, type: "Linear"|"Absolute"|"Frame"|"Card", options?: str): DsLayout;

	/** Adds an MUI control on a given layout */
	AddList(parent: DsLayout, list: str, width?: num, height?: num, options?: string | ("simple"|"modern"|"default"|"divider")[]): MuiList;

	/**
	 * Adds a more customizable list dialog or checklist dialog
	 * @param list An array of objects
	 */
	AddListDialog(parent: DsTextEdit, title: str, list: lst, color?: str_col, options?: string | ("CheckList"|"ListDialog"|"Bottom")[]): MuiListDialog;

	/**
	 * Adds a ListModern control on a given layout
	 * @param list An array of object elements. See list example
	 */
	AddListModern(parent: DsLayout, list: lst, width?: num, height?: num, options?: "Initial"|"Material"|"Avatar"|"RightIcon"|"RightNote"|"Selectable"): MuiListModern;

	/** Adds a simple list for navigation purposes */
	AddListSimple(parent: DsLayout, list: { title: str, icon: str, color: str_col, badge: num }, width?: num_frc, height?: num_frc, options?: "Divider"): MuiListSimple;

	/** Adds a simple menu */
	AddMenu(list: string | ("list")[], width?: num_frc, height?: num_frc, position?: "Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"): MuiMenu;

	/** MUI menu with material icon font */
	AddMenuWithIcon(list: str, width?: num_frc, height?: num_frc, position?: "Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"): MuiMenuWithIcon;

	/**
	 * Adds a modal
	 * @param body `Body text. If you want to customize the modal layout pass an empty string.`
	 * @param okTxt `Truthy button text`
	 * @param cancelTxt `Falsy button text`
	 * @param options `Dialog options`, `Full`
	 */
	AddModal(title: str, body?: str, okTxt?: str, cancelTxt?: str, options?: str): MuiModal;

	/** Adds a picker dialog such as time, date or color */
	AddPicker(parent: DsTextEdit, options?: "Date"|"Color"|"Time"): MuiPicker;

	/** Adds a radio material input */
	AddRadio(parent: DsLayout, list: string | ("strings")[], width?: num, height?: num, options?: string | ("Buttons"|"Material"|"Normal")[], p1?: "color"|"orientation", color?: str_col, backColor?: str_col): MuiRadio;

	/**
	 * Adds a radio button control
	 * @param list A comma separated strings
	 */
	AddRadioButtons(parent: DsLayout, list: lst, width?: num, height?: num, orientation?: "Vertical"|"Horizontal", color?: str_col, backColor?: str_col): MuiRadioButtons;

	/**
	 * Adds a material radio control
	 * @param list A comma separated strings
	 */
	AddRadioMaterial(parent: DsLayout, list: lst, width?: num, height?: num, orientation?: "Vertical"|"Horizontal", color?: str_col, backColor?: str_col): MuiRadioMaterial;

	/**
	 * Adds an MUI basic seekbar
	 * @param value `Must be between 0 and range`
	 * @param range `The maximum value of your seekbar`
	 */
	AddSeekBar(parent: DsLayout, value: num, range: num, width: num, color?: str_col): MuiSeekBar;

	/** Adds an MUI Switch to a given control */
	AddSwitch(parent: DsLayout, value: bin, color?: str_col): MuiSwitch;

	/** Adds an MUI SwitchSettings to a given layout */
	AddSwitchSettings(parent: DsLayout, text: str, width?: num_frc, height?: num_frc, value?: bin, color?: str_col, backColor?: str_col): MuiSwitchSettings;

	/**
	 * Adds an MUI tab on a given layout
	 * @param options `DS layout options`, `Fix`
	 */
	AddTabs(parent: DsLayout, title: string | ("titles")[], width?: num, height?: num, options?: str_com, color?: str_col, animation?: bin): MuiTabs;

	/**
	 * Adds a filled text input with icon on the left
	 * @param options `DS TextEdit options`
	 * @param icon `Material icon font`
	 * @param hint `Hint or label text`
	 * @param label `Show or hide label`
	 */
	AddTEFilledIconLeft(parent: DsLayout, width: num, options?: str_com, icon?: str, hint?: str, label?: bin, color?: str_col): MuiTEFilledIconLeft;

	/**
	 * Adds a filled text input with icon on the right on a given layout
	 * @param options `DS TextEdit options`
	 * @param icon `Material icon font`
	 * @param hint `Hint or label text`
	 * @param label `Show or hide label`
	 */
	AddTEFilledIconRight(parent: DsLayout, width: num, options?: str_com, icon?: str, hint?: str, label?: bin, color?: str_col): MuiTEFilledIconRight;

	/**
	 * Adds a material outlined text input with icon on the left
	 * @param options `DS TextEdit options`, `Round`
	 * @param icon `Material icon font`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	AddTEOutlineIconLeft(parent: DsLayout, width: num, options?: str_com, icon?: str, hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTEOutlineIconLeft;

	/**
	 * Adds a material outlined text input with icon on the right
	 * @param options `DS TextEdit options`, `Round`
	 * @param icon `Material icon font`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	AddTEOutlineIconRight(parent: DsLayout, width: num, options?: str_com, icon?: str, hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTEOutlineIconRight;

	/**
	 * Adds an elegant search textedit on a given layout
	 * @param hint `Hint text`
	 * @param icon `Material icon font`
	 */
	AddTESearchElegant(parent: DsLayout, width: num, hint?: str, icon?: str, iconPos?: "Right"|"Left", color?: str_col, option?: "Small"|"Normal"|"Border"): MuiTESearchElegant;

	/**
	 * Creates a unique text input
	 * @param hint `Hint text`
	 * @param icon `Material icon font`
	 */
	AddTESearchUnique(parent: DsLayout, width: num, hint?: str, icon?: str, iconColor?: str_col): MuiTESearchUnique;

	/**
	 * Adds a mui text control to the layout
	 * @param options `DS text options`, `Thin`, `Light`, `Regular`, `Medium`, `Bold`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `secondary`, `jumbo`, `paragraph`
	 */
	AddText(parent: DsLayout, text: str, width?: num, height?: num, options?: str, color?: str_col): MuiText;

	/**
	 * Adds a material filled textarea
	 * @param hint `Hint text`
	 * @param label `Show or hide label`
	 */
	AddTextArea(parent: DsLayout, width?: num, height?: num, options?: string | ("filled"|"outline"|"active")[], hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTextArea;

	/**
	 * Add a material filled textarea on a given layout
	 * @param hint `Hint text`
	 * @param label `Show or hide label`
	 */
	AddTextAreaFilled(parent: DsLayout, width?: num, height?: num, hint?: str, label?: bin, color?: str_col): MuiTextAreaFilled;

	/**
	 * Adds an active filled textarea
	 * @param hint `Hint`, `Label text`
	 * @param label `Hides or show label`
	 */
	AddTextAreaFilledA(parent: DsLayout, width?: num, height?: num, hint?: str, label?: bin, color?: str_col): MuiTextAreaFilledA;

	/**
	 * Add an outlined material textarea
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	AddTextAreaOutline(parent: DsLayout, width?: num, height?: num, hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTextAreaOutline;

	/**
	 * Add an active outlined material textarea
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	AddTextAreaOutlineA(parent: DsLayout, width?: num, height?: num, hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTextAreaOutlineA;

	/**
	 * Adds a TextEdit control to a given layout
	 * @param options `outline`, `filled`, `unique`, `search`, `active`, `icon and for icon can be  left`, `right`
	 * @param p1 `See corresponding MUI TextEdit`
	 * @param p2 `See corresponding MUI TextEdit`
	 * @param p3 `See corresponding MUI TextEdit`
	 * @param p4 `See corresponding MUI TextEdit`
	 * @param p5 `See corresponding MUI TextEdit`
	 */
	AddTextEdit(parent: DsLayout, width?: num, options?: str, p1?: str, p2?: str, p3?: str, p4?: str, p5?: str): MuiTextEdit;

	/**
	 * Adds the most common type of material text input
	 * @param options `DS TextEdit options`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	AddTextEditFilled(parent: DsLayout, width?: num, options?: str, hint?: str, label?: bin, color?: str_col): MuiTextEditFilled;

	/**
	 * Add an active filled material text input
	 * @param options `DS TextEdit options`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	AddTextEditFilledA(parent: DsLayout, width?: num, options?: str, hint?: str, label?: bin, color?: str_col): MuiTextEditFilledA;

	/**
	 * Adds an outlined material text input
	 * @param options `DS TextEdit options`, `Round`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	AddTextEditOutline(parent: DsLayout, width?: num, options?: str, hint?: str, label?: bin): MuiTextEditOutline;

	/**
	 * Adds an active outlined material text input
	 * @param options `DS TextEdit options`, `Round`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	AddTextEditOutlineA(parent: DsLayout, width?: num, options?: str, hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTextEditOutlineA;

	/**
	 * Adds a customize search style text input
	 * @param options `DS TextEdit options`
	 * @param hint `Hint text`
	 */
	AddTextEditSearch(parent: DsLayout, width?: num, options?: str, hint?: str, label?: str_col, backColor?: str_col): MuiTextEditSearch;

	/**
	 * Adds a unique textedit customization
	 * @param hint `Hint text`
	 * @param icon `Material icon font`
	 * @param iconColor `Icon color`
	 */
	AddTextEditUnique(parent: DsLayout, width?: num, hint?: str, icon?: str, iconColor?: str_col): MuiTextEditUnique;

	/**
	 * Adds an H1 text to a layout
	 * @param options `DS text options`
	 */
	AddTextH1(parent: DsLayout, text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH1;

	/**
	 * Adds an H2 text to a layout
	 * @param options `DS text options`
	 */
	AddTextH2(parent: DsLayout, text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH2;

	/**
	 * Adds an H3 text to a layout
	 * @param options `DS text options`
	 */
	AddTextH3(parent: DsLayout, text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH3;

	/**
	 * Adds an H4 text to a layout
	 * @param options `DS text options`
	 */
	AddTextH4(parent: DsLayout, text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH4;

	/**
	 * Adds an H5 text to a layout
	 * @param options `DS text options`
	 */
	AddTextH5(parent: DsLayout, text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH5;

	/**
	 * Adds an H6 text to a layout
	 * @param options `DS text options`
	 */
	AddTextH6(parent: DsLayout, text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH6;

	/**
	 * Creates an extra large text
	 * @param options `DS text options`
	 */
	AddTextJumbo(parent: DsLayout, text: str, width?: num, height?: num, options?: str, color?: str_col): MuiTextJumbo;

	/**
	 * Adds a paragraph text to a layout
	 * @param options `DS text options`
	 */
	AddTextParagraph(parent: DsLayout, text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextParagraph;

	/**
	 * Adds a secondary text to a layout
	 * @param options `DS text options`
	 */
	AddTextSecondary(parent: DsLayout, text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextSecondary;

	/**
	 * Adds a time picker
	 * @param hour [0-24]
	 * @param minute 0-59
	 */
	AddTimePicker(parent: DsTextEdit, hour?: num, minute?: num, color?: str_col): MuiTimePicker;

	/** MUI colors are accessible through the **colors** property of the MUI object */
	colors: obj;

	/**
	 * A nice pop-up at the top of your current layout
	 * @param text `Popup text`
	 * @param icon `Material icon`
	 */
	CreateAlert(text: str, icon?: str, color?: str_col): MuiAlert;

	/**
	 * Create a simple alert with a single button
	 * @param text `Text of the alert`
	 * @param btnText `Button text. Default is OKAY`
	 */
	CreateAlertSimple(text: str, btnText?: str, color?: str_col): MuiAlertSimple;

	/**
	 * The most common type of material design app bar
	 * @param title `Title text`
	 * @param leadingIcon `A material font icon for the leading control`
	 * @param controls `material icon font for the right controls`
	 */
	CreateAppBar(title: str, leadingIcon?: str, controls?: str_com): MuiAppBar;

	/**
	 * A more elegant appbar implementation
	 * @param title `Title text`
	 * @param leadingIcon `Material icon font`
	 * @param options `material icon font for the right controls`
	 */
	CreateAppBarElegant(title: str, leadingIcon?: str, options?: str_com): MuiAppBarElegant;

	/**
	 * A modern appbar with a search input, leading icon and trailing icon
	 * @param hint `Hint text for the search input`
	 * @param controlIcon `Material font for the control icon`
	 */
	CreateAppBarModern(hint?: str, controlIcon?: str, options?: "Round"|"Rectangle", color?: str_col): MuiAppBarModern;

	/**
	 * A banner dialog is a nice popup that slides from the top of your current page
	 * @param okText `Truthy button text`
	 * @param cancelText `Falsey button text`
	 */
	CreateBanner(text: str, okText?: str, cancelText?: str): MuiBanner;

	/** An contained material button */
	CreateButtonContained(text: str, width?: num_frc, height?: num_frc): MuiButtonContained;

	/** An elegant button */
	CreateButtonElegant(text: str, width?: num_frc, height?: num_frc, color?: str_col): MuiButtonElegant;

	/** Just a flat button */
	CreateButtonFlat(text: str, width?: num_frc, height?: num_frc, color?: str_col, backColor?: str_col): MuiButtonFlat;

	/** An outlined material button */
	CreateButtonOutlined(text: str, width?: num_frc, height?: num_frc, options?: str): MuiButtonOutlined;

	/** The basic type of material button */
	CreateButtonRaised(text: str, width?: num_frc, height?: num_frc, color?: str_col, txtcolor?: str_col): MuiButtonRaised;

	/** An outlined material raised button */
	CreateButtonRaisedO(text: str, width?: num_frc, height?: num_frc, color?: str_col, backColor?: str_col): MuiButtonRaisedO;

	/** A round material button */
	CreateButtonRound(text: str, width?: num_frc, height?: num_frc, color?: str_col, textColor?: str_col): MuiButtonRound;

	/** An outlined material round button */
	CreateButtonRoundO(text: str, width?: num_frc, height?: num_frc, color?: str_col, backColor?: str_col): MuiButtonRoundO;

	/** Adds a text button */
	CreateButtonText(text: str, width?: num_frc, height?: num_frc, options?: str): MuiButtonText;

	/** Create button toggle */
	CreateButtonToggle(text: str, width?: num_frc, height?: num_frc, value?: bin, callback?: () => void, color?: str_col, backColor?: str_col): MuiButtonToggle;

	/**
	 * A material implementation of a card
	 * @param options \{title, body, image, buttonText, color, width, dividerAvatar, dividerBody, avatar, avatarOnTop, buttonType}
	 */
	CreateCard(options?: {title: str, body: str, image: str_ptf, buttonText: str_com, color: str, width: num_frc, dividerAvatar: bin, dividerBody: bin, avatar: str_pth, avatarOnTop: bin, buttonType: "raised"|"raisedoutline"|"round"|"roundoutline"|"flat"}): MuiCard;

	/**
	 * Checkbox is a powerful control when you want the user to select multiple items in a group
	 * @param list A comma separated string
	 */
	CreateCheckbox(list: lst, width?: num_frc, height?: num_frc, color?: str_col): MuiCheckbox;

	/**
	 * Check list is a dialog type checkbox list
	 * @param list An array of objects of the form {name: string, check: boolean}
	 */
	CreateCheckList(title: str, list: lst_obj, color?: str_col, bottom?: bin): MuiCheckList;

	/** Creates a color picker dialog where you can select a range of MUI predefined colors */
	CreateColorPicker(title: str): MuiColorPicker;

	/**
	 * Creates a new DataTable Control
	 * @param columns An array of strings of the form Name:Type for column header. Where 'Name' is the column name and 'Type is the column type [Can be Sortable or Numeric]'
	 * @param values An array of strings of the form Val1:Val2:Val3...
	 * @param width `Fraction of the screen width`
	 * @param height `Fraction of the screen height`
	 */
	CreateDataTable(columns: lst, values: lst, width?: num, height?: num, options?: string | ("Selectable")[]): MuiDataTable;

	/**
	 * Creates a materialize date picker dialog
	 * @param yyyy `Full year`
	 * @param mm [0-11]
	 * @param dd [1-31]
	 */
	CreateDatePicker(yyyy?: num_int, mm?: num_int, dd?: num_int, color?: str_col): MuiDatePicker;

	/**
	 * Creates a customizable materialize dialog
	 * @param body `Body text`
	 * @param okText `Truthy button text`
	 * @param cancelText `Falsey button text`
	 * @param divider `Show divider or hide`
	 */
	CreateDialog(title: "Title", body?: str, okText?: str, cancelText?: str, divider?: bin): MuiDialog;

	/** Creates a divider which you can add to your layout */
	CreateDivider(height?: num_pxl): MuiDivider;

	/**
	 * Creates a floating action button
	 * @param icon `Material icon fonts`
	 */
	CreateFAB(icon: str, color?: str_col): MuiFAB;

	/**
	 * An elegant floating action button
	 * @param icon `Material icon fonts`
	 */
	CreateFABElegant(icon: str, color?: str_col): MuiFABElegant;

	/**
	 * Creates an outlined floating action button
	 * @param icon `Material icon font`
	 */
	CreateFABOutline(icon: str, color?: str_col, backColor?: str_col): MuiFABOutline;

	/**
	 * It is just the **CreateLayout** method of DroidScript with predefined values on background color just to be consistent on MUI theming
	 * @param options `Comma separated DroidScript layout options`
	 */
	CreateLayout(type: "Linear"|"Absolute"|"Frame"|"Card", options?: str): DsLayout;

	/** A manipulation of the DroidScript list object */
	CreateList(list: str, width?: num, height?: num, options?: str): MuiList;

	/**
	 * Creates a more customizable list dialog
	 * @param list An array of objects of the form {name: 'string', icon: 'material-icon', color: 'string'}
	 */
	CreateListDialog(title: str, list: lst_obj, color?: str_col, bottom?: bin): MuiListDialog;

	/**
	 * A modern implementation of list using the available controls of DroidScript
	 * @param list An array of object elements. See list example
	 */
	CreateListModern(list: lst, width?: num, height?: num, options?: "Initial"|"Material"|"Avatar"|"RightIcon"|"RightNote"|"Selectable"): MuiListModern;

	/** Creates a simple list that has an optional badge and icon with no body text */
	CreateListSimple(list: { title: str, icon: str, color: str_col, badge: num }, width?: num_frc, height?: num_frc, options?: "Divider"): MuiListSimple;

	/** Creates a simple menu */
	CreateMenu(list: string | ("list")[], width?: num_frc, height?: num_frc, position?: "Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"): MuiMenu;

	/** Advance MUI implementation of material design menu with additional icon using material icon font */
	CreateMenuWithIcon(list: str, width?: num_frc, height?: num_frc, position?: "Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"): MuiMenuWithIcon;

	/**
	 * A modal is a popup with more controls that can be added
	 * @param body `Body text. If you want to customize the modal layout pass an empty string.`
	 * @param okTxt `Truthy button text`
	 * @param cancelTxt `Falsy button text`
	 * @param options `Dialog options`, `Full`
	 */
	CreateModal(title: str, body: str, okTxt?: str, cancelTxt?: str, show?: bin, options?: str): MuiModal;

	/** Creates a radio control. A radio control allows the user to select only one item in a list */
	CreateRadio(list: string | ("strings")[], width?: num, height?: num, color?: str_col): MuiRadio;

	/**
	 * Creates a radio button control
	 * @param list A comma separated strings
	 */
	CreateRadioButtons(list: lst, width?: num, height?: num, orientation?: "Vertical"|"Horizontal", color?: str_col, backColor?: str_col): MuiRadioButtons;

	/**
	 * Creates a material radio control
	 * @param list A comma separated strings
	 */
	CreateRadioMaterial(list: lst, width?: num, height?: num, orientation?: "Vertical"|"Horizontal", color?: str_col, backColor?: str_col): MuiRadioMaterial;

	/**
	 * An MUI implementation of a basic seekbar
	 * @param value `Must be between 0 and range`
	 * @param range `The maximum value of your seekbar`
	 */
	CreateSeekBar(value: num, range?: num, width?: num, color?: str_col): MuiSeekBar;

	/**
	 * Creates a material designed dropdown or spinner
	 * @param list String. A comma separated options
	 */
	CreateSpinner(list: lst, width?: num_frc, height?: num_frc): MuiSpinner;

	/** Creates a switch that can be toggled on and off */
	CreateSwitch(value: bin, color?: str_col): MuiSwitch;

	/** Creates a switchable settings that can be toggled on and off */
	CreateSwitchSettings(text: str, width?: num_frc, height?: num_frc, value?: bin, color?: str_col, backColor?: str_col): MuiSwitchSettings;

	/**
	 * Creates a simple fixed tab
	 * @param options `DS layout options`
	 */
	CreateTabFixed(title: string | ("titles")[], width?: num, height?: num, options?: str_com, color?: str_col, animation?: bin): MuiTabFixed;

	/**
	 * Creates a filled text input with icon on the left
	 * @param options `DS TextEdit options`
	 * @param icon `Material icon font`
	 * @param hint `Hint or label text`
	 * @param label `Show or hide label`
	 */
	CreateTEFilledIconLeft(width: num, options?: str_com, icon?: str, hint?: str, label?: bin, color?: str_col): MuiTEFilledIconLeft;

	/**
	 * Creates a filled text input with icon on the right
	 * @param options `DS TextEdit options`
	 * @param icon `Material icon font`
	 * @param hint `Hint or label text`
	 * @param label `Show or hide label`
	 */
	CreateTEFilledIconRight(width: num, options?: str_com, icon?: str, hint?: str, label?: bin, color?: str_col): MuiTEFilledIconRight;

	/**
	 * Creates a material outlined text input with icon on the left
	 * @param options `DS TextEdit options`, `Round`
	 * @param icon `Material icon font`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	CreateTEOutlineIconLeft(width: num, options?: str_com, icon?: str, hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTEOutlineIconLeft;

	/**
	 * Creates a material outlined text input with icon on the right
	 * @param options `DS TextEdit options`, `Round`
	 * @param icon `Material icon font`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	CreateTEOutlineIconRight(width: num, options?: str_com, icon?: str, hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTEOutlineIconRight;

	/**
	 * Creates a customizable elegant text input
	 * @param hint `Hint text`
	 * @param icon `Material icon font`
	 */
	CreateTESearchElegant(width: num, hint?: str, icon?: str, iconPos?: "Right"|"Left", color?: str_col, option?: "Small"|"Normal"|"Border"): MuiTESearchElegant;

	/**
	 * Creates a unique text input
	 * @param hint `Hint text`
	 * @param icon `Material icon font`
	 */
	CreateTESearchUnique(width?: num, hint?: str, icon?: str, iconColor?: str_col): MuiTESearchUnique;

	/**
	 * Creates a material filled textarea
	 * @param hint `Hint text`
	 * @param label `Show or hide label`
	 */
	CreateTextAreaFilled(width?: num, height?: num, hint?: str, label?: bin, color?: str_col): MuiTextAreaFilled;

	/**
	 * Creates an active filled textarea
	 * @param hint `Hint`, `Label text`
	 * @param label `Hides or show label`
	 */
	CreateTextAreaFilledA(width?: num, height?: num, hint?: str, label?: bin, color?: str_col): MuiTextAreaFilledA;

	/**
	 * Creates an outlined material textarea
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	CreateTextAreaOutline(width?: num, height?: num, hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTextAreaOutline;

	/**
	 * Creates an active outlined material textarea
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	CreateTextAreaOutlineA(width?: num, height?: num, hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTextAreaOutlineA;

	/**
	 * Creates the most common type of material text input
	 * @param options `DS TextEdit options`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	CreateTextEditFilled(width?: num, options?: str, hint?: str, label?: bin, color?: str_col): MuiTextEditFilled;

	/**
	 * Creates an active filled material text input
	 * @param options `DS TextEdit options`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	CreateTextEditFilledA(width?: num, options?: str, hint?: str, label?: bin, color?: str_col): MuiTextEditFilledA;

	/**
	 * Creates an outlined material text input
	 * @param options `DS TextEdit options`, `Round`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	CreateTextEditOutline(width?: num, options?: str, hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTextEditOutline;

	/**
	 * Creates an active outlined material text input
	 * @param options `DS TextEdit options`, `Round`
	 * @param hint `Hint`, `Label text`
	 * @param label `Show or hide label`
	 */
	CreateTextEditOutlineA(width?: num, options?: str, hint?: str, label?: bin, color?: str_col, backColor?: str_col): MuiTextEditOutlineA;

	/**
	 * Creates a customize search style text input
	 * @param options `DS TextEdit options`
	 * @param hint `Hint text`
	 */
	CreateTextEditSearch(width?: num, options?: str, hint?: str, label?: str_col, backColor?: str_col): MuiTextEditSearch;

	/**
	 * Creates a unique textedit customization
	 * @param hint `Hint text`
	 * @param icon `Material icon font`
	 * @param iconColor `Icon color`
	 */
	CreateTextEditUnique(width?: num, hint?: str, icon?: str, iconColor?: str_col): MuiTextEditUnique;

	/**
	 * Creates a heading text 1
	 * @param options `DS text options`
	 */
	CreateTextH1(text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH1;

	/**
	 * Creates a heading text 2
	 * @param options `DS text options`
	 */
	CreateTextH2(text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH2;

	/**
	 * Creates a heading text 3
	 * @param options `DS text options`
	 */
	CreateTextH3(text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH3;

	/**
	 * Creates a heading text 4
	 * @param options `DS text options`
	 */
	CreateTextH4(text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH4;

	/**
	 * Creates a heading text 5
	 * @param options `DS text options`
	 */
	CreateTextH5(text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH5;

	/**
	 * Creates a heading text 6
	 * @param options `DS text options`
	 */
	CreateTextH6(text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextH6;

	/**
	 * Creates an extra large text
	 * @param options `DS text options`
	 */
	CreateTextJumbo(text: str, width?: num, height?: num, options?: str, color?: str_col): MuiTextJumbo;

	/**
	 * Creates a paragraph text
	 * @param options `DS text options`
	 */
	CreateTextParagraph(text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextParagraph;

	/**
	 * Creates a secondary text
	 * @param options `DS text options`
	 */
	CreateTextSecondary(text: str, width?: num, height?: num, options?: str, color?: str_col, fontWeight?: "Thin"|"Light"|"Regular"|"Medium"|"Bold"): MuiTextSecondary;

	/**
	 * Creates a material design time picker
	 * @param hour [0-24]
	 * @param minute 0-59
	 */
	CreateTimePicker(hour?: num, minute?: num, color?: str_col): MuiTimePicker;

	/** MUI uses the free Roboto font family downloaded from <a href='www.fonts.google.com'>Google Fonts</a> as its main font for all of the controls */
	fonts: obj;

	/** Show a menu on a given control */
	ShowMenu(control: dso, list: str_lst, width?: num_frc): MuiMenu;

}

declare class MuiAlert {

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Hides the control visually */
	Hide(): void;

	/** Calls a function when alert is close */
	SetOnClose(callback: (isBtnClick: bin) => void): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;
}


declare class MuiAlertSimple {

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Hides the control visually */
	Hide(): void;

	/** Calls a function when button is click */
	SetOnTouch(callback: (isBtnClick: bin) => void): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;
}


declare class MuiAppBar {

	/**
	 * Sets a new heading icon
	 * @param newIcon `New material icon font`
	 */
	SetMenuIcon(newIcon: str): void;

	/**
	 * Change the color of the heading icon
	 * @param newColor `New color of the heading icon`
	 */
	SetMenuIconColor(newColor: str_col): void;

	/** Calls a function when the right controls are click */
	SetOnControlTouch(callback: (btnTxt: str, index: num_int) => void): void;

	/** Calls a function when the heading icon is click */
	SetOnMenuTouch(callback: () => void): void;

	/**
	 * Sets a new title
	 * @param newTitle `New title text`
	 */
	SetTitleText(newTitle: str): void;

	/** Change the color of the title */
	SetTitleTextColor(newColor: str_col): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiAppBarElegant {

	/**
	 * Sets a new heading icon
	 * @param newIcon `New material icon font`
	 */
	SetMenuIcon(newIcon: str): void;

	/**
	 * Change the color of the heading icon
	 * @param newColor `New color of the heading icon`
	 */
	SetMenuIconColor(newColor: str_col): void;

	/** Calls a function when the right controls are click */
	SetOnControlTouch(callback: (btnTxt: str, index: num_int) => void): void;

	/** Calls a function when the heading icon is click */
	SetOnMenuTouch(callback: () => void): void;

	/**
	 * Sets a new title
	 * @param newTitle `New title text`
	 */
	SetTitleText(newTitle: str): void;

	/** Change the color of the title */
	SetTitleTextColor(newColor: str_col): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiAppBarModern {

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Calls a function when right control is touch */
	SetOnControlTouch(callback: () => void): void;

	/** Call a function when the menu icon is touch */
	SetOnMenuTouch(callback: () => void): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor pos */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard (line can still be inserted via Shift+Enter) */
	SetOnEnter(callback: () => void): void;

	/** Define a callback function which is called when the user focuses the control */
	SetOnFocus(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;
}


declare class MuiBanner {

	/** Calls a function when buttons are click (prev */
	SetOnTouch(callback: (isOk: bin, btnText: str) => void): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Hides the control visually */
	Hide(): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Called when the dialog or control has been closed */
	SetOnClose(callback: () => void): void;
}


declare class MuiButtonContained {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set style */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiButtonElegant {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set style */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;

	/** Change the color of the control */
	SetColor(color: str_col, backColor: str_col): void;
}


declare class MuiButtonFlat {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set style */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiButtonOutlined {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set style */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiButtonRaised {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set style */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;

	/** Change the color of the control */
	SetColor(color: str_col, backColor: str_col): void;
}


declare class MuiButtonRaisedO {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set style */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;

	/** Change the color of the control */
	SetColor(color: str_col, backColor: str_col): void;
}


declare class MuiButtonRound {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set style */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;

	/** Change the color of the control */
	SetColor(color: str_col, backColor: str_col): void;
}


declare class MuiButtonRoundO {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set style */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;

	/** Change the color of the control */
	SetColor(color: str_col, backColor: str_col): void;
}


declare class MuiButtonText {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set style */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiButtonToggle {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set style */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;

	/** Change the color of the control */
	SetColor(color: str_col, backColor: str_col): void;
}


declare class MuiCard {

	/** Calls a function when buttons are click */
	SetOnButtonTouch(callback: (btnText: str, cardName: str) => void): void;

	/** Calls a function when the image is click */
	SetOnImageTouch(callback: (cardName: str) => void): void;

	/** Calls a function when avatar is click */
	SetOnAvatarTouch(callback: (cardName: str) => void): void;

	/** Calls a function when title item is click */
	SetOnTitleTouch(callback: (title: str, cardName: str) => void): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiCheckbox {

	/** Calls a function when the checkbox is click */
	SetOnTouch(callback: (index: num_int, checked: bin) => void): void;

	/**
	 * Get the check items in the list
	 * @return List of indexes for slected items
	 */
	GetCheckItem(): lst;

	/**
	 * Checks the corresponding item/items in the checkbox list
	 * @param index `You can also pass an array of indexes e.g. [1`, ` 3]`
	 */
	CheckItemByIndex(index: num_int): void;

	/**
	 * Unchecks the corresponding item/items in the checkbox list
	 * @param index `You can also pass an array of indexes e.g. [1`, ` 3]`
	 */
	UncheckItemByIndex(index: num_int): void;

	/**
	 * Change the height of the control
	 * @param height `Fraction of the screen height`
	 */
	SetHeight(height: num): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiCheckList {

	/** Calls a function when the checklist is submitted */
	SetOnSubmit(callback: (lst: lst) => void): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Change the height of the control
	 * @param height `Fraction of the screen height`
	 */
	SetHeight(height: num): void;

	/** Hides the control visually */
	Hide(): void;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/**
	 * Pass texedit control to display input values
	 * @param textEdit An MUI TextEdit control
	 */
	SetTextEdit(textEdit: obj): void;
}


declare class MuiColorPicker {

	/** Calls a function when a user click the OK button */
	SetOnSelect(callback: (color?: str_col) => void): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/**
	 * Pass texedit control to display input values
	 * @param textEdit An MUI TextEdit control
	 */
	SetTextEdit(textEdit: obj): void;
}


declare class MuiDataTable {

	/**
	 * Append a row to the table
	 * @param row `A colon ':' separated entries for the new row.`
	 */
	AppendRow(row: str): void;

	/**
	 * Prepend a row to the table
	 * @param row `A colon ':' separated entries for the new row.`
	 */
	PrependRow(row: str): void;

	/**
	 * Remove a row at a given index or indexes
	 * @param index An array of indexes you want to remove. It can also be just a number for a single index.
	 */
	RemoveRows(index: lst): void;

	/** Get the selected rows */
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
	 * @param type `Type of layout. Can be Linear`, `Absolute`, `Frame. Default to Linear`
	 * @param options `A comma separated layout options. Default to Horizontal`, `Right`, `VCenter`
	 * @param height `A fraction of the screen height.`
	 */
	AddFooter(type: str, options?: str, height?: num): DsLayout;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiDatePicker {

	/** Calls a function when a user click the OK button */
	SetOnSelect(callback: (date: str, yyyy: num_int, mm: num_int, dd: num_int) => void): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/**
	 * Pass texedit control to display input values
	 * @param textEdit An MUI TextEdit control
	 */
	SetTextEdit(textEdit: obj): void;
}


declare class MuiDialog {

	/** Calls a function when buttons are click (prev */
	SetOnTouch(callback: (isOk: bin, btnText: str) => void): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/**
	 * Sets a new title text
	 * @param newTitle `New title text`
	 */
	SetTitle(newTitle: str): void;

	/** Change the color of the title text */
	SetTitleColor(color: str_col): void;

	/** Hides the control visually */
	Hide(): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Called when the dialog or control has been closed */
	SetOnClose(callback: () => void): void;
}


declare class MuiDivider {

	/** Set the visibility to “Show” */
	Show(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;
}


declare class MuiFAB {

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/**
	 * Sets a new material icon
	 * @param icon `Material icon font`
	 */
	SetIcon(icon: str): void;

	/** Sets the text color */
	SetIconColor(color?: str_col): void;

	/**
	 * Returns the icon
	 * @return `Material icon font`
	 */
	GetIcon(): str;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;

	/** Change the color of the control */
	SetColor(color: str_col, backColor: str_col): void;

	/** Change displayed text */
	SetText(text: str): void;
}


declare class MuiFABElegant {

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/**
	 * Sets a new material icon
	 * @param icon `Material icon font`
	 */
	SetIcon(icon: str): void;

	/** Sets the text color */
	SetIconColor(color?: str_col): void;

	/**
	 * Returns the icon
	 * @return `Material icon font`
	 */
	GetIcon(): str;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;

	/** Change the color of the control */
	SetColor(color: str_col, backColor: str_col): void;

	/** Change displayed text */
	SetText(text: str): void;
}


declare class MuiFABOutline {

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/**
	 * Sets a new material icon
	 * @param icon `Material icon font`
	 */
	SetIcon(icon: str): void;

	/** Sets the text color */
	SetIconColor(color?: str_col): void;

	/**
	 * Returns the icon
	 * @return `Material icon font`
	 */
	GetIcon(): str;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;

	/** Change the color of the control */
	SetColor(color: str_col, backColor: str_col): void;

	/** Change displayed text */
	SetText(text: str): void;
}


declare class MuiList {

	/** Add item */
	AddItem(title: str, body?: str, image?: str_ptf): void;

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get item */
	GetItem(title: str): obj;

	/** Get item by index */
	GetItemByIndex(index: num): obj;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get length */
	GetLength(): num_int;

	/** Get list */
	GetList(delim: str): obj;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "List";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Insert item */
	InsertItem(index: num, title: str, body?: str, image?: str_ptf): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Remove all */
	RemoveAll(): void;

	/** Remove item */
	RemoveItem(title: str): void;

	/** Remove item by index */
	RemoveItemByIndex(index: num): void;

	/** Scroll to item */
	ScrollToItem(title: str, body?: str): void;

	/** Scroll to item by index */
	ScrollToItemByIndex(index: num): void;

	/** Select item */
	SelectItem(title: str, body?: str, scroll?: bin): void;

	/** Select item by index */
	SelectItemByIndex(index: num, scroll?: bin): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set column widths */
	SetColumnWidths(icon: all, title?: str, body?: str, mode?: all): void;

	/** Set divider */
	SetDivider(height: num, color?: str_col): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** Set ellipsize1 */
	SetEllipsize1(mode: all): void;

	/** Set ellipsize2 */
	SetEllipsize2(mode: all): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set hi text color1 */
	SetHiTextColor1(clr: all): void;

	/** Set hi text color2 */
	SetHiTextColor2(clr: all): void;

	/** Set icon margins */
	SetIconMargins(left?: all, top?: all, right?: all, bottom?: all, mode?: all): void;

	/** Set icon size */
	SetIconSize(size: all, mode?: all): void;

	/** Set item */
	SetItem(title: str, newTitle: all, newBody?: num, newImage?: all): void;

	/** Set item by index */
	SetItemByIndex(index: num, newTitle: all, newBody?: num, newImage?: all): void;

	/** Set list */
	SetList(list: all, delim?: str): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Set text color1 */
	SetTextColor1(clr: str_col): void;

	/** Set text color2 */
	SetTextColor2(clr: str_col): void;

	/** Set text margins */
	SetTextMargins(left?: all, top?: all, right?: all, bottom?: all, mode?: all, options?: str_com): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/** Set text shadow1 */
	SetTextShadow1(radius: num, dx?: num, dy?: num, color?: str_col): void;

	/** Set text shadow2 */
	SetTextShadow2(radius: num, dx?: num, dy?: num, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Set text size1 */
	SetTextSize1(size: all, mode?: all): void;

	/** Set text size2 */
	SetTextSize2(size: all, mode?: all): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiListDialog {

	/** Calls a function selects an item in the list */
	SetOnSelect(callback: (name: str, index: num_int) => void): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Change the height of the control
	 * @param height `Fraction of the screen height`
	 */
	SetHeight(height: num): void;

	/** Hides the control visually */
	Hide(): void;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/**
	 * Pass texedit control to display input values
	 * @param textEdit An MUI TextEdit control
	 */
	SetTextEdit(textEdit: obj): void;
}


declare class MuiListModern {

	/** Calls a function when an item is click */
	SetOnTouch(callback: (title: str, body: str, index: num_int) => void): void;

	/** Calls a function when an item in the list is select */
	SetOnSelect(callback: (index: num_int, isSelected: bin) => void): void;

	/** Calls a function when an icon or avatar is click */
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
	 * @param newTitle `New title text`
	 */
	SetTitleText(newTitle: str, index: num_int): void;

	/**
	 * Set a new body to a respective index
	 * @param newBody `New body text`
	 */
	SetBodyText(newBody: str, index: num_int): void;

	/**
	 * Set a new material icon to the right icon
	 * @param newIcon `New right icon`
	 */
	SetRightIcon(newIcon: str, index: num_int): void;

	/**
	 * Set a new note text for a respective item on the list
	 * @param newNote `New note text`
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
	 * @param newImagePath `Path to the new image`
	 */
	SetImage(newImagePath: str_ptf, index: num_int): void;

	/**
	 * Set item
	 * @param data A single element of the list object
	 */
	SetItem(data: obj, index: num_int): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiListSimple {

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
	 * @param newTitle `New title text`
	 */
	SetTitleText(newTitle: str, index: num_int): void;

	/** Returns the current list object */
	GetList(): obj;

	/**
	 * Sets a new list
	 * @param list ListSimple list
	 */
	SetList(list: obj): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiMenu {

	/** Calls a function when item is click */
	SetOnSelect(callback: (title: str, index: num_int) => void): void;

	/**
	 * Set a new list of options
	 * @param list A comma separated options
	 */
	SetList(list: lst): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;
}


declare class MuiMenuWithIcon {

	/** Calls a function when item is click */
	SetOnSelect(callback: (text: str, index: num_int) => void): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;
}


declare class MuiModal {

	/** Calls a function when control buttons are click */
	SetOnTouch(callback: (isOkBtnClick: bin, btnText: str) => void): void;

	/** Get the layout of the modal where you can add your controls */
	GetLayout(): DsLayout;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Sets a new title to the modal */
	SetTitle(title: str): void;

	/** Sets a new title to the modal */
	SetHeaderColor(color?: str_col): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Called when the dialog or control has been closed */
	SetOnClose(callback: () => void): void;
}


declare class MuiRadio {

	/** Calls a function when the user selects an item in the list */
	SetOnSelect(callback: (name: str, index: num_int) => void): void;

	/** Checks a corresponding item */
	CheckItemByIndex(index: num_int): void;

	/** Gets the checked item in the list */
	GetCheckItem(): "title"|"index";

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get item */
	GetItem(title: str): obj;

	/** Get item by index */
	GetItemByIndex(index: num): obj;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get length */
	GetLength(): num_int;

	/** Get list */
	GetList(delim: str): obj;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "List";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Insert item */
	InsertItem(index: num, title: str, body?: str, image?: str_ptf): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Remove all */
	RemoveAll(): void;

	/** Remove item */
	RemoveItem(title: str): void;

	/** Remove item by index */
	RemoveItemByIndex(index: num): void;

	/** Scroll to item */
	ScrollToItem(title: str, body?: str): void;

	/** Scroll to item by index */
	ScrollToItemByIndex(index: num): void;

	/** Select item */
	SelectItem(title: str, body?: str, scroll?: bin): void;

	/** Select item by index */
	SelectItemByIndex(index: num, scroll?: bin): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set column widths */
	SetColumnWidths(icon: all, title?: str, body?: str, mode?: all): void;

	/** Set divider */
	SetDivider(height: num, color?: str_col): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** Set ellipsize1 */
	SetEllipsize1(mode: all): void;

	/** Set ellipsize2 */
	SetEllipsize2(mode: all): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set hi text color1 */
	SetHiTextColor1(clr: all): void;

	/** Set hi text color2 */
	SetHiTextColor2(clr: all): void;

	/** Set list */
	SetList(list: all, delim?: str): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Set text color1 */
	SetTextColor1(clr: all): void;

	/** Set text color2 */
	SetTextColor2(clr: all): void;

	/** Set text margins */
	SetTextMargins(left?: all, top?: all, right?: all, bottom?: all, mode?: all, options?: str_com): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/** Set text shadow1 */
	SetTextShadow1(radius: num, dx?: num, dy?: num, color?: str_col): void;

	/** Set text shadow2 */
	SetTextShadow2(radius: num, dx?: num, dy?: num, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Set text size1 */
	SetTextSize1(size: all, mode?: all): void;

	/** Set text size2 */
	SetTextSize2(size: all, mode?: all): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiRadioButtons {

	/** Calls a function when the user selects an item in the list */
	SetOnSelect(callback: (name: str, index: num_int) => void): void;

	/** Checks a corresponding item */
	CheckItemByIndex(index: num_int): void;

	/** Gets the checked item in the list */
	GetCheckItem(): "title"|"index";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Hides the control visually */
	Hide(): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Show or Hide the list */
	Toggle(): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Returns the corresponding item */
	GetItem(index: num_int): "title";

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/**
	 * Gets the list
	 * @return Array of titles
	 */
	GetList(): lst;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Radio";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiRadioMaterial {

	/** Calls a function when the user selects an item in the list */
	SetOnSelect(callback: (name: str, index: num_int) => void): void;

	/** Checks a corresponding item */
	CheckItemByIndex(index: num_int): void;

	/** Gets the checked item in the list */
	GetCheckItem(): "title"|"index";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Hides the control visually */
	Hide(): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Show or Hide the list */
	Toggle(): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Returns the corresponding item */
	GetItem(index: num_int): "title";

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/**
	 * Gets the list
	 * @return Array of titles
	 */
	GetList(): lst;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Radio";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiSeekBar {

	/** Get the current value of the seekbar */
	GetValue(): num;

	/**
	 * Set the number of decimals to the value
	 * @param decimals `The number of decimals`
	 */
	SetDecimals(decimals: num_int): void;

	/** Calls a function when the seekbar is touch */
	SetOnTouch(callback: (value: num) => void): void;

	/**
	 * Sets a new value to the seekbar
	 * @param value `Must be between 0 and range`
	 */
	SetValue(value: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Seekbar";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiSpinner {

	/** Calls a function when value changes */
	SetOnChange(callback: (value: str, index: num_int) => void): void;

	/**
	 * Select an option
	 * @param value `Must be one of the provided values`
	 */
	SelectItem(value: str): void;

	/**
	 * Select an option with a given index
	 * @param index `The index of the option in the given values`
	 */
	SelectItemByIndex(index: num_int): void;

	/**
	 * Sets a new list of options
	 * @param list A comma separated values for options.
	 */
	SetList(list: lst): void;

	/**
	 * Sets the hint when there is no active selection
	 * @param hint `The hint text.`
	 */
	SetHint(hint: str): void;

	/** Returns the currently contained text */
	GetText(): str;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiSwitch {

	/** Get the current value of the switch */
	GetValue(): bin;

	/** Calls a function when switch is click */
	SetOnTouch(callback: (value: bin) => void): void;

	/** Sets the value of the switch */
	SetValue(value: bin): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Seekbar";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiSwitchSettings {

	/** Get the current value of the switch */
	GetValue(): bin;

	/** Calls a function when switch is click */
	SetOnTouch(callback: (text: str, value: bin) => void): void;

	/** Sets the value of the switch */
	SetValue(value: bin): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Seekbar";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiTabFixed {

	/**
	 * Get the corresponding layout of a given name where you can add your controls
	 * @param name `The layout name`
	 */
	GetLayout(name: str): DsLayout;

	/** Open the a tab by passing an index */
	SetActiveTabByIndex(index: num): void;

	/** Calls a function when the tab is click */
	SetOnSelect(callback: (name: str, index: num_int) => void): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Tab";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiTEFilledIconLeft {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;
}


declare class MuiTEFilledIconRight {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;
}


declare class MuiTEOutlineIconLeft {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;
}


declare class MuiTEOutlineIconRight {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;
}


declare class MuiTESearchElegant {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Define a callback function which is called when the user pressed the icon */
	SetIconOnTouch(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;
}


declare class MuiTESearchUnique {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;
}


declare class MuiTextAreaFilled {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;
}


declare class MuiTextAreaFilledA {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;
}


declare class MuiTextAreaOutline {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;
}


declare class MuiTextAreaOutlineA {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;
}


declare class MuiTextEditFilled {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;
}


declare class MuiTextEditFilledA {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;
}


declare class MuiTextEditOutline {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;
}


declare class MuiTextEditOutlineA {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;
}


declare class MuiTextEditSearch {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Calls a function when icon is touch */
	SetOnIconTouch(callback: () => void): void;
}


declare class MuiTextEditUnique {

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear input history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get cursor line */
	GetCursorLine(): num;

	/** Get cursor position */
	GetCursorPos(): num;

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get the type of MUI control */
	GetType(): str;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Inserts a string at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Redo an undone action */
	Redo(): void;

	/** Replaces a given range in the text with some string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Change the curernt cursor position */
	SetCursorPos(position: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: () => void): void;

	/** Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard */
	SetOnEnter(callback: () => void): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Undo an action */
	Undo(): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;
}


declare class MuiTextH1 {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get html */
	GetHtml(): obj;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Text";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Log */
	Log(msg: str, options?: str_com): void;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Set log */
	SetLog(maxLines: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiTextH2 {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get html */
	GetHtml(): obj;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Text";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Log */
	Log(msg: str, options?: str_com): void;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Set log */
	SetLog(maxLines: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiTextH3 {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get html */
	GetHtml(): obj;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Text";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Log */
	Log(msg: str, options?: str_com): void;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Set log */
	SetLog(maxLines: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiTextH4 {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get html */
	GetHtml(): obj;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Text";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Log */
	Log(msg: str, options?: str_com): void;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Set log */
	SetLog(maxLines: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiTextH5 {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get html */
	GetHtml(): obj;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Text";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Log */
	Log(msg: str, options?: str_com): void;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Set log */
	SetLog(maxLines: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiTextH6 {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get html */
	GetHtml(): obj;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Text";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Log */
	Log(msg: str, options?: str_com): void;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Set log */
	SetLog(maxLines: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiTextJumbo {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get html */
	GetHtml(): obj;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Text";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Log */
	Log(msg: str, options?: str_com): void;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Set log */
	SetLog(maxLines: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiTextParagraph {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get html */
	GetHtml(): obj;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Text";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Log */
	Log(msg: str, options?: str_com): void;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Set log */
	SetLog(maxLines: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiTextSecondary {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (type: str) => void, time?: num_mls): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Data */
	data: obj;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get html */
	GetHtml(): obj;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get line count */
	GetLineCount(): num_int;

	/** Get line start */
	GetLineStart(line: num_int): num_int;

	/** Get line top */
	GetLineTop(line: num_int): num;

	/** Get max lines */
	GetMaxLines(): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get type */
	GetType(): "Text";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Log */
	Log(msg: str, options?: str_com): void;

	/**
	 * Access Java object methods via reflection
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Set log */
	SetLog(maxLines: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (src: dso) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: () => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width: num, height: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: "Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out", repeat?: num_int, yoyo?: bin, callback?: () => void): void;
}


declare class MuiTimePicker {

	/** Calls a function when the user selects a time */
	SetOnSelect(callback: (time: str, hour: num_int, minute: num_int, pos: "AM"|"PM") => void): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/**
	 * Pass texedit control to display input values
	 * @param textEdit An MUI TextEdit control
	 */
	SetTextEdit(textEdit: obj): void;
}


