
/** # TextField
 * @abbrev tfd
 * A TextField in mobile UI design is an input field where users can enter text or numeric data.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, it features a clear outline, label, and optional helper text, ensuring a consistent and user-friendly interface for data input. TextFields are fundamental components used for various forms and interactive elements in mobile applications. Inputs can be a number, text, emails, passwords and more. Add a textfield into your app using the `addTextField` method like this:
 * $$ tfd = ui.addTextField(parent, text, options, width, height) $$
 * @param {Object} parent The layout where to add the TextField Component.
 * @param {String} text The initial value of the TextField
 * @param {String} options A comma separated options.\nTheme Color: `Primary`, `Secondary`\nSizes: `Small`, `Medium`\nType: `Text`, `Password`, `Email`, `Search`, `Number`, `Date`, `Time`, `DateTime`\nVariant: `Standard`, `Filled`, `Outlined`\nTextArea: `Multiline`\nUtils: `Autofocus`
 * @param {Number} width Fraction of the parent width `[0-1]`.
 * @param {Number} height Fraction of the parent height `[0-1]`.
 * @returns Object TextField
 * If you want a materialize date and time pickers, see `DatePicker`, `TimePicker` or `DateTimePicker` components.
 */

ui.addTextField = function(parent, text, options, width, height)
{
    return new ui.TextField(parent, text, options, width, height)
}

