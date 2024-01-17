/** @type {DsMUI} */
var MUI;
/** @typedef {MuiTextEditFilled | MuiTextEditFilledA | MuiTextEditOutline | MuiTextEditOutlineA | MuiTextEditSearch | MuiTextEditUnique} TextEdit */
/** @typedef {MuiTextAreaFilled | MuiTextAreaFilledA | MuiTextAreaOutline | MuiTextAreaOutlineA} TextArea */
/** @typedef {MuiTextH1 | MuiTextH2 | MuiTextH3 | MuiTextH4 | MuiTextH5 | MuiTextH6 | MuiTextJumbo | MuiTextParagraph | MuiTextSecondary} Text */
/** @typedef {MuiTabFixed} Tabs */
/** @typedef {MuiColorPicker | MuiDatePicker | MuiTimePicker} Picker */
/** @typedef {MuiButtonContained | MuiButtonElegant | MuiButtonFlat | MuiButtonOutlined | MuiButtonRaised | MuiButtonRaisedO | MuiButtonRound | MuiButtonRoundO | MuiButtonText | MuiButtonToggle} Button */
/** @typedef {MuiAlert | MuiAlertSimple | MuiAppBar | MuiAppBarElegant | MuiAppBarModern | MuiBanner | MuiButtonContained | MuiButtonElegant | MuiButtonFlat | MuiButtonOutlined | MuiButtonRaised | MuiButtonRaisedO | MuiButtonRound | MuiButtonRoundO | MuiButtonText | MuiButtonToggle | MuiCard | MuiCheckbox | MuiCheckList | MuiColorPicker | MuiDataTable | MuiDatePicker | MuiDialog | MuiDivider | MuiFAB | MuiFABElegant | MuiFABOutline | MuiList | MuiListDialog | MuiListModern | MuiListSimple | MuiMenu | MuiMenuWithIcon | MuiModal | MuiRadio | MuiRadioButtons | MuiRadioMaterial | MuiSeekBar | MuiSpinner | MuiSwitch | MuiSwitchSettings | MuiTabFixed | MuiTEFilledIconLeft | MuiTEFilledIconRight | MuiTEOutlineIconLeft | MuiTEOutlineIconRight | MuiTESearchElegant | MuiTESearchUnique | MuiTextAreaFilled | MuiTextAreaFilledA | MuiTextAreaOutline | MuiTextAreaOutlineA | MuiTextEditFilled | MuiTextEditFilledA | MuiTextEditOutline | MuiTextEditOutlineA | MuiTextEditSearch | MuiTextEditUnique | MuiTextH1 | MuiTextH2 | MuiTextH3 | MuiTextH4 | MuiTextH5 | MuiTextH6 | MuiTextJumbo | MuiTextParagraph | MuiTextSecondary | MuiTimePicker} MuiObject */
/** @typedef {MuiObject} muo MUI object */

class DsMUI {

	/**
	 * Adds a nice pop-up at the top
	 * @param {str} text `Popup text`
	 * @param {str} [icon] `Material icon`
	 * @param {str_col} [color] 
	 * @return {MuiAlert} 
	 */
	AddAlert(text, icon, color) {}

	/**
	 * Adds a simple alert with a single button
	 * @param {str} text `Text of the alert`
	 * @param {str} [btnText] `Button text. Default is OKAY`
	 * @param {str_col} [color] 
	 * @return {MuiAlertSimple} 
	 */
	AddAlertSimple(text, btnText, color) {}

	/**
	 * Adds an appbar on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} [p1] `Title text`, `Hint`
	 * @param {str} [p2] `Material Icon`
	 * @param {"controls"|"color"} [p3] 
	 * @param {string | ("Elegant"|"Modern"|"Default"|"Round"|"Rectangle")[]} [options] <br>
 	 * &emsp; `Rectangle` - for Modern Appbar
	 * @return {MuiAppBar} 
	 */
	AddAppBar(parent, p1, p2, p3, options) {}

	/**
	 * Adds an elegant appbar on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} title `Title text`
	 * @param {str} [leadingIcon] `Material icon font`
	 * @param {str_com} [options] `material icon font for the right controls`
	 * @return {MuiAppBarElegant} 
	 */
	AddAppBarElegant(parent, title, leadingIcon, options) {}

	/**
	 * Adds a modern appbar on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} hint `Hint text for the search input`
	 * @param {str} [controlIcon] `Material font for the control icon`
	 * @param {"Round"|"Rectangle"} [options] 
	 * @param {str_col} [color] 
	 * @return {MuiAppBarModern} 
	 */
	AddAppBarModern(parent, hint, controlIcon, options, color) {}

	/**
	 * Adds a banner dialog
	 * @param {str} text 
	 * @param {str} [okText] `Truthy button text`
	 * @param {str} [cancelText] `Falsey button text`
	 * @return {MuiBanner} 
	 */
	AddBanner(text, okText, cancelText) {}

	/**
	 * Adds a MUI button to a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"raised"|"raisedo"|"roundo"|"round"|"elegant"|"outlined"|"contained"|"text"|"flat"} [options] 
	 * @return {MuiButton} 
	 */
	AddButton(parent, text, width, height, options) {}

	/**
	 * Adds a contained material button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @return {MuiButtonContained} 
	 */
	AddButtonContained(parent, text, width, height) {}

	/**
	 * Add an elegant button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @return {MuiButtonElegant} 
	 */
	AddButtonElegant(parent, text, width, height, color) {}

	/**
	 * Adds a flat button on given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiButtonFlat} 
	 */
	AddButtonFlat(parent, text, width, height, color, backColor) {}

	/**
	 * An outlined material button
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @return {MuiButtonOutlined} 
	 */
	AddButtonOutlined(parent, text, width, height) {}

	/**
	 * Adds a raised material button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [txtcolor] 
	 * @return {MuiButtonRaised} 
	 */
	AddButtonRaised(parent, text, width, height, color, txtcolor) {}

	/**
	 * Adds an outlined material raised button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiButtonRaisedO} 
	 */
	AddButtonRaisedO(parent, text, width, height, color, backColor) {}

	/**
	 * Adds a round material button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [txtcolor] 
	 * @return {MuiButtonRound} 
	 */
	AddButtonRound(parent, text, width, height, color, txtcolor) {}

	/**
	 * Adds an outlined material round button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiButtonRoundO} 
	 */
	AddButtonRoundO(parent, text, width, height, color, backColor) {}

	/**
	 * Adds a text button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @return {MuiButtonText} 
	 */
	AddButtonText(parent, text, width, height) {}

	/**
	 * Adds a toggleable button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text `Button text`
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {bin} [value=false] 
	 * @param {() => void} [callback] 
	 * @return {MuiButtonToggle} 
	 */
	AddButtonToggle(parent, text, width, height, value, callback) {}

	/**
	 * Adds a card on a given layout
	 * @param {DsLayout} parent 
	 * @param {{title: str, body: str, image: str_ptf, buttonText: str_com, color: str, width: num_frc, dividerAvatar: bin, dividerBody: bin, avatar: str_pth, avatarOnTop: bin, buttonType: "raised"|"raisedoutline"|"round"|"roundoutline"|"flat"}} [options] \{title, body, image, buttonText, color, width, dividerAvatar, dividerBody, avatar, avatarOnTop, buttonType}
	 * @return {MuiCard} 
	 */
	AddCard(parent, options) {}

	/**
	 * Adds an MUI Checkbox on a given layout
	 * @param {DsLayout} parent 
	 * @param {lst} list A comma separated string
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @return {MuiCheckbox} 
	 */
	AddCheckbox(parent, list, width, height, color) {}

	/**
	 * Adds an MUI checklist dialog
	 * @param {DsTextEdit} parent 
	 * @param {str} title 
	 * @param {lst_obj} list An array of objects of the form {name: string, check: boolean}
	 * @param {str_col} [color] 
	 * @param {bin} [bottom] 
	 * @return {MuiCheckList} 
	 */
	AddCheckList(parent, title, list, color, bottom) {}

	/**
	 * Creates a color picker dialog where you can select a range of MUI predefined colors
	 * @param {DsTextEdit} parent 
	 * @param {"Title"} title 
	 * @return {MuiColorPicker} 
	 */
	AddColorPicker(parent, title) {}

	/**
	 * Adds a new DataTable Control
	 * @param {DsLayout} parent 
	 * @param {lst} columns An array of strings of the form Name:Type for column header. Where 'Name' is the column name and 'Type is the column type [Can be Sortable or Numeric]'
	 * @param {lst} values An array of strings of the form Val1:Val2:Val3...
	 * @param {num} [width=-1] `Fraction of the screen width`
	 * @param {num} [height=-1] `Fraction of the screen height`
	 * @param {string | ("Selectable")[]} [options] 
	 * @return {MuiDataTable} 
	 */
	AddDataTable(parent, columns, values, width, height, options) {}

