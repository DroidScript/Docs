/** # ColorPicker
 * @abbrev cpk
 * Shows a color picker.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs Customize a color or choose from the presets of color carefully selected from Material Design Color Pallette. Show a color picker using the `showColorPicker` method like this:
 * $$ ui.showColorPicker(onSelect)
 * $$ ui.showColorPicker(value, onSelect)
 * @param {String} [value] A hexadecimal default value for the color picker.
 * @param {Function} onSelect The callback function to be called when onselect event is fired. ---> @arg {String} value Color in hexadecimal format `#rrggbb` or `#aarrggbb` if `Alpha` option is passed.
 * @returns uio-ColorPicker
 */


    /** ## Properties
     * Here are the setter and getter properties available for ColorPicker Component.
     * @prop {String} value Returns the value of the chosen color.
     */


    /**  ## Methods
     * Here are the available methods of the ColorPicker Component.
     */


    /** ### getValue
     * Returns the hexadecimal string color value of the color picker.
     * $$ cpk.getValue() $$
     * @returns String
     */


/* ## Examples */


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
        // Show color picker dialog
        ui.showColorPicker( this.onSelect )
    }

    onSelect( clr )
    {
        ui.showPopup( clr )
    }
}
 */


/**
@sample Default value
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
        // Show color picker dialog with default color
        ui.showColorPicker("#009688", this.onSelect)
    }

    onSelect( clr )
    {
        ui.showPopup( clr )
    }
}
 */


