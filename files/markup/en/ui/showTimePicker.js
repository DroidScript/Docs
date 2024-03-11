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
 * @param {String} [options] A comma separated options.\nOrientation: `Portrait`, `Landscape`\nFormat: `24H`, `12H`
 * @param {Function} onSelect The callback function to be called when time is selected.
 * @returns uio-TimePicker
 */


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


/**
@sample Python Basic
from hybrid import ui

def OnStart():
    global tpk
    main = ui.addLayout("main", "Linear", "VCenter,ScrollY", 1, 1)
    btn = ui.addButton(main, "Show Time Picker", "Outlined,Secondary", 0.2)
    btn.setOnTouch(showTimePicker)
    tpk = ui.addTimePicker()
    tpk.setOnSelect(onSelect)

def showTimePicker(event):
    tpk.show()

def onSelect(value):
    print(value)
 */


