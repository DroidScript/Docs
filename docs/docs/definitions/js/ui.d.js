/** @type {UI} */
var ui;
/** @typedef {UIAccordion | UIAppBar | UIBottomNavbar | UIButton | UIButtonGroup | UICheckbox | UICheckboxGroup | UIChip | UIDatePicker | UIDialog | UIDivider | UIDrawer | UIDropdown | UIFAB | UIImage | UILayout | UIList | UIMenu | UIProgress | UIRadioGroup | UISelect | UISlider | UIStepper | UISwitch | UISwitchGroup | UITabs | UIText | UITextField | UITimePicker | UITreeView | UIWebView | UIColorPicker | UIDateTimePicker | UIPopover | UIPopup | UIProgressDialog} UIObject */
/** @typedef {UIObject} uio ui object */

class UI {

	/**
	 * AddAccordion
	 * @param {obj} parent The parent layout where to add the text.
	 * @param {obj} titles An array of accordion titles.
	 * @param {str_com} [options] one or a combination of the following: `Square` 
 `Layout type `Linear` or `Absolute`
	 * @param {num} [width] `Fraction of the screen width: [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UIAccordion} 
	 */
	addAccordion(parent, titles, options, width, height) {return}

	/**
	 * AddAppBar
	 * @param {obj} parent The parent layout where to add the AppBar
	 * @param {str} title `The title text of the appbar`
	 * @param {str_com} [options] one or a combination of the following: 
 `Menu` : Adds a menu icon on the left 
 `Primary` `Secondary` `Transparent` `Inherit` `Default` : Adds a color 
 `Absolute` `Static` `Fixed` `Relative` : Adds a positioning
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UIAppBar} 
	 */
	addAppBar(parent, title, options, width, height) {return}

	/**
	 * AddBottomNavbar
	 * @param {obj} parent The parent layout where to add the BottomNavbar
	 * @param {lst} navs An array whose elements are of the form `[ "Title", "Icon" ]`
	 * @param {str_com} [options] one or a combination of the following: `Hidelabels`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UIBottomNavbar} 
	 */
	addBottomNavbar(parent, navs, options, width, height) {return}

	/**
	 * AddButton
	 * @param {obj} parent The layout where to add the button.
	 * @param {str} text `The button text or the material icon text.`
	 * @param {str_com} [options] one or a combination of the following: 
 Variant: `Contained` `Outlined` `Text` `Default` 
 `Color`: `Primary` `Secondary` `Default` 
 `Size`: `Small` `Medium` `Large` 
 `Util`: `Icon` `NoRipple` `Upload` 
 `In case of upload,  you can specify `Multiple` to accept multiple files.
	 * @param {num} [width] `Fraction of the parent width. [0-1]`
	 * @param {num} [height] `Fraction of the parent height. [0-1]`
	 * @return {UIButton} 
	 */
	addButton(parent, text, options, width, height) {return}

	/**
	 * AddButtonGroup
	 * @param {obj} parent The parent layout where to add the ButtonGroup
	 * @param {lst} [list] The item to be displayed on the buttn group.
	 * @param {str_com} [options] one or a combination of the following: 
 Variant: `Contained` `Outlined` `Text` `Default` 
 `Color`: `Primary` `Secondary` `Default` 
 `Size`: `Small` `Medium` `Large` 
 `Orientation`: `Horizontal` `Vertical` 
 `Util`: `Icon` `NoElevation`
	 * @param {num} [width] `Fraction of the parent width. [0-1]`
	 * @param {num} [height] `Fraction of the parent height. [0-1]`
	 * @return {UIButtonGroup} 
	 */
	addButtonGroup(parent, list, options, width, height) {return}

	/**
	 * AddCheckbox
	 * @param {obj} parent The layout where to add the checkbox
	 * @param {str} text `The label for the checkbox`
	 * @param {str_com} [options] Colors: `Primary` `Secondary` `Medium` `Small` 
 `Position`: `Left` `Top` `Right` `Bottom` 
 `Variant`: `Indeterminate` `Determinate`
	 * @param {num} [width] `Fraction of the parent width. [0-1]`
	 * @param {num} [height] `Fraction of the parent height. [0-1]`
	 * @return {UICheckbox} 
	 */
	addCheckbox(parent, text, options, width, height) {return}

	/**
	 * AddCheckboxGroup
	 * @param {obj} parent The parent layout where to add the CheckboxGroup.
	 * @param {lst} [list] The items to be displayed.
	 * @param {str_com} [options] Colors: `Default` `Primary` `Secondary` 
 `Sizes`: `Small` `Medium` 
 `Icon Position: `Left` or `Right` 
 `Container`: `Elevated` or `Outlined` 
 `Corners : `Square`
	 * @param {num} [width] `Fraction of the screen width.`
	 * @param {num} [height] `Fraction of the screen height.`
	 * @return {UICheckboxGroup} 
	 */
	addCheckboxGroup(parent, list, options, width, height) {return}

	/**
	 * AddChip
	 * @param {obj} parent The parent layout where to add the Chip.
	 * @param {str} text `The text on the chip.`
	 * @param {str_com} [options] Color: `Primary` `Secondary` `Default` 
 `Size`: `Small` `Medium` 
 `Variant`: `Outlined` `Default` 
 `Util`: `Touchable`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UIChip} 
	 */
	addChip(parent, text, options, width, height) {return}

	/**
	 * AddDatePicker
	 * @param {str} date A default date value to which the datepicker begins. Format `YYYY-MM-DD`
	 * @param {str_com} [options] `Portrait` `Landscape`
	 * @return {UIDatePicker} 
	 */
	addDatePicker(date, options) {return}

	/**
	 * AddDialog
	 * @param {str} title `The dialog title text.`
	 * @param {str} body `The dialog message to be shown.`
	 * @param {str} [actions] `A comma separated text for action buttons.`
	 * @param {str_com} [options] Colors: `Primary` `Secondary` 
 `Util`: `NoCancel` prevents the dialog from closing on action.
	 * @return {UIDialog} 
	 */
	addDialog(title, body, actions, options) {return}

	/**
	 * AddDivider
	 * @param {obj} parent The layour where to add the divider.
	 * @param {num} [width] `Fraction of the screen width. Default is 1.`
	 * @param {str} [options] A comma separated Divider options. Values can be `Inset`
	 * @return {UIDivider} 
	 */
	addDivider(parent, width, options) {return}

	/**
	 * AddDrawer
	 * @param {obj} lay The drawer layout.
	 * @param {str_com} [options] 
	 * @return {UIDrawer} 
	 */
	addDrawer(lay, options) {return}

	/**
	 * AddDropdown
	 * @param {obj} parent The layout where to add the dropdown.
	 * @param {lst} [list] The list items to show.
	 * @param {str} [options] A comma separated Dropdown options. Can be 
 Colors: `Primary` `Secondary` `Default` 
 `Variants`: `Contained` `Outlined` `Text` 
 `Sizes`: `Small` `Medium` `Large` 
 `Orientation`: `Horizontal` `Vertical` 
 `Util`: `NoElevation`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UIDropdown} 
	 */
	addDropdown(parent, list, options, width, height) {return}

	/**
	 * AddFAB
	 * @param {obj} parent The parent layout where to add the fab
	 * @param {str} icon `The string icon of the FAB`
	 * @param {str_com} [options] `Fixed` `Static` `Rounded` `Extended` `Left` `Right`
	 * @param {str} [text] `Text to show for extended FABs.`
	 * @return {UIFAB} 
	 */
	addFAB(parent, icon, options, text) {return}

	/**
	 * AddImage
	 * @param {obj} parent The parent layout where to add the image.
	 * @param {str} file `The path to the image.`
	 * @param {str} [options='Image'] A comma seprated options for the image. Can be `Image` `Canvas` `Button` or `Avatar`
	 * @param {num} [width] `Fraction of the screen width.`
	 * @param {num} [height] `Fraction of the screen height.`
	 * @return {UIImage} 
	 */
	addImage(parent, file, options, width, height) {return}

	/**
	 * AddLayout
	 * @param {"main"|obj} parent The parent layout where to add this component. Pass a string `main` for the main layout of your app.
	 * @param {str} type The layout type. Values can be `Linear` `Absolute` `Frame` `Slide`
	 * @param {str} [options] Layout options. Values can be 
 Orientation:  `Horizontal` `Vertical` 
 `Horizontal Alignment: `Left` `Center` `Right` 
 `Vertical Alignment: `Top` `VCenter` `Bottom` 
 `Dimensions`: `FillX` `FillY` 
 `Scroll`: `ScrollX` `ScrollY` `ScrollXY` `NoScrollBar` 
 `Utils`: `BackColor` to apply light or dark background rather than transparent.
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UILayout} 
	 */
	addLayout(parent, type, options, width, height) {return}

	/**
	 * AddList
	 * @param {obj} parent The parent layout
	 * @param {lst} [list] An array of arrays. Each element is of the form `[icon, title, body, secondary]`
	 * @param {str_com} [options] Media: `Icon` `Avatar` 
 `Styling`: `Dense` `Inset` 
 `Util`: `Selectable` `Divider` `SecondaryText`,  `NoRipple` to disable ripple effect
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UIList} 
	 */
	addList(parent, list, options, width, height) {return}

