// ------------- HEADER SECTION -------------


/** # addSlider #
 * @abbrev sld
 * @brief addSlider
 *
 * $$ sld = ui.addSlider(parent, value, options?, width?, height?) $$
 * @param {obj} parent The layout where to add the Slider Component.
 * @param {num} value The initial value of the Slider. Value must be between 0-100, the default min and max values.
 * @param {str_com} [options] Color: `Primary` `Secondary` \n `Orienation`: `Horizontal` `Vertical` \n `Track`: `Normal` `Inverted` `False`
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height.
 * @returns uio-Slider
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Adds a Slider Component into your App.

 A Slider Component defines a control for selecting a number whose exact value must be within the range.

 Default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the min, max, steps and even marks.
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### absHeight
 * @prop
 * Returns the absolute height of the control in pixels.
 * @returns num_pxl
 */


/** ### absLeft
 * @prop
 * Returns the absolute distance of the control from the left in pixels.
 * @returns num_pxl
 */


/** ### absTop
 * @prop
 * Returns the absolute distance of the control from the top in pixels.
 * @returns num_pxl
 */


/** ### absWidth
 * @prop
 * Returns the absolute width of the control in pixels.
 * @returns num_pxl
 */


/** ### backColor
 * @prop
 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
 * @returns str_col
 */


/** ### backImage
 * @prop
 * The path to your image file.
 * @returns str_pth
 */


/** ### border
 * @prop
 * Sets or returns the border thickness in pixels.
 * @returns num
 */


/** ### borderColor
 * @prop
 * Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>
 * @returns str_col
 */


/** ### borderStyle
 * @prop
 * Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.
 * @returns str
 */


/** ### color
 * @prop
 * Sets or returns the theme color of the Slider. Values can be <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>
 * @returns str
 */


/** ### cornerRadius
 * @prop
 * Sets or returns the corner radius in pixels.
 * @returns num
 */


/** ### disabled
 * @prop
 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.
 * @returns bin
 */


/** ### fontFile
 * @prop
 * Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.
 * @returns str
 */


/** ### height
 * @prop
 * Sets or returns the height of the control as a fraction of the parent control.
 * @returns num
 */


/** ### isVisible
 * @prop
 * Returns whether the control is visible or not.
 * @returns bin
 */


/** ### left
 * @prop
 * Returns the distance of the control from the left.
 * @returns num
 */


/** ### margins
 * @prop
 * Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.
 * @returns num||lst_num
 */


/** ### marks
 * @prop
 * Sets or returns the marks on the Slider Component. The marks will be base on the <col nobox #fb8c00>step</col> property. To add a custom labels in each mark, pass an array with an object element with properties <col nobox #fb8c00>label</col> and <col nobox #fb8c00>value</col>. See marks array example below.
 * @returns bin
 */


/** ### maxValue
 * @prop
 * Sets or returns the maximum value.
 * @returns num
 */


/** ### minValue
 * @prop
 * Sets or returns the minimum value.
 * @returns num
 */


/** ### opacity
 * @prop
 * Sets or returns the opacity of the control.
 * @returns num
 */


/** ### options
 * @prop
 * Sets or returns the <col nobox #fb8c00>options</col> of the control.
 * @returns str
 */


/** ### orientation
 * @prop
 * Sets or returns the orientation of the Slider Component. Values can be <col nobox #fb8c00>Vertical</col> or <col nobox #fb8c00>Horizontal</col>
 * @returns str
 */


/** ### padding
 * @prop
 * Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
 * @returns num||lst_num
 */


/** ### parent
 * @prop
 * Returns the parent layout control.
 * @returns uio-Layout
 */


/** ### position
 * @prop
 * Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.
 * @returns obj-{ left:num, top:num, right:num, bottom:num }
 */


/** ### rotation
 * @prop
 * Sets or returns the angle of rotation in degrees.
 * @returns num_deg
 */


/** ### step
 * @prop
 * Sets or returns the Sider Component steps.
 * @returns num
 */


/** ### textColor
 * @prop
 * Sets or returns the color of the text.
 * @returns str
 */


/** ### textSize
 * @prop
 * Sets or returns the size of the text within the control.
 * @returns num
 */


/** ### top
 * @prop
 * Returns the distance of the control from the top.
 * @returns num
 */


/** ### track
 * @prop
 * Sets or returns the track properties of the Slider Component. Values can be <col nobox #fb8c00>Normal</col> <col nobox #fb8c00>False</col> or <col nobox #fb8c00>Inverted</col>
 * @returns str
 */


/** ### type
 * @prop
 * Returns the type of the control.
 * @returns str
 */


/** ### value
 * @prop
 * Sets or returns the value of the Slider Component.
 * @returns num
 */


/** ### valueLabelDisplay
 * @prop
 * Sets or returns the value label display type. Values can be <col nobox #fb8c00>on</col> <col nobox #fb8c00>auto</col> <col nobox #fb8c00>off</col>. If <col nobox #fb8c00>on</col>, value label will always be shown. If <col nobox #fb8c00>auto</col>, value label will be shown when sliding is active. If <col nobox #fb8c00>false</col>, value label display will not be shown.
 * @returns str
 */


/** ### visibility
 * @prop
 * Sets or returns the visibility of the control.
 * @returns str
 */


/** ### width
 * @prop
 * Sets or returns the width of the control as a fraction of the parent control.
 * @returns num
 */


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
 * $$ sld.setRange(min?, max?) $$
 * @param {num} [min] Minimum value of the slider.
 * @param {num} [max] Maximum value of the slider.
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
