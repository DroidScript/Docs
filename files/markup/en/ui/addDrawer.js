
/** # Drawer
 * @abbrev drw
 * A drawer is a navigation panel that slides in from the edge of the screen, typically from the left, to reveal additional options or content.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, Drawers offer a consistent and organized way to access app navigation, settings, or other features, contributing to a seamless and intuitive user experience. Add a drawer into your app using the `addDrawer` method like this:
 * $$ drw = ui.addDrawer(lay, options) $$
 * @param {Object} layout The drawer layout where to add controls.
 * @param {String} options A comma separated options.nVariant: `Permanent`, `Persistent`, `Temporary`\nAnchor: `Left`, `Right`, `Top`, `Bottom`
 * @param {Number} width Fraction of the screen width starting from the anchor position `[0-1]`.
 * @returns Object Drawer
 */

ui.addDrawer = function( lay, options, width ) {
	return new ui.Drawer( lay, options, width )
}

ui.Drawer = class
{
	constructor( lay, options="", width )
	{
		this._options = options.toLowerCase();
        this._width = width;
		this._props = {
            id: this._id,
            open: false,
            disableSwipeToOpen: platform.ios,
		    swipeAreaWidth: 20,
		    disableBackdropTransition: !platform.ios,
		    disableDiscovery: platform.ios
        }
        this._parent = document.getElementById( "drawer" )
		this._ctl = null
        this._div = document.createElement( "div" )
        this._parent.appendChild( this._div )
		this.data = {}
		this._lay = lay
		this._initProps()
        let w, h;
        if(this._props.anchor == "left" || this._props.anchor == "right") {
            w = width ? width : platform.type=="desktop" ? 0.2 : 0.7;
            w = (w * 100) + "vw";
            h = "100vh";
        } else {
            w= "100vw";
            h = width ? width : platform.type=="desktop" ? 0.3 : 0.7;
            h = (h * 100) + "vh";
        }
        this._style = {width: w, height: h, boxSizing: "border-box"}
		this._render()
	}

	_initProps()
	{
		this._props.anchor = this._getAnchor()
		//variant: this._getVrnt(),
	}
	// get drawer variant
	_getVrnt() {
		if(this._options.includes('permanent')) return 'permanent'
		if(this._options.includes('persistent')) return 'persistent'
		else return 'temporary'
	}
	// get anchor
	_getAnchor() {
		if(this._options.includes('right')) return 'right'
		if(this._options.includes('top')) return 'top'
		if(this._options.includes('bottom')) return 'bottom'
		else return 'left'
	}
	_config() {
		if(this._props.variant != 'permanent') return

		var root = document.getElementById('root')
    	if(this._props.anchor == 'left') {
    		root.style.position = 'absolute'
    		root.style.left = (this._lay.width * 100) + 'vw'
    		root.style.width = (1 - this._lay.width) * 100 + 'vw'
    	}
	}

	_render()
	{
 		let e = React.createElement
 		let { SwipeableDrawer } = window['MaterialUI']   
        this._ctl = e( SwipeableDrawer, {
           		...this._props,
           		onOpen: event => {
					if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return
					if( this._disabled ) return
                    this._props.open = true
					this._render()
					if( this._onOpen ) this._onOpen()
				},
            	onClose: ( event, reason ) => {
					this._props.open = false
					this._render()
					if( this._onClose ) this._onClose()
				},
                style: { boxSizing: "border-box" },
                PaperProps: {
                    style: { boxSizing: "border-box", overflow: "hidden" }
                }
        	},
        	e( "div", {
				ref: ref => {
					if( ref && this._lay ) ref.appendChild( this._lay._div )
				},
				style: { ...this._style, overflow: "hidden" }
			}, "" )
    	)
        ReactDOM.render( this._ctl, this._div )
	}

    // VISIBLE PROPERTIES

	/** ## Properties ##
	 * Here are the available setter and getter properties of the Drawer Component.
     * @prop {Boolean} disabled Sets or returns the `disabled` state of the drawer.
     * @prop {Number} width Sets or returns the width of the drawer as a fraction of the screen viewport relative to its anchor position `[0-1]`.
     * @prop {String} anchor Sets or returns the anchor position of the drawer. Values can be `left`, `top`, `right`, `bottom`.
     * @prop {Number} swipeAreaWidth Sets or returns the width of the swipeable area of the Drawer.
	 */
	
	// VISIBLE METHODS

	/** ## Methods ##
	 * Here are the available methods of the Drawer Component.
	 */
    
    /** ### addLayout
	 * Adds a layout into the drawer.
	 * @param {Object} lay Layout component.
	 */
	addLayout( lay ) { this._lay = lay }
	
	/** ### disableSwipeToOpen ###
	 * Disable swipe to open feature of the drawer. You can use this especially for ios devices which has swipe to go back feature.
	 * $$ drw.disableSwipeToOpen( value ) $$
	 * @param {Boolean} value Values can be `true` or `false`.
	 */
    disableSwipeToOpen( value ) {
		this._props.disableSwipeToOpen = value
		this._render()
	}
	
	/** ### disableBackdropTransition ###
	 * Disable the backdrop transition. This can improve the FPS on low-end devices.
	 * $$ drw.disableBackdropTransition( value ) $$
	 * @param {Boolean} value Values can be `true` or `false`.
	 */
    disableBackdropTransition( value ) {
		this._props.disableBackdropTransition = value
		this._render()
	}
	
	/** ### disableDiscovery ###
	 * If `true`, touching the screen near the edge of the drawer will not slide in the drawer a bit to promote accidental discovery of the swipe gesture.
	 * $$ drw.disableDiscovery( value ) $$
	 * @param {Boolean} value Values can be `true` or `false`.
	 */
    disableDiscovery( value ) {
		this._props.disableDiscovery = value;
		this._render();
	}
	
	/** ### setOnOpen ###
	 * Adds a callback function when the drawer is opened via swiping from the anchor position.
	 * $$ drw.setOnOpen(callback) $$
	 * @param {Function} callback The callback function.
	 */
	setOnOpen( callback ) { this._onOpen = callback }
	
	/** ### setOnClose ###
	 * Adds a callback function when the drawer is closed.
	 * $$ drw.setOnClose(callback) $$
	 * @param {Function} callback The callback function.
	 */
	setOnClose(callback) { this._onClose = callback }

	/** ### show ###
	 * Open the drawer dynamically.
	 * $$ drw.show( anchor ) $$
	 * @param {String} anchor Optional. The anchor position. Can be `left`, `top`, `right`, `bottom`. Default is `left`.
	 */
	show( anchor )
	{
        if( this._disabled ) return
		this._props.open = true
		if( anchor ) this._props.anchor = anchor.toLowerCase()
		this._render()
	}

	/** ### hide ###
	 * Close the drawer dynamically.
	 * $$ drw.hide() $$
	 */
	hide() {
		this._props.open = false
		this._render()
		if( this._onClose ) this._onClose()
	}

    set disabled( value ) {
        this._disabled = value
        this._render()
    }
    get disabled() { return this._disabled }

    set width( w ) {
        this._width = w
        let h = "100vh";
        if(this._props.anchor=="left" || this._props.anchor=="right") {
            if( typeof(w) == "number" ) w = (w * 100)+"vw"
        } else {
            if( typeof(w) == "number" ) h = (w * 100)+"vh"
            w = "100vw"
        }
        this._style.width = w;
        this._style.height = h;
        this._render()
    }
    get width() { return this._width }

    set anchor( anchor="" ) {
        this._props.anchor = anchor.toLowerCase();
    }
    get anchor() { return this._props.anchor }

    set swipeAreaWidth( val ) {
        this._props.swipeAreaWidth = val;
        this._render();
    }
    get swipeAreaWidth() { return this._props.swipeAreaWidth; }
}

