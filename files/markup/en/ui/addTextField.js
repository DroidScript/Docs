// ------------- HEADER SECTION -------------


/** # addTextField #
 * @abbrev tfd
 * @brief addTextField
 * 
 * $$ tfd = ui.addTextField(parent, text, options, width, height) $$ 
 * @param {obj} parent The layout where to add the TextField Component.
 * @param {str} text The initial value of the TextField
 * @param {str_com} options Color: `Primary` or `Secondary` \n `Sizes`: `Small` or `Medium` \n `Type`: `Text` `Password` `Email` `Search` `Number` `Date` `Time` or `DateTime` \n `Variant`: `Standard` `Filled` or `Outlined` \n `Utils`: `Autofocus`
 * @param {num} width Fraction of the screen width.
 * @param {num} height Fraction of the screen height.
 * @returns obj-TextField Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Add a textfield component into your app. Collect inputs from users. Inputs can be a number, text, emails, passwords and more. Just pass the corresponding type into

 the options arguments to get your desired type of TextField.

 If you want a materialize date and time pickers, see <col nobox #4c4>DatePicker</col>, <col nobox #4c4>TimePicker</col> or <col nobox #4c4>DateTimePicker</col> components.

### Properties
These are the setter and getter properties for the addTextField Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>autoFocus:"bin:'Sets or returns a boolean value whethe the input is focus when rendered into the DOM.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color of the textfield component.'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>endAdornment:"str:'Returns the end adornment text or icon.'"</smp>
<smp noinl>error:"bin:'Sets or returns the error state of the TextField component.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>helperText:"str:'Sets or returns the helper text or the hint below the input.'"</smp>
<smp noinl>hint:"str:'Sets or returns the hint text. It`s the same as the <col nobox #fb8c00>placeholder</col> property.'"</smp>
<smp noinl>inputType:"str:'Sets or returns the input type. See <col nobox #fb8c00>type</col> params for available values.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>label:"str:'Sets or returns the label text.'"</smp>
<smp noinl>labelColor:"str:'Sets return the label color in hexadecimal format <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>maxRows:"num:'Sets or returns the maximum rows for a <col nobox #fb8c00>multiline</col> textfield.'"</smp>
<smp noinl>minRows:"num:'Sets or returns the minimum rows for a <col nobox #fb8c00>multiline</col> textfield.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>outlineColor:"str:'Sets or returns the outline color in hexadecimal form <col nobox #fb8c00>#rrggbb</col> when the textfield is focus.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>placeholder:"str:'Sets or returns the placeholder text.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>required:"bin:'Sets or returns a boolean value whether the text field in required or not.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>sizeVariant:"str:'Sets or returns the size variant of the textfield. Values can be <col nobox #fb8c00>Small</col> or <col nobox #fb8c00>Medium</col>'"</smp>
<smp noinl>startAdornment:"str:'Returns the start adornment text or icon.'"</smp>
<smp noinl>stepIncrement:"num:'Sets or returns the step increment if the input is of type number;'"</smp>
<smp noinl>text:"str:'Sets or returns the text value of the TextField Component.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>variant:"str:'Sets or returns the variant of the TextField. Values can be <col nobox #fb8c00>Standard</col> <col nobox #fb8c00>Filled</col> or <col nobox #fb8c00>Outlined</col>'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


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
 * $$ tfd.setRows(min, max) $$
 * @param {num} min The minimum number of rows.
 * @param {num} max The maximum number of rows.
 */


/** ### setStartAdornment ###
 * @brief setStartAdornment
 * Set a start adornment control into the TextField Component
 * $$ tfd.setStartAdornment(text, type) $$
 * @param {str} text Text or material icon font.
 * @param {str} type A comma separated options for start adornment control. Options can be \n `Icon` : If the adornment is an icon. \n `Touchable` : If the adornment is touchable.
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
 * $$ tfd.setEndAdornment(text, type) $$
 * @param {str} text Text or material icon font.
 * @param {str} type A comma separated options for end adornment control. Options can be \n `Icon` : If the adornment is an icon. \n `Touchable` : If the adornment is touchable.
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


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the component is touch
 * $$ tfd.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ tfd.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ tfd.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ tfd.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ tfd.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ tfd.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ tfd.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ tfd.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ tfd.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ tfd.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ tfd.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ tfd.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ tfd.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ tfd.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the component
 * $$ tfd.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ tfd.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ tfd.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



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
    
            