
/** # Switch
 * @abbrev swt
 * A Switch in mobile UI design is a toggle control that allows users to turn a setting on or off.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, it's presented with a sliding motion and adheres to consistent styling for clarity. Switches provide an intuitive way to enable or disable options in applications, contributing to a seamless user experience. Add a switch into your app using the `addSwitch` method like this:
 * $$ swt = ui.addSwitch(parent, text, options, width, height) $$
 * @param {Object} parent The parent layout where to add the Switch Component.
 * @param {String} text The label text.
 * @param {String} options A comma separated options.\nTheme Color: `Primary`, `Secondary`, `Default`\nIcon Position: `Left`, `Top`, `Right`, `Bottom`\nSizes: `Small`, `Medium`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object Switch
 */
ui.addSwitch = function(parent, text, options, width, height)
{
    return new ui.Switch(parent, text, options, width, height)
}

ui.Switch = class extends ui.Control
{
    constructor(parent, text, options, width, height) 
    {
        super( parent, width, height, options, "Switch" )
        this._text = text || ""
        this._labelPlacement = this._options.includes( "right" ) ? "start" : "end"
        this._textProps = {}
        this._style1 = {}
        this._disabled = false
        this._props.value = false
        this._props.disabled = false
        this._props.required = false
        this._props.disableRipple = false
        this._props.name = "switch-"+this._id
        this._props.checked = false
        this._initProps()
        this._initStyle()
        this._render()
    }

    //Invisible methods
    _initProps()
    {
        this._props.size = _size( this._options )
        this._props.color = _color( this._options )
        
        // label placement
        if( this._options.includes( "right" ) ) this._labelPlacement = "start"
        else if( this._options.includes( "top" ) ) this._labelPlacement = "bottom"
        else if( this._options.includes( "bottom" ) ) this._labelPlacement = "top"
        else this._labelPlacement = "end"
    }

    _initStyle() {}

    _onChange( ev )
    {
        this._props.checked = ev.target.checked
        if(this._touch) this._touch(this._props.checked, this._getEventObject(ev, null, null, "touch"));
        this._render()
        // if(this._change) this._change( ev.target.checked )
        
    }
    _render()
    {
        let e = React.createElement
        let {FormGroup, FormControlLabel, Switch, Typography } = window['MaterialUI']
        
        this._ctl = e( FormGroup, {
                component: "div",
                style: {
                    width: "100%",
                    height: "100%"
                }
            },
            e( FormControlLabel,
                {
                    label: e( Typography, {
                            ...this._textProps,
                            style:{...this._style1}
                        }, this._text ),
                    labelPlacement: this._labelPlacement,
                    onChange: this._onChange.bind(this),
                    control: e( Switch, { ...this._props, edge: this._labelPlacement=="start"?"end":"start" }, "" ),
                    // onClick: this._onTouch,
                    style: {
                        margin: 0,
                        display: "flex",
                        justifyContent: this._labelPlacement == "start" ? "space-between" : "flex-start",
                        width: "100%",
                        height: "100%"
                    },
                    onContextMenu: this._onContextMenu.bind(this)
                }, null
            )
        )
        ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        });
    }

    /** ## Properties
     * Here are the available setters and getters for the Switch Component.
     * @prop {Boolean} value Sets or returns the value of the switch toggle.
     * @prop {String} text Sets or returns the label text.
     * @prop {String} iconPosition Sets or returns the icon position. Values can be `left` `top` `right` or `bottom`
     * @prop {Boolean} required Sets or returns a boolean value whether this component is required or not.
     * @prop {String} color Sets or returns the theme color. Values can be `Default` `Primary` or `Secondary`
     * @prop {String} textColor Sets or returns the text color in hexadecimal format.
     * @prop {String} sizeVariant Sets or returns the size variant of the toggle switch. Values can be `Small` or `Medium`
     * @prop {String} edge Sets or returns the edge position of the toggle. Values can be `Start` `End` or `False`
     * @prop {Boolean} enable Sets or returns a Boolean whether the component is enabled or disabled.
     * @prop {Number} spaceBetween Sets or returns the space between the switch icon and the label text.
     * @prop {Boolean} disableRipple Sets or returns the disabled state of the ripple effect.
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
     * Here are the available methods of the Switch Component.
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
     * Adds an event handler when the switch is touch.
     * $$ swt.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Boolean} check The checked state of the switch control. @arg {Object} pos The position of the event.
     */
    // setOnTouch(callback) { this._change = callback; }
    // setOnChange(callback) { this._change = callback; }

    setValue(val) { this._props.checked = val; this._render(); }
    getValue() { return this._props.checked; }
    set value(val) { this._props.checked = val; this._render(); }
    get value() { return this._props.checked }

    setText( val ) { this._text = val; this._render() }
    getText() { return this._text }
    set text( val ) { this._text = val; this._render() }
    get text() { return this._text }

    setIconPosition( pos )
    {
        pos = pos ? pos.toLowerCase().trim() : "left"
        if( pos == "bottom" ) this._labelPlacement = "top"
        else if( pos == "right" ) this._labelPlacement = "start"
        else if( pos == "top" ) this._labelPlacement = "bottom"
        else this._labelPlacement = "end"
        this._render()
    }
    getIconPositon()
    {
        var ret = "left"
        if( this._labelPlacement == "left" ) ret = "right"
        else if( this._labelPlacement == "top" ) ret = "bottom"
        else if( this._labelPlacement == "bottom" ) ret = "top"
        return ret
    }
    set iconPosition( pos ) {
        pos = pos ? pos.toLowerCase().trim() : "left"
        if( pos == "bottom" ) this._labelPlacement = "top"
        else if( pos == "right" ) this._labelPlacement = "start"
        else if( pos == "top" ) this._labelPlacement = "bottom"
        else this._labelPlacement = "end"
        this._render()
    }
    get iconPosition() {
        var ret = "left"
        if( this._labelPlacement == "left" ) ret = "right"
        else if( this._labelPlacement == "top" ) ret = "bottom"
        else if( this._labelPlacement == "bottom" ) ret = "top"
        return ret
    }

    setRequired(val) { this._props.required = val; this._render(); }
    set required( val ) { this._props.required = val; this._render(); }
    get required() { return this._props.required }

    set disableRipple( value ) {
        this._props.disableRipple = value
        this._render()
    }
    get disableRipple() { return this._props.disableRipple }

    setColor(color) { this._props.color = color.toLowerCase(); this._render(); }
    getColor() { return this._props.color; }
    set color(color) { this._props.color = color.toLowerCase(); this._render(); }
    get color() { return this._props.color; }

    setTextColor( clr )
    {
        this._style1.color = clr;
        this._render();
    }
    set textColor( clr ) {
        this._style1.color = clr;
        this._render();
    }
    get textColor() { return this._style1.color }

    set textSize(size) {
        this._style1.fontSize = size
        this._render()
    }
    get textSize() { return this._style1.fontSize }

    setSizeVariant(size) { this._props.size = size.toLowerCase(); this._render(); }
    getSizeVariant() { return this._props.size; }
    set sizeVariant(size) { this._props.size = size.toLowerCase(); this._render(); }
    get sizeVariant() { return this._props.size; }

    setEdge( edge )
    {
        if( edge )
        {
            this._props.edge = edge.toLowerCase().trim();
            this._render();
        }
    }
    getEdge() { return this._props.edge; }
    set edge( edge ) {
        if( edge )
        {
            this._props.edge = edge.toLowerCase().trim();
            this._render();
        }
    }
    get edge() { return this._props.edge; }

    set enable( val ) { this._props.disabled = !val; this._render(); }
    get enable() { return !this._props.disabled; }

    isEnabled() { return !this._props.disabled }

    get isEnabled() { return !this._props.disabled }

    set spaceBetween(space) {
        this._style1.marginLeft = space
        this._render()
    }
    get spaceBetween() { return this._style1.marginLeft }

    set textPosition( pos ) {
        pos = pos ? pos.toLowerCase().trim() : "left"
        if( pos == "bottom" ) this._labelPlacement = "bottom"
        else if( pos == "right" ) this._labelPlacement = "end"
        else if( pos == "top" ) this._labelPlacement = "top"
        else this._labelPlacement = "start"
        this._render()
    }
    get textPosition() {
        if( this._labelPlacement == "end" ) return "right"
        else if( this._labelPlacement == "start" ) return "left"
        return this._labelPlacement
    }
}

/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Adds a switch to the main layout
        this.swt = ui.addSwitch(this.main, "Check me", "Secondary", 0.5)

        // Add a callback handler when the switch control is touch
        this.swt.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup("Value is : "  + value)

        // Setting the switch label text
        this.swt.text = `Check me (Value is ${value})`
    }
}
 */

/**
@sample Right switch with custom styles
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Adds a switch control to the main layout
        // `Right` option will display the switch on the right
        this.swt = ui.addSwitch(this.main, "Check me", "Right,Secondary", 0.5)

        // Add some custom styling to thw switch control
        this.swt.border = 1
        this.swt.padding = ["1.2rem"]
        this.swt.cornerRadius = 4
        this.swt.backColor = "yellow"

        // Add a callback handler when the switch control is touch
        this.swt.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup("Value is : "  + value)
    }
}
 */