/* --- parent_methods here ----- */

/* ## Examples ## */

/**
@sample Drawer Implementation
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        // Add a fixed appbar with menu icon to the main layout.
        this.apb = ui.addAppBar(this.main, "My App", "Menu,Fixed")

        // Add a callback handler for `onMenu` event of the AppBar control.
        this.apb.setOnMenu( this.openDrawer )

        // Add a text control to the main layout.
        ui.addText(this.main, "<---- Swipe left ----->", "Center");

        // Create a linear layout for the drawer.
        this.drawerLay = ui.addLayout(null, "Linear")

        // Initialize the drawer by passing the drawer layout above.
        this.drawer = ui.addDrawer(this.drawerLay, "left", 0.7)

        // Add a callback handler for `onClose` event on the Drawer component.
        this.drawer.setOnClose( this.onClose )

        var lst1 = [
            [ "music_note", "Audios" ],
            [ "movie", "Videos" ],
            [ "insert_drive_file", "Documents" ]
        ]

        // Adds a list to the drawer layout. See List control for customization.
        this.lstMenu1 = ui.addList( this.drawerLay, lst1, "Icon", 1 )
        this.lstMenu1.label = "Main navigation"

        // Add a callback handler for `onSelect` event on the list.
        this.lstMenu1.setOnTouch( this.onSelect )

        // Adds a divider into the drawer layout.
        ui.addDivider( this.drawerLay, 1 )

        var lst2 = [
            [ "mail", "All Mail" ],
            [ "inbox", "Inbox" ],
            [ "drafts", "Outbox" ],
            [ "send", "Sent" ]
        ]

        // Adds another list to the drawer layout. See List control for customization.
        this.lstMenu2 = ui.addList( this.drawerLay, lst2, "Icon", 1 )
        this.lstMenu2.label = "Secondary navigation"
        this.lstMenu2.setOnTouch( this.onSelect )
    }

    openDrawer()
    {
        this.drawer.show()
    }

    onSelect(title)
    {
        this.apb.text = title
        ui.showPopup( title )
        this.drawer.hide()
    }

    onClose()
    {
        ui.showPopup('Drawer is close', "bottom")
    }
}
 */

