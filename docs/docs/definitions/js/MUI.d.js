/** @type {DsMUI} */
var MUI;
/** @typedef {MuiTextEditFilled | MuiTextEditFilledA | MuiTextEditOutline | MuiTextEditOutlineA | MuiTextEditSearch | MuiTextEditUnique} MuiTextEdit */
/** @typedef {MuiTextAreaFilled | MuiTextAreaFilledA | MuiTextAreaOutline | MuiTextAreaOutlineA} MuiTextArea */
/** @typedef {MuiTextH1 | MuiTextH2 | MuiTextH3 | MuiTextH4 | MuiTextH5 | MuiTextH6 | MuiTextJumbo | MuiTextParagraph | MuiTextSecondary} MuiText */
/** @typedef {MuiTabFixed} MuiTabs */
/** @typedef {MuiColorPicker | MuiDatePicker | MuiTimePicker} MuiPicker */
/** @typedef {MuiButtonContained | MuiButtonElegant | MuiButtonFlat | MuiButtonOutlined | MuiButtonRaised | MuiButtonRaisedO | MuiButtonRound | MuiButtonRoundO | MuiButtonText | MuiButtonToggle} MuiButton */
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
	AddAlert(text, icon, color) {return}

	/**
	 * Adds a simple alert with a single button
	 * @param {str} text `Text of the alert`
	 * @param {str} [btnText='OKAY'] `Button text.`
	 * @param {str_col} [color] 
	 * @return {MuiAlertSimple} 
	 */
	AddAlertSimple(text, btnText, color) {return}

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
	AddAppBar(parent, p1, p2, p3, options) {return}

	/**
	 * Adds an elegant appbar on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} title `Title text`
	 * @param {str} [leadingIcon] `Material icon font`
	 * @param {str_com} [options] `material icon font for the right controls`
	 * @return {MuiAppBarElegant} 
	 */
	AddAppBarElegant(parent, title, leadingIcon, options) {return}

	/**
	 * Adds a modern appbar on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} hint `Hint text for the search input`
	 * @param {str} [controlIcon] `Material font for the control icon`
	 * @param {"Round"|"Rectangle"} [options] 
	 * @param {str_col} [color] 
	 * @return {MuiAppBarModern} 
	 */
	AddAppBarModern(parent, hint, controlIcon, options, color) {return}

	/**
	 * Adds a banner dialog
	 * @param {str} text 
	 * @param {str} [okText] `Truthy button text`
	 * @param {str} [cancelText] `Falsey button text`
	 * @return {MuiBanner} 
	 */
	AddBanner(text, okText, cancelText) {return}

	/**
	 * Adds a MUI button to a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"raised"|"raisedo"|"roundo"|"round"|"elegant"|"outlined"|"contained"|"text"|"flat"} [options] 
	 * @return {MuiButton} 
	 */
	AddButton(parent, text, width, height, options) {return}

	/**
	 * Adds a contained material button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @return {MuiButtonContained} 
	 */
	AddButtonContained(parent, text, width, height) {return}

	/**
	 * Add an elegant button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @return {MuiButtonElegant} 
	 */
	AddButtonElegant(parent, text, width, height, color) {return}

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
	AddButtonFlat(parent, text, width, height, color, backColor) {return}

	/**
	 * An outlined material button
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @return {MuiButtonOutlined} 
	 */
	AddButtonOutlined(parent, text, width, height) {return}

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
	AddButtonRaised(parent, text, width, height, color, txtcolor) {return}

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
	AddButtonRaisedO(parent, text, width, height, color, backColor) {return}

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
	AddButtonRound(parent, text, width, height, color, txtcolor) {return}

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
	AddButtonRoundO(parent, text, width, height, color, backColor) {return}

	/**
	 * Adds a text button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @return {MuiButtonText} 
	 */
	AddButtonText(parent, text, width, height) {return}

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
	AddButtonToggle(parent, text, width, height, value, callback) {return}

	/**
	 * Adds a card on a given layout
	 * @param {DsLayout} parent 
	 * @param {{title: str, body: str, image: str_ptf, buttonText: str_com, color: str, width: num_frc, dividerAvatar: bin, dividerBody: bin, avatar: str_pth, avatarOnTop: bin, buttonType: "raised"|"raisedoutline"|"round"|"roundoutline"|"flat"}} [options] {title, body, image, buttonText, color, width, dividerAvatar, dividerBody, avatar, avatarOnTop, buttonType}
	 * @return {MuiCard} 
	 */
	AddCard(parent, options) {return}

	/**
	 * Adds an MUI Checkbox on a given layout
	 * @param {DsLayout} parent 
	 * @param {lst} list A comma separated string
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @return {MuiCheckbox} 
	 */
	AddCheckbox(parent, list, width, height, color) {return}

	/**
	 * Adds an MUI checklist dialog
	 * @param {DsTextEdit} parent 
	 * @param {str} title 
	 * @param {lst_obj} list An array of objects of the form {name: string, check: boolean}
	 * @param {str_col} [color] 
	 * @param {bin} [bottom] 
	 * @return {MuiCheckList} 
	 */
	AddCheckList(parent, title, list, color, bottom) {return}

	/**
	 * Creates a color picker dialog where you can select a range of MUI predefined colors
	 * @param {DsTextEdit} parent 
	 * @param {"Title"} title 
	 * @return {MuiColorPicker} 
	 */
	AddColorPicker(parent, title) {return}

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
	AddDataTable(parent, columns, values, width, height, options) {return}

	/**
	 * Adds a date picker dialog
	 * @param {DsTextEdit} parent 
	 * @param {num_int} [yyyy] `Full year`
	 * @param {num_int} [mm] [0-11]
	 * @param {num_int} [dd] [1-31]
	 * @param {str_col} [color] 
	 * @return {MuiDatePicker} 
	 */
	AddDatePicker(parent, yyyy, mm, dd, color) {return}

	/**
	 * Adds a customizable materialize dialog
	 * @param {"Title"} title 
	 * @param {str} body `Body text`
	 * @param {str} [okText] `Truthy button text`
	 * @param {str} [cancelText] `Falsey button text`
	 * @param {bin} [divider] `Show divider or hide`
	 * @return {MuiDialog} 
	 */
	AddDialog(title, body, okText, cancelText, divider) {return}

	/**
	 * Adds a divider to a given layout
	 * @param {DsLayout} parent 
	 * @param {num_pxl} [height] 
	 * @return {MuiDivider} 
	 */
	AddDivider(parent, height) {return}

	/**
	 * Adds a floating action button
	 * @param {DsLayout} parent 
	 * @param {str} [icon] `Material icon fonts`
	 * @param {str_col} [color] 
	 * @param {string | ("outline"|"elegant"|"default")[]} [options] 
	 * @return {MuiFAB} 
	 */
	AddFAB(parent, icon, color, options) {return}

	/**
	 * Adds an elegant floating action button
	 * @param {DsLayout} parent 
	 * @param {str} [icon] `Material icon fonts`
	 * @param {str_col} [color] 
	 * @return {MuiFABElegant} 
	 */
	AddFABElegant(parent, icon, color) {return}

	/**
	 * Adds an outlined floating action button on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} [icon] `Material icon font`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiFABOutline} 
	 */
	AddFABOutline(parent, icon, color, backColor) {return}

	/**
	 * Adds a layout
	 * @param {DsLayout} parent 
	 * @param {"Linear"|"Absolute"|"Frame"|"Card"} type 
	 * @param {str} [options] `Comma separated DroidScript layout options`
	 * @return {DsLayout} 
	 */
	AddLayout(parent, type, options) {return}

	/**
	 * Adds an MUI control on a given layout
	 * @param {DsLayout} parent 
	 * @param {str} list 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {string | ("simple"|"modern"|"default"|"divider")[]} [options] 
	 * @return {MuiList} 
	 */
	AddList(parent, list, width, height, options) {return}

	/**
	 * Adds a more customizable list dialog or checklist dialog
	 * @param {DsTextEdit} parent 
	 * @param {str} title 
	 * @param {lst} list An array of objects
	 * @param {str_col} [color] 
	 * @param {string | ("CheckList"|"ListDialog"|"Bottom")[]} [options] 
	 * @return {MuiListDialog} 
	 */
	AddListDialog(parent, title, list, color, options) {return}

	/**
	 * Adds a ListModern control on a given layout
	 * @param {DsLayout} parent 
	 * @param {lst} list An array of object elements. See list example
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"Initial"|"Material"|"Avatar"|"RightIcon"|"RightNote"|"Selectable"} [options] 
	 * @return {MuiListModern} 
	 */
	AddListModern(parent, list, width, height, options) {return}

	/**
	 * Adds a simple list for navigation purposes
	 * @param {DsLayout} parent 
	 * @param {{ title: str, icon: str, color: str_col, badge: num }} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"Divider"} [options] 
	 * @return {MuiListSimple} 
	 */
	AddListSimple(parent, list, width, height, options) {return}

	/**
	 * Adds a simple menu
	 * @param {string | ("list")[]} list 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {"Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"} [position] 
	 * @return {MuiMenu} 
	 */
	AddMenu(list, width, height, position) {return}

	/**
	 * MUI menu with material icon font
	 * @param {str} list 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {"Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"} [position] 
	 * @return {MuiMenuWithIcon} 
	 */
	AddMenuWithIcon(list, width, height, position) {return}

	/**
	 * Adds a modal
	 * @param {str} title 
	 * @param {str} [body] `Body text. If you want to customize the modal layout pass an empty string.`
	 * @param {str} [okTxt] `Truthy button text`
	 * @param {str} [cancelTxt] `Falsy button text`
	 * @param {str} [options] `Dialog options`, `Full`
	 * @return {MuiModal} 
	 */
	AddModal(title, body, okTxt, cancelTxt, options) {return}

	/**
	 * Adds a picker dialog such as time, date or color
	 * @param {DsTextEdit} parent 
	 * @param {"Date"|"Color"|"Time"} [options] 
	 * @return {MuiPicker} 
	 */
	AddPicker(parent, options) {return}

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
	AddRadio(parent, list, width, height, options, p1, color, backColor) {return}

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
	AddRadioButtons(parent, list, width, height, orientation, color, backColor) {return}

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
	AddRadioMaterial(parent, list, width, height, orientation, color, backColor) {return}

	/**
	 * Adds an MUI basic seekbar
	 * @param {DsLayout} parent 
	 * @param {num} value `Must be between 0 and range`
	 * @param {num} range `The maximum value of your seekbar`
	 * @param {num} width 
	 * @param {str_col} [color] 
	 * @return {MuiSeekBar} 
	 */
	AddSeekBar(parent, value, range, width, color) {return}

	/**
	 * Adds an MUI Switch to a given control
	 * @param {DsLayout} parent 
	 * @param {bin} value 
	 * @param {str_col} [color] 
	 * @return {MuiSwitch} 
	 */
	AddSwitch(parent, value, color) {return}

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
	AddSwitchSettings(parent, text, width, height, value, color, backColor) {return}

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
	AddTabs(parent, title, width, height, options, color, animation) {return}

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
	AddTEFilledIconLeft(parent, width, options, icon, hint, label, color) {return}

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
	AddTEFilledIconRight(parent, width, options, icon, hint, label, color) {return}

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
	AddTEOutlineIconLeft(parent, width, options, icon, hint, label, color, backColor) {return}

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
	AddTEOutlineIconRight(parent, width, options, icon, hint, label, color, backColor) {return}

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
	AddTESearchElegant(parent, width, hint, icon, iconPos, color, option) {return}

	/**
	 * Creates a unique text input
	 * @param {DsLayout} parent 
	 * @param {num} width 
	 * @param {str} [hint] `Hint text`
	 * @param {str} [icon] `Material icon font`
	 * @param {str_col} [iconColor] 
	 * @return {MuiTESearchUnique} 
	 */
	AddTESearchUnique(parent, width, hint, icon, iconColor) {return}

	/**
	 * Adds a mui text control to the layout
	 * @param {DsLayout} parent 
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str_com} [options] `DS text options`, `Thin`, `Light`, `Regular`, `Medium`, `Bold`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `secondary`, `jumbo`, `paragraph`
	 * @param {str_col} [color] 
	 * @return {MuiText} 
	 */
	AddText(parent, text, width, height, options, color) {return}

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
	AddTextArea(parent, width, height, options, hint, label, color, backColor) {return}

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
	AddTextAreaFilled(parent, width, height, hint, label, color) {return}

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
	AddTextAreaFilledA(parent, width, height, hint, label, color) {return}

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
	AddTextAreaOutline(parent, width, height, hint, label, color, backColor) {return}

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
	AddTextAreaOutlineA(parent, width, height, hint, label, color, backColor) {return}

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
	AddTextEdit(parent, width, options, p1, p2, p3, p4, p5) {return}

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
	AddTextEditFilled(parent, width, options, hint, label, color) {return}

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
	AddTextEditFilledA(parent, width, options, hint, label, color) {return}

	/**
	 * Adds an outlined material text input
	 * @param {DsLayout} parent 
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`, `Round`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @return {MuiTextEditOutline} 
	 */
	AddTextEditOutline(parent, width, options, hint, label) {return}

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
	AddTextEditOutlineA(parent, width, options, hint, label, color, backColor) {return}

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
	AddTextEditSearch(parent, width, options, hint, label, backColor) {return}

	/**
	 * Adds a unique textedit customization
	 * @param {DsLayout} parent 
	 * @param {num} [width] 
	 * @param {str} [hint] `Hint text`
	 * @param {str} [icon] `Material icon font`
	 * @param {str_col} [iconColor] `Icon color`
	 * @return {MuiTextEditUnique} 
	 */
	AddTextEditUnique(parent, width, hint, icon, iconColor) {return}

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
	AddTextH1(parent, text, width, height, options, color, fontWeight) {return}

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
	AddTextH2(parent, text, width, height, options, color, fontWeight) {return}

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
	AddTextH3(parent, text, width, height, options, color, fontWeight) {return}

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
	AddTextH4(parent, text, width, height, options, color, fontWeight) {return}

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
	AddTextH5(parent, text, width, height, options, color, fontWeight) {return}

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
	AddTextH6(parent, text, width, height, options, color, fontWeight) {return}

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
	AddTextJumbo(parent, text, width, height, options, color) {return}

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
	AddTextParagraph(parent, text, width, height, options, color, fontWeight) {return}

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
	AddTextSecondary(parent, text, width, height, options, color, fontWeight) {return}

	/**
	 * Adds a time picker
	 * @param {DsTextEdit} parent 
	 * @param {num} [hour] [0-24]
	 * @param {num} [minute] 0-59
	 * @param {str_col} [color] 
	 * @return {MuiTimePicker} 
	 */
	AddTimePicker(parent, hour, minute, color) {return}

	/** @type {obj} MUI colors are accessible through the **colors** property of the MUI object */
	colors;

	/**
	 * A nice pop-up at the top of your current layout
	 * @param {str} text `Popup text`
	 * @param {str} [icon] `Material icon`
	 * @param {str_col} [color] 
	 * @return {MuiAlert} 
	 */
	CreateAlert(text, icon, color) {return}

	/**
	 * Create a simple alert with a single button
	 * @param {str} text `Text of the alert`
	 * @param {str} [btnText='OKAY'] `Button text.`
	 * @param {str_col} [color] 
	 * @return {MuiAlertSimple} 
	 */
	CreateAlertSimple(text, btnText, color) {return}

	/**
	 * The most common type of material design app bar
	 * @param {str} title `Title text`
	 * @param {str} [leadingIcon] `A material font icon for the leading control`
	 * @param {str_com} [controls] `material icon font for the right controls`
	 * @return {MuiAppBar} 
	 */
	CreateAppBar(title, leadingIcon, controls) {return}

	/**
	 * A more elegant appbar implementation
	 * @param {str} title `Title text`
	 * @param {str} [leadingIcon] `Material icon font`
	 * @param {str_com} [options] `material icon font for the right controls`
	 * @return {MuiAppBarElegant} 
	 */
	CreateAppBarElegant(title, leadingIcon, options) {return}

	/**
	 * A modern appbar with a search input, leading icon and trailing icon
	 * @param {str} [hint] `Hint text for the search input`
	 * @param {str} [controlIcon] `Material font for the control icon`
	 * @param {"Round"|"Rectangle"} [options] 
	 * @param {str_col} [color] 
	 * @return {MuiAppBarModern} 
	 */
	CreateAppBarModern(hint, controlIcon, options, color) {return}

	/**
	 * A banner dialog is a nice popup that slides from the top of your current page
	 * @param {str} text 
	 * @param {str} [okText] `Truthy button text`
	 * @param {str} [cancelText] `Falsey button text`
	 * @return {MuiBanner} 
	 */
	CreateBanner(text, okText, cancelText) {return}

	/**
	 * An contained material button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @return {MuiButtonContained} 
	 */
	CreateButtonContained(text, width, height) {return}

	/**
	 * An elegant button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @return {MuiButtonElegant} 
	 */
	CreateButtonElegant(text, width, height, color) {return}

	/**
	 * Just a flat button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiButtonFlat} 
	 */
	CreateButtonFlat(text, width, height, color, backColor) {return}

	/**
	 * An outlined material button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str} [options] 
	 * @return {MuiButtonOutlined} 
	 */
	CreateButtonOutlined(text, width, height, options) {return}

	/**
	 * The basic type of material button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [txtcolor] 
	 * @return {MuiButtonRaised} 
	 */
	CreateButtonRaised(text, width, height, color, txtcolor) {return}

	/**
	 * An outlined material raised button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiButtonRaisedO} 
	 */
	CreateButtonRaisedO(text, width, height, color, backColor) {return}

	/**
	 * A round material button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [textColor] 
	 * @return {MuiButtonRound} 
	 */
	CreateButtonRound(text, width, height, color, textColor) {return}

	/**
	 * An outlined material round button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiButtonRoundO} 
	 */
	CreateButtonRoundO(text, width, height, color, backColor) {return}

	/**
	 * Adds a text button
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str} [options] 
	 * @return {MuiButtonText} 
	 */
	CreateButtonText(text, width, height, options) {return}

	/**
	 * Create button toggle
	 * @param {str} text 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {bin} [value] 
	 * @param {(this: MuiButtonToggle) => void} [callback] 
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiButtonToggle} 
	 */
	CreateButtonToggle(text, width, height, value, callback, color, backColor) {return}

	/**
	 * A material implementation of a card
	 * @param {{title: str, body: str, image: str_ptf, buttonText: str_com, color: str, width: num_frc, dividerAvatar: bin, dividerBody: bin, avatar: str_pth, avatarOnTop: bin, buttonType: "raised"|"raisedoutline"|"round"|"roundoutline"|"flat"}} [options] {title, body, image, buttonText, color, width, dividerAvatar, dividerBody, avatar, avatarOnTop, buttonType}
	 * @return {MuiCard} 
	 */
	CreateCard(options) {return}

	/**
	 * Checkbox is a powerful control when you want the user to select multiple items in a group
	 * @param {lst} list A comma separated string
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_col} [color] 
	 * @return {MuiCheckbox} 
	 */
	CreateCheckbox(list, width, height, color) {return}

	/**
	 * Check list is a dialog type checkbox list
	 * @param {str} title 
	 * @param {lst_obj} list An array of objects of the form {name: string, check: boolean}
	 * @param {str_col} [color] 
	 * @param {bin} [bottom] 
	 * @return {MuiCheckList} 
	 */
	CreateCheckList(title, list, color, bottom) {return}

	/**
	 * Creates a color picker dialog where you can select a range of MUI predefined colors
	 * @param {str} title 
	 * @return {MuiColorPicker} 
	 */
	CreateColorPicker(title) {return}

	/**
	 * Creates a new DataTable Control
	 * @param {lst} columns An array of strings of the form Name:Type for column header. Where 'Name' is the column name and 'Type is the column type [Can be Sortable or Numeric]'
	 * @param {lst} values An array of strings of the form Val1:Val2:Val3...
	 * @param {num} [width=-1] `Fraction of the screen width`
	 * @param {num} [height=-1] `Fraction of the screen height`
	 * @param {string | ("Selectable")[]} [options] 
	 * @return {MuiDataTable} 
	 */
	CreateDataTable(columns, values, width, height, options) {return}

	/**
	 * Creates a materialize date picker dialog
	 * @param {num_int} [yyyy] `Full year`
	 * @param {num_int} [mm] [0-11]
	 * @param {num_int} [dd] [1-31]
	 * @param {str_col} [color] 
	 * @return {MuiDatePicker} 
	 */
	CreateDatePicker(yyyy, mm, dd, color) {return}

	/**
	 * Creates a customizable materialize dialog
	 * @param {"Title"} title 
	 * @param {str} [body] `Body text`
	 * @param {str} [okText] `Truthy button text`
	 * @param {str} [cancelText] `Falsey button text`
	 * @param {bin} [divider] `Show divider or hide`
	 * @return {MuiDialog} 
	 */
	CreateDialog(title, body, okText, cancelText, divider) {return}

	/**
	 * Creates a divider which you can add to your layout
	 * @param {num_pxl} [height] 
	 * @return {MuiDivider} 
	 */
	CreateDivider(height) {return}

	/**
	 * Creates a floating action button
	 * @param {str} icon `Material icon fonts`
	 * @param {str_col} [color] 
	 * @return {MuiFAB} 
	 */
	CreateFAB(icon, color) {return}

	/**
	 * An elegant floating action button
	 * @param {str} icon `Material icon fonts`
	 * @param {str_col} [color] 
	 * @return {MuiFABElegant} 
	 */
	CreateFABElegant(icon, color) {return}

	/**
	 * Creates an outlined floating action button
	 * @param {str} icon `Material icon font`
	 * @param {str_col} [color] 
	 * @param {str_col} [backColor] 
	 * @return {MuiFABOutline} 
	 */
	CreateFABOutline(icon, color, backColor) {return}

	/**
	 * It is just the **CreateLayout** method of DroidScript with predefined values on background color just to be consistent on MUI theming
	 * @param {"Linear"|"Absolute"|"Frame"|"Card"} type 
	 * @param {str} [options] `Comma separated DroidScript layout options`
	 * @return {DsLayout} 
	 */
	CreateLayout(type, options) {return}

	/**
	 * A manipulation of the DroidScript list object
	 * @param {str} list 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] 
	 * @return {MuiList} 
	 */
	CreateList(list, width, height, options) {return}

	/**
	 * Creates a more customizable list dialog
	 * @param {str} title 
	 * @param {lst_obj} list An array of objects of the form {name: 'string', icon: 'material-icon', color: 'string'}
	 * @param {str_col} [color] 
	 * @param {bin} [bottom] 
	 * @return {MuiListDialog} 
	 */
	CreateListDialog(title, list, color, bottom) {return}

	/**
	 * A modern implementation of list using the available controls of DroidScript
	 * @param {lst} list An array of object elements. See list example
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"Initial"|"Material"|"Avatar"|"RightIcon"|"RightNote"|"Selectable"} [options] 
	 * @return {MuiListModern} 
	 */
	CreateListModern(list, width, height, options) {return}

	/**
	 * Creates a simple list that has an optional badge and icon with no body text
	 * @param {{ title: str, icon: str, color: str_col, badge: num }} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"Divider"} [options] 
	 * @return {MuiListSimple} 
	 */
	CreateListSimple(list, width, height, options) {return}

	/**
	 * Creates a simple menu
	 * @param {string | ("list")[]} list 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {"Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"} [position] 
	 * @return {MuiMenu} 
	 */
	CreateMenu(list, width, height, position) {return}

	/**
	 * Advance MUI implementation of material design menu with additional icon using material icon font
	 * @param {str} list 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 * @param {"Top"|"Left"|"Top"|"Right"|"Bottom"|"Left"|"Bottom"|"Right"} [position] 
	 * @return {MuiMenuWithIcon} 
	 */
	CreateMenuWithIcon(list, width, height, position) {return}

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
	CreateModal(title, body, okTxt, cancelTxt, show, options) {return}

	/**
	 * Creates a radio control. A radio control allows the user to select only one item in a list
	 * @param {string | ("strings")[]} list 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str_col} [color] 
	 * @return {MuiRadio} 
	 */
	CreateRadio(list, width, height, color) {return}

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
	CreateRadioButtons(list, width, height, orientation, color, backColor) {return}

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
	CreateRadioMaterial(list, width, height, orientation, color, backColor) {return}

	/**
	 * An MUI implementation of a basic seekbar
	 * @param {num} value `Must be between 0 and range`
	 * @param {num} [range=100] `The maximum value of your seekbar`
	 * @param {num} [width] 
	 * @param {str_col} [color] 
	 * @return {MuiSeekBar} 
	 */
	CreateSeekBar(value, range, width, color) {return}

	/**
	 * Creates a material designed dropdown or spinner
	 * @param {lst} list String. A comma separated options
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @return {MuiSpinner} 
	 */
	CreateSpinner(list, width, height) {return}

	/**
	 * Creates a switch that can be toggled on and off
	 * @param {bin} value 
	 * @param {str_col} [color] 
	 * @return {MuiSwitch} 
	 */
	CreateSwitch(value, color) {return}

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
	CreateSwitchSettings(text, width, height, value, color, backColor) {return}

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
	CreateTabFixed(title, width, height, options, color, animation) {return}

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
	CreateTEFilledIconLeft(width, options, icon, hint, label, color) {return}

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
	CreateTEFilledIconRight(width, options, icon, hint, label, color) {return}

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
	CreateTEOutlineIconLeft(width, options, icon, hint, label, color, backColor) {return}

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
	CreateTEOutlineIconRight(width, options, icon, hint, label, color, backColor) {return}

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
	CreateTESearchElegant(width, hint, icon, iconPos, color, option) {return}

	/**
	 * Creates a unique text input
	 * @param {num} [width] 
	 * @param {str} [hint] `Hint text`
	 * @param {str} [icon] `Material icon font`
	 * @param {str_col} [iconColor] 
	 * @return {MuiTESearchUnique} 
	 */
	CreateTESearchUnique(width, hint, icon, iconColor) {return}

	/**
	 * Creates a material filled textarea
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [hint] `Hint text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTextAreaFilled} 
	 */
	CreateTextAreaFilled(width, height, hint, label, color) {return}

	/**
	 * Creates an active filled textarea
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Hides or show label`
	 * @param {str_col} [color] 
	 * @return {MuiTextAreaFilledA} 
	 */
	CreateTextAreaFilledA(width, height, hint, label, color) {return}

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
	CreateTextAreaOutline(width, height, hint, label, color, backColor) {return}

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
	CreateTextAreaOutlineA(width, height, hint, label, color, backColor) {return}

	/**
	 * Creates the most common type of material text input
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTextEditFilled} 
	 */
	CreateTextEditFilled(width, options, hint, label, color) {return}

	/**
	 * Creates an active filled material text input
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`
	 * @param {str} [hint] `Hint`, `Label text`
	 * @param {bin} [label] `Show or hide label`
	 * @param {str_col} [color] 
	 * @return {MuiTextEditFilledA} 
	 */
	CreateTextEditFilledA(width, options, hint, label, color) {return}

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
	CreateTextEditOutline(width, options, hint, label, color, backColor) {return}

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
	CreateTextEditOutlineA(width, options, hint, label, color, backColor) {return}

	/**
	 * Creates a customize search style text input
	 * @param {num} [width] 
	 * @param {str} [options] `DS TextEdit options`
	 * @param {str} [hint] `Hint text`
	 * @param {str_col} [label] 
	 * @param {str_col} [backColor] 
	 * @return {MuiTextEditSearch} 
	 */
	CreateTextEditSearch(width, options, hint, label, backColor) {return}

	/**
	 * Creates a unique textedit customization
	 * @param {num} [width] 
	 * @param {str} [hint] `Hint text`
	 * @param {str} [icon] `Material icon font`
	 * @param {str_col} [iconColor] `Icon color`
	 * @return {MuiTextEditUnique} 
	 */
	CreateTextEditUnique(width, hint, icon, iconColor) {return}

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
	CreateTextH1(text, width, height, options, color, fontWeight) {return}

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
	CreateTextH2(text, width, height, options, color, fontWeight) {return}

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
	CreateTextH3(text, width, height, options, color, fontWeight) {return}

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
	CreateTextH4(text, width, height, options, color, fontWeight) {return}

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
	CreateTextH5(text, width, height, options, color, fontWeight) {return}

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
	CreateTextH6(text, width, height, options, color, fontWeight) {return}

	/**
	 * Creates an extra large text
	 * @param {str} text 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {str} [options] `DS text options`
	 * @param {str_col} [color] 
	 * @return {MuiTextJumbo} 
	 */
	CreateTextJumbo(text, width, height, options, color) {return}

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
	CreateTextParagraph(text, width, height, options, color, fontWeight) {return}

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
	CreateTextSecondary(text, width, height, options, color, fontWeight) {return}

	/**
	 * Creates a material design time picker
	 * @param {num} [hour] [0-24]
	 * @param {num} [minute] 0-59
	 * @param {str_col} [color] 
	 * @return {MuiTimePicker} 
	 */
	CreateTimePicker(hour, minute, color) {return}

	/** @type {obj} MUI uses the free Roboto font family downloaded from <a href='www.fonts.google.com'>Google Fonts</a> as its main font for all of the controls */
	fonts;

	/**
	 * Show a menu on a given control
	 * @param {dso} control 
	 * @param {str_lst} list 
	 * @param {num_frc} [width] 
	 * @return {MuiMenu} 
	 */
	ShowMenu(control, list, width) {return}

}

