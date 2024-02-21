declare var ui: UI;
declare const platform: { mobile: bin, ios: bin, android: bin, type: "mobile" | "tablet" | "desktop" };
declare class App {
	onStart(): void;
	onLoad(): void;
	onExit(): void;
}
declare type UIObject = UIAccordion | UIAppBar | UIBottomNavbar | UIButton | UIButtonGroup | UICheckbox | UICheckboxGroup | UIChip | UIDatePicker | UIDialog | UIDivider | UIDrawer | UIDropdown | UIFAB | UIImage | UILayout | UIList | UIMenu | UIProgress | UIRadioGroup | UISelect | UISlider | UIStepper | UISwitch | UISwitchGroup | UITabs | UIText | UITextField | UITimePicker | UITreeView | UIWebView | UIColorPicker | UIDateTimePicker | UIPopover | UIPopup | UIProgressDialog | UItheme;
/** ui object */
declare type uio = UIObject;

declare class UI {

	/**
	 * AddAccordion
	 * @param parent The parent layout where to add the text.
	 * @param titles An array of accordion titles.
	 * @param options one or a combination of the following: `Square` 
 `Layout type `Linear` or `Absolute`
	 * @param width `Fraction of the screen width: [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addAccordion(parent: obj, titles: obj, options?: str_com, width?: num, height?: num): UIAccordion;

	/**
	 * AddAppBar
	 * @param parent The parent layout where to add the AppBar
	 * @param title `The title text of the appbar`
	 * @param options one or a combination of the following: 
 `Menu` : Adds a menu icon on the left 
 `Primary` `Secondary` `Transparent` `Inherit` `Default` : Adds a color 
 `Absolute` `Static` `Fixed` `Relative` : Adds a positioning
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addAppBar(parent: obj, title: str, options?: str_com, width?: num, height?: num): UIAppBar;

	/**
	 * AddBottomNavbar
	 * @param parent The parent layout where to add the BottomNavbar
	 * @param navs An array whose elements are of the form `[ "Title", "Icon" ]`
	 * @param options one or a combination of the following: `Hidelabels`
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addBottomNavbar(parent: obj, navs: lst, options?: str_com, width?: num, height?: num): UIBottomNavbar;

	/**
	 * AddButton
	 * @param parent The layout where to add the button.
	 * @param text `The button text or the material icon text.`
	 * @param options one or a combination of the following: 
 Variant: `Contained` `Outlined` `Text` `Default` 
 `Color`: `Primary` `Secondary` `Default` 
 `Size`: `Small` `Medium` `Large` 
 `Util`: `Icon` `NoRipple` `Upload` 
 `In case of upload,  you can specify `Multiple` to accept multiple files.
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	addButton(parent: obj, text: str, options?: str_com, width?: num, height?: num): UIButton;

	/**
	 * AddButtonGroup
	 * @param parent The parent layout where to add the ButtonGroup
	 * @param list The item to be displayed on the buttn group.
	 * @param options one or a combination of the following: 
 Variant: `Contained` `Outlined` `Text` `Default` 
 `Color`: `Primary` `Secondary` `Default` 
 `Size`: `Small` `Medium` `Large` 
 `Orientation`: `Horizontal` `Vertical` 
 `Util`: `Icon` `NoElevation`
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	addButtonGroup(parent: obj, list?: lst, options?: str_com, width?: num, height?: num): UIButtonGroup;

	/**
	 * AddCheckbox
	 * @param parent The layout where to add the checkbox
	 * @param text `The label for the checkbox`
	 * @param options Colors: `Primary` `Secondary` `Medium` `Small` 
 `Position`: `Left` `Top` `Right` `Bottom` 
 `Variant`: `Indeterminate` `Determinate`
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	addCheckbox(parent: obj, text: str, options?: str_com, width?: num, height?: num): UICheckbox;

	/**
	 * AddCheckboxGroup
	 * @param parent The parent layout where to add the CheckboxGroup.
	 * @param list The items to be displayed.
	 * @param options Colors: `Default` `Primary` `Secondary` 
 `Sizes`: `Small` `Medium` 
 `Icon Position: `Left` or `Right` 
 `Container`: `Elevated` or `Outlined` 
 `Corners : `Square`
	 * @param width `Fraction of the screen width.`
	 * @param height `Fraction of the screen height.`
	 */
	addCheckboxGroup(parent: obj, list?: lst, options?: str_com, width?: num, height?: num): UICheckboxGroup;

	/**
	 * AddChip
	 * @param parent The parent layout where to add the Chip.
	 * @param text `The text on the chip.`
	 * @param options Color: `Primary` `Secondary` `Default` 
 `Size`: `Small` `Medium` 
 `Variant`: `Outlined` `Default` 
 `Util`: `Touchable`
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addChip(parent: obj, text: str, options?: str_com, width?: num, height?: num): UIChip;

	/**
	 * AddDatePicker
	 * @param date A default date value to which the datepicker begins. Format `YYYY-MM-DD`
	 * @param options `Portrait` `Landscape`
	 */
	addDatePicker(date: str, options?: str_com): UIDatePicker;

	/**
	 * AddDialog
	 * @param title `The dialog title text.`
	 * @param body `The dialog message to be shown.`
	 * @param actions `A comma separated text for action buttons.`
	 * @param options Colors: `Primary` `Secondary` 
 `Util`: `NoCancel` prevents the dialog from closing on action.
	 */
	addDialog(title: str, body: str, actions?: str, options?: str_com): UIDialog;

	/**
	 * AddDivider
	 * @param parent The layour where to add the divider.
	 * @param width `Fraction of the screen width.`
	 * @param options A comma separated Divider options. Values can be `Inset`
	 */
	addDivider(parent: obj, width?: num, options?: str): UIDivider;

	/**
	 * AddDrawer
	 * @param lay The drawer layout.
	 * @param width `width of the drawer`
	 */
	addDrawer(lay: obj, options?: str_com, width?: num): UIDrawer;

	/**
	 * AddDropdown
	 * @param parent The layout where to add the dropdown.
	 * @param list `The list items to show.`
	 * @param options A comma separated Dropdown options. Can be 
 Colors: `Primary` `Secondary` `Default` 
 `Variants`: `Contained` `Outlined` `Text` 
 `Sizes`: `Small` `Medium` `Large` 
 `Orientation`: `Horizontal` `Vertical` 
 `Util`: `NoElevation`
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addDropdown(parent: obj, list?: str_com, options?: str, width?: num, height?: num): UIDropdown;

	/**
	 * AddFAB
	 * @param parent The parent layout where to add the fab
	 * @param icon `The string icon of the FAB`
	 * @param options `Fixed` `Static` `Rounded` `Extended` `Left` `Right`
	 * @param text `Text to show for extended FABs.`
	 */
	addFAB(parent: obj, icon: str, options?: str_com, text?: str): UIFAB;

	/**
	 * AddImage
	 * @param parent The parent layout where to add the image.
	 * @param file `The path to the image.`
	 * @param options A comma seprated options for the image. Can be `Image` `Canvas` `Button` or `Avatar`
	 * @param width `Fraction of the screen width.`
	 * @param height `Fraction of the screen height.`
	 */
	addImage(parent: obj, file: str, options?: str, width?: num, height?: num): UIImage;

	/**
	 * AddLayout
	 * @param parent The parent layout where to add this component. Pass a string `main` for the main layout of your app.
	 * @param type The layout type. Values can be `Linear` `Absolute` `Frame` `Slide`
	 * @param options Layout options. Values can be 
 Orientation:  `Horizontal` `Vertical` 
 `Horizontal Alignment: `Left` `Center` `Right` 
 `Vertical Alignment: `Top` `VCenter` `Bottom` 
 `Dimensions`: `FillX` `FillY` 
 `Scroll`: `ScrollX` `ScrollY` `ScrollXY` `NoScrollBar` 
 `Utils`: `BackColor` to apply light or dark background rather than transparent.
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addLayout(parent: "main"|obj, type: str, options?: str, width?: num, height?: num): UILayout;

	/**
	 * AddList
	 * @param parent The parent layout
	 * @param list An array of arrays. Each element is of the form `[icon, title, body, secondary]`
	 * @param options Media: `Icon` `Avatar` 
 `Styling`: `Dense` `Inset` 
 `Util`: `Selectable` `Divider` `SecondaryText`,  `NoRipple` to disable ripple effect
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addList(parent: obj, list?: lst, options?: str_com, width?: num, height?: num): UIList;

	/**
	 * AddMenu
	 * @param parent The component where to anchor the Menu.
	 * @param list A list of items to be shown in the pop-up menu. You can also pass a comma separated string. For menu with icon the format is `icon&colon;title` \n `Add a `colon` before an item to display it as the label text.
	 * @param options Color: `Primary` `Secondary` `Error` 
 List: `Dense` 
 Icons: `Icon`
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addMenu(parent: obj, list?: lst, options?: str_com, width?: num, height?: num): UIMenu;

	/**
	 * AddProgress
	 * @param parent The parent layout where to add the prgress component.
	 * @param value `the initial value of the progress component.`
	 * @param options Color: `Primary` `Secondary` 
 `Type`: `Circular` `Linear` 
 `Variant`: `Determinate` `Indeterminate`
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction fo the screen height. [0-1]`
	 */
	addProgress(parent: obj, value?: num, options?: str_com, width?: num, height?: num): UIProgress;

