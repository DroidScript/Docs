// soon to be deprecated
ui.addTimePicker = function(time, options)
{
    return new ui.TimePicker(time, options);
}

ui.TimePicker = class
{
    constructor(time, options="", callback, show)
    {
        this.options = options.toLowerCase();
        this._callback = callback;
        this._shown = show;
        this._format = "HH:mm";
        this._timeDlg = null;

        this._el = document.createElement( "input" )
        this._el.setAttribute("type", "text")

        this._config = {
            type: "time",
            trigger: this._el,
            init: time ? moment(time, "HH:mm") : moment()
        }

        // init
        if( this.options.includes("portrait") ) this._config.orientation = "PORTRAIT";
        if( this.options.includes("24h") ) this._config.mode = true;

        // render
        this._timeDlg = new mdDateTimePicker.default( this._config );
        
        this._el.addEventListener("onOk", this._onOk.bind(this));
        this._el.addEventListener("onCancel", this._onCancel.bind(this));

        if( this._shown ) this._timeDlg.toggle();
    }

    _onOk()
    {
        var value = this._timeDlg.time.format( this._format );
        if( this._callback ) {
            setTimeout(() => {
                this._callback( value );
            }, 0);
        }
        this._shown = false;
    }

    _onCancel() { this._shown = false; }

    show() {
        if( !this._shown ) {
            this._timeDlg.toggle();
            this._shown = true;
        }
    }

    hide() {
        if( this._shown ) {
            this._timeDlg.toggle();
            this._shown = false;
        }
    }

    setOnSelect( callback ) { this._callback = callback; }

    setFormat( format ) { this._format = format; }
    set format( format ) { this._format = format; }
    get format() { return this._format; }

    isVisible() { return this._shown; }
    get visible() { return this._shown; }
}

/** # TimePicker
 * @abbrev tpk
 * A Time Picker in mobile UI design allows users to select a specific time.
 * @img(img1.png)
 * @img(img2.png)
 * @img(img3.png)
 * @img(img4.png)
 * @jdocs In accordance with Material Design, it offers a visually consistent and user-friendly interface for choosing hours and minutes usually render as analog clock design. Time Pickers are commonly used in applications where precise time input is essential. Show a time picker using the `showTimePicker` method like this:
 * $$ ui.showTimePicker(time, options, onSelect) $$
 * $$ ui.showTimePicker(time, onSelect) $$
 * $$ ui.showTimePicker( onSelect ) $$
 * @param {String} time A default time value to which the timepicker begins. Value is of the form `HH:mm`
 * @param {String} options A comma separated options.\nOrientation: `Portrait`, `Landscape`\nFormat: `24H`, `12H`
 * @param {Function} onSelect The callback function to be called when time is selected.
 * @returns Object TimePicker
 */

ui.showTimePicker = function(time, options, callback) {
    var cb = callback;
    if(typeof time === "function") cb = time, time = null;
    else if(typeof options == "function") cb = options, options = "";
    return new ui.TimePickerDialog(time, options, cb);
}

ui.TimePickerDialog = class
{
    constructor(time, options="", callback)
    {
        this.options = options.toLowerCase();
        this._callback = callback;
        this._format = "HH:mm";

        this._el = document.createElement( "input" )
        this._el.setAttribute("type", "text")

        this._config = {
            type: "time",
            trigger: this._el,
            init: time ? moment(time, "HH:mm") : moment()
        }

        // init
        if( this.options.includes("portrait") ) this._config.orientation = "PORTRAIT";
        if( this.options.includes("24h") ) this._config.mode = true;

        // render
        this._timeDlg = new mdDateTimePicker.default( this._config );
        
        this._el.addEventListener("onOk", this._onOk.bind(this));
        this._el.addEventListener("onCancel", this._onCancel.bind(this));

        this._timeDlg.toggle();
    }

    _onOk()
    {
        var value = this._timeDlg.time.format( this._format );
        if( this._callback ) setTimeout(() => { this._callback( value ); }, 0);
    }

    _onCancel() {}
}



/* ## Examples */

/**
@sample Default
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        // button to show time picker
        this.btn = ui.addButton( this.main, "Show Time Picker")
        this.btn.setOnTouch( this.showTimePicker )
    }

    showTimePicker()
    {
        // show time picker
        ui.showTimePicker( this.onSelect )
    }

    onSelect( value )
    {
        ui.showPopup( value );
    }
}
 */

/**
@sample With initial value, options and theme color
class Main extends App
{
    onStart()
    {
        ui.setThemeColor( "#673ab7" )

        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show time picker when click
        this.btn = ui.addButton(this.main, "Show Time Picker")
        this.btn.setOnTouch( this.showTimePicker )
    }

    showTimePicker()
    {
        // show time picker dialog with initial value
        ui.showTimePicker("08:24", "Portrait", this.onSelect)
    }

    onSelect( value )
    {
        ui.showPopup( value );
    }
}
 */

/**
@sample Dark mode
class Main extends App
{
    onStart()
    {
        ui.setTheme( "dark" )

        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show time picker when click
        this.btn = ui.addButton(this.main, "Show Time Picker")
        this.btn.setOnTouch( this.showTimePicker )
    }

    showTimePicker()
    {
        // show time picker dialog with initial value
        ui.showTimePicker("08:24", "Portrait", this.onSelect)
    }

    onSelect( value )
    {
        ui.showPopup( value );
    }
}
 */