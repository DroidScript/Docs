/** # Slider
 * @abbrev sld
 * A Slider in mobile UI design is a user interface element that allows users to select a value from a range by dragging a thumb along a track.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, sliders have a consistent appearance with a thumb and track, offering a visually intuitive way to input and adjust numerical values within a specified range. The default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the min, max, steps and even marks. Add a slider into your app using the `addSlider` method like this:
 * $$ sld = ui.addSlider(parent, value, options, width, height) $$
 * @param {Object} parent The layout where to add the Slider Component.
 * @param {Number} value The initial value of the Slider. Value must be between `0-100`, the default min and max values.
 * @param {String} options A comma separated options.\nTheme Color: `Primary`, `Secondary`\nOrientation: `Horizontal`, `Vertical`\nTrack: `Normal`, `Inverted`, `False`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object Slider
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
 * @param {Number} min Minimum value of the slider.
 * @param {Number} max Maximum value of the slider.
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
