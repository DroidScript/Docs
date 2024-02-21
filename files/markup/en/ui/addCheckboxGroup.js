
/** # CheckboxGroup
 * @abbrev ckb
 * A checkbox group in UI development is a collection of checkboxes grouped together for related selections or options.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs It allows users to make multiple choices from a set of related options. In Material Design, a checkbox group is often organized with clear spacing and alignment, providing a cohesive and visually coherent representation. This grouping enhances the user's ability to manage and understand multiple selections within the context of the application's design guidelines.
 * $$ ckb = ui.addCheckboxGroup(parent, list, options, width, height) $$
 * @jdocs Add a checkbox group using the `addCheckboxGroup` method like this:
 * @param {Object} parent The parent layout where to add the CheckboxGroup.
 * @param {Array} list The items to be displayed.
 * @param {String} options A comma separated options.\nTheme Color: `Default`, `Primary`, `Secondary`\nSizes: `Small`, `Medium`\nIcon Position: `Left`, `Right`\nContainer: `Elevated`, `Outlined`\nCorners : `Square`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object CheckboxGroup
 */

ui.addCheckboxGroup = function(parent, list, options, width, height)
{
    return new ui.CheckboxGroup(parent, list, options, width, height)
}

ui.CheckboxGroup = class extends ui.Control {
	
	constructor(parent, list, options, width, height)
	{
		super(parent, width, height, options, "CheckboxGroup")
		this._label = ""
		this._list = list || []
		if( typeof(list) == "string" ) this._list = list.split(",").map(m => m.trim());	// remove space after a comma first ', '
		else if( typeof(list) == "object" ) this._list = JSON.parse(JSON.stringify(list));
        this._icon = "check_box_outline_blank"
        this._labelPlacement = "right"
		this._checkedIcon = "check_box"
		this._checked = []
		this._disabled = new Array( this._list.length ).fill( false )
		this._textProps = {}
        this._style1 = {}
        this._style2 = {}
        this._itemPad = {}
        this._paperProps = {}
		this._initProps()
		this._initStyle()
		this._render()
	}

	// Invisible methods
	_initProps()
	{
		this._props.color = _color( this._options )
		this._props.size = this._options.includes( "small" ) ? "small" : "medium"
        this._props.edge = this._options.includes("right") ? "end":"start"
		this._paperProps.square = this._options.includes("square")
		this._paperProps.variant = this._options.includes("outline") ? "outlined" : "elevation"
		this._paperProps.elevation = this._options.includes("elevate") ? 1:0
        this._labelPlacement = this._options.includes("right") ? "left" : "right"
	}

	_initStyle()
	{
		this._style = {
			width: "100%",
			height: "100%",
            padding: "0px 0px"
		}

        this._itemPad = {
            paddingLeft: "1.1rem",
            paddingTop: "0.3rem",
            paddingRight: "1.1rem",
            paddingBottom: "0.3rem"
        }
	}

	// Handle onChange method on material UI and pass the item, checked state and index to the onChange callback
	_onChange(i)
	{
		if( this._change ) {
            let c = this._checked.reduce((q, v, n) => {
                if (v) q.push(n)
                return q;
            }, []);
            this._change(c);
        }
	}
    _onClick(item, i, e) {
        this._checked[i] = !this._checked[i];
        if( this._touch ) this._touch(this._checked[i], item, i, this._getEventObject(e, null, null, "touch"));
        this._render();
    }
	_onContextMenu( label, index, event )
	{
        if( this._ctxMenu ) {
            this._ctxMenu( label, index, this._getEventObject(event, null, null, "contextmenu") )
            var e = event || window.event
            e.preventDefault && e.preventDefault()
            e.stopPropagation && e.stopPropagation()
            e.cancelBubble = true
            e.returnValue = false
            return false
        }
	}
	_render()
	{
		var e = React.createElement
		const {FormControl,FormLabel,FormGroup,FormControlLabel,Checkbox,Icon,Typography,Paper} = window['MaterialUI']
		this._ctl = e( Paper, {
				...this._paperProps,
				style: { ...this._style }
			},
			e( FormControl, {
				component: "div",
				style: { width: "100%", height: "100%" }
			},
			[ this._label ? e( FormLabel, {
					key: 1,
					component: "legend",
                    style: { width: "100%", textAlign: "left", margin: "20px 0px 12px 16px" }
				}, this._label ) : '',
			e(
				FormGroup, { key: 2, },
				this._list.map( (t, i) => {
					return e( FormControlLabel,
						{
							key: i,
							label: e( Typography, { ...this._textProps, style:{...this._style1} }, t ),
							control: e( Checkbox, {
                                ...this._props,
                                checked: this._checked[i]||false,
                                icon: e( Icon, {style:{...this._style2}}, this._icon ),
                                checkedIcon: e( Icon, {style:{...this._style2}}, this._checkedIcon ),
                                name: t,
                                onChange: this._onChange.bind( this, i ),
                                onClick: platform.ios ? null : this._onClick.bind(this, t, i),
                                onTouchEnd: platform.ios ? this._onClick.bind(this, t, i) : null,
                                disabled: this._disabled[i]
                            }, null ),
							labelPlacement: this._labelPlacement=="left" ? "start" : "end",
							style: {
                                boxSizing: "border-box",
                                width: "100%",
                                display: "flex",
								justifyContent: this._labelPlacement=="left" ? "space-between" : "flex-start",
                                marginLeft: 0,
                                ...this._itemPad
							},
                            onContextMenu: this._onContextMenu.bind(this, t, i),
                            checked: true
						}, null
					)
				})
			)]
		))
		ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
	}

	// VISIBLE PROPERTIES

	/** ## Properties ##
	 * Here are the available setters and/or getters of the CheckboxGroup Component.
	 * @prop {Array} list Sets or returns the list items.
	 * @prop {String} label Sets or returns the label text.
	 * @prop {String} checkIcon Sets or returns the material icon font for check stated.
     * @prop {String} uncheckIcon Sets or returns the material icon font for uncheck state.
	 * @prop {String} sizeVariant Sets or returns the size variant of the Checkbox. Values can be `small` or `medium`.
	 * @prop {String} textColor Sets or returns the text color in hexadecimal format.
	 * @prop {String} elevation Sets or returns the depth of the container.
     * @prop {String} iconColor Sets or returns the color of the checkbox icon.
     * @prop {Number} textSize Sets or returns the size of the checkbox icon. This will also affect the checkbox icon.
     * @prop {Number} iconSize Sets or returns the size of the checkbox icon.
     * @prop {Number} spaceBetween Sets or returns the space between the checkbox icon and the text.
     * @prop {String} color Sets or returns the theme color use for the checkbox. Values can be `Default` `Primary` or `Secondary`.
     * @prop {Boolean} outlined Sets or returns whether the container is outlined or elevated.
     * @prop {Array} itemPadding Sets or returns the padding of each list item. See also `setItemPadding` method.
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
	 * Here are the methods available for CheckboxGroup Component
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
	 * Sets a callback function when the checkbox item is touch.
	 * $$ ckb.setOnTouch( callback ) $$
	 * @param {Function} callback The function to be called. ---> @arg {Boolean} value The checked state of the checkbox item. @arg {String} text The checkbox label text. @arg {Number} index The index of the corresponding checkbox. @arg {Object} pos The position of the touch event.
	 */

    /** ### setOnChange
     * Adds a callback function to be called whent there is a change of value.
     * $$ ckb.setOnChange(callback) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Array} values An array of indexes corresponding to the checked checkbox items.
     */
    setOnChange( callback ) { this._change = callback; }

	setLabel( val ) { this._label = val; this._render(); }
    getLabel() { return this._label }
	set label( val ) { this._label = val; this._render(); }
	get label() { return this._label }

	/** ### setIcon
	 * Sets the checked icon and unchecked icon
	 * $$ ckb.setIcon( checked, unchecked ) $$
	 * @param {String} checked Material icon font
	 * @param {String} unchecked Material icon font
	 */
	setIcon( checked, unchecked )
	{ 
		this._icon = unchecked||"check_box_outline_blank";
		this._checkedIcon = checked || "check_box";
		this._render();
	}

    /** ### getIcon
	 * Get the checked and unchecked icon of the checkbox group.
	 * $$ ckb.getIcon() $$
	 * @returns Object
     * @@ The returned object is of the form `{checked, unchecked}`.
	 */
	getIcon() { return { checked: this._checkedIcon, unchecked: this._icon } }

	set checkIcon( icon ) { this._checkedIcon = icon||"check_box"; this._render(); }
	get checkIcon() { return this._checkedIcon; }
	set uncheckIcon( icon ) { this._icon = icon||"check_box_outline_blank"; this._render(); }
    get uncheckIcon() { return this._icon }

	/** ### setCheckedByIndex
     * Checked or unchecked a given item by its index.
	 * $$ ckb.setCheckedByIndex( index, bool ) $$
     * @param {Number} item The item or index of the item.
     * @param {Boolean} bool The item value. Can be `true` or `false`.
     */
    setCheckedByIndex( index, bool )
	{
		this._checked[ index ] = bool
		this._render()
    }

	/** ### setCheckedByName
     * Checked or unchecked a given item by its name.
	 * $$ ckb.setCheckedByName( name, bool ) $$
     * @param {String} name The item or index of the item.
     * @param {Boolean} bool The item value. Can be `true` or `false`.
     */
	setCheckedByName( name, bool )
	{
		this._checked[ this._list.indexOf( name.trim() ) ] = bool
		this._render()
    }

    /** ### getCheckedItems
	 * Get the list of all checked items.
	 * $$ ckb.getCheckedItems() $$
	 * @returns String
	 */
	getCheckedItems()
	{
        var ret = []
        for( var i=0; i < this._list.length; i++ ) if( this._checked[ i ] ) ret.push( this._list[ i ] )
		return ret.toString()
    }

	/** ### getCheckedByIndex
	 * Get the current value of the item in the list.
	 * $$ ckb.getCheckedByIndex( index ) $$
	 * @param {Number} index The index of the corresponding item.
	 * @returns Boolean
	 */
	getCheckedByIndex( index ) { return this._checked[ index ] }

	/** ### getCheckedByName
	 * Get the current value of the item in the list.
	 * $$ ckb.getCheckedByName( name ) $$
	 * @param {String} name The index of the corresponding item.
	 * @returns Boolean
	 */
	getCheckedByName( name ) { return this._checked[ this._list.indexOf(name.trim()) ] }

	/** ### setTextByIndex
     * Sets a new text to a given item by its index.
	 * $$ ckb.setTextByIndex( index, val ) $$
     * @param {Number} index The index of the item.
     * @param {String} val The new text to replace.
     */
	setTextByIndex( index, val )
	{
        this._list[ index ] = val
        this._render()
    }

	/** ### setTextByName
     * Sets a new text to a given item by its name.
	 * $$ ckb.v( name, val ) $$
     * @param {String} name The name of the item
     * @param {String} val The new text to replace
     */
    setTextByName( name, val )
    {
        this._list[ this._list.indexOf( name.trim() ) ] = val
        this._render()
    }
    
	/** ### getText
	 * Get the text of the item in a given index.
	 * $$ ckb.getText( index ) $$
	 * @param {Number} index The index of the list
	 * @returns String
	 */
    getText( index ) { return this._list[ index ] }

	/** ### setList
	 * Sets a new list of item in the checkbox group.
	 * $$ ckb.setList( list, delim ) $$
	 * @param {Array} list The new list items for the checkbox group.
	 */
    setList( list, delim ) {
        this._list = list || [];
    	if( typeof(list) == "string" ) this._list = list.split(delim||",");
    	else if( typeof(list) == "object" ) this._list = JSON.parse(JSON.stringify(list));
        this._checked = [];
		this._disabled = new Array(this._list.length).fill(false);
    	this._render();
    }
	getList() { return this._list }

	set list( list ) {
        this._list = list || [];
		if( typeof(list) == "string" ) this._list = list.split(",");
    	else if( typeof(list) == "object" ) this._list = JSON.parse(JSON.stringify(list));
        this._checked = [];
		this._disabled = new Array(this._list.length).fill(false);
    	this._render();
	}
	get list() { return this._list; }

	setSizeVariant( size )
	{
		this._props.size = size ? size.toLowerCase() : "medium"
		this._render()
	}
    getSizeVariant() { return this._props.size }
	set sizeVariant( size )
	{
		this._props.size = size ? size.toLowerCase() : "medium"
		this._render()
	}
	get sizeVariant() { return this._props.size }

	/** ### setEnabled
	 * Enable or disable an item in the checkbox group.
	 * $$ ckb.setEnabled( index, value ) $$
	 * @param {Number} index The index of the checkbox item.
	 * @param {Boolean} value Values can be `true` or `false`.
	 */
	setEnabled( index, value )
	{
		if( typeof( index ) == "boolean" ) this._disabled.fill( !index )
        else if( typeof(value)!=="boolean" ) return
		else this._disabled[ index ] = !value
		this._render()
	}

    /** ### getEnabled
     * Get the enabled state of a checkbox item.
     * $$ ckb.getEnabled( index ) $$
     * @param {Number} index The index of the checkbox item.
     * @returns Boolean
     */
    getEnabled( index ) {
        if( typeof(index)!="number" || index<0 ) return null
        return !this._disabled[index]
    }

    /** ### setEnabledByName
     * Enable or disable a checkbox item by its name.
     * $$ ckb.setEnabledByName( name, value ) $$
     * @param {String} name The name of the checkbox item.
     * @param {Boolean} value Values can be `true` or `false`
     */
    setEnabledByName( name, value ) {
        if( typeof(name)!="string" || typeof(value)!="boolean" ) return
        var index = this._list.findIndex( m => m.includes(name.trim()) )
        this._disabled[index] = !value
        this._render()
    }

    /** ### getEnabledByName
     * Get the enabled state of a checkbox item by its name.
     * @param {String} name The checkbox item.
     * @returns Boolean
     */
    getEnabledByName( name ) {
        if( typeof(name)!="string" ) return null
        var index = this._list.findIndex( m => m.includes(name.trim()) )
        return index<0 ? null : !this._disabled[index]
    }

    set disabled( value ) {
        this._disabled.fill( value )
        this._render()
    }
    get disabled() {
        return this._disabled.every( m => m === true )
    }

	/** ### addItem
	 * Add or insert an item in the checkbox group.
	 * $$ ckb.addItem( text, index ) $$
	 * @param {String} text The text label for the checkbox.
	 * @param {Number} index The index in which to insert the item.
	 */
	addItem( text, index )
	{
		if(typeof index == "number")
		{
			this._list.splice( index, 0, text )
			this._disabled.splice( index, 0, false )
		}
		else
		{
			this._list.push( text )
			this._disabled.push( false )
		}
		this._render()
	}

	/** ### removeItemByIndex
	 * Removes an item in the checkbox group by its corresponding index.
	 * $$ ckb.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the corresponding item to remove.
	 */
	removeItemByIndex( index )
	{
		this._list.splice( index, 1 )
		this._disabled.splice( index, 1 )
		this._render()
	}

	/** ### removeItemByName
	 * Removes an item in the checkbox group by its title name.
	 * $$ ckb.removeItemByName( title ) $$
	 * @param {String} title The title text of the corresponding checkbox item.
	 */
	removeItemByName( title )
	{
		var index = this._list.indexOf( title )
		this.removeItemByIndex( index )
	}

	/** ### popItem
	 * Removes the last item in the checkbox group. This will return the item being removed.
	 * $$ ckb.popItem() $$
	 */
	popItem() {
        let item = this._list[this._list.length - 1];
        this.removeItemByIndex(this._list.length - 1);
        return item;
    }
 
	 /** ### shiftItem
	  * Removes the first item in the checkbox group. This will return the item being removed.
	  * $$ ckb.shiftItem() $$
	  */
	shiftItem() {
        let item = this._list[0];
        this.removeItemByIndex(0);
        return item;
    }

	setTextColor( color ) {
        if( color && color.toLowerCase().includes( "prima" ) ) this._textProps.color = "textPrimary"
        else if( color && color.toLowerCase().includes( "second" ) ) this._textProps.color = "textSecondary"
        else this._style1.color = color
		this._render()
	}
	set textColor( color ) {
		if( color && color.toLowerCase().includes( "prima" ) ) this._textProps.color = "textPrimary"
        else if( color && color.toLowerCase().includes( "second" ) ) this._textProps.color = "textSecondary"
        else this._style1.color = color
		this._render()
	}
	get textColor()  { return this._style1.color || this._textProps.color }

	setElevation( num )
	{
		this._paperProps.elevation = num
		this._render()
	}
	set elevation( num )
	{
		this._paperProps.elevation = num
		this._render()
	}
	get elevation() { return this._paperProps.elevation; }

	/** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ ckb.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} label The checkbox item label text. @arg {Number} index The index of the corresponding item. @arg {Object} pos The position of the touch event.
     */

	setBackColor( clr ) { this._style.backgroundColor = clr; this._render(); }
	set backColor( clr ) { this._style.backgroundColor = clr; this._render(); }
	get backColor() { return this._style.backgroundColor; }

    set backImage( img ) {
        this._backImageUrl = img;
        this._style.backgroundColor = "";
        this._style.backgroundImage = `url('`+img+`')`;
        this._style.backgroundSize = "cover";
        this._style.backgroundPosition = "center";
        this._style.backgroundRepeat = "no-repeat";
        this._render();
    }

    set textSize(size) {
        this._style1.fontSize = size
        this._style2.fontSize = size
        this._render()
    }
    get textSize() { return this._style1.fontSize }

    set iconColor(color) {
        this._style2.color = color
        this._render()
    }
    get iconColor() { return this._style2.color }

    set iconSize(size) {
        this._style2.fontSize = size
        this._render()
    }
    get iconSize() { return this._style2.fontSize }

    set spaceBetween(space) {
        if( this._options.includes("right") ) return
        this._style1.marginLeft = space
        this._render()
    }
    get spaceBetween() { return this._style1.marginLeft }

    set textPosition( pos ) {
        this._labelPlacement = pos ? pos.toLowerCase() : "right"
        this._render()
    }
    get textPosition() {
        return this._labelPlacement
    }

    set iconPosition( pos ) {
        pos = pos ? pos.toLowerCase() : "left"
        this._labelPlacement = pos == "left" ? "right" : "left"
        this._render()
    }
    get iconPosition() {
        return this._labelPlacement == "left" ? "right" : "left"
    }

    set color( color ) {
        this._props.color = color ? color.toLowerCase() : "default"
        this._render()
    }
    get color() { return this._props.color }

    set outlined( value ) {
        this._paperProps.variant = value ? "outlined" : "elevation"
        this._render()
    }
    get outlined() {
        return this._paperProps.variant == "outlined"
    }

    /** ### setCornerRadius
     * Sets the corner radius of the checkbox group.
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

    /** ### setItemPadding
     * Sets the padding of the checkbox item. See `itemPadding` property for equivalent setter/getter property.
     * $$ ckg.setItemPadding(left, top, right, bottom, mode) $$
     * @param {Number} left Left padding of the checkbox item.
     * @param {Number} top Top padding of the checkbox item.
     * @param {Number} right Right padding of the checkbox item.
     * @param {Number} bottom Bottom padding of the checkbox item.
     * @param {String} mode Unit of measurement. Can be `rem`, `px`, `%`, or `v` for viewport.
     */
    setItemPadding(left, top, right, bottom, mode="rem") {
        mode = mode.toLowerCase();
        this._itemPad.paddingLeft = mode == "v" ? (left+"vw") : (left+mode);
        this._itemPad.paddingTop = mode == "v" ? (top+"vh") : (top+mode);
        this._itemPad.paddingRight = mode == "v" ? (right+"vw") : (right+mode);
        this._itemPad.paddingBottom = mode == "v" ? (bottom+"vw") : (bottom+mode);
        this._itemPad.mode = mode;
        this._render();
    }
    set itemPadding( val ) { this.setItemPadding(...val) }
    get itemPadding() { return this._itemPad }
}