class MuiAlert {

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Calls a function when alert is close
	 * @param {(this: MuiAlert, isBtnClick: bin) => void} callback 
	 */
	SetOnClose(callback) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}
}


class MuiAlertSimple {

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Calls a function when button is click
	 * @param {(this: MuiAlertSimple, isBtnClick: bin) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}
}


class MuiAppBar {

	/**
	 * Sets a new heading icon
	 * @param {str} newIcon `New material icon font`
	 */
	SetMenuIcon(newIcon) {return}

	/**
	 * Change the color of the heading icon
	 * @param {str_col} newColor `New color of the heading icon`
	 */
	SetMenuIconColor(newColor) {return}

	/**
	 * Calls a function when the right controls are click
	 * @param {(this: MuiAppBar, btnTxt: str, index: num_int) => void} callback 
	 */
	SetOnControlTouch(callback) {return}

	/**
	 * Calls a function when the heading icon is click
	 * @param {(this: MuiAppBar) => void} callback 
	 */
	SetOnMenuTouch(callback) {return}

	/**
	 * Sets a new title
	 * @param {str} newTitle `New title text`
	 */
	SetTitleText(newTitle) {return}

	/**
	 * Change the color of the title
	 * @param {str_col} newColor 
	 */
	SetTitleTextColor(newColor) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiAppBar) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiAppBarElegant {

	/**
	 * Sets a new heading icon
	 * @param {str} newIcon `New material icon font`
	 */
	SetMenuIcon(newIcon) {return}

	/**
	 * Change the color of the heading icon
	 * @param {str_col} newColor `New color of the heading icon`
	 */
	SetMenuIconColor(newColor) {return}

	/**
	 * Calls a function when the right controls are click
	 * @param {(this: MuiAppBarElegant, btnTxt: str, index: num_int) => void} callback 
	 */
	SetOnControlTouch(callback) {return}

	/**
	 * Calls a function when the heading icon is click
	 * @param {(this: MuiAppBarElegant) => void} callback 
	 */
	SetOnMenuTouch(callback) {return}

	/**
	 * Sets a new title
	 * @param {str} newTitle `New title text`
	 */
	SetTitleText(newTitle) {return}

	/**
	 * Change the color of the title
	 * @param {str_col} newColor 
	 */
	SetTitleTextColor(newColor) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiAppBarElegant) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiAppBarModern {

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Calls a function when right control is touch
	 * @param {(this: MuiAppBarModern) => void} callback 
	 */
	SetOnControlTouch(callback) {return}

	/**
	 * Call a function when the menu icon is touch
	 * @param {(this: MuiAppBarModern) => void} callback 
	 */
	SetOnMenuTouch(callback) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor pos
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiAppBarModern) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard (line can still be inserted via Shift+Enter)
	 * @param {(this: MuiAppBarModern) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Define a callback function which is called when the user focuses the control
	 * @param {(this: MuiAppBarModern) => void} callback 
	 */
	SetOnFocus(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}
}


