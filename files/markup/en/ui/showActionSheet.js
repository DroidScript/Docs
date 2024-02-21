
/** # ActionSheet
 * @abbrev acs
 * An Action Sheet is a list dialog implementation of bottom sheet displaying contextual actions or options, used to streamline user interactions in mobile apps.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs It offers a concise list of choices with icons and labels, making it easy for users to select relevant actions in response to specific interactions. Show an actionsheet like this:
 * $$ ui.showActionSheet(title, list, options, onSelect) $$
 * @param {String} title The custom actionsheet title.
 * @param {Array} list The list items to show. If `"icon"` option is passed, each element in this list array is of the form `[icon, name]`.
 * @param {String} options A comma separated actionsheet options. Values are \n`"Icon"` render a leading icon.\n`"NoCancel"` remove the default `"Cancel"` option.
 * @param {Function} onSelect The callback handler for `"select"` event.
 * @returns Object-ActionSheet
 */

ui.showActionSheet = function(title, list, options, onSelect) {
    if( !list ) return;
    var cb = onSelect;
    if(typeof options == "function") cb = options, options = "";
    if( !cb ) return;
    return new ui.ActionSheet(title, list, options, cb);
}

ui.ActionSheet = class
{
    constructor(title="Actions", list=[], options="", onSelect) {
        this._options = options.toLowerCase();
        this._onSelect = onSelect;
        this._title = title || "Actions";
        this._list = list;
        if(typeof this._list == "object") this._list = JSON.parse( JSON.stringify(list) );
        if(typeof this._list == "string") this._list = list.split(",");
        if( !this._options.includes("nocancel") ) {
            if( this._options.includes("icon") ) this._list.push(["close", "Cancel"]);
            else this._list.push("Cancel");
        }
        this._ctl = null;
        this._div = document.createElement( "div" );
        _popups().appendChild( this._div );
        this._id = "d"+_popups().children.length;
        this._open = true;
        this._clrs = [];
        this._render();
    }

    _handleClose( e ) {
        const backdropId = e.target.getAttribute("databackdropid");
        if(backdropId == this._id) {
            this._open = false;
            this._render();
        }
    }
    
    _handleSelect(i, e) {
        this._open = false;
        this._render();

        if(!this._options.includes("nocancel") && i == this._list.length-1) return;

        if( this._onSelect ) {
            const item = this._list[i];
            if( this._options.includes("icon") ) this._onSelect(item[1], item[0]);
            else this._onSelect( item );
        }
    }

    _render() {
        var e = React.createElement
        var {Backdrop, Slide, Paper,Typography, List, ListItem, ListItemIcon, ListItemText} = window['MaterialUI'];
		this._ctl = e(Backdrop, {
            open: true,
            onClick: this._handleClose.bind(this),
            style: { zIndex: 0 },
            databackdropid: this._id
        }, e(Slide, {
            in: this._open,
            direction: "up",
            timeout: { enter: 300, exit: 100 }
        }, e(Paper, {
            className: "uiActionSheet-root"
        }, [
            e(Typography, {key:0, variant: "body1", color: "textSecondary", className: "uiActionSheet-title"}, this._title),
            (this._desc && e(Typography, {key:1, variant: "body2", color: "textSecondary", className: "uiActionSheet-description"}, this._desc)),
            e(List, {key: 2, style: {paddingTop:0}},
                this._list.map((m, key) => {
                    return e(ListItem, {key, button:true, onClick: this._handleSelect.bind(this, key)}, [
                        (this._options.includes("icon") && e(ListItemIcon, {key:0, className:"material-icons", style: {color:this._clrs[key]}}, m[0])),
                        e(ListItemText, {key:1, primaryTypographyProps:{style:{color:this._clrs[key]}}}, this._options.includes("icon") ? m[1]:m)
                    ]);
                })
            )
        ])));
        ReactDOM.render(this._ctl, this._div, () => {
            if( !this._open ) {
                setTimeout(() => {
                    this._div.remove();
                }, 200);
            }
        });
    }

    /** ## Properties
     * These are the available setter and getter properties for the ActionSheet component.
     * @prop {String} title Sets or returns the title text of the action sheet.
     * @prop {String} description Sets or returns the description text for the action sheet.
     */

    set description( txt ) {
        this._desc = txt;
        this._render();
    }
    get description() { return this._desc; }

    set title( txt ) {
        this._title = txt;
    }
    get title() { return this._title; }

    /** ## Methods
     * These are the available methods for the ActionSheet component.
     */

    /** ### setColor
     * Sets the color of the list item by its name.
     * $$ acs.setColor(name, color) $$
     * @param {String} name The list item text.
     * @param {String} color A css supported color. Available format are: `hexadecimal`, `color-names`, `rgb`, `rgba` ...
     */
    setColor(name="", color) {
        name = name.trim();
        let n = -1;
        if( this._options.includes("icon") ) n = this._list.findIndex(m => m[1].trim() == name);
        else n = this._list.findIndex(m => m.trim() == name);
        this.setColorByIndex(n, color);
    }

    /** ### setColorByIndex
     * Sets the color of the list item by its corresponding index. If you want to set the color of the list using its name, see `setColor` method.
     * $$ acs.setColorByIndex(index, color) $$
     * @param {Number} index The index of list item.
     * @param {String} color A css supported color. Available format are: `hexadecimal`, `color-names`, `rgb`, `rgba` ...
     */
    setColorByIndex(index, color) {
        this._clrs[index] = color;
        this._render();
    }

    popItem() {
        let item = this._list.pop();
        this._render();
        return item;
    }

    shiftItem() {
        let item = this._list.shift();
        this._render();
        return item;
    }

	addItem(name, icon, index)
	{
        var n = index;
        if( !this._options.includes("icon") ) n = icon;
        let item = name;
        if( this._options.includes("icon") ) item = [icon, name];
		if(typeof n == "number") this._list.splice(n, 0, item);
		else this._list.push( item );
		this._render();
	}

    removeItem( name ) {
        name = name.trim();
        let n = -1;
        if( this._options.includes("icon") ) n = this._list.findIndex(m => m[1].trim() == name);
        else n = this._list.findIndex(m => m.trim() == name);
        this.removeItemByIndex( n );
    }

    removeItemByIndex( index ) {
        this._list.splice(index, 1);
        this._render();
    }
}

/** ## Examples */

/**
@sample Complete example of actionsheet
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show the actionsheet when click
        this.btn = ui.addButton(this.main, "Show actionsheet", "Primary")
        this.btn.setOnTouch( this.btn_onTouch )
    }

    btn_onTouch()
    {
        var choices = [
            ["person", "Account"],
            ["share", "Send to email"],
            ["delete", "Remove"],
        ];
        this.act = ui.showActionSheet("", choices, "Icon", this.onSelect);
        this.act.description = "This is the text";
        this.act.setColor("Remove", "orange");
    }

    onSelect( name, icon ) {
        ui.showPopup( icon );
    }
}
 */