/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize checkbox items
        this.items = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add a checkbox group to the main layout.
        this.ckg = ui.addCheckboxGroup(this.main, this.items)

        // Add a callback handler for `onTouch` event
        this.ckg.setOnTouch( this.onTouch )
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
    }
}
 */

/**
@sample Colors
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.childSpacing = "evenly"

        // Initialize the checkbox items
        var list = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add a default CheckboxGroup to the main layout
        this.ckg1 = ui.addCheckboxGroup(this.main, list)
        this.ckg1.setOnTouch( this.onTouch )

        // Add a primary CheckboxGroup to the main layout
        this.ckg2 = ui.addCheckboxGroup(this.main, list, "Primary")
        this.ckg2.setOnTouch( this.onTouch )

        // Add a secondary CheckboxGroup to the main layout
        this.ckg3 = ui.addCheckboxGroup(this.main, list, "Secondary")
        this.ckg3.setOnTouch( this.onTouch )
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
    }
}
 */

/**
@sample Elevated
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the checkbox list items
        var list = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add an elevated checkbox group to the main layout.
        this.ckg = ui.addCheckboxGroup( this.main, list, "Elevated,Secondary", 0.6)

        // Set the label of the CheckboxGroup
        this.ckg.label = "Select as many as you can"

        // Set the elevation of the CheckboxGroup container
        this.ckg.elevation = 4

        // Add a callback handler for `onTouch` event
        this.ckg.setOnTouch( this.onTouch )
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
    }
}
 */

/** 
@sample Outlined
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the checkbox items
        var list = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add an outlined checkbox group to the main layout.
        this.ckg = ui.addCheckboxGroup( this.main, list, "Outlined,Secondary", 0.9 )
        this.ckg.setOnTouch( this.onTouch )

        // Set the label of the CheckboxGroup items
        this.ckg.label = "Select as many as you can"

        // Set the cornerRadius to `20`
        this.ckg.cornerRadius = 20
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
    }
}
 */