class MuiBanner {

	/**
	 * Calls a function when buttons are click (prev
	 * @param {(this: MuiBanner, isOk: bin, btnText: str) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/** Hides the control visually */
	Hide() {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Called when the dialog or control has been closed
	 * @param {(this: MuiBanner) => void} callback 
	 */
	SetOnClose(callback) {return}
}


class MuiButtonContained {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiButtonContained, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiButtonContained, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiButtonContained) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiButtonContained) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiButtonElegant {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiButtonElegant, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiButtonElegant, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiButtonElegant) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiButtonElegant) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 */
	SetColor(color, backColor) {return}
}


class MuiButtonFlat {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiButtonFlat, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiButtonFlat, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiButtonFlat) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiButtonFlat) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiButtonOutlined {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiButtonOutlined, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiButtonOutlined, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiButtonOutlined) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiButtonOutlined) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiButtonRaised {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiButtonRaised, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiButtonRaised, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiButtonRaised) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiButtonRaised) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 */
	SetColor(color, backColor) {return}
}


class MuiButtonRaisedO {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiButtonRaisedO, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiButtonRaisedO, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiButtonRaisedO) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiButtonRaisedO) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 */
	SetColor(color, backColor) {return}
}


class MuiButtonRound {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiButtonRound, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiButtonRound, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiButtonRound) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiButtonRound) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 */
	SetColor(color, backColor) {return}
}


