
/** # ProgressDialog
 * @abbrev prd
 * A ProgressDialog is a pop-up dialog that indicates the progress of a task, often accompanied by a loading spinner or bar.
 * @img(img1.png)
 * @jdocs It provides visual feedback to users during time-consuming operations, enhancing the overall user experience by conveying that the application is actively working on a task. Show a progress dialog in your app using the `showProgressDialog` method like this:
 * $$ prd = ui.showProgressDialog(text, options) $$
 * @param {String} text The text message of the progress dialog.
 * @param {String} options A comma separated options.\n`AutoCancel` to close the dialog when backdrop is click.
 * @returns Object ProgressDialog
 */
ui.showProgressDialog = function( text, options )
{
	return new ui.ProgressDialog( text, options )
}

ui.ProgressDialog = class
{
	constructor( text, options )
	{
		this._text = text || ""
		this._options = options ? options.toLowerCase() : ""
		this._autoDismiss = this._options.includes( "autocancel" ) ? true:false
		this._props = {}
		// font-file
        this._fontFile = "";
        this._fontName = "";
        if( ui._fontFile ) {
            this._fontFile = ui._fontFile;
            this._fontName = ui._fontName;
        }
		this._div = document.createElement("div")	//Create DIV wrapper and add to parent layout.
        _popups().appendChild( this._div )
		this._initProps()
		this._render()
	}
	// Invisible methods
	_initProps()
	{
		this._props.open = true
		this._props.style = {
			zIndex: 10000000,
			color: '#fff'
		}
	}
	_onClick() {
		if( this._autoDismiss && this._props.open )
		{
			this._props.open = false
			this._render()
			if( this._close ) this._close()
		}
	}
    _getRef( ref ) {
        if( ref ) {
            this._ref = ref;
            if( this._fontName ) this._setFontName();
        }
    }
    _setFontName() {
        let els = this._ref.querySelectorAll('*:not(:empty):not(.material-icons)');
        els.forEach( m => m.style.fontFamily = this._fontName );
    }
	_render()
	{
		let e = React.createElement
		let { Backdrop, CircularProgress,Box,Typography} = window['MaterialUI']
		this._ctl = e( Backdrop, {
				...this._props,
				onClick: platform.ios ? null : this._onClick.bind(this),
                onTouchEnd: platform.ios ? this._onClick.bind(this) : null,
                ref: this._getRef.bind(this)
			},
			e( Box, {
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					style: { ...this._style }
				},
				[
					e( CircularProgress, {
							color:"inherit",
							key: 0
						}, null ),
					e( Typography, {
							key: 1,
							pt: 2,
							style: { marginTop: "12px" }
						}, this._text )
				]
			)
		)
		ReactDOM.render( this._ctl, this._div )
	}

	/** ## Properties
	 * Here are the available setters and getters for the ProgressDialog Component.
	 * @prop {String} text Sets or returns the ProgressDialog text.
	 */

	/** ## Methods
	 * Here are the available methods for the ProgressDialog Component.
	 */
    
    /** ### show
	 * Show the progress dialog component.
	 * $$ prd.show() $$
	 */
	show() { this._props.open = true; this._render() }

	/** ### hide
	 * Hides the dialog component.
	 * $$ prd.hide() $$
	 */
	hide() { this._props.open = false; this._render() }

	/** ### setOnClose
	 * Adds a callback handler method on close event.
	 * $$ prd.setOnClose(callback) $$
	 * @param {Function} callback The callback function.
	 */
	setOnClose(callback) { this._close = callback }

	setText( val ) { this._text = val; this._render() }
    getText() { return this._text }
	set text( val ) { this._text = val; this._render() }
	get text() { return this._text }

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
@sample Progress Dialog
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout
        this.btn = ui.addButton(this.main, "Show Progress Dialog", "Outlined")

        // Add a callback handler when the button is click
        this.btn.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        // Show a progress dialog with `AutoCancel` the dismisses on backdrop click
        ui.showProgressDialog("Loading...", "AutoCancel")
    }
}
 */

/**
@sample  Nocancel progress dialog
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout
        this.btn = ui.addButton(this.main, "Show Progress Dialog", "Outlined")

        // Add a callback handler when the button is click
        this.btn.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        // Show a progress dialog with `AutoCancel` the dismisses on backdrop click
        this.pdlg = ui.showProgressDialog("Loading...", "NoCancel")

        // hide the progress dialog after 2 seconds
        setTimeout( () => {
            this.pdlg.hide()
            ui.showPopup( "Progress dialog is close!" )
        }, 2000)
    }
}
 */