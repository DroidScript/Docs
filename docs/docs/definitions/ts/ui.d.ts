declare var ui: UI;
declare const platform: { mobile: bin, ios: bin, android: bin, type: "mobile" | "tablet" | "desktop" };
declare class App {
	onStart(): void;
	onLoad(): void;
	onExit(): void;
}
declare type UIObject = UIAccordion | UIAppBar | UIBottomNavbar | UIBottomSheet | UIButton | UIButtonGroup | UICameraView | UICard | UICheckbox | UICheckboxGroup | UIChip | UIDialog | UIDivider | UIDrawer | UIDropdown | UIFloatingActionButton | UIImage | UILayout | UIList | UIMenu | UIProgress | UIRadioGroup | UISelect | UISlider | UIStepper | UISwitch | UISwitchGroup | UITabs | UIText | UITextField | UITreeView | UIVideoView | UIWebView | UIActionSheet | UIColorPicker | UIDatePicker | UIDateTimePicker | UIPopover | UIPopup | UIProgressDialog | UITimePicker;
/** ui object */
declare type uio = UIObject;

declare class UI {

	/**
	 * Adds an accordion or expansion panel into your app
	 * @param parent The parent layout where to add the text.
	 * @param titles An array of accordion titles.
	 * @param options A comma separated options.
Style: `Square`
Layout type: `Linear`,  `Absolute`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addAccordion(parent: obj, titles: lst, options?: str, width?: num, height?: num): UIAccordion;

	/**
	 * Adds an appbar to your app
	 * @param parent The parent layout where to add the AppBar
	 * @param title `The title text of the appbar`
	 * @param options A comma separated options.
Menu icon: `Menu` 
Theme Color: `Primary`,  `Secondary`,  `Transparent`,  `Inherit`,  `Default`
Position: `Absolute`,  `Static`,  `Fixed`,  `Relative`
	 * @param width Fraction of the parent width `[0-1]`
	 * @param height Fraction of the parent height `[0-1]`
	 */
	addAppBar(parent: obj, title: str, options?: str, width?: num, height?: num): UIAppBar;

	/**
	 * The Bottom Navigation Bar (BottomNavBar) is a key element in mobile user interface design, typically placed at the bottom of the screen
	 * @param parent The parent layout where to add the BottomNavbar
	 * @param navs An array whose elements are of the form `[ "Title", "Icon" ]`
	 * @param options A comma separated options.
Position: "Fixed",  "Static"
Label: `Hidelabels`
	 * @param width Fraction of the screen width `[0-1]`
	 * @param height Fraction of the screen height `[0-1]`
	 */
	addBottomNavbar(parent: obj, navs: lst, options?: str, width?: num, height?: num): UIBottomNavbar;

	/**
	 * The BottomSheet in Material Design is a UI component anchored at the screen bottom
	 * @param title `An optional bottomsheet title.`
	 * @param options A comma separated options. Values are:
`"Notch"` to add a small notch at the top of the bottomsheet.
`"HideOnAction"` to hide the bottomsheet when actions are click.
`"CloseAction"` add a close action at the left.
`"MoreAction"` add a more action at the right.
`"NoCancel"` to disable the default closing event when the backdrop is click.
	 */
	addBottomSheet(title: str, options: str): UIBottomSheet;

	/**
	 * A button component in mobile UI development is an element that triggers an action when pressed
	 * @param parent The layout where to add the button.
	 * @param text `The button text or the material icon text.`
	 * @param options A comma separated options.
Variant: `Contained`,  `Outlined`,  `Text`,  `Default`
Theme Color: `Primary`,  `Secondary`,  `Default`
Sizes: `Small`,  `Medium`,  `Large`
Toggleable: `Toggle`,  `Active`
Utils: `Icon`,  `NoRipple`,  `Upload`,  `Multiple`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addButton(parent: obj, text: str, options?: str, width?: num, height?: num): UIButton;

	/**
	 * In mobile UI development, a button group refers to a collection of buttons presented together, often used for related actions
	 * @param parent The parent layout where to add the ButtonGroup
	 * @param list The item to be displayed on the buttn group.
	 * @param options A comma separated options.
Variant: `Contained`,  `Outlined`,  `Text`,  `Default`
Theme Color: `Primary`,  `Secondary`,  `Default`
Sizes: `Small`,  `Medium`,  `Large`
Orientation: `Horizontal`,  `Vertical`
Toggleable: `Toggle`,  `Radio`
Utils: `Icon`,  `NoElevation`
	 * @param width Fraction of the parent width `[0-1]`
	 * @param height Fraction of the parent height `[0-1]`
	 */
	addButtonGroup(parent: obj, list?: lst, options?: str, width?: num, height?: num): UIButtonGroup;

	/**
	 * Adds a camera view into your app to take pictures and record videos
	 * @param parent The parent layout where to add the camera view.
	 * @param options `Comma separated options for the camera view. Available values are "Front"`, ` "Back"`, ` "Video"`, ` "Fill" and "Stretch". "Video" option includes audio.`
	 * @param width `Fraction of the parent width [0-1].`
	 * @param height `Fraction of the parent height [0-1].`
	 */
	addCameraView(parent: obj, options: str, width: num, height: num): UICameraView;

	/**
	 * They are surfaces in material design that display content and actions on a single topic
	 * @param parent The layout where to add the card.
	 * @param content A JSON object representing the contents of the card. Passing the card contents on initialization makes your app layout loads faster than setting each property individually.
	 * @param options `A comma separated option for the card.`
	 * @param width `Fraction of the parent width.`
	 * @param height `Fraction of the parent height.`
	 */
	addCard(parent: obj, content: obj, options: str, width: num, height: num): UICard;

	/**
	 * A checkbox in UI development is a graphical control element that allows users to toggle between two states, typically checked or unchecked, to indicate a choice or selection
	 * @param parent The layout where to add the checkbox
	 * @param text `The label for the checkbox`
	 * @param options A comma separated options.
Theme Colors: `Primary`,  `Secondary`
Sizes: `Medium`,  `Small`
Icon position: `Left`,  `Top`,  `Right`,  `Bottom`
Variant: `Indeterminate`,  `Determinate`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addCheckbox(parent: obj, text: str, options?: str, width?: num, height?: num): UICheckbox;

	/**
	 * A checkbox group in UI development is a collection of checkboxes grouped together for related selections or options
	 * @param parent The parent layout where to add the CheckboxGroup.
	 * @param list The items to be displayed.
	 * @param options A comma separated options.
Theme Color: `Default`,  `Primary`,  `Secondary`
Sizes: `Small`,  `Medium`
Icon Position: `Left`,  `Right`
Container: `Elevated`,  `Outlined`
Corners : `Square`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addCheckboxGroup(parent: obj, list?: lst, options?: str, width?: num, height?: num): UICheckboxGroup;

	/**
	 * In mobile UI design, a Chip is a compact element displaying attributes, input, or actions
	 * @param parent The parent layout where to add the Chip.
	 * @param text `The text on the chip.`
	 * @param options A comma separated option.
Theme Color: `Primary`,  `Secondary`,  `Default`
Size: `Small`,  `Medium`
Variant: `Outlined`,  `Default`
Util: `Touchable`
	 * @param width Fraction of the parent width `[0-1]`
	 * @param height Fraction of the parent height `[0-1]`
	 */
	addChip(parent: obj, text: str, options?: str, width?: num, height?: num): UIChip;

	/**
	 * A Dialog in mobile UI design is a pop-up window that appears on top of the current screen to prompt the user for input or to convey information
	 * @param title `The dialog title text.`
	 * @param body `The dialog message to be shown.`
	 * @param actions A string of action button text.
	 * @param options A comma separated options.
Theme Colors: `Primary`,  `Secondary`
Util: `NoCancel` prevents the dialog from closing on action.
	 * @param width Fraction of the screen width `[0-1]`.
	 */
	addDialog(title: str, body: str, actions?: lst, options?: str, width?: num): UIDialog;

	/**
	 * A divider is a visual element used to separate content or components within a layout
	 * @param parent The layout where to add the divider.
	 * @param width `Fraction of the parent width. Default is 1.`
	 * @param options A comma separated options.
`Inset` to add some padding.
	 */
	addDivider(parent: obj, width?: num, options?: str): UIDivider;

	/**
	 * A drawer is a navigation panel that slides in from the edge of the screen, typically from the left, to reveal additional options or content
	 * @param layout The drawer layout where to add controls.
	 * @param options A comma separated options.nVariant: `Permanent`,  `Persistent`,  `Temporary`
Anchor: `Left`,  `Right`,  `Top`,  `Bottom`
	 * @param width Fraction of the screen width starting from the anchor position `[0-1]`.
	 */
	addDrawer(layout: obj, options?: str, width?: num): UIDrawer;

	/**
	 * A dropdown, also known as a spinner or picker, is a user interface element that presents a list of options in a drop-down menu
	 * @param parent The layout where to add the dropdown.
	 * @param list The list items to show.
	 * @param options A comma separated options.
Theme Colors: `Primary`,  `Secondary`,  `Default`
Variants: `Contained`,  `Outlined`,  `Text`
Sizes: `Small`,  `Medium`,  `Large`
Orientation: `Horizontal`,  `Vertical`
Util: `NoElevation`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addDropdown(parent: obj, list?: lst, options?: str, width?: num, height?: num): UIDropdown;

	/**
	 * A Floating Action Button (FAB) is a prominent, circular button that hovers above the content, typically used for a primary action in an application
	 * @param parent The parent layout where to add the fab
	 * @param icon `The string icon of the FAB`
	 * @param options A comma separated option.
Position: `Fixed`,  `Static`
Style: `Rounded`,  `Extended`
Anchor: `Left`,  `Right`
	 * @param text `Text to show for extended FABs`
	 */
	addFloatingActionButton(parent: obj, icon: str, options: str, text: str): UIFloatingActionButton;

	/**
	 * Adds an image into your layout
	 * @param parent The parent layout where to add the image.
	 * @param file `The path to the image.`
	 * @param options A comma seprated options.
`Image`,  `Canvas`,  `Button` and `Avatar`. Default is image. 
For `Avatar` you can pass `Small` or `Large`.
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addImage(parent: obj, file: str, options?: str, width?: num, height?: num): UIImage;

	/**
	 * Adds a layout into your app
	 * @param parent The parent layout where to add this component. Pass a string `main` for the main layout of your app.
	 * @param type The layout type. Values can be `"Linear"`,  `"Absolute"`,  `"Frame"`,  `"Slide"`,  `"Card"`
	 * @param options A comma separated options.
Orientation: `Horizontal`,  `Vertical`
Horizontal Alignment: `Left`,  `Center`,  `Right`
Vertical Alignment: `Top`,  `VCenter`,  `Bottom`
Dimensions: `FillXY`,  `FillX`,  `FillY`,  `FillAxis`
Scroll: `ScrollX`,  `ScrollY`,  `ScrollXY`,  `NoScrollBar`
Utils:
`BackColor` to apply theme background color rather than transparent.
`NoScrollBar` to remove scrollbar when scroll options is passed.
`TouchThrough` to enable touch events to propagate behind the layers in frame layouts.
`"Touchable"` enable touch in card layout.
`"Outlined"` card variant is outlined.
`"Square"` card rounded corners is remove.
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addLayout(parent: obj, type: str, options?: str, width?: num, height?: num): UILayout;

	/**
	 * Lists are continuous, vertical indexes of text or images
	 * @param parent The parent layout
	 * @param list An array of arrays. Each element is of the form `[icon, title, body, secondary]`
	 * @param options A comma separated options.
Media: `Icon`,  `Avatar`
Styling: `Dense`,  `Inset`
Utils: `Selectable`,  `Divider`,  `SecondaryText`,  `NoRipple`,  `NoScrollBar`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addList(parent: obj, list?: lst, options?: str, width?: num, height?: num): UIList;

	/**
	 * A menu is a list of options or actions presented to the user as a popup
	 * @param parent The component where to anchor the Menu.
	 * @param list A list of items to be shown in the pop-up menu. You can also pass a comma separated string. For menu with icon the format is `icon:title` \n Add a `colon` before an item to display it as the label text.
	 * @param options A comma separated options.
Theme Color: `Primary`,  `Secondary`,  `Error`
Utils: `Dense`,  `Icon`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addMenu(parent: obj, list?: lst, options?: str, width?: num, height?: num): UIMenu;

	/**
	 * A progress refers to the visual indication of a task's completion status
	 * @param parent The parent layout where to add the prgress component.
	 * @param value `the initial value of the progress component.`
	 * @param options A comma separated options.
Theme Color: `Primary`,  `Secondary`
Type: `Circular`,  `Linear`
Variant: `Determinate`,  `Indeterminate`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction fo the parent height `[0-1]`.
	 */
	addProgress(parent: obj, value?: num, options?: str, width?: num, height?: num): UIProgress;

