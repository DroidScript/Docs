/** # ColorPicker
 * @abbrev cpk
 * Shows a color picker.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs Customize a color or choose from the presets of color carefully selected from Material Design Color Pallette. Show a color picker using the `showColorPicker` method like this:
 * $$ ui.showColorPicker(value, options, onSelect) $$
 * @param {String} [value] A hexadecimal default value for the color picker.
 * @param {String} [options] A comma separated options.\nIncludes alpha: `Alpha`
 * @param {Function} [onSelect] The callback function to be called when onselect event is fired. ---> @arg {String} value Color in hexadecimal format `#rrggbb` or `#aarrggbb` if `Alpha` option is passed.
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



/**
@sample Python Basic
from hybrid import ui

def OnStart():
    # Create a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a button to the main layout
    btn = ui.addButton(main, "Show Popup", "Primary")

    # Add callback handler for `onTouch` event
    btn.setOnTouch(showColorPicker)

def showColorPicker(event):
    # Show color picker dialog with `Alpha` option
    # to include alpha in the output format `#aarrggbb`
    ui.showColorPicker(None, "Alpha", onSelect)

def onSelect(clr):
    ui.showPopup(clr)
 */
