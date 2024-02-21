
/** # Text
 * @abbrev txt
 * In mobile UI design, it refers to the style, arrangement, and appearance of text.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs It emphasizes clear and legible fonts, consistent hierarchy, and appropriate spacing. Following these guidelines enhances readability and visual appeal. Add a text control into your app using the `addText` method like this:
 * $$ txt = ui.addText(parent, text, options, width, height) $$
 * @param {Object} parent The layout control where to add the text control
 * @param {String} text The text to be displayed on the text control
 * @param {String} options A comma separated options.\nVariants: `H1`, `H2`, `H3`, `H4`, `H5`, `H6`, `body1`, `body2`, `overline`, `subtitle1`, `subtitle2`, `button`, `caption`\nLines: `Singleline`, `Multiline`\nAlignment: `Left`, `Center`, `Right`, `Justify`\nTheme Color: `Primary`, `Secondary`, `TextPrimary`, `TextSecondary`, `Error`\nFormat: `Html`, `Icon`, `Italize`, `Monospace`, `Bold`, `Underline`\nUtils: `Touchable`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object Text
 */

ui.addText = function( parent, text, options, width, height )
{
    return new ui.Text( parent, text, options, width, height )
}

ui.Text = class extends ui.Control
{
	constructor( parent, text, options, width, height )
	{
        super( parent, width, height, options, "Text" )
        this._div.style.display = "inline-flex"
        this._text = text
        this._initProps()
        this._initStyle()
		this._render()
	}
	
    // INVISIBLE METHODS
    _initProps()
    {
        this._props.variant = this._getVariant()
        this._props.align = "center"
        this._props.color = this._getClr()
        this._props.component = "span"

        if( this._options.includes( "singleline" ) )
        {
            this._style.display = "inline-block"
            this._style.whiteSpace = "nowrap"
            this._style.overflow = "hidden"
        }
        else {
            this._style.whiteSpace = "pre-line";
        }
        //this._text = this._text.replace(/\n/gi, "<br>" )
        
        this._getAlign()
    }

    _initStyle()
    {
        // this._style.width = "100%"
        // this._style.height = "100%"
        if(this._options.includes("ital")) this._style.fontStyle = "italic"
        else this._style.fontStyle = null
        if(this._options.includes("monospace")) this._style.fontFamily = "monospace"
        else this._style.fontFamily = null
        if( this._options.includes("underline") ) this._style.textDecorationLine = "underline"
        else this._style.textDecorationLine = null
        if(this._options.includes("touch")) this._div.style.cursor = "pointer"
    }

	_getClr() {
		if(this._options.includes('inherit')) return 'inherit'
        if(this._options.includes('textprimary')) return 'textPrimary'
		if(this._options.includes('textsecondary')) return 'textSecondary'
		if(this._options.includes('primary')) return 'primary'
		if(this._options.includes('secondary')) return 'secondary'
		if(this._options.includes('error')) return 'error'
		return 'initial'
	}
	_getVariant() {
		if(this._options.includes('h1')) return 'h1'
		else if(this._options.includes('h2')) return 'h2'
		else if(this._options.includes('h3')) return 'h3'
		else if(this._options.includes('h4')) return 'h4'
		else if(this._options.includes('h5')) return 'h5'
        else if(this._options.includes('h6')) return 'h6'
		else if(this._options.includes('subtitle1')) return 'subtitle1'
		else if(this._options.includes('subtitle2')) return 'subtitle2'
		else if(this._options.includes('overline')) return 'overline'
		else if(this._options.includes('body2')) return 'body2'
		else if(this._options.includes('button')) return 'button'
		else if(this._options.includes('caption')) return 'caption'
		else return 'body1'
	}
	_getAlign() {
        var x = this._options.split(",").map( m => m.trim() )
        // horizontal
        if( x.indexOf("center") >= 0 ) {
            this._div.style.justifyContent = "center"
            this._props.align = "center"
        }
		else if(this._options.includes('right')) {
            this._div.style.justifyContent = "flex-end"
            this._props.align = "right"
        }
        else {
            this._div.style.justifyContent = "flex-start"
            this._props.align = "left"
        }
        // vertical
        if( x.indexOf("vcenter") >= 0 ) this._div.style.alignItems = "center"
        else if( this._options.includes("bottom") ) this._div.style.alignItems = "flex-end"
		else this._div.style.alignItems = "flex-start"
        // justify
        if(this._options.includes('justify')) { this._div.style.textAlign = "justify" }
	}

    _onTouchStart( e ) {
        e.stopPropagation();
        if( this._longTouch ) {
            if(e.button && e.button != 0) return;
            this._touchTimeout = setTimeout( this._longTouch.bind(this, this._getEventObject(e, null, null, "longtouch")), this._touchTimer);
        }
    }

	_render()
	{
	    var mui = window['MaterialUI']
	    var icon = this._options.includes("icon")
        var html = this._options.includes("html")
	    var txt = icon ? React.createElement("i", {
                className:'material-icons',
                style:{...this._style},
                onClick: platform.ios ? null : this._onTouch,
                onTouchEnd: platform.ios ? this._onTouch : null,
                onTouchStart: platform.ios ? this._onTouchStart.bind(this): null,
                onMouseDown: platform.ios ? null: this._onTouchStart.bind(this),
                onContextMenu: this._onContextMenu.bind(this)
            }, 
			this._text.toLowerCase()) : this._text
        this._ctl = React.createElement( html ? "div" : mui.Typography,
        {
            ...this._props,
            style: { ...this._style },
            dangerouslySetInnerHTML: ( html ? { __html : txt } : null ),
            onClick: platform.ios ? null : this._onTouch,
            onTouchEnd: platform.ios ? this._onTouch : null,
            onTouchStart: platform.ios ? this._onTouchStart.bind(this): null,
            onMouseDown: platform.ios ? null: this._onTouchStart.bind(this),
            onContextMenu: this._onContextMenu.bind(this)
        }, html ? null : 
        this._options.includes("bold")?React.createElement("strong",{},txt):txt)
	    ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
	}

    // VISIBLE PROPERTIES

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

    // Inherited props
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

    // @prop {Number} fontWeight Sets or returns the font-weight. Values are `100, 200, 300, ..., 900`. You can also pass a `string` values such as `bold` `bolder` `lighter`
	
    // VISIBLE METHODS

    /** ## Methods
     * Here are the methods available for Text Component
     */

    // Inherited methods
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
    setOnTouch( callback ) {
        if( callback ) this._touch = callback;
		if( platform.ios || platform.android) this._div.ontouchend = this._onTouch.bind(this);
		else this._div.onclick = this._onTouch.bind(this);
    }

    /** ### setOnLongTouch
     * Adds a callback handler for a long touch event. The touch timer is about 500 milliseconds.
     * $$ txt.setOnLongTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */
    setOnLongTouch( callback ) {
        this._longTouch = callback;
        let event = (platform.ios || platform.android) ? "touchstart" : "mousedown";
        this.setOnTouch();
        this._div.addEventListener(event, e => {
            e.stopPropagation();
            this._touchTimeout = setTimeout( this._longTouch.bind(this, this._getEventObject(e)), this._touchTimer);
        });
    }

    setText( val ) { this._text = val; this._render() }
    getText() { return this._text }
    set text( val ) { this._text = val; this._render() }
    get text() { return this._text }
    
    setVariant( val ) { this._props.variant = val; this._render() }
    getVariant() { return this._props.variant; }
    set variant( val ) { this._props.variant = val; this._render() }
    get variant() { return this._props.variant; }

    set color( color ) {
        this._props.color = color ? color.toLowerCase() : "default"
        this._render()
    }
    get color() { return this._props.color }

    set textColor( color )
    {
		this._style.color = color
		if(color && color.toLowerCase().includes("prima")) this._props.color = "primary"
		else if(color && color.toLowerCase().includes("second")) this._props.color = "secondary"
		this._render()
    }
    get textColor() { return this._style.color || this._props.color }
    
    /** ### setHtml
     * Sets an html on the text control.
     * $$ txt.setHtml( html ) $$
     * @param {String} html An html string
     * @@ Options should include an `html` option.
     */
    setHtml( html )
    {
		this.text = html
		this._options = this._options.replace('icon','')+',html'
		this._render()
	}
    /** ### getHtml
     * Returns the html text.
     * $$ txt.getHtml() $$
     * @returns String
     */
    getHtml() { return this.getText() }
    
    /** ### setTextShadow
     * Sets a shadow on the text in a text control.
     * $$ txt.setTextShadow( radius, dx, dy, color )
     * @param {Number} radius The radius in pixels
     * @param {Number} dx X-offset of the shadow
     * @param {Number} dy Y-offset of the shadow
     * @param {String} color A hexadecimal color of the form `#rrggbb`
     */
    setTextShadow( radius, dx, dy, color )
    {
		this._style.textShadow = radius+'px '+dx+'px '+dy+'px '+color
		this._render()
    }

    setEllipsize( mode )
    {
        if( this._options.includes( "singleline" ) )
        {
            this._style.textOverflow = mode ? mode.toLowerCase() : "ellipsis"
            this._render()
        }
        else console.warn( "Text:setEllipsize -> Nowrap is false" )
    }
    set ellipsize( mode ) {
        if( this._options.includes( "singleline" ) )
        {
            this._style.textOverflow = mode ? mode.toLowerCase() : "ellipsis"
            this._render()
        }
        else console.warn( "Text:setEllipsize -> Nowrap is false" )
    }
    get ellipsize() { return this._style.textOverflow; }

    set fontWeight( val ) { this._style.fontWeight = val; this._render(); }
    setFontWeight( val ) { this._style.fontWeight = val; this._render(); }

    set textSize(size) {
        this._style.fontSize = size
        this._render()
    }
    get textSize() { return this._style.fontSize }

    set textStyle(style) {
        this._style.fontStyle = style ? style.toLowerCase() : "normal"
        this._render()
    }
    get textStyle() { return this._style.fontStyle }

    set alignment( value ) {
        var align = value ? value.toLowerCase().trim() : "center";
        this._props.align = align;
        switch( align ) {
            case "left": align = "flex-start"; break;
            case "right": align = "flex-end"; break;
            case "justify": break;
            default: align = "center";
        }
        if( align != "justify" ) {
            this._div.style.justifyContent = align;
        }
        this._render();
    }
    get alignment() { return this._props.align }

    set verticalAlignment( value ) {
        var align = value ? value.toLowerCase().trim() : "top"
        switch(align) {
            case "bottom": align = "flex-end"; break;
            case "center": align = "center"; break;
            default: align = "flex-start";
        }
        this._div.style.alignItems = align
    }
    get verticalAlignment() { return this._div.style.alignItems }

    set bold( value ) {
        if(value) this._options += ",bold"
        else this._options = this._options.replace(/bold/g,"")
        this._options = this._options.split(",").filter( m => m ).join(",")
        this._render()
    }
    get bold() { return this._options.includes("bold") }

    set italic( value ) {
        if( value ) this._style.fontStyle = "italic"
        else if( this._style.fontStyle == "italic" ) this._style.fontStyle = null
        this._render()
    }
    get italic() { return this._style.fontStyle == "italic" }

    set underline( value ) {
        if( value ) this._style.textDecorationLine = "underline"
        else if(this._style.textDecorationLine == "underline") this._style.textDecorationLine = null
        this._render()
    }
    get underline() { return this._style.textDecorationLine == "underline" }

    show() { this._div.style.display = "inline-flex"; }

	// these are the methods that needs to be implemented on Text control

	// getLineCount()
	// GetLineStart( line )
	// GetLineTop( line )
	// GetMaxLines()
	// SetLog( maxLines )
	// SetOnLongTouch( callback )
	// SetOnTouchMove( callback )
}

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