// ------------- HEADER SECTION -------------


/** # addSwitch #
 * @abbrev swt
 * @brief addSwitch
 * 
 * $$ swt = ui.addSwitch(parent, text, options?, width?, height?) $$ 
 * @param {obj} parent The parent layout where to add the Switch Component.
 * @param {str} text The label text.
 * @param {str} [options] A comma separated switch options. Options can be one or a combination of the following \n Color: `Primary` `Secondary` `Default` \n `Icon Position: `Left` `Top` `Right` `Bottom` \n `Sizes`: `Small` `Medium`
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height. [0-1]
 * @returns uio-Switch
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a Switch Component into your layout. A switch is a control whose values can be toggled between <col nobox #4c4>on</col> and <col nobox #4c4>off</col>.

### Properties
These are the setter and getter properties for the addSwitch Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disableRipple:"bin:'Sets or returns the disabled state of the ripple effect.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>edge:"str:'Sets or returns the edge position of the toggle. Values can be <col nobox #fb8c00>Start</col> <col nobox #fb8c00>End</col> or <col nobox #fb8c00>False</col>'"</smp>
<smp noinl>enable:"bin:'Sets or returns a Boolean whether the component is enabled or disabled.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>iconPosition:"str:'Sets or returns the icon position. Values can be <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> or <col nobox #fb8c00>bottom</col>'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>required:"bin:'Sets or returns a boolean value whether this component is required or not.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>sizeVariant:"str:'Sets or returns the size variant of the toggle switch. Values can be <col nobox #fb8c00>Small</col> or <col nobox #fb8c00>Medium</col>'"</smp>
<smp noinl>spaceBetween:"num:'Sets or returns the space between the switch icon and the label text.'"</smp>
<smp noinl>text:"str:'Sets or returns the label text.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the text color in hexadecimal format.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>value:"bin:'Sets or returns the value of the switch toggle.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds an event handler when the switch is touch
 * $$ swt.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["check"],"pTypes":["bin-The checked state of the switch control."]}
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


// ------------- SAMPLES ------------- 


    
/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Adds a switch to the main layout
        this.swt = ui.addSwitch(this.main, "Check me", "Secondary", 0.5)

        // Add a callback handler when the switch control is touch
        this.swt.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup("Value is : "  + value)

        // Setting the switch label text
        this.swt.text = `Check me (Value is ${value})`
    }
}
 */
    
            
    
/**
@sample Right switch with custom styles
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Adds a switch control to the main layout
        // `Right` option will display the switch on the right
        this.swt = ui.addSwitch(this.main, "Check me", "Right,Secondary", 0.5)

        // Add some custom styling to thw switch control
        this.swt.border = 1
        this.swt.padding = ["1.2rem"]
        this.swt.cornerRadius = 4
        this.swt.backColor = "yellow"

        // Add a callback handler when the switch control is touch
        this.swt.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup("Value is : "  + value)
    }
}
 */
    
            
    
/**
@sample Python Basic
from hybrid import ui

def OnStart():
    global swt
    # Creates a layout with objects verticaly centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Adds a switch to the main layout
    swt = ui.addSwitch(main, "Check me", "Secondary", 0.5)

    # Add a callback handler when the switch control is touch
    swt.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup("Value is : "  + value)

    # Setting the switch label text
    swt.text = f"Check me (Value is {value})"
 */
    
            
    
/**
@sample Python Right switch with custom styles
from hybrid import ui

def OnStart():
    # Creates a layout with objects verticaly centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Adds a switch control to the main layout
    # `Right` option will display the switch on the right
    swt = ui.addSwitch(main, "Check me", "Right,Secondary", 0.5)

    # Add some custom styling to thw switch control
    swt.border = 1
    swt.padding = ["1.2rem"]
    swt.cornerRadius = 4
    swt.backColor = "yellow"

    # Add a callback handler when the switch control is touch
    swt.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup("Value is : " + value)
 */
    
            