	/**
	 * Adds a date picker dialog
	 * @param {DsTextEdit} parent 
	 * @param {num_int} [yyyy] `Full year`
	 * @param {num_int} [mm] [0-11]
	 * @param {num_int} [dd] [1-31]
	 * @param {str_col} [color] 
	 * @return {MuiDatePicker} 
	 */
	AddDatePicker(parent, yyyy, mm, dd, color) {}

	/**
	 * Adds a customizable materialize dialog
	 * @param {"Title"} title 
	 * @param {str} body `Body text`
	 * @param {str} [okText] `Truthy button text`
	 * @param {str} [cancelText] `Falsey button text`
	 * @param {bin} [divider] `Show divider or hide`
	 * @return {MuiDialog} 
	 */
	AddDialog(title, body, okText, cancelText, divider) {}

	/**
	 * Adds a divider to a given layout
	 * @param {DsLayout} parent 
	 * @param {num_pxl} [height] 
	 * @return {MuiDivider} 
	 */
	AddDivider(parent, height) {}

	/**
	 * Adds a floating action button
	 * @param {DsLayout} parent 
	 * @param {str} [icon] `Material icon fonts`
	 * @param {str_col} [color] 
	 * @param {string | ("outline"|"elegant"|"default")[]} [options] 
	 * @return {MuiFAB} 
	 */
	AddFAB(parent, icon, color, options) {}

	/**
	 * Adds an elegant floating action button
	 * @param {DsLayout} parent 
	 * @param {str} [icon] `Material icon fonts`
	 * @param {str_col} [color] 
	 * @return {MuiFABElegant} 
	 */
	AddFABElegant(parent, icon, color) {}

	/**
	 * Adds an outlined floating action button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} [icon] `Material icon font`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiFABOutline} 
	 */
	AddFABOutline(parent, icon, color, backColor) {}

	/**
	 * Adds a layout
	 * @param {DsLayout} parent 
	 * @param {"Linear"|"Absolute"|"Frame"|"Card"} type 
	 * @param {str} [options] `Comma separated DroidScript layout options`
	 * @return {DsLayout} 
	 */
	AddLayout(parent, type, options) {}

	/**
	 * Adds an MUI control on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} list 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {string | ("simple"|"modern"|"default"|"divider")[]} [options] 
	 * @return {MuiList} 
	 */
	AddList(parent, list, width, height, options) {}

	/**
	 * Adds a more customizable list dialog or checklist dialog
	 * @param {DsTextEdit} parent 
	 * @param {str} title 
	 * @param {lst} list An array of objects
	 * @param {str_col} [color] 
	 * @param {string | ("CheckList"|"ListDialog"|"Bottom")[]} [options] 
	 * @return {MuiListDialog} 
	 */
	AddListDialog(parent, title, list, color, options) {}

	/**
	 * Adds a ListModern control on a given layout
	 * @param {DsLayout} parent 
	 * @param {lst} list An array of object elements. See list example
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"Initial"|"Material"|"Avatar"|"RightIcon"|"RightNote"|"Selectable"} [options] 
	 * @return {MuiListModern} 
	 */
	AddListModern(parent, list, width, height, options) {}

	/**
	 * Adds a simple list for navigation purposes
	 * @param {DsLayout} parent 
	 * @param {{ title: str, icon: str, color: str_col, badge: num }} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"Divider"} [options] 
	 * @return {MuiListSimple} 
	 */
	AddListSimple(parent, list, width, height, options) {}

	/**
	 * Adds a simple menu
	 * @param {string | ("list")[]} list 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {"Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"} [position] 
	 * @return {MuiMenu} 
	 */
	AddMenu(list, width, height, position) {}

	/**
	 * MUI menu with material icon font
	 * @param {str} list 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {"Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"} [position] 
	 * @return {MuiMenuWithIcon} 
	 */
	AddMenuWithIcon(list, width, height, position) {}

	/**
	 * Adds a modal
	 * @param {str} title 
	 * @param {str} [body] `Body text. If you want to customize the modal layout pass an empty string.`
	 * @param {str} [okTxt] `Truthy button text`
	 * @param {str} [cancelTxt] `Falsy button text`
	 * @param {str} [options] `Dialog options`, `Full`
	 * @return {MuiModal} 
	 */
	AddModal(title, body, okTxt, cancelTxt, options) {}

	/**
	 * Adds a picker dialog such as time, date or color
	 * @param {DsTextEdit} parent 
	 * @param {"Date"|"Color"|"Time"} [options] 
	 * @return {MuiPicker} 
	 */
	AddPicker(parent, options) {}

	/**
	 * Adds a radio material input
	 * @param {DsLayout} parent 
	 * @param {string | ("strings")[]} list 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {string | ("Buttons"|"Material"|"Normal")[]} [options] 
	 * @param {"color"|"orientation"} [p1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiRadio} 
	 */
	AddRadio(parent, list, width, height, options, p1, color, backColor) {}

	/**
	 * Adds a radio button control
	 * @param {DsLayout} parent 
	 * @param {lst} list A comma separated strings
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"Vertical"|"Horizontal"} [orientation] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiRadioButtons} 
	 */
	AddRadioButtons(parent, list, width, height, orientation, color, backColor) {}

	/**
	 * Adds a material radio control
	 * @param {DsLayout} parent 
	 * @param {lst} list A comma separated strings
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"Vertical"|"Horizontal"} [orientation] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiRadioMaterial} 
	 */
	AddRadioMaterial(parent, list, width, height, orientation, color, backColor) {}

	/**
	 * Adds an MUI basic seekbar
	 * @param {DsLayout} parent 
	 * @param {num} value `Must be between 0 and range`
	 * @param {num} range `The maximum value of your seekbar`
	 * @param {num} width 
	 * @param {str_col} [color] 
	 * @return {MuiSeekBar} 
	 */
	AddSeekBar(parent, value, range, width, color) {}

	/**
	 * Adds an MUI Switch to a given control
	 * @param {DsLayout} parent 
	 * @param {bin} value 
	 * @param {str_col} [color] 
	 * @return {MuiSwitch} 
	 */
	AddSwitch(parent, value, color) {}

	/**
	 * Adds an MUI SwitchSettings to a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {bin} [value] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiSwitchSettings} 
	 */
	AddSwitchSettings(parent, text, width, height, value, color, backColor) {}

	/**
	 * Adds an MUI tab on a given layout
	 * @param {DsLayout} parent 
	 * @param {string | ("titles")[]} title 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str_com} [options] `DS layout options`, `Fix`
	 * @param {str_col} [color] 
	 * @param {bin} [animation] 
	 * @return {MuiTabs} 
	 */
	AddTabs(parent, title, width, height, options, color, animation) {}

	/**
	 * Adds a filled text input with icon on the left
	 * @param {DsLayout} parent 
	 * @param {num} width 
	 * @param {str_com} [options] `DS TextEdit options`
	 * @param {str} [icon] `Material icon font`
	 * @param {str} [hint] `Hint or label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTEFilledIconLeft} 
	 */
	AddTEFilledIconLeft(parent, width, options, icon, hint, label, color) {}

	/**
	 * Adds a filled text input with icon on the right on a given layout
	 * @param {DsLayout} parent 
	 * @param {num} width 
	 * @param {str_com} [options] `DS TextEdit options`
	 * @param {str} [icon] `Material icon font`
	 * @param {str} [hint] `Hint or label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTEFilledIconRight} 
	 */
	AddTEFilledIconRight(parent, width, options, icon, hint, label, color) {}

	/**
	 * Adds a material outlined text input with icon on the left
	 * @param {DsLayout} parent 
	 * @param {num} width 
	 * @param {str_com} [options] `DS TextEdit options`, `Round`
	 * @param {str} [icon] `Material icon font`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTEOutlineIconLeft} 
	 */
	AddTEOutlineIconLeft(parent, width, options, icon, hint, label, color, backColor) {}

	/**
	 * Adds a material outlined text input with icon on the right
	 * @param {DsLayout} parent 
	 * @param {num} width 
	 * @param {str_com} [options] `DS TextEdit options`, `Round`
	 * @param {str} [icon] `Material icon font`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTEOutlineIconRight} 
	 */
	AddTEOutlineIconRight(parent, width, options, icon, hint, label, color, backColor) {}

	/**
	 * Adds an elegant search textedit on a given layout
	 * @param {DsLayout} parent 
	 * @param {num} width 
	 * @param {str} [hint] `Hint text`
	 * @param {str} [icon] `Material icon font`
	 * @param {"Right"|"Left"} [iconPos] 
	 * @param {str_col} [color] 
	 * @param {"Small"|"Normal"|"Border"} [option] 
	 * @return {MuiTESearchElegant} 
	 */
	AddTESearchElegant(parent, width, hint, icon, iconPos, color, option) {}

	/**
	 * Creates a unique text input
	 * @param {DsLayout} parent 
	 * @param {num} width 
	 * @param {str} [hint] `Hint text`
	 * @param {str} [icon] `Material icon font`
	 * @param {str_col} [iconColor] 
	 * @return {MuiTESearchUnique} 
	 */
	AddTESearchUnique(parent, width, hint, icon, iconColor) {}