class MuiButtonRoundO {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiButtonRoundO, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiButtonRoundO, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiButtonRoundO) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiButtonRoundO) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 */
	SetColor(color, backColor) {return}
}


class MuiButtonText {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiButtonText, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiButtonText, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiButtonText) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiButtonText) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiButtonToggle {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiButtonToggle, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiButtonToggle, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiButtonToggle) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 */
	SetColor(color, backColor) {return}
}


class MuiCard {

	/**
	 * Calls a function when buttons are click
	 * @param {(this: MuiCard, btnText: str, cardName: str) => void} callback 
	 */
	SetOnButtonTouch(callback) {return}

	/**
	 * Calls a function when the image is click
	 * @param {(this: MuiCard, cardName: str) => void} callback 
	 */
	SetOnImageTouch(callback) {return}

	/**
	 * Calls a function when avatar is click
	 * @param {(this: MuiCard, cardName: str) => void} callback 
	 */
	SetOnAvatarTouch(callback) {return}

	/**
	 * Calls a function when title item is click
	 * @param {(this: MuiCard, title: str, cardName: str) => void} callback 
	 */
	SetOnTitleTouch(callback) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiCard) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiCheckbox {

	/**
	 * Calls a function when the checkbox is click
	 * @param {(this: MuiCheckbox, index: num_int, checked: bin) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Get the check items in the list
	 * @return {lst} List of indexes for slected items
	 */
	GetCheckItem() {return}

	/**
	 * Checks the corresponding item/items in the checkbox list
	 * @param {num_int} index `You can also pass an array of indexes e.g. [1`, ` 3]`
	 */
	CheckItemByIndex(index) {return}

	/**
	 * Unchecks the corresponding item/items in the checkbox list
	 * @param {num_int} index `You can also pass an array of indexes e.g. [1`, ` 3]`
	 */
	UncheckItemByIndex(index) {return}

	/**
	 * Change the height of the control
	 * @param {num} height `Fraction of the screen height`
	 */
	SetHeight(height) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiCheckbox) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiCheckList {

	/**
	 * Calls a function when the checklist is submitted
	 * @param {(this: MuiCheckList, lst: lst) => void} callback 
	 */
	SetOnSubmit(callback) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Change the height of the control
	 * @param {num} height `Fraction of the screen height`
	 */
	SetHeight(height) {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Pass texedit control to display input values
	 * @param {obj} textEdit An MUI TextEdit control
	 */
	SetTextEdit(textEdit) {return}
}


class MuiColorPicker {

	/**
	 * Calls a function when a user click the OK button
	 * @param {(this: MuiColorPicker, color?: str_col) => void} callback 
	 */
	SetOnSelect(callback) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Pass texedit control to display input values
	 * @param {obj} textEdit An MUI TextEdit control
	 */
	SetTextEdit(textEdit) {return}
}


class MuiDataTable {

	/**
	 * Append a row to the table
	 * @param {str} row `A colon ':' separated entries for the new row.`
	 */
	AppendRow(row) {return}

	/**
	 * Prepend a row to the table
	 * @param {str} row `A colon ':' separated entries for the new row.`
	 */
	PrependRow(row) {return}

	/**
	 * Remove a row at a given index or indexes
	 * @param {lst} index An array of indexes you want to remove. It can also be just a number for a single index.
	 */
	RemoveRows(index) {return}

	/**
	 * Get the selected rows
	 * @param {(this: MuiDataTable, indexes: lst) => void} callback 
	 */
	GetSelectedRows(callback) {return}

	/**
	 * Calls a function when the selection status of the table changes
	 * @param {(this: MuiDataTable, isTrue: bin) => void} callback 
	 */
	SetOnSelectionStatus(callback) {return}

	/**
	 * Calls a function when a row in the table is click
	 * @param {(this: MuiDataTable, row: str, index: num_int) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Calls a function when the Table is ready and rendered already
	 * @param {(this: MuiDataTable) => void} callback 
	 */
	SetOnReady(callback) {return}

	/**
	 * Calls a function when the Table is on progress
	 * @param {(this: MuiDataTable, value: num) => void} callback 
	 */
	SetOnProgress(callback) {return}

	/**
	 * Set the rows of the table to a new values of data
	 * @param {lst} values A comma separated strings of the form "Val1:Val2:Val3:..."
	 */
	SetRows(values) {return}

	/**
	 * Add a footer layout to the table where you can add controls
	 * @param {str} type `Type of layout. Can be Linear`, `Absolute`, `Frame. Default to Linear`
	 * @param {str} [options] `A comma separated layout options. Default to Horizontal`, `Right`, `VCenter`
	 * @param {num} [height] `A fraction of the screen height.`
	 * @return {DsLayout} 
	 */
	AddFooter(type, options, height) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiDataTable) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiDatePicker {

	/**
	 * Calls a function when a user click the OK button
	 * @param {(this: MuiDatePicker, date: str, yyyy: num_int, mm: num_int, dd: num_int) => void} callback 
	 */
	SetOnSelect(callback) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Pass texedit control to display input values
	 * @param {obj} textEdit An MUI TextEdit control
	 */
	SetTextEdit(textEdit) {return}
}


class MuiDialog {

	/**
	 * Calls a function when buttons are click (prev
	 * @param {(this: MuiDialog, isOk: bin, btnText: str) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Sets a new title text
	 * @param {str} newTitle `New title text`
	 */
	SetTitle(newTitle) {return}

	/**
	 * Change the color of the title text
	 * @param {str_col} color 
	 */
	SetTitleColor(color) {return}

	/** Hides the control visually */
	Hide() {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Called when the dialog or control has been closed
	 * @param {(this: MuiDialog) => void} callback 
	 */
	SetOnClose(callback) {return}
}


class MuiDivider {

	/** Set the visibility to “Show” */
	Show() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}
}


class MuiFAB {

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiFAB, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiFAB) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Sets a new material icon
	 * @param {str} icon `Material icon font`
	 */
	SetIcon(icon) {return}

	/**
	 * Sets the text color
	 * @param {str_col} [color] 
	 */
	SetIconColor(color) {return}

	/**
	 * Returns the icon
	 * @return {str} `Material icon font`
	 */
	GetIcon() {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiFAB, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiFAB) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 */
	SetColor(color, backColor) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}
}


