// ------------- HEADER SECTION ------------- 


/** # showPopover #
 * @brief showPopover
 * 
 * $$ ui.showPopover(parent, text, position, width, height) $$ 
 * @param {obj} parent UI component. Can be a `Layout` `Button` `Image` `Text` or any UI component except dialogs.
 * @param {str} text The text to de displayed. For displaying more data, pass a `Layout`
 * @param {str} position A comma separated values representing the `anchorOrigin,transformOrigin` \n `anchorOrigin` Position of the popover on its parent. Available values are `tl` for top-left, `tc` for top-center, `tr` `cl` `cc` `cr` `bl` `bc` and `br` for bottom-right. \n `transformOrigin` Origin on the popover itselt. Values are the same as the `anchorOrigin`
 * @param {num} width Fraction of the screen width.
 * @param {num} height Fraction of the screen height.
 * @returns obj-Popover Component.
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Show a popover on any <col nobox #4c4>UI Components</col> except Dialogs and Popups. Popover is very useful on showing additional info or displaying instructions especially when the control is click or hovered.

### Properties
These are the setter and getter properties for the showPopover Component.
<smp noinl>backImage:"str:'Sets or returns the path to the background image.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the font file use for the Popover.'"</smp>
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Creates a button control where to attached the popover
        this.btn = ui.addButton(this.main, "Show Popover")

        // Add a callback handler when the button is click
        this.btn.setOnTouch( this.onTouch )
    }

    onTouch() {
        // Display a popover when the button is click
        ui.showPopover(this.btn, "This is a text to be displayed.")
    }
}
 */
    
            
    
/**
@sample Positioning
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,Horizontal", 1, 1 )

        var lay1 = ui.addLayout( this.main, "Linear", "VCenter", 0.5, 1 )
        lay1.setChildMargins(0, 0.05)

        ui.addText(lay1, "Position on parent", "h5")

        var btn = ui.addButton(lay1, "Top-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,tl") } )

        btn = ui.addButton(lay1, "Top-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tc,tl") } )

        btn = ui.addButton(lay1, "Top-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tr,tl") } )

        btn = ui.addButton(lay1, "Center-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "cl,tl") } )

        btn = ui.addButton(lay1, "Center-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "cc,tl") } )

        btn = ui.addButton(lay1, "Center-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "cr,tl") } )

        btn = ui.addButton(lay1, "Bottom-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "bl,tl") } )

        btn = ui.addButton(lay1, "Bottom-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "bc,tl") } )

        btn = ui.addButton(lay1, "Bottom-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "br,tl") } )

        var lay2 = ui.addLayout( this.main, "Linear", "VCenter", 0.5, 1 )
        lay2.setChildMargins(0, 0.05)

        ui.addText(lay2, "Origin on popover", "h5")

        btn = ui.addButton(lay2, "Top-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,tl") } )

        btn = ui.addButton(lay2, "Top-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,tc") } )

        btn = ui.addButton(lay2, "Top-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,tr") } )

        btn = ui.addButton(lay2, "Center-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl", "cl") } )

        btn = ui.addButton(lay2, "Center-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,cc") } )

        btn = ui.addButton(lay2, "Center-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,cr") } )

        btn = ui.addButton(lay2, "Bottom-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,bl") } )

        btn = ui.addButton(lay2, "Bottom-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,bc") } )

        btn = ui.addButton(lay2, "Bottom-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,br") } )
    }
}
 */
    
            
    
/**
@sample Advanced
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        // Creates a button where to attached the popover.
        this.btn = ui.addButton( this.main, "Show Popover" )
        this.btn.setOnTouch( this.onTouch )
    }

    onTouch() {
        // Display a custom popover when the button is click.

        // Create a layout with `null` parent to be pass into the popover
        var lay = ui.addLayout(null, "Linear", "VCenter,Left")
        lay.setChildMargins(0.1, 0.05, 0.1, 0.05)

        // you can add text
        ui.addText(lay, "Header", "h5")

        // you can add as many text as you can
        ui.addText(lay, "This is a very long text to display in this popover", "Left")

        // you can also add button
        ui.addButton(lay, "Outlined Button", "Outlined", "Secondary")

        // pass the layout into the `ui.showPopover` method
        ui.showPopover( this.btn, lay, "bl,tr")
    }
}
 */
    
            
    
/**
@sample Python Basic
from hybrid import ui

def OnStart():
    global btn
    # Creates a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Creates a button control where to attach the popover
    btn = ui.addButton(main, "Show Popover")

    # Add a callback handler when the button is clicked
    btn.setOnTouch(onTouch)

def onTouch(event):
    # Display a popover when the button is clicked
    ui.showPopover(btn, "This is a text to be displayed.")
 */
    
            
    
/**
@sample Python Positioning
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,Horizontal", 1, 1)

    lay1 = ui.addLayout(main, "Linear", "VCenter", 0.5, 1)
    lay1.setChildMargins(0, 0.05)

    ui.addText(lay1, "Position on parent", "h5")

    btn = ui.addButton(lay1, "Top-Left")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tl,tl"))

    btn = ui.addButton(lay1, "Top-Center")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tc,tl"))

    btn = ui.addButton(lay1, "Top-Right")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tr,tl"))

    btn = ui.addButton(lay1, "Center-Left")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "cl,tl"))

    btn = ui.addButton(lay1, "Center-Center")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "cc,tl"))

    btn = ui.addButton(lay1, "Center-Right")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "cr,tl"))

    btn = ui.addButton(lay1, "Bottom-Left")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "bl,tl"))

    btn = ui.addButton(lay1, "Bottom-Center")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "bc,tl"))

    btn = ui.addButton(lay1, "Bottom-Right")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "br,tl"))

    lay2 = ui.addLayout(main, "Linear", "VCenter", 0.5, 1)
    lay2.setChildMargins(0, 0.05)

    ui.addText(lay2, "Origin on popover", "h5")

    btn = ui.addButton(lay2, "Top-Left")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tl,tl"))

    btn = ui.addButton(lay2, "Top-Center")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tl,tc"))

    btn = ui.addButton(lay2, "Top-Right")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tl,tr"))

    btn = ui.addButton(lay2, "Center-Left")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tl", "cl"))

    btn = ui.addButton(lay2, "Center-Center")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tl,cc"))

    btn = ui.addButton(lay2, "Center-Right")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tl,cr"))

    btn = ui.addButton(lay2, "Bottom-Left")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tl,bl"))

    btn = ui.addButton(lay2, "Bottom-Center")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tl,bc"))

    btn = ui.addButton(lay2, "Bottom-Right")
    btn.setOnTouch(lambda event: ui.showPopover("This is a popover message", "tl,br"))
 */
    
            
    
/**
@sample Python Advanced
from hybrid import ui

def OnStart():
    global btn
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Creates a button where to attach the popover.
    btn = ui.addButton(main, "Show Popover")
    btn.setOnTouch(onTouch)

def onTouch(event):
    # Display a custom popover when the button is clicked.

    # Create a layout with `null` parent to be passed into the popover
    lay = ui.addLayout(None, "Linear", "VCenter,Left")
    lay.setChildMargins(0.1, 0.05, 0.1, 0.05)

    # you can add text
    ui.addText(lay, "Header", "h5")

    # you can add as many texts as you can
    ui.addText(lay, "This is a very long text to display in this popover", "Left")

    # you can also add a button
    ui.addButton(lay, "Outlined Button", "Outlined", "Secondary")

    # pass the layout into the `ui.showPopover` method
    ui.showPopover(btn, lay, "bl,tr")
 */
    
            