	/**
	 * Adds a mui text control to the layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`, `Thin`, `Light`, `Regular`, `Medium`, `Bold`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `secondary`, `jumbo`, `paragraph`
	 * @param {str_col} [color] 
	 * @return {MuiText} 
	 */
	AddText(parent, text, width, height, options, color) {}

	/**
	 * Adds a material filled textarea
	 * @param {DsLayout} parent 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {string | ("filled"|"outline"|"active")[]} [options] 
	 * @param {str} [hint] `Hint text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTextArea} 
	 */
	AddTextArea(parent, width, height, options, hint, label, color, backColor) {}

	/**
	 * Add a material filled textarea on a given layout
	 * @param {DsLayout} parent 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [hint] `Hint text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTextAreaFilled} 
	 */
	AddTextAreaFilled(parent, width, height, hint, label, color) {}

	/**
	 * Adds an active filled textarea
	 * @param {DsLayout} parent 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Hides or show label`
	 * @param {str_col} [color] 
	 * @return {MuiTextAreaFilledA} 
	 */
	AddTextAreaFilledA(parent, width, height, hint, label, color) {}

	/**
	 * Add an outlined material textarea
	 * @param {DsLayout} parent 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTextAreaOutline} 
	 */
	AddTextAreaOutline(parent, width, height, hint, label, color, backColor) {}

	/**
	 * Add an active outlined material textarea
	 * @param {DsLayout} parent 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTextAreaOutlineA} 
	 */
	AddTextAreaOutlineA(parent, width, height, hint, label, color, backColor) {}

	/**
	 * Adds a TextEdit control to a given layout
	 * @param {DsLayout} parent 
	 * @param {num} [width=-1] 
	 * @param {str} [options] `outline`, `filled`, `unique`, `search`, `active`, `icon and for icon can be  left`, `right`
	 * @param {str} [p1] `See corresponding MUI TextEdit`
	 * @param {str} [p2] `See corresponding MUI TextEdit`
	 * @param {str} [p3] `See corresponding MUI TextEdit`
	 * @param {str} [p4] `See corresponding MUI TextEdit`
	 * @param {str} [p5] `See corresponding MUI TextEdit`
	 * @return {MuiTextEdit} 
	 */
	AddTextEdit(parent, width, options, p1, p2, p3, p4, p5) {}

	/**
	 * Adds the most common type of material text input
	 * @param {DsLayout} parent 
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTextEditFilled} 
	 */
	AddTextEditFilled(parent, width, options, hint, label, color) {}

	/**
	 * Add an active filled material text input
	 * @param {DsLayout} parent 
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTextEditFilledA} 
	 */
	AddTextEditFilledA(parent, width, options, hint, label, color) {}

	/**
	 * Adds an outlined material text input
	 * @param {DsLayout} parent 
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`, `Round`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @return {MuiTextEditOutline} 
	 */
	AddTextEditOutline(parent, width, options, hint, label) {}

	/**
	 * Adds an active outlined material text input
	 * @param {DsLayout} parent 
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`, `Round`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTextEditOutlineA} 
	 */
	AddTextEditOutlineA(parent, width, options, hint, label, color, backColor) {}

	/**
	 * Adds a customize search style text input
	 * @param {DsLayout} parent 
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`
	 * @param {str} [hint] `Hint text`
	 * @param {str_col} [label] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTextEditSearch} 
	 */
	AddTextEditSearch(parent, width, options, hint, label, backColor) {}

	/**
	 * Adds a unique textedit customization
	 * @param {DsLayout} parent 
	 * @param {num} [width] 
	 * @param {str} [hint] `Hint text`
	 * @param {str} [icon] `Material icon font`
	 * @param {str_col} [iconColor] `Icon color`
	 * @return {MuiTextEditUnique} 
	 */
	AddTextEditUnique(parent, width, hint, icon, iconColor) {}

	/**
	 * Adds an H1 text to a layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH1} 
	 */
	AddTextH1(parent, text, width, height, options, color, fontWeight) {}

	/**
	 * Adds an H2 text to a layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH2} 
	 */
	AddTextH2(parent, text, width, height, options, color, fontWeight) {}

	/**
	 * Adds an H3 text to a layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH3} 
	 */
	AddTextH3(parent, text, width, height, options, color, fontWeight) {}

	/**
	 * Adds an H4 text to a layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH4} 
	 */
	AddTextH4(parent, text, width, height, options, color, fontWeight) {}

	/**
	 * Adds an H5 text to a layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH5} 
	 */
	AddTextH5(parent, text, width, height, options, color, fontWeight) {}

	/**
	 * Adds an H6 text to a layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH6} 
	 */
	AddTextH6(parent, text, width, height, options, color, fontWeight) {}

	/**
	 * Creates an extra large text
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @return {MuiTextJumbo} 
	 */
	AddTextJumbo(parent, text, width, height, options, color) {}

	/**
	 * Adds a paragraph text to a layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextParagraph} 
	 */
	AddTextParagraph(parent, text, width, height, options, color, fontWeight) {}

	/**
	 * Adds a secondary text to a layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextSecondary} 
	 */
	AddTextSecondary(parent, text, width, height, options, color, fontWeight) {}

	/**
	 * Adds a time picker
	 * @param {DsTextEdit} parent 
	 * @param {num} [hour] [0-24]
	 * @param {num} [minute] 0-59
	 * @param {str_col} [color] 
	 * @return {MuiTimePicker} 
	 */
	AddTimePicker(parent, hour, minute, color) {}

	/**
	 * MUI colors are accessible through the **colors** property of the MUI object
	 * @type {obj} 
	 */
	colors;

	/**
	 * A nice pop-up at the top of your current layout
	 * @param {str} text `Popup text`
	 * @param {str} [icon] `Material icon`
	 * @param {str_col} [color] 
	 * @return {MuiAlert} 
	 */
	CreateAlert(text, icon, color) {}

	/**
	 * Create a simple alert with a single button
	 * @param {str} text `Text of the alert`
	 * @param {str} [btnText] `Button text. Default is OKAY`
	 * @param {str_col} [color] 
	 * @return {MuiAlertSimple} 
	 */
	CreateAlertSimple(text, btnText, color) {}

	/**
	 * The most common type of material design app bar
	 * @param {str} title `Title text`
	 * @param {str} [leadingIcon] `A material font icon for the leading control`
	 * @param {str_com} [controls] `material icon font for the right controls`
	 * @return {MuiAppBar} 
	 */
	CreateAppBar(title, leadingIcon, controls) {}

	/**
	 * A more elegant appbar implementation
	 * @param {str} title `Title text`
	 * @param {str} [leadingIcon] `Material icon font`
	 * @param {str_com} [options] `material icon font for the right controls`
	 * @return {MuiAppBarElegant} 
	 */
	CreateAppBarElegant(title, leadingIcon, options) {}

	/**
	 * A modern appbar with a search input, leading icon and trailing icon
	 * @param {str} [hint] `Hint text for the search input`
	 * @param {str} [controlIcon] `Material font for the control icon`
	 * @param {"Round"|"Rectangle"} [options] 
	 * @param {str_col} [color] 
	 * @return {MuiAppBarModern} 
	 */
	CreateAppBarModern(hint, controlIcon, options, color) {}

	/**
	 * A banner dialog is a nice popup that slides from the top of your current page
	 * @param {str} text 
	 * @param {str} [okText] `Truthy button text`
	 * @param {str} [cancelText] `Falsey button text`
	 * @return {MuiBanner} 
	 */
	CreateBanner(text, okText, cancelText) {}

	/**
	 * An contained material button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @return {MuiButtonContained} 
	 */
	CreateButtonContained(text, width, height) {}

	/**
	 * An elegant button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @return {MuiButtonElegant} 
	 */
	CreateButtonElegant(text, width, height, color) {}

	/**
	 * Just a flat button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiButtonFlat} 
	 */
	CreateButtonFlat(text, width, height, color, backColor) {}

	/**
	 * An outlined material button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str} [options] 
	 * @return {MuiButtonOutlined} 
	 */
	CreateButtonOutlined(text, width, height, options) {}

	/**
	 * The basic type of material button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [txtcolor] 
	 * @return {MuiButtonRaised} 
	 */
	CreateButtonRaised(text, width, height, color, txtcolor) {}

	/**
	 * An outlined material raised button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiButtonRaisedO} 
	 */
	CreateButtonRaisedO(text, width, height, color, backColor) {}

	/**
	 * A round material button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [textColor] 
	 * @return {MuiButtonRound} 
	 */
	CreateButtonRound(text, width, height, color, textColor) {}

	/**
	 * An outlined material round button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiButtonRoundO} 
	 */
	CreateButtonRoundO(text, width, height, color, backColor) {}

	/**
	 * Adds a text button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str} [options] 
	 * @return {MuiButtonText} 
	 */
	CreateButtonText(text, width, height, options) {}

	/**
	 * Create button toggle
	 * @param {str} text 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {bin} [value] 
	 * @param {() => void} [callback] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiButtonToggle} 
	 */
	CreateButtonToggle(text, width, height, value, callback, color, backColor) {}