	/**
	 * AddRadioGroup
	 * @param parent The parent where to add the RadioGroup component.
	 * @param list `The list items array.`
	 * @param options Radio Sizes: `Small` `Medium` 
 `Colors`: `Primary` `Secondary` 
 `Icon Position: `Left` or `Right` 
 `Container`: `Elevated` or `Outlined` 
 `Corner`: `Square` 
 `Required`
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addRadioGroup(parent: obj, list?: str_com, options?: str_com, width?: num, height?: num): UIRadioGroup;

	/**
	 * AddSelect
	 * @param parent The parent layout where to add the control
	 * @param list `The list of items for the Select options`
	 * @param options Sizes: `Small` `Medium` 
 `Variant`: `Filled` `Outlined` `Standard` 
 `Margin`: `Dense` `Normal` 
 `Utils`: `Required` `Multiple` `Radio` `Disabled` `AutoFocus` `FullWidth`
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addSelect(parent: obj, list?: str_com, options?: str_com, width?: num, height?: num): UISelect;

	/**
	 * AddSlider
	 * @param parent The layout where to add the Slider Component.
	 * @param value `The initial value of the Slider. Value must be between 0-100`, ` the default min and max values.`
	 * @param options Color: `Primary` `Secondary` 
 `Orienation`: `Horizontal` `Vertical` 
 `Track`: `Normal` `Inverted` `False`
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height.`
	 */
	addSlider(parent: obj, value: num, options?: str_com, width?: num, height?: num): UISlider;

	/**
	 * AddStepper
	 * @param parent The parent layout of the Stepper
	 * @param steps An array of titles.
	 * @param options A comma separated Stepper options. Values can be `Vertical` `Horizontal` `Loop` `Mobile` or `AlternativeLabel`.
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addStepper(parent: obj, steps?: lst, options?: str, width?: num, height?: num): UIStepper;

	/**
	 * AddSwitch
	 * @param parent The parent layout where to add the Switch Component.
	 * @param text `The label text.`
	 * @param options A comma separated switch options. Options can be one or a combination of the following 
 Color: `Primary` `Secondary` `Default` 
 `Icon Position: `Left` `Top` `Right` `Bottom` 
 `Sizes`: `Small` `Medium`
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addSwitch(parent: obj, text: str, options?: str, width?: num, height?: num): UISwitch;

	/**
	 * AddSwitchGroup
	 * @param parent The parent layout where to add the SwitchGroup Component.
	 * @param list The list items array whose elements can be `String` if items is text only,  or `Array` of the form `[ "icon",  "label" ]` if items is icon and text.
	 * @param options Icon: `Icon` 
 `Color`: `Primary` or `Secondary` 
 `Container`: `Elevated` or `Outlined` 
 `Corner`: `Square` 
`Divider`
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addSwitchGroup(parent: obj, list?: str_com, options?: str_com, width?: num, height?: num): UISwitchGroup;

	/**
	 * AddTabs
	 * @param parent The parent layout where to add the Tabs Component.
	 * @param list `An array of tab names.`
	 * @param options Enable swipe: `Swipeable` 
 `Colors`: `Primary` `Secondary` `Inherit` `Transparent` `Default` 
 `Variant`: `Standard` `Scrollable` `FullWidth` 
 `Layout`: `Linear`,  `Absolute` 
Utils: `Icon` `Center` `Paper`
	 * @param width `Fraction of the screen width. [0-1]`
	 * @param height `Fraction of the screen height. [0-1]`
	 */
	addTabs(parent: obj, list?: str_com, options?: str_com, width?: num, height?: num): UITabs;

	/**
	 * AddText
	 * @param parent The layout control where to add the text control
	 * @param text `The text to be displayed on the text control`
	 * @param options A comma separated string. Options can be one or a combination of the following: 
 Variants: `H1` `H2` `H3` `H4` `H5` `H6` `body1` `body2` `overline` `subtitle1` `subtitle2` `button` `caption`.
Lines: `Singleline` `Multiline`.
Alignment: `Left` `Center` `Right` `Justify`.
Color: `Primary` `Secondary` `Error`.
Format `Html` `Icon` `Italize` `Monospace` `Bold` `Underline` 
 `Utils`: `Touchable`
	 * @param width `Fraction of the screen width`
	 * @param height `Fraction of the screen height`
	 */
	addText(parent: obj, text: str, options?: str, width?: num, height?: num): UIText;

	/**
	 * AddTextField
	 * @param parent The layout where to add the TextField Component.
	 * @param text `The initial value of the TextField`
	 * @param options Color: `Primary` or `Secondary` 
 `Sizes`: `Small` or `Medium` 
 `Type`: `Text` `Password` `Email` `Search` `Number` `Date` `Time` or `DateTime` 
 `Variant`: `Standard` `Filled` or `Outlined` 
 `Utils`: `Autofocus`
	 * @param width `Fraction of the screen width.`
	 * @param height `Fraction of the screen height.`
	 */
	addTextField(parent: obj, text: str, options?: str_com, width?: num, height?: num): UITextField;

	/**
	 * AddTimePicker
	 * @param time A default time value to which the timepicker begins. Value is of the form `HH:mm`
	 * @param options `Portrait` `24H` `12H`
	 */
	addTimePicker(time: str, options?: str_com): UITimePicker;

	/**
	 * AddTreeView
	 * @param parent The parent layout where to add the TreeView component.
	 * @param list An object of the treeview items. See example below.
	 * @param options `A comma separated TreeView options.`
	 * @param width `Fraction of the screen width.`
	 * @param height `Fraction of the screen height.`
	 */
	addTreeView(parent: obj, list?: obj, options?: str, width?: num, height?: num): UITreeView;

	/**
	 * AddWebView
	 * @param parent The parent layout where to add the WebView component.
	 * @param url `The url of the website.`
	 * @param width `Fraction of the parent width.`
	 * @param height `Fraction of the parent height.`
	 */
	addWebView(parent: obj, url?: str, options?: str_com, width?: num, height?: num): UIWebView;

	/** Set the current theme */
	setTheme(theme: "dark"|"light"): void;

	/**
	 * ShowColorPicker
	 * @param value `A hexadecimal default value for the color picker.`
	 * @param options A comma separated color picker options. Values can be 
 `Alpha` Includes an alpha
	 */
	showColorPicker(value?: str, options?: str): UIColorPicker;

	/**
	 * ShowDateTimePicker
	 * @param date `Default value for date of the form "MM/DD/YYYY"`
	 * @param time `Default value for time of the form "HH/MM/SS"`
	 * @param format The format value that will be pass to callback. Formats can be of the form 
 `MM/DD/YYYY HH:SS` `MM:YYYY HH:SS`\
 	 * &emsp; `HH` - MM\
 	 * &emsp; `MM` - DD\
 	 * &emsp; `HH` - MM
	 */
	showDateTimePicker(callback: (this: UIDateTimePicker) => void, date?: str, time?: str, format?: str): UIDateTimePicker;

	/**
	 * ShowPopover
	 * @param parent UI component. Can be a `Layout` `Button` `Image` `Text` or any UI component except dialogs.
	 * @param text The text to de displayed. For displaying more data,  pass a `Layout`
	 * @param position A comma separated values representing the `anchorOrigin, transformOrigin` 
 `anchorOrigin` Position of the popover on its parent. Available values are `tl` for top-left,  `tc` for top-center,  `tr` `cl` `cc` `cr` `bl` `bc` and `br` for bottom-right. 
 `transformOrigin` Origin on the popover itselt. Values are the same as the `anchorOrigin`
	 * @param width `Fraction of the screen width.`
	 * @param height `Fraction of the screen height.`
	 */
	showPopover(parent: obj, text?: str, position?: str, width?: num, height?: num): UIPopover;

	/**
	 * ShowPopup
	 * @param msg `The message to display on the pop-up.`
	 * @param options A comma separated Menu options. Values can be 
 Duration: `Short` `Long` 
 `Vertical Alignment: `Top` `Bottom` 
 `Horizontal Alignment: `Left` `Center` `Right` 
 `Action options: `Icon` or `HideOnAction` 
 `Transition`: `Grow` `Fade` `Slide` `Collapse` `Zoom`
	 * @param duration `Time in milliseconds. Pass this`, ` if you don't want the default auto hide duration.`
	 * @param action `Action button text.`
	 */
	showPopup(msg: str, options?: str, duration?: num, action?: str): UIPopup;

	/**
	 * ShowProgressDialog
	 * @param text The text message of the progress dialog. Options can be 
 `AutoCancel` to close the dialog when backdrop is click.
	 */
	showProgressDialog(text?: str, options?: str_com): UIProgressDialog;

