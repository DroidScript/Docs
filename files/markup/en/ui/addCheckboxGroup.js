// ------------- HEADER SECTION ------------- 


/** # addCheckboxGroup #
 * @abbrev ckb
 * @brief addCheckboxGroup
 * 
 * $$ ckb = ui.addCheckboxGroup(parent, list, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the CheckboxGroup.
 * @param {lst} list The items to be displayed.
 * @param {str} options A comma separated options. \n Colors: `Default` `Primary` `Secondary` \n `Sizes: `Small` `Medium` \n `Icon Position: `Left` or `Right` \n `Container: `Elevated` or `Outlined` \n `Corners : `Square`
 * @param {num} width Fraction of the screen width.
 * @param {num} height Fraction of the screen height.
 * @returns obj-CheckboxGroup Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a CheckboxGroup to a given layout.

### Properties
These are the setter and getter properties for the addCheckboxGroup Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>checkIcon:"str:'Sets or returns the material icon font for check stated.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color use for the checkbox. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>.'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>elevation:"str:'Sets or returns the depth of the container.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>iconColor:"str:'Sets or returns the color of the checkbox icon.'"</smp>
<smp noinl>iconSize:"num:'Sets or returns the size of the checkbox icon.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>itemPadding:"lst:'Sets or returns the padding of each list item. See also <col nobox #fb8c00>setItemPadding</col> method.'"</smp>
<smp noinl>label:"str:'Sets or returns the label text.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>list:"lst:'Sets or returns the list items.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>outlined:"bin:'Sets or returns whether the container is outlined or elevated.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>sizeVariant:"str:'Sets or returns the size variant of the Checkbox. Values can be <col nobox #fb8c00>small</col> or <col nobox #fb8c00>medium</col>.'"</smp>
<smp noinl>spaceBetween:"num:'Sets or returns the space between the checkbox icon and the text.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the text color in hexadecimal format.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the checkbox icon. This will also affect the checkbox icon.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>uncheckIcon:"str:'Sets or returns the material icon font for uncheck state.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>

 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnTouch ###
 * @brief setOnTouch
 * Sets a callback function when the checkbox item is touch
 * $$ ckb.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["value ","text ","index ","event "],"pTypes":["bin-The checked state of the checkbox item.","str-The checkbox label text.","num-The index of the corresponding checkbox.","obj-The click event."]}
 */


/** ### setOnChange ###
 * @brief setOnChange
 * Adds a callback function to be called whent there is a change of value
 * $$ ckb.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["values "],"pTypes":["lst-An array of indexes corresponding to the checked checkbox items."]}
 */


/** ### setIcon ###
 * @brief setIcon
 * Sets the checked icon and unchecked icon
 * $$ ckb.setIcon(checked, unchecked) $$
 * @param {str} checked Material icon font
 * @param {str} unchecked Material icon font
 */


/** ### getIcon ###
 * @brief getIcon
 * Get the checked and unchecked icon of the checkbox group
 * $$ ckb.getIcon() $$
 * @returns obj
 */


/** ### setCheckedByIndex ###
 * @brief setCheckedByIndex
 * Checked or unchecked a given item by its index
 * $$ ckb.setCheckedByIndex(item, bool) $$
 * @param {num} item The item or index of the item.
 * @param {bin} bool The item value. Can be `true` or `false`.
 */


/** ### setCheckedByName ###
 * @brief setCheckedByName
 * Checked or unchecked a given item by its name
 * $$ ckb.setCheckedByName(name, bool) $$
 * @param {str} name The item or index of the item.
 * @param {bin} bool The item value. Can be `true` or `false`.
 */


/** ### getCheckedItems ###
 * @brief getCheckedItems
 * Get the list of all checked items
 * $$ ckb.getCheckedItems() $$
 * @returns str
 */


/** ### getCheckedByIndex ###
 * @brief getCheckedByIndex
 * Get the current value of the item in the list
 * $$ ckb.getCheckedByIndex(index) $$
 * @param {num} index The index of the corresponding item.
 * @returns bin
 */


/** ### getCheckedByName ###
 * @brief getCheckedByName
 * Get the current value of the item in the list
 * $$ ckb.getCheckedByName(name) $$
 * @param {str} name The index of the corresponding item.
 * @returns bin
 */


/** ### setTextByIndex ###
 * @brief setTextByIndex
 * Sets a new text to a given item by its index
 * $$ ckb.setTextByIndex(index, val) $$
 * @param {num} index The index of the item.
 * @param {str} val The new text to replace.
 */