class MuiFABElegant {

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiFABElegant, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiFABElegant) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Sets a new material icon
	 * @param {str} icon `Material icon font`
	 */
	SetIcon(icon) {return}

	/**
	 * Sets the text color
	 * @param {str_col} [color] 
	 */
	SetIconColor(color) {return}

	/**
	 * Returns the icon
	 * @return {str} `Material icon font`
	 */
	GetIcon() {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiFABElegant, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiFABElegant) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 */
	SetColor(color, backColor) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}
}


class MuiFABOutline {

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiFABOutline, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiFABOutline) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Sets a new material icon
	 * @param {str} icon `Material icon font`
	 */
	SetIcon(icon) {return}

	/**
	 * Sets the text color
	 * @param {str_col} [color] 
	 */
	SetIconColor(color) {return}

	/**
	 * Returns the icon
	 * @return {str} `Material icon font`
	 */
	GetIcon() {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiFABOutline, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiFABOutline) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/**
	 * Change the color of the control
	 * @param {str_col} color 
	 * @param {str_col} backColor 
	 */
	SetColor(color, backColor) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}
}


class MuiList {

	/**
	 * Add item
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {str_ptf} [image] 
	 */
	AddItem(title, body, image) {return}

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiList, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get item
	 * @param {str} title 
	 * @return {obj} 
	 */
	GetItem(title) {return}

	/**
	 * Get item by index
	 * @param {num} index 
	 * @return {obj} 
	 */
	GetItemByIndex(index) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get length
	 * @return {num_int} 
	 */
	GetLength() {return}

