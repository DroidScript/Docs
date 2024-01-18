// ------------- HEADER SECTION -------------


/** # addButton #
 * @abbrev btn
 * @brief addButton
 * Adds a button control into your app.
 *
 *  In case of <col nobox #4c4>Upload</col>, you can specify <col nobox #4c4>Multiple</col> to accept multiple files.
 * $$ btn = ui.addButton(parent, text, options?, width?, height?) $$
 * @param {obj} parent The layout where to add the button.
 * @param {str} text The button text or the material icon text.
 * @param {str_com} [options] one or a combination of the following: \n Variant: `Contained` `Outlined` `Text` `Default` \n `Color`: `Primary` `Secondary` `Default` \n `Size`: `Small` `Medium` `Large` \n `Util`: `Icon` `NoRipple` `Upload` \n `In case of upload, you can specify `Multiple` to accept multiple files.
 * @param {num} [width] Fraction of the parent width. [0-1]
 * @param {num} [height] Fraction of the parent height. [0-1]
 * @returns uio-Button
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


/** ### acceptedFiles
 * @prop
 * Sets or returns the accepted files for an upload button.
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


/** ### badge
 * @prop
 * Sets or returns the badge content. You can pass a <col nobox #fb8c00>string</col>
 * @returns num
 */


/** ### badgeColor
 * @prop
 * Sets or returns the color of the badge. Values can be <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>
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
 * @returns str_col
 */


/** ### borderStyle
 * @prop
 * Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.
 * @returns str
 */


/** ### color
 * @prop
 * Sets or returns the theme color of the button. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> <col nobox #fb8c00>Secondary</col> <col nobox #fb8c00>Inherit</col>
 * @returns str
 */


/** ### cornerRadius
 * @prop
 * Sets or returns the corner radius of the button.
 * @returns num
 */


/** ### disabled
 * @prop
 * Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.
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
 * Sets or returns the material icon font use for the leading icon.
 * @returns str
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
 * Sets or returns the size variant of the button. Values can be <col nobox #fb8c00>small</col> <col nobox #fb8c00>medium</col> or <col nobox #fb8c00>large</col>
 * @returns str
 */


/** ### text
 * @prop
 * Sets or returns the button text.
 * @returns str
 */


/** ### textColor
 * @prop
 * Sets or returns the text color in hexadecimal format.
 * @returns str_col
 */


/** ### textSize
 * @prop
 * Sets or returns the size of the text within the control.
 * @returns num
 */


/** ### toolTip
 * @prop
 * Sets or returns the tooltip text.
 * @returns str
 */


/** ### toolTipPosition
 * @prop
 * Sets or returns the tooltip position. Values can be <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> or <col nobox #fb8c00>bottom</col>
 * @returns str
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
 * Sets or returns the variant of the button. Values can be <col nobox #fb8c00>Contained</col> <col nobox #fb8c00>Outlined</col> or <col nobox #fb8c00>Text</col>
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


/** ### setOnFileSelect ###
 * @brief setOnFileSelect
 * Sets a callback on file select
 * $$ btn.setOnFileSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["files"],"pTypes":["lst-An array of file objects selected."]}
 */


/** ### setToolTip ###
 * @brief setToolTip
 * Sets a tooltip when the button is hovered
 * $$ btn.setToolTip(title, pos='top') $$
 * @param {str} title The text of the tooltip
 * @param {str} [pos='top'] Position of the tooltip. \n Positions : `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
 */


/** ### setTextShadow ###
 * @brief setTextShadow
 * Sets a text-shadow to the button text
 * $$ btn.setTextShadow(radius, dx, dy, color) $$
 * @param {num} radius The radius in pixels
 * @param {num} dx The x-offset in pixels
 * @param {num} dy The y-offset in pixels
 * @param {str} color The color in hexadecimal `#rrggbb`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding of the button
 * $$ btn.setPadding(left?, top?, right?, bottom?, mode='px') $$
 * @param {num} [left] The left padding in pixel.
 * @param {num} [top] The top padding in pixels,
 * @param {num} [right] The right padding in pixels.
 * @param {num} [bottom] The bottom padding in pixels.
 * @param {str} [mode='px'] `px` `%`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the button
 * $$ btn.setCornerRadius(tl?, tr?, bl?, br?, mode='px') $$
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

/** @extern setPosition */

/** @extern setBorder */

/** @extern bringForward */

/** @extern sendBackward */


// ------------- SAMPLES -------------



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