	/**
	 * Adds a radiogroup component into your app
	 * @param parent The parent where to add the RadioGroup component.
	 * @param list The list items array.
	 * @param options A comma separated options.
Radio Sizes: `Small`,  `Medium`
Theme Colors: `Primary`,  `Secondary`,  Default
Orientation: `Horizontal`,  `Vertical`
Icon Position: `Left`,  `Right`
Container: `Elevated`,  `Outlined`
Corner: `Square`
Utils: `Required`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addRadioGroup(parent: obj, list?: lst, options?: str, width?: num, height?: num): UIRadioGroup;

	/**
	 * Adds a Select Component to a given layout
	 * @param parent The parent layout where to add the control
	 * @param list The list of items for the Select options
	 * @param options A comma separated options.
Sizes: `Small`,  `Medium`
Variant: `Filled`,  `Outlined`,  `Standard`
Margin: `Dense`,  `Normal`
Utils: `Required`,  `Multiple`,  `Radio`,  `Disabled`,  `AutoFocus`,  `FullWidth`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addSelect(parent: obj, list?: lst, options?: str, width?: num, height?: num): UISelect;

	/**
	 * A Slider in mobile UI design is a user interface element that allows users to select a value from a range by dragging a thumb along a track
	 * @param parent The layout where to add the Slider Component.
	 * @param value The initial value of the Slider. Value must be between `0-100`,  the default min and max values.
	 * @param options A comma separated options.
Theme Color: `Primary`,  `Secondary`
Orientation: `Horizontal`,  `Vertical`
Track: `Normal`,  `Inverted`,  `False`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addSlider(parent: obj, value: num, options?: str, width?: num, height?: num): UISlider;

	/**
	 * A Stepper in mobile UI design is a navigation element that guides users through a multi-step process, typically used for forms or sequential tasks
	 * @param parent The parent layout of the Stepper.
	 * @param steps An array of titles.
	 * @param options A comma separated options.
`Vertical`,  `Horizontal`,  `Loop`,  `Mobile`,  `AlternativeLabel`.
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addStepper(parent: obj, steps?: lst, options?: str, width?: num, height?: num): UIStepper;

	/**
	 * A Switch in mobile UI design is a toggle control that allows users to turn a setting on or off
	 * @param parent The parent layout where to add the Switch Component.
	 * @param text `The label text.`
	 * @param options A comma separated options.
Theme Color: `Primary`,  `Secondary`,  `Default`
Icon Position: `Left`,  `Top`,  `Right`,  `Bottom`
Sizes: `Small`,  `Medium`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addSwitch(parent: obj, text: str, options?: str, width?: num, height?: num): UISwitch;

	/**
	 * In UI development, a SwitchGroup refers to a collection or grouping of individual switches
	 * @param parent The parent layout where to add the SwitchGroup Component.
	 * @param list The list items array whose elements can be `String` if items is text only, or `Array` of the form `[ "icon", "label" ]` if items is icon and text.
	 * @param options A comma separated options.
Icon: `Icon`
Color: `Primary`,  `Secondary`
Container: `Elevated`,  `Outlined`
Corner: `Square`
List divider: `Divider`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addSwitchGroup(parent: obj, list?: lst, options?: str, width?: num, height?: num): UISwitchGroup;

	/**
	 * Tabs in user interfaces facilitate seamless navigation between app sections
	 * @param parent The parent layout where to add the Tabs Component.
	 * @param list An array of tab names.
	 * @param options A comma separated options.
Swipe: `Swipeable`
Theme Colors: `Primary`,  `Secondary`,  `Inherit`,  `Transparent`,  `Default`
Variant: `Standard`,  `Scrollable`,  `FullWidth`
Layout: `Linear`,  `Absolute`
Utils: `Icon`,  `Center`,  `Paper`
	 * @param width Fraction of the parent width `[0-1]`
	 * @param height Fraction of the parent height `[0-1]`
	 */
	addTabs(parent: obj, list?: lst, options?: str, width?: num, height?: num): UITabs;

	/**
	 * In mobile UI design, it refers to the style, arrangement, and appearance of text
	 * @param parent The layout control where to add the text control
	 * @param text `The text to be displayed on the text control`
	 * @param options A comma separated options.
Variants: `H1`,  `H2`,  `H3`,  `H4`,  `H5`,  `H6`,  `body1`,  `body2`,  `overline`,  `subtitle1`,  `subtitle2`,  `button`,  `caption`
Lines: `Singleline`,  `Multiline`
Alignment: `Left`,  `Center`,  `Right`,  `Justify`
Theme Color: `Primary`,  `Secondary`,  `TextPrimary`,  `TextSecondary`,  `Error`
Format: `Html`,  `Icon`,  `Italize`,  `Monospace`,  `Bold`,  `Underline`
Utils: `Touchable`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addText(parent: obj, text: str, options?: str, width?: num, height?: num): UIText;

	/**
	 * A TextField in mobile UI design is an input field where users can enter text or numeric data
	 * @param parent The layout where to add the TextField Component.
	 * @param text `The initial value of the TextField`
	 * @param options A comma separated options.
Theme Color: `Primary`,  `Secondary`
Sizes: `Small`,  `Medium`
Type: `Text`,  `Password`,  `Email`,  `Search`,  `Number`,  `Date`,  `Time`,  `DateTime`
Variant: `Standard`,  `Filled`,  `Outlined`
TextArea: `Multiline`
Utils: `Autofocus`
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addTextField(parent: obj, text: str, options?: str, width?: num, height?: num): UITextField;

	/**
	 * A TreeView is a hierarchical representation of data, often used to display nested categories or organized information.*
	 * <js>var items = {
	 *     "Group 1": {
	 *         "Item 1": "",
	 *         "Item 2": "",
	 *         "Item 3": ""
	 *     },
	 *     "Group 2": {
	 *         "Item 1": "",
	 *         "Item 2": "",
	 *         "Item 3": ""
	 *     },
	 *     "Applications": {
	 *         "Editor": "",
	 *         "Productivity": "",
	 *         "Social Media": {
	 *             "TikTok": "",
	 *             "YouTube": "",
	 *             "Meta": {
	 *                 "Facebook": "",
	 *                 "Instagram": "",
	 *                 "Whatsapp": "",
	 *                 "Messenger": ""
	 *             }
	 *         }
	 *     }
	 * }</js>
	 *  
	 * 
	 * ```var items = {"Group 1": {"Item 1": "","Item 2": "","Item 3": ""},"Group 2": {"Item 1": "","Item 2": "","Item 3": ""},"Applications": {"Editor": "","Productivity": "","Social Media": {"TikTok": "","YouTube": "","Meta": {"Facebook": "","Instagram": "","Whatsapp": "","Messenger": ""}}}}```
	 * 
	 * 
	 * The properties of the list object will be the name of the item or the group
	 * @param parent The parent layout where to add the TreeView component.
	 * @param list An object of the treeview items. See example below.
	 * @param options A comma separated options. Values can be `MultiSelect`.
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addTreeView(parent: obj, list?: obj, options?: str, width?: num, height?: num): UITreeView;

	/**
	 * Adds a video view into your app layout
	 * @param parent The layout where to add the video view.
	 * @param url The video source url. Supported video formats are `"mp4",  "ogg",  "webm"`
	 * @param options Comma separated options. Values can be one or a combination of the following: `autoplay`,  `loop`,  `controls`,  `muted`,  `fill` or `stretch`. If you pass "controls",  you can optionally remove some controls such as "nodownload",  "nofullscreen" and "noremoteplayback".
	 * @param width `Fraction of the parent width. Values can be [0-1].`
	 * @param height `Fraction of the parent height. Values can be [0-1].`
	 */
	addVideoView(parent: obj, url: str, options: str, width: num, height: num): UIVideoView;

	/**
	 * A WebView in mobile development is a component that allows embedding web content within an application
	 * @param parent The parent layout where to add the WebView component.
	 * @param url `The url of the website.`
	 * @param options A comma separated options for WebView. Values can be `NoScrollBar`, 
	 * @param width Fraction of the parent width `[0-1]`.
	 * @param height Fraction of the parent height `[0-1]`.
	 */
	addWebView(parent: obj, url?: str, options?: str, width?: num, height?: num): UIWebView;

	/**
	 * An Action Sheet is a list dialog implementation of bottom sheet displaying contextual actions or options, used to streamline user interactions in mobile apps
	 * @param title `The custom actionsheet title.`
	 * @param list The list items to show. If `"icon"` option is passed, each element in this list array is of the form `[icon, name]`.
	 * @param options A comma separated actionsheet options. Values are 
`"Icon"` render a leading icon.
`"NoCancel"` remove the default `"Cancel"` option.
	 */
	showActionSheet(title: str, list: lst, options: str, onSelect: (this: UIActionSheet) => void): UIActionSheet;

	/**
	 * Shows a color picker
	 * @param value `A hexadecimal default value for the color picker.`
	 * @param options A comma separated options.
Includes alpha: `Alpha`
	 */
	showColorPicker(value?: str, options?: str, onSelect?: (this: UIColorPicker, value : str) => void): UIColorPicker;

	/**
	 * A DatePicker in mobile UIs enables users to select dates using a visual calendar interface
	 * @param date A default date value. Format is `YYYY-MM-DD`
	 * @param options Date picker options object.See `options` properties below for customization. Note: `options` param is an object to support for more customization than the usual comma separated string.
	 */
	showDatePicker(date: str, options: obj, onSelect: (this: UIDatePicker) => void): UIDatePicker;

	/**
	 * A DateTimePicker in mobile UI design combines date and time selection in one interface
	 * @param date `Default value for date of the form "YYYY-MM-DD"`
	 * @param time `Default value for time of the form "HH:SS"`\
 	 * &emsp; `HH` - MM
	 * @param format The format of the value that will be pass to the `onSelect` callback. Default is `"YYYY-MM-DD HH:SS"`. You can refer to <a href="https://momentjs.com/" target="_blank">https://momentjs.com/</a> for more date time formats. Sample formats: `"MMMM Do YYYY,  h:ss a"`,  `"dddd"`,  `"MMM Do YY"`,  `"LLL"`\
 	 * &emsp; `HH` - MM\
 	 * &emsp; `h` - mm
	 */
	showDateTimePicker(date?: str, time?: str, format?: str, onSelect?: (this: UIDateTimePicker) => void): UIDateTimePicker;

	/**
	 * Popover is very useful on showing additional info or displaying instructions especially when the control is click or hovered
	 * @param parent UI component. Can be a `Layout` `Button` `Image` `Text` or any UI component except dialogs.
	 * @param text The text to de displayed. For displaying more data,  pass a `Layout`
	 * @param position A comma separated values representing the
`"anchorOrigin, transformOrigin"`
`anchorOrigin` Position of the popover on its parent.
`transformOrigin` Origin on the popover itself.
Available values for both `anchorOrigin` and `transformOrigin`  are
`tl` for top-left,  `tc` for top-center,  `tr` `cl` `cc` `cr` `bl` `bc` and `br` for bottom-right.
	 * @param width Fraction of the screen width `[0-1]`.
	 * @param height Fraction of the screen height `[0-1]`.
	 */
	showPopover(parent: obj, text?: str, position?: str, width?: num, height?: num): UIPopover;

	/**
	 * "Popup" is like a short notification that quickly appears on the screen, providing extra options or information in a concise and unobtrusive manner
	 * @param msg `The message to display on the pop-up.`
	 * @param options A comma separated options.
Duration: `Short`,  `Long`
Vertical Alignment: `Top`,  `Bottom`
Horizontal Alignment: `Left`,  `Center`,  `Right`
Action options: `Icon`,  `HideOnAction`
Transition: `Grow`,  `Fade`,  `Slide`,  `Collapse`,  `Zoom`
	 * @param duration `Time in milliseconds. Pass this if you don't want the default auto hide duration.`
	 * @param action `Action button text`
	 */
	showPopup(msg: str, options?: str, duration?: num, action?: str): UIPopup;

	/**
	 * A ProgressDialog is a pop-up dialog that indicates the progress of a task, often accompanied by a loading spinner or bar
	 * @param text `The text message of the progress dialog.`
	 * @param options A comma separated options.
`AutoCancel` to close the dialog when backdrop is click.
	 */
	showProgressDialog(text?: str, options?: str): UIProgressDialog;

	/**
	 * A Time Picker in mobile UI design allows users to select a specific time
	 * @param time A default time value to which the timepicker begins. Value is of the form `HH\
 	 * &emsp; `HH` - mm`
	 * @param options A comma separated options.
Orientation: `Portrait`,  `Landscape`
Format: `24H`,  `12H`
	 */
	showTimePicker(time: str, options: str, onSelect: (this: UITimePicker) => void): UITimePicker;

}

declare class UIAccordion {

	/** Sets and returns the width of the title as fraction */
	titleWidth: num;

	/** Sets or returns the material icon font for the expand icon */
	expandIcon: str;

	/** Sets or returns the list of titles for the accordion panel */
	titles: lst;

	/** Collapse or shrink a corresponding accordion by its index */
	toggle: num;

	/** Sets or returns the title text color in hexadecimal format `#rrggbb` */
	textColor1: str;

	/** Sets or returns the secondary text color in hexadecimal format `#rrggbb` */
	textColor2: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the accordion title text size */
	textSize1: num;

	/** Sets or returns the accordion secondary text size */
	textSize2: num;

	/** Sets or returns whether the accordion is rounded or not */
	rounded: bin;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the secondary text of the accordion items */
	secondaryText: lst;

	/** Sets or returns the padding of each accordion item */
	itemPadding: lst;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIAccordion, title : str, index : num, pos : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the top and bottom accordion panels
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/**
	 * Get the layout of the corresponding accordion item
	 * @param index `The index of the accordion. You can also pass accordion title.`
	 */
	getLayout(index: num): obj;

	/**
	 * Update the accordion title by passing its corresponding index
	 * @param index `The index of the corresponding title to updates.`
	 * @param title `The new title text.`
	 */
	setTitleText(index: num, title: str): void;

	/**
	 * Adds a secondary text on the accordion
	 * @param text The secondary text to display. You can also pass arguments as a comma separated string.
	 * @param index If `index` is provided,  the corresponding index will be updated with the new text.
	 */
	setSecondaryText(text: lst, index: num): void;

	/**
	 * Sets the expand icon at the right of the accordion
	 * @param icon `A material icon`
	 */
	setExpandIcon(icon: str): void;

	/**
	 * Adds an item to the accordion
	 * @param title `Accordion title`
	 * @param secondaryText `Accordion secondary text`
	 * @param index The index at which the accordion item will be added. If `null`,  the item will be added at the bottom of the accordion.
	 */
	addItem(title: str, secondaryText: str, index: num): void;

