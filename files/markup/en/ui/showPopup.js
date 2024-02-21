
/** # Popup
 * @abbrev pop
 * "Popup" is like a short notification that quickly appears on the screen, providing extra options or information in a concise and unobtrusive manner.
 * @img(img1.png)
 * @jdocs It's similar to a toast notification. Show a popup like this:
 * $$ pop = ui.showPopup( msg, options, duration ) $$
 * @param {String} msg The message to display on the pop-up.
 * @param {String} options A comma separated options.\nDuration: `Short`, `Long`\nVertical Alignment: `Top`, `Bottom`\nHorizontal Alignment: `Left`, `Center`, `Right`\nAction options: `Icon`, `HideOnAction`\nTransition: `Grow`, `Fade`, `Slide`, `Collapse`, `Zoom`
 * @param {Number} duration Time in milliseconds. Pass this if you don't want the default auto hide duration.
 * @param {String} action Action button text
 * @returns Object Popup
 */

ui.showPopup = function( msg, options, duration, action )
{
    return new ui.Popup( msg, options, duration, action )
}

ui.Popup = class
{
	constructor( msg, options, duration, action )
	{
		//--- INVISIBLE PROPERTIES ---
		
		this._ctl = null
        this._div = document.createElement("div")	//Create DIV wrapper and add to parent layout.
        _popups().appendChild( this._div )
	
		this._id = "d"+_popups().children.length
		this._actnTxt = action

		//--- VISIBLE PROPERTIES ---

        if(typeof msg == "object") msg = JSON.stringify(msg, null, 2);
        else if(typeof msg == "undefined") msg = "undefined"
        else msg = msg.toString();
		
		this._parent = _popups()
		this._options = options ? options.toLowerCase() : "top,center"
		this._props = {
			open: true,
			message: msg,
			autoHideDuration: duration || null,
			anchorOrigin: {}
		}
        // font-file
        this._fontFile = "";
        this._fontName = "";
        if( ui._fontFile ) {
            this._fontFile = ui._fontFile;
            this._fontName = ui._fontName;
        }
		this._transition = false
	
		//--- INITIALISATION ---
		this._initProps()
		
		//Render the React Element.
		this._render()
	}
	
	//--- INVISIBLE METHODS --------------------------
	_initProps()
	{
		// vertical alignment
		if( this._options.includes( "bottom" ) ) this._props.anchorOrigin.vertical = "bottom"
		else this._props.anchorOrigin.vertical = "top"

		// horizontal alignment
		if( this._options.includes( "left" ) ) this._props.anchorOrigin.horizontal = "left"
		else if( this._options.includes( "right" ) ) this._props.anchorOrigin.horizontal = "right"
		else this._props.anchorOrigin.horizontal = "center"

		// transition
		if( this._options.includes( "grow" ) ) this._props.TransitionComponent = window['MaterialUI'].Grow
		else if( this._options.includes( "slide" ) ) this._props.TransitionComponent = window['MaterialUI'].Slide
		else if( this._options.includes( "zoom" ) ) this._props.TransitionComponent = window['MaterialUI'].Zoom
		else if( this._options.includes( "collapse" ) ) this._props.TransitionComponent = window['MaterialUI'].Collapse

		// duration
		if( !this._props.autoHideDuration )
		{
			if( this._options.includes( "short" ) ) this._props.autoHideDuration = 1500
			else if( this._options.includes( "long" ) ) this._props.autoHideDuration = 4000
			else this._props.autoHideDuration = 2500
		}
	}

	_onClose( event, reason )
	{
		this._props.open = false
		this._render()
		if( this._onTouch ) this._onTouch()
	}

	_onAction()
	{
        if( this._options.includes("hideonaction") ) {
            this._props.open = false
		    this._render()
        }
		if( this._action ) this._action()
	}
	_setFontName() {
        let els = this._div.querySelectorAll('*:not(:empty):not(.material-icons)');
        els.forEach( m => m.style.fontFamily = this._fontName );
    }
	_render()
	{
        var e = React.createElement
        var { Button, IconButton, Snackbar, Icon } = window['MaterialUI']
		this._ctl = e( Snackbar,  {
			...this._props,
			id: this._id,
			key: this._id,
			onClose: this._onClose.bind( this ),
			action: this._actnTxt ? e( this._options.includes("icon") ? IconButton : Button, {
				variant: "text",
				size: "small",
				style: { color: "#ff9800" },
				onClick: platform.ios ? null : this._onAction.bind(this),
                onTouchEnd: platform.ios ? this._onAction.bind(this) : null
			}, this._options.includes("icon") ? e(Icon,{},this._actnTxt):this._actnTxt ) : null,
			style: { ...this._style }
		}, null);
        ReactDOM.render(this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
            if( !this._props.open ) {
                setTimeout(() => {
                    this._div.remove();
                }, 0);
            }
        });
	}

	// VISIBLE METHODS 

	/** ## Properties
	 * Here are the available setters and/or getters for the Popup Component.
	 * @prop {String} text Sets or returns the text of the popup.
	 * @prop {Number} duration Sets or returns the duration of the popup in milliseconds.
	 */
	
	// VISIBLE METHODS 

	/** ## Methods
	 * Here are the available methods for the Popup Component.
	 */
    
    /** ### setOnClose
	 * Adds an onClose callback to your popup.
	 * $$ popup.setOnClose( callback ) $$
	 * @param {Function} callback The onclose callback.
	 */
	setOnClose( callback ) { this._onTouch = callback }

	/** ### setOnAction
	 * Adds an action callback when the user touches the action button. The `btnText` param must
	 * be provided in order to create an action button.
	 * $$ popup.setOnAction( callback ) $$
	 * @param {Function} callback The on action callback.
	 */
	setOnAction( callback ) { this._action = callback }

	setText( text ) { this._props.message = text; this._render() }
    getText() { return this._props.message }
	set text( text ) { this._props.message = text; this._render() }
	get text() { return this._props.message; }
	
	/** ### show
	 * Show the popup.
	 * $$ popup.show() $$
	 */
	show() { this._props.open = true; this._render( true ) }

	/** ### hide
	 * Hide the popup.
	 * $$ popup.hide() $$
	 */
	hide() { this._props.open = false; this._render( false ) }

	setDuration( ms ) { this._props.autoHideDuration = ms || 30000 }
    getDuration() { return this._props.autoHideDuration }
	set duration( ms ) { this._props.autoHideDuration = ms || 30000 }
	get duration() { return this._props.autoHideDuration; }

	/** ### setPosition
	 * Updates the position of the popup.
	 * $$ popup.setPosition( vertical, horizontal ) $$
	 * @param {String} vertical Vertical alignment. Values can be `Top` `Bottom`
	 * @param {String} horizontal Horizontal alignment. Values can be `Left` `Center` and `Right`
	 */
	setPosition( vertical, horizontal )
	{
		this._props.anchorOrigin.vertical = vertical || "top"
		this._props.anchorOrigin.horizontal = horizontal || "center"
		this._render()
	}

	/** ### getPosition
	 * Returns the position of the popup. The returned object is of the form `{ vertical, horizontal }`
	 * $$ popup.getPosition() $$
	 * @returns Object
	 */
	getPosition() { return this._props.anchorOrigin }
    
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
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add button control to the main layout
        this.btn1 = ui.addButton(this.main, "Show Popup")

        // Add a callback handler when the button is touched
        this.btn1.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        // Display popup on the Top with transition Grow
        ui.showPopup("Hello from popup!")
    }
}
 */