	/**
	 * AddMenu
	 * @param {obj} parent The component where to anchor the Menu.
	 * @param {lst} [list] A list of items to be shown in the pop-up menu. You can also pass a comma separated string. For menu with icon the format is `icon&colon;title` \n `Add a `colon` before an item to display it as the label text.
	 * @param {str_com} [options] Color: `Primary` `Secondary` `Error` 
 List: `Dense` 
 Icons: `Icon`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UIMenu} 
	 */
	addMenu(parent, list, options, width, height) {return}

	/**
	 * AddProgress
	 * @param {obj} parent The parent layout where to add the prgress component.
	 * @param {num} [value] `the initial value of the progress component.`
	 * @param {str_com} [options] Color: `Primary` `Secondary` 
 `Type`: `Circular` `Linear` 
 `Variant`: `Determinate` `Indeterminate`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction fo the screen height. [0-1]`
	 * @return {UIProgress} 
	 */
	addProgress(parent, value, options, width, height) {return}

	/**
	 * AddRadioGroup
	 * @param {obj} parent The parent where to add the RadioGroup component.
	 * @param {lst} [list] The list items array.
	 * @param {str_com} [options] Radio Sizes: `Small` `Medium` 
 `Colors`: `Primary` `Secondary` 
 `Icon Position: `Left` or `Right` 
 `Container`: `Elevated` or `Outlined` 
 `Corner`: `Square` 
 `Required`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UIRadioGroup} 
	 */
	addRadioGroup(parent, list, options, width, height) {return}

	/**
	 * AddSelect
	 * @param {obj} parent The parent layout where to add the control
	 * @param {lst} [list] The list of items for the Select options
	 * @param {str_com} [options] Sizes: `Small` `Medium` 
 `Variant`: `Filled` `Outlined` `Standard` 
 `Margin`: `Dense` `Normal` 
 `Utils`: `Required` `Multiple` `Radio` `Disabled` `AutoFocus` `FullWidth`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UISelect} 
	 */
	addSelect(parent, list, options, width, height) {return}

	/**
	 * AddSlider
	 * @param {obj} parent The layout where to add the Slider Component.
	 * @param {num} value `The initial value of the Slider. Value must be between 0-100`, ` the default min and max values.`
	 * @param {str_com} [options] Color: `Primary` `Secondary` 
 `Orienation`: `Horizontal` `Vertical` 
 `Track`: `Normal` `Inverted` `False`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height.`
	 * @return {UISlider} 
	 */
	addSlider(parent, value, options, width, height) {return}

	/**
	 * AddStepper
	 * @param {obj} parent The parent layout of the Stepper
	 * @param {lst} [steps] An array of titles.
	 * @param {str} [options] A comma separated Stepper options. Values can be `Vertical` `Horizontal` `Loop` `Mobile` or `AlternativeLabel`.
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UIStepper} 
	 */
	addStepper(parent, steps, options, width, height) {return}

	/**
	 * AddSwitch
	 * @param {obj} parent The parent layout where to add the Switch Component.
	 * @param {str} text `The label text.`
	 * @param {str} [options] A comma separated switch options. Options can be one or a combination of the following 
 Color: `Primary` `Secondary` `Default` 
 `Icon Position: `Left` `Top` `Right` `Bottom` 
 `Sizes`: `Small` `Medium`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UISwitch} 
	 */
	addSwitch(parent, text, options, width, height) {return}

	/**
	 * AddSwitchGroup
	 * @param {obj} parent The parent layout where to add the SwitchGroup Component.
	 * @param {obj} [list] The list items array whose elements can be `String` if items is text only, or `Array` of the form `[ "icon", "label" ]` if items is icon and text.
	 * @param {str_com} [options] Icon: `Icon` 
 `Color`: `Primary` or `Secondary` 
 `Container`: `Elevated` or `Outlined` 
 `Corner`: `Square` 
`Divider`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UISwitchGroup} 
	 */
	addSwitchGroup(parent, list, options, width, height) {return}

	/**
	 * AddTabs
	 * @param {obj} parent The parent layout where to add the Tabs Component.
	 * @param {lst} [list] An array of tab names.
	 * @param {str_com} [options] Enable swipe: `Swipeable` 
 `Colors`: `Primary` `Secondary` `Inherit` `Transparent` `Default` 
 `Variant`: `Standard` `Scrollable` `FullWidth` 
 `Layout`: `Linear`,  `Absolute` 
Utils: `Icon` `Center` `Paper`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UITabs} 
	 */
	addTabs(parent, list, options, width, height) {return}

	/**
	 * AddText
	 * @param {obj} parent The layout control where to add the text control
	 * @param {str} text `The text to be displayed on the text control`
	 * @param {str} [options] A comma separated string. Options can be one or a combination of the following: 
 Variants: `H1` `H2` `H3` `H4` `H5` `H6` `body1` `body2` `overline` `subtitle1` `subtitle2` `button` `caption`.
Lines: `Singleline` `Multiline`.
Alignment: `Left` `Center` `Right` `Justify`.
Color: `Primary` `Secondary` `Error`.
Format `Html` `Icon` `Italize` `Monospace` `Bold` `Underline` 
 `Utils`: `Touchable`
	 * @param {num} [width] `Fraction of the screen width`
	 * @param {num} [height] `Fraction of the screen height`
	 * @return {UIText} 
	 */
	addText(parent, text, options, width, height) {return}

	/**
	 * AddTextField
	 * @param {obj} parent The layout where to add the TextField Component.
	 * @param {str} text `The initial value of the TextField`
	 * @param {str_com} [options] Color: `Primary` or `Secondary` 
 `Sizes`: `Small` or `Medium` 
 `Type`: `Text` `Password` `Email` `Search` `Number` `Date` `Time` or `DateTime` 
 `Variant`: `Standard` `Filled` or `Outlined` 
 `Utils`: `Autofocus`
	 * @param {num} [width] `Fraction of the screen width.`
	 * @param {num} [height] `Fraction of the screen height.`
	 * @return {UITextField} 
	 */
	addTextField(parent, text, options, width, height) {return}

	/**
	 * AddTimePicker
	 * @param {str} time A default time value to which the timepicker begins. Value is of the form `HH:mm`
	 * @param {str_com} [options] `Portrait` `24H` `12H`
	 * @return {UITimePicker} 
	 */
	addTimePicker(time, options) {return}

	/**
	 * AddTreeView
	 * @param {obj} parent The parent layout where to add the TreeView component.
	 * @param {obj} [list] An object of the treeview items. See example below.
	 * @param {str} [options] `A comma separated TreeView options.`
	 * @param {num} [width] `Fraction of the screen width.`
	 * @param {num} [height] `Fraction of the screen height.`
	 * @return {UITreeView} 
	 */
	addTreeView(parent, list, options, width, height) {return}

	/**
	 * AddWebView
	 * @param {obj} parent The parent layout where to add the WebView component.
	 * @param {str} [url] `The url of the website.`
	 * @param {str_com} [options] 
	 * @param {num} [width] `Fraction of the parent width.`
	 * @param {num} [height] `Fraction of the parent height.`
	 * @return {UIWebView} 
	 */
	addWebView(parent, url, options, width, height) {return}

	/**
	 * ShowColorPicker
	 * @param {str} [value] `A hexadecimal default value for the color picker.`
	 * @param {str} [options] A comma separated color picker options. Values can be 
 `Alpha` Includes an alpha
	 * @return {UIColorPicker} 
	 */
	showColorPicker(value, options) {return}

	/**
	 * ShowDateTimePicker
	 * @param {() => void} callback 
	 * @param {str} [date] `Default value for date of the form "MM/DD/YYYY"`
	 * @param {str} [time] `Default value for time of the form "HH/MM/SS"`
	 * @param {str} [format] The format value that will be pass to callback. Formats can be of the form 
 `MM/DD/YYYY HH:SS` `MM:YYYY HH:SS`\
 	 * &emsp; `HH` - MM\
 	 * &emsp; `MM` - DD\
 	 * &emsp; `HH` - MM
	 * @return {UIDateTimePicker} 
	 */
	showDateTimePicker(callback, date, time, format) {return}

	/**
	 * ShowPopover
	 * @param {obj} parent UI component. Can be a `Layout` `Button` `Image` `Text` or any UI component except dialogs.
	 * @param {str} [text] The text to de displayed. For displaying more data,  pass a `Layout`
	 * @param {str} [position] A comma separated values representing the `anchorOrigin, transformOrigin` 
 `anchorOrigin` Position of the popover on its parent. Available values are `tl` for top-left,  `tc` for top-center,  `tr` `cl` `cc` `cr` `bl` `bc` and `br` for bottom-right. 
 `transformOrigin` Origin on the popover itselt. Values are the same as the `anchorOrigin`
	 * @param {num} [width] `Fraction of the screen width.`
	 * @param {num} [height] `Fraction of the screen height.`
	 * @return {UIPopover} 
	 */
	showPopover(parent, text, position, width, height) {return}

