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


/** @extern absHeight */

/** @extern absLeft */

/** @extern absTop */

/** @extern absWidth */

/** @extern backColor */

/** @extern backImage */

/** @extern border */

/** @extern borderColor */

/** @extern borderStyle */

/** ### color
 * @prop
 * Sets or returns the theme color for the FAB. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>
 * @returns str
 */


/** @extern cornerRadius */

/** @extern disabled */

/** ### disabledRipple
 * @prop
 * Sets or returns the disabled state of the ripple effect.
 * @returns bin
 */


/** @extern fontFile */

/** @extern height */

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


/** @extern isVisible */

/** @extern left */

/** @extern margins */

/** @extern opacity */

/** @extern options */

/** @extern padding */

/** @extern parent */

/** @extern position */

/** @extern rotation */

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


/** @extern textColor */

/** @extern textSize */

/** @extern top */

/** @extern type */

/** ### variant
 * @prop
 * Sets or returns the variant use for the FAB. Can be <col nobox #fb8c00>Extended</col> or <col nobox #fb8c00>Rounded</col>
 * @returns str
 */


/** @extern visibility */

/** @extern width */

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
