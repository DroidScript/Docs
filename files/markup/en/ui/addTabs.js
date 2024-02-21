
/** # Tabs
 * @abbrev tab
 * Tabs in user interfaces facilitate seamless navigation between app sections.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs Positioned in the AppBar, they offer labeled or icon-based selection, enabling users to switch content effortlessly. Consistent styling and clear hierarchy enhances the overall user experience, ensuring intuitive navigation within the application. Add a tabs into your app using the `addTabs` method like this:
 * $$ tab = ui.addTabs(parent, list, options, width, height) $$
 * @param {Object} parent The parent layout where to add the Tabs Component.
 * @param {Array} list An array of tab names.
 * @param {String} options A comma separated options.\nSwipe: `Swipeable`\nTheme Colors: `Primary`, `Secondary`, `Inherit`, `Transparent`, `Default`\nVariant: `Standard`, `Scrollable`, `FullWidth`\nLayout: `Linear`, `Absolute`\nUtils: `Icon`, `Center`, `Paper`
 * @param {Number} width Fraction of the parent width `[0-1]`
 * @param {Number} height Fraction of the parent height `[0-1]`
 * @returns Object Tabs
 * Default Tab variant for mobile screens is `fullWidth` unless provided.
 */

ui.addTabs = function(parent, list, options, width, height) {
	return new ui.Tabs(parent, list, options, width, height)
}

