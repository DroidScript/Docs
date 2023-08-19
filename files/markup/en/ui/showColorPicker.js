
/** # showColorPicker #
 * @brief showColorPicker
 * 
 * $$ ui.showColorPicker(value, options, onSelect) $$ 
 * @param {str} value A hexadecimal default value for the color picker.
 * @param {str} options A comma separated color picker options. Values can be \n `Alpha` Includes an alpha
 * @param {} onSelect 
 * @returns obj-ColorPicker Component
*/


// showColorPicker.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Shows a color picker. Customize a color or choose from the presets of color carefully selected from Material Design Color Pallette.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the showColorPicker Component.
<div class="samp"><a href="#value-0" data-transition="pop" data-rel="popup" class="ui-link">value </a></div>
<div data-role="popup" id="value-0" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the value of the chosen color.</p></div>
 */



// -------- VISIBLE METHODS & PROPERTIES --------- 


/** ### getValue ###
 * Returns the hexadecimal string color value of the color picker *  * 
 * $$ .getValue() $$
 * @returns str
 */

// showColorPicker.txt --> All the sample codes

/** @Sample


<sample Basic>
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
</sample>
 */

