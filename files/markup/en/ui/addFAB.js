// ------------- HEADER SECTION -------------


/** # addFAB #
 * @abbrev fab
 * @brief addFAB
 * 
 * $$ fab = ui.addFAB(parent, icon, options, text) $$ 
 * @param {obj} parent The parent layout where to add the fab
 * @param {str} icon The string icon of the FAB
 * @param {str_com} options `Fixed` `Static` `Rounded` `Extended` `Left` `Right`
 * @param {str} text Text to show for extended FABs.
 * @returns uio-FAB
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a floating action button on your layout. FAB usually float at the bottom right of your screen by default.

 If you want the fab to position relative to the layout and not on the bottom right corner, pass a <col nobox #4c4>Static</col> option.

 If fab is <col nobox #4c4>Extended</col> pass a text argument.

### Properties
These are the setter and getter properties for the addFAB Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color for the FAB. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>disabledRipple:"bin:'Sets or returns the disabled state of the ripple effect.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>icon:"str:'Sets or returns the material icon font.'"</smp>
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
<smp noinl>sizeVariant:"str:'Sets or returns the size variant of the FAB. Values can be <col nobox #fb8c00>Small</col> <col nobox #fb8c00>Medium</col> or <col nobox #fb8c00>Large</col>'"</smp>
<smp noinl>text:"str:'Sets or returns the text for extended FAB.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>variant:"str:'Sets or returns the variant use for the FAB. Can be <col nobox #fb8c00>Extended</col> or <col nobox #fb8c00>Rounded</col>'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the button
 * $$ fab.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
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

/** @extern bringForward */

/** @extern sendBackward */


// ------------- SAMPLES ------------- 


    
/**
@sample Basic FAB
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a floating action button to the main layout.
        // By default, FAB is positioned fix at the bottom right corner
        this.fab = ui.addFAB(this.main, "add")

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */
    
            
    
/**
@sample Primary static FAB
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a primary floating action button to the main layout.
        // Passing `Static` will ignore fixed positioning
        // and will follow the flow of the parent layout
        this.fab = ui.addFAB( this.main, "add", "Primary,Static" )

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */
    
            
    
/**
@sample Extended FAB
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a secondary floating action button to the main layout.
        // Passing `Extended` enables to add more text on the FAB
        this.fab = ui.addFAB(this.main, "add", "Secondary,Extended", "New message")

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */
    
            
    
/**
@sample Secondary,Extended,Left
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a secondary floating action button to the main layout.
        // Passing `Left` option will position the FAB on the bottom left corner
        this.fab = ui.addFAB(this.main, "add", "Secondary,Extended,Left", "New message")

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */
    
            
    
/**
@sample Python Basic FAB
from hybrid import ui

def OnStart():
    # Create a fullscreen linear layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a floating action button to the main layout.
    # By default, FAB is positioned fix at the bottom right corner
    fab = ui.addFAB(main, "add")

    # Add a callback handler for `onTouch` event on the FAB
    fab.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You clicked me!")
 */
    
            
    
/**
@sample Python Primary static FAB
from hybrid import ui

def OnStart():
    # Create a fullscreen linear layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a primary floating action button to the main layout.
    # Passing `Static` will ignore fixed positioning
    # and will follow the flow of the parent layout
    fab = ui.addFAB(main, "add", "Primary,Static")

    # Add a callback handler for `onTouch` event on the FAB
    fab.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You clicked me!")
 */
    
            
    
/**
@sample Python Extended FAB
from hybrid import ui

def OnStart():
    # Create a fullscreen linear layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a secondary floating action button to the main layout.
    # Passing `Extended` enables to add more text on the FAB
    fab = ui.addFAB(main, "add", "Secondary,Extended", "New message")

    # Add a callback handler for `onTouch` event on the FAB
    fab.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You clicked me!")
 */
    
            
    
/**
@sample Python Secondary,Extended,Left
from hybrid import ui

def OnStart():
    # Create a fullscreen linear layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a secondary floating action button to the main layout.
    # Passing `Left` option will position the FAB on the bottom left corner
    fab = ui.addFAB(main, "add", "Secondary,Extended,Left", "New message")

    # Add a callback handler for `onTouch` event on the FAB
    fab.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You clicked me!")
 */
    
            