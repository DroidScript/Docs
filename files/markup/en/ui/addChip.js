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


/** @extern absHeight */

/** @extern absLeft */

/** @extern absTop */

/** @extern absWidth */

/** ### avatar
 * @prop
 * Sets or returns the avatar. Can be image or a single character.
 * @returns str
 */


/** @extern backColor */

/** @extern backImage */

/** @extern border */

/** @extern borderColor */

/** @extern borderStyle */

/** ### color
 * @prop
 * Sets or returns the theme color of the chip. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> <col nobox #fb8c00>Secondary</col>
 * @returns str
 */


/** @extern cornerRadius */

/** ### deleteIcon
 * @prop
 * Sets or returns the delete icon.
 * @returns str
 */


/** @extern disabled */

/** ### enabled
 * @prop
 * Returns whether the chip is enabled or disabled.
 * @returns bin
 */


/** @extern fontFile */

/** @extern height */

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
 * Sets or returns the size variant. Values can be <col nobox #fb8c00>small</col> or <col nobox #fb8c00>medium</col>
 * @returns str
 */


/** ### text
 * @prop
 * Sets or returns the text of the chip.
 * @returns str
 */


/** @extern textColor */

/** @extern textSize */

/** @extern top */

/** @extern type */

/** ### variant
 * @prop
 * Sets or returns the variant of the chip. Vaues can be <col nobox #fb8c00>Default</col> or <col nobox #fb8c00>Outlined</col>
 * @returns str
 */


/** @extern visibility */

/** @extern width */

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