ui.Tabs = class extends ui.Control
{
	constructor( parent, list, options, width, height )
	{
		super( parent, width, height, options, "Tabs" )
		this._names = list || [];
		if( typeof(list) == "string" ) this._names = list.split(",");
        else if( typeof(list) == "object" ) this._names = JSON.parse(JSON.stringify(list));
		this._value = 0
		this._tabStyle = {}
		this._layouts = []
		this._disabled = []
		this._icon = false
		this._refs = []
        this._indicatorStyle = {};
        this._indicator = {}
		this._appBarProps = {
            position: "static"
        }
		this._tabProps = {
            indicatorColor: 'primary',
            textColor: 'primary'
        }
        this._layType = "Linear"
        this._style1 = {}
        this._style2 = {}
        this._style3 = {}
		this._initProps()
        this._initStyle()
		this._addLayouts()
		this._render()
        glob._abs_lay.push( this );
	}

	/* Invisible methods */
	_initProps()
	{
		this._appBarProps.color = this._getClr();
		this._tabProps.variant = this._getVariant()
		this._tabProps.centered = (this._options.includes('center') && this._getVariant()!=='scrollable') ? true:false
		this._tabProps.orientation = this._options.includes('vert') ? "vertical" : "horizontal"	
		this._icon = this._options.includes( "icon" )
        this._layType = this.options.includes("absolute") ? "Absolute" : "Linear"
        this._formatList()
	}
    _initStyle()
    {
        if(this._tabProps.orientation == "horizontal") {
            this._style = {
                width: "100%",
                display: "flex"
            }
            this._divStyle = {
                width: "100%",
                height: "100%",
                display: "inline-flex",
                flexDirection: "column"
            }
            this.slideStyle = {
                overflowY: "hidden"
            }
        }
        else {
            this._style = {
                width: "fit-content",
                height: "100%",
                display: "flex"
            }
            this._divStyle = {
                width: "100%",
                height: "100%",
                display: "inline-flex",
                flexDirection: "row"
            }
            this.slideStyle = {
                overflowX: "hidden",
                height: "100%"
            }
        }
    }
	_formatList()
    {
        this._names = this._names.map( el => {
            if(this._icon && typeof el == "string") return el.split(":")
            return el
        })
    }

	_addLayouts() {
		for( var i=0; i<this._names.length; i++ )
			if( !this._layouts[i] ) {
                this._layouts[i] = ui.addLayout(null, this._layType, "nodom", 1, 1 )
                if( this._layType == "Absolute" ) this._layouts[i]._div2.style.height = "100%"
            }
	}

	// get the reference of the layout
	_getRef(i, ref) {
		this._refs[i] = ref
		if(this._refs[i] && this._layouts[i]) this._refs[i].appendChild(this._layouts[i]._div)
	}
	
	// get the tab variant: fullwidth for mobile, scrollable for largers views and standard for default values
	_getVariant() {
		if(this._options.includes('fullwidth')) return "fullWidth";
		else if(this._options.includes('scrollable')) return "scrollable";
        const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        return isMobile ? "fullWidth" : "standard";
	}
	// get the app bar color
	_getClr() {
		if(this._options.includes('primary')) return 'primary'
		if(this._options.includes('secondary')) return 'secondary'
		if(this._options.includes('inherit')) return 'inherit'
		if(this._options.includes('transparent')) return 'transparent'
		else return 'default'
	}
	// handle on tab change
	_onChange(e, val) {
		this._value = val
		this._render()
		if(this._change) this._change(this._names[val], val)
	}
	_onClick(text, index, e) {
		if(this._touch) this._touch(text, index, this._getEventObject(e, null, null, "touch"))
	}
	_onContextMenu( text, index, event ) {
        if( this._ctxMenu ) {
            this._ctxMenu( text, index, this._getEventObject(event, null, null, "contextmenu") )
            var e = event || window.event
            e.preventDefault && e.preventDefault()
            e.stopPropagation && e.stopPropagation()
            e.cancelBubble = true
            e.returnValue = false
            return false;
        }
	}
    _getIndexByName( name ) {
        var index = this._names.indexOf( name.trim() )
        if( this._icon ) {
            var x = this._names.map( m => {
                m = typeof(m)=="string" ? m.split(":") : m
                return m[1] ? m[1].trim() : m[0].trim()
            })
            index = x.indexOf( name.trim() )
        }
        return index
    }

	_render()
	{
		let e = React.createElement
		let { AppBar, Tabs, Tab, Icon, Paper } = window['MaterialUI']

        this._tabpanels = this._names.map( (name, i) => {
            let hid = this._value !== i;
            if( this._options.includes("swipe")) hid = false;
            return e( 'div', {
                key: i+1,
                role: "tabpanel",
                hidden: hid,
                ref: this._value == i  ? this._getRef.bind(this, i) : null,
                style: { width: "100%", height: "100%", position: "relative" }
            }, "")
        })

		this._ctl = e(
			'div', { style: { ...this._divStyle }, className: "tab-panels" },
			[
				e( this._options.includes("paper") ? Paper : AppBar, {
						...this._appBarProps,
						key: 0,
                        style: { ...this._style, position: "relative", zIndex: 1 }
					}, e( Tabs, {
							value: this._value,
					        onChange: this._onChange.bind(this),
					        'aria-label':"full width tabs example",
					        ...this._tabProps,
							style: { ...this._style3 }
						},
						this._names.map((name, i) => {
                            var _props = {
                                label: e("span", {style:{...this._style1}}, this._icon?name[1]:name),
                                key: i,
                                disabled: this._disabled[i],
                                style: {
                                    ...this._tabStyle,
                                    //width: (100/this._names.length)+"%"
                                },
                                onClick: platform.ios ? null : this._onClick.bind(this, (this._icon?name[1]:name), i),
                                onTouchEnd: platform.ios ? this._onClick.bind(this, (this._icon?name[1]:name), i) : null,
                                onContextMenu: this._onContextMenu.bind(this, (this._icon?name[1]:name), i),
                                id: `full-width-tab-${i}`,
                                'aria-controls': `full-width-tabpanel-${i}`,
                            }
                            if( this._icon ) _props.icon = e( Icon, {style:{...this._style2, marginRight: name[1] ? 8 : 0 }}, name[0] )
                            return e( Tab, _props )
                        })
					)
				),
                e( "div", {
                    key: 1,
                    // style: { width: "100%", height: "calc(100% - 48px)", position: "relative" }
                    style: { width: "100%", height: "100%", flex: 1, position: "relative" }
                },
                this._options.includes("swipe") ?
                    e( SwipeableViews, {
                            key: 1,
                            enableMouseEvents: true,
                            index: this._value,
                            onChangeIndex: e => {
                                this._value = e
                                this._render()
                            },
                            style: { width: "100%", height: "100%" },
                            containerStyle: { width: "100%", height: "100%" },
                            slideStyle: { ...this.slideStyle },
                            axis: this._tabProps.orientation == "vertical" ? "y" : "x"
                        },
                        this._tabpanels
                    ) : 
                    this._tabpanels
                )
			]
		)
		ReactDOM.render(this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName()
            //Render indicator style with delay to finish initial animation
            setTimeout(this._styleIndicator.bind(this), 1)
        })
	}

    _styleIndicator() {
        const el = this._div.querySelector(".MuiTabs-indicator")
        const b = this._div.querySelector(".MuiTab-root")
        this._indicator.fw = this._tabProps.orientation == "vertical" ? b.getBoundingClientRect().height : b.getBoundingClientRect().width
        if(this._tabProps.orientation == "vertical") {
            if(this._indicator.width > 0 && this._indicator.width <= 1) {
                const w = this._indicator.fw * this._indicator.width
                const l = (this._indicator.fw - w) / 2
                el.style.height = w + "px"
                el.style.top = (this._indicator.fw * this._value) + l + "px"
            }
            el.style.width = this._indicator.thickness+"px" || "2px"
            el.style.backgroundColor = this._indicator.color || ""
            el.style.borderRadius = this._indicator.radius+"px" || 0
        }
        else {
            if(this._indicator.width > 0 && this._indicator.width <= 1) {
                const w = this._indicator.fw * this._indicator.width
                const l = (this._indicator.fw - w) / 2
                el.style.width = w + "px"
                el.style.left = (this._indicator.fw * this._value) + l + "px"
            }
            el.style.height = this._indicator.thickness+"px" || "2px"
            el.style.backgroundColor = this._indicator.color || ""
            el.style.borderRadius = this._indicator.radius+"px" || 0
        }
    }

    _resize() { this._render() }

	/** ## Properties
	 * Here are the available setter and getter properties of the Tabs Component.
	 * @prop {String} color Sets or returns the theme color of the tab bar. Values can be `Default` `Primary` or `Secondary`
	 * @prop {String} textColor Sets or returns the theme color for the tab bar titles `Primary` or `Secondary`. You can also pass a hexadecimal color of the form `#rrggbb`
	 * @prop {String} variant Sets or returns the variant of the Tabs Component. Values can be `Standard` `Scrollable` or `FullWidth`
	 * @prop {Boolean} centered Sets or returns a boolean value whether the tabs are centered or not.
     * @prop {Number} iconSize Sets or returns the tab icon.
     * @prop {String} iconColor Sets or returns the color ofthe tab icon.
     * @prop {Number} elevation Sets or returns the elevation of the tab bar. Make sure to pass a `Paper` option for this to work.
     * @prop {String} scrollButtonMode Sets or returns the scroll button mode when tab items overflow the width of its container. Values are `auto` `desktop` `on` and `of`.
     * @prop {Number} indicatorWidth Sets or returns the width of the indicator bar as a fraction of the tab item width. Works only on `FullWidth` tab.
     * @prop {Number} indicatorThickness Sets or returns the thickness of the indicator bar in pixels.
     * @prop {Number} indicatorRadius Sets or returns the corner radius of the indicator bar in pixels.
     * @prop {String} indicatorColor Sets or returns the color of the indicator bar. You can pass theme color `primary` or `secondary` or in hexadecimal format `#rrggbb`.
     * @prop {Number} tabPadding Sets or returns the padding of the tab items. The return objects has the following props: `left`, `top`, `right` and `bottom`. You can pass an object to set paddings on all side or see `setTabPadding` method.
     * @prop {Number} tabHeight Sets or returns the height of the tab in pixels.
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
	 * Here are the available methods of the Tabs Component.
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
	 * Sets a callback function when the value of the tab changes.
	 * $$ tab.setOnChange(callback) $$
	 * @param {Function} callback The callback function. ---> @arg {String} name The tab name. @arg {Number} index The index of the corresponding tab.
	 */
	setOnChange( callback ) { this._change = callback }

    /** ### setOnTouch
     * Add a callback function when a tab item i click.
     * $$ tab.setOnTouch( callback ) $$
     * @param {Function} callback The callback function. ---> @arg {String} name The tab name text. @arg {Number} index The tab item index. @arg {Object} pos The event position object.
     */

	/** ### setTabs
	 * Sets the tab titles array.
	 * $$ tab.setTabs( tabs ) $$
	 * @param {Array} tabs The tab titles array. See examples for format.
	 */
	setTabs( tabs ) {
		this._names = tabs || [];
		if( typeof(tabs) == "string" ) this._names = tabs.split(",");
        else if( typeof(tabs) == "object" ) this._names = JSON.parse(JSON.stringify(tabs));
        this._disabled = [];
		this._addLayouts();
		this._render();
	}
    getTabs() { return this._names; }
    set tabs( tabs ) {
        this._names = tabs || [];
        if( typeof(tabs) == "string" ) this._names = tabs.split(",");
        else if( typeof(tabs) == "object" ) this._names = JSON.parse(JSON.stringify(tabs));
        this._disabled = [];
        this._addLayouts();
        this._render();
    }
    get tabs() { return this._names; }

	/** ### addTab
	 * Add or insert a tab to the Tabs Component.
	 * $$ tab.addTab( name )
	 * @param {String} name The name of the tab.
	 * @param {String} icon Material icon font.
	 * @param {Number} index The index in which to insert the tab.
	 */
	addTab(name, icon, index) {
		var tab = this._icon ? [ icon, name ] : name
		if(typeof index == "number") {
			this._names.splice(index, 0, tab)
			this._disabled.splice(index, 0, false)
			this._layouts[ index ] = ui.addLayout(null, this._layType, "nodom", 1, 1)
            if(this._layType == "Absolute") this._layouts[index]._div2.style.height = "100%"
		}
		else {
			this._names.push( tab )
            var lay = ui.addLayout(null, this._layType, "nodom", 1, 1)
            if(this._layType == "Absolute") lay._div2.style.height = "100%"
			this._layouts.push( lay )
		}
		this._render()
	}
    addItem(name, icon, index) { this.addTab(name, icon, index) }

	/** ### setTitleText
	 * Sets a new title for the corresponding tab.
	 * $$ tab.setTitleText( index, title ) $$
	 * @param {Number} index Index of the tab.
	 * @param {String} title The new title.
	 */
	setTitleText( index, title ) {
        if( this._icon ) this._names[index][1] = title
		else this._names[index] = title
		this._render()
	}

    /** ### setIcon
     * Sets an icon to a corresponding tab title.
     * $$ tab.setIcon( index, icon ) $$
     * @param {Number} index The index of the tab.
     * @param {String} icon Material icon font.
     */
    setIcon( index, icon ) {
        if( this._icon ) {
            this._names[index][0] = icon;
            this._render();
        }
    }

	/** ### removeTabByIndex
	 * Removes a tab item by its corresponding index.
	 * $$ tab.removeTabByIndex( index ) $$
	 * @param {Number} index The index of the corresponding tab to remove.
	 */
	removeTabByIndex( index )
	{
		this._names.splice(index, 1)
		this._layouts.splice(index, 1)
		this._disabled.splice(index, 1)
		this._refs.splice(index, 1)
		this._value = (this._value > 0) ? (this._value-1) : 0
		this._render()
	}
    removeItemByIndex( index ) { this.removeTabByIndex(index); }

	/** ### removeTabByName
	 * Removes a tab item by its corresponding name.
	 * $$ tab.removeTabByName( name ) $$
	 * @param {String} name The name of the corresponding tab to remove.
	 */
	removeTabByName( name ) { var i = this._names.indexOf(name.trim()); this.removeTabByIndex(i) }
    removeItemByName( name ) { var i = this._names.indexOf(name.trim()); this.removeTabByIndex(i) }

    /** ### shiftItem
     * Removes the first item in the tabs list. This will return the item being removed.
     * $$ var firstTab = tab.shiftItem() $$
     * @returns Object
     */
    shiftItem() {
        let item = this._names[0];
        this.removeTabByIndex(0);
        return item;
    }

    /** ### popItem
     * Removes the last item in the tabs list. This will return the item being removed.
     * $$ var lastTab = tab.popItem() $$
     * @returns Object
     */
    popItem() {
        let item = this._names[this._names.length-1];
        this.removeTabByIndex(this._names.length-1);
        return item;
    }
    
	/** ### getLayout
	 * Returns the layout of the corresponding tab. You can then add components into the returned layout.
	 * $$ tab.getLayout( name ) $$
	 * @param {String} name The name of the tab. You can also pass the index of the tab.
	 * @returns Object Layout
	 */
	getLayout( name )
	{
		var i = -1
		if( typeof(name) == "number" ) return this._layouts[name]
		if( !this._icon ) i = this._names.indexOf(name)
		else {
			for(var j=0; j<this._names.length; j++) {
				if( this._names[j][1] == name ) { i = j; break; }
			}
		}
		return this._layouts[i]
	}
	
	/** ### showTab
	 * Show a tab panel by its corresponding name. This will make the tab in active state.
	 * $$ tab.showTab( name ) $$
	 * @param {String} name The name of the tab to be shown.
	 */
	showTab( name ) {
		var index = this._names.findIndex(m => name == (this._icon ? m[1] : m));
		if(index < 0) return;
		this._value = index;
		this._render();
	}

	/** ### showTabByIndex
	 * Show a tab panel by its corresponding name. This will make the tab in active state.
	 * $$ tab.showTabByIndex( index ) $$
	 * @param {Number} index The index of the tab to be shown.
	 */
	showTabByIndex( index ) {
		if(index < 0) return;
		this._value = index;
		this._render();
	}

	/** ### setEnabled
	 * Enable or disable a tab item. Pass `index` as number if you want the corresponding tab index to be enabled or disabled.
	 * Pass `index` as Boolean, if you want to disable the entire Tabs component.
	 * $$ tab.setEnabled( index, value ) $$
	 * @param {Number} index The index of the corresponding tab. Pass `Boolean` if you want to disable the entire Tabs component.
	 * @param {Boolean} value Values can be `true` or `false`.
	 */
	setEnabled( index, value )
	{
		if( typeof(index)=="boolean" ) this._disabled.fill( !index )
        else if( typeof(index)!="number" || typeof(value)!="boolean" ) return
		else this._disabled[index] = !value
		this._render()
	}

    /** ### getEnabled
     * Get the enabled state of a tab.
     * $$ tab.getEnabled( index ) $$
     * @param {Number} index The index of the corresponding tab.
     * @returns Boolean
     */
    getEnabled( index ) {
        if( typeof(index)!="number" ) return null
        else if( typeof(index) == "string" ) return this.getEnabledByName(index)
        return this._disabled[index]
    }

    /** ### setEnabledByName
     * Enable or disable a tab by its name.
     * $$ tab.setEnabledByName( name, value ) $$
     * @param {String} name The name of the tab.
     * @param {Boolean} value Values can be `true` or `false`.
     */
    setEnabledByName( name, value ) {
        if( typeof(name)!="string" || typeof(value)!="boolean" ) return
        this.setEnabled( this._getIndexByName(name), value )
    }

    /** ### getEnabledByName
     * Get the enabled state of a tab by its name.
     * $$ tab.getEnabledByName( name ) $$
     * @param {String} name The name of the tab.
     * @returns Boolean
     */
    getEnabledByName( name ) {
        if( typeof(name)!="string" ) return null
        return !this._disabled[this._getIndexByName(name)]
    }

    set disabled( value ) {
        this._disabled.fill( value )
        this._render()
    }
    get disabled() {
        return this._disabled.every( m => m ===true )
    }

	isEnabled( name ) { let i = this._names.indexOf( name ); return !this._disabled[i] }

	setIndicatorColor( clr ) { this._tabProps.indicatorColor = clr; this._render() }
    getIndicatorColor() { return this._tabProps.indicatorColor }

	setColor(clr) { this._appBarProps.color = clr ? clr.toLowerCase() : ""; this.backColor = "" }
    getColor() { return this._appBarProps.color }

	set color(clr) {
        this._appBarProps.color = clr ? clr.toLowerCase() : ""
        this.tabColor = ""
    }
	get color() { return this._appBarProps.color }

	setTextColor( clr )
	{
		if(clr.includes('#')) {
			this._tabStyle.color = clr;
		} else {
			this._tabProps.textColor = clr
			this._tabProps.indicatorColor = clr
		}
		this._render()
	}
	set textColor( clr )
	{
		if(clr.includes('#')) {
			this._tabStyle.color = clr;
		} else {
			this._tabProps.textColor = clr
			this._tabProps.indicatorColor = clr
		}
		this._render()
	}
	get textColor() {
		if( this._tabProps.textColor ) return this._tabProps.textColor
		return this._tabStyle.color
	}

	setVariant( variant )
	{
		variant = variant ? variant.toLowerCase() : "standard"
		if( variant.includes( "scrollable" ) ) this._tabProps.variant = "scrollable"
		else if( variant.includes( "fullwidth" ) ) this._tabProps.variant = "fullWidth"
		this._render()
	}
    getVariant() { return this._tabProps.variant }
	set variant( variant )
	{
		variant = variant ? variant.toLowerCase() : "standard"
		if( variant.includes( "scrollable" ) ) this._tabProps.variant = "scrollable"
		else if( variant.includes( "fullwidth" ) ) this._tabProps.variant = "fullWidth"
		this._render()
	}
	get variant() { return this._tabProps.variant }

	setOrientation( orient ) { this.orientation = orient }
    getOrientation() { return this.orientation }
	set orientation( orient ) { this._tabProps.orientation = orient; this._initStyle(); this._render() }
	get orientation() { return this._tabProps.orientation }

	setCentered( val )
	{
		this._tabProps.centered = val
		this._render()
	}
	set centered( val )
	{
		this._tabProps.centered = val
		this._render()
	}
	get centered() { return this._tabProps.centered }
 
	isCentered() { return this._tabProps.centered }

	/** ### showScrollButton
	 * Determines the behavior of scroll buttons when tabs are set to `scrollable`.
	 * $$ tab.showScrollButton( mode ) $$
	 * @param {String} mode Values can be \n `auto` : will only present them when not all the items are visible \n `desktop` : will only present them on medium and larger viewports \n `on` : will always present them \n `off` : will never present them.
	 */
	showScrollButton( mode )
	{
		this._tabProps.scrollButtons = mode ? mode.toLowerCase() : "auto"
		this._render()
	}

    set scrollButtonMode( mode ) {
        this._tabProps.scrollButtons = mode ? mode.toLowerCase() : "auto";
		this._render();
    }
    get scrollButtonMode() { return this._tabProps.scrollButtons; }

	/** ### getLayoutIndex
	 * Get the index of the corresponding layout.
	 * @param {Object} layout The layout to check.
	 * @returns Number
	 */
	getLayoutIndex( layout ) {
		for( var i=0; i<this._layouts.length; i++ ) {
			if( layout == this._layouts[i] ) return i
		}
		return -1
	}

	/** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ tab.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} text The text of the tab item. @arg {Number} index The index of the corresponding tab item. @arg {Object} pos The position of the touch event.
     */

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

    set iconSize(size) {
        this._style2.fontSize = size
        this._render()
    }
    get iconSize() { return this._style2.fontSize }

    set iconColor(color) {
        this._style2.color = color
        this._render()
    }
    get iconColor() { return this._style2.color }

    set tabColor( color ) {
        this._style3.backgroundColor = color
        this._render()
    }
    get tabColor() { return this._style3.backgroundColor }

    set backColor( color ) {
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

    // works on paper tabs only
    set elevation( value ) {
        if( this._options.includes("paper") ) {
            this._appBarProps.elevation = value
            this._render()
        }
    }
    get elevation() { return this._appBarProps.elevation }

    /** ### setCornerRadius
     * Sets the corner radius of the tab.
     * $$ tab.setCornerRadius(tl, tr, bl, br, mode) $$
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
        this._render()
    }

    /** ### setIndicatorStyle
     * Add a custom styling to the indicator color.
     * $$ tab.setIndicatorStyle(width, thickness, color, radius)
     * @param {Number} width Fraction of the tab item width (horizontal tabs) or height (vertical tabs)
     * @param {Number} thickness Thickness in pixels
     * @param {String} color Hexadecimal color of the form `#rrggbb`
     * @param {Number} radius The corner radius in pixels
     */
    setIndicatorStyle(width, thickness, color="", radius=0) { this._indicator = {width, thickness, color, radius}, this._render() }
    
    /** ### getIndicatorStyle
     * Returns the indicator style as an object. Props are `width`, `thickness`, `color`, `radius` and `fw` which is the actual width or height.
     * $$ var s = tab.getIndicatorStyle()
     * @returns object
     */
    getIndicatorStyle() { return this._indicator }

    set indicatorWidth( width ) { this._indicator.width = width, this._render() }
    get indicatorWidth() { return this._indicator.width }

    set indicatorThickness( thickness ) {
        this._indicator.thickness = thickness
        const el = this._div.querySelector(".MuiTabs-indicator")
        if(this._tabProps.orientation == "vertical") el.style.width = thickness + "px"
        else el.style.height = thickness + "px"
    }
    get indicatorThickness() { return this._indicator.thickness }

    set indicatorRadius( rad ) {
        this._indicator.radius = rad
        this._div.querySelector(".MuiTabs-indicator").style.borderRadius = rad + "px"
    }
    get indicatorRadius() { return this._indicatorStyle.radius; }

    set indicatorColor(clr = "") {
        clr = clr.toLowerCase()
        if( "primary,secondary".includes(clr) ) {
            this._div.querySelector(".MuiTabs-indicator").style.backgroundColor = ""
            this._tabProps.indicatorColor = clr, this._indicator.color = ""
            return this._render()
        }
        this._indicator.color = clr
        this._div.querySelector(".MuiTabs-indicator").style.backgroundColor = clr
    }
	get indicatorColor() { return this._indicator.color || this._indicatorStyle.color }

    set alignTitle(align = "") {
        align = align.toLowerCase().trim()
        if(!align || this._alignTitle == align) return
        let tab = this._div.querySelectorAll("button .MuiTab-wrapper")
        tab.forEach( el => el.classList.remove("tab-title-" + this._alignTitle) )
        tab.forEach( el => el.classList.add("tab-title-" + align) )
        this._alignTitle = align
    }
    get alignTitle() { return this._alignTitle }

    /** ### setTabPadding
     * Sets the padding of the tab items.
     * $$ tab.setTabPadding(left, top, right, bottom, mode) $$
     * @param {Number} left The tab-item left padding.
     * @param {Number} top The tab-item top padding.
     * @param {Number} right The tab-item right padding.
     * @param {Number} bottom The tab-item bottom padding.
     * @param {String} mode Unit of measurement. Default is `px`. You can pass `%` `rem` `vw`.
     */
    setTabPadding(left, top, right, bottom, mode="px") {
        this._tabPadding = {left: left+mode, top: top+mode, right: right+mode, bottom: bottom+mode};
        let tab = this._div.querySelectorAll(".MuiTab-root");
        tab.forEach( el => {
            el.style.minWidth = 0;
            el.style.paddingLeft = this._tabPadding.left;
            el.style.paddingTop = this._tabPadding.top;
            el.style.paddingRight = this._tabPadding.right;
            el.style.paddingBottom = this._tabPadding.bottom;
        });
    }

    set tabPadding( val ) {
        if(typeof val == "object") this.setTabPadding(val[0], val[1], val[2], val[3], val[4])
        else this.setTabPadding(val, val, val, val)
    }
    get tabPadding() { return this._tabPadding; }

    set tabHeight( val ) {
        this._style3.height = val + "px";
        this._style3.minHeight = val + "px";
        this._render();
        let root = this._div.querySelectorAll(".MuiTab-root");
        root.forEach( m => {
            m.style.minHeight = val + "px";
            m.style.height = val + "px";
            m.style.padding = "0px 12px";
        });
    }
    get tabHeight() {
        let d = this._div.querySelector(".MuiTab-root").getBoundingClientRect()
        return parseInt( d.height );
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
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout( "main", "Linear", "FillXY,VCenter")
        this.main.backColor = "#e0e0e0"

        // Initialize tab names array
        var tabs = ["Tab 1", "Tab 2", "Tab 3"]

        // Adds a tab component to the main layout.
        this.tabs = ui.addTabs(this.main, tabs, "", 0.8, 0.8)

        // Handle tab changes
        this.tabs.setOnChange( this.onChange )

        // get the first tab and add a button control
        this.tab1 = this.tabs.getLayout(0)
        this.tab1.options = "VCenter"
        this.btn = ui.addButton(this.tab1, "Button", "Secondary", 0.5)

        // get the second tab and add a text control.
        this.tab2 = this.tabs.getLayout(1)
        this.tab2.options = "VCenter"
        this.txt = ui.addText(this.tab2, "Lorem ipsum dolor set amit", "Center", 1)

        // get the third tab and add a checkbox control
        this.tab3 = this.tabs.getLayout(2)
        this.tab3.options = "VCenter"
        this.ckb = ui.addCheckbox(this.tab3, "Check me", "Secondary")
    }

    onChange(tab, index)
    {
        ui.showPopup( tab + " : Index " + index)
    }
}
 */

