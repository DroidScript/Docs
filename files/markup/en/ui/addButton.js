/** # Button
 * @abbrev btn
 * A button component in mobile UI development is an element that triggers an action when pressed.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs A button typically adheres to guidelines such as elevation, shape, and color to convey interactivity. It serves as a touchable surface with discernible feedback, promoting a consistent and intuitive user experience across mobile applications. Add a button using the `addButton` method like this:
 * $$ btn = ui.addButton(parent, text, options, width, height) $$
 * @param {uio-Layout} parent The layout where to add the button.
 * @param {String} text The button text or the material icon text.
 * @param {String} [options] A comma separated options.\nVariant: `Contained`, `Outlined`, `Text`, `Default`\nTheme Color: `Primary`, `Secondary`, `Default`\nSizes: `Small`, `Medium`, `Large`\nToggleable: `Toggle`, `Active`\nUtils: `Icon`, `NoRipple`, `Upload`, `Multiple`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-Button
 */


/**
 * In case of `Upload`, you can specify `Multiple` to accept multiple files.
 */


	/** ## Properties ##
	 * Here are the available setter and/or getter properties of the Button Component.
	 * @prop {String} text Sets or returns the button text.
	 * @prop {Number} badge Sets or returns the badge content. You can pass a `string`
	 * @prop {String} badgeColor Sets or returns the color of the badge. Values can be `Primary` or `Secondary`
	 * @prop {String} toolTip Sets or returns the tooltip text.
	 * @prop {String} toolTipPosition Sets or returns the tooltip position. Values can be `left` `top` `right` or `bottom`
	 * @prop {String} variant Sets or returns the variant of the button. Values can be `Contained` `Outlined` or `Text`
	 * @prop {String} color Sets or returns the theme color of the button. Values can be `Default` `Primary` `Secondary` `Inherit`
	 * @prop {String} textColor Sets or returns the text color in hexadecimal format. 
	 * @prop {String} sizeVariant Sets or returns the size variant of the button. Values can be `small` `medium` or `large`
	 * @prop {Number} cornerRadius Sets or returns the corner radius of the button.
     * @prop {String} icon Sets or returns the material icon font use for the leading icon.
     * @prop {String} acceptedFiles Sets or returns the accepted files for an upload button.
     * @prop {Boolean} active Sets or returns the active state if button is `toggleable`.
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
	 * Here are the methods available for Button Component
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
     * Adds a callback handler when the button is touch. If the button is `toggleable` the first argument pass into the callback function is a `Boolean` value which is the active state of the button toggle.
     * $$ btn.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event. If the button is `toggleable` the first argument pass into the callback function is a `Boolean` value which is the active state of the button toggle.
     */


    /** ### setOnLongTouch
     * Adds a callback handler when the button is long touch. The touch timer is about 500 milliseconds.
     * $$ btn.setOnLongTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */


	/** ### setOnFileSelect
	 * Sets a callback on file select.
	 * $$ btn.setOnFileSelect( callback ) $$
	 * @param {Function} callback The callback function. ---> @arg {Array} files An array of file objects selected.
	 */


	/** ### setToolTip
	 * Sets a tooltip when the button is hovered.
	 * $$ btn.setToolTip( title, pos ) $$
	 * @param {String} title The text of the tooltip
	 * @param {String} [pos='top'] Position of the tooltip. \n Positions : `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */


	/** ### setTextShadow
	 * Sets a text-shadow to the button text.
	 * $$ btn.setTextShadow( radius, dx, dy, color ) $$
	 * @param {Number} radius The radius in pixels
	 * @param {Number} dx The x-offset in pixels
	 * @param {Number} dy The y-offset in pixels
	 * @param {String} color The color in hexadecimal `#rrggbb`
	 */


	/** ### setPadding
	 * Sets the padding of the button.
	 * $$ btn.setPadding( left, top, right, bottom, mode ) $$
	 * @param {Number} [left] The left padding in pixel.
	 * @param {Number} [top] The top padding in pixels,
	 * @param {Number} [right] The right padding in pixels.
	 * @param {Number} [bottom] The bottom padding in pixels.
	 * @param {String} [mode='px'] Can be `px` `%`
	 */


    /** ### setCornerRadius
     * Sets the corner radius of the button.
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
@sample Button variants
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins( 0.01, 0.01, 0.01, 0.01 )

        // Contained
        this.btn1 = ui.addButton( this.main, "Button", "Contained" )

        // Add a callback handler for onTouch event
        this.btn1.setOnTouch( this.onTouch )

        // Outlined
        this.btn2 = ui.addButton( this.main, "Button", "Outlined" )
        this.btn2.setOnTouch( this.onTouch )

        // Text
        this.btn3 = ui.addButton( this.main, "Button", "Text" )
        this.btn3.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "Button is touch!" )
    }
}
 */