ui.TextField = class extends ui.Control
{
    constructor(parent, text, options, width, height)
    {
        super( parent, width, height, options, "TextField" )
        this._startAdorn = {}
        this._startAdornCb = null
        this._endAdorn = {}
        this._endAdornCb = null
        this._props.label = ""
        this._props.value = text || ""
        this._props.helperText = ""
        this._props.required = false
        this._props.disabled = false
        this._props.error = false
        this._props.fullWidth = this._width===1 ? true:false
        this._props.placeholder = ""
        this._props.rows = 1
        this._props.rowsMax = 100
        this._initProps()
        this._inputStyle = { height: "100%" }
        this._initStyle()
        this._labelProps = { style: {} }
        this._render()
    }

    // Invisible methods
    _initProps( )
    {
        this._props.variant = this._variant()
        this._props.type = this._type()
        this._props.color = this._options.includes('secondary') ? "secondary" : "primary"
        this._props.size = this._options.includes('small') ? "small":"medium"
        this._props.multiline = this._options.includes('multiline') ? true:false
        this._props.autoFocus = this._options.includes("autofocus")
    }

    _initStyle()
    {
        this._style = {
            width: "100%",
            height: "100%"
        }
        this._div.style.display = "inline-flex"
        this._div.style.alignItems = "center"
        if( this._fontFile ) this._inputStyle.fontFamily = this._fontName;
    }

    _variant() {
        if(this._options.includes("filled")) return "filled"
        if(this._options.includes("outline")) return "outlined"
        else return "standard"
    }
    _type() {
        if(this._options.includes("password")) return "password"
        if(this._options.includes("email")) return "email"
        if(this._options.includes("search")) return "search"
        if(this._options.includes("number")) return "number"
        if(this._options.includes("datetime")) return "datetime-local"
        if(this._options.includes("date")) return "date"
        if(this._options.includes("time")) return "time"
        else return "text"
    }
    _onChange(e) {
        this._props.value = e.target.value
        this._render()
        if(this._change) this._change(e.target.value)
    }
    _onKeyUp(ev) {
        if(ev.key === 'Enter' && this._enter ) {
            ev.preventDefault()
            this._enter(this._props.value)
        }
    }
    
    _handleEndAdornClick() { if(this._endAdornCb) this._endAdornCb() }
    _handleStartAdornClick() { if(this._startAdornCb) this._startAdornCb() }

    _focus(e) {
        e.stopPropagation()
        if( this._onFocus ) this._onFocus(true)
    }
    _blur(e) {
        e.stopPropagation()
        if( this._onFocus ) this._onFocus(false)
    }
    _onTouch( e ) {
        e.stopPropagation();
        if( this._touch ) this._touch( this._getEventObject(e, null, null, "touch") );
    }
    _render()
    {
        let e = React.createElement
        let {InputAdornment, Icon, TextField, ThemeProvider } = window['MaterialUI']
        this._ctl = e( TextField, {
            ...this._props,
            style: { ...this._style },
            InputLabelProps: this._labelProps,
            onChange: this._onChange.bind(this),
            onKeyPress: this._onKeyUp.bind(this),
            InputProps: {
                startAdornment: this._startAdorn.text ? e(
                    InputAdornment, {
                        position: "start",
                        onClick: platform.ios ? null : this._handleStartAdornClick.bind(this),
                        onTouchEnd: platform.ios ? this._handleStartAdornClick.bind(this) : null,
                        style: { cursor: this._startAdorn.type.includes('touch') ? 'pointer':null}
                    },
                    this._startAdorn.type.includes('icon') ? e(Icon, {}, this._startAdorn.text) : this._startAdorn.text
                ) : "",
                endAdornment: this._endAdorn.text ? e(
                    InputAdornment, {
                        position: "end",
                        onClick: platform.ios ? null : this._handleEndAdornClick.bind(this),
                        onTouchEnd: platform.ios ? this._handleEndAdornClick.bind(this) : null,
                        style: { cursor: this._endAdorn.type.includes('touch') ? 'pointer':null}
                    },
                    this._endAdorn.type.includes('icon') ? e(Icon, {}, this._endAdorn.text) : this._endAdorn.text
                ) : "",
                style: { ...this._inputStyle, alignItems: this._options.includes("multiline") ? "flex-start": "center" }
            },
            inputProps: {
                style: { height: this._options.includes("multiline") ? "100%" : null }
            },
            onClick: platform.ios ? null : this._onTouch.bind(this),
            onTouchEnd: platform.ios ? this._onTouch.bind(this) : null,
            onContextMenu: this._onContextMenu.bind( this ),
            onFocus: this._focus.bind(this),
            onBlur: this._blur.bind(this)
        }, null )
        ReactDOM.render( this._ctl, this._div, () => {
            if( this._fontFile ) this._setFontName();
        })
    }

    /** ## Properties
     * Here are the available getter and setter properties for TextField Component.
     * @prop {String} text Sets or returns the text value of the TextField Component.
     * @prop {String} label Sets or returns the label text.
     * @prop {String} labelColor Sets return the label color in hexadecimal format `#rrggbb`
     * @prop {String} placeholder Sets or returns the placeholder text.
     * @prop {Boolean} required Sets or returns a boolean value whether the text field in required or not.
     * @prop {Boolean} autoFocus Sets or returns a boolean value whethe the input is focus when rendered into the DOM.
     * @prop {String} hint Sets or returns the hint text. It's the same as the `placeholder` property.
     * @prop {Number} minRows Sets or returns the minimum rows for a `multiline` textfield.
     * @prop {Number} maxRows Sets or returns the maximum rows for a `multiline` textfield.
     * @prop {String} variant Sets or returns the variant of the TextField. Values can be `Standard` `Filled` or `Outlined`
     * @prop {String} sizeVariant Sets or returns the size variant of the textfield. Values can be `Small` or `Medium`
     * @prop {String} color Sets or returns the theme color of the textfield component.
     * @prop {String} inputType Sets or returns the input type. See `type` params for available values.
     * @prop {String} outlineColor Sets or returns the outline color in hexadecimal form `#rrggbb` when the textfield is focus. 
     * @prop {String} endAdornment Returns the end adornment text or icon.
     * @prop {String} startAdornment Returns the start adornment text or icon.
     * @prop {String} helperText Sets or returns the helper text or the hint below the input.
     * @prop {Boolean} error Sets or returns the error state of the TextField component.
     * @prop {Number} stepIncrement Sets or returns the step increment if the input is of type number;
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
     * Here are the methods available for the TextField Component.
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
    
    /** ### setOnEnter
     * Sets a callback function on `enter` or `submit` event.
     * $$ tfd.setOnEnter(callback) $$
     * @param {Function} callback The callback function. ---> @arg {String} text The text value of the input.
     */
    setOnEnter( callback ) { this._enter = callback }
    setOnSubmit( callback ) { this.setOnEnter(callback); }

    /** ### setOnChange
     * Sets a callback function on `values changes` event.
     * $$ tfd.setOnChange( callback ) $$
     * @param {Function} callback The callback function. ---> @arg {String} text The text value of the input.
     */
    setOnChange( callback ) { this._change = callback; }

    setText( val ) { this._props.value = val; this._render(); }
    getText() { return this._props.value }
    set text( val ) { this._props.value = val; this._render(); }
    get text() { return this._props.value }

    setLabel( val ) {
        this._props.label = val
        this._render()
    }
    getLabel() { return this._props.label }
    set label( val ) {
        this._props.label = val
        this._render()
    }
    get label() { return this._props.label }

    setLabelColor( color )
    {
        if( color )
        {
            var css = document.createElement( "style" )
            css.innerText = "#"+this._div.id+" .MuiInputLabel-root.Mui-focused {"
            +" color: "+ color +"; }"
            document.getElementsByTagName( "head" )[0].appendChild( css )
        }
    }
    set labelColor( color )
    {
        if( color )
        {
            this._labelColor = color
            var css = document.createElement( "style" )
            css.innerText = "#"+this._div.id+" .MuiInputLabel-root.Mui-focused {"
            +" color: "+ color +"; }"
            document.getElementsByTagName( "head" )[0].appendChild( css )
        }
    }
    get labelColor() { return this._labelColor; }

    setPlaceholder(val) { this._props.placeholder = val; this._render(); }
    getPlaceholder() { return this._props.placeholder }
    set placeholder(val) { this._props.placeholder = val; this._render(); }
    get placeholder() { return this._props.placeholder }

    isRequired( val ) {
        this._props.required = val
        this._render()
    }
    set required( val ) {
        this._props.required = val
        this._render()
    }
    get required() { return this._props.required; }
    
    setAutoFocus( val ) {
        this._props.autoFocus = val
        this._render()
    }
    set autoFocus( val ) {
        this._props.autoFocus = val
        this._render()
    }
    get autoFocus() { return this._props.autoFocus; }

    /** ### focus
     * Sets focus on the textField component.
     * $$ tfd.focus() $$
     */
    focus() {
        const el = this._div.querySelector("input");
        if( el ) el.focus();
    }

    /** ### setOnFocus
     * Adds a callback function when the textfield is focus or blur.
     * @param {Function} callback The function to be called. ---> @arg {Boolean} focus The focus state of the input component.
     */
    setOnFocus( callback ) { this._onFocus = callback }

    setHint( val ) {
        this._props.placeholder = val
        this._render()
    }
    set hint( val ) {
        this._props.placeholder = val
        this._render()
    }
    get hint() { return this._props.placeholder; }

    // IMPORTANT
    /** ### setRows
     * Sets the minimum and maximum number of rows on a multiline type TextField.
     * $$ tfd.setRows( min, max ) $$
     * @param {Number} min The minimum number of rows.
     * @param {Number} max The maximum number of rows.
     * @@ TextField Component must be `Multiline`
     */
    setRows( min, max )
    {
        this._props.rows = min
        if(max) this._props.rowsMax = max
        this._render()
    }
    set minRows( min ) { this._props.rows = min; this._render(); }
    get minRows() { return this._props.rows; }
    set maxRows( max ) { this._props.rowsMax = max; this._render(); }
    get maxRows() { return this._props.rowsMax; }

    /** ### setStartAdornment
     * Set a start adornment control into the TextField Component.
     * $$ tfd.setStartAdornment( text, type ) $$
     * @param {String} text Text or material icon font.
     * @param {String} type A comma separated options for start adornment control. Options can be \n `Icon` : If the adornment is an icon. \n `Touchable` : If the adornment is touchable.
     */
    setStartAdornment( text, type )
    {
        this._startAdorn = { text: text, type: type ? type.toLowerCase():""}
        this._render()
    }

    /** ### setStartAdornmentOnTouch
     * Add a callback handler when the start adornment control is touch.
     * $$ tfd.setStartAdornmentOnTouch(callback) $$
     * @param {Function} callback The callback function.
     */
    setStartAdornmentOnTouch(callback) { this._startAdornCb = callback }

    /** ### getStartAdornment
     * Returns the start adornment text.
     * $$ tfd.getStartAdornment() $$
     * @returns String
     */
    getStartAdornment() { return this._startAdorn.text }

    get startAdornment() { return this._startAdorn.text }

    /** ### setEndAdornment
     * Add an end adornment control into the TextField Component.
     * $$ tfd.setEndAdornment( text, type ) $$
     * @param {String} text Text or material icon font.
     * @param {String} type A comma separated options for end adornment control. Options can be \n `Icon` : If the adornment is an icon. \n `Touchable` : If the adornment is touchable.
     */
    setEndAdornment( text, type ) {
        this._endAdorn = { text: text, type: type ? type.toLowerCase():"" }
        this._render()
    }

    /** ### setEndAdornmentOnTouch
     * Add a callback handler when the end adornment control is touch.
     * $$ tfd.setEndAdornmentOnTouch(callback) $$
     * @param {Function} callback The callback function.
     */
    setEndAdornmentOnTouch(callback) { this._endAdornCb = callback }

    /** ### getEndAdornment
     * Returns the end adornment text.
     * $$ tfd.getEndAdornment() $$
     * @returns String
     */
    getEndAdornment() { return this._endAdorn.text }

    get endAdornment() { return this._endAdorn.text }

    setVariant( val ) { this._props.variant = val ? val.toLowerCase() : ""; this._render(); }
    getVariant() { return this._props.variant }
    set variant( val ) { this._props.variant = val ? val.toLowerCase() : ""; this._render(); }
    get variant() { return this._props.variant }

    setSizeVariant( val ) { this._props.size = val ? val.toLowerCase():"medium"; this._render(); }
    getSizeVariant() { return this._props.size; }
    set sizeVariant( val ) { this._props.size = val ? val.toLowerCase():"medium"; this._render(); }
    get sizeVariant() { return this._props.size; }

    setColor(clr) { this._props.color = clr ? clr.toLowerCase() : ""; this._render(); }
    getColor() { return this._props.color }
    set color(clr) { this._props.color = clr ? clr.toLowerCase() : ""; this._render(); }
    get color() { return this._props.color }
    
    setInputType(type) {
        this._props.type = type ? type.toLowerCase() : 'text'
        this._render()
    }
    getInputType() { return this._props.type }
    set inputType(type) {
        this._props.type = type ? type.toLowerCase() : 'text'
        this._render()
    }
    get inputType() { return this._props.type }

    setTextColor( color )
    {
        this._inputStyle.color = color || "#000"
        this._render()
    }
    getTextColor() { return this._inputStyle.color }
    set textColor( color )
    {
        this._inputStyle.color = color || "#000"
        this._render()
    }
    get textColor() { return this._inputStyle.color }
    
    setOutlineColor( color )
    {
        if( color )
        {
            var css = document.createElement( "style" )
            css.innerText = "#"+this._div.id+" .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {"
            +" border-color: "+ color +"; }"
            + "#"+this._div.id+" .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {"
            + " border-color: "+ color +"; }"
            document.getElementsByTagName( "head" )[0].appendChild( css )
        }
    }
    getOutlineColor() { return this._outlineColor; }
    set outlineColor( color )
    {
        this._outlineColor = color
        var css = document.createElement( "style" )
        css.innerText = "#"+this._div.id+" .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {"
        +" border-color: "+ color +"; }"
        + "#"+this._div.id+" .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {"
        + " border-color: "+ color +"; }"
        document.getElementsByTagName( "head" )[0].appendChild( css )
    }
    get outlineColor() { return this._outlineColor; }

    set textSize(size) {
        this._inputStyle.fontSize = size
        this._render()
    }
    get textSize() { return this._initStyle.fontSize }

    set helperText( text ) {
        this._props.helperText = text
        this._render()
    }
    get helperText() { return this._props.helperText }

    set error( value ) {
        this._props.error = value
        this._render()
    }
    get error() { return this._props.error }

    show() { this._div.style.display = "inline-flex"; }

    set stepIncrement( val ) {
        this._props.inputProps.step = val;
        this._render();
    }
    get stepIncrement() { return this._props.inputProps.step; }
}