/**
@sample  With Icon
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout( "main", "Linear", "FillXY,VCenter")
        this.main.backColor = "#e0e0e0"

        // Initialize tabs array with leading icons
        var tabs = [
            ["favorite", "Favorites"],
            ["bluetooth", "Bluetooth"],
            ["wifi", "Connection"]
        ]

        // Adds a tab component to the main layout and passing the `icon` option
        this.tabs = ui.addTabs(this.main, tabs, "Icon", 0.8, 0.8)

        // Handle tab changes
        this.tabs.setOnChange( this.onChange )

        // get the first tab and add a button control
        this.tab1 = this.tabs.getLayout(0)
        this.tab1.options = "VCenter"
        this.btn = ui.addButton(this.tab1, "Button", "Secondary", 0.5)

        // get the second tab and add a text control.
        this.tab2 = this.tabs.getLayout(1)
        this.tab2.options = "VCenter"
        this.txt = ui.addText(this.tab2, "Lorem ipsum dolor set amit", "Center", 1)

        // get the third tab and add a checkbox control
        this.tab3 = this.tabs.getLayout(2)
        this.tab3.options = "VCenter"
        this.ckb = ui.addCheckbox(this.tab3, "Check me", "Secondary")
    }

    onChange(tab, index)
    {
        ui.showPopup( tab + " : Index " + index)
    }
}
 */

