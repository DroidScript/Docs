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


class UI {

	/**
	 * AddAccordion
	 * @param parent The parent layout where to add the text.
	 * @param titles An array of accordion titles.
	 * @param options one or a combination of the following: `Square` \n `Layout type `Linear` or `Absolute`
	 * @param width Fraction of the screen width: [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return Accordion Component
	 */
	addAccordion(parent: obj, titles: obj, options: str_com, width: num, height: num): obj;

	/**
	 * AddAppBar
	 * @param parent The parent layout where to add the AppBar
	 * @param title The title text of the appbar
	 * @param options one or a combination of the following: \n `Menu` : Adds a menu icon on the left \n `Primary` `Secondary` `Transparent` `Inherit` `Default` : Adds a color \n `Absolute` `Static` `Fixed` `Relative` : Adds a positioning
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return AppBar Component
	 */
	addAppBar(parent: obj, title: str, options: str_com, width: num, height: num): obj;

	/**
	 * AddBottomNavbar
	 * @param parent The parent layout where to add the BottomNavbar
	 * @param navs An array whose elements are of the form `[ "Title", "Icon" ]`
	 * @param options one or a combination of the following: `Hidelabels`
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return BottomNavbar Component
	 */
	addBottomNavbar(parent: obj, navs: lst, options: str_com, width: num, height: num): obj;

	/**
	 * AddButton
	 * @param parent The layout where to add the button.
	 * @param text The button text or the material icon text.
	 * @param options one or a combination of the following: \n Variant: `Contained` `Outlined` `Text` `Default` \n `Color`: `Primary` `Secondary` `Default` \n `Size`: `Small` `Medium` `Large` \n `Util`: `Icon` `NoRipple` `Upload` \n `In case of upload, you can specify `Multiple` to accept multiple files.
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
	 * @return Button Component
	 */
	addButton(parent: obj, text: str, options: str_com, width: num, height: num): obj;

	/**
	 * AddButtonGroup
	 * @param parent The parent layout where to add the ButtonGroup
	 * @param list The item to be displayed on the buttn group.
	 * @param options one or a combination of the following: \n Variant: `Contained` `Outlined` `Text` `Default` \n `Color`: `Primary` `Secondary` `Default` \n `Size`: `Small` `Medium` `Large` \n `Orientation`: `Horizontal` `Vertical` \n `Util`: `Icon` `NoElevation`
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
	 * @return ButtonGroup Component
	 */
	addButtonGroup(parent: obj, list: lst, options: str_com, width: num, height: num): obj;

	/**
	 * AddCheckbox
	 * @param parent The layout where to add the checkbox
	 * @param text The label for the checkbox
	 * @param options Colors: `Primary` `Secondary` `Medium` `Small` \n `Position`: `Left` `Top` `Right` `Bottom` \n `Variant`: `Indeterminate` `Determinate`
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
	 * @return Checkbox Component
	 */
	addCheckbox(parent: obj, text: str, options: str_com, width: num, height: num): obj;

	/**
	 * AddCheckboxGroup
	 * @param parent The parent layout where to add the CheckboxGroup.
	 * @param list The items to be displayed.
	 * @param options Colors: `Default` `Primary` `Secondary` \n `Sizes`: `Small` `Medium` \n `Icon Position: `Left` or `Right` \n `Container`: `Elevated` or `Outlined` \n `Corners : `Square`
	 * @param width Fraction of the screen width.
	 * @param height Fraction of the screen height.
	 * @return CheckboxGroup Component
	 */
	addCheckboxGroup(parent: obj, list: lst, options: str_com, width: num, height: num): obj;

	/**
	 * AddChip
	 * @param parent The parent layout where to add the Chip.
	 * @param text The text on the chip.
	 * @param options Color: `Primary` `Secondary` `Default` \n `Size`: `Small` `Medium` \n `Variant`: `Outlined` `Default` \n `Util`: `Touchable`
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return Chip Component
	 */
	addChip(parent: obj, text: str, options: str_com, width: num, height: num): obj;

	/**
	 * AddDatePicker
	 * @param date A default date value to which the datepicker begins. Format `YYYY-MM-DD`
	 * @param options `Portrait` `Landscape`
	 * @return DatePicker Component
	 */
	addDatePicker(date: str, options: str_com): obj;

	/**
	 * AddDialog
	 * @param title The dialog title text.
	 * @param body The dialog message to be shown.
	 * @param actions A comma separated text for action buttons.
	 * @param options Colors: `Primary` `Secondary` \n `Util`: `NoCancel` prevents the dialog from closing on action.
	 * @return Dialog Component
	 */
	addDialog(title: str, body: str, actions: str, options: str_com): obj;

	/**
	 * AddDivider
	 * @param parent The layour where to add the divider.
	 * @param width Fraction of the screen width. Default is 1.
	 * @param options A comma separated Divider options. Values can be `Inset`
	 * @return Divider Component
	 */
	addDivider(parent: obj, width: num, options: str): obj;

	/**
	 * AddDrawer
	 * @param lay The drawer layout.
	 * @return Drawer Component
	 */
	addDrawer(lay: obj, options: str_com): obj;

	/**
	 * AddDropdown
	 * @param parent The layout where to add the dropdown.
	 * @param list The list items to show.
	 * @param options A comma separated Dropdown options. Can be \n Colors: `Primary` `Secondary` `Default` \n `Variants`: `Contained` `Outlined` `Text` \n `Sizes`: `Small` `Medium` `Large` \n `Orientation`: `Horizontal` `Vertical` \n `Util`: `NoElevation`
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return Dropdown Component.
	 */
	addDropdown(parent: obj, list: lst, options: str, width: num, height: num): obj;

	/**
	 * AddFAB
	 * @param parent The parent layout where to add the fab
	 * @param icon The string icon of the FAB
	 * @param options `Fixed` `Static` `Rounded` `Extended` `Left` `Right`
	 * @param text Text to show for extended FABs.
	 * @return FAB Component
	 */
	addFAB(parent: obj, icon: str, options: str_com, text: str): obj;

	/**
	 * AddImage
	 * @param parent The parent layout where to add the image.
	 * @param file The path to the image.
	 * @param options A comma seprated options for the image. Can be `Canvas` `Button` or `Avatar`
	 * @param width Fraction of the screen width.
	 * @param height Fraction of the screen height.
	 * @return Image Component.
	 */
	addImage(parent: obj, file: str, options: str, width: num, height: num): obj;

