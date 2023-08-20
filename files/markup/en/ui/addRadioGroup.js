// ------------- HEADER SECTION ------------- 


/** # addRadioGroup #
 * @abbrev rdg
 * @brief addRadioGroup
 * 
 * $$ rdg = ui.addRadioGroup(parent, list, options, width, height) $$ 
 * @param {obj} parent The parent where to add the RadioGroup component.
 * @param {lst} list The list items array.
 * @param {str} options A comma separated options for RadioGroup component.Options can be \n Radio Sizes: `Small` `Medium` \n Colors: `Primary` `Secondary` \n Icon Position: `Left` or `Right` \n Container: `Elevated` or `Outlined` \n Corner: `Square` \n `Required`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-RadioGroup Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a radiogroup component into your app. A radiogroup is a type of select list that can only have a single value being checked at a time.

 Pass <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">required</span> as option to have atleast one value selected.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addRadioGroup Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#backcolor-20" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-25" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-30" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-35" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-40" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#color-45" data-transition="pop" data-rel="popup" class="ui-link">color </a></div><div class="samp"><a href="#cornerradius-50" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-55" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#elevation-60" data-transition="pop" data-rel="popup" class="ui-link">elevation </a></div><div class="samp"><a href="#fontfile-65" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-70" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#iconcolor-75" data-transition="pop" data-rel="popup" class="ui-link">iconColor </a></div><div class="samp"><a href="#iconposition-80" data-transition="pop" data-rel="popup" class="ui-link">iconPosition </a></div><div class="samp"><a href="#isvisible-85" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#itempadding-90" data-transition="pop" data-rel="popup" class="ui-link">itemPadding </a></div><div class="samp"><a href="#label-95" data-transition="pop" data-rel="popup" class="ui-link">label </a></div><div class="samp"><a href="#left-100" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#list-105" data-transition="pop" data-rel="popup" class="ui-link">list </a></div><div class="samp"><a href="#margins-110" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-115" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-120" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#outlined-125" data-transition="pop" data-rel="popup" class="ui-link">outlined </a></div><div class="samp"><a href="#padding-130" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-135" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-140" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#radiosize-145" data-transition="pop" data-rel="popup" class="ui-link">radioSize </a></div><div class="samp"><a href="#rotation-150" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#spacebetween-155" data-transition="pop" data-rel="popup" class="ui-link">spaceBetween </a></div><div class="samp"><a href="#textcolor-160" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textposition-165" data-transition="pop" data-rel="popup" class="ui-link">textPosition </a></div><div class="samp"><a href="#textsize-170" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#top-175" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-180" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#value-185" data-transition="pop" data-rel="popup" class="ui-link">value </a></div><div class="samp"><a href="#visibility-190" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-195" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="backcolor-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-30" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="color-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color of the Radio Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span></p></div><div data-role="popup" id="cornerradius-50" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-55" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the disabled state of the radio button group.</p></div><div data-role="popup" id="elevation-60" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the depth of the RadioGroup container. Value ranges from 0 to 24.</p></div><div data-role="popup" id="fontfile-65" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-70" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="iconcolor-75" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the icon color in hexadecimal format.</p></div><div data-role="popup" id="iconposition-80" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the position of the icon. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span></p></div><div data-role="popup" id="isvisible-85" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="itempadding-90" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of each radio item. See also <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">setItemPadding</span> method.</p></div><div data-role="popup" id="label-95" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the label text of the RadioGroup Component.</p></div><div data-role="popup" id="left-100" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="list-105" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the list array. You can also pass a comma separated string of items.</p></div><div data-role="popup" id="margins-110" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-115" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-120" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="outlined-125" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns whether the container is outlined or elevated.</p></div><div data-role="popup" id="padding-130" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-135" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-140" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="radiosize-145" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the size of the radio button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span></p></div><div data-role="popup" id="rotation-150" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="spacebetween-155" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the space between the radio button and the text.</p></div><div data-role="popup" id="textcolor-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Stest or returns the color of the text in hexadecimal format. You can also pass color names e.g. <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">red</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">green</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">blue</span>.</p></div><div data-role="popup" id="textposition-165" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the position of the label text. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span>.</p></div><div data-role="popup" id="textsize-170" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="top-175" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-180" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="value-185" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the value of the RadioGroup Component. This must be equal to one of the item in the list.</p></div><div data-role="popup" id="visibility-190" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-195" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnChange ###
 * Call a function when the value of the radio group has changed *  * 
 * $$ rdg.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["index "],"pTypes":["num-The index of the selected item."]}
 */


