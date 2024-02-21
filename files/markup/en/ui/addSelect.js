/** # Select
 * @abbrev sel
 * Adds a Select Component to a given layout.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs This component often refers to a dropdown or picker element that allows users to choose from a list of options. Add a select into your app using the `addSelect` method like this:
 * $$ sel =  ui.addSelect(parent, list, options, width, height) $$
 * @param {Object} parent The parent layout where to add the control
 * @param {Array} list The list of items for the Select options
 * @param {String} options A comma separated options.\nSizes: `Small`, `Medium`\nVariant: `Filled`, `Outlined`, `Standard`\nMargin: `Dense`, `Normal`\nUtils: `Required`, `Multiple`, `Radio`, `Disabled`, `AutoFocus`, `FullWidth`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object Select
 * A simple list
 * $$ [ "Option 1", "Option 2", "Option 3"] $$
 * If you want a list with groupings, you can add a colon `:` before each item text to display as group name. Below is an example
 * $$ [":Group 1", "Option 1", "Option 2", ":Group 2", "Item 1", "Item 2"] $$
 */
ui.addSelect = function( parent, list, options, width, height )
{
	return new ui.Select( parent, list, options, width, height )
}

ui.Select = class extends ui.Control
{
	constructor(parent, list, options, width, height)
	{
        super(parent, width, height, options, "Select")
        this._list = list || [];
        if(typeof list == "string") this._list = list.split(",").map(m => m.trim());
        else if(typeof list == "object") this._list = JSON.parse(JSON.stringify(list));
        this._formProps = {
            style: {width:"100%"},
            error: false
        }
        this._style1 = {}
        this._style2 = {}
        this._style3 = {position: "relative"}
        this._props.id = "id-"+this._id
        this._props.labelId = "id-"+this._id+"-label"
        this._formatList()
        this._props.MenuProps = {
            PaperProps: {
                style: { width: 250 }
            }
        };
        this._disabledItems = [];
        this._initProps();
        this._initStyle();
		this._render();
	}

    _formatList() {
        this.__l = {}
        this.__la = []
        var j = 0
        for( var i=0; i<this._list.length; i++ )
        {
            var h = this._list[i]
            if( h.includes(":") ) j++
            else this.__l[h] = j
        }
    }
    _initProps()
    {
        this._props.value = this._options.includes('multiple') ? [] : ""
        this._props.multiple = this._options.includes('multiple')

        if( this._props.multiple ) this._props.renderValue = selected => selected.join(', ')
        else if( this._options.includes("radio") ) this._props.renderValue = selected => selected
        
        this._formProps.variant = this._variant()
        this._formProps.size = this._options.includes( "small" ) ? "small" : "medium"
        this._formProps.required = this._options.includes('required')
        this._formProps.disabled = this._options.includes('disabled')
        this._formProps.focused = this._options.includes( 'autofocus' )
        this._formProps.fullWidth = this._options.includes( 'fullwidth' )
        this._formProps.margin = this._options.includes( "dense" ) ? "dense" : ( this._options.includes( "normal" ) ? "normal" : "none" )
        this._formProps.color = this._options.includes( "secondary" ) ? "secondary" : "primary"
    }

    _initStyle() {
        this._div.style.display = "inline-flex"
        this._div.style.alignItems = "center"
        if( this._fontName ) this._style1.fontFamily = this._fontName;
    }

    _variant()
    {
        if(this._options.includes("fill")) return "filled"
        if(this._options.includes("outline")) return "outlined"
        else return "standard"
    }
    _onChange( e, child )
    {
        var v = e.target.value
        if( this._props.multiple && this._options.includes("radio") )
        {
            var a = child.props.value
            var b = this.__la[this.__l[a]]
            if(child.props.children[0] && !child.props.children[0].props.checked ) {
                if( b ) v.splice( v.indexOf(b), 1 )
                this.__la[ this.__l[a] ] = a
            }
            else this.__la.splice(this.__l[a], 1)
        }
        this._props.value = v;
        if( this._change ) this._change(this._props.value, this._getIndexes());
		this._render();
    }
    _getIndexes() {
        if( this._props.multiple ) return this._props.value.map(m => this._list.indexOf(m));
        else return this._list.indexOf( this._props.value );
    }
    _onClose( e ) { if( this._close ) this._close( e.target.value ); }
    _onOpen( e ) { if( this._open ) this._open(); }
    _onTouch(i, e) {
        e.stopPropagation();
        if( this._touch ) this._touch(this._list[i], i, this._getEventObject(e, null, null, "touch"));
    }

	_render()
	{
		let e = React.createElement
        let { FormControl, InputLabel, MenuItem, Checkbox, ListItemText, Select, Radio } = window['MaterialUI']
		this._ctl = e( FormControl, {
            ...this._formProps
        }, [
            e( InputLabel, { key:1, id: this._props.id+"-label" }, this._props.label ),
            e( Select, {
                    key: 2,
                    ...this._props,
                    onChange: this._onChange.bind(this),
                    style: { ...this._style },
                    onContextMenu: this._onContextMenu.bind( this ),
                    onClose: this._onClose.bind(this),
                    onOpen: this._onOpen.bind(this),
                    MenuProps: { className: "select-menu-"+this._id }
                }, [
                    this._list.map( (option, i) => {
                        option = option.trim()
                        var ctr
                        // if( option[0] == ":" )
                        //     ctr = e( ListSubheader, { style:{...this._style3} }, option.substring(1) )
                        // else {
                            
                        // }
                        var items = option
                        if( option[0] == ":" )
                            items = e( ListItemText, { key:2, primary: option.substring(1), primaryTypographyProps:{ style:{...this._style1} } } );
                        else if( this._props.multiple )
                            items = [
                                e( this._options.includes("radio") ?
                                    Radio : Checkbox,
                                    { key:1, checked: this._props.value.indexOf( option ) > -1, style:{...this._style2} } ),
                                e( ListItemText, { key:2, primary: option, primaryTypographyProps:{ style:{...this._style1} } } )
                            ]
                        else if( this._options.includes("radio") )
                            items = [
                                e( Radio, { key:1, checked: this._props.value.indexOf( option ) > -1, style:{...this._style2} } ),
                                e( ListItemText, { key:2, primary: option, primaryTypographyProps:{ style:{...this._style1} } } )
                            ]
                        ctr = e( MenuItem, {
                            key: i, value: option, style:{...this._style1},
                            disabled: option[0]==":" ? true : this._disabledItems[i],
                            onClick: platform.ios ? null : this._onTouch.bind(this, i),
                            onTouchEnd: platform.ios ? this._onTouch.bind(this, i) : null,
                        }, items )
                        
                        return ctr
                    })
                ]
            )
        ])
		ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
	}

    /** ## Properties
     * Here are the availabel setters and getter of the Select Component.
     * @prop {String} label Sets or returns the label text.
     * @prop {Array} list Sets or returns the list items. You can also pass a comma separated string of items.
     * @prop {Boolean} enabled Sets or returns a boolean value whether the component is enabled or disabled.
     * @prop {String} value Sets or returns the value of the Select Component. For Select with `Multiple` options, the `value` is an array of string items. You can also pass the `index` of the selected item. Pass an array of `indexes` for multiple selection.
     * @prop {String} variant Sets or returns the variant of the Select Component. Values can be `Standard` `Filled` and `Outlined`
     * @prop {String} sizeVariant Sets or returns the size variant of the Select Component. Values can be `Small` or `Medium`
     * @prop {String} iconColor Sets or returns the color of the icon in hexadecimal format `#rrggbb`
     * @prop {String} labelColor Sets or returns the color of the label text in hexadecimal format `#rrggbb`
     * @prop {Number} labelSize Sets or returns the size of the label.
     * @prop {String} popupColor Sets or returns the color of the popup in hexadecimal format.
     * @prop {Number} maxHeight Sets or returns the maximum height of the popup container.
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
     * Here are the methods available for the Select Component.
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
     * Adds a callback handler when the select component is touch.
     * $$ sel.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} text The text of the touched item. @arg {Number} index The index of the touched item. @arg {Object} pos The position of the touch event.
     */

    /** ### setOnChange
     * Sets a callback function when the value changes.
     * $$ sel.setOnChange( callback ) $$
     * @param {Function} callback The function to be called. ---> @arg {String} value The value of the select input. @arg {Number} index Index or indexes of the selected items.
     */
    setOnChange( callback ) { this._change = callback; }
    
    /** ### setOnOpen #
     * Sets a callback function when the menu is open.
     * $$ sel.setOnOpen( callback ) $$
     * @param {Function} callback The function to be called.
     */
    setOnOpen( callback ) { this._open = callback; }

    /** ### setOnClose
     * Sets a callback function when the menu dialog is close.
     * $$ sel.setOnClose( callback ) $$
     * @param {Function} callback The function to be called on select. ---> @arg {String} value The value of the select input.
     */
    setOnClose( callback ) { this._close = callback; }

    setLabel( val ) { this._props.label = val; this._render(); }
    getLabel() { return this._props.label; }
    set label( val ) { this._props.label = val; this._render(); }
    get label() { return this._props.label; }

    /** ### addItem
     * Adds an item on the select component options list.
     * $$ sel.addItem( item ) $$
     * @param {String} item A new item to be added.
     * @param {Number} index The index in which to add the item.
     */
    addItem( item, index )
    {
        if( typeof( index ) == "number" && index > -1 ) {
            this._list.splice( index, 0, item )
            this._disabledItems.splice( index, 0, false)
        }
        else this._list.push(item)
        this._render();
    }
    
    /** ### removeItemByIndex
     * Removes an item in the select component item list by its index.
     * $$ sel.removeItemByIndex( index ) $$
     * @param {Number} index The index of the corresponding item to remove.
     */
    removeItemByIndex( index )
    {
        if( index < 0 ) return;
        this._list.splice( index, 1 );
        this._disabledItems.splice( index, 1 );
		this._render();
    }

    /** ### removeItemByName
     * Removes an item in the select component item list by its name.
     * $$ sel.removeItemByName( name ) $$
     * @param {String} name The name of the item to remove.
     */
    removeItemByName( name )
    {
        var index = this._list.indexOf( name )
        this.removeItemByIndex( index )
    }

    /** ### shifItem
     * Removes an item at the beginning of the list items. This will return the item being removed.
     * $$ sel.shifItem() $$
     */
    shifItem() {
        let item = this._list[0];
        this.removeItemByIndex(0);
        return item;
    }

    /** ### popItem
     * Removes an item at the end of the list items. This will return the item being removed.
     * $$ sel.popItem() $$
     */
    popItem() {
        let item = this._list[this._list.length - 1];
        this.removeItemByIndex(this._list.length - 1);
        return item;
    }
    
    /** ### getItem
     * Returns the item at a given index.
     * $$ sel.getItem( index ) $$
     * @param {Number} index The index of the item.
     */
    getItem( index ) { return this._list[ index ]; }
    
    /** ### setList
     * Sets the list items in the menu popup.
     * $$ sel.setList( items ) $$
     * @param {Array} items A comma separated string or array of options
     */
    setList( items )
    {
        this._list = items || [];
        if( typeof(items) == "string" ) this._list = items.split(",").map(m => m.trim());
        else if( typeof(items) == "object" ) this._list = JSON.parse(JSON.stringify(items));
        this._props.value = this._options.includes("multiple") ? [] : "";
        this._disabledItems = [];
        this._formatList();
        this._render();
    }
    getList() { return this._list }
    set list( items ) {
        this._list = items || [];
        if( typeof(items) == "string" ) this._list = items.split(",").map(m => m.trim());
        else if( typeof(items) == "object" ) this._list = JSON.parse(JSON.stringify(items));
        this._props.value = this._options.includes("multiple") ? [] : "";
        this._disabledItems = [];
        this._formatList();
        this._render();
    }
    get list() { return this._list; }
    
    /** ### setEnabled
     * Enable or disable the select component.
     * $$ sel.setEnabled( index, value ) $$
     * @param {Number} index Can be `true` or `false`. You can also pass a `Boolean` to enable or disable the Select component.
     * @param {Boolean} value Values can be `true` or `false`.
     */
    setEnabled( index, value ) {
        if( typeof(index)=="boolean" ) this._props.disabled = !index
        else if( typeof(index)!="number" ) return
        if( index < 0 ) return
        this._disabledItems[index] = !value
        this._render()
    }

    /** ### getEnabled
     * Get the enabled state of an item in the select menu.
     * $$ sel.getEnabled( index ) $$
     * @param {Number} index The index of the corresponding item in the select menu.
     * @returns Boolean
     */
    getEnabled( index ) {
        if( typeof(index)!="number" || index<0 ) return null
        return !this._disabledItems[index]
    }

    /** ### setEnabledByName
     * Enable or disable an item in the menu popup.
     * $$ sel.setEnabledByName( name, value ) $$
     * @param {String} name The name of the menu item.
     * @param {Boolean} value Value can be `true` or `false`
     */
    setEnabledByName( name, value ) {
        if( typeof(name)!="string" || typeof(value)!="boolean" ) return
        var index = this._list.indexOf(name.trim())
        if( index<0 ) return
        this._disabledItems[index] = !value
        this._render()
    }

    /** ### getEnabledByName
     * Get the enabled state of an item in the menu popup.
     * $$ sel.getEnabledByName( name ) $$
     * @param {String} name The name of the menu item.
     * @returns Boolean
     */
    getEnabledByName( name ) {
        if( typeof(name)!="string" ) return null
        var index = this._list.indexOf(name.trim())
        if( index<0 ) return null
        return !this._disabledItems[index]
    }

    setValue( val )
    {
        if( typeof(val) == "number" && val >=0 ) {
            var lst = this._list.filter( m => m.trim()[0]!=":" )
            val = lst[val]
        }
        else if( typeof(val)=="object" && typeof(val[0])=="number" ) {
            var lst = this._list.filter( m => m.trim()[0]!=":" )
            val = val.map( i => lst[i] )
        }
        else if( !val ) val = this._props.multiple ? [] : ""
        if( val ) {
            val = typeof(val) == "string" ? val.split(",") : val
            val.map( e => e.trim() )
            if( this._props.multiple && this._options.includes("radio") )
            {
                var ins = []
                for( var i=0; i<val.length; i++ ) {
                    var a = val[i]
                    var b = this.__la[ this.__l[a] ]
                    if(b) ins.push(i)
                    else this.__la[ this.__l[a] ] = a
                }
                ins.map( function(i) { val.splice( i, 1 ) })
            }
        }
        this._props.value = val
        this._render()
    }
    getValue() { return this._props.value; }
    set value( val )
    {
        if( typeof(val) == "number" && val >=0 ) {
            var lst = this._list.filter( m => m.trim()[0]!=":" )
            val = lst[val]
        }
        else if( typeof(val)=="object" && typeof(val[0])=="number" ) {
            var lst = this._list.filter( m => m.trim()[0]!=":" )
            val = val.map( i => lst[i] )
        }
        else if( !val ) val = this._props.multiple ? [] : ""
        if( val ) {
            val = typeof(val) == "string" ? val.split(",") : val
            val.map( e => e.trim() )
            if( this._props.multiple && this._options.includes("radio") )
            {
                var ins = []
                for( var i=0; i<val.length; i++ ) {
                    var a = val[i]
                    var b = this.__la[ this.__l[a] ]
                    if(b) ins.push(i)
                    else this.__la[ this.__l[a] ] = a
                }
                ins.map( function(i) { val.splice( i, 1 ) })
            }
        }
        this._props.value = val
        this._render()
    }
    get value() { return this._props.value; }
    
    setVariant( variant ) { this._formProps.variant = variant.toLowerCase(); this._render(); }
    getVariant() { return this._formProps.variant; }
    set variant( variant ) { this._formProps.variant = variant.toLowerCase(); this._render(); }
    get variant() { return this._formProps.variant; }

    setSizeVariant( size ) { this._formProps.size = size.toLowerCase(); this._render(); }
    getSizeVariant() { return this._formProps.size; }
    set sizeVariant( size ) { this._formProps.size = size.toLowerCase(); this._render(); }
    get sizeVariant() { return this._formProps.size; }

    set textSize(size) {
        this._style1.fontSize = size
        this._render()
    }
    get textSize() { return this._style1.fontSize }

    set textColor(color) {
        this._style1.color = color
        this._render()
    }
    get textColor() { return this._style1.color }

    set iconColor(color) {
        this._style2.color = color
        this._render()
    }
    get iconColor() { return this._style2.color }

    set labelSize(size) {
        this._style3.fontSize = size
        this._render()
    }
    get labelSize() { return this._style3.fontSize }

    set labelColor(color) {
        this._style3.color = color
        this._render()
    }
    get labelColor() { return this._style3.color }

    set popupColor(color) {
        this._props.MenuProps.PaperProps.style.backgroundColor = color
        this._render()
    }
    get popupColor() { return this._props.MenuProps.PaperProps.style.backgroundColor }

    set maxHeight(height) {
        this._props.MenuProps.PaperProps.style.maxHeight = height
        this._render()
    }
    get maxHeight() { return this._props.MenuProps.PaperProps.style.maxHeight }

    show() { this._div.style.display = "inline-flex"; }
}

