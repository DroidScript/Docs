/** @type {UI} */
var ui;
/** @type {{ mobile: bin, ios: bin, android: bin, type: "mobile" | "tablet" | "desktop" }} */
const platform = null;
class App {
	onStart() { }
	onLoad() { }
	onExit() { }
}
/** @typedef {UIAccordion | UIAppBar | UIBottomNavbar | UIBottomSheet | UIButton | UIButtonGroup | UICameraView | UICard | UICheckbox | UICheckboxGroup | UIChip | UIDialog | UIDivider | UIDrawer | UIDropdown | UIFloatingActionButton | UIImage | UILayout | UIList | UIMenu | UIProgress | UIRadioGroup | UISelect | UISlider | UIStepper | UISwitch | UISwitchGroup | UITabs | UIText | UITextField | UITreeView | UIVideoView | UIWebView | UIActionSheet | UIColorPicker | UIDatePicker | UIDateTimePicker | UIPopover | UIPopup | UIProgressDialog | UITimePicker} UIObject */
/** @typedef {UIObject} uio ui object */

class UI {

	/**
	 * Adds an accordion or expansion panel into your app
	 * @param {obj} parent The parent layout where to add the text.
	 * @param {lst} titles An array of accordion titles.
	 * @param {str} [options] A comma separated options.
Style: `Square`
Layout type: `Linear`,  `Absolute`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UIAccordion} 
	 */
	addAccordion(parent, titles, options, width, height) {return}

	/**
	 * Adds an appbar to your app
	 * @param {obj} parent The parent layout where to add the AppBar
	 * @param {str} title `The title text of the appbar`
	 * @param {str} [options] A comma separated options.
Menu icon: `Menu` 
Theme Color: `Primary`,  `Secondary`,  `Transparent`,  `Inherit`,  `Default`
Position: `Absolute`,  `Static`,  `Fixed`,  `Relative`
	 * @param {num} [width] Fraction of the parent width `[0-1]`
	 * @param {num} [height] Fraction of the parent height `[0-1]`
	 * @return {UIAppBar} 
	 */
	addAppBar(parent, title, options, width, height) {return}

	/**
	 * The Bottom Navigation Bar (BottomNavBar) is a key element in mobile user interface design, typically placed at the bottom of the screen
	 * @param {obj} parent The parent layout where to add the BottomNavbar
	 * @param {lst} navs An array whose elements are of the form `[ "Title", "Icon" ]`
	 * @param {str} [options] A comma separated options.
Position: "Fixed",  "Static"
Label: `Hidelabels`
	 * @param {num} [width] Fraction of the screen width `[0-1]`
	 * @param {num} [height] Fraction of the screen height `[0-1]`
	 * @return {UIBottomNavbar} 
	 */
	addBottomNavbar(parent, navs, options, width, height) {return}

	/**
	 * The BottomSheet in Material Design is a UI component anchored at the screen bottom
	 * @param {str} title `An optional bottomsheet title.`
	 * @param {str} options A comma separated options. Values are:
`"Notch"` to add a small notch at the top of the bottomsheet.
`"HideOnAction"` to hide the bottomsheet when actions are click.
`"CloseAction"` add a close action at the left.
`"MoreAction"` add a more action at the right.
`"NoCancel"` to disable the default closing event when the backdrop is click.
	 * @return {UIBottomSheet} 
	 */
	addBottomSheet(title, options) {return}

	/**
	 * A button component in mobile UI development is an element that triggers an action when pressed
	 * @param {obj} parent The layout where to add the button.
	 * @param {str} text `The button text or the material icon text.`
	 * @param {str} [options] A comma separated options.
Variant: `Contained`,  `Outlined`,  `Text`,  `Default`
Theme Color: `Primary`,  `Secondary`,  `Default`
Sizes: `Small`,  `Medium`,  `Large`
Toggleable: `Toggle`,  `Active`
Utils: `Icon`,  `NoRipple`,  `Upload`,  `Multiple`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UIButton} 
	 */
	addButton(parent, text, options, width, height) {return}

	/**
	 * In mobile UI development, a button group refers to a collection of buttons presented together, often used for related actions
	 * @param {obj} parent The parent layout where to add the ButtonGroup
	 * @param {lst} [list] The item to be displayed on the buttn group.
	 * @param {str} [options] A comma separated options.
Variant: `Contained`,  `Outlined`,  `Text`,  `Default`
Theme Color: `Primary`,  `Secondary`,  `Default`
Sizes: `Small`,  `Medium`,  `Large`
Orientation: `Horizontal`,  `Vertical`
Toggleable: `Toggle`,  `Radio`
Utils: `Icon`,  `NoElevation`
	 * @param {num} [width] Fraction of the parent width `[0-1]`
	 * @param {num} [height] Fraction of the parent height `[0-1]`
	 * @return {UIButtonGroup} 
	 */
	addButtonGroup(parent, list, options, width, height) {return}

	/**
	 * Adds a camera view into your app to take pictures and record videos
	 * @param {obj} parent The parent layout where to add the camera view.
	 * @param {str} options `Comma separated options for the camera view. Available values are "Front"`, ` "Back"`, ` "Video"`, ` "Fill" and "Stretch". "Video" option includes audio.`
	 * @param {num} width `Fraction of the parent width [0-1].`
	 * @param {num} height `Fraction of the parent height [0-1].`
	 * @return {UICameraView} 
	 */
	addCameraView(parent, options, width, height) {return}

	/**
	 * They are surfaces in material design that display content and actions on a single topic
	 * @param {obj} parent The layout where to add the card.
	 * @param {obj} content A JSON object representing the contents of the card. Passing the card contents on initialization makes your app layout loads faster than setting each property individually.
	 * @param {str} options `A comma separated option for the card.`
	 * @param {num} width `Fraction of the parent width.`
	 * @param {num} height `Fraction of the parent height.`
	 * @return {UICard} 
	 */
	addCard(parent, content, options, width, height) {return}

	/**
	 * A checkbox in UI development is a graphical control element that allows users to toggle between two states, typically checked or unchecked, to indicate a choice or selection
	 * @param {obj} parent The layout where to add the checkbox
	 * @param {str} text `The label for the checkbox`
	 * @param {str} [options] A comma separated options.
Theme Colors: `Primary`,  `Secondary`
Sizes: `Medium`,  `Small`
Icon position: `Left`,  `Top`,  `Right`,  `Bottom`
Variant: `Indeterminate`,  `Determinate`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UICheckbox} 
	 */
	addCheckbox(parent, text, options, width, height) {return}

	/**
	 * A checkbox group in UI development is a collection of checkboxes grouped together for related selections or options
	 * @param {obj} parent The parent layout where to add the CheckboxGroup.
	 * @param {lst} [list] The items to be displayed.
	 * @param {str} [options] A comma separated options.
Theme Color: `Default`,  `Primary`,  `Secondary`
Sizes: `Small`,  `Medium`
Icon Position: `Left`,  `Right`
Container: `Elevated`,  `Outlined`
Corners : `Square`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UICheckboxGroup} 
	 */
	addCheckboxGroup(parent, list, options, width, height) {return}

	/**
	 * In mobile UI design, a Chip is a compact element displaying attributes, input, or actions
	 * @param {obj} parent The parent layout where to add the Chip.
	 * @param {str} text `The text on the chip.`
	 * @param {str} [options] A comma separated option.
Theme Color: `Primary`,  `Secondary`,  `Default`
Size: `Small`,  `Medium`
Variant: `Outlined`,  `Default`
Util: `Touchable`
	 * @param {num} [width] Fraction of the parent width `[0-1]`
	 * @param {num} [height] Fraction of the parent height `[0-1]`
	 * @return {UIChip} 
	 */
	addChip(parent, text, options, width, height) {return}

	/**
	 * A Dialog in mobile UI design is a pop-up window that appears on top of the current screen to prompt the user for input or to convey information
	 * @param {str} title `The dialog title text.`
	 * @param {str} body `The dialog message to be shown.`
	 * @param {lst} [actions] A string of action button text.
	 * @param {str} [options] A comma separated options.
Theme Colors: `Primary`,  `Secondary`
Util: `NoCancel` prevents the dialog from closing on action.
	 * @param {num} [width] Fraction of the screen width `[0-1]`.
	 * @return {UIDialog} 
	 */
	addDialog(title, body, actions, options, width) {return}

	/**
	 * A divider is a visual element used to separate content or components within a layout
	 * @param {obj} parent The layout where to add the divider.
	 * @param {num} [width=1] `Fraction of the parent width. Default is 1.`
	 * @param {str} [options] A comma separated options.
`Inset` to add some padding.
	 * @return {UIDivider} 
	 */
	addDivider(parent, width, options) {return}

	/**
	 * A drawer is a navigation panel that slides in from the edge of the screen, typically from the left, to reveal additional options or content
	 * @param {obj} layout The drawer layout where to add controls.
	 * @param {str} [options] A comma separated options.nVariant: `Permanent`,  `Persistent`,  `Temporary`
Anchor: `Left`,  `Right`,  `Top`,  `Bottom`
	 * @param {num} [width] Fraction of the screen width starting from the anchor position `[0-1]`.
	 * @return {UIDrawer} 
	 */
	addDrawer(layout, options, width) {return}

	/**
	 * A dropdown, also known as a spinner or picker, is a user interface element that presents a list of options in a drop-down menu
	 * @param {obj} parent The layout where to add the dropdown.
	 * @param {lst} [list] The list items to show.
	 * @param {str} [options] A comma separated options.
Theme Colors: `Primary`,  `Secondary`,  `Default`
Variants: `Contained`,  `Outlined`,  `Text`
Sizes: `Small`,  `Medium`,  `Large`
Orientation: `Horizontal`,  `Vertical`
Util: `NoElevation`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UIDropdown} 
	 */
	addDropdown(parent, list, options, width, height) {return}

	/**
	 * A Floating Action Button (FAB) is a prominent, circular button that hovers above the content, typically used for a primary action in an application
	 * @param {obj} parent The parent layout where to add the fab
	 * @param {str} icon `The string icon of the FAB`
	 * @param {str} options A comma separated option.
Position: `Fixed`,  `Static`
Style: `Rounded`,  `Extended`
Anchor: `Left`,  `Right`
	 * @param {str} text `Text to show for extended FABs`
	 * @return {UIFloatingActionButton} 
	 */
	addFloatingActionButton(parent, icon, options, text) {return}

	/**
	 * Adds an image into your layout
	 * @param {obj} parent The parent layout where to add the image.
	 * @param {str} file `The path to the image.`
	 * @param {str} [options='Image'] A comma seprated options.
`Image`,  `Canvas`,  `Button` and `Avatar`. Default is image. 
For `Avatar` you can pass `Small` or `Large`.
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UIImage} 
	 */
	addImage(parent, file, options, width, height) {return}

	/**
	 * Adds a layout into your app
	 * @param {obj} parent The parent layout where to add this component. Pass a string `main` for the main layout of your app.
	 * @param {str} type The layout type. Values can be `"Linear"`,  `"Absolute"`,  `"Frame"`,  `"Slide"`,  `"Card"`
	 * @param {str} [options] A comma separated options.
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
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UILayout} 
	 */
	addLayout(parent, type, options, width, height) {return}

	/**
	 * Lists are continuous, vertical indexes of text or images
	 * @param {obj} parent The parent layout
	 * @param {lst} [list] An array of arrays. Each element is of the form `[icon, title, body, secondary]`
	 * @param {str} [options] A comma separated options.
Media: `Icon`,  `Avatar`
Styling: `Dense`,  `Inset`
Utils: `Selectable`,  `Divider`,  `SecondaryText`,  `NoRipple`,  `NoScrollBar`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UIList} 
	 */
	addList(parent, list, options, width, height) {return}

	/**
	 * A menu is a list of options or actions presented to the user as a popup
	 * @param {obj} parent The component where to anchor the Menu.
	 * @param {lst} [list] A list of items to be shown in the pop-up menu. You can also pass a comma separated string. For menu with icon the format is `icon:title` \n Add a `colon` before an item to display it as the label text.
	 * @param {str} [options] A comma separated options.
Theme Color: `Primary`,  `Secondary`,  `Error`
Utils: `Dense`,  `Icon`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UIMenu} 
	 */
	addMenu(parent, list, options, width, height) {return}

	/**
	 * A progress refers to the visual indication of a task's completion status
	 * @param {obj} parent The parent layout where to add the prgress component.
	 * @param {num} [value] `the initial value of the progress component.`
	 * @param {str} [options] A comma separated options.
Theme Color: `Primary`,  `Secondary`
Type: `Circular`,  `Linear`
Variant: `Determinate`,  `Indeterminate`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction fo the parent height `[0-1]`.
	 * @return {UIProgress} 
	 */
	addProgress(parent, value, options, width, height) {return}

	/**
	 * Adds a radiogroup component into your app
	 * @param {obj} parent The parent where to add the RadioGroup component.
	 * @param {lst} [list] The list items array.
	 * @param {str} [options] A comma separated options.
Radio Sizes: `Small`,  `Medium`
Theme Colors: `Primary`,  `Secondary`,  Default
Orientation: `Horizontal`,  `Vertical`
Icon Position: `Left`,  `Right`
Container: `Elevated`,  `Outlined`
Corner: `Square`
Utils: `Required`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UIRadioGroup} 
	 */
	addRadioGroup(parent, list, options, width, height) {return}

	/**
	 * Adds a Select Component to a given layout
	 * @param {obj} parent The parent layout where to add the control
	 * @param {lst} [list] The list of items for the Select options
	 * @param {str} [options] A comma separated options.
Sizes: `Small`,  `Medium`
Variant: `Filled`,  `Outlined`,  `Standard`
Margin: `Dense`,  `Normal`
Utils: `Required`,  `Multiple`,  `Radio`,  `Disabled`,  `AutoFocus`,  `FullWidth`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UISelect} 
	 */
	addSelect(parent, list, options, width, height) {return}

