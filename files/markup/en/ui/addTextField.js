// ------------- HEADER SECTION -------------


/** # addTextField #
 * @abbrev tfd
 * @brief addTextField
 *
 * $$ tfd = ui.addTextField(parent, text, options?, width?, height?) $$
 * @param {obj} parent The layout where to add the TextField Component.
 * @param {str} text The initial value of the TextField
 * @param {str_com} [options] Color: `Primary` or `Secondary` \n `Sizes`: `Small` or `Medium` \n `Type`: `Text` `Password` `Email` `Search` `Number` `Date` `Time` or `DateTime` \n `Variant`: `Standard` `Filled` or `Outlined` \n `Utils`: `Autofocus`
 * @param {num} [width] Fraction of the screen width.
 * @param {num} [height] Fraction of the screen height.
 * @returns uio-TextField
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Add a textfield component into your app. Collect inputs from users. Inputs can be a number, text, emails, passwords and more. Just pass the corresponding type into

 the options arguments to get your desired type of TextField.

 If you want a materialize date and time pickers, see <col nobox #4c4>DatePicker</col>, <col nobox #4c4>TimePicker</col> or <col nobox #4c4>DateTimePicker</col> components.
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern absHeight */

/** @extern absLeft */

/** @extern absTop */

/** @extern absWidth */

/** ### autoFocus
 * @prop
 * Sets or returns a boolean value whethe the input is focus when rendered into the DOM.
 * @returns bin
 */


/** @extern backColor */

/** @extern backImage */

/** @extern border */

/** @extern borderColor */

/** @extern borderStyle */

/** ### color
 * @prop
 * Sets or returns the theme color of the textfield component.
 * @returns str
 */


/** @extern cornerRadius */

/** @extern disabled */

/** ### endAdornment
 * @prop
 * Returns the end adornment text or icon.
 * @returns str
 */


/** ### error
 * @prop
 * Sets or returns the error state of the TextField component.
 * @returns bin
 */


/** @extern fontFile */

/** @extern height */

/** ### helperText
 * @prop
 * Sets or returns the helper text or the hint below the input.
 * @returns str
 */


/** ### hint
 * @prop
 * Sets or returns the hint text. It`s the same as the <col nobox #fb8c00>placeholder</col> property.
 * @returns str
 */


/** ### inputType
 * @prop
 * Sets or returns the input type. See <col nobox #fb8c00>type</col> params for available values.
 * @returns str
 */


/** @extern isVisible */

/** @extern label */

/** ### labelColor
 * @prop
 * Sets return the label color in hexadecimal format <col nobox #fb8c00>#rrggbb</col>
 * @returns str
 */


/** @extern left */

/** @extern margins */

/** ### maxRows
 * @prop
 * Sets or returns the maximum rows for a <col nobox #fb8c00>multiline</col> textfield.
 * @returns num
 */


/** ### minRows
 * @prop
 * Sets or returns the minimum rows for a <col nobox #fb8c00>multiline</col> textfield.
 * @returns num
 */


/** @extern opacity */

/** @extern options */

/** ### outlineColor
 * @prop
 * Sets or returns the outline color in hexadecimal form <col nobox #fb8c00>#rrggbb</col> when the textfield is focus.
 * @returns str
 */


/** @extern padding */

/** @extern parent */

/** ### placeholder
 * @prop
 * Sets or returns the placeholder text.
 * @returns str
 */


/** @extern position */

/** ### required
 * @prop
 * Sets or returns a boolean value whether the text field in required or not.
 * @returns bin
 */


/** @extern rotation */

/** ### sizeVariant
 * @prop
 * Sets or returns the size variant of the textfield. Values can be <col nobox #fb8c00>Small</col> or <col nobox #fb8c00>Medium</col>
 * @returns str
 */


/** ### startAdornment
 * @prop
 * Returns the start adornment text or icon.
 * @returns str
 */


/** ### stepIncrement
 * @prop
 * Sets or returns the step increment if the input is of type number;
 * @returns num
 */


