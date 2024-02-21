
/** # Dialog
 * @abbrev dlg
 * A Dialog in mobile UI design is a pop-up window that appears on top of the current screen to prompt the user for input or to convey information.
 * @img(img1.png)
 * @img(img2.png)
 * @img(img3.png)
 * @img(img4.png)
 * @jdocs In Material Design, Dialogs follow guidelines for clarity, actions, and consistent styling. They serve to enhance user interaction and provide a focused way to handle specific tasks or gather input within a mobile application. Add a dialog into your app using the `addDialog` method like this:
 * $$ dlg = ui.addDialog( title, body, actions, options ) $$
 * @param {String} title The dialog title text.
 * @param {String} body The dialog message to be shown.
 * @param {Array} actions A string of action button text.
 * @param {String} options A comma separated options.\nTheme Colors: `Primary`, `Secondary`\nUtil: `NoCancel` prevents the dialog from closing on action.
 * @param {Number} width Fraction of the screen width `[0-1]`.
 * @returns Object Dialog
 */

ui.addDialog = function(title, body, actions, options, width)
{
	return new ui.Dialog(title, body, actions, options, width)
}

ui.Dialog = class
{
	constructor(title, body="", actions=[], options="", width)
	{
		this._props = {}
		this._title = title
		this._body = body
		this._actions = actions
		if(typeof actions == "string") this._actions = actions.split(",")
		this._options = options.toLowerCase()
        this._id = _ids++
		this._layout = ui.addLayout(null, 'Linear', "nodom")
		this._actClr = this._getClr()
		this._ref = null
        this._dlgRef = null
        // font-file
        this._fontFile = "";
        this._fontName = "";
        if( ui._fontFile ) {
            this._fontFile = ui._fontFile;
            this._fontName = ui._fontName;
        }
		this._styles = {
            titleColor: "#000000",
            contentWidth: isFinite(width) ? `${(width*100)}vw` : width
        }
		
		this._initProps()

        this._div = document.createElement("div")
		_popups().appendChild( this._div )
		this._render()
	}

	// Invisible methods
	_initProps()
	{
		this._props.open = false
		this._props['aria-labelledby'] = `ui-dialog-${this._id}-title`
		this._props['aria-describedby'] = `ui-dialog-${this._id}-description`
		this._props.fullScreen = this._options.includes('fullscreen')
	}
    
    _initStyle() {}

	_getClr() {
		if(this._options.includes('secondary')) return 'secondary'
		return 'primary'
	}
	_getRef(ref) {
		this._ref = ref
		if(this._ref) this._ref.appendChild(this._layout._div)
	}
	_onAction(action, index) {
		if(this._action) this._action(action, index);
		this._onClose();
	}
	_onClose(e) {
        if( this._options.includes("nocancel") ) return;
		this._props.open = false;
		this._render();
		if(this._close) this._close();
	}
    _getDlgRef( ref ) {
        if( ref ) {
            this._dlgRef = ref;
            if( this._fontName ) this._setFontName();
        }
    }
    _setFontName() {
        let els = this._dlgRef.querySelectorAll('*:not(:empty):not(.material-icons)');
        els.forEach( m => m.style.fontFamily = this._fontName );
    }
	_render()
	{
		let e = React.createElement
		let {DialogTitle, DialogContent, DialogActions, Button, DialogContentText, Dialog} = window['MaterialUI']
		this._ctl = e( Dialog, {
				...this._props,
				onClose: this._onClose.bind(this),
                ref: this._getDlgRef.bind(this)
			},
			[
				e( DialogTitle, {
						key: 0,
						style: { color: this._styles.titleColor }
					}, this._title ),
				e( DialogContent, {
						key:1,
                        style: { width: this._styles.contentWidth }
					},
					[
						this._body ? e(
							DialogContentText, {
								key: 0
							},
							this._body
						) : null,
						e( "div", {
								ref: this._getRef.bind(this),
								id: 'my-custom-id',
								key: 1,
							}, "" )
					]
				),
				e( DialogActions, {
						key: 2
					},
					[
						this._actions.map( (t, i)=> {
							return e( Button, {
									key: i,
									color: this._actClr,
									variant: "text",
									onClick: platform.ios ? null : this._onAction.bind(this, t, i),
                                    onTouchEnd: platform.ios ? this._onAction.bind(this, t, i) : null
								}, t )
						})
					]
				)
			]
		)
		ReactDOM.render(this._ctl, this._div)
	}

	// Visible methods

	/** ## Properties
	 * Here are the available setters and/or getter of the Dialog Component.
	 * @prop {String} text Sets or returns the dialog text.
	 * @prop {String} titleText Sets or returns the dialog title text.
	 * @prop {String} titleColor Sets or returns the title text color in hexadecimal format.
     * @prop {Object} layout Returns the layout of the dialog where you can add custom controls.
	 */

	// Visible methods

	/** ## Methods
	 * Here are the available methods of the Dialog Component.
	 */

	getLayout() { return this._layout }
    get layout() { return this._layout }

	/** ### setOnAction
	 * Adds a callback function when the action buttons are click.
	 * $$ dlg.setOnAction( callback ) $$
	 * @param {Function} callback The callback function. ---> @arg {String} text The dialog action text. @arg {Number} index The index of the corresponding dialog action.
	 */
	setOnAction( callback ) { this._action = callback; }

	/** ### setOnClose
	 * Adds a callback function when the dialog is close.
	 * $$ dlg.setOnClose(callback) $$
	 * @param {Function} callback The callback function
	 */
	setOnClose( callback ) { this._close = callback; }

	setText( text ) { this._body = text; this._render(); }
	set text( text ) { this._body = text; this._render(); }
	get text() { return this._body; }

	setTitleText( text ) { this._title = text; this._render(); }
	set titleText( text ) { this._title = text; this._render(); }
	get titleText() { return this._title; }

	setTitleColor( clr ) { this._styles.titleColor = clr; this._render(); }
	set titleColor( clr ) { this._styles.titleColor = clr; this._render(); }
	get titleColor() { return this._styles.titleColor; }

	/** ### show
	 * Show the dialog.
	 * $$ dlg.show() $$
	 */
 	show() { this._props.open = true; this._render() }

	/** ### hide
	 * Hide the dialog.
	 * $$ dlg.hide() $$
	 * @@ When you add an `onClose` callback, it will be fired after this event.
	 */
	hide() { this._props.open = false; this._render(); }

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
}

/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add button to the main layout to show the dialog when clicked.
        this.btn = ui.addButton(this.main, "Show Dialog", "Contained,Primary")
        this.btn.setOnTouch( this.showDialog )

        // Message to be displayed in the Dialog component
        var bodyText = "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        
        // Initialize the Dialog component with `Agree` and `Disagree` action buttons
        this.dlg = ui.addDialog("Use Google's location service?", bodyText, "Disagree,Agree")
    }

    showDialog()
    {
        // Show the Dialog component when the button is click.
        this.dlg.show()
    }
}
 */

/**
@sample NoCancel
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout.
        this.btn = ui.addButton( this.main, "Show Dialog", "Contained,Primary" )

        // Add a callback handler for `onTouch` event on the button.
        this.btn.setOnTouch( this.showDialog )

        // Message to display
        var bodyText = "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
        
        // Initialize the Dialog component and pass a `NoCancel` option.
        this.dlg = ui.addDialog( "Use Google's location service?", bodyText, "Close,Agree", "NoCancel" )

        // Add a callback handler for `onAction` event on the Dialog component
        this.dlg.setOnAction( this.onAction );
    }

    showDialog()
    {
        // Show the Dialog component when button is click
        this.dlg.show();
    }

    onAction( action )
    {
        if(action == "Close")
        {
            ui.showPopup("There you go.");
            this.dlg.hide();
        }
        else
        {
            ui.showPopup("Oops! You can't close me here.");
        }
    }
}
 */

/**
@sample Adding controls to the dialog
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Adds a text control to the main layout.
        this.txt = ui.addText(this.main, "Email: ", "", 0.7)

        // Adds a button to show the dialog.
        this.btn = ui.addButton(this.main, "Show Dialog", "Contained,Primary")

        // Add a callback handler for `ontouch` event on the button control
        // to show the Dialog component
        this.btn.setOnTouch( this.showDialog )

        var bodyText = "To subscribe to this website, please enter your email address here. We will send updates occasionally."
        
        // Initialize the dialog.
        this.dlg = ui.addDialog("Subscribe", bodyText, "Cancel,Subscribe")

        // Add a callback handler for `onaction` event on the Dialog componenti
        this.dlg.setOnAction( this.onAction )

        // Adding textfield to the main layout
        this.tfd = ui.addTextField(this.dlg.layout, "", "Filled")
        this.tfd.label = "Email Address"
    }

    showDialog()
    {
        this.dlg.show()
    }

    onAction( action )
    {
        // Check the button that is click.
        if( action == "Subscribe" )
        {
            // Change the text of the text control.
            this.txt.text = "Email : " + this.tfd.text
        }
    }
}
 */