/**
@sample Button theme colors
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Add primary button to the main layout
        this.btn1 = ui.addButton(this.main, "Primary", "Contained,Primary")

        // Add a callback handler for onTouch event
        this.btn1.setOnTouch( this.onTouch )

        // Add secondary button to the main layout
        this.btn2 = ui.addButton(this.main, "Secondary", "Outlined,Secondary")
        this.btn2.setOnTouch( this.onTouch )

        // Add default button to the main layout
        this.btn3 = ui.addButton(this.main, "Default", "Text,Default")
        this.btn3.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "Button is touch!" )
    }
}
 */


/**
@sample Button sizes
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Add a small size button to the main layout
        this.btn1 = ui.addButton(this.main, "Small", "Contained,Primary,Small")

        // Add a callback handler for onTouch event
        this.btn1.setOnTouch( this.onTouch )

        // Add a medium/default size button to the main layout
        this.btn2 = ui.addButton(this.main, "Medium", "Contained,Primary,Medium")

        // Add a large size button to the main layout
        this.btn3 = ui.addButton(this.main, "Large", "Contained,Primary,Large")
    }

    onTouch()
    {
        ui.showPopup( "Button is touch!" )
    }
}
 */


/**
@sample Button tooltips
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Add a button to the main layout
        // and add a tooltip to the left of the button
        this.btn1 = ui.addButton(this.main, "Left", "Contained,Primary")
        this.btn1.setToolTip("Tooltip on the left", "left")

        // Add a button to the main layout
        // and add a tooltip to the top of the button
        this.btn2 = ui.addButton(this.main, "Top", "Contained,Primary")
        this.btn2.setToolTip("Tooltip on the top", "top")

        // // Add a button to the main layout
        // and add a tooltip to the right of the button
        this.btn3 = ui.addButton(this.main, "Right", "Contained,Primary")
        this.btn3.setToolTip("Tooltip on the right", "right")

        // // Add a button to the main layout
        // and add a tooltip to the bottom of the button
        this.btn4 = ui.addButton(this.main, "Bottom", "Contained,Primary")
        this.btn4.setToolTip("Tooltip on the bottom", "bottom")
    }
}
 */


/**
@sample Button with icons
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins("12px", "12px", "12px", "12px")

        // Add a primary contained button and
        // set its leading icon to `send`
        this.btn1 = ui.addButton(this.main, "Send", "Primary")
        this.btn1.icon = "send"

        // Add a secondary contained button and
        // set its leading icon to `shopping_cart`
        this.btn2 = ui.addButton(this.main, "Add to cart", "Secondary")
        this.btn2.icon = "shopping_cart"

        // Add an `android` primary icon button to the main layout
        this.btn3 = ui.addButton(this.main, "android", "Primary,Icon")

        // Add a `settings` secondary icon button to the main layout
        this.btn4 = ui.addButton(this.main, "settings", "Secondary,Icon")
    }
}
 */


/**
@sample Buttons with badges
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Add an android icon button to the main layout
        this.btn1 = ui.addButton(this.main, "android", "Primary,Icon")

        // Add a setting icon button to the main layout and
        // set the badge to `5`
        this.btn2 = ui.addButton(this.main, "settings", "Primary,Icon")
        this.btn2.setBadge( 5 )

        // Add a contained button to the main layout and
        // set the badge to `New` with a `Primary` background color
        this.btn3 = ui.addButton(this.main, "With Badge", "Secondary,Outlined")
        this.btn3.setBadge("New", "Primary")
    }
}
 */


/**
@sample Upload button
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Add a primary upload button with upload icon
        this.btn = ui.addButton(this.main, "Upload File", "Primary,Upload")
        this.btn.icon = "backup"

        // Add a callback handler for `onFileSelect` event
        this.btn.setOnFileSelect( this.onFileSelect )
    }

    onFileSelect( files )
    {
        // Get the first file and display its file name
        const file = files[ 0 ]
        ui.showPopup( `${file.name} is selected.` )
    }
}
 */


