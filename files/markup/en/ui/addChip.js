// ------------- HEADER SECTION -------------


/** # addChip #
 * @abbrev chp
 * @brief addChip
 * Adds a chip into your app.
 * 
 *  If you want to change the height of the Chip later on after initializing, pass the <col nobox #4c4>height</col> argument.
 * $$ chp = ui.addChip(parent, text, options?, width?, height?) $$ 
 * @param {obj} parent The parent layout where to add the Chip.
 * @param {str} text The text on the chip.
 * @param {str_com} [options] Color: `Primary` `Secondary` `Default` \n `Size`: `Small` `Medium` \n `Variant`: `Outlined` `Default` \n `Util`: `Touchable`
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction of the screen height. [0-1]
 * @returns uio-Chip
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

                    
/** ### avatar
 * @prop
 * Sets or returns the avatar. Can be image or a single character.
 * @returns str
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
 * Sets or returns the theme color of the chip. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> <col nobox #fb8c00>Secondary</col>
 * @returns str
 */

                    
/** ### cornerRadius
 * @prop
 * Sets or returns the corner radius in pixels.
 * @returns num
 */

                    
/** ### deleteIcon
 * @prop
 * Sets or returns the delete icon.
 * @returns str
 */

                    
/** ### disabled
 * @prop
 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.
 * @returns bin
 */

                    
/** ### enabled
 * @prop
 * Returns whether the chip is enabled or disabled.
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
 * Sets or returns the material icon font if icon is provided.
 * @returns str
 */

                    
/** ### iconColor
 * @prop
 * Sets or returns the icon color in hexadecimal format.
 * @returns str
 */

                    
/** ### iconSize
 * @prop
 * Sets or returns the font-size of the icon in css font-size format. You can pass string values to be more specific such as <col nobox #fb8c00>12px</col> <col nobox #fb8c00>1.5rem</col>.
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

                    
/** ### sizeVariant
 * @prop
 * Sets or returns the size variant. Values can be <col nobox #fb8c00>small</col> or <col nobox #fb8c00>medium</col>
 * @returns str
 */

                    
/** ### text
 * @prop
 * Sets or returns the text of the chip.
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
 * Sets or returns the variant of the chip. Vaues can be <col nobox #fb8c00>Default</col> or <col nobox #fb8c00>Outlined</col>
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

                    
/** ### setTouchable ###
 * @brief setTouchable
 * Sets the chip to clickable. This will add a pointer cursor into the chip when hovered
 * $$ chp.setTouchable(touchable) $$
 * @param {bin} touchable `true` or `false`
 */


/** ### setOnDelete ###
 * @brief setOnDelete
 * Sets a callback function when the chip is deleted. This will automatically add a delete icon to the chip
 * $$ chp.setOnDelete(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the chip
 * $$ chp.setCornerRadius(tl?, tr?, bl?, br?, mode='px') $$
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
@sample Chips
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0.025, 0, 0.025)

        // Add a default chip to the main layout
        this.chip1 = ui.addChip(this.main, "Basic Chip")

        // Add a callback handler for `onTouch` event.
        this.chip1.setOnTouch( this.onTouch )

        // Add a small primary chip
        this.chip2 = ui.addChip(this.main, "Small Primary Chip", "Primary,Small")
        this.chip2.setOnTouch( this.onTouch )

        // Add a touchable secondary chip
        this.chip3 = ui.addChip(this.main, "Secondary Chip", "Secondary,Touchable")
        this.chip2.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You touched the chip!" )
    }
}
 */
    
            
    
/**
@sample Deletable chip
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a touchable and deletable chip
        this.chip = ui.addChip(this.main, 'Deletable', 'Secondary,Touchable')

        // Add callback hanlder for `onDelete` event.
        // This will also add a delete icon to the chip.
        this.chip.setOnDelete( this.onDelete )
    }

    onDelete()
    {
        ui.showPopup( "Chip is deleted!" )
    }
}
 */
    
            
    
/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a chip control to the main layout
        this.chip = ui.addChip(this.main, "Shopping Cart")

        // Add a leading icon to the chip control
        this.chip.icon = "shopping_cart"

        // Sets the icon color of the chip control
        this.chip.iconColor = "#673ab7"

        // Sets the text size of the chip control
        this.chip.textSize = 14
    }
}
 */
    
            
    
/**
@sample Avatar
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a chip control to the main layout
        this.chip = ui.addChip(this.main, "Character Avatar")

        // Set the avatar property of the main layout
        this.chip.avatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"
    }
}
 */
    
            
    
/**
@sample Python Chips
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.setChildMargins(0, 0.025, 0, 0.025)

    # Add a default chip to the main layout
    chip1 = ui.addChip(main, "Basic Chip")

    # Add a callback handler for `onTouch` event.
    chip1.setOnTouch(onTouch)

    # Add a small primary chip
    chip2 = ui.addChip(main, "Small Primary Chip", "Primary,Small")
    chip2.setOnTouch(onTouch)

    # Add a touchable secondary chip
    chip3 = ui.addChip(main, "Secondary Chip", "Secondary,Touchable")
    chip3.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You touched the chip!")

sample = Main()
sample.start()
 */
    
            
    
/**
@sample Python Deletable chip
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a touchable and deletable chip
    chip = ui.addChip(main, 'Deletable', 'Secondary,Touchable')

    # Add callback hanlder for `onDelete` event.
    # This will also add a delete icon to the chip.
    chip.setOnDelete(onDelete)

def onDelete():
    ui.showPopup("Chip is deleted!")

sample = Main()
sample.start()
 */
    
            
    
/**
@sample Python Custom styles
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a chip control to the main layout
    chip = ui.addChip(main, "Shopping Cart")

    # Add a leading icon to the chip control
    chip.icon = "shopping_cart"

    # Sets the icon color of the chip control
    chip.iconColor = "#673ab7"

    # Sets the text size of the chip control
    chip.textSize = 14

sample = Main()
sample.start()
 */
    
            
    
/**
@sample Python Avatar
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a chip control to the main layout
    chip = ui.addChip(main, "Character Avatar")

    # Set the avatar property of the main layout
    chip.avatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

sample = Main()
sample.start()
 */
    
            