	/**
	 * Get list
	 * @param {str} delim 
	 * @return {obj} 
	 */
	GetList(delim) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"List"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Insert item
	 * @param {num} index 
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {str_ptf} [image] 
	 */
	InsertItem(index, title, body, image) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/** Remove all */
	RemoveAll() {return}

	/**
	 * Remove item
	 * @param {str} title 
	 */
	RemoveItem(title) {return}

	/**
	 * Remove item by index
	 * @param {num} index 
	 */
	RemoveItemByIndex(index) {return}

	/**
	 * Scroll to item
	 * @param {str} title 
	 * @param {str} [body] 
	 */
	ScrollToItem(title, body) {return}

	/**
	 * Scroll to item by index
	 * @param {num} index 
	 */
	ScrollToItemByIndex(index) {return}

	/**
	 * Select item
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {bin} [scroll=false] 
	 */
	SelectItem(title, body, scroll) {return}

	/**
	 * Select item by index
	 * @param {num} index 
	 * @param {bin} [scroll] 
	 */
	SelectItemByIndex(index, scroll) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set column widths
	 * @param {all} icon 
	 * @param {str} [title] 
	 * @param {str} [body] 
	 * @param {all} [mode] 
	 */
	SetColumnWidths(icon, title, body, mode) {return}

	/**
	 * Set divider
	 * @param {num} height 
	 * @param {str_col} [color] 
	 */
	SetDivider(height, color) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * Set ellipsize1
	 * @param {all} mode 
	 */
	SetEllipsize1(mode) {return}

	/**
	 * Set ellipsize2
	 * @param {all} mode 
	 */
	SetEllipsize2(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set hi text color1
	 * @param {all} clr 
	 */
	SetHiTextColor1(clr) {return}

	/**
	 * Set hi text color2
	 * @param {all} clr 
	 */
	SetHiTextColor2(clr) {return}

	/**
	 * Set icon margins
	 * @param {all} [left=0] 
	 * @param {all} [top=0] 
	 * @param {all} [right=0] 
	 * @param {all} [bottom=0] 
	 * @param {all} [mode='px'] 
	 */
	SetIconMargins(left, top, right, bottom, mode) {return}

	/**
	 * Set icon size
	 * @param {all} size 
	 * @param {all} [mode] 
	 */
	SetIconSize(size, mode) {return}

	/**
	 * Set item
	 * @param {str} title 
	 * @param {all} newTitle 
	 * @param {num} [newBody] 
	 * @param {all} [newImage] 
	 */
	SetItem(title, newTitle, newBody, newImage) {return}

	/**
	 * Set item by index
	 * @param {num} index 
	 * @param {all} newTitle 
	 * @param {num} [newBody] 
	 * @param {all} [newImage] 
	 */
	SetItemByIndex(index, newTitle, newBody, newImage) {return}

	/**
	 * Set list
	 * @param {all} list 
	 * @param {str} [delim=','] 
	 */
	SetList(list, delim) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiList, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiList) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Set text color1
	 * @param {str_col} clr 
	 */
	SetTextColor1(clr) {return}

	/**
	 * Set text color2
	 * @param {str_col} clr 
	 */
	SetTextColor2(clr) {return}

	/**
	 * Set text margins
	 * @param {all} [left=0] 
	 * @param {all} [top=0] 
	 * @param {all} [right=0] 
	 * @param {all} [bottom=0] 
	 * @param {all} [mode] 
	 * @param {str_com} [options] 
	 */
	SetTextMargins(left, top, right, bottom, mode, options) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Set text shadow1
	 * @param {num} radius 
	 * @param {num} [dx] 
	 * @param {num} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow1(radius, dx, dy, color) {return}

	/**
	 * Set text shadow2
	 * @param {num} radius 
	 * @param {num} [dx] 
	 * @param {num} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow2(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Set text size1
	 * @param {all} size 
	 * @param {all} [mode] 
	 */
	SetTextSize1(size, mode) {return}

	/**
	 * Set text size2
	 * @param {all} size 
	 * @param {all} [mode] 
	 */
	SetTextSize2(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiList) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiListDialog {

	/**
	 * Calls a function selects an item in the list
	 * @param {(this: MuiListDialog, name: str, index: num_int) => void} callback 
	 */
	SetOnSelect(callback) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Change the height of the control
	 * @param {num} height `Fraction of the screen height`
	 */
	SetHeight(height) {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Pass texedit control to display input values
	 * @param {obj} textEdit An MUI TextEdit control
	 */
	SetTextEdit(textEdit) {return}
}


class MuiListModern {

	/**
	 * Calls a function when an item is click
	 * @param {(this: MuiListModern, title: str, body: str, index: num_int) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Calls a function when an item in the list is select
	 * @param {(this: MuiListModern, index: num_int, isSelected: bin) => void} callback 
	 */
	SetOnSelect(callback) {return}

	/**
	 * Calls a function when an icon or avatar is click
	 * @param {(this: MuiListModern, index: num_int) => void} callback 
	 */
	SetAvatarOnTouch(callback) {return}

	/**
	 * Enable or disable selectable option
	 * @param {bin} selectable 
	 */
	SetSelectable(selectable) {return}

	/**
	 * Calls a function when a right icon is click
	 * @param {(this: MuiListModern, index: num_int) => void} callback 
	 */
	SetControlOnTouch(callback) {return}

	/**
	 * Appends an item at the bottom of the list
	 * @param {obj} data A single element of the list
	 */
	AppendItem(data) {return}

	/**
	 * Removes a single item in the list
	 * @param {num_int} index 
	 */
	RemoveItem(index) {return}

	/**
	 * Removes multiple items in the list
	 * @param {lst} indexes An array of indexes.
	 */
	RemoveItems(indexes) {return}

	/**
	 * Set a new title to a respective index
	 * @param {str} newTitle `New title text`
	 * @param {num_int} index 
	 */
	SetTitleText(newTitle, index) {return}

	/**
	 * Set a new body to a respective index
	 * @param {str} newBody `New body text`
	 * @param {num_int} index 
	 */
	SetBodyText(newBody, index) {return}

	/**
	 * Set a new material icon to the right icon
	 * @param {str} newIcon `New right icon`
	 * @param {num_int} index 
	 */
	SetRightIcon(newIcon, index) {return}

	/**
	 * Set a new note text for a respective item on the list
	 * @param {str} newNote `New note text`
	 * @param {num_int} index 
	 */
	SetNoteText(newNote, index) {return}

	/**
	 * Sets a new list
	 * @param {obj} list List Modern list
	 */
	SetList(list) {return}

	/** Removes an item at the bottom of the list */
	PopItem() {return}

	/** Removes an item at the beginning of the list */
	ShiftItem() {return}

	/**
	 * Returns the current list object
	 * @return {obj} 
	 */
	GetList() {return}

	/**
	 * Returns the respective item in the list
	 * @param {num_int} index 
	 * @return {obj} 
	 */
	GetItem(index) {return}

	/**
	 * Returns the selected items in the list
	 * @return {lst} List of indexes for slected items
	 */
	GetSelectedItems() {return}

	/**
	 * Highlight a respective item in the list
	 * @param {num_int} index 
	 */
	Highlight(index) {return}

	/**
	 * Removes a highlight to a respective item in the list
	 * @param {num_int} index 
	 */
	RemoveHighlight(index) {return}

	/**
	 * Set a new image to a respective item in the list
	 * @param {str_ptf} newImagePath `Path to the new image`
	 * @param {num_int} index 
	 */
	SetImage(newImagePath, index) {return}

	/**
	 * Set item
	 * @param {obj} data A single element of the list object
	 * @param {num_int} index 
	 */
	SetItem(data, index) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiListModern) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiListSimple {

	/**
	 * Calls a function when an item is click
	 * @param {(this: MuiListSimple, title: str, index: num_int, icon: str, badge: num) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Appends an item at the bottom of the list
	 * @param {obj} data A single element of the list
	 */
	AppendItem(data) {return}

	/**
	 * Removes an item in the list
	 * @param {num_int} index 
	 */
	RemoveItem(index) {return}

	/**
	 * Sets a new badge
	 * @param {num_int} newBadge 
	 * @param {num_int} index 
	 */
	SetBadge(newBadge, index) {return}

	/**
	 * Sets a new title to a corresponding item
	 * @param {str} newTitle `New title text`
	 * @param {num_int} index 
	 */
	SetTitleText(newTitle, index) {return}

	/**
	 * Returns the current list object
	 * @return {obj} 
	 */
	GetList() {return}

	/**
	 * Sets a new list
	 * @param {obj} list ListSimple list
	 */
	SetList(list) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiListSimple) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiMenu {

	/**
	 * Calls a function when item is click
	 * @param {(this: MuiMenu, title: str, index: num_int) => void} callback 
	 */
	SetOnSelect(callback) {return}

	/**
	 * Set a new list of options
	 * @param {lst} list A comma separated options
	 */
	SetList(list) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}
}


class MuiMenuWithIcon {

