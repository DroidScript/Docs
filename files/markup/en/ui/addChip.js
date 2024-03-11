/** # Chip
 * @abbrev chp
 * In mobile UI design, a Chip is a compact element displaying attributes, input, or actions.
 * @img(img1.png)
 * @jdocs Material Design defines it with rounded corners and a contained style. Chips offer a visual representation for categories, selections, or interactions, contributing to a clear and concise user interface in mobile applications. Add a chip into your app using the `addChip` method like this:
 * $$ chp = ui.addChip(parent, text, options, width, height) $$
 * @param {uio-Layout} parent The parent layout where to add the Chip.
 * @param {String} text The text on the chip.
 * @param {String} [options] A comma separated option.\nTheme Color: `Primary`, `Secondary`, `Default`\nSize: `Small`, `Medium`\nVariant: `Outlined`, `Default`\nUtil: `Touchable`
 * @param {Number} [width] Fraction of the parent width `[0-1]`
 * @param {Number} [height] Fraction of the parent height `[0-1]`
 * @returns uio-Chip
 * If you want to change the height of the Chip later on after initializing, pass the `height` argument.
 */


	/** ## Properties ##
     * Here are the available setters and/or getters of the Chip Component.
	 * @prop {String} text Sets or returns the text of the chip.
	 * @prop {String} icon Sets or returns the material icon font if icon is provided.
	 * @prop {String} avatar Sets or returns the avatar. Can be image or a single character.
	 * @prop {String} deleteIcon Sets or returns the delete icon.
	 * @prop {String} sizeVariant Sets or returns the size variant. Values can be `small` or `medium`
	 * @prop {Boolean} enabled Returns whether the chip is enabled or disabled.
	 * @prop {String} variant Sets or returns the variant of the chip. Vaues can be `Default` or `Outlined`
	 * @prop {String} color Sets or returns the theme color of the chip. Values can be `Default` `Primary` `Secondary`
     * @prop {String} iconColor Sets or returns the icon color in hexadecimal format.
     * @prop {Number} iconSize Sets or returns the font-size of the icon in css font-size format. You can pass string values to be more specific such as `12px` `1.5rem`.
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
	 * Here are the methods available for Chips Component
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
     * Adds a callback handler when the chip is touch.
     * $$ chp.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */


	/** ### setTouchable
	 * Sets the chip to clickable. This will add a pointer cursor into the chip when hovered.
	 * $$ chp.setTouchable( touchable ) $$
	 * @param {Boolean} touchable Can be `true` or `false`
	 */


	/** ### setOnDelete
	 * Sets a callback function when the chip is deleted. This will automatically add a delete icon to the chip.
	 * $$ chp.setOnDelete( callback ) $$
	 * @param {Function} callback On delete callback function.
	 */


    /** ### setCornerRadius
     * Sets the corner radius of the chip.
     * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} [tl] Top-left corner radius.
     * @param {Number} [tr] Top-right corner radius.
     * @param {Number} [bl] Bottom-left corner radius.
     * @param {Number} [br] Bottom-right corner radius.
     * @param {String} [mode='px'] Unit. Values are `px` `rem` or `%`.
     */


/* --- parent_methods here ----- */


/* ## Examples */


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