/**
@sample Toggleable Buttons
class Main extends App {
    onStart() {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY");

        // Add margins to children
        this.main.childMargins = "0.5rem";

        // Add contained buttons with theme color and  "Toggle" option
        this.btn = ui.addButton(this.main, "Button", "Toggle,Active");
        this.btn = ui.addButton(this.main, "Button", "Primary,Toggle,Active");
        this.btn = ui.addButton(this.main, "Button", "Secondary,Toggle,Active");

        // Add outlined buttons with theme color and  "Toggle" option
        this.btn = ui.addButton(this.main, "Button", "Outlined,Toggle,Active");
        this.btn = ui.addButton(this.main, "Button", "Outlined,Primary,Toggle,Active");
        this.btn = ui.addButton(this.main, "Button", "Outlined,Secondary,Toggle,Active");

        // Add text buttons with theme color and  "Toggle" option
        this.btn = ui.addButton(this.main, "Button", "Text,Toggle,Active");
        this.btn = ui.addButton(this.main, "Button", "Text,Primary,Toggle,Active");
        this.btn = ui.addButton(this.main, "Button", "Text,Secondary,Toggle,Active");
        
        // Add a callback handler when all the buttons are click
        this.main.children.map(m => m.setOnTouch( this.onTouch ));
    }

    onTouch( value ) {
        ui.showPopup( ""+value );
    }
}
 */


/**
@sample Python Button variants
from hybrid import ui

def OnStart():
    main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
    main.setChildMargins( 0.01, 0.01, 0.01, 0.01 )

    btn1 = ui.addButton( main, "Button", "Contained" )
    btn1.setOnTouch( onTouch )

    btn2 = ui.addButton( main, "Button", "Outlined" )
    btn2.setOnTouch( onTouch )

    btn3 = ui.addButton( main, "Button", "Text" )
    btn3.setOnTouch( onTouch )

def onTouch(event):
    ui.showPopup( "Button is touch!" )
 */


/**
@sample Python Button theme colors
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0.01, 0.01, 0.01, 0.01)

    btn1 = ui.addButton(main, "Primary", "Contained,Primary")
    btn1.setOnTouch( onTouch )

    btn2 = ui.addButton(main, "Secondary", "Outlined,Secondary")
    btn2.setOnTouch( onTouch )

    btn3 = ui.addButton(main, "Default", "Text,Default")
    btn3.setOnTouch( onTouch )

def onTouch(event):
    ui.showPopup( "Button is touch!" )
 */


/**
@sample Python Button sizes
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0.01, 0.01, 0.01, 0.01)

    btn1 = ui.addButton(main, "Small", "Contained,Primary,Small")
    btn1.setOnTouch( onTouch )

    btn2 = ui.addButton(main, "Medium", "Contained,Primary,Medium")

    btn3 = ui.addButton(main, "Large", "Contained,Primary,Large")

def onTouch(event):
    ui.showPopup( "Button is touch!" )
 */


/**
@sample Python Button tooltips
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0, 0.05, 0, 0.05)

    btn1 = ui.addButton(main, "Left", "Contained,Primary")
    btn1.setToolTip("Tooltip on the left", "left")

    btn2 = ui.addButton(main, "Top", "Contained,Primary")
    btn2.setToolTip("Tooltip on the top", "top")

    btn3 = ui.addButton(main, "Right", "Contained,Primary")
    btn3.setToolTip("Tooltip on the right", "right")

    btn4 = ui.addButton(main, "Bottom", "Contained,Primary")
    btn4.setToolTip("Tooltip on the bottom", "bottom")
 */


/**
@sample Python Button with icons
from hybrid import ui

def OnStart():
    main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
    main.setChildMargins("12px", "12px", "12px", "12px")

    btn1 = ui.addButton(main, "Send", "Primary")
    btn1.icon = "send"

    btn2 = ui.addButton(main, "Add to cart", "Secondary")
    btn2.icon = "shopping_cart"

    btn3 = ui.addButton(main, "android", "Primary,Icon")

    btn4 = ui.addButton(main, "settings", "Secondary,Icon")
 */


/**
@sample Python Buttons with badges
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
    main.setChildMargins(0.01, 0.01, 0.01, 0.01)

    btn1 = ui.addButton(main, "android", "Primary,Icon")

    btn2 = ui.addButton(main, "settings", "Primary,Icon")
    btn2.setBadge( 5 )

    btn3 = ui.addButton(main, "With Badge", "Secondary,Outlined")
    btn3.setBadge("New", "Primary")
 */


/**
@sample Python Upload button
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    btn = ui.addButton(main, "Upload File", "Primary,Upload")
    btn.icon = "backup"

def onFileSelect(files):
    file = files[0]
    ui.showPopup( f"{file.name} is selected." )
 */


