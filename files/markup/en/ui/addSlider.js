// ------------- HEADER SECTION ------------- 


/** # addSlider #
 * @abbrev sld
 * @brief addSlider
 * 
 * $$ sld = ui.addSlider(parent, value, options, width, height) $$ 
 * @param {obj} parent The layout where to add the Slider Component.
 * @param {num} value The initial value of the Slider. Value must be between 0-100, the default min and max values.
 * @param {str_com} options Color: `Primary` `Secondary` \n `Orienation`: `Horizontal` `Vertical` \n `Track`: `Normal` `Inverted` `False`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height.
 * @returns obj-Slider Component.
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a Slider Component into your App.

 A Slider Component defines a control for selecting a number whose exact value must be within the range.

 Default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the min, max, steps and even marks.

### Properties
These are the setter and getter properties for the addSlider Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color of the Slider. Values can be <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>marks:"bin:'Sets or returns the marks on the Slider Component. The marks will be base on the <col nobox #fb8c00>step</col> property. To add a custom labels in each mark, pass an array with an object element with properties <col nobox #fb8c00>label</col> and <col nobox #fb8c00>value</col>. See marks array example below.'"</smp>
<smp noinl>maxValue:"num:'Sets or returns the maximum value.'"</smp>
<smp noinl>minValue:"num:'Sets or returns the minimum value.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>orientation:"str:'Sets or returns the orientation of the Slider Component. Values can be <col nobox #fb8c00>Vertical</col> or <col nobox #fb8c00>Horizontal</col>'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>step:"num:'Sets or returns the Sider Component steps.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>track:"str:'Sets or returns the track properties of the Slider Component. Values can be <col nobox #fb8c00>Normal</col> <col nobox #fb8c00>False</col> or <col nobox #fb8c00>Inverted</col>'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>value:"num:'Sets or returns the value of the Slider Component.'"</smp>
<smp noinl>valueLabelDisplay:"str:'Sets or returns the value label display type. Values can be <col nobox #fb8c00>on</col> <col nobox #fb8c00>auto</col> <col nobox #fb8c00>off</col>. If <col nobox #fb8c00>on</col>, value label will always be shown. If <col nobox #fb8c00>auto</col>, value label will be shown when sliding is active. If <col nobox #fb8c00>false</col>, value label display will not be shown.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnChange ###
 * @brief setOnChange
 * Sets a callback function when the value of the Slider Component changes
 * $$ sld.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["num-The value of the Slider component."]}
 */


/** ### setOnSelect ###
 * @brief setOnSelect
 * Sets a callback function when a final value is selected. This is equal to submit value event
 * $$ sld.setOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["num-The value of the Slider component."]}
 */


/** ### setRange ###
 * @brief setRange
 * Sets a range value for the Slider Component
 * $$ sld.setRange(min, max) $$
 * @param {num} min Minimum value of the slider.
 * @param {num} max Maximum value of the slider.
 */


/** ### setMarks ###
 * @brief setMarks
 * Sets the marks of the Slider Component
 * If value is `Boolean` the marks is base on the step
 * If the value is `Array`, the elements must be an object of the form `{ label, value }` where `label` is a string and `value` is a number within the range
 * $$ sld.setMarks(val) $$
 * @param {obj} val The marks on the Slider Component.
 */


/** ### getMarks ###
 * @brief getMarks
 * Returns the step marks of the Slider Component. See `setMarks` methods for possible values
 * $$ sld.getMarks() $$
 * @returns bin
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the component is touch
 * $$ sld.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ sld.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ sld.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ sld.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ sld.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ sld.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ sld.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ sld.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ sld.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ sld.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ sld.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ sld.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ sld.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ sld.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the component
 * $$ sld.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ sld.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ sld.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Marks array
var marks = [
        { label: "First stop", value: 10 },
        { label: "Second stop", value: 30 },
        { label: "Third stop", value: 70 }
    ]
 */
    
            
    
/**
@sample Basic slider
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a slider control to the main layout with an initial value of 10
        this.sld = ui.addSlider(this.main, 10, "", 0.7)

        // Add a callback handler when the value of the slider changes
        this.sld.setOnChange( this.onChange )

        // Create a popup where to display values
        this.popup = ui.showPopup( 10 )
    }

    onChange( value )
    {
        this.popup.text = value
        this.popup.show()
    }
}
 */
    
            
    
/**
@sample Slider steps and marks
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a slider control to the main layout with an initial value of 10
        this.sld = ui.addSlider(this.main, 10, "", 0.7)

        // Set the step to 10
        this.sld.step = 10

        // Add marks for every step
        this.sld.marks = true

        // Add a callback handler when the value of the slider changes
        this.sld.setOnSelect( this.onSelect )

        // Add a text control to show the selected value
        this.txt = ui.addText(this.main, "Value is 10")
    }

    onSelect( value )
    {
        this.txt.text = "Value is " + value
    }
}
 */
    
            
    
/**
@sample Slider with custom step marks
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a slider control to the main layout with an initial value of 10
        this.sld = ui.addSlider(this.main, 10, "Primary", 0.7)

        // Set the step to 10
        this.sld.step = 10

        // Add custom marks for values at 10, 40 and 60
        this.sld.marks = [
            { label: "First", value: 10 },
            { label: "Second", value: 40 },
            { label: "Third", value: 60 }
        ]

        // Add a callback handler when the value of the slider changes
        this.sld.setOnSelect( this.onSelect )

        // Add a text control to show the selected value
        this.txt = ui.addText(this.main, "Value is 10")
        this.txt.margins = 0.02
    }

    onSelect( value )
    {
        this.txt.text = "Value is " + value
    }
}
 */
    
            
    
/**
@sample Vertical slider
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a vertical slider control to the main layout
        this.sld = ui.addSlider(this.main, 10, "Vertical,Primary", 0.2, 0.7)

        // Add a callback handler when the value of the slider changes
        this.sld.setOnChange( this.onChange )

        // Create a popup where to display values
        this.popup = ui.showPopup( 10 )
    }

    onChange( value )
    {
        this.popup.text = value
        this.popup.show()
    }
}
 */
    
            
    
/**
@sample Python Button variants
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0.01, 0.01, 0.01, 0.01)

    # Contained
    btn1 = ui.addButton(main, "Button", "Contained")

    # Add a callback handler for onTouch event
    btn1.setOnTouch(onTouch)

    # Outlined
    btn2 = ui.addButton(main, "Button", "Outlined")
    btn2.setOnTouch(onTouch)

    # Text
    btn3 = ui.addButton(main, "Button", "Text")
    btn3.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("Button is touch!")
 */
    
            
    
/**
@sample Python Button theme colors
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0.01, 0.01, 0.01, 0.01)

    # Add primary button to the main layout
    btn1 = ui.addButton(main, "Primary", "Contained,Primary")

    # Add a callback handler for onTouch event
    btn1.setOnTouch(onTouch)

    # Add secondary button to the main layout
    btn2 = ui.addButton(main, "Secondary", "Outlined,Secondary")
    btn2.setOnTouch(onTouch)

    # Add default button to the main layout
    btn3 = ui.addButton(main, "Default", "Text,Default")
    btn3.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("Button is touch!")
 */
    
            
    
/**
@sample Python Button sizes
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0.01, 0.01, 0.01, 0.01)

    # Add a small size button to the main layout
    btn1 = ui.addButton(main, "Small", "Contained,Primary,Small")

    # Add a callback handler for onTouch event
    btn1.setOnTouch(onTouch)

    # Add a medium/default size button to the main layout
    btn2 = ui.addButton(main, "Medium", "Contained,Primary,Medium")

    # Add a large size button to the main layout
    btn3 = ui.addButton(main, "Large", "Contained,Primary,Large")

def onTouch(event):
    ui.showPopup("Button is touch!")
 */
    
            
    
/**
@sample Python Button tooltips
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Add a button to the main layout and add a tooltip to the left of the button
    btn1 = ui.addButton(main, "Left", "Contained,Primary")
    btn1.setToolTip("Tooltip on the left", "left")

    # Add a button to the main layout and add a tooltip to the top of the button
    btn2 = ui.addButton(main, "Top", "Contained,Primary")
    btn2.setToolTip("Tooltip on the top", "top")

    # Add a button to the main layout and add a tooltip to the right of the button
    btn3 = ui.addButton(main, "Right", "Contained,Primary")
    btn3.setToolTip("Tooltip on the right", "right")

    # Add a button to the main layout and add a tooltip to the bottom of the button
    btn4 = ui.addButton(main, "Bottom", "Contained,Primary")
    btn4.setToolTip("Tooltip on the bottom", "bottom")
 */
    
            
    
/**
@sample Python Button with icons
from hybrid import ui

def OnStart():
    # Creates a layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins("12px", "12px", "12px", "12px")

    # Add a primary contained button and set its leading icon to `send`
    btn1 = ui.addButton(main, "Send", "Primary")
    btn1.icon = "send"

    # Add a secondary contained button and set its leading icon to `shopping_cart`
    btn2 = ui.addButton(main, "Add to cart", "Secondary")
    btn2.icon = "shopping_cart"

    # Add an `android` primary icon button to the main layout
    btn3 = ui.addButton(main, "android", "Primary,Icon")

    # Add a `settings` secondary icon button to the main layout
    btn4 = ui.addButton(main, "settings", "Secondary,Icon")
 */
    
            
    
/**
@sample Python Buttons with badges
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main" ,"Linear", "VCenter", 1, 1)
    main.setChildMargins(0.01, 0.01, 0.01, 0.01)

    # Add an android icon button to the main layout
    btn1 = ui.addButton(main, "android", "Primary,Icon")

    # Add a setting icon button to the main layout and set the badge to `5`
    btn2 = ui.addButton(main, "settings", "Primary,Icon")
    btn2.setBadge(5)

    # Add a contained button to the main layout and set the badge to `New` with a `Primary` background color
    btn3  = ui.addButton(main, "With Badge", "Secondary,Outlined")
    btn3.setBadge("New", "Primary")
 */
    
            
    
/**
@sample Python Upload button
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Add a primary
 */
    
            