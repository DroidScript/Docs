
/** # Button
 * @abbrev btn
 * A button component in mobile UI development is an element that triggers an action when pressed.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs A button typically adheres to guidelines such as elevation, shape, and color to convey interactivity. It serves as a touchable surface with discernible feedback, promoting a consistent and intuitive user experience across mobile applications. Add a button using the `addButton` method like this:
 * $$ btn = ui.addButton(parent, text, options, width, height) $$
 * @param {Object} parent The layout where to add the button.
 * @param {String} text The button text or the material icon text.
 * @param {String} options A comma separated options.\nVariant: `Contained`, `Outlined`, `Text`, `Default`\nTheme Color: `Primary`, `Secondary`, `Default`\nSizes: `Small`, `Medium`, `Large`\nToggleable: `Toggle`, `Active`\nUtils: `Icon`, `NoRipple`, `Upload`, `Multiple`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object Button
 * In case of `Upload`, you can specify `Multiple` to accept multiple files.
 */

ui.addButton = function(parent, text, options, width, height)
{
    return new ui.Button(parent, text, options, width, height)
}

ui.Button = class extends ui.Control
{
	constructor(parent, text, options, width, height)
	{
	    super( parent, width, height, options, "Button")
	    
		//--- INVISIBLE PROPERTIES ---
		this._click = null
		this._fileSelect = null
		this._badge = {
			badgeContent: 0,
			color: "secondary"
		}
		this._toolTip = {
			title: "",
			placement: "top",
			arrow: true
		}
		this._text = text
        this._fileAccept = "*/*"
        this._icon = this._options.includes("icon") ? text : ""
        this._style2 = {}
        this._initProps()
		this._initStyle()

        if( this._options.includes("toggle") ) {
            this._active = this._options.includes("active");
            this._cls += "uiToggle";
            if( this._active ) this._cls += " uiToggle-active";
        }

		this._render()
	}
	
	//--- INVISIBLE METHODS --------------------------

    _initProps()
    {
		this._props.variant = _variant(this._options)
		this._props.color = _color(this._options)
		this._props.size = _size(this._options)
		this._props.component = 'span'
		this._props['aria-haspopup'] = false
		this._props['aria-controls'] =  ''
		this._props.disabled = false
        this._props.disableTouchRipple = this._options.includes("noripple");
    }

	_initStyle()
	{
		var icon = this._options.includes( "icon" )
		this._style = {
			width: icon ? "fit-content" : "100%",
			height: icon ? "fit-content" : "100%"
		}
	}

	_onTouch( e )
	{
		e.stopPropagation();
        if( this._touchTimeout ) clearTimeout( this._touchTimeout );
		if( e.detail == 2 && this._doubleTouch ) this._doubleTouch( this._getEventObject(e, null, null, "dbltouch") );
		else {
            if( this._options.includes("toggle") ) {
                this._active = !this._active;
                let el = this._div.querySelector( ".MuiButton-root" );
                if( this._active ) el.classList.add("uiToggle-active");
                else el.classList.remove("uiToggle-active");
                if( this._touch ) this._touch(this._active, this._getEventObject(e, null, null, "touch"));
            }
            else if( this._touch ) this._touch( this._getEventObject(e, null, null, "touch"));
        }
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
        var e = React.createElement
	    var mui = window['MaterialUI']
	    var icon = this._options.includes("icon")
	    var upload = this._options.includes("upload")
	    
	    var _cmp = this._text
        //if(icon) _cmp = e( mui.Icon, {}, this._icon.toLowerCase() )
        if(icon) _cmp = e( "i", {className:"material-icons"}, this._icon.toLowerCase() )
        else if(this._icon) {
            _cmp = e("span", {
                style: { display: "flex", alignItems: "center" }
            }, [
                e("i", {className:"material-icons", key:0,style:{...this._style2}}, this._icon),
                e("span", {key:1,style:{marginLeft:10}, className: "-ctl-text"}, this._text)
            ])
        }
	    var _cnt = _cmp
	    if( this._badge.badgeContent ) _cnt = e( mui.Badge, { ...this._badge }, _cmp )
        this._ctl = e( icon ? mui.IconButton : mui.Button, {
            ...this._props,
            onClick: platform.ios ? null : this._onTouch,
            onTouchEnd: platform.ios ? this._onTouch : null,
            onTouchStart: platform.ios ? this._onTouchStart.bind(this) : null,
            onMouseDown: platform.ios ? null : this._onTouchStart.bind(this),
            style: { ...this._style },
            className: this._cls + " -ctl-text",
            onContextMenu: this._onContextMenu.bind(this)
        }, _cnt )
	    if( upload ) {
	        var btn =  this._ctl
	        var inp = e( "input", { accept:this._fileAccept, style:{display:'none'},
	                    id:"contained-button-file", type:"file", onChange: this._onChange.bind( this ), multiple: this._options.includes( "multiple" ), value: [] }, null )
	        var lab = e("label",{htmlFor:"contained-button-file"}, btn )
	        this._ctl = e( "div", {}, inp, lab )
	    }
	    if( this._toolTip.title ) {
            this._ctl = e(
	    		mui.Tooltip, {
	    			...this._toolTip,
					style: { with: "100%", height: "100%"}
	    		}, this._ctl
	    	)
        }
	    ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
	}
	
	// INVISIBLE METHODS
	_onChange( ev )
	{
		if(!this._fileSelect) return;
		this._fileSelect(ev.currentTarget.files);
	}

	// VISIBLE PROPERTIES
    
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
	 * Here are the methods available for Button Component
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
     * Adds a callback handler when the button is touch. If the button is `toggleable` the first argument pass into the callback function is a `Boolean` value which is the active state of the button toggle.
     * $$ btn.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event. If the button is `toggleable` the first argument pass into the callback function is a `Boolean` value which is the active state of the button toggle.
     */

    /** ### setOnLongTouch
     * Adds a callback handler when the button is long touch. The touch timer is about 500 milliseconds.
     * $$ btn.setOnLongTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */
    setOnLongTouch( callback ) { this._longTouch = callback; }
	
	/** ### setOnFileSelect
	 * Sets a callback on file select.
	 * $$ btn.setOnFileSelect( callback ) $$
	 * @param {Function} callback The callback function. ---> @arg {Array} files An array of file objects selected.
	 */
	setOnFileSelect(cb) { this._fileSelect = cb; }

	setText( text ) { this.text = text; }
    getText() { return this._text; }
	set text( text ) {
        this._text = text;
        if( this._options.includes("icon") ) this._icon = this._text;
        this._render();
    }
	get text() { return this._text; }

	setBadge(count, color) {
		this._badge.badgeContent = count
		this._badge.color = color ? color.toLowerCase() : "secondary"
		this._render()
	}
    getBadge() { return this._badge.badgeContent }
	set badge( count ) { this._badge.badgeContent = count; this._render(); }
	get badge() { return this._badge.badgeContent; }

	set badgeColor( color ) { this._badge.color = color.toLowerCase(); this._render(); }
	get badgeColor() { return this._badge.color; }

	/** ### setToolTip
	 * Sets a tooltip when the button is hovered.
	 * $$ btn.setToolTip( title, pos ) $$
	 * @param {String} title The text of the tooltip
	 * @param {String} pos Position of the tooltip. \n Positions : `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTip(title, pos) {
		this._toolTip.title = title
		this._toolTip.placement = pos ? pos.toLowerCase() : "top"
		this._render()
	}
	set toolTip( txt ) { this._toolTip.title = txt; this._render(); }
	get toolTip() { return this._toolTip.title; }
	set toolTipPosition( pos ) { this._toolTip.placement = pos.toLowerCase(); this._render(); }
	get toolTipPosition() { return this._toolTip.placement; }

    setVariant(val) { this._props.variant = val?val.toLowerCase():"contained"; this._render(); }
	getVariant() { return this._props.variant; }
	get variant() { return this._props.variant; }
	set variant( val ) { this._props.variant = val?val.toLowerCase():"contained"; this._render(); }

	setColor(clr) {
        this._props.color = clr ? clr.toLowerCase():'default'
        this.backColor = ""
    }
	set color(clr) {
        this._props.color = clr ? clr.toLowerCase():'default'
        this.backColor = ""
    }
	get color() { return this._props.color; }

	/** ### setTextShadow
	 * Sets a text-shadow to the button text.
	 * $$ btn.setTextShadow( radius, dx, dy, color ) $$
	 * @param {Number} radius The radius in pixels
	 * @param {Number} dx The x-offset in pixels
	 * @param {Number} dy The y-offset in pixels
	 * @param {String} color The color in hexadecimal `#rrggbb`
	 */
	setTextShadow( radius, dx, dy, color ) {
		this._style.textShadow = radius+'px '+dx+'px '+dy+'px '+color
		this._render()
	}

	setTextColor( color ) { this._style.color = color; this._render() }
	set textColor( color ) { this._style.color = color; this._render() }
	get textColor() { return this._style.color; }

	/** ### setPadding
	 * Sets the padding of the button.
	 * $$ btn.setPadding( left, top, right, bottom, mode ) $$
	 * @param {Number} left The left padding in pixel.
	 * @param {Number} top The top padding in pixels,
	 * @param {Number} right The right padding in pixels.
	 * @param {Number} bottom The bottom padding in pixels.
	 * @param {String} mode Can be `px` `%`
	 */
	setPadding( left, top, right, bottom, mode )
	{
		mode = mode ? mode.toLowerCase() : ''
		this._style.paddingLeft = mode.includes('px') ? left+'px': _W(left)
		this._style.paddingTop = mode.includes('px') ? top+'px': _H(top)
		this._style.paddingRight = mode.includes('px') ? right+'px': _W(right)
		this._style.paddingBottom = mode.includes('px') ? bottom+'px': _H(bottom)
		this._render()
	}

	setSizeVariant( val ) { this._props.size = val ? val.toLowerCase():"medium"; this._render(); }
    getSizeVariant() { return this._props.size; }
	set sizeVariant( val ) { this._props.size = val ? val.toLowerCase():"medium"; this._render(); }
	get sizeVariant() { return this._props.size; }

	// override
    setCornerRadius(tl, tr, bl, br, mode="px") {
        this._cornerRad = { tl: tl+mode, tr: tr+mode, bl: bl+mode, br: br+mode };
        this._style.borderTopLeftRadius = this._cornerRad.tl;
        this._style.borderTopRightRadius = this._cornerRad.tr;
        this._style.borderBottomLeftRadius = this._cornerRad.bl;
        this._style.borderBottomRightRadius = this._cornerRad.br;
        this._render();
    }

    set textSize( size ) {
        if( this._options.includes("icon") ) this._div.querySelector(".material-icons").style.fontSize = size;
        else this._style.fontSize = size, this._render();
    }
    get textSize() { return this._style.fontSize }

    set icon(icon) {
        this._icon = icon ? icon.toLowerCase() : ""
        this._render()
    }
    get icon() { return this._icon }

    set iconColor(color) {
        this._style2.color = color
        this._render()
    }
    get iconColor() { return this._style2.color }

    set iconSize( size ) {
        if( this._options.includes("icon") ) this._div.querySelector(".material-icons").style.fontSize = size;
        else this._style2.fontSize = size, this._render();
    }
    get iconSize() { return this._style2.fontSize }

    set backColor( color ) {
        this._style.backgroundColor = color;
        this._style.backgroundImage = "";
        this._render()
    }
    get backColor() { return this._style.backgroundColor }

    set backImage( img ) {
        this._backImageUrl = img;
        this._style.backgroundImage = `url('${img}')`;
        this._style.backgroundSize = "cover";
        this._style.backgroundPosition = "center";
        this._style.backgroundRepeat = "no-repeat";
        this._style.backgroundColor = "";
        this._render();
    }

    /** ### setCornerRadius
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
        this._style.borderTopLeftRadius = this._cornerRad.tl;
        this._style.borderTopRightRadius = this._cornerRad.tr;
        this._style.borderBottomLeftRadius = this._cornerRad.bl;
        this._style.borderBottomRightRadius = this._cornerRad.br;
        this._render();
    }

    set acceptedFiles( pattern ) { this._fileAccept = pattern; this._render() }
    get acceptedFiles() { return this._fileAccept }

    set active( value ) {
        if( !this._options.includes("toggle") ) return;
        this._active = value;
        let el = this._div.querySelector( ".MuiButton-root" );
        if( this._active ) el.classList.add("uiToggle-active");
        else el.classList.remove("uiToggle-active");
    }
    get active() { return this._options.includes("toggle") ? this._active : null; }

    // border
    setBorder(left, top, right, bottom, clr, style="solid") {
        style = style.toLowerCase()
        const el = this._div.querySelector(this._options.includes("icon") ? ".MuiIconButton-root" : ".MuiButton-root")
        el.style.borderWidth = top+"px " + right+"px " + bottom+"px " + left + "px"
        el.style.borderColor = clr || this._border.color || "#000000"
        el.style.borderStyle = style
        this._border.left = left, this._border.top = top, this._border.right = right, this._border.bottom = bottom
        this._border.style = style, this._border.color = clr
    }
    set border( val ) {
        this._border.width = val
        const el = this._div.querySelector(this._options.includes("icon") ? ".MuiIconButton-root" : ".MuiButton-root")
        el.style.borderWidth = val + "px"
        if( !this._border.style ) this.borderStyle = "solid"
    }
    set borderColor( color ) {
        this._border.color = color
        const el = this._div.querySelector(this._options.includes("icon") ? ".MuiIconButton-root" : ".MuiButton-root")
        el.style.borderColor = color
    }
    set borderStyle(style = "solid") {
        this._border.style = style.toLowerCase()
        const el = this._div.querySelector(this._options.includes("icon") ? ".MuiIconButton-root" : ".MuiButton-root")
        el.style.borderStyle = this._border.style
    }
}

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