	/**
	 * Removes accordion item by its index
	 * @param index `The index of the corresponding accordion to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * Removes accordion item by its title name
	 * @param title `The title of the corresponding accordion to remove.`
	 */
	removeItemByName(title: str): void;

	/** Removes the first accordion item */
	shiftItem(): void;

	/** Removes the last accordion item */
	popItem(): void;

	/**
	 * Enable or disable the accordion component or an item in the accordion component
	 * @param index `The index of the corresponding accordion.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * Get the enabled state of an accordion item by its index
	 * @param index `The index of the accordion item.`
	 */
	getEnabled(index: num): bin;

	/**
	 * Enable or disable an accordion item by its name
	 * @param name `The title of the accordion`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * Get the enabled state of an accordion item by its name
	 * @param name `The title of the accordion.`
	 */
	getEnabledByName(name: str): bin;

	/**
	 * Get the index of the corresponding layout
	 * @param layout The layout to check.
	 */
	getLayoutIndex(layout: obj): num;

	/** Sets a callback function when the accordion is touch */
	setOnTouch(callback: (this: UIAccordion, index : num, expand : bin) => void): void;

	/**
	 * Sets the color of the title and the secondary text respectively
	 * @param color1 Color of the title text in hexadecimal format `#rrggbb`
	 * @param color2 Color of the secondary text in hexadecimal format `#rrggbb`
	 */
	setTextColor(color1: str, color2?: str): void;

	/**
	 * Sets the padding of the accordion item
	 * @param left `Left padding of the accordion item.`
	 * @param top `Top padding of the accordion item.`
	 * @param right `Right padding of the accordion item.`
	 * @param bottom `Bottom padding of the accordion item.`
	 * @param mode Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left: num, top: num, right: num, bottom: num, mode: str): void;
}


declare class UIAppBar {

	/** Sets or return the AppBar title `text` */
	text: str;

	/** Sets or returns the theme color of the AppBar */
	color: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the variant of the title text */
	textVariant: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the icon of the menu button */
	icon: str;

	/** Returns the right layout of the appbar where you can add controls */
	layout: obj;

	/** Sets or returns whether the appbar has menu button */
	menu: bin;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIAppBar, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the appbar
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds a callback handler when the component is touch */
	setOnTouch(callback: (this: UIAppBar, pos : obj) => void): void;

	/** Sets a function to be called when the user clicks the menu */
	setOnMenu(callback: (this: UIAppBar, pos : obj) => void): void;

	/**
	 * Adds a layout for additional controls at the right of the appbar
	 * @param lay The layout where to add controls
	 */
	addLayout(lay: obj): void;
}


declare class UIBottomNavbar {

	/** Sets or returns a boolean whether the labels are shown or hidden on active state */
	labels: bin;

	/** Sets or returns the navigation actions array */
	list: lst;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the current value of the BottomNavbar */
	value: num;

	/** Sets or returns the icon font-size */
	iconSize: num;

	/** Sets or returns the icon color */
	iconColor: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIBottomNavbar, text : str, index : num, pos : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds a callback handler when the BottomNavbar item is touch */
	setOnTouch(callback: (this: UIBottomNavbar, name : str, value : num, pos : obj) => void): void;

	/**
	 * Sets the navigation actions list
	 * @param navs The navigation actions array. See `navs` param above for format.
	 */
	setList(navs: lst): void;

	/** Returns the navigation actions list */
	getList(): lst;

	/**
	 * Sets navigation action to active by its name
	 * @param name `The name to be set to active`
	 */
	selectItem(name: str): void;

	/**
	 * Sets a botttom navigation action to active by its index
	 * @param index `The index of the bottom navigation action to be selected`
	 */
	selectItemByIndex(index: num): void;

	/** Clears the selected navigation action */
	clearSelection(): void;

	/**
	 * Updates a navigation action by its index
	 * @param index `The index to update`
	 * @param newName `The name of the navigation action`
	 * @param newIcon `Material icon`
	 */
	setItemByIndex(index: num, newName: str, newIcon: str): void;

	/**
	 * Updates the icon of the given index
	 * @param index `The index of the navigation action to update`
	 * @param newIcon `Material icon`
	 */
	setIcon(index: num, newIcon: str): void;

	/**
	 * Adds a navigation action
	 * @param name `The name of the navigation action`
	 * @param icon `Material icon`
	 * @param index `The index in which to add the action.`
	 */
	addItem(name: str, icon: str, index: num): void;

	/**
	 * Removes a navigation action by its given index
	 * @param index `The index of the navigation action to be remove`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * Removes a navigation action by its given name
	 * @param name `The name of the navigation action to be remove.`
	 */
	removeItemByName(name: str): void;

	/** Removes the first navigation action */
	shiftItem(): void;

	/** Removes the last navigation action */
	popItem(): void;

	/** Sets a callback function to execute when bottom navbar value changes */
	setOnChange(callback: (this: UIBottomNavbar, text : str, index : num) => void): void;

	/**
	 * Enable or disable a bottom navigation action
	 * @param index `The index of the navigation action.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * Get the enabled state of a navigation action
	 * @param index `The index of the navigation action.`
	 */
	getEnabled(index: num): bin;

	/**
	 * Enabled or disable a bottom navigation action by its name
	 * @param name `The name of the bottom navigation action.`
	 * @param value Values can be `true` or `false`
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * Get the enabled state of the bottom navigation action by its name
	 * @param name `The name of the bottom navigation action.`
	 */
	getEnabledByName(name: str): bin;

	/** Shows the text label of the bottom navigation action */
	showLabels(): void;

	/** Hides the text label of the bottom navigation action */
	hideLabels(): void;
}


declare class UIBottomSheet {

	/** Returns the layout of the bottomsheet */
	layout: obj;

	/** Sets or returns the left action icon */
	leftActionIcon: str;

	/** Sets or returns the right action icon */
	rightActionIcon: str;

	/** Sets or returns the bottomsheet title */
	title: str;

	/** Sets or returns the bottomsheet description */
	description: str;

	/** Show the bottom sheet */
	show(): void;

	/** Hide the bottom sheet */
	hide(): void;

	/** Add a callback handler when the left and right action is click when they are provided */
	setOnAction(cb: (this: UIBottomSheet, name : str, icon : str) => void): void;

	/** Add a callback handler on `open` event */
	setOnOpen(cb: (this: UIBottomSheet) => void): void;

	/** Add a callback handler on `close` event */
	setOnClose(cb: (this: UIBottomSheet) => void): void;
}


declare class UIButton {

	/** Sets or returns the button text */
	text: str;

	/** Sets or returns the badge content */
	badge: num;

	/** Sets or returns the color of the badge */
	badgeColor: str;

	/** Sets or returns the tooltip text */
	toolTip: str;

	/** Sets or returns the tooltip position */
	toolTipPosition: str;

	/** Sets or returns the variant of the button */
	variant: str;

	/** Sets or returns the theme color of the button */
	color: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size variant of the button */
	sizeVariant: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the material icon font use for the leading icon */
	icon: str;

	/** Sets or returns the accepted files for an upload button */
	acceptedFiles: str;

	/** Sets or returns the active state if button is `toggleable` */
	active: bin;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIButton, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the button
	 * @param left `The left padding in pixel.`
	 * @param top `The top padding in pixels`, ``
	 * @param right `The right padding in pixels.`
	 * @param bottom `The bottom padding in pixels.`
	 * @param mode Can be `px` `%`
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the button
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds a callback handler when the button is touch */
	setOnTouch(callback: (this: UIButton, pos : obj) => void): void;

	/** Adds a callback handler when the button is long touch */
	setOnLongTouch(callback: (this: UIButton, pos : obj) => void): void;

	/** Sets a callback on file select */
	setOnFileSelect(callback: (this: UIButton, files : lst) => void): void;

	/**
	 * Sets a tooltip when the button is hovered
	 * @param title `The text of the tooltip`
	 * @param pos Position of the tooltip. 
 Positions : `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTip(title: str, pos?: str): void;

	/**
	 * Sets a text-shadow to the button text
	 * @param radius `The radius in pixels`
	 * @param dx `The x-offset in pixels`
	 * @param dy `The y-offset in pixels`
	 * @param color The color in hexadecimal `#rrggbb`
	 */
	setTextShadow(radius: num, dx: num, dy: num, color: str): void;
}


declare class UIButtonGroup {

	/** Sets or returns the list items of the button group */
	list: lst;

	/** Sets or returns the variant */
	variant: str;

	/** Sets or returns the theme color of the button */
	color: str;

	/** Sets or returns the list of tooltip titles */
	toolTips: lst;

	/** Sets or returns the position of the tooltip */
	toolTipPosition: str;

	/** Sets or returns the size variant */
	sizeVariant: str;

	/** Sets or returns the orientation of the button group */
	orientation: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the indexes of the active button items */
	activeItems: lst;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIButtonGroup, text : str, index : num, pos : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds a callback handler when a button item is touch */
	setOnTouch(callback: (this: UIButtonGroup, text : str, index : num, active : bin, pos : obj) => void): void;

	/**
	 * Sets a new text for the item in the button group
	 * @param item `The new text`
	 * @param index `The index of the item.`
	 */
	setItemByIndex(item: str, index: num): void;

	/**
	 * Adds an additional item in the button group
	 * @param item `The additional item.`
	 */
	addItem(item: str): void;

	/**
	 * Removes an item in the button group by its index
	 * @param index `The index of the item to be remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * Removes an item in the button group by its name
	 * @param name `The name of the item to be remove.`
	 */
	removeItemByName(name: str): void;

	/** Removes the last item of the button group */
	popItem(): void;

	/** Removes the first item in the button group */
	shiftItem(): void;

	/**
	 * Adds a tooltips to the ButtonGroup items
	 * @param titles The titles for each item in the ButtonGroup.
	 * @param pos The positio of the tooltip. 
 Can be `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTips(titles: lst, pos?: str): void;

	/**
	 * Enable of disable the elevation of the button group
	 * @param enable Can be `true` or `false`
	 */
	enableElevation(enable: bin): void;

	/**
	 * Enable or disable a button item in the button group
	 * @param index `The index of the button item.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * Get the enabled state of the button item in the button group
	 * @param index `The index of the button item in the button group.`
	 */
	getEnabled(index: num): bin;

	/**
	 * Enable or disable a button item by its name
	 * @param name `The button text.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * Get the enabled state of button item in the button group
	 * @param name `The button text.`
	 */
	getEnabledByName(name: str): bin;
}


declare class UICameraView {

	/** Sets or returns the image height in pixels */
	imageHeight: num;

	/** Sets or returns the image width in pixels */
	width: num;

	/** Returns the capabilities of the camera */
	capabilities: obj;

	/** Sets or returns the video frame rate */
	frameRate: num;

	/** Sets or returns the camera focus mode */
	focusMode: str;

	/** Sets or returns the focus distance */
	focusDistance: num;

	/** Sets the preview image taken on capture */
	img: obj;

	/** Sets or returns a boolean value whether the sound is enabled or disabled */
	sound: bin;

	/** The camera source to be use */
	source: str;

	/** Sets or returns the camera iso */
	iso: num;

	/**
	 * Returns the pixel data of the image preview or a given portion of it
	 * @param format `Values are "rgba" array`, ` or "pngbase64" or "jpgbase64".`
	 * @param left `Starting pixel from the left.`
	 * @param top `Starting pixel from the top.`
	 * @param width `The width of the image portion in pixels.`
	 * @param height `The height of the image portion in pixels.`
	 */
	getPixelData(format: str, left: num, top: num, width: num, height: num): obj;

	/**
	 * Capture an image
	 * @param type `The image type. Values are "jpg" or "jpeg""`, ` "png"`, ` "webp"`, ` "gif". Default is "jpg".`
	 * @param format `The returned data format. Can be "base64"`, ` "bytes"(regular array)`, ` "uint8array"(typed array) or "arraybuffer". Default is "base64"`
	 */
	capture(type: str, format: str): obj;

	/**
	 * Record a video
	 * @param type `Video output encoding format. Values can be "mp4"`, ` "ogg" and "webm".Default is "mp4"`
	 * @param format `Return video data format. Values can be "blob"`, ` "base64"`, ` "bytes" (regular array)`, ` "objecturl"`, ` "arraybuffer"`, ` "uint8array" (typed array). Default is "base64"`
	 */
	record(type: str, format: str, cb: (this: UICameraView) => void): void;

	/**
	 * Sets the size of the image
	 * @param width The image width in pixels. See `capabilities` for minimum and maximum values.
	 * @param height The image height in pixels. See `capabilities` for minimum and maximum values.
	 */
	setPictureSize(width: num, height: num): void;

	/** Start streaming the camera */
	startPreview(): void;

	/** Update the camera preview */
	updatePreview(): void;

	/** Stop recording a video */
	stop(): void;

	/** Add a callback handler when the camera is ready */
	setOnReady(cb: (this: UICameraView) => void): void;

	/** Add a callback handler when an error occured */
	setOnError(cb: (this: UICameraView, error : str) => void): void;
}


declare class UICard {

	/** Sets or returns the card header title */
	headerTitle: str;

	/** Sets or returns the card header subheader or subtitle */
	headerSubtitle: str;

	/** Sets or returns the card header avatar */
	headerAvatar: str;

	/** Sets or returns the card header action */
	headerAction: str;

	/** Sets or returns the card header avatar color in css supported color format */
	headerAvatarColor: str;

	/** Sets or returns the card media */
	media: str;

	/** Sets or returns the title of the card content */
	bodyTitle: str;

	/** Sets or returns the text of the card content */
	bodyText: str;

