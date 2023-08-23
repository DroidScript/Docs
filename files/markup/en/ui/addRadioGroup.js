// ------------- HEADER SECTION ------------- 


/** # addRadioGroup #
 * @abbrev rdg
 * @brief addRadioGroup
 * 
 * $$ rdg = ui.addRadioGroup(parent, list, options, width, height) $$ 
 * @param {obj} parent The parent where to add the RadioGroup component.
 * @param {lst} list The list items array.
 * @param {str} options A comma separated options for RadioGroup component.Options can be \n Radio Sizes: `Small` `Medium` \n `Colors: `Primary` `Secondary` \n `Icon Position: `Left` or `Right` \n `Container: `Elevated` or `Outlined` \n `Corner: `Square` \n `Required`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-RadioGroup Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a radiogroup component into your app. A radiogroup is a type of select list that can only have a single value being checked at a time.

 Pass <col nobox #4c4>required</col> as option to have atleast one value selected.

### Properties
These are the setter and getter properties for the addRadioGroup Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color of the Radio Component. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the disabled state of the radio button group.'"</smp>
<smp noinl>elevation:"num:'Sets or returns the depth of the RadioGroup container. Value ranges from 0 to 24.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>iconColor:"str:'Sets or returns the icon color in hexadecimal format.'"</smp>
<smp noinl>iconPosition:"str:'Sets or returns the position of the icon. Values can be <col nobox #fb8c00>left</col> or <col nobox #fb8c00>right</col>'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>itemPadding:"lst:'Sets or returns the padding of each radio item. See also <col nobox #fb8c00>setItemPadding</col> method.'"</smp>
<smp noinl>label:"str:'Sets or returns the label text of the RadioGroup Component.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>list:"lst:'Sets or returns the list array. You can also pass a comma separated string of items.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>outlined:"bin:'Sets or returns whether the container is outlined or elevated.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>radioSize:"str:'Sets or returns the size of the radio button. Values can be <col nobox #fb8c00>Small</col> or <col nobox #fb8c00>Medium</col>'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>spaceBetween:"num:'Sets or returns the space between the radio button and the text.'"</smp>
<smp noinl>textColor:"str:'Stest or returns the color of the text in hexadecimal format. You can also pass color names e.g. <col nobox #fb8c00>red</col>, <col nobox #fb8c00>green</col> or <col nobox #fb8c00>blue</col>.'"</smp>
<smp noinl>textPosition:"str:'Sets or returns the position of the label text. Values can be <col nobox #fb8c00>left</col> or <col nobox #fb8c00>right</col>.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>value:"str:'Sets or returns the value of the RadioGroup Component. This must be equal to one of the item in the list.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>

 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnChange ###
 * @brief setOnChange
 * Call a function when the value of the radio group has changed
 * $$ rdg.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["index "],"pTypes":["num-The index of the selected item."]}
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback function when an item is click
 * $$ rdg.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["checked ","label ","index ","event "],"pTypes":["bin-The checked state of the radio item.","str-The radio item label text.","num- The index of the radio item.","obj-The click event object."]}
 */


/** ### setList ###
 * @brief setList
 * Sets the the radiogroup list items
 * $$ rdg.setList(val) $$
 * @param {str} val A comma separated items
 */


/** ### setItemByIndex ###
 * @brief setItemByIndex
 * Sets an item in the radiogroup component
 * $$ rdg.setItemByIndex(item, index) $$
 * @param {str} item The new item name to be displayed
 * @param {num} index The index to of the item to be updated
 */


/** ### setItemByName ###
 * @brief setItemByName
 * Updates an item in the list by its corresponding name
 * $$ rdg.setItemByName(name, text) $$
 * @param {str} name The name of the item.
 * @param {str} text The new text to replaced the name of the item.
 */


/** ### addItem ###
 * @brief addItem
 * Adds an item in the radio group list
 * $$ rdg.addItem(name, index) $$
 * @param {str} name The new item to be added.
 * @param {num} index The index in which to add the item.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes an item in the radiogroup items list by its index
 * $$ rdg.removeItemByIndex(index) $$
 * @param {num} index The index of the item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the radiogroup items list by its name
 * $$ rdg.removeItemByName(name) $$
 * @param {str} name The name of the item to remove.
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item in the radiogroup
 * $$ rdg.popItem() $$
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item in the radiogroup
 * $$ rdg.shiftItem() $$
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable the radiogroup or an item in the radiogroup
 * $$ rdg.setEnabled(index, value) $$
 * @param {num} index The index of the item.
 * @param {bin} value Values can be `true` or `false`. If `false`, the item will be disabled.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of an item in the radio group
 * $$ rdg.getEnabled(index) $$
 * @param {num} index The index of the corresponding item.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable a radiogroup item by its name
 * $$ rdg.setEnabledByName(name, value) $$
 * @param {str} name The radiogroup text.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of a radiogroup item by its name
 * $$ rdg.getEnabledByName(name) $$
 * @param {str} name The radiogroup text.
 * @returns bin
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ rdg.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["label ","index ","event "],"pTypes":["str-The list item label text.","num-The index of the corresponding radio item.","obj-The pointer event object."]}
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the radiogroup container
 * $$ rdg.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ rdg.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ rdg.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ rdg.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ rdg.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ rdg.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ rdg.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ rdg.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ rdg.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ rdg.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ rdg.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ rdg.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ rdg.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ rdg.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ rdg.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic radiogroup
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add a radiogroup control to the main layout
        this.rdg = ui.addRadioGroup(this.main, items)

        // Add a callback handler when the value changes
        this.rdg.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */
    
            
    
/**
@sample Elevated secondary radiogroup
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add an elevated radiogroup control to the main layout
        this.rdg = ui.addRadioGroup(this.main, items, "Elevated,Secondary", 0.6)

        // Set the label text of the radiogroup
        this.rdg.label = "Select one"

        // Set the elevation depth
        this.rdg.elevation = 4

        // Add a callback handler when the value changes
        this.rdg.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */
    
            
    
/**
@sample Outlined and radios to the right
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add an outlined radiogroup control to the main layout
        // Passing `Right` will display the radios to the right
        this.rdg = ui.addRadioGroup( this.main, items, "Outlined,Primary,Right", 0.6)

        // Set the label text of the radiogroup
        this.rdg.label = "Select one"

        // Set the corner radius to 12
        this.rdg.cornerRadius = 12

        // Add a callback handler when the value changes
        this.rdg.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */
    
            