/** # ActionSheet
 * @abbrev acs
 * An Action Sheet is a list dialog implementation of bottom sheet displaying contextual actions or options, used to streamline user interactions in mobile apps.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs It offers a concise list of choices with icons and labels, making it easy for users to select relevant actions in response to specific interactions. Show an actionsheet like this:
 * $$ ui.showActionSheet(title, list, options, onSelect) $$
 * @param {String} title The custom actionsheet title.
 * @param {Array} list The list items to show. If `"icon"` option is passed, each element in this list array is of the form `[icon, name]`.
 * @param {String} options A comma separated actionsheet options. Values are \n`"Icon"` render a leading icon.\n`"NoCancel"` remove the default `"Cancel"` option.
 * @param {Function} onSelect The callback handler for `"select"` event.
 * @returns uio-ActionSheet
 */


    /** ## Properties
     * @jdocs These are the available setter and getter properties for the ActionSheet component.
     * @prop {String} title Sets or returns the title text of the action sheet.
     * @prop {String} description Sets or returns the description text for the action sheet.
     */


    /** ## Methods
     * @jdocs These are the available methods for the ActionSheet component.
     */


    /** ### setColor
     * Sets the color of the list item by its name.
     * $$ acs.setColor(name, color) $$
     * @param {String} name The list item text.
     * @param {String} color A css supported color. Available format are: `hexadecimal`, `color-names`, `rgb`, `rgba` ...
     */


    /** ### setColorByIndex
     * Sets the color of the list item by its corresponding index. If you want to set the color of the list using its name, see `setColor` method.
     * $$ acs.setColorByIndex(index, color) $$
     * @param {Number} index The index of list item.
     * @param {String} color A css supported color. Available format are: `hexadecimal`, `color-names`, `rgb`, `rgba` ...
     */


    /** ### popItem
     * Removes and returns the last item in the actionsheet list items.
     * $$ acs.popItem() $$
     * @returns String
     */


    /** ### shiftItem
     * Removes and returns the first item in the actionsheet list items.
     * $$ acs.shiftItem() $$
     * @returns String
     */


    /** ### addItem
     * Add an item into the actionsheet.
     * $$ acs.addItem(name, icon, index) $$
     * @param {String} name List item text.
     * @param {String} icon List item material icon. "options" argument must include "icon".
     * @param {Number} index The index at which the item will be inserted. Will push the item into the list when not given.
     * @returns String
     */


    /** ### removeItem
     * Removes an item in the list by its name.
     * $$ acs.removeItem( name ) $$
     * @param {String} name The list item text.
     */


    /** ### removeItemByIndex
     * Removes an item in the list by its index.
     * $$ acs.removeItemByIndex( index ) $$
     * @param {Number} name The list item index.
     */


    /** ### setOnOpen
     * Add a callback handler when the actionsheet is open.
     * $$ acs.setOnOpen( callback ) $$
     * @param {Function} callback The function to be called.
     */


    /** ### setOnClose
     * Add a callback handler when the actionsheet is close.
     * $$ acs.setOnClose( callback ) $$
     * @param {Function} callback The function to be called.
     */


    /** ### show
     * $$ acs.show() $$
     * Show the actionsheet.
     */


    /** ### hide
     * Hide the actionsheet.
     * $$ acs.hide() $$
     */


/** ## Examples */


/**
@sample Complete example of actionsheet
class Main extends App
{
    onStart()
    {
        // Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a button to the main layout to show the actionsheet when click
        this.btn = ui.addButton(this.main, "Show actionsheet", "Primary")
        this.btn.setOnTouch( this.btn_onTouch )
    }

    btn_onTouch()
    {
        var choices = [
            ["person", "Account"],
            ["share", "Send to email"],
            ["delete", "Remove"],
        ];
        this.act = ui.showActionSheet("", choices, "Icon", this.onSelect);
        this.act.description = "This is the text";
        this.act.setColor("Remove", "orange");
    }

    onSelect( name, icon ) {
        ui.showPopup( icon );
    }
}
 */


/**
@sample Python Complete example of actionsheet
from hybrid import ui

def onStart():
    # Create a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Add a button to the main layout to show the actionsheet when click
    btn = ui.addButton(main, "Show actionsheet", "Primary")
    btn.setOnTouch(btn_onTouch)

def btn_onTouch():
    choices = [
        ["person", "Account"],
        ["share", "Send to email"],
        ["delete", "Remove"],
    ]
    act = ui.showActionSheet("", choices, "Icon", onSelect)
    act.description = "This is the text"
    act.setColor("Remove", "orange")

def onSelect(name, icon):
    ui.showPopup(icon)
 */