	/** Sets or returns the list of card actions */
	actions: lst;

	/** Returns the div element of the card content */
	layout: obj;

	/** Sets or returns the type of actions in the card */
	actionType: obj;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Sets or returns the elevation of the card */
	elevation: num;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UICard, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/**
	 * Add header items to the card
	 * @param title `The title of the card.`
	 * @param subtitle `The subheader of the card.`
	 * @param avatar `Can be a char or a path to an image.`
	 * @param action `Material icon font.`
	 */
	addHeaderItems(title: str, subtitle: str, avatar: str, action: str): void;

	/**
	 * Add card body items
	 * @param title `The title of the content of the card.`
	 * @param text `The description of the card.`
	 */
	addBodyItems(title: str, text: str): void;

	/** Add a callback function to be called when a card action is click */
	setOnAction(cb: (this: UICard, icon : str, index : num) => void): void;

	/** Add a callback function to be called when the header action icon is click */
	setOnHeaderAction(cb: (this: UICard) => void): void;
}


declare class UICheckbox {

	/** Sets or returns the text position */
	textPosition: str;

	/** Sets or returns the material icon font for check stated */
	checkIcon: str;

	/** Sets or returns the material icon font for uncheck state */
	uncheckIcon: str;

	/** Sets or returns the checked state of the checkbox */
	value: bin;

	/** Returns whether the Checkbox is enabled or disabled */
	enabled: bin;

	/** Sets or returns the theme color of the checkbox when checked */
	color: str;

	/** Sets or returns the checkbox text */
	text: str;

	/** Enabled or disable the checkbox component */
	disable: bin;

	/** Sets or returns the size of the icon */
	iconSize: num;

	/** Sets or returns the color of the checkbox icon */
	iconColor: str;

	/** Sets or returns the space between the checkbox icon and the label text */
	spaceBetween: num;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UICheckbox, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds an event handler when the checkbox is touch */
	setOnTouch(callback: (this: UICheckbox, check : bin, pos : obj) => void): void;

	/**
	 * Sets a custom icon for the checkbox
	 * @param checked `Material icon for checked state`
	 * @param unchecked `Material icon for unchecked state`
	 */
	setIcon(checked: str, unchecked: str): void;

	/** Returns the icons of the form { checkIcon, uncheckedIcon } */
	getIcon(): obj;
}


declare class UICheckboxGroup {

	/** Sets or returns the list items */
	list: lst;

	/** Sets or returns the label text */
	label: str;

	/** Sets or returns the material icon font for check stated */
	checkIcon: str;

	/** Sets or returns the material icon font for uncheck state */
	uncheckIcon: str;

	/** Sets or returns the size variant of the Checkbox */
	sizeVariant: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the depth of the container */
	elevation: str;

	/** Sets or returns the color of the checkbox icon */
	iconColor: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the size of the checkbox icon */
	iconSize: num;

	/** Sets or returns the space between the checkbox icon and the text */
	spaceBetween: num;

	/** Sets or returns the theme color use for the checkbox */
	color: str;

	/** Sets or returns whether the container is outlined or elevated */
	outlined: bin;

	/** Sets or returns the padding of each list item */
	itemPadding: lst;

	/** Sets or returns the orientation of the list */
	orientation: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UICheckboxGroup, label : str, index : num, pos : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the checkbox group
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Sets a callback function when the checkbox item is touch */
	setOnTouch(callback: (this: UICheckboxGroup, value : bin, text : str, index : num, pos : obj) => void): void;

	/** Adds a callback function to be called whent there is a change of value */
	setOnChange(callback: (this: UICheckboxGroup, values : lst) => void): void;

	/**
	 * Sets the checked icon and unchecked icon
	 * @param checked `Material icon font`
	 * @param unchecked `Material icon font`
	 */
	setIcon(checked: str, unchecked: str): void;

	/** Get the checked and unchecked icon of the checkbox group */
	getIcon(): obj;

	/**
	 * Checked or unchecked a given item by its index
	 * @param item `The item or index of the item.`
	 * @param bool The item value. Can be `true` or `false`.
	 */
	setCheckedByIndex(item: num, bool: bin): void;

	/**
	 * Checked or unchecked a given item by its name
	 * @param name `The item or index of the item.`
	 * @param bool The item value. Can be `true` or `false`.
	 */
	setCheckedByName(name: str, bool: bin): void;

	/** Get the list of all checked items */
	getCheckedItems(): str;

	/**
	 * Get the current value of the item in the list
	 * @param index `The index of the corresponding item.`
	 */
	getCheckedByIndex(index: num): bin;

	/**
	 * Get the current value of the item in the list
	 * @param name `The index of the corresponding item.`
	 */
	getCheckedByName(name: str): bin;

	/**
	 * Sets a new text to a given item by its index
	 * @param index `The index of the item.`
	 * @param val `The new text to replace.`
	 */
	setTextByIndex(index: num, val: str): void;

	/**
	 * Sets a new text to a given item by its name
	 * @param name `The name of the item`
	 * @param val `The new text to replace`
	 */
	setTextByName(name: str, val: str): void;

	/**
	 * Get the text of the item in a given index
	 * @param index `The index of the list`
	 */
	getText(index: num): str;

	/**
	 * Sets a new list of item in the checkbox group
	 * @param list The new list items for the checkbox group.
	 */
	setList(list: lst): void;

	/**
	 * Enable or disable an item in the checkbox group
	 * @param index `The index of the checkbox item.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * Get the enabled state of a checkbox item
	 * @param index `The index of the checkbox item.`
	 */
	getEnabled(index: num): bin;

	/**
	 * Enable or disable a checkbox item by its name
	 * @param name `The name of the checkbox item.`
	 * @param value Values can be `true` or `false`
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * Get the enabled state of a checkbox item by its name
	 * @param name `The checkbox item.`
	 */
	getEnabledByName(name: str): bin;

	/**
	 * Add or insert an item in the checkbox group
	 * @param text `The text label for the checkbox.`
	 * @param index `The index in which to insert the item.`
	 */
	addItem(text: str, index: num): void;

	/**
	 * Removes an item in the checkbox group by its corresponding index
	 * @param index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * Removes an item in the checkbox group by its title name
	 * @param title `The title text of the corresponding checkbox item.`
	 */
	removeItemByName(title: str): void;

	/** Removes the last item in the checkbox group */
	popItem(): void;

	/** Removes the first item in the checkbox group */
	shiftItem(): void;

	/**
	 * Sets the padding of the checkbox item
	 * @param left `Left padding of the checkbox item.`
	 * @param top `Top padding of the checkbox item.`
	 * @param right `Right padding of the checkbox item.`
	 * @param bottom `Bottom padding of the checkbox item.`
	 * @param mode Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left: num, top: num, right: num, bottom: num, mode: str): void;
}


declare class UIChip {

	/** Sets or returns the text of the chip */
	text: str;

	/** Sets or returns the material icon font if icon is provided */
	icon: str;

	/** Sets or returns the avatar */
	avatar: str;

	/** Sets or returns the delete icon */
	deleteIcon: str;

	/** Sets or returns the size variant */
	sizeVariant: str;

	/** Returns whether the chip is enabled or disabled */
	enabled: bin;

	/** Sets or returns the variant of the chip */
	variant: str;

	/** Sets or returns the theme color of the chip */
	color: str;

	/** Sets or returns the icon color in hexadecimal format */
	iconColor: str;

	/** Sets or returns the font-size of the icon in css font-size format */
	iconSize: num;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIChip, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the chip
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds a callback handler when the chip is touch */
	setOnTouch(callback: (this: UIChip, pos : obj) => void): void;

	/**
	 * Sets the chip to clickable
	 * @param touchable Can be `true` or `false`
	 */
	setTouchable(touchable: bin): void;

	/** Sets a callback function when the chip is deleted */
	setOnDelete(callback: (this: UIChip) => void): void;
}


declare class UIDialog {

	/** Sets or returns the dialog text */
	text: str;

	/** Sets or returns the dialog title text */
	titleText: str;

	/** Sets or returns the title text color in hexadecimal format */
	titleColor: str;

	/** Returns the layout of the dialog where you can add custom controls */
	layout: obj;

	/** Adds a callback function when the action buttons are click */
	setOnAction(callback: (this: UIDialog, text : str, index : num) => void): void;

	/** Adds a callback function when the dialog is close */
	setOnClose(callback: (this: UIDialog) => void): void;

	/** Show the dialog */
	show(): void;

	/** Hide the dialog */
	hide(): void;
}


declare class UIDivider {

	/** Sets or returns the color in hexadecimal format */
	color: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIDivider, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIDrawer {

	/** Sets or returns the `disabled` state of the drawer */
	disabled: bin;

	/** Sets or returns the width of the drawer as a fraction of the screen viewport relative to its anchor position `[0-1]` */
	width: num;

	/** Sets or returns the anchor position of the drawer */
	anchor: str;

	/** Sets or returns the width of the swipeable area of the Drawer */
	swipeAreaWidth: num;

	/**
	 * Adds a layout into the drawer
	 * @param lay Layout component.
	 */
	addLayout(lay: obj): void;

	/**
	 * Disable swipe to open feature of the drawer
	 * @param value Values can be `true` or `false`.
	 */
	disableSwipeToOpen(value: bin): void;

	/**
	 * Disable the backdrop transition
	 * @param value Values can be `true` or `false`.
	 */
	disableBackdropTransition(value: bin): void;

	/**
	 * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit to promote accidental discovery of the swipe gesture
	 * @param value Values can be `true` or `false`.
	 */
	disableDiscovery(value: bin): void;

	/** Adds a callback function when the drawer is opened via swiping from the anchor position */
	setOnOpen(callback: (this: UIDrawer) => void): void;

	/** Adds a callback function when the drawer is closed */
	setOnClose(callback: (this: UIDrawer) => void): void;

	/**
	 * Open the drawer dynamically
	 * @param anchor Optional. The anchor position. Can be `left`,  `top`,  `right`,  `bottom`. Default is `left`.
	 */
	show(anchor?: str): void;

	/** Close the drawer dynamically */
	hide(): void;
}


declare class UIDropdown {

	/** Sets or returns the dropdown list */
	list: lst;

	/** Sets or returns the value of the Dropdown */
	value: str;

	/** Sets or returns the variant of the dropdown button */
	variant: str;

	/** Sets or returns the size variant of the dropdown button */
	sizeVariant: str;

	/** Sets or returns the theme color */
	color: str;

	/** Sets or returns the orientation of the dropdown buttongroup */
	orientation: str;

	/** Sets or returns the default label of the dropdown */
	label: str;

	/** Sets or returns the dropdown material icon font */
	icon: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIDropdown, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the dropdown
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds a callback handler when the component is touch */
	setOnTouch(callback: (this: UIDropdown, text : str, index : num, pos : obj) => void): void;

	/** Adds a callback function on change event */
	setOnChange(callback: (this: UIDropdown, text : str, index : num) => void): void;

	/** Adds a callback function on close event */
	setOnOpen(callback: (this: UIDropdown) => void): void;

	/** Adds a callback function on close event */
	setOnClose(callback: (this: UIDropdown) => void): void;

	/**
	 * Sets the list items on the dropdown
	 * @param val The list of new items.
	 */
	setList(val: lst): void;

	/**
	 * Updates the text of the corresponding item in the dropdown
	 * @param item `The new item text.`
	 * @param index `The index of the item to update.`
	 */
	setItemByIndex(item: str, index: num): void;

	/**
	 * Returns a dropdown item by its corresponding index
	 * @param index `The index of corresponding item.`
	 */
	getItemByIndex(index: num): str;

	/**
	 * Enable or disable an item in the dropdown
	 * @param index `The index of the item.`
	 * @param value Values can be `true` `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * Get the enabled state of an item in the dropdown menu
	 * @param index `The index of the item.`
	 */
	getEnabled(index: num): bin;

	/**
	 * Enable or disable an item in the dropdown
	 * @param name `The name of the item.`
	 * @param value Values can be `true` `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * Get the enabled state of a menu item by its name
	 * @param name `The name of the corresponding menu item.`
	 */
	getEnabledByName(name: str): bin;

	/**
	 * Add or insert a menu item in the dropdown list
	 * @param name `The name of the menu.`
	 * @param index `The index in which to insert the menu item.`
	 */
	addItem(name: str, index: num): void;

	/**
	 * Removes a menu item in the dropdown by its index
	 * @param index `The index of the menu item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * Removes a menu item in the dropdown by its name
	 * @param name `The name of the menu item.`
	 */
	removeItemByName(name: str): void;

	/** Removes the first item in the dropdown menu */
	shiftItem(): void;

	/** Removes the last item in the dropdown menu */
	popItem(): void;
}


declare class UIFloatingActionButton {

	/** Sets or returns the material icon font */
	icon: str;

	/** Sets or returns the text for extended FAB */
	text: str;

	/** Sets or returns the theme color for the FAB */
	color: str;

	/** Sets or returns the variant use for the FAB */
	variant: str;

	/** Sets or returns the size variant of the FAB */
	sizeVariant: str;

	/** Sets or returns the size of the icon */
	iconSize: num;

	/** Sets or returns the disabled state of the ripple effect */
	disabledRipple: bin;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIFloatingActionButton, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the button
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl: num, tr: num, bl: num, br: num, mode: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds a callback handler when the FAB is touch */
	setOnTouch(callback: (this: UIFloatingActionButton, pos : obj) => void): void;
}


declare class UIImage {

	/** Returns the pixel data of the image */
	pixelData: lst;

	/** Sets or returns the fill color used on close paths such as square, circle, rectangle or arcs */
	fillColor: str;

	/** Sets or returns the path or url of the image file */
	image: str;

