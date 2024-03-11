/** # ButtonGroup
 * @abbrev btg
 * In mobile UI development, a button group refers to a collection of buttons presented together, often used for related actions.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs The grouping helps organize and visually connect buttons with similar functions. Design principles may include consistent styling, alignment, and spacing for a unified appearance, promoting a cohesive user experience when interacting with multiple buttons in a single context.
 * $$ btg = ui.addButtonGroup(parent, list, options, width, height) $$
 * @jdocs Add a button group into your app using the `addButtonGroup` method like this:
 * @param {uio-Layout} parent The parent layout where to add the ButtonGroup
 * @param {Array} [list] The item to be displayed on the buttn group.
 * @param {String} [options] A comma separated options.\nVariant: `Contained`, `Outlined`, `Text`, `Default`\nTheme Color: `Primary`, `Secondary`, `Default`\nSizes: `Small`, `Medium`, `Large`\nOrientation: `Horizontal`, `Vertical`\nToggleable: `Toggle`, `Radio`\nUtils: `Icon`, `NoElevation`
 * @param {Number} [width] Fraction of the parent width `[0-1]`
 * @param {Number} [height] Fraction of the parent height `[0-1]`
 * @returns uio-ButtonGroup
 */


/**
 * A toggleable buttongroup can accept additional `Radio` option to have atmost one toggled button item. If buttongroup is toggleable, please refer to the `setOnTouch` callback for the correct order of arguments.
 */


	/** ## Properties
	 * Here are the setter and/or getter properties of the ButtonGroup Component.
	 * @prop {Array} list Sets or returns the list items of the button group.
	 * @prop {String} variant Sets or returns the variant. Values can be `Contained` `Outlined` or `Text`
	 * @prop {String} color Sets or returns the theme color of the button. Values can be `Default` `Primary` or `Secondary`
	 * @prop {Array} toolTips Sets or returns the list of tooltip titles.
	 * @prop {String} toolTipPosition Sets or returns the position of the tooltip. Values can be `left` `top` `right` or `bottom`
	 * @prop {String} sizeVariant Sets or returns the size variant. Values can be `small` `medium` or `large`
	 * @prop {String} orientation Sets or returns the orientation of the button group. Can be `horizontal` or `vertical`
     * @prop {String} textColor Sets or returns the color of the button text.
     * @prop {Number} textSize Sets or returns the font size of the button text.
     * @prop {Array} activeItems Sets or returns the indexes of the active button items.
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
	 * Here are the methods available for ButtonGroup Component
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
     * Adds a callback handler when a button item is touch. If the button is `toggleable` the arguments pass into the callback function is `text, index, active, pos` respectively, where `active` is the active state of the button item.
     * $$ btg.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} text The button text. @arg {Number} index The index of the corresponding button item. @arg {Boolean} active The active state of the button item if button is `toggleable`. @arg {Object} pos The position of the touch event.
     */


    /** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ btg.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} text Button text. @arg {Number} index The index of the corresponding button. @arg {Object} pos The position of the touch event.
     */


	/** ### setItemByIndex
	 * Sets a new text for the item in the button group.
	 * $$ btg.setItemByIndex( item, index ) $$
	 * @param {String} item The new text
	 * @param {Number} index The index of the item.
	 */


	/** ### addItem
	 * Adds an additional item in the button group.
	 * $$ btg.addItem( item ) $$
	 * @param {String} item The additional item.
	 */


	/** ### removeItemByIndex
	 * Removes an item in the button group by its index.
	 * $$ btg.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the item to be remove.
	 */


	/** ### removeItemByName
	 * Removes an item in the button group by its name.
	 * $$ btg.removeItemByName( name ) $$
	 * @param {String} name The name of the item to be remove.
	 */


	/** ### popItem
	 * Removes the last item of the button group. This will return the item being removed.
	 * $$ btg.popItem() $$
	 */


	/** ### shiftItem
	 * Removes the first item in the button group. This will return the item being removed.
	 * $$ btg.shiftItem() $$
	 */


	/** ### setToolTips
	 * Adds a tooltips to the ButtonGroup items.
	 * $$ btg.setToolTips(titles, pos) $$
	 * @param {Array} titles The titles for each item in the ButtonGroup.
	 * @param {String} [pos='top'] The positio of the tooltip. \n Can be `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */


	/** ### enableElevation
	 * Enable of disable the elevation of the button group.
	 * $$ btg.enableElevation( enable ) $$
	 * @param {Boolean} enable Can be `true` or `false`
	 */


	/** ### setEnabled
	 * Enable or disable a button item in the button group.
	 * $$ btg.setEnabled( index, value ) $$
	 * @param {Number} index The index of the button item.
	 * @param {Boolean} value Values can be `true` or `false`.
	 */


    /** ### getEnabled
     * Get the enabled state of the button item in the button group.
     * $$ btg.getEnabled( index ) $$
     * @param {Number} index The index of the button item in the button group.
     * @returns Boolean
     */


    /** ### setEnabledByName
     * Enable or disable a button item by its name.
     * $$ btg.setEnabledByName( name, value ) $$
     * @param {String} name The button text.
     * @param {Boolean} value Values can be `true` or `false`.
     */


    /** ### getEnabledByName
     * Get the enabled state of button item in the button group.
     * $$ btg.getEnabledByName( name ) $$
     * @param {String} name The button text.
     * @returns Boolean
     */


