/** # BottomNavbar
 * @abbrev bmn
 * The Bottom Navigation Bar (BottomNavBar) is a key element in mobile user interface design, typically placed at the bottom of the screen.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, it features navigation icons or labels for quick access to app sections. It enhances user navigation, maintaining a consistent and ergonomic design across mobile applications. The Bottom Navigation Bar provides a visually clear and accessible way for users to switch between primary destinations or views. Add a bottom navigation bar into your app using the `addBottomNavbar` method like this:
 * $$ bmn = ui.addBottomNavbar(parent, navs, options, width, height) $$
 * @param {Object} parent The parent layout where to add the BottomNavbar
 * @param {Array} navs An array whose elements are of the form `[ "Title", "Icon" ]`
 * @param {String} options A comma separated options.\nLabel: `Hidelabels`
 * @param {Number} width Fraction of the screen width `[0-1]`
 * @param {Number} height Fraction of the screen height `[0-1]`
 * @returns Object-BottomNavbar
 */

/** #Example - Sample navs array.
    var navs = [
        [ "Favorites", "favorites" ],
        [ "Groups", "person" ],
        [ "Folder", "folder" ]
    ]
 */

// For DroidScript
/** @Description
An example of a navs array.
<js>
var navs = [
    [ "Favorites", "favorites" ],
    [ "Groups", "person" ],
    [ "Folder", "folder" ]
]
</js>
 */

ui.addBottomNavbar = function( parent, navs, options, width, height )
{
	return new ui.BottomNavbar( parent, navs, options, width, height )
}

