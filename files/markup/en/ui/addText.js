/** # Text
 * @abbrev txt
 * In mobile UI design, it refers to the style, arrangement, and appearance of text.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs It emphasizes clear and legible fonts, consistent hierarchy, and appropriate spacing. Following these guidelines enhances readability and visual appeal. Add a text control into your app using the `addText` method like this:
 * $$ txt = ui.addText(parent, text, options, width, height) $$
 * @param {uio-Layout} parent The layout control where to add the text control
 * @param {String} text The text to be displayed on the text control
 * @param {String} [options] A comma separated options.\nVariants: `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `body1`, `body2`, `overline`, `subtitle1`, `subtitle2`, `button`, `caption`\nLines: `Singleline`, `Multiline`\nAlignment: `Left`, `Center`, `Right`, `Justify`\nTheme Color: `Primary`, `Secondary`, `TextPrimary`, `TextSecondary`, `Error`\nFormat: `Html`, `Icon`, `Italize`, `Monospace`, `Bold`, `Underline`\nUtils: `Touchable`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-Text
 */


    /** ## Properties
     * Here are the available setter and getter properties for the Text Component.
     * @prop {String} text Sets or returns the text.
     * @prop {String} variant Sets or returns the text variants. See `options` param above for available values.
     * @prop {String} color Sets or returns the theme color of the text `Primary` or `Secondary`. You can also pass hexadecimal color of the form `#rrggbb`
     * @prop {String} textColor Sets or returns the text color in hexadecimal format.
     * @prop {String} ellipsize Sets or returns the ellipsis use when the text is truncated. Values can be `Ellipsis` `End` or `Start`
     * @prop {Number} textSize Sets or returns the fontsize for the text. You can also pass values such as `1.2em`.
     * @prop {String} textStyle Sets or returns the style of the text. Values can be `italic` or `normal`.
     * @prop {String} alignment Sets or returns the horizontal alignment of the text. Values can be `Left` `Center` `Right` or `Justify`.
     * @prop {String} verticalAlignment Sets or returns the vertical alignment of the text. Values can be `Top` `Center` or `Bottom`.
     * @prop {Boolean} italic Sets or returns whether the text is `italized` or not.
     * @prop {Boolean} bold Sets or returns whether the text is `bold` or not.
     * @prop {Boolean} underline Sets or returns whether the text is `underlined` or not.
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
     * Here are the methods available for Text Component
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
     * Adds an event handler when the text component is touch.
     * $$ txt.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */


    /** ### setOnLongTouch
     * Adds a callback handler for a long touch event. The touch timer is about 500 milliseconds.
     * $$ txt.setOnLongTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */


    /** ### setHtml
     * Sets an html on the text control.
     * $$ txt.setHtml( html ) $$
     * @param {String} html An html string
     * @@ Options should include an `html` option.
     */


    /** ### getHtml
     * Returns the html text.
     * $$ txt.getHtml() $$
     * @returns String
     */


    /** ### setTextShadow
     * Sets a shadow on the text in a text control.
     * $$ txt.setTextShadow( radius, dx, dy, color )
     * @param {Number} radius The radius in pixels
     * @param {Number} dx X-offset of the shadow
     * @param {Number} dy Y-offset of the shadow
     * @param {String} color A hexadecimal color of the form `#rrggbb`
     */


/* --- parent_methods here ----- */


/* ## Examples */


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