	/**
	 * AddLayout
	 * @param parent The parent layout where to add this component. Pass a string `main` for the main layout of your app.
	 * @param type The layout type. Values can be `Linear` `Absolute` `Frame` `Slide`
	 * @param options Layout options. Values can be \n Orientation:  `Horizontal` `Vertical` \n `Horizontal Alignment: `Left` `Center` `Right` \n `Vertical Alignment: `Top` `VCenter` `Bottom` \n `Dimensions`: `FillX` `FillY` \n `Scroll`: `ScrollX` `ScrollY` `ScrollXY` `NoScrollBar` \n `Utils`: `BackColor` to apply light or dark background rather than transparent.
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return Layout Component
	 */
	addLayout(parent: obj, type: str, options: str, width: num, height: obj): obj;

	/**
	 * AddList
	 * @param parent The parent layout
	 * @param list An array of arrays. Each element is of the form `[icon, title, body, secondary]`
	 * @param options Media: `Icon` `Avatar` \n `Styling`: `Dense` `Inset` \n `Util`: `Selectable` `Divider` `SecondaryText`, `NoRipple` to disable ripple effect
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return List Component
	 */
	addList(parent: obj, list: lst, options: str_com, width: num, height: num): obj;

	/**
	 * AddMenu
	 * @param parent The component where to anchor the Menu.
	 * @param list A list of items to be shown in the pop-up menu. You can also pass a comma separated string. For menu with icon the format is `icon&colon;title` \n `Add a `colon` before an item to display it as the label text.
	 * @param options Color: `Primary` `Secondary` `Error` \n List: `Dense` \n Icons: `Icon`
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return Menu Component
	 */
	addMenu(parent: obj, list: lst, options: str_com, width: num, height: num): obj;

	/**
	 * AddProgress
	 * @param parent The parent layout where to add the prgress component.
	 * @param value the initial value of the progress component.
	 * @param options Color: `Primary` `Secondary` \n `Type`: `Circular` `Linear` \n `Variant`: `Determinate` `Indeterminate`
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction fo the screen height. [0-1]
	 * @return Progress Component
	 */
	addProgress(parent: obj, value: num, options: str_com, width: num, height: num): obj;

	/**
	 * AddRadioGroup
	 * @param parent The parent where to add the RadioGroup component.
	 * @param list The list items array.
	 * @param options Radio Sizes: `Small` `Medium` \n `Colors`: `Primary` `Secondary` \n `Icon Position: `Left` or `Right` \n `Container`: `Elevated` or `Outlined` \n `Corner`: `Square` \n `Required`
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return RadioGroup Component
	 */
	addRadioGroup(parent: obj, list: lst, options: str_com, width: num, height: num): obj;

	/**
	 * AddSelect
	 * @param parent The parent layout where to add the control
	 * @param list The list of items for the Select options
	 * @param options Sizes: `Small` `Medium` \n `Variant`: `Filled` `Outlined` `Standard` \n `Margin`: `Dense` `Normal` \n `Utils`: `Required` `Multiple` `Radio` `Disabled` `AutoFocus` `FullWidth`
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return Select Component
	 */
	addSelect(parent: obj, list: lst, options: str_com, width: num, height: num): obj;

	/**
	 * AddSlider
	 * @param parent The layout where to add the Slider Component.
	 * @param value The initial value of the Slider. Value must be between 0-100, the default min and max values.
	 * @param options Color: `Primary` `Secondary` \n `Orienation`: `Horizontal` `Vertical` \n `Track`: `Normal` `Inverted` `False`
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height.
	 * @return Slider Component.
	 */
	addSlider(parent: obj, value: num, options: str_com, width: num, height: num): obj;

	/**
	 * AddStepper
	 * @param parent The parent layout of the Stepper
	 * @param steps An array of titles.
	 * @param options A comma separated Stepper options. Values can be `Vertical` `Horizontal` `Loop` `Mobile` or `AlternativeLabel`.
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return Stepper Component
	 */
	addStepper(parent: obj, steps: lst, options: str, width: num, height: num): obj;

	/**
	 * AddSwitch
	 * @param parent The parent layout where to add the Switch Component.
	 * @param text The label text.
	 * @param options A comma separated switch options. Options can be one or a combination of the following \n Color: `Primary` `Secondary` `Default` \n `Icon Position: `Left` `Top` `Right` `Bottom` \n `Sizes`: `Small` `Medium`
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return Switch Component
	 */
	addSwitch(parent: obj, text: str, options: str, width: num, height: num): obj;

	/**
	 * AddSwitchGroup
	 * @param parent The parent layout where to add the SwitchGroup Component.
	 * @param list The list items array whose elements can be `String` if items is text only, or `Array` of the form `[ "icon", "label" ]` if items is icon and text.
	 * @param options Icon: `Icon` \n `Color`: `Primary` or `Secondary` \n `Container`: `Elevated` or `Outlined` \n `Corner`: `Square` \n`Divider`
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return SwitchGroup Component
	 */
	addSwitchGroup(parent: obj, list: obj, options: str_com, width: num, height: num): obj;

	/**
	 * AddTabs
	 * @param parent The parent layout where to add the Tabs Component.
	 * @param list An array of tab names.
	 * @param options Enable swipe: `Swipeable` \n `Colors`: `Primary` `Secondary` `Inherit` `Transparent` `Default` \n `Variant`: `Standard` `Scrollable` `FullWidth` \n `Layout`: `Linear`, `Absolute` \nUtils: `Icon` `Center` `Paper`
	 * @param width Fraction of the screen width. [0-1]
	 * @param height Fraction of the screen height. [0-1]
	 * @return Tabs Component
	 */
	addTabs(parent: obj, list: lst, options: str_com, width: num, height: num): obj;

	/**
	 * AddText
	 * @param parent The layout control where to add the text control
	 * @param text The text to be displayed on the text control
	 * @param options A comma separated string. Options can be one or a combination of the following: \n Variants: `H1` `H2` `H3` `H4` `H5` `H6` `body1` `body2` `overline` `subtitle1` `subtitle2` `button` `caption`.\nLines: `Singleline` `Multiline`.\nAlignment: `Left` `Center` `Right` `Justify`.\nColor: `Primary` `Secondary` `Error`.\nFormat `Html` `Icon` `Italize` `Monospace` `Bold` `Underline` \n `Utils`: `Touchable`
	 * @param width Fraction of the screen width
	 * @param height Fraction of the screen height
	 * @return Text Component
	 */
	addText(parent: obj, text: str, options: str, width: num, height: num): obj;