ui.BottomNavbar = class extends ui.Control
{
	constructor( parent, navs, options, width, height )
	{
		super( parent, width, height, options, "BottomNavbar" )
        this._navs = navs || [];
        this._style1 = {}
        // support for "Title:Icon,Title:Icon"
        if( typeof(navs) == "string" ) this._navs = navs.split(",").map(m => m.split(":"));
        else if( typeof(navs) == "object" ) this._navs = JSON.parse(JSON.stringify(navs));
        this._value = 0;
        this._disabled = new Array( this._navs.length ).fill( false );
        this._paperStyle = {};
        this._iconStyle = {};
        this._initProps();
        this._initStyle();
		this._render();
	}

	// INVISIBLE METHODS
    _initProps()
    {
        this._props.showLabels = this._options.includes( "hidelabels" ) ? false : true
    }

    _initStyle() {
        // fixed at the bottom
        this._style.height = "100%";
        this._div.style.position = "fixed"
        this._div.style.justifyContent = "center"
        this._div.style.left = 0
        this._div.style.bottom = 0
        this._div.style.margin = 0
    }

    _onChange( event, val )
    {
        if( this._value !==  val && this._change ) this._change( this._navs[val][0], val )
		this._value = val
		this._render()
		if( this._touch ) this._touch(this._navs[val][0], this._value, this._getEventObject(event, null, null, "touch"))
	}
    _onClick( event ) {
        console.log( event );
    }
    _onContextMenu( title, index, event )
	{
        if( this._ctxMenu )
        {
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
		let e = React.createElement
		let { Paper,BottomNavigation, BottomNavigationAction, Icon } = window[ 'MaterialUI' ]
		this._ctl = e( Paper, {
                square: true,
                style: { height: "100%" }
            }, e( BottomNavigation, {
					...this._props,
					style: { ...this._style },
					value: this._value,
					onChange: this._onChange.bind(this)
				},
				this._navs.map( ( t, i ) => {
                    return e( BottomNavigationAction, {
                            label: e("span", {style:{...this._style1}}, t[0]),
                            key: i,
                            value: i,
                            icon: e( Icon, { style: {...this._iconStyle} }, t[1] ),
                            disabled: this._disabled[i],
                            onContextMenu: this._onContextMenu.bind( this, t[0], i )
                        }
                    )
                })
			)
		);
        
		ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        });
	}

    // VISIBLE PROPERTIES

    /** ## Properties
     * Here are the available setter and/or getter properties of the BottomNavbar Component.
     * @prop {Boolean} labels Sets or returns a boolean whether the labels are shown or hidden on active state.
     * @prop {Array} list Sets or returns the navigation actions array. See `navs` params above for format.
     * @prop {Boolean} disabled Sets or returns whether the bottom navigation is disabled or enabled. All navigation actions must be disabled to return `true`. Otherwise, it will return `false`.
     * @prop {Number} value Sets or returns the current value of the BottomNavbar. This is the index of the corresponding selected action.
     * @prop {Number} iconSize Sets or returns the icon font-size. You can also pass string values such as `1.2rem` or `18px`.
     * @prop {String} iconColor Sets or returns the icon color. You can pass color in a hexadecimal format or rgb format.
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
	 * Here are the methods available for BottomNavbar Component
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
     * Adds a callback handler when the BottomNavbar item is touch.
     * $$ bmn.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} name The name of the item. @arg {Number} value The value or index of the item. @arg {Object} pos The position of the touch event.
     */

    /** ### setOnContextMenu
     * Adds a callback function on right click.
     * $$ bmn.setOnContextMenu( callback ) $$
     * @param {Function} callback The callback function to be called on context menu event or right click event. ---> @arg {String} text Bottom navigation action text. @arg {Number} index Bottom navigation action index. @arg {Object} pos The position of the touch event.
     */

    /** ### setList
     * Sets the navigation actions list.
     * $$ bmn.setList( navs ) $$
     * @param {Array} navs The navigation actions array. See `navs` param above for format.
     */
    setList( list ) {
        this._navs = list || [];
        if( typeof(list) == "string" ) this._navs = list.split(",").map(m => m.split(":"));
        else if( typeof(list) == "object" ) this._navs = JSON.parse(JSON.stringify(list));
        this._value = 0;
        this._disabled = [];
        this._render();
    }
    /** ### getList
     * Returns the navigation actions list.
     * @returns Array
     */
    getList() { return this._navs; }

    set list( list ) {
        this._navs = list || [];
        if( typeof(list) == "string" ) this._navs = list.split(",").map(m => m.split(":"));
        else if( typeof(list) == "object" ) this._navs = JSON.parse(JSON.stringify(list));
        this._value = 0;
        this._disabled = [];
        this._render();
    }
    get list() { return this._navs; }

    /** ### selectItem
     * Sets navigation action to active by its name. If you are providing a wrong name, no action will be active.
     * $$ bmn.selectItem( name ) $$
     * @param {String} name The name to be set to active
     */
    selectItem( name )
    {
        this._value = this._navs.findIndex( m => m[0]==name.trim() )
        this._render()
    }

    /** ### selectItemByIndex
     * Sets a botttom navigation action to active by its index
     * $$ bmn.selectItemByIndex( index ) $$
     * @param {Number} index The index of the bottom navigation action to be selected
     */
    selectItemByIndex( index )
    {
        this._value = index
        this._render()
    }

    /** ### clearSelection
     * Clears the selected navigation action.
     * $$ bmn.clearSelection() $$
     */
    clearSelection() { this._value = 0; this._render(); }

    /** ### setItemByIndex
     * Updates a navigation action by its index.
     * $$ bmn.setItemByIndex( index, newName, newIcon ) $$
     * @param {Number} index The index to update
     * @param {String} newName The name of the navigation action
     * @param {String} newIcon Material icon
     */
    setItemByIndex( index, newName, newIcon )
    {
        if( index >= 0 && index < this._navs.length )
        {
            if( newName ) this._navs[ index ][ 0 ] = newName 
            if( newIcon ) this._navs[ index ][ 1 ] = newIcon
            this._render()  
        }
    }

    /** ### setIcon
     * Updates the icon of the given index.
     * $$ bmn.setIcon( index, newIcon ) $$
     * @param {Number} index The index of the navigation action to update
     * @param {String} newIcon Material icon
     */
    setIcon( index, newIcon )
    {
        if( index >= 0 && index < this._navs.length )
        {
            if( newIcon ) this._navs[ index ][ 1 ] = newIcon
            this._render()  
        }
    }

    /** ### addItem
     * Adds a navigation action
     * $$ bmn.addItem( name, icon ) $$
     * @param {String} name The name of the navigation action
     * @param {String} icon Material icon
     * @param {Number} index The index in which to add the action.
     */
    addItem( name, icon, index )
    {
        if(typeof index == "number")
        {
            this._navs.splice(index, 0, [name, icon])
            this._disabled.splice(index, 0, false)
        }
        else
        {
            this._navs.push( [name, icon] )
            this._disabled.push( false )
        }
        this._render()
    }

    /** ### removeItemByIndex
     * Removes a navigation action by its given index.
     * $$ bmn.removeItemByIndex( index ) $$
     * @param {Number} index The index of the navigation action to be remove
     */
    removeItemByIndex( index )
    {
        this._navs.splice( index, 1 )
        this._disabled.splice( index, 1 )
        this._render()
    }

    /** ### removeItemByName
     * Removes a navigation action by its given name.
     * $$ bmn.removeItemByName( index ) $$
     * @param {String} name The name of the navigation action to be remove.
     * @@ This will work only on the latest browsers.
     */
    removeItemByName( name )
    {
        var index = this._navs.findIndex( nav => nav[0] == name.trim() )
        this.removeItemByIndex( index )
    }

    /** ### shiftItem
     * Removes the first navigation action. This will return the item being removed.
     * $$ bmn.shiftItem() $$
     */
    shiftItem() {
        let item = this._navs[0];
        this.removeItemByIndex(0);
        return item;
    }

    /** ### popItem
     * Removes the last navigation action. This will return the item being removed.
     * $$ bmn.popItem() $$
     */
    popItem() {
        let item = this._navs[this._navs.length-1];
        this.removeItemByIndex(this._navs.length-1);
        return item;
    }

    /** ### setOnChange
     * Sets a callback function to execute when bottom navbar value changes.
     * $$ bmn.setOnChange( callback ) $$
     * @param {Function} callback A callback function. ---> @arg {String} text Bottom navigation action text. @arg {Number} index Bottom navigation action index.
     */
    setOnChange( callback ) { this._change = callback; }

    /** ### setEnabled
	 * Enable or disable a bottom navigation action. If you want to disable the component, use the `disable` property instead.
	 * $$ bmn.setEnabled( index, value ) $$
	 * @param {Number} index The index of the navigation action.
	 * @param {Boolean} value Values can be `true` or `false`.
	 */
    setEnabled( index, value )
    {
        if( typeof(index)=="boolean" ) this._disabled.fill( !index )
        else if( typeof(value)!=="boolean" ) return
		else this._disabled[ index ] = !value
		this._render()
    }

    /** ### getEnabled
     * Get the enabled state of a navigation action.
     * @param {Number} index The index of the navigation action.
     * @returns Boolean
     */
    getEnabled( index ) {
        if( typeof(index)!="number" || index<0 ) return null
        return !this._disabled[index]
    }

    /** ### setEnabledByName
     * Enabled or disable a bottom navigation action by its name.
     * $$ bmn.setEnabledByName(name, value) $$
     * @param {String} name The name of the bottom navigation action.
     * @param {Boolean} value Values can be `true` or `false`
     */
    setEnabledByName( name, value ) {
        if( typeof(name)!="string" || typeof(value)!="boolean" ) return
        var index = this._navs.findIndex( m => m[0].includes(name.trim()) )
        this._disabled[index] = !value
        this._render()
    }

    /** ### getEnabledByName
     * Get the enabled state of the bottom navigation action by its name.
     * $$ bmn. getEnabledByName( name ) $$
     * @param {String} name The name of the bottom navigation action.
     * @returns Boolean
     */
    getEnabledByName( name ) {
        if(typeof name !== "string") return null
        var index = this._navs.findIndex( m => m[0].includes(name.trim()) )
        return (index < 0 ? null : !this._disabled[index])
    }

    set disabled( value ) {
        this._disabled.fill( value )
        this._render()
    }
    get disabled() {
        return this._disabled.every( m => m === true )
    }

    /** ### showLabels
     * Shows the text label of the bottom navigation action.
     * $$ bmn.showLabels() $$
     */
    showLabels()
    {
        this._props.showLabels = true
        this._render()
    }

    set labels( val ) { this._props.showLabels = val; this._render(); }
    get labels() { return this._props.showLabels; }

    /** ### hideLabels
     * Hides the text label of the bottom navigation action.
     * $$ bmn.hideLabels() $$
     */
    hideLabels() {
        this._props.showLabels = false
        this._render()
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

    set iconColor( clr ) {
        this._iconStyle.color = clr;
        this._render()
    }
    get iconColor() { return this._iconStyle.color }

    set iconSize( size ) {
        this._iconStyle.fontSize = size;
        this._render();
    }
    get iconSize() { return this._iconStyle.fontSize }

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

    set value( value ) {
        this._value = value
        this._render()
    }
    get value() { return this._value }
}

