// ------------- HEADER SECTION ------------- 


/** # addDatePicker #
 * @abbrev dtp
 * @brief addDatePicker
 * 
 * $$ dtp = ui.addDatePicker(date, options) $$ 
 * @param {str} date A default date value to which the datepicker begins. Format `YYYY-MM-DD`
 * @param {str_com} options `Portrait` `Landscape`
 * @returns obj-DatePicker Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a date picker component to the app.

### Properties
These are the setter and getter properties for the addDatePicker Component.
<smp noinl>format:"str:'Sets or returns the format of the selected date. Values are <col nobox #fb8c00>YYYY-MM-DD</col> <col nobox #fb8c00>MM-DD-YYYY</col> or <col nobox #fb8c00>DD-MM-YYYY</col>'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### show ###
 * @brief show
 * Show the date picker the dialog
 * $$ dtp.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the date picker dialog
 * $$ dtp.hide() $$
 */


/** ### setLimits ###
 * @brief setLimits
 * Set a limit to which the date picker dialog can render a date
 * $$ dtp.setLimits(past, future) $$
 * @param {str} past Date in the past of the form `YYYY-MM-DD`
 * @param {str} future Date in the future of the form `YYYY-MM-DD`
 */


/** ### setOnSelect ###
 * @brief setOnSelect
 * Sets a callback function to execute when date picker dialog is submitted
 * $$ dtp.setOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["date"],"pTypes":["str-The selected date in the following format `YYYY-MM-DD`. You change format by setting `format` property."]}
 */


/** ### setFormat ###
 * @brief setFormat
 * Sets the format of the date to be passed into the onSelect callback
 * $$ dtp.setFormat(format) $$
 * @param {str} format A date format. Can be `YYYY-MM-DD` `MM-DD-YYYY` `DD-MM-YYYY`
 */


/** ### isVisible ###
 * @brief isVisible
 * Get the current visibility of the date picker
 * $$ dtp.isVisible() $$
 * @returns bin
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Default
class Main extends App 
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "Top,VCenter", 1, 1 )
        this.main.setMargins( 0.01, 0.01, 0.01, 0.01 )

        // Add a button to the main layout
        this.btn = ui.addButton( this.main, "Show Date Picker", "Secondary" )
        this.btn.setOnTouch( this.showDatePicker )

        // Initialize date picker
        this.dtp = ui.addDatePicker()
    }

    showDatePicker()
    {
        // Display the date picker dialog
        this.dtp.show()
    }
}
 */
    
            
    
/**
@sample Default
class Main extends App 
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "Top,VCenter", 1, 1 )
        this.main.setMargins( 0.01, 0.01, 0.01, 0.01 )

        // Add a button to the main layout
        this.btn = ui.addButton( this.main, "Show Date Picker", "Secondary" )
        this.btn.setOnTouch( this.showDatePicker )

        // Initialize date picker
        this.dtp = ui.addDatePicker()
    }

    showDatePicker()
    {
        // Display the date picker dialog
        this.dtp.show()
    }
}
 */
    
            
    
/**
@sample With initial value & portrait
class Main extends App 
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "Top,VCenter", 1, 1 )
        this.main.setMargins( 0.01, 0.01, 0.01, 0.01 )

        // Add a button to the main layout
        this.btn = ui.addButton( this.main, "Show Date Picker", "Secondary" )
        this.btn.setOnTouch( this.showDatePicker )

        // With initial value. Date must be of the form "YYYY-MM-DD"
        this.dtp = ui.addDatePicker( "2022-12-25", "Portrait" )
    }

    showDatePicker()
    {
        // Display the date picker dialog
        this.dtp.show()
    }
}
 */
    
            
    
/**
@sample With limits & callback
class Main extends App 
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "Top,VCenter", 1, 1 )
        this.main.setMargins( 0.01, 0.01, 0.01, 0.01 )

        // Add a button to the main layout
        this.btn = ui.addButton( this.main, "Show Date Picker", "Secondary" )
        this.btn.setOnTouch( this.showDatePicker )

        // With initial value. Date must be of the form "YYYY-MM-DD"
        this.dtp = ui.addDatePicker( "2022-12-25", "Portrait" )
        this.dtp.setOnSelect( this.onSelect )
    }

    showDatePicker()
    {
        // Display the date picker dialog
        this.dtp.show()
    }

    onSelect( value )
    {
        console.log( value )
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
    
            