/** ### text
 * @prop
 * Sets or returns the text value of the TextField Component.
 * @returns str
 */


/** @extern textColor */

/** @extern textSize */

/** @extern top */

/** @extern type */

/** ### variant
 * @prop
 * Sets or returns the variant of the TextField. Values can be <col nobox #fb8c00>Standard</col> <col nobox #fb8c00>Filled</col> or <col nobox #fb8c00>Outlined</col>
 * @returns str
 */


/** @extern visibility */

/** @extern width */

/** ### setOnEnter ###
 * @brief setOnEnter
 * Sets a callback function on `enter` or `submit` event
 * $$ tfd.setOnEnter(callback) $$
 * @param {fnc_json} callback {"pNames":["text"],"pTypes":["str-The text value of the input."]}
 */


/** ### setOnChange ###
 * @brief setOnChange
 * Sets a callback function on `values changes` event
 * $$ tfd.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["text"],"pTypes":["str-The text value of the input."]}
 */


/** ### setOnFocus ###
 * @brief setOnFocus
 * Adds a callback function when the textfield is focus or blur
 * $$ tfd.setOnFocus(callback) $$
 * @param {fnc_json} callback {"pNames":["focus"],"pTypes":["bin-The focus state of the input component."]}
 */


/** ### setRows ###
 * @brief setRows
 * Sets the minimum and maximum number of rows on a multiline type TextField
 * $$ tfd.setRows(min?, max?) $$
 * @param {num} [min] The minimum number of rows.
 * @param {num} [max] The maximum number of rows.
 */


/** ### setStartAdornment ###
 * @brief setStartAdornment
 * Set a start adornment control into the TextField Component
 * $$ tfd.setStartAdornment(text, type?) $$
 * @param {str} text Text or material icon font.
 * @param {str} [type] A comma separated options for start adornment control. Options can be \n `Icon` : If the adornment is an icon. \n `Touchable` : If the adornment is touchable.
 */


/** ### setStartAdornmentOnTouch ###
 * @brief setStartAdornmentOnTouch
 * Add a callback handler when the start adornment control is touch
 * $$ tfd.setStartAdornmentOnTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### getStartAdornment ###
 * @brief getStartAdornment
 * Returns the start adornment text
 * $$ tfd.getStartAdornment() $$
 * @returns str
 */


/** ### setEndAdornment ###
 * @brief setEndAdornment
 * Add an end adornment control into the TextField Component
 * $$ tfd.setEndAdornment(text, type?) $$
 * @param {str} text Text or material icon font.
 * @param {str} [type] A comma separated options for end adornment control. Options can be \n `Icon` : If the adornment is an icon. \n `Touchable` : If the adornment is touchable.
 */


/** ### setEndAdornmentOnTouch ###
 * @brief setEndAdornmentOnTouch
 * Add a callback handler when the end adornment control is touch
 * $$ tfd.setEndAdornmentOnTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### getEndAdornment ###
 * @brief getEndAdornment
 * Returns the end adornment text
 * $$ tfd.getEndAdornment() $$
 * @returns str
 */


/** @extern setOnTouch */

/** @extern setOnContextMenu */

/** @extern animate */

/** @extern setSize */

/** @extern show */

/** @extern hide */

/** @extern gone */

/** @extern destroy */

/** @extern setScale */

/** @extern getPosition */

/** @extern setMargins */

/** @extern setPadding */

/** @extern setPosition */

/** @extern setBorder */

/** @extern setCornerRadius */

/** @extern bringForward */

/** @extern sendBackward */


// ------------- SAMPLES -------------



/**
@sample Textfield variants
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 1, 0, 1, "rem")

        // Add a default textfield control to the main layout
        this.tfd1 = ui.addTextField( this.main )
        this.tfd1.label = "Enter text"

        // Handle textfield value changes
        this.tfd1.setOnChange( this.onChange )

        // Add a filled textfield control
        this.tfd2 = ui.addTextField(this.main, "", "Filled,Primary,Number")
        this.tfd2.label =  "Enter number"
        this.tfd2.setOnChange( this.onChange )

        // Add an outlined textfield control
        this.tfd3 = ui.addTextField(this.main, "", "Outlined,Secondary,Email")
        this.tfd3.label = "Enter email"
        this.tfd3.setOnChange( this.onChange )

        this.popup = ui.showPopup( "" )
        this.popup.hide()
    }

    onChange( value )
    {
        this.popup.text = value
        this.popup.show()
    }
}
 */



