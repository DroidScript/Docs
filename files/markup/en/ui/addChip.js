
/** # Chip
 * @abbrev chp
 * In mobile UI design, a Chip is a compact element displaying attributes, input, or actions.
 * @img(img1.png)
 * @jdocs Material Design defines it with rounded corners and a contained style. Chips offer a visual representation for categories, selections, or interactions, contributing to a clear and concise user interface in mobile applications. Add a chip into your app using the `addChip` method like this:
 * $$ chp = ui.addChip(parent, text, options, width, height) $$
 * @param {Object} parent The parent layout where to add the Chip.
 * @param {String} text The text on the chip.
 * @param {String} options A comma separated option.\nTheme Color: `Primary`, `Secondary`, `Default`\nSize: `Small`, `Medium`\nVariant: `Outlined`, `Default`\nUtil: `Touchable`
 * @param {Number} width Fraction of the parent width `[0-1]`
 * @param {Number} height Fraction of the parent height `[0-1]`
 * @returns Object Chip
 * If you want to change the height of the Chip later on after initializing, pass the `height` argument.
 */

ui.addChip = function(parent, text, options, width, height)
{
	return new ui.Chip( parent, text, options, width, height )
}

ui.Chip = class extends ui.Control
{
	constructor( parent, text, options, width, height )
	{
		super( parent, width, height, options, 'Chip')
		this._text = text ? text.trim() : ''
		
		this._initProps()
		this._render()
	}

	//INVISIBLE METHODS
	_initProps()
	{
		this._props.clickable = this._options.includes('touchable')
		this._props.color = this._getColor()
		this._props.disabled = false
		this._props.size = this._options.includes('small') ? 'small' : 'medium'
		this._props.variant = this._options.includes('outlined') ? 'outlined' : 'default'
	}

	//INVISIBLE METHODS
	_getColor() {
		if(this._options.includes('primary')) return 'primary'
		else if(this._options.includes('secondary')) return 'secondary'
		else return 'default'
	}
	_handleDelete() {
        if( this._onDelete ) {
            this.hide();
            this._onDelete();
        }
    }
	
	_render()
	{
		const e = React.createElement
		const { Chip } = window['MaterialUI']
		this._ctl = e( Chip, {
            label: this._text,
            ...this._props,
            style: { ...this._style, width: "100%", height: this._height > 0 ? "100%":null },
            onClick: platform.ios ? null : this._onTouch,
            onTouchEnd: platform.ios ? this._onTouch : null,
            onContextMenu: this._onContextMenu.bind(this)
        } )
		ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
	}

	// VISIBLE PROPERTIES

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

	// VISIBLE METHODS

	/** ## Methods
	 * Here are the methods available for Chips Component
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
     * Adds a callback handler when the chip is touch.
     * $$ chp.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */
    
	/** ### setTouchable
	 * Sets the chip to clickable. This will add a pointer cursor into the chip when hovered.
	 * $$ chp.setTouchable( touchable ) $$
	 * @param {Boolean} touchable Can be `true` or `false`
	 */
	setTouchable(touchable) { this._props.clickable=touchable; this._render() }

	setText( text ) { this._text = text; this._render() }
    getText() { return this._text }
	set text( text ) { this._text = text; this._render() }
	get text() { return this._text }

	setIcon( icon ) {
		this._icon = icon.toLowerCase()
		this._props.icon = React.createElement( "i", { className: "material-icons" }, icon.trim().toLowerCase() )
		this._render()
	}
	set icon( icon ) {
		this._icon = icon.toLowerCase().trim()
		this._props.icon = React.createElement( window['MaterialUI'].Icon, {}, icon.trim().toLowerCase() );
		this._render()
	}
	get icon() { return this._icon; }
    
    set iconColor( color ) {
        let iconEl = this._div.querySelector(".MuiChip-root .MuiChip-icon");
        if( iconEl ) iconEl.style.color = color;
    }
    get iconColor() {
        let iconEl = this._div.querySelector(".MuiChip-root .MuiChip-icon");
        return iconEl ? iconEl.style.color : null;
    }
    set iconSize( size ) {
        let iconEl = this._div.querySelector(".MuiChip-root .MuiChip-icon");
        if( iconEl ) iconEl.style.fontSize = size;
    }
    get iconSize() {
        let iconEl = this._div.querySelector(".MuiChip-root .MuiChip-icon");
        return iconEl ? iconEl.style.fontSize : null;
    }
	
	setAvatar( avatar ) {
		var t = avatar.split('/')
		if(avatar.includes('png') || avatar.includes('jpg') || avatar.includes('jpeg'))
		{
			var t = avatar.split('/')
			this._props.avatar = React.createElement(window['MaterialUI'].Avatar , {alt: t[t.length-1].charAt(0), src: avatar})
		}
		else this._props.avatar = React.createElement(window['MaterialUI'].Avatar , {}, avatar.charAt(0).toUpperCase())
		this._render()
	}
	set avatar( avatar ) {
		var t = avatar.split('/')
		if(avatar.includes('png') || avatar.includes('jpg') || avatar.includes('jpeg'))
		{
			var t = avatar.split('/')
			this._props.avatar = React.createElement(window['MaterialUI'].Avatar , {alt: t[t.length-1].charAt(0), src: avatar})
		}
		else this._props.avatar = React.createElement(window['MaterialUI'].Avatar , {}, avatar.charAt(0).toUpperCase())
		if(!avatar) this._props.avatar = null
        this._avatar = avatar
		this._render()
	}
	get avatar() { return this._avatar }

	/** ### setOnDelete
	 * Sets a callback function when the chip is deleted. This will automatically add a delete icon to the chip.
	 * $$ chp.setOnDelete( callback ) $$
	 * @param {Function} callback On delete callback function.
	 */
	setOnDelete(callback) {
		this._onDelete = callback;
		this._props.onDelete = this._handleDelete.bind( this );
		this._render();
	}
	setDeleteIcon( icon ) {
		this._props.deleteIcon = React.createElement('i', {className:'material-icons'}, icon.trim().toLowerCase())
		this._render()
	}
	set deleteIcon( icon ) {
		this._props.deleteIcon = React.createElement('i', {className:'material-icons'}, icon.trim().toLowerCase())
		this._render()
	}
	get deleteIcon() { return this._props.deleteIcon; }

	setSizeVariant( size ) { this._props.size = size.toLowerCase(); this._render() }
	getSizeVariant() { return this._props.size }
	set sizeVariant( size ) { this._props.size = size.toLowerCase(); this._render() }
	get sizeVariant() { return this._props.size }

	setVariant( val ) {
		this._props.variant = val ? val.toLowerCase() : "default"
		this._render()
	}
    getVariant() { return this._props.variant }
	set variant( val ) {
		this._props.variant = val ? val.toLowerCase() : "default"
		this._render()
	}
	get variant() { return this._props.variant }

	setColor( color ) {
		this._props.color = color ? color.toLowerCase() : "default"
		this._render()
	}
	set color( color ) {
		this._props.color = color ? color.toLowerCase() : "default"
		this._render()
	}
	get color() { return this._props.color; }

    set textColor(color) {
        this._style.color = color
        this._render()
    }
    get textColor() { return this._style.color }

    set textSize(size) {
        this._style.fontSize = size
        this._render()
    }
    get textSize() { return this._style.fontSize }

    set cornerRadius(rad) {
        this._style.borderRadius = rad
        this._render()
    }
    get cornerRadius() { return this._style.borderRadius }

    set backColor(color) {
        this._style.backgroundColor = color
        this._render()
    }
    get backColor() { return this._style.backgroundColor }

    set backImage( img ) {
        this._backImageUrl = img;
        this._style.backgroundColor = "";
        this._style.backgroundImage = `url('`+img+`')`;
        this._style.backgroundSize = "cover";
        this._style.backgroundPosition = "center";
        this._style.backgroundRepeat = "no-repeat";
        this._render();
    }

    /** ### setCornerRadius
     * Sets the corner radius of the chip.
     * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} tl Top-left corner radius.
     * @param {Number} tr Top-right corner radius.
     * @param {Number} bl Bottom-left corner radius.
     * @param {Number} br Bottom-right corner radius.
     * @param {String} mode Unit. Values are `px` `rem` or `%`.
     */
     setCornerRadius(tl, tr, bl, br, mode="px") {
        this._cornerRad = { tl: tl+mode, tr: tr+mode, bl: bl+mode, br: br+mode };
        this._style.borderTopLeftRadius = this._cornerRad.tl;
        this._style.borderTopRightRadius = this._cornerRad.tr;
        this._style.borderBottomLeftRadius = this._cornerRad.bl;
        this._style.borderBottomRightRadius = this._cornerRad.br;
        this._render();
    }

    // border
    setBorder(left, top, right, bottom, clr, style="solid") {
        style = style.toLowerCase()
        const el = this._div.querySelector(".MuiChip-root")
        el.style.borderWidth = top+"px " + right+"px " + bottom+"px " + left + "px"
        el.style.borderColor = clr || this._border.color || "#000000"
        el.style.borderStyle = style
        this._border.left = left, this._border.top = top, this._border.right = right, this._border.bottom = bottom
        this._border.style = style, this._border.color = clr
    }
    set border( val ) {
        this._border.width = val
        const el = this._div.querySelector(".MuiChip-root")
        el.style.borderWidth = val + "px"
        if( !this._border.style ) this.borderStyle = "solid"
    }
    set borderColor( color ) {
        this._border.color = color
        const el = this._div.querySelector(".MuiChip-root")
        el.style.borderColor = color
    }
    set borderStyle(style = "solid") {
        this._border.style = style.toLowerCase()
        const el = this._div.querySelector(".MuiChip-root")
        el.style.borderStyle = this._border.style
    }
}

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