/**
@sample Swipeable tabs
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout( "main", "Linear", "FillXY,VCenter")
        this.main.backColor = "#e0e0e0"

        // Initialize tabs names array
        var tabs = ["Tab 1", "Tab 2", "Tab 3"]

        // Adds a tab component to the main layout and passing the `swipeable` option
        // to enable swiping gesture
        this.tabs = ui.addTabs( this.main, tabs, "Swipeable", 0.8, 0.8)

        // Handle tab changes
        this.tabs.setOnChange( this.onChange )

        // get the first tab and add a text control
        this.tab1 = this.tabs.getLayout(0)
        this.tab1.options = "VCenter"
        this.tab1.backColor = "yellow"
        this.txt = ui.addText(this.tab1, "<--- Swipe to the left", "Center", 1)
        
        // get the second tab and add a button control.
        this.tab2 = this.tabs.getLayout(1)
        this.tab2.backColor = "green"

        // get the third tab and add a checkbox control
        this.tab3 = this.tabs.getLayout(2)
        this.tab3.backColor = "blue"
    }

    onChange(tab, index)
    {
        ui.showPopup( tab + " : Index " + index)
    }
}
 */

/**
@sample Open tabs dynamically
class Main extends App
{
    onStart()
    {
        // Set the primary and secondary theme colors
        ui.setThemeColor("#673ab7", "#ffc107")

        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "FillXY,VCenter")
        this.main.backColor = "#e0e0e0"

        // Initialize tabs names array with leading icons
        var tabs = [
            ["favorite", "Favorites"],
            ["bluetooth", "Bluetooth"],
            ["wifi", "Connection"]
        ]

        // Adds a tab component to the main layout
        this.tabs = ui.addTabs(this.main, tabs, "Icon,Center,Primary", 0.8, 0.8)

        // Handle tab changes
        this.tabs.setOnChange( this.onChange )

        // get the first tab and add a button control
        // to open the second tab by its index
        this.tab1 = this.tabs.getLayout(0)
        this.tab1.options = "VCenter"
        this.btn1 = ui.addButton(this.tab1, "Open next")
        this.btn1.setOnTouch(() => {
            this.tabs.showTabByIndex( 1 )
        })

        // get the second tab and add a button control
        // to open the last tab by its index
        this.tab2 = this.tabs.getLayout(1)
        this.tab2.options = "VCenter"
        this.btn2 = ui.addButton(this.tab2, "Open next", "Primary")
        this.btn2.setOnTouch(() => {
            this.tabs.showTabByIndex( 2 )
        })

        // get the third tab and add a button control 
        // to open the first tab by its tab name
        this.tab3 = this.tabs.getLayout(2)
        this.tab3.options = "VCenter"
        this.btn3 = ui.addButton(this.tab3, "Open previous", "Secondary")
        this.btn3.setOnTouch(() => {
            this.tabs.showTab( "Favorites" )
        })
    }

    onChange(tab, index)
    {
        ui.showPopup( tab + " : Index " + index)
    }
}
 */