/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Textfield variants
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 1, 0, 1, "rem")

        // Add a default textfield control to the main layout
        this.tfd1 = ui.addTextField( this.main )
        this.tfd1.label = "Enter text"

        // Handle textfield value changes
        this.tfd1.setOnChange( this.onChange )

        // Add a filled textfield control
        this.tfd2 = ui.addTextField(this.main, "", "Filled,Primary,Number")
        this.tfd2.label =  "Enter number"
        this.tfd2.setOnChange( this.onChange )

        // Add an outlined textfield control
        this.tfd3 = ui.addTextField(this.main, "", "Outlined,Secondary,Email")
        this.tfd3.label = "Enter email"
        this.tfd3.setOnChange( this.onChange )

        this.popup = ui.showPopup( "" )
        this.popup.hide()
    }

    onChange( value )
    {
        this.popup.text = value
        this.popup.show()
    }
}
 */

/**
@sample Callbacks
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.05)

        // Add a default textfield control to the main layout
        this.tfd = ui.addTextField(this.main, "", "Outlined,Secondary")
        this.tfd.label = "Enter text"

        // Add a callback handler when the value changes
        this.tfd.setOnChange( this.onChange )

        // Add a callback handler on submit event
        this.tfd.setOnEnter( this.onEnter )

        // Add a button control to the main layout that will get the value
        // of the textfield when clicked
        this.btn = ui.addButton(this.main, "Get value", "Outlined,Secondary")
        this.btn.setOnTouch( this.btn_onTouch )

        // Initialize a popup to display values
        this.popup = ui.showPopup( "" )
        this.popup.hide()
    }

    onChange( value )
    {
        this.popup.text = "Change : " + value
        this.popup.show()
    }

    onEnter( value )
    {
        this.popup.text = "Enter : " + value
        this.popup.show()
    }

    btn_onTouch()
    {
        this.popup.text = "Value : " + this.tfd.text
        this.popup.show()
    }
}
 */