	/**
	 * ShowPopup
	 * @param {str} msg `The message to display on the pop-up.`
	 * @param {str} [options] A comma separated Menu options. Values can be 
 Duration: `Short` `Long` 
 `Vertical Alignment: `Top` `Bottom` 
 `Horizontal Alignment: `Left` `Center` `Right` 
 `Action options: `Icon` or `HideOnAction` 
 `Transition`: `Grow` `Fade` `Slide` `Collapse` `Zoom`
	 * @param {num} [duration] `Time in milliseconds. Pass this`, ` if you don't want the default auto hide duration.`
	 * @param {str} [action] `Action button text.`
	 * @return {UIPopup} 
	 */
	showPopup(msg, options, duration, action) {return}

	/**
	 * ShowProgressDialog
	 * @param {str} [text] The text message of the progress dialog. Options can be 
 `AutoCancel` to close the dialog when backdrop is click.
	 * @param {str_com} [options] 
	 * @return {UIProgressDialog} 
	 */
	showProgressDialog(text, options) {return}

}

class UIAccordion {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius of the accordion panel */
	cornerRadius;

	/** @type {bin} Sets or returns whether the accordion is disabled or not */
	disabled;

	/** @type {str} Sets or returns the material icon font for the expand icon */
	expandIcon;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {lst} Sets or returns the padding of each accordion item */
	itemPadding;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {bin} Sets or returns whether the accordion is rounded or not */
	rounded;

	/** @type {lst} Sets or returns the secondary text of the accordion items */
	secondaryText;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {str} Sets or returns the title text color in hexadecimal format <col nobox #fb8c00>#rrggbb</col> */
	textColor1;

	/** @type {str} Sets or returns the secondary text color in hexadecimal format <col nobox #fb8c00>#rrggbb</col> */
	textColor2;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Sets or returns the accordion title text size */
	textSize1;

	/** @type {num} Sets or returns the accordion secondary text size */
	textSize2;

	/** @type {num} Sets and returns the width of the title as fraction */
	titleWidth;

	/** @type {lst} Sets or returns the list of titles for the accordion panel */
	titles;

	/** @type {num} Collapse or shrink a corresponding accordion by its index */
	toggle;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * GetLayout
	 * @param {num} index `The index of the accordion. You can also pass accordion title.`
	 * @return {UILayout} 
	 */
	getLayout(index) {return}

	/**
	 * SetTitleText
	 * @param {num} index `The index of the corresponding title to updates.`
	 * @param {str} title `The new title text.`
	 */
	setTitleText(index, title) {return}

	/**
	 * SetSecondaryText
	 * @param {obj} text The secondary text to display. You can pass arguments as string or array by following the format below. \n String: `"Secodary text 1,Secondary text 2,Secondary text 3"` \n `Array`: `[ "Secondary text 1", "Secondary text 2", "Secondary text 3" ]`
	 * @param {num} index If `index` is provided,  the corresponding index will be updated with the new text.
	 */
	setSecondaryText(text, index) {return}

	/**
	 * SetExpandIcon
	 * @param {str} icon `A material icon`
	 */
	setExpandIcon(icon) {return}

	/**
	 * AddItem
	 * @param {str} title `Accordion title`
	 * @param {str} secondaryText `Accordion secondary text`
	 * @param {num} index The index at which the accordion item will be added. If `null`,  the item will be added at the bottom of the accordion.
	 */
	addItem(title, secondaryText, index) {return}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the corresponding accordion to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * RemoveItemByName
	 * @param {str} title `The title of the corresponding accordion to remove.`
	 */
	removeItemByName(title) {return}

	/** ShiftItem */
	shiftItem() {return}

