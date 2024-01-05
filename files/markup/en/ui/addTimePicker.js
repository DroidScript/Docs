// ------------- HEADER SECTION -------------


/** # addTimePicker #
 * @abbrev tpk
 * @brief addTimePicker
 * 
 * $$ tpk = ui.addTimePicker(time, options) $$ 
 * @param {str} time A default time value to which the timepicker begins. Value is of the form `HH:mm`
 * @param {str_com} options `Portrait` `24H` `12H`
 * @returns obj-TimePicker Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a time picker component to the app.

### Properties
These are the setter and getter properties for the addTimePicker Component.
<smp noinl>format:"str:'Sets or returns the time format. Can be of the form \n Hour formats \n <col nobox #fb8c00>H</col> : 0 1 ... 22 23 \n <col nobox #fb8c00>HH</col> : 	00 01 ... 22 23 \n <col nobox #fb8c00>h</col> : 1 2 ... 11 12 \n <col nobox #fb8c00>hh</col> : 	01 02 ... 11 12 \n Minute formats \n <col nobox #fb8c00>m</col> : 	0 1 ... 58 59 \n <col nobox #fb8c00>mm</col> : 00 01 ... 58 59 \n AM/PM \n <col nobox #fb8c00>A</col> : AM or PM \n <col nobox #fb8c00>a</col> : am pm'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### show ###
 * @brief show
 * Show the date picker the dialog
 * 
 * Hide the date picker dialog
 * 
 * Sets a callback function to execute when date picker dialog is submitted
 * 
 * Sets the format of the date to be passed into the onSelect callback
 * 
 * Get the current visibility of the date picker
 * $$ tpk.show(callback, format) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["str-The selected time of the form `HH:MM:SS`. Change the format by setting the `format` property."]}
 * @param {str} format A time format. Can be of the form \n Hour formats \n `H` : 0 1 ... 22 23 \n `HH` : 	00 01 ... 22 23 \n `h` : 1 2 ... 11 12 \n `hh` : 	01 02 ... 11 12 \n Minute formats \n `m` : 	0 1 ... 58 59 \n `mm` : 00 01 ... 58 59 \n AM/PM \n `A` : AM or PM \n `a` : am pm
 * @returns bin
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,ScrollY", 1, 1 )

        // button to show time picker
        this.btn = ui.addButton( this.main, "Show Time Picker", "Outlined,Secondary", 0.2 )
        this.btn.setOnTouch( this.showTimePicker )
        
        // Initialize time picker
        this.tpk = ui.addTimePicker()
        this.tpk.setOnSelect( this.onSelect )
    }

    showTimePicker()
    {
        // show time picker dialog
        this.tpk.show()
    }

    onSelect( value )
    {
        console.log( value )
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
    
            