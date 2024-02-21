
/** # FAB
 * @abbrev fab
 * A Floating Action Button (FAB) is a prominent, circular button that hovers above the content, typically used for a primary action in an application.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, FABs provide a visually distinctive and accessible means to trigger key actions, promoting a clean and focused user interface. Add a floating action button into your app using the `addFAB` method like this:
 * $$ fab = ui.addFAB(parent, icon, options, text) $$
 * @param {Object} parent The parent layout where to add the fab
 * @param {String} icon The string icon of the FAB
 * @param {String} options A comma separated option.\nPosition: `Fixed`, `Static`\nStyle: `Rounded`, `Extended`\nAnchor: `Left`, `Right`
 * @param {String} text Text to show for extended FABs
 * @returns Object FAB
 * If you want the fab to position relative to the layout and not on the bottom right corner, pass a `Static` option. If fab is `Extended` pass a text argument.
 */

ui.addFAB = function( parent, icon, options, text )
{
    return new ui.FloatingActionButton( parent, icon, options, text )
}

ui.FloatingActionButton = class extends ui.Control
{
	constructor( parent, icon, options, text )
	{
		super( parent, null, null, options, "FAB" )
		this._icon = icon
		this._text = text || ""
        this._style1 = {}
        this._style2 = {}
        this._props.disabled = false
        this._props.disableRipple = false
        this._props["aria-label"] = "add"
		this._options += ( this._options.includes( "static" ) ? "" : ",fixed" )
		this._initProps()
		this._render()
	}

	//Invisible methods
	_initProps()
	{
		this._props.color = _color( this._options )
		this._props.size = _size( this._options )
		this._props.variant = this._options.includes('extend') ? "extended" : "round"
		if( this._options.includes( "fixed" ) )
		{
			this._div.style.position = "fixed"
			this._div.style.bottom = "2.5rem"
            this._div.style.zIndex = 1;
			if( this._options.includes("left") ) this._div.style.left = "1.8rem"
			else this._div.style.right = "1.8rem"
		}
	}

	_click( e ) {
        if( this._touch ) this._touch( this._getEventObject(e, null, null, "touch") );
    }

	_render()
	{
		var e = React.createElement
		var {Fab,Icon} = window['MaterialUI']
		this._ctl = e(
			Fab,
			{
				...this._props,
				onClick: platform.ios ? null : this._click.bind(this),
                onTouchEnd: platform.ios ? this._click.bind(this) : null,
				onContextMenu: this._onContextMenu.bind(this),
                style: { ...this._style2 }
			},
			[
				e( Icon, {
                    key: 1,
                    style: { ...this._style, marginRight: this._props.variant === "extended" ? "12px" : "0px" }
				}, this._icon ),
				this._props.variant === "extended" ?
                    e("span", { key:2, style:{...this._style1} }, this._text) : ""
			]
		)
		ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
	}

	// Visible Properties

	/** ## Properties ##
	 * Here are the available setters and/or getters of the FloatingActionButton Component.
	 * @prop {String} icon Sets or returns the material icon font.
	 * @prop {String} text Sets or returns the text for extended FAB.
	 * @prop {String} color Sets or returns the theme color for the FAB. Values can be `Default` `Primary` or `Secondary`
	 * @prop {String} variant Sets or returns the variant use for the FAB. Can be `Extended` or `Rounded`
	 * @prop {String} sizeVariant Sets or returns the size variant of the FAB. Values can be `Small` `Medium` or `Large`
     * @prop {Number} iconSize Sets or returns the size of the icon.
     * @prop {Boolean} disabledRipple Sets or returns the disabled state of the ripple effect.
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

	// Visible methods

	/** ## Methods
	 * Here are the available methods for the Floating Action Button.
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
     * Adds a callback handler when the FAB is touch.
     * $$ fab.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */

	setIcon( icon ) { this._icon = icon.toLowerCase(); this._render(); }
	set icon( icon ) { this._icon = icon.toLowerCase(); this._render(); }
	get icon() { return this._icon; }

	setText( txt ) { this._text = txt; this._render(); }
    getText() { return this._text }
	set text( txt ) { this._text = txt; this._render(); }
	get text() { return this._text }
	
	setColor( color ) { this._props.color = color ? color.toLowerCase():""; this.backColor = ""; }
	set color( color ) { this._props.color = color ? color.toLowerCase():""; this.backColor = ""; }
	get color() { return this._props.color; }

	setVariant( variant ) { this._props.variant = variant?variant.toLowerCase():""; this._render(); }
	set variant( variant ) { this._props.variant = variant?variant.toLowerCase():""; this._render(); }
	get variant() { return this._props.variant; }

	setSizeVariant( size ) { this._props.size = size ? size.toLowerCase():""; this._render(); }
	set sizeVariant( size ) { this._props.size = size ? size.toLowerCase():""; this._render(); }
	get sizeVariant() { return this._props.size; }
	setEnabledRipple( enable ) { this._props.disableRipple = !enable; this._render(); }

    set disabledRipple( value ) {
        this._props.disableRipple = value
        this._render()
    }
    get disabledRipple() { return this._props.disableRipple }

    set textSize(size) {
        this._style1.fontSize = size
        this._render()
    }
    get textSize() { return this._style.fontSize }

    set textColor(color) {
        this._style.color = color
        this._style1.color = color
        this._render()
    }
    get textColor() { return this._style.color }

    set iconSize(size) {
        this._style.fontSize = size
        this._render()
    }
    get iconSize() { return this._style.fontSize }

    set backColor( color ) {
        this._style2.backgroundColor = color
        this._render()
    }
    get backColor() { return this._style2.backgroundColor }

    set backImage( img ) {
        this._backImageUrl = img;
        this._style2.backgroundColor = "";
        this._style2.backgroundImage = `url('`+img+`')`;
        this._style2.backgroundSize = "cover";
        this._style2.backgroundPosition = "center";
        this._style2.backgroundRepeat = "no-repeat";
        this._render();
    }

    /** ### setCornerRadius ###
     * Sets the corner radius of the button.
     * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} tl Top-left corner radius.
     * @param {Number} tr Top-right corner radius.
     * @param {Number} bl Bottom-left corner radius.
     * @param {Number} br Bottom-right corner radius.
     * @param {String} mode Unit. Values are `px` `rem` or `%`.
     */
    setCornerRadius(tl, tr, bl, br, mode="px") {
        this._cornerRad = { tl: tl+mode, tr: tr+mode, bl: bl+mode, br: br+mode };
        this._style2.borderTopLeftRadius = this._cornerRad.tl;
        this._style2.borderTopRightRadius = this._cornerRad.tr;
        this._style2.borderBottomLeftRadius = this._cornerRad.bl;
        this._style2.borderBottomRightRadius = this._cornerRad.br;
        this._render();
    }

    // border
    setBorder(left, top, right, bottom, clr, style="solid") {
        style = style.toLowerCase()
        const el = this._div.querySelector(".MuiFab-root")
        el.style.borderWidth = top+"px " + right+"px " + bottom+"px " + left + "px"
        el.style.borderColor = clr || this._border.color || "#000000"
        el.style.borderStyle = style
        this._border.left = left, this._border.top = top, this._border.right = right, this._border.bottom = bottom
        this._border.style = style, this._border.color = clr
    }
    set border( val ) {
        this._border.width = val
        const el = this._div.querySelector(".MuiFab-root")
        el.style.borderWidth = val + "px"
        if( !this._border.style ) this.borderStyle = "solid"
    }
    set borderColor( color ) {
        this._border.color = color
        const el = this._div.querySelector(".MuiFab-root")
        el.style.borderColor = color
    }
    set borderStyle(style = "solid") {
        this._border.style = style.toLowerCase()
        const el = this._div.querySelector(".MuiFab-root")
        el.style.borderStyle = this._border.style
    }
}

/* --- parent_methods here ----- */

/* ## Examples ## */

/** #Example - Basic FAB
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a floating action button to the main layout.
        // By default, FAB is positioned fix at the bottom right corner
        this.fab = ui.addFAB(this.main, "add")

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */

/**
@sample Primary static FAB
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a primary floating action button to the main layout.
        // Passing `Static` will ignore fixed positioning
        // and will follow the flow of the parent layout
        this.fab = ui.addFAB( this.main, "add", "Primary,Static" )

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */

/**
@sample Extended FAB
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a secondary floating action button to the main layout.
        // Passing `Extended` enables to add more text on the FAB
        this.fab = ui.addFAB(this.main, "add", "Secondary,Extended", "New message")

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */

/**
@sample Secondary,Extended,Left
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a secondary floating action button to the main layout.
        // Passing `Left` option will position the FAB on the bottom left corner
        this.fab = ui.addFAB(this.main, "add", "Secondary,Extended,Left", "New message")

        // Add a callback handler for `onTouch` event on the FAB
        this.fab.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click me!" )
    }
}
 */