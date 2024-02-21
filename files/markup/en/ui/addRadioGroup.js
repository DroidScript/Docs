
/** # RadioGroup
 * @abbrev rdg
 * Adds a radiogroup component into your app.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs A RadioGroup in mobile UI design is a grouping of radio buttons that allows users to select a single option from a set. In Material Design, RadioGroups help organize and present related choices with a consistent appearance, providing an intuitive and visually cohesive way for users to make selections within a mobile application. Add a radigroup into your app using the `addRadioGroup` method like this:
 * $$ rdg = ui.addRadioGroup(parent, list, options, width, height) $$
 * @param {Object} parent The parent where to add the RadioGroup component.
 * @param {Array} list The list items array.
 * @param {String} options A comma separated options.\nRadio Sizes: `Small`, `Medium`\nTheme Colors: `Primary`, `Secondary`, Default\nIcon Position: `Left`, `Right`\nContainer: `Elevated`, `Outlined`\nCorner: `Square`\nUtils: `Required`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object RadioGroup
 * Pass `required` as option to have atleast one value selected.
 */

ui.addRadioGroup = function(parent, list, options, width, height)
{
    return new ui.RadioGroup(parent, list, options, width, height)
}

ui.RadioGroup = class extends ui.Control
{
    constructor(parent, list, options, width, height)
    {
        super(parent, width, height, options, "RadioGroup")
        this._list = list || [];
        if( typeof(list) == "string" ) this._list = list.split(",");
        else if( typeof(list) == "object" ) this._list = JSON.parse(JSON.stringify(list));
        this._label = ""
        this._disabled = new Array( this._list.length ).fill( false )
        this._labelPlacement = "right"
        this._style1 = {}
        this._style2 = {}
        this._radProps = {}
        this._paperProps = {}
        this._itemPad = {}
        this._props.value = null
        this._initProps()
        this._initStyle()
        this._render()
    }

    _initProps()
    {
        this._radProps.size = this._options.includes( "small" ) ? "small" : "medium"
        this._radProps.color = _color( this._options )
        this._paperProps.square = this._options.includes("square")
        this._paperProps.variant = this._options.includes("outline") ? "outlined" : "elevation"
        this._paperProps.elevation = this._options.includes("elevate") ? 1:0
        this._props.value = this._options.includes("required") ? (this._props.value||0) : null
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
            paddingLeft: this._labelPlacement == "right" ? "0.6rem" : "1.1rem",
            paddingTop: "0.3rem",
            paddingRight: this._labelPlacement == "left" ? "0.6rem" : "1.1rem",
            paddingBottom: "0.3rem"
        }
    }

    //Invisible methods
    _onChange( event )
    {
        this._props.value = parseInt( event.target.value )
        if( this._change ) {
            this._change(this._list[this._props.value], this._props.value)
        }
        this._render()
    }
    _onClick( item, i, e )
    {
        if( this._touch ) this._touch(this._props.value!==i, item, i, this._getEventObject(e, null, null, "touch"));
        if(this._props.value === i && !this._options.includes("required")) {
            this._props.value = -1
            this._render()
        }
    }
    _onContextMenu( label, index, event )
	{
        if( this._ctxMenu ) {
            this._ctxMenu(label, index, this._getEventObject(event, null, null, "contextmenu"))
            var e = event || window.event
            e.preventDefault && e.preventDefault()
            e.stopPropagation && e.stopPropagation()
            e.cancelBubble = true
            e.returnValue = false
            return false
        }
	}
    // Render methods
    _render()
    {
        let e = React.createElement;
        let {FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, Paper} = window['MaterialUI'];
        this._ctl = e( Paper, {
            ...this._paperProps,
            style: { ...this._style }
        }, e( FormControl, {
                component: "div",
				style: { width: "100%", height: "100%" }
            },
            [
                this._label ? e( FormLabel, {
                    key: 1,
					component: "legend",
                    style: { width: "100%", textAlign: "left", margin: "20px 0px 12px 16px" }
                }, this._label) : null,
                e( RadioGroup, {
                    key: 2,
                    name: "RadioGroup-"+this._id,
                    onChange: this._onChange.bind(this),
                    ...this._props
                },
                [
                    this._list.map( (t, i) => {
                        return e( FormControlLabel, {
                            key: i,
                            value: i,
                            label: e("span", {style:{...this._style1}}, t),
                            control: e( Radio, {
                                ...this._radProps,
                                value: i,
                                name: t,
                                disabled: this._disabled[i],
                                style: {...this._style2},
                                onClick: platform.ios ? null : this._onClick.bind(this, t, i),
                                onTouchEnd: platform.ios ? this._onClick.bind(this, t, i) : null
                            }, null ),
                            labelPlacement: this._labelPlacement=="left" ? "start" : "end",
                            style: {
                                boxSizing: "border-box",
                                display: "flex",
                                width: "100%",
                                justifyContent: this._labelPlacement=="left" ? "space-between" : "flex-start",
                                marginLeft: 0,
                                ...this._itemPad
                            },
                            onContextMenu: this._onContextMenu.bind( this, t, i )
                        }, null )
                    })
                ] )
            ]
        ))
        ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
    }

    /** ## Properties ##
     * Here are the available setters and getter of the RadioGroup Component.
     * @prop {Number} value Sets or returns the value of the RadioGroup Component as an index of the selected item.
     * @prop {String} label Sets or returns the label text of the RadioGroup Component.
     * @prop {Array} list Sets or returns the list array. You can also pass a comma separated string of items.
     * @prop {String} radioSize Sets or returns the size of the radio button. Values can be `Small` or `Medium`
     * @prop {String} color Sets or returns the theme color of the Radio Component. Values can be `Default` `Primary` or `Secondary`
     * @prop {Number} elevation Sets or returns the depth of the RadioGroup container. Value ranges from 0 to 24.
     * @prop {String} iconColor Sets or returns the icon color in hexadecimal format.
     * @prop {Number} spaceBetween Sets or returns the space between the radio button and the text.
     * @prop {Boolean} disabled Sets or returns the disabled state of the radio button group.
     * @prop {String} iconPosition Sets or returns the position of the icon. Values can be `left` or `right`
     * @prop {String} textPosition Sets or returns the position of the label text. Values can be `left` or `right`. 
     * @prop {Boolean} outlined Sets or returns whether the container is outlined or elevated.
     * @prop {String} textColor Stest or returns the color of the text in hexadecimal format. You can also pass color names e.g. `red`, `green` or `blue`. 
     * @prop {Array} itemPadding Sets or returns the padding of each radio item. See also `setItemPadding` method.
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

    /** ## Methods
     * Here are the available methods available to RadioGroup Component.
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

    /** ### setOnChange
     * Call a function when the value of the radio group has changed.
     * $$ rdg.setOnChange( callback ) $$
     * @param {Function} callback The callback function. ---> @arg {String} text The radio item label text. @arg {Number} index The index of the selected item.
     */
    
    setOnChange( callback ) { this._change = callback; }

    /** ### setOnTouch
     * Adds a callback function when an item is click.
     * $$ rdg.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Boolean} checked The checked state of the radio item. @arg {String} label The radio item label text. @arg {Number} index  The index of the radio item. @arg {Object} pos The position of the touch event.
     */
    
    getValue() { return this._props.value }
    setValue( index ) {
        if( typeof(index)=="string" ) {
            index = this._list.findIndex( m => m.includes(index.trim()) )
        }
        this._props.value = index
        this._render()
    }
    get value() { return this._props.value }
    set value( val ) {
        if( typeof(val)=="string" ) {
            val = this._list.findIndex( m => m.includes(val.trim()) )
        }
        this._props.value = val
        this._render()
    }

    setLabel( val ) { 
        this._label = val
        this._render()
    }
    getLabel() { return this._label }
    set label( val ) {
        this._label = val
        this._render()
    }
    get label() { return this._label }

    /** ### setList
     * Sets the the radiogroup list items.
     * $$ rdg.setList( val ) $$
     * @param {String} val A comma separated items
     */
    setList( val ) {
        this._list = val || [];
        if( typeof(val) == "string" ) this._list = val.split(",");
        else if( typeof(val) == "object" ) this._list = JSON.parse(JSON.stringify(val));
        this._disabled = new Array(this._list.length).fill(false);
        this._props.value = null;
        this._render();
    }
    getList() { return this._list }
    set list( val ) {
        this._list = val || [];
        if( typeof(val) == "string" ) this._list = val.split(",");
        else if( typeof(val) == "object" ) this._list = JSON.parse(JSON.stringify(val));
        this._disabled = new Array(this._list.length).fill(false);
        this._props.value = null;
        this._render();
    }
    get list() { return this._list }

    /** ### setItemByIndex
     * Sets an item in the radiogroup component.
     * $$ rdg.setItemByIndex( index, text ) $$
     * @param {String} item The new item name to be displayed
     * @param {Number} index The index to of the item to be updated
     */
    setItemByIndex( index, name )
    {
        this._list[index] = name
        this._render()
    }

    /** ### setItemByName
     * Updates an item in the list by its corresponding name.
     * $$ rdg.setItemByName( name, text ) $$
     * @param {String} name The name of the item.
     * @param {String} text The new text to replaced the name of the item.
     */
    setItemByName( name, newName )
    {
        var index = this._list.indexOf( name )
        this._list[index] = newName
        this._render()
    }

    /** ### addItem
	 * Adds an item in the radio group list.
	 * $$ rdg.addItem( name, index ) $$
	 * @param {String} name The new item to be added.
	 * @param {Number} index The index in which to add the item.
	 */
	addItem( name, index )
	{
		if( typeof( index ) != "number" )
        {
            this._list.push( name )
            this._disabled.push( false )
        }
		else
        {
            this._list.splice( index, 0, name )
            this._disabled.splice( index, 0, false )
        }
		this._render()
	}

    /** ### removeItemByIndex
	 * Removes an item in the radiogroup items list by its index.
	 * $$ rdg.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the item to remove.
	 */
	removeItemByIndex( index )
	{
		this._list.splice( index, 1 )
        this._disabled.splice( index, 1 )
		this._render()
	}

	/** ### removeItemByName
	 * Removes an item in the radiogroup items list by its name.
	 * $$ rdg.removeItemByName( name ) $$
	 * @param {String} name The name of the item to remove.
	 */
	removeItemByName( name )
	{
		var index = this._list.indexOf( name )
		this.removeItemByIndex( index )
	}

	/** ### popItem
	 * Removes the last item in the radiogroup. This will return the item being removed.
	 * $$ rdg.popItem() $$
	 */
	popItem()
	{
        let item = this._list[this._list.length - 1];
		this.removeItemByIndex(this._list.length - 1);
        return item;
	}
 
	 /** ### shiftItem
	  * Removes the first item in the radiogroup. This will return the item being removed.
	  * $$ rdg.shiftItem() $$
	  */
	shiftItem() {
        let item = this._list[0];
        this.removeItemByIndex(0);
        return item;
    }

    setRadioSize( size )
    {
        this._radProps.size = size ? size.toLowerCase() : "medium"
        this._render()
    }
    getRadioSize() { return this._radProps.size }
    set radioSize( size ) {
        this._radProps.size = size ? size.toLowerCase() : "medium"
        this._render()
    }
    get radioSize() { return this._radProps.size }

    setColor( color )
    {
        this._radProps.color = color ? color.toLowerCase() : "secondary"
        this._render()
    }
    getColor() { return this._radProps.color }
    set color( color ) {
        this._radProps.color = color ? color.toLowerCase() : "secondary"
        this._render()
    }
    get color() { return this._radProps.color }

    /** ### setEnabled
	 * Enable or disable the radiogroup or an item in the radiogroup.
	 * $$ rdg.setEnabled( index, value ) $$
	 * @param {Number} index The index of the item.
	 * @param {Boolean} value Values can be `true` or `false`. If `false`, the item will be disabled.
	 */
    setEnabled( index, value )
    {
        if( typeof(index)=="boolean" ) this._disabled.fill( !index )
        else if( typeof(value)!=="boolean" ) return
		else this._disabled[index] = !value
		this._render()
    }

    /** ### getEnabled
     * Get the enabled state of an item in the radio group.
     * $$ rdg.getEnabled( index ) $$
     * @param {Number} index The index of the corresponding item.
     * @returns Boolean
     */
    getEnabled( index ) {
        if( typeof(index)!="number" || index<0 ) return null
        return !this._disabled[index]
    }

    /** ### setEnabledByName
     * Enable or disable a radiogroup item by its name.
     * $$ rdg.setEnabledByName( name, value ) $$
     * @param {String} name The radiogroup text.
     * @param {Boolean} value Values can be `true` or `false`.
     */
    setEnabledByName( name, value ) {
        if( typeof(name)!="string" || typeof(value)!="boolean" ) return
        var index = this._list.findIndex( m => m.includes(name.trim()) )
        this._disabled[index] = !value
        this._render()
    }

    /** ### getEnabledByName
     * Get the enabled state of a radiogroup item by its name.
     * $$ rdg.getEnabledByName( name ) $$
     * @param {String} name The radiogroup text.
     * @returns Boolean
     */
    getEnabledByName( name ) {
        if( typeof(name)!="string" ) return null
        var index = this._list.findIndex( m => m.includes(name.trim()) )
        return !this._disabled[index]
    }

    set disabled( value ) {
        this._disabled.fill( value )
        this._render()
    }
    get disabled() {
        return this._disabled.every( m => m===true )
    }

    /** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ rdg.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} label The list item label text. @arg {Number} index The index of the corresponding radio item. @arg {Object} pos The position of the touch event.
     */

    setElevation( num )
    {
        this._paperProps.elevation = num;
        this._render();
    }
    getElevation() { return this._paperProps.elevation; }
    set elevation( num )
    {
        this._paperProps.elevation = num;
        this._render();
    }
    get elevation() { return this._paperProps.elevation; }

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
        this._style1.fontSize = size;
        this._render();
    }
    get textSize() { return this._style1.fontSize }

    set textColor( color ) {
        this._style1.color = color;
        this._render();
    }
    get textColor() { return this._style1.color; }

    set iconColor(color) {
        this._style2.color = color
        this._render()
    }
    get iconColor() { return this._style2.color }

    set spaceBetween(space) {
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

    set outlined( value ) {
        this._paperProps.variant = value ? "outlined" : "elevation"
        this._render()
    }
    get outlined() {
        return this._paperProps.variant == "outlined"
    }

    /** ### setCornerRadius
     * Sets the corner radius of the radiogroup container.
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
     * Sets the padding of the radio item. See `itemPadding` property for equivalent setter/getter property.
     * $$ rdg.setItemPadding(left, top, right, bottom, mode) $$
     * @param {Number} left Left padding of the radio item.
     * @param {Number} top Top padding of the radio item.
     * @param {Number} right Right padding of the radio item.
     * @param {Number} bottom Bottom padding of the radio item.
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
@sample Basic radiogroup
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add a radiogroup control to the main layout
        this.rdg = ui.addRadioGroup(this.main, items)

        // Add a callback handler when the value changes
        this.rdg.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */

/**
@sample Elevated secondary radiogroup
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add an elevated radiogroup control to the main layout
        this.rdg = ui.addRadioGroup(this.main, items, "Elevated,Secondary", 0.6)

        // Set the label text of the radiogroup
        this.rdg.label = "Select one"

        // Set the elevation depth
        this.rdg.elevation = 4

        // Add a callback handler when the value changes
        this.rdg.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */

/**
@sample Outlined and radios to the right
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add an outlined radiogroup control to the main layout
        // Passing `Right` will display the radios to the right
        this.rdg = ui.addRadioGroup( this.main, items, "Outlined,Primary,Right", 0.6)

        // Set the label text of the radiogroup
        this.rdg.label = "Select one"

        // Set the corner radius to 12
        this.rdg.cornerRadius = 12

        // Add a callback handler when the value changes
        this.rdg.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */