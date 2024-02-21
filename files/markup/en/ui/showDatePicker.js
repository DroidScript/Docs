
// soon to be deprecated
ui.addDatePicker = function(date, options, onSelect)
{
    return new ui.DatePicker(date, options, onSelect)
}

ui.DatePicker = class
{
    constructor(date, options="", onSelect, show)
    {
        this.options = options.toLowerCase();
        this._shown = show
        this._format = "YYYY-MM-DD";
        this._dateDlg = null
        this._callback = onSelect;

        this._el = document.createElement( "input" );
        this._el.setAttribute("type", "text");

        this._config = {
            type: "date",
            trigger: this._el,
            init: date ? moment(date, moment.DATE) : moment(),
            future: date ? moment(date, moment.DATE).add(10, "years") : moment().add(10, "years")
        }

        // init
        if( this.options.includes("portrait") ) this._config.orientation = "PORTRAIT";

        // render
        this._render();
        
        this._el.addEventListener("onOk", this._onOk.bind(this));
        this._el.addEventListener("onCancel", this._onCancel.bind(this));

        if( this._shown ) this._dateDlg.toggle();
    }

    _render() {
        this._dateDlg = new mdDateTimePicker.default( this._config );
    }

    _onOk()
    {
        var value = this._dateDlg.time.format( this._format );
        if( this._callback ) { setTimeout(() => { this._callback( value ); }, 0); }
        this._shown = false;
    }

    _onCancel() { this._shown = false; }

    show()
    {
        if( !this._shown )
        {
            this._dateDlg.toggle()
            this._shown = true
        }
    }

    hide()
    {
        if( this._shown )
        {
            this._dateDlg.toggle()
            this._shown = false
        }
    }

    setLimits(past, future)
    {
        if( future ) this._config.future = moment(future, moment.DATE)
        if( past ) this._config.past = moment(past, moment.DATE)
        this._render()

    }

    setOnSelect( callback ) { this._callback = callback; }

    setFormat( format ) { this._format = format; }
    set format(format) { this._format = format; }
    get format() { return this._format; }

    isVisible() { return this._shown }
}


/** # DatePicker
 * @abbrev dtp
 * A DatePicker in mobile UIs enables users to select dates using a visual calendar interface.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs Following Material Design, it ensures consistency and ease in choosing dates, serving as a crucial component for date-related input in applications and forms. Show a date picker using the `showDatePicker` method like this:
 * $$ dtp = ui.showDatePicker(date, options, onSelect) $$
 * $$ dtp = ui.showDatePicker(date, onSelect) $$
 * $$ dtp = ui.showDatePicker( onSelect ) $$
 * @param {String} date A default date value. Format is `YYYY-MM-DD`
 * @param {Object} options Date picker options object.See `options` properties below for customization. Note: `options` param is an object to support for more customization than the usual comma separated string. 
 * @param {Function} onSelect The callback function to be called when date is selected. The selected date will be passed into the callback.
 * @returns Object DatePickerDialog
 * 
 * ### options Props
 * `format`: String. Moment date format. Default is `"YYYY-MM-DD"`<br>`portrait`: Boolean. Display the date picker in portrait view. Default is detective in the size of the screen.<br>`future`: String. The future value until which the dialog will render dates in the following format `"YYYY-MM-DD"`<br>`past`: String. The past until which the dialog will render dates in the following format `"YYYY-MM-DD"`.
 * 
 * ### Date formatting
 * DatePicker dialog uses moment js library, see <a href="https://momentjs.com/docs/" target="_blank">https://momentjs.com/docs/</a> for more date formatting values.
 * Sample values are:
 * `"MMMM Do YYYY"` :  December 13th 2023<br>`"dddd"` : Wednesday<br>`"MMM Do YY"`: Dec 13th 23
 */

ui.showDatePicker = function(date, options, onSelect) {
    var cb = onSelect;
    if(typeof date == "function") cb = date, date = "", options = {};
    else if(typeof options == "function") cb = options, options = {};
    return new ui.DatePickerDialog(date, options, cb);
}

ui.DatePickerDialog = class {
    constructor(date, options={}, onSelect) {
        this.options = options;
        this._format = options.format || "YYYY-MM-DD";
        this._callback = onSelect;

        this._el = document.createElement( "input" );
        this._el.setAttribute("type", "text");

        this._config = {
            type: "date",
            trigger: this._el,
            init: date ? moment(date, moment.DATE) : moment(),
            future: options.future ? moment(options.future, moment.DATE) : moment().add(10, "years"),
            past: options.past ? moment(options.past, moment.DATE) : undefined,
            orientation: options.portrait ? "PORTRAIT" : "LANDSCAPE"
        }

        // render
        this._dateDlg = new mdDateTimePicker.default( this._config );
        
        this._el.addEventListener("onOk", this._onOk.bind(this));
        this._el.addEventListener("onCancel", this._onCancel.bind(this));

        this._dateDlg.toggle();
    }

    _onOk()
    {
        var value = this._dateDlg.time.format( this._format );
        if( this._callback ) { setTimeout(() => { this._callback( value ); }, 0); }
    }

    _onCancel() {}
}

/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Default 
class Main extends App 
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show date picker when click
        this.btn = ui.addButton(this.main, "Show Date Picker")
        this.btn.setOnTouch( this.showDatePicker )
    }

    showDatePicker()
    {
        // Display the date picker dialog
        ui.showDatePicker( this.onSelect )
    }

    onSelect( value )
    {
        ui.showPopup( value )
    }
}
 */

/**
@sample With initial value and options object
class Main extends App 
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show date picker when click
        this.btn = ui.addButton(this.main, "Show Date Picker")
        this.btn.setOnTouch( this.showDatePicker )
    }

    showDatePicker()
    {
        // Display the date picker dialog
        var opt = {
            portrait: true,
            format: "YYYY Do MMM"
        }
        ui.showDatePicker("2022-12-25", opt, this.onSelect);
    }

    onSelect( value )
    {
        ui.showPopup( value );
    }
}
 */

/**
@sample Dark mode with date limits
class Main extends App
{
    onStart()
    {
        ui.setTheme( "dark" )

        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show date picker when click
        this.btn = ui.addButton(this.main, "Show Date Picker")
        this.btn.setOnTouch( this.showDatePicker )
    }

    showDatePicker()
    {
        // Display the date picker dialog
        var opt = {
            past: "2023-12-05",
            future: "2023-12-25"
        }
        ui.showDatePicker("2023-12-15", opt, this.onSelect)
    }

    onSelect( value )
    {
        ui.showPopup( value )
    }
}
 */