// ------------- HEADER SECTION -------------


/** # showDateTimePicker #
 * @abbrev dtp
 * @brief showDateTimePicker
 * Show a DateTimePicker where the user can select a date and time.
 * 
 *  If you want a date picker only see <col nobox #4c4>DatePicker</col> or if you want time picker only see <col nobox #4c4>TimePicker</col>
 * $$ dtp = ui.showDateTimePicker(callback, date, time, format) $$ 
 * @param {fnc_json} callback {}
 * @param {str} date Default value for date of the form "MM/DD/YYYY"
 * @param {str} time Default value for time of the form "HH/MM/SS"
 * @param {str} format The format value that will be pass to callback. Formats can be of the form \n `MM/DD/YYYY HH:MM:SS` `MM:DD:YYYY HH:MM:SS`
 * @returns uio-DateTimePicker
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnSelect ###
 * @brief setOnSelect
 * Sets a callback function on select date and time
 * $$ dtp.setOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["str-The selected date and time in the following format `MM/DD/YYYY HH:MM:SS`."]}
 */



// ------------- SAMPLES ------------- 


    
/**
@sample DateTimePicker
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
 */
    
            
    
/**
@sample Python DateTimePicker
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    btn = ui.addButton(main, "Show Date Time Picker", "Primary")
    btn.setOnTouch(btn_onTouch)

def btn_onTouch(event):
    ui.showDateTimePicker(onDateTime)

def onDateTime(val):
    ui.showPopup(val)
 */
    
            