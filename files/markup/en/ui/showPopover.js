
/** # Popover
 * @abbrev
 * Popover is very useful on showing additional info or displaying instructions especially when the control is click or hovered.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs It is like a small, temporary window that appears above other content, showing additional options or details. It's a brief and focused way to present information or choices to the user.
 * $$ ui.showPopover(parent, text, position, height, height) $$
 * @param {Object} parent UI component. Can be a `Layout` `Button` `Image` `Text` or any UI component except dialogs.
 * @param {String} text The text to de displayed. For displaying more data, pass a `Layout`
 * @param {String} position A comma separated values representing the\n`"anchorOrigin,transformOrigin"`\n`anchorOrigin` Position of the popover on its parent.\n`transformOrigin` Origin on the popover itselt.\nAvailable values for both `anchorOrigin` and `transformOrigin`  are\n`tl` for top-left, `tc` for top-center, `tr` `cl` `cc` `cr` `bl` `bc` and `br` for bottom-right.
 * @param {Number} width Fraction of the screen width `[0-1]`.
 * @param {Number} height Fraction of the screen height `[0-1]`.
 * @returns Object Popover
 */

ui.showPopover = function(parent, text, position, width, height ) {
    return new ui.Popover(parent, text, position, width, height )
}

ui.Popover = class
{
    constructor(parent, text="", pos="", width, height) {
        this._ctl = null
        this._div = document.createElement("div")	//Create DIV wrapper and add to parent layout.
        _popups().appendChild( this._div )
		this._id = "d"+_popups().children.length
        pos = pos.toLowerCase().split(",")
        this._child = text
        this._ref = null
        this._popRef = null
        this._pos = pos[0] ? pos[0].toLowerCase() : "bc"
        this._orig = pos[1] ? pos[1].toLowerCase() : "tc"
        this._props = {
            open: true,
            anchorEl: parent._div
        }
        this._style = {
            width: isFinite(width) ? (width*100)+"vw" : width,
            height: isFinite(height) ? (height*100)+"vh" : height,
            boxSizing: "border-box"
        }
        // font-file
        this._fontFile = "";
        this._fontName = "";
        if( ui._fontFile ) {
            this._fontFile = ui._fontFile;
            this._fontName = ui._fontName;
        }
        this._initProps()
        this._render()
    }

    _initProps() {
        switch( this._pos ) {
            case "tl": this._props.anchorOrigin = { vertical: "top", horizontal: "left" }; break;
            case "tc": this._props.anchorOrigin = { vertical: "top", horizontal: "center" }; break;
            case "tr": this._props.anchorOrigin = { vertical: "top", horizontal: "right" }; break;
            case "cl": this._props.anchorOrigin = { vertical: "center", horizontal: "left" }; break;
            case "cc": this._props.anchorOrigin = { vertical: "center", horizontal: "center" }; break;
            case "cr": this._props.anchorOrigin = { vertical: "center", horizontal: "right" }; break;
            case "bl": this._props.anchorOrigin = { vertical: "bottom", horizontal: "left" }; break;
            case "br": this._props.anchorOrigin = { vertical: "bottom", horizontal: "right" }; break;
            default: this._props.anchorOrigin = { vertical: "bottom", horizontal: "center" }
        }
        switch( this._orig ) {
            case "tl": this._props.transformOrigin = { vertical: "top", horizontal: "left" }; break;
            case "tc": this._props.transformOrigin = { vertical: "top", horizontal: "center" }; break;
            case "tr": this._props.transformOrigin = { vertical: "top", horizontal: "right" }; break;
            case "cl": this._props.transformOrigin = { vertical: "center", horizontal: "left" }; break;
            case "cc": this._props.transformOrigin = { vertical: "center", horizontal: "center" }; break;
            case "cr": this._props.transformOrigin = { vertical: "center", horizontal: "right" }; break;
            case "bl": this._props.transformOrigin = { vertical: "bottom", horizontal: "left" }; break;
            case "br": this._props.transformOrigin = { vertical: "bottom", horizontal: "right" }; break;
            default: this._props.transformOrigin = { vertical: "bottom", horizontal: "center" }
        }
    }
    _getRef (ref) {
        this._ref = ref
		if( this._ref ) {
            if( typeof this._child == "object" ) this._ref.appendChild(this._child._div);
        }
    }
    _handleClose() {
        this._props.open = false
        this._render()
    }
    _getPopver( ref ) {
        if( ref ) {
            this._popRef = ref;
            if( this._fontName ) this._setFontName();
        }
    }
    _setFontName() {
        let els = this._popRef.querySelectorAll('*:not(:empty):not(.material-icons)');
        els.forEach( m => m.style.fontFamily = this._fontName );
    }
    _render() {
        var e = React.createElement, mui = window['MaterialUI']
        this._ctl = e( mui.Popover,
		{
			...this._props,
            onClose: this._handleClose.bind(this),
            ref: this._getPopver.bind(this)
		}, e( "div", {
            ref: this._getRef.bind(this),
            style: {
                ...this._style,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        }, (this._child && typeof this._child == "string") ? e( mui.Typography, {
            style: {
                padding: "12px 16px"
            }
        }, this._child ) : null ) )
        
        ReactDOM.render( this._ctl, this._div )
    }

    /** ## Properties
     * These are the setter/getter properties available for the Popover Component.
     * @prop {String} fontFile Sets or returns the font file use for the Popover.
     * @prop {String} backImage Sets or returns the path to the background image.
     */

    /** ## Methods
     * These are the methods available for the Popover Component.
     */

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

    /** ### show
     * Show the popup dialog.
     * $$ pop.show() $$
     */
    show() {
        this._props.open = true;
        this._render();
    }

    /** ### hide
     * Hide the popup dialog.
     * $$ pop.hide() $$
     */
    hide() {
        this._props.open = false;
        this._render();
    }

    set backImage( img ) {
        this._backImageUrl = img;
        this._style.backgroundColor = "";
        this._style.backgroundImage = `url('`+img+`')`;
        this._style.backgroundSize = "cover";
        this._style.backgroundPosition = "center";
        this._style.backgroundRepeat = "no-repeat";
        this._render();
    }
    get backImage() { return this._backImageUrl; }
}

/* ## Examples */

/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Creates a button control where to attached the popover
        this.btn = ui.addButton(this.main, "Show Popover")

        // Add a callback handler when the button is click
        this.btn.setOnTouch( this.onTouch )
    }

    onTouch() {
        // Display a popover when the button is click
        ui.showPopover(this.btn, "This is a text to be displayed.")
    }
}
 */

/**
@sample Positioning
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,Horizontal", 1, 1 )

        var lay1 = ui.addLayout( this.main, "Linear", "VCenter", 0.5, 1 )
        lay1.setChildMargins(0, 0.05)

        ui.addText(lay1, "Position on parent", "h5")

        var btn = ui.addButton(lay1, "Top-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,tl") } )

        btn = ui.addButton(lay1, "Top-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tc,tl") } )

        btn = ui.addButton(lay1, "Top-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tr,tl") } )

        btn = ui.addButton(lay1, "Center-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "cl,tl") } )

        btn = ui.addButton(lay1, "Center-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "cc,tl") } )

        btn = ui.addButton(lay1, "Center-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "cr,tl") } )

        btn = ui.addButton(lay1, "Bottom-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "bl,tl") } )

        btn = ui.addButton(lay1, "Bottom-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "bc,tl") } )

        btn = ui.addButton(lay1, "Bottom-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "br,tl") } )

        var lay2 = ui.addLayout( this.main, "Linear", "VCenter", 0.5, 1 )
        lay2.setChildMargins(0, 0.05)

        ui.addText(lay2, "Origin on popover", "h5")

        btn = ui.addButton(lay2, "Top-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,tl") } )

        btn = ui.addButton(lay2, "Top-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,tc") } )

        btn = ui.addButton(lay2, "Top-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,tr") } )

        btn = ui.addButton(lay2, "Center-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl", "cl") } )

        btn = ui.addButton(lay2, "Center-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,cc") } )

        btn = ui.addButton(lay2, "Center-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,cr") } )

        btn = ui.addButton(lay2, "Bottom-Left")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,bl") } )

        btn = ui.addButton(lay2, "Bottom-Center")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,bc") } )

        btn = ui.addButton(lay2, "Bottom-Right")
        btn.setOnTouch( function() { ui.showPopover(this, "This is a popover message", "tl,br") } )
    }
}
 */

/**
@sample Advanced
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        // Creates a button where to attached the popover.
        this.btn = ui.addButton( this.main, "Show Popover" )
        this.btn.setOnTouch( this.onTouch )
    }

    onTouch() {
        // Display a custom popover when the button is click.

        // Create a layout with `null` parent to be pass into the popover
        var lay = ui.addLayout(null, "Linear", "VCenter,Left")
        lay.setChildMargins(0.1, 0.05, 0.1, 0.05)

        // you can add text
        ui.addText(lay, "Header", "h5")

        // you can add as many text as you can
        ui.addText(lay, "This is a very long text to display in this popover", "Left")

        // you can also add button
        ui.addButton(lay, "Outlined Button", "Outlined", "Secondary")

        // pass the layout into the `ui.showPopover` method
        ui.showPopover( this.btn, lay, "bl,tr")
    }
}
 */