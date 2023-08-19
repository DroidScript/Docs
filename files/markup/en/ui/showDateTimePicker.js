
/** # showDateTimePicker #
 * @abbrev dtp
 * @brief showDateTimePicker
 * 
 * $$ dtp = ui.showDateTimePicker(callback, date, time, format) $$ 
 * @param {} callback 
 * @param {str} date Default value for date of the form "MM/DD/YYYY"
 * @param {str} time Default value for time of the form "HH/MM/SS"
 * @param {str} format The format value that will be pass to callback. Formats can be of the form \n `MM/DD/YYYY HH:MM:SS` `MM:DD:YYYY HH:MM:SS`
 * @returns obj-DateTimePicker Component
*/


// showDateTimePicker.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Show a DateTimePicker where the user can select a date and time.

 If you want a date picker only see <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">DatePicker</span> or if you want time picker only see <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">TimePicker</span>

<style>.samp { margin-top: 2px; } </style>
 */



// -------- VISIBLE METHODS & PROPERTIES --------- 


/** ### setOnSelect ###
 * Sets a callback function on select date and time *  * 
 * $$ dtp.setOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["value "],"pTypes":["str-The selected date and time in the following format `MM/DD/YYYY HH:MM:SS`."]}
 */

// showDateTimePicker.txt --> All the sample codes

/** @Sample


<sample DateTimePicker>
class Main extends App 
{
    onStart()
    {
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

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
</sample>
 */

