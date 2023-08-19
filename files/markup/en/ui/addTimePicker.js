// ------------- HEADER SECTION ------------- 


/** # addTimePicker #
 * @abbrev tpk
 * @brief addTimePicker
 * 
 * $$ tpk = ui.addTimePicker(time, options) $$ 
 * @param {str} time A default time value to which the timepicker begins. Value is of the form `HH:mm`
 * @param {str} options A comma separated options for the time picker. Options can be `Portrait` `24H` `12H`
 * @returns obj-TimePicker Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a time picker component to the app.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addTimePicker Component.
<div class="samp"><a href="#format-0" data-transition="pop" data-rel="popup" class="ui-link">format </a></div>
<div data-role="popup" id="format-0" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the time format. Can be of the form \n Hour formats \n <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">H</span> : 0 1 ... 22 23 \n <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">HH</span> : 	00 01 ... 22 23 \n <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">h</span> : 1 2 ... 11 12 \n <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">hh</span> : 	01 02 ... 11 12 \n Minute formats \n <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">m</span> : 	0 1 ... 58 59 \n <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">mm</span> : 00 01 ... 58 59 \n AM/PM \n <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">A</span> : AM or PM \n <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">a</span> : am pm</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### show ###
 * Show the date picker the dialog *  * Hide the date picker dialog *  * Sets a callback function to execute when date picker dialog is submitted *  * Sets the format of the date to be passed into the onSelect callback *  * Get the current visibility of the date picker *  * 
 * $$ tpk.show(callback, format) $$
 * @param {fnc_json} callback {"pNames":["value "],"pTypes":["str-The selected time of the form `HH:MM:SS`. Change the format by setting the `format` property."]}
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
    
            