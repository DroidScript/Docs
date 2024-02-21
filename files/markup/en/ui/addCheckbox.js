
/** # Checkbox
 * @abbrev ckb
 * A checkbox in UI development is a graphical control element that allows users to toggle between two states, typically checked or unchecked, to indicate a choice or selection.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, checkboxes maintain a consistent appearance with rounded corners and adhere to elevation principles. Add a checkbox component using the `addCheckbox` method like this:
 * $$ ckb = ui.addCheckbox(parent, text, options, width, height) $$
 * @param {Object} parent The layout where to add the checkbox
 * @param {String} text The label for the checkbox
 * @param {String} options A comma separated options.\nTheme Colors: `Primary`, `Secondary`\nSizes: `Medium`, `Small`\nIcon position: `Left`, `Top`, `Right`, `Bottom`\nVariant: `Indeterminate`, `Determinate`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object Checkbox
 */

ui.addCheckbox = function(parent, text, options, width, height)
{
    return new ui.Checkbox( parent, text, options, width, height )
}

ui.Checkbox = class extends ui.Control
{
	constructor( parent, text, options, width, height )
	{
        super( parent, width, height, options, "Checkbox" )
        
		this._icon = "check_box_outline_blank"
		this._checkedIcon = "check_box"
        this._disabled = false
        this._text = text
        this._labelPlacement = "end"
        this._props.checked = false
        this._props.disableRipple = false
        this._props.disabled = false
        this._textProps = {}
		this._style1 = {}
        this._style2 = {}
        this._initProps()
        this._initStyle()
        this._render()
	}

    //Invisible methods
    _initProps() {
        this._indet = this._options.includes("indeterm")
        this._props.color = _color( this._options )
        this._labelPlacement = this._getLabelPlacement()
        if( this._labelPlacement === "end" ) this._props.edge = "start"
        else this._props.edge = "end"
    }

    _initStyle() { }

    _getLabelPlacement()
    {
        if( this._options.includes( "right" ) ) return "start"
        else if( this._options.includes( "bottom" ) ) return "top"
        else if( this._options.includes( "top" ) ) return "bottom"
        else return "end"
    }
	_onChange( ev )
	{
		this._props.checked = !this._props.checked
		if( this._change ) this._change( this._props.checked, this._getEventObject(ev, null, null, "touch") )
		this._render()
	}
	_render()
	{
		const e = React.createElement
        const {FormGroup,FormControlLabel,Icon,Checkbox,Typography} = window['MaterialUI'];
		this._ctl = e( FormGroup, {
                component: "div",
                style: { width: "100%", height: "100%" }
            },
            e( FormControlLabel, {
                label: e( Typography, { ...this._textProps, style:{...this._style1} }, this._text ),
                labelPlacement: this._labelPlacement,
                onChange: this._onChange.bind( this ),
                control: e( Checkbox, {
                    ...this._props,
                    icon: e( Icon, {style:{...this._style2}}, this._icon ),
                    checkedIcon: e( Icon, {style:{...this._style2}}, this._checkedIcon ),
                    indeterminate: this._indet
                }, "" ),
                component: "div",
                style: {
                    margin: 0,
                    display: "flex",
                    justifyContent: this._labelPlacement == "start" ? "space-between":"flex-start",
                    width: "100%",
                    height: "100%"
                },
                onContextMenu: this._onContextMenu.bind(this)
            }, "" )
		);
		ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        });
	}

    // VISIBLE PROPERTIES

    /** ## Properties
     * Here are the available setters and/or getters of the Checkbox Component.
     * @prop {String} textPosition Sets or returns the text position. Values can be `left` `top` `right` `bottom`
     * @prop {String} checkIcon Sets or returns the material icon font for check stated.
     * @prop {String} uncheckIcon Sets or returns the material icon font for uncheck state.
     * @prop {Boolean} value Sets or returns the checked state of the checkbox.
     * @prop {Boolean} enabled Returns whether the Checkbox is enabled or disabled.
     * @prop {String} color Sets or returns the theme color of the checkbox when checked. Values can be `Default` `Primary` or `Secondary`
     * @prop {String} text Sets or returns the checkbox text.
     * @prop {Boolean} disable Enabled or disable the checkbox component.
     * @prop {Number} iconSize Sets or returns the size of the icon.
     * @prop {String} iconColor Sets or returns the color of the checkbox icon.
     * @prop {Number} spaceBetween Sets or returns the space between the checkbox icon and the label text.
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
	 * Here are the methods available for Checkbox Component
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
     * Adds an event handler when the checkbox is touch.
     * $$ ckb.setOnTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Boolean} check The checked state of the checkbox. @arg {Object} pos The position of the touch event.
     */
    setOnTouch( callback ) { this._change = callback; }
    // setOnChange(callback) { this._change = callback; }

    setTextPosition( pos )
    {
        pos = pos ? pos.toLowerCase() : ""
        if( pos == "left" ) this._labelPlacement = "start"
        else if( pos == "bottom" ) this._labelPlacement = "bottom"
        else if( pos == "top" ) this._labelPlacement = "top"
        else this._labelPlacement = "end"
        this._props.edge = this._labelPlacement === "end" ? "start" :  "end"
        this._render()
    }
    set textPosition( pos )
    {
        pos = pos ? pos.toLowerCase() : ""
        if( pos == "left" ) this._labelPlacement = "start"
        else if( pos == "bottom" ) this._labelPlacement = "bottom"
        else if( pos == "top" ) this._labelPlacement = "top"
        else this._labelPlacement = "end"
        this._props.edge = this._labelPlacement === "end" ? "start" :  "end"
        this._render()
    }
    get textPosition() {
        if(this._labelPlacement == "start") return "left"
        if(this._labelPlacement == "top") return "top"
        if(this._labelPlacement == "bottom") return "bottom"
        return "right"
    }
    
    /** ### setIcon
     * Sets a custom icon for the checkbox.
     * $$ ckb.setIcon( checked, unchecked ) $$
     * @param {String} checked Material icon for checked state
     * @param {String} unchecked Material icon for unchecked state
     */
    setIcon( checked, unchecked ) { this._icon = unchecked; this._checkedIcon = checked; this._render(); }

    /** ### getIcon
     * Returns the icons of the form { checkIcon, uncheckedIcon }.
     * $$ ckb.getIcon() $$
     * @returns Object { checkIcon, uncheckedIcon }
     */
    getIcon() { return {checked: this._checkedIcon, unchecked:this._icon} }
    
    set checkIcon(icon) { this._checkedIcon = icon.toLowerCase(); this._render(); }
    get checkIcon() { return this._checkedIcon; }

    set uncheckIcon(icon) { this._icon = icon.toLowerCase(); this._render(); }
    get uncheckIcon() { return this._icon; }

    setValue( val ) { this._props.checked = val; this._render(); }
    getValue() { return this._props.checked; }

    set value( val ) { this._props.checked = val; this._render(); }
    get value() { return this._props.checked; }

    setColor( color ) { this._props.color = color ? color.toLowerCase() : "primary"; this._render(); }
    set color( color ) { this._props.color = color ? color.toLowerCase() : "primary"; this._render(); }
    get color() { return this._props.color; }

    setTextColor( clr )
    { 
        if( !this._textProps.style ) this._textProps.style = {}
        this._textProps.style.color = clr;
        this._render();
    }
    set textColor( clr ) {
        this._style1.color = clr;
        this._render();
    }
    get textColor() { return this._style1.color; }

    setText( txt ) { this._text = txt; this._render(); }
    getText() { return this._text }

    set text( txt ) { this._text = txt; this._render(); }
    get text() { return this._text }

    set textSize(size) {
        this._style1.fontSize = size
        this._style2.fontSize = size
        this._render()
    }
    get textSize() { return this._style1.fontSize }

    set iconSize(size) {
        this._style2.fontSize = size
        this._render()
    }
    get iconSize() { return this._style2.fontSize }

    set iconColor(color) {
        this._style2.color = color
        this._render()
    }
    get iconColor() { return this._style2.color }

    set spaceBetween(space) {
        if( this._options.includes("right") ) return
        this._style1.marginLeft = space
        this._render()
    }
    get spaceBetween() { return this._style1.marginLeft }

    set iconPosition( pos ) {
        pos = pos ? pos.toLowerCase() : "left"
        if(pos=="right") this._labelPlacement = "start"
        else if(pos=="top") this._labelPlacement = "bottom"
        else if(pos=="bottom") this._labelPlacement == "top"
        else this._labelPlacement = "end"
        this._props.edge = this._labelPlacement === "end" ? "start" :  "end"
        this._render()
    }
    get iconPosition() {
        if(this._labelPlacement == "start") return "left"
        if(this._labelPlacement == "top") return "bottom"
        if(this._labelPlacement == "bottom") return "top"
        return "right"
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
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Add a checkbox control to the main layout
        this.ckb = ui.addCheckbox(this.main, "This is checkbox label")

        // Add a callback handler for `onTouch` event
        this.ckb.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */

/**
@sample Colors
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Add a default checkbox control to the main layout
        this.ckb1 = ui.addCheckbox(this.main, "This is checkbox label")
        this.ckb1.setOnTouch( this.onTouch )

        // Add a primary checkbox control to the main layout
        this.ckb2 = ui.addCheckbox(this.main, "This is checkbox label", "Primary")
        this.ckb2.setOnTouch( this.onTouch )

        // Add a secondary checkbox control to the main layout
        // and set its value to `true`
        this.ckb3 = ui.addCheckbox(this.main, "This is checkbox label", "Secondary")
        this.ckb3.value = true
        this.ckb3.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */

/**
@sample Text positions
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Add a checkbox with label on the right. 
        this.ckb1 = ui.addCheckbox(this.main, "Checkbox on the left", "Left")
        this.ckb1.setOnTouch( this.onTouch )

        // Add a checkbox with label on the bottom.
        this.ckb2 = ui.addCheckbox(this.main, "Checkbox on the top", "Primary,Top")
        this.ckb2.setOnTouch( this.onTouch )

        // Add a checkbox with label on the left.
        this.ckb3 = ui.addCheckbox(this.main, "Checkbox on the right", "Secondary,Right")
        this.ckb3.setOnTouch( this.onTouch )

        // Add a checkbox with label on top.
        this.ckb4 = ui.addCheckbox(this.main, "Checkbox on the bottom", "Secondary,Bottom")
        this.ckb4.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */

/**
@sample Adding custom checkbox icon
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Adds checkbox control to the main layout
        this.ckb = ui.addCheckbox(this.main, "This is checkbox label", "Left,Secondary")

        // Set the checked icon to `favorite`
        // and uncheck icon to `person`
        this.ckb.setIcon("favorite", "person")

        // Add a callback handler for `onTouch` event
        this.ckb.setOnTouch( this.onTouch )
    }

    onTouch( value )
    {
        ui.showPopup( `Value is ${ value }` )
    }
}
 */