/** ### setOnTouch ###
 * Adds a callback function when an item is click *  * 
 * $$ rdg.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["checked ","label ","index ","event "],"pTypes":["bin-The checked state of the radio item.","str-The radio item label text.","num- The index of the radio item.","obj-The click event object."]}
 */


/** ### setList ###
 * Sets the the radiogroup list items *  * 
 * $$ rdg.setList(val) $$
 * @param {str} val A comma separated items
 */


/** ### setItemByIndex ###
 * Sets an item in the radiogroup component *  * 
 * $$ rdg.setItemByIndex(item, index) $$
 * @param {str} item The new item name to be displayed
 * @param {num} index The index to of the item to be updated
 */


/** ### setItemByName ###
 * Updates an item in the list by its corresponding name *  * 
 * $$ rdg.setItemByName(name, text) $$
 * @param {str} name The name of the item.
 * @param {str} text The new text to replaced the name of the item.
 */


/** ### addItem ###
 * Adds an item in the radio group list *  * 
 * $$ rdg.addItem(name, index) $$
 * @param {str} name The new item to be added.
 * @param {num} index The index in which to add the item.
 */


/** ### removeItemByIndex ###
 * Removes an item in the radiogroup items list by its index *  * 
 * $$ rdg.removeItemByIndex(index) $$
 * @param {num} index The index of the item to remove.
 */


/** ### removeItemByName ###
 * Removes an item in the radiogroup items list by its name *  * 
 * $$ rdg.removeItemByName(name) $$
 * @param {str} name The name of the item to remove.
 */


/** ### popItem ###
 * Removes the last item in the radiogroup *  * 
 * $$ rdg.popItem() $$
 */


/** ### shiftItem ###
 * Removes the first item in the radiogroup *  * 
 * $$ rdg.shiftItem() $$
 */


/** ### setEnabled ###
 * Enable or disable the radiogroup or an item in the radiogroup *  * 
 * $$ rdg.setEnabled(index, value) $$
 * @param {num} index The index of the item.
 * @param {bin} value Values can be `true` or `false`. If `false`, the item will be disabled.
 */


/** ### getEnabled ###
 * Get the enabled state of an item in the radio group *  * 
 * $$ rdg.getEnabled(index) $$
 * @param {num} index The index of the corresponding item.
 * @returns bin
 */


/** ### setEnabledByName ###
 * Enable or disable a radiogroup item by its name *  * 
 * $$ rdg.setEnabledByName(name, value) $$
 * @param {str} name The radiogroup text.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabledByName ###
 * Get the enabled state of a radiogroup item by its name *  * 
 * $$ rdg.getEnabledByName(name) $$
 * @param {str} name The radiogroup text.
 * @returns bin
 */


/** ### setOnContextMenu ###
 * Adds a callback function on right click *  * 
 * $$ rdg.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["label ","index ","event "],"pTypes":["str-The list item label text.","num-The index of the corresponding radio item.","obj-The pointer event object."]}
 */


/** ### setCornerRadius ###
 * Sets the corner radius of the radiogroup container *  * 
 * $$ rdg.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### animate ###
 * Animate the component *  * 
 * $$ rdg.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * Sets the size of the component *  * 
 * $$ rdg.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * Show the component *  * 
 * $$ rdg.show() $$
 */


/** ### hide ###
 * Hide the component *  * 
 * $$ rdg.hide() $$
 */


/** ### gone ###
 * Destroy the component *  * 
 * $$ rdg.gone() $$
 */


/** ### destroy ###
 * Destroy the component *  * 
 * $$ rdg.destroy() $$
 */


/** ### setScale ###
 * Sets the x and y scaling of the component *  * 
 * $$ rdg.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom *  * 
 * $$ rdg.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * Sets the margin of the component *  * 
 * $$ rdg.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * Sets the padding component container *  * 
 * $$ rdg.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * Sets the position of the component relative to its parent dimensions *  * 
 * $$ rdg.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * Sets the border line for the component container *  * 
 * $$ rdg.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### bringForward ###
 * Bring this component forward by a given z-index *  * 
 * $$ rdg.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * Bring this component backward by a given z-index *  * 
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
    
            