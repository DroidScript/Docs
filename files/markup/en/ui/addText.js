// ------------- HEADER SECTION -------------


/** # addText #
 * @abbrev txt
 * @brief addText
 * Adds a text to your app.
 * $$ txt = ui.addText(parent, text, options?, width?, height?) $$
 * @param {obj} parent The layout control where to add the text control
 * @param {str} text The text to be displayed on the text control
 * @param {str} [options] A comma separated string. Options can be one or a combination of the following: \n Variants: `H1` `H2` `H3` `H4` `H5` `H6` `body1` `body2` `overline` `subtitle1` `subtitle2` `button` `caption`.\nLines: `Singleline` `Multiline`.\nAlignment: `Left` `Center` `Right` `Justify`.\nColor: `Primary` `Secondary` `Error`.\nFormat `Html` `Icon` `Italize` `Monospace` `Bold` `Underline` \n `Utils`: `Touchable`
 * @param {num} [width] Fraction of the screen width
 * @param {num} [height] Fraction of the screen height
 * @returns uio-Text
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


/** ### alignment
 * @prop
 * Sets or returns the horizontal alignment of the text. Values can be <col nobox #fb8c00>Left</col> <col nobox #fb8c00>Center</col> <col nobox #fb8c00>Right</col> or <col nobox #fb8c00>Justify</col>.
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


/** ### bold
 * @prop
 * Sets or returns whether the text is <col nobox #fb8c00>bold</col> or not.
 * @returns bin
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
 * Sets or returns the theme color of the text <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>. You can also pass hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>
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


/** ### ellipsize
 * @prop
 * Sets or returns the ellipsis use when the text is truncated. Values can be <col nobox #fb8c00>Ellipsis</col> <col nobox #fb8c00>End</col> or <col nobox #fb8c00>Start</col>
 * @returns str
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


/** ### isVisible
 * @prop
 * Returns whether the control is visible or not.
 * @returns bin
 */


/** ### italic
 * @prop
 * Sets or returns whether the text is <col nobox #fb8c00>italized</col> or not.
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


/** ### text
 * @prop
 * Sets or returns the text.
 * @returns str
 */


/** ### textColor
 * @prop
 * Sets or returns the text color in hexadecimal format.
 * @returns str_col
 */


/** ### textSize
 * @prop
 * Sets or returns the fontsize for the text. You can also pass values such as <col nobox #fb8c00>1.2em</col>.
 * @returns num
 */


/** ### textStyle
 * @prop
 * Sets or returns the style of the text. Values can be <col nobox #fb8c00>italic</col> or <col nobox #fb8c00>normal</col>.
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


/** ### underline
 * @prop
 * Sets or returns whether the text is <col nobox #fb8c00>underlined</col> or not.
 * @returns bin
 */


/** ### variant
 * @prop
 * Sets or returns the text variants. See <col nobox #fb8c00>options</col> param above for available values.
 * @returns str
 */


/** ### verticalAlignment
 * @prop
 * Sets or returns the vertical alignment of the text. Values can be <col nobox #fb8c00>Top</col> <col nobox #fb8c00>Center</col> or <col nobox #fb8c00>Bottom</col>.
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


/** ### setHtml ###
 * @brief setHtml
 * Sets an html on the text control
 * $$ txt.setHtml(html) $$
 * @param {str} html An html string
 */


/** ### getHtml ###
 * @brief getHtml
 * Returns the html text
 * $$ txt.getHtml() $$
 * @returns str
 */


/** ### setTextShadow ###
 * @brief setTextShadow
 * Sets a shadow on the text in a text control
 * $$ txt.setTextShadow(radius, dx, dy, color) $$
 * @param {num} radius The radius in pixels
 * @param {num} dx X-offset of the shadow
 * @param {num} dy Y-offset of the shadow
 * @param {obj} color A hexadecimal color e.g. `#aarrggbb`
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

/** @extern setCornerRadius */

/** @extern bringForward */

/** @extern sendBackward */


// ------------- SAMPLES -------------



/**
@sample Basic text control
class Main extends App
{
    onStart()
    {
        // Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var t = "This is the sample text to be displayed."

        // Add a text control to the main layout
        this.txt = ui.addText(this.main, t)

        // You can also add a callback handler when the text control is touch
        this.txt.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You touched the text!" )
    }
}
 */



/**
@sample Heading variants
class Main extends App
{
    onStart()
    {
        // Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var t = "Lorem ipsum dolor sit amet, consectetur"

        // Heading ranges from H1 to H6

        this.h1 = ui.addText( this.main, "Heading 1", "H1" )

        this.h2 = ui.addText( this.main, "Heading 2", "H2" )

        this.h3 = ui.addText( this.main, "Heading 3", "H3" )

        this.h4 = ui.addText( this.main, "Heading 4", "H4" )

        this.h5 = ui.addText( this.main, "Heading 5", "H5" )

        this.h6 = ui.addText( this.main, "Heading 6", "H6" )
    }
}
 */



/**
@sample Other variants
class Main extends App
{
    onStart()
    {
        // Create a full screen layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        var t = "Lorem ipsum dolor sit amet, consectetur"

        this.text = ui.addText( this.main, t, "body1" )

        this.text = ui.addText( this.main, t, "body2" )

        this.text = ui.addText( this.main, t, "subtitle1" )

        this.text = ui.addText( this.main, t, "subtitle2" )

        this.text = ui.addText( this.main, t, "overline" )

        this.text = ui.addText( this.main, t, "button" )

        this.text = ui.addText( this.main, t, "caption" )
    }
}
 */



