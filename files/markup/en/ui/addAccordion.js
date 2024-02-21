/** # Accordion
 * @abbrev acc
 * Adds an accordion or expansion panel into your app.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs This is very useful to display controls that are grouped together. Add an accordion using the `addAccordion` method like this:
 * $$ acc = ui.addAccordion(parent, titles, options, width, height) $$
 * @param {Object} parent The parent layout where to add the text.
 * @param {Array} titles An array of accordion titles.
 * @param {String} options A comma separated options.\nStyle: `Square`\nLayout type: `Linear`, `Absolute`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object-Accordion
 */

ui.addAccordion = function( parent, titles, options, width, height )
{
    return new ui.Accordion( parent, titles, options, width, height )
}

ui.Accordion = class extends ui.Control
{
	constructor( parent, titles, options, width, height )
	{
		super( parent, width, height, options, "Accordion" )
		this._titles = titles || [];
        if( typeof(titles) == "string" ) this._titles = titles.split(",");
        else if( typeof(titles) == "object" ) this._titles = JSON.parse(JSON.stringify(titles));
        this._expanded = -1;
		this._layouts = [];
		this._secondaryText = [];
        this._headingWidth = "33.33%";
		this._expandIcon = "expand_more";
		this._disabled = new Array( this._titles.length ).fill( false );
        this._layType = this.options.includes("absolute") ? "Absolute" : "Linear"
        this._style1 = {} // for title text
        this._style2 = {} // for secondary text
 		for( var i=0; i<this._titles.length; i++ ) {
			this._layouts[i] = ui.addLayout(null, this._layType, "nodom,Left", 1, 1 )
            if( this._layType == "Absolute" ) this._layouts[i]._div2.style.height = "100%"
			if( typeof( this._titles[i] ) == "object" ) {
				this._secondaryText[i] = this._titles[i][1]
				this._titles[i] = this._titles[i][0]
			}
		}
        this._props.defaultExpanded = false;
        this._cornerRad;
        this._itemPad = {};
        // init props
        this._initProps()
		this._render()
	}

    // INVISIBLE METHODS
    _initProps()
    {
        this._props.square = this._options.includes( "square" )
    }

	_initStyle() { this._style.width = "100%"; this._style.height = "100%" }

	_onChange(i, expand) {
		if(expand) this._expanded = i
		else this._expanded = -1
		this._render()
		if( this._touch ) this._touch( i, expand )
	}
	_getDivRef(i, div) {
		if(div && this._layouts[i] ) div.appendChild( this._layouts[i]._div )
	}
	_onContextMenu( title, index, event )
	{
        if( this._ctxMenu ) {
            this._ctxMenu( title, index, this._getEventObject(event, null, null, "contextmenu") )
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
		const {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } = window['MaterialUI']
		this._ctl = e(
			'div', {
				style: { width:"100%", height: "100%" }
			},
			this._titles.map( (title, i) => {
                let cStyle = this._style;
                if(i == 0 && this._cornerRad) {
                    cStyle = JSON.parse(JSON.stringify(this._style));
                    cStyle.borderTopLeftRadius = this._cornerRad.tl;
                    cStyle.borderTopRightRadius = this._cornerRad.tr;
                } else if(i == this._titles.length-1 && this._cornerRad) {
                    cStyle = JSON.parse(JSON.stringify(this._style));
                    cStyle.borderBottomLeftRadius = this._cornerRad.bl;
                    cStyle.borderBottomRightRadius = this._cornerRad.br;
                }
				return e(ExpansionPanel, {
						...this._props,
						key: i,
						expanded: this._expanded == i,
						onChange: (e, expand) => { this._onChange(i, expand) },
						style: { ...cStyle, ...this._itemPad },
						disabled: this._disabled[i],
						onContextMenu: this._onContextMenu.bind(this, title, i)
					}, [
						e(ExpansionPanelSummary, {
								key: 0,
								expandIcon: e("i", {className:"material-icons"}, this._expandIcon)
							}, [
								e( Typography, {
									key:0,
									style: {
										flexBasis: this._secondaryText[i] ? this._headingWidth:"wrap-content",
										flexShrink: 0, ...this._style1
									}
								}, title),
								(this._secondaryText[i] && e( Typography, { key:1, color:"textSecondary", style:{...this._style2} }, this._secondaryText[i]))
							]
						),
						e( ExpansionPanelDetails,
							{
								key: 1,
                                ref: ref => { this._getDivRef( i, ref ) },
                                style: { height: "100%" }
							}, ''
						)
					]
				)
			})
		)
		ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
	}

	// VISIBLE PROPERTIES

	/** ## Properties
	 * Here are the properties you can set or get from the Accordion Component.
	 * @prop {Number} titleWidth Sets and returns the width of the title as fraction. Useful when you have a long title.
	 * @prop {String} expandIcon Sets or returns the material icon font for the expand icon.
	 * @prop {Array} titles Sets or returns the list of titles for the accordion panel. Each element of the titles array is a string.
	 * @prop {Number} toggle Collapse or shrink a corresponding accordion by its index.
     * @prop {String} textColor1 Sets or returns the title text color in hexadecimal format `#rrggbb`
     * @prop {String} textColor2 Sets or returns the secondary text color in hexadecimal format `#rrggbb`
     * @prop {Boolean} disabled Sets or returns whether the accordion is disabled or not. `True` only if all accordion is disable, otherwise `false`.
     * @prop {Number} textSize1 Sets or returns the accordion title text size.
     * @prop {Number} textSize2 Sets or returns the accordion secondary text size.
     * @prop {Boolean} rounded Sets or returns whether the accordion is rounded or not.
     * @prop {Number} cornerRadius Sets or returns the corner radius of the accordion panel. You can also pass an array of the form `[tl, tr, bl, br]`. See also `setCornerRadius` method.
     * @prop {Array} secondaryText Sets or returns the secondary text of the accordion items. See also `setSecondaryText` method.
     * @prop {Array} itemPadding Sets or returns the padding of each accordion item. See also `setItemPadding` method.
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
	 * Here are the methods available for Accordion Component.
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

	setTitles( titles ) {
		this._titles = titles || [];
		if( typeof(titles) == "string" ) this._titles = titles.split(",");
        else if( typeof(titles) == "object" ) this._titles = JSON.parse(JSON.stringify(titles));
		for( var i=0; i<this._titles.length; i++ ) {
			// add layout if not yet defined
			if( !this._titles[i] ) this._titles = this._titles.splice(i, 1)
			else {
				if( !this._layouts[i] ) {
                    this._layouts[i] = ui.addLayout(null, this._layType, "nodom,Left", 1, 1 )
                    if( this._layType == "Absolute" ) this._layouts[i]._div2.style.height = "100%"
                }
				// check if this._titles[i] is array
				if( typeof( this._titles[i] ) == "object" ) {
					this._secondaryText[i] = this._titles[i][1]
					this._titles[i] = this._titles[i][0]
				}
			}
		}
        this._disabled = [];
		this._render()
	}
	set titles( titles ) {
		this._titles = titles || [];
		if( typeof(titles) == "string" ) this._titles = titles.split(",");
        else if( typeof(titles) == "object" ) this._titles = JSON.parse(JSON.stringify(titles));
		for( var i=0; i<this._titles.length; i++ ) {
			// add layout if not yet defined
			if( !this._titles[i] ) this._titles = this._titles.splice(i, 1)
			else {
				if( !this._layouts[i] ) {
                    this._layouts[i] = ui.addLayout(null, this._layType, "nodom,Left", 1, 1 )
                    if( this._layType == "Absolute" ) this._layouts[i]._div2.style.height = "100%"
                }
				// check if this._titles[i] is array
				if( typeof( this._titles[i] ) == "object" ) {
					this._secondaryText[i] = this._titles[i][1]
					this._titles[i] = this._titles[i][0]
				}
			}
		}
        this._disabled = [];
		this._render()
	}
	get titles() { return this._titles; }

	/** ### getLayout
	 * Get the layout of the corresponding accordion item. This is very useful when you add a control or component that will be displayed when the accordion collapse.
	 * $$ acc.getLayout( index ) $$
	 * @param {Number} index The index of the accordion. You can also pass accordion title.
	 * @returns Object
	 */
	getLayout( index )
	{
		if( typeof(index) == "number" && index >= 0 && index < this._titles.length ) return this._layouts[ index ]
		else if( typeof(index) == "string" ) return this._layouts[ this._titles.indexOf( index.trim() ) ]
	}

	/** ### setTitleText
	 * Update the accordion title by passing its corresponding index.
	 * $$ acc.setTitleText( index, text ) $$
	 * @param {Number} index The index of the corresponding title to updates.
	 * @param {String} title The new title text.
	 */
	setTitleText( index, title )
	{
		if( typeof( index ) == "number" && typeof( title ) == "string" ) this._titles[ index ] = title
		this._render()
	}

	/** ### setSecondaryText
	 * Adds a secondary text on the accordion.
	 * $$ acc.setSecondaryText( text ) $$
	 * @param {Array} text The secondary text to display. You can also pass arguments as a comma separated string.
	 * @param {Number} index If `index` is provided, the corresponding index will be updated with the new text.
	 */
	setSecondaryText(text, index)
	{
		if(typeof index == "number" && typeof text == "string") this._secondaryText[index] = text;
		else this._secondaryText = typeof text == "string" ? text.split(",") : (text || []);
		this._render()
	}

    set secondaryText( arr ) {
        this._secondaryText = typeof arr == "string" ? arr.split(",") : (arr || []);
		this._render()
    }

    get secondaryText() { return this._secondaryText }
	
	setTitleWidth( fraction )
	{
		if(!fraction) return
		this._headingWidth = (fraction/100) * 100
		this._render()
	}
	set titleWidth( fraction ) {
		if(!fraction) return
		this._headingWidth = (fraction/100) * 100
		this._render()
	}
	get titleWidth() { return this._headingWidth }

	/** ### setExpandIcon
	 * Sets the expand icon at the right of the accordion.
	 * $$ acc.setExpandIcon( icon ) $$
	 * @param {String} icon A material icon
	 */
	setExpandIcon( icon )
	{
		this._expandIcon = icon ? icon.toLowerCase() : "expand_more"
		this._render()
	}

	set expandIcon( icon ) {
		this._expandIcon = icon ? icon.toLowerCase() : "expand_more"
		this._render()
	}

	get expandIcon() { return this._expandIcon }

	/** ### addItem
	 * Adds an item to the accordion.
	 * $$ acc.addItem( title, secondaryText, index ) $$
	 * @param {String} title Accordion title
	 * @param {String} secondaryText Accordion secondary text
	 * @param {Number} index The index at which the accordion item will be added. If `null`, the item will be added at the bottom of the accordion.
	 */
	addItem( title, secondaryText, index )
	{
		var lay = ui.addLayout(null, this._layType, "nodom,Left", 1, 1)
        if( this._layType == "Absolute" ) lay._div2.style.height = "100%"
		if( typeof( index ) == "number" && index >= 0 )
		{
			this._titles.splice( index, 0, title )
			this._layouts.splice( index, 0, lay )
			this._secondaryText.splice( index, 0, secondaryText )
			this._disabled.splice( index, 0, false )
		} else {
			this._titles.push( title )
			this._layouts.push( lay )
			this._secondaryText[ this._titles.length - 1 ] = secondaryText
			this._disabled.push( false )
		}
		this._render()
	}

	/** ### removeItemByIndex
	 * Removes accordion item by its index.
	 * $$ acc.removeItemByIndex( index ) $$
	 * @param {Number} index The index of the corresponding accordion to remove.
	 */
	removeItemByIndex( index )
	{
		this._titles.splice( index, 1 )
		this._layouts.splice( index, 1 )
		this._secondaryText.splice( index, 1 )
		this._disabled.splice( index, 1 )
		this._render()
	}

	/** ### removeItemByName
	 * Removes accordion item by its title name.
	 * $$ acc.removeItemByName( title ) $$
	 * @param {String} title The title of the corresponding accordion to remove.
	 */
	removeItemByName( title )
	{
		var index = this._titles.indexOf( title.trim() )
		this.removeItemByIndex( index )
	}

	/** ### shiftItem
	 * Removes the first accordion item. This will return the item being removed.
	 * $$ acc.shiftItem() $$
	 */
	shiftItem()
	{
        let item = this._titles[0];
        let sec = this._secondaryText[0];
		this.removeItemByIndex(0);
        return [item, sec];
    }

	/** ### popItem
	 * Removes the last accordion item. This will return the item being removed.
	 * $$ acc.popItem() $$
	 */
	popItem()
	{
        let item = this._titles[this._titles.length - 1];
        let sec = this._secondaryText[this._titles.length - 1];
		this.removeItemByIndex(this._titles.length - 1);
        return [item, sec];
	}

	/** ### setEnabled
	 * Enable or disable the accordion component or an item in the accordion component.
	 * $$ btg.setEnabled( index, value ) $$
	 * @param {Number} index The index of the corresponding accordion.
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
     * Get the enabled state of an accordion item by its index.
     * @param {Number} index The index of the accordion item.
     * @returns Boolean
     */
    getEnabled( index ) {
        if( typeof(index)!="number" || index < 0 ) return null
        return !this._disabled[index]
    }

    /** ### setEnabledByName
     * Enable or disable an accordion item by its name.
     * $$ acc.setEnabledByName( name, value ) $$
     * @param {String} name The title of the accordion
     * @param {Boolean} value Values can be `true` or `false`.
     */
    setEnabledByName( name, value ) {
        if( typeof(name)!="string" || typeof(value)!="boolean" ) return
        var index = this._titles.findIndex( m => m.includes(name.trim()) )
        this._disabled[index] = !value
        this._render()
    }

    /** ### getEnabledByName
     * Get the enabled state of an accordion item by its name.
     * $$ acc.getEnabledByName( name ) $$
     * @param {String} name The title of the accordion.
     * @returns Boolean
     */
    getEnabledByName( name ) {
        if( typeof(name)!="string" ) return null
        var index = this._titles.findIndex( m => m.includes(name.trim()) )
        return !this._disabled[index]
    }

    set disabled( value ) {
        this._disabled.fill( value )
        this._render()
    }
    get disabled() {
        return this._disabled.every( m => m === true )
    }

	setToggle( index ) {
		if( this._expanded == index ) this._expanded = -1
		else this._expanded = index
		this._render()
	}
	set toggle( index ) {
		if( this._expanded == index ) this._expanded = -1
		else this._expanded = index
		this._render()
	}

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

	/** ### setOnTouch
	 * Sets a callback function when the accordion is touch.
	 * $$ acc.setOnTouch( callback ) $$
	 * @param {Function} callback The callback function to be called. ---> @arg {Number} index The index of the corresponding accordion item. @arg {Boolean} expand The expanded state of the accordion.
	 */

	/** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ acc.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} title The accordion title text. @arg {Number} index The index of the corresponding accordion item. @arg {Object} pos The position of the touch event.
     */

    // don't remove this one

    /** ### setTextColor
     * Sets the color of the title and the secondary text respectively.
     * $$ acc.setTextColor(color1, color2) $$
     * @param {String} color1 Color of the title text in hexadecimal format `#rrggbb`
     * @param {String} color2 Color of the secondary text in hexadecimal format `#rrggbb`
     */
    setTextColor(clr1, clr2) {
        if(clr1) this._style1.color = clr1
        if(clr2) this._style2.color = clr2
        this._render()
    }

    set textColor1(clr) {
        this._style1.color = clr
        this._render()
    }
    get textColor1() { return this._style1.color }

    set textSize1(size) {
        this._style1.fontSize = size
        this._render()
    }
    get textSize1() { return this._style1.fontSize }

    set textColor2(clr) {
        this._style2.color = clr
        this._render()
    }
    get textColor2() { return this._style2.color }

    set textSize2(size) {
        this._style2.fontSize = size
        this._render()
    }
    get textSize2() { return this._style2.fontSize }

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

    set rounded( value ) {
        this._props.square = !value
        this._render()
    }
    get rounded() { return !this._props.square }

    /** ### setCornerRadius
     * Sets the corner radius of the top and bottom accordion panels.
     * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} tl Top-left corner radius.
     * @param {Number} tr Top-right corner radius.
     * @param {Number} bl Bottom-left corner radius.
     * @param {Number} br Bottom-right corner radius.
     * @param {String} mode Unit of measurement. Values are `px` `rem` or `%`.
     */
    setCornerRadius(tl, tr, bl, br, mode="px") {
        this._cornerRad = { tl: tl+mode, tr: tr+mode, bl: bl+mode, br: br+mode };
        let div = this._div.children[0];
        let panels = div.children;
        panels[0].style.borderTopLeftRadius = this._cornerRad.tl;
        panels[0].style.borderTopRightRadius = this._cornerRad.tr;
        panels[panels.length-1].style.borderBottomLeftRadius = this._cornerRad.bl;
        panels[panels.length-1].style.borderBottomRightRadius = this._cornerRad.br;
    }

    /** ### setItemPadding
     * Sets the padding of the accordion item. See `itemPadding` property for equivalent setter/getter property.
     * $$ acc.setItemPadding(left, top, right, bottom, mode) $$
     * @param {Number} left Left padding of the accordion item.
     * @param {Number} top Top padding of the accordion item.
     * @param {Number} right Right padding of the accordion item.
     * @param {Number} bottom Bottom padding of the accordion item.
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
@sample Complete accordion implementation
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen main layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        this.accords = [ "Accordion 1", "Accordion 2", "Accordion 3" ]

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion( this.main, this.accords, "", 0.9 )

        // Secondary text to display
        var secTxt = [
            "This is the secondary text 1",
            "This is the secondary text 2",
            "This is the secondary text 3"
        ]

        // sets the secondary text
        this.acc.setSecondaryText( secTxt )

        // Add ontouch event handler to the accordion
        this.acc.setOnTouch( this.onTouch )

        // Add controls to the first accordion layout
        this.lay1 = this.acc.getLayout( 0 )
        this.txt = ui.addText(this.lay1, "This is a text in the first layout.")

        // Add controls to the second layout
        this.lay2 = this.acc.getLayout( 1 )
        this.btn = ui.addButton(this.lay2, "Button", "Primary")

        // Add controls to the third layout
        this.lay3 = this.acc.getLayout( 2 )
        this.tfd = ui.addTextField(this.lay3, "", "Outlined", 0.3)
        this.tfd.label = "Enter some text"
    }
    
    onTouch(index, expand)
    {
        var msg = `${this.accords[index]} is ${expand ? "open" : "close"}`
        ui.showPopup( msg )
    }
}
*/


/**
@sample Items manipulation
class Main extends App
{
    onStart()
    {
        this.count = 1;

        // Creates a fullscreen main layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins(0, 0.01, 0, 0.01)

        var accords = [ "Accordion 1", "Accordion 2", "Accordion 3" ]

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion( this.main, accords, "", 0.9 )

        this.lay = ui.addLayout(this.main, "Linear", "Horizontal", 0.9)
        this.lay.childSpacing = "evenly"

        // add a button controls to add or remove accordion item
        this.btn1 = ui.addButton( this.lay, "Append Item" )
        this.btn1.setOnTouch( this.btn1_onTouch )

        this.btn2 = ui.addButton( this.lay, "Add Item in index 1" )
        this.btn2.setOnTouch( this.btn2_onTouch )

        this.btn3 = ui.addButton( this.lay, "Remove Item" )
        this.btn3.setOnTouch(  this.btn3_onTouch )
    }

    btn1_onTouch()
    {
        // add an item at the bottom of the accordion
        this.acc.addItem( "New Bottom Title", "New secondary text" )
    }

    btn2_onTouch()
    {
        var title = "New Title " + this.count++
        // insert item in the second index
        this.acc.addItem( title, "New secondary text", 1 )
    }

    btn3_onTouch()
    {
        this.acc.removeItemByIndex( 2 )
        ui.showPopup( "Second item is removed" )
    }
}
 */

/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen main layout.
        this.main = ui.addLayout("main", "Linear", "VCenter")

        var items = ["Accordion 1", "Accordion 2", "Accordion 3"]
        var texts = ["Description for item 1", "Description for item 2", "Description for item 3"];

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion(this.main, items, "", 0.9)
        this.acc.setSecondaryText( texts )

        // Sets the background color
        this.acc.backColor = "#b2dfdb"

        // Sets the text-sizes
        this.acc.textSize1 = 18
        this.acc.textSize2 = 14

        // Sets the text colors
        this.acc.textColor1 = "#00695c"
        this.acc.textColor2 = "#009688"

        // Sets the corner radius
        this.acc.cornerRadius = 14

        // Sets the expand icon
        this.acc.expandIcon = "favorite"
    }
}
 */