/* --- parent_methods here ----- */

/* ## Examples ## */

/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins( 0.01, 0.01, 0.01, 0.01 )

        var navs = [
            [ "Favorites", "favorites" ],
            [ "Groups", "person" ],
            [ "Folder", "folder" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.main, navs, "", 1)

        // Add a callback handler for `onChange` event
        this.bmn.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup( text )
    }
}
 */

/**
@sample Hide or show labels
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins( 0.01, 0.01, 0.01, 0.01 )

        var navs = [
            [ "Favorites", "favorites" ],
            [ "Groups", "person" ],
            [ "Folder", "folder" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.main, navs, "", 1)

        // Add a callback handler for `onChange` event
        this.bmn.setOnChange( this.onChange )

        // Button to show the labels
        this.btn = ui.addButton(this.main, "Show Labels")
        this.btn.setOnTouch( this.showLabels )

        // Button to hide the labels
        this.btn1 = ui.addButton(this.main, "Hide Labels")
        this.btn1.setOnTouch( this.hideLabels )
    }

    showLabels( )
    {
        this.bmn.showLabels()
    }

    hideLabels()
    {
        this.bmn.hideLabels()
    }

    onChange(text, index)
    {
        ui.showPopup( text )
    }
}
 */

/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        var navs = [
            [ "Favorites", "favorites" ],
            [ "Groups", "person" ],
            [ "Folder", "folder" ]
        ]

        // Creates a BottomNavbar control
        this.bmn = ui.addBottomNavbar(this.main, navs, "", 1)

        // Hide the labels when not active
        this.bmn.labels = false

        // Set the color of the text and icons
        this.bmn.textColor = "#673ab7"
        this.bmn.iconColor = "#673ab7"

        // Set the icon size
        this.bmn.iconSize = "2rem"
    }
}
 */