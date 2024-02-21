
/** # ColorPicker
 * @abbrev cpk
 * Shows a color picker.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs Customize a color or choose from the presets of color carefully selected from Material Design Color Pallette. Show a color picker using the `showColorPicker` method like this:
 * $$ ui.showColorPicker(value, options, onSelect) $$
 * @param {String} value A hexadecimal default value for the color picker.
 * @param {String} options A comma separated options.\nIncludes alpha: `Alpha`
 * @param {Function} onSelect The callback function to be called when onselect event is fired. ---> @arg {String} value Color in hexadecimal format `#rrggbb` or `#aarrggbb` if `Alpha` option is passed.
 * @returns uio-ColorPicker
 */

ui.showColorPicker = function( value, options, onSelect )
{
    new ui.ColorPicker( value, options, onSelect )
}

ui.ColorPicker = class {
    constructor( value, options, onSelect )
    {
        this.options = options ? options.toLowerCase() : ""
        this.onSelect = onSelect
        this._ctl = null
        this._div = document.createElement("div")
        _popups().appendChild( this._div )
		this._id = "d"+_popups().children.length

        this.props = {}
        // font-file
        this._fontFile = "";
        this._fontName = "";
        if( ui._fontFile ) {
            this._fontFile = ui._fontFile;
            this._fontName = ui._fontName;
        }
        this.value = value || ( this.options.includes("alpha") ? "#FF000000" : "#000000" )
        this._title = "Custom"
        this._custom = true
        this._tglTxt = "Presets"
        this._a = 255
        this._ah = "FF"
        this._r = 0
        this._rh = "00"
        this._g = 0
        this._gh = "00"
        this._b = 0
        this._bh = "00"
        this._bgColor = this.value || "rgba(0,0,0,255)"
        this._presets = [
            "#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3",
            "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39",
            "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e",
            "#607d8b"
        ]
        this._presOpen = false
        this._pi = -1
        this._pii = -1
        this._pc = []
        this._clrs = [
            ["#ffebee", "#ffcdd2", "#ef9a9a", "#e57373", "#ef5350", "#f44336", "#e53935", "#d32f2f", "#c62828", "#b71c1c"],
            ["#fce4ec", "#f8bbd0", "#f48fb1", "#f06292", "#ec407a", "#e91e63", "#d81b60", "#c2185b", "#ad1457", "#880e4f"],
            ["#f3e5f5", "#e1bee7", "#ce93d8", "#ba68c8", "#ab47bc", "#9c27b0", "#8e24aa", "#7b1fa2", "#6a1b9a", "#4a148c"],
            ["#ede7f6", "#d1c4e9", "#b39ddb", "#9575cd", "#7e57c2", "#673ab7", "#5e35b1", "#512da8", "#4527a0", "#311b92"],
            ["#e8eaf6", "#c5cae9", "#9fa8da", "#7986cb", "#5c6bc0", "#3f51b5", "#3949ab", "#303f9f", "#283593", "#1a237e"],
            ["#e3f2fd", "#bbdefb", "#90caf9", "#64b5f6", "#42a5f5", "#2196f3", "#1e88e5", "#1976d2", "#1565c0", "#0d47a1"],
            ["#e1f5fe", "#b3e5fc", "#81d4fa", "#4fc3f7", "#29b6f6", "#03a9f4", "#039be5", "#0288d1", "#0277bd", "#01579b"],
            ["#e0f7fa", "#b2ebf2", "#80deea", "#4dd0e1", "#26c6da", "#00bcd4", "#00acc1", "#0097a7", "#00838f", "#006064"],
            ["#e0f2f1", "#b2dfdb", "#80cbc4", "#4db6ac", "#26a69a", "#009688", "#00897b", "#00796b", "#00695c", "#004d40"],
            ["#e8f5e9", "#c8e6c9", "#a5d6a7", "#81c784", "#66bb6a", "#4caf50", "#43a047", "#388e3c", "#2e7d32", "#1b5e20"],
            ["#f1f8e9", "#dcedc8", "#c5e1a5", "#aed581", "#9ccc65", "#8bc34a", "#7cb342", "#689f38", "#558b2f", "#33691e"],
            ["#f9fbe7", "#f0f4c3", "#e6ee9c", "#dce775", "#d4e157", "#cddc39", "#c0ca33", "#afb42b", "#9e9d24", "#827717"],
            ["#fffde7", "#fff9c4", "#fff59d", "#fff176", "#ffee58", "#ffeb3b", "#fdd835", "#fbc02d", "#f9a825", "#f57f17"],
            ["#fff8e1", "#ffecb3", "#ffe082", "#ffd54f", "#ffca28", "#ffc107", "#ffb300", "#ffa000", "#ff8f00", "#ff6f00"],
            ["#fff3e0", "#ffe0b2", "#ffcc80", "#ffb74d", "#ffa726", "#ff9800", "#fb8c00", "#f57c00", "#ef6c00", "#e65100"],
            ["#fbe9e7", "#ffccbc", "#ffab91", "#ff8a65", "#ff7043", "#ff5722", "#f4511e", "#e64a19", "#d84315", "#bf360c"],
            ["#efebe9", "#d7ccc8", "#bcaaa4", "#a1887f", "#8d6e63", "#795548", "#6d4c41", "#5d4037", "#4e342e", "#3e2723"],
            ["#fafafa", "#f5f5f5", "#eeeeee", "#e0e0e0", "#bdbdbd", "#9e9e9e", "#757575", "#616161", "#424242", "#212121"],
            ["#eceff1", "#cfd8dc", "#b0bec5", "#90a4ae", "#78909c", "#607d8b", "#546e7a", "#455a64", "#37474f", "#263238"]
        ]

        this._initProps()
        this._initStyle()
        this._render()
    }

    _initProps()
    {
        this.props.open = true
    }
    _initStyle()
    {
        this._stl = {
            width: 64,
            height: 64,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
        this._btl = {
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "none",
            cursor: "pointer"
        }
    }

    _onAlpha( e, v )
    {
        this._a = v
        this._ah = this._toHex( this._a )
        this._setColor()
    }
    _onRed( e, v )
    {
        this._r = v
        this._rh = this._toHex( this._r )
        this._setColor()
    }
    _onGreen( e, v )
    {
        this._g = v
        this._gh = this._toHex( this._g )
        this._setColor()
    }
    _onBlue( e, v )
    {
        this._b = v
        this._bh = this._toHex( this._b )
        this._setColor()
    }
    _setColor()
    {
        var a = this.options.includes( "alpha" ) ? this._a : 255
        this._bgColor = `rgba(${this._r}, ${this._g}, ${this._b}, ${parseFloat(a/255).toFixed(3)})`
        var ah = this.options.includes( "alpha" ) ? this._ah : ""
        this.value = "#"+ah+this._rh+this._gh+this._bh
        this._render()
    }
    _onTfdChnge( e ) {
        this.value = e.target.value;
        this._bgColor = this.value;
        const rgb = this.hexToRgbArray( this.value );
        this._r = rgb[0], this._g = rgb[1], this._b = rgb[2];
        this._render()
    }
    _onClose()
    {
        this.props.open = false
        this._render()
    }

    _toHex( d ) {
        return ( "0"+(Number(d).toString(16)) ).slice(-2).toUpperCase()
    }

    _onSubmit()
    {
        if( this.onSelect ) this.onSelect( this.value )
        this._onClose()
    }
    _onToggle(e)
    {
        this._custom = !this._custom
        this._title = this._custom ? "Custom" : "Color palette"
        this._tglTxt = this._custom ? "Presets" : "Custom"
        this._presOpen = false
        this._render()
    }
    _goToPreset()
    {
        this._presOpen = false
        this._render()
    }
    _clrTouch( i )
    {
        this._pi = i
        this._pc = this._clrs[this._pi]
        this._presOpen = true
        this._pii = 5
        this.value = this._clrs[this._pi][this._pii]
        this._bgColor = this.value
        const rgb = this.hexToRgbArray( this.value );
        this._r = rgb[0], this._g = rgb[1], this._b = rgb[2];
        this._render()
    }
    _clrTouch2( i )
    {
        this._pii = i
        this.value = this._clrs[this._pi][this._pii]
        this._bgColor = this.value
        this._render()
    }
    _getRef( ref ) {
        if( ref ) {
            this._ref = ref;
            if( this._fontName ) this._setFontName();
        }
    }
    _setFontName() {
        let els = this._ref.querySelectorAll('*:not(:empty):not(.material-icons)');
        els.forEach(m => m.style.fontFamily = this._fontName);
    }

    hexToRgbArray(hexColor) {
        hexColor = hexColor.replace(/^#/, '');
        const r = parseInt(hexColor.slice(0, 2), 16);
        const g = parseInt(hexColor.slice(2, 4), 16);
        const b = parseInt(hexColor.slice(4, 6), 16);
        return [r, g, b];
    }

    _render()
    {
        var e = React.createElement
		var {Dialog,DialogTitle,DialogActions,Typography,Slider,Button,IconButton,Icon,TextField} = window['MaterialUI']

        this._ctl = e( Dialog, {
            ...this.props,
            onClose: this._onClose.bind( this ),
            className: "color-picker-"+this._id,
            style: {},
            ref: this._getRef.bind(this)
        }, [
            e( DialogTitle, { key:0 }, [
                this._presOpen ? e( IconButton, {
                    key:0,
                    onClick: platform.ios ? null : this._goToPreset.bind(this),
                    onTouchEnd: platform.ios ? this._goToPreset.bind(this) : null
                }, e(Icon, {}, "arrow_back") ):null,
                this._title
            ]),

            // custom
            this._custom ? e( "div", {
                key:1, style: {
                    height: "350px",
                    width: "280px",
                    textAlign: "center"
                }
            }, [
                e("div", {
                    key: 0,
                    style: {
                        width: "100%",
                        height: "120px",
                        backgroundColor: this._bgColor
                    }
                }),
                e( TextField, {
                    key: 1,
                    variant: "outlined",
                    color: "secondary",
                    size: "small",
                    style: {margin: "16px 0px"},
                    value: this.value,
                    onChange: this._onTfdChnge.bind(this)
                }),
                this.options.includes("alpha") ? e("div", {
                    key: 2,
                    style: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        height: 40
                    }
                }, [
                    e( Typography, { key: 0 }, "A" ),
                    e( Slider, { key: 1, min:0, max:255, value: this._a, color: "secondary", onChange: this._onAlpha.bind(this), style: { width: "70%" } } ),
                    e( Typography, { key: 2 }, "255" )
                ]) : null,
                e( "div", {
                    key: 3,
                    style: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        height: 40
                    }
                }, [
                    e( Typography, { key: 0 }, "R" ),
                    e( Slider, { key: 1, min:0, max:255, value: this._r, color: "secondary", onChange: this._onRed.bind(this), style: { width: "70%" } } ),
                    e( Typography, { key: 2 }, "255" )
                ]),
                e("div", {
                    key: 4,
                    style: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        height: 40
                    }
                }, [
                    e( Typography, { key: 0 }, "G" ),
                    e( Slider, { key: 1, min:0, max:255, value: this._g, color: "secondary", onChange: this._onGreen.bind(this), style: { width: "70%" } } ),
                    e( Typography, { key: 2 }, "255" )
                ]),
                e("div", {
                    key: 5,
                    style: {
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        height: 40
                    }
                }, [
                    e( Typography, { key: 0 }, "B" ),
                    e( Slider, { key: 1, min:0, max:255, value: this._b, color: "secondary", onChange: this._onBlue.bind(this), style: { width: "70%" } } ),
                    e( Typography, { key: 2 }, "255" )
                ]),
            ]) :

            // presets
            e( "div", {
                key:1, style: {
                    height: "320px",
                    width: "256px",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    marginBottom: "30px",
                    margin: "0px 12px",
                    padding: 0
                }
            },

            this._presOpen == false ? // check if preset selection is open

            // if not open
            this._presets.map( (clr, i)=> {
                return e("div", {
                    key:i,
                    style: { ...this._stl }
                }, e("button", {
                    style: { ...this._btl, backgroundColor: clr },
                    onClick: platform.ios ? null : this._clrTouch.bind(this, i),
                    onTouchEnd: platform.ios ? this._clrTouch.bind(this, i) : null,
                    className: "color-picker-preset-btn"
                }, this._pi == i ? e( Icon, {style:{fontSize: "1.8rem", color:"white"}}, "check" ) : "" ) )
            }) :

            // if preset selection is active
            this._pc.map( (clr, i)=> {
                return e("div", {
                    key:i,
                    style: { ...this._stl }
                }, e( "button", {
                    style: { ...this._btl, backgroundColor: clr },
                    onClick: platform.ios ? null : this._clrTouch2.bind(this, i),
                    onTouchEnd: platform.ios ? this._clrTouch2.bind(this, i) : null,
                    className: "color-picker-preset-btn"
                }, this._pii == i ? e( Icon, {style:{fontSize: "1.8rem", color:"white"}}, "check" ) : "" ) )
            }) ),

            // actions
            e( DialogActions, {
                key: 2
            }, [
                e( Button, {
                    key: 0,
                    variant: "text",
                    onClick: platform.ios ? null : this._onClose.bind(this),
                    onTouchEnd: platform.ios ? this._onClose.bind(this) : null,
                    style: { color: "#ff9800" }
                }, "Cancel" ),
                e( Button, {
                    key: 1,
                    variant: "text",
                    color: "primary",
                    onClick: platform.ios ? null : this._onToggle.bind(this),
                    onTouchEnd: platform.ios ? this._onToggle.bind(this) : null
                }, this._tglTxt ),
                e( Button, {
                    key: 2,
                    variant: "text",
                    color: "primary",
                    onClick: platform.ios ? null : this._onSubmit.bind(this),
                    onTouchEnd: platform.ios ? this._onSubmit.bind(this) : null
                }, "Done" )
            ])
        ]);
        ReactDOM.render(this._ctl, this._div, () => {
            if( !this.props.open ) {
                setTimeout(() => {
                    this._div.remove();
                }, 0);
            }
        });
    }

    // Visible Properties

    /** ## Properties
     * Here are the setter and getter properties available for ColorPicker Component.
     * @prop {String} value Returns the value of the chosen color.
     */

    // Visible Methods

    /**  ## Methods
     * Here are the available methods of the ColorPicker Component.
     */
    
    /** ### getValue
     * Returns the hexadecimal string color value of the color picker.
     * $$ cpk.getValue() $$
     * @returns String
     */
    getValue() { return this.value }

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

/* ## Examples */

/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout
        this.btn = ui.addButton(this.main, "Show Popup", "Primary")

        // Add callback handler for `onTouch` event
        this.btn.setOnTouch( this.showColorPicker )
    }

    showColorPicker()
    {
        // Show color picker dialog with `Alpha` option
        // to include alpha in the output format `#aarrggbb`
        ui.showColorPicker(null, "Alpha", this.onSelect)
    }

    onSelect( clr )
    {
        ui.showPopup( clr )
    }
}
 */