/**
@sample Icon only
class Main extends App
{
    onStart()
    {
        // Set the primary and secondary theme colors
        ui.setTheme( "dark" )

        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "FillXY,VCenter")

        // Initialize tabs array with icons only
        var tabs = ["favorite", "person", "wifi"];

        // Adds a tab component to the main layout
        this.tabs = ui.addTabs(this.main, tabs, "Icon", 1, 1)

        // Set the tab height to 40px
        this.tabs.tabHeight = 40;

        // Handle tab changes
        this.tabs.setOnChange( this.onChange )

        // get the first tab and add a button control
        this.tab1 = this.tabs.getLayout(0)
        this.tab1.options = "VCenter"
        this.btn = ui.addButton(this.tab1, "Button", "Secondary", 0.5)

        // get the second tab and add a text control.
        this.tab2 = this.tabs.getLayout(1)
        this.tab2.options = "VCenter"
        this.txt = ui.addText(this.tab2, "Lorem ipsum dolor set amit", "Center", 1)

        // get the third tab and add a checkbox control
        this.tab3 = this.tabs.getLayout(2)
        this.tab3.options = "VCenter"
        this.ckb = ui.addCheckbox(this.tab3, "Check me", "Secondary")
    }

    onChange(tab, index)
    {
        ui.showPopup(tab + " : Index " + index, "Bottom")
    }
}
 */

/**
@sample Custom colors and sizes
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "FillXY,VCenter")

        // Initialize tabs array with leading icons
        var tabs = [
            ["favorite", "Favorites"],
            ["bluetooth", "Bluetooth"],
            ["wifi", "Connection"]
        ]

        // Adds a tab component to the main layout
        // add some styling to the backColor, textColor, iconColor, iconSize and indicator
        this.tabs = ui.addTabs(this.main, tabs, "Icon", 0.8, 0.8)
        this.tabs.backColor = "#ffccbc"
        this.tabs.textColor = "#f4511e"
        this.tabs.iconColor = "#f4511e"
        this.tabs.iconSize = "1.5rem"
        this.tabs.setIndicatorStyle(0.25, 4, "#f4511e", 4)
    }
}
 */