	/**
	 * A material implementation of a card
	 * @param {{title: str, body: str, image: str_ptf, buttonText: str_com, color: str, width: num_frc, dividerAvatar: bin, dividerBody: bin, avatar: str_pth, avatarOnTop: bin, buttonType: "raised"|"raisedoutline"|"round"|"roundoutline"|"flat"}} [options] \{title, body, image, buttonText, color, width, dividerAvatar, dividerBody, avatar, avatarOnTop, buttonType}
	 * @return {MuiCard} 
	 */
	CreateCard(options) {}

	/**
	 * Checkbox is a powerful control when you want the user to select multiple items in a group
	 * @param {lst} list A comma separated string
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @return {MuiCheckbox} 
	 */
	CreateCheckbox(list, width, height, color) {}

	/**
	 * Check list is a dialog type checkbox list
	 * @param {str} title 
	 * @param {lst_obj} list An array of objects of the form {name: string, check: boolean}
	 * @param {str_col} [color] 
	 * @param {bin} [bottom] 
	 * @return {MuiCheckList} 
	 */
	CreateCheckList(title, list, color, bottom) {}

	/**
	 * Creates a color picker dialog where you can select a range of MUI predefined colors
	 * @param {str} title 
	 * @return {MuiColorPicker} 
	 */
	CreateColorPicker(title) {}

	/**
	 * Creates a new DataTable Control
	 * @param {lst} columns An array of strings of the form Name:Type for column header. Where 'Name' is the column name and 'Type is the column type [Can be Sortable or Numeric]'
	 * @param {lst} values An array of strings of the form Val1:Val2:Val3...
	 * @param {num} [width=-1] `Fraction of the screen width`
	 * @param {num} [height=-1] `Fraction of the screen height`
	 * @param {string | ("Selectable")[]} [options] 
	 * @return {MuiDataTable} 
	 */
	CreateDataTable(columns, values, width, height, options) {}

	/**
	 * Creates a materialize date picker dialog
	 * @param {num_int} [yyyy] `Full year`
	 * @param {num_int} [mm] [0-11]
	 * @param {num_int} [dd] [1-31]
	 * @param {str_col} [color] 
	 * @return {MuiDatePicker} 
	 */
	CreateDatePicker(yyyy, mm, dd, color) {}

	/**
	 * Creates a customizable materialize dialog
	 * @param {"Title"} title 
	 * @param {str} [body] `Body text`
	 * @param {str} [okText] `Truthy button text`
	 * @param {str} [cancelText] `Falsey button text`
	 * @param {bin} [divider] `Show divider or hide`
	 * @return {MuiDialog} 
	 */
	CreateDialog(title, body, okText, cancelText, divider) {}

	/**
	 * Creates a divider which you can add to your layout
	 * @param {num_pxl} [height] 
	 * @return {MuiDivider} 
	 */
	CreateDivider(height) {}

	/**
	 * Creates a floating action button
	 * @param {str} icon `Material icon fonts`
	 * @param {str_col} [color] 
	 * @return {MuiFAB} 
	 */
	CreateFAB(icon, color) {}

	/**
	 * An elegant floating action button
	 * @param {str} icon `Material icon fonts`
	 * @param {str_col} [color] 
	 * @return {MuiFABElegant} 
	 */
	CreateFABElegant(icon, color) {}

	/**
	 * Creates an outlined floating action button
	 * @param {str} icon `Material icon font`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiFABOutline} 
	 */
	CreateFABOutline(icon, color, backColor) {}

	/**
	 * It is just the **CreateLayout** method of DroidScript with predefined values on background color just to be consistent on MUI theming
	 * @param {"Linear"|"Absolute"|"Frame"|"Card"} type 
	 * @param {str} [options] `Comma separated DroidScript layout options`
	 * @return {DsLayout} 
	 */
	CreateLayout(type, options) {}

	/**
	 * A manipulation of the DroidScript list object
	 * @param {str} list 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] 
	 * @return {MuiList} 
	 */
	CreateList(list, width, height, options) {}

	/**
	 * Creates a more customizable list dialog
	 * @param {str} title 
	 * @param {lst_obj} list An array of objects of the form {name: 'string', icon: 'material-icon', color: 'string'}
	 * @param {str_col} [color] 
	 * @param {bin} [bottom] 
	 * @return {MuiListDialog} 
	 */
	CreateListDialog(title, list, color, bottom) {}

	/**
	 * A modern implementation of list using the available controls of DroidScript
	 * @param {lst} list An array of object elements. See list example
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"Initial"|"Material"|"Avatar"|"RightIcon"|"RightNote"|"Selectable"} [options] 
	 * @return {MuiListModern} 
	 */
	CreateListModern(list, width, height, options) {}

	/**
	 * Creates a simple list that has an optional badge and icon with no body text
	 * @param {{ title: str, icon: str, color: str_col, badge: num }} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"Divider"} [options] 
	 * @return {MuiListSimple} 
	 */
	CreateListSimple(list, width, height, options) {}

	/**
	 * Creates a simple menu
	 * @param {string | ("list")[]} list 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {"Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"} [position] 
	 * @return {MuiMenu} 
	 */
	CreateMenu(list, width, height, position) {}

	/**
	 * Advance MUI implementation of material design menu with additional icon using material icon font
	 * @param {str} list 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {"Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"} [position] 
	 * @return {MuiMenuWithIcon} 
	 */
	CreateMenuWithIcon(list, width, height, position) {}

	/**
	 * A modal is a popup with more controls that can be added
	 * @param {str} title 
	 * @param {str} body `Body text. If you want to customize the modal layout pass an empty string.`
	 * @param {str} [okTxt] `Truthy button text`
	 * @param {str} [cancelTxt] `Falsy button text`
	 * @param {bin} [show] 
	 * @param {str} [options] `Dialog options`, `Full`
	 * @return {MuiModal} 
	 */
	CreateModal(title, body, okTxt, cancelTxt, show, options) {}

	/**
	 * Creates a radio control. A radio control allows the user to select only one item in a list
	 * @param {string | ("strings")[]} list 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str_col} [color] 
	 * @return {MuiRadio} 
	 */
	CreateRadio(list, width, height, color) {}

	/**
	 * Creates a radio button control
	 * @param {lst} list A comma separated strings
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"Vertical"|"Horizontal"} [orientation] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiRadioButtons} 
	 */
	CreateRadioButtons(list, width, height, orientation, color, backColor) {}

	/**
	 * Creates a material radio control
	 * @param {lst} list A comma separated strings
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"Vertical"|"Horizontal"} [orientation] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiRadioMaterial} 
	 */
	CreateRadioMaterial(list, width, height, orientation, color, backColor) {}

	/**
	 * An MUI implementation of a basic seekbar
	 * @param {num} value `Must be between 0 and range`
	 * @param {num} [range=100] `The maximum value of your seekbar`
	 * @param {num} [width] 
	 * @param {str_col} [color] 
	 * @return {MuiSeekBar} 
	 */
	CreateSeekBar(value, range, width, color) {}

	/**
	 * Creates a material designed dropdown or spinner
	 * @param {lst} list String. A comma separated options
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @return {MuiSpinner} 
	 */
	CreateSpinner(list, width, height) {}

	/**
	 * Creates a switch that can be toggled on and off
	 * @param {bin} value 
	 * @param {str_col} [color] 
	 * @return {MuiSwitch} 
	 */
	CreateSwitch(value, color) {}

	/**
	 * Creates a switchable settings that can be toggled on and off
	 * @param {str} text 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {bin} [value] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiSwitchSettings} 
	 */
	CreateSwitchSettings(text, width, height, value, color, backColor) {}

	/**
	 * Creates a simple fixed tab
	 * @param {string | ("titles")[]} title 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str_com} [options] `DS layout options`
	 * @param {str_col} [color] 
	 * @param {bin} [animation] 
	 * @return {MuiTabFixed} 
	 */
	CreateTabFixed(title, width, height, options, color, animation) {}

	/**
	 * Creates a filled text input with icon on the left
	 * @param {num} width 
	 * @param {str_com} [options] `DS TextEdit options`
	 * @param {str} [icon] `Material icon font`
	 * @param {str} [hint] `Hint or label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTEFilledIconLeft} 
	 */
	CreateTEFilledIconLeft(width, options, icon, hint, label, color) {}

	/**
	 * Creates a filled text input with icon on the right
	 * @param {num} width 
	 * @param {str_com} [options] `DS TextEdit options`
	 * @param {str} [icon] `Material icon font`
	 * @param {str} [hint] `Hint or label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTEFilledIconRight} 
	 */
	CreateTEFilledIconRight(width, options, icon, hint, label, color) {}

	/**
	 * Creates a material outlined text input with icon on the left
	 * @param {num} width 
	 * @param {str_com} [options] `DS TextEdit options`, `Round`
	 * @param {str} [icon] `Material icon font`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTEOutlineIconLeft} 
	 */
	CreateTEOutlineIconLeft(width, options, icon, hint, label, color, backColor) {}

	/**
	 * Creates a material outlined text input with icon on the right
	 * @param {num} width 
	 * @param {str_com} [options] `DS TextEdit options`, `Round`
	 * @param {str} [icon] `Material icon font`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTEOutlineIconRight} 
	 */
	CreateTEOutlineIconRight(width, options, icon, hint, label, color, backColor) {}

	/**
	 * Creates a customizable elegant text input
	 * @param {num} width 
	 * @param {str} [hint] `Hint text`
	 * @param {str} [icon] `Material icon font`
	 * @param {"Right"|"Left"} [iconPos] 
	 * @param {str_col} [color] 
	 * @param {"Small"|"Normal"|"Border"} [option] 
	 * @return {MuiTESearchElegant} 
	 */
	CreateTESearchElegant(width, hint, icon, iconPos, color, option) {}

	/**
	 * Creates a unique text input
	 * @param {num} [width] 
	 * @param {str} [hint] `Hint text`
	 * @param {str} [icon] `Material icon font`
	 * @param {str_col} [iconColor] 
	 * @return {MuiTESearchUnique} 
	 */
	CreateTESearchUnique(width, hint, icon, iconColor) {}

	/**
	 * Creates a material filled textarea
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [hint] `Hint text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTextAreaFilled} 
	 */
	CreateTextAreaFilled(width, height, hint, label, color) {}

	/**
	 * Creates an active filled textarea
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Hides or show label`
	 * @param {str_col} [color] 
	 * @return {MuiTextAreaFilledA} 
	 */
	CreateTextAreaFilledA(width, height, hint, label, color) {}

	/**
	 * Creates an outlined material textarea
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTextAreaOutline} 
	 */
	CreateTextAreaOutline(width, height, hint, label, color, backColor) {}

	/**
	 * Creates an active outlined material textarea
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTextAreaOutlineA} 
	 */
	CreateTextAreaOutlineA(width, height, hint, label, color, backColor) {}

	/**
	 * Creates the most common type of material text input
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTextEditFilled} 
	 */
	CreateTextEditFilled(width, options, hint, label, color) {}

	/**
	 * Creates an active filled material text input
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTextEditFilledA} 
	 */
	CreateTextEditFilledA(width, options, hint, label, color) {}

	/**
	 * Creates an outlined material text input
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`, `Round`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTextEditOutline} 
	 */
	CreateTextEditOutline(width, options, hint, label, color, backColor) {}

	/**
	 * Creates an active outlined material text input
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`, `Round`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTextEditOutlineA} 
	 */
	CreateTextEditOutlineA(width, options, hint, label, color, backColor) {}

	/**
	 * Creates a customize search style text input
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`
	 * @param {str} [hint] `Hint text`
	 * @param {str_col} [label] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTextEditSearch} 
	 */
	CreateTextEditSearch(width, options, hint, label, backColor) {}

	/**
	 * Creates a unique textedit customization
	 * @param {num} [width] 
	 * @param {str} [hint] `Hint text`
	 * @param {str} [icon] `Material icon font`
	 * @param {str_col} [iconColor] `Icon color`
	 * @return {MuiTextEditUnique} 
	 */
	CreateTextEditUnique(width, hint, icon, iconColor) {}

	/**
	 * Creates a heading text 1
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH1} 
	 */
	CreateTextH1(text, width, height, options, color, fontWeight) {}

	/**
	 * Creates a heading text 2
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH2} 
	 */
	CreateTextH2(text, width, height, options, color, fontWeight) {}

	/**
	 * Creates a heading text 3
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH3} 
	 */
	CreateTextH3(text, width, height, options, color, fontWeight) {}

	/**
	 * Creates a heading text 4
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH4} 
	 */
	CreateTextH4(text, width, height, options, color, fontWeight) {}

	/**
	 * Creates a heading text 5
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH5} 
	 */
	CreateTextH5(text, width, height, options, color, fontWeight) {}

	/**
	 * Creates a heading text 6
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextH6} 
	 */
	CreateTextH6(text, width, height, options, color, fontWeight) {}

	/**
	 * Creates an extra large text
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @return {MuiTextJumbo} 
	 */
	CreateTextJumbo(text, width, height, options, color) {}

	/**
	 * Creates a paragraph text
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextParagraph} 
	 */
	CreateTextParagraph(text, width, height, options, color, fontWeight) {}

	/**
	 * Creates a secondary text
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @param {"Thin"|"Light"|"Regular"|"Medium"|"Bold"} [fontWeight] 
	 * @return {MuiTextSecondary} 
	 */
	CreateTextSecondary(text, width, height, options, color, fontWeight) {}

	/**
	 * Creates a material design time picker
	 * @param {num} [hour] [0-24]
	 * @param {num} [minute] 0-59
	 * @param {str_col} [color] 
	 * @return {MuiTimePicker} 
	 */
	CreateTimePicker(hour, minute, color) {}

	/**
	 * MUI uses the free Roboto font family downloaded from <a href='www.fonts.google.com'>Google Fonts</a> as its main font for all of the controls
	 * @type {obj} 
	 */
	fonts;

	/**
	 * Show a menu on a given control
	 * @param {dso} control 
	 * @param {str_lst} list 
	 * @param {num_frc} [width] 
	 * @return {MuiMenu} 
	 */
	ShowMenu(control, list, width) {}

}

class MuiAlert {

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Calls a function when alert is close
	 * @param {(isBtnClick: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnClose(callback) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}
}


class MuiAlertSimple {

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Calls a function when button is click
	 * @param {(isBtnClick: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}
}


class MuiAppBar {

	/**
	 * Sets a new heading icon
	 * @param {str} newIcon `New material icon font`
	 * @return {void} 
	 */
	SetMenuIcon(newIcon) {}

	/**
	 * Change the color of the heading icon
	 * @param {str_col} newColor `New color of the heading icon`
	 * @return {void} 
	 */
	SetMenuIconColor(newColor) {}

	/**
	 * Calls a function when the right controls are click
	 * @param {(btnTxt: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnControlTouch(callback) {}

	/**
	 * Calls a function when the heading icon is click
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnMenuTouch(callback) {}

	/**
	 * Sets a new title
	 * @param {str} newTitle `New title text`
	 * @return {void} 
	 */
	SetTitleText(newTitle) {}

	/**
	 * Change the color of the title
	 * @param {str_col} newColor 
	 * @return {void} 
	 */
	SetTitleTextColor(newColor) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiAppBarElegant {

	/**
	 * Sets a new heading icon
	 * @param {str} newIcon `New material icon font`
	 * @return {void} 
	 */
	SetMenuIcon(newIcon) {}

	/**
	 * Change the color of the heading icon
	 * @param {str_col} newColor `New color of the heading icon`
	 * @return {void} 
	 */
	SetMenuIconColor(newColor) {}

	/**
	 * Calls a function when the right controls are click
	 * @param {(btnTxt: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnControlTouch(callback) {}

	/**
	 * Calls a function when the heading icon is click
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnMenuTouch(callback) {}

	/**
	 * Sets a new title
	 * @param {str} newTitle `New title text`
	 * @return {void} 
	 */
	SetTitleText(newTitle) {}

	/**
	 * Change the color of the title
	 * @param {str_col} newColor 
	 * @return {void} 
	 */
	SetTitleTextColor(newColor) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiAppBarModern {

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Calls a function when right control is touch
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnControlTouch(callback) {}

	/**
	 * Call a function when the menu icon is touch
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnMenuTouch(callback) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {void} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor pos
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard (line can still be inserted via Shift+Enter)
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Define a callback function which is called when the user focuses the control
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnFocus(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}
}


class MuiBanner {

	/**
	 * Calls a function when buttons are click (prev
	 * @param {(isOk: bin, btnText: str) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Called when the dialog or control has been closed
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnClose(callback) {}
}


class MuiButtonContained {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiButtonElegant {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 * @return {void} 
	 */
	SetColor(color, backColor) {}
}


class MuiButtonFlat {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiButtonOutlined {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiButtonRaised {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 * @return {void} 
	 */
	SetColor(color, backColor) {}
}


class MuiButtonRaisedO {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 * @return {void} 
	 */
	SetColor(color, backColor) {}
}


class MuiButtonRound {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 * @return {void} 
	 */
	SetColor(color, backColor) {}
}


class MuiButtonRoundO {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 * @return {void} 
	 */
	SetColor(color, backColor) {}
}


class MuiButtonText {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiButtonToggle {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 * @return {void} 
	 */
	SetColor(color, backColor) {}
}


class MuiCard {

	/**
	 * Calls a function when buttons are click
	 * @param {(btnText: str, cardName: str) => void} callback 
	 * @return {void} 
	 */
	SetOnButtonTouch(callback) {}

	/**
	 * Calls a function when the image is click
	 * @param {(cardName: str) => void} callback 
	 * @return {void} 
	 */
	SetOnImageTouch(callback) {}

	/**
	 * Calls a function when avatar is click
	 * @param {(cardName: str) => void} callback 
	 * @return {void} 
	 */
	SetOnAvatarTouch(callback) {}

	/**
	 * Calls a function when title item is click
	 * @param {(title: str, cardName: str) => void} callback 
	 * @return {void} 
	 */
	SetOnTitleTouch(callback) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiCheckbox {

	/**
	 * Calls a function when the checkbox is click
	 * @param {(index: num_int, checked: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Get the check items in the list
	 * @return {lst} List of indexes for slected items
	 */
	GetCheckItem() {}

	/**
	 * Checks the corresponding item/items in the checkbox list
	 * @param {num_int} index `You can also pass an array of indexes e.g. [1`, ` 3]`
	 * @return {void} 
	 */
	CheckItemByIndex(index) {}

	/**
	 * Unchecks the corresponding item/items in the checkbox list
	 * @param {num_int} index `You can also pass an array of indexes e.g. [1`, ` 3]`
	 * @return {void} 
	 */
	UncheckItemByIndex(index) {}

	/**
	 * Change the height of the control
	 * @param {num} height `Fraction of the screen height`
	 * @return {void} 
	 */
	SetHeight(height) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiCheckList {

	/**
	 * Calls a function when the checklist is submitted
	 * @param {(lst: lst) => void} callback 
	 * @return {void} 
	 */
	SetOnSubmit(callback) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Change the height of the control
	 * @param {num} height `Fraction of the screen height`
	 * @return {void} 
	 */
	SetHeight(height) {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Pass texedit control to display input values
	 * @param {obj} textEdit An MUI TextEdit control
	 * @return {void} 
	 */
	SetTextEdit(textEdit) {}
}


class MuiColorPicker {

	/**
	 * Calls a function when a user click the OK button
	 * @param {(color?: str_col) => void} callback 
	 * @return {void} 
	 */
	SetOnSelect(callback) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Pass texedit control to display input values
	 * @param {obj} textEdit An MUI TextEdit control
	 * @return {void} 
	 */
	SetTextEdit(textEdit) {}
}


class MuiDataTable {

	/**
	 * Append a row to the table
	 * @param {str} row `A colon ':' separated entries for the new row.`
	 * @return {void} 
	 */
	AppendRow(row) {}

	/**
	 * Prepend a row to the table
	 * @param {str} row `A colon ':' separated entries for the new row.`
	 * @return {void} 
	 */
	PrependRow(row) {}

	/**
	 * Remove a row at a given index or indexes
	 * @param {lst} index An array of indexes you want to remove. It can also be just a number for a single index.
	 * @return {void} 
	 */
	RemoveRows(index) {}

	/**
	 * Get the selected rows
	 * @param {(indexes: lst) => void} callback 
	 * @return {void} 
	 */
	GetSelectedRows(callback) {}

	/**
	 * Calls a function when the selection status of the table changes
	 * @param {(isTrue: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnSelectionStatus(callback) {}

	/**
	 * Calls a function when a row in the table is click
	 * @param {(row: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Calls a function when the Table is ready and rendered already
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnReady(callback) {}

	/**
	 * Calls a function when the Table is on progress
	 * @param {(value: num) => void} callback 
	 * @return {void} 
	 */
	SetOnProgress(callback) {}

	/**
	 * Set the rows of the table to a new values of data
	 * @param {lst} values A comma separated strings of the form "Val1:Val2:Val3:..."
	 * @return {void} 
	 */
	SetRows(values) {}

	/**
	 * Add a footer layout to the table where you can add controls
	 * @param {str} type `Type of layout. Can be Linear`, `Absolute`, `Frame. Default to Linear`
	 * @param {str} [options] `A comma separated layout options. Default to Horizontal`, `Right`, `VCenter`
	 * @param {num} [height] `A fraction of the screen height.`
	 * @return {DsLayout} 
	 */
	AddFooter(type, options, height) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiDatePicker {

	/**
	 * Calls a function when a user click the OK button
	 * @param {(date: str, yyyy: num_int, mm: num_int, dd: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnSelect(callback) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Pass texedit control to display input values
	 * @param {obj} textEdit An MUI TextEdit control
	 * @return {void} 
	 */
	SetTextEdit(textEdit) {}
}


class MuiDialog {

	/**
	 * Calls a function when buttons are click (prev
	 * @param {(isOk: bin, btnText: str) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Sets a new title text
	 * @param {str} newTitle `New title text`
	 * @return {void} 
	 */
	SetTitle(newTitle) {}

	/**
	 * Change the color of the title text
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTitleColor(color) {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Called when the dialog or control has been closed
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnClose(callback) {}
}


class MuiDivider {

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}
}


class MuiFAB {

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Sets a new material icon
	 * @param {str} icon `Material icon font`
	 * @return {void} 
	 */
	SetIcon(icon) {}

	/**
	 * Sets the text color
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetIconColor(color) {}

	/**
	 * Returns the icon
	 * @return {str} `Material icon font`
	 */
	GetIcon() {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 * @return {void} 
	 */
	SetColor(color, backColor) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}
}


class MuiFABElegant {

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Sets a new material icon
	 * @param {str} icon `Material icon font`
	 * @return {void} 
	 */
	SetIcon(icon) {}

	/**
	 * Sets the text color
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetIconColor(color) {}

	/**
	 * Returns the icon
	 * @return {str} `Material icon font`
	 */
	GetIcon() {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 * @return {void} 
	 */
	SetColor(color, backColor) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}
}


class MuiFABOutline {

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Sets a new material icon
	 * @param {str} icon `Material icon font`
	 * @return {void} 
	 */
	SetIcon(icon) {}

	/**
	 * Sets the text color
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetIconColor(color) {}

	/**
	 * Returns the icon
	 * @return {str} `Material icon font`
	 */
	GetIcon() {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 * @return {void} 
	 */
	SetColor(color, backColor) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}
}


class MuiList {

	/**
	 * Add item
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {str_ptf} [image] 
	 * @return {void} 
	 */
	AddItem(title, body, image) {}

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get item
	 * @param {str} title 
	 * @return {obj} 
	 */
	GetItem(title) {}

	/**
	 * Get item by index
	 * @param {num} index 
	 * @return {obj} 
	 */
	GetItemByIndex(index) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get length
	 * @return {num_int} 
	 */
	GetLength() {}

	/**
	 * Get list
	 * @param {str} delim 
	 * @return {obj} 
	 */
	GetList(delim) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"List"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Insert item
	 * @param {num} index 
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {str_ptf} [image] 
	 * @return {void} 
	 */
	InsertItem(index, title, body, image) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Remove all
	 * @return {void} 
	 */
	RemoveAll() {}

	/**
	 * Remove item
	 * @param {str} title 
	 * @return {void} 
	 */
	RemoveItem(title) {}

	/**
	 * Remove item by index
	 * @param {num} index 
	 * @return {void} 
	 */
	RemoveItemByIndex(index) {}

	/**
	 * Scroll to item
	 * @param {str} title 
	 * @param {str} [body] 
	 * @return {void} 
	 */
	ScrollToItem(title, body) {}

	/**
	 * Scroll to item by index
	 * @param {num} index 
	 * @return {void} 
	 */
	ScrollToItemByIndex(index) {}

	/**
	 * Select item
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {bin} [scroll=false] 
	 * @return {void} 
	 */
	SelectItem(title, body, scroll) {}

	/**
	 * Select item by index
	 * @param {num} index 
	 * @param {bin} [scroll] 
	 * @return {void} 
	 */
	SelectItemByIndex(index, scroll) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set column widths
	 * @param {all} icon 
	 * @param {str} [title] 
	 * @param {str} [body] 
	 * @param {all} [mode] 
	 * @return {void} 
	 */
	SetColumnWidths(icon, title, body, mode) {}

	/**
	 * Set divider
	 * @param {num} height 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetDivider(height, color) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * Set ellipsize1
	 * @param {all} mode 
	 * @return {void} 
	 */
	SetEllipsize1(mode) {}

	/**
	 * Set ellipsize2
	 * @param {all} mode 
	 * @return {void} 
	 */
	SetEllipsize2(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set hi text color1
	 * @param {all} clr 
	 * @return {void} 
	 */
	SetHiTextColor1(clr) {}

	/**
	 * Set hi text color2
	 * @param {all} clr 
	 * @return {void} 
	 */
	SetHiTextColor2(clr) {}

	/**
	 * Set icon margins
	 * @param {all} [left=0] 
	 * @param {all} [top=0] 
	 * @param {all} [right=0] 
	 * @param {all} [bottom=0] 
	 * @param {all} [mode='px'] 
	 * @return {void} 
	 */
	SetIconMargins(left, top, right, bottom, mode) {}

	/**
	 * Set icon size
	 * @param {all} size 
	 * @param {all} [mode] 
	 * @return {void} 
	 */
	SetIconSize(size, mode) {}

	/**
	 * Set item
	 * @param {str} title 
	 * @param {all} newTitle 
	 * @param {num} [newBody] 
	 * @param {all} [newImage] 
	 * @return {void} 
	 */
	SetItem(title, newTitle, newBody, newImage) {}

	/**
	 * Set item by index
	 * @param {num} index 
	 * @param {all} newTitle 
	 * @param {num} [newBody] 
	 * @param {all} [newImage] 
	 * @return {void} 
	 */
	SetItemByIndex(index, newTitle, newBody, newImage) {}

	/**
	 * Set list
	 * @param {all} list 
	 * @param {str} [delim=','] 
	 * @return {void} 
	 */
	SetList(list, delim) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Set text color1
	 * @param {str_col} clr 
	 * @return {void} 
	 */
	SetTextColor1(clr) {}

	/**
	 * Set text color2
	 * @param {str_col} clr 
	 * @return {void} 
	 */
	SetTextColor2(clr) {}

	/**
	 * Set text margins
	 * @param {all} [left=0] 
	 * @param {all} [top=0] 
	 * @param {all} [right=0] 
	 * @param {all} [bottom=0] 
	 * @param {all} [mode] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetTextMargins(left, top, right, bottom, mode, options) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Set text shadow1
	 * @param {num} radius 
	 * @param {num} [dx] 
	 * @param {num} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow1(radius, dx, dy, color) {}

	/**
	 * Set text shadow2
	 * @param {num} radius 
	 * @param {num} [dx] 
	 * @param {num} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow2(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Set text size1
	 * @param {all} size 
	 * @param {all} [mode] 
	 * @return {void} 
	 */
	SetTextSize1(size, mode) {}

	/**
	 * Set text size2
	 * @param {all} size 
	 * @param {all} [mode] 
	 * @return {void} 
	 */
	SetTextSize2(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiListDialog {

	/**
	 * Calls a function selects an item in the list
	 * @param {(name: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnSelect(callback) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Change the height of the control
	 * @param {num} height `Fraction of the screen height`
	 * @return {void} 
	 */
	SetHeight(height) {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Pass texedit control to display input values
	 * @param {obj} textEdit An MUI TextEdit control
	 * @return {void} 
	 */
	SetTextEdit(textEdit) {}
}


class MuiListModern {

	/**
	 * Calls a function when an item is click
	 * @param {(title: str, body: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Calls a function when an item in the list is select
	 * @param {(index: num_int, isSelected: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnSelect(callback) {}

	/**
	 * Calls a function when an icon or avatar is click
	 * @param {(index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetAvatarOnTouch(callback) {}

	/**
	 * Enable or disable selectable option
	 * @param {bin} selectable 
	 * @return {void} 
	 */
	SetSelectable(selectable) {}

	/**
	 * Calls a function when a right icon is click
	 * @param {(index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetControlOnTouch(callback) {}

	/**
	 * Appends an item at the bottom of the list
	 * @param {obj} data A single element of the list
	 * @return {void} 
	 */
	AppendItem(data) {}

	/**
	 * Removes a single item in the list
	 * @param {num_int} index 
	 * @return {void} 
	 */
	RemoveItem(index) {}

	/**
	 * Removes multiple items in the list
	 * @param {lst} indexes An array of indexes.
	 * @return {void} 
	 */
	RemoveItems(indexes) {}

	/**
	 * Set a new title to a respective index
	 * @param {str} newTitle `New title text`
	 * @param {num_int} index 
	 * @return {void} 
	 */
	SetTitleText(newTitle, index) {}

	/**
	 * Set a new body to a respective index
	 * @param {str} newBody `New body text`
	 * @param {num_int} index 
	 * @return {void} 
	 */
	SetBodyText(newBody, index) {}

	/**
	 * Set a new material icon to the right icon
	 * @param {str} newIcon `New right icon`
	 * @param {num_int} index 
	 * @return {void} 
	 */
	SetRightIcon(newIcon, index) {}

	/**
	 * Set a new note text for a respective item on the list
	 * @param {str} newNote `New note text`
	 * @param {num_int} index 
	 * @return {void} 
	 */
	SetNoteText(newNote, index) {}

	/**
	 * Sets a new list
	 * @param {obj} list List Modern list
	 * @return {void} 
	 */
	SetList(list) {}

	/**
	 * Removes an item at the bottom of the list
	 * @return {void} 
	 */
	PopItem() {}

	/**
	 * Removes an item at the beginning of the list
	 * @return {void} 
	 */
	ShiftItem() {}

	/**
	 * Returns the current list object
	 * @return {obj} 
	 */
	GetList() {}

	/**
	 * Returns the respective item in the list
	 * @param {num_int} index 
	 * @return {obj} 
	 */
	GetItem(index) {}

	/**
	 * Returns the selected items in the list
	 * @return {lst} List of indexes for slected items
	 */
	GetSelectedItems() {}

	/**
	 * Highlight a respective item in the list
	 * @param {num_int} index 
	 * @return {void} 
	 */
	Highlight(index) {}

	/**
	 * Removes a highlight to a respective item in the list
	 * @param {num_int} index 
	 * @return {void} 
	 */
	RemoveHighlight(index) {}

	/**
	 * Set a new image to a respective item in the list
	 * @param {str_ptf} newImagePath `Path to the new image`
	 * @param {num_int} index 
	 * @return {void} 
	 */
	SetImage(newImagePath, index) {}

	/**
	 * Set item
	 * @param {obj} data A single element of the list object
	 * @param {num_int} index 
	 * @return {void} 
	 */
	SetItem(data, index) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiListSimple {

	/**
	 * Calls a function when an item is click
	 * @param {(title: str, index: num_int, icon: str, badge: num) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Appends an item at the bottom of the list
	 * @param {obj} data A single element of the list
	 * @return {void} 
	 */
	AppendItem(data) {}

	/**
	 * Removes an item in the list
	 * @param {num_int} index 
	 * @return {void} 
	 */
	RemoveItem(index) {}

	/**
	 * Sets a new badge
	 * @param {num_int} newBadge 
	 * @param {num_int} index 
	 * @return {void} 
	 */
	SetBadge(newBadge, index) {}

	/**
	 * Sets a new title to a corresponding item
	 * @param {str} newTitle `New title text`
	 * @param {num_int} index 
	 * @return {void} 
	 */
	SetTitleText(newTitle, index) {}

	/**
	 * Returns the current list object
	 * @return {obj} 
	 */
	GetList() {}

	/**
	 * Sets a new list
	 * @param {obj} list ListSimple list
	 * @return {void} 
	 */
	SetList(list) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiMenu {

	/**
	 * Calls a function when item is click
	 * @param {(title: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnSelect(callback) {}

	/**
	 * Set a new list of options
	 * @param {lst} list A comma separated options
	 * @return {void} 
	 */
	SetList(list) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}
}


class MuiMenuWithIcon {

	/**
	 * Calls a function when item is click
	 * @param {(text: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnSelect(callback) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}
}


class MuiModal {

	/**
	 * Calls a function when control buttons are click
	 * @param {(isOkBtnClick: bin, btnText: str) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Get the layout of the modal where you can add your controls
	 * @return {DsLayout} 
	 */
	GetLayout() {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Sets a new title to the modal
	 * @param {str} title 
	 * @return {void} 
	 */
	SetTitle(title) {}

	/**
	 * Sets a new title to the modal
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetHeaderColor(color) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Called when the dialog or control has been closed
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnClose(callback) {}
}


class MuiRadio {

	/**
	 * Calls a function when the user selects an item in the list
	 * @param {(name: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnSelect(callback) {}

	/**
	 * Checks a corresponding item
	 * @param {num_int} index 
	 * @return {void} 
	 */
	CheckItemByIndex(index) {}

	/**
	 * Gets the checked item in the list
	 * @return {"title"|"index"} 
	 */
	GetCheckItem() {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get item
	 * @param {str} title 
	 * @return {obj} 
	 */
	GetItem(title) {}

	/**
	 * Get item by index
	 * @param {num} index 
	 * @return {obj} 
	 */
	GetItemByIndex(index) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get length
	 * @return {num_int} 
	 */
	GetLength() {}

	/**
	 * Get list
	 * @param {str} delim 
	 * @return {obj} 
	 */
	GetList(delim) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"List"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Insert item
	 * @param {num} index 
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {str_ptf} [image] 
	 * @return {void} 
	 */
	InsertItem(index, title, body, image) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Remove all
	 * @return {void} 
	 */
	RemoveAll() {}

	/**
	 * Remove item
	 * @param {str} title 
	 * @return {void} 
	 */
	RemoveItem(title) {}

	/**
	 * Remove item by index
	 * @param {num} index 
	 * @return {void} 
	 */
	RemoveItemByIndex(index) {}

	/**
	 * Scroll to item
	 * @param {str} title 
	 * @param {str} [body] 
	 * @return {void} 
	 */
	ScrollToItem(title, body) {}

	/**
	 * Scroll to item by index
	 * @param {num} index 
	 * @return {void} 
	 */
	ScrollToItemByIndex(index) {}

	/**
	 * Select item
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {bin} [scroll] 
	 * @return {void} 
	 */
	SelectItem(title, body, scroll) {}

	/**
	 * Select item by index
	 * @param {num} index 
	 * @param {bin} [scroll] 
	 * @return {void} 
	 */
	SelectItemByIndex(index, scroll) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set column widths
	 * @param {all} icon 
	 * @param {str} [title] 
	 * @param {str} [body] 
	 * @param {all} [mode] 
	 * @return {void} 
	 */
	SetColumnWidths(icon, title, body, mode) {}

	/**
	 * Set divider
	 * @param {num} height 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetDivider(height, color) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * Set ellipsize1
	 * @param {all} mode 
	 * @return {void} 
	 */
	SetEllipsize1(mode) {}

	/**
	 * Set ellipsize2
	 * @param {all} mode 
	 * @return {void} 
	 */
	SetEllipsize2(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set hi text color1
	 * @param {all} clr 
	 * @return {void} 
	 */
	SetHiTextColor1(clr) {}

	/**
	 * Set hi text color2
	 * @param {all} clr 
	 * @return {void} 
	 */
	SetHiTextColor2(clr) {}

	/**
	 * Set list
	 * @param {all} list 
	 * @param {str} [delim=','] 
	 * @return {void} 
	 */
	SetList(list, delim) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Set text color1
	 * @param {all} clr 
	 * @return {void} 
	 */
	SetTextColor1(clr) {}

	/**
	 * Set text color2
	 * @param {all} clr 
	 * @return {void} 
	 */
	SetTextColor2(clr) {}

	/**
	 * Set text margins
	 * @param {all} [left=0] 
	 * @param {all} [top=0] 
	 * @param {all} [right=0] 
	 * @param {all} [bottom=0] 
	 * @param {all} [mode='px'] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetTextMargins(left, top, right, bottom, mode, options) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Set text shadow1
	 * @param {num} radius 
	 * @param {num} [dx] 
	 * @param {num} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow1(radius, dx, dy, color) {}

	/**
	 * Set text shadow2
	 * @param {num} radius 
	 * @param {num} [dx] 
	 * @param {num} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow2(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Set text size1
	 * @param {all} size 
	 * @param {all} [mode='px'] 
	 * @return {void} 
	 */
	SetTextSize1(size, mode) {}

	/**
	 * Set text size2
	 * @param {all} size 
	 * @param {all} [mode='px'] 
	 * @return {void} 
	 */
	SetTextSize2(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiRadioButtons {

	/**
	 * Calls a function when the user selects an item in the list
	 * @param {(name: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnSelect(callback) {}

	/**
	 * Checks a corresponding item
	 * @param {num_int} index 
	 * @return {void} 
	 */
	CheckItemByIndex(index) {}

	/**
	 * Gets the checked item in the list
	 * @return {"title"|"index"} 
	 */
	GetCheckItem() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Show or Hide the list
	 * @return {void} 
	 */
	Toggle() {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Returns the corresponding item
	 * @param {num_int} index 
	 * @return {"title"} 
	 */
	GetItem(index) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Gets the list
	 * @return {lst} Array of titles
	 */
	GetList() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Radio"} 
	 */
	GetType() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiRadioMaterial {

	/**
	 * Calls a function when the user selects an item in the list
	 * @param {(name: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnSelect(callback) {}

	/**
	 * Checks a corresponding item
	 * @param {num_int} index 
	 * @return {void} 
	 */
	CheckItemByIndex(index) {}

	/**
	 * Gets the checked item in the list
	 * @return {"title"|"index"} 
	 */
	GetCheckItem() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Show or Hide the list
	 * @return {void} 
	 */
	Toggle() {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Returns the corresponding item
	 * @param {num_int} index 
	 * @return {"title"} 
	 */
	GetItem(index) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Gets the list
	 * @return {lst} Array of titles
	 */
	GetList() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Radio"} 
	 */
	GetType() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiSeekBar {

	/**
	 * Get the current value of the seekbar
	 * @return {num} 
	 */
	GetValue() {}

	/**
	 * Set the number of decimals to the value
	 * @param {num_int} decimals `The number of decimals`
	 * @return {void} 
	 */
	SetDecimals(decimals) {}

	/**
	 * Calls a function when the seekbar is touch
	 * @param {(value: num) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Sets a new value to the seekbar
	 * @param {num} value `Must be between 0 and range`
	 * @return {void} 
	 */
	SetValue(value) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Seekbar"} 
	 */
	GetType() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiSpinner {

	/**
	 * Calls a function when value changes
	 * @param {(value: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Select an option
	 * @param {str} value `Must be one of the provided values`
	 * @return {void} 
	 */
	SelectItem(value) {}

	/**
	 * Select an option with a given index
	 * @param {num_int} index `The index of the option in the given values`
	 * @return {void} 
	 */
	SelectItemByIndex(index) {}

	/**
	 * Sets a new list of options
	 * @param {lst} list A comma separated values for options.
	 * @return {void} 
	 */
	SetList(list) {}

	/**
	 * Sets the hint when there is no active selection
	 * @param {str} hint `The hint text.`
	 * @return {void} 
	 */
	SetHint(hint) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiSwitch {

	/**
	 * Get the current value of the switch
	 * @return {bin} 
	 */
	GetValue() {}

	/**
	 * Calls a function when switch is click
	 * @param {(value: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Sets the value of the switch
	 * @param {bin} value 
	 * @return {void} 
	 */
	SetValue(value) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Seekbar"} 
	 */
	GetType() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiSwitchSettings {

	/**
	 * Get the current value of the switch
	 * @return {bin} 
	 */
	GetValue() {}

	/**
	 * Calls a function when switch is click
	 * @param {(text: str, value: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Sets the value of the switch
	 * @param {bin} value 
	 * @return {void} 
	 */
	SetValue(value) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Seekbar"} 
	 */
	GetType() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiTabFixed {

	/**
	 * Get the corresponding layout of a given name where you can add your controls
	 * @param {str} name `The layout name`
	 * @return {DsLayout} 
	 */
	GetLayout(name) {}

	/**
	 * Open the a tab by passing an index
	 * @param {num} index 
	 * @return {void} 
	 */
	SetActiveTabByIndex(index) {}

	/**
	 * Calls a function when the tab is click
	 * @param {(name: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnSelect(callback) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Tab"} 
	 */
	GetType() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiTEFilledIconLeft {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Calls a function when icon is touch
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnIconTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}
}


class MuiTEFilledIconRight {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Calls a function when icon is touch
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnIconTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}
}


class MuiTEOutlineIconLeft {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Calls a function when icon is touch
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnIconTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}
}


class MuiTEOutlineIconRight {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Calls a function when icon is touch
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnIconTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}
}


class MuiTESearchElegant {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Define a callback function which is called when the user pressed the icon
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetIconOnTouch(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Calls a function when icon is touch
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnIconTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}
}


class MuiTESearchUnique {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Calls a function when icon is touch
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnIconTouch(callback) {}
}


class MuiTextAreaFilled {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}
}


class MuiTextAreaFilledA {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}
}


class MuiTextAreaOutline {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}
}


class MuiTextAreaOutlineA {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}
}


class MuiTextEditFilled {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}
}


class MuiTextEditFilledA {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}
}


class MuiTextEditOutline {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}
}


class MuiTextEditOutlineA {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}
}


class MuiTextEditSearch {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Calls a function when icon is touch
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnIconTouch(callback) {}
}


class MuiTextEditUnique {

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear input history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {}

	/**
	 * Get cursor position
	 * @return {void} 
	 */
	GetCursorPos() {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}
}


class MuiTextH1 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	Log(msg, options) {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 * @return {void} 
	 */
	SetLog(maxLines) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiTextH2 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	Log(msg, options) {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 * @return {void} 
	 */
	SetLog(maxLines) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiTextH3 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	Log(msg, options) {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 * @return {void} 
	 */
	SetLog(maxLines) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiTextH4 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	Log(msg, options) {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 * @return {void} 
	 */
	SetLog(maxLines) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiTextH5 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	Log(msg, options) {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 * @return {void} 
	 */
	SetLog(maxLines) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiTextH6 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	Log(msg, options) {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 * @return {void} 
	 */
	SetLog(maxLines) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiTextJumbo {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	Log(msg, options) {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 * @return {void} 
	 */
	SetLog(maxLines) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiTextParagraph {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	Log(msg, options) {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 * @return {void} 
	 */
	SetLog(maxLines) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiTextSecondary {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Data
	 * @type {obj} 
	 */
	data;

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	Log(msg, options) {}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 * @return {void} 
	 */
	SetLog(maxLines) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class MuiTimePicker {

	/**
	 * Calls a function when the user selects a time
	 * @param {(time: str, hour: num_int, minute: num_int, pos: "AM"|"PM") => void} callback 
	 * @return {void} 
	 */
	SetOnSelect(callback) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Pass texedit control to display input values
	 * @param {obj} textEdit An MUI TextEdit control
	 * @return {void} 
	 */
	SetTextEdit(textEdit) {}
}


