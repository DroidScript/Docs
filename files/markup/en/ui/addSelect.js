// ------------- HEADER SECTION ------------- 


/** # addSelect #
 * @abbrev sel
 * @brief addSelect
 * 
 * $$ sel = ui.addSelect(parent, list, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the control
 * @param {lst} list The list of items for the Select options
 * @param {str} options A comma separated options. Can be \n Sizes: `Small` `Medium` \n Variant: `Filled` `Outlined` `Standard` \n Margin: `Dense` `Normal` \n Utils: `Required` `Multiple` `Radio` `Disabled` `AutoFocus` `FullWidth`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-Select Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a Select Component to a given layout.

 This component is used to create a drop-down list and is most often used in a form to collect user choices.

 A simple list
<js> [ "Option 1", "Option 2", "Option 3"] </js>


 If you want a list with groupings, you can add a colon <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">:</span> before each item text to display as group name. Below is an example
<js> [" : Group 1", "Option 1", "Option 2", " : Group 2", "Item 1", "Item 2"] </js>


<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addSelect Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#backcolor-20" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-25" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-30" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-35" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-40" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#cornerradius-45" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-50" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#enabled-55" data-transition="pop" data-rel="popup" class="ui-link">enabled </a></div><div class="samp"><a href="#fontfile-60" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-65" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#iconcolor-70" data-transition="pop" data-rel="popup" class="ui-link">iconColor </a></div><div class="samp"><a href="#isvisible-75" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#label-80" data-transition="pop" data-rel="popup" class="ui-link">label </a></div><div class="samp"><a href="#labelcolor-85" data-transition="pop" data-rel="popup" class="ui-link">labelColor </a></div><div class="samp"><a href="#labelsize-90" data-transition="pop" data-rel="popup" class="ui-link">labelSize </a></div><div class="samp"><a href="#left-95" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#list-100" data-transition="pop" data-rel="popup" class="ui-link">list </a></div><div class="samp"><a href="#margins-105" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#maxheight-110" data-transition="pop" data-rel="popup" class="ui-link">maxHeight </a></div><div class="samp"><a href="#opacity-115" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-120" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#padding-125" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-130" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#popupcolor-135" data-transition="pop" data-rel="popup" class="ui-link">popupColor </a></div><div class="samp"><a href="#position-140" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-145" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#sizevariant-150" data-transition="pop" data-rel="popup" class="ui-link">sizeVariant </a></div><div class="samp"><a href="#textcolor-155" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-160" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#top-165" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-170" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#value-175" data-transition="pop" data-rel="popup" class="ui-link">value </a></div><div class="samp"><a href="#variant-180" data-transition="pop" data-rel="popup" class="ui-link">variant </a></div><div class="samp"><a href="#visibility-185" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-190" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="backcolor-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-30" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="cornerradius-45" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-50" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="enabled-55" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns a boolean value whether the component is enabled or disabled.</p></div><div data-role="popup" id="fontfile-60" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-65" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="iconcolor-70" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the icon in hexadecimal format <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="isvisible-75" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="label-80" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the label text.</p></div><div data-role="popup" id="labelcolor-85" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the label text in hexadecimal format <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="labelsize-90" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the label.</p></div><div data-role="popup" id="left-95" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="list-100" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the list items. You can also pass a comma separated string of items.</p></div><div data-role="popup" id="margins-105" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="maxheight-110" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the maximum height of the popup container.</p></div><div data-role="popup" id="opacity-115" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-120" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="padding-125" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-130" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="popupcolor-135" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the popup in hexadecimal format.</p></div><div data-role="popup" id="position-140" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-145" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="sizevariant-150" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the size variant of the Select Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span></p></div><div data-role="popup" id="textcolor-155" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textsize-160" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="top-165" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-170" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="value-175" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the value of the Select Component. For Select with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Multiple</span> options&#44; the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">value</span> is an array of string items. You can also pass the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">index</span> of the selected item. Pass an array of <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">indexes</span> for multiple selection.</p></div><div data-role="popup" id="variant-180" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the variant of the Select Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Standard</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Filled</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span></p></div><div data-role="popup" id="visibility-185" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-190" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnChange ###
 * Sets a callback function when the value changes *  * 
 * $$ sel.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["value "],"pTypes":["str-The value of the select input."]}
 */


/** ### setOnOpen ###
 * Sets a callback function when the menu is open *  * 
 * $$ sel.setOnOpen(callback) $$
 * @param {} callback 
 */


/** ### setOnClose ###
 * Sets a callback function when the menu dialog is close *  * 
 * $$ sel.setOnClose(callback) $$
 * @param {fnc_json} callback {"pNames":["value "],"pTypes":["str-The value of the select input."]}
 */


/** ### addItem ###
 * Adds an item on the select component options list *  * 
 * $$ sel.addItem(item, index) $$
 * @param {str} item A new item to be added.
 * @param {num} index The index in which to add the item.
 */


/** ### removeItemByIndex ###
 * Removes an item in the select component item list by its index *  * 
 * $$ sel.removeItemByIndex(index) $$
 * @param {num} index The index of the corresponding item to remove.
 */


