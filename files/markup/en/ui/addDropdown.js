
/** # Dropdown
 * @abbrev dpd
 * A dropdown, also known as a spinner or picker, is a user interface element that presents a list of options in a drop-down menu.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs Users can select one option from the list. In Material Design, Dropdowns typically provide a clear visual representation, ensuring a consistent and intuitive way for users to make selections within mobile applications. Add a dropdown into your app using the `addDropdown` method like this:
 * $$ dpd = ui.addDropdown(parent, list, options, width, height) $$
 * @param {Object} parent The layout where to add the dropdown.
 * @param {Array} list The list items to show.
 * @param {String} options A comma separated options.\nTheme Colors: `Primary`, `Secondary`, `Default`\nVariants: `Contained`, `Outlined`, `Text`\nSizes: `Small`, `Medium`, `Large`\nOrientation: `Horizontal`, `Vertical`\nUtil: `NoElevation` 
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object Dropdown
 */
ui.addDropdown = function(parent, list, options, width, height)
{
    return new ui.Dropdown(parent, list, options, width, height)
}

ui.Dropdown = class extends ui.Control
{
	constructor(parent, list, options, width, height) {
		super( parent, width, height, options, "Dropdown" )
		this._list = list || [];
        if( typeof(list) == "string" ) this._list = list.split(",").map(m => m.trim());
        else if( typeof(list) == "object" ) this._list = JSON.parse(JSON.stringify(list));
		this._value = this._list[ 0 ]
		this._open = false
		this._selectedIndex = 0;
		this._disabledItems = []
		this._anchorRef = React.createRef( null )
        this._style1 = {}
        this._style2 = {}
        this._style3 = {}
		this._label = null
        this._props.disabled = false
        this._props["aria-label"] = "split button"
		this._initProps()
		this._render()
	}

	// Invisible methods

	_initProps()
	{
		this._props.variant = _variant(this._options)
		this._props.color = _color(this._options)
		this._props.size = _size(this._options)
		this._props.orientation = this._options.includes("vertical") ? "vertical" : "horizontal"
		this._props.disableElevation = (this._options.includes('disableelevation') || this._options.includes('noelevation')) ? true : false
	}

  	_onMenuClick(index, e)
  	{
    	if(index != this._selectedIndex && this._change) this._change(this._list[index], index);
        this._selectedIndex = index;
    	this._value = this._list[index];
        if( this._touch ) this._touch(this._list[index], index, this._getEventObject(e, null, null, "touch"));
    	this._open = false;
    	this._render();
  	}
  	_onToggle() {
        this._open = !this._open;
        this._render();
        if( this._open === true ) {
            if( this._onOpen ) this._onOpen();
            this.fontFile = this._fontFile;
        }
    }
  	_onClose(event)
  	{
	    if (this._anchorRef.current && this._anchorRef.current.contains(event.target)) { return; }
	    if(this._close) this._close()
	    this._open = false
	    this._render()
  	}
  	_render()
	{
		var e = React.createElement
		var {
            Button,
            ButtonGroup,
            Icon,
            ClickAwayListener,
            Grow,
            Paper,
            Popper,
            MenuItem,
            MenuList } = window['MaterialUI'];
	
		this._ctl = e( "div", { style: { width:"100%", height:"100%" } },
        [
            e( ButtonGroup, {
                key: 1,
                ...this._props,
                style: { ...this._style, width: "100%", height: "100%", display:"flex" },
                onContextMenu: this._onContextMenu.bind(this)
            },
            [e( Button, {
                    key:1,
                    // onClick: platform.ios ? null : this._onTouch,
                    // onTouchEnd: platform.ios ? this._onTouch : null,
                    style: { flexGrow:1, ...this._style1}
                },
                e("span",{style:{...this._style3}}, this._label||this._value )
            ),
            e( Button, {
                    key:2,
                    size:"small",
                    "area-controls":this._open ? 'split-button-menu' : undefined,
                    "aria-expanded": this._open ? 'true' : undefined,
                    "aria-label": "select merge strategy",
                    "aria-haspopup": "menu",
                    onClick: platform.ios ? null : this._onToggle.bind(this),
                    onTouchEnd: platform.ios ? this._onToggle.bind(this) : null,
                    ref: this._anchorRef,
                    style: { ...this._style2 }
                },
                e(Icon,{style: {...this._style3}}, this._icon||"arrow_drop_down")
            )]),
            e( Popper, {
                    key: 2,
                    open: this._open,
                    role: undefined,
                    transition: true,
                    disablePortal: true,
                    anchorEl: this._anchorRef.current,
                    style: {zIndex:100000}
                },
                ({TransitionProps, placement}) => {
                    return e( Grow, {
                            ...TransitionProps,
                            style:{transformOrigin: placement==='bottom'?'center top':'center bottom'}
                        }, e( Paper, {},
                            e( ClickAwayListener, {
                                    onClickAway:this._onClose.bind(this)
                                }, e( MenuList, {
                                        id:"split-button-menu"
                                    },
                                    [this._list.map((option, index)=> {
                                        return e( MenuItem, {
                                                key: option,
                                                disabled: this._disabledItems.includes(index),
                                                selected: index == this._selectedIndex,
                                                onClick: platform.ios ? null : this._onMenuClick.bind(this, index),
                                                onTouchEnd: platform.ios ? this._onMenuClick.bind(this, index) : null
                                            }, option.trim() )
                                    })]
                                )
                            )
                        )
                    )
                }
            )
        ])

	    ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
	}

	// VISIBLE PROPERTIES

	/** ## Properties
	 * Here are the available setters and/or getters of Dropdown Component.
	 * @prop {Array} list Sets or returns the dropdown list. You can also passed a comma separated string.
	 * @prop {String} value Sets or returns the value of the Dropdown. If you pass a number it will be treated as the index of the corresponding item in the choices.
	 * @prop {String} variant Sets or returns the variant of the dropdown button. Values can be `Contained` or `Outlined` or `Text`
	 * @prop {String} sizeVariant Sets or returns the size variant of the dropdown button. Values can be `Small` or `Medium` or `Large`
	 * @prop {String} color Sets or returns the theme color. Values can be `Default` `Primary` or `Secondary`
	 * @prop {String} orientation Sets or returns the orientation of the dropdown buttongroup. Values can be `horizontal` or `vertical`
	 * @prop {String} label Sets or returns the default label of the dropdown.
     * @prop {String} icon Sets or returns the dropdown material icon font.
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
	 * Here are the available methods for Dropdown Component.
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
     * Adds a callback handler when the component is touch.
     * $$ cname.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} text The text of the touched item. @arg {Number} index The index of the touched item. @arg {Object} pos The position of the touch event.
     */
    
    /** ### setOnChange
	 * Adds a callback function on change event.
	 * $$ dpd.setOnChange(callback) $$
	 * @param {Function} callback The callback function. ---> @arg {text} The selected item text. @arg {Number} index The index of the corresponding item.
	 */
  	setOnChange(callback) { this._change = callback; }

    /** ### setOnOpen
     * Adds a callback function on close event.
     * $$ dpd.setOnOpen(callback)  $$
     * @param {Function} callback The callback function.
     */
    setOnOpen( callback ) { this._onOpen = callback; }

	/** ### setOnClose
	 * Adds a callback function on close event.
	 * $$ dpd.setOnClose(callback)  $$
	 * @param {Function} callback The callback function.
	 */
  	setOnClose( callback ) { this._close = callback; }

	/** ### setList
	 * Sets the list items on the dropdown.
	 * $$ dpd.setList(val) $$
	 * @param {Array} val The list of new items.
	 */
  	setList( val ) { this.list = val; }
    getList() { return this._list }
	set list(val) {
        if(typeof val == "string") this._list = val.split(",");
		else if(typeof val == "object") this._list = JSON.parse(JSON.stringify(val));
        this._disabledItems = [];
		this._render();
	}
	get list() { return this._list }

	/** ### setItemByIndex
	 * Updates the text of the corresponding item in the dropdown.
	 * $$ dpd.setItemByIndex(item, index) $$
	 * @param {String} item The new item text.
	 * @param {Number} index The index of the item to update.
	 */
  	setItemByIndex( item, index ) {
  		if( index>=this._list.length || index<0 ) return;
  		this._list[index] = item;
  		this._render();
  	}

	/** ### getItemByIndex
	 * Returns a dropdown item by its corresponding index.
	 * $$ dpd.getItemByIndex(index) $$
	 * @param {Number} index The index of corresponding item.
	 * @returns String
	 */
  	getItemByIndex( index ) { return this._list[index] }

  	setValue( val ) {
  		if(typeof val == 'number' && (val <= this._list.length && val>=0)) {
            this._value = this._list[ val ];
            this._selectedIndex = val;
        }
  		else {
            this._value = val;
            this._selectedIndex = this._list.indexOf( val );
        }
  		this._render()
  	}
  	getValue() { return this._value; }
    set value( val ) { this.setValue( val ); }
	get value() { return this._value; }

    /** ### setEnabled
	 * Enable or disable an item in the dropdown.
	 * $$ dpd.setEnabled( index, value ) $$
	 * @param {Number} index The index of the item.
	 * @param {Boolean} value Values can be `true` `false`.
	 */
    setEnabled(index, value) {
        if(typeof index !== "number" || typeof value != "boolean") return;
  		if( value ) this._disabledItems.splice(this._disabledItems.indexOf(index), 1);
		else this._disabledItems.push( index );
  		this._render();
    }

    /** ### getEnabled
     * Get the enabled state of an item in the dropdown menu.
     * $$ dpd.getEnabled( index ) $$
     * @param {Number} index The index of the item.
     * @returns Boolean
     */
    getEnabled( index ) {
        return this._disabledItems.every( m => m !== index )
    }

    /** ### setEnabledByName
	 * Enable or disable an item in the dropdown.
	 * $$ dpd.setEnabledByName( name, value ) $$
	 * @param {String} name The name of the item.
	 * @param {Boolean} value Values can be `true` `false`.
	 */
    setEnabledByName(name, value) {
        if(typeof name !== "string" || typeof value != "boolean") return;
  		var index = this._list.indexOf(name);
		if( value ) this._disabledItems.splice(this._disabledItems.indexOf(index), 1);
		else this._disabledItems.push(index);
  		this._render();
    }

    /** ### getEnabledByName
     * Get the enabled state of a menu item by its name.
     * $$ dpd.getEnabledByName( name ) $$
     * @param {String} name The name of the corresponding menu item.
     * @returns Boolean
     */
    getEnabledByName( name ) {
        if( typeof(name)!=="string" ) return null
        var index = this._list.indexOf( name.trim() )
        if( index < 0 ) return null
        return this._disabledItems.every( m => m !== index )
    }

    setVariant( val ) { this._props.variant = val ? val.toLowerCase() : ""; this._render(); }
    getVariant() { return this._props.variant; }
	set variant( val ) { this._props.variant = val ? val.toLowerCase() : ""; this._render(); }
	get variant() { return this._props.variant; }

    setSizeVariant( val ) { this._props.size = val ? val.toLowerCase() : "medium"; this._render(); }
	set sizeVariant( val ) { this._props.size = val ? val.toLowerCase() : "medium"; this._render(); }
	get sizeVariant() { return this._props.size; }

	setColor( color ) {
		this._props.color = color ? color.toLowerCase() : "default"
        this.backColor = ""
	}
	set color( color ) {
		this._props.color = color ? color.toLowerCase() : "default"
        this.backColor = ""
	}
	get color() { return this._props.color; }

    setOrientation( val ) { this._props.orientation = val ? val.toLowerCase() : ""; this._render(); }
	set orientation( val ) { this._props.orientation = val ? val.toLowerCase() : ""; this._render(); }
	get orientation() { return this._props.orientation; }

	setLabel( label ) { this._label = label; this._render() }
	set label( label ) { this._label = label; this._render() }
	get label() { return this._label; }

	/** ### addItem
	 * Add or insert a menu item in the dropdown list.
	 * $$ dpd.addItem( name, index ) $$
	 * @param {String} name The name of the menu.
	 * @param {Number} index The index in which to insert the menu item.
	 */
	addItem( name, index )
	{
		if( typeof(index) == "number" ) this._list.splice( index, 0, name )
		else this._list.push( name )
		this._render()
	}

	/** ### removeItemByIndex
	 * Removes a menu item in the dropdown by its index.
	 * $$ dpd.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the menu item to remove.
	 */
	removeItemByIndex( index )
	{
		this._list.splice( index, 1 )
		this._render()
	}

	/** ### removeItemByName
	 * Removes a menu item in the dropdown by its name.
	 * $$ dpd.removeItemByName( name ) $$
	 * @param {String} name The name of the menu item.
	 */
	removeItemByName( name ) {
		var index = this._list.indexOf( name )
		this.removeItemByIndex( index )
	}

	/** ### shiftItem
	 * Removes the first item in the dropdown menu. This will return the item being removed.
	 * $$ dpd.shiftItem() $$
	 */
	shiftItem() {
        let item = this._list[0];
        this.removeItemByIndex(0);
        return item;
    }

	/** ### popItem
	 * Removes the last item in the dropdown menu. This will return the item being removed.
	 * $$ dpd.popItem() $$
	 */
	popItem() {
        let item = this._list[this._list.length - 1];
        this.removeItemByIndex(this._list.length - 1);
        return item;
    }

    set textColor(color) {
        this._style3.color = color
        this._render()
    }
    get textColor() { return this._style3.color }

    set textSize(size) {
        this._style3.fontSize = size
        this._render()
    }
    get textSize() { return this._style3.fontSize }

    set icon(icon) {
        this._icon = icon.toLowerCase()
        this._render()
    }
    get icon() { return this._icon || "arrow_drop_down" }

    set backColor( color ) {
        this._style1.backgroundColor = color
        this._style2.backgroundColor = color
        this._render()
    }
    get backColor() { return this._style1.backgroundColor }

    set backImage( img ) {
        this._backImageUrl = img;
        this._style1.backgroundColor = "";
        this._style1.backgroundImage = `url('`+img+`')`;
        this._style1.backgroundSize = "cover";
        this._style1.backgroundPosition = "center";
        this._style1.backgroundRepeat = "no-repeat";
        this._render();
    }

    /** ### setCornerRadius
     * Sets the corner radius of the dropdown.
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
        this._style1.borderTopLeftRadius = this._cornerRad.tl;
        this._style1.borderBottomLeftRadius = this._cornerRad.bl;
        this._style2.borderTopRightRadius = this._cornerRad.tr;
        this._style2.borderBottomRightRadius = this._cornerRad.br;
        this._render();
    }

    set fontFile( file ) {
        if( typeof(file) != "string" || !file.includes(".") ) return
        this._fontFile = file;
        const n = file.split('/')[file.split('/').length-1]
        const name = n.substr(0, n.lastIndexOf(".")) + "-" + this._id
        const css = '@font-face {' +
            'font-family: \''+name+'\'; ' +
            'src: url(\''+file+'\'); '+
        '}';
        const style = document.createElement('style');
        style.innerText = css;
        document.head.appendChild(style);
        let els = this._div.querySelectorAll('*:not(:empty):not(.material-icons)');
        els.forEach( m => m.style.fontFamily = name );
    }

    // border
    setBorder(left, top, right, bottom, clr, style="solid") {
        style = style.toLowerCase()
        const el = this._div.querySelector(".MuiButtonGroup-root")
        el.style.borderWidth = top+"px " + right+"px " + bottom+"px " + left + "px"
        el.style.borderColor = clr || this._border.color || "#000000"
        el.style.borderStyle = style
        this._border.left = left, this._border.top = top, this._border.right = right, this._border.bottom = bottom
        this._border.style = style, this._border.color = clr
    }
    set border( val ) {
        this._border.width = val
        const el = this._div.querySelector(".MuiButtonGroup-root")
        el.style.borderWidth = val + "px"
        if( !this._border.style ) this.borderStyle = "solid"
    }
    set borderColor( color ) {
        this._border.color = color
        const el = this._div.querySelector(".MuiButtonGroup-root")
        el.style.borderColor = color
    }
    set borderStyle(style = "solid") {
        this._border.style = style.toLowerCase()
        const el = this._div.querySelector(".MuiButtonGroup-root")
        el.style.borderStyle = this._border.style
    }
}

/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize items to show in the dropdown
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add Dropdown control to the main layout.
        this.dpd = ui.addDropdown(this.main, items)

        // Add a callback handler for `onChange` event on the Dropdown control
        this.dpd.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup( "Value is " + text )
    }
}
 */

/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize dropdown items
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add a Dropdown control to the main layout
        // and pass `Outlined` and `Primary` options for styling
        this.dpd = ui.addDropdown( this.main, items, "Outlined,Primary" )

        // Set the label property of the Dropdown
        this.dpd.label = "Choose and item"

        // Set the corner radius to 16px
        this.dpd.cornerRadius = 16

        // Set the text size to 18
        this.dpd.textSize = 18

        // Add a callback handler for `onChange` event of the Dropdown control
        this.dpd.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup( "Value is " + text )
    }
}
 */