	/** Sets or returns the current line thickness */
	lineWidth: num;

	/** Sets or returns the style of the end caps for a line */
	lineCap: str;

	/** Sets or returns the type of corner created when two lines meet */
	lineJoin: str;

	/** Sets or returns the maximum miter length */
	miterLimit: num;

	/** Sets or returns the current color of the line or stroke */
	strokeColor: str;

	/** Sets or returns the background color of the canvas */
	fill: str;

	/** Sets or returns the text-style for drawing in the canvas */
	textStyle: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the material icon for error placeholder image */
	errorIcon: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIImage, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/**
	 * Enable or disbale the context menu or the right click menus
	 * @param value Value. Can be `true` `false`
	 */
	enableContextMenu(value: bin): void;

	/**
	 * Get the color of a single pixel in the image
	 * @param x `The x-coordinate of the pixel from the left.`
	 * @param y `The y-coordinate of the pixel from the top.`
	 * @param format Pass `"hex"` to return color as hexadecimal formart `"#rrggbb"` or `"hexa"` to include include alpha `"#aarrggbb"` . Pass `"rgb"` to return color as `rgb` format `"rgb(r,  g,  b)"` or pass `"rgba"` for `"rgba(r,  g,  b,  a)"`.
	 */
	getPixelColor(x: num, y: num, format: str): lst;

	/**
	 * Sets the color of a specific pixel in the canvas
	 * @param x `The x-coordinate of the pixel.`
	 * @param y `The y-coordinate of the pixel.`
	 * @param color A hexadecimal color format of the form `"#rrggbb"` or a comma separated rgb color of the form `"r, g, b"`.
	 */
	setPixelColor(x: num, y: num, color: str): void;

	/**
	 * Returns the pixel data of the image
	 * @param x `The x-coordinate where to start getting image data.`
	 * @param y `The y-coordinate where to start getting image data.`
	 * @param width `The width of the image data.`
	 * @param height `The height of the image data.`
	 */
	getPixelData(x: num, y: num, width: num, height: num): obj;

	/**
	 * Set the pixel data of the canvas
	 * @param base64 Base64 encoded string of the image or the `ImageData` object of the canvas.
	 * @param x `The x-coordinate of the top-left corner.`
	 * @param y `The y-coordinate of the top-left corner.`
	 * @param width `The width of the new image data.`
	 * @param height `The height of the new image data.`
	 */
	setPixelData(base64: str, x: num, y: num, width: num, height: num): void;

	/**
	 * Sets a single line font styling for rendering text on canvas
	 * @param family `The font-family for the text.`
	 * @param size `The text-size for the text.`
	 * @param style Value can be `normal` or `italic`, 
	 * @param weight Values can be `normal` or `bold`.
	 */
	setFont(family: str, size: num, style: str, weight: str): void;