/**
@sample Callbacks
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.05)

        // Add a default textfield control to the main layout
        this.tfd = ui.addTextField(this.main, "", "Outlined,Secondary")
        this.tfd.label = "Enter text"

        // Add a callback handler when the value changes
        this.tfd.setOnChange( this.onChange )

        // Add a callback handler on submit event
        this.tfd.setOnEnter( this.onEnter )

        // Add a button control to the main layout that will get the value
        // of the textfield when clicked
        this.btn = ui.addButton(this.main, "Get value", "Outlined,Secondary")
        this.btn.setOnTouch( this.btn_onTouch )

        // Initialize a popup to display values
        this.popup = ui.showPopup( "" )
        this.popup.hide()
    }

    onChange( value )
    {
        this.popup.text = "Change : " + value
        this.popup.show()
    }

    onEnter( value )
    {
        this.popup.text = "Enter : " + value
        this.popup.show()
    }

    btn_onTouch()
    {
        this.popup.text = "Value : " + this.tfd.text
        this.popup.show()
    }
}
 */



/**
@sample Multiline textfield
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        
        // Add a text control to the main layout
        this.txt = ui.addText(this.main, "This is a multiline type of TextField input", "Left", 0.8)
        this.txt.setMargins(0, 0, 0, 0.05)

        // Add a Multiline textfield control to the main layout
        this.tfd = ui.addTextField(this.main, "", "Outlined,Secondary,Multiline", 0.8)
        this.tfd.label = "Enter description"
        this.tfd.setRows(3, 6)
    }
}
 */



/**
@sample Advance textfield
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,ScrollY,FillXY")
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Start and end adornment
        ui.addText(this.main,  "Click the eye icon to show password.", "Left", 0.7)
        this.tfd = ui.addTextField(this.main, "", "Outlined,Secondary,Password", 0.7)
        this.tfd.label = "Enter password"
        this.tfd.setStartAdornment("lock", "Icon")
        this.tfd.setEndAdornment("visibility_off", "Icon,Touchable")
        this.tfd.setEndAdornmentOnTouch( this.togglePasswordVisibility )

        // Start Adornment text
        ui.addText(this.main,  "Start text adornment", "Left,Overline", 0.7)
        this.tfd1 = ui.addTextField(this.main, "", "Outlined,Secondary,Number", 0.7)
        this.tfd1.label = "Enter mass" 
        this.tfd1.setStartAdornment("KG", "Text")

        // Start Adornment icon
        ui.addText(this.main,  "Start icon adornment", "Left,Overline", 0.7)
        this.tfd2 = ui.addTextField(this.main, "", "Outlined,Secondary", 0.7)
        this.tfd2.label = "Enter username"
        this.tfd2.setStartAdornment("person", "Icon")

        // End Adornment text
        ui.addText(this.main,  "End text adornment", "Left,Overline", 0.7)
        this.tfd3 = ui.addTextField(this.main, "", "Outlined,Secondary,Number", 0.7)
        this.tfd3.label = "Enter amount"
        this.tfd3.setEndAdornment("$", "Text")

        // End Adornment icon
        ui.addText(this.main,  "End icon adornment", "Left,Overline", 0.7)
        this.tfd4 = ui.addTextField(this.main, "", "Outlined,Secondary,Password", 0.7)
        this.tfd4.label = "Enter password"
        this.tfd4.setEndAdornment("lock", "Icon")
    }

    togglePasswordVisibility()
    {
        if(this.tfd.endAdornment == "visibility_off")
        {
            this.tfd.setEndAdornment("visibility_on", "icon,touchable")
            this.tfd.inputType = 'text'
        }
        else
        {
            this.tfd.setEndAdornment("visibility_off", "icon,touchable")
            this.tfd.inputType = 'password'
        }
    }
}
 */