/** ### removeItemByName ###
 * Removes an item in the select component item list by its name *  * 
 * $$ sel.removeItemByName(name) $$
 * @param {str} name The name of the item to remove.
 */


/** ### shifItem ###
 * Removes an item at the beginning of the list items *  * 
 * $$ sel.shifItem() $$
 */


/** ### popItem ###
 * Removes an item at the end of the list items *  * 
 * $$ sel.popItem() $$
 */


/** ### getItem ###
 * Returns the item at a given index *  * 
 * $$ sel.getItem(index) $$
 * @param {num} index The index of the item.
 */


/** ### setList ###
 * Sets the list items in the menu popup *  * 
 * $$ sel.setList(items) $$
 * @param {obj} items A comma separated string or array of options
 */


/** ### setEnabled ###
 * Enable or disable the select component *  * 
 * $$ sel.setEnabled(index, value) $$
 * @param {num} index Can be `true` or `false`. You can also pass a `Boolean` to enable or disable the Select component.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * Get the enabled state of an item in the select menu *  * 
 * $$ sel.getEnabled(index) $$
 * @param {num} index The index of the corresponding item in the select menu.
 * @returns bin
 */


/** ### setEnabledByName ###
 * Enable or disable an item in the menu popup *  * 
 * $$ sel.setEnabledByName(name, value) $$
 * @param {str} name The name of the menu item.
 * @param {bin} value Value can be `true` or `false`
 */


/** ### getEnabledByName ###
 * Get the enabled state of an item in the menu popup *  * 
 * $$ sel.getEnabledByName(name) $$
 * @param {str} name The name of the menu item.
 * @returns bin
 */


/** ### setOnTouch ###
 * Adds a callback handler when the component is touch *  * 
 * $$ sel.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * Adds a callback function on right click *  * 
 * $$ sel.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * Animate the component *  * 
 * $$ sel.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * Sets the size of the component *  * 
 * $$ sel.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * Show the component *  * 
 * $$ sel.show() $$
 */


/** ### hide ###
 * Hide the component *  * 
 * $$ sel.hide() $$
 */


/** ### gone ###
 * Destroy the component *  * 
 * $$ sel.gone() $$
 */


/** ### destroy ###
 * Destroy the component *  * 
 * $$ sel.destroy() $$
 */


/** ### setScale ###
 * Sets the x and y scaling of the component *  * 
 * $$ sel.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom *  * 
 * $$ sel.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * Sets the margin of the component *  * 
 * $$ sel.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * Sets the padding component container *  * 
 * $$ sel.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * Sets the position of the component relative to its parent dimensions *  * 
 * $$ sel.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * Sets the border line for the component container *  * 
 * $$ sel.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * Sets the corner radius of the component *  * 
 * $$ sel.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * Bring this component forward by a given z-index *  * 
 * $$ sel.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * Bring this component backward by a given z-index *  * 
 * $$ sel.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "", 0.6)

        // Set the label text
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */
    
            
    
/**
@sample Group title
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        // The leading colon in each item will render it as group tile
        var items = [":Choices", "Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "", 0.6)

        // Set the label text
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(text, index)
    {
        ui.showPopup("You choose " + text)
    }
}
 */
    
            
    
/**
@sample Multiple selection
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        // Passing `Multiple` option will allow more than one selection
        this.sel = ui.addSelect(this.main, items, "Multiple", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(items, index)
    {
        ui.showPopup( "You choose " + items.join(", ") )
    }
}
 */
    
            
    
/**
@sample Outlined and small
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        // Passing `Outlined` option will add a border
        // Passing `Small` option will make the control smaller
        this.sel = ui.addSelect(this.main, items, "Outlined,Small,Secondary", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(item, index)
    {
        ui.showPopup( "You choose " + item )
    }
}
 */
    
            
    
/**
@sample Radiogroup items
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show
        var items = ["Item 1", "Item 2", "Item 3"]

        // Adds a select control to the main layout
        // Passing `Radio` option will render the items as radiogroup
        this.sel = ui.addSelect(this.main, items, "Filled,Radio", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(item, index)
    {
        ui.showPopup( "You choose " + item )
    }
}
 */
    
            
    
/**
@sample Grouped list items
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show with group tiles
        var items = [":Group 1", "Item 1", "Item 2", ":Group 2", "Another item 1", "Another item 2"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "Filled", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(item, index)
    {
        ui.showPopup( "You choose " + item )
    }
}
 */
    
            
    
/**
@sample Multiple radiogroup with titles
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize list items to show with group tiles
        var items = [":Group 1", "Item 1", "Item 2", ":Group 2", "Another item 1", "Another item 2"]

        // Adds a select control to the main layout
        this.sel = ui.addSelect(this.main, items, "Outlined,Radio,Multiple", 0.6)
        this.sel.label = "Select an item"

        // Add a callback handler when an item is selected
        this.sel.setOnChange( this.onChange )
    }

    onChange(items, index)
    {
        ui.showPopup( "You choose " + items.join(", ") )
    }
}
 */
    
            