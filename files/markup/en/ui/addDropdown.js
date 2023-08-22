// ------------- HEADER SECTION ------------- 


/** # addDropdown #
 * @abbrev dpd
 * @brief addDropdown
 * 
 * $$ dpd = ui.addDropdown(parent, list, options, width, height) $$ 
 * @param {obj} parent The layout where to add the dropdown.
 * @param {lst} list The list items to show.
 * @param {str} options A comma separated Dropdown options. Can be \n Colors: `Primary` `Secondary` `Default` \n Variants: `Contained` `Outlined` `Text` \n Sizes: `Small` `Medium` `Large` \n Orientation: `Horizontal` `Vertical` \n Util: `NoElevation`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-Dropdown Component.
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a dropdown component into your layout.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addDropdown Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#backcolor-20" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-25" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-30" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-35" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-40" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#color-45" data-transition="pop" data-rel="popup" class="ui-link">color </a></div><div class="samp"><a href="#cornerradius-50" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-55" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#fontfile-60" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-65" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#icon-70" data-transition="pop" data-rel="popup" class="ui-link">icon </a></div><div class="samp"><a href="#isvisible-75" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#label-80" data-transition="pop" data-rel="popup" class="ui-link">label </a></div><div class="samp"><a href="#left-85" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#list-90" data-transition="pop" data-rel="popup" class="ui-link">list </a></div><div class="samp"><a href="#margins-95" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-100" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-105" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#orientation-110" data-transition="pop" data-rel="popup" class="ui-link">orientation </a></div><div class="samp"><a href="#padding-115" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-120" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-125" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-130" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#sizevariant-135" data-transition="pop" data-rel="popup" class="ui-link">sizeVariant </a></div><div class="samp"><a href="#textcolor-140" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-145" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#top-150" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-155" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#value-160" data-transition="pop" data-rel="popup" class="ui-link">value </a></div><div class="samp"><a href="#variant-165" data-transition="pop" data-rel="popup" class="ui-link">variant </a></div><div class="samp"><a href="#visibility-170" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-175" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="backcolor-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-30" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="color-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span></p></div><div data-role="popup" id="cornerradius-50" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-55" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="fontfile-60" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-65" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="icon-70" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the dropdown material icon font.</p></div><div data-role="popup" id="isvisible-75" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="label-80" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the default label of the dropdown.</p></div><div data-role="popup" id="left-85" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="list-90" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the dropdown list. You can also passed a comma separated string.</p></div><div data-role="popup" id="margins-95" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-100" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-105" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="orientation-110" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the orientation of the dropdown buttongroup. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">horizontal</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">vertical</span></p></div><div data-role="popup" id="padding-115" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-120" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-125" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-130" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="sizevariant-135" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the size variant of the dropdown button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Large</span></p></div><div data-role="popup" id="textcolor-140" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textsize-145" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="top-150" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-155" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="value-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the value of the Dropdown. If you pass a number it will be treated as the index of the corresponding item in the choices.</p></div><div data-role="popup" id="variant-165" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the variant of the dropdown button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Contained</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Text</span></p></div><div data-role="popup" id="visibility-170" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-175" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnChange ###
 * @brief setOnChange
 * Adds a callback function on change event
 * $$ dpd.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["The ","index "],"pTypes":["obj-item text.","num-The index of the corresponding item."]}
 */


/** ### setOnClose ###
 * @brief setOnClose
 * Adds a callback function on close event
 * $$ dpd.setOnClose(callback) $$
 * @param {fnc_json} callback 
 */


/** ### setList ###
 * @brief setList
 * Sets the list items on the dropdown
 * $$ dpd.setList(val) $$
 * @param {lst} val The list of new items t display.
 */


/** ### setItemByIndex ###
 * @brief setItemByIndex
 * Updates the text of the corresponding item in the dropdown
 * $$ dpd.setItemByIndex(item, index) $$
 * @param {str} item The new item text.
 * @param {num} index The index of the item to update.
 */


/** ### getItemByIndex ###
 * @brief getItemByIndex
 * Returns a dropdown item by its corresponding index
 * $$ dpd.getItemByIndex(index) $$
 * @param {num} index The index of corresponding item.
 * @returns str
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable an item in the dropdown
 * $$ dpd.setEnabled(index, value) $$
 * @param {num} index The index of the item.
 * @param {bin} value Values can be `true` `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of an item in the dropdown menu
 * $$ dpd.getEnabled(index) $$
 * @param {num} index The index of the item.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable an item in the dropdown
 * $$ dpd.setEnabledByName(name, value) $$
 * @param {str} name The name of the item.
 * @param {bin} value Values can be `true` `false`.
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of a menu item by its name
 * $$ dpd.getEnabledByName(name) $$
 * @param {str} name The name of the corresponding menu item.
 * @returns bin
 */


/** ### addItem ###
 * @brief addItem
 * Add or insert a menu item in the dropdown list
 * $$ dpd.addItem(name, index) $$
 * @param {str} name The name of the menu.
 * @param {num} index The index in which to insert the menu item.
 */


/** ### removeItemByIndex ###
 * @brief removeItemByIndex
 * Removes a menu item in the dropdown by its index
 * $$ dpd.removeItemByIndex(index) $$
 * @param {num} index The index of the menu item to remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes a menu item in the dropdown by its name
 * $$ dpd.removeItemByName(name) $$
 * @param {str} name The name of the menu item.
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item in the dropdown menu
 * $$ dpd.shiftItem() $$
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item in the dropdown menu
 * $$ dpd.popItem() $$
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the dropdown
 * $$ dpd.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the component is touch
 * $$ dpd.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ dpd.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ dpd.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ dpd.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ dpd.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ dpd.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ dpd.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ dpd.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ dpd.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ dpd.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ dpd.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ dpd.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ dpd.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ dpd.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ dpd.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ dpd.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize items to show in the dropdown
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add Dropdown control to the main layout.
        this.dpd = ui.addDropdown(this.main, items)

        // Add a callback handler for `onChange` event on the Dropdown control
        this.dpd.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup( "Value is " + text )
    }
}
 */
    
            
    
/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize dropdown items
        var items = ["Item 1", "Item 2", "Item 3"]

        // Add a Dropdown control to the main layout
        // and pass `Outlined` and `Primary` options for styling
        this.dpd = ui.addDropdown( this.main, items, "Outlined,Primary" )

        // Set the label property of the Dropdown
        this.dpd.label = "Choose and item"

        // Set the corner radius to 16px
        this.dpd.cornerRadius = 16

        // Set the text size to 18
        this.dpd.textSize = 18

        // Add a callback handler for `onChange` event of the Dropdown control
        this.dpd.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup( "Value is " + text )
    }
}
 */
    
            