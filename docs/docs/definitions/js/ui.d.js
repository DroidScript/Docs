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
	addAccordion(parent, titles, options, width, height) {}

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
	addAppBar(parent, title, options, width, height) {}

	/**
	 * AddBottomNavbar
	 * @param {obj} parent The parent layout where to add the BottomNavbar
	 * @param {lst} navs An array whose elements are of the form `[ "Title", "Icon" ]`
	 * @param {str_com} [options] one or a combination of the following: `Hidelabels`
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UIBottomNavbar} 
	 */
	addBottomNavbar(parent, navs, options, width, height) {}

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
	addButton(parent, text, options, width, height) {}

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
	addButtonGroup(parent, list, options, width, height) {}

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
	addCheckbox(parent, text, options, width, height) {}

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
	addCheckboxGroup(parent, list, options, width, height) {}

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
	addChip(parent, text, options, width, height) {}

	/**
	 * AddDatePicker
	 * @param {str} date A default date value to which the datepicker begins. Format `YYYY-MM-DD`
	 * @param {str_com} [options] `Portrait` `Landscape`
	 * @return {UIDatePicker} 
	 */
	addDatePicker(date, options) {}

	/**
	 * AddDialog
	 * @param {str} title `The dialog title text.`
	 * @param {str} body `The dialog message to be shown.`
	 * @param {str} [actions] `A comma separated text for action buttons.`
	 * @param {str_com} [options] Colors: `Primary` `Secondary` 
 `Util`: `NoCancel` prevents the dialog from closing on action.
	 * @return {UIDialog} 
	 */
	addDialog(title, body, actions, options) {}

	/**
	 * AddDivider
	 * @param {obj} parent The layour where to add the divider.
	 * @param {num} [width] `Fraction of the screen width. Default is 1.`
	 * @param {str} [options] A comma separated Divider options. Values can be `Inset`
	 * @return {UIDivider} 
	 */
	addDivider(parent, width, options) {}

	/**
	 * AddDrawer
	 * @param {obj} lay The drawer layout.
	 * @param {str_com} [options] 
	 * @return {UIDrawer} 
	 */
	addDrawer(lay, options) {}

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
	addDropdown(parent, list, options, width, height) {}

	/**
	 * AddFAB
	 * @param {obj} parent The parent layout where to add the fab
	 * @param {str} icon `The string icon of the FAB`
	 * @param {str_com} [options] `Fixed` `Static` `Rounded` `Extended` `Left` `Right`
	 * @param {str} [text] `Text to show for extended FABs.`
	 * @return {UIFAB} 
	 */
	addFAB(parent, icon, options, text) {}

	/**
	 * AddImage
	 * @param {obj} parent The parent layout where to add the image.
	 * @param {str} file `The path to the image.`
	 * @param {str} [options] A comma seprated options for the image. Can be `Canvas` `Button` or `Avatar`
	 * @param {num} [width] `Fraction of the screen width.`
	 * @param {num} [height] `Fraction of the screen height.`
	 * @return {UIImage} 
	 */
	addImage(parent, file, options, width, height) {}

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
	addLayout(parent, type, options, width, height) {}

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
	addList(parent, list, options, width, height) {}

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
	addMenu(parent, list, options, width, height) {}

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
	addProgress(parent, value, options, width, height) {}

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
	addRadioGroup(parent, list, options, width, height) {}

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
	addSelect(parent, list, options, width, height) {}

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
	addSlider(parent, value, options, width, height) {}

	/**
	 * AddStepper
	 * @param {obj} parent The parent layout of the Stepper
	 * @param {lst} [steps] An array of titles.
	 * @param {str} [options] A comma separated Stepper options. Values can be `Vertical` `Horizontal` `Loop` `Mobile` or `AlternativeLabel`.
	 * @param {num} [width] `Fraction of the screen width. [0-1]`
	 * @param {num} [height] `Fraction of the screen height. [0-1]`
	 * @return {UIStepper} 
	 */
	addStepper(parent, steps, options, width, height) {}

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
	addSwitch(parent, text, options, width, height) {}

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
	addSwitchGroup(parent, list, options, width, height) {}

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
	addTabs(parent, list, options, width, height) {}

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
	addText(parent, text, options, width, height) {}

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
	addTextField(parent, text, options, width, height) {}

	/**
	 * AddTimePicker
	 * @param {str} time A default time value to which the timepicker begins. Value is of the form `HH:mm`
	 * @param {str_com} [options] `Portrait` `24H` `12H`
	 * @return {UITimePicker} 
	 */
	addTimePicker(time, options) {}

	/**
	 * AddTreeView
	 * @param {obj} parent The parent layout where to add the TreeView component.
	 * @param {obj} [list] An object of the treeview items. See example below.
	 * @param {str} [options] `A comma separated TreeView options.`
	 * @param {num} [width] `Fraction of the screen width.`
	 * @param {num} [height] `Fraction of the screen height.`
	 * @return {UITreeView} 
	 */
	addTreeView(parent, list, options, width, height) {}

	/**
	 * AddWebView
	 * @param {obj} parent The parent layout where to add the WebView component.
	 * @param {str} [url] `The url of the website.`
	 * @param {str_com} [options] 
	 * @param {num} [width] `Fraction of the parent width.`
	 * @param {num} [height] `Fraction of the parent height.`
	 * @return {UIWebView} 
	 */
	addWebView(parent, url, options, width, height) {}

	/**
	 * ShowColorPicker
	 * @param {str} [value] `A hexadecimal default value for the color picker.`
	 * @param {str} [options] A comma separated color picker options. Values can be 
 `Alpha` Includes an alpha
	 * @return {UIColorPicker} 
	 */
	showColorPicker(value, options) {}

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
	showDateTimePicker(callback, date, time, format) {}

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
	showPopover(parent, text, position, width, height) {}

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
	showPopup(msg, options, duration, action) {}

	/**
	 * ShowProgressDialog
	 * @param {str} [text] The text message of the progress dialog. Options can be 
 `AutoCancel` to close the dialog when backdrop is click.
	 * @param {str_com} [options] 
	 * @return {UIProgressDialog} 
	 */
	showProgressDialog(text, options) {}

}

class UIAccordion {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the corner radius of the accordion panel
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns whether the accordion is disabled or not
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the material icon font for the expand icon
	 * @type {str} 
	 */
	expandIcon;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Sets or returns the padding of each accordion item
	 * @type {lst} 
	 */
	itemPadding;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns whether the accordion is rounded or not
	 * @type {bin} 
	 */
	rounded;

	/**
	 * Sets or returns the secondary text of the accordion items
	 * @type {lst} 
	 */
	secondaryText;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the title text color in hexadecimal format <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	textColor1;

	/**
	 * Sets or returns the secondary text color in hexadecimal format <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	textColor2;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Sets or returns the accordion title text size
	 * @type {num} 
	 */
	textSize1;

	/**
	 * Sets or returns the accordion secondary text size
	 * @type {num} 
	 */
	textSize2;

	/**
	 * Sets and returns the width of the title as fraction
	 * @type {num} 
	 */
	titleWidth;

	/**
	 * Sets or returns the list of titles for the accordion panel
	 * @type {lst} 
	 */
	titles;

	/**
	 * Collapse or shrink a corresponding accordion by its index
	 * @type {num} 
	 */
	toggle;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * GetLayout
	 * @param {num} index `The index of the accordion. You can also pass accordion title.`
	 * @return {UILayout} 
	 */
	getLayout(index) {}

	/**
	 * SetTitleText
	 * @param {num} index `The index of the corresponding title to updates.`
	 * @param {str} title `The new title text.`
	 * @return {void} 
	 */
	setTitleText(index, title) {}

	/**
	 * SetSecondaryText
	 * @param {obj} text The secondary text to display. You can pass arguments as string or array by following the format below. \n String: `"Secodary text 1,Secondary text 2,Secondary text 3"` \n `Array`: `[ "Secondary text 1", "Secondary text 2", "Secondary text 3" ]`
	 * @param {num} index If `index` is provided,  the corresponding index will be updated with the new text.
	 * @return {void} 
	 */
	setSecondaryText(text, index) {}

	/**
	 * SetExpandIcon
	 * @param {str} icon `A material icon`
	 * @return {void} 
	 */
	setExpandIcon(icon) {}

	/**
	 * AddItem
	 * @param {str} title `Accordion title`
	 * @param {str} secondaryText `Accordion secondary text`
	 * @param {num} index The index at which the accordion item will be added. If `null`,  the item will be added at the bottom of the accordion.
	 * @return {void} 
	 */
	addItem(title, secondaryText, index) {}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the corresponding accordion to remove.`
	 * @return {void} 
	 */
	removeItemByIndex(index) {}

	/**
	 * RemoveItemByName
	 * @param {str} title `The title of the corresponding accordion to remove.`
	 * @return {void} 
	 */
	removeItemByName(title) {}

	/**
	 * ShiftItem
	 * @return {void} 
	 */
	shiftItem() {}

	/**
	 * PopItem
	 * @return {void} 
	 */
	popItem() {}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the corresponding accordion.`
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	setEnabled(index, value) {}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the accordion item.`
	 * @return {bin} 
	 */
	getEnabled(index) {}

	/**
	 * SetEnabledByName
	 * @param {str} name `The title of the accordion`
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	setEnabledByName(name, value) {}

	/**
	 * GetEnabledByName
	 * @param {str} name `The title of the accordion.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {}

	/**
	 * GetLayoutIndex
	 * @param {obj} layout The layout to check.
	 * @return {num} 
	 */
	getLayoutIndex(layout) {}

	/**
	 * SetOnTouch
	 * @param {(index: num, expand: bin) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(title: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

	/**
	 * SetTextColor
	 * @param {str} color1 Color of the title text in hexadecimal format `#rrggbb`
	 * @param {str} [color2] Color of the secondary text in hexadecimal format `#rrggbb`
	 * @return {void} 
	 */
	setTextColor(color1, color2) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIAppBar {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color of the AppBar
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius of the accordion panel
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the icon of the menu button
	 * @type {str} 
	 */
	icon;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the right layout of the appbar where you can add controls
	 * @type {UILayout} 
	 */
	layout;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns whether the appbar has menu button
	 * @type {bin} 
	 */
	menu;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or return the AppBar title text
	 * @type {str} 
	 */
	text;

	/**
	 * Sets or returns the hexadecimal color of the appbar title
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the font size of the title text
	 * @type {num} 
	 */
	textSize;

	/**
	 * Sets or returns the variant of the title text
	 * @type {str} 
	 */
	textVariant;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnMenu
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnMenu(callback) {}

	/**
	 * AddLayout
	 * @param {obj} lay The layout where to add controls
	 * @return {void} 
	 */
	addLayout(lay) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIBottomNavbar {

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns whether the bottom navigation is disabled or enabled
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the icon color
	 * @type {str} 
	 */
	iconColor;

	/**
	 * Sets or returns the icon font-size
	 * @type {num} 
	 */
	iconSize;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Sets or returns a boolean whether the labels are shown or hidden on active state
	 * @type {bin} 
	 */
	labels;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the navigation actions array
	 * @type {lst} 
	 */
	list;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the current value of the BottomNavbar
	 * @type {num} 
	 */
	value;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnContextMenu
	 * @param {(text: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

	/**
	 * SetList
	 * @param {lst} navs The navigation actions array. See `navs` param above for format.
	 * @return {void} 
	 */
	setList(navs) {}

	/**
	 * GetList
	 * @return {lst} 
	 */
	getList() {}

	/**
	 * SelectItem
	 * @param {str} name `The name to be set to active`
	 * @return {void} 
	 */
	selectItem(name) {}

	/**
	 * SelectItemByIndex
	 * @param {num} index `The index of the bottom navigation action to be selected`
	 * @return {void} 
	 */
	selectItemByIndex(index) {}

	/**
	 * ClearSelection
	 * @return {void} 
	 */
	clearSelection() {}

	/**
	 * SetItemByIndex
	 * @param {num} index `The index to update`
	 * @param {str} newName `The name of the navigation action`
	 * @param {str} newIcon `Material icon`
	 * @return {void} 
	 */
	setItemByIndex(index, newName, newIcon) {}

	/**
	 * SetIcon
	 * @param {num} index `The index of the navigation action to update`
	 * @param {str} newIcon `Material icon`
	 * @return {void} 
	 */
	setIcon(index, newIcon) {}

	/**
	 * AddItem
	 * @param {str} name `The name of the navigation action`
	 * @param {str} icon `Material icon`
	 * @param {num} index `The index in which to add the action.`
	 * @return {void} 
	 */
	addItem(name, icon, index) {}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the navigation action to be remove`
	 * @return {void} 
	 */
	removeItemByIndex(index) {}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the navigation action to be remove.`
	 * @return {void} 
	 */
	removeItemByName(name) {}

	/**
	 * ShiftItem
	 * @return {void} 
	 */
	shiftItem() {}

	/**
	 * PopItem
	 * @return {void} 
	 */
	popItem() {}

	/**
	 * SetOnChange
	 * @param {(text: str, index: num) => void} callback 
	 * @return {void} 
	 */
	setOnChange(callback) {}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the navigation action.`
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	setEnabled(index, value) {}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the navigation action.`
	 * @return {bin} 
	 */
	getEnabled(index) {}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the bottom navigation action.`
	 * @param {bin} value Values can be `true` or `false`
	 * @return {void} 
	 */
	setEnabledByName(name, value) {}

	/**
	 * GetEnabledByName
	 * @param {str} name `The name of the bottom navigation action.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {}

	/**
	 * ShowLabels
	 * @return {void} 
	 */
	showLabels() {}

	/**
	 * HideLabels
	 * @return {void} 
	 */
	hideLabels() {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIButton {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * Sets or returns the accepted files for an upload button
	 * @type {str} 
	 */
	acceptedFiles;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the badge content
	 * @type {num} 
	 */
	badge;

	/**
	 * Sets or returns the color of the badge
	 * @type {str} 
	 */
	badgeColor;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color of the button
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius of the button
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the material icon font use for the leading icon
	 * @type {str} 
	 */
	icon;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the size variant of the button
	 * @type {str} 
	 */
	sizeVariant;

	/**
	 * Sets or returns the button text
	 * @type {str} 
	 */
	text;

	/**
	 * Sets or returns the text color in hexadecimal format
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Sets or returns the tooltip text
	 * @type {str} 
	 */
	toolTip;

	/**
	 * Sets or returns the tooltip position
	 * @type {str} 
	 */
	toolTipPosition;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the variant of the button
	 * @type {str} 
	 */
	variant;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnFileSelect
	 * @param {(files: lst) => void} callback 
	 * @return {void} 
	 */
	setOnFileSelect(callback) {}

	/**
	 * SetToolTip
	 * @param {str} title `The text of the tooltip`
	 * @param {str} [pos='top'] Position of the tooltip. 
 Positions : `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 * @return {void} 
	 */
	setToolTip(title, pos) {}

	/**
	 * SetTextShadow
	 * @param {num} radius `The radius in pixels`
	 * @param {num} dx `The x-offset in pixels`
	 * @param {num} dy `The y-offset in pixels`
	 * @param {str} color The color in hexadecimal `#rrggbb`
	 * @return {void} 
	 */
	setTextShadow(radius, dx, dy, color) {}

	/**
	 * SetPadding
	 * @param {num} [left] `The left padding in pixel.`
	 * @param {num} [top] `The top padding in pixels`, ``
	 * @param {num} [right] `The right padding in pixels.`
	 * @param {num} [bottom] `The bottom padding in pixels.`
	 * @param {str} [mode='px'] `px` `%`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIButtonGroup {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color of the button
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the list items of the button group
	 * @type {lst} 
	 */
	list;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the orientation of the button group
	 * @type {str} 
	 */
	orientation;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the size variant
	 * @type {str} 
	 */
	sizeVariant;

	/**
	 * Sets or returns the color of the button text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the font size of the button text
	 * @type {num} 
	 */
	textSize;

	/**
	 * Sets or returns the position of the tooltip
	 * @type {str} 
	 */
	toolTipPosition;

	/**
	 * Sets or returns the list of tooltip titles
	 * @type {lst} 
	 */
	toolTips;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the variant
	 * @type {str} 
	 */
	variant;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnTouch
	 * @param {(text: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(text: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

	/**
	 * SetList
	 * @param {str} items `A comma separated list or an array`
	 * @return {void} 
	 */
	setList(items) {}

	/**
	 * SetItemByIndex
	 * @param {str} item `The new text`
	 * @param {num} index `The index of the item.`
	 * @return {void} 
	 */
	setItemByIndex(item, index) {}

	/**
	 * AddItem
	 * @param {str} item `The additional item.`
	 * @return {void} 
	 */
	addItem(item) {}

	/**
	 * RemoveItemIndex
	 * @param {num} index `The index of the item to be remove.`
	 * @return {void} 
	 */
	removeItemIndex(index) {}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the item to be remove.`
	 * @return {void} 
	 */
	removeItemByName(name) {}

	/**
	 * PopItem
	 * @return {void} 
	 */
	popItem() {}

	/**
	 * ShiftItem
	 * @return {void} 
	 */
	shiftItem() {}

	/**
	 * SetToolTip
	 * @param {lst} titles The titles for each item in the ButtonGroup.
	 * @param {str} [pos='top'] The positio of the tooltip. 
 Can be `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 * @return {void} 
	 */
	setToolTip(titles, pos) {}

	/**
	 * EnableElevation
	 * @param {bin} enable `true` or `false`
	 * @return {void} 
	 */
	enableElevation(enable) {}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the button item.`
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	setEnabled(index, value) {}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the button item in the button group.`
	 * @return {bin} 
	 */
	getEnabled(index) {}

	/**
	 * SetEnabledByName
	 * @param {str} name `The button text.`
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	setEnabledByName(name, value) {}

	/**
	 * GetEnabledByName
	 * @param {str} name `The button text.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UICheckbox {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the material icon font for check stated
	 * @type {str} 
	 */
	checkIcon;

	/**
	 * Sets or returns the theme color of the checkbox when checked
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Enabled or disable the checkbox component
	 * @type {bin} 
	 */
	disable;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Returns whether the Checkbox is enabled or disabled
	 * @type {bin} 
	 */
	enabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the color of the checkbox icon
	 * @type {str} 
	 */
	iconColor;

	/**
	 * Sets or returns the size of the icon
	 * @type {num} 
	 */
	iconSize;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the space between the checkbox icon and the label text
	 * @type {num} 
	 */
	spaceBetween;

	/**
	 * Sets or returns the checkbox text
	 * @type {str} 
	 */
	text;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the text position
	 * @type {str} 
	 */
	textPosition;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the material icon font for uncheck state
	 * @type {str} 
	 */
	uncheckIcon;

	/**
	 * Sets or returns the checked state of the checkbox
	 * @type {bin} 
	 */
	value;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnTouch
	 * @param {(check: bin) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetIcon
	 * @param {str} checked `Material icon for checked state`
	 * @param {str} unchecked `Material icon for unchecked state`
	 * @return {void} 
	 */
	setIcon(checked, unchecked) {}

	/**
	 * GetIcon
	 * @return {obj} 
	 */
	getIcon() {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UICheckboxGroup {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the material icon font for check stated
	 * @type {str} 
	 */
	checkIcon;

	/**
	 * Sets or returns the theme color use for the checkbox
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the depth of the container
	 * @type {str} 
	 */
	elevation;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the color of the checkbox icon
	 * @type {str} 
	 */
	iconColor;

	/**
	 * Sets or returns the size of the checkbox icon
	 * @type {num} 
	 */
	iconSize;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Sets or returns the padding of each list item
	 * @type {lst} 
	 */
	itemPadding;

	/**
	 * Sets or returns the label text
	 * @type {str} 
	 */
	label;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the list items
	 * @type {lst} 
	 */
	list;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns whether the container is outlined or elevated
	 * @type {bin} 
	 */
	outlined;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the size variant of the Checkbox
	 * @type {str} 
	 */
	sizeVariant;

	/**
	 * Sets or returns the space between the checkbox icon and the text
	 * @type {num} 
	 */
	spaceBetween;

	/**
	 * Sets or returns the text color in hexadecimal format
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the checkbox icon
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the material icon font for uncheck state
	 * @type {str} 
	 */
	uncheckIcon;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnTouch
	 * @param {(value: bin, text: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnChange
	 * @param {(values: lst) => void} callback 
	 * @return {void} 
	 */
	setOnChange(callback) {}

	/**
	 * SetIcon
	 * @param {str} checked `Material icon font`
	 * @param {str} unchecked `Material icon font`
	 * @return {void} 
	 */
	setIcon(checked, unchecked) {}

	/**
	 * GetIcon
	 * @return {obj} 
	 */
	getIcon() {}

	/**
	 * SetCheckedByIndex
	 * @param {num} item `The item or index of the item.`
	 * @param {bin} bool The item value. Can be `true` or `false`.
	 * @return {void} 
	 */
	setCheckedByIndex(item, bool) {}

	/**
	 * SetCheckedByName
	 * @param {str} name `The item or index of the item.`
	 * @param {bin} bool The item value. Can be `true` or `false`.
	 * @return {void} 
	 */
	setCheckedByName(name, bool) {}

	/**
	 * GetCheckedItems
	 * @return {str} 
	 */
	getCheckedItems() {}

	/**
	 * GetCheckedByIndex
	 * @param {num} index `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getCheckedByIndex(index) {}

	/**
	 * GetCheckedByName
	 * @param {str} name `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getCheckedByName(name) {}

	/**
	 * SetTextByIndex
	 * @param {num} index `The index of the item.`
	 * @param {str} val `The new text to replace.`
	 * @return {void} 
	 */
	setTextByIndex(index, val) {}

	/**
	 * SetTextByName
	 * @param {str} name `The name of the item`
	 * @param {str} val `The new text to replace`
	 * @return {void} 
	 */
	setTextByName(name, val) {}

	/**
	 * GetText
	 * @param {num} index `The index of the list`
	 * @return {str} 
	 */
	getText(index) {}

	/**
	 * SetList
	 * @param {obj} list The new list items for the checkbox group.
	 * @return {void} 
	 */
	setList(list) {}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the checkbox item.`
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	setEnabled(index, value) {}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the checkbox item.`
	 * @return {bin} 
	 */
	getEnabled(index) {}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the checkbox item.`
	 * @param {bin} value Values can be `true` or `false`
	 * @return {void} 
	 */
	setEnabledByName(name, value) {}

	/**
	 * GetEnabledByName
	 * @param {str} name `The checkbox item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {}

	/**
	 * AddItem
	 * @param {str} text `The text label for the checkbox.`
	 * @param {num} index `The index in which to insert the item.`
	 * @return {void} 
	 */
	addItem(text, index) {}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the corresponding item to remove.`
	 * @return {void} 
	 */
	removeItemByIndex(index) {}

	/**
	 * RemoveItemByName
	 * @param {str} title `The title text of the corresponding checkbox item.`
	 * @return {void} 
	 */
	removeItemByName(title) {}

	/**
	 * PopItem
	 * @return {void} 
	 */
	popItem() {}

	/**
	 * ShiftItem
	 * @return {void} 
	 */
	shiftItem() {}

	/**
	 * SetOnContextMenu
	 * @param {(label: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIChip {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * Sets or returns the avatar
	 * @type {str} 
	 */
	avatar;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color of the chip
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the delete icon
	 * @type {str} 
	 */
	deleteIcon;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Returns whether the chip is enabled or disabled
	 * @type {bin} 
	 */
	enabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the material icon font if icon is provided
	 * @type {str} 
	 */
	icon;

	/**
	 * Sets or returns the icon color in hexadecimal format
	 * @type {str} 
	 */
	iconColor;

	/**
	 * Sets or returns the font-size of the icon in css font-size format
	 * @type {num} 
	 */
	iconSize;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the size variant
	 * @type {str} 
	 */
	sizeVariant;

	/**
	 * Sets or returns the text of the chip
	 * @type {str} 
	 */
	text;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the variant of the chip
	 * @type {str} 
	 */
	variant;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetTouchable
	 * @param {bin} touchable `true` or `false`
	 * @return {void} 
	 */
	setTouchable(touchable) {}

	/**
	 * SetOnDelete
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnDelete(callback) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIDatePicker {

	/**
	 * Sets or returns the format of the selected date
	 * @type {str} 
	 */
	format;

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * SetLimits
	 * @param {str} [past] Date in the past of the form `YYYY-MM-DD`
	 * @param {str} [future] Date in the future of the form `YYYY-MM-DD`
	 * @return {void} 
	 */
	setLimits(past, future) {}

	/**
	 * SetOnSelect
	 * @param {(date: str) => void} callback 
	 * @return {void} 
	 */
	setOnSelect(callback) {}

	/**
	 * SetFormat
	 * @param {str} format A date format. Can be `YYYY-MM-DD` `MM-DD-YYYY` `DD-MM-YYYY`
	 * @return {void} 
	 */
	setFormat(format) {}

	/**
	 * IsVisible
	 * @return {bin} 
	 */
	isVisible() {}
}


class UIDialog {

	/**
	 * Returns the layout of the dialog where you can add custom controls
	 * @type {UILayout} 
	 */
	layout;

	/**
	 * Sets or returns the dialog text
	 * @type {str} 
	 */
	text;

	/**
	 * Sets or returns the title text color in hexadecimal format
	 * @type {str} 
	 */
	titleColor;

	/**
	 * Sets or returns the dialog title text
	 * @type {str} 
	 */
	titleText;

	/**
	 * SetOnAction
	 * @param {(text: str, index: num) => void} callback 
	 * @return {void} 
	 */
	setOnAction(callback) {}

	/**
	 * SetOnClose
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnClose(callback) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}
}


class UIDivider {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the color in hexadecimal format
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIDrawer {

	/**
	 * Sets or returns the anchor position of the drawer
	 * @type {str} 
	 */
	anchor;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the drawer
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the width of the swipeable area of the Drawer
	 * @type {num} 
	 */
	swipeAreaWidth;

	/**
	 * Sets or returns the width of the drawer as a fraction of the screen viewport relative to its anchor position <col nobox #fb8c00>[0-1]</col>
	 * @type {num} 
	 */
	width;

	/**
	 * AddLayout
	 * @param {obj} lay Layout component.
	 * @return {void} 
	 */
	addLayout(lay) {}

	/**
	 * DisableSwipeToOpen
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	disableSwipeToOpen(value) {}

	/**
	 * DisableBackdropTransition
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	disableBackdropTransition(value) {}

	/**
	 * DisableDiscovery
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	disableDiscovery(value) {}

	/**
	 * SetOnOpen
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnOpen(callback) {}

	/**
	 * SetOnClose
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnClose(callback) {}

	/**
	 * Show
	 * @param {str} anchor Open position. Can be `left` or `right`. Default is `left`
	 * @return {void} 
	 */
	show(anchor) {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}
}


class UIDropdown {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the dropdown material icon font
	 * @type {str} 
	 */
	icon;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Sets or returns the default label of the dropdown
	 * @type {str} 
	 */
	label;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the dropdown list
	 * @type {lst} 
	 */
	list;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the orientation of the dropdown buttongroup
	 * @type {str} 
	 */
	orientation;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the size variant of the dropdown button
	 * @type {str} 
	 */
	sizeVariant;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the value of the Dropdown
	 * @type {str} 
	 */
	value;

	/**
	 * Sets or returns the variant of the dropdown button
	 * @type {str} 
	 */
	variant;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnChange
	 * @param {(value: obj, index: num) => void} callback 
	 * @return {void} 
	 */
	setOnChange(callback) {}

	/**
	 * SetOnClose
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnClose(callback) {}

	/**
	 * SetList
	 * @param {lst} val The list of new items t display.
	 * @return {void} 
	 */
	setList(val) {}

	/**
	 * SetItemByIndex
	 * @param {str} item `The new item text.`
	 * @param {num} index `The index of the item to update.`
	 * @return {void} 
	 */
	setItemByIndex(item, index) {}

	/**
	 * GetItemByIndex
	 * @param {num} index `The index of corresponding item.`
	 * @return {str} 
	 */
	getItemByIndex(index) {}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the item.`
	 * @param {bin} value Values can be `true` `false`.
	 * @return {void} 
	 */
	setEnabled(index, value) {}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the item.`
	 * @return {bin} 
	 */
	getEnabled(index) {}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the item.`
	 * @param {bin} value Values can be `true` `false`.
	 * @return {void} 
	 */
	setEnabledByName(name, value) {}

	/**
	 * GetEnabledByName
	 * @param {str} name `The name of the corresponding menu item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {}

	/**
	 * AddItem
	 * @param {str} name `The name of the menu.`
	 * @param {num} index `The index in which to insert the menu item.`
	 * @return {void} 
	 */
	addItem(name, index) {}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the menu item to remove.`
	 * @return {void} 
	 */
	removeItemByIndex(index) {}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the menu item.`
	 * @return {void} 
	 */
	removeItemByName(name) {}

	/**
	 * ShiftItem
	 * @return {void} 
	 */
	shiftItem() {}

	/**
	 * PopItem
	 * @return {void} 
	 */
	popItem() {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIFAB {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color for the FAB
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the disabled state of the ripple effect
	 * @type {bin} 
	 */
	disabledRipple;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the material icon font
	 * @type {str} 
	 */
	icon;

	/**
	 * Sets or returns the size of the icon
	 * @type {num} 
	 */
	iconSize;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the size variant of the FAB
	 * @type {str} 
	 */
	sizeVariant;

	/**
	 * Sets or returns the text for extended FAB
	 * @type {str} 
	 */
	text;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the variant use for the FAB
	 * @type {str} 
	 */
	variant;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIImage {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the material icon for error placeholder image
	 * @type {str} 
	 */
	errorIcon;

	/**
	 * Sets or returns the path or url of the image file
	 * @type {str} 
	 */
	file;

	/**
	 * Sets or returns the background color of the canvas
	 * @type {str} 
	 */
	fill;

	/**
	 * Sets or returns the fill color used on close paths such as square, circle, rectangle or arcs
	 * @type {str} 
	 */
	fillColor;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the style of the end caps for a line
	 * @type {str} 
	 */
	lineCap;

	/**
	 * Sets or returns the type of corner created when two lines meet
	 * @type {str} 
	 */
	lineJoin;

	/**
	 * Sets or returns the current line thickness
	 * @type {num} 
	 */
	lineWidth;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the maximum miter length
	 * @type {num} 
	 */
	miterLimit;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the pixel data of the image
	 * @type {lst} 
	 */
	pixelData;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the current color of the line or stroke
	 * @type {str} 
	 */
	strokeColor;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the text-size for drawing in the canvas
	 * @type {num} 
	 */
	textSize;

	/**
	 * Sets or returns the text-style for drawing in the canvas
	 * @type {str} 
	 */
	textStyle;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnLoad
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnLoad(callback) {}

	/**
	 * EnableContextMenu
	 * @param {bin} value Value. Can be `true` `false`
	 * @return {void} 
	 */
	enableContextMenu(value) {}

	/**
	 * SetImage
	 * @param {str} file `The path to the image file.`
	 * @return {void} 
	 */
	setImage(file) {}

	/**
	 * GetPixelColor
	 * @param {num} x `The x-coordinate of the pixel from the left.`
	 * @param {num} y `The y-coordinate of the pixel from the top.`
	 * @return {lst} 
	 */
	getPixelColor(x, y) {}

	/**
	 * GetPixelData
	 * @return {str} 
	 */
	getPixelData() {}

	/**
	 * DrawLine
	 * @param {num} x1 `The x-coordinate of the starting point in pixels.`
	 * @param {num} y1 `The y-coordinate of the starting point in pixels`
	 * @param {num} x2 `The x-coordinate of the second point in pixels.`
	 * @param {num} y2 `The y-coordinate of the second point in pixels.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 * @return {void} 
	 */
	drawLine(x1, y1, x2, y2, strokeColor, strokeWidth) {}

	/**
	 * DrawCircle
	 * @param {num} x `The x-coordinate of the center of the circle in pixels.`
	 * @param {num} y `The y-coordinate of the center of the circle in pixels.`
	 * @param {num} radius `The radius of the circle in pixels.`
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stoke thickness.`
	 * @return {void} 
	 */
	drawCircle(x, y, radius, fillColor, strokeColor, strokeWidth) {}

	/**
	 * DrawSquare
	 * @param {num} x `The position from the left of the top-left corner of the square in pixels.`
	 * @param {num} y `The distance from the top of the top-left corner of the square in pixels.`
	 * @param {num} width `The width of the square in pixels.`
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness in pixels.`
	 * @return {void} 
	 */
	drawSquare(x, y, width, fillColor, strokeColor, strokeWidth) {}

	/**
	 * DrawRectangle
	 * @param {num} x1 `The distance from the left of the top-left corner of the rectangle in pixels.`
	 * @param {num} y1 `The distance from the top of the top-left corner of the rectangle in pixels.`
	 * @param {num} width `The width of the rectangle in pixels.`
	 * @param {num} height `The height of the rectangle in pixels.`
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 * @return {void} 
	 */
	drawRectangle(x1, y1, width, height, fillColor, strokeColor, strokeWidth) {}

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
	 * @return {void} 
	 */
	drawArc(x, y, radius, start, end, fillColor, strokeColor, strokeWidth) {}

	/**
	 * DrawImage
	 * @param {str} img `Path to image file.`
	 * @param {num} [x] `The distance from the left of the top-left corner of the image in pixels.`
	 * @param {num} [y] `The distance from the top of the top-left corner of the image in pixels.`
	 * @param {num} [width] `If provided`, ` the image will be shrink or stretch to fill this width in pixels.`
	 * @param {num} [height] `If provided`, ` the height of the image will be shrink or stretch to fill this height in pixels.`
	 * @return {void} 
	 */
	drawImage(img, x, y, width, height) {}

	/**
	 * Clear
	 * @return {void} 
	 */
	clear() {}

	/**
	 * DrawPolyline
	 * @param {lst} points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 * @return {void} 
	 */
	drawPolyline(points, strokeColor, strokeWidth) {}

	/**
	 * DrawPolygon
	 * @param {lst} points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 * @return {void} 
	 */
	drawPolygon(points, fillColor, strokeColor, strokeWidth) {}

	/**
	 * DrawPoint
	 * @param {num} x `The x-coordinate in pixels.`
	 * @param {num} y `The y-coordinate in pixels.`
	 * @param {str} [color] `A hexadecimal color.`
	 * @return {void} 
	 */
	drawPoint(x, y, color) {}

	/**
	 * SetOnTouchMove
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnTouchMove(callback) {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UILayout {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * Sets or returns the horizontal alignment of the control in a Linear Layout
	 * @type {str} 
	 */
	alignment;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the margins of child components
	 * @type {lst} 
	 */
	childMargins;

	/**
	 * Sets or returns the spacing of the child control in a Linear Layout
	 * @type {str} 
	 */
	childSpacing;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the index of the current slide
	 * @type {num} 
	 */
	currentSlide;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the orientation of the controls in a Linear Layout
	 * @type {str} 
	 */
	orientation;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the vertical alignment of the controls in a Linear Layout
	 * @type {str} 
	 */
	verticalAlignment;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetChildMargins
	 * @param {num} [left] `Left margin.`
	 * @param {num} [top] `Top margin.`
	 * @param {num} [right] `Right margin.`
	 * @param {num} [bottom] `Bottom margin.`
	 * @param {str} [mode='px'] `px`. Default is a fraction of viewport.
	 * @return {void} 
	 */
	setChildMargins(left, top, right, bottom, mode) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Goto
	 * @param {num} index `Index of a given layout.`
	 * @return {void} 
	 */
	goto(index) {}

	/**
	 * GetCurrentSlide
	 * @return {num} 
	 */
	getCurrentSlide() {}

	/**
	 * Next
	 * @return {void} 
	 */
	next() {}

	/**
	 * Previous
	 * @return {void} 
	 */
	previous() {}

	/**
	 * GetChildOrder
	 * @param {obj} child The child component of the layout.
	 * @return {num} 
	 */
	getChildOrder(child) {}

	/**
	 * ChildToFront
	 * @param {obj} child The child object of the layout.
	 * @return {void} 
	 */
	childToFront(child) {}

	/**
	 * HasChild
	 * @param {obj} child The child component to check.
	 * @return {bin} 
	 */
	hasChild(child) {}

	/**
	 * RemoveChild
	 * @param {obj} child The child component to be remove.
	 * @return {void} 
	 */
	removeChild(child) {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIList {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * Sets or returns the size of the avatar
	 * @type {str} 
	 */
	avatarSize;

	/**
	 * Sets or returns the variant of the avatar
	 * @type {str} 
	 */
	avatarVariant;

	/**
	 * Sets or returns the background color in a hexadecimal format
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color of the checkbox when <col nobox #fb8c00>Selectable</col> option is enabled
	 * @type {str} 
	 */
	checkboxColor;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the depth of the list container
	 * @type {num} 
	 */
	elevation;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the icon color in a hexadecimal format
	 * @type {str} 
	 */
	iconColor;

	/**
	 * Sets or returns the size of the icon text
	 * @type {num} 
	 */
	iconSize;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Sets or returns the padding of each list item
	 * @type {lst} 
	 */
	itemPadding;

	/**
	 * Sets or returns the label text
	 * @type {str} 
	 */
	label;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns whether the container is outlined or elevated
	 * @type {bin} 
	 */
	outlined;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns a boolean whether the list is selectable or not
	 * @type {bin} 
	 */
	selectable;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the color of the title text in hexadecimal format
	 * @type {str} 
	 */
	textColor1;

	/**
	 * Sets or returns the color of the body text in hexadecimal format
	 * @type {str} 
	 */
	textColor2;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Sets or returns the size of the title text
	 * @type {num} 
	 */
	textSize1;

	/**
	 * Sets or returns the size of the body text
	 * @type {num} 
	 */
	textSize2;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * AddItem
	 * @param {str} title `The title of the item.`
	 * @param {str} [body] `The text description of the item.`
	 * @param {str} [image] `A material icon or image file path.`
	 * @param {num} [index] `The index in which to add or insert the item.`
	 * @return {void} 
	 */
	addItem(title, body, image, index) {}

	/**
	 * SetOnTouch
	 * @param {(title: str, body: str, icon: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnSelect
	 * @param {(title: str, index: num) => void} callback 
	 * @return {void} 
	 */
	setOnSelect(callback) {}

	/**
	 * SetOnAction
	 * @param {(icon: str, index: num) => void} callback 
	 * @return {void} 
	 */
	setOnAction(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(title: str, body: str, icon: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

	/**
	 * GetSelectedItems
	 * @return {void} 
	 */
	getSelectedItems() {}

	/**
	 * GetSelectedTitles
	 * @return {void} 
	 */
	getSelectedTitles() {}

	/**
	 * SetList
	 * @param {lst} list A comma separated list of items or an array. See the list format above.
	 * @return {void} 
	 */
	setList(list) {}

	/**
	 * SetSelectable
	 * @param {bin} selectable `If true`, ` make the list selectable. Otherwise`, ` list is not selectable`
	 * @return {void} 
	 */
	setSelectable(selectable) {}

	/**
	 * SetItemByIndex
	 * @param {num} index `The index of the item to update`
	 * @param {str} newTitle `The new title of the item`
	 * @param {str} [newBody] `The new body text`
	 * @param {str} [newImage] `The new icon or image`
	 * @return {void} 
	 */
	setItemByIndex(index, newTitle, newBody, newImage) {}

	/**
	 * GetItemByIndex
	 * @param {num} index `Returns the item in a list as an object of the following format { title`, ` body`, ` image }`
	 * @return {void} 
	 */
	getItemByIndex(index) {}

	/**
	 * SetItem
	 * @param {str} title `The title of the list item to update.`
	 * @param {str} newTitle `The new title of the list item.`
	 * @param {str} [newBody] `The new description of the list item.`
	 * @param {str} [newImage] `A material icon font or image file path.`
	 * @return {void} 
	 */
	setItem(title, newTitle, newBody, newImage) {}

	/**
	 * GetItem
	 * @param {str} title `Returns the item in a list as an object of the following format { title`, ` body`, ` image }`
	 * @return {void} 
	 */
	getItem(title) {}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the item to remove`
	 * @return {void} 
	 */
	removeItemByIndex(index) {}

	/**
	 * RemoveItemByName
	 * @param {str} name `The title of the list to remove.`
	 * @return {void} 
	 */
	removeItemByName(name) {}

	/**
	 * ShiftItem
	 * @return {void} 
	 */
	shiftItem() {}

	/**
	 * PopItem
	 * @return {void} 
	 */
	popItem() {}

	/**
	 * DeselectAll
	 * @return {void} 
	 */
	deselectAll() {}

	/**
	 * SelectItemByIndex
	 * @param {num} index `The index to be selected.`
	 * @return {void} 
	 */
	selectItemByIndex(index) {}

	/**
	 * SetTitleText
	 * @param {num} index `The index of the corresponding list item.`
	 * @param {str} title `The new title text.`
	 * @return {void} 
	 */
	setTitleText(index, title) {}

	/**
	 * SetBodyText
	 * @param {num} index `The index of the list whose secondary text to be changed.`
	 * @param {str} newText `The new secondary text.`
	 * @return {void} 
	 */
	setBodyText(index, newText) {}

	/**
	 * SetIcon
	 * @param {num} index `The index of the corresponding list item.`
	 * @param {str} icon `Material icon font.`
	 * @return {void} 
	 */
	setIcon(index, icon) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIMenu {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Sets or returns the padding of each menu item
	 * @type {lst} 
	 */
	itemPadding;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the items in the menu
	 * @type {lst} 
	 */
	list;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnTouch
	 * @param {(item: str, icon: str, index: num) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * Show
	 * @param {obj} parent The component where to anchor the menu. It can be a `Button` or an `Image`.
	 * @return {void} 
	 */
	show(parent) {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * SetList
	 * @param {lst} list The list items to show.
	 * @return {void} 
	 */
	setList(list) {}

	/**
	 * AddItem
	 * @param {str} name `The new item to be added.`
	 * @param {num} index `The index at which to add the item.`
	 * @return {void} 
	 */
	addItem(name, index) {}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the item to remove.`
	 * @return {void} 
	 */
	removeItemByIndex(index) {}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the item to remove.`
	 * @return {void} 
	 */
	removeItemByName(name) {}

	/**
	 * PopItem
	 * @return {void} 
	 */
	popItem() {}

	/**
	 * ShiftItem
	 * @return {void} 
	 */
	shiftItem() {}

	/**
	 * SetPosition
	 * @param {num} left `The position of the menu from the left of the parent or anchor component. The unit is in pixels.`
	 * @param {num} top `The position of the menu from the top of the parent or anchor component. The unit is in pixels.`
	 * @return {void} 
	 */
	setPosition(left, top) {}

	/**
	 * SetAutoFocus
	 * @param {bin} bool Value can be `true` or `false`
	 * @return {void} 
	 */
	setAutoFocus(bool) {}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the item.`
	 * @param {bin} value Values can be `true` or `false`. `false` to disable.
	 * @return {void} 
	 */
	setEnabled(index, value) {}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the item.`
	 * @return {bin} 
	 */
	getEnabled(index) {}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the corresping item the menu.`
	 * @param {bin} value Values can be `true` or `false`. `false` to disable an item.
	 * @return {void} 
	 */
	setEnabledByName(name, value) {}

	/**
	 * GetEnabledByName
	 * @param {str} name `The name of the item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIProgress {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the size of the circular progress control
	 * @type {num} 
	 */
	circleSize;

	/**
	 * Sets or returns the theme color
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Sets or returns the thickness of the circular stroke
	 * @type {num} 
	 */
	thickness;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Sets or returns the type of the Progress Component
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the value of the progress control
	 * @type {num} 
	 */
	value;

	/**
	 * Sets or returns the variant of the progress component
	 * @type {str} 
	 */
	variant;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIRadioGroup {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color of the Radio Component
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the disabled state of the radio button group
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the depth of the RadioGroup container
	 * @type {num} 
	 */
	elevation;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the icon color in hexadecimal format
	 * @type {str} 
	 */
	iconColor;

	/**
	 * Sets or returns the position of the icon
	 * @type {str} 
	 */
	iconPosition;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Sets or returns the padding of each radio item
	 * @type {lst} 
	 */
	itemPadding;

	/**
	 * Sets or returns the label text of the RadioGroup Component
	 * @type {str} 
	 */
	label;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the list array
	 * @type {lst} 
	 */
	list;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns whether the container is outlined or elevated
	 * @type {bin} 
	 */
	outlined;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the size of the radio button
	 * @type {str} 
	 */
	radioSize;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the space between the radio button and the text
	 * @type {num} 
	 */
	spaceBetween;

	/**
	 * Stest or returns the color of the text in hexadecimal format
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the position of the label text
	 * @type {str} 
	 */
	textPosition;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the value of the RadioGroup Component
	 * @type {str} 
	 */
	value;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnChange
	 * @param {(index: num) => void} callback 
	 * @return {void} 
	 */
	setOnChange(callback) {}

	/**
	 * SetOnTouch
	 * @param {(checked: bin, label: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetList
	 * @param {str} val `A comma separated items`
	 * @return {void} 
	 */
	setList(val) {}

	/**
	 * SetItemByIndex
	 * @param {str} item `The new item name to be displayed`
	 * @param {num} index `The index to of the item to be updated`
	 * @return {void} 
	 */
	setItemByIndex(item, index) {}

	/**
	 * SetItemByName
	 * @param {str} name `The name of the item.`
	 * @param {str} text `The new text to replaced the name of the item.`
	 * @return {void} 
	 */
	setItemByName(name, text) {}

	/**
	 * AddItem
	 * @param {str} name `The new item to be added.`
	 * @param {num} index `The index in which to add the item.`
	 * @return {void} 
	 */
	addItem(name, index) {}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the item to remove.`
	 * @return {void} 
	 */
	removeItemByIndex(index) {}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the item to remove.`
	 * @return {void} 
	 */
	removeItemByName(name) {}

	/**
	 * PopItem
	 * @return {void} 
	 */
	popItem() {}

	/**
	 * ShiftItem
	 * @return {void} 
	 */
	shiftItem() {}

	/**
	 * SetEnabled
	 * @param {num} index `The index of the item.`
	 * @param {bin} value Values can be `true` or `false`. If `false`,  the item will be disabled.
	 * @return {void} 
	 */
	setEnabled(index, value) {}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getEnabled(index) {}

	/**
	 * SetEnabledByName
	 * @param {str} name `The radiogroup text.`
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	setEnabledByName(name, value) {}

	/**
	 * GetEnabledByName
	 * @param {str} name `The radiogroup text.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {}

	/**
	 * SetOnContextMenu
	 * @param {(label: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UISelect {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns a boolean value whether the component is enabled or disabled
	 * @type {bin} 
	 */
	enabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the color of the icon in hexadecimal format <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	iconColor;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Sets or returns the label text
	 * @type {str} 
	 */
	label;

	/**
	 * Sets or returns the color of the label text in hexadecimal format <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	labelColor;

	/**
	 * Sets or returns the size of the label
	 * @type {num} 
	 */
	labelSize;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the list items
	 * @type {lst} 
	 */
	list;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the maximum height of the popup container
	 * @type {num} 
	 */
	maxHeight;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Sets or returns the color of the popup in hexadecimal format
	 * @type {str} 
	 */
	popupColor;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the size variant of the Select Component
	 * @type {str} 
	 */
	sizeVariant;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the value of the Select Component
	 * @type {str} 
	 */
	value;

	/**
	 * Sets or returns the variant of the Select Component
	 * @type {str} 
	 */
	variant;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnChange
	 * @param {(value: str) => void} callback 
	 * @return {void} 
	 */
	setOnChange(callback) {}

	/**
	 * SetOnOpen
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnOpen(callback) {}

	/**
	 * SetOnClose
	 * @param {(value: str) => void} callback 
	 * @return {void} 
	 */
	setOnClose(callback) {}

	/**
	 * AddItem
	 * @param {str} item `A new item to be added.`
	 * @param {num} index `The index in which to add the item.`
	 * @return {void} 
	 */
	addItem(item, index) {}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the corresponding item to remove.`
	 * @return {void} 
	 */
	removeItemByIndex(index) {}

	/**
	 * RemoveItemByName
	 * @param {str} name `The name of the item to remove.`
	 * @return {void} 
	 */
	removeItemByName(name) {}

	/**
	 * ShifItem
	 * @return {void} 
	 */
	shifItem() {}

	/**
	 * PopItem
	 * @return {void} 
	 */
	popItem() {}

	/**
	 * GetItem
	 * @param {num} index `The index of the item.`
	 * @return {void} 
	 */
	getItem(index) {}

	/**
	 * SetList
	 * @param {obj} items A comma separated string or array of options
	 * @return {void} 
	 */
	setList(items) {}

	/**
	 * SetEnabled
	 * @param {num} index `true` or `false`. You can also pass a `Boolean` to enable or disable the Select component.
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	setEnabled(index, value) {}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the corresponding item in the select menu.`
	 * @return {bin} 
	 */
	getEnabled(index) {}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the menu item.`
	 * @param {bin} value Value can be `true` or `false`
	 * @return {void} 
	 */
	setEnabledByName(name, value) {}

	/**
	 * GetEnabledByName
	 * @param {str} name `The name of the menu item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UISlider {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color of the Slider
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the marks on the Slider Component
	 * @type {bin} 
	 */
	marks;

	/**
	 * Sets or returns the maximum value
	 * @type {num} 
	 */
	maxValue;

	/**
	 * Sets or returns the minimum value
	 * @type {num} 
	 */
	minValue;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the orientation of the Slider Component
	 * @type {str} 
	 */
	orientation;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the Sider Component steps
	 * @type {num} 
	 */
	step;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Sets or returns the track properties of the Slider Component
	 * @type {str} 
	 */
	track;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the value of the Slider Component
	 * @type {num} 
	 */
	value;

	/**
	 * Sets or returns the value label display type
	 * @type {str} 
	 */
	valueLabelDisplay;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnChange
	 * @param {(value: num) => void} callback 
	 * @return {void} 
	 */
	setOnChange(callback) {}

	/**
	 * SetOnSelect
	 * @param {(value: num) => void} callback 
	 * @return {void} 
	 */
	setOnSelect(callback) {}

	/**
	 * SetRange
	 * @param {num} [min] `Minimum value of the slider.`
	 * @param {num} [max] `Maximum value of the slider.`
	 * @return {void} 
	 */
	setRange(min, max) {}

	/**
	 * SetMarks
	 * @param {obj} val The marks on the Slider Component.
	 * @return {void} 
	 */
	setMarks(val) {}

	/**
	 * GetMarks
	 * @return {bin} 
	 */
	getMarks() {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIStepper {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * Sets or returns the active step
	 * @type {num} 
	 */
	activeStep;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the elevation of the mobile stepper
	 * @type {num} 
	 */
	elevation;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the orientation of the Stepper
	 * @type {str} 
	 */
	orientation;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnComplete
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnComplete(callback) {}

	/**
	 * SetOnChange
	 * @param {(index: num) => void} callback 
	 * @return {void} 
	 */
	setOnChange(callback) {}

	/**
	 * NextStep
	 * @return {void} 
	 */
	nextStep() {}

	/**
	 * PreviousStep
	 * @return {void} 
	 */
	previousStep() {}

	/**
	 * GetLayout
	 * @param {num} index `The index of the corresponing stepper layout`
	 * @return {UILayout} 
	 */
	getLayout(index) {}

	/**
	 * GetLayoutIndex
	 * @param {obj} layout The layout to check.
	 * @return {num} 
	 */
	getLayoutIndex(layout) {}

	/**
	 * RemoveStep
	 * @param {num} index `The index of the step to remove.`
	 * @return {void} 
	 */
	removeStep(index) {}

	/**
	 * SetTitleText
	 * @param {num} index `The index of the Stepper.`
	 * @param {str} title `The new title text.`
	 * @return {void} 
	 */
	setTitleText(index, title) {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UISwitch {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the disabled state of the ripple effect
	 * @type {bin} 
	 */
	disableRipple;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the edge position of the toggle
	 * @type {str} 
	 */
	edge;

	/**
	 * Sets or returns a Boolean whether the component is enabled or disabled
	 * @type {bin} 
	 */
	enable;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the icon position
	 * @type {str} 
	 */
	iconPosition;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns a boolean value whether this component is required or not
	 * @type {bin} 
	 */
	required;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the size variant of the toggle switch
	 * @type {str} 
	 */
	sizeVariant;

	/**
	 * Sets or returns the space between the switch icon and the label text
	 * @type {num} 
	 */
	spaceBetween;

	/**
	 * Sets or returns the label text
	 * @type {str} 
	 */
	text;

	/**
	 * Sets or returns the text color in hexadecimal format
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the value of the switch toggle
	 * @type {bin} 
	 */
	value;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnTouch
	 * @param {(check: bin) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UISwitchGroup {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the edge position of the toggle
	 * @type {str} 
	 */
	edge;

	/**
	 * Sets or returns the depth of the control container
	 * @type {num} 
	 */
	elevation;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the theme color <col nobox #fb8c00>Primary</col> <col nobox #fb8c00>Secondary</col> or <col nobox #fb8c00>Default</col>
	 * @type {str} 
	 */
	iconColor;

	/**
	 * Sets or returns the size of the icon
	 * @type {num} 
	 */
	iconSize;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Sets or returns the padding of each switch item
	 * @type {lst} 
	 */
	itemPadding;

	/**
	 * Sets or returns the label text
	 * @type {str} 
	 */
	label;

	/**
	 * Sets or returns the color of the label text in hexadecimal format
	 * @type {str} 
	 */
	labelColor;

	/**
	 * Sets or returns the size of the label text
	 * @type {num} 
	 */
	labelSize;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the list items
	 * @type {lst} 
	 */
	list;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns whether the container is outlined or elevated
	 * @type {bin} 
	 */
	outlined;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the theme color <col nobox #fb8c00>primary</col> or <col nobox #fb8c00>secondary</col>
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnTouch
	 * @param {(value: bin, text: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnChange
	 * @param {(values: lst) => void} callback 
	 * @return {void} 
	 */
	setOnChange(callback) {}

	/**
	 * SetValueByIndex
	 * @param {num} index `The index of the corresponding item.`
	 * @param {bin} val A Values can be `true` or `false`
	 * @return {void} 
	 */
	setValueByIndex(index, val) {}

	/**
	 * GetValueByIndex
	 * @param {num} index `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getValueByIndex(index) {}

	/**
	 * SetList
	 * @param {obj} lst The list array or a comma separated list.
	 * @return {void} 
	 */
	setList(lst) {}

	/**
	 * AddItem
	 * @param {str} title `The title text.`
	 * @param {str} icon `Material icon font.`
	 * @param {bin} value `The value of the item.`
	 * @param {num} index `The index in which to insert the item. Default is at the bottom of the list.`
	 * @return {void} 
	 */
	addItem(title, icon, value, index) {}

	/**
	 * RemoveItemByIndex
	 * @param {num} index `The index of the corresponding item to remove.`
	 * @return {void} 
	 */
	removeItemByIndex(index) {}

	/**
	 * RemoveItemByName
	 * @param {str} title `The title text of the SwitchGroup item.`
	 * @return {void} 
	 */
	removeItemByName(title) {}

	/**
	 * PopItem
	 * @return {void} 
	 */
	popItem() {}

	/**
	 * ShiftItem
	 * @return {void} 
	 */
	shiftItem() {}

	/**
	 * SetEnabled
	 * @param {num} index The index of the corresponding item in the list. You can also pass `Boolean` to enable or disable the switchgroup component.
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	setEnabled(index, value) {}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the corresponding item in the switch group.`
	 * @return {bin} 
	 */
	getEnabled(index) {}

	/**
	 * SetOnContextMenu
	 * @param {(text: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UITabs {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns a boolean value whether the tabs are centered or not
	 * @type {bin} 
	 */
	centered;

	/**
	 * Sets or returns the theme color of the tab bar
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the elevation of the tab bar
	 * @type {num} 
	 */
	elevation;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the color ofthe tab icon
	 * @type {str} 
	 */
	iconColor;

	/**
	 * Sets or returns the tab icon
	 * @type {num} 
	 */
	iconSize;

	/**
	 * Sets or returns the color of the indicator bar
	 * @type {str} 
	 */
	indicatorColor;

	/**
	 * Sets or returns the corner radius of the indicator bar in pixels
	 * @type {num} 
	 */
	indicatorRadius;

	/**
	 * Sets or returns the thickness of the indicator bar in pixels
	 * @type {num} 
	 */
	indicatorThickness;

	/**
	 * Sets or returns the width of the indicator bar as a fraction of the tab item width
	 * @type {num} 
	 */
	indicatorWidth;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the scroll button mode when tab items overflow the width of its container
	 * @type {str} 
	 */
	scrollButtonMode;

	/**
	 * Sets or returns the height of the tab in pixels
	 * @type {num} 
	 */
	tabHeight;

	/**
	 * Sets or returns the padding of the tab items
	 * @type {num} 
	 */
	tabPadding;

	/**
	 * Sets or returns the theme color for the tab bar titles <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the variant of the Tabs Component
	 * @type {str} 
	 */
	variant;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnChange
	 * @param {(name: str, index: num) => void} callback 
	 * @return {void} 
	 */
	setOnChange(callback) {}

	/**
	 * SetOnTouch
	 * @param {(name: str, index: num) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetTabs
	 * @param {lst} tabs The tab titles array. See examples for format.
	 * @return {void} 
	 */
	setTabs(tabs) {}

	/**
	 * AddTab
	 * @param {str} name `The name of the tab.`
	 * @param {str} icon `Material icon font.`
	 * @param {num} index `The index in which to insert the tab.`
	 * @return {void} 
	 */
	addTab(name, icon, index) {}

	/**
	 * SetTitleText
	 * @param {num} index `Index of the tab.`
	 * @param {str} title `The new title.`
	 * @return {void} 
	 */
	setTitleText(index, title) {}

	/**
	 * SetIcon
	 * @param {num} index `The index of the tab.`
	 * @param {str} icon `Material icon font.`
	 * @return {void} 
	 */
	setIcon(index, icon) {}

	/**
	 * RemoveTabByIndex
	 * @param {num} index `The index of the corresponding tab to remove.`
	 * @return {void} 
	 */
	removeTabByIndex(index) {}

	/**
	 * RemoveTabByName
	 * @param {str} name `The name of the corresponding tab to remove.`
	 * @return {void} 
	 */
	removeTabByName(name) {}

	/**
	 * GetLayout
	 * @param {str} name `The name of the tab. You can also pass the index of the tab.`
	 * @return {UILayout} 
	 */
	getLayout(name) {}

	/**
	 * ShowTab
	 * @param {str} name `The name of the tab to be shown.`
	 * @return {void} 
	 */
	showTab(name) {}

	/**
	 * ShowTabByIndex
	 * @param {num} index `The index of the tab to be shown.`
	 * @return {void} 
	 */
	showTabByIndex(index) {}

	/**
	 * SetEnabled
	 * @param {num} index The index of the corresponding tab. Pass `Boolean` if you want to disable the entire Tabs component.
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	setEnabled(index, value) {}

	/**
	 * GetEnabled
	 * @param {num} index `The index of the corresponding tab.`
	 * @return {bin} 
	 */
	getEnabled(index) {}

	/**
	 * SetEnabledByName
	 * @param {str} name `The name of the tab.`
	 * @param {bin} value Values can be `true` or `false`.
	 * @return {void} 
	 */
	setEnabledByName(name, value) {}

	/**
	 * GetEnabledByName
	 * @param {str} name `The name of the tab.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {}

	/**
	 * ShowScrollButton
	 * @param {str} mode Values can be 
 `auto` : will only present them when not all the items are visible 
 `desktop` : will only present them on medium and larger viewports 
 `on` : will always present them 
 `off` : will never present them.
	 * @return {void} 
	 */
	showScrollButton(mode) {}

	/**
	 * GetLayoutIndex
	 * @param {obj} layout The layout to check.
	 * @return {num} 
	 */
	getLayoutIndex(layout) {}

	/**
	 * SetOnContextMenu
	 * @param {(text: str, index: num, event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * SetIndicatorStyle
	 * @param {num} width Fraction of the tab item width. This works only on `fullWidth` tab.
	 * @param {num} thickness `Thickness in pixels.`
	 * @param {str} color Hexadecimal color of the form `#rrggbb`.
	 * @param {num} radius `The corner radius in pixels.`
	 * @return {void} 
	 */
	setIndicatorStyle(width, thickness, color, radius) {}

	/**
	 * SetTabPadding
	 * @param {num} [left] `The tab-item left padding.`
	 * @param {num} [top] `The tab-item top padding.`
	 * @param {num} [right] `The tab-item right padding.`
	 * @param {num} [bottom] `The tab-item bottom padding.`
	 * @param {str} [mode='px'] Unit of measurement. Default is `px`. You can pass `%` `rem` `vw`.
	 * @return {void} 
	 */
	setTabPadding(left, top, right, bottom, mode) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIText {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * Sets or returns the horizontal alignment of the text
	 * @type {str} 
	 */
	alignment;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns whether the text is <col nobox #fb8c00>bold</col> or not
	 * @type {bin} 
	 */
	bold;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color of the text <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the ellipsis use when the text is truncated
	 * @type {str} 
	 */
	ellipsize;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Sets or returns whether the text is <col nobox #fb8c00>italized</col> or not
	 * @type {bin} 
	 */
	italic;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the text
	 * @type {str} 
	 */
	text;

	/**
	 * Sets or returns the text color in hexadecimal format
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the fontsize for the text
	 * @type {num} 
	 */
	textSize;

	/**
	 * Sets or returns the style of the text
	 * @type {str} 
	 */
	textStyle;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns whether the text is <col nobox #fb8c00>underlined</col> or not
	 * @type {bin} 
	 */
	underline;

	/**
	 * Sets or returns the text variants
	 * @type {str} 
	 */
	variant;

	/**
	 * Sets or returns the vertical alignment of the text
	 * @type {str} 
	 */
	verticalAlignment;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetHtml
	 * @param {str} html `An html string`
	 * @return {void} 
	 */
	setHtml(html) {}

	/**
	 * GetHtml
	 * @return {str} 
	 */
	getHtml() {}

	/**
	 * SetTextShadow
	 * @param {num} radius `The radius in pixels`
	 * @param {num} dx `X-offset of the shadow`
	 * @param {num} dy `Y-offset of the shadow`
	 * @param {obj} color A hexadecimal color e.g. `#aarrggbb`
	 * @return {void} 
	 */
	setTextShadow(radius, dx, dy, color) {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UITextField {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * Sets or returns a boolean value whethe the input is focus when rendered into the DOM
	 * @type {bin} 
	 */
	autoFocus;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the theme color of the textfield component
	 * @type {str} 
	 */
	color;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Returns the end adornment text or icon
	 * @type {str} 
	 */
	endAdornment;

	/**
	 * Sets or returns the error state of the TextField component
	 * @type {bin} 
	 */
	error;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Sets or returns the helper text or the hint below the input
	 * @type {str} 
	 */
	helperText;

	/**
	 * Sets or returns the hint text
	 * @type {str} 
	 */
	hint;

	/**
	 * Sets or returns the input type
	 * @type {str} 
	 */
	inputType;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Sets or returns the label text
	 * @type {str} 
	 */
	label;

	/**
	 * Sets return the label color in hexadecimal format <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	labelColor;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the maximum rows for a <col nobox #fb8c00>multiline</col> textfield
	 * @type {num} 
	 */
	maxRows;

	/**
	 * Sets or returns the minimum rows for a <col nobox #fb8c00>multiline</col> textfield
	 * @type {num} 
	 */
	minRows;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the outline color in hexadecimal form <col nobox #fb8c00>#rrggbb</col> when the textfield is focus
	 * @type {str} 
	 */
	outlineColor;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Sets or returns the placeholder text
	 * @type {str} 
	 */
	placeholder;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns a boolean value whether the text field in required or not
	 * @type {bin} 
	 */
	required;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the size variant of the textfield
	 * @type {str} 
	 */
	sizeVariant;

	/**
	 * Returns the start adornment text or icon
	 * @type {str} 
	 */
	startAdornment;

	/**
	 * Sets or returns the step increment if the input is of type number;
	 * @type {num} 
	 */
	stepIncrement;

	/**
	 * Sets or returns the text value of the TextField Component
	 * @type {str} 
	 */
	text;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the variant of the TextField
	 * @type {str} 
	 */
	variant;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnEnter
	 * @param {(text: str) => void} callback 
	 * @return {void} 
	 */
	setOnEnter(callback) {}

	/**
	 * SetOnChange
	 * @param {(text: str) => void} callback 
	 * @return {void} 
	 */
	setOnChange(callback) {}

	/**
	 * SetOnFocus
	 * @param {(focus: bin) => void} callback 
	 * @return {void} 
	 */
	setOnFocus(callback) {}

	/**
	 * SetRows
	 * @param {num} [min] `The minimum number of rows.`
	 * @param {num} [max] `The maximum number of rows.`
	 * @return {void} 
	 */
	setRows(min, max) {}

	/**
	 * SetStartAdornment
	 * @param {str} text `Text or material icon font.`
	 * @param {str} [type] A comma separated options for start adornment control. Options can be 
 `Icon` : If the adornment is an icon. 
 `Touchable` : If the adornment is touchable.
	 * @return {void} 
	 */
	setStartAdornment(text, type) {}

	/**
	 * SetStartAdornmentOnTouch
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setStartAdornmentOnTouch(callback) {}

	/**
	 * GetStartAdornment
	 * @return {str} 
	 */
	getStartAdornment() {}

	/**
	 * SetEndAdornment
	 * @param {str} text `Text or material icon font.`
	 * @param {str} [type] A comma separated options for end adornment control. Options can be 
 `Icon` : If the adornment is an icon. 
 `Touchable` : If the adornment is touchable.
	 * @return {void} 
	 */
	setEndAdornment(text, type) {}

	/**
	 * SetEndAdornmentOnTouch
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setEndAdornmentOnTouch(callback) {}

	/**
	 * GetEndAdornment
	 * @return {str} 
	 */
	getEndAdornment() {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UITimePicker {

	/**
	 * Sets or returns the time format
	 * @type {str} 
	 */
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
	show(callback, format) {}
}


class UITreeView {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the list object
	 * @type {obj} 
	 */
	list;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Returns the selected item of the TreeView
	 * @type {str} 
	 */
	value;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * SetOnTouch
	 * @param {(value: str, path: str) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetList
	 * @param {obj} obj The list object of the treeview items. See example above.
	 * @return {void} 
	 */
	setList(obj) {}

	/**
	 * AddItem
	 * @param {str} name `The label text for the new item.`
	 * @param {obj} obj See list object for more info.
	 * @return {void} 
	 */
	addItem(name, obj) {}

	/**
	 * GetItem
	 * @param {str} name `The parent name of the tree items.`
	 * @return {obj} 
	 */
	getItem(name) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIWebView {

	/**
	 * Returns the absolute height of the control in pixels
	 * @type {num} 
	 */
	absHeight;

	/**
	 * Returns the absolute distance of the control from the left in pixels
	 * @type {num} 
	 */
	absLeft;

	/**
	 * Returns the absolute distance of the control from the top in pixels
	 * @type {num} 
	 */
	absTop;

	/**
	 * Returns the absolute width of the control in pixels
	 * @type {num} 
	 */
	absWidth;

	/**
	 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
	 * @type {str} 
	 */
	backColor;

	/**
	 * The path to your image file
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the list of blocked urls
	 * @type {lst} 
	 */
	blockUrls;

	/**
	 * Sets or returns the border thickness in pixels
	 * @type {num} 
	 */
	border;

	/**
	 * Sets or returns the border color
	 * @type {str} 
	 */
	borderColor;

	/**
	 * Sets or returns the border style
	 * @type {str} 
	 */
	borderStyle;

	/**
	 * Sets or returns the corner radius in pixels
	 * @type {num} 
	 */
	cornerRadius;

	/**
	 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control
	 * @type {bin} 
	 */
	disabled;

	/**
	 * A reference to the webview`s window document object
	 * @type {obj} 
	 */
	document;

	/**
	 * Sets or returns the redirect url when an error occur
	 * @type {str} 
	 */
	errorPage;

	/**
	 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use
	 * @type {str} 
	 */
	fontFile;

	/**
	 * Sets or returns the height of the control as a fraction of the parent control
	 * @type {num} 
	 */
	height;

	/**
	 * Setst or returns the html loaded in the iframe
	 * @type {str} 
	 */
	html;

	/**
	 * Returns whether the control is visible or not
	 * @type {bin} 
	 */
	isVisible;

	/**
	 * Returns the distance of the control from the left
	 * @type {num} 
	 */
	left;

	/**
	 * Sets or returns the margin of the control
	 * @type {lst} 
	 */
	margins;

	/**
	 * Sets or returns the opacity of the control
	 * @type {num} 
	 */
	opacity;

	/**
	 * Sets or returns the <col nobox #fb8c00>options</col> of the control
	 * @type {str} 
	 */
	options;

	/**
	 * Sets or returns the padding of the control
	 * @type {lst} 
	 */
	padding;

	/**
	 * Returns the parent layout control
	 * @type {obj} 
	 */
	parent;

	/**
	 * Returns the position of the control
	 * @type {obj} 
	 */
	position;

	/**
	 * Sets or returns the angle of rotation in degrees
	 * @type {num} 
	 */
	rotation;

	/**
	 * Sets or returns the color of the text
	 * @type {str} 
	 */
	textColor;

	/**
	 * Sets or returns the size of the text within the control
	 * @type {num} 
	 */
	textSize;

	/**
	 * Sets or returns the text zoom of the page loaded in the web view
	 * @type {num} 
	 */
	textZoom;

	/**
	 * Returns the distance of the control from the top
	 * @type {num} 
	 */
	top;

	/**
	 * Returns the type of the control
	 * @type {str} 
	 */
	type;

	/**
	 * Sets or returns the url of the webview
	 * @type {str} 
	 */
	url;

	/**
	 * Sets or returns the visibility of the control
	 * @type {str} 
	 */
	visibility;

	/**
	 * Sets or returns the width of the control as a fraction of the parent control
	 * @type {num} 
	 */
	width;

	/**
	 * A reference to the webview`s window object
	 * @type {obj} 
	 */
	window;

	/**
	 * SetOnLoad
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnLoad(callback) {}

	/**
	 * SetOnTouch
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnTouch(callback) {}

	/**
	 * SetOnContextMenu
	 * @param {(event: obj) => void} callback 
	 * @return {void} 
	 */
	setOnContextMenu(callback) {}

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
	 * @return {void} 
	 */
	animate(anim, duration) {}

	/**
	 * SetSize
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @return {void} 
	 */
	setSize(width, height) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * Gone
	 * @return {void} 
	 */
	gone() {}

	/**
	 * Destroy
	 * @return {void} 
	 */
	destroy() {}

	/**
	 * SetScale
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 * @return {void} 
	 */
	setScale(x, y) {}

	/**
	 * GetPosition
	 * @param {str} [options] The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {}

	/**
	 * SetMargins
	 * @param {num} [left] `Fraction of the parent width.`
	 * @param {num} [top] `Fraction of the parent height.`
	 * @param {num} [right] `Fraction of the parent width.`
	 * @param {num} [bottom] `Fraction of the parent height.`
	 * @param {str} [mode='px'] `px` or `%`
	 * @return {void} 
	 */
	setMargins(left, top, right, bottom, mode) {}

	/**
	 * SetPadding
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode='px'] The size thickness mode. Can be `px`
	 * @return {void} 
	 */
	setPadding(left, top, right, bottom, mode) {}

	/**
	 * SetPosition
	 * @param {num} [left] `Fraction of the parent width. [0-1]`
	 * @param {num} [top] `Fraction of the screen height. [0-1]`
	 * @param {str} [mode='px'] Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 * @return {void} 
	 */
	setPosition(left, top, mode) {}

	/**
	 * SetBorder
	 * @param {num} [width] `Border-left thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal form `#rrggbb`
	 * @param {str} [style] Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 * @return {void} 
	 */
	setBorder(width, clr, style) {}

	/**
	 * SetCornerRadius
	 * @param {num} [tl] `Top-Left border radius in pixels.`
	 * @param {num} [tr] `Top-Right border radius in pixels.`
	 * @param {num} [bl] `Bottom-Left border radius in pixels.`
	 * @param {num} [br] `Bottom-Right border radius in pixels.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 * @return {void} 
	 */
	setCornerRadius(tl, tr, bl, br, mode) {}

	/**
	 * BringForward
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 * @return {void} 
	 */
	bringForward(zIndex) {}

	/**
	 * SendBackward
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 * @return {void} 
	 */
	sendBackward(zIndex) {}
}


class UIColorPicker {

	/**
	 * Returns the value of the chosen color
	 * @type {str} 
	 */
	value;

	/**
	 * GetValue
	 * @return {str} 
	 */
	getValue() {}
}


class UIDateTimePicker {

	/**
	 * SetOnSelect
	 * @param {(value: str) => void} callback 
	 * @return {void} 
	 */
	setOnSelect(callback) {}
}


class UIPopover {

	/**
	 * Sets or returns the path to the background image
	 * @type {str} 
	 */
	backImage;

	/**
	 * Sets or returns the font file use for the Popover
	 * @type {str} 
	 */
	fontFile;
}


class UIPopup {

	/**
	 * Sets or returns the duration of the popup in milliseconds
	 * @type {num} 
	 */
	duration;

	/**
	 * Sets or returns the text of the popup
	 * @type {str} 
	 */
	text;

	/**
	 * SetOnClose
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnClose(callback) {}

	/**
	 * SetOnAction
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnAction(callback) {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * SetPosition
	 * @param {str} [vertical] Vertical alignment. Values can be `Top` `Bottom`
	 * @param {str} [horizontal] Horizontal alignment. Values can be `Left` `Center` and `Right`
	 * @return {void} 
	 */
	setPosition(vertical, horizontal) {}

	/**
	 * GetPosition
	 * @return {obj} 
	 */
	getPosition() {}
}


class UIProgressDialog {

	/**
	 * Text
	 * @return {str} 
	 */
	text() {}

	/**
	 * Show
	 * @return {void} 
	 */
	show() {}

	/**
	 * Hide
	 * @return {void} 
	 */
	hide() {}

	/**
	 * SetOnClose
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	setOnClose(callback) {}
}