	/**
	 * Draws a line between two points in the canvas
	 * @param x1 `The x-coordinate of the starting point in pixels.`
	 * @param y1 `The y-coordinate of the starting point in pixels`
	 * @param x2 `The x-coordinate of the second point in pixels.`
	 * @param y2 `The y-coordinate of the second point in pixels.`
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stroke thickness.`
	 */
	drawLine(x1: num, y1: num, x2: num, y2: num, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * Draws a circle in the canvas
	 * @param x `The x-coordinate of the center of the circle in pixels.`
	 * @param y `The y-coordinate of the center of the circle in pixels.`
	 * @param radius `The radius of the circle in pixels.`
	 * @param fillColor `A hexadecimal color.`
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stoke thickness.`
	 */
	drawCircle(x: num, y: num, radius: num, fillColor?: str, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * Draws a square into the canvas
	 * @param x `The position from the left of the top-left corner of the square in pixels.`
	 * @param y `The distance from the top of the top-left corner of the square in pixels.`
	 * @param width `The width of the square in pixels.`
	 * @param fillColor `A hexadecimal color.`
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stroke thickness in pixels.`
	 */
	drawSquare(x: num, y: num, width: num, fillColor?: str, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * Draws a rectangle into the canvas
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
	 * Draws an arc in the canvas
	 * @param x `The x-coordinate of the center of the arc in pixels.`
	 * @param y `The y-coordinate of the center of the arc in pixels.`
	 * @param radius `The radius of the arc in pixels.`
	 * @param start `The starting angle in degress`
	 * @param end `The angle in degress in which the arc will stop.`
	 * @param fillColor `A hexadecimal color.`
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stroke thickness.`
	 * @param type The type of arc. Can be `filled` or `segment`.
	 */
	drawArc(x: num, y: num, radius: num, start: num, end: num, fillColor?: str, strokeColor?: str, strokeWidth?: num, type?: str): void;

	/**
	 * Draws a polyline on the canvas by passing an array of points
	 * @param points An array of coordinates. Each element on this array is an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point, or an object of the form `{x, y}`.
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stroke thickness.`
	 */
	drawPolyline(points: lst_obj, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * Draws a polygon on the canvas by passing an array of points
	 * @param points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point, or an object of the form `{x, y}`.
	 * @param fillColor `A hexadecimal color.`
	 * @param strokeColor `A hexadecimal color.`
	 * @param strokeWidth `The stroke thickness.`
	 */
	drawPolygon(points: lst_obj, fillColor?: str, strokeColor?: str, strokeWidth?: num): void;

	/**
	 * Draws a single pixel point in a specified coordinate
	 * @param x `The x-coordinate in pixels.`
	 * @param y `The y-coordinate in pixels.`
	 * @param size `The width of point in pixels.`
	 * @param color `A hexadecimal color.`
	 */
	drawPoint(x: num, y: num, size: num, color?: str): void;

	/**
	 * Add a text in the canvas image
	 * @param text `The text to be drawn.`
	 * @param x `Distance from the left in pixels.`
	 * @param y `Distance from the top in pixels.`
	 * @param fillColor Text color in hexadecimal format `#rrggbb`.
	 * @param strokeColor Text border color in hexadecimal format `#rrggbb`.
	 * @param strokeWidth `The border width in pixels.`
	 */
	drawText(text: str, x: num, y: num, fillColor: str, strokeColor: str, strokeWidth: num): void;

	/**
	 * Draws an image to the canvas
	 * @param img `Path to image file.`
	 * @param x `The distance from the left of the top-left corner of the image in pixels.`
	 * @param y `The distance from the top of the top-left corner of the image in pixels.`
	 * @param width `If provided`, ` the image will be shrink or stretch to fill this width in pixels.`
	 * @param height `If provided`, ` the height of the image will be shrink or stretch to fill this height in pixels.`
	 */
	drawImage(img: str, x?: num, y?: num, width?: num, height?: num): void;

	/** Clears the drawings by filling the whole canvas with white background color */
	clear(): void;

	/**
	 * Translate the origin of the canvas at a new coordinate with the given angle of rotation
	 * @param x `The new x-coordinate of the origin.`
	 * @param y `The new y-coordinate of the origin.`
	 * @param angle `The angle of rotation in degrees.`
	 */
	translateOrigin(x: num, y: num, angle: num): void;

	/**
	 * Rotate the canvas at a given angle and pivot point
	 * @param angle `The angle of rotation in degrees.`
	 * @param x `An optional x-coordinate of the pivot.`
	 * @param y `An optional y-coordinate of the pivot.`
	 */
	rotate(angle: num, x: num, y: num): void;

	/**
	 * Measure the text metrics with the current settings of the canvas context
	 * @param text `The text to measure.`
	 */
	measureText(text: str): obj;

	/** Add a callback function on touch down event */
	setOnTouchDown(callback: (this: UIImage, pos : obj) => void): void;

	/** Add a callback function on touch up event */
	setOnTouchUp(callback: (this: UIImage, pos : obj) => void): void;

	/** Sets a callback function when the image component is touch */
	setOnTouch(callback: (this: UIImage, pos : obj) => void): void;

	/** Sets a callback function on load event */
	setOnLoad(callback: (this: UIImage) => void): void;

	/** Sets a callback function when the a mouse move event is triggered */
	setOnTouchMove(callback: (this: UIImage, pos : obj) => void): void;

	/** Adds a callback handler for a long touch event */
	setOnLongTouch(callback: (this: UIImage, pos : obj) => void): void;
}


declare class UILayout {

	/** Sets or returns the orientation of the controls in a Linear Layout */
	orientation: str;

	/** Sets or returns the horizontal alignment of the control in a Linear Layout */
	alignment: str;

	/** Sets or returns the vertical alignment of the controls in a Linear Layout */
	verticalAlignment: str;

	/** Sets or returns the spacing of the child control in a Linear Layout */
	childSpacing: str;

	/** Sets or returns the index of the current slide */
	currentSlide: num;

	/** Sets or returns the margins of child components */
	childMargins: lst;

	/** Returns all the children added to this layout */
	children: lst;

	/** Sets or returns the elevation of a card layout */
	elevation: num;

	/** Sets or returns the card variant */
	variant: str;

	/** Sets or returns the layout type */
	layoutType: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UILayout, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/**
	 * Sets a default margins for the children of the layout component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension, 
`rem`
	 */
	setChildMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Transition to the given index
	 * @param index `Index of a given layout.`
	 */
	goto(index: num): void;

	/** Transition to the next slide */
	next(): void;

	/** Transition to the previous slide */
	previous(): void;

	/** Adds a callback function to be called when slide event is triggered */
	setOnSlide(callback: (this: UILayout, component : obj, index : num) => void): void;

	/**
	 * Returns the index of the child from the layout children stack in order
	 * @param child The child component of the layout.
	 */
	getChildOrder(child: obj): num;

	/**
	 * Move the child to the front
	 * @param child The child object of the layout.
	 */
	childToFront(child: obj): void;

	/**
	 * Check whether a component is a child of this layout
	 * @param child The child component to check.
	 */
	hasChild(child: obj): bin;

	/**
	 * Removes a given child from this layout
	 * @param child The child control to be remove.
	 */
	removeChild(child: obj): void;

	/** Adds a callback handler when the layout is touch */
	setOnTouch(callback: (this: UILayout, pos : obj) => void): void;

	/** Adds a callback handler when the layout is long touch */
	setOnLongTouch(callback: (this: UILayout, pos : obj) => void): void;

	/** Clear the content of the layout */
	clear(): void;
}


declare class UIList {

	/** Sets or returns the size of the avatar */
	avatarSize: str;

	/** Sets or returns the variant of the avatar */
	avatarVariant: str;

	/** Sets or returns the theme color of the checkbox when `Selectable` option is enabled */
	checkboxColor: str;

	/** Sets or returns the label text */
	label: str;

	/** Sets or returns a boolean whether the list is selectable or not */
	selectable: bin;

	/** Sets or returns the depth of the list container */
	elevation: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** Sets or returns the size of the title text */
	textSize1: num;

	/** Sets or returns the size of the body text */
	textSize2: num;

	/** Sets or returns the size of the icon text */
	iconSize: num;

	/** Sets or returns the color of the title text in hexadecimal format */
	textColor1: str;

	/** Sets or returns the color of the body text in hexadecimal format */
	textColor2: str;

	/** Sets or returns the icon color in a hexadecimal format */
	iconColor: str;

	/** Sets or returns whether the container is outlined or elevated */
	outlined: bin;

	/** Sets or returns the padding of each list item */
	itemPadding: lst;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIList, title : str, body : str, icon : str, action : str, index : num, pos : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the list container
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/**
	 * Adds an item in the list
	 * @param title `The title of the item.`
	 * @param body `The text description of the item.`
	 * @param image `A material icon or image file path.`
	 * @param action `A text for the action or material icon.`
	 * @param index `The index in which to add or insert the item.`
	 */
	addItem(title: str, body?: str, image?: str, action?: str, index?: num): void;

	/** Adds a callback function when the list item is click */
	setOnTouch(callback: (this: UIList, title : str, body : str, icon : str, action : str, index : num, pos : obj) => void): void;

	/** Adds a callback handler for a long touch event */
	setOnLongTouch(callback: (this: UIList, title : str, body : str, icon : str, action : str, index : num, pos : obj) => void): void;

	/** Sets a callback handler when an item in the list is selected */
	setOnSelect(callback: (this: UIList, title : str, index : num, checked : bin) => void): void;

	/** Sets a callback handler when an action icon is click */
	setOnAction(callback: (this: UIList, icon : str, index : num) => void): void;

	/** Returns an array of indexes of the selected items */
	getSelectedItems(): lst;

	/** Returns an array of titles of selected items */
	getSelectedTitles(): lst;

	/**
	 * Updtes the list
	 * @param list A comma separated list of items or an array. See the list format above.
	 */
	setList(list: lst): void;

	/**
	 * Make the list selectable or not
	 * @param selectable `If true`, ` make the list selectable. Otherwise`, ` list is not selectable`
	 */
	setSelectable(selectable: bin): void;

	/**
	 * Change the content of an item in a list
	 * @param index `The index of the item to update`
	 * @param newTitle `The new title of the item`
	 * @param newBody `The new body text`
	 * @param newIcon `The new icon or image`
	 * @param newAction `The new action icon or action text`
	 */
	setItemByIndex(index: num, newTitle: str, newBody?: str, newIcon?: str, newAction?: str): void;

	/**
	 * Get the item in a list by its corresponding index
	 * @param index `Returns the corresponding list item.`
	 * @param json Pass `true` to return the corresponding list item as an object of the form `{title, body, image, action}`
	 */
	getItemByIndex(index: num, json: bin): obj;

	/**
	 * Updates an item in the list
	 * @param title `The title of the list item to update.`
	 * @param newTitle `The new title of the list item.`
	 * @param newBody `The new description of the list item.`
	 * @param newIcon `A material icon font or image file path.`
	 * @param newAction `A material icon font for the action icon button.`
	 */
	setItem(title: str, newTitle: str, newBody?: str, newIcon?: str, newAction?: str): void;

	/**
	 * Get the item in the list by its corresponding title
	 * @param title `Title of the list item.`
	 * @param json Pass `true` to return the corresponding list item as an object of the form `{title, body, image, action}`
	 */
	getItem(title: str, json: bin): obj;

	/**
	 * Removes an element from the list
	 * @param index `The index of the item to remove`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * Removes an item in the list by its title
	 * @param name `The title of the list to remove.`
	 */
	removeItemByName(name: str): void;

	/** Removes the first item the list */
	shiftItem(): void;

	/** Removes the last item in the list */
	popItem(): void;

	/** Clears all selection in the list if the list is selectable */
	deselectAll(): void;

	/**
	 * Selects an item in the list by its index and marked the checkbox
	 * @param index `The index to be selected.`
	 */
	selectItemByIndex(index: num): void;

	/**
	 * Sets a new title text to a corresponding item in a list
	 * @param index `The index of the corresponding list item.`
	 * @param title `The new title text.`
	 */
	setTitleText(index: num, title: str): void;

	/**
	 * Sets a new secondary text to a corresponding item in a list
	 * @param index `The index of the list whose secondary text to be changed.`
	 * @param newText `The new secondary text.`
	 */
	setBodyText(index: num, newText: str): void;

	/**
	 * Updates an icon in a list by its corresponding index
	 * @param index `The index of the corresponding list item.`
	 * @param icon `Material icon font.`
	 */
	setIcon(index: num, icon: str): void;

	/**
	 * Sets the padding of the list item
	 * @param left `Left padding of the list item.`
	 * @param top `Top padding of the list item.`
	 * @param right `Right padding of the list item.`
	 * @param bottom `Bottom padding of the list item.`
	 * @param mode Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;
}


declare class UIMenu {

	/** Sets or returns the items in the menu */
	list: lst;

	/** Sets or returns the padding of each menu item */
	itemPadding: lst;

	/** Adds a callback handler when the menu is touch */
	setOnTouch(callback: (this: UIMenu, item : str, icon : str, index : num) => void): void;

	/**
	 * Show the menu pop-up
	 * @param parent The component where to anchor the menu. It can be a `Button` or an `Image`.
	 */
	show(parent: obj): void;

	/** Hide the pop-up menu */
	hide(): void;

	/**
	 * Updates the list items on the menu
	 * @param list The list items to show.
	 */
	setList(list: lst): void;

	/**
	 * Adds an item in the menu list
	 * @param name `The new item to be added.`
	 * @param index `The index at which to add the item.`
	 */
	addItem(name: str, index: num): void;

	/**
	 * Removes an item in the menu items list by its index
	 * @param index `The index of the item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * Removes an item in the menu items list by its name
	 * @param name `The name of the item to remove.`
	 */
	removeItemByName(name: str): void;

	/** Removes the last item */
	popItem(): void;

	/** Removes the first item */
	shiftItem(): void;

	/**
	 * Set the position of the menu from the left and top of the anchor component
	 * @param left `The position of the menu from the left of the parent or anchor component. The unit is in pixels.`
	 * @param top `The position of the menu from the top of the parent or anchor component. The unit is in pixels.`
	 */
	setPosition(left: num, top: num): void;

	/**
	 * Sets the autofocus value of the menu items
	 * @param bool Value can be `true` or `false`
	 */
	setAutoFocus(bool: bin): void;

	/**
	 * Enable or disable an item in the menu popup
	 * @param index `The index of the item.`
	 * @param value Values can be `true` or `false`. `false` to disable.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * Get the enabled state of an item the menu popup
	 * @param index `The index of the item.`
	 */
	getEnabled(index: num): bin;

	/**
	 * Enable or disable an item in the menu popup by its name
	 * @param name `The name of the corresping item the menu.`
	 * @param value Values can be `true` or `false`. `false` to disable an item.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * Get the enabled state of an item in the menu popup
	 * @param name `The name of the item.`
	 */
	getEnabledByName(name: str): bin;

	/**
	 * Sets the padding of the menu item
	 * @param left `Left padding of the menu item.`
	 * @param top `Top padding of the menu item.`
	 * @param right `Right padding of the menu item.`
	 * @param bottom `Bottom padding of the menu item.`
	 * @param mode Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left: num, top: num, right: num, bottom: num, mode: str): void;
}


declare class UIProgress {

	/** Sets or returns the value of the progress control */
	value: num;

	/** Returns the type of the control */
	type: str;

	/** Sets or returns the variant of the progress component */
	variant: str;

	/** Sets or returns the theme color */
	color: str;

	/** Sets or returns the size of the circular progress control */
	circleSize: num;

	/** Sets or returns the thickness of the circular stroke */
	thickness: num;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIProgress, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;
}


declare class UIRadioGroup {

	/** Sets or returns the value of the RadioGroup Component as an index of the selected item */
	value: num;

	/** Sets or returns the label text of the RadioGroup Component */
	label: str;

	/** Sets or returns the list array */
	list: lst;

	/** Sets or returns the size of the radio button */
	radioSize: str;

	/** Sets or returns the theme color of the Radio Component */
	color: str;

	/** Sets or returns the depth of the RadioGroup container */
	elevation: num;

	/** Sets or returns the icon color in hexadecimal format */
	iconColor: str;

	/** Sets or returns the space between the radio button and the text */
	spaceBetween: num;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the position of the icon */
	iconPosition: str;

	/** Sets or returns the position of the label text */
	textPosition: str;

	/** Sets or returns whether the container is outlined or elevated */
	outlined: bin;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the padding of each radio item */
	itemPadding: lst;

	/** Sets or returns the orientation of the list */
	orientation: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIRadioGroup, label : str, index : num, pos : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the radiogroup container
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Call a function when the value of the radio group has changed */
	setOnChange(callback: (this: UIRadioGroup, text : str, index : num) => void): void;

	/** Adds a callback function when an item is click */
	setOnTouch(callback: (this: UIRadioGroup, checked : bin, label : str, index : num, pos : obj) => void): void;

	/**
	 * Sets the the radiogroup list items
	 * @param val `A comma separated items`
	 */
	setList(val: str): void;

	/**
	 * Sets an item in the radiogroup component
	 * @param item `The new item name to be displayed`
	 * @param index `The index to of the item to be updated`
	 */
	setItemByIndex(item: str, index: num): void;

	/**
	 * Updates an item in the list by its corresponding name
	 * @param name `The name of the item.`
	 * @param text `The new text to replaced the name of the item.`
	 */
	setItemByName(name: str, text: str): void;

	/**
	 * Adds an item in the radio group list
	 * @param name `The new item to be added.`
	 * @param index `The index in which to add the item.`
	 */
	addItem(name: str, index: num): void;

	/**
	 * Removes an item in the radiogroup items list by its index
	 * @param index `The index of the item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * Removes an item in the radiogroup items list by its name
	 * @param name `The name of the item to remove.`
	 */
	removeItemByName(name: str): void;

	/** Removes the last item in the radiogroup */
	popItem(): void;

	/** Removes the first item in the radiogroup */
	shiftItem(): void;

	/**
	 * Enable or disable the radiogroup or an item in the radiogroup
	 * @param index `The index of the item.`
	 * @param value Values can be `true` or `false`. If `false`,  the item will be disabled.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * Get the enabled state of an item in the radio group
	 * @param index `The index of the corresponding item.`
	 */
	getEnabled(index: num): bin;

	/**
	 * Enable or disable a radiogroup item by its name
	 * @param name `The radiogroup text.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * Get the enabled state of a radiogroup item by its name
	 * @param name `The radiogroup text.`
	 */
	getEnabledByName(name: str): bin;

	/**
	 * Sets the padding of the radio item
	 * @param left `Left padding of the radio item.`
	 * @param top `Top padding of the radio item.`
	 * @param right `Right padding of the radio item.`
	 * @param bottom `Bottom padding of the radio item.`
	 * @param mode Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left: num, top: num, right: num, bottom: num, mode: str): void;
}


declare class UISelect {

	/** Sets or returns the label text */
	label: str;

	/** Sets or returns the list items */
	list: lst;

	/** Sets or returns a boolean value whether the component is enabled or disabled */
	enabled: bin;

	/** Sets or returns the value of the Select Component */
	value: str;

	/** Sets or returns the variant of the Select Component */
	variant: str;

	/** Sets or returns the size variant of the Select Component */
	sizeVariant: str;

	/** Sets or returns the color of the icon in hexadecimal format `#rrggbb` */
	iconColor: str;

	/** Sets or returns the color of the label text in hexadecimal format `#rrggbb` */
	labelColor: str;

	/** Sets or returns the size of the label */
	labelSize: num;

	/** Sets or returns the color of the popup in hexadecimal format */
	popupColor: str;

	/** Sets or returns the maximum height of the popup container */
	maxHeight: num;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UISelect, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds a callback handler when an item is touch */
	setOnTouch(callback: (this: UISelect, text : str, index : num, pos : obj) => void): void;

	/** Sets a callback function when the value changes */
	setOnChange(callback: (this: UISelect, value : str, index : num) => void): void;

	/** Sets a callback function when the menu is open */
	setOnOpen(callback: (this: UISelect) => void): void;

	/** Sets a callback function when the menu dialog is close */
	setOnClose(callback: (this: UISelect, value : str) => void): void;

	/**
	 * Adds an item on the select component options list
	 * @param item `A new item to be added.`
	 * @param index `The index in which to add the item.`
	 */
	addItem(item: str, index: num): void;

	/**
	 * Removes an item in the select component item list by its index
	 * @param index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * Removes an item in the select component item list by its name
	 * @param name `The name of the item to remove.`
	 */
	removeItemByName(name: str): void;

	/** Removes an item at the beginning of the list items */
	shifItem(): void;

	/** Removes an item at the end of the list items */
	popItem(): void;

	/**
	 * Returns the item at a given index
	 * @param index `The index of the item.`
	 */
	getItem(index: num): obj;

	/**
	 * Sets the list items in the menu popup
	 * @param items A comma separated string or array of options
	 */
	setList(items: lst): void;

	/**
	 * Enable or disable the select component
	 * @param index Can be `true` or `false`. You can also pass a `Boolean` to enable or disable the Select component.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * Get the enabled state of an item in the select menu
	 * @param index `The index of the corresponding item in the select menu.`
	 */
	getEnabled(index: num): bin;

	/**
	 * Enable or disable an item in the menu popup
	 * @param name `The name of the menu item.`
	 * @param value Value can be `true` or `false`
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * Get the enabled state of an item in the menu popup
	 * @param name `The name of the menu item.`
	 */
	getEnabledByName(name: str): bin;
}


declare class UISlider {

	/** Sets or returns the minimum value */
	minValue: num;

	/** Sets or returns the maximum value */
	maxValue: num;

	/** Sets or returns the track properties of the Slider Component */
	track: str;

	/** Sets or returns the Sider Component steps */
	step: num;

	/** Sets or returns the orientation of the Slider Component */
	orientation: str;

	/** Sets or returns the value of the Slider Component */
	value: num;

	/** Sets or returns the marks on the Slider Component */
	marks: bin;

	/** Sets or returns the value label display type */
	valueLabelDisplay: str;

	/** Sets or returns the theme color of the Slider */
	color: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UISlider, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds an event handler when the Slider component is touch */
	setOnTouch(callback: (this: UISlider, pos : obj) => void): void;

	/** Sets a callback function when the value of the Slider Component changes */
	setOnChange(callback: (this: UISlider, value : num) => void): void;

	/** Sets a callback function when a final value is selected */
	setOnSelect(callback: (this: UISlider, value : num) => void): void;

	/**
	 * Sets a range value for the Slider Component
	 * @param min `Minimum value of the slider.`
	 * @param max `Maximum value of the slider.`
	 */
	setRange(min?: num, max?: num): void;

	/**
	 * Sets the marks of the Slider Component
	 * @param val `The marks on the Slider Component.`
	 */
	setMarks(val: bin): void;

	/** Returns the step marks of the Slider Component */
	getMarks(): bin;
}


declare class UIStepper {

	/** Sets or returns the active step */
	activeStep: num;

	/** Sets or returns the orientation of the Stepper */
	orientation: str;

	/** Sets or returns the elevation of the mobile stepper */
	elevation: num;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIStepper, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds a callback function to be called when the stepper is complete */
	setOnComplete(callback: (this: UIStepper) => void): void;

	/** Adds a callback function to be called when the stepper has changed step */
	setOnChange(callback: (this: UIStepper, index : num) => void): void;

	/** Go to the next step */
	nextStep(): void;

	/** Go to the previous step */
	previousStep(): void;

	/**
	 * Returns the layout of the corresponding step layout where you can add controls
	 * @param index `The index of the corresponing stepper layout`
	 */
	getLayout(index: num): obj;

	/**
	 * Get the index of the corresponding layout
	 * @param layout The layout to check.
	 */
	getLayoutIndex(layout: obj): num;

	/**
	 * Removes a corresponding step by its index
	 * @param index `The index of the step to remove.`
	 */
	removeStep(index: num): void;

	/**
	 * Sets a new title for the corresponding step by its index
	 * @param index `The index of the Stepper.`
	 * @param title `The new title text.`
	 */
	setTitleText(index: num, title: str): void;
}


declare class UISwitch {

	/** Sets or returns the value of the switch toggle */
	value: bin;

	/** Sets or returns the label text */
	text: str;

	/** Sets or returns the icon position */
	iconPosition: str;

	/** Sets or returns a boolean value whether this component is required or not */
	required: bin;

	/** Sets or returns the theme color */
	color: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the size variant of the toggle switch */
	sizeVariant: str;

	/** Sets or returns the edge position of the toggle */
	edge: str;

	/** Sets or returns a Boolean whether the component is enabled or disabled */
	enable: bin;

	/** Sets or returns the space between the switch icon and the label text */
	spaceBetween: num;

	/** Sets or returns the disabled state of the ripple effect */
	disableRipple: bin;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UISwitch, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds an event handler when the switch is touch */
	setOnTouch(callback: (this: UISwitch, check : bin, pos : obj) => void): void;
}


declare class UISwitchGroup {

	/** Sets or returns the label text */
	label: str;

	/** Sets or returns the list items */
	list: lst;

	/** Sets or returns the edge position of the toggle */
	edge: str;

	/** Sets or returns the theme color */
	color: str;

	/** Sets or returns the theme color `Primary` `Secondary` or `Default` */
	iconColor: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the depth of the control container */
	elevation: num;

	/** Sets or returns the size of the icon */
	iconSize: num;

	/** Sets or returns the color of the label text in hexadecimal format */
	labelColor: str;

	/** Sets or returns the size of the label text */
	labelSize: num;

	/** Sets or returns whether the container is outlined or elevated */
	outlined: bin;

	/** Sets or returns the padding of each switch item */
	itemPadding: lst;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UISwitchGroup, text : str, index : num, pos : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the switchgroup container
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Sets a callback function when the switch item is touch */
	setOnTouch(callback: (this: UISwitchGroup, text : str, value : bin, index : num, pos : obj) => void): void;

	/** Adds a callback function to be called whent there is a change of value */
	setOnChange(callback: (this: UISwitchGroup, indexes : lst, items : lst) => void): void;

	/**
	 * Sets the value of the corresponding item in the list
	 * @param index `The index of the corresponding item.`
	 * @param val A Values can be `true` or `false`
	 */
	setValueByIndex(index: num, val: bin): void;

	/**
	 * Returns whether an item is check or unchecked
	 * @param index `The index of the corresponding item.`
	 */
	getValueByIndex(index: num): bin;

	/**
	 * Updates the list on the switchgroup component
	 * @param lst The list array or a comma separated list.
	 */
	setList(lst: lst): void;

	/**
	 * Adds or insert an item in the SwitchGroup list
	 * @param title `The title text.`
	 * @param icon `Material icon font.`
	 * @param value `The value of the item.`
	 * @param index `The index in which to insert the item. Default is at the bottom of the list.`
	 */
	addItem(title: str, icon: str, value: bin, index: num): void;

	/**
	 * Removes an item in the SwitchGroup by its index
	 * @param index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index: num): void;

	/**
	 * Removes an item in the SwitchGroup component by its title name
	 * @param title `The title text of the SwitchGroup item.`
	 */
	removeItemByName(title: str): void;

	/** Removes the last item in the SwitchGroup list */
	popItem(): void;

	/** Removes the first item in SwitchGroup list */
	shiftItem(): void;

	/**
	 * Enable or disable an item in the switchgroup component
	 * @param index The index of the corresponding item in the list. You can also pass `Boolean` to enable or disable the switchgroup component.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * Get the enabled state of an item in the switch group
	 * @param index `The index of the corresponding item in the switch group.`
	 */
	getEnabled(index: num): bin;

	/**
	 * Sets the padding of the switch item
	 * @param left `Left padding of the radio item.`
	 * @param top `Top padding of the radio item.`
	 * @param right `Right padding of the radio item.`
	 * @param bottom `Bottom padding of the radio item.`
	 * @param mode Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left: num, top: num, right: num, bottom: num, mode: str): void;
}


declare class UITabs {

	/** Sets or returns the theme color of the tab bar */
	color: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the variant of the Tabs Component */
	variant: str;

	/** Sets or returns a boolean value whether the tabs are centered or not */
	centered: bin;

	/** Sets or returns the tab icon */
	iconSize: num;

	/** Sets or returns the color ofthe tab icon */
	iconColor: str;

	/** Sets or returns the elevation of the tab bar */
	elevation: num;

	/** Sets or returns the scroll button mode when tab items overflow the width of its container */
	scrollButtonMode: str;

	/** Sets or returns the width of the indicator bar as a fraction of the tab item width */
	indicatorWidth: num;

	/** Sets or returns the thickness of the indicator bar in pixels */
	indicatorThickness: num;

	/** Sets or returns the corner radius of the indicator bar in pixels */
	indicatorRadius: num;

	/** Sets or returns the color of the indicator bar */
	indicatorColor: str;

	/** Sets or returns the padding of the tab items */
	tabPadding: num;

	/** Sets or returns the height of the tab in pixels */
	tabHeight: num;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UITabs, text : str, index : num, pos : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the tab
	 * @param tl `Top-left corner radius.`
	 * @param tr `Top-right corner radius.`
	 * @param bl `Bottom-left corner radius.`
	 * @param br `Bottom-right corner radius.`
	 * @param mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, bl?: num, br?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Sets a callback function when the value of the tab changes */
	setOnChange(callback: (this: UITabs, name : str, index : num) => void): void;

	/** Add a callback function when a tab item i click */
	setOnTouch(callback: (this: UITabs, name : str, index : num, pos : obj) => void): void;

	/**
	 * Sets the tab titles array
	 * @param tabs The tab titles array. See examples for format.
	 */
	setTabs(tabs: lst): void;

	/**
	 * Add or insert a tab to the Tabs Component
	 * @param name `The name of the tab.`
	 * @param icon `Material icon font.`
	 * @param index `The index in which to insert the tab.`
	 */
	addTab(name: str, icon: str, index: num): void;

	/**
	 * Sets a new title for the corresponding tab
	 * @param index `Index of the tab.`
	 * @param title `The new title.`
	 */
	setTitleText(index: num, title: str): void;

	/**
	 * Sets an icon to a corresponding tab title
	 * @param index `The index of the tab.`
	 * @param icon `Material icon font.`
	 */
	setIcon(index: num, icon: str): void;

	/**
	 * Removes a tab item by its corresponding index
	 * @param index `The index of the corresponding tab to remove.`
	 */
	removeTabByIndex(index: num): void;

	/**
	 * Removes a tab item by its corresponding name
	 * @param name `The name of the corresponding tab to remove.`
	 */
	removeTabByName(name: str): void;

	/** Removes the first item in the tabs list */
	shiftItem(): obj;

	/** Removes the last item in the tabs list */
	popItem(): obj;

	/**
	 * Returns the layout of the corresponding tab
	 * @param name `The name of the tab. You can also pass the index of the tab.`
	 */
	getLayout(name: str): obj;

	/**
	 * Show a tab panel by its corresponding name
	 * @param name `The name of the tab to be shown.`
	 */
	showTab(name: str): void;

	/**
	 * Show a tab panel by its corresponding name
	 * @param index `The index of the tab to be shown.`
	 */
	showTabByIndex(index: num): void;

	/**
	 * Enable or disable a tab item
	 * @param index The index of the corresponding tab. Pass `Boolean` if you want to disable the entire Tabs component.
	 * @param value Values can be `true` or `false`.
	 */
	setEnabled(index: num, value: bin): void;

	/**
	 * Get the enabled state of a tab
	 * @param index `The index of the corresponding tab.`
	 */
	getEnabled(index: num): bin;

	/**
	 * Enable or disable a tab by its name
	 * @param name `The name of the tab.`
	 * @param value Values can be `true` or `false`.
	 */
	setEnabledByName(name: str, value: bin): void;

	/**
	 * Get the enabled state of a tab by its name
	 * @param name `The name of the tab.`
	 */
	getEnabledByName(name: str): bin;

	/**
	 * Determines the behavior of scroll buttons when tabs are set to `scrollable`
	 * @param mode Values can be 
 `auto` : will only present them when not all the items are visible 
 `desktop` : will only present them on medium and larger viewports 
 `on` : will always present them 
 `off` : will never present them.
	 */
	showScrollButton(mode: str): void;

	/**
	 * Get the index of the corresponding layout
	 * @param layout The layout to check.
	 */
	getLayoutIndex(layout: obj): num;

	/**
	 * Add a custom styling to the indicator
	 * @param width `Fraction of the tab item width (horizontal tabs) or height (vertical tabs)`
	 * @param thickness `Thickness in pixels`
	 * @param color Hexadecimal color of the form `#rrggbb`
	 * @param radius `The corner radius in pixels`
	 */
	setIndicatorStyle(width: num, thickness: num, color: str, radius: num): void;

	/** Returns the indicator style as an object */
	getIndicatorStyle(): obj;

	/**
	 * Sets the padding of the tab items
	 * @param left `The tab-item left padding.`
	 * @param top `The tab-item top padding.`
	 * @param right `The tab-item right padding.`
	 * @param bottom `The tab-item bottom padding.`
	 * @param mode Unit of measurement. Default is `px`. You can pass `%` `rem` `vw`.
	 */
	setTabPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;
}


declare class UIText {

	/** Sets or returns the text */
	text: str;

	/** Sets or returns the text variants */
	variant: str;

	/** Sets or returns the theme color of the text `Primary` or `Secondary` */
	color: str;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the ellipsis use when the text is truncated */
	ellipsize: str;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the style of the text */
	textStyle: str;

	/** Sets or returns the horizontal alignment of the text */
	alignment: str;

	/** Sets or returns the vertical alignment of the text */
	verticalAlignment: str;

	/** Sets or returns whether the text is `italized` or not */
	italic: bin;

	/** Sets or returns whether the text is `bold` or not */
	bold: bin;

	/** Sets or returns whether the text is `underlined` or not */
	underline: bin;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIText, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds an event handler when the text component is touch */
	setOnTouch(callback: (this: UIText, pos : obj) => void): void;

	/** Adds a callback handler for a long touch event */
	setOnLongTouch(callback: (this: UIText, pos : obj) => void): void;

	/**
	 * Sets an html on the text control
	 * @param html `An html string`
	 */
	setHtml(html: str): void;

	/** Returns the html text */
	getHtml(): str;

	/**
	 * Sets a shadow on the text in a text control
	 * @param radius `The radius in pixels`
	 * @param dx `X-offset of the shadow`
	 * @param dy `Y-offset of the shadow`
	 * @param color A hexadecimal color of the form `#rrggbb`
	 */
	setTextShadow(radius: num, dx: num, dy: num, color: str): void;
}


declare class UITextField {

	/** Sets or returns the text value of the TextField Component */
	text: str;

	/** Sets or returns the label text */
	label: str;

	/** Sets return the label color in hexadecimal format `#rrggbb` */
	labelColor: str;

	/** Sets or returns the placeholder text */
	placeholder: str;

	/** Sets or returns a boolean value whether the text field in required or not */
	required: bin;

	/** Sets or returns a boolean value whethe the input is focus when rendered into the DOM */
	autoFocus: bin;

	/** Sets or returns the hint text */
	hint: str;

	/** Sets or returns the minimum rows for a `multiline` textfield */
	minRows: num;

	/** Sets or returns the maximum rows for a `multiline` textfield */
	maxRows: num;

	/** Sets or returns the variant of the TextField */
	variant: str;

	/** Sets or returns the size variant of the textfield */
	sizeVariant: str;

	/** Sets or returns the theme color of the textfield component */
	color: str;

	/** Sets or returns the input type */
	inputType: str;

	/** Sets or returns the outline color in hexadecimal form `#rrggbb` when the textfield is focus */
	outlineColor: str;

	/** Returns the end adornment text or icon */
	endAdornment: str;

	/** Returns the start adornment text or icon */
	startAdornment: str;

	/** Sets or returns the helper text or the hint below the input */
	helperText: str;

	/** Sets or returns the error state of the TextField component */
	error: bin;

	/** Sets or returns the step increment if the input is of type number; */
	stepIncrement: num;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UITextField, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Sets a callback function on `enter` or `submit` event */
	setOnEnter(callback: (this: UITextField, text : str) => void): void;

	/** Sets a callback function on `values changes` event */
	setOnChange(callback: (this: UITextField, text : str) => void): void;

	/** Sets focus on the textField component */
	focus(): void;

	/** Adds a callback function when the textfield is focus or blur */
	setOnFocus(callback: (this: UITextField, focus : bin) => void): void;

	/**
	 * Sets the minimum and maximum number of rows on a multiline type TextField
	 * @param min `The minimum number of rows.`
	 * @param max `The maximum number of rows.`
	 */
	setRows(min?: num, max?: num): void;

	/**
	 * Set a start adornment control into the TextField Component
	 * @param text `Text or material icon font.`
	 * @param type A comma separated options for start adornment control. Options can be 
 `Icon` : If the adornment is an icon. 
 `Touchable` : If the adornment is touchable.
	 */
	setStartAdornment(text: str, type?: str): void;

	/** Add a callback handler when the start adornment control is touch */
	setStartAdornmentOnTouch(callback: (this: UITextField) => void): void;

	/** Returns the start adornment text */
	getStartAdornment(): str;

	/**
	 * Add an end adornment control into the TextField Component
	 * @param text `Text or material icon font.`
	 * @param type A comma separated options for end adornment control. Options can be 
 `Icon` : If the adornment is an icon. 
 `Touchable` : If the adornment is touchable.
	 */
	setEndAdornment(text: str, type?: str): void;

	/** Add a callback handler when the end adornment control is touch */
	setEndAdornmentOnTouch(callback: (this: UITextField) => void): void;

	/** Returns the end adornment text */
	getEndAdornment(): str;
}


declare class UITreeView {

	/** Sets or returns the list object */
	list: obj;

	/** Returns the selected item of the TreeView */
	value: str;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UITreeView, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Add a on touch handler to the TreeView item when click */
	setOnTouch(callback: (this: UITreeView, value : str, path : str) => void): void;

	/**
	 * Updates the list items of the TreeView component
	 * @param obj The list object of the treeview items. See example above.
	 */
	setList(obj: obj): void;

	/**
	 * Add a tree items to the tree view
	 * @param name `The label text for the new item.`
	 * @param obj See list object for more info.
	 */
	addItem(name: str, obj: obj): void;

	/**
	 * Returns the list items object of a given parent tree item name
	 * @param name `The parent name of the tree items.`
	 */
	getItem(name: str): obj;
}


declare class UIVideoView {

	/** Sets or returns the video source url */
	url: str;

	/** Sets or returns the video volume */
	volume: num;

	/** Returns the time duration of the video in seconds */
	duration: num;

	/** Returns a boolean whether the video is currently playing */
	played: bin;

	/** Returns a boolean whether the video is paused */
	paused: bin;

	/** Returns a boolean whether the video playback is completed */
	completed: bin;

	/** Returns a boolean whether the video audio is muted */
	muted: bin;

	/** Returns a boolean whether the user is currently seeking in the video playback seekbar */
	seeking: bin;

	/** Sets or returns the playback speed */
	speed: num;

	/** Sets or returns a boolean whether the video should start over again when completed */
	loop: bin;

	/** Play video in fullscreen if supported */
	enterFullscreen(): void;

	/** Exit fullscreen if video is playing fullscreen */
	exitFullscreen(): void;

	/** Play the video */
	play(): void;

	/** Stop the playing video */
	stop(): void;

	/** Sets a callback handler when the video has buffered enough to begin playing */
	setOnReady(cb: (this: UIVideoView, info : obj) => void): void;

	/** Sets a callback handler when the video is played by the user or programmatically */
	setOnPlay(cb: (this: UIVideoView) => void): void;

	/** Sets a callback handler when the video is pause by the user or programmatically */
	setOnPause(cb: (this: UIVideoView) => void): void;

	/** Sets a callback handler when the video playback is completed */
	setOnComplete(cb: (this: UIVideoView) => void): void;

	/** Sets a callback function when an error occurs while the video source is being loaded */
	setOnError(cb: (this: UIVideoView) => void): void;

	/** Sets a callback handler when seeking event is completed */
	setOnSeek(cb: (this: UIVideoView, pos : num) => void): void;

	/** Sets a callback handler when seeking event is active */
	setOnSeeking(cb: (this: UIVideoView, pos : num) => void): void;

	/** Sets a callback function when the volume of the video changes */
	setOnVolume(cb: (this: UIVideoView, volume : num) => void): void;

	/** Sets a callback handler to be be called while the video is playing */
	setOnProgress(cb: (this: UIVideoView, time : num) => void): void;

	/** Reloads the video source */
	load(): void;

	/**
	 * Sets the playback position
	 * @param time `The playback position in seconds.`
	 */
	seekTo(time: num): void;

	/**
	 * Capture an image in the playback
	 * @param type `The image type. Values are "jpg"`, ` "png"`, ` "webp"`, ` "gif". Default is "jpg".`
	 * @param format `The returned data format. Can be "base64"`, ` "bytes"(regular array)`, ` "uint8array"(typed array) or "arraybuffer".`
	 */
	capture(type: str, format: str): obj;
}


declare class UIWebView {

	/** Sets or returns the url of the webview */
	url: str;

	/** Setst or returns the html loaded in the iframe */
	html: str;

	/** Sets or returns the redirect url when an error occur */
	errorPage: str;

	/** Sets or returns the text zoom of the page loaded in the web view */
	textZoom: num;

	/** A reference to the webview's window object */
	window: obj;

	/** A reference to the webview's window document object */
	document: obj;

	/** Sets or returns the list of blocked urls */
	blockUrls: lst;

	/** Sets or returns the width of the control as a fraction of the parent control */
	width: num;

	/** Sets or returns the height of the control as a fraction of the parent control */
	height: num;

	/** Sets or returns the opacity of the control */
	opacity: num;

	/** Sets or returns the size of the text within the control */
	textSize: num;

	/** Sets or returns the color of the text */
	textColor: str;

	/** Sets or returns the angle of rotation in degrees */
	rotation: num;

	/** Sets or returns the `relative` path to the font-family use */
	fontFile: str;

	/** Sets or returns the visibility of the control */
	visibility: str;

	/** Returns the type of the control */
	type: str;

	/** Returns the absolute width of the control in pixels */
	absWidth: num;

	/** Returns the absolute height of the control in pixels */
	absHeight: num;

	/** A hexadecimal color of the form `#rrggbb` */
	backColor: str;

	/** The path to your image file */
	backImage: str;

	/** Returns whether the control is visible or not */
	isVisible: bin;

	/** Returns the distance of the control from the top */
	top: num;

	/** Returns the distance of the control from the left */
	left: num;

	/** Returns the absolute distance of the control from the top in pixels */
	absTop: num;

	/** Returns the absolute distance of the control from the left in pixels */
	absLeft: num;

	/** Returns the parent layout control */
	parent: obj;

	/** Returns the position of the control */
	position: obj;

	/** Sets or returns the margin of the control */
	margins: lst;

	/** Sets or returns the padding of the control */
	padding: lst;

	/** Sets or returns the `options` of the control */
	options: str;

	/** Sets or returns the `disabled` state of the control */
	disabled: bin;

	/** Sets or returns the border thickness in pixels */
	border: num;

	/** Sets or returns the border color */
	borderColor: str;

	/** Sets or returns the border style */
	borderStyle: str;

	/** Sets or returns the corner radius in pixels */
	cornerRadius: num;

	/** Returns the html container element for the control */
	el: obj;

	/** Sets the style of the html container element */
	elStyle: str;

	/** Adds a callback function on right click */
	setOnContextMenu(callback: (this: UIWebView, event : obj) => void): void;

	/**
	 * Animate the component
	 * @param anim The type of animation. Here are the available values
`bounce`,  `flash`,  `pulse`,  `rubberBand`,  `shakeX`,  `shakeY`,  `headShake`,  `swing`,  `tada`,  `wobble`,  `jello`,  `heartBeat`, 
Back Entrances: `backInDown`,  `backInLeft`,  `backInRight`,  `backInUp`
Back Exits: `backOutDown`,  `backOutLeft`,  `backOutRight`,  `backOutUp`
Bouncing Entrances: `bounceIn`,  `bounceInDown`,  `bounceInLeft`,  `bounceInRight`,  `bounceInUp`
Bouncing exits: `bounceOut`,  `bounceOutDown`,  `bounceOutLeft`,  `bounceOutRight`,  `bounceOutUp`
Fading entrances: `fadeIn`,  `fadeInDown`,  `fadeInDownBig`,  `fadeInLeft`,  `fadeInLeftBig`,  `fadeInRight`,  `fadeInRightBig`,  `fadeInUp`,  `fadeInUpBig`,  `fadeInTopLeft`,  `fadeInTopRight`,  `fadeInBottomLeft`,  `fadeInBottomRight`
Fading exits: `fadeOut`,  `fadeOutDown`,  `fadeOutDownBig`,  `fadeOutLeft`,  `fadeOutLeftBig`,  `fadeOutRight`,  `fadeOutRightBig`,  `fadeOutUp`,  `fadeOutUpBig`,  `fadeOutTopLeft`,  `fadeOutTopRight`,  `fadeOutBottomRight`,  `fadeOutBottomLeft`
Flippers: `flip`,  `flipInX`,  `flipInY`,  `flipOutX`,  `flipOutY`
Lightspeed: `lightSpeedInRight`,  `lightSpeedInLeft`,  `lightSpeedOutRight`,  `lightSpeedOutLeft`
Rotating Entrances: `rotateIn`,  `rotateInDownLeft`,  `rotateInDownRight`,  `rotateInUpLeft`,  `rotateInUpRight`
Rotating Exits: `rotateOut`,  `rotateOutDownLeft`,  `rotateOutDownRight`,  `rotateOutUpLeft`,  `rotateOutUpRight`
Specials: `hinge`,  `jackInTheBox`,  `rollIn`,  `rollOut`
Zooming Entrances: `zoomIn`,  `zoomInDown`,  `zoomInLeft`,  `zoomInRight`,  `zoomInUp`
Zooming Exits: `zoomOut`,  `zoomOutDown`,  `zoomOutLeft`,  `zoomOutRight`,  `zoomOutUp`
Sliding Entrances: `slideInDown`,  `slideInLeft`,  `slideInRight`,  `slideInUp`
Sliding Exits: `slideOutDown`,  `slideOutLeft`,  `slideOutRight`,  `slideOutUp`
	 * @param duration `The time in milliseconds.`
	 */
	animate(anim: str, duration: num): void;

	/**
	 * Sets the size of the component
	 * @param width `Fraction of the parent width. [0-1]`
	 * @param height `Fraction of the parent height. [0-1]`
	 * @param mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width: num, height: num, mode: str): void;

	/** Show the component */
	show(): void;

	/** Hide the component */
	hide(): void;

	/** Destroy the component */
	gone(): void;

	/** Destroy the component */
	destroy(): void;

	/**
	 * Sets the x and y scaling of the component
	 * @param x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x: num, y: num): void;

	/**
	 * Returns the position of the component
	 * @param options The mode of the measurements. Values can be `px` or `%`
	 */
	getPosition(options: str): obj;

	/**
	 * Sets the margin of the component
	 * @param left Left margin. You can also pass string e.g. `12rem`
	 * @param top Top margin. You can also pass string e.g. `12rem`
	 * @param right Right margin. You can also pass string e.g. `12rem`
	 * @param bottom Bottom margin. You can also pass string e.g. `12rem`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the padding of the component's container
	 * @param left `Fraction of the component width.`
	 * @param top `Fraction of the component height. [0-1]`
	 * @param right `Fraction of the component width. [0-1]`
	 * @param bottom `Fraction of the component height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left?: num, top?: num, right?: num, bottom?: num, mode?: str): void;

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param left `Fraction of the parent width. [0-1]`
	 * @param top `Fraction of the parent height. [0-1]`
	 * @param mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left: num, top: num, mode: str): void;

	/**
	 * Sets the border line for the component container
	 * @param left `Border-left thickness in pixels.`
	 * @param top `Border-top thickness in pixels.`
	 * @param right `Border-right thickness in pixels.`
	 * @param bottom `Border-bottom thickness in pixels.`
	 * @param clr Border color in hexadecimal format `#rrggbb`.
	 * @param style Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left?: num, top?: num, right?: num, bottom?: num, clr?: str, style?: str): void;

	/**
	 * Sets the corner radius of the component
	 * @param tl `Top-Left border radius.`
	 * @param tr `Top-Right border radius.`
	 * @param br `Bottom-Right border radius.`
	 * @param bl `Bottom-Left border radius.`
	 * @param mode Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl?: num, tr?: num, br?: num, bl?: num, mode?: str): void;

	/**
	 * Bring this component forward by a given z-index
	 * @param zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex: num): void;

	/**
	 * Bring this component backward by a given z-index
	 * @param zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex: num): void;

	/** Adds a callback handler for onload event */
	setOnLoad(callback: (this: UIWebView) => void): void;

	/** Define a callback function which is called when the user clicked a link */
	setOnUrl(callback: (this: UIWebView, url : str) => void): void;

	/** Stops any web loading */
	stop(): void;

	/** Reloads the current page */
	reload(): void;

	/** Print current page via the builtin android printer dialog */
	print(): void;
}


declare class UIActionSheet {

	/** Sets or returns the title text of the action sheet */
	title: str;

	/** Sets or returns the description text for the action sheet */
	description: str;

	/**
	 * Sets the color of the list item by its name
	 * @param name `The list item text.`
	 * @param color A css supported color. Available format are: `hexadecimal`,  `color-names`,  `rgb`,  `rgba` ...
	 */
	setColor(name: str, color: str): void;

	/**
	 * Sets the color of the list item by its corresponding index
	 * @param index `The index of list item.`
	 * @param color A css supported color. Available format are: `hexadecimal`,  `color-names`,  `rgb`,  `rgba` ...
	 */
	setColorByIndex(index: num, color: str): void;
}


declare class UIColorPicker {

	/** Returns the value of the chosen color */
	value: str;

	/** Returns the hexadecimal string color value of the color picker */
	getValue(): str;
}


declare class UIDatePicker {
}


declare class UIDateTimePicker {
}


declare class UIPopover {

	/** Sets or returns the font file use for the Popover */
	fontFile: str;

	/** Sets or returns the path to the background image */
	backImage: str;

	/** Show the popup dialog */
	show(): void;

	/** Hide the popup dialog */
	hide(): void;
}


declare class UIPopup {

	/** Sets or returns the text of the popup */
	text: str;

	/** Sets or returns the duration of the popup in milliseconds */
	duration: num;

	/** Adds an onClose callback to your popup */
	setOnClose(callback: (this: UIPopup) => void): void;

	/** Adds an action callback when the user touches the action button */
	setOnAction(callback: (this: UIPopup) => void): void;

	/** Show the popup */
	show(): void;

	/** Hide the popup */
	hide(): void;

	/**
	 * Updates the position of the popup
	 * @param vertical Vertical alignment. Values can be `Top` `Bottom`
	 * @param horizontal Horizontal alignment. Values can be `Left` `Center` and `Right`
	 */
	setPosition(vertical?: str, horizontal?: str): void;

	/** Returns the position of the popup */
	getPosition(): obj;
}


declare class UIProgressDialog {

	/** Sets or returns the ProgressDialog text */
	text: str;

	/** Show the progress dialog component */
	show(): void;

	/** Hides the dialog component */
	hide(): void;

	/** Adds a callback handler method on close event */
	setOnClose(callback: (this: UIProgressDialog) => void): void;
}


declare class UITimePicker {
}


