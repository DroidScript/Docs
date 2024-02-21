
/** # Menu
 * @abbrev men
 * A menu is a list of options or actions presented to the user as a popup.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, menus can be contextual, appearing in response to user interactions. They provide a consistent way to access additional functionality or navigate within an application. Show a menu by calling the `addMenu` method like this:
 * $$ men = ui.addMenu(parent, list, options, width, height) $$
 * @param {Object} parent The component where to anchor the Menu.
 * @param {Array} list A list of items to be shown in the pop-up menu. You can also pass a comma separated string. For menu with icon the format is `icon:title` \n Add a `colon` before an item to display it as the label text.
 * @param {String} options A comma separated options.\nTheme Color: `Primary`, `Secondary`, `Error`\nUtils: `Dense`, `Icon`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object Menu
 * These are examples on how you can format your list.
 * Basic list
 * $$ var lst = ['Item 1', 'Item 2', 'Item 3']; $$
 * List with icons
 * $$ var lst = ['favorite:Favorites', 'person:Account', 'delete:Trash Bin']; $$
 * List with group title
 * $$ var lst = [':This is a label', 'Item 1', 'Item 2', 'Item 3']; $$
 */

ui.addMenu = function(parent, list, options, width, height)
{
	return new ui.Menu(parent, list, options, width, height)
}