/** ### setTextByName ###
 * @brief setTextByName
 * Sets a new text to a given item by its name
 * $$ ckb.setTextByName(name, val) $$
 * @param {str} name The name of the item
 * @param {str} val The new text to replace
 */


/** ### getText ###
 * @brief getText
 * Get the text of the item in a given index
 * $$ ckb.getText(index) $$
 * @param {num} index The index of the list
 * @returns str
 */


/** ### setList ###
 * @brief setList
 * Sets a new list of item in the checkbox group
 * $$ ckb.setList(list) $$
 * @param {obj} list The new list items for the checkbox group.
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable an item in the checkbox group
 * $$ ckb.setEnabled(index, value) $$
 * @param {num} index The index of the checkbox item.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of a checkbox item
 * $$ ckb.getEnabled(index) $$
 * @param {num} index The index of the checkbox item.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable a checkbox item by its name
 * $$ ckb.setEnabledByName(name, value) $$
 * @param {str} name The name of the checkbox item.
 * @param {bin} value Values can be `true` or `false`
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of a checkbox item by its name
 * $$ ckb.getEnabledByName(name) $$
 * @param {str} name The checkbox item.
 * @returns bin
 */


/** ### addItem ###
 * @brief addItem
 * Add or insert an item in the checkbox group
 * $$ ckb.addItem(text, index) $$
 * @param {str} text The text label for the checkbox.
 * @param {num} index The index in which to insert the item.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes an item in the checkbox group by its corresponding index
 * $$ ckb.removeItemByIndex(index) $$
 * @param {num} index The index of the corresponding item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the checkbox group by its title name
 * $$ ckb.removeItemByName(title) $$
 * @param {str} title The title text of the corresponding checkbox item.
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item in the checkbox group
 * $$ ckb.popItem() $$
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item in the checkbox group
 * $$ ckb.shiftItem() $$
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ ckb.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["label ","index ","event "],"pTypes":["str-The checkbox item label text.","num-The index of the corresponding item.","obj-The pointer event object."]}
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the checkbox group
 * $$ ckb.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ ckb.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ ckb.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ ckb.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ ckb.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ ckb.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ ckb.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ ckb.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ ckb.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ ckb.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ ckb.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ ckb.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ ckb.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ ckb.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ ckb.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize checkbox items
        this.items = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add a checkbox group to the main layout.
        this.ckg = ui.addCheckboxGroup(this.main, this.items)

        // Add a callback handler for `onTouch` event
        this.ckg.setOnTouch( this.onTouch )
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
    }
}
 */
    
            
    
/**
@sample Colors
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.childSpacing = "evenly"

        // Initialize the checkbox items
        var list = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add a default CheckboxGroup to the main layout
        this.ckg1 = ui.addCheckboxGroup(this.main, list)
        this.ckg1.setOnTouch( this.onTouch )

        // Add a primary CheckboxGroup to the main layout
        this.ckg2 = ui.addCheckboxGroup(this.main, list, "Primary")
        this.ckg2.setOnTouch( this.onTouch )

        // Add a secondary CheckboxGroup to the main layout
        this.ckg3 = ui.addCheckboxGroup(this.main, list, "Secondary")
        this.ckg3.setOnTouch( this.onTouch )
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
    }
}
 */
    
            
    
/**
@sample Elevated
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the checkbox list items
        var list = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add an elevated checkbox group to the main layout.
        this.ckg = ui.addCheckboxGroup( this.main, list, "Elevated,Secondary", 0.6)

        // Set the label of the CheckboxGroup
        this.ckg.label = "Select as many as you can"

        // Set the elevation of the CheckboxGroup container
        this.ckg.elevation = 4

        // Add a callback handler for `onTouch` event
        this.ckg.setOnTouch( this.onTouch )
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
    }
}
 */
    
            
    
/**
@sample Outlined
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the checkbox items
        var list = [
            "Checkbox item 1",
            "Checkbox item 2",
            "Checkbox item 3"
        ]

        // Add an outlined checkbox group to the main layout.
        this.ckg = ui.addCheckboxGroup( this.main, list, "Outlined,Secondary", 0.9 )
        this.ckg.setOnTouch( this.onTouch )

        // Set the label of the CheckboxGroup items
        this.ckg.label = "Select as many as you can"

        // Set the cornerRadius to `20`
        this.ckg.cornerRadius = 20
    }

    onTouch(value, item, index)
    {
        ui.showPopup( `Value of ${ item } is ${ value }` )
    }
}
 */
    
            