/**
@sample Alignments and colors
class Main extends App
{
    onStart()
    {
        // Create a full screen layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0.05)

        var t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            
        // Default is left
        this.txt1 = ui.addText( this.main, t, "body1,Left", 0.9 )
        this.txt1.backColor = "#e0e0e0"

        // Center and color primary
        this.txt2 = ui.addText( this.main, t, "body1,Center,Primary", 0.9 )
        this.txt2.backColor = "#e0e0e0"

        // Right and color secondary
        this.txt3 = ui.addText( this.main, t, "body1,Right,Secondary", 0.9)
        this.txt3.backColor = "#e0e0e0"

        // Bottom, Center with a textSecondary color
        this.txt4 = ui.addText( this.main, t, "body1,Center,Bottom,TextSecondary", 0.9, 0.1)
        this.txt4.backColor = "#e0e0e0"
    }
}
 */



/**
@sample Icons
class Main extends App
{
    onStart()
    {
        // Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0.05)
        
        // Add a settings icon
        this.txt1 = ui.addText(this.main, "settings", "Icon")
        this.txt1.setOnTouch( this.onTouch )

        // Add a camera icon
        ui.addText(this.main, "add_a_photo", "Icon,TextSecondary")

        // Add a heart icon
        ui.addText(this.main, "favorite", "Icon,Secondary")

        // Add an android icon
        ui.addText(this.main, "android", "Icon,Primary")
    }

    onTouch()
    {
        ui.showPopup( "You touch the icon!" )
    }
}
 */



/**
@sample Html formatted text
class Main extends App
{
    onStart()
    {
        // Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        
        // Html formatted string
        var t = 'This text is formatted as html. <h3 style="color:green;">This is a heading with color.</h3>'
        t += 'You can also add <i>italize text</i> as well as <span style="background-color:yellow;">text with styles</span>.'

        // Add text control to the main layout by passing `Html` option
        this.txt = ui.addText(this.main, t, "html")
    }
}
 */



/**
@sample Python Basic text control
class Main extends App
    onStart()
        #  Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        t = "This is the sample text to be displayed."

        #  Add a text control to the main layout
        this.txt = ui.addText(this.main, t)

        #  You can also add a callback handler when the text control is touch
        this.txt.setOnTouch( this.onTouch )

    onTouch()
        ui.showPopup( "You touched the text!" )
 */



/**
@sample Python Heading variants
class Main extends App
    onStart()
        #  Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        t = "Lorem ipsum dolor sit amet, consectetur"

        #  Heading ranges from H1 to H6

        this.h1 = ui.addText( this.main, "Heading 1", "H1" )

        this.h2 = ui.addText( this.main, "Heading 2", "H2" )

        this.h3 = ui.addText( this.main, "Heading 3", "H3" )

        this.h4 = ui.addText( this.main, "Heading 4", "H4" )

        this.h5 = ui.addText( this.main, "Heading 5", "H5" )

        this.h6 = ui.addText( this.main, "Heading 6", "H6" )
 */



/**
@sample Python Other variants
class Main extends App
    onStart()
        #  Create a full screen layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        t = "Lorem ipsum dolor sit amet, consectetur"

        this.text = ui.addText( this.main, t, "body1" )

        this.text = ui.addText( this.main, t, "body2" )

        this.text = ui.addText( this.main, t, "subtitle1" )

        this.text = ui.addText( this.main, t, "subtitle2" )

        this.text = ui.addText( this.main, t, "overline" )

        this.text = ui.addText( this.main, t, "button" )

        this.text = ui.addText( this.main, t, "caption" )
 */



/**
@sample Python Alignments and colors
class Main extends App
    onStart()
        #  Create a full screen layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0.05)

        t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            
        #  Default is left
        this.txt1 = ui.addText( this.main, t, "body1,Left", 0.9 )
        this.txt1.backColor = "#e0e0e0"

        #  Center and color primary
        this.txt2 = ui.addText( this.main, t, "body1,Center,Primary", 0.9 )
        this.txt2.backColor = "#e0e0e0"

        #  Right and color secondary
        this.txt3 = ui.addText( this.main, t, "body1,Right,Secondary", 0.9)
        this.txt3.backColor = "#e0e0e0"

        #  Bottom, Center with a textSecondary color
        this.txt4 = ui.addText( this.main, t, "body1,Center,Bottom,TextSecondary", 0.9, 0.1)
        this.txt4.backColor = "#e0e0e0"
 */



/**
@sample Python Icons
class Main extends App
    onStart()
        #  Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0.05)
        
        #  Add a settings icon
        this.txt1 = ui.addText(this.main, "settings", "Icon")
        this.txt1.setOnTouch( this.onTouch )

        #  Add a camera icon
        ui.addText(this.main, "add_a_photo", "Icon,TextSecondary")

        #  Add a heart icon
        ui.addText(this.main, "favorite", "Icon,Secondary")

        #  Add an android icon
        ui.addText(this.main, "android", "Icon,Primary")

    onTouch()
        ui.showPopup( "You touch the icon!" )
 */



/**
@sample Python Html formatted text
class Main extends App
    onStart()
        #  Create a full screen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        
        #  Html formatted string
        t = 'This text is formatted as html. <h3 style="color:green;">This is a heading with color.</h3>'
        t += 'You can also add <i>italize text</i> as well as <span style="background-color:yellow;">text with styles</span>.'

        #  Add text control to the main layout by passing `Html` option
        this.txt = ui.addText(this.main, t, "html")
 */