/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "", 0.6)

        // Set the label text
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */

/**
@sample Group title
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        // The leading colon in each item will render it as group tile
        var items = [":Choices", "Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "", 0.6)

        // Set the label text
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */

/**
@sample Multiple selection
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        // Passing `Multiple` option will allow more than one selection
        this.sel = ui.addSelect(this.main, items, "Multiple", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(items, index)
    {
        ui.showPopup( "You choose " + items.join(", ") )
    }
}
 */

/**
@sample Outlined and small
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        // Passing `Outlined` option will add a border
        // Passing `Small` option will make the control smaller
        this.sel = ui.addSelect(this.main, items, "Outlined,Small,Secondary", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(item, index)
    {
        ui.showPopup( "You choose " + item )
    }
}
 */

/**
@sample Radiogroup items
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        // Passing `Radio` option will render the items as radiogroup
        this.sel = ui.addSelect(this.main, items, "Filled,Radio", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(item, index)
    {
        ui.showPopup( "You choose " + item )
    }
}
 */

/**
@sample Grouped list items
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show with group tiles
        var items = [":Group 1", "Item 1", "Item 2", ":Group 2", "Another item 1", "Another item 2"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "Filled", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(item, index)
    {
        ui.showPopup( "You choose " + item )
    }
}
 */

/**
@sample Multiple radiogroup with titles
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show with group tiles
        var items = [":Group 1", "Item 1", "Item 2", ":Group 2", "Another item 1", "Another item 2"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "Outlined,Radio,Multiple", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(items, index)
    {
        ui.showPopup( "You choose " + items.join(", ") )
    }
}
 */