/** # Slider
 * @abbrev sld
 * A Slider in mobile UI design is a user interface element that allows users to select a value from a range by dragging a thumb along a track.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, sliders have a consistent appearance with a thumb and track, offering a visually intuitive way to input and adjust numerical values within a specified range. The default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the min, max, steps and even marks. Add a slider into your app using the `addSlider` method like this:
 * $$ sld = ui.addSlider(parent, value, options, width, height) $$
 * @param {uio-Layout} parent The layout where to add the Slider Component.
 * @param {Number} value The initial value of the Slider. Value must be between `0-100`, the default min and max values.
 * @param {String} [options] A comma separated options.\nTheme Color: `Primary`, `Secondary`\nOrientation: `Horizontal`, `Vertical`\nTrack: `Normal`, `Inverted`, `False`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-Slider
 */


    /** ## Properties
     * Here are the available setters and getter of the Slider Component.
     * @prop {Number} minValue Sets or returns the minimum value.
     * @prop {Number} maxValue Sets or returns the maximum value.
     * @prop {String} track Sets or returns the track properties of the Slider Component. Values can be `Normal` `False` or `Inverted`
     * @prop {Number} step Sets or returns the Sider Component steps.
     * @prop {String} orientation Sets or returns the orientation of the Slider Component. Values can be `Vertical` or `Horizontal`
     * @prop {Number} value Sets or returns the value of the Slider Component.
     * @prop {Boolean} marks Sets or returns the marks on the Slider Component. The marks will be base on the `step` property. To add a custom labels in each mark, pass an array with an object element with properties `label<String>` and `value<Number>`. See marks array example below.
     * @prop {String} valueLabelDisplay Sets or returns the value label display type. Values can be `on` `auto` `off`. If `on`, value label will always be shown. If `auto`, value label will be shown when sliding is active. If `false`, value label display will not be shown.
     * @prop {String} color Sets or returns the theme color of the Slider. Values can be `Primary` or `Secondary`
     */


    /** @extern width */


    /** @extern height */


    /** @extern opacity */


    /** @extern textSize */


    /** @extern textColor */


    /** @extern rotation */


    /** @extern fontFile */


    /** @extern visibility */


    /** @extern type */


    /** @extern absWidth */


    /** @extern absHeight */


    /** @extern backColor */


    /** @extern backImage */


    /** @extern isVisible */


    /** @extern top */


    /** @extern left */


    /** @extern absTop */


    /** @extern absLeft */


    /** @extern parent */


    /** @extern position */


    /** @extern margins */


    /** @extern padding */


    /** @extern options */


    /** @extern disabled */


    /** @extern border */


    /** @extern borderColor */


    /** @extern borderStyle */


    /** @extern cornerRadius */


    /** @extern el */


    /** @extern elStyle */


    /** ## Methods
     * Here are the methods available for Slider Component.
     */


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


    /** ### setOnTouch
     * Adds an event handler when the Slider component is touch.
     * $$ sld.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */


    /** ### setOnChange
     * Sets a callback function when the value of the Slider Component changes.
     * $$ sld.setOnChange( callback ) $$
     * @param {Function} callback The callback to be called. ---> @arg {Number} value The value of the Slider component.
     */


    /** ### setOnSelect
     * Sets a callback function when a final value is selected. This is equal to submit value event.
     * $$ sld.setOnSelect( callback ) $$
     * @param {Function} callback The callback function. ---> @arg {Number} value The value of the Slider component.
     */


    /** ### setRange
     * Sets a range value for the Slider Component.
     * $$ sld.setRange( min, max ) $$
     * @param {Number} [min] Minimum value of the slider.
     * @param {Number} [max] Maximum value of the slider.
     */


    /** ### setMarks
     * Sets the marks of the Slider Component.
     * $$ sld.setMarks( val ) $$
     * @param {Boolean} val The marks on the Slider Component.
     * If value is `Boolean` the marks is base on the step.
     * If the value is `Array`, the elements must be an object of the form `{ label, value }` where `label` is a string and `value` is a number within the range.
     */


    /** ### getMarks
     * Returns the step marks of the Slider Component. See `setMarks` methods for possible values.
     * $$ sld.getMarks() $$
     * @returns Boolean or Object
     */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Basic slider
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add text to display slider value
        this.txt = ui.addText(this.main, "Value: 10")

        // Add a slider control to the main layout with an initial value of 10
        this.sld = ui.addSlider(this.main, 10, "", 0.7)

        // Add a callback handler when the value of the slider changes
        this.sld.setOnChange( this.onChange )

    }

    onChange( value )
    {
        this.txt.text = "Value : " + value
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

        // Add a text control to show the selected value
        this.txt = ui.addText(this.main, "Value is 10")

        // Add a slider control to the main layout with an initial value of 10
        this.sld = ui.addSlider(this.main, 10, "", 0.7)

        // Set the step to 10
        this.sld.step = 10

        // Add marks for every step
        this.sld.marks = true

        // Add a callback handler when the value of the slider changes
        this.sld.setOnSelect( this.onSelect )
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

        // Add a text control to show the selected value
        this.txt = ui.addText(this.main, "Value is 10")
        this.txt.margins = 0.02

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

        // Add text to display slider value
        this.txt = ui.addText(this.main, "Value: 10")

        // Add a vertical slider control to the main layout
        this.sld = ui.addSlider(this.main, 10, "Vertical,Primary", 0.2, 0.7)

        // Add a callback handler when the value of the slider changes
        this.sld.setOnChange( this.onChange )
    }

    onChange( value )
    {
        this.txt.text = "Value : " + value
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