	/**
	 * AddTextField
	 * @param parent The layout where to add the TextField Component.
	 * @param text The initial value of the TextField
	 * @param options Color: `Primary` or `Secondary` \n `Sizes`: `Small` or `Medium` \n `Type`: `Text` `Password` `Email` `Search` `Number` `Date` `Time` or `DateTime` \n `Variant`: `Standard` `Filled` or `Outlined` \n `Utils`: `Autofocus`
	 * @param width Fraction of the screen width.
	 * @param height Fraction of the screen height.
	 * @return TextField Component
	 */
	addTextField(parent: obj, text: str, options: str_com, width: num, height: num): obj;

	/**
	 * AddTimePicker
	 * @param time A default time value to which the timepicker begins. Value is of the form `HH:mm`
	 * @param options `Portrait` `24H` `12H`
	 * @return TimePicker Component
	 */
	addTimePicker(time: str, options: str_com): obj;

	/**
	 * AddTreeView
	 * @param parent The parent layout where to add the TreeView component.
	 * @param list An object of the treeview items. See example below.
	 * @param options A comma separated TreeView options.
	 * @param width Fraction of the screen width.
	 * @param height Fraction of the screen height.
	 * @return TreeView Component
	 */
	addTreeView(parent: obj, list: obj, options: str, width: num, height: num): obj;

	/**
	 * AddWebView
	 * @param parent The parent layout where to add the WebView component.
	 * @param url The url of the website.
	 * @param width Fraction of the parent width.
	 * @param height Fraction of the parent height.
	 * @return WebView Component
	 */
	addWebView(parent: obj, url: str, options: str_com, width: num, height: num): obj;

	/**
	 * ShowColorPicker
	 * @param value A hexadecimal default value for the color picker.
	 * @param options A comma separated color picker options. Values can be \n `Alpha` Includes an alpha
	 * @return ColorPicker Component
	 */
	showColorPicker(value: str, options: str): obj;

	/**
	 * ShowDateTimePicker
	 * @param date Default value for date of the form "MM/DD/YYYY"
	 * @param time Default value for time of the form "HH/MM/SS"
	 * @param format The format value that will be pass to callback. Formats can be of the form \n `MM/DD/YYYY HH:MM:SS` `MM:DD:YYYY HH:MM:SS`
	 * @return DateTimePicker Component
	 */
	showDateTimePicker(callback: () => void, date: str, time: str, format: str): obj;

	/**
	 * ShowPopover
	 * @param parent UI component. Can be a `Layout` `Button` `Image` `Text` or any UI component except dialogs.
	 * @param text The text to de displayed. For displaying more data, pass a `Layout`
	 * @param position A comma separated values representing the `anchorOrigin,transformOrigin` \n `anchorOrigin` Position of the popover on its parent. Available values are `tl` for top-left, `tc` for top-center, `tr` `cl` `cc` `cr` `bl` `bc` and `br` for bottom-right. \n `transformOrigin` Origin on the popover itselt. Values are the same as the `anchorOrigin`
	 * @param width Fraction of the screen width.
	 * @param height Fraction of the screen height.
	 * @return Popover Component.
	 */
	showPopover(parent: obj, text: str, position: str, width: num, height: num): obj;

	/**
	 * ShowPopup
	 * @param msg The message to display on the pop-up.
	 * @param options A comma separated Menu options. Values can be \n Duration: `Short` `Long` \n `Vertical Alignment: `Top` `Bottom` \n `Horizontal Alignment: `Left` `Center` `Right` \n `Action options: `Icon` or `HideOnAction` \n `Transition`: `Grow` `Fade` `Slide` `Collapse` `Zoom`
	 * @param duration Time in milliseconds. Pass this, if you don't want the default auto hide duration.
	 * @param action Action button text.
	 * @return Popup Component.
	 */
	showPopup(msg: str, options: str, duration: num, action: str): obj;

	/**
	 * ShowProgressDialog
	 * @param text The text message of the progress dialog. Options can be \n `AutoCancel` to close the dialog when backdrop is click.
	 */
	showProgressDialog(text: str, options: str_com): ProgressDialog;

}

class UIAccordion {

	/**
	 * GetLayout
	 * @param index The index of the accordion. You can also pass accordion title.
	 * @return Layout Component
	 */
	getLayout(index: num): obj;

	/**
	 * SetTitleText
	 * @param index The index of the corresponding title to updates.
	 * @param title The new title text.
	 */
	setTitleText(index: num, title: str): void;

	/**
	 * SetSecondaryText
	 * @param text The secondary text to display. You can pass arguments as string or array by following the format below. \n String: `"Secodary text 1,Secondary text 2,Secondary text 3"` \n `Array`: `[ "Secondary text 1", "Secondary text 2", "Secondary text 3" ]`
	 * @param index If `index` is provided, the corresponding index will be updated with the new text.
	 */
	setSecondaryText(text: obj, index: num): void;

	/**
	 * SetExpandIcon
	 * @param icon A material icon
	 */
	setExpandIcon(icon: str): void;