	/** UI theme information */
	theme: UItheme;

	/** UI library version */
	version: num;

}

declare class UIAccordion {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius of the accordion panel */
	cornerRadius: num;

	/** Sets or returns whether the accordion is disabled or not */
	disabled: bin;

	/** Sets or returns the material icon font for the expand icon */
	expandIcon: str;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Sets or returns the padding of each accordion item */
	itemPadding: lst;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns whether the accordion is rounded or not */
	rounded: bin;

	/** Sets or returns the secondary text of the accordion items */
	secondaryText: lst;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the title text color in hexadecimal format <col nobox #fb8c00>#rrggbb</col> */
	textColor1: str;

	/** Sets or returns the secondary text color in hexadecimal format <col nobox #fb8c00>#rrggbb</col> */
	textColor2: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the accordion title text size */
	textSize1: num;

	/** Sets or returns the accordion secondary text size */
	textSize2: num;

	/** Sets and returns the width of the title as fraction */
	titleWidth: num;

	/** Sets or returns the list of titles for the accordion panel */
	titles: lst;

	/** Collapse or shrink a corresponding accordion by its index */
	toggle: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/**
	 * GetLayout
	 * @param index `The index of the accordion. You can also pass accordion title.`
	 */
	getLayout(index: num): UILayout;

	/**
	 * SetTitleText
	 * @param index `The index of the corresponding title to updates.`
	 * @param title `The new title text.`
	 */
	setTitleText(index: num, title: str): void;

	/**
	 * SetSecondaryText
	 * @param text The secondary text to display. You can pass arguments as string or array by following the format below. \n String: `"Secodary text 1,Secondary text 2,Secondary text 3"` \n `Array`: `[ "Secondary text 1", "Secondary text 2", "Secondary text 3" ]`
	 * @param index If `index` is provided,  the corresponding index will be updated with the new text.
	 */
	setSecondaryText(text: obj, index: num): void;

	/**
	 * SetExpandIcon
	 * @param icon `A material icon`
	 */
	setExpandIcon(icon: str): void;