/**
@sample Popups with transitions
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0, 0, 0.02)

        // Adds first button to the main layout
        this.btn1 = ui.addButton(this.main, "Top & Grow", "Primary")
        this.btn1.setOnTouch( this.onTouch1 )

        // Adds second button to the main layout
        this.btn2 = ui.addButton(this.main, "Bottom and Slide", "Secondary")
        this.btn2.setOnTouch( this.onTouch2 )
    }

    onTouch1()
    {
        // Display popup on the Top with transition Grow
        ui.showPopup("Hello world.", "Top,Grow")
    }

    onTouch2()
    {
        // Display popup on the Bottom with transition Slide in 1.5 seconds.
        ui.showPopup("Hello world.", "Bottom,Slide", 1500)
    }
}
 */

/**
@sample With Transition
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.layMain = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button control to the main layout
        this.btn = ui.addButton(this.layMain, "Show Popup")

        // Add a callback handler when the button is touched
        this.btn.setOnTouch( this.showMessage )
    }

    showMessage()
    {
        // Show a popup with additional action
        this.snackbar = ui.showPopup("Please login to continue", "Bottom,Center", "", "Login")
        
        // Add a callback handler when the action is touched
        this.snackbar.setOnAction( this.onAction )
    }

    onAction()
    {
        // Hide the popup when the action button is click
        this.snackbar.hide()
        ui.showPopup("Login is click. Show login Page.")
    }
}
 */