/**
@sample Drawer Anchor Positions
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        // Adds a select control to the main layout.
        this.sel = ui.addSelect(this.main, ["Left", "Top", "Right", "Bottom"], "Radio,Outlined", 0.7)
        this.sel.label = "Select anchor position"

        // Add a callback handler for `onChange` event of the select control.
        this.sel.setOnChange(this.onSelect)

        // Creates a linear layout for the drawer.
        this.drawerLay = ui.addLayout( null, "Linear" )

        // Initialize the drawer by passing the drawer layout.
        this.drawer = ui.addDrawer( this.drawerLay, "left" )

        var lst1 = [
            [ "music_note", "Audios" ],
            [ "movie", "Videos" ],
            [ "insert_drive_file", "Documents" ]
        ]

        // Adds a list to the drawer layout.
        this.lstMenu1 = ui.addList( this.drawerLay, lst1, "Icon", 1 )
        this.lstMenu1.setOnTouch( this.closeDrawer )
        this.lstMenu1.label = "Main navigation"

        // Adds a divider into the drawer layout.
        ui.addDivider( this.drawerLay, 1 )

        var lst2 = [
            [ "mail", "All Mail" ],
            [ "inbox", "Inbox" ],
            [ "drafts", "Outbox" ],
            [ "send", "Sent" ]
        ]

        // Adds another list to the drawer layout.
        this.lstMenu2 = ui.addList( this.drawerLay, lst2, "Icon", 1 )
        this.lstMenu2.label = "Secondary navigation"
        this.lstMenu2.setOnTouch( this.closeDrawer )
    }

    openDrawer()
    {
        this.drawer.show()
    }

    closeDrawer( title )
    {
        ui.showPopup( title )
        this.drawer.hide()
    }

    onSelect( value )
    {
        // Set the drawer anchor first
        this.drawer.anchor = value

        // Set the drawer width depending on anchor position
        if(value == "Top" || value == "Bottom") {
            this.drawer.width = 0.5
        } else {
            this.drawer.width = 0.7
        }
        
        // Open the drawer
        this.drawer.show()
    }
}
 */
    