/* --- parent_methods here ----- */


/** ## Examples */


/**
@sample Basic ButtonGroup
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add a ButtonGroup control to the main layout
        this.btg = ui.addButtonGroup(this.main, buttons, "", 0.9)

        // Add a callback handler for `onTouch` event
        this.btg.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */


/**
@sample ButtonGroup variants
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add a contained ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add an outlined ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Outlined,Primary", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add a text ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Text,Primary", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */


/**
@sample ButtonGroup colors
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add defualt ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Default", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add primary ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Primary", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add secondary ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Secondary", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */


/**
@sample ButtonGroup sizes
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add small size ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Small", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add medium/default size ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Medium", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add large size ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Large", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */


/**
@sample ButtonGroup icons
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["delete", "shopping_cart", "dashboard"]

        // Add small and primary contained ButtonGroup icons to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Small,Icon")
        this.btg1.setOnTouch( this.onTouch )

        // Add a medium and secondary outlined ButtonGroup icons to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Outlined,Secondary,Medium,Icon")
        this.btg2.setOnTouch( this.onTouch )

        // Add a large and default text ButtonGroup icons to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Text,Large,Icon")
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */


/**
@sample Python Basic ButtonGroup
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with object vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Initialize button items
    buttons = ["Button 1", "Button 2", "Button 3"]

    # Add a ButtonGroup control to the main layout
    btg = ui.addButtonGroup(main, buttons, "", 0.9)

    # Add a callback handler for `onTouch` event
    btg.setOnTouch(onTouch)

def onTouch(text, index, event):
    # Display the touched button text
    ui.showPopup(text)
 */


/**
@sample Python ButtonGroup variants
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with object vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    buttons = ["Button 1", "Button 2", "Button 3"]

    # Add a contained ButtonGroup to the main layout
    btg1 = ui.addButtonGroup(main, buttons, "Contained,Primary", 0.9)
    btg1.setOnTouch(onTouch)

    # Add an outlined ButtonGroup to the main layout
    btg2 = ui.addButtonGroup(main, buttons, "Outlined,Primary", 0.9)
    btg2.setOnTouch(onTouch)

    # Add a text ButtonGroup to the main layout
    btg3 = ui.addButtonGroup(main, buttons, "Text,Primary", 0.9)
    btg3.setOnTouch(onTouch)

def onTouch(text, index, event):
    # Display the touched button text
    ui.showPopup(text)
 */


/**
@sample Python ButtonGroup colors
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with object vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Initialize button items
    buttons = ["Button 1", "Button 2", "Button 3"]

    # Add defualt ButtonGroup to the main layout
    btg1 = ui.addButtonGroup(main, buttons, "Default", 0.9)
    btg1.setOnTouch(onTouch)

    # Add primary ButtonGroup to the main layout
    btg2 = ui.addButtonGroup(main, buttons, "Primary", 0.9)
    btg2.setOnTouch(onTouch)

    # Add secondary ButtonGroup to the main layout
    btg3 = ui.addButtonGroup(main, buttons, "Secondary", 0.9)
    btg3.setOnTouch(onTouch)

def onTouch(text, index, event):
    # Display the touched button text
    ui.showPopup(text)
 */


/**
@sample Python ButtonGroup sizes
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with object vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Initialize button items
    buttons = ["Button 1", "Button 2", "Button 3"]

    # Add small size ButtonGroup to the main layout
    btg1 = ui.addButtonGroup(main, buttons, "Contained,Primary,Small", 0.9)
    btg1.setOnTouch(onTouch)

    # Add medium/default size ButtonGroup to the main layout
    btg2 = ui.addButtonGroup(main, buttons, "Contained,Primary,Medium", 0.9)
    btg2.setOnTouch(onTouch)

    # Add large size ButtonGroup to the main layout
    btg3 = ui.addButtonGroup(main, buttons, "Contained,Primary,Large", 0.9)
    btg3.setOnTouch(onTouch)

def onTouch(text, index, event):
    # Display the touched button text
    ui.showPopup(text)
 */


/**
@sample Python ButtonGroup icons
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with object vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    # Initialize button items
    buttons = ["delete", "shopping_cart", "dashboard"]

    # Add small and primary contained ButtonGroup icons to the main layout
    btg1 = ui.addButtonGroup(main, buttons, "Contained,Primary,Small,Icon")
    btg1.setOnTouch(onTouch)

    # Add a medium and secondary outlined ButtonGroup icons to the main layout
    btg2 = ui.addButtonGroup(main, buttons, "Outlined,Secondary,Medium,Icon")
    btg2.setOnTouch(onTouch)

    # Add a large and default text ButtonGroup icons to the main layout
    btg3 = ui.addButtonGroup(main, buttons, "Text,Large,Icon")
    btg3.setOnTouch(onTouch)

def onTouch(text, index, event):
    # Display the touched button text
    ui.showPopup(text)
 */