/**
@sample Multiline textfield
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        
        // Add a text control to the main layout
        this.txt = ui.addText(this.main, "This is a multiline type of TextField input", "Left", 0.8)
        this.txt.setMargins(0, 0, 0, 0.05)

        // Add a Multiline textfield control to the main layout
        this.tfd = ui.addTextField(this.main, "", "Outlined,Secondary,Multiline", 0.8)
        this.tfd.label = "Enter description"
        this.tfd.setRows(3, 6)
    }
}
 */

/**
@sample Advance textfield
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,ScrollY,FillXY")
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Start and end adornment
        ui.addText(this.main,  "Click the eye icon to show password.", "Left", 0.7)
        this.tfd = ui.addTextField(this.main, "", "Outlined,Secondary,Password", 0.7)
        this.tfd.label = "Enter password"
        this.tfd.setStartAdornment("lock", "Icon")
        this.tfd.setEndAdornment("visibility_off", "Icon,Touchable")
        this.tfd.setEndAdornmentOnTouch( this.togglePasswordVisibility )

        // Start Adornment text
        ui.addText(this.main,  "Start text adornment", "Left,Overline", 0.7)
        this.tfd1 = ui.addTextField(this.main, "", "Outlined,Secondary,Number", 0.7)
        this.tfd1.label = "Enter mass" 
        this.tfd1.setStartAdornment("KG", "Text")

        // Start Adornment icon
        ui.addText(this.main,  "Start icon adornment", "Left,Overline", 0.7)
        this.tfd2 = ui.addTextField(this.main, "", "Outlined,Secondary", 0.7)
        this.tfd2.label = "Enter username"
        this.tfd2.setStartAdornment("person", "Icon")

        // End Adornment text
        ui.addText(this.main,  "End text adornment", "Left,Overline", 0.7)
        this.tfd3 = ui.addTextField(this.main, "", "Outlined,Secondary,Number", 0.7)
        this.tfd3.label = "Enter amount"
        this.tfd3.setEndAdornment("$", "Text")

        // End Adornment icon
        ui.addText(this.main,  "End icon adornment", "Left,Overline", 0.7)
        this.tfd4 = ui.addTextField(this.main, "", "Outlined,Secondary,Password", 0.7)
        this.tfd4.label = "Enter password"
        this.tfd4.setEndAdornment("lock", "Icon")
    }

    togglePasswordVisibility()
    {
        if(this.tfd.endAdornment == "visibility_off")
        {
            this.tfd.setEndAdornment("visibility_on", "icon,touchable")
            this.tfd.inputType = 'text'
        }
        else
        {
            this.tfd.setEndAdornment("visibility_off", "icon,touchable")
            this.tfd.inputType = 'password'
        }
    }
}
 */