ui.Menu = class extends ui.Control
{
	constructor(parent, list, options, width, height)
	{
		super(null, width, height, options, "Menu")
		this._menus = list || []
		if( typeof(list) == "string" ) this._menus = list.split(",").map(m => m.trim());
        else if( typeof(list) == "object" ) this._menus = JSON.parse(JSON.stringify(list));
		this._parent = parent
		if( this._parent ) this._initParent()
        this._props.id = "menu-"+this._id
        this._props.keepMounted = true
		this._props.open = false
        this._icon = false
        this._color = "inherit"
        this._disabledItems = {}
        // font-file
        this._fontFile = "";
        this._fontName = "";
        if( ui._fontFile ) {
            this._fontFile = ui._fontFile;
            this._fontName = ui._fontName;
        }
        this._itemPad = {
            paddingLeft: "1rem",
            paddingTop: "0.5rem",
            paddingRight: "1rem",
            paddingBottom: "0.5rem"
        }
		this._initProps()
		this._render()
	}

	// INVISIBLE METHODS 
	_initProps()
	{
		this._props.anchorEl = this._parent ? this._parent._div : null
        this._icon = this._options.includes("icon")
        this._color = this._getColor()
	}
    _getColor() {
        if(this._options.includes("primary")) return "primary"
        if(this._options.includes("secondary")) return "secondary"
        if(this._options.includes("error")) return "error"
        return "inherit"
    }
	_onClick(menu, i, e) {
		if(this._touch) {
            var icon = ""
            if( this._icon ) {
                var x = menu.split(":")
                menu = x[1] || x[0]
                icon = x[1] ? x[0] : ""
            }
            this._touch(menu, icon, i, this._getEventObject(e, null, null, "touch"))
        }
		this._props.open = false
		this._render()
	}
	
	_onClose() {
		this._props.open = false
		this._render()
		if(this._close) this._close()
	}
	_clearParent() {
		this._parent._props['aria-haspopup'] = false
		this._parent._props['aria-controls'] = ''
		this._parent._render()
	}
	_initParent() {
		this._parent._props['aria-haspopup'] = true
		this._parent._props['aria-controls'] = this._props.id
		this._parent._render()
	}
    _getIndexByName(name) {
        var index = this._menus.indexOf(name.trim())
        if( this._icon ) {
            var x = this._menus.map( m => {
                var y = m.split(":")
                return y[1] ? y[1].trim() : y[0].trim()
            })
            index = x.indexOf(name.trim())
        }
        return index
    }
    _getRef( ref ) {
        if( ref ) {
            this._ref = ref;
            if( this._fontName ) this._setFontName();
        }
    }
    _setFontName() {
        let els = this._ref.querySelectorAll('*:not(:empty):not(.material-icons)');
        els.forEach( m => m.style.fontFamily = this._fontName );
    }
	_render()
	{
		let e = React.createElement
		let {Menu, MenuItem,ListSubheader,Icon,ListItemText} = window['MaterialUI']
		this._ctl = e( Menu, {
				...this._props,
				onClose: this._onClose.bind(this),
				style: { ...this._style, paddingTop: 0, paddingBottom: 0 },
                ref: this._getRef.bind(this),
                id: "menu_"+this._id
			},
			this._menus.map( (menu, i) => {
                var ctr, menu = menu.trim(), x
                if(menu[0] == ":") {
                    ctr = e(ListSubheader, { key: i, style: {position: "relative"} }, menu.replace(":", ""))
                }
                else {
                    if(this._icon) x = typeof(menu) == "string" ? menu.split(":") : menu
                    ctr = e( MenuItem, {
                            key: i,
                            onClick: platform.ios ? null : this._onClick.bind(this, menu, i),
                            onTouchEnd: platform.ios ? this._onClick.bind(this, menu, i) : null,
                            dense: this._options.includes( "dense" ),
                            disabled: this._disabledItems[i],
                            style: { ...this._itemPad }
                        },
                        this._icon ? [
                            e(Icon,{key:1, style:{fontSize: 20}, color:this._color }, x[0] ),
                            e( ListItemText, { key:2, primary: x[1]||x[0], style:{marginLeft:12} } )
                        ] : menu
                    )
                }
                return ctr;
            })
		)

		ReactDOM.render( this._ctl, this._div, () => {
            // make the MenuPopup display in front of all ui components, even the drawer.
            const el = document.querySelector("#menu_"+this._id);
            let md, ml;
            if( el ) {
                el.style.zIndex = 1301;
                md = el.querySelector(".MuiPaper-root.MuiMenu-paper.MuiPopover-paper.MuiPaper-rounded");
                md.style.width = _W( this._width );
                md.style.height = _H( this._height );
                ml = el.querySelector(".MuiMenu-list.MuiList-padding");
                ml.style.padding = 0;
            }
        });
	}

	// VISIBLE PROPERTIES

	/** ## Properties
	 * Here are the available setters and/or getters for the Menu Component.
	 * @prop {Array} list Sets or returns the items in the menu. You can also pass a comma separated string.
     * @prop {Array} itemPadding Sets or returns the padding of each menu item. See also `setItemPadding` method.
	 */

	// VISIBLE METHODS

	/** ## Methods
	 * Here are the available methods for Menu Component.
	 */ 
    
    /** ### setOnTouch
     * Adds a callback handler when the menu is touch.
     * $$ men.setOnTouch(callback) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} item The menu item text. @arg {String} icon The menu item icon. @arg {Number} index The menu item index.
     */

	/** ### show
	 * Show the menu pop-up.
	 * $$ men.show( parent ) $$
	 * @param {Object} parent The component where to anchor the menu. It can be a `Button` or an `Image`.
	 * If you passed a parent on initialization, then the menu si anchored on that component.
	 */
	show( x, y )
	{
        if( x && y && typeof(x) == "number" && typeof(y) == "number" ) {
            this._props.anchorEl = null;
            this._props.anchorReference = "anchorPosition";
            this._props.anchorPosition = {
                top: y,
                left: x
            };
        }
		else if(x) {
			this._parent = x
			this._initParent()
			this._props.anchorEl = x._div
		}
		this._props.open = true
		this._render()
	}

	/** ### hide
	 * Hide the pop-up menu.
	 * $$ men.hide() $$
	 */
	hide() {
		this._props.open = false
		this._render()
	}

	/** ### setList
	 * Updates the list items on the menu.
	 * $$ men.setList( list ) $$
	 * @param {Array} list The list items to show.
	 */
	setList( list ) {
        this._menus = list || [];
        if( typeof(list) == "string" ) this._menus = list.split(",");
        else if( typeof(list) == "object" ) this._menus = JSON.parse(JSON.stringify(list));
        this._disabledItems = {};
        this._render();
    }
    getList() { return this._menus }
	set list( list ) {
        this._menus = list || [];
        if( typeof(list) == "string" ) this._menus = list.split(",");
        else if( typeof(list) == "object" ) this._menus = JSON.parse(JSON.stringify(list));
        this._disabledItems = {};
        this._render();
    }
	get list() { return this._menus; }

	/** ### addItem
	 * Adds an item in the menu list.
	 * $$ men.addItem( name, index ) $$
	 * @param {String} name The new item to be added.
	 * @param {Number} index The index at which to add the item.
	 */
	addItem( name, index )
	{
		if( typeof( index ) != "number" ) this._menus.push( name )
		else {
            this._menus.splice( index, 0, name )
            this._disabledItems.splice( index, 0, false )
        }
		this._render()
	}

	/** ### removeItemByIndex
	 * Removes an item in the menu items list by its index.
	 * $$ men.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the item to remove.
	 */
	removeItemByIndex( index )
	{
        if( index < 0 ) return
		this._menus.splice( index, 1 )
        this._disabledItems.splice( index, 1 )
		this._render()
	}

	/** ### removeItemByName
	 * Removes an item in the menu items list by its name.
	 * $$ men.removeItemByName( name ) $$
	 * @param {String} name The name of the item to remove.
	 */
	removeItemByName( name )
	{
        if( typeof(name)!="string" ) return
        name = name.trim()
		var index = this._menus.indexOf( name )
        if( this._icon ) {
            var x = this._menus.map( m => {
                var y = m.split(":")
                return y[1] ? y[1].trim() : y[0].trim()
            })
            index = x.indexOf(name)
        }
		this.removeItemByIndex(index)
	}

	/** ### popItem
	 * Removes the last item. This will return the item being removed.
	 * $$ men.popItem() $$
	 */
	popItem() {
        let item = this._menus[this._menus.length-1];
        this.removeItemByIndex(this._menus.length-1);
        return item;
    }

	/** ### shiftItem
	 * Removes the first item. This will return the item being removed.
	 * $$ men.shiftItem() $$
	 */
	shiftItem() {
        let item = this._menus[0];
        this.removeItemByIndex(0);
        return item;
    }

	/** ### setPosition
	 * Set the position of the menu from the left and top of the anchor component.
	 * $$ men.setPosition( left, top ) $$
	 * @param {Number} left The position of the menu from the left of the parent or anchor component. The unit is in pixels.
	 * @param {Number} top The position of the menu from the top of the parent or anchor component. The unit is in pixels.
	 */
	setPosition( left, top )
	{
		this._style.marginLeft = left+"px"
		this._style.marginTop = top+"px"
		this._render()
	}

	/** ### setAutoFocus
	 * Sets the autofocus value of the menu items.
	 * $$ men.setAutoFocus( bool ) $$
	 * @param {Boolean} bool Value can be `true` or `false`
	 */
	setAutoFocus( bool )
	{
		this._props.autoFocus = bool
		this._render()
	}

    /** ### setEnabled
     * Enable or disable an item in the menu popup.
     * $$ men.setEnabled( index, value ) $$
     * @param {Number} index The index of the item.
     * @param {Boolean} value Values can be `true` or `false`. `false` to disable.
     */
    setEnabled( index, value ) {
        if( typeof(index)!="number" || typeof(value)!="boolean" || index<0 ) return
        this._disabledItems[index] = !value
        this._render()
    }

    /** ### getEnabled
     * Get the enabled state of an item the menu popup.
     * $$ men.getEnabled(index) $$
     * @param {Number} index The index of the item.
     * @returns Boolean
     */
    getEnabled(index) {
        if( typeof(index)!="number" || index<0 ) return null
        return !this._disabledItems[index]
    }

    /** ### setEnabledByName
     * Enable or disable an item in the menu popup by its name.
     * $$ men.setEnabledByName(name, value) $$
     * @param {String} name The name of the corresping item the menu.
     * @param {Boolean} value Values can be `true` or `false`. `false` to disable an item.
     */
    setEnabledByName( name, value ) {
        if( typeof(name)!="string" || typeof(value)!="boolean" ) return
        this.setEnabled( this._getIndexByName(name), value)
    }

    /** ### getEnabledByName
     * Get the enabled state of an item in the menu popup.
     * $$ men.getEnabledByName( name ) $$
     * @param {String} name The name of the item.
     * @returns Boolean
     */
    getEnabledByName( name ) {
        if( typeof(name)!="string" ) return null
        return !this._disabledItems[this._getIndexByName(name)]
    }

    set fontFile( file ) {
        if( typeof(file) != "string" || !file.includes(".") ) return;
        this._fontFile = file;
        this._fontName = file.split('/').pop().split('.')[0] + this._id;
        const style = document.createElement('style');
        style.innerText = '@font-face {' +
            'font-family: \''+ this._fontName +'\'; ' +
            'src: url(\''+file+'\'); '+
        '}';
        document.head.appendChild(style);
        this._setFontName();
    }
    get fontFile() { return this._fontFile ? this._fontFile : null }
    setFontFile( file ) { this.fontFile = file; }

    /** ### setItemPadding
     * Sets the padding of the menu item. See `itemPadding` property for equivalent setter/getter property.
     * $$ men.setItemPadding(left, top, right, bottom, mode) $$
     * @param {Number} left Left padding of the menu item.
     * @param {Number} top Top padding of the menu item.
     * @param {Number} right Right padding of the menu item.
     * @param {Number} bottom Bottom padding of the menu item.
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
@sample Basic menu
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Adds a button control to the layout
        this.btn = ui.addButton(this.main, "Show Menu", "Primary")
        this.btn.setOnTouch( this.onTouch )

        // Menu items to display in the popup
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a menu passing the button control as anchor
        this.menu = ui.addMenu(this.btn, items)

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onTouch()
    {
        // show the menu
        this.menu.show()
    }

    menuTouch( item )
    {
        ui.showPopup( item )
    }
}
 */

/**
@sample Changing anchor component
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.childSpacing = "Even";

        // Add a first button control to the layout
        this.btn1 = ui.addButton(this.main, "Button 1", "Primary")
        this.btn1.setOnTouch( this.onTouch1 )

        // Add a second button control to the layout
        this.btn2 = ui.addButton(this.main, "Button 2", "Secondary")
        this.btn2.setOnTouch( this.onTouch2 )

        // Menu items to display the menu popup
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a menu without anchor component
        this.menu = ui.addMenu(null, items)

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onTouch1()
    {
        // Show the menu on button 1
        this.menu.show( this.btn1 )
    }

    onTouch2()
    {
        // Show the menu on button 2
        this.menu.show( this.btn2 )
    }

    menuTouch( item )
    {
        ui.showPopup( item )
    }
}
 */

/**
@sample With icons and disabled items
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button control to the main layout
        this.btn = ui.addButton(this.main, "Show Menu", "Primary")
        this.btn.setOnTouch( this.onTouch )

        // List items with icons
        var items = ["person:Item 1", "delete:Item 2", "favorite:Item 3"]

        // Add a menu passing the btn as anchor component
        this.menu = ui.addMenu(this.btn, items, "Icons,Primary,Dense")

        // Disable the second menu item
        this.menu.setEnabled(1, false)

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onTouch()
    {
        // show the menu
        this.menu.show()
    }

    menuTouch( item )
    {
        // display the selected item
        ui.showPopup( item )
    }
}
 */

/**
@sample Anchor position on mouse
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setOnContextMenu( this.onMenu )

        // Add a text control to the layout
        this.txt = ui.addText(this.main, "Right click anywhere on the screen.")

        // List items with icons
        var items = ["person:Item 1", "delete:Item 2", "favorite:Item 3"]

        // Add menu passing the btn as anchor component
        this.menu = ui.addMenu(null, items, "Icons,Dense")

        // Add a callback handler when a menu is touched
        this.menu.setOnTouch( this.menuTouch )
    }

    onMenu( pos )
    {
        // show the menu on the position of the mouse
        this.menu.show(pos.x, pos.y)
    }

    menuTouch( item )
    {
        // display the selected item
        ui.showPopup( item )
    }
}
 */