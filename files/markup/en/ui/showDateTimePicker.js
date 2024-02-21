// Documentation: https://github.com/ripjar/material-datetime-picker

/** # DateTimePicker
 * @abbrev dtp
 * A DateTimePicker in mobile UI design combines date and time selection in one interface.
 * @img(img1.png)
 * @jdocs Following Material Design, it provides a unified, user-friendly experience for choosing both date and time, ensuring consistency and ease in applications and forms with date and time-sensitive inputs. Show a date-time picker using the `showDateTimePicker` method like this:
 * $$ ui.showDateTimePicker(date, time, format, onSelect) $$
 * $$ ui.showDateTimePicker(date, time, onSelect) $$
 * $$ ui.showDateTimePicker(date, onSelect) $$
 * $$ ui.showDateTimePicker( onSelect ) $$
 * @param {String} date Default value for date of the form "YYYY-MM-DD"
 * @param {String} time Default value for time of the form "HH:MM:SS"
 * @param {String} format The format of the value that will be pass to the `onSelect` callback. Default is `"YYYY-MM-DD HH:MM:SS"`. You can refer to <a href="https://momentjs.com/" target="_blank">https://momentjs.com/</a> for more date time formats. Sample formats: `"MMMM Do YYYY, h:mm:ss a"`, `"dddd"`, `"MMM Do YY"`, `"LLL"`
 * @param {Function} onSelect The callback function to be called on submit.
 * @returns uio-DateTimePicker
 * If you want a date picker only see `DatePicker` or if you want time picker only see `TimePicker`
 */

ui.showDateTimePicker = function(date, time, format, callback)
{
    var cb = callback;
    if(typeof date == "function") cb = date, date = "", time = "", format = "";
    else if(typeof time == "function") cb = time, time = "", format = "";
    else if(typeof format == "function") cb = format, format = "";
    return new ui.DateTimePicker(date, time, format, cb);
}

ui.DateTimePicker = class 
{
    constructor(date="", time="00:00:00", format="YYYY-MM-DD", callback)
    {
        this._submit = callback;
        var defValue = date+"T"+time;
        this._format = format;
        this._value = null;
        this._picker = new MaterialDatetimePicker({
            format: this._format,
            default: date ? moment( defValue ) : moment()
        })
        .on("submit", this._handleSubmit.bind(this))
        .on("close", this._handleClose.bind(this))
        .open()
    }

    _handleSubmit( val ) { this._value = val; }

    _handleClose() {
        if(this._submit && this._value) this._submit( this._value.format(this._format) );
    }
}

/* --- parent_methods here ----- */

/* ## Examples */

/**
@sample Default
class Main extends App
{
    onStart()
    {
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        this.btn = ui.addButton(this.main, "Show Date Time Picker", "Primary")
        this.btn.setOnTouch( this.btn_onTouch )
    }

    btn_onTouch()
    {
        ui.showDateTimePicker( this.onDateTime )
    }

    onDateTime( val )
    {
        ui.showPopup( val )
    }
}
 */

/**
@sample With initial values, format and custom theme
class Main extends App
{
    onStart()
    {
        // Set the primary theme color
        ui.setThemeColor( "#673ab7" );

        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show the datetime picker when click
        this.btn = ui.addButton(this.main, "Show Date Time Picker", "Primary")
        this.btn.setOnTouch( this.btn_onTouch )
    }

    btn_onTouch()
    {
        // Show the datetime picker dialog and passing initial date and time
        // date format : "YYYY-MM-DD"
        // time format : "HH:MM:SS"
        // value format: LLL
        ui.showDateTimePicker("2023-10-10", "17:00:00", "LLL", this.onDateTime )
    }

    onDateTime( val )
    {
        ui.showPopup( val )
    }
}
 */

/**
@sample Dark mode
class Main extends App 
{
    onStart()
    {
        ui.setTheme( "dark" );

        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        this.btn = ui.addButton( this.main, "Show Date Time Picker", "Primary" )
        this.btn.setOnTouch( this.btn_onTouch )
    }

    btn_onTouch()
    {
        ui.showDateTimePicker( this.onDateTime )
    }

    onDateTime( val )
    {
        ui.showPopup( val )
    }
}
 */