	/**
	 * AddItem
	 * @param title `Accordion title`
	 * @param secondaryText `Accordion secondary text`
	 * @param index The index at which the accordion item will be added. If `null`,  the item will be added at the bottom of the accordion.
	 */
	addItem(title: str, secondaryText: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index `The index of the corresponding accordion to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param title `The title of the corresponding accordion to remove.`
	 */
	removeItemByName(title: str): void;

	/** ShiftItem */
	shiftItem(): void;

	/** PopItem */
	popItem(): void;

	/**
	 * SetEnabled
	 * @param index `The index of the corresponding accordion.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index `The index of the accordion item.`
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name `The title of the accordion`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name `The title of the accordion.`
	 */
	getEnabledByName(name: str): bin;

	/**
	 * GetLayoutIndex
	 * @param layout The layout to check.
	 */
	getLayoutIndex(layout: obj): num;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIAccordion, index: num, expand: bin) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIAccordion, title: str, index: num, event: obj) => void): void;

	/**
	 * SetTextColor
	 * @param color1 Color of the title text in hexadecimal format `#rrggbb`
	 * @param color2 Color of the secondary text in hexadecimal format `#rrggbb`
	 */
	setTextColor(color1: str, color2?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIAppBar {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color of the AppBar */
	color: str;

	/** Sets or returns the corner radius of the accordion panel */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the icon of the menu button */
	icon: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the right layout of the appbar where you can add controls */
	layout: UILayout;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns whether the appbar has menu button */
	menu: bin;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or return the AppBar title text */
	text: str;

	/** Sets or returns the hexadecimal color of the appbar title */
	textColor: str;

	/** Sets or returns the font size of the title text */
	textSize: num;

	/** Sets or returns the variant of the title text */
	textVariant: str;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnMenu */
	setOnMenu(callback: (this: UIAppBar) => void): void;

	/**
	 * AddLayout
	 * @param lay The layout where to add controls
	 */
	addLayout(lay: obj): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIAppBar, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIAppBar, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIBottomNavbar {

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns whether the bottom navigation is disabled or enabled */
	disabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the icon color */
	iconColor: str;

	/** Sets or returns the icon font-size */
	iconSize: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Sets or returns a boolean whether the labels are shown or hidden on active state */
	labels: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the navigation actions array */
	list: lst;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the current value of the BottomNavbar */
	value: num;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIBottomNavbar, text: str, index: num, event: obj) => void): void;

	/**
	 * SetList
	 * @param navs The navigation actions array. See `navs` param above for format.
	 */
	setList(navs: lst): void;

	/** GetList */
	getList(): lst;

	/**
	 * SelectItem
	 * @param name `The name to be set to active`
	 */
	selectItem(name: str): void;

	/**
	 * SelectItemByIndex
	 * @param index `The index of the bottom navigation action to be selected`
	 */
	selectItemByIndex(index: num): void;

	/** ClearSelection */
	clearSelection(): void;

	/**
	 * SetItemByIndex
	 * @param index `The index to update`
	 * @param newName `The name of the navigation action`
	 * @param newIcon `Material icon`
	 */
	setItemByIndex(index: num, newName: str, newIcon: str): void;

	/**
	 * SetIcon
	 * @param index `The index of the navigation action to update`
	 * @param newIcon `Material icon`
	 */
	setIcon(index: num, newIcon: str): void;

	/**
	 * AddItem
	 * @param name `The name of the navigation action`
	 * @param icon `Material icon`
	 * @param index `The index in which to add the action.`
	 */
	addItem(name: str, icon: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index `The index of the navigation action to be remove`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name `The name of the navigation action to be remove.`
	 */
	removeItemByName(name: str): void;

	/** ShiftItem */
	shiftItem(): void;

	/** PopItem */
	popItem(): void;

	/** SetOnChange */
	setOnChange(callback: (this: UIBottomNavbar, text: str, index: num) => void): void;

	/**
	 * SetEnabled
	 * @param index `The index of the navigation action.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index `The index of the navigation action.`
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name `The name of the bottom navigation action.`
	 * @param value Values can be `true` or `false`
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name `The name of the bottom navigation action.`
	 */
	getEnabledByName(name: str): bin;

	/** ShowLabels */
	showLabels(): void;

	/** HideLabels */
	hideLabels(): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIBottomNavbar, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIButton {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** Sets or returns the accepted files for an upload button */
	acceptedFiles: str;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the badge content */
	badge: num;

	/** Sets or returns the color of the badge */
	badgeColor: str;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color of the button */
	color: str;

	/** Sets or returns the corner radius of the button */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the material icon font use for the leading icon */
	icon: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the size variant of the button */
	sizeVariant: str;

	/** Sets or returns the button text */
	text: str;

	/** Sets or returns the text color in hexadecimal format */
	textColor: str_col;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the tooltip text */
	toolTip: str;

	/** Sets or returns the tooltip position */
	toolTipPosition: str;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the variant of the button */
	variant: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnFileSelect */
	setOnFileSelect(callback: (this: UIButton, files: lst) => void): void;

	/**
	 * SetToolTip
	 * @param title `The text of the tooltip`
	 * @param pos Position of the tooltip. 
 Positions : `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTip(title: str, pos?: str): void;

	/**
	 * SetTextShadow
	 * @param radius `The radius in pixels`
	 * @param dx `The x-offset in pixels`
	 * @param dy `The y-offset in pixels`
	 * @param color The color in hexadecimal `#rrggbb`
	 */
	setTextShadow(radius: num, dx: num, dy: num, color: str): void;

	/**
	 * SetPadding
	 * @param left `The left padding in pixel.`
	 * @param top `The top padding in pixels`, ``
	 * @param right `The right padding in pixels.`
	 * @param bottom `The bottom padding in pixels.`
	 * @param mode `px` `%`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIButton, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIButton, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIButtonGroup {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color of the button */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the list items of the button group */
	list: lst;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the orientation of the button group */
	orientation: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the size variant */
	sizeVariant: str;

	/** Sets or returns the color of the button text */
	textColor: str;

	/** Sets or returns the font size of the button text */
	textSize: num;

	/** Sets or returns the position of the tooltip */
	toolTipPosition: str;

	/** Sets or returns the list of tooltip titles */
	toolTips: lst;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the variant */
	variant: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIButtonGroup, text: str, index: num, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIButtonGroup, text: str, index: num, event: obj) => void): void;

	/**
	 * SetList
	 * @param items `A comma separated list or an array`
	 */
	setList(items: str): void;

	/**
	 * SetItemByIndex
	 * @param item `The new text`
	 * @param index `The index of the item.`
	 */
	setItemByIndex(item: str, index: num): void;

	/**
	 * AddItem
	 * @param item `The additional item.`
	 */
	addItem(item: str): void;

	/**
	 * RemoveItemIndex
	 * @param index `The index of the item to be remove.`
	 */
	removeItemIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name `The name of the item to be remove.`
	 */
	removeItemByName(name: str): void;

	/** PopItem */
	popItem(): void;

	/** ShiftItem */
	shiftItem(): void;

	/**
	 * SetToolTip
	 * @param titles The titles for each item in the ButtonGroup.
	 * @param pos The positio of the tooltip. 
 Can be `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTip(titles: lst, pos?: str): void;

	/**
	 * EnableElevation
	 * @param enable `true` or `false`
	 */
	enableElevation(enable: bin): void;

	/**
	 * SetEnabled
	 * @param index `The index of the button item.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index `The index of the button item in the button group.`
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name `The button text.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name `The button text.`
	 */
	getEnabledByName(name: str): bin;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UICheckbox {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the material icon font for check stated */
	checkIcon: str;

	/** Sets or returns the theme color of the checkbox when checked */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Enabled or disable the checkbox component */
	disable: bin;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Returns whether the Checkbox is enabled or disabled */
	enabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the color of the checkbox icon */
	iconColor: str;

	/** Sets or returns the size of the icon */
	iconSize: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the space between the checkbox icon and the label text */
	spaceBetween: num;

	/** Sets or returns the checkbox text */
	text: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the text position */
	textPosition: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the material icon font for uncheck state */
	uncheckIcon: str;

	/** Sets or returns the checked state of the checkbox */
	value: bin;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnTouch */
	setOnTouch(callback: (this: UICheckbox, check: bin) => void): void;

	/**
	 * SetIcon
	 * @param checked `Material icon for checked state`
	 * @param unchecked `Material icon for unchecked state`
	 */
	setIcon(checked: str, unchecked: str): void;

	/** GetIcon */
	getIcon(): obj;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UICheckbox, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UICheckboxGroup {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the material icon font for check stated */
	checkIcon: str;

	/** Sets or returns the theme color use for the checkbox */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the depth of the container */
	elevation: str;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the color of the checkbox icon */
	iconColor: str;

	/** Sets or returns the size of the checkbox icon */
	iconSize: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Sets or returns the padding of each list item */
	itemPadding: lst;

	/** Sets or returns the label text */
	label: str;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the list items */
	list: lst;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns whether the container is outlined or elevated */
	outlined: bin;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the size variant of the Checkbox */
	sizeVariant: str;

	/** Sets or returns the space between the checkbox icon and the text */
	spaceBetween: num;

	/** Sets or returns the text color in hexadecimal format */
	textColor: str_col;

	/** Sets or returns the size of the checkbox icon */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the material icon font for uncheck state */
	uncheckIcon: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnTouch */
	setOnTouch(callback: (this: UICheckboxGroup, value: bin, text: str, index: num, event: obj) => void): void;

	/** SetOnChange */
	setOnChange(callback: (this: UICheckboxGroup, values: lst) => void): void;

	/**
	 * SetIcon
	 * @param checked `Material icon font`
	 * @param unchecked `Material icon font`
	 */
	setIcon(checked: str, unchecked: str): void;

	/** GetIcon */
	getIcon(): obj;

	/**
	 * SetCheckedByIndex
	 * @param item `The item or index of the item.`
	 * @param bool The item value. Can be `true` or `false`.
	 */
	setCheckedByIndex(item: num, bool: bin): void;

	/**
	 * SetCheckedByName
	 * @param name `The item or index of the item.`
	 * @param bool The item value. Can be `true` or `false`.
	 */
	setCheckedByName(name: str, bool: bin): void;

	/** GetCheckedItems */
	getCheckedItems(): str;

	/**
	 * GetCheckedByIndex
	 * @param index `The index of the corresponding item.`
	 */
	getCheckedByIndex(index: num): bin;

	/**
	 * GetCheckedByName
	 * @param name `The index of the corresponding item.`
	 */
	getCheckedByName(name: str): bin;

	/**
	 * SetTextByIndex
	 * @param index `The index of the item.`
	 * @param val `The new text to replace.`
	 */
	setTextByIndex(index: num, val: str): void;

	/**
	 * SetTextByName
	 * @param name `The name of the item`
	 * @param val `The new text to replace`
	 */
	setTextByName(name: str, val: str): void;

	/**
	 * GetText
	 * @param index `The index of the list`
	 */
	getText(index: num): str;

	/**
	 * SetList
	 * @param list The new list items for the checkbox group.
	 */
	setList(list: obj): void;

	/**
	 * SetEnabled
	 * @param index `The index of the checkbox item.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index `The index of the checkbox item.`
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name `The name of the checkbox item.`
	 * @param value Values can be `true` or `false`
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name `The checkbox item.`
	 */
	getEnabledByName(name: str): bin;

	/**
	 * AddItem
	 * @param text `The text label for the checkbox.`
	 * @param index `The index in which to insert the item.`
	 */
	addItem(text: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param title `The title text of the corresponding checkbox item.`
	 */
	removeItemByName(title: str): void;

	/** PopItem */
	popItem(): void;

	/** ShiftItem */
	shiftItem(): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UICheckboxGroup, label: str, index: num, event: obj) => void): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIChip {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** Sets or returns the avatar */
	avatar: str;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color of the chip */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the delete icon */
	deleteIcon: str;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Returns whether the chip is enabled or disabled */
	enabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the material icon font if icon is provided */
	icon: str;

	/** Sets or returns the icon color in hexadecimal format */
	iconColor: str;

	/** Sets or returns the font-size of the icon in css font-size format */
	iconSize: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the size variant */
	sizeVariant: str;

	/** Sets or returns the text of the chip */
	text: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the variant of the chip */
	variant: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/**
	 * SetTouchable
	 * @param touchable `true` or `false`
	 */
	setTouchable(touchable: bin): void;

	/** SetOnDelete */
	setOnDelete(callback: (this: UIChip) => void): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIChip, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIChip, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIDatePicker {

	/** Sets or returns the format of the selected date */
	format: str;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/**
	 * SetLimits
	 * @param past Date in the past of the form `YYYY-MM-DD`
	 * @param future Date in the future of the form `YYYY-MM-DD`
	 */
	setLimits(past?: str, future?: str): void;

	/** SetOnSelect */
	setOnSelect(callback: (this: UIDatePicker, date: str) => void): void;

	/**
	 * SetFormat
	 * @param format A date format. Can be `YYYY-MM-DD` `MM-DD-YYYY` `DD-MM-YYYY`
	 */
	setFormat(format: str): void;

	/** IsVisible */
	isVisible(): bin;
}


declare class UIDialog {

	/** Returns the layout of the dialog where you can add custom controls */
	layout: UILayout;

	/** Sets or returns the dialog text */
	text: str;

	/** Sets or returns the title text color in hexadecimal format */
	titleColor: str;

	/** Sets or returns the dialog title text */
	titleText: str;

	/** SetOnAction */
	setOnAction(callback: (this: UIDialog, text: str, index: num) => void): void;

	/** SetOnClose */
	setOnClose(callback: (this: UIDialog) => void): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;
}


declare class UIDivider {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the color in hexadecimal format */
	color: str_col;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIDivider, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIDivider, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIDrawer {

	/** Sets or returns the anchor position of the drawer */
	anchor: str;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the drawer */
	disabled: bin;

	/** Sets or returns the width of the swipeable area of the Drawer */
	swipeAreaWidth: num;

	/** Sets or returns the width of the drawer as a fraction of the screen viewport relative to its anchor position <col nobox #fb8c00>[0-1]</col> */
	width: num;

	/**
	 * AddLayout
	 * @param lay Layout component.
	 */
	addLayout(lay: obj): void;

	/**
	 * DisableSwipeToOpen
	 * @param value Values can be `true` or `false`.
	 */
	disableSwipeToOpen(value: bin): void;

	/**
	 * DisableBackdropTransition
	 * @param value Values can be `true` or `false`.
	 */
	disableBackdropTransition(value: bin): void;

	/**
	 * DisableDiscovery
	 * @param value Values can be `true` or `false`.
	 */
	disableDiscovery(value: bin): void;

	/** SetOnOpen */
	setOnOpen(callback: (this: UIDrawer) => void): void;

	/** SetOnClose */
	setOnClose(callback: (this: UIDrawer) => void): void;

	/**
	 * Show
	 * @param anchor Open position. Can be `left` or `right`.
	 */
	show(anchor?: str): void;

	/** Hide */
	hide(): void;
}


declare class UIDropdown {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the dropdown material icon font */
	icon: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Sets or returns the default label of the dropdown */
	label: str;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the dropdown list */
	list: lst;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the orientation of the dropdown buttongroup */
	orientation: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the size variant of the dropdown button */
	sizeVariant: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the value of the Dropdown */
	value: str;

	/** Sets or returns the variant of the dropdown button */
	variant: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnChange */
	setOnChange(callback: (this: UIDropdown, value: obj, index: num) => void): void;

	/** SetOnClose */
	setOnClose(callback: (this: UIDropdown) => void): void;

	/**
	 * SetList
	 * @param val The list of new items t display.
	 */
	setList(val: lst): void;

	/**
	 * SetItemByIndex
	 * @param item `The new item text.`
	 * @param index `The index of the item to update.`
	 */
	setItemByIndex(item: str, index: num): void;

	/**
	 * GetItemByIndex
	 * @param index `The index of corresponding item.`
	 */
	getItemByIndex(index: num): str;

	/**
	 * SetEnabled
	 * @param index `The index of the item.`
	 * @param value Values can be `true` `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index `The index of the item.`
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name `The name of the item.`
	 * @param value Values can be `true` `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name `The name of the corresponding menu item.`
	 */
	getEnabledByName(name: str): bin;

	/**
	 * AddItem
	 * @param name `The name of the menu.`
	 * @param index `The index in which to insert the menu item.`
	 */
	addItem(name: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index `The index of the menu item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name `The name of the menu item.`
	 */
	removeItemByName(name: str): void;

	/** ShiftItem */
	shiftItem(): void;

	/** PopItem */
	popItem(): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIDropdown, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIDropdown, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIFAB {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color for the FAB */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the disabled state of the ripple effect */
	disabledRipple: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the material icon font */
	icon: str;

	/** Sets or returns the size of the icon */
	iconSize: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the size variant of the FAB */
	sizeVariant: str;

	/** Sets or returns the text for extended FAB */
	text: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the variant use for the FAB */
	variant: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/**
	 * SetCornerRadius
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIFAB, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIFAB, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIImage {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the material icon for error placeholder image */
	errorIcon: str;

	/** Sets or returns the path or url of the image file */
	file: str;

	/** Sets or returns the background color of the canvas */
	fill: str;

	/** Sets or returns the fill color used on close paths such as square, circle, rectangle or arcs */
	fillColor: str;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the style of the end caps for a line */
	lineCap: str;

	/** Sets or returns the type of corner created when two lines meet */
	lineJoin: str;

	/** Sets or returns the current line thickness */
	lineWidth: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the maximum miter length */
	miterLimit: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/** Returns the pixel data of the image */
	pixelData: lst;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the current color of the line or stroke */
	strokeColor: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the text-size for drawing in the canvas */
	textSize: num;

	/** Sets or returns the text-style for drawing in the canvas */
	textStyle: str;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnLoad */
	setOnLoad(callback: (this: UIImage) => void): void;

	/**
	 * EnableContextMenu
	 * @param value Value. Can be `true` `false`
	 */
	enableContextMenu(value: bin): void;

	/**
	 * SetImage
	 * @param file `The path to the image file.`
	 */
	setImage(file: str): void;

	/**
	 * GetPixelColor
	 * @param x `The x-coordinate of the pixel from the left.`
	 * @param y `The y-coordinate of the pixel from the top.`
	 */
	getPixelColor(x: num, y: num): lst;

	/** GetPixelData */
	getPixelData(): str;

	/**
	 * DrawLine
	 * @param x1 `The x-coordinate of the starting point in pixels.`
	 * @param y1 `The y-coordinate of the starting point in pixels`
	 * @param x2 `The x-coordinate of the second point in pixels.`
	 * @param y2 `The y-coordinate of the second point in pixels.`
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stroke thickness.`
	 */
	drawLine(x1: num, y1: num, x2: num, y2: num, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * DrawCircle
	 * @param x `The x-coordinate of the center of the circle in pixels.`
	 * @param y `The y-coordinate of the center of the circle in pixels.`
	 * @param radius `The radius of the circle in pixels.`
	 * @param fillColor `A hexadecimal color.`
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stoke thickness.`
	 */
	drawCircle(x: num, y: num, radius: num, fillColor?: str, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * DrawSquare
	 * @param x `The position from the left of the top-left corner of the square in pixels.`
	 * @param y `The distance from the top of the top-left corner of the square in pixels.`
	 * @param width `The width of the square in pixels.`
	 * @param fillColor `A hexadecimal color.`
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stroke thickness in pixels.`
	 */
	drawSquare(x: num, y: num, width: num, fillColor?: str, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * DrawRectangle
	 * @param x1 `The distance from the left of the top-left corner of the rectangle in pixels.`
	 * @param y1 `The distance from the top of the top-left corner of the rectangle in pixels.`
	 * @param width `The width of the rectangle in pixels.`
	 * @param height `The height of the rectangle in pixels.`
	 * @param fillColor `A hexadecimal color.`
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stroke thickness.`
	 */
	drawRectangle(x1: num, y1: num, width: num, height: num, fillColor?: str, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * DrawArc
	 * @param x `The x-coordinate of the center of the arc in pixels.`
	 * @param y `The y-coordinate of the center of the arc in pixels.`
	 * @param radius `The radius of the arc in pixels.`
	 * @param start `The starting angle in degress`
	 * @param end `The angle in degress in which the arc will stop.`
	 * @param fillColor `A hexadecimal color.`
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stroke thickness.`
	 */
	drawArc(x: num, y: num, radius: num, start: num, end: num, fillColor?: str, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * DrawImage
	 * @param img `Path to image file.`
	 * @param x `The distance from the left of the top-left corner of the image in pixels.`
	 * @param y `The distance from the top of the top-left corner of the image in pixels.`
	 * @param width `If provided`, ` the image will be shrink or stretch to fill this width in pixels.`
	 * @param height `If provided`, ` the height of the image will be shrink or stretch to fill this height in pixels.`
	 */
	drawImage(img: str, x?: num, y?: num, width?: num, height?: num): void;

	/** Clear */
	clear(): void;

	/**
	 * DrawPolyline
	 * @param points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stroke thickness.`
	 */
	drawPolyline(points: lst, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * DrawPolygon
	 * @param points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
	 * @param fillColor `A hexadecimal color.`
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stroke thickness.`
	 */
	drawPolygon(points: lst, fillColor?: str, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * DrawPoint
	 * @param x `The x-coordinate in pixels.`
	 * @param y `The y-coordinate in pixels.`
	 * @param color `A hexadecimal color.`
	 */
	drawPoint(x: num, y: num, color?: str): void;

	/** SetOnTouchMove */
	setOnTouchMove(callback: (this: UIImage) => void): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIImage, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIImage, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UILayout {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** Sets or returns the horizontal alignment of the control in a Linear Layout */
	alignment: str;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the margins of child components */
	childMargins: lst;

	/** Sets or returns the spacing of the child control in a Linear Layout */
	childSpacing: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the index of the current slide */
	currentSlide: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the orientation of the controls in a Linear Layout */
	orientation: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the vertical alignment of the controls in a Linear Layout */
	verticalAlignment: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/**
	 * SetChildMargins
	 * @param left `Left margin.`
	 * @param top `Top margin.`
	 * @param right `Right margin.`
	 * @param bottom `Bottom margin.`
	 * @param mode `px`. Default is a fraction of viewport.
	 */
	setChildMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/** Show */
	show(): void;

	/**
	 * Goto
	 * @param index `Index of a given layout.`
	 */
	goto(index: num): void;

	/** GetCurrentSlide */
	getCurrentSlide(): num;

	/** Next */
	next(): void;

	/** Previous */
	previous(): void;

	/**
	 * GetChildOrder
	 * @param child The child component of the layout.
	 */
	getChildOrder(child: obj): num;

	/**
	 * ChildToFront
	 * @param child The child object of the layout.
	 */
	childToFront(child: obj): void;

	/**
	 * HasChild
	 * @param child The child component to check.
	 */
	hasChild(child: obj): bin;

	/**
	 * RemoveChild
	 * @param child The child component to be remove.
	 */
	removeChild(child: obj): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UILayout, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UILayout, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIList {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** Sets or returns the size of the avatar */
	avatarSize: str;

	/** Sets or returns the variant of the avatar */
	avatarVariant: str;

	/** Sets or returns the background color in a hexadecimal format */
	backColor: str;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color of the checkbox when <col nobox #fb8c00>Selectable</col> option is enabled */
	checkboxColor: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the depth of the list container */
	elevation: num;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the icon color in a hexadecimal format */
	iconColor: str;

	/** Sets or returns the size of the icon text */
	iconSize: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Sets or returns the padding of each list item */
	itemPadding: lst;

	/** Sets or returns the label text */
	label: str;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns whether the container is outlined or elevated */
	outlined: bin;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns a boolean whether the list is selectable or not */
	selectable: bin;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the color of the title text in hexadecimal format */
	textColor1: str;

	/** Sets or returns the color of the body text in hexadecimal format */
	textColor2: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the size of the title text */
	textSize1: num;

	/** Sets or returns the size of the body text */
	textSize2: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/**
	 * AddItem
	 * @param title `The title of the item.`
	 * @param body `The text description of the item.`
	 * @param image `A material icon or image file path.`
	 * @param index `The index in which to add or insert the item.`
	 */
	addItem(title: str, body?: str, image?: str, index?: num): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIList, title: str, body: str, icon: str, index: num, event: obj) => void): void;

	/** SetOnSelect */
	setOnSelect(callback: (this: UIList, title: str, index: num) => void): void;

	/** SetOnAction */
	setOnAction(callback: (this: UIList, icon: str, index: num) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIList, title: str, body: str, icon: str, index: num, event: obj) => void): void;

	/** GetSelectedItems */
	getSelectedItems(): lst_num;

	/** GetSelectedTitles */
	getSelectedTitles(): str[];

	/**
	 * SetList
	 * @param list A comma separated list of items or an array. See the list format above.
	 */
	setList(list: lst): void;

	/**
	 * SetSelectable
	 * @param selectable `If true`, ` make the list selectable. Otherwise`, ` list is not selectable`
	 */
	setSelectable(selectable: bin): void;

	/**
	 * SetItemByIndex
	 * @param index `The index of the item to update`
	 * @param newTitle `The new title of the item`
	 * @param newBody `The new body text`
	 * @param newImage `The new icon or image`
	 */
	setItemByIndex(index: num, newTitle: str, newBody?: str, newImage?: str): void;

	/**
	 * GetItemByIndex
	 * @param index `Returns the item in a list as an object of the following format { title`, ` body`, ` image }`
	 * @return \{ title, body, image }
	 */
	getItemByIndex(index: num): { title: str, body: str, image: str };

	/**
	 * SetItem
	 * @param title `The title of the list item to update.`
	 * @param newTitle `The new title of the list item.`
	 * @param newBody `The new description of the list item.`
	 * @param newImage `A material icon font or image file path.`
	 */
	setItem(title: str, newTitle: str, newBody?: str, newImage?: str): void;

	/**
	 * GetItem
	 * @param title `Returns the item in a list as an object of the following format { title`, ` body`, ` image }`
	 * @return \{ title, body, image }
	 */
	getItem(title: str): { title: str, body: str, image: str };

	/**
	 * RemoveItemByIndex
	 * @param index `The index of the item to remove`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name `The title of the list to remove.`
	 */
	removeItemByName(name: str): void;

	/** ShiftItem */
	shiftItem(): void;

	/** PopItem */
	popItem(): void;

	/** DeselectAll */
	deselectAll(): void;

	/**
	 * SelectItemByIndex
	 * @param index `The index to be selected.`
	 */
	selectItemByIndex(index: num): void;

	/**
	 * SetTitleText
	 * @param index `The index of the corresponding list item.`
	 * @param title `The new title text.`
	 */
	setTitleText(index: num, title: str): void;

	/**
	 * SetBodyText
	 * @param index `The index of the list whose secondary text to be changed.`
	 * @param newText `The new secondary text.`
	 */
	setBodyText(index: num, newText: str): void;

	/**
	 * SetIcon
	 * @param index `The index of the corresponding list item.`
	 * @param icon `Material icon font.`
	 */
	setIcon(index: num, icon: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIMenu {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Sets or returns the padding of each menu item */
	itemPadding: lst;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the items in the menu */
	list: lst;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIMenu, item: str, icon: str, index: num) => void): void;

	/**
	 * Show
	 * @param parent The component where to anchor the menu. It can be a `Button` or an `Image`.
	 */
	show(parent: obj): void;

	/** Hide */
	hide(): void;

	/**
	 * SetList
	 * @param list The list items to show.
	 */
	setList(list: lst): void;

	/**
	 * AddItem
	 * @param name `The new item to be added.`
	 * @param index `The index at which to add the item.`
	 */
	addItem(name: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index `The index of the item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name `The name of the item to remove.`
	 */
	removeItemByName(name: str): void;

	/** PopItem */
	popItem(): void;

	/** ShiftItem */
	shiftItem(): void;

	/**
	 * SetPosition
	 * @param left `The position of the menu from the left of the parent or anchor component. The unit is in pixels.`
	 * @param top `The position of the menu from the top of the parent or anchor component. The unit is in pixels.`
	 */
	setPosition(left: num, top: num): void;

	/**
	 * SetAutoFocus
	 * @param bool Value can be `true` or `false`
	 */
	setAutoFocus(bool: bin): void;

	/**
	 * SetEnabled
	 * @param index `The index of the item.`
	 * @param value Values can be `true` or `false`. `false` to disable.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index `The index of the item.`
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name `The name of the corresping item the menu.`
	 * @param value Values can be `true` or `false`. `false` to disable an item.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name `The name of the item.`
	 */
	getEnabledByName(name: str): bin;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIMenu, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIProgress {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the size of the circular progress control */
	circleSize: num;

	/** Sets or returns the theme color */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the thickness of the circular stroke */
	thickness: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Sets or returns the type of the Progress Component */
	type: str;

	/** Sets or returns the value of the progress control */
	value: num;

	/** Sets or returns the variant of the progress component */
	variant: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIProgress, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIProgress, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIRadioGroup {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color of the Radio Component */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the disabled state of the radio button group */
	disabled: bin;

	/** Sets or returns the depth of the RadioGroup container */
	elevation: num;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the icon color in hexadecimal format */
	iconColor: str;

	/** Sets or returns the position of the icon */
	iconPosition: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Sets or returns the padding of each radio item */
	itemPadding: lst;

	/** Sets or returns the label text of the RadioGroup Component */
	label: str;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the list array */
	list: lst;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns whether the container is outlined or elevated */
	outlined: bin;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the size of the radio button */
	radioSize: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets the label of the RadioGroup */
	setLabel(label: str): void;

	/** Sets or returns the space between the radio button and the text */
	spaceBetween: num;

	/** Stest or returns the color of the text in hexadecimal format */
	textColor: str;

	/** Sets or returns the position of the label text */
	textPosition: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the value of the RadioGroup Component */
	value: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnChange */
	setOnChange(callback: (this: UIRadioGroup, index: num) => void): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIRadioGroup, checked: bin, label: str, index: num, event: obj) => void): void;

	/**
	 * SetList
	 * @param val `A comma separated items`
	 */
	setList(val: str): void;

	/**
	 * SetItemByIndex
	 * @param item `The new item name to be displayed`
	 * @param index `The index to of the item to be updated`
	 */
	setItemByIndex(item: str, index: num): void;

	/**
	 * SetItemByName
	 * @param name `The name of the item.`
	 * @param text `The new text to replaced the name of the item.`
	 */
	setItemByName(name: str, text: str): void;

	/**
	 * AddItem
	 * @param name `The new item to be added.`
	 * @param index `The index in which to add the item.`
	 */
	addItem(name: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index `The index of the item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name `The name of the item to remove.`
	 */
	removeItemByName(name: str): void;

	/** PopItem */
	popItem(): void;

	/** ShiftItem */
	shiftItem(): void;

	/**
	 * SetEnabled
	 * @param index `The index of the item.`
	 * @param value Values can be `true` or `false`. If `false`,  the item will be disabled.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index `The index of the corresponding item.`
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name `The radiogroup text.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name `The radiogroup text.`
	 */
	getEnabledByName(name: str): bin;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIRadioGroup, label: str, index: num, event: obj) => void): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UISelect {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns a boolean value whether the component is enabled or disabled */
	enabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the color of the icon in hexadecimal format <col nobox #fb8c00>#rrggbb</col> */
	iconColor: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Sets or returns the label text */
	label: str;

	/** Sets or returns the color of the label text in hexadecimal format <col nobox #fb8c00>#rrggbb</col> */
	labelColor: str;

	/** Sets or returns the size of the label */
	labelSize: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the list items */
	list: lst;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the maximum height of the popup container */
	maxHeight: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/** Sets or returns the color of the popup in hexadecimal format */
	popupColor: str;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the size variant of the Select Component */
	sizeVariant: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the value of the Select Component */
	value: str;

	/** Sets or returns the variant of the Select Component */
	variant: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnChange */
	setOnChange(callback: (this: UISelect, value: str) => void): void;

	/** SetOnOpen */
	setOnOpen(callback: (this: UISelect) => void): void;

	/** SetOnClose */
	setOnClose(callback: (this: UISelect, value: str) => void): void;

	/**
	 * AddItem
	 * @param item `A new item to be added.`
	 * @param index `The index in which to add the item.`
	 */
	addItem(item: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name `The name of the item to remove.`
	 */
	removeItemByName(name: str): void;

	/** ShifItem */
	shifItem(): void;

	/** PopItem */
	popItem(): void;

	/**
	 * GetItem
	 * @param index `The index of the item.`
	 */
	getItem(index: num): num;

	/**
	 * SetList
	 * @param items A comma separated string or array of options
	 */
	setList(items: obj): void;

	/**
	 * SetEnabled
	 * @param index `true` or `false`. You can also pass a `Boolean` to enable or disable the Select component.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index `The index of the corresponding item in the select menu.`
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name `The name of the menu item.`
	 * @param value Value can be `true` or `false`
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name `The name of the menu item.`
	 */
	getEnabledByName(name: str): bin;

	/** SetOnTouch */
	setOnTouch(callback: (this: UISelect, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UISelect, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UISlider {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color of the Slider */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the marks on the Slider Component */
	marks: bin;

	/** Sets or returns the maximum value */
	maxValue: num;

	/** Sets or returns the minimum value */
	minValue: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the orientation of the Slider Component */
	orientation: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the Sider Component steps */
	step: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Sets or returns the track properties of the Slider Component */
	track: str;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the value of the Slider Component */
	value: num;

	/** Sets or returns the value label display type */
	valueLabelDisplay: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnChange */
	setOnChange(callback: (this: UISlider, value: num) => void): void;

	/** SetOnSelect */
	setOnSelect(callback: (this: UISlider, value: num) => void): void;

	/**
	 * SetRange
	 * @param min `Minimum value of the slider.`
	 * @param max `Maximum value of the slider.`
	 */
	setRange(min?: num, max?: num): void;

	/**
	 * SetMarks
	 * @param val The marks on the Slider Component.
	 */
	setMarks(val: obj): void;

	/** GetMarks */
	getMarks(): bin;

	/** SetOnTouch */
	setOnTouch(callback: (this: UISlider, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UISlider, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIStepper {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** Sets or returns the active step */
	activeStep: num;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the elevation of the mobile stepper */
	elevation: num;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the orientation of the Stepper */
	orientation: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnComplete */
	setOnComplete(callback: (this: UIStepper) => void): void;

	/** SetOnChange */
	setOnChange(callback: (this: UIStepper, index: num) => void): void;

	/** NextStep */
	nextStep(): void;

	/** PreviousStep */
	previousStep(): void;

	/**
	 * GetLayout
	 * @param index `The index of the corresponing stepper layout`
	 */
	getLayout(index: num): UILayout;

	/**
	 * GetLayoutIndex
	 * @param layout The layout to check.
	 */
	getLayoutIndex(layout: obj): num;

	/**
	 * RemoveStep
	 * @param index `The index of the step to remove.`
	 */
	removeStep(index: num): void;

	/**
	 * SetTitleText
	 * @param index `The index of the Stepper.`
	 * @param title `The new title text.`
	 */
	setTitleText(index: num, title: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIStepper, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIStepper, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UISwitch {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the disabled state of the ripple effect */
	disableRipple: bin;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the edge position of the toggle */
	edge: str;

	/** Sets or returns a Boolean whether the component is enabled or disabled */
	enable: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the icon position */
	iconPosition: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns a boolean value whether this component is required or not */
	required: bin;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the size variant of the toggle switch */
	sizeVariant: str;

	/** Sets or returns the space between the switch icon and the label text */
	spaceBetween: num;

	/** Sets or returns the label text */
	text: str;

	/** Sets or returns the text color in hexadecimal format */
	textColor: str_col;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the value of the switch toggle */
	value: bin;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnTouch */
	setOnTouch(callback: (this: UISwitch, check: bin) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UISwitch, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UISwitchGroup {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the edge position of the toggle */
	edge: str;

	/** Sets or returns the depth of the control container */
	elevation: num;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the theme color <col nobox #fb8c00>Primary</col> <col nobox #fb8c00>Secondary</col> or <col nobox #fb8c00>Default</col> */
	iconColor: str;

	/** Sets or returns the size of the icon */
	iconSize: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Sets or returns the padding of each switch item */
	itemPadding: lst;

	/** Sets or returns the label text */
	label: str;

	/** Sets or returns the color of the label text in hexadecimal format */
	labelColor: str;

	/** Sets or returns the size of the label text */
	labelSize: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the list items */
	list: lst;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns whether the container is outlined or elevated */
	outlined: bin;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the theme color <col nobox #fb8c00>primary</col> or <col nobox #fb8c00>secondary</col> */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetLabel */
	setLabel(label: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UISwitchGroup, value: bin, text: str, index: num, event: obj) => void): void;

	/** SetOnChange */
	setOnChange(callback: (this: UISwitchGroup, values: lst) => void): void;

	/**
	 * SetValueByIndex
	 * @param index `The index of the corresponding item.`
	 * @param val A Values can be `true` or `false`
	 */
	setValueByIndex(index: num, val: bin): void;

	/**
	 * GetValueByIndex
	 * @param index `The index of the corresponding item.`
	 */
	getValueByIndex(index: num): bin;

	/**
	 * SetList
	 * @param lst The list array or a comma separated list.
	 */
	setList(lst: obj): void;

	/**
	 * AddItem
	 * @param title `The title text.`
	 * @param icon `Material icon font.`
	 * @param value `The value of the item.`
	 * @param index `The index in which to insert the item. Default is at the bottom of the list.`
	 */
	addItem(title: str, icon: str, value: bin, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param title `The title text of the SwitchGroup item.`
	 */
	removeItemByName(title: str): void;

	/** PopItem */
	popItem(): void;

	/** ShiftItem */
	shiftItem(): void;

	/**
	 * SetEnabled
	 * @param index The index of the corresponding item in the list. You can also pass `Boolean` to enable or disable the switchgroup component.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index `The index of the corresponding item in the switch group.`
	 */
	getEnabled(index: num): bin;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UISwitchGroup, text: str, index: num, event: obj) => void): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UITabs {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns a boolean value whether the tabs are centered or not */
	centered: bin;

	/** Sets or returns the theme color of the tab bar */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the elevation of the tab bar */
	elevation: num;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the color ofthe tab icon */
	iconColor: str;

	/** Sets or returns the tab icon */
	iconSize: num;

	/** Sets or returns the color of the indicator bar */
	indicatorColor: str;

	/** Sets or returns the corner radius of the indicator bar in pixels */
	indicatorRadius: num;

	/** Sets or returns the thickness of the indicator bar in pixels */
	indicatorThickness: num;

	/** Sets or returns the width of the indicator bar as a fraction of the tab item width */
	indicatorWidth: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the scroll button mode when tab items overflow the width of its container */
	scrollButtonMode: str;

	/** Sets or returns the height of the tab in pixels */
	tabHeight: num;

	/** Sets or returns the padding of the tab items */
	tabPadding: num;

	/** Sets or returns the theme color for the tab bar titles <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col> */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the variant of the Tabs Component */
	variant: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnChange */
	setOnChange(callback: (this: UITabs, name: str, index: num) => void): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UITabs, name: str, index: num) => void): void;

	/**
	 * SetTabs
	 * @param tabs The tab titles array. See examples for format.
	 */
	setTabs(tabs: lst): void;

	/**
	 * AddTab
	 * @param name `The name of the tab.`
	 * @param icon `Material icon font.`
	 * @param index `The index in which to insert the tab.`
	 */
	addTab(name: str, icon: str, index: num): void;

	/**
	 * SetTitleText
	 * @param index `Index of the tab.`
	 * @param title `The new title.`
	 */
	setTitleText(index: num, title: str): void;

	/**
	 * SetIcon
	 * @param index `The index of the tab.`
	 * @param icon `Material icon font.`
	 */
	setIcon(index: num, icon: str): void;

	/**
	 * RemoveTabByIndex
	 * @param index `The index of the corresponding tab to remove.`
	 */
	removeTabByIndex(index: num): void;

	/**
	 * RemoveTabByName
	 * @param name `The name of the corresponding tab to remove.`
	 */
	removeTabByName(name: str): void;

	/**
	 * GetLayout
	 * @param name `The name of the tab. You can also pass the index of the tab.`
	 */
	getLayout(name: str): UILayout;

	/**
	 * ShowTab
	 * @param name `The name of the tab to be shown.`
	 */
	showTab(name: str): void;

	/**
	 * ShowTabByIndex
	 * @param index `The index of the tab to be shown.`
	 */
	showTabByIndex(index: num): void;

	/**
	 * SetEnabled
	 * @param index The index of the corresponding tab. Pass `Boolean` if you want to disable the entire Tabs component.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index `The index of the corresponding tab.`
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name `The name of the tab.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name `The name of the tab.`
	 */
	getEnabledByName(name: str): bin;

	/**
	 * ShowScrollButton
	 * @param mode Values can be 
 `auto` : will only present them when not all the items are visible 
 `desktop` : will only present them on medium and larger viewports 
 `on` : will always present them 
 `off` : will never present them.
	 */
	showScrollButton(mode: str): void;

	/**
	 * GetLayoutIndex
	 * @param layout The layout to check.
	 */
	getLayoutIndex(layout: obj): num;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UITabs, text: str, index: num, event: obj) => void): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * SetIndicatorStyle
	 * @param width Fraction of the tab item width. This works only on `fullWidth` tab.
	 * @param thickness `Thickness in pixels.`
	 * @param color Hexadecimal color of the form `#rrggbb`.
	 * @param radius `The corner radius in pixels.`
	 */
	setIndicatorStyle(width: num, thickness: num, color: str, radius: num): void;

	/**
	 * SetTabPadding
	 * @param left `The tab-item left padding.`
	 * @param top `The tab-item top padding.`
	 * @param right `The tab-item right padding.`
	 * @param bottom `The tab-item bottom padding.`
	 * @param mode Unit of measurement. You can pass `%` `rem` `vw`.
	 */
	setTabPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIText {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** Sets or returns the horizontal alignment of the text */
	alignment: str;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns whether the text is <col nobox #fb8c00>bold</col> or not */
	bold: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color of the text <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col> */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the ellipsis use when the text is truncated */
	ellipsize: str;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Sets or returns whether the text is <col nobox #fb8c00>italized</col> or not */
	italic: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the text */
	text: str;

	/** Sets or returns the text color in hexadecimal format */
	textColor: str_col;

	/** Sets or returns the fontsize for the text */
	textSize: num;

	/** Sets or returns the style of the text */
	textStyle: str;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns whether the text is <col nobox #fb8c00>underlined</col> or not */
	underline: bin;

	/** Sets or returns the text variants */
	variant: str;

	/** Sets or returns the vertical alignment of the text */
	verticalAlignment: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/**
	 * SetHtml
	 * @param html `An html string`
	 */
	setHtml(html: str): void;

	/** GetHtml */
	getHtml(): str;

	/**
	 * SetTextShadow
	 * @param radius `The radius in pixels`
	 * @param dx `X-offset of the shadow`
	 * @param dy `Y-offset of the shadow`
	 * @param color A hexadecimal color e.g. `#aarrggbb`
	 */
	setTextShadow(radius: num, dx: num, dy: num, color: obj): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIText, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIText, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UITextField {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** Sets or returns a boolean value whethe the input is focus when rendered into the DOM */
	autoFocus: bin;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the theme color of the textfield component */
	color: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Returns the end adornment text or icon */
	endAdornment: str;

	/** Sets or returns the error state of the TextField component */
	error: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the helper text or the hint below the input */
	helperText: str;

	/** Sets or returns the hint text */
	hint: str;

	/** Sets or returns the input type */
	inputType: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Sets or returns the label text */
	label: str;

	/** Sets return the label color in hexadecimal format <col nobox #fb8c00>#rrggbb</col> */
	labelColor: str;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the maximum rows for a <col nobox #fb8c00>multiline</col> textfield */
	maxRows: num;

	/** Sets or returns the minimum rows for a <col nobox #fb8c00>multiline</col> textfield */
	minRows: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the outline color in hexadecimal form <col nobox #fb8c00>#rrggbb</col> when the textfield is focus */
	outlineColor: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/** Sets or returns the placeholder text */
	placeholder: str;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns a boolean value whether the text field in required or not */
	required: bin;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the size variant of the textfield */
	sizeVariant: str;

	/** Returns the start adornment text or icon */
	startAdornment: str;

	/** Sets or returns the step increment if the input is of type number; */
	stepIncrement: num;

	/** Sets or returns the text value of the TextField Component */
	text: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the variant of the TextField */
	variant: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnEnter */
	setOnEnter(callback: (this: UITextField, text: str) => void): void;

	/** SetOnChange */
	setOnChange(callback: (this: UITextField, text: str) => void): void;

	/** SetOnFocus */
	setOnFocus(callback: (this: UITextField, focus: bin) => void): void;

	/**
	 * SetRows
	 * @param min `The minimum number of rows.`
	 * @param max `The maximum number of rows.`
	 */
	setRows(min?: num, max?: num): void;

	/**
	 * SetStartAdornment
	 * @param text `Text or material icon font.`
	 * @param type A comma separated options for start adornment control. Options can be 
 `Icon` : If the adornment is an icon. 
 `Touchable` : If the adornment is touchable.
	 */
	setStartAdornment(text: str, type?: str): void;

	/** SetStartAdornmentOnTouch */
	setStartAdornmentOnTouch(callback: (this: UITextField) => void): void;

	/** GetStartAdornment */
	getStartAdornment(): str;

	/**
	 * SetEndAdornment
	 * @param text `Text or material icon font.`
	 * @param type A comma separated options for end adornment control. Options can be 
 `Icon` : If the adornment is an icon. 
 `Touchable` : If the adornment is touchable.
	 */
	setEndAdornment(text: str, type?: str): void;

	/** SetEndAdornmentOnTouch */
	setEndAdornmentOnTouch(callback: (this: UITextField) => void): void;

	/** GetEndAdornment */
	getEndAdornment(): str;

	/** SetOnTouch */
	setOnTouch(callback: (this: UITextField, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UITextField, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UITimePicker {

	/** Sets or returns the time format */
	format: str;

	/**
	 * Show
	 * @param format A time format. Can be of the form 
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
	 */
	show(callback: (this: UITimePicker, value: str) => void, format: str): bin;
}


declare class UITreeView {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the list object */
	list: obj;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Returns the selected item of the TreeView */
	value: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** SetOnTouch */
	setOnTouch(callback: (this: UITreeView, value: str, path: str) => void): void;

	/**
	 * SetList
	 * @param obj The list object of the treeview items. See example above.
	 */
	setList(obj: obj): void;

	/**
	 * AddItem
	 * @param name `The label text for the new item.`
	 * @param obj See list object for more info.
	 */
	addItem(name: str, obj: obj): void;

	/**
	 * GetItem
	 * @param name `The parent name of the tree items.`
	 */
	getItem(name: str): obj;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UITreeView, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIWebView {

	/** Returns the absolute height of the control in pixels */
	absHeight: num_pxl;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num_pxl;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num_pxl;

	/** Returns the absolute width of the control in pixels */
	absWidth: num_pxl;

	/** A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col> */
	backColor: str_col;

	/** The path to your image file */
	backImage: str_pth;

	/** Sets or returns the list of blocked urls */
	blockUrls: lst;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str_col;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the <col nobox #fb8c00>disabled</col> state of the control */
	disabled: bin;

	/** A reference to the webview`s window document object */
	document: obj;

	/** Load the current url */
	loadUrl(url: str_url): void;

	/** Sets or returns the redirect url when an error occur */
	errorPage: str;

	/** Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use */
	fontFile: str;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Setst or returns the html loaded in the iframe */
	html: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the left */
	left: num;

	/** Sets or returns the margin of the control */
	margins: num|lst_num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the <col nobox #fb8c00>options</col> of the control */
	options: str;

	/** Sets or returns the padding of the control */
	padding: num|lst_num;

	/** Returns the parent layout control */
	parent: UILayout;

	/**
	 * Returns the position of the control
	 * @return \{ left, top, right, bottom }
	 */
	position: { left: num, top: num, right: num, bottom: num };

	/** Sets or returns the angle of rotation in degrees */
	rotation: num_deg;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the text zoom of the page loaded in the web view */
	textZoom: num;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the url of the webview */
	url: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** A reference to the webview`s window object */
	window: obj;

	/** SetOnLoad */
	setOnLoad(callback: (this: UIWebView) => void): void;

	/** SetOnTouch */
	setOnTouch(callback: (this: UIWebView, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (this: UIWebView, event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values 
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
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration?: num): void;

	/**
	 * SetSize
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 */
	setSize(width: num, height: num): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** Gone */
	gone(): void;

	/** Destroy */
	destroy(): void;

	/**
	 * SetScale
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * GetPosition
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options?: str): obj;

	/**
	 * SetMargins
	 * @param left `Fraction of the parent width.`
	 * @param top `Fraction of the parent height.`
	 * @param right `Fraction of the parent width.`
	 * @param bottom `Fraction of the parent height.`
	 * @param mode `px` or `%`
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPadding
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * SetPosition
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the screen height. [0-1]`
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left?: num, top?: num, mode?: str): void;

	/**
	 * SetBorder
	 * @param width `Border-left thickness in pixels.`
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`.
	 */
	setBorder(width?: num, clr?: str, style?: str): void;

	/**
	 * SetCornerRadius
	 * @param tl `Top-Left border radius in pixels.`
	 * @param tr `Top-Right border radius in pixels.`
	 * @param bl `Bottom-Left border radius in pixels.`
	 * @param br `Bottom-Right border radius in pixels.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * BringForward
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * SendBackward
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIColorPicker {

	/** Returns the value of the chosen color */
	value: str;

	/** GetValue */
	getValue(): str;
}


declare class UIDateTimePicker {

	/** SetOnSelect */
	setOnSelect(callback: (this: UIDateTimePicker, value: str) => void): void;
}


declare class UIPopover {

	/** Sets or returns the path to the background image */
	backImage: str;

	/** Sets or returns the font file use for the Popover */
	fontFile: str;
}


declare class UIPopup {

	/** Sets or returns the duration of the popup in milliseconds */
	duration: num;

	/** Sets or returns the text of the popup */
	text: str;

	/** SetOnClose */
	setOnClose(callback: (this: UIPopup) => void): void;

	/** SetOnAction */
	setOnAction(callback: (this: UIPopup) => void): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/**
	 * SetPosition
	 * @param vertical Vertical alignment. Values can be `Top` `Bottom`
	 * @param horizontal Horizontal alignment. Values can be `Left` `Center` and `Right`
	 */
	setPosition(vertical?: str, horizontal?: str): void;

	/** GetPosition */
	getPosition(): obj;
}


declare class UIProgressDialog {

	/** Text */
	text(): str;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** SetOnClose */
	setOnClose(callback: (this: UIProgressDialog) => void): void;
}


declare class UItheme {

	/** True if dark theme is selected, otherwise false (light theme) */
	dark: bin;

	/** Primary theme color */
	primary: str_col;

	/** Secondary theme color */
	secondary: str_col;
}


