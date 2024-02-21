
/** # ButtonGroup
 * @abbrev btg
 * In mobile UI development, a button group refers to a collection of buttons presented together, often used for related actions.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs The grouping helps organize and visually connect buttons with similar functions. Design principles may include consistent styling, alignment, and spacing for a unified appearance, promoting a cohesive user experience when interacting with multiple buttons in a single context.
 * $$ btg = ui.addButtonGroup(parent, list, options, width, height) $$
 * @jdocs Add a button group into your app using the `addButtonGroup` method like this:
 * @param {Object} parent The parent layout where to add the ButtonGroup
 * @param {Array} list The item to be displayed on the buttn group.
 * @param {String} options A comma separated options.\nVariant: `Contained`, `Outlined`, `Text`, `Default`\nTheme Color: `Primary`, `Secondary`, `Default`\nSizes: `Small`, `Medium`, `Large`\nOrientation: `Horizontal`, `Vertical`\nToggleable: `Toggle`, `Radio`\nUtils: `Icon`, `NoElevation`
 * @param {Number} width Fraction of the parent width `[0-1]`
 * @param {Number} height Fraction of the parent height `[0-1]`
 * @returns Object ButtonGroup
 * A toggleable buttongroup can accept additional `Radio` option to have atmost one toggled button item. If buttongroup is toggleable, please refer to the `setOnTouch` callback for the correct order of arguments.
 */
ui.addButtonGroup = function(parent, list, options, width, height)
{
    return new ui.ButtonGroup(parent, list, options, width, height);
}