/**
@sample Python Textfield variants
from hybrid import ui

def OnStart():
    global popup
    # Creates a layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.setChildMargins(0, 1, 0, 1, "rem")

    # Add a default textfield control to the main layout
    tfd1 = ui.addTextField(main)
    tfd1.label = "Enter text"

    # Handle textfield value changes
    tfd1.setOnChange(onChange)

    # Add a filled textfield control
    tfd2 = ui.addTextField(main, "", "Filled,Primary,Number")
    tfd2.label = "Enter number"
    tfd2.setOnChange(onChange)

    # Add an outlined textfield control
    tfd3 = ui.addTextField(main, "", "Outlined,Secondary,Email")
    tfd3.label = "Enter email"
    tfd3.setOnChange(onChange)

    popup = ui.showPopup("")
    popup.hide()

def onChange(value):
    popup.text = value
    popup.show()
 */



/**
@sample Python Callbacks
from hybrid import ui

def OnStart():
    global popup, tfd
    # Creates a layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.setChildMargins(0.01, 0.01, 0.01, 0.05)

    # Add a default textfield control to the main layout
    tfd = ui.addTextField(main, "", "Outlined,Secondary")
    tfd.label = "Enter text"

    # Add a callback handler when the value changes
    tfd.setOnChange(onChange)

    # Add a callback handler on submit event
    tfd.setOnEnter(onEnter)

    # Add a button control to the main layout that will get the value
    # of the textfield when clicked
    btn = ui.addButton(main, "Get value", "Outlined,Secondary")
    btn.setOnTouch(btn_onTouch)

    # Initialize a popup to display values
    popup = ui.showPopup("")
    popup.hide()

def onChange(value):
    popup.text = "Change : " + value
    popup.show()

def onEnter(value):
    popup.text = "Enter : " + value
    popup.show()

def btn_onTouch(event):
    popup.text = "Value : " + tfd.text
    popup.show()
 */



/**
@sample Python Multiline textfield
from hybrid import ui

def OnStart():
    # Creates a layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a text control to the main layout
    txt = ui.addText(main, "This is a multiline type of TextField input", "Left", 0.8)
    txt.setMargins(0, 0, 0, 0.05)

    # Add a Multiline textfield control to the main layout
    tfd = ui.addTextField(main, "", "Outlined,Secondary,Multiline", 0.8)
    tfd.label = "Enter description"
    tfd.setRows(3, 6)
 */



/**
@sample Python Advance textfield
from hybrid import ui

def OnStart():
    # Creates a layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,ScrollY,FillXY")
    main.setChildMargins(0.01, 0.01, 0.01, 0.01)

    # Start and end adornment
    ui.addText(main, "Click the eye icon to show password.", "Left", 0.7)
    tfd = ui.addTextField(main, "", "Outlined,Secondary,Password", 0.7)
    tfd.label = "Enter password"
    tfd.setStartAdornment("lock", "Icon")
    tfd.setEndAdornment("visibility_off", "Icon,Touchable")
    tfd.setEndAdornmentOnTouch(togglePasswordVisibility)

    # Start Adornment text
    ui.addText(main,  "Start text adornment", "Left,Overline", 0.7)
    tfd1 = ui.addTextField(main, "", "Outlined,Secondary,Number", 0.7)
    tfd1.label = "Enter mass"
    tfd1.setStartAdornment("KG", "Text")

    # Start Adornment icon
    ui.addText(main,  "Start icon adornment", "Left,Overline", 0.7)
    tfd2 = ui.addTextField(main, "", "Outlined,Secondary", 0.7)
    tfd2.label = "Enter username"
    tfd2.setStartAdornment("person", "Icon")

    # End Adornment text
    ui.addText(main,  "End text adornment", "Left,Overline", 0.7)
    tfd3 = ui.addTextField(main, "", "Outlined,Secondary,
 */