	/**
	 * A Slider in mobile UI design is a user interface element that allows users to select a value from a range by dragging a thumb along a track
	 * @param {obj} parent The layout where to add the Slider Component.
	 * @param {num} value The initial value of the Slider. Value must be between `0-100`,  the default min and max values.
	 * @param {str} [options] A comma separated options.
Theme Color: `Primary`,  `Secondary`
Orientation: `Horizontal`,  `Vertical`
Track: `Normal`,  `Inverted`,  `False`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UISlider} 
	 */
	addSlider(parent, value, options, width, height) {return}

	/**
	 * A Stepper in mobile UI design is a navigation element that guides users through a multi-step process, typically used for forms or sequential tasks
	 * @param {obj} parent The parent layout of the Stepper.
	 * @param {lst} [steps] An array of titles.
	 * @param {str} [options] A comma separated options.
`Vertical`,  `Horizontal`,  `Loop`,  `Mobile`,  `AlternativeLabel`.
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UIStepper} 
	 */
	addStepper(parent, steps, options, width, height) {return}

	/**
	 * A Switch in mobile UI design is a toggle control that allows users to turn a setting on or off
	 * @param {obj} parent The parent layout where to add the Switch Component.
	 * @param {str} text `The label text.`
	 * @param {str} [options] A comma separated options.
Theme Color: `Primary`,  `Secondary`,  `Default`
Icon Position: `Left`,  `Top`,  `Right`,  `Bottom`
Sizes: `Small`,  `Medium`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UISwitch} 
	 */
	addSwitch(parent, text, options, width, height) {return}

	/**
	 * In UI development, a SwitchGroup refers to a collection or grouping of individual switches
	 * @param {obj} parent The parent layout where to add the SwitchGroup Component.
	 * @param {lst} [list] The list items array whose elements can be `String` if items is text only, or `Array` of the form `[ "icon", "label" ]` if items is icon and text.
	 * @param {str} [options] A comma separated options.
Icon: `Icon`
Color: `Primary`,  `Secondary`
Container: `Elevated`,  `Outlined`
Corner: `Square`
List divider: `Divider`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UISwitchGroup} 
	 */
	addSwitchGroup(parent, list, options, width, height) {return}

	/**
	 * Tabs in user interfaces facilitate seamless navigation between app sections
	 * @param {obj} parent The parent layout where to add the Tabs Component.
	 * @param {lst} [list] An array of tab names.
	 * @param {str} [options] A comma separated options.
Swipe: `Swipeable`
Theme Colors: `Primary`,  `Secondary`,  `Inherit`,  `Transparent`,  `Default`
Variant: `Standard`,  `Scrollable`,  `FullWidth`
Layout: `Linear`,  `Absolute`
Utils: `Icon`,  `Center`,  `Paper`
	 * @param {num} [width] Fraction of the parent width `[0-1]`
	 * @param {num} [height] Fraction of the parent height `[0-1]`
	 * @return {UITabs} 
	 */
	addTabs(parent, list, options, width, height) {return}

	/**
	 * In mobile UI design, it refers to the style, arrangement, and appearance of text
	 * @param {obj} parent The layout control where to add the text control
	 * @param {str} text `The text to be displayed on the text control`
	 * @param {str} [options] A comma separated options.
Variants: `H1`,  `H2`,  `H3`,  `H4`,  `H5`,  `H6`,  `body1`,  `body2`,  `overline`,  `subtitle1`,  `subtitle2`,  `button`,  `caption`
Lines: `Singleline`,  `Multiline`
Alignment: `Left`,  `Center`,  `Right`,  `Justify`
Theme Color: `Primary`,  `Secondary`,  `TextPrimary`,  `TextSecondary`,  `Error`
Format: `Html`,  `Icon`,  `Italize`,  `Monospace`,  `Bold`,  `Underline`
Utils: `Touchable`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UIText} 
	 */
	addText(parent, text, options, width, height) {return}

	/**
	 * A TextField in mobile UI design is an input field where users can enter text or numeric data
	 * @param {obj} parent The layout where to add the TextField Component.
	 * @param {str} text `The initial value of the TextField`
	 * @param {str} [options] A comma separated options.
Theme Color: `Primary`,  `Secondary`
Sizes: `Small`,  `Medium`
Type: `Text`,  `Password`,  `Email`,  `Search`,  `Number`,  `Date`,  `Time`,  `DateTime`
Variant: `Standard`,  `Filled`,  `Outlined`
TextArea: `Multiline`
Utils: `Autofocus`
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UITextField} 
	 */
	addTextField(parent, text, options, width, height) {return}

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
	 * @param {obj} parent The parent layout where to add the TreeView component.
	 * @param {obj} [list] An object of the treeview items. See example below.
	 * @param {str} [options] A comma separated options. Values can be `MultiSelect`.
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UITreeView} 
	 */
	addTreeView(parent, list, options, width, height) {return}

	/**
	 * Adds a video view into your app layout
	 * @param {obj} parent The layout where to add the video view.
	 * @param {str} url The video source url. Supported video formats are `"mp4",  "ogg",  "webm"`
	 * @param {str} options Comma separated options. Values can be one or a combination of the following: `autoplay`,  `loop`,  `controls`,  `muted`,  `fill` or `stretch`. If you pass "controls",  you can optionally remove some controls such as "nodownload",  "nofullscreen" and "noremoteplayback".
	 * @param {num} width `Fraction of the parent width. Values can be [0-1].`
	 * @param {num} height `Fraction of the parent height. Values can be [0-1].`
	 * @return {UIVideoView} 
	 */
	addVideoView(parent, url, options, width, height) {return}

	/**
	 * A WebView in mobile development is a component that allows embedding web content within an application
	 * @param {obj} parent The parent layout where to add the WebView component.
	 * @param {str} [url] `The url of the website.`
	 * @param {str} [options] A comma separated options for WebView. Values can be `NoScrollBar`, 
	 * @param {num} [width] Fraction of the parent width `[0-1]`.
	 * @param {num} [height] Fraction of the parent height `[0-1]`.
	 * @return {UIWebView} 
	 */
	addWebView(parent, url, options, width, height) {return}

	/**
	 * An Action Sheet is a list dialog implementation of bottom sheet displaying contextual actions or options, used to streamline user interactions in mobile apps
	 * @param {str} title `The custom actionsheet title.`
	 * @param {lst} list The list items to show. If `"icon"` option is passed, each element in this list array is of the form `[icon, name]`.
	 * @param {str} options A comma separated actionsheet options. Values are 
`"Icon"` render a leading icon.
`"NoCancel"` remove the default `"Cancel"` option.
	 * @param {(this: UIActionSheet) => void} onSelect 
	 * @return {UIActionSheet} 
	 */
	showActionSheet(title, list, options, onSelect) {return}

	/**
	 * Shows a color picker
	 * @param {str} [value] `A hexadecimal default value for the color picker.`
	 * @param {str} [options] A comma separated options.
Includes alpha: `Alpha`
	 * @param {(this: UIColorPicker, value : str) => void} [onSelect] 
	 * @return {UIColorPicker} 
	 */
	showColorPicker(value, options, onSelect) {return}

	/**
	 * A DatePicker in mobile UIs enables users to select dates using a visual calendar interface
	 * @param {str} date A default date value. Format is `YYYY-MM-DD`
	 * @param {obj} options Date picker options object.See `options` properties below for customization. Note: `options` param is an object to support for more customization than the usual comma separated string.
	 * @param {(this: UIDatePicker) => void} onSelect 
	 * @return {UIDatePicker} 
	 */
	showDatePicker(date, options, onSelect) {return}

	/**
	 * A DateTimePicker in mobile UI design combines date and time selection in one interface
	 * @param {str} [date] `Default value for date of the form "YYYY-MM-DD"`
	 * @param {str} [time] `Default value for time of the form "HH:SS"`\
 	 * &emsp; `HH` - MM
	 * @param {str} [format] The format of the value that will be pass to the `onSelect` callback. Default is `"YYYY-MM-DD HH:SS"`. You can refer to <a href="https://momentjs.com/" target="_blank">https://momentjs.com/</a> for more date time formats. Sample formats: `"MMMM Do YYYY,  h:ss a"`,  `"dddd"`,  `"MMM Do YY"`,  `"LLL"`\
 	 * &emsp; `HH` - MM\
 	 * &emsp; `h` - mm
	 * @param {(this: UIDateTimePicker) => void} [onSelect] 
	 * @return {UIDateTimePicker} 
	 */
	showDateTimePicker(date, time, format, onSelect) {return}

	/**
	 * Popover is very useful on showing additional info or displaying instructions especially when the control is click or hovered
	 * @param {obj} parent UI component. Can be a `Layout` `Button` `Image` `Text` or any UI component except dialogs.
	 * @param {str} [text] The text to de displayed. For displaying more data,  pass a `Layout`
	 * @param {str} [position] A comma separated values representing the
`"anchorOrigin, transformOrigin"`
`anchorOrigin` Position of the popover on its parent.
`transformOrigin` Origin on the popover itself.
Available values for both `anchorOrigin` and `transformOrigin`  are
`tl` for top-left,  `tc` for top-center,  `tr` `cl` `cc` `cr` `bl` `bc` and `br` for bottom-right.
	 * @param {num} [width] Fraction of the screen width `[0-1]`.
	 * @param {num} [height] Fraction of the screen height `[0-1]`.
	 * @return {UIPopover} 
	 */
	showPopover(parent, text, position, width, height) {return}

	/**
	 * "Popup" is like a short notification that quickly appears on the screen, providing extra options or information in a concise and unobtrusive manner
	 * @param {str} msg `The message to display on the pop-up.`
	 * @param {str} [options] A comma separated options.
Duration: `Short`,  `Long`
Vertical Alignment: `Top`,  `Bottom`
Horizontal Alignment: `Left`,  `Center`,  `Right`
Action options: `Icon`,  `HideOnAction`
Transition: `Grow`,  `Fade`,  `Slide`,  `Collapse`,  `Zoom`
	 * @param {num} [duration] `Time in milliseconds. Pass this if you don't want the default auto hide duration.`
	 * @param {str} [action] `Action button text`
	 * @return {UIPopup} 
	 */
	showPopup(msg, options, duration, action) {return}

	/**
	 * A ProgressDialog is a pop-up dialog that indicates the progress of a task, often accompanied by a loading spinner or bar
	 * @param {str} [text] `The text message of the progress dialog.`
	 * @param {str} [options] A comma separated options.
`AutoCancel` to close the dialog when backdrop is click.
	 * @return {UIProgressDialog} 
	 */
	showProgressDialog(text, options) {return}

	/**
	 * A Time Picker in mobile UI design allows users to select a specific time
	 * @param {str} time A default time value to which the timepicker begins. Value is of the form `HH\
 	 * &emsp; `HH` - mm`
	 * @param {str} options A comma separated options.
Orientation: `Portrait`,  `Landscape`
Format: `24H`,  `12H`
	 * @param {(this: UITimePicker) => void} onSelect 
	 * @return {UITimePicker} 
	 */
	showTimePicker(time, options, onSelect) {return}

}

class UIAccordion {

	/** @type {num} Sets and returns the width of the title as fraction */
	titleWidth;

	/** @type {str} Sets or returns the material icon font for the expand icon */
	expandIcon;

	/** @type {lst} Sets or returns the list of titles for the accordion panel */
	titles;

	/** @type {num} Collapse or shrink a corresponding accordion by its index */
	toggle;

	/** @type {str} Sets or returns the title text color in hexadecimal format `#rrggbb` */
	textColor1;

	/** @type {str} Sets or returns the secondary text color in hexadecimal format `#rrggbb` */
	textColor2;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the accordion title text size */
	textSize1;

	/** @type {num} Sets or returns the accordion secondary text size */
	textSize2;

	/** @type {bin} Sets or returns whether the accordion is rounded or not */
	rounded;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {lst} Sets or returns the secondary text of the accordion items */
	secondaryText;

	/** @type {lst} Sets or returns the padding of each accordion item */
	itemPadding;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIAccordion, title : str, index : num, pos : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the top and bottom accordion panels
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Get the layout of the corresponding accordion item
	 * @param {num} index `The index of the accordion. You can also pass accordion title.`
	 * @return {obj} 
	 */
	getLayout(index) {return}

	/**
	 * Update the accordion title by passing its corresponding index
	 * @param {num} index `The index of the corresponding title to updates.`
	 * @param {str} title `The new title text.`
	 */
	setTitleText(index, title) {return}

	/**
	 * Adds a secondary text on the accordion
	 * @param {lst} text The secondary text to display. You can also pass arguments as a comma separated string.
	 * @param {num} index If `index` is provided,  the corresponding index will be updated with the new text.
	 */
	setSecondaryText(text, index) {return}

	/**
	 * Sets the expand icon at the right of the accordion
	 * @param {str} icon `A material icon`
	 */
	setExpandIcon(icon) {return}

	/**
	 * Adds an item to the accordion
	 * @param {str} title `Accordion title`
	 * @param {str} secondaryText `Accordion secondary text`
	 * @param {num} index The index at which the accordion item will be added. If `null`,  the item will be added at the bottom of the accordion.
	 */
	addItem(title, secondaryText, index) {return}

	/**
	 * Removes accordion item by its index
	 * @param {num} index `The index of the corresponding accordion to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * Removes accordion item by its title name
	 * @param {str} title `The title of the corresponding accordion to remove.`
	 */
	removeItemByName(title) {return}

	/** Removes the first accordion item */
	shiftItem() {return}

	/** Removes the last accordion item */
	popItem() {return}

	/**
	 * Enable or disable the accordion component or an item in the accordion component
	 * @param {num} index `The index of the corresponding accordion.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * Get the enabled state of an accordion item by its index
	 * @param {num} index `The index of the accordion item.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * Enable or disable an accordion item by its name
	 * @param {str} name `The title of the accordion`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * Get the enabled state of an accordion item by its name
	 * @param {str} name `The title of the accordion.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * Get the index of the corresponding layout
	 * @param {obj} layout The layout to check.
	 * @return {num} 
	 */
	getLayoutIndex(layout) {return}

	/**
	 * Sets a callback function when the accordion is touch
	 * @param {(this: UIAccordion, index : num, expand : bin) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Sets the color of the title and the secondary text respectively
	 * @param {str} color1 Color of the title text in hexadecimal format `#rrggbb`
	 * @param {str} [color2] Color of the secondary text in hexadecimal format `#rrggbb`
	 */
	setTextColor(color1, color2) {return}

	/**
	 * Sets the padding of the accordion item
	 * @param {num} left `Left padding of the accordion item.`
	 * @param {num} top `Top padding of the accordion item.`
	 * @param {num} right `Right padding of the accordion item.`
	 * @param {num} bottom `Bottom padding of the accordion item.`
	 * @param {str} mode Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left, top, right, bottom, mode) {return}
}


class UIAppBar {

	/** @type {str} Sets or return the AppBar title `text` */
	text;

	/** @type {str} Sets or returns the theme color of the AppBar */
	color;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {str} Sets or returns the variant of the title text */
	textVariant;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the icon of the menu button */
	icon;

	/** @type {obj} Returns the right layout of the appbar where you can add controls */
	layout;

	/** @type {bin} Sets or returns whether the appbar has menu button */
	menu;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIAppBar, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the appbar
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds a callback handler when the component is touch
	 * @param {(this: UIAppBar, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Sets a function to be called when the user clicks the menu
	 * @param {(this: UIAppBar, pos : obj) => void} callback 
	 */
	setOnMenu(callback) {return}

	/**
	 * Adds a layout for additional controls at the right of the appbar
	 * @param {obj} lay The layout where to add controls
	 */
	addLayout(lay) {return}
}


class UIBottomNavbar {

	/** @type {bin} Sets or returns a boolean whether the labels are shown or hidden on active state */
	labels;

	/** @type {lst} Sets or returns the navigation actions array */
	list;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the current value of the BottomNavbar */
	value;

	/** @type {num} Sets or returns the icon font-size */
	iconSize;

	/** @type {str} Sets or returns the icon color */
	iconColor;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIBottomNavbar, text : str, index : num, pos : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds a callback handler when the BottomNavbar item is touch
	 * @param {(this: UIBottomNavbar, name : str, value : num, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Sets the navigation actions list
	 * @param {lst} navs The navigation actions array. See `navs` param above for format.
	 */
	setList(navs) {return}

	/**
	 * Returns the navigation actions list
	 * @return {lst} 
	 */
	getList() {return}

	/**
	 * Sets navigation action to active by its name
	 * @param {str} name `The name to be set to active`
	 */
	selectItem(name) {return}

	/**
	 * Sets a botttom navigation action to active by its index
	 * @param {num} index `The index of the bottom navigation action to be selected`
	 */
	selectItemByIndex(index) {return}

	/** Clears the selected navigation action */
	clearSelection() {return}

	/**
	 * Updates a navigation action by its index
	 * @param {num} index `The index to update`
	 * @param {str} newName `The name of the navigation action`
	 * @param {str} newIcon `Material icon`
	 */
	setItemByIndex(index, newName, newIcon) {return}

	/**
	 * Updates the icon of the given index
	 * @param {num} index `The index of the navigation action to update`
	 * @param {str} newIcon `Material icon`
	 */
	setIcon(index, newIcon) {return}

	/**
	 * Adds a navigation action
	 * @param {str} name `The name of the navigation action`
	 * @param {str} icon `Material icon`
	 * @param {num} index `The index in which to add the action.`
	 */
	addItem(name, icon, index) {return}

	/**
	 * Removes a navigation action by its given index
	 * @param {num} index `The index of the navigation action to be remove`
	 */
	removeItemByIndex(index) {return}

	/**
	 * Removes a navigation action by its given name
	 * @param {str} name `The name of the navigation action to be remove.`
	 */
	removeItemByName(name) {return}

	/** Removes the first navigation action */
	shiftItem() {return}

	/** Removes the last navigation action */
	popItem() {return}

	/**
	 * Sets a callback function to execute when bottom navbar value changes
	 * @param {(this: UIBottomNavbar, text : str, index : num) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * Enable or disable a bottom navigation action
	 * @param {num} index `The index of the navigation action.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * Get the enabled state of a navigation action
	 * @param {num} index `The index of the navigation action.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * Enabled or disable a bottom navigation action by its name
	 * @param {str} name `The name of the bottom navigation action.`
	 * @param {bin} value Values can be `true` or `false`
	 */
	setEnabledByName(name, value) {return}

	/**
	 * Get the enabled state of the bottom navigation action by its name
	 * @param {str} name `The name of the bottom navigation action.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/** Shows the text label of the bottom navigation action */
	showLabels() {return}

	/** Hides the text label of the bottom navigation action */
	hideLabels() {return}
}


class UIBottomSheet {

	/** @type {obj} Returns the layout of the bottomsheet */
	layout;

	/** @type {str} Sets or returns the left action icon */
	leftActionIcon;

	/** @type {str} Sets or returns the right action icon */
	rightActionIcon;

	/** @type {str} Sets or returns the bottomsheet title */
	title;

	/** @type {str} Sets or returns the bottomsheet description */
	description;

	/** Show the bottom sheet */
	show() {return}

	/** Hide the bottom sheet */
	hide() {return}

	/**
	 * Add a callback handler when the left and right action is click when they are provided
	 * @param {(this: UIBottomSheet, name : str, icon : str) => void} cb 
	 */
	setOnAction(cb) {return}

	/**
	 * Add a callback handler on `open` event
	 * @param {(this: UIBottomSheet) => void} cb 
	 */
	setOnOpen(cb) {return}

	/**
	 * Add a callback handler on `close` event
	 * @param {(this: UIBottomSheet) => void} cb 
	 */
	setOnClose(cb) {return}
}


class UIButton {

	/** @type {str} Sets or returns the button text */
	text;

	/** @type {num} Sets or returns the badge content */
	badge;

	/** @type {str} Sets or returns the color of the badge */
	badgeColor;

	/** @type {str} Sets or returns the tooltip text */
	toolTip;

	/** @type {str} Sets or returns the tooltip position */
	toolTipPosition;

	/** @type {str} Sets or returns the variant of the button */
	variant;

	/** @type {str} Sets or returns the theme color of the button */
	color;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {str} Sets or returns the size variant of the button */
	sizeVariant;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {str} Sets or returns the material icon font use for the leading icon */
	icon;

	/** @type {str} Sets or returns the accepted files for an upload button */
	acceptedFiles;

	/** @type {bin} Sets or returns the active state if button is `toggleable` */
	active;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIButton, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the button
	 * @param {num} [left] `The left padding in pixel.`
	 * @param {num} [top] `The top padding in pixels`, ``
	 * @param {num} [right] `The right padding in pixels.`
	 * @param {num} [bottom] `The bottom padding in pixels.`
	 * @param {str} [mode='px'] Can be `px` `%`
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the button
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds a callback handler when the button is touch
	 * @param {(this: UIButton, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Adds a callback handler when the button is long touch
	 * @param {(this: UIButton, pos : obj) => void} callback 
	 */
	setOnLongTouch(callback) {return}

	/**
	 * Sets a callback on file select
	 * @param {(this: UIButton, files : lst) => void} callback 
	 */
	setOnFileSelect(callback) {return}

	/**
	 * Sets a tooltip when the button is hovered
	 * @param {str} title `The text of the tooltip`
	 * @param {str} [pos='top'] Position of the tooltip. 
 Positions : `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTip(title, pos) {return}

	/**
	 * Sets a text-shadow to the button text
	 * @param {num} radius `The radius in pixels`
	 * @param {num} dx `The x-offset in pixels`
	 * @param {num} dy `The y-offset in pixels`
	 * @param {str} color The color in hexadecimal `#rrggbb`
	 */
	setTextShadow(radius, dx, dy, color) {return}
}


class UIButtonGroup {

	/** @type {lst} Sets or returns the list items of the button group */
	list;

	/** @type {str} Sets or returns the variant */
	variant;

	/** @type {str} Sets or returns the theme color of the button */
	color;

	/** @type {lst} Sets or returns the list of tooltip titles */
	toolTips;

	/** @type {str} Sets or returns the position of the tooltip */
	toolTipPosition;

	/** @type {str} Sets or returns the size variant */
	sizeVariant;

	/** @type {str} Sets or returns the orientation of the button group */
	orientation;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {lst} Sets or returns the indexes of the active button items */
	activeItems;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIButtonGroup, text : str, index : num, pos : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds a callback handler when a button item is touch
	 * @param {(this: UIButtonGroup, text : str, index : num, active : bin, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Sets a new text for the item in the button group
	 * @param {str} item `The new text`
	 * @param {num} index `The index of the item.`
	 */
	setItemByIndex(item, index) {return}

	/**
	 * Adds an additional item in the button group
	 * @param {str} item `The additional item.`
	 */
	addItem(item) {return}

	/**
	 * Removes an item in the button group by its index
	 * @param {num} index `The index of the item to be remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * Removes an item in the button group by its name
	 * @param {str} name `The name of the item to be remove.`
	 */
	removeItemByName(name) {return}

	/** Removes the last item of the button group */
	popItem() {return}

	/** Removes the first item in the button group */
	shiftItem() {return}

	/**
	 * Adds a tooltips to the ButtonGroup items
	 * @param {lst} titles The titles for each item in the ButtonGroup.
	 * @param {str} [pos='top'] The positio of the tooltip. 
 Can be `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTips(titles, pos) {return}

	/**
	 * Enable of disable the elevation of the button group
	 * @param {bin} enable Can be `true` or `false`
	 */
	enableElevation(enable) {return}

	/**
	 * Enable or disable a button item in the button group
	 * @param {num} index `The index of the button item.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * Get the enabled state of the button item in the button group
	 * @param {num} index `The index of the button item in the button group.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * Enable or disable a button item by its name
	 * @param {str} name `The button text.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * Get the enabled state of button item in the button group
	 * @param {str} name `The button text.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}
}


class UICameraView {

	/** @type {num} Sets or returns the image height in pixels */
	imageHeight;

	/** @type {num} Sets or returns the image width in pixels */
	width;

	/** @type {obj} Returns the capabilities of the camera */
	capabilities;

	/** @type {num} Sets or returns the video frame rate */
	frameRate;

	/** @type {str} Sets or returns the camera focus mode */
	focusMode;

	/** @type {num} Sets or returns the focus distance */
	focusDistance;

	/** @type {obj} Sets the preview image taken on capture */
	img;

	/** @type {bin} Sets or returns a boolean value whether the sound is enabled or disabled */
	sound;

	/** @type {str} The camera source to be use */
	source;

	/** @type {num} Sets or returns the camera iso */
	iso;

	/**
	 * Returns the pixel data of the image preview or a given portion of it
	 * @param {str} format `Values are "rgba" array`, ` or "pngbase64" or "jpgbase64".`
	 * @param {num} left `Starting pixel from the left.`
	 * @param {num} top `Starting pixel from the top.`
	 * @param {num} width `The width of the image portion in pixels.`
	 * @param {num} height `The height of the image portion in pixels.`
	 * @return {obj} 
	 */
	getPixelData(format, left, top, width, height) {return}

	/**
	 * Capture an image
	 * @param {str} type `The image type. Values are "jpg" or "jpeg""`, ` "png"`, ` "webp"`, ` "gif". Default is "jpg".`
	 * @param {str} format `The returned data format. Can be "base64"`, ` "bytes"(regular array)`, ` "uint8array"(typed array) or "arraybuffer". Default is "base64"`
	 * @return {obj} 
	 */
	capture(type, format) {return}

	/**
	 * Record a video
	 * @param {str} type `Video output encoding format. Values can be "mp4"`, ` "ogg" and "webm".Default is "mp4"`
	 * @param {str} format `Return video data format. Values can be "blob"`, ` "base64"`, ` "bytes" (regular array)`, ` "objecturl"`, ` "arraybuffer"`, ` "uint8array" (typed array). Default is "base64"`
	 * @param {(this: UICameraView) => void} cb 
	 */
	record(type, format, cb) {return}

	/**
	 * Sets the size of the image
	 * @param {num} width The image width in pixels. See `capabilities` for minimum and maximum values.
	 * @param {num} height The image height in pixels. See `capabilities` for minimum and maximum values.
	 */
	setPictureSize(width, height) {return}

	/** Start streaming the camera */
	startPreview() {return}

	/** Update the camera preview */
	updatePreview() {return}

	/** Stop recording a video */
	stop() {return}

	/**
	 * Add a callback handler when the camera is ready
	 * @param {(this: UICameraView) => void} cb 
	 */
	setOnReady(cb) {return}

	/**
	 * Add a callback handler when an error occured
	 * @param {(this: UICameraView, error : str) => void} cb 
	 */
	setOnError(cb) {return}
}


class UICard {

	/** @type {str} Sets or returns the card header title */
	headerTitle;

	/** @type {str} Sets or returns the card header subheader or subtitle */
	headerSubtitle;

	/** @type {str} Sets or returns the card header avatar */
	headerAvatar;

	/** @type {str} Sets or returns the card header action */
	headerAction;

	/** @type {str} Sets or returns the card header avatar color in css supported color format */
	headerAvatarColor;

	/** @type {str} Sets or returns the card media */
	media;

	/** @type {str} Sets or returns the title of the card content */
	bodyTitle;

	/** @type {str} Sets or returns the text of the card content */
	bodyText;

	/** @type {lst} Sets or returns the list of card actions */
	actions;

	/** @type {obj} Returns the div element of the card content */
	layout;

	/** @type {obj} Sets or returns the type of actions in the card */
	actionType;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {num} Sets or returns the elevation of the card */
	elevation;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UICard, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Add header items to the card
	 * @param {str} title `The title of the card.`
	 * @param {str} subtitle `The subheader of the card.`
	 * @param {str} avatar `Can be a char or a path to an image.`
	 * @param {str} action `Material icon font.`
	 */
	addHeaderItems(title, subtitle, avatar, action) {return}

	/**
	 * Add card body items
	 * @param {str} title `The title of the content of the card.`
	 * @param {str} text `The description of the card.`
	 */
	addBodyItems(title, text) {return}

	/**
	 * Add a callback function to be called when a card action is click
	 * @param {(this: UICard, icon : str, index : num) => void} cb 
	 */
	setOnAction(cb) {return}

	/**
	 * Add a callback function to be called when the header action icon is click
	 * @param {(this: UICard) => void} cb 
	 */
	setOnHeaderAction(cb) {return}
}


class UICheckbox {

	/** @type {str} Sets or returns the text position */
	textPosition;

	/** @type {str} Sets or returns the material icon font for check stated */
	checkIcon;

	/** @type {str} Sets or returns the material icon font for uncheck state */
	uncheckIcon;

	/** @type {bin} Sets or returns the checked state of the checkbox */
	value;

	/** @type {bin} Returns whether the Checkbox is enabled or disabled */
	enabled;

	/** @type {str} Sets or returns the theme color of the checkbox when checked */
	color;

	/** @type {str} Sets or returns the checkbox text */
	text;

	/** @type {bin} Enabled or disable the checkbox component */
	disable;

	/** @type {num} Sets or returns the size of the icon */
	iconSize;

	/** @type {str} Sets or returns the color of the checkbox icon */
	iconColor;

	/** @type {num} Sets or returns the space between the checkbox icon and the label text */
	spaceBetween;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UICheckbox, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds an event handler when the checkbox is touch
	 * @param {(this: UICheckbox, check : bin, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Sets a custom icon for the checkbox
	 * @param {str} checked `Material icon for checked state`
	 * @param {str} unchecked `Material icon for unchecked state`
	 */
	setIcon(checked, unchecked) {return}

	/**
	 * Returns the icons of the form { checkIcon, uncheckedIcon }
	 * @return {obj} 
	 */
	getIcon() {return}
}


class UICheckboxGroup {

	/** @type {lst} Sets or returns the list items */
	list;

	/** @type {str} Sets or returns the label text */
	label;

	/** @type {str} Sets or returns the material icon font for check stated */
	checkIcon;

	/** @type {str} Sets or returns the material icon font for uncheck state */
	uncheckIcon;

	/** @type {str} Sets or returns the size variant of the Checkbox */
	sizeVariant;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {str} Sets or returns the depth of the container */
	elevation;

	/** @type {str} Sets or returns the color of the checkbox icon */
	iconColor;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Sets or returns the size of the checkbox icon */
	iconSize;

	/** @type {num} Sets or returns the space between the checkbox icon and the text */
	spaceBetween;

	/** @type {str} Sets or returns the theme color use for the checkbox */
	color;

	/** @type {bin} Sets or returns whether the container is outlined or elevated */
	outlined;

	/** @type {lst} Sets or returns the padding of each list item */
	itemPadding;

	/** @type {str} Sets or returns the orientation of the list */
	orientation;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UICheckboxGroup, label : str, index : num, pos : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the checkbox group
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Sets a callback function when the checkbox item is touch
	 * @param {(this: UICheckboxGroup, value : bin, text : str, index : num, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Adds a callback function to be called whent there is a change of value
	 * @param {(this: UICheckboxGroup, values : lst) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * Sets the checked icon and unchecked icon
	 * @param {str} checked `Material icon font`
	 * @param {str} unchecked `Material icon font`
	 */
	setIcon(checked, unchecked) {return}

	/**
	 * Get the checked and unchecked icon of the checkbox group
	 * @return {obj} 
	 */
	getIcon() {return}

	/**
	 * Checked or unchecked a given item by its index
	 * @param {num} item `The item or index of the item.`
	 * @param {bin} bool The item value. Can be `true` or `false`.
	 */
	setCheckedByIndex(item, bool) {return}

	/**
	 * Checked or unchecked a given item by its name
	 * @param {str} name `The item or index of the item.`
	 * @param {bin} bool The item value. Can be `true` or `false`.
	 */
	setCheckedByName(name, bool) {return}

	/**
	 * Get the list of all checked items
	 * @return {str} 
	 */
	getCheckedItems() {return}

	/**
	 * Get the current value of the item in the list
	 * @param {num} index `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getCheckedByIndex(index) {return}

	/**
	 * Get the current value of the item in the list
	 * @param {str} name `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getCheckedByName(name) {return}

	/**
	 * Sets a new text to a given item by its index
	 * @param {num} index `The index of the item.`
	 * @param {str} val `The new text to replace.`
	 */
	setTextByIndex(index, val) {return}

	/**
	 * Sets a new text to a given item by its name
	 * @param {str} name `The name of the item`
	 * @param {str} val `The new text to replace`
	 */
	setTextByName(name, val) {return}

	/**
	 * Get the text of the item in a given index
	 * @param {num} index `The index of the list`
	 * @return {str} 
	 */
	getText(index) {return}

	/**
	 * Sets a new list of item in the checkbox group
	 * @param {lst} list The new list items for the checkbox group.
	 */
	setList(list) {return}

	/**
	 * Enable or disable an item in the checkbox group
	 * @param {num} index `The index of the checkbox item.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * Get the enabled state of a checkbox item
	 * @param {num} index `The index of the checkbox item.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * Enable or disable a checkbox item by its name
	 * @param {str} name `The name of the checkbox item.`
	 * @param {bin} value Values can be `true` or `false`
	 */
	setEnabledByName(name, value) {return}

	/**
	 * Get the enabled state of a checkbox item by its name
	 * @param {str} name `The checkbox item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * Add or insert an item in the checkbox group
	 * @param {str} text `The text label for the checkbox.`
	 * @param {num} index `The index in which to insert the item.`
	 */
	addItem(text, index) {return}

	/**
	 * Removes an item in the checkbox group by its corresponding index
	 * @param {num} index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * Removes an item in the checkbox group by its title name
	 * @param {str} title `The title text of the corresponding checkbox item.`
	 */
	removeItemByName(title) {return}

	/** Removes the last item in the checkbox group */
	popItem() {return}

	/** Removes the first item in the checkbox group */
	shiftItem() {return}

	/**
	 * Sets the padding of the checkbox item
	 * @param {num} left `Left padding of the checkbox item.`
	 * @param {num} top `Top padding of the checkbox item.`
	 * @param {num} right `Right padding of the checkbox item.`
	 * @param {num} bottom `Bottom padding of the checkbox item.`
	 * @param {str} mode Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left, top, right, bottom, mode) {return}
}


class UIChip {

	/** @type {str} Sets or returns the text of the chip */
	text;

	/** @type {str} Sets or returns the material icon font if icon is provided */
	icon;

	/** @type {str} Sets or returns the avatar */
	avatar;

	/** @type {str} Sets or returns the delete icon */
	deleteIcon;

	/** @type {str} Sets or returns the size variant */
	sizeVariant;

	/** @type {bin} Returns whether the chip is enabled or disabled */
	enabled;

	/** @type {str} Sets or returns the variant of the chip */
	variant;

	/** @type {str} Sets or returns the theme color of the chip */
	color;

	/** @type {str} Sets or returns the icon color in hexadecimal format */
	iconColor;

	/** @type {num} Sets or returns the font-size of the icon in css font-size format */
	iconSize;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIChip, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the chip
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds a callback handler when the chip is touch
	 * @param {(this: UIChip, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Sets the chip to clickable
	 * @param {bin} touchable Can be `true` or `false`
	 */
	setTouchable(touchable) {return}

	/**
	 * Sets a callback function when the chip is deleted
	 * @param {(this: UIChip) => void} callback 
	 */
	setOnDelete(callback) {return}
}


class UIDialog {

	/** @type {str} Sets or returns the dialog text */
	text;

	/** @type {str} Sets or returns the dialog title text */
	titleText;

	/** @type {str} Sets or returns the title text color in hexadecimal format */
	titleColor;

	/** @type {obj} Returns the layout of the dialog where you can add custom controls */
	layout;

	/**
	 * Adds a callback function when the action buttons are click
	 * @param {(this: UIDialog, text : str, index : num) => void} callback 
	 */
	setOnAction(callback) {return}

	/**
	 * Adds a callback function when the dialog is close
	 * @param {(this: UIDialog) => void} callback 
	 */
	setOnClose(callback) {return}

	/** Show the dialog */
	show() {return}

	/** Hide the dialog */
	hide() {return}
}


class UIDivider {

	/** @type {str} Sets or returns the color in hexadecimal format */
	color;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIDivider, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIDrawer {

	/** @type {bin} Sets or returns the `disabled` state of the drawer */
	disabled;

	/** @type {num} Sets or returns the width of the drawer as a fraction of the screen viewport relative to its anchor position `[0-1]` */
	width;

	/** @type {str} Sets or returns the anchor position of the drawer */
	anchor;

	/** @type {num} Sets or returns the width of the swipeable area of the Drawer */
	swipeAreaWidth;

	/**
	 * Adds a layout into the drawer
	 * @param {obj} lay Layout component.
	 */
	addLayout(lay) {return}

	/**
	 * Disable swipe to open feature of the drawer
	 * @param {bin} value Values can be `true` or `false`.
	 */
	disableSwipeToOpen(value) {return}

	/**
	 * Disable the backdrop transition
	 * @param {bin} value Values can be `true` or `false`.
	 */
	disableBackdropTransition(value) {return}

	/**
	 * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit to promote accidental discovery of the swipe gesture
	 * @param {bin} value Values can be `true` or `false`.
	 */
	disableDiscovery(value) {return}

	/**
	 * Adds a callback function when the drawer is opened via swiping from the anchor position
	 * @param {(this: UIDrawer) => void} callback 
	 */
	setOnOpen(callback) {return}

	/**
	 * Adds a callback function when the drawer is closed
	 * @param {(this: UIDrawer) => void} callback 
	 */
	setOnClose(callback) {return}

	/**
	 * Open the drawer dynamically
	 * @param {str} [anchor='left'] Optional. The anchor position. Can be `left`,  `top`,  `right`,  `bottom`. Default is `left`.
	 */
	show(anchor) {return}

	/** Close the drawer dynamically */
	hide() {return}
}


class UIDropdown {

	/** @type {lst} Sets or returns the dropdown list */
	list;

	/** @type {str} Sets or returns the value of the Dropdown */
	value;

	/** @type {str} Sets or returns the variant of the dropdown button */
	variant;

	/** @type {str} Sets or returns the size variant of the dropdown button */
	sizeVariant;

	/** @type {str} Sets or returns the theme color */
	color;

	/** @type {str} Sets or returns the orientation of the dropdown buttongroup */
	orientation;

	/** @type {str} Sets or returns the default label of the dropdown */
	label;

	/** @type {str} Sets or returns the dropdown material icon font */
	icon;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIDropdown, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the dropdown
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds a callback handler when the component is touch
	 * @param {(this: UIDropdown, text : str, index : num, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Adds a callback function on change event
	 * @param {(this: UIDropdown, text : str, index : num) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * Adds a callback function on close event
	 * @param {(this: UIDropdown) => void} callback 
	 */
	setOnOpen(callback) {return}

	/**
	 * Adds a callback function on close event
	 * @param {(this: UIDropdown) => void} callback 
	 */
	setOnClose(callback) {return}

	/**
	 * Sets the list items on the dropdown
	 * @param {lst} val The list of new items.
	 */
	setList(val) {return}

	/**
	 * Updates the text of the corresponding item in the dropdown
	 * @param {str} item `The new item text.`
	 * @param {num} index `The index of the item to update.`
	 */
	setItemByIndex(item, index) {return}

	/**
	 * Returns a dropdown item by its corresponding index
	 * @param {num} index `The index of corresponding item.`
	 * @return {str} 
	 */
	getItemByIndex(index) {return}

	/**
	 * Enable or disable an item in the dropdown
	 * @param {num} index `The index of the item.`
	 * @param {bin} value Values can be `true` `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * Get the enabled state of an item in the dropdown menu
	 * @param {num} index `The index of the item.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * Enable or disable an item in the dropdown
	 * @param {str} name `The name of the item.`
	 * @param {bin} value Values can be `true` `false`.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * Get the enabled state of a menu item by its name
	 * @param {str} name `The name of the corresponding menu item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * Add or insert a menu item in the dropdown list
	 * @param {str} name `The name of the menu.`
	 * @param {num} index `The index in which to insert the menu item.`
	 */
	addItem(name, index) {return}

	/**
	 * Removes a menu item in the dropdown by its index
	 * @param {num} index `The index of the menu item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * Removes a menu item in the dropdown by its name
	 * @param {str} name `The name of the menu item.`
	 */
	removeItemByName(name) {return}

	/** Removes the first item in the dropdown menu */
	shiftItem() {return}

	/** Removes the last item in the dropdown menu */
	popItem() {return}
}


class UIFloatingActionButton {

	/** @type {str} Sets or returns the material icon font */
	icon;

	/** @type {str} Sets or returns the text for extended FAB */
	text;

	/** @type {str} Sets or returns the theme color for the FAB */
	color;

	/** @type {str} Sets or returns the variant use for the FAB */
	variant;

	/** @type {str} Sets or returns the size variant of the FAB */
	sizeVariant;

	/** @type {num} Sets or returns the size of the icon */
	iconSize;

	/** @type {bin} Sets or returns the disabled state of the ripple effect */
	disabledRipple;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIFloatingActionButton, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the button
	 * @param {num} tl `Top-left corner radius.`
	 * @param {num} tr `Top-right corner radius.`
	 * @param {num} bl `Bottom-left corner radius.`
	 * @param {num} br `Bottom-right corner radius.`
	 * @param {str} mode Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds a callback handler when the FAB is touch
	 * @param {(this: UIFloatingActionButton, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}
}


class UIImage {

	/** @type {lst} Returns the pixel data of the image */
	pixelData;

	/** @type {str} Sets or returns the fill color used on close paths such as square, circle, rectangle or arcs */
	fillColor;

	/** @type {str} Sets or returns the path or url of the image file */
	image;

	/** @type {num} Sets or returns the current line thickness */
	lineWidth;

	/** @type {str} Sets or returns the style of the end caps for a line */
	lineCap;

	/** @type {str} Sets or returns the type of corner created when two lines meet */
	lineJoin;

	/** @type {num} Sets or returns the maximum miter length */
	miterLimit;

	/** @type {str} Sets or returns the current color of the line or stroke */
	strokeColor;

	/** @type {str} Sets or returns the background color of the canvas */
	fill;

	/** @type {str} Sets or returns the text-style for drawing in the canvas */
	textStyle;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the material icon for error placeholder image */
	errorIcon;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIImage, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Enable or disbale the context menu or the right click menus
	 * @param {bin} value Value. Can be `true` `false`
	 */
	enableContextMenu(value) {return}

	/**
	 * Get the color of a single pixel in the image
	 * @param {num} x `The x-coordinate of the pixel from the left.`
	 * @param {num} y `The y-coordinate of the pixel from the top.`
	 * @param {str} format Pass `"hex"` to return color as hexadecimal formart `"#rrggbb"` or `"hexa"` to include include alpha `"#aarrggbb"` . Pass `"rgb"` to return color as `rgb` format `"rgb(r,  g,  b)"` or pass `"rgba"` for `"rgba(r,  g,  b,  a)"`.
	 * @return {lst} 
	 */
	getPixelColor(x, y, format) {return}

	/**
	 * Sets the color of a specific pixel in the canvas
	 * @param {num} x `The x-coordinate of the pixel.`
	 * @param {num} y `The y-coordinate of the pixel.`
	 * @param {str} color A hexadecimal color format of the form `"#rrggbb"` or a comma separated rgb color of the form `"r, g, b"`.
	 */
	setPixelColor(x, y, color) {return}

	/**
	 * Returns the pixel data of the image
	 * @param {num} x `The x-coordinate where to start getting image data.`
	 * @param {num} y `The y-coordinate where to start getting image data.`
	 * @param {num} width `The width of the image data.`
	 * @param {num} height `The height of the image data.`
	 * @return {obj} 
	 */
	getPixelData(x, y, width, height) {return}

	/**
	 * Set the pixel data of the canvas
	 * @param {str} base64 Base64 encoded string of the image or the `ImageData` object of the canvas.
	 * @param {num} x `The x-coordinate of the top-left corner.`
	 * @param {num} y `The y-coordinate of the top-left corner.`
	 * @param {num} width `The width of the new image data.`
	 * @param {num} height `The height of the new image data.`
	 */
	setPixelData(base64, x, y, width, height) {return}

	/**
	 * Sets a single line font styling for rendering text on canvas
	 * @param {str} family `The font-family for the text.`
	 * @param {num} size `The text-size for the text.`
	 * @param {str} style Value can be `normal` or `italic`, 
	 * @param {str} weight Values can be `normal` or `bold`.
	 */
	setFont(family, size, style, weight) {return}

	/**
	 * Draws a line between two points in the canvas
	 * @param {num} x1 `The x-coordinate of the starting point in pixels.`
	 * @param {num} y1 `The y-coordinate of the starting point in pixels`
	 * @param {num} x2 `The x-coordinate of the second point in pixels.`
	 * @param {num} y2 `The y-coordinate of the second point in pixels.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 */
	drawLine(x1, y1, x2, y2, strokeColor, strokeWidth) {return}

	/**
	 * Draws a circle in the canvas
	 * @param {num} x `The x-coordinate of the center of the circle in pixels.`
	 * @param {num} y `The y-coordinate of the center of the circle in pixels.`
	 * @param {num} radius `The radius of the circle in pixels.`
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stoke thickness.`
	 */
	drawCircle(x, y, radius, fillColor, strokeColor, strokeWidth) {return}

	/**
	 * Draws a square into the canvas
	 * @param {num} x `The position from the left of the top-left corner of the square in pixels.`
	 * @param {num} y `The distance from the top of the top-left corner of the square in pixels.`
	 * @param {num} width `The width of the square in pixels.`
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness in pixels.`
	 */
	drawSquare(x, y, width, fillColor, strokeColor, strokeWidth) {return}

	/**
	 * Draws a rectangle into the canvas
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
	 * Draws an arc in the canvas
	 * @param {num} x `The x-coordinate of the center of the arc in pixels.`
	 * @param {num} y `The y-coordinate of the center of the arc in pixels.`
	 * @param {num} radius `The radius of the arc in pixels.`
	 * @param {num} start `The starting angle in degress`
	 * @param {num} end `The angle in degress in which the arc will stop.`
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 * @param {str} [type] The type of arc. Can be `filled` or `segment`.
	 */
	drawArc(x, y, radius, start, end, fillColor, strokeColor, strokeWidth, type) {return}

	/**
	 * Draws a polyline on the canvas by passing an array of points
	 * @param {lst_obj} points An array of coordinates. Each element on this array is an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point, or an object of the form `{x, y}`.
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 */
	drawPolyline(points, strokeColor, strokeWidth) {return}

	/**
	 * Draws a polygon on the canvas by passing an array of points
	 * @param {lst_obj} points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point, or an object of the form `{x, y}`.
	 * @param {str} [fillColor] `A hexadecimal color.`
	 * @param {str} [strokeColor] `A hexadecimal color.`
	 * @param {num} [strokeWidth] `The stroke thickness.`
	 */
	drawPolygon(points, fillColor, strokeColor, strokeWidth) {return}

	/**
	 * Draws a single pixel point in a specified coordinate
	 * @param {num} x `The x-coordinate in pixels.`
	 * @param {num} y `The y-coordinate in pixels.`
	 * @param {num} size `The width of point in pixels.`
	 * @param {str} [color] `A hexadecimal color.`
	 */
	drawPoint(x, y, size, color) {return}

	/**
	 * Add a text in the canvas image
	 * @param {str} text `The text to be drawn.`
	 * @param {num} x `Distance from the left in pixels.`
	 * @param {num} y `Distance from the top in pixels.`
	 * @param {str} fillColor Text color in hexadecimal format `#rrggbb`.
	 * @param {str} strokeColor Text border color in hexadecimal format `#rrggbb`.
	 * @param {num} strokeWidth `The border width in pixels.`
	 */
	drawText(text, x, y, fillColor, strokeColor, strokeWidth) {return}

	/**
	 * Draws an image to the canvas
	 * @param {str} img `Path to image file.`
	 * @param {num} [x] `The distance from the left of the top-left corner of the image in pixels.`
	 * @param {num} [y] `The distance from the top of the top-left corner of the image in pixels.`
	 * @param {num} [width] `If provided`, ` the image will be shrink or stretch to fill this width in pixels.`
	 * @param {num} [height] `If provided`, ` the height of the image will be shrink or stretch to fill this height in pixels.`
	 */
	drawImage(img, x, y, width, height) {return}

	/** Clears the drawings by filling the whole canvas with white background color */
	clear() {return}

	/**
	 * Translate the origin of the canvas at a new coordinate with the given angle of rotation
	 * @param {num} x `The new x-coordinate of the origin.`
	 * @param {num} y `The new y-coordinate of the origin.`
	 * @param {num} angle `The angle of rotation in degrees.`
	 */
	translateOrigin(x, y, angle) {return}

	/**
	 * Rotate the canvas at a given angle and pivot point
	 * @param {num} angle `The angle of rotation in degrees.`
	 * @param {num} x `An optional x-coordinate of the pivot.`
	 * @param {num} y `An optional y-coordinate of the pivot.`
	 */
	rotate(angle, x, y) {return}

	/**
	 * Measure the text metrics with the current settings of the canvas context
	 * @param {str} text `The text to measure.`
	 * @return {obj} 
	 */
	measureText(text) {return}

	/**
	 * Add a callback function on touch down event
	 * @param {(this: UIImage, pos : obj) => void} callback 
	 */
	setOnTouchDown(callback) {return}

	/**
	 * Add a callback function on touch up event
	 * @param {(this: UIImage, pos : obj) => void} callback 
	 */
	setOnTouchUp(callback) {return}

	/**
	 * Sets a callback function when the image component is touch
	 * @param {(this: UIImage, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Sets a callback function on load event
	 * @param {(this: UIImage) => void} callback 
	 */
	setOnLoad(callback) {return}

	/**
	 * Sets a callback function when the a mouse move event is triggered
	 * @param {(this: UIImage, pos : obj) => void} callback 
	 */
	setOnTouchMove(callback) {return}

	/**
	 * Adds a callback handler for a long touch event
	 * @param {(this: UIImage, pos : obj) => void} callback 
	 */
	setOnLongTouch(callback) {return}
}


class UILayout {

	/** @type {str} Sets or returns the orientation of the controls in a Linear Layout */
	orientation;

	/** @type {str} Sets or returns the horizontal alignment of the control in a Linear Layout */
	alignment;

	/** @type {str} Sets or returns the vertical alignment of the controls in a Linear Layout */
	verticalAlignment;

	/** @type {str} Sets or returns the spacing of the child control in a Linear Layout */
	childSpacing;

	/** @type {num} Sets or returns the index of the current slide */
	currentSlide;

	/** @type {lst} Sets or returns the margins of child components */
	childMargins;

	/** @type {lst} Returns all the children added to this layout */
	children;

	/** @type {num} Sets or returns the elevation of a card layout */
	elevation;

	/** @type {str} Sets or returns the card variant */
	variant;

	/** @type {str} Sets or returns the layout type */
	layoutType;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UILayout, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Sets a default margins for the children of the layout component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode='px'] Unit of measurement.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension, 
`rem`
	 */
	setChildMargins(left, top, right, bottom, mode) {return}

	/**
	 * Transition to the given index
	 * @param {num} index `Index of a given layout.`
	 */
	goto(index) {return}

	/** Transition to the next slide */
	next() {return}

	/** Transition to the previous slide */
	previous() {return}

	/**
	 * Adds a callback function to be called when slide event is triggered
	 * @param {(this: UILayout, component : obj, index : num) => void} callback 
	 */
	setOnSlide(callback) {return}

	/**
	 * Returns the index of the child from the layout children stack in order
	 * @param {obj} child The child component of the layout.
	 * @return {num} 
	 */
	getChildOrder(child) {return}

	/**
	 * Move the child to the front
	 * @param {obj} child The child object of the layout.
	 */
	childToFront(child) {return}

	/**
	 * Check whether a component is a child of this layout
	 * @param {obj} child The child component to check.
	 * @return {bin} 
	 */
	hasChild(child) {return}

	/**
	 * Removes a given child from this layout
	 * @param {obj} child The child control to be remove.
	 */
	removeChild(child) {return}

	/**
	 * Adds a callback handler when the layout is touch
	 * @param {(this: UILayout, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Adds a callback handler when the layout is long touch
	 * @param {(this: UILayout, pos : obj) => void} callback 
	 */
	setOnLongTouch(callback) {return}

	/** Clear the content of the layout */
	clear() {return}
}


class UIList {

	/** @type {str} Sets or returns the size of the avatar */
	avatarSize;

	/** @type {str} Sets or returns the variant of the avatar */
	avatarVariant;

	/** @type {str} Sets or returns the theme color of the checkbox when `Selectable` option is enabled */
	checkboxColor;

	/** @type {str} Sets or returns the label text */
	label;

	/** @type {bin} Sets or returns a boolean whether the list is selectable or not */
	selectable;

	/** @type {num} Sets or returns the depth of the list container */
	elevation;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {num} Sets or returns the size of the title text */
	textSize1;

	/** @type {num} Sets or returns the size of the body text */
	textSize2;

	/** @type {num} Sets or returns the size of the icon text */
	iconSize;

	/** @type {str} Sets or returns the color of the title text in hexadecimal format */
	textColor1;

	/** @type {str} Sets or returns the color of the body text in hexadecimal format */
	textColor2;

	/** @type {str} Sets or returns the icon color in a hexadecimal format */
	iconColor;

	/** @type {bin} Sets or returns whether the container is outlined or elevated */
	outlined;

	/** @type {lst} Sets or returns the padding of each list item */
	itemPadding;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIList, title : str, body : str, icon : str, action : str, index : num, pos : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the list container
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds an item in the list
	 * @param {str} title `The title of the item.`
	 * @param {str} [body] `The text description of the item.`
	 * @param {str} [image] `A material icon or image file path.`
	 * @param {str} [action] `A text for the action or material icon.`
	 * @param {num} [index] `The index in which to add or insert the item.`
	 */
	addItem(title, body, image, action, index) {return}

	/**
	 * Adds a callback function when the list item is click
	 * @param {(this: UIList, title : str, body : str, icon : str, action : str, index : num, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Adds a callback handler for a long touch event
	 * @param {(this: UIList, title : str, body : str, icon : str, action : str, index : num, pos : obj) => void} callback 
	 */
	setOnLongTouch(callback) {return}

	/**
	 * Sets a callback handler when an item in the list is selected
	 * @param {(this: UIList, title : str, index : num, checked : bin) => void} callback 
	 */
	setOnSelect(callback) {return}

	/**
	 * Sets a callback handler when an action icon is click
	 * @param {(this: UIList, icon : str, index : num) => void} callback 
	 */
	setOnAction(callback) {return}

	/**
	 * Returns an array of indexes of the selected items
	 * @return {lst} 
	 */
	getSelectedItems() {return}

	/**
	 * Returns an array of titles of selected items
	 * @return {lst} 
	 */
	getSelectedTitles() {return}

	/**
	 * Updtes the list
	 * @param {lst} list A comma separated list of items or an array. See the list format above.
	 */
	setList(list) {return}

	/**
	 * Make the list selectable or not
	 * @param {bin} selectable `If true`, ` make the list selectable. Otherwise`, ` list is not selectable`
	 */
	setSelectable(selectable) {return}

	/**
	 * Change the content of an item in a list
	 * @param {num} index `The index of the item to update`
	 * @param {str} newTitle `The new title of the item`
	 * @param {str} [newBody] `The new body text`
	 * @param {str} [newIcon] `The new icon or image`
	 * @param {str} [newAction] `The new action icon or action text`
	 */
	setItemByIndex(index, newTitle, newBody, newIcon, newAction) {return}

	/**
	 * Get the item in a list by its corresponding index
	 * @param {num} index `Returns the corresponding list item.`
	 * @param {bin} json Pass `true` to return the corresponding list item as an object of the form `{title, body, image, action}`
	 * @return {obj} 
	 */
	getItemByIndex(index, json) {return}

	/**
	 * Updates an item in the list
	 * @param {str} title `The title of the list item to update.`
	 * @param {str} newTitle `The new title of the list item.`
	 * @param {str} [newBody] `The new description of the list item.`
	 * @param {str} [newIcon] `A material icon font or image file path.`
	 * @param {str} [newAction] `A material icon font for the action icon button.`
	 */
	setItem(title, newTitle, newBody, newIcon, newAction) {return}

	/**
	 * Get the item in the list by its corresponding title
	 * @param {str} title `Title of the list item.`
	 * @param {bin} json Pass `true` to return the corresponding list item as an object of the form `{title, body, image, action}`
	 * @return {obj} 
	 */
	getItem(title, json) {return}

	/**
	 * Removes an element from the list
	 * @param {num} index `The index of the item to remove`
	 */
	removeItemByIndex(index) {return}

	/**
	 * Removes an item in the list by its title
	 * @param {str} name `The title of the list to remove.`
	 */
	removeItemByName(name) {return}

	/** Removes the first item the list */
	shiftItem() {return}

	/** Removes the last item in the list */
	popItem() {return}

	/** Clears all selection in the list if the list is selectable */
	deselectAll() {return}

	/**
	 * Selects an item in the list by its index and marked the checkbox
	 * @param {num} index `The index to be selected.`
	 */
	selectItemByIndex(index) {return}

	/**
	 * Sets a new title text to a corresponding item in a list
	 * @param {num} index `The index of the corresponding list item.`
	 * @param {str} title `The new title text.`
	 */
	setTitleText(index, title) {return}

	/**
	 * Sets a new secondary text to a corresponding item in a list
	 * @param {num} index `The index of the list whose secondary text to be changed.`
	 * @param {str} newText `The new secondary text.`
	 */
	setBodyText(index, newText) {return}

	/**
	 * Updates an icon in a list by its corresponding index
	 * @param {num} index `The index of the corresponding list item.`
	 * @param {str} icon `Material icon font.`
	 */
	setIcon(index, icon) {return}

	/**
	 * Sets the padding of the list item
	 * @param {num} [left] `Left padding of the list item.`
	 * @param {num} [top] `Top padding of the list item.`
	 * @param {num} [right] `Right padding of the list item.`
	 * @param {num} [bottom] `Bottom padding of the list item.`
	 * @param {str} [mode] Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left, top, right, bottom, mode) {return}
}


class UIMenu {

	/** @type {lst} Sets or returns the items in the menu */
	list;

	/** @type {lst} Sets or returns the padding of each menu item */
	itemPadding;

	/**
	 * Adds a callback handler when the menu is touch
	 * @param {(this: UIMenu, item : str, icon : str, index : num) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Show the menu pop-up
	 * @param {obj} parent The component where to anchor the menu. It can be a `Button` or an `Image`.
	 */
	show(parent) {return}

	/** Hide the pop-up menu */
	hide() {return}

	/**
	 * Updates the list items on the menu
	 * @param {lst} list The list items to show.
	 */
	setList(list) {return}

	/**
	 * Adds an item in the menu list
	 * @param {str} name `The new item to be added.`
	 * @param {num} index `The index at which to add the item.`
	 */
	addItem(name, index) {return}

	/**
	 * Removes an item in the menu items list by its index
	 * @param {num} index `The index of the item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * Removes an item in the menu items list by its name
	 * @param {str} name `The name of the item to remove.`
	 */
	removeItemByName(name) {return}

	/** Removes the last item */
	popItem() {return}

	/** Removes the first item */
	shiftItem() {return}

	/**
	 * Set the position of the menu from the left and top of the anchor component
	 * @param {num} left `The position of the menu from the left of the parent or anchor component. The unit is in pixels.`
	 * @param {num} top `The position of the menu from the top of the parent or anchor component. The unit is in pixels.`
	 */
	setPosition(left, top) {return}

	/**
	 * Sets the autofocus value of the menu items
	 * @param {bin} bool Value can be `true` or `false`
	 */
	setAutoFocus(bool) {return}

	/**
	 * Enable or disable an item in the menu popup
	 * @param {num} index `The index of the item.`
	 * @param {bin} value Values can be `true` or `false`. `false` to disable.
	 */
	setEnabled(index, value) {return}

	/**
	 * Get the enabled state of an item the menu popup
	 * @param {num} index `The index of the item.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * Enable or disable an item in the menu popup by its name
	 * @param {str} name `The name of the corresping item the menu.`
	 * @param {bin} value Values can be `true` or `false`. `false` to disable an item.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * Get the enabled state of an item in the menu popup
	 * @param {str} name `The name of the item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * Sets the padding of the menu item
	 * @param {num} left `Left padding of the menu item.`
	 * @param {num} top `Top padding of the menu item.`
	 * @param {num} right `Right padding of the menu item.`
	 * @param {num} bottom `Bottom padding of the menu item.`
	 * @param {str} mode Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left, top, right, bottom, mode) {return}
}


class UIProgress {

	/** @type {num} Sets or returns the value of the progress control */
	value;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {str} Sets or returns the variant of the progress component */
	variant;

	/** @type {str} Sets or returns the theme color */
	color;

	/** @type {num} Sets or returns the size of the circular progress control */
	circleSize;

	/** @type {num} Sets or returns the thickness of the circular stroke */
	thickness;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIProgress, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}
}


class UIRadioGroup {

	/** @type {num} Sets or returns the value of the RadioGroup Component as an index of the selected item */
	value;

	/** @type {str} Sets or returns the label text of the RadioGroup Component */
	label;

	/** @type {lst} Sets or returns the list array */
	list;

	/** @type {str} Sets or returns the size of the radio button */
	radioSize;

	/** @type {str} Sets or returns the theme color of the Radio Component */
	color;

	/** @type {num} Sets or returns the depth of the RadioGroup container */
	elevation;

	/** @type {str} Sets or returns the icon color in hexadecimal format */
	iconColor;

	/** @type {num} Sets or returns the space between the radio button and the text */
	spaceBetween;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {str} Sets or returns the position of the icon */
	iconPosition;

	/** @type {str} Sets or returns the position of the label text */
	textPosition;

	/** @type {bin} Sets or returns whether the container is outlined or elevated */
	outlined;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {lst} Sets or returns the padding of each radio item */
	itemPadding;

	/** @type {str} Sets or returns the orientation of the list */
	orientation;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIRadioGroup, label : str, index : num, pos : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the radiogroup container
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Call a function when the value of the radio group has changed
	 * @param {(this: UIRadioGroup, text : str, index : num) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * Adds a callback function when an item is click
	 * @param {(this: UIRadioGroup, checked : bin, label : str, index : num, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Sets the the radiogroup list items
	 * @param {str} val `A comma separated items`
	 */
	setList(val) {return}

	/**
	 * Sets an item in the radiogroup component
	 * @param {str} item `The new item name to be displayed`
	 * @param {num} index `The index to of the item to be updated`
	 */
	setItemByIndex(item, index) {return}

	/**
	 * Updates an item in the list by its corresponding name
	 * @param {str} name `The name of the item.`
	 * @param {str} text `The new text to replaced the name of the item.`
	 */
	setItemByName(name, text) {return}

	/**
	 * Adds an item in the radio group list
	 * @param {str} name `The new item to be added.`
	 * @param {num} index `The index in which to add the item.`
	 */
	addItem(name, index) {return}

	/**
	 * Removes an item in the radiogroup items list by its index
	 * @param {num} index `The index of the item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * Removes an item in the radiogroup items list by its name
	 * @param {str} name `The name of the item to remove.`
	 */
	removeItemByName(name) {return}

	/** Removes the last item in the radiogroup */
	popItem() {return}

	/** Removes the first item in the radiogroup */
	shiftItem() {return}

	/**
	 * Enable or disable the radiogroup or an item in the radiogroup
	 * @param {num} index `The index of the item.`
	 * @param {bin} value Values can be `true` or `false`. If `false`,  the item will be disabled.
	 */
	setEnabled(index, value) {return}

	/**
	 * Get the enabled state of an item in the radio group
	 * @param {num} index `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * Enable or disable a radiogroup item by its name
	 * @param {str} name `The radiogroup text.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * Get the enabled state of a radiogroup item by its name
	 * @param {str} name `The radiogroup text.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * Sets the padding of the radio item
	 * @param {num} left `Left padding of the radio item.`
	 * @param {num} top `Top padding of the radio item.`
	 * @param {num} right `Right padding of the radio item.`
	 * @param {num} bottom `Bottom padding of the radio item.`
	 * @param {str} mode Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left, top, right, bottom, mode) {return}
}


class UISelect {

	/** @type {str} Sets or returns the label text */
	label;

	/** @type {lst} Sets or returns the list items */
	list;

	/** @type {bin} Sets or returns a boolean value whether the component is enabled or disabled */
	enabled;

	/** @type {str} Sets or returns the value of the Select Component */
	value;

	/** @type {str} Sets or returns the variant of the Select Component */
	variant;

	/** @type {str} Sets or returns the size variant of the Select Component */
	sizeVariant;

	/** @type {str} Sets or returns the color of the icon in hexadecimal format `#rrggbb` */
	iconColor;

	/** @type {str} Sets or returns the color of the label text in hexadecimal format `#rrggbb` */
	labelColor;

	/** @type {num} Sets or returns the size of the label */
	labelSize;

	/** @type {str} Sets or returns the color of the popup in hexadecimal format */
	popupColor;

	/** @type {num} Sets or returns the maximum height of the popup container */
	maxHeight;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UISelect, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds a callback handler when an item is touch
	 * @param {(this: UISelect, text : str, index : num, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Sets a callback function when the value changes
	 * @param {(this: UISelect, value : str, index : num) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * Sets a callback function when the menu is open
	 * @param {(this: UISelect) => void} callback 
	 */
	setOnOpen(callback) {return}

	/**
	 * Sets a callback function when the menu dialog is close
	 * @param {(this: UISelect, value : str) => void} callback 
	 */
	setOnClose(callback) {return}

	/**
	 * Adds an item on the select component options list
	 * @param {str} item `A new item to be added.`
	 * @param {num} index `The index in which to add the item.`
	 */
	addItem(item, index) {return}

	/**
	 * Removes an item in the select component item list by its index
	 * @param {num} index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * Removes an item in the select component item list by its name
	 * @param {str} name `The name of the item to remove.`
	 */
	removeItemByName(name) {return}

	/** Removes an item at the beginning of the list items */
	shifItem() {return}

	/** Removes an item at the end of the list items */
	popItem() {return}

	/**
	 * Returns the item at a given index
	 * @param {num} index `The index of the item.`
	 * @return {obj} 
	 */
	getItem(index) {return}

	/**
	 * Sets the list items in the menu popup
	 * @param {lst} items A comma separated string or array of options
	 */
	setList(items) {return}

	/**
	 * Enable or disable the select component
	 * @param {num} index Can be `true` or `false`. You can also pass a `Boolean` to enable or disable the Select component.
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * Get the enabled state of an item in the select menu
	 * @param {num} index `The index of the corresponding item in the select menu.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * Enable or disable an item in the menu popup
	 * @param {str} name `The name of the menu item.`
	 * @param {bin} value Value can be `true` or `false`
	 */
	setEnabledByName(name, value) {return}

	/**
	 * Get the enabled state of an item in the menu popup
	 * @param {str} name `The name of the menu item.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}
}


class UISlider {

	/** @type {num} Sets or returns the minimum value */
	minValue;

	/** @type {num} Sets or returns the maximum value */
	maxValue;

	/** @type {str} Sets or returns the track properties of the Slider Component */
	track;

	/** @type {num} Sets or returns the Sider Component steps */
	step;

	/** @type {str} Sets or returns the orientation of the Slider Component */
	orientation;

	/** @type {num} Sets or returns the value of the Slider Component */
	value;

	/** @type {bin} Sets or returns the marks on the Slider Component */
	marks;

	/** @type {str} Sets or returns the value label display type */
	valueLabelDisplay;

	/** @type {str} Sets or returns the theme color of the Slider */
	color;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UISlider, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds an event handler when the Slider component is touch
	 * @param {(this: UISlider, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Sets a callback function when the value of the Slider Component changes
	 * @param {(this: UISlider, value : num) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * Sets a callback function when a final value is selected
	 * @param {(this: UISlider, value : num) => void} callback 
	 */
	setOnSelect(callback) {return}

	/**
	 * Sets a range value for the Slider Component
	 * @param {num} [min] `Minimum value of the slider.`
	 * @param {num} [max] `Maximum value of the slider.`
	 */
	setRange(min, max) {return}

	/**
	 * Sets the marks of the Slider Component
	 * @param {bin} val `The marks on the Slider Component.`
	 */
	setMarks(val) {return}

	/**
	 * Returns the step marks of the Slider Component
	 * @return {bin} 
	 */
	getMarks() {return}
}


class UIStepper {

	/** @type {num} Sets or returns the active step */
	activeStep;

	/** @type {str} Sets or returns the orientation of the Stepper */
	orientation;

	/** @type {num} Sets or returns the elevation of the mobile stepper */
	elevation;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIStepper, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds a callback function to be called when the stepper is complete
	 * @param {(this: UIStepper) => void} callback 
	 */
	setOnComplete(callback) {return}

	/**
	 * Adds a callback function to be called when the stepper has changed step
	 * @param {(this: UIStepper, index : num) => void} callback 
	 */
	setOnChange(callback) {return}

	/** Go to the next step */
	nextStep() {return}

	/** Go to the previous step */
	previousStep() {return}

	/**
	 * Returns the layout of the corresponding step layout where you can add controls
	 * @param {num} index `The index of the corresponing stepper layout`
	 * @return {obj} 
	 */
	getLayout(index) {return}

	/**
	 * Get the index of the corresponding layout
	 * @param {obj} layout The layout to check.
	 * @return {num} 
	 */
	getLayoutIndex(layout) {return}

	/**
	 * Removes a corresponding step by its index
	 * @param {num} index `The index of the step to remove.`
	 */
	removeStep(index) {return}

	/**
	 * Sets a new title for the corresponding step by its index
	 * @param {num} index `The index of the Stepper.`
	 * @param {str} title `The new title text.`
	 */
	setTitleText(index, title) {return}
}


class UISwitch {

	/** @type {bin} Sets or returns the value of the switch toggle */
	value;

	/** @type {str} Sets or returns the label text */
	text;

	/** @type {str} Sets or returns the icon position */
	iconPosition;

	/** @type {bin} Sets or returns a boolean value whether this component is required or not */
	required;

	/** @type {str} Sets or returns the theme color */
	color;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {str} Sets or returns the size variant of the toggle switch */
	sizeVariant;

	/** @type {str} Sets or returns the edge position of the toggle */
	edge;

	/** @type {bin} Sets or returns a Boolean whether the component is enabled or disabled */
	enable;

	/** @type {num} Sets or returns the space between the switch icon and the label text */
	spaceBetween;

	/** @type {bin} Sets or returns the disabled state of the ripple effect */
	disableRipple;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UISwitch, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds an event handler when the switch is touch
	 * @param {(this: UISwitch, check : bin, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}
}


class UISwitchGroup {

	/** @type {str} Sets or returns the label text */
	label;

	/** @type {lst} Sets or returns the list items */
	list;

	/** @type {str} Sets or returns the edge position of the toggle */
	edge;

	/** @type {str} Sets or returns the theme color */
	color;

	/** @type {str} Sets or returns the theme color `Primary` `Secondary` or `Default` */
	iconColor;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the depth of the control container */
	elevation;

	/** @type {num} Sets or returns the size of the icon */
	iconSize;

	/** @type {str} Sets or returns the color of the label text in hexadecimal format */
	labelColor;

	/** @type {num} Sets or returns the size of the label text */
	labelSize;

	/** @type {bin} Sets or returns whether the container is outlined or elevated */
	outlined;

	/** @type {lst} Sets or returns the padding of each switch item */
	itemPadding;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UISwitchGroup, text : str, index : num, pos : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the switchgroup container
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Sets a callback function when the switch item is touch
	 * @param {(this: UISwitchGroup, text : str, value : bin, index : num, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Adds a callback function to be called whent there is a change of value
	 * @param {(this: UISwitchGroup, indexes : lst, items : lst) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * Sets the value of the corresponding item in the list
	 * @param {num} index `The index of the corresponding item.`
	 * @param {bin} val A Values can be `true` or `false`
	 */
	setValueByIndex(index, val) {return}

	/**
	 * Returns whether an item is check or unchecked
	 * @param {num} index `The index of the corresponding item.`
	 * @return {bin} 
	 */
	getValueByIndex(index) {return}

	/**
	 * Updates the list on the switchgroup component
	 * @param {lst} lst The list array or a comma separated list.
	 */
	setList(lst) {return}

	/**
	 * Adds or insert an item in the SwitchGroup list
	 * @param {str} title `The title text.`
	 * @param {str} icon `Material icon font.`
	 * @param {bin} value `The value of the item.`
	 * @param {num} index `The index in which to insert the item. Default is at the bottom of the list.`
	 */
	addItem(title, icon, value, index) {return}

	/**
	 * Removes an item in the SwitchGroup by its index
	 * @param {num} index `The index of the corresponding item to remove.`
	 */
	removeItemByIndex(index) {return}

	/**
	 * Removes an item in the SwitchGroup component by its title name
	 * @param {str} title `The title text of the SwitchGroup item.`
	 */
	removeItemByName(title) {return}

	/** Removes the last item in the SwitchGroup list */
	popItem() {return}

	/** Removes the first item in SwitchGroup list */
	shiftItem() {return}

	/**
	 * Enable or disable an item in the switchgroup component
	 * @param {num} index The index of the corresponding item in the list. You can also pass `Boolean` to enable or disable the switchgroup component.
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * Get the enabled state of an item in the switch group
	 * @param {num} index `The index of the corresponding item in the switch group.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * Sets the padding of the switch item
	 * @param {num} left `Left padding of the radio item.`
	 * @param {num} top `Top padding of the radio item.`
	 * @param {num} right `Right padding of the radio item.`
	 * @param {num} bottom `Bottom padding of the radio item.`
	 * @param {str} mode Unit of measurement. Can be `rem`,  `px`,  `%`,  or `v` for viewport.
	 */
	setItemPadding(left, top, right, bottom, mode) {return}
}


class UITabs {

	/** @type {str} Sets or returns the theme color of the tab bar */
	color;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {str} Sets or returns the variant of the Tabs Component */
	variant;

	/** @type {bin} Sets or returns a boolean value whether the tabs are centered or not */
	centered;

	/** @type {num} Sets or returns the tab icon */
	iconSize;

	/** @type {str} Sets or returns the color ofthe tab icon */
	iconColor;

	/** @type {num} Sets or returns the elevation of the tab bar */
	elevation;

	/** @type {str} Sets or returns the scroll button mode when tab items overflow the width of its container */
	scrollButtonMode;

	/** @type {num} Sets or returns the width of the indicator bar as a fraction of the tab item width */
	indicatorWidth;

	/** @type {num} Sets or returns the thickness of the indicator bar in pixels */
	indicatorThickness;

	/** @type {num} Sets or returns the corner radius of the indicator bar in pixels */
	indicatorRadius;

	/** @type {str} Sets or returns the color of the indicator bar */
	indicatorColor;

	/** @type {num} Sets or returns the padding of the tab items */
	tabPadding;

	/** @type {num} Sets or returns the height of the tab in pixels */
	tabHeight;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UITabs, text : str, index : num, pos : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the tab
	 * @param {num} [tl] `Top-left corner radius.`
	 * @param {num} [tr] `Top-right corner radius.`
	 * @param {num} [bl] `Bottom-left corner radius.`
	 * @param {num} [br] `Bottom-right corner radius.`
	 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, bl, br, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Sets a callback function when the value of the tab changes
	 * @param {(this: UITabs, name : str, index : num) => void} callback 
	 */
	setOnChange(callback) {return}

	/**
	 * Add a callback function when a tab item i click
	 * @param {(this: UITabs, name : str, index : num, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Sets the tab titles array
	 * @param {lst} tabs The tab titles array. See examples for format.
	 */
	setTabs(tabs) {return}

	/**
	 * Add or insert a tab to the Tabs Component
	 * @param {str} name `The name of the tab.`
	 * @param {str} icon `Material icon font.`
	 * @param {num} index `The index in which to insert the tab.`
	 */
	addTab(name, icon, index) {return}

	/**
	 * Sets a new title for the corresponding tab
	 * @param {num} index `Index of the tab.`
	 * @param {str} title `The new title.`
	 */
	setTitleText(index, title) {return}

	/**
	 * Sets an icon to a corresponding tab title
	 * @param {num} index `The index of the tab.`
	 * @param {str} icon `Material icon font.`
	 */
	setIcon(index, icon) {return}

	/**
	 * Removes a tab item by its corresponding index
	 * @param {num} index `The index of the corresponding tab to remove.`
	 */
	removeTabByIndex(index) {return}

	/**
	 * Removes a tab item by its corresponding name
	 * @param {str} name `The name of the corresponding tab to remove.`
	 */
	removeTabByName(name) {return}

	/**
	 * Removes the first item in the tabs list
	 * @return {obj} 
	 */
	shiftItem() {return}

	/**
	 * Removes the last item in the tabs list
	 * @return {obj} 
	 */
	popItem() {return}

	/**
	 * Returns the layout of the corresponding tab
	 * @param {str} name `The name of the tab. You can also pass the index of the tab.`
	 * @return {obj} 
	 */
	getLayout(name) {return}

	/**
	 * Show a tab panel by its corresponding name
	 * @param {str} name `The name of the tab to be shown.`
	 */
	showTab(name) {return}

	/**
	 * Show a tab panel by its corresponding name
	 * @param {num} index `The index of the tab to be shown.`
	 */
	showTabByIndex(index) {return}

	/**
	 * Enable or disable a tab item
	 * @param {num} index The index of the corresponding tab. Pass `Boolean` if you want to disable the entire Tabs component.
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabled(index, value) {return}

	/**
	 * Get the enabled state of a tab
	 * @param {num} index `The index of the corresponding tab.`
	 * @return {bin} 
	 */
	getEnabled(index) {return}

	/**
	 * Enable or disable a tab by its name
	 * @param {str} name `The name of the tab.`
	 * @param {bin} value Values can be `true` or `false`.
	 */
	setEnabledByName(name, value) {return}

	/**
	 * Get the enabled state of a tab by its name
	 * @param {str} name `The name of the tab.`
	 * @return {bin} 
	 */
	getEnabledByName(name) {return}

	/**
	 * Determines the behavior of scroll buttons when tabs are set to `scrollable`
	 * @param {str} mode Values can be 
 `auto` : will only present them when not all the items are visible 
 `desktop` : will only present them on medium and larger viewports 
 `on` : will always present them 
 `off` : will never present them.
	 */
	showScrollButton(mode) {return}

	/**
	 * Get the index of the corresponding layout
	 * @param {obj} layout The layout to check.
	 * @return {num} 
	 */
	getLayoutIndex(layout) {return}

	/**
	 * Add a custom styling to the indicator
	 * @param {num} width `Fraction of the tab item width (horizontal tabs) or height (vertical tabs)`
	 * @param {num} thickness `Thickness in pixels`
	 * @param {str} color Hexadecimal color of the form `#rrggbb`
	 * @param {num} radius `The corner radius in pixels`
	 */
	setIndicatorStyle(width, thickness, color, radius) {return}

	/**
	 * Returns the indicator style as an object
	 * @return {obj} 
	 */
	getIndicatorStyle() {return}

	/**
	 * Sets the padding of the tab items
	 * @param {num} [left] `The tab-item left padding.`
	 * @param {num} [top] `The tab-item top padding.`
	 * @param {num} [right] `The tab-item right padding.`
	 * @param {num} [bottom] `The tab-item bottom padding.`
	 * @param {str} [mode='px'] Unit of measurement. Default is `px`. You can pass `%` `rem` `vw`.
	 */
	setTabPadding(left, top, right, bottom, mode) {return}
}


class UIText {

	/** @type {str} Sets or returns the text */
	text;

	/** @type {str} Sets or returns the text variants */
	variant;

	/** @type {str} Sets or returns the theme color of the text `Primary` or `Secondary` */
	color;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {str} Sets or returns the ellipsis use when the text is truncated */
	ellipsize;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the style of the text */
	textStyle;

	/** @type {str} Sets or returns the horizontal alignment of the text */
	alignment;

	/** @type {str} Sets or returns the vertical alignment of the text */
	verticalAlignment;

	/** @type {bin} Sets or returns whether the text is `italized` or not */
	italic;

	/** @type {bin} Sets or returns whether the text is `bold` or not */
	bold;

	/** @type {bin} Sets or returns whether the text is `underlined` or not */
	underline;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIText, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds an event handler when the text component is touch
	 * @param {(this: UIText, pos : obj) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Adds a callback handler for a long touch event
	 * @param {(this: UIText, pos : obj) => void} callback 
	 */
	setOnLongTouch(callback) {return}

	/**
	 * Sets an html on the text control
	 * @param {str} html `An html string`
	 */
	setHtml(html) {return}

	/**
	 * Returns the html text
	 * @return {str} 
	 */
	getHtml() {return}

	/**
	 * Sets a shadow on the text in a text control
	 * @param {num} radius `The radius in pixels`
	 * @param {num} dx `X-offset of the shadow`
	 * @param {num} dy `Y-offset of the shadow`
	 * @param {str} color A hexadecimal color of the form `#rrggbb`
	 */
	setTextShadow(radius, dx, dy, color) {return}
}


class UITextField {

	/** @type {str} Sets or returns the text value of the TextField Component */
	text;

	/** @type {str} Sets or returns the label text */
	label;

	/** @type {str} Sets return the label color in hexadecimal format `#rrggbb` */
	labelColor;

	/** @type {str} Sets or returns the placeholder text */
	placeholder;

	/** @type {bin} Sets or returns a boolean value whether the text field in required or not */
	required;

	/** @type {bin} Sets or returns a boolean value whethe the input is focus when rendered into the DOM */
	autoFocus;

	/** @type {str} Sets or returns the hint text */
	hint;

	/** @type {num} Sets or returns the minimum rows for a `multiline` textfield */
	minRows;

	/** @type {num} Sets or returns the maximum rows for a `multiline` textfield */
	maxRows;

	/** @type {str} Sets or returns the variant of the TextField */
	variant;

	/** @type {str} Sets or returns the size variant of the textfield */
	sizeVariant;

	/** @type {str} Sets or returns the theme color of the textfield component */
	color;

	/** @type {str} Sets or returns the input type */
	inputType;

	/** @type {str} Sets or returns the outline color in hexadecimal form `#rrggbb` when the textfield is focus */
	outlineColor;

	/** @type {str} Returns the end adornment text or icon */
	endAdornment;

	/** @type {str} Returns the start adornment text or icon */
	startAdornment;

	/** @type {str} Sets or returns the helper text or the hint below the input */
	helperText;

	/** @type {bin} Sets or returns the error state of the TextField component */
	error;

	/** @type {num} Sets or returns the step increment if the input is of type number; */
	stepIncrement;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UITextField, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Sets a callback function on `enter` or `submit` event
	 * @param {(this: UITextField, text : str) => void} callback 
	 */
	setOnEnter(callback) {return}

	/**
	 * Sets a callback function on `values changes` event
	 * @param {(this: UITextField, text : str) => void} callback 
	 */
	setOnChange(callback) {return}

	/** Sets focus on the textField component */
	focus() {return}

	/**
	 * Adds a callback function when the textfield is focus or blur
	 * @param {(this: UITextField, focus : bin) => void} callback 
	 */
	setOnFocus(callback) {return}

	/**
	 * Sets the minimum and maximum number of rows on a multiline type TextField
	 * @param {num} [min] `The minimum number of rows.`
	 * @param {num} [max] `The maximum number of rows.`
	 */
	setRows(min, max) {return}

	/**
	 * Set a start adornment control into the TextField Component
	 * @param {str} text `Text or material icon font.`
	 * @param {str} [type] A comma separated options for start adornment control. Options can be 
 `Icon` : If the adornment is an icon. 
 `Touchable` : If the adornment is touchable.
	 */
	setStartAdornment(text, type) {return}

	/**
	 * Add a callback handler when the start adornment control is touch
	 * @param {(this: UITextField) => void} callback 
	 */
	setStartAdornmentOnTouch(callback) {return}

	/**
	 * Returns the start adornment text
	 * @return {str} 
	 */
	getStartAdornment() {return}

	/**
	 * Add an end adornment control into the TextField Component
	 * @param {str} text `Text or material icon font.`
	 * @param {str} [type] A comma separated options for end adornment control. Options can be 
 `Icon` : If the adornment is an icon. 
 `Touchable` : If the adornment is touchable.
	 */
	setEndAdornment(text, type) {return}

	/**
	 * Add a callback handler when the end adornment control is touch
	 * @param {(this: UITextField) => void} callback 
	 */
	setEndAdornmentOnTouch(callback) {return}

	/**
	 * Returns the end adornment text
	 * @return {str} 
	 */
	getEndAdornment() {return}
}


class UITreeView {

	/** @type {obj} Sets or returns the list object */
	list;

	/** @type {str} Returns the selected item of the TreeView */
	value;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UITreeView, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Add a on touch handler to the TreeView item when click
	 * @param {(this: UITreeView, value : str, path : str) => void} callback 
	 */
	setOnTouch(callback) {return}

	/**
	 * Updates the list items of the TreeView component
	 * @param {obj} obj The list object of the treeview items. See example above.
	 */
	setList(obj) {return}

	/**
	 * Add a tree items to the tree view
	 * @param {str} name `The label text for the new item.`
	 * @param {obj} obj See list object for more info.
	 */
	addItem(name, obj) {return}

	/**
	 * Returns the list items object of a given parent tree item name
	 * @param {str} name `The parent name of the tree items.`
	 * @return {obj} 
	 */
	getItem(name) {return}
}


class UIVideoView {

	/** @type {str} Sets or returns the video source url */
	url;

	/** @type {num} Sets or returns the video volume */
	volume;

	/** @type {num} Returns the time duration of the video in seconds */
	duration;

	/** @type {bin} Returns a boolean whether the video is currently playing */
	played;

	/** @type {bin} Returns a boolean whether the video is paused */
	paused;

	/** @type {bin} Returns a boolean whether the video playback is completed */
	completed;

	/** @type {bin} Returns a boolean whether the video audio is muted */
	muted;

	/** @type {bin} Returns a boolean whether the user is currently seeking in the video playback seekbar */
	seeking;

	/** @type {num} Sets or returns the playback speed */
	speed;

	/** @type {bin} Sets or returns a boolean whether the video should start over again when completed */
	loop;

	/** Play video in fullscreen if supported */
	enterFullscreen() {return}

	/** Exit fullscreen if video is playing fullscreen */
	exitFullscreen() {return}

	/** Play the video */
	play() {return}

	/** Stop the playing video */
	stop() {return}

	/**
	 * Sets a callback handler when the video has buffered enough to begin playing
	 * @param {(this: UIVideoView, info : obj) => void} cb 
	 */
	setOnReady(cb) {return}

	/**
	 * Sets a callback handler when the video is played by the user or programmatically
	 * @param {(this: UIVideoView) => void} cb 
	 */
	setOnPlay(cb) {return}

	/**
	 * Sets a callback handler when the video is pause by the user or programmatically
	 * @param {(this: UIVideoView) => void} cb 
	 */
	setOnPause(cb) {return}

	/**
	 * Sets a callback handler when the video playback is completed
	 * @param {(this: UIVideoView) => void} cb 
	 */
	setOnComplete(cb) {return}

	/**
	 * Sets a callback function when an error occurs while the video source is being loaded
	 * @param {(this: UIVideoView) => void} cb 
	 */
	setOnError(cb) {return}

	/**
	 * Sets a callback handler when seeking event is completed
	 * @param {(this: UIVideoView, pos : num) => void} cb 
	 */
	setOnSeek(cb) {return}

	/**
	 * Sets a callback handler when seeking event is active
	 * @param {(this: UIVideoView, pos : num) => void} cb 
	 */
	setOnSeeking(cb) {return}

	/**
	 * Sets a callback function when the volume of the video changes
	 * @param {(this: UIVideoView, volume : num) => void} cb 
	 */
	setOnVolume(cb) {return}

	/**
	 * Sets a callback handler to be be called while the video is playing
	 * @param {(this: UIVideoView, time : num) => void} cb 
	 */
	setOnProgress(cb) {return}

	/** Reloads the video source */
	load() {return}

	/**
	 * Sets the playback position
	 * @param {num} time `The playback position in seconds.`
	 */
	seekTo(time) {return}

	/**
	 * Capture an image in the playback
	 * @param {str} type `The image type. Values are "jpg"`, ` "png"`, ` "webp"`, ` "gif". Default is "jpg".`
	 * @param {str} format `The returned data format. Can be "base64"`, ` "bytes"(regular array)`, ` "uint8array"(typed array) or "arraybuffer".`
	 * @return {obj} 
	 */
	capture(type, format) {return}
}


class UIWebView {

	/** @type {str} Sets or returns the url of the webview */
	url;

	/** @type {str} Setst or returns the html loaded in the iframe */
	html;

	/** @type {str} Sets or returns the redirect url when an error occur */
	errorPage;

	/** @type {num} Sets or returns the text zoom of the page loaded in the web view */
	textZoom;

	/** @type {obj} A reference to the webview's window object */
	window;

	/** @type {obj} A reference to the webview's window document object */
	document;

	/** @type {lst} Sets or returns the list of blocked urls */
	blockUrls;

	/** @type {num} Sets or returns the width of the control as a fraction of the parent control */
	width;

	/** @type {num} Sets or returns the height of the control as a fraction of the parent control */
	height;

	/** @type {num} Sets or returns the opacity of the control */
	opacity;

	/** @type {num} Sets or returns the size of the text within the control */
	textSize;

	/** @type {str} Sets or returns the color of the text */
	textColor;

	/** @type {num} Sets or returns the angle of rotation in degrees */
	rotation;

	/** @type {str} Sets or returns the `relative` path to the font-family use */
	fontFile;

	/** @type {str} Sets or returns the visibility of the control */
	visibility;

	/** @type {str} Returns the type of the control */
	type;

	/** @type {num} Returns the absolute width of the control in pixels */
	absWidth;

	/** @type {num} Returns the absolute height of the control in pixels */
	absHeight;

	/** @type {str} A hexadecimal color of the form `#rrggbb` */
	backColor;

	/** @type {str} The path to your image file */
	backImage;

	/** @type {bin} Returns whether the control is visible or not */
	isVisible;

	/** @type {num} Returns the distance of the control from the top */
	top;

	/** @type {num} Returns the distance of the control from the left */
	left;

	/** @type {num} Returns the absolute distance of the control from the top in pixels */
	absTop;

	/** @type {num} Returns the absolute distance of the control from the left in pixels */
	absLeft;

	/** @type {obj} Returns the parent layout control */
	parent;

	/** @type {obj} Returns the position of the control */
	position;

	/** @type {lst} Sets or returns the margin of the control */
	margins;

	/** @type {lst} Sets or returns the padding of the control */
	padding;

	/** @type {str} Sets or returns the `options` of the control */
	options;

	/** @type {bin} Sets or returns the `disabled` state of the control */
	disabled;

	/** @type {num} Sets or returns the border thickness in pixels */
	border;

	/** @type {str} Sets or returns the border color */
	borderColor;

	/** @type {str} Sets or returns the border style */
	borderStyle;

	/** @type {num} Sets or returns the corner radius in pixels */
	cornerRadius;

	/** @type {obj} Returns the html container element for the control */
	el;

	/** @type {str} Sets the style of the html container element */
	elStyle;

	/**
	 * Adds a callback function on right click
	 * @param {(this: UIWebView, event : obj) => void} callback 
	 */
	setOnContextMenu(callback) {return}

	/**
	 * Animate the component
	 * @param {str} anim The type of animation. Here are the available values
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
	 * @param {num} duration `The time in milliseconds.`
	 */
	animate(anim, duration) {return}

	/**
	 * Sets the size of the component
	 * @param {num} width `Fraction of the parent width. [0-1]`
	 * @param {num} height `Fraction of the parent height. [0-1]`
	 * @param {str} mode `Unit of measurment. Can be "px"`, ` "rem"`, ` "%"`, ` "v" for viewport width/height or any css supported unit.`
	 */
	setSize(width, height, mode) {return}

	/** Show the component */
	show() {return}

	/** Hide the component */
	hide() {return}

	/** Destroy the component */
	gone() {return}

	/** Destroy the component */
	destroy() {return}

	/**
	 * Sets the x and y scaling of the component
	 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
	 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
	 */
	setScale(x, y) {return}

	/**
	 * Returns the position of the component
	 * @param {str} options The mode of the measurements. Values can be `px` or `%`
	 * @return {obj} 
	 */
	getPosition(options) {return}

	/**
	 * Sets the margin of the component
	 * @param {num} [left] Left margin. You can also pass string e.g. `12rem`
	 * @param {num} [top] Top margin. You can also pass string e.g. `12rem`
	 * @param {num} [right] Right margin. You can also pass string e.g. `12rem`
	 * @param {num} [bottom] Bottom margin. You can also pass string e.g. `12rem`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimension.
`v` relative to viewport dimension.
	 */
	setMargins(left, top, right, bottom, mode) {return}

	/**
	 * Sets the padding of the component's container
	 * @param {num} [left] `Fraction of the component width.`
	 * @param {num} [top] `Fraction of the component height. [0-1]`
	 * @param {num} [right] `Fraction of the component width. [0-1]`
	 * @param {num} [bottom] `Fraction of the component height. [0-1]`
	 * @param {str} [mode] Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPadding(left, top, right, bottom, mode) {return}

	/**
	 * Sets the position of the component relative to its parent dimensions
	 * @param {num} left `Fraction of the parent width. [0-1]`
	 * @param {num} top `Fraction of the parent height. [0-1]`
	 * @param {str} mode Unit of measurement.
`rem` for root em.
`px` for pixels
`%` relative to its parent dimensions
`v` relative to viewport dimensions.
	 */
	setPosition(left, top, mode) {return}

	/**
	 * Sets the border line for the component container
	 * @param {num} [left] `Border-left thickness in pixels.`
	 * @param {num} [top] `Border-top thickness in pixels.`
	 * @param {num} [right] `Border-right thickness in pixels.`
	 * @param {num} [bottom] `Border-bottom thickness in pixels.`
	 * @param {str} [clr] Border color in hexadecimal format `#rrggbb`.
	 * @param {str} [style] Border-styles. Values can be `dotted`,  `dashed`,  `solid`,  `double`,  `groove`,  `ridge`,  `inset` and `outset`. Default is `solid`
	 */
	setBorder(left, top, right, bottom, clr, style) {return}

	/**
	 * Sets the corner radius of the component
	 * @param {num} [tl] `Top-Left border radius.`
	 * @param {num} [tr] `Top-Right border radius.`
	 * @param {num} [br] `Bottom-Right border radius.`
	 * @param {num} [bl] `Bottom-Left border radius.`
	 * @param {str} [mode] Unit of measurement. Values are `px` `rem` or `%`.
	 */
	setCornerRadius(tl, tr, br, bl, mode) {return}

	/**
	 * Bring this component forward by a given z-index
	 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
	 */
	bringForward(zIndex) {return}

	/**
	 * Bring this component backward by a given z-index
	 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
	 */
	sendBackward(zIndex) {return}

	/**
	 * Adds a callback handler for onload event
	 * @param {(this: UIWebView) => void} callback 
	 */
	setOnLoad(callback) {return}

	/**
	 * Define a callback function which is called when the user clicked a link
	 * @param {(this: UIWebView, url : str) => void} callback 
	 */
	setOnUrl(callback) {return}

	/** Stops any web loading */
	stop() {return}

	/** Reloads the current page */
	reload() {return}

	/** Print current page via the builtin android printer dialog */
	print() {return}
}


class UIActionSheet {

	/** @type {str} Sets or returns the title text of the action sheet */
	title;

	/** @type {str} Sets or returns the description text for the action sheet */
	description;

	/**
	 * Sets the color of the list item by its name
	 * @param {str} name `The list item text.`
	 * @param {str} color A css supported color. Available format are: `hexadecimal`,  `color-names`,  `rgb`,  `rgba` ...
	 */
	setColor(name, color) {return}

	/**
	 * Sets the color of the list item by its corresponding index
	 * @param {num} index `The index of list item.`
	 * @param {str} color A css supported color. Available format are: `hexadecimal`,  `color-names`,  `rgb`,  `rgba` ...
	 */
	setColorByIndex(index, color) {return}
}


class UIColorPicker {

	/** @type {str} Returns the value of the chosen color */
	value;

	/**
	 * Returns the hexadecimal string color value of the color picker
	 * @return {str} 
	 */
	getValue() {return}
}


class UIDatePicker {
}


class UIDateTimePicker {
}


class UIPopover {

	/** @type {str} Sets or returns the font file use for the Popover */
	fontFile;

	/** @type {str} Sets or returns the path to the background image */
	backImage;

	/** Show the popup dialog */
	show() {return}

	/** Hide the popup dialog */
	hide() {return}
}


class UIPopup {

	/** @type {str} Sets or returns the text of the popup */
	text;

	/** @type {num} Sets or returns the duration of the popup in milliseconds */
	duration;

	/**
	 * Adds an onClose callback to your popup
	 * @param {(this: UIPopup) => void} callback 
	 */
	setOnClose(callback) {return}

	/**
	 * Adds an action callback when the user touches the action button
	 * @param {(this: UIPopup) => void} callback 
	 */
	setOnAction(callback) {return}

	/** Show the popup */
	show() {return}

	/** Hide the popup */
	hide() {return}

	/**
	 * Updates the position of the popup
	 * @param {str} [vertical] Vertical alignment. Values can be `Top` `Bottom`
	 * @param {str} [horizontal] Horizontal alignment. Values can be `Left` `Center` and `Right`
	 */
	setPosition(vertical, horizontal) {return}

	/**
	 * Returns the position of the popup
	 * @return {obj} 
	 */
	getPosition() {return}
}


class UIProgressDialog {

	/** @type {str} Sets or returns the ProgressDialog text */
	text;

	/** Show the progress dialog component */
	show() {return}

	/** Hides the dialog component */
	hide() {return}

	/**
	 * Adds a callback handler method on close event
	 * @param {(this: UIProgressDialog) => void} callback 
	 */
	setOnClose(callback) {return}
}


class UITimePicker {
}