ui.ButtonGroup = class extends ui.Control
{
	constructor( parent, list, options, width, height )
	{
		super( parent, width, height, options, "ButtonGroup" )

		//Invisible properties
		this._click = null
		this._icon = false
		this._toolTip = {
			titles: [],
			placement: "bottom",
			arrow: true
		}
        this._props.disabled = false
		this._disabled = []
        this._style1 = {}
		this._list = list || []
		if(typeof list == "string") this._list = list.split(",");
        else if(typeof list == "object") this._list = JSON.parse(JSON.stringify(list));
		this._initProps();
        if( this._options.includes("toggle") ) {
            this._active = new Array(this._list.length).fill(false);
            this._cls += " uiToggle";
        }
		this._render();
    }
    
    // Invisible methods
    _initProps()
    {
		this._props.variant = _variant( this._options )
		this._props.color = _color( this._options )
		this._props.size = _size( this._options )
		this._props.orientation = this._options.includes( "vertical" ) ? "vertical" : "horizontal"
		this._props.disableElevation = ( this._options.includes( 'disableelevation' ) || this._options.includes( 'noelevation' ) ) ? true : false
        this._icon = this._options.includes( 'icon' ) ? true : false
    }
	_initStyle() { }
	_onTouch(i, e) {
        if( this._options.includes("toggle") ) {
            let el;
            if( this._options.includes("radio") ) {
                let n = this._active.findIndex(m => m == true);
                if(n >= 0 && n !== i) {
                    el = this._div.querySelector(".MuiButton-root.uiButtonGroup-"+this._id+"-"+n);
                    el.classList.remove("uiToggle-active");
                    this._active[n] = false;
                }
            }
            this._active[i] = !this._active[i];
            el = this._div.querySelector(".MuiButton-root.uiButtonGroup-"+this._id+"-"+i);
            if( this._active[i] ) el.classList.add("uiToggle-active");
            else el.classList.remove("uiToggle-active");
            if( this._touch ) this._touch(e.target.textContent, i, this._active[i], this._getEventObject(e, null, null, "touch"));
        }
		else if( this._touch ) this._touch(e.target.textContent, i, this._getEventObject(e, null, null, "touch"));
	}
	_onContextMenu(text, index, event) {
        if( this._ctxMenu ) {
            this._ctxMenu(text, index, this._getEventObject(event, null, null, "contextmenu"));
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
		let { Button, Icon, Tooltip } = window[ 'MaterialUI' ]
		this._children = this._list.map( ( t, i ) => {
            let cStyle = this._style1;
            if(i == 0 && this._cornerRad) {
                cStyle = JSON.parse(JSON.stringify(this._style1));
                cStyle.borderTopLeftRadius = this._cornerRad.tl;
                cStyle.borderBottomLeftRadius = this._cornerRad.bl;
            } else if(i == this._list.length-1 && this._cornerRad) {
                cStyle = JSON.parse(JSON.stringify(this._style1));
                cStyle.borderTopRightRadius = this._cornerRad.tr;
                cStyle.borderBottomRightRadius = this._cornerRad.br;
            }
			var ctl = e( Button, {
					onClick: platform.ios ? null : this._onTouch.bind(this, i), // e => { this._onTouch( i, e) },
					onTouchEnd: platform.ios ? this._onTouch.bind(this, i) : null,
                    disabled: this._disabled[i],
					style: { width: ( 100 / this._list.length ) + "%", height: "100%", ...cStyle },
					onContextMenu: this._onContextMenu.bind( this, t, i ),
                    className: this._cls + " uiButtonGroup-"+this._id+"-"+i,
				}, this._icon ? e( Icon, { fontSize: "small" }, t ) : t
			)
            return this._toolTip.titles[i] ?
                e( Tooltip, {
                    title: this._toolTip.titles[i],
                    placement: this._toolTip.placement,
                    arrow: this._toolTip.arrow
                }, ctl ) : ctl
		})
        this._ctl = e( window[ 'MaterialUI' ].ButtonGroup, {
        	...this._props,
            style: { ...this._style, width: "100%", height: "100%" }
        }, ...this._children )

	    ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        });
	}

	// VISIBLE PROPERTIES

	/** ## Properties
	 * Here are the setter and/or getter properties of the ButtonGroup Component.
	 * @prop {Array} list Sets or returns the list items of the button group.
	 * @prop {String} variant Sets or returns the variant. Values can be `Contained` `Outlined` or `Text`
	 * @prop {String} color Sets or returns the theme color of the button. Values can be `Default` `Primary` or `Secondary`
	 * @prop {Array} toolTips Sets or returns the list of tooltip titles.
	 * @prop {String} toolTipPosition Sets or returns the position of the tooltip. Values can be `left` `top` `right` or `bottom`
	 * @prop {String} sizeVariant Sets or returns the size variant. Values can be `small` `medium` or `large`
	 * @prop {String} orientation Sets or returns the orientation of the button group. Can be `horizontal` or `vertical`
     * @prop {String} textColor Sets or returns the color of the button text.
     * @prop {Number} textSize Sets or returns the font size of the button text.
     * @prop {Array} activeItems Sets or returns the indexes of the active button items.
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
	 * Here are the methods available for ButtonGroup Component
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
     * Adds a callback handler when a button item is touch. If the button is `toggleable` the arguments pass into the callback function is `text, index, active, pos` respectively, where `active` is the active state of the button item.
     * $$ btg.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} text The button text. @arg {Number} index The index of the corresponding button item. @arg {Boolean} active The active state of the button item if button is `toggleable`. @arg {Object} pos The position of the touch event.
     */

    /** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ btg.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} text Button text. @arg {Number} index The index of the corresponding button. @arg {Object} pos The position of the touch event.
     */

	setList( items ) { this.list = items; }
	set list( items ) {
		this._list = items || [];
		if(typeof items == "string") this._list = items.split(",");
        else if(typeof items == "object") this._list = JSON.parse(JSON.stringify(items));
        this._disabled = [];
		this._render();
	}
	get list() { return this._list; }

	/** ### setItemByIndex
	 * Sets a new text for the item in the button group.
	 * $$ btg.setItemByIndex( item, index ) $$
	 * @param {String} item The new text
	 * @param {Number} index The index of the item.
	 */
	setItemByIndex( item, index )
	{
		if(index>=this.length || index<0) console.warn("Index is out of range.");
		this._list[index] = item;
		this._render();
	}

	/** ### addItem
	 * Adds an additional item in the button group.
	 * $$ btg.addItem( item ) $$
	 * @param {String} item The additional item.
	 */
	addItem( item, index )
	{
		if( typeof( index ) == "number" ) {
			this._list.splice( index, 0, item )
			this._disabled.splice( index, 0, false )
		} else {
			this._list.push( item )
			this._disabled.push( false )
		}
		this._render()
	}

	/** ### removeItemByIndex
	 * Removes an item in the button group by its index.
	 * $$ btg.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the item to be remove.
	 */
	removeItemByIndex( index )
	{
		this._list.splice(index, 1)
		this._disabled.splice( index, 1 )
		this._render()
	}

	/** ### removeItemByName
	 * Removes an item in the button group by its name.
	 * $$ btg.removeItemByName( name ) $$
	 * @param {String} name The name of the item to be remove.
	 */
	removeItemByName( name )
	{
		var index = this._list.indexOf( name )
		this.removeItemByIndex( index )
	}

	/** ### popItem
	 * Removes the last item of the button group. This will return the item being removed.
	 * $$ btg.popItem() $$
	 */
	popItem() {
        const item = this._list[this._list.length - 1];
        this.removeItemByIndex(this._list.length - 1);
        return item;
    }

	/** ### shiftItem
	 * Removes the first item in the button group. This will return the item being removed.
	 * $$ btg.shiftItem() $$
	 */
	shiftItem() {
        const item = this._list[0];
        this.removeItemByIndex(0);
        return item;
    }

	getVariant() { return this._props.variant; }
    setVariant(val) { this._props.variant = val?val.toLowerCase():"contained"; this._render(); }
	get variant() { return this._props.variant; }
	set variant(val) { this._props.variant = val?val.toLowerCase():"contained"; this._render(); }

	setColor( clr ) {
        this._props.color = clr ? clr.toLowerCase() : "default"
        this.backColor = ""
    }
	set color( clr ) {
        this._props.color = clr ? clr.toLowerCase() : "default"
        this.backColor = ""
    }
	get color() { return this._props.color; }

	/** ### setToolTips
	 * Adds a tooltips to the ButtonGroup items.
	 * $$ btg.setToolTips(titles, pos) $$
	 * @param {Array} titles The titles for each item in the ButtonGroup.
	 * @param {String} pos The positio of the tooltip. \n Can be `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
	 */
	setToolTips( titles, pos ) {
		if( pos ) this._toolTip.placement = pos.toLowerCase();
		this.toolTips = titles;
	}
    setToolTip(titles, pos) {
        if( pos ) this._toolTip.placement = pos.toLowerCase();
		this.toolTips = titles;
    }
	set toolTips( titles ) {
        this._toolTip.titles = titles;
		if(typeof titles == "string") this._toolTip.titles = titles.split(",");
		this._render();
	}
    set toolTip( titles ) {
        this.toolTips = titles;
    }
	get toolTips() { return this._toolTip.titles }
    get toolTip() { return this._toolTip.titles }
	set toolTipPosition( pos ) {
		this._toolTip.placement = pos ? pos.toLowerCase() : "top"
		this._render()
	}
	get toolTipPosition() { return this._toolTip.placement; }

	setSizeVariant( val ) { this._props.size = val ? val.toLowerCase():"medium"; this._render(); }
    getSizeVariant() { return this._props.size; }
	set sizeVariant( val ) { this._props.size = val ? val.toLowerCase():"medium"; this._render(); }
	get sizeVariant() { return this._props.size; }

	setOrientation( orient ) { this._props.orientation = orient ? orient.toLowerCase():"horizontal"; this._render(); }
	getOrientation() { return this._props.orientation; }
    set orientation( orient ) { this._props.orientation = orient ? orient.toLowerCase():"horizontal"; this._render(); }
	get orientation() { return this._props.orientation; }

	/** ### enableElevation
	 * Enable of disable the elevation of the button group.
	 * $$ btg.enableElevation( enable ) $$
	 * @param {Boolean} enable Can be `true` or `false`
	 */
	enableElevation( enable ) { this._props.disableElevation = !enable; this._render(); }

	/** ### setEnabled
	 * Enable or disable a button item in the button group.
	 * $$ btg.setEnabled( index, value ) $$
	 * @param {Number} index The index of the button item.
	 * @param {Boolean} value Values can be `true` or `false`.
	 */
	setEnabled( index, value )
	{
		if( typeof( index ) == "boolean" ) this._props.disabled = !index
        else if( typeof(value)!=="boolean" ) return
		else this._disabled[ index ] = !value
		this._render()
	}

    /** ### getEnabled
     * Get the enabled state of the button item in the button group.
     * $$ btg.getEnabled( index ) $$
     * @param {Number} index The index of the button item in the button group.
     * @returns Boolean
     */
    getEnabled( index ) {
        if( typeof(index)!="number" || index<0 ) return null
        return !this._disabled[index]
    }

    /** ### setEnabledByName
     * Enable or disable a button item by its name.
     * $$ btg.setEnabledByName( name, value ) $$
     * @param {String} name The button text.
     * @param {Boolean} value Values can be `true` or `false`.
     */
    setEnabledByName( name, value ) {
        if( typeof(name)!="string" || typeof(value)!="boolean" ) return
        var index = this._list.findIndex( m => m.includes(name.trim() ) )
        this._disabled[index] = !value
        this._render()
    }

    /** ### getEnabledByName
     * Get the enabled state of button item in the button group.
     * $$ btg.getEnabledByName( name ) $$
     * @param {String} name The button text.
     * @returns Boolean
     */
    getEnabledByName( name ) {
        if( typeof(name)!="string" ) return null
        var index = this._list.findIndex( m => m.includes(name.trim() ) )
        return index<0 ? null : !this._disabled[index]
    }

    set textColor(clr) {
        this._style1.color = clr
        this._render()
    }
    get textColor() { return this._style1.color }

    set textSize(size) {
        this._style1.fontSize = size
        this._render()
    }
    get textSize() { return this._style1.fontSize }

    set backColor( color ) {
        this._style1.backgroundColor = color;
        this._style1.backgroundImage = "";
        this._render();
    }
    get backColor() { return this._style1.backgroundColor }

    set backImage( img ) {
        this._backImageUrl = img;
        this._style1.backgroundImage = `url('${img}')`;
        this._style1.backgroundSize = "cover";
        this._style1.backgroundPosition = "center";
        this._style1.backgroundRepeat = "no-repeat";
        this._style1.backgroundColor = "";
        this._render();
    }

    // override
    setCornerRadius(tl, tr, bl, br, mode="px") {
        this._cornerRad = { tl: tl+mode, tr: tr+mode, bl: bl+mode, br: br+mode };
        this._style.borderTopLeftRadius = this._cornerRad.tl;
        this._style.borderTopRightRadius = this._cornerRad.tr;
        this._style.borderBottomLeftRadius = this._cornerRad.bl;
        this._style.borderBottomRightRadius = this._cornerRad.br;
        this._render();
    }

    set activeItems( values ) {
        if(!values || !this._options.includes("toggle")) return;
        if(typeof values == "number") values = [values];
        if(typeof values !== "object") return;
        let el;
        for(var i=this._list.length-1; i>=0; i--) {
            el = this._div.querySelector(".MuiButton-root.uiButtonGroup-"+this._id+"-"+i);
            if( values.includes(i) ) {
                el.classList.add("uiToggle-active");
                this._active[i] = true;
                if( this._options.includes("radio") ) break;
            }
            else {
                el.classList.remove("uiToggle-active");
                this._active[i] = false;
            }
        }
    }

    // more work here
    get activeItems() {
        const ret = [];
        this._active.map((m, i) => {
            if(m == true) ret.push(i);
        });
        return ret;
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

/** ## Examples */

/**
@sample Basic ButtonGroup
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add a ButtonGroup control to the main layout
        this.btg = ui.addButtonGroup(this.main, buttons, "", 0.9)

        // Add a callback handler for `onTouch` event
        this.btg.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */

/**
@sample ButtonGroup variants
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add a contained ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add an outlined ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Outlined,Primary", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add a text ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Text,Primary", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */

/**
@sample ButtonGroup colors
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add defualt ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Default", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add primary ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Primary", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add secondary ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Secondary", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */

/**
@sample ButtonGroup sizes
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add small size ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Small", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add medium/default size ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Medium", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add large size ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Large", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */

/**
@sample ButtonGroup icons
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["delete", "shopping_cart", "dashboard"]

        // Add small and primary contained ButtonGroup icons to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Small,Icon")
        this.btg1.setOnTouch( this.onTouch )

        // Add a medium and secondary outlined ButtonGroup icons to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Outlined,Secondary,Medium,Icon")
        this.btg2.setOnTouch( this.onTouch )

        // Add a large and default text ButtonGroup icons to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Text,Large,Icon")
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */