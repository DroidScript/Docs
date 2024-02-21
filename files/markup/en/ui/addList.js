/** # List
 * @abbrev lst
 * Lists are continuous, vertical indexes of text or images.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs They are used to group together related pieces of data or informations to highlight association with each other and easy to read. They are frequently used for navigation as well as displaying general content. Add a list to your app by calling the `addList` method of the `ui` object.
 * $$ list = ui.addList(parent, list, options, width, height) $$
 * @param {Object} parent The parent layout
 * @param {Array} list An array of arrays. Each element is of the form `[icon, title, body, secondary]`
 * @param {String} options A comma separated options.\nMedia: `Icon`, `Avatar`\nStyling: `Dense`, `Inset`\nUtils: `Selectable`, `Divider`, `SecondaryText`, `NoRipple`, `NoScrollBar`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object List
 * If `Icon` option is passed, the list must be of the form `[icon, title, body, secondary]`. To display an image avatar, passed and additional `Avatar` option and the list must be of the form `[image, title, body, secondary]`
 * If no `Icon` option is passed, the list is treated as `[title, body, secondary]` by default.
 * The secondary action is an icon button by default, to display as a text passed `secondarytext` option.
 * Adding a `selectable` list will disregard the `icon` option.
 */
ui.addList = function(parent, list, options, width, height)
{
	return new ui.List(parent, list, options, width, height)
}

ui.List = class extends ui.Control
{
	constructor( parent, list, options, width, height )
	{
		super(parent, width, height, options, "List")
		this._list = list || [];
		this._inset = false
		this._leading = ""
		this._selectable = false
		this._checked = []
		this._label = ""
        this._iconClr = ""
        this._divider = false;
        this._button = true;
        this._secondaryAction = false
        this._paperStyle = {}
        this._paperProps = {}
        this._style1 = {}
        this._style2 = {}
        this._style3 = {}
        this._itemPad = {}
        this._initProps()
        this._formatList(list)
        this._initStyle()
		this._render()
	}

	// Invisible methods
    _initProps()
    {
        this._inset = this._options.includes('inset') ? true : false;
		this._leading = this._options.includes('icon') ? "icon" : (this._options.includes('avatar') ? "avatar" : "");
		this._selectable = this._options.includes('selectable') ? true : false;
        this._divider = this._options.includes("divider");
      
        this._props.list = {
            component: !this._options.includes('noripple') ? "nav" : "div",
            dense: this._options.includes('dense') ? true : false
        };
        this._props.avatar = {
            variant: "circle",
            style: { marginRight: 16 }
        };
        this._props.checkbox = { color: "secondary" };
        this._props.secondaryAction = { edge: "end" };
		
        this._paperProps.square = this._options.includes("square");
        this._paperProps.variant = this._options.includes("outline") ? "outlined" : "elevation";
        this._paperProps.elevation = this._options.includes("elevate") ? 1 : 0;
        this._button = !this._options.includes("noripple");
    }
    _initStyle()
    {
        this._paperStyle = { width: "100%", height: "100%" }

        this._itemPad = {
            paddingLeft: "1rem",
            paddingTop: "0.5rem",
            paddingRight: "1rem",
            paddingBottom: "0.5rem"
        }
    }

	_formatList() {
        if( typeof(this._list) == "string" ) this._list = this._list.split(",");
        else if( typeof(this._list) == "object" ) this._list = JSON.parse(JSON.stringify(this._list));
        var _hasIcon = this._options.includes("icon") || this._options.includes("avatar")
        this._list = this._list.map( function(m) {
            let x = typeof(m) == "string" ? m.split(":") : JSON.parse( JSON.stringify(m) );
            if( x.length > 2 ) {
                if( _hasIcon || x.length == 4 ) {
                    var y = x.splice(0, 1)
                    x.splice(2, 0, y[0])
                } else x.splice(2, 0, "");
            } else if(_hasIcon) {
                x[2] = "";
                var y = x.splice(0, 1);
                x.splice(2, 0, y[0]);
            }
            return x;
        })
	}

    _onTouch( i, e ) {
        e.stopPropagation();
        if( this._touchTimeout ) clearTimeout( this._touchTimeout );
        // if( !this._selectable || (this._selectable && !e.target.classList.contains("MuiIcon-root")) ) {
        //     if( this._touch ) this._touch( this._list[ i ][0], this._list[ i ][1], this._list[ i ][2], i, this._getEventObject(e) )
        // }
        if( !this._selectable ) {
            if( this._touch ) this._touch( this._list[ i ][0], this._list[ i ][1], this._list[ i ][2], this._list[ i ][3], i, this._getEventObject(e, null, null, "touch") )
        }
        else {
            this._checked[i] = !this._checked[i];
            this._render();
            if( this._select ) this._select(this._list[i][0], i, this._checked[i]);
        }
    }

    _onTouchStart(i, e ) {
        if( this._longTouch ) {
            if(e.button && e.button != 0) return;
            this._touchTimeout = setTimeout(
                this._longTouch.bind(this, this._list[i][0], this._list[i][1], this._list[i][2], this._list[ i ][3], i, this._getEventObject(e, null, null, "longtouch")),
            this._touchTimer);
            e = e || window.event
            e.preventDefault && e.preventDefault()
            e.stopPropagation && e.stopPropagation()
            e.cancelBubble = true
            e.returnValue = false
            return false
        }
    }

    _onContextMenu( item, index, event )
	{
        if( this._ctxMenu || this._longTouch )
        {
            if( this._ctxMenu ) this._ctxMenu( item[0], item[1], item[2], item[3], index, this._getEventObject(event, null, null, "contextmenu") );
            var e = event || window.event
            e.preventDefault && e.preventDefault()
            e.stopPropagation && e.stopPropagation()
            e.cancelBubble = true
            e.returnValue = false
            return false
        }
	}
    _onaction(i, t, e)
    {
        e.stopPropagation()
        if( this._onAction ) this._onAction(t, i, this._getEventObject(e, null, null, "touch"))
    }
	_render()
	{
		let e = React.createElement
		let {
            List, 
            ListItem, 
            ListItemText,
            Icon, 
            Avatar, 
            ListItemIcon, 
            ListSubheader, 
            ListItemSecondaryAction, 
            IconButton, 
            Paper, 
            Typography } = window['MaterialUI'];
            
		if( this._options.includes("secondarytext") ) {
            this._props.secondaryAction.variant = "subtitle2"
            this._props.secondaryAction.color = "textSecondary"
        }
        this._ctl = e( Paper, {
            ...this._paperProps,
            style: { ...this._paperStyle }
        }, e(
			List, {
				...this._props.list,
				subheader: this._label ? e(
                    ListSubheader, { style: {position:"relative", zIndex:0} }, this._label
                ):"",
                style: {
                    padding: "0px 0px",
                	overflowY:'auto',
                	overflowX: 'hidden',
                	width: "100%",
	                height: "100%",
	                ...this._style
                },
                className: this._options.includes("noscrollbar") ? "no-scroll-bar" : ""
			},
			[
				this._list.map( (t, i) => {
					return e(
						ListItem, {
							button: this._button,
							key: i,
                            divider: this._options.includes("divider"),
                            onClick: platform.ios ? null : this._onTouch.bind(this, i),
                            onTouchEnd: platform.ios ? this._onTouch.bind(this, i) : null,
                            onTouchStart: (platform.ios || platform.android) ? this._onTouchStart.bind(this, i) : null,
                            onMouseDown: (platform.ios || platform.android) ? null : this._onTouchStart.bind(this, i),
                            onContextMenu: this._onContextMenu.bind(this, t, i),
                            style: { ...this._itemPad }
						},
						[
							this._selectable ? e( ListItemIcon, {
                                    key:0
                                }, e(
                                    Icon, {
                                        ...this._props.checkbox,
                                        style: {...this._style3}
                                    },
                                    this._checked[i] ? "check_box" : "check_box_outline_blank"
                                )
                            ) : (
                                this._options.includes("avatar") ?
                                    e( Avatar, { key:0, alt: t[0]||"", src: t[2], ...this._props.avatar }, t[0]?t[0][0].toUpperCase() : "" ) :
                                    (
                                        this._options.includes("icon") ?
                                        e( ListItemIcon, {key:0}, e(Icon, { style:{...this._style3} }, t[2]) ) :
                                        null
                                    )
                            ),
							e(  ListItemText, {
                                key: 1,
                                primary: t[0],
                                secondary: t[1] || null,
                                inset: this._inset,
                                primaryTypographyProps: { style: {...this._style1} },
                                secondaryTypographyProps: { style: {...this._style2} }
                            }, null ),
                            (t[3] && e(ListItemSecondaryAction, {key: 2, style: {right: this._itemPad.paddingRight}}, e(
                                this._options.includes("secondarytext") ? Typography : IconButton, {
                                ...this._props.secondaryAction,
                                onClick: platform.ios ? null : this._onaction.bind(this, i, t[3]),
                                onTouchEnd: platform.ios ? this._onaction.bind(this, i, t[3]) : null,
                            }, this._options.includes("secondarytext") ? t[3] : e(Icon,{},t[3]))))
						]
					)
				})
			]
		))
		ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
	}

    // Visible Properties

    /** ## Properties
     * Here are the available setters and/or getters for the List Component.
     * @prop {String} avatarSize Sets or returns the size of the avatar. Values can be `Small` `Medium` `Large`
     * @prop {String} avatarVariant Sets or returns the variant of the avatar. Values can be `Square` `Round` or `Circle`
     * @prop {String} checkboxColor Sets or returns the theme color of the checkbox when `Selectable` option is enabled. Values can be `Default` `Primary` or `Secondary` or hexadecimal color.
     * @prop {String} label Sets or returns the label text.
     * @prop {Boolean} selectable Sets or returns a boolean whether the list is selectable or not.
     * @prop {Number} elevation Sets or returns the depth of the list container. Values range from 0 to 24.
     * @prop {String} backColor Sets or returns the background color in a hexadecimal format.
     * @prop {Number} textSize1 Sets or returns the size of the title text.
     * @prop {Number} textSize2 Sets or returns the size of the body text.
     * @prop {Number} iconSize Sets or returns the size of the icon text.
     * @prop {String} textColor1 Sets or returns the color of the title text in hexadecimal format.
     * @prop {String} textColor2 Sets or returns the color of the body text in hexadecimal format.
     * @prop {String} iconColor Sets or returns the icon color in a hexadecimal format.
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

	// Visible methods

    /** ## Methods
     * Here are the following methods available on the List Component.
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
     
    /** ### addItem
     * Adds an item in the list.
     * $$ lst.addItem( title, body, image, index ) $$
     * @param {String} title The title of the item.
     * @param {String} body The text description of the item.
     * @param {String} image A material icon or image file path.
     * @param {String} action A text for the action or material icon.
     * @param {Number} index The index in which to add or insert the item.
     */
    addItem(title, body, image, action, index)
    {
        if( typeof( index ) == "number" && index > -1 ) this._list.splice( index, 0, [title, body, image, action] )
        else this._list.push( [title, body, image, action] )
        this._render()
    }

    /** ### setOnTouch
     * Adds a callback function when the list item is click.
     * $$ lst.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} title The list item title text. @arg {String} body The list item body text. @arg {String} icon The list item icon. @arg {String} action The action text. @arg {Number} index The list item index. @arg {Object} pos The position of the touch event.
     */

    /** ### setOnLongTouch
     * Adds a callback handler for a long touch event. The touch timer is about 500 milliseconds.
     * $$ lst.setOnLongTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} title The list item title. @arg {String} body The list item description text. @arg {String} icon The list item icon. @arg {String} action  The action text. @arg {Number} index The list item index. @arg {Object} pos The position of the touch event.
     */
    setOnLongTouch( callback ) { this._longTouch = callback; }

	/** ### setOnSelect
     * Sets a callback handler when an item in the list is selected.
     * $$ lst.setOnSelect( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} title The list item title text. @arg {Number} index The index of the selected list item. @arg {Boolean} checked The checked state of the list item.
     */
	setOnSelect( callback ) { this._select = callback; }

    /** ### setOnAction
     * $$ lst.setOnAction( callback ) $$
     * Sets a callback handler when an action icon is click.
     * @param {Function} callback The callback function. ---> @arg {String} icon The icon text. @arg {Number} index The index of the corresponding secondary action.
     */
    setOnAction( callback ) { this._onAction = callback }

    /** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ lst.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} title The list item title text. @arg {String} body The list item body text. @arg {String} icon The list item icon. @arg {String} action The action text. @arg {Number} index The list item index. @arg {Object} pos The position of the touch event.
     */

    setAvatarSize( size )
    {
		if(!this._leading=="avatar") return
		this._props.avatar.size = size
		this._render()
    }
    set avatarSize( size )
    {
		if(!this._leading=="avatar") return
		this._props.avatar.size = size
		this._render()
    }
    get avatarSize() { return this._props.avatar.size; }
    
	setAvatarVariant( variant ) { this._props.avatar.variant = variant.toLowerCase(); this._render(); }
    set avatarVariant( variant ) { this._props.avatar.variant = variant.toLowerCase(); this._render(); }
    get avatarVariant() { return this._props.avatar.variant; }
    
    /** ### getSelectedItems
     * $$ lst.getSelectedItems() $$
     * Returns an array of indexes of the selected items.
     */
    getSelectedItems() {
        return this._checked.reduce( (val, el, i) => {
            if(el === true) val.push(i);
            return val;
        }, []);
    }
    
    /** ### getSelectedTitles
     * $$ lst.getSelectedTitles() $$
     * Returns an array of titles of selected items
     */
    getSelectedTitles() {
        return this._checked.reduce( (val, el, i) => {
            if(el === true) val.push( this._list[i][0] );
            return val;
        }, []);
    }

    setCheckboxColor( color ) { this.checkboxColor = color }
    set checkboxColor( color="" ) {
        this._props.checkbox.color = color;
        color = color.toLowerCase()
        if(color == "primary") color = ui.theme.primary
        else if(color == "secondary") color = ui.theme.secondary
        this._style3.color = color
        this._render()
    }
    get checkboxColor() { return (this._style3.color || this._props.checkbox.color) }

    setLabel( label ) { this._label = label; this._render(); }    
    set label( label ) { this._label = label; this._render(); }
    get label() { return this._label; }

    /** ### setList
     * Updtes the list.
     * $$ lst.setList( list ) $$
     * @param {Array} list A comma separated list of items or an array. See the list format above.
     */
	setList( list ) {
        this._list = list || [];
        this._formatList();
        this._checked = [];
        this._render();
    }
    getList() { return this._list; }
    set list( list ) {
        this._list = list || [];
        this._formatList();
        this._checked = [];
        this._render();
    }
    get list() { return this._list; }
    
    /** ### setSelectable
     * Make the list selectable or not.
     * $$ lst.setSelectable( selectable ) $$
     * @param {Boolean} selectable If true, make the list selectable. Otherwise, list is not selectable
     */
    setSelectable( selectable ) { this._selectable = selectable; this._render(); }
    set selectable( selectable ) { this._selectable = selectable; this._render(); }
    get selectable() { return this._selectable; }
    
    /** ### setItemByIndex
     * Change the content of an item in a list.
     * $$ lst.setItemByIndex(index, newTitle, newBody, newIcon, newAction) $$
     * @param {Number} index The index of the item to update
     * @param {String} newTitle The new title of the item
     * @param {String} newBody The new body text
     * @param {String} newIcon The new icon or image
     * @param {String} newAction The new action icon or action text
     */
	setItemByIndex(index, newTitle, newBody, newIcon, newAction)
	{
        if(index < 0) return;
        if( newTitle ) this._list[index][0] = newTitle;
        if( newBody ) this._list[index][1] = newBody;
        if( newIcon ) this._list[index][2] = newIcon;
        if( newAction ) this._list[index][3] = newAction;
		this._render()
    }
    
    /** ### getItemByIndex
     * Get the item in a list by its corresponding index.
     * $$ lst.getItemByIndex(index, json) $$
     * @param {Number} index Returns the corresponding list item.
     * @param {Boolean} json Pass `true` to return the corresponding list item as an object of the form `{title,body,image,action}`
     */
	getItemByIndex(index, json)
	{
        if(index < 0) return;
		var t = this._list[index];
        var ret = null;
		if(t && json) ret = {title: t[0], body: t[1], image: t[2], action: t[3]};
        else if(t) ret = [t[2], t[0], t[1], t[3]];
        return ret;
	}

	/** ### setItem
     * Updates an item in the list.
     * $$ lst.setItem( title, newTitle, newBody, newIcon ) $$
     * @param {String} title The title of the list item to update.
     * @param {String} newTitle The new title of the list item.
     * @param {String} newBody The new description of the list item.
     * @param {String} newIcon A material icon font or image file path.
     * @param {String} newAction A material icon font for the action icon button.
     */
    setItem(title, newTitle, newBody, newIcon, newAction)
    {
        var i = this._list.findIndex(m => m[0].trim() == title.trim());
        this.setItemByIndex(i, newTitle, newBody, newIcon, newAction);
    }
    
    /** ### getItem
     * Get the item in the list by its corresponding title.
     * $$ lst.getItem(title, json) $$
     * @param {String} title Title of the list item.
     * @param {Boolean} json Pass `true` to return the corresponding list item as an object of the form `{title,body,image,action}`
     */
    getItem(title, json) {
        var i = this._list.findIndex(m => m[0].trim() == title.trim());
		return this.getItemByIndex(i, json);
    }

    /** ### removeItemByIndex
      * Removes an element from the list.
      * $$ lst.removeItemByIndex( index ) $$
      * @param {Number} index The index of the item to remove
      */
    removeItemByIndex( index ) {
        if( index >= 0 ) {
            this._list.splice( index, 1 )
            this._render()
        }
    }

    /** ### removeItemByName
     * Removes an item in the list by its title.
     * $$ lst.removeItemByName( name ) $$
     * @param {String} name The title of the list to remove.
     */
    removeItemByName( title ) {
        var index = this._list.findIndex( function( l ) { return l[0] == title })
        this.removeItemByIndex( index )
    }

    /** ### shiftItem
     * Removes the first item the list. This will return the item being removed.
     * $$ lst.shiftItem() $$
     */
    shiftItem() {
        let item = this._list[0];
        this.removeItemByIndex(0);
        return item;
    }

    /** ### popItem
     * Removes the last item in the list. This will return the item being removed.
     * $$ lst.popItem() $$
     */
    popItem() {
        let item = this._list[this._list.length - 1];
        this.removeItemByIndex(this._list.length - 1);
        return item;
    }
    
    /** ### deselectAll
     * Clears all selection in the list if the list is selectable.
     * $$ lst.deselectAll() $$
     */
    deselectAll()
    {
        this._checked = []
        this._render()
    }

    /** ### selectItemByIndex
     * Selects an item in the list by its index and marked the checkbox. List must be selectable.
     * $$ lst.selectItemByIndex( index ) $$
     * @param {Number} index The index to be selected.
     */
    selectItemByIndex( index )
    {
        if( index >= 0 && index < this._list.length ) {
            this._checked[index] = true;
            this._render()
        }
    }

    /** ### setTitleText
     * Sets a new title text to a corresponding item in a list.
     * $$ lst.setTitleText( index, title ) $$
     * @param {Number} index The index of the corresponding list item.
     * @param {String} title The new title text.
     */
    setTitleText( index, title )
    {
        this._list[ index ][ 0 ] = title
        this._render()  
    }

    /** ### setBodyText
     * Sets a new secondary text to a corresponding item in a list.
     * $$ lst.setBodyText( index, newText ) $$
     * @param {Number} index The index of the list whose secondary text to be changed.
     * @param {String} newText The new secondary text.
     */
    setBodyText( index, newText ) {
        this._list[index][1] = newText
        this._render()
    }

    /** ### setIcon
     * Updates an icon in a list by its corresponding index.
     * $$ lst.setIcon( index, icon ) $$
     * @param {Number} index The index of the corresponding list item.
     * @param {String} icon Material icon font.
     */
    setIcon( index, icon ) {
        this._list[index][2] = icon ? icon.toLowerCase() : ""
        this._render()
    }

    setElevation( num ) {
        this._paperProps.elevation = num
        this._render()
    }
    set elevation( num ) {
        this._paperProps.elevation = num
        this._render()
    }
    get elevation() { return this._paperProps.elevation }

    setBackColor( clr ) { this._paperStyle.backgroundColor = clr; this._render(); }
    set backColor( clr ) { this._paperStyle.backgroundColor = clr; this._render(); }
    get backColor() { return this._paperStyle.backgroundColor; }

    set backImage( img ) {
        this._backImageUrl = img;
        this._paperStyle.backgroundColor = "";
        this._paperStyle.backgroundImage = `url('`+img+`')`;
        this._paperStyle.backgroundSize = "cover";
        this._paperStyle.backgroundPosition = "center";
        this._paperStyle.backgroundRepeat = "no-repeat";
        this._render();
    }

    setTextSize(title, body, icon) {
        if(title) this._style1.fontSize = title
        if(body) this._style2.fontSize = body
        if(icon) this._style3.fontSize = icon
        this._render()
    }
    set textSize1(size) {
        this._style1.fontSize = size
        this._render()
    }
    get textSize1() { return this._style1.fontSize }

    set textSize2(size) {
        this._style2.fontSize = size
        this._render()
    }
    get textSize2() { return this._style2.fontSize }

    set iconSize(size) {
        this._style3.fontSize = size
        this._render()
    }
    get iconSize() { return this._style3.fontSize }

    set textColor1(color) {
        this._style1.color = color
        this._render()
    }
    get textColor1() { return this._style1.color }

    set textColor2(color) {
        this._style2.color = color
        this._render()
    }
    get textColor2() { return this._style2.color }

    set iconColor( clr ) {
        this._style3.color = clr
        this._render()
    }
    get iconColor() { return this._style3.color }

    set outlined( value ) {
        this._paperProps.variant = value ? "outlined" : "elevation"
        this._render()
    }
    get outlined() {
        return this._paperProps.variant == "outlined"
    }

    set options( options ) {
        this._options = options ? options.toLowerCase() : ""
        this._initProps()
        this._initStyle()
        this._render()
    }

    /** ### setCornerRadius
     * Sets the corner radius of the list container.
     * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
     * @param {Number} tl Top-left corner radius.
     * @param {Number} tr Top-right corner radius.
     * @param {Number} bl Bottom-left corner radius.
     * @param {Number} br Bottom-right corner radius.
     * @param {String} mode Unit. Values are `px` `rem` or `%`.
     */
    setCornerRadius(tl, tr, bl, br, mode="px") {
        this._cornerRad = { tl: tl+mode, tr: tr+mode, bl: bl+mode, br: br+mode };
        this._paperStyle.borderTopLeftRadius = this._cornerRad.tl;
        this._paperStyle.borderTopRightRadius = this._cornerRad.tr;
        this._paperStyle.borderBottomLeftRadius = this._cornerRad.bl;
        this._paperStyle.borderBottomRightRadius = this._cornerRad.br;
        this._style.borderTopLeftRadius = this._cornerRad.tl;
        this._style.borderTopRightRadius = this._cornerRad.tr;
        this._style.borderBottomLeftRadius = this._cornerRad.bl;
        this._style.borderBottomRightRadius = this._cornerRad.br;
        this._render();
    }

    /** ### setItemPadding
     * Sets the padding of the list item. See `itemPadding` property for equivalent setter/getter property.
     * $$ lst.setItemPadding(left, top, right, bottom, mode) $$
     * @param {Number} left Left padding of the list item.
     * @param {Number} top Top padding of the list item.
     * @param {Number} right Right padding of the list item.
     * @param {Number} bottom Bottom padding of the list item.
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
@sample Basic list
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var list = ["Javascript", "Java", "Python"]

        // Add a list control to the main layout
        this.lst = ui.addList(this.main, list, "", 0.6)

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }
    
    onTouch( title, body, icon, action, index )
    {
        ui.showPopup( title, "Short" )
    }
}
 */

/**
@sample List with icon and body
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0, 0, 0.02)

        // Initialize the list items to show
        var list = [
            ["favorite", "Javascript", "This is a sample body text."],
            ["person", "Java", "This is a sample body text."],
            ["settings", "Python", "This is a sample body text."]
        ]

        // Add a list control with icon to the main layout
        this.lst = ui.addList(this.main, list, "Icon", 0.8)

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )

        // Add a button control to the main layout
        this.btn = ui.addButton(this.main, "Change Icon Color", "Outlined")

        // Add a callback handler to change the icon color when the button is touched
        this.btn.setOnTouch( this.changeIconColor )
    }
    
    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title, "Short")
    }

    changeIconColor()
    {
        this.lst.iconColor = "#e91e63"
    }
}
 */

/**
@sample Contacts list
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Avatar url
        var avatar = "https://sample-ds-tutorials.firebaseapp.com/img/ds-logo.png"
        
        // Initialize the contact items to show
        var list = [
            [avatar, "Frodo", "+0123456789"],
            [avatar, "Bilbo", "+0123456789"],
            [avatar, "Well", "+0123456789"]
        ]

        // Add a list control with avatar to the main layout
        this.lst = ui.addList(this.main, list, "Avatar", 0.8)

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }

    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title + " : " +body, "Short")
    }
}
 */

/**
@sample Elevated list
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var list = [
            ["favorite", "Javascript", "This is a sample body text."],
            ["person", "Java", "This is a sample body text."],
            ["settings", "Python", "This is a sample body text."]
        ]

        // Add an elevated list control to the main layout
        this.lst = ui.addList(this.main, list, "Icon,Elevated", 0.8)

        // Set the elevation depth to 5
        this.lst.elevation = 5

        // Set the list label
        this.lst.label = "This is a label text"

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }

    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title + " : " +body, "Short")
    }
}
 */

/**
@sample Outlined List
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var list = [
            ["favorite", "Javascript", "This is a sample body text."],
            ["person", "Java", "This is a sample body text."],
            ["settings", "Python", "This is a sample body text."]
        ]

        // Add an outlined list control to the main layout
        this.lst = ui.addList(this.main, list, "Icon,Outlined", 0.8)
        
        // Set the list label
        this.lst.label = "My awesome list"

        // Set the corner radius to 12
        this.lst.cornerRadius = 12

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }

    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title + " : " +body, "Short")
    }
}
 */

/**
@sample Selectable List
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var list = ["Javascript", "Java", "Python"]

        // Add a list control to the main layout
        this.lst = ui.addList(this.main, list, "", 0.6)

        // Set the list label
        this.lst.label = "Long press any item to select"

        // Add on long touch event and set the list to selectable
        this.lst.setOnLongTouch( this.onLongTouch   )

        // Add `onSelect` event listener to the list
        // and display the selected item in the popup
        this.lst.setOnSelect( this.onSelect )
    }

    onLongTouch()
    {
        this.lst.selectable = true
    }

    onSelect(title, i, value)
    {
        ui. showPopup(title + " : " + value)
    }
}
 */