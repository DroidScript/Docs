
/** # BottomSheet
 * @abbrev bts
 * The BottomSheet in Material Design is a UI component anchored at the screen bottom.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs It offers supplementary content without obstructing the main interface, enhancing user experience on mobile apps. Initialize a bottom sheet dialog like this:
 * $$ var bts = ui.addBottomSheet(title, options) $$
 * @param {String} title An optional bottomsheet title.
 * @param {String} options A comma separated options. Values are:\n`"Notch"` to add a small notch at the top of the bottomsheet.\n`"HideOnAction"` to hide the bottomsheet when actions are click.\n`"CloseAction"` add a close action at the left.\n`"MoreAction"` add a more action at the right.\n`"NoCancel"` to disable the default closing event when the backdrop is click.
 * @returns Object-BottomSheet
 * It's a good practice to avoid adding a notch when your bottomsheet has a `title`, or `leftAction` or `rightAction`
 */

ui.addBottomSheet = function(title, options) {
    return new ui.BottomSheet(title, options);
}

ui.BottomSheet = class
{
    constructor(title="", options="") {
        this._options = options.toLowerCase();
        this._title = title;
        this._ctl = null;
        this._rightCb = null;
        this._leftCb = null;
        this._div = document.createElement( "div" );
        _popups().appendChild( this._div );
        this._id = "d"+_popups().children.length;
        this._open = false;
        this._clrs = [];
        this._action1 = "";
        this._action2 = "";
        this._lay = ui.addLayout(null, "Linear", "Top,Center", 1, 1);
        if( this._options.includes("closeaction") ) this._action1 = "close";
        if( this._options.includes("moreaction") ) this._action2 = "more_horiz";
    }

    _handleClose( e ) {
        const backdropId = e.target.getAttribute("databackdropid");
        if(backdropId == this._id) {
            if( this._options.includes("nocancel") ) return;
            this._open = false;
            this._render();
            if( this._onClose ) this._onClose();
        }
    }

    _handleAction( p ) {
        if( this._onAction ) this._onAction(p === 0 ? "leftAction" : "rightAction", p === 0 ? this._action1 : this._action2);
        if( this._options.includes("hideonaction") ) {
            this._open = false, this._render();
            if( this._onClose ) this._onClose();
        }
    }

    _getRef( ref ) {
        if( ref ) ref.appendChild(this._lay._div);
    }

    _render() {
        var e = React.createElement
        var {Backdrop, Slide, Paper, Typography, IconButton} = window['MaterialUI'];
		this._ctl = e(Backdrop, {
            open: this._open,
            onClick: this._handleClose.bind(this),
            style: { zIndex: 0 },
            databackdropid: this._id
        }, e(Slide, {
            in: this._open,
            direction: "up",
            timeout: { enter: 300, exit: 300 }
        }, e(Paper, {
            className: "uiBottomSheet-root"
        }, [
            (this._options.includes("notch") && e("div", {key:0, className:"uiBottomSheet-notch"}, "")),
            ((this._action1||this._title||this._action2||this._desc) && e("div", {key:1, className:"uiBottomSheet-header"}, [
                e(IconButton, {
                    key:0, size:"medium", 
                    className:"material-icons uiBottomSheet-left-action", 
                    style:{visibility:this._action1?"visible":"hidden"},
                    onClick: this._handleAction.bind(this, 0)
                }, this._action1||""),
                e("div", {key: 1, className: "uiBottomSheet-header-details"}, [
                    (this._title && e(Typography, {key:0, variant:"body2"}, this._title)),
                    (this._desc && e(Typography, {key:1, variant:"caption", color:"textSecondary"}, this._desc))
                ]),
                e(IconButton, {
                    key:2, 
                    size:"medium", 
                    className:"material-icons", 
                    style:{visibility:this._action2?"visible":"hidden"},
                    onClick: this._handleAction.bind(this, 1)
                }, this._action2||"more_horiz")
            ])),
            e("div", {key:2, ref:this._getRef.bind(this), className:"uiBottomSheet-content"}, "")
        ])));
        ReactDOM.render(this._ctl, this._div);
    }

    /** ## Properties
     * These are the setter and getter properties available for the BottomSheet component.
     * @prop {Object} layout Returns the layout of the bottomsheet. This is where you add your ui components.
     * @prop {String} leftActionIcon Sets or returns the left action icon.
     * @prop {String} rightActionIcon Sets or returns the right action icon.
     * @prop {String} title Sets or returns the bottomsheet title.
     * @prop {String} description Sets or returns the bottomsheet description.
     */

    get layout() { return this._lay; }

    set title( title ) {
        this._title = title;
        this._render();
    }
    get title() { return this._title; }

    set description( desc ) {
        this._desc = desc;
        this._render();
    }
    get description() { return this._desc; }

    set leftActionIcon( icon ) {
        this._action1 = icon;
        this._render();
    }
    get leftActionIcon() { return this._action1; }

    set rightActionIcon( icon ) {
        this._action2 = icon;
        this._render();
    }
    get rightActionIcon() { return this._action2; }

    /** ## Methods
     * These are the methods available for the BottomSheet component.
     */

    /** ### show
     * $$ bts.show() $$
     * Show the bottom sheet.
     */
    show() {
        this._open = true;
        this._render();
        if( this._onOpen ) this._onOpen();
    }

    /** ### hide
     * $$ bts.hide() $$
     * Hide the bottom sheet.
     */
    hide() {
        this._open = false;
        this._render();
        if( this._onClose ) this._onClose();
    }

    /** ### setOnAction
     * Add a callback handler when the left and right action is click when they are provided.
     * $$ bts.setOnAction(name, pos) $$
     * @param {Function} cb A callback handler when the right or left action is click. The action `name` and `action icon` will be passed to the callback respectively. ---> @arg {String} name The action name. Can be `"leftAction"` or `"rightAction"`. @arg {String} icon Material icon font for the action. 
     */
    setOnAction( cb ) { this._onAction = cb; }

    /** ### setOnOpen
     * Add a callback handler on `open` event.
     * $$ bts.setOnOpen( cb ) $$
     * @param {Function} cb The callback function to be called.
     */
    setOnOpen( cb ) { this._onOpen = cb; }

    /** ### setOnClose
     * Add a callback handler on `close` event.
     * $$ bts.setOnClose( cb ) $$
     * @param {Function} cb The callback function to be called.
     */
    setOnClose( cb ) { this._onClose = cb; }
}

/** ## Examples */

/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show the actionsheet when click
        this.btn = ui.addButton(this.main, "Show Bottom Sheet", "Primary")
        this.btn.setOnTouch( this.btn_onTouch )

        this.bts = ui.addBottomSheet( "My title" );

        // Create a button and add it to the bottomsheet layout.
        var btn = ui.addButton(this.bts.layout, "Button", "Secondary");
        btn.margins = [0, "1rem", 0, "1rem"];
    }

    btn_onTouch()
    {
        // show the bottomsheet
        this.bts.show();
    }
}
 */

/**
@sample Bottomsheet with notch
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show the actionsheet when click
        this.btn = ui.addButton(this.main, "Show Bottom Sheet", "Primary")
        this.btn.setOnTouch( this.btn_onTouch )

        this.bts = ui.addBottomSheet("", "Notch");

        // Create a button and add it to the bottomsheet layout.
        var btn = ui.addButton(this.bts.layout, "Button", "Primary");
        btn.margins = [0, "1rem", 0, "1rem"];
    }

    btn_onTouch()
    {
        // show the bottomsheet
        this.bts.show();
    }
}
 */

/**
@sample Complete example
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show the actionsheet when click
        this.btn = ui.addButton(this.main, "Show Bottom Sheet", "Primary")
        this.btn.setOnTouch( this.btn_onTouch )

        // Create a bottom sheet with the given options.
        // HideOnAction: Hide the bottomsheet on action click.
        // CloseAction and MoreAction: Add a left close action and right more action.
        // NoCancel: Prevent the bottomsheet from closing when the more action is click.
        this.bts = ui.addBottomSheet("", "HideOnAction,CloseAction,MoreAction,NoCancel");
        this.bts.title = "My details"
        this.bts.description = "This is a long description."
        this.bts.setOnAction( this.onAction );

        // Create a button and add it to the bottomsheet layout.
        var btn = ui.addButton(this.bts.layout, "Button", "Primary");
        btn.margins = [0, "1rem", 0, "1rem"];
    }

    btn_onTouch()
    {
        // show the bottomsheet
        this.bts.show();
    }

    onAction(name, icon) {
        ui.showPopup( name );
    }
}
 */