	/**
	 * Calls a function when item is click
	 * @param {(this: MuiMenuWithIcon, text: str, index: num_int) => void} callback 
	 */
	SetOnSelect(callback) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}
}


class MuiModal {

	/**
	 * Calls a function when control buttons are click
	 * @param {(this: MuiModal, isOkBtnClick: bin, btnText: str) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Get the layout of the modal where you can add your controls
	 * @return {DsLayout} 
	 */
	GetLayout() {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Sets a new title to the modal
	 * @param {str} title 
	 */
	SetTitle(title) {return}

	/**
	 * Sets a new title to the modal
	 * @param {str_col} [color] 
	 */
	SetHeaderColor(color) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Called when the dialog or control has been closed
	 * @param {(this: MuiModal) => void} callback 
	 */
	SetOnClose(callback) {return}
}


class MuiRadio {

	/**
	 * Calls a function when the user selects an item in the list
	 * @param {(this: MuiRadio, name: str, index: num_int) => void} callback 
	 */
	SetOnSelect(callback) {return}

	/**
	 * Checks a corresponding item
	 * @param {num_int} index 
	 */
	CheckItemByIndex(index) {return}

	/**
	 * Gets the checked item in the list
	 * @return {"title"|"index"} 
	 */
	GetCheckItem() {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiRadio, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get item
	 * @param {str} title 
	 * @return {obj} 
	 */
	GetItem(title) {return}

	/**
	 * Get item by index
	 * @param {num} index 
	 * @return {obj} 
	 */
	GetItemByIndex(index) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get length
	 * @return {num_int} 
	 */
	GetLength() {return}

	/**
	 * Get list
	 * @param {str} delim 
	 * @return {obj} 
	 */
	GetList(delim) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"List"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Insert item
	 * @param {num} index 
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {str_ptf} [image] 
	 */
	InsertItem(index, title, body, image) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/** Remove all */
	RemoveAll() {return}

	/**
	 * Remove item
	 * @param {str} title 
	 */
	RemoveItem(title) {return}

	/**
	 * Remove item by index
	 * @param {num} index 
	 */
	RemoveItemByIndex(index) {return}

	/**
	 * Scroll to item
	 * @param {str} title 
	 * @param {str} [body] 
	 */
	ScrollToItem(title, body) {return}

	/**
	 * Scroll to item by index
	 * @param {num} index 
	 */
	ScrollToItemByIndex(index) {return}

	/**
	 * Select item
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {bin} [scroll] 
	 */
	SelectItem(title, body, scroll) {return}

	/**
	 * Select item by index
	 * @param {num} index 
	 * @param {bin} [scroll] 
	 */
	SelectItemByIndex(index, scroll) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set column widths
	 * @param {all} icon 
	 * @param {str} [title] 
	 * @param {str} [body] 
	 * @param {all} [mode] 
	 */
	SetColumnWidths(icon, title, body, mode) {return}

	/**
	 * Set divider
	 * @param {num} height 
	 * @param {str_col} [color] 
	 */
	SetDivider(height, color) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * Set ellipsize1
	 * @param {all} mode 
	 */
	SetEllipsize1(mode) {return}

	/**
	 * Set ellipsize2
	 * @param {all} mode 
	 */
	SetEllipsize2(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set hi text color1
	 * @param {all} clr 
	 */
	SetHiTextColor1(clr) {return}

	/**
	 * Set hi text color2
	 * @param {all} clr 
	 */
	SetHiTextColor2(clr) {return}

	/**
	 * Set list
	 * @param {all} list 
	 * @param {str} [delim=','] 
	 */
	SetList(list, delim) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiRadio, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiRadio) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Set text color1
	 * @param {all} clr 
	 */
	SetTextColor1(clr) {return}

	/**
	 * Set text color2
	 * @param {all} clr 
	 */
	SetTextColor2(clr) {return}

	/**
	 * Set text margins
	 * @param {all} [left=0] 
	 * @param {all} [top=0] 
	 * @param {all} [right=0] 
	 * @param {all} [bottom=0] 
	 * @param {all} [mode='px'] 
	 * @param {str_com} [options] 
	 */
	SetTextMargins(left, top, right, bottom, mode, options) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Set text shadow1
	 * @param {num} radius 
	 * @param {num} [dx] 
	 * @param {num} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow1(radius, dx, dy, color) {return}

	/**
	 * Set text shadow2
	 * @param {num} radius 
	 * @param {num} [dx] 
	 * @param {num} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow2(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Set text size1
	 * @param {all} size 
	 * @param {all} [mode='px'] 
	 */
	SetTextSize1(size, mode) {return}

	/**
	 * Set text size2
	 * @param {all} size 
	 * @param {all} [mode='px'] 
	 */
	SetTextSize2(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiRadio) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiRadioButtons {

	/**
	 * Calls a function when the user selects an item in the list
	 * @param {(this: MuiRadioButtons, name: str, index: num_int) => void} callback 
	 */
	SetOnSelect(callback) {return}

	/**
	 * Checks a corresponding item
	 * @param {num_int} index 
	 */
	CheckItemByIndex(index) {return}

	/**
	 * Gets the checked item in the list
	 * @return {"title"|"index"} 
	 */
	GetCheckItem() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Show or Hide the list */
	Toggle() {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiRadioButtons, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Returns the corresponding item
	 * @param {num_int} index 
	 * @return {"title"} 
	 */
	GetItem(index) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Gets the list
	 * @return {lst} Array of titles
	 */
	GetList() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Radio"} 
	 */
	GetType() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiRadioButtons, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiRadioButtons) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiRadioMaterial {

	/**
	 * Calls a function when the user selects an item in the list
	 * @param {(this: MuiRadioMaterial, name: str, index: num_int) => void} callback 
	 */
	SetOnSelect(callback) {return}

	/**
	 * Checks a corresponding item
	 * @param {num_int} index 
	 */
	CheckItemByIndex(index) {return}

	/**
	 * Gets the checked item in the list
	 * @return {"title"|"index"} 
	 */
	GetCheckItem() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Show or Hide the list */
	Toggle() {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiRadioMaterial, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Returns the corresponding item
	 * @param {num_int} index 
	 * @return {"title"} 
	 */
	GetItem(index) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Gets the list
	 * @return {lst} Array of titles
	 */
	GetList() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Radio"} 
	 */
	GetType() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiRadioMaterial, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiRadioMaterial) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiSeekBar {

	/**
	 * Get the current value of the seekbar
	 * @return {num} 
	 */
	GetValue() {return}

	/**
	 * Set the number of decimals to the value
	 * @param {num_int} decimals `The number of decimals`
	 */
	SetDecimals(decimals) {return}

	/**
	 * Calls a function when the seekbar is touch
	 * @param {(this: MuiSeekBar, value: num) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Sets a new value to the seekbar
	 * @param {num} value `Must be between 0 and range`
	 */
	SetValue(value) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiSeekBar, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Seekbar"} 
	 */
	GetType() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiSeekBar) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiSpinner {

	/**
	 * Calls a function when value changes
	 * @param {(this: MuiSpinner, value: str, index: num_int) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Select an option
	 * @param {str} value `Must be one of the provided values`
	 */
	SelectItem(value) {return}

	/**
	 * Select an option with a given index
	 * @param {num_int} index `The index of the option in the given values`
	 */
	SelectItemByIndex(index) {return}

	/**
	 * Sets a new list of options
	 * @param {lst} list A comma separated values for options.
	 */
	SetList(list) {return}

	/**
	 * Sets the hint when there is no active selection
	 * @param {str} hint `The hint text.`
	 */
	SetHint(hint) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiSpinner) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiSwitch {

	/**
	 * Get the current value of the switch
	 * @return {bin} 
	 */
	GetValue() {return}

	/**
	 * Calls a function when switch is click
	 * @param {(this: MuiSwitch, value: bin) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Sets the value of the switch
	 * @param {bin} value 
	 */
	SetValue(value) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiSwitch, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Seekbar"} 
	 */
	GetType() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiSwitch) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiSwitchSettings {

	/**
	 * Get the current value of the switch
	 * @return {bin} 
	 */
	GetValue() {return}

	/**
	 * Calls a function when switch is click
	 * @param {(this: MuiSwitchSettings, text: str, value: bin) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Sets the value of the switch
	 * @param {bin} value 
	 */
	SetValue(value) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiSwitchSettings, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Seekbar"} 
	 */
	GetType() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiSwitchSettings) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiTabFixed {

	/**
	 * Get the corresponding layout of a given name where you can add your controls
	 * @param {str} name `The layout name`
	 * @return {DsLayout} 
	 */
	GetLayout(name) {return}

	/**
	 * Open the a tab by passing an index
	 * @param {num} index 
	 */
	SetActiveTabByIndex(index) {return}

	/**
	 * Calls a function when the tab is click
	 * @param {(this: MuiTabFixed, name: str, index: num_int) => void} callback 
	 */
	SetOnSelect(callback) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiTabFixed, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Tab"} 
	 */
	GetType() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiTabFixed) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiTEFilledIconLeft {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTEFilledIconLeft) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTEFilledIconLeft) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Calls a function when icon is touch
	 * @param {(this: MuiTEFilledIconLeft) => void} callback 
	 */
	SetOnIconTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTEFilledIconLeft) => void} callback 
	 */
	SetOnTouch(callback) {return}
}


class MuiTEFilledIconRight {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTEFilledIconRight) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTEFilledIconRight) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Calls a function when icon is touch
	 * @param {(this: MuiTEFilledIconRight) => void} callback 
	 */
	SetOnIconTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTEFilledIconRight) => void} callback 
	 */
	SetOnTouch(callback) {return}
}


