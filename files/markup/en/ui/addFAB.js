// ------------- HEADER SECTION -------------


/** # addFAB #
 * @abbrev fab
 * @brief addFAB
 * 
 * $$ fab = ui.addFAB(parent, icon, options?, text?) $$ 
 * @param {obj} parent The parent layout where to add the fab
 * @param {str} icon The string icon of the FAB
 * @param {str_com} [options] `Fixed` `Static` `Rounded` `Extended` `Left` `Right`
 * @param {str} [text] Text to show for extended FABs.
 * @returns uio-FAB
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a floating action button on your layout. FAB usually float at the bottom right of your screen by default.

 If you want the fab to position relative to the layout and not on the bottom right corner, pass a <col nobox #4c4>Static</col> option.

 If fab is <col nobox #4c4>Extended</col> pass a text argument.
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### absHeight
 * @prop
 * Returns the absolute height of the control in pixels.
 * @returns num
 */

                    
/** ### absLeft
 * @prop
 * Returns the absolute distance of the control from the left in pixels.
 * @returns num
 */

                    
/** ### absTop
 * @prop
 * Returns the absolute distance of the control from the top in pixels.
 * @returns num
 */

                    
/** ### absWidth
 * @prop
 * Returns the absolute width of the control in pixels.
 * @returns num
 */

                    
/** ### backColor
 * @prop
 * A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
 * @returns str
 */

                    
/** ### backImage
 * @prop
 * The path to your image file.
 * @returns str
 */

                    
/** ### border
 * @prop
 * Sets or returns the border thickness in pixels.
 * @returns num
 */

                    
/** ### borderColor
 * @prop
 * Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>
 * @returns str
 */

                    
/** ### borderStyle
 * @prop
 * Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.
 * @returns str
 */

                    
/** ### color
 * @prop
 * Sets or returns the theme color for the FAB. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>
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

                    
/** ### disabledRipple
 * @prop
 * Sets or returns the disabled state of the ripple effect.
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

                    
/** ### icon
 * @prop
 * Sets or returns the material icon font.
 * @returns str
 */

                    
/** ### iconSize
 * @prop
 * Sets or returns the size of the icon.
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
 * @returns lst
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

                    
/** ### padding
 * @prop
 * Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.
 * @returns lst
 */

                    
/** ### parent
 * @prop
 * Returns the parent layout control.
 * @returns obj
 */

                    
/** ### position
 * @prop
 * Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.
 * @returns obj
 */

                    
/** ### rotation
 * @prop
 * Sets or returns the angle of rotation in degrees.
 * @returns num
 */

                    
/** ### sizeVariant
 * @prop
 * Sets or returns the size variant of the FAB. Values can be <col nobox #fb8c00>Small</col> <col nobox #fb8c00>Medium</col> or <col nobox #fb8c00>Large</col>
 * @returns str
 */

                    
/** ### text
 * @prop
 * Sets or returns the text for extended FAB.
 * @returns str
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

                    
/** ### type
 * @prop
 * Returns the type of the control.
 * @returns str
 */

                    
/** ### variant
 * @prop
 * Sets or returns the variant use for the FAB. Can be <col nobox #fb8c00>Extended</col> or <col nobox #fb8c00>Rounded</col>
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

                    
/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the button
 * $$ fab.setCornerRadius(tl?, tr?, bl?, br?, mode='px') $$
 * @param {num} [tl] Top-left corner radius.
 * @param {num} [tr] Top-right corner radius.
 * @param {num} [bl] Bottom-left corner radius.
 * @param {num} [br] Bottom-right corner radius.
 * @param {str} [mode='px'] Unit. Values are `px` `rem` or `%`.
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
    
            