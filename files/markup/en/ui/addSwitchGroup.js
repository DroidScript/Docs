
/** # SwitchGroup
 * @abbrev swg
 * In UI development, a SwitchGroup refers to a collection or grouping of individual switches.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs Such a grouping is used to represent related settings or options that can be toggle on or off. Add a switchgroup into your app using the `addSwitchGroup` method like this:
 * $$ swg = ui.addSwitchGroup(parent, list, options, width, height) $$
 * @param {Object} parent The parent layout where to add the SwitchGroup Component.
 * @param {Array} list The list items array whose elements can be `String` if items is text only, or `Array` of the form `[ "icon", "label" ]` if items is icon and text.
 * @param {String} options A comma separated options.\nIcon: `Icon`\nColor: `Primary`, `Secondary`\nContainer: `Elevated`, `Outlined`\nCorner: `Square`\nList divider: `Divider`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object SwitchGroup
 */
ui.addSwitchGroup = function(parent, list, options, width, height)
{
    return new ui.SwitchGroup(parent, list, options, width, height)
}

ui.SwitchGroup = class extends ui.Control
{
    constructor(parent, list, options, width, height)
    {
        super(parent, width, height, options, "SwitchGroup")
        this._list = list || [];
        if( typeof(list) == "string" ) this._list = list.split(",");   // "Title1:Icon1,Title2:Icon2..."
        else if( typeof(list) == "object" ) this._list = JSON.parse(JSON.stringify(list));
        this._label = ""
        this._checked = []
        this._icon = false
        this._disabled = new Array( this._list.length ).fill( false )
        this._iconProps = {}
        this._textProps = {}
        this._paperProps = {}
        this._style1 = {}
        this._style2 = {}
        this._style3 = {}
        this._itemPad = {}
        this._divider = false
        this._props.edge = "end"
        this._initProps()
        this._initStyle()
        this._formatList()
        this._render()
    }

    //Invisible methods
    _initProps()
    {
        this._props.color = _color(this._options)
        this._props.edge = "end"
        this._icon = this._options.includes( "icon" )
        this._paperProps.square = this._options.includes("square")
        this._paperProps.variant = this._options.includes("outline") ? "outlined" : "elevation"
        this._paperProps.elevation = this._options.includes("elevate") ? 1:0
        this._divider = this._options.includes("divider")
    }

    _initStyle()
    {
        this._style.width = "100%"
		this._style.height = "100%"

        this._itemPad = {
            paddingLeft: "1rem",
            paddingTop: "0.5rem",
            paddingRight: "1rem",
            paddingBottom: "0.5rem"
        }
    }

    _formatList()
    {
        this._list = this._list.map( el => {
            // string
            if(this._icon && typeof el == "string") return ["", el]
            // array of one value
            else if(this._icon && el.length == 1) return ["", el[0]]
            return el
        })
    }
    _onChange( item, index, event )
    {
        this._checked[ index ] = event.target.checked;
        if( this._touch ) this._touch(item, this._checked[index], index, this._getEventObject(event, null, null, "touch") );
        if( this._change ) {
            //this._change( item, this._checked[ index ], index );
            let c = this._checked.reduce((q, v, n) => {
                if (v) q.push(n)
                return q;
            }, []);
            let d = c.map(m => this._icon ? this._list[m][1] : this._list[m])
            this._change(d, c)
        }
        this._render();
    }

    _onContextMenu( text, index, event )
	{
        if( this._ctxMenu ) {
            this._ctxMenu( text, index, this._getEventObject(event, null, null, "contextmenu") )
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
        let e = React.createElement
        let {List, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, ListSubheader, Switch, Icon, Paper} = window['MaterialUI']
        this._ctl = e( Paper, {
            ...this._paperProps,
			style: { ...this._style }
        }, e( List, {
                subheader: e( ListSubheader, {style:{...this._style3}}, this._label ),
                style: { width: "100%", height: "100%", paddingTop: "8px" }
            }, [
                this._list.map( ( str, i ) => {
                    var labID = this._icon ? str[1] : str
                    labID = labID.toLowerCase().replace( / /gi, "" )
                    return e( ListItem, {
                            key: i,
                            onContextMenu: this._onContextMenu.bind(this, (this._icon?str[1]:str), i),
                            divider: this._divider,
                            //button: true
                            style: { ...this._itemPad }
                        }, [
                            this._icon && e( ListItemIcon, {
                                key: 0
                            }, e( Icon, { ...this._iconProps, style:{...this._style2} }, str[0] ) ),
                            e( ListItemText, {
                                key: 1,
                                id: "switch-list-label-"+labID,
                                primary: this._icon ? str[1] : str,
                                primaryTypographyProps: {
                                    ...this._textProps,
                                    style: {...this._style1}
                                }
                            }, null ),
                            e( ListItemSecondaryAction, {
                                key: 2,
                                style: { right: this._itemPad.paddingRight }
                            }, e( Switch, {
                                    ...this._props,
                                    inputProps: { 'aria-labelledby': 'switch-list-label-'+labID },
                                    onChange: this._onChange.bind( this, this._icon?str[1]:str, i ),
                                    checked: this._checked[i] ? true : false,
                                    disabled: this._disabled[i],
                                    
                                }, null ) )
                        ]
                    )
                })
            ]
        ))
        ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
    }

    /** ## Properties
     * Here are the available setter and getter properties of the SwitchGroup Component.
     * @prop {String} label Sets or returns the label text.
     * @prop {Array} list Sets or returns the list items. You can also pass a comma separated string of items.
     * @prop {String} edge Sets or returns the edge position of the toggle. Values can be `Start` `End` or `False`
     * @prop {String} color Sets or returns the theme color. Values can be `Default` `Primary` or `Secondary`
     * @prop {String} iconColor Sets or returns the theme color `Primary` `Secondary` or `Default`. You can also pass a hexadecimal color of the form `#rrggbb`
     * @prop {String} textColor Sets or returns the theme color `primary` or `secondary`. You can also pass a hexadecimal color of the form `#rrggbb`
     * @prop {Number} elevation Sets or returns the depth of the control container. Value ranges from 0 to 24.
     * @prop {Number} iconSize Sets or returns the size of the icon.
     * @prop {String} labelColor Sets or returns the color of the label text in hexadecimal format.
     * @prop {Number} labelSize Sets or returns the size of the label text.
     * @prop {Boolean} outlined Sets or returns whether the container is outlined or elevated.
     * @prop {Array} itemPadding Sets or returns the padding of each switch item. See also `setItemPadding` method.
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
     * Here the methods available for the SwitchGroup Component.
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
	 * Sets a callback function when the switch item is touch.
	 * $$ swt.setOnTouch( callback ) $$
	 * @param {Function} callback The function to be called. ---> @arg {String} text The switch item label text. @arg {Boolean} value The checked state of the switch item. @arg {Number} index The index of the corresponding switch item. @arg {Object} pos The position of the touch event.
	 */

    /** ### setOnChange
     * Adds a callback function to be called whent there is a change of value.
     * $$ swt.setOnChange(callback) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Array} indexes An array of indexes corresponding to the checked switch items. @arg {Array} items An array of switchgroup items corresponding to the checked switch items.
     */
    setOnChange( callback ) { this._change = callback }

    setLabel( val ) { this._label = val; this._render(); }
    getLabel() { return this._label; }
    set label( val ) { this._label = val; this._render(); }
    get label() { return this._label; }

    /** ### setValueByIndex
     * Sets the value of the corresponding item in the list.
     * $$ swg.setValueByIndex(index, val) $$
     * @param {Number} index The index of the corresponding item.
     * @param {Boolean} val A Values can be `true` or `false`
     */
    setValueByIndex(index, val) { this._checked[index] = val; this._render(); }

    /** ### getValueByIndex
     * Returns whether an item is check or unchecked.
     * $$ swg.getValueByIndex(index) $$
     * @param {Number} index The index of the corresponding item.
     * @returns Boolean
     */
    getValueByIndex(index) { return this._checked[index]; }

    /** ### setList
     * Updates the list on the switchgroup component.
     * $$ swg.setList( lst ) $$
     * @param {Array} lst The list array or a comma separated list.
     */
    setList( list )
    {
        this._list = list || [];
        if( typeof(list) == "string" ) this._list = list.split(",").map(m => m.split(":"));
        else if( typeof(list) == "object" ) this._list = JSON.parse(JSON.stringify(list));
        this._checked = [];
        this._disabled = new Array(this._list.length).fill(false);
        this._render();
    }
    getList() { return this._list }
    set list( list ) {
        this._list = list || [];
        if( typeof(list) == "string" ) this._list = list.split(",").map(m => m.split(":"));
        else if( typeof(list) == "object" ) this._list = JSON.parse(JSON.stringify(list));
        this._checked = [];
        this._disabled = new Array(this._list.length).fill(false);
        this._render();
    }
    get list() { return this._list; }

    /** ### addItem
     * Adds or insert an item in the SwitchGroup list.
     * $$ swg.addItem( title, icon, value, index ) $$
     * @param {String} title The title text.
     * @param {String} icon Material icon font.
     * @param {Boolean} value The value of the item.
     * @param {Number} index The index in which to insert the item. Default is at the bottom of the list.
     */
    addItem( title, icon, value, index ) {
        var item = this._icon ? [ icon, title ] : title
        if( typeof( index ) == "number" )
        {
            this._list.splice( index, 0, item )
            this._checked.splice( index, 0, value )
            this._disabled.splice( index, 0, false )
        }
        else
        {
            this._list.push( item )
            this._checked.push( value )
            this._disabled.push( false )
        }
        this._render()
    }

    /** ### removeItemByIndex
     * Removes an item in the SwitchGroup by its index.
     * $$ swg.removeItemByIndex( index ) $$
     * @param {Number} index The index of the corresponding item to remove.
     */
    removeItemByIndex( index )
    {
        this._list.splice( index, 1 )
        this._checked.splice( index, 1 )
        this._disabled.splice( index, 1 )
        this._render()
    }

    /** ### removeItemByName
     * Removes an item in the SwitchGroup component by its title name.
     * $$ swg.removeItemByName( title ) $$
     * @param {String} title The title text of the SwitchGroup item.
     */
    removeItemByName( title )
    {
        var index = this._list.findIndex( item => {
            return typeof( item ) == "string" ? item == title : item[0] == title
        })
        this.removeItemByIndex( index )
    }

    /** ### popItem
     * Removes the last item in the SwitchGroup list. This will return the item being removed.
     * $$ swg.popItem() $$
     */
    popItem()
    {
        let item = this._list[this._list.length - 1];
        this.removeItemByIndex(this._list.length - 1);
        return item;
    }

    /** ### shiftItem
     * Removes the first item in SwitchGroup list. This will return the item being removed.
     * $$ swg.shiftItem() $$
     */
    shiftItem()
    {
        let item = this._list[0];
        this.removeItemByIndex(0);
        return item;
    }

    setEdge( edge ) { this._props.edge = edge.toLowerCase(); this._render(); }
    getEdge() { return this._props.edge; }
    set edge( edge ) { this._props.edge = edge.toLowerCase(); this._render(); }
    get edge() { return this._props.edge; }

    setColor( color ) { this._props.color = color.toLowerCase(); this._render(); }
    getColor() { return this._props.color; }
    set color( color ) { this._props.color = color.toLowerCase(); this._render(); }
    get color() { return this._props.color; }

    /** ### setEnabled
	 * Enable or disable an item in the switchgroup component.
	 * $$ swt.setEnabled( index, value ) $$
	 * @param {Number} index The index of the corresponding item in the list. You can also pass `Boolean` to enable or disable the switchgroup component.
	 * @param {Boolean} value Values can be `true` or `false`.
	 */
    setEnabled( index, value )
    {
        if( typeof(index)=="boolean" ) this._disabled.fill(!index)
        else if( typeof(value)!="boolean" ) return
        else this._disabled[index] = !value
        this._render()
    }

    /** ### getEnabled
     * Get the enabled state of an item in the switch group.
     * $$ swt.getEnabled( index ) $$
     * @param {Number} index The index of the corresponding item in the switch group.
     * @returns Boolean
     */
    getEnabled( index ) {
        if( typeof(index)!="number" || index<0 ) return null
        return !this._disabled[index]
    }

    set disabled( value ) {
        if( typeof(value)!=="boolean" ) return
        this._disabled.fill( value )
        this._render()
    }
    get disabled() {
        return this._disabled.every( m => m===true )
    }

    setIconColor( color )
    {
        color = color ? color.toLowerCase() : ""
        if( color.includes( "primar" ) ) this._iconProps.color = "primary"
        else if( color.includes( "second" ) ) this._iconProps.color = "secondary"
        else this._style2.color = color
        this._render()
    }
    set iconColor( color )
    {
        color = color.toLowerCase()
        if( color.includes( "primar" ) ) this._iconProps.color = "primary"
        else if( color.includes( "second" ) ) this._iconProps.color = "secondary"
        else this._style2.color = color
        this._render()
    }
    get iconColor() { return this._style2.color || this._iconProps.color }

    setTextColor( color )
    {
        color = color ? color.toLowerCase() : ""
        if( color.includes( "primar" ) ) this._textProps.color = "primary"
        else if( color.includes( "second" ) ) this._textProps.color = "secondary"
        else this._style1.color = color
        this._render()
    }
    set textColor( color )
    {
        color = color.toLowerCase()
        if( color.includes( "primar" ) ) this._textProps.color = "primary"
        else if( color.includes( "second" ) ) this._textProps.color = "secondary"
        else this._style1.color = color
        this._render()
    }
    get textColor() { return this._style1.color || this._textProps.color }

    set textSize(size) {
        this._style1.fontSize = size
        this._render()
    }
    get textSize() { return this._style1.fontSize }

    set iconSize(size) {
        this._style2.fontSize = size
        this._render()
    }
    get iconSize() { return this._style2.fontSize }

    set labelColor(color) {
        this._style3.color = color
        this._render()
    }
    get labelColor() { return this._style3.color }

    set labelSize(size) {
        this._style3.fontSize = size
        this._render()
    }
    get labelSize() { return this._style3.fontSize }

    /** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ swt.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} text The label text of the switchgroup item. @arg {Number} index The index of the corresponding switchgroup item. @arg {Object} pos The position of the touch event.
     */

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

    set outlined( value ) {
        this._paperProps.variant = value ? "outlined" : "elevation"
        this._render()
    }
    get outlined() { return this._paperProps.variant == "outlined" }

    /** ### setCornerRadius
     * Sets the corner radius of the switchgroup container.
     * $$ swt.setCornerRadius(tl, tr, bl, br, mode) $$
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
     * Sets the padding of the switch item. See `itemPadding` property for equivalent setter/getter property.
     * $$ swt.setItemPadding(left, top, right, bottom, mode) $$
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
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var items = ["This is item 1", "This is item 2", "This is item 3"]

        // Add a switchgroup control to the main layout.
        this.swg = ui.addSwitchGroup(this.main, items, "Secondary", 0.9)

        // Add a callback handler when the switchgroup item is touch
        this.swg.setOnTouch( this.onTouch )
    }

    onTouch(item, value)
    {
        ui.showPopup(item + " : "  + value)
    }
}
 */

/**
@sample SwitchGroup with leading icons
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items with leading icon
        var items = [ 
            ["music_note", "Enable Sound"],
            ["bluetooth", "Enable Bluetooth"],
            ["wifi", "Enable Wifi"]
        ]

        // Add a switchgroup control to the main layout.
        this.swg = ui.addSwitchGroup(this.main, items, "Secondary,Icon", 0.9)

        // Set the label text of the switchgroup control
        this.swg.label = "Settings"

        // Add a callback handler when the switchgroup item is touch
        this.swg.setOnTouch( this.onTouch )
    }

    onTouch(item, value)
    {
        ui.showPopup(item + " : "  + value)
    }
}
 */

/**
@sample  With custom styles
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items with leading icon
        var items = [ 
            ["music_note", "Enable Sound"],
            ["bluetooth", "Enable Bluetooth"],
            ["wifi", "Enable Wifi"]
        ]

        // Adds a switchgroup control to the main layout
        this.swg = ui.addSwitchGroup(this.main, items, "Secondary,Icon", 0.9)
        this.swg.setOnTouch( this.onTouch )

        // Set the text color to deep-purple
        this.swg.textColor = "#673ab7"

        // Set the icon color to teal
        this.swg.iconColor = "#009688"

        // Set the corner radius
        this.swg.cornerRadius = 4

        // Set the background color using rgba
        this.swg.backColor = "rgba(255, 255, 100, 255)"
    }

    onTouch( item, value )
    {
        ui.showPopup( item + " : "  + value )
    }
}
 */

/**
@sample Elevated switchgroup with onChange callback
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items to be displayed
        var items = ["This is item 1", "This is item 2", "This is item 3"]

        // Adds a switchgroup control to the main layout
        this.swg = ui.addSwitchGroup( this.main, items, "Secondary,Elevated", 0.9 )
        this.swg.label = "My label"
        this.swg.elevation = 4

        // Add a callback handler when the value of switchgroup changes
        this.swg.setOnChange( this.onChange )
    }

    onChange(items, indexes)
    {
        ui.showPopup( items.join(", ") )
    }
}
 */

/**
@sample Outlined switchgroup
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize switchgroup items to be displayed
        var items = ["This is item 1", "This is item 2", "This is item 3"]

        // Adds a switchgroup control to the main layout
        this.swg = ui.addSwitchGroup( this.main, items, "Primary,Outlined", 0.9)
        this.swg.label = "My label"
        this.swg.cornerRadius = 8

        // Add a callback handler when the value of switchgroup changes
        this.swg.setOnChange( this.onChange )
    }

    onChange(items, indexes)
    {
        ui.showPopup( items.join(", ") )
    }
}
 */