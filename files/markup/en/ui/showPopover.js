/** # Popover
 * @abbrev
 * Popover is very useful on showing additional info or displaying instructions especially when the control is click or hovered.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs It is like a small, temporary window that appears above other content, showing additional options or details. It's a brief and focused way to present information or choices to the user.
 * $$ ui.showPopover(parent, text, position, height, height) $$
 * @param {uio} parent UI component. Can be a `Layout` `Button` `Image` `Text` or any UI component except dialogs.
 * @param {String} [text] The text to de displayed. For displaying more data, pass a `Layout`
 * @param {String} [position] A comma separated values representing the\n`"anchorOrigin,transformOrigin"`\n`anchorOrigin` Position of the popover on its parent.\n`transformOrigin` Origin on the popover itself.\nAvailable values for both `anchorOrigin` and `transformOrigin`  are\n`tl` for top-left, `tc` for top-center, `tr` `cl` `cc` `cr` `bl` `bc` and `br` for bottom-right.
 * @param {Number} [width] Fraction of the screen width `[0-1]`.
 * @param {Number} [height] Fraction of the screen height `[0-1]`.
 * @returns uio-Popover
 */


    /** ## Properties
     * These are the setter/getter properties available for the Popover Component.
     * @prop {String} fontFile Sets or returns the font file use for the Popover.
     * @prop {String} backImage Sets or returns the path to the background image.
     */


    /** ## Methods
     * These are the methods available for the Popover Component.
     */


    /** ### show
     * Show the popup dialog.
     * $$ pop.show() $$
     */


    /** ### hide
     * Hide the popup dialog.
     * $$ pop.hide() $$
     */


/* ## Examples */


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
        this.aorigin = "tl"
        this.torigin = "tl"

        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(null, 2, null, 2, "rem")

        var lay = ui.addLayout(this.main, "Linear", "Horizontal", 1)
        lay.childSpacing = "around"

        var sels = "Top-Left,Top-Center,Top-Right,Center-Left,Center-Center,Center-Right,Bottom-Left,Bottom-Center,Bottom-Right"
        
        // Selection of anchor origin or position on parent control
        this.selAOrigin = ui.addSelect(lay, sels.split(","), "Filled", 0.4)
        this.selAOrigin.label = "anchorOrigin"
        this.selAOrigin.setOnTouch(m => {
            m = m.toLowerCase()
            var c = m.split("-")
            this.aorigin = c[0][0]+c[1][0] // get the initials only
            this.update()
        })

        // Selection of transform origin or position on popover itself
        this.selTOrigin = ui.addSelect(lay, sels.split(","), "Filled", 0.4)
        this.selTOrigin.label = "transformOrigin"
        this.selTOrigin.setOnTouch(m => {
            m = m.toLowerCase()
            var c = m.split("-")
            this.torigin = c[0][0]+c[1][0] // get the initials only
            this.update()
        })

        this.posTxt = ui.addText(this.main, "Position: tl,tl")

        this.btn = ui.addButton(this.main, "Show here")
    }

    update() {
        var pos = this.aorigin+","+this.torigin
        this.posTxt.text = "Position: "+pos

        // Show the popover message with the current position setting
        this.pop = ui.showPopover(this.btn, "This is a popover message", pos)

        // Hide the popover after a second
        setTimeout(() => {
            this.pop.hide()
        }, 1000)
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
        this.popBtn = ui.addButton(lay, "Close", "Outlined", "Secondary")
        this.popBtn.setOnTouch( this.closePopover )

        // pass the layout into the `ui.showPopover` method
        this.pop = ui.showPopover( this.btn, lay, "bl,tr")
    }

    closePopover() {
        this.pop.hide()
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


