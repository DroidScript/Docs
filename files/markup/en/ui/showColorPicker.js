// ------------- HEADER SECTION ------------- 


/** # showColorPicker #
 * @brief showColorPicker
 * 
 * $$ ui.showColorPicker(value, options, ) $$ 
 * @param {str} value A hexadecimal default value for the color picker.
 * @param {str} options A comma separated color picker options. Values can be \n `Alpha` Includes an alpha
 * @param {}  
 * @returns obj-ColorPicker Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Shows a color picker. Customize a color or choose from the presets of color carefully selected from Material Design Color Pallette.

### Properties
These are the setter and getter properties for the showColorPicker Component.
<smp noinl>value:"str:'Returns the value of the chosen color.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### getValue ###
 * @brief getValue
 * Returns the hexadecimal string color value of the color picker
 * $$ undefined.getValue() $$
 * @returns str
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout
        this.btn = ui.addButton(this.main, "Show Popup", "Primary")

        // Add callback handler for `onTouch` event
        this.btn.setOnTouch( this.showColorPicker )
    }

    showColorPicker()
    {
        // Show color picker dialog with `Alpha` option
        // to include alpha in the output format `#aarrggbb`
        ui.showColorPicker(null, "Alpha", this.onSelect)
    }

    onSelect( clr )
    {
        ui.showPopup( clr )
    }
}
 */
    
            