class MuiTEOutlineIconLeft {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTEOutlineIconLeft) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTEOutlineIconLeft) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Calls a function when icon is touch
	 * @param {(this: MuiTEOutlineIconLeft) => void} callback 
	 */
	SetOnIconTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTEOutlineIconLeft) => void} callback 
	 */
	SetOnTouch(callback) {return}
}


class MuiTEOutlineIconRight {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTEOutlineIconRight) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTEOutlineIconRight) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Calls a function when icon is touch
	 * @param {(this: MuiTEOutlineIconRight) => void} callback 
	 */
	SetOnIconTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTEOutlineIconRight) => void} callback 
	 */
	SetOnTouch(callback) {return}
}


class MuiTESearchElegant {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTESearchElegant) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTESearchElegant) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed the icon
	 * @param {(this: MuiTESearchElegant) => void} callback 
	 */
	SetIconOnTouch(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Calls a function when icon is touch
	 * @param {(this: MuiTESearchElegant) => void} callback 
	 */
	SetOnIconTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTESearchElegant) => void} callback 
	 */
	SetOnTouch(callback) {return}
}


class MuiTESearchUnique {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTESearchUnique) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTESearchUnique) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Calls a function when icon is touch
	 * @param {(this: MuiTESearchUnique) => void} callback 
	 */
	SetOnIconTouch(callback) {return}
}


class MuiTextAreaFilled {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTextAreaFilled) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTextAreaFilled) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}
}


class MuiTextAreaFilledA {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTextAreaFilledA) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTextAreaFilledA) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}
}


class MuiTextAreaOutline {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTextAreaOutline) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTextAreaOutline) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}
}


class MuiTextAreaOutlineA {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTextAreaOutlineA) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTextAreaOutlineA) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}
}


class MuiTextEditFilled {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTextEditFilled) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTextEditFilled) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextEditFilled) => void} callback 
	 */
	SetOnTouch(callback) {return}
}


class MuiTextEditFilledA {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTextEditFilledA) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTextEditFilledA) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextEditFilledA) => void} callback 
	 */
	SetOnTouch(callback) {return}
}


class MuiTextEditOutline {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTextEditOutline) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTextEditOutline) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextEditOutline) => void} callback 
	 */
	SetOnTouch(callback) {return}
}


class MuiTextEditOutlineA {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTextEditOutlineA) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTextEditOutlineA) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextEditOutlineA) => void} callback 
	 */
	SetOnTouch(callback) {return}
}


class MuiTextEditSearch {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTextEditSearch) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTextEditSearch) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Calls a function when icon is touch
	 * @param {(this: MuiTextEditSearch) => void} callback 
	 */
	SetOnIconTouch(callback) {return}
}


class MuiTextEditUnique {

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear input history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get cursor line
	 * @return {num} 
	 */
	GetCursorLine() {return}

	/**
	 * Get cursor position
	 * @return {num} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get the type of MUI control
	 * @return {str} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Inserts a string at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replaces a given range in the text with some string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Change the curernt cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: MuiTextEditUnique) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function which is called when the user pressed 'Done' or 'Enter' on the keyboard
	 * @param {(this: MuiTextEditUnique) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/** Undo an action */
	Undo() {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextEditUnique) => void} callback 
	 */
	SetOnTouch(callback) {return}
}


class MuiTextH1 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiTextH1, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {return}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {return}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 */
	Log(msg, options) {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 */
	SetLog(maxLines) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiTextH1, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextH1) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: MuiTextH1, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: MuiTextH1, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: MuiTextH1, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiTextH1) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiTextH2 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiTextH2, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {return}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {return}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 */
	Log(msg, options) {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 */
	SetLog(maxLines) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiTextH2, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextH2) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: MuiTextH2, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: MuiTextH2, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: MuiTextH2, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiTextH2) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiTextH3 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiTextH3, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {return}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {return}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 */
	Log(msg, options) {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 */
	SetLog(maxLines) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiTextH3, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextH3) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: MuiTextH3, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: MuiTextH3, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: MuiTextH3, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiTextH3) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiTextH4 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiTextH4, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {return}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {return}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 */
	Log(msg, options) {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 */
	SetLog(maxLines) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiTextH4, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextH4) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: MuiTextH4, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: MuiTextH4, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: MuiTextH4, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiTextH4) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiTextH5 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiTextH5, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {return}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {return}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 */
	Log(msg, options) {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 */
	SetLog(maxLines) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiTextH5, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextH5) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: MuiTextH5, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: MuiTextH5, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: MuiTextH5, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiTextH5) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiTextH6 {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiTextH6, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {return}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {return}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 */
	Log(msg, options) {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 */
	SetLog(maxLines) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiTextH6, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextH6) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: MuiTextH6, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: MuiTextH6, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: MuiTextH6, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiTextH6) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiTextJumbo {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiTextJumbo, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {return}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {return}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 */
	Log(msg, options) {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 */
	SetLog(maxLines) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiTextJumbo, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextJumbo) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: MuiTextJumbo, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: MuiTextJumbo, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: MuiTextJumbo, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiTextJumbo) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiTextParagraph {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiTextParagraph, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {return}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {return}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 */
	Log(msg, options) {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 */
	SetLog(maxLines) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiTextParagraph, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextParagraph) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: MuiTextParagraph, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: MuiTextParagraph, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: MuiTextParagraph, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiTextParagraph) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiTextSecondary {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: MuiTextSecondary, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Data */
	data;

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get html
	 * @return {obj} 
	 */
	GetHtml() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get line count
	 * @return {num_int} 
	 */
	GetLineCount() {return}

	/**
	 * Get line start
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Get line top
	 * @param {num_int} line 
	 * @return {num} 
	 */
	GetLineTop(line) {return}

	/**
	 * Get max lines
	 * @return {num_int} 
	 */
	GetMaxLines() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get type
	 * @return {"Text"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Log
	 * @param {str} msg 
	 * @param {str_com} [options] 
	 */
	Log(msg, options) {return}

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
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Set log
	 * @param {num_int} maxLines 
	 */
	SetLog(maxLines) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: MuiTextSecondary, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: MuiTextSecondary) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: MuiTextSecondary, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: MuiTextSecondary, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: MuiTextSecondary, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: MuiTextSecondary) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class MuiTimePicker {

	/**
	 * Calls a function when the user selects a time
	 * @param {(this: MuiTimePicker, time: str, hour: num_int, minute: num_int, pos: "AM"|"PM") => void} callback 
	 */
	SetOnSelect(callback) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Pass texedit control to display input values
	 * @param {obj} textEdit An MUI TextEdit control
	 */
	SetTextEdit(textEdit) {return}
}