	/** PopItem */
	popItem() {return}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the corresponding accordion.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the accordion item.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * SetEnabledByName
	 * @param {str} name `The title of the accordion`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * GetEnabledByName
	 * @param {str} name `The title of the accordion.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * GetLayoutIndex
	 * @param {obj} layout The layout to check.
	 * @return {num} 
	 */
	getLayoutIndex(layout) {return}

	/**
	 * SetOnTouch
	 * @param {(index: num, expand: bin) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(title: str, index: num, event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * SetTextColor
	 * @param {str} color1 Color of the title text in hexadecimal format `#rrggbb`
	 * @param {str} [color2] Color of the secondary text in hexadecimal format `#rrggbb`
	 */
	setTextColor(color1, color2) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIAppBar {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color of the AppBar */
	color;

	/** @type {num} Sets or returns the corner radius of the accordion panel */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the icon of the menu button */
	icon;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {UILayout} Returns the right layout of the appbar where you can add controls */
	layout;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {bin} Sets or returns whether the appbar has menu button */
	menu;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or return the AppBar title text */
	text;

	/** @type {str} Sets or returns the hexadecimal color of the appbar title */
	textColor;

	/** @type {num} Sets or returns the font size of the title text */
	textSize;

	/** @type {str} Sets or returns the variant of the title text */
	textVariant;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnMenu
	 * @param {() => void} callback 
	 */
	setOnMenu(callback) {return}

	/**
	 * AddLayout
	 * @param {obj} lay The layout where to add controls
	 */
	addLayout(lay) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIBottomNavbar {

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns whether the bottom navigation is disabled or enabled */
	disabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the icon color */
	iconColor;

	/** @type {num} Sets or returns the icon font-size */
	iconSize;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {bin} Sets or returns a boolean whether the labels are shown or hidden on active state */
	labels;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the navigation actions array */
	list;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Sets or returns the current value of the BottomNavbar */
	value;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnContextMenu
	 * @param {(text: str, index: num, event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * SetList
	 * @param {lst} navs The navigation actions array. See `navs` param above for format.
	 */
	setList(navs) {return}

	/**
	 * GetList
	 * @return {lst} 
	 */
	getList() {return}

	/**
	 * SelectItem
	 * @param {str} name `The name to be set to active`
	 */
	selectItem(name) {return}

	/**
	 * SelectItemByIndex
	 * @param {num} index `The index of the bottom navigation action to be selected`
	 */
	selectItemByIndex(index) {return}

	/** ClearSelection */
	clearSelection() {return}

	/**
	 * SetItemByIndex
	 * @param {num} index `The index to update`
	 * @param {str} newName `The name of the navigation action`
	 * @param {str} newIcon `Material icon`
	 */
	setItemByIndex(index, newName, newIcon) {return}

	/**
	 * SetIcon
	 * @param {num} index `The index of the navigation action to update`
	 * @param {str} newIcon `Material icon`
	 */
	setIcon(index, newIcon) {return}

	/**
	 * AddItem
	 * @param {str} name `The name of the navigation action`
	 * @param {str} icon `Material icon`
	 * @param {num} index `The index in which to add the action.`
	 */
	addItem(name, icon, index) {return}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the navigation action to be remove`
	 */
	removeItemByIndex(index) {return}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the navigation action to be remove.`
	 */
	removeItemByName(name) {return}

	/** ShiftItem */
	shiftItem() {return}

	/** PopItem */
	popItem() {return}

	/**
	 * SetOnChange
	 * @param {(text: str, index: num) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the navigation action.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the navigation action.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the bottom navigation action.`
	 * @param {bin} value Values can be `true` or `false`
	 */
	setEnabledByName(name, value) {return}

	/**
	 * GetEnabledByName
	 * @param {str} name `The name of the bottom navigation action.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/** ShowLabels */
	showLabels() {return}

	/** HideLabels */
	hideLabels() {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIButton {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} Sets or returns the accepted files for an upload button */
	acceptedFiles;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the badge content */
	badge;

	/** @type {str} Sets or returns the color of the badge */
	badgeColor;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color of the button */
	color;

	/** @type {num} Sets or returns the corner radius of the button */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the material icon font use for the leading icon */
	icon;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the size variant of the button */
	sizeVariant;

	/** @type {str} Sets or returns the button text */
	text;

	/** @type {str} Sets or returns the text color in hexadecimal format */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the tooltip text */
	toolTip;

	/** @type {str} Sets or returns the tooltip position */
	toolTipPosition;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the variant of the button */
	variant;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnFileSelect
	 * @param {(files: lst) => void} callback 
	 */
	setOnFileSelect(callback) {return}

	/**
	 * SetToolTip
	 * @param {str} title `The text of the tooltip`
	 * @param {str} [pos='top'] Position of the tooltip. 
 Positions : `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTip(title, pos) {return}

	/**
	 * SetTextShadow
	 * @param {num} radius `The radius in pixels`
	 * @param {num} dx `The x-offset in pixels`
	 * @param {num} dy `The y-offset in pixels`
	 * @param {str} color The color in hexadecimal `#rrggbb`
	 */
	setTextShadow(radius, dx, dy, color) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `The left padding in pixel.`
	 * @param {num} [top] `The top padding in pixels`, ``
	 * @param {num} [right] `The right padding in pixels.`
	 * @param {num} [bottom] `The bottom padding in pixels.`
	 * @param {str} [mode='px'] `px` `%`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIButtonGroup {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color of the button */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the list items of the button group */
	list;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {str} Sets or returns the orientation of the button group */
	orientation;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the size variant */
	sizeVariant;

	/** @type {str} Sets or returns the color of the button text */
	textColor;

	/** @type {num} Sets or returns the font size of the button text */
	textSize;

	/** @type {str} Sets or returns the position of the tooltip */
	toolTipPosition;

	/** @type {lst} Sets or returns the list of tooltip titles */
	toolTips;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the variant */
	variant;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnTouch
	 * @param {(text: str, index: num, event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(text: str, index: num, event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * SetList
	 * @param {str} items `A comma separated list or an array`
	 */
	setList(items) {return}

	/**
	 * SetItemByIndex
	 * @param {str} item `The new text`
	 * @param {num} index `The index of the item.`
	 */
	setItemByIndex(item, index) {return}

	/**
	 * AddItem
	 * @param {str} item `The additional item.`
	 */
	addItem(item) {return}

	/**
	 * RemoveItemIndex
	 * @param {num} index `The index of the item to be remove.`
	 */
	removeItemIndex(index) {return}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the item to be remove.`
	 */
	removeItemByName(name) {return}

	/** PopItem */
	popItem() {return}

	/** ShiftItem */
	shiftItem() {return}

	/**
	 * SetToolTip
	 * @param {lst} titles The titles for each item in the ButtonGroup.
	 * @param {str} [pos='top'] The positio of the tooltip. 
 Can be `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTip(titles, pos) {return}

	/**
	 * EnableElevation
	 * @param {bin} enable `true` or `false`
	 */
	enableElevation(enable) {return}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the button item.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the button item in the button group.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * SetEnabledByName
	 * @param {str} name `The button text.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * GetEnabledByName
	 * @param {str} name `The button text.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UICheckbox {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the material icon font for check stated */
	checkIcon;

	/** @type {str} Sets or returns the theme color of the checkbox when checked */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Enabled or disable the checkbox component */
	disable;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {bin} Returns whether the Checkbox is enabled or disabled */
	enabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the color of the checkbox icon */
	iconColor;

	/** @type {num} Sets or returns the size of the icon */
	iconSize;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {num} Sets or returns the space between the checkbox icon and the label text */
	spaceBetween;

	/** @type {str} Sets or returns the checkbox text */
	text;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {str} Sets or returns the text position */
	textPosition;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the material icon font for uncheck state */
	uncheckIcon;

	/** @type {bin} Sets or returns the checked state of the checkbox */
	value;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnTouch
	 * @param {(check: bin) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetIcon
	 * @param {str} checked `Material icon for checked state`
	 * @param {str} unchecked `Material icon for unchecked state`
	 */
	setIcon(checked, unchecked) {return}

	/**
	 * GetIcon
	 * @return {obj} 
	 */
	getIcon() {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UICheckboxGroup {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the material icon font for check stated */
	checkIcon;

	/** @type {str} Sets or returns the theme color use for the checkbox */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the depth of the container */
	elevation;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the color of the checkbox icon */
	iconColor;

	/** @type {num} Sets or returns the size of the checkbox icon */
	iconSize;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {lst} Sets or returns the padding of each list item */
	itemPadding;

	/** @type {str} Sets or returns the label text */
	label;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the list items */
	list;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {bin} Sets or returns whether the container is outlined or elevated */
	outlined;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the size variant of the Checkbox */
	sizeVariant;

	/** @type {num} Sets or returns the space between the checkbox icon and the text */
	spaceBetween;

	/** @type {str} Sets or returns the text color in hexadecimal format */
	textColor;

	/** @type {num} Sets or returns the size of the checkbox icon */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the material icon font for uncheck state */
	uncheckIcon;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnTouch
	 * @param {(value: bin, text: str, index: num, event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnChange
	 * @param {(values: lst) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * SetIcon
	 * @param {str} checked `Material icon font`
	 * @param {str} unchecked `Material icon font`
	 */
	setIcon(checked, unchecked) {return}

	/**
	 * GetIcon
	 * @return {obj} 
	 */
	getIcon() {return}

	/**
	 * SetCheckedByIndex
	 * @param {num} item `The item or index of the item.`
	 * @param {bin} bool The item value. Can be `true` or `false`.
	 */
	setCheckedByIndex(item, bool) {return}

	/**
	 * SetCheckedByName
	 * @param {str} name `The item or index of the item.`
	 * @param {bin} bool The item value. Can be `true` or `false`.
	 */
	setCheckedByName(name, bool) {return}

	/**
	 * GetCheckedItems
	 * @return {str} 
	 */
	getCheckedItems() {return}

	/**
	 * GetCheckedByIndex
	 * @param {num} index `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getCheckedByIndex(index) {return}

	/**
	 * GetCheckedByName
	 * @param {str} name `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getCheckedByName(name) {return}

	/**
	 * SetTextByIndex
	 * @param {num} index `The index of the item.`
	 * @param {str} val `The new text to replace.`
	 */
	setTextByIndex(index, val) {return}

	/**
	 * SetTextByName
	 * @param {str} name `The name of the item`
	 * @param {str} val `The new text to replace`
	 */
	setTextByName(name, val) {return}

	/**
	 * GetText
	 * @param {num} index `The index of the list`
	 * @return {str} 
	 */
	getText(index) {return}

	/**
	 * SetList
	 * @param {obj} list The new list items for the checkbox group.
	 */
	setList(list) {return}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the checkbox item.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the checkbox item.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the checkbox item.`
	 * @param {bin} value Values can be `true` or `false`
	 */
	setEnabledByName(name, value) {return}

	/**
	 * GetEnabledByName
	 * @param {str} name `The checkbox item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * AddItem
	 * @param {str} text `The text label for the checkbox.`
	 * @param {num} index `The index in which to insert the item.`
	 */
	addItem(text, index) {return}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * RemoveItemByName
	 * @param {str} title `The title text of the corresponding checkbox item.`
	 */
	removeItemByName(title) {return}

	/** PopItem */
	popItem() {return}

	/** ShiftItem */
	shiftItem() {return}

	/**
	 * SetOnContextMenu
	 * @param {(label: str, index: num, event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIChip {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} Sets or returns the avatar */
	avatar;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color of the chip */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {str} Sets or returns the delete icon */
	deleteIcon;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {bin} Returns whether the chip is enabled or disabled */
	enabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the material icon font if icon is provided */
	icon;

	/** @type {str} Sets or returns the icon color in hexadecimal format */
	iconColor;

	/** @type {num} Sets or returns the font-size of the icon in css font-size format */
	iconSize;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the size variant */
	sizeVariant;

	/** @type {str} Sets or returns the text of the chip */
	text;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the variant of the chip */
	variant;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetTouchable
	 * @param {bin} touchable `true` or `false`
	 */
	setTouchable(touchable) {return}

	/**
	 * SetOnDelete
	 * @param {() => void} callback 
	 */
	setOnDelete(callback) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIDatePicker {

	/** @type {str} Sets or returns the format of the selected date */
	format;

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/**
	 * SetLimits
	 * @param {str} [past] Date in the past of the form `YYYY-MM-DD`
	 * @param {str} [future] Date in the future of the form `YYYY-MM-DD`
	 */
	setLimits(past, future) {return}

	/**
	 * SetOnSelect
	 * @param {(date: str) => void} callback 
	 */
	setOnSelect(callback) {return}

	/**
	 * SetFormat
	 * @param {str} format A date format. Can be `YYYY-MM-DD` `MM-DD-YYYY` `DD-MM-YYYY`
	 */
	setFormat(format) {return}

	/**
	 * IsVisible
	 * @return {bin} 
	 */
	isVisible() {return}
}


class UIDialog {

	/** @type {UILayout} Returns the layout of the dialog where you can add custom controls */
	layout;

	/** @type {str} Sets or returns the dialog text */
	text;

	/** @type {str} Sets or returns the title text color in hexadecimal format */
	titleColor;

	/** @type {str} Sets or returns the dialog title text */
	titleText;

	/**
	 * SetOnAction
	 * @param {(text: str, index: num) => void} callback 
	 */
	setOnAction(callback) {return}

	/**
	 * SetOnClose
	 * @param {() => void} callback 
	 */
	setOnClose(callback) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}
}


class UIDivider {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the color in hexadecimal format */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIDrawer {

	/** @type {str} Sets or returns the anchor position of the drawer */
	anchor;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the drawer */
	disabled;

	/** @type {num} Sets or returns the width of the swipeable area of the Drawer */
	swipeAreaWidth;

	/** @type {num} Sets or returns the width of the drawer as a fraction of the screen viewport relative to its anchor position <col nobox #fb8c00>[0-1]</col> */
	width;

	/**
	 * AddLayout
	 * @param {obj} lay Layout component.
	 */
	addLayout(lay) {return}

	/**
	 * DisableSwipeToOpen
	 * @param {bin} value Values can be `true` or `false`.
	 */
	disableSwipeToOpen(value) {return}

	/**
	 * DisableBackdropTransition
	 * @param {bin} value Values can be `true` or `false`.
	 */
	disableBackdropTransition(value) {return}

	/**
	 * DisableDiscovery
	 * @param {bin} value Values can be `true` or `false`.
	 */
	disableDiscovery(value) {return}

	/**
	 * SetOnOpen
	 * @param {() => void} callback 
	 */
	setOnOpen(callback) {return}

	/**
	 * SetOnClose
	 * @param {() => void} callback 
	 */
	setOnClose(callback) {return}

	/**
	 * Show
	 * @param {str} anchor Open position. Can be `left` or `right`. Default is `left`
	 */
	show(anchor) {return}

	/** Hide */
	hide() {return}
}


class UIDropdown {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the dropdown material icon font */
	icon;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {str} Sets or returns the default label of the dropdown */
	label;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the dropdown list */
	list;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {str} Sets or returns the orientation of the dropdown buttongroup */
	orientation;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the size variant of the dropdown button */
	sizeVariant;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the value of the Dropdown */
	value;

	/** @type {str} Sets or returns the variant of the dropdown button */
	variant;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnChange
	 * @param {(value: obj, index: num) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * SetOnClose
	 * @param {() => void} callback 
	 */
	setOnClose(callback) {return}

	/**
	 * SetList
	 * @param {lst} val The list of new items t display.
	 */
	setList(val) {return}

	/**
	 * SetItemByIndex
	 * @param {str} item `The new item text.`
	 * @param {num} index `The index of the item to update.`
	 */
	setItemByIndex(item, index) {return}

	/**
	 * GetItemByIndex
	 * @param {num} index `The index of corresponding item.`
	 * @return {str} 
	 */
	getItemByIndex(index) {return}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the item.`
	 * @param {bin} value Values can be `true` `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the item.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the item.`
	 * @param {bin} value Values can be `true` `false`.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * GetEnabledByName
	 * @param {str} name `The name of the corresponding menu item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * AddItem
	 * @param {str} name `The name of the menu.`
	 * @param {num} index `The index in which to insert the menu item.`
	 */
	addItem(name, index) {return}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the menu item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the menu item.`
	 */
	removeItemByName(name) {return}

	/** ShiftItem */
	shiftItem() {return}

	/** PopItem */
	popItem() {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIFAB {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color for the FAB */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {bin} Sets or returns the disabled state of the ripple effect */
	disabledRipple;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the material icon font */
	icon;

	/** @type {num} Sets or returns the size of the icon */
	iconSize;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the size variant of the FAB */
	sizeVariant;

	/** @type {str} Sets or returns the text for extended FAB */
	text;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the variant use for the FAB */
	variant;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIImage {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the material icon for error placeholder image */
	errorIcon;

	/** @type {str} Sets or returns the path or url of the image file */
	file;

	/** @type {str} Sets or returns the background color of the canvas */
	fill;

	/** @type {str} Sets or returns the fill color used on close paths such as square, circle, rectangle or arcs */
	fillColor;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {str} Sets or returns the style of the end caps for a line */
	lineCap;

	/** @type {str} Sets or returns the type of corner created when two lines meet */
	lineJoin;

	/** @type {num} Sets or returns the current line thickness */
	lineWidth;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the maximum miter length */
	miterLimit;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {lst} Returns the pixel data of the image */
	pixelData;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the current color of the line or stroke */
	strokeColor;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the text-size for drawing in the canvas */
	textSize;

	/** @type {str} Sets or returns the text-style for drawing in the canvas */
	textStyle;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnLoad
	 * @param {() => void} callback 
	 */
	setOnLoad(callback) {return}

	/**
	 * EnableContextMenu
	 * @param {bin} value Value. Can be `true` `false`
	 */
	enableContextMenu(value) {return}

	/**
	 * SetImage
	 * @param {str} file `The path to the image file.`
	 */
	setImage(file) {return}

	/**
	 * GetPixelColor
	 * @param {num} x `The x-coordinate of the pixel from the left.`
	 * @param {num} y `The y-coordinate of the pixel from the top.`
	 * @return {lst} 
	 */
	getPixelColor(x, y) {return}

	/**
	 * GetPixelData
	 * @return {str} 
	 */
	getPixelData() {return}

	/**
	 * DrawLine
	 * @param {num} x1 `The x-coordinate of the starting point in pixels.`
	 * @param {num} y1 `The y-coordinate of the starting point in pixels`
	 * @param {num} x2 `The x-coordinate of the second point in pixels.`
	 * @param {num} y2 `The y-coordinate of the second point in pixels.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 */
	drawLine(x1, y1, x2, y2, strokeColor, strokeWidth) {return}

	/**
	 * DrawCircle
	 * @param {num} x `The x-coordinate of the center of the circle in pixels.`
	 * @param {num} y `The y-coordinate of the center of the circle in pixels.`
	 * @param {num} radius `The radius of the circle in pixels.`
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stoke thickness.`
	 */
	drawCircle(x, y, radius, fillColor, strokeColor, strokeWidth) {return}

	/**
	 * DrawSquare
	 * @param {num} x `The position from the left of the top-left corner of the square in pixels.`
	 * @param {num} y `The distance from the top of the top-left corner of the square in pixels.`
	 * @param {num} width `The width of the square in pixels.`
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness in pixels.`
	 */
	drawSquare(x, y, width, fillColor, strokeColor, strokeWidth) {return}

	/**
	 * DrawRectangle
	 * @param {num} x1 `The distance from the left of the top-left corner of the rectangle in pixels.`
	 * @param {num} y1 `The distance from the top of the top-left corner of the rectangle in pixels.`
	 * @param {num} width `The width of the rectangle in pixels.`
	 * @param {num} height `The height of the rectangle in pixels.`
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 */
	drawRectangle(x1, y1, width, height, fillColor, strokeColor, strokeWidth) {return}

	/**
	 * DrawArc
	 * @param {num} x `The x-coordinate of the center of the arc in pixels.`
	 * @param {num} y `The y-coordinate of the center of the arc in pixels.`
	 * @param {num} radius `The radius of the arc in pixels.`
	 * @param {num} start `The starting angle in degress`
	 * @param {num} end `The angle in degress in which the arc will stop.`
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 */
	drawArc(x, y, radius, start, end, fillColor, strokeColor, strokeWidth) {return}

	/**
	 * DrawImage
	 * @param {str} img `Path to image file.`
	 * @param {num} [x] `The distance from the left of the top-left corner of the image in pixels.`
	 * @param {num} [y] `The distance from the top of the top-left corner of the image in pixels.`
	 * @param {num} [width] `If provided`, ` the image will be shrink or stretch to fill this width in pixels.`
	 * @param {num} [height] `If provided`, ` the height of the image will be shrink or stretch to fill this height in pixels.`
	 */
	drawImage(img, x, y, width, height) {return}

	/** Clear */
	clear() {return}

	/**
	 * DrawPolyline
	 * @param {lst} points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 */
	drawPolyline(points, strokeColor, strokeWidth) {return}

	/**
	 * DrawPolygon
	 * @param {lst} points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 */
	drawPolygon(points, fillColor, strokeColor, strokeWidth) {return}

	/**
	 * DrawPoint
	 * @param {num} x `The x-coordinate in pixels.`
	 * @param {num} y `The y-coordinate in pixels.`
	 * @param {str} [color] `A hexadecimal color.`
	 */
	drawPoint(x, y, color) {return}

	/**
	 * SetOnTouchMove
	 * @param {() => void} callback 
	 */
	setOnTouchMove(callback) {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UILayout {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} Sets or returns the horizontal alignment of the control in a Linear Layout */
	alignment;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {lst} Sets or returns the margins of child components */
	childMargins;

	/** @type {str} Sets or returns the spacing of the child control in a Linear Layout */
	childSpacing;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {num} Sets or returns the index of the current slide */
	currentSlide;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {str} Sets or returns the orientation of the controls in a Linear Layout */
	orientation;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the vertical alignment of the controls in a Linear Layout */
	verticalAlignment;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetChildMargins
	 * @param {num} [left] `Left margin.`
	 * @param {num} [top] `Top margin.`
	 * @param {num} [right] `Right margin.`
	 * @param {num} [bottom] `Bottom margin.`
	 * @param {str} [mode='px'] `px`. Default is a fraction of viewport.
	 */
	setChildMargins(left, top, right, bottom, mode) {return}

	/** Show */
	show() {return}

	/**
	 * Goto
	 * @param {num} index `Index of a given layout.`
	 */
	goto(index) {return}

	/**
	 * GetCurrentSlide
	 * @return {num} 
	 */
	getCurrentSlide() {return}

	/** Next */
	next() {return}

	/** Previous */
	previous() {return}

	/**
	 * GetChildOrder
	 * @param {obj} child The child component of the layout.
	 * @return {num} 
	 */
	getChildOrder(child) {return}

	/**
	 * ChildToFront
	 * @param {obj} child The child object of the layout.
	 */
	childToFront(child) {return}

	/**
	 * HasChild
	 * @param {obj} child The child component to check.
	 * @return {bin} 
	 */
	hasChild(child) {return}

	/**
	 * RemoveChild
	 * @param {obj} child The child component to be remove.
	 */
	removeChild(child) {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIList {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} Sets or returns the size of the avatar */
	avatarSize;

	/** @type {str} Sets or returns the variant of the avatar */
	avatarVariant;

	/** @type {str} Sets or returns the background color in a hexadecimal format */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color of the checkbox when <col nobox #fb8c00>Selectable</col> option is enabled */
	checkboxColor;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {num} Sets or returns the depth of the list container */
	elevation;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the icon color in a hexadecimal format */
	iconColor;

	/** @type {num} Sets or returns the size of the icon text */
	iconSize;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {lst} Sets or returns the padding of each list item */
	itemPadding;

	/** @type {str} Sets or returns the label text */
	label;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {bin} Sets or returns whether the container is outlined or elevated */
	outlined;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {bin} Sets or returns a boolean whether the list is selectable or not */
	selectable;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {str} Sets or returns the color of the title text in hexadecimal format */
	textColor1;

	/** @type {str} Sets or returns the color of the body text in hexadecimal format */
	textColor2;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Sets or returns the size of the title text */
	textSize1;

	/** @type {num} Sets or returns the size of the body text */
	textSize2;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * AddItem
	 * @param {str} title `The title of the item.`
	 * @param {str} [body] `The text description of the item.`
	 * @param {str} [image] `A material icon or image file path.`
	 * @param {num} [index] `The index in which to add or insert the item.`
	 */
	addItem(title, body, image, index) {return}

	/**
	 * SetOnTouch
	 * @param {(title: str, body: str, icon: str, index: num, event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnSelect
	 * @param {(title: str, index: num) => void} callback 
	 */
	setOnSelect(callback) {return}

	/**
	 * SetOnAction
	 * @param {(icon: str, index: num) => void} callback 
	 */
	setOnAction(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(title: str, body: str, icon: str, index: num, event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * GetSelectedItems
	 * @return {lst_num} 
	 */
	getSelectedItems() {return}

	/**
	 * GetSelectedTitles
	 * @return {str[]} 
	 */
	getSelectedTitles() {return}

	/**
	 * SetList
	 * @param {lst} list A comma separated list of items or an array. See the list format above.
	 */
	setList(list) {return}

	/**
	 * SetSelectable
	 * @param {bin} selectable `If true`, ` make the list selectable. Otherwise`, ` list is not selectable`
	 */
	setSelectable(selectable) {return}

	/**
	 * SetItemByIndex
	 * @param {num} index `The index of the item to update`
	 * @param {str} newTitle `The new title of the item`
	 * @param {str} [newBody] `The new body text`
	 * @param {str} [newImage] `The new icon or image`
	 */
	setItemByIndex(index, newTitle, newBody, newImage) {return}

	/**
	 * GetItemByIndex
	 * @param {num} index `Returns the item in a list as an object of the following format { title`, ` body`, ` image }`
	 * @return {{ title: str, body: str, image: str }} { title, body, image }
	 */
	getItemByIndex(index) {return}

	/**
	 * SetItem
	 * @param {str} title `The title of the list item to update.`
	 * @param {str} newTitle `The new title of the list item.`
	 * @param {str} [newBody] `The new description of the list item.`
	 * @param {str} [newImage] `A material icon font or image file path.`
	 */
	setItem(title, newTitle, newBody, newImage) {return}

	/**
	 * GetItem
	 * @param {str} title `Returns the item in a list as an object of the following format { title`, ` body`, ` image }`
	 * @return {{ title: str, body: str, image: str }} { title, body, image }
	 */
	getItem(title) {return}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the item to remove`
	 */
	removeItemByIndex(index) {return}

	/**
	 * RemoveItemByName
	 * @param {str} name `The title of the list to remove.`
	 */
	removeItemByName(name) {return}

	/** ShiftItem */
	shiftItem() {return}

	/** PopItem */
	popItem() {return}

	/** DeselectAll */
	deselectAll() {return}

	/**
	 * SelectItemByIndex
	 * @param {num} index `The index to be selected.`
	 */
	selectItemByIndex(index) {return}

	/**
	 * SetTitleText
	 * @param {num} index `The index of the corresponding list item.`
	 * @param {str} title `The new title text.`
	 */
	setTitleText(index, title) {return}

	/**
	 * SetBodyText
	 * @param {num} index `The index of the list whose secondary text to be changed.`
	 * @param {str} newText `The new secondary text.`
	 */
	setBodyText(index, newText) {return}

	/**
	 * SetIcon
	 * @param {num} index `The index of the corresponding list item.`
	 * @param {str} icon `Material icon font.`
	 */
	setIcon(index, icon) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIMenu {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {lst} Sets or returns the padding of each menu item */
	itemPadding;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the items in the menu */
	list;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnTouch
	 * @param {(item: str, icon: str, index: num) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Show
	 * @param {obj} parent The component where to anchor the menu. It can be a `Button` or an `Image`.
	 */
	show(parent) {return}

	/** Hide */
	hide() {return}

	/**
	 * SetList
	 * @param {lst} list The list items to show.
	 */
	setList(list) {return}

	/**
	 * AddItem
	 * @param {str} name `The new item to be added.`
	 * @param {num} index `The index at which to add the item.`
	 */
	addItem(name, index) {return}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the item to remove.`
	 */
	removeItemByName(name) {return}

	/** PopItem */
	popItem() {return}

	/** ShiftItem */
	shiftItem() {return}

	/**
	 * SetPosition
	 * @param {num} left `The position of the menu from the left of the parent or anchor component. The unit is in pixels.`
	 * @param {num} top `The position of the menu from the top of the parent or anchor component. The unit is in pixels.`
	 */
	setPosition(left, top) {return}

	/**
	 * SetAutoFocus
	 * @param {bin} bool Value can be `true` or `false`
	 */
	setAutoFocus(bool) {return}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the item.`
	 * @param {bin} value Values can be `true` or `false`. `false` to disable.
	 */
	setEnabled(index, value) {return}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the item.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the corresping item the menu.`
	 * @param {bin} value Values can be `true` or `false`. `false` to disable an item.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * GetEnabledByName
	 * @param {str} name `The name of the item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIProgress {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the size of the circular progress control */
	circleSize;

	/** @type {str} Sets or returns the theme color */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Sets or returns the thickness of the circular stroke */
	thickness;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Sets or returns the type of the Progress Component */
	type;

	/** @type {num} Sets or returns the value of the progress control */
	value;

	/** @type {str} Sets or returns the variant of the progress component */
	variant;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIRadioGroup {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color of the Radio Component */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the disabled state of the radio button group */
	disabled;

	/** @type {num} Sets or returns the depth of the RadioGroup container */
	elevation;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the icon color in hexadecimal format */
	iconColor;

	/** @type {str} Sets or returns the position of the icon */
	iconPosition;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {lst} Sets or returns the padding of each radio item */
	itemPadding;

	/** @type {str} Sets or returns the label text of the RadioGroup Component */
	label;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the list array */
	list;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {bin} Sets or returns whether the container is outlined or elevated */
	outlined;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {str} Sets or returns the size of the radio button */
	radioSize;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {num} Sets or returns the space between the radio button and the text */
	spaceBetween;

	/** @type {str} Stest or returns the color of the text in hexadecimal format */
	textColor;

	/** @type {str} Sets or returns the position of the label text */
	textPosition;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the value of the RadioGroup Component */
	value;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnChange
	 * @param {(index: num) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * SetOnTouch
	 * @param {(checked: bin, label: str, index: num, event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetList
	 * @param {str} val `A comma separated items`
	 */
	setList(val) {return}

	/**
	 * SetItemByIndex
	 * @param {str} item `The new item name to be displayed`
	 * @param {num} index `The index to of the item to be updated`
	 */
	setItemByIndex(item, index) {return}

	/**
	 * SetItemByName
	 * @param {str} name `The name of the item.`
	 * @param {str} text `The new text to replaced the name of the item.`
	 */
	setItemByName(name, text) {return}

	/**
	 * AddItem
	 * @param {str} name `The new item to be added.`
	 * @param {num} index `The index in which to add the item.`
	 */
	addItem(name, index) {return}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the item to remove.`
	 */
	removeItemByName(name) {return}

	/** PopItem */
	popItem() {return}

	/** ShiftItem */
	shiftItem() {return}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the item.`
	 * @param {bin} value Values can be `true` or `false`. If `false`,  the item will be disabled.
	 */
	setEnabled(index, value) {return}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * SetEnabledByName
	 * @param {str} name `The radiogroup text.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * GetEnabledByName
	 * @param {str} name `The radiogroup text.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * SetOnContextMenu
	 * @param {(label: str, index: num, event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UISelect {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {bin} Sets or returns a boolean value whether the component is enabled or disabled */
	enabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the color of the icon in hexadecimal format <col nobox #fb8c00>#rrggbb</col> */
	iconColor;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {str} Sets or returns the label text */
	label;

	/** @type {str} Sets or returns the color of the label text in hexadecimal format <col nobox #fb8c00>#rrggbb</col> */
	labelColor;

	/** @type {num} Sets or returns the size of the label */
	labelSize;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the list items */
	list;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the maximum height of the popup container */
	maxHeight;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {str} Sets or returns the color of the popup in hexadecimal format */
	popupColor;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the size variant of the Select Component */
	sizeVariant;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the value of the Select Component */
	value;

	/** @type {str} Sets or returns the variant of the Select Component */
	variant;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnChange
	 * @param {(value: str) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * SetOnOpen
	 * @param {() => void} callback 
	 */
	setOnOpen(callback) {return}

	/**
	 * SetOnClose
	 * @param {(value: str) => void} callback 
	 */
	setOnClose(callback) {return}

	/**
	 * AddItem
	 * @param {str} item `A new item to be added.`
	 * @param {num} index `The index in which to add the item.`
	 */
	addItem(item, index) {return}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the item to remove.`
	 */
	removeItemByName(name) {return}

	/** ShifItem */
	shifItem() {return}

	/** PopItem */
	popItem() {return}

	/**
	 * GetItem
	 * @param {num} index `The index of the item.`
	 * @return {num} 
	 */
	getItem(index) {return}

	/**
	 * SetList
	 * @param {obj} items A comma separated string or array of options
	 */
	setList(items) {return}

	/**
	 * SetEnabled
	 * @param {num} index `true` or `false`. You can also pass a `Boolean` to enable or disable the Select component.
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the corresponding item in the select menu.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the menu item.`
	 * @param {bin} value Value can be `true` or `false`
	 */
	setEnabledByName(name, value) {return}

	/**
	 * GetEnabledByName
	 * @param {str} name `The name of the menu item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UISlider {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color of the Slider */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {bin} Sets or returns the marks on the Slider Component */
	marks;

	/** @type {num} Sets or returns the maximum value */
	maxValue;

	/** @type {num} Sets or returns the minimum value */
	minValue;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {str} Sets or returns the orientation of the Slider Component */
	orientation;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {num} Sets or returns the Sider Component steps */
	step;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Sets or returns the track properties of the Slider Component */
	track;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Sets or returns the value of the Slider Component */
	value;

	/** @type {str} Sets or returns the value label display type */
	valueLabelDisplay;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnChange
	 * @param {(value: num) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * SetOnSelect
	 * @param {(value: num) => void} callback 
	 */
	setOnSelect(callback) {return}

	/**
	 * SetRange
	 * @param {num} [min] `Minimum value of the slider.`
	 * @param {num} [max] `Maximum value of the slider.`
	 */
	setRange(min, max) {return}

	/**
	 * SetMarks
	 * @param {obj} val The marks on the Slider Component.
	 */
	setMarks(val) {return}

	/**
	 * GetMarks
	 * @return {bin} 
	 */
	getMarks() {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIStepper {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Sets or returns the active step */
	activeStep;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {num} Sets or returns the elevation of the mobile stepper */
	elevation;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {str} Sets or returns the orientation of the Stepper */
	orientation;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnComplete
	 * @param {() => void} callback 
	 */
	setOnComplete(callback) {return}

	/**
	 * SetOnChange
	 * @param {(index: num) => void} callback 
	 */
	setOnChange(callback) {return}

	/** NextStep */
	nextStep() {return}

	/** PreviousStep */
	previousStep() {return}

	/**
	 * GetLayout
	 * @param {num} index `The index of the corresponing stepper layout`
	 * @return {UILayout} 
	 */
	getLayout(index) {return}

	/**
	 * GetLayoutIndex
	 * @param {obj} layout The layout to check.
	 * @return {num} 
	 */
	getLayoutIndex(layout) {return}

	/**
	 * RemoveStep
	 * @param {num} index `The index of the step to remove.`
	 */
	removeStep(index) {return}

	/**
	 * SetTitleText
	 * @param {num} index `The index of the Stepper.`
	 * @param {str} title `The new title text.`
	 */
	setTitleText(index, title) {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UISwitch {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the disabled state of the ripple effect */
	disableRipple;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the edge position of the toggle */
	edge;

	/** @type {bin} Sets or returns a Boolean whether the component is enabled or disabled */
	enable;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the icon position */
	iconPosition;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {bin} Sets or returns a boolean value whether this component is required or not */
	required;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the size variant of the toggle switch */
	sizeVariant;

	/** @type {num} Sets or returns the space between the switch icon and the label text */
	spaceBetween;

	/** @type {str} Sets or returns the label text */
	text;

	/** @type {str} Sets or returns the text color in hexadecimal format */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {bin} Sets or returns the value of the switch toggle */
	value;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnTouch
	 * @param {(check: bin) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UISwitchGroup {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the edge position of the toggle */
	edge;

	/** @type {num} Sets or returns the depth of the control container */
	elevation;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the theme color <col nobox #fb8c00>Primary</col> <col nobox #fb8c00>Secondary</col> or <col nobox #fb8c00>Default</col> */
	iconColor;

	/** @type {num} Sets or returns the size of the icon */
	iconSize;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {lst} Sets or returns the padding of each switch item */
	itemPadding;

	/** @type {str} Sets or returns the label text */
	label;

	/** @type {str} Sets or returns the color of the label text in hexadecimal format */
	labelColor;

	/** @type {num} Sets or returns the size of the label text */
	labelSize;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the list items */
	list;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {bin} Sets or returns whether the container is outlined or elevated */
	outlined;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the theme color <col nobox #fb8c00>primary</col> or <col nobox #fb8c00>secondary</col> */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnTouch
	 * @param {(value: bin, text: str, index: num, event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnChange
	 * @param {(values: lst) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * SetValueByIndex
	 * @param {num} index `The index of the corresponding item.`
	 * @param {bin} val A Values can be `true` or `false`
	 */
	setValueByIndex(index, val) {return}

	/**
	 * GetValueByIndex
	 * @param {num} index `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getValueByIndex(index) {return}

	/**
	 * SetList
	 * @param {obj} lst The list array or a comma separated list.
	 */
	setList(lst) {return}

	/**
	 * AddItem
	 * @param {str} title `The title text.`
	 * @param {str} icon `Material icon font.`
	 * @param {bin} value `The value of the item.`
	 * @param {num} index `The index in which to insert the item. Default is at the bottom of the list.`
	 */
	addItem(title, icon, value, index) {return}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * RemoveItemByName
	 * @param {str} title `The title text of the SwitchGroup item.`
	 */
	removeItemByName(title) {return}

	/** PopItem */
	popItem() {return}

	/** ShiftItem */
	shiftItem() {return}

	/**
	 * SetEnabled
	 * @param {num} index The index of the corresponding item in the list. You can also pass `Boolean` to enable or disable the switchgroup component.
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the corresponding item in the switch group.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * SetOnContextMenu
	 * @param {(text: str, index: num, event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UITabs {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {bin} Sets or returns a boolean value whether the tabs are centered or not */
	centered;

	/** @type {str} Sets or returns the theme color of the tab bar */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {num} Sets or returns the elevation of the tab bar */
	elevation;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the color ofthe tab icon */
	iconColor;

	/** @type {num} Sets or returns the tab icon */
	iconSize;

	/** @type {str} Sets or returns the color of the indicator bar */
	indicatorColor;

	/** @type {num} Sets or returns the corner radius of the indicator bar in pixels */
	indicatorRadius;

	/** @type {num} Sets or returns the thickness of the indicator bar in pixels */
	indicatorThickness;

	/** @type {num} Sets or returns the width of the indicator bar as a fraction of the tab item width */
	indicatorWidth;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the scroll button mode when tab items overflow the width of its container */
	scrollButtonMode;

	/** @type {num} Sets or returns the height of the tab in pixels */
	tabHeight;

	/** @type {num} Sets or returns the padding of the tab items */
	tabPadding;

	/** @type {str} Sets or returns the theme color for the tab bar titles <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col> */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the variant of the Tabs Component */
	variant;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnChange
	 * @param {(name: str, index: num) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * SetOnTouch
	 * @param {(name: str, index: num) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetTabs
	 * @param {lst} tabs The tab titles array. See examples for format.
	 */
	setTabs(tabs) {return}

	/**
	 * AddTab
	 * @param {str} name `The name of the tab.`
	 * @param {str} icon `Material icon font.`
	 * @param {num} index `The index in which to insert the tab.`
	 */
	addTab(name, icon, index) {return}

	/**
	 * SetTitleText
	 * @param {num} index `Index of the tab.`
	 * @param {str} title `The new title.`
	 */
	setTitleText(index, title) {return}

	/**
	 * SetIcon
	 * @param {num} index `The index of the tab.`
	 * @param {str} icon `Material icon font.`
	 */
	setIcon(index, icon) {return}

	/**
	 * RemoveTabByIndex
	 * @param {num} index `The index of the corresponding tab to remove.`
	 */
	removeTabByIndex(index) {return}

	/**
	 * RemoveTabByName
	 * @param {str} name `The name of the corresponding tab to remove.`
	 */
	removeTabByName(name) {return}

	/**
	 * GetLayout
	 * @param {str} name `The name of the tab. You can also pass the index of the tab.`
	 * @return {UILayout} 
	 */
	getLayout(name) {return}

	/**
	 * ShowTab
	 * @param {str} name `The name of the tab to be shown.`
	 */
	showTab(name) {return}

	/**
	 * ShowTabByIndex
	 * @param {num} index `The index of the tab to be shown.`
	 */
	showTabByIndex(index) {return}

	/**
	 * SetEnabled
	 * @param {num} index The index of the corresponding tab. Pass `Boolean` if you want to disable the entire Tabs component.
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the corresponding tab.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the tab.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * GetEnabledByName
	 * @param {str} name `The name of the tab.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * ShowScrollButton
	 * @param {str} mode Values can be 
 `auto` : will only present them when not all the items are visible 
 `desktop` : will only present them on medium and larger viewports 
 `on` : will always present them 
 `off` : will never present them.
	 */
	showScrollButton(mode) {return}

	/**
	 * GetLayoutIndex
	 * @param {obj} layout The layout to check.
	 * @return {num} 
	 */
	getLayoutIndex(layout) {return}

	/**
	 * SetOnContextMenu
	 * @param {(text: str, index: num, event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * SetIndicatorStyle
	 * @param {num} width Fraction of the tab item width. This works only on `fullWidth` tab.
	 * @param {num} thickness `Thickness in pixels.`
	 * @param {str} color Hexadecimal color of the form `#rrggbb`.
	 * @param {num} radius `The corner radius in pixels.`
	 */
	setIndicatorStyle(width, thickness, color, radius) {return}

	/**
	 * SetTabPadding
	 * @param {num} [left] `The tab-item left padding.`
	 * @param {num} [top] `The tab-item top padding.`
	 * @param {num} [right] `The tab-item right padding.`
	 * @param {num} [bottom] `The tab-item bottom padding.`
	 * @param {str} [mode='px'] Unit of measurement. Default is `px`. You can pass `%` `rem` `vw`.
	 */
	setTabPadding(left, top, right, bottom, mode) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIText {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} Sets or returns the horizontal alignment of the text */
	alignment;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Sets or returns whether the text is <col nobox #fb8c00>bold</col> or not */
	bold;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color of the text <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col> */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the ellipsis use when the text is truncated */
	ellipsize;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {bin} Sets or returns whether the text is <col nobox #fb8c00>italized</col> or not */
	italic;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the text */
	text;

	/** @type {str} Sets or returns the text color in hexadecimal format */
	textColor;

	/** @type {num} Sets or returns the fontsize for the text */
	textSize;

	/** @type {str} Sets or returns the style of the text */
	textStyle;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {bin} Sets or returns whether the text is <col nobox #fb8c00>underlined</col> or not */
	underline;

	/** @type {str} Sets or returns the text variants */
	variant;

	/** @type {str} Sets or returns the vertical alignment of the text */
	verticalAlignment;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetHtml
	 * @param {str} html `An html string`
	 */
	setHtml(html) {return}

	/**
	 * GetHtml
	 * @return {str} 
	 */
	getHtml() {return}

	/**
	 * SetTextShadow
	 * @param {num} radius `The radius in pixels`
	 * @param {num} dx `X-offset of the shadow`
	 * @param {num} dy `Y-offset of the shadow`
	 * @param {obj} color A hexadecimal color e.g. `#aarrggbb`
	 */
	setTextShadow(radius, dx, dy, color) {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UITextField {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {bin} Sets or returns a boolean value whethe the input is focus when rendered into the DOM */
	autoFocus;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {str} Sets or returns the theme color of the textfield component */
	color;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Returns the end adornment text or icon */
	endAdornment;

	/** @type {bin} Sets or returns the error state of the TextField component */
	error;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Sets or returns the helper text or the hint below the input */
	helperText;

	/** @type {str} Sets or returns the hint text */
	hint;

	/** @type {str} Sets or returns the input type */
	inputType;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {str} Sets or returns the label text */
	label;

	/** @type {str} Sets return the label color in hexadecimal format <col nobox #fb8c00>#rrggbb</col> */
	labelColor;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the maximum rows for a <col nobox #fb8c00>multiline</col> textfield */
	maxRows;

	/** @type {num} Sets or returns the minimum rows for a <col nobox #fb8c00>multiline</col> textfield */
	minRows;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {str} Sets or returns the outline color in hexadecimal form <col nobox #fb8c00>#rrggbb</col> when the textfield is focus */
	outlineColor;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {str} Sets or returns the placeholder text */
	placeholder;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {bin} Sets or returns a boolean value whether the text field in required or not */
	required;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the size variant of the textfield */
	sizeVariant;

	/** @type {str} Returns the start adornment text or icon */
	startAdornment;

	/** @type {num} Sets or returns the step increment if the input is of type number; */
	stepIncrement;

	/** @type {str} Sets or returns the text value of the TextField Component */
	text;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the variant of the TextField */
	variant;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnEnter
	 * @param {(text: str) => void} callback 
	 */
	setOnEnter(callback) {return}

	/**
	 * SetOnChange
	 * @param {(text: str) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * SetOnFocus
	 * @param {(focus: bin) => void} callback 
	 */
	setOnFocus(callback) {return}

	/**
	 * SetRows
	 * @param {num} [min] `The minimum number of rows.`
	 * @param {num} [max] `The maximum number of rows.`
	 */
	setRows(min, max) {return}

	/**
	 * SetStartAdornment
	 * @param {str} text `Text or material icon font.`
	 * @param {str} [type] A comma separated options for start adornment control. Options can be 
 `Icon` : If the adornment is an icon. 
 `Touchable` : If the adornment is touchable.
	 */
	setStartAdornment(text, type) {return}

	/**
	 * SetStartAdornmentOnTouch
	 * @param {() => void} callback 
	 */
	setStartAdornmentOnTouch(callback) {return}

	/**
	 * GetStartAdornment
	 * @return {str} 
	 */
	getStartAdornment() {return}

	/**
	 * SetEndAdornment
	 * @param {str} text `Text or material icon font.`
	 * @param {str} [type] A comma separated options for end adornment control. Options can be 
 `Icon` : If the adornment is an icon. 
 `Touchable` : If the adornment is touchable.
	 */
	setEndAdornment(text, type) {return}

	/**
	 * SetEndAdornmentOnTouch
	 * @param {() => void} callback 
	 */
	setEndAdornmentOnTouch(callback) {return}

	/**
	 * GetEndAdornment
	 * @return {str} 
	 */
	getEndAdornment() {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UITimePicker {

	/** @type {str} Sets or returns the time format */
	format;

	/**
	 * Show
	 * @param {(value: str) => void} callback 
	 * @param {str} format A time format. Can be of the form 
 Hour formats 
 `H` : 0 1 ... 22 23 
 `HH` : 	00 01 ... 22 23 
 `h` : 1 2 ... 11 12 
 `hh` : 	01 02 ... 11 12 
 Minute formats 
 `m` : 	0 1 ... 58 59 
 `mm` : 00 01 ... 58 59 
 AM/PM 
 `A` : AM or PM 
 `a` : am pm
	 * @return {bin} 
	 */
	show(callback, format) {return}
}


class UITreeView {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {obj} Sets or returns the list object */
	list;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Returns the selected item of the TreeView */
	value;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/**
	 * SetOnTouch
	 * @param {(value: str, path: str) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetList
	 * @param {obj} obj The list object of the treeview items. See example above.
	 */
	setList(obj) {return}

	/**
	 * AddItem
	 * @param {str} name `The label text for the new item.`
	 * @param {obj} obj See list object for more info.
	 */
	addItem(name, obj) {return}

	/**
	 * GetItem
	 * @param {str} name `The parent name of the tree items.`
	 * @return {obj} 
	 */
	getItem(name) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIWebView {

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {str} A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {lst} Sets or returns the list of blocked urls */
	blockUrls;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {bin} Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled;

	/** @type {obj} A reference to the webview`s window document object */
	document;

	/** @type {str} Sets or returns the redirect url when an error occur */
	errorPage;

	/** @type {str} Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {str} Setst or returns the html loaded in the iframe */
	html;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Sets or returns the text zoom of the page loaded in the web view */
	textZoom;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the url of the webview */
	url;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {obj} A reference to the webview`s window object */
	window;

	/**
	 * SetOnLoad
	 * @param {() => void} callback 
	 */
	setOnLoad(callback) {return}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate
	 * @param {str} anim The type of animation. Here are the available values 
 `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` 
 `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` 
 `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` 
 `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` 
 `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` 
 `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` 
 `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` 
 `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` 
 `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` 
 `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` 
 `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` 
 `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` 
 `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` 
 `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` 
 `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` 
 `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param {num} [duration] `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 */
	setSize(width, height) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/** Gone */
	gone() {return}

	/** Destroy */
	destroy() {return}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width, clr, style) {return}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIColorPicker {

	/** @type {str} Returns the value of the chosen color */
	value;

	/**
	 * GetValue
	 * @return {str} 
	 */
	getValue() {return}
}


class UIDateTimePicker {

	/**
	 * SetOnSelect
	 * @param {(value: str) => void} callback 
	 */
	setOnSelect(callback) {return}
}


class UIPopover {

	/** @type {str} Sets or returns the path to the background image */
	backImage;

	/** @type {str} Sets or returns the font file use for the Popover */
	fontFile;
}


class UIPopup {

	/** @type {num} Sets or returns the duration of the popup in milliseconds */
	duration;

	/** @type {str} Sets or returns the text of the popup */
	text;

	/**
	 * SetOnClose
	 * @param {() => void} callback 
	 */
	setOnClose(callback) {return}

	/**
	 * SetOnAction
	 * @param {() => void} callback 
	 */
	setOnAction(callback) {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/**
	 * SetPosition
	 * @param {str} [vertical] Vertical alignment. Values can be `Top` `Bottom`
	 * @param {str} [horizontal] Horizontal alignment. Values can be `Left` `Center` and `Right`
	 */
	setPosition(vertical, horizontal) {return}

	/**
	 * GetPosition
	 * @return {obj} 
	 */
	getPosition() {return}
}


class UIProgressDialog {

	/**
	 * Text
	 * @return {str} 
	 */
	text() {return}

	/** Show */
	show() {return}

	/** Hide */
	hide() {return}

	/**
	 * SetOnClose
	 * @param {() => void} callback 
	 */
	setOnClose(callback) {return}
}

