
/** # TreeView
 * @abbrev trv
 * A TreeView is a hierarchical representation of data, often used to display nested categories or organized information.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs A tree view is best use in file system navigation. Add a treeview into your app using the `addTreeView` method like this:
 * $$ trv = ui.addTreeView(parent, list, options, width, height) $$
 * @param {Object} parent The parent layout where to add the TreeView component.
 * @param {Object} list An object of the treeview items. See example below.
 * @param {String} options A comma separated options. Values can be `MultiSelect`.
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object TreeView
 */

/**
```
var items = {
    "Group 1": {
        "Item 1": "",
        "Item 2": "",
        "Item 3": ""
    },
    "Group 2": {
        "Item 1": "",
        "Item 2": "",
        "Item 3": ""
    },
    "Applications": {
        "Editor": "",
        "Productivity": "",
        "Social Media": {
            "TikTok": "",
            "YouTube": "",
            "Meta": {
                "Facebook": "",
                "Instagram": "",
                "Whatsapp": "",
                "Messenger": ""
            }
        }
    }
}
```
 */

/**
 * The properties of the list object will be the name of the item or the group.
 * If you add a string value to the list object properties, it will be treated as an icon.
 * See example below
 */

/** #Example - Items with icons
var items = {
    "Folders": {
        "Music": "music_note",
        "Photos": "photo",
        "Favorites": "favorite"
    }
}
 */


ui.addTreeView = function( parent, list, options, width, height )
{
    return new ui.TreeView( parent, list, options, width, height )
}

ui.TreeView  = class extends ui.Control
{
    constructor( parent, list, options, width, height )
    {
        super( parent, width, height, options, "TreeView" )
        this._list = list ? JSON.parse(JSON.stringify(list)) : {};
        this._nodeId = 0
        this._value = ""
        this._formatTreeItem = this._formatTreeItem.bind( this )
        this._fontStyle = {};
        if( this._fontName ) { this._fontStyle = { fontFamily: this._fontName } }
        this._initProps()
        this._initStyle()
        this._render()
    }

    _initProps() {}

    _initStyle()
    {
        this._div.style.overflowY = "auto"
        this._style.width = "100%"
        this._style.height = "100%"
    }

    _formatTreeItem( path, item, key,  )
    {
        path = path + item[0] + "/"
        this._nodeId ++
        return React.createElement( window[ "MaterialUILab" ].TreeItem,
            {
                nodeId: this._nodeId,
                key: key,
                label: item[0],
                onClick: platform.ios ? null : this._onClick.bind(this, item[0], path),
                onTouchEnd: platform.ios ? this._onClick.bind(this, item[0], path) : null,
                icon: ( item[1] && typeof( item[1] ) === "string" ) ? React.createElement( window[ "MaterialUI" ].Icon, {}, item[1] ) : null
            },
            ( item[1] && typeof( item[1] ) === "object" ) ? Object.entries( item[1] ).map(this._formatTreeItem.bind(this, path)) : null
        )
    }

    _onClick( label, path, event )
    {
        event.preventDefault()
        event.stopPropagation()
        this._value = label
        if( this._touch ) this._touch( label, path, this._getEventObject(event, null, null, "touch") )
        if( this._fontFile ) setTimeout( () => { this._setFontName() }, 1 )
    }
	_setFontName() {
        let els = this._div.querySelectorAll('.MuiTreeItem-label');
        els.forEach( m => m.style.fontFamily = this._fontName );
    }
    _render()
    {
        var { TreeView } = window[ "MaterialUILab" ],
            { Icon } = window[ "MaterialUI" ],
            e = React.createElement
        this._ctl = e( TreeView, {
            defaultCollapseIcon: e( Icon, {}, "expand_more" ),
            defaultExpandIcon: e( Icon, {}, "chevron_right" ),
            style: this._style,
            onContextMenu: this._onContextMenu.bind(this),
            // multiSelect: this._options.includes("multiselect")
        },
            Object.entries( this._list ).map( this._formatTreeItem.bind(this, "") )
        )
        ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        });
    }

    /** ## Properties
     * Here are the available setter and getter properties of the TreeView Component.
     * @prop {Object} list Sets or returns the list object.
     * @prop {String} value Returns the selected item of the TreeView.
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
     * Here are the available methods of the TreeView Component.
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
     * Add a on touch handler to the TreeView item when click.
     * $$ trv.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {String} value The selected tree item. @arg {String} path The complete path of the tree item.
     */

    /** ### setList
     * Updates the list items of the TreeView component.
     * $$ trv.setList( obj ) $$
     * @param {Object} obj The list object of the treeview items. See example above.
     */
    setList( obj ) {
        this._list = obj ? JSON.parse(JSON.stringify(obj)) : {};
        this._render();
    }
    getList() { return this._list }
    set list( obj ) {
        this._list = obj ? JSON.parse(JSON.stringify(obj)) : {};
        this._render();
    }
    get list() { return this._list }

    getValue() { return this._value }
    get value() { return this._value }

    /** ### addItem
     * Add a tree items to the tree view.
     * $$ trv.addItem( name, obj ) $$
     * @param {String} name The label text for the new item.
     * @param {Object} obj See list object for more info.
     */
    addItem( name, obj ) {
        this._list[name] = obj ? JSON.parse(JSON.stringify(obj)) : {};
        this._render();
    }

    /** ### getItem
     * Returns the list items object of a given parent tree item name.
     * $$ trv.getItem( name ) $$
     * @param {String} name The parent name of the tree items.
     * @returns Object
     */
    getItem( name ) { return this._list[ name ] }

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
    }
    get fontFile() { return this._fontFile ? this._fontFile : null }
    setFontFile( file ) { this.fontFile = file; }
}

/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Basic TreeView
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "Center,ScrollY,FillXY")

        // Initialize json object for the treeview items
        var items = {
            "Group 1": {
                "Item 1": "",
                "Item 2": "",
                "Item 3": ""
            },
            "Group 2": {
                "Item 1": "",
                "Item 2": "",
                "Item 3": ""
            },
            "Applications": {
                "Editor": "",
                "Productivity": "",
                "Social Media": {
                    "TikTok": "",
                    "YouTube": "",
                    "Meta": {
                        "Facebook": "",
                        "Instagram": "",
                        "Whatsapp": "",
                        "Messenger": ""
                    }
                }
            }
        }

        // Add a treeview component to the main layout
        this.trv = ui.addTreeView(this.main, items, "Primary")
        this.trv.setMargins(0, 5, 0, 0, "rem")

        // Add a callback handler when the treeview item is touched
        this.trv.setOnTouch( this.onTouch )
    }

    onTouch(value, path)
    {
        ui.showPopup("Value: "+value + " Path: "+path)
    }
}
 */