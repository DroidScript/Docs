// ------------- HEADER SECTION -------------


/** # addCheckbox #
 * @abbrev ckb
 * @brief addCheckbox
 * 
 * $$ ckb = ui.addCheckbox(parent, text, options, width, height) $$ 
 * @param {obj} parent The layout where to add the checkbox
 * @param {str} text The label for the checkbox
 * @param {str_com} options Colors: `Primary` `Secondary` `Medium` `Small` \n `Position`: `Left` `Top` `Right` `Bottom` \n `Variant`: `Indeterminate` `Determinate`
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 * @returns uio-Checkbox
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a checkbox control to the given layout.

### Properties
These are the setter and getter properties for the addCheckbox Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>checkIcon:"str:'Sets or returns the material icon font for check stated.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color of the checkbox when checked. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disable:"bin:'Enabled or disable the checkbox component.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>enabled:"bin:'Returns whether the Checkbox is enabled or disabled.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>iconColor:"str:'Sets or returns the color of the checkbox icon.'"</smp>
<smp noinl>iconSize:"num:'Sets or returns the size of the icon.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>spaceBetween:"num:'Sets or returns the space between the checkbox icon and the label text.'"</smp>
<smp noinl>text:"str:'Sets or returns the checkbox text.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textPosition:"str:'Sets or returns the text position. Values can be <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> <col nobox #fb8c00>bottom</col>'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>uncheckIcon:"str:'Sets or returns the material icon font for uncheck state.'"</smp>
<smp noinl>value:"bin:'Sets or returns the checked state of the checkbox.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds an event handler when the checkbox is touch
 * $$ ckb.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["check"],"pTypes":["bin-The checked state of the checkbox."]}
 */


/** ### setIcon ###
 * @brief setIcon
 * Sets a custom icon for the checkbox
 * $$ ckb.setIcon(checked, unchecked) $$
 * @param {str} checked Material icon for checked state
 * @param {str} unchecked Material icon for unchecked state
 */


/** ### getIcon ###
 * @brief getIcon
 * Returns the icons of the form { checkIcon, uncheckedIcon
 * $$ ckb.getIcon() $$
 * @returns obj
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
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Add a checkbox control to the main layout
        this.ckb = ui.addCheckbox(this.main, "This is checkbox label")

        // Add a callback handler for `onTouch` event
        this.ckb.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */
    
            
    
/**
@sample Colors
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Add a default checkbox control to the main layout
        this.ckb1 = ui.addCheckbox(this.main, "This is checkbox label")
        this.ckb1.setOnTouch( this.onTouch )

        // Add a primary checkbox control to the main layout
        this.ckb2 = ui.addCheckbox(this.main, "This is checkbox label", "Primary")
        this.ckb2.setOnTouch( this.onTouch )

        // Add a secondary checkbox control to the main layout
        // and set its value to `true`
        this.ckb3 = ui.addCheckbox(this.main, "This is checkbox label", "Secondary")
        this.ckb3.value = true
        this.ckb3.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */
    
            
    
/**
@sample Text positions
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Add a checkbox with label on the right. 
        this.ckb1 = ui.addCheckbox(this.main, "Checkbox on the left", "Left")
        this.ckb1.setOnTouch( this.onTouch )

        // Add a checkbox with label on the bottom.
        this.ckb2 = ui.addCheckbox(this.main, "Checkbox on the top", "Primary,Top")
        this.ckb2.setOnTouch( this.onTouch )

        // Add a checkbox with label on the left.
        this.ckb3 = ui.addCheckbox(this.main, "Checkbox on the right", "Secondary,Right")
        this.ckb3.setOnTouch( this.onTouch )

        // Add a checkbox with label on top.
        this.ckb4 = ui.addCheckbox(this.main, "Checkbox on the bottom", "Secondary,Bottom")
        this.ckb4.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */
    
            
    
/**
@sample Adding custom checkbox icon
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Adds checkbox control to the main layout
        this.ckb = ui.addCheckbox(this.main, "This is checkbox label", "Left,Secondary")

        // Set the checked icon to `favorite`
        // and uncheck icon to `person`
        this.ckb.setIcon("favorite", "person")

        // Add a callback handler for `onTouch` event
        this.ckb.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */
    
            
    
/**
@sample Python Basic
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Add a checkbox control to the main layout
    ckb = ui.addCheckbox(main, "This is checkbox label")

    # Add a callback handler for `onTouch` event
    ckb.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup(f"Value is {value}")
 */
    
            
    
/**
@sample Python Colors
from hybrid import ui

def OnStart():
    global value
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Add a default checkbox control to the main layout
    ckb1 = ui.addCheckbox(main, "This is checkbox label")
    ckb1.setOnTouch(onTouch)

    # Add a primary checkbox control to the main layout
    ckb2 = ui.addCheckbox(main, "This is checkbox label", "Primary")
    ckb2.setOnTouch(onTouch)

    # Add a secondary checkbox control to the main layout
    # and set its value to `True`
    ckb3 = ui.addCheckbox(main, "This is checkbox label", "Secondary")
    ckb3.value = True
    ckb3.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup(f"Value is {value}")
 */
    
            
    
/**
@sample Python Text positions
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Add a checkbox with label on the right.
    ckb1 = ui.addCheckbox(main, "Checkbox on the left", "Left")
    ckb1.setOnTouch(onTouch)

    # Add a checkbox with label on the bottom.
    ckb2 = ui.addCheckbox(main, "Checkbox on the top", "Primary,Top")
    ckb2.setOnTouch(onTouch)

    # Add a checkbox with label on the left.
    ckb3 = ui.addCheckbox(main, "Checkbox on the right", "Secondary,Right")
    ckb3.setOnTouch(onTouch)

    # Add a checkbox with label on top.
    ckb4 = ui.addCheckbox(main, "Checkbox on the bottom", "Secondary,Bottom")
    ckb4.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup(f"Value is {value}")
 */
    
            
    
/**
@sample Python Adding custom checkbox icon
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Adds checkbox control to the main layout
    ckb = ui.addCheckbox(main, "This is checkbox label", "Left,Secondary")

    # Set the checked icon to `favorite`
    # and uncheck icon to `person`
    ckb.setIcon("favorite", "person")

    # Add a callback handler for `onTouch` event
    ckb.setOnTouch(onTouch)

def onTouch(value):
    ui.showPopup(f"Value is {value}")
 */
    
            