	/**
	 * AddItem
	 * @param title Accordion title
	 * @param secondaryText Accordion secondary text
	 * @param index The index at which the accordion item will be added. If `null`, the item will be added at the bottom of the accordion.
	 */
	addItem(title: str, secondaryText: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index The index of the corresponding accordion to remove.
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param title The title of the corresponding accordion to remove.
	 */
	removeItemByName(title: str): void;

	/** ShiftItem */
	shiftItem(): void;

	/** PopItem */
	popItem(): void;

	/**
	 * SetEnabled
	 * @param index The index of the corresponding accordion.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index The index of the accordion item.
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name The title of the accordion
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name The title of the accordion.
	 */
	getEnabledByName(name: str): bin;

	/**
	 * GetLayoutIndex
	 * @param layout The layout to check.
	 */
	getLayoutIndex(layout: obj): num;

	/** SetOnTouch */
	setOnTouch(callback: (index: num, expand: bin) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (title: str, index: num, event: obj) => void): void;

	/**
	 * SetTextColor
	 * @param color1 Color of the title text in hexadecimal format `#rrggbb`
	 * @param color2 Color of the secondary text in hexadecimal format `#rrggbb`
	 */
	setTextColor(color1: str, color2: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-left corner radius.
	 * @param tr Top-right corner radius.
	 * @param bl Bottom-left corner radius.
	 * @param br Bottom-right corner radius.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

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


class UIAppBar {

	/** SetOnMenu */
	setOnMenu(callback: () => void): void;

	/**
	 * AddLayout
	 * @param lay The layout where to add controls
	 */
	addLayout(lay: obj): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-left corner radius.
	 * @param tr Top-right corner radius.
	 * @param bl Bottom-left corner radius.
	 * @param br Bottom-right corner radius.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

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


class UIBottomNavbar {

	/** SetOnContextMenu */
	setOnContextMenu(callback: (text: str, index: num, event: obj) => void): void;

	/**
	 * SetList
	 * @param navs The navigation actions array. See `navs` param above for format.
	 */
	setList(navs: lst): void;

	/** GetList */
	getList(): lst;

	/**
	 * SelectItem
	 * @param name The name to be set to active
	 */
	selectItem(name: str): void;

	/**
	 * SelectItemByIndex
	 * @param index The index of the bottom navigation action to be selected
	 */
	selectItemByIndex(index: num): void;

	/** ClearSelection */
	clearSelection(): void;

	/**
	 * SetItemByIndex
	 * @param index The index to update
	 * @param newName The name of the navigation action
	 * @param newIcon Material icon
	 */
	setItemByIndex(index: num, newName: str, newIcon: str): void;

	/**
	 * SetIcon
	 * @param index The index of the navigation action to update
	 * @param newIcon Material icon
	 */
	setIcon(index: num, newIcon: str): void;

	/**
	 * AddItem
	 * @param name The name of the navigation action
	 * @param icon Material icon
	 * @param index The index in which to add the action.
	 */
	addItem(name: str, icon: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index The index of the navigation action to be remove
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name The name of the navigation action to be remove.
	 */
	removeItemByName(name: str): void;

	/** ShiftItem */
	shiftItem(): void;

	/** PopItem */
	popItem(): void;

	/** SetOnChange */
	setOnChange(callback: (text: str, index: num) => void): void;

	/**
	 * SetEnabled
	 * @param index The index of the navigation action.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index The index of the navigation action.
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name The name of the bottom navigation action.
	 * @param value Values can be `true` or `false`
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name The name of the bottom navigation action.
	 */
	getEnabledByName(name: str): bin;

	/** ShowLabels */
	showLabels(): void;

	/** HideLabels */
	hideLabels(): void;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UIButton {

	/** SetOnFileSelect */
	setOnFileSelect(callback: (files: lst) => void): void;

	/**
	 * SetToolTip
	 * @param title The text of the tooltip
	 * @param pos Position of the tooltip. \n Positions : `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTip(title: str, pos: str): void;

	/**
	 * SetTextShadow
	 * @param radius The radius in pixels
	 * @param dx The x-offset in pixels
	 * @param dy The y-offset in pixels
	 * @param color The color in hexadecimal `#rrggbb`
	 */
	setTextShadow(radius: num, dx: num, dy: num, color: str): void;

	/**
	 * SetPadding
	 * @param left The left padding in pixel.
	 * @param top The top padding in pixels,
	 * @param right The right padding in pixels.
	 * @param bottom The bottom padding in pixels.
	 * @param mode `px` `%`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-left corner radius.
	 * @param tr Top-right corner radius.
	 * @param bl Bottom-left corner radius.
	 * @param br Bottom-right corner radius.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

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


class UIButtonGroup {

	/** SetOnTouch */
	setOnTouch(callback: (text: str, index: num, event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (text: str, index: num, event: obj) => void): void;

	/**
	 * SetList
	 * @param items A comma separated list or an array
	 */
	setList(items: str): void;

	/**
	 * SetItemByIndex
	 * @param item The new text
	 * @param index The index of the item.
	 */
	setItemByIndex(item: str, index: num): void;

	/**
	 * AddItem
	 * @param item The additional item.
	 */
	addItem(item: str): void;

	/**
	 * RemoveItemIndex
	 * @param index The index of the item to be remove.
	 */
	removeItemIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name The name of the item to be remove.
	 */
	removeItemByName(name: str): void;

	/** PopItem */
	popItem(): void;

	/** ShiftItem */
	shiftItem(): void;

	/**
	 * SetToolTip
	 * @param titles The titles for each item in the ButtonGroup.
	 * @param pos The positio of the tooltip. \n Can be `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTip(titles: lst, pos: str): void;

	/**
	 * EnableElevation
	 * @param enable `true` or `false`
	 */
	enableElevation(enable: bin): void;

	/**
	 * SetEnabled
	 * @param index The index of the button item.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index The index of the button item in the button group.
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name The button text.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name The button text.
	 */
	getEnabledByName(name: str): bin;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UICheckbox {

	/** SetOnTouch */
	setOnTouch(callback: (check: bin) => void): void;

	/**
	 * SetIcon
	 * @param checked Material icon for checked state
	 * @param unchecked Material icon for unchecked state
	 */
	setIcon(checked: str, unchecked: str): void;

	/** GetIcon */
	getIcon(): obj;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UICheckboxGroup {

	/** SetOnTouch */
	setOnTouch(callback: (value: bin, text: str, index: num, event: obj) => void): void;

	/** SetOnChange */
	setOnChange(callback: (values: lst) => void): void;

	/**
	 * SetIcon
	 * @param checked Material icon font
	 * @param unchecked Material icon font
	 */
	setIcon(checked: str, unchecked: str): void;

	/** GetIcon */
	getIcon(): obj;

	/**
	 * SetCheckedByIndex
	 * @param item The item or index of the item.
	 * @param bool The item value. Can be `true` or `false`.
	 */
	setCheckedByIndex(item: num, bool: bin): void;

	/**
	 * SetCheckedByName
	 * @param name The item or index of the item.
	 * @param bool The item value. Can be `true` or `false`.
	 */
	setCheckedByName(name: str, bool: bin): void;

	/** GetCheckedItems */
	getCheckedItems(): str;

	/**
	 * GetCheckedByIndex
	 * @param index The index of the corresponding item.
	 */
	getCheckedByIndex(index: num): bin;

	/**
	 * GetCheckedByName
	 * @param name The index of the corresponding item.
	 */
	getCheckedByName(name: str): bin;

	/**
	 * SetTextByIndex
	 * @param index The index of the item.
	 * @param val The new text to replace.
	 */
	setTextByIndex(index: num, val: str): void;

	/**
	 * SetTextByName
	 * @param name The name of the item
	 * @param val The new text to replace
	 */
	setTextByName(name: str, val: str): void;

	/**
	 * GetText
	 * @param index The index of the list
	 */
	getText(index: num): str;

	/**
	 * SetList
	 * @param list The new list items for the checkbox group.
	 */
	setList(list: obj): void;

	/**
	 * SetEnabled
	 * @param index The index of the checkbox item.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index The index of the checkbox item.
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name The name of the checkbox item.
	 * @param value Values can be `true` or `false`
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name The checkbox item.
	 */
	getEnabledByName(name: str): bin;

	/**
	 * AddItem
	 * @param text The text label for the checkbox.
	 * @param index The index in which to insert the item.
	 */
	addItem(text: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index The index of the corresponding item to remove.
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param title The title text of the corresponding checkbox item.
	 */
	removeItemByName(title: str): void;

	/** PopItem */
	popItem(): void;

	/** ShiftItem */
	shiftItem(): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (label: str, index: num, event: obj) => void): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-left corner radius.
	 * @param tr Top-right corner radius.
	 * @param bl Bottom-left corner radius.
	 * @param br Bottom-right corner radius.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

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


class UIChip {

	/**
	 * SetTouchable
	 * @param touchable `true` or `false`
	 */
	setTouchable(touchable: bin): void;

	/** SetOnDelete */
	setOnDelete(callback: () => void): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-left corner radius.
	 * @param tr Top-right corner radius.
	 * @param bl Bottom-left corner radius.
	 * @param br Bottom-right corner radius.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

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


class UIDatePicker {

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/**
	 * SetLimits
	 * @param past Date in the past of the form `YYYY-MM-DD`
	 * @param future Date in the future of the form `YYYY-MM-DD`
	 */
	setLimits(past: str, future: str): void;

	/** SetOnSelect */
	setOnSelect(callback: (date: str) => void): void;

	/**
	 * SetFormat
	 * @param format A date format. Can be `YYYY-MM-DD` `MM-DD-YYYY` `DD-MM-YYYY`
	 */
	setFormat(format: str): void;

	/** IsVisible */
	isVisible(): bin;
}


class UIDialog {

	/** SetOnAction */
	setOnAction(callback: (text: str, index: num) => void): void;

	/** SetOnClose */
	setOnClose(callback: () => void): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;
}


class UIDivider {

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UIDrawer {

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
	setOnOpen(callback: () => void): void;

	/** SetOnClose */
	setOnClose(callback: () => void): void;

	/**
	 * Show
	 * @param anchor Open position. Can be `left` or `right`. Default is `left`
	 */
	show(anchor: str): void;

	/** Hide */
	hide(): void;
}


class UIDropdown {

	/** SetOnChange */
	setOnChange(callback: (The: obj, index: num) => void): void;

	/** SetOnClose */
	setOnClose(callback: () => void): void;

	/**
	 * SetList
	 * @param val The list of new items t display.
	 */
	setList(val: lst): void;

	/**
	 * SetItemByIndex
	 * @param item The new item text.
	 * @param index The index of the item to update.
	 */
	setItemByIndex(item: str, index: num): void;

	/**
	 * GetItemByIndex
	 * @param index The index of corresponding item.
	 */
	getItemByIndex(index: num): str;

	/**
	 * SetEnabled
	 * @param index The index of the item.
	 * @param value Values can be `true` `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index The index of the item.
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name The name of the item.
	 * @param value Values can be `true` `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name The name of the corresponding menu item.
	 */
	getEnabledByName(name: str): bin;

	/**
	 * AddItem
	 * @param name The name of the menu.
	 * @param index The index in which to insert the menu item.
	 */
	addItem(name: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index The index of the menu item to remove.
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name The name of the menu item.
	 */
	removeItemByName(name: str): void;

	/** ShiftItem */
	shiftItem(): void;

	/** PopItem */
	popItem(): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-left corner radius.
	 * @param tr Top-right corner radius.
	 * @param bl Bottom-left corner radius.
	 * @param br Bottom-right corner radius.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

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


class UIFAB {

	/**
	 * SetCornerRadius
	 * @param tl Top-left corner radius.
	 * @param tr Top-right corner radius.
	 * @param bl Bottom-left corner radius.
	 * @param br Bottom-right corner radius.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

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


class UIImage {

	/** SetOnLoad */
	setOnLoad(callback: () => void): void;

	/**
	 * EnableContextMenu
	 * @param value Value. Can be `true` `false`
	 */
	enableContextMenu(value: bin): void;

	/**
	 * SetImage
	 * @param file The path to the image file.
	 */
	setImage(file: str): void;

	/**
	 * GetPixelColor
	 * @param x The x-coordinate of the pixel from the left.
	 * @param y The y-coordinate of the pixel from the top.
	 */
	getPixelColor(x: num, y: num): lst;

	/** GetPixelData */
	getPixelData(): str;

	/**
	 * DrawLine
	 * @param x1 The x-coordinate of the starting point in pixels.
	 * @param y1 The y-coordinate of the starting point in pixels
	 * @param x2 The x-coordinate of the second point in pixels.
	 * @param y2 The y-coordinate of the second point in pixels.
	 * @param strokeColor A hexadecimal color.
	 * @param strokeWidth The stroke thickness.
	 */
	drawLine(x1: num, y1: num, x2: num, y2: num, strokeColor: str, strokeWidth: num): void;

	/**
	 * DrawCircle
	 * @param x The x-coordinate of the center of the circle in pixels.
	 * @param y The y-coordinate of the center of the circle in pixels.
	 * @param radius The radius of the circle in pixels.
	 * @param fillColor A hexadecimal color.
	 * @param strokeColor A hexadecimal color.
	 * @param strokeWidth The stoke thickness.
	 */
	drawCircle(x: num, y: num, radius: num, fillColor: str, strokeColor: str, strokeWidth: num): void;

	/**
	 * DrawSquare
	 * @param x The position from the left of the top-left corner of the square in pixels.
	 * @param y The distance from the top of the top-left corner of the square in pixels.
	 * @param width The width of the square in pixels.
	 * @param fillColor A hexadecimal color.
	 * @param strokeColor A hexadecimal color.
	 * @param strokeWidth The stroke thickness in pixels.
	 */
	drawSquare(x: num, y: num, width: num, fillColor: str, strokeColor: str, strokeWidth: num): void;

	/**
	 * DrawRectangle
	 * @param x1 The distance from the left of the top-left corner of the rectangle in pixels.
	 * @param y1 The distance from the top of the top-left corner of the rectangle in pixels.
	 * @param width The width of the rectangle in pixels.
	 * @param height The height of the rectangle in pixels.
	 * @param fillColor A hexadecimal color.
	 * @param strokeColor A hexadecimal color.
	 * @param strokeWidth The stroke thickness.
	 */
	drawRectangle(x1: num, y1: num, width: num, height: num, fillColor: str, strokeColor: str, strokeWidth: num): void;

	/**
	 * DrawArc
	 * @param x The x-coordinate of the center of the arc in pixels.
	 * @param y The y-coordinate of the center of the arc in pixels.
	 * @param radius The radius of the arc in pixels.
	 * @param start The starting angle in degress
	 * @param end The angle in degress in which the arc will stop.
	 * @param fillColor A hexadecimal color.
	 * @param strokeColor A hexadecimal color.
	 * @param strokeWidth The stroke thickness.
	 */
	drawArc(x: num, y: num, radius: num, start: num, end: num, fillColor: str, strokeColor: str, strokeWidth: num): void;

	/**
	 * DrawImage
	 * @param img Path to image file.
	 * @param x The distance from the left of the top-left corner of the image in pixels.
	 * @param y The distance from the top of the top-left corner of the image in pixels.
	 * @param width If provided, the image will be shrink or stretch to fill this width in pixels.
	 * @param height If provided, the height of the image will be shrink or stretch to fill this height in pixels.
	 */
	drawImage(img: str, x: num, y: num, width: num, height: num): void;

	/** Clear */
	clear(): void;

	/**
	 * DrawPolyline
	 * @param points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
	 * @param strokeColor A hexadecimal color.
	 * @param strokeWidth The stroke thickness.
	 */
	drawPolyline(points: lst, strokeColor: str, strokeWidth: num): void;

	/**
	 * DrawPolygon
	 * @param points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
	 * @param fillColor A hexadecimal color.
	 * @param strokeColor A hexadecimal color.
	 * @param strokeWidth The stroke thickness.
	 */
	drawPolygon(points: lst, fillColor: str, strokeColor: str, strokeWidth: num): void;

	/**
	 * DrawPoint
	 * @param x The x-coordinate in pixels.
	 * @param y The y-coordinate in pixels.
	 * @param color A hexadecimal color.
	 */
	drawPoint(x: num, y: num, color: str): void;

	/** SetOnTouchMove */
	setOnTouchMove(callback: () => void): void;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UILayout {

	/**
	 * SetChildMargins
	 * @param left Left margin.
	 * @param top Top margin.
	 * @param right Right margin.
	 * @param bottom Bottom margin.
	 * @param mode `px`. Default is a fraction of viewport.
	 */
	setChildMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/** Show */
	show(): void;

	/**
	 * Goto
	 * @param index Index of a given layout.
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
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UIList {

	/**
	 * AddItem
	 * @param title The title of the item.
	 * @param body The text description of the item.
	 * @param image A material icon or image file path.
	 * @param index The index in which to add or insert the item.
	 */
	addItem(title: str, body: str, image: str, index: num): void;

	/** SetOnTouch */
	setOnTouch(callback: (title: str, body: str, icon: str, index: num, event: obj) => void): void;

	/** SetOnSelect */
	setOnSelect(callback: (title: str, index: num) => void): void;

	/** SetOnAction */
	setOnAction(callback: (icon: str, index: num) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (title: str, body: str, icon: str, index: num, event: obj) => void): void;

	/** GetSelectedItems */
	getSelectedItems(): void;

	/** GetSelectedTitles */
	getSelectedTitles(): void;

	/**
	 * SetList
	 * @param list A comma separated list of items or an array. See the list format above.
	 */
	setList(list: lst): void;

	/**
	 * SetSelectable
	 * @param selectable If true, make the list selectable. Otherwise, list is not selectable
	 */
	setSelectable(selectable: bin): void;

	/**
	 * SetItemByIndex
	 * @param index The index of the item to update
	 * @param newTitle The new title of the item
	 * @param newBody The new body text
	 * @param newImage The new icon or image
	 */
	setItemByIndex(index: num, newTitle: str, newBody: str, newImage: str): void;

	/**
	 * GetItemByIndex
	 * @param index Returns the item in a list as an object of the following format { title, body, image }
	 */
	getItemByIndex(index: num): void;

	/**
	 * SetItem
	 * @param title The title of the list item to update.
	 * @param newTitle The new title of the list item.
	 * @param newBody The new description of the list item.
	 * @param newImage A material icon font or image file path.
	 */
	setItem(title: str, newTitle: str, newBody: str, newImage: str): void;

	/**
	 * GetItem
	 * @param title Returns the item in a list as an object of the following format { title, body, image }
	 */
	getItem(title: str): void;

	/**
	 * RemoveItemByIndex
	 * @param index The index of the item to remove
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name The title of the list to remove.
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
	 * @param index The index to be selected.
	 */
	selectItemByIndex(index: num): void;

	/**
	 * SetTitleText
	 * @param index The index of the corresponding list item.
	 * @param title The new title text.
	 */
	setTitleText(index: num, title: str): void;

	/**
	 * SetBodyText
	 * @param index The index of the list whose secondary text to be changed.
	 * @param newText The new secondary text.
	 */
	setBodyText(index: num, newText: str): void;

	/**
	 * SetIcon
	 * @param index The index of the corresponding list item.
	 * @param icon Material icon font.
	 */
	setIcon(index: num, icon: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-left corner radius.
	 * @param tr Top-right corner radius.
	 * @param bl Bottom-left corner radius.
	 * @param br Bottom-right corner radius.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

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


class UIMenu {

	/** SetOnTouch */
	setOnTouch(callback: (item: str, icon: str, index: num) => void): void;

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
	 * @param name The new item to be added.
	 * @param index The index at which to add the item.
	 */
	addItem(name: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index The index of the item to remove.
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name The name of the item to remove.
	 */
	removeItemByName(name: str): void;

	/** PopItem */
	popItem(): void;

	/** ShiftItem */
	shiftItem(): void;

	/**
	 * SetPosition
	 * @param left The position of the menu from the left of the parent or anchor component. The unit is in pixels.
	 * @param top The position of the menu from the top of the parent or anchor component. The unit is in pixels.
	 */
	setPosition(left: num, top: num): void;

	/**
	 * SetAutoFocus
	 * @param bool Value can be `true` or `false`
	 */
	setAutoFocus(bool: bin): void;

	/**
	 * SetEnabled
	 * @param index The index of the item.
	 * @param value Values can be `true` or `false`. `false` to disable.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index The index of the item.
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name The name of the corresping item the menu.
	 * @param value Values can be `true` or `false`. `false` to disable an item.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name The name of the item.
	 */
	getEnabledByName(name: str): bin;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UIProgress {

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UIRadioGroup {

	/** SetOnChange */
	setOnChange(callback: (index: num) => void): void;

	/** SetOnTouch */
	setOnTouch(callback: (checked: bin, label: str, index: num, event: obj) => void): void;

	/**
	 * SetList
	 * @param val A comma separated items
	 */
	setList(val: str): void;

	/**
	 * SetItemByIndex
	 * @param item The new item name to be displayed
	 * @param index The index to of the item to be updated
	 */
	setItemByIndex(item: str, index: num): void;

	/**
	 * SetItemByName
	 * @param name The name of the item.
	 * @param text The new text to replaced the name of the item.
	 */
	setItemByName(name: str, text: str): void;

	/**
	 * AddItem
	 * @param name The new item to be added.
	 * @param index The index in which to add the item.
	 */
	addItem(name: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index The index of the item to remove.
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name The name of the item to remove.
	 */
	removeItemByName(name: str): void;

	/** PopItem */
	popItem(): void;

	/** ShiftItem */
	shiftItem(): void;

	/**
	 * SetEnabled
	 * @param index The index of the item.
	 * @param value Values can be `true` or `false`. If `false`, the item will be disabled.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * GetEnabled
	 * @param index The index of the corresponding item.
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name The radiogroup text.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name The radiogroup text.
	 */
	getEnabledByName(name: str): bin;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (label: str, index: num, event: obj) => void): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-left corner radius.
	 * @param tr Top-right corner radius.
	 * @param bl Bottom-left corner radius.
	 * @param br Bottom-right corner radius.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

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


class UISelect {

	/** SetOnChange */
	setOnChange(callback: (value: str) => void): void;

	/** SetOnOpen */
	setOnOpen(callback: () => void): void;

	/** SetOnClose */
	setOnClose(callback: (value: str) => void): void;

	/**
	 * AddItem
	 * @param item A new item to be added.
	 * @param index The index in which to add the item.
	 */
	addItem(item: str, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index The index of the corresponding item to remove.
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param name The name of the item to remove.
	 */
	removeItemByName(name: str): void;

	/** ShifItem */
	shifItem(): void;

	/** PopItem */
	popItem(): void;

	/**
	 * GetItem
	 * @param index The index of the item.
	 */
	getItem(index: num): void;

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
	 * @param index The index of the corresponding item in the select menu.
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name The name of the menu item.
	 * @param value Value can be `true` or `false`
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name The name of the menu item.
	 */
	getEnabledByName(name: str): bin;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UISlider {

	/** SetOnChange */
	setOnChange(callback: (value: num) => void): void;

	/** SetOnSelect */
	setOnSelect(callback: (value: num) => void): void;

	/**
	 * SetRange
	 * @param min Minimum value of the slider.
	 * @param max Maximum value of the slider.
	 */
	setRange(min: num, max: num): void;

	/**
	 * SetMarks
	 * @param val The marks on the Slider Component.
	 */
	setMarks(val: obj): void;

	/** GetMarks */
	getMarks(): bin;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UIStepper {

	/** SetOnComplete */
	setOnComplete(callback: () => void): void;

	/** SetOnChange */
	setOnChange(callback: (index: num) => void): void;

	/** NextStep */
	nextStep(): void;

	/** PreviousStep */
	previousStep(): void;

	/**
	 * GetLayout
	 * @param index The index of the corresponing stepper layout
	 */
	getLayout(index: num): Layout;

	/**
	 * GetLayoutIndex
	 * @param layout The layout to check.
	 */
	getLayoutIndex(layout: obj): num;

	/**
	 * RemoveStep
	 * @param index The index of the step to remove.
	 */
	removeStep(index: num): void;

	/**
	 * SetTitleText
	 * @param index The index of the Stepper.
	 * @param title The new title text.
	 */
	setTitleText(index: num, title: str): void;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UISwitch {

	/** SetOnTouch */
	setOnTouch(callback: (check: bin) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UISwitchGroup {

	/** SetOnTouch */
	setOnTouch(callback: (value: bin, text: str, index: num, event: obj) => void): void;

	/** SetOnChange */
	setOnChange(callback: (values: lst) => void): void;

	/**
	 * SetValueByIndex
	 * @param index The index of the corresponding item.
	 * @param val A Values can be `true` or `false`
	 */
	setValueByIndex(index: num, val: bin): void;

	/**
	 * GetValueByIndex
	 * @param index The index of the corresponding item.
	 */
	getValueByIndex(index: num): bin;

	/**
	 * SetList
	 * @param lst The list array or a comma separated list.
	 */
	setList(lst: obj): void;

	/**
	 * AddItem
	 * @param title The title text.
	 * @param icon Material icon font.
	 * @param value The value of the item.
	 * @param index The index in which to insert the item. Default is at the bottom of the list.
	 */
	addItem(title: str, icon: str, value: bin, index: num): void;

	/**
	 * RemoveItemByIndex
	 * @param index The index of the corresponding item to remove.
	 */
	removeItemByIndex(index: num): void;

	/**
	 * RemoveItemByName
	 * @param title The title text of the SwitchGroup item.
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
	 * @param index The index of the corresponding item in the switch group.
	 */
	getEnabled(index: num): bin;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (text: str, index: num, event: obj) => void): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-left corner radius.
	 * @param tr Top-right corner radius.
	 * @param bl Bottom-left corner radius.
	 * @param br Bottom-right corner radius.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

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


class UITabs {

	/** SetOnChange */
	setOnChange(callback: (name: str, index: num) => void): void;

	/** SetOnTouch */
	setOnTouch(callback: (name: str, The: num) => void): void;

	/**
	 * SetTabs
	 * @param tabs The tab titles array. See examples for format.
	 */
	setTabs(tabs: lst): void;

	/**
	 * AddTab
	 * @param name The name of the tab.
	 * @param icon Material icon font.
	 * @param index The index in which to insert the tab.
	 */
	addTab(name: str, icon: str, index: num): void;

	/**
	 * SetTitleText
	 * @param index Index of the tab.
	 * @param title The new title.
	 */
	setTitleText(index: num, title: str): void;

	/**
	 * SetIcon
	 * @param index The index of the tab.
	 * @param icon Material icon font.
	 */
	setIcon(index: num, icon: str): void;

	/**
	 * RemoveTabByIndex
	 * @param index The index of the corresponding tab to remove.
	 */
	removeTabByIndex(index: num): void;

	/**
	 * RemoveTabByName
	 * @param name The name of the corresponding tab to remove.
	 */
	removeTabByName(name: str): void;

	/**
	 * GetLayout
	 * @param name The name of the tab. You can also pass the index of the tab.
	 * @return Layout Component
	 */
	getLayout(name: str): obj;

	/**
	 * ShowTab
	 * @param name The name of the tab to be shown.
	 */
	showTab(name: str): void;

	/**
	 * ShowTabByIndex
	 * @param index The index of the tab to be shown.
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
	 * @param index The index of the corresponding tab.
	 */
	getEnabled(index: num): bin;

	/**
	 * SetEnabledByName
	 * @param name The name of the tab.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * GetEnabledByName
	 * @param name The name of the tab.
	 */
	getEnabledByName(name: str): bin;

	/**
	 * ShowScrollButton
	 * @param mode Values can be \n `auto` : will only present them when not all the items are visible \n `desktop` : will only present them on medium and larger viewports \n `on` : will always present them \n `off` : will never present them.
	 */
	showScrollButton(mode: str): void;

	/**
	 * GetLayoutIndex
	 * @param layout The layout to check.
	 */
	getLayoutIndex(layout: obj): num;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (text: str, index: num, event: obj) => void): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-left corner radius.
	 * @param tr Top-right corner radius.
	 * @param bl Bottom-left corner radius.
	 * @param br Bottom-right corner radius.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/**
	 * SetIndicatorStyle
	 * @param width Fraction of the tab item width. This works only on `fullWidth` tab.
	 * @param thickness Thickness in pixels.
	 * @param color Hexadecimal color of the form `#rrggbb`.
	 * @param radius The corner radius in pixels.
	 */
	setIndicatorStyle(width: num, thickness: num, color: str, radius: num): void;

	/**
	 * SetTabPadding
	 * @param left The tab-item left padding.
	 * @param top The tab-item top padding.
	 * @param right The tab-item right padding.
	 * @param bottom The tab-item bottom padding.
	 * @param mode Unit of measurement. Default is `px`. You can pass `%` `rem` `vw`.
	 */
	setTabPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

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


class UIText {

	/**
	 * SetHtml
	 * @param html An html string
	 */
	setHtml(html: str): void;

	/** GetHtml */
	getHtml(): str;

	/**
	 * SetTextShadow
	 * @param radius The radius in pixels
	 * @param dx X-offset of the shadow
	 * @param dy Y-offset of the shadow
	 * @param color A hexadecimal color e.g. `#aarrggbb`
	 */
	setTextShadow(radius: num, dx: num, dy: num, color: obj): void;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UITextField {

	/** SetOnEnter */
	setOnEnter(callback: (text: str) => void): void;

	/** SetOnChange */
	setOnChange(callback: (text: str) => void): void;

	/** SetOnFocus */
	setOnFocus(callback: (focus: bin) => void): void;

	/**
	 * SetRows
	 * @param min The minimum number of rows.
	 * @param max The maximum number of rows.
	 */
	setRows(min: num, max: num): void;

	/**
	 * SetStartAdornment
	 * @param text Text or material icon font.
	 * @param type A comma separated options for start adornment control. Options can be \n `Icon` : If the adornment is an icon. \n `Touchable` : If the adornment is touchable.
	 */
	setStartAdornment(text: str, type: str): void;

	/** SetStartAdornmentOnTouch */
	setStartAdornmentOnTouch(callback: () => void): void;

	/** GetStartAdornment */
	getStartAdornment(): str;

	/**
	 * SetEndAdornment
	 * @param text Text or material icon font.
	 * @param type A comma separated options for end adornment control. Options can be \n `Icon` : If the adornment is an icon. \n `Touchable` : If the adornment is touchable.
	 */
	setEndAdornment(text: str, type: str): void;

	/** SetEndAdornmentOnTouch */
	setEndAdornmentOnTouch(callback: () => void): void;

	/** GetEndAdornment */
	getEndAdornment(): str;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UITimePicker {

	/**
	 * Show
	 * @param format A time format. Can be of the form \n Hour formats \n `H` : 0 1 ... 22 23 \n `HH` : 	00 01 ... 22 23 \n `h` : 1 2 ... 11 12 \n `hh` : 	01 02 ... 11 12 \n Minute formats \n `m` : 	0 1 ... 58 59 \n `mm` : 00 01 ... 58 59 \n AM/PM \n `A` : AM or PM \n `a` : am pm
	 */
	show(callback: (value: str) => void, format: str): bin;
}


class UITreeView {

	/** SetOnTouch */
	setOnTouch(callback: (value: str, path: str) => void): void;

	/**
	 * SetList
	 * @param obj The list object of the treeview items. See example above.
	 */
	setList(obj: obj): void;

	/**
	 * AddItem
	 * @param name The label text for the new item.
	 * @param obj See list object for more info.
	 */
	addItem(name: str, obj: obj): void;

	/**
	 * GetItem
	 * @param name The parent name of the tree items.
	 */
	getItem(name: str): obj;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UIWebView {

	/** SetOnLoad */
	setOnLoad(callback: () => void): void;

	/** SetOnTouch */
	setOnTouch(callback: (event: obj) => void): void;

	/** SetOnContextMenu */
	setOnContextMenu(callback: (event: obj) => void): void;

	/**
	 * Animate
	 * @param anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
	 * @param duration The time in milliseconds.
	 */
	animate(anim: str, duration: num): void;

	/**
	 * SetSize
	 * @param width Fraction of the parent width. [0-1]
	 * @param height Fraction of the parent height. [0-1]
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
	getPosition(options: str): obj;

	/**
	 * SetMargins
	 * @param left Fraction of the parent width.
	 * @param top Fraction of the parent height.
	 * @param right Fraction of the parent width.
	 * @param bottom Fraction of the parent height.
	 * @param mode `px` or `%`
	 */
	setMargins(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPadding
	 * @param left Fraction of the component width.
	 * @param top Fraction of the component height. [0-1]
	 * @param right Fraction of the component width. [0-1]
	 * @param bottom Fraction of the component height. [0-1]
	 * @param mode The size thickness mode. Can be `px`
	 */
	setPadding(left: num, top: num, right: num, bottom: num, mode: str): void;

	/**
	 * SetPosition
	 * @param left Fraction of the parent width. [0-1]
	 * @param top Fraction of the screen height. [0-1]
	 * @param mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * SetBorder
	 * @param width Border-left thickness in pixels.
	 * @param clr Border color in hexadecimal form `#rrggbb`
	 * @param style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
	 */
	setBorder(width: num, clr: str, style: str): void;

	/**
	 * SetCornerRadius
	 * @param tl Top-Left border radius in pixels.
	 * @param tr Top-Right border radius in pixels.
	 * @param bl Bottom-Left border radius in pixels.
	 * @param br Bottom-Right border radius in pixels.
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

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


class UIshowColorPicker {

	/** GetValue */
	getValue(): str;
}


class UIshowDateTimePicker {

	/** SetOnSelect */
	setOnSelect(callback: (value: str) => void): void;
}


class UIshowPopup {

	/** SetOnClose */
	setOnClose(callback: () => void): void;

	/** SetOnAction */
	setOnAction(callback: () => void): void;

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/**
	 * SetPosition
	 * @param vertical Vertical alignment. Values can be `Top` `Bottom`
	 * @param horizontal Horizontal alignment. Values can be `Left` `Center` and `Right`
	 */
	setPosition(vertical: str, horizontal: str): void;

	/** GetPosition */
	getPosition(): obj;
}


class UIshowProgressDialog {

	/** Show */
	show(): void;

	/** Hide */
	hide(): void;

	/** SetOnClose */
	setOnClose(callback: () => void): void;
}


