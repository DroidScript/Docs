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
 * @param {Object} [options] Date picker options object.See `options` properties below for customization. Note: `options` param is an object to support for more customization than the usual comma separated string. 
 * @param {Function} onSelect The callback function to be called when date is selected. The selected date will be passed into the callback.
 * @returns uio-DatePicker
 */


/** ### options Props
 * `format`: String. Moment date format. Default is `"YYYY-MM-DD"`<br>`portrait`: Boolean. Display the date picker in portrait view. Default is detective in the size of the screen.<br>`future`: String. The future value until which the dialog will render dates in the following format `"YYYY-MM-DD"`<br>`past`: String. The past until which the dialog will render dates in the following format `"YYYY-MM-DD"`.
 * 
 * ### Date formatting
 * DatePicker dialog uses moment js library, see <a href="https://momentjs.com/docs/" target="_blank">https://momentjs.com/docs/</a> for more date formatting values.
 * Sample values are:
 * `"MMMM Do YYYY"` :  December 13th 2023<br>`"dddd"` : Wednesday<br>`"MMM Do YY"`: Dec 13th 23
 */


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


/**
@sample Python Default
from hybrid import ui

def OnStart():
    global dtp
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "Top,Vcenter", 1, 1)
    main.setMargins(0.01, 0.01, 0.01, 0.01)

    # Add a button to the main layout
    btn = ui.addButton(main, "Show Date Picker", "Secondary")
    btn.setOnTouch(showDatePicker)

    # Initialize date picker
    dtp = ui.addDatePicker()

def showDatePicker(event):
    # Display the date picker dialog
    dtp.show()
 */


/**
@sample Python With initial value & portrait
from hybrid import ui

def OnStart():
    global dtp
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "Top,Vcenter", 1, 1)
    main.setMargins(0.01, 0.01, 0.01, 0.01)

    # Add a button to the main layout
    btn = ui.addButton(main, "Show Date Picker", "Secondary")
    btn.setOnTouch(showDatePicker)

    # With initial value. Date must be of the form "YYYY-MM-DD"
    dtp = ui.addDatePicker("2022-12-25", "Portrait")

def showDatePicker(event):
    # Display the date picker dialog
    dtp.show()
 */


/**
@sample Python With limits & callback
from hybrid import ui
from native import app

def OnStart():
    global dtp
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "Top,Vcenter", 1, 1)
    main.setMargins(0.01, 0.01, 0.01, 0.01)

    # Add a button to the main layout
    btn = ui.addButton(main, "Show Date Picker", "Secondary")
    btn.setOnTouch(showDatePicker)

    # With initial value. Date must be of the form "YYYY-MM-DD"
    dtp = ui.addDatePicker("2022-12-25", "Portrait")
    dtp.setOnSelect(onSelect)

def showDatePicker(event):
    # Display the date picker dialog
    dtp.show()

def onSelect(value):
    app.ShowPopup(value)
 */


