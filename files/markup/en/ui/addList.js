// ------------- HEADER SECTION ------------- 


/** # addList #
 * @abbrev lst
 * @brief addList
 * 
 * $$ lst = ui.addList(parent, list, options, width, height) $$ 
 * @param {obj} parent The parent layout
 * @param {lst} list An array of arrays. Each element is of the form `[icon, title, body, secondary]`
 * @param {str} options A comma separated options for list styling and behaviours. Options can be \n Media: `Icon` `Avatar` \n Styling: `Dense` `Inset` \n Util: `Selectable` `Divider` `SecondaryText`, `NoRipple` to disable ripple effect
 * @param {num} width Fraction of the screen width. [0
 * @param {num} height Fraction of the screen height. [0
 * @returns obj-List Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Lists are continuous, vertical indexes of text or images. They are used to group together related pieces of data or informations to highlight association with each other and easy to read. They are frequently used for navigation as well as displaying general content.

 Add a list to your app by calling the <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">addList</span> method of the <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">ui</span> object.

 If <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Icon</span> option is passed, the list must be of the form <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">[icon, title, body, secondary]</span>. To display an image avatar, passed and additional <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Avatar</span> option and the list must be of the form <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">[image, title, body, secondary]</span>

 If no <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Icon</span> option is passed, the list is treated as <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">[title, body, secondary]</span> by default.

 The secondary action is an icon button by default, to display as a text passed <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">secondarytext</span> option.

 Adding a <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">selectable</span> list will disregard the <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">icon</span> option.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addList Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#avatarsize-20" data-transition="pop" data-rel="popup" class="ui-link">avatarSize </a></div><div class="samp"><a href="#avatarvariant-25" data-transition="pop" data-rel="popup" class="ui-link">avatarVariant </a></div><div class="samp"><a href="#backcolor-30" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-35" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-40" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-45" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-50" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#checkboxcolor-55" data-transition="pop" data-rel="popup" class="ui-link">checkboxColor </a></div><div class="samp"><a href="#cornerradius-60" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-65" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#elevation-70" data-transition="pop" data-rel="popup" class="ui-link">elevation </a></div><div class="samp"><a href="#fontfile-75" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-80" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#iconcolor-85" data-transition="pop" data-rel="popup" class="ui-link">iconColor </a></div><div class="samp"><a href="#iconsize-90" data-transition="pop" data-rel="popup" class="ui-link">iconSize </a></div><div class="samp"><a href="#isvisible-95" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#itempadding-100" data-transition="pop" data-rel="popup" class="ui-link">itemPadding </a></div><div class="samp"><a href="#label-105" data-transition="pop" data-rel="popup" class="ui-link">label </a></div><div class="samp"><a href="#left-110" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#margins-115" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-120" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-125" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#outlined-130" data-transition="pop" data-rel="popup" class="ui-link">outlined </a></div><div class="samp"><a href="#padding-135" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-140" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-145" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-150" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#selectable-155" data-transition="pop" data-rel="popup" class="ui-link">selectable </a></div><div class="samp"><a href="#textcolor-160" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textcolor1-165" data-transition="pop" data-rel="popup" class="ui-link">textColor1 </a></div><div class="samp"><a href="#textcolor2-170" data-transition="pop" data-rel="popup" class="ui-link">textColor2 </a></div><div class="samp"><a href="#textsize-175" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#textsize1-180" data-transition="pop" data-rel="popup" class="ui-link">textSize1 </a></div><div class="samp"><a href="#textsize2-185" data-transition="pop" data-rel="popup" class="ui-link">textSize2 </a></div><div class="samp"><a href="#top-190" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-195" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#visibility-200" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-205" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="avatarsize-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the size of the avatar. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Large</span></p></div><div data-role="popup" id="avatarvariant-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the variant of the avatar. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Square</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Round</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Circle</span></p></div><div data-role="popup" id="backcolor-30" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the background color in a hexadecimal format.</p></div><div data-role="popup" id="backimage-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-40" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-50" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="checkboxcolor-55" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color of the checkbox when <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Selectable</span> option is enabled. Vaues can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span></p></div><div data-role="popup" id="cornerradius-60" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-65" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="elevation-70" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the depth of the list container. Values range from 0 to 24.</p></div><div data-role="popup" id="fontfile-75" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-80" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="iconcolor-85" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the icon color in a hexadecimal format.</p></div><div data-role="popup" id="iconsize-90" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the icon text.</p></div><div data-role="popup" id="isvisible-95" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="itempadding-100" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of each list item. See also <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">setItemPadding</span> method.</p></div><div data-role="popup" id="label-105" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the label text.</p></div><div data-role="popup" id="left-110" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="margins-115" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-120" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-125" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="outlined-130" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns whether the container is outlined or elevated.</p></div><div data-role="popup" id="padding-135" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-140" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-145" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-150" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="selectable-155" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns a boolean whether the list is selectable or not.</p></div><div data-role="popup" id="textcolor-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textcolor1-165" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the title text in hexadecimal format.</p></div><div data-role="popup" id="textcolor2-170" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the body text in hexadecimal format.</p></div><div data-role="popup" id="textsize-175" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="textsize1-180" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the title text.</p></div><div data-role="popup" id="textsize2-185" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the body text.</p></div><div data-role="popup" id="top-190" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-195" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="visibility-200" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-205" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### addItem ###
 * Adds an item in the list *  * 
 * $$ lst.addItem(title, body, image, index) $$
 * @param {str} title The title of the item.
 * @param {str} body The text description of the item.
 * @param {str} image A material icon or image file path.
 * @param {num} index The index in which to add or insert the item.
 */


/** ### setOnTouch ###
 * Adds a callback function when the list item is click *  * 
 * $$ lst.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["title ","body ","icon ","index ","event "],"pTypes":["str-The list item title text.","str-The list item body text.","str-The list item icon.","num-The list item index.","obj-The pointer event object."]}
 */


/** ### setOnSelect ###
 * Sets a callback handler when an item in the list is selected *  * 
 * $$ lst.setOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["title ","index "],"pTypes":["str-The list item title text.","num-The index of the selected list item."]}
 */


/** ### setOnAction ###
 * Sets a callback handler when an action icon is click *  * 
 * $$ lst.setOnAction(callback) $$
 * @param {fnc_json} callback {"pNames":["icon ","index "],"pTypes":["str-The icon text.","num-The index of the corresponding secondary action."]}
 */


/** ### setOnContextMenu ###
 * Adds a callback function on right click *  * 
 * $$ lst.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["title ","body ","icon ","index ","event "],"pTypes":["str-The list item title text.","str-The list item body text.","str-The list item icon.","num-The list item index.","obj-The pointer event object."]}
 */


/** ### getSelectedItems ###
 * Returns an array of indexes of the selected items *  * 
 * $$ lst.getSelectedItems() $$
 */


/** ### getSelectedTitles ###
 * Returns an array of titles of selected items *  * 
 * $$ lst.getSelectedTitles() $$
 */


/** ### setList ###
 * Updtes the list *  * 
 * $$ lst.setList(list) $$
 * @param {lst} list A comma separated list of items or an array. See the list format above.
 */


/** ### setSelectable ###
 * Make the list selectable or not *  * 
 * $$ lst.setSelectable(selectable) $$
 * @param {bin} selectable If true, make the list selectable. Otherwise, list is not selectable
 */


/** ### setItemByIndex ###
 * Change the content of an item in a list *  * 
 * $$ lst.setItemByIndex(index, newTitle, newBody, newImage) $$
 * @param {num} index The index of the item to update
 * @param {str} newTitle The new title of the item
 * @param {str} newBody The new body text
 * @param {str} newImage The new icon or image
 */


/** ### getItemByIndex ###
 * Get the item in a list by its corresponding index *  * 
 * $$ lst.getItemByIndex(index) $$
 * @param {num} index Returns the item in a list as an object of the following format { title, body, image }
 */


/** ### setItem ###
 * Updates an item in the list *  * 
 * $$ lst.setItem(title, newTitle, newBody, newImage) $$
 * @param {str} title The title of the list item to update.
 * @param {str} newTitle The new title of the list item.
 * @param {str} newBody The new description of the list item.
 * @param {str} newImage A material icon font or image file path.
 */


/** ### getItem ###
 * Get the item in the list by its correspding title *  * 
 * $$ lst.getItem(title) $$
 * @param {str} title Returns the item in a list as an object of the following format { title, body, image }
 */


/** ### removeItemByIndex ###
 * Removes an element from the list *  * 
 * $$ lst.removeItemByIndex(index) $$
 * @param {num} index The index of the item to remove
 */


/** ### removeItemByName ###
 * Removes an item in the list by its title *  * 
 * $$ lst.removeItemByName(name) $$
 * @param {str} name The title of the list to remove.
 */


/** ### shiftItem ###
 * Removes the first item the list *  * 
 * $$ lst.shiftItem() $$
 */


/** ### popItem ###
 * Removes the last item in the list *  * 
 * $$ lst.popItem() $$
 */


/** ### deselectAll ###
 * Clears all selection in the list if the list is selectable *  * 
 * $$ lst.deselectAll() $$
 */


/** ### selectItemByIndex ###
 * Selects an item in the list by its index and marked the checkbox. List must be selectable *  * 
 * $$ lst.selectItemByIndex(index) $$
 * @param {num} index The index to be selected.
 */


/** ### setTitleText ###
 * Sets a new title text to a corresponding item in a list *  * 
 * $$ lst.setTitleText(index, title) $$
 * @param {num} index The index of the corresponding list item.
 * @param {str} title The new title text.
 */


/** ### setBodyText ###
 * Sets a new secondary text to a corresponding item in a list *  * 
 * $$ lst.setBodyText(index, newText) $$
 * @param {num} index The index of the list whose secondary text to be changed.
 * @param {str} newText The new secondary text.
 */


/** ### setIcon ###
 * Updates an icon in a list by its corresponding index *  * 
 * $$ lst.setIcon(index, icon) $$
 * @param {num} index The index of the corresponding list item.
 * @param {str} icon Material icon font.
 */


/** ### setCornerRadius ###
 * Sets the corner radius of the list container *  * 
 * $$ lst.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top
 * @param {num} tr Top
 * @param {num} bl Bottom
 * @param {num} br Bottom
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### animate ###
 * Animate the component *  * 
 * $$ lst.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * Sets the size of the component *  * 
 * $$ lst.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0
 * @param {num} height Fraction of the parent height. [0
 */


/** ### show ###
 * Show the component *  * 
 * $$ lst.show() $$
 */


/** ### hide ###
 * Hide the component *  * 
 * $$ lst.hide() $$
 */


/** ### gone ###
 * Destroy the component *  * 
 * $$ lst.gone() $$
 */


/** ### destroy ###
 * Destroy the component *  * 
 * $$ lst.destroy() $$
 */


/** ### setScale ###
 * Sets the x and y scaling of the component *  * 
 * $$ lst.setScale(x, y) $$
 * @param {num} x The x
 * @param {num} y The y
 */


/** ### getPosition ###
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom *  * 
 * $$ lst.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * Sets the margin of the component *  * 
 * $$ lst.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * Sets the padding component container *  * 
 * $$ lst.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0
 * @param {num} right Fraction of the component width. [0
 * @param {num} bottom Fraction of the component height. [0
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * Sets the position of the component relative to its parent dimensions *  * 
 * $$ lst.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0
 * @param {num} top Fraction of the screen height. [0
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * Sets the border line for the component container *  * 
 * $$ lst.setBorder(width, clr, style) $$
 * @param {num} width Border
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border
 */


/** ### bringForward ###
 * Bring this component forward by a given z-index *  * 
 * $$ lst.bringForward(zIndex) $$
 * @param {num} zIndex The z
 */


/** ### sendBackward ###
 * Bring this component backward by a given z-index *  * 
 * $$ lst.sendBackward(zIndex) $$
 * @param {num} zIndex The z
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic list
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var list = ["Javascript", "Java", "Python"]

        // Add a list control to the main layout
        this.lst = ui.addList(this.main, list, "", 0.6)

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }
    
    onTouch( title, body, icon, action, index )
    {
        ui.showPopup( title, "Short" )
    }
}
 */
    
            
    
/**
@sample List with icon and body
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0, 0, 0.02)

        // Initialize the list items to show
        var list = [
            ["favorite", "Javascript", "This is a sample body text."],
            ["person", "Java", "This is a sample body text."],
            ["settings", "Python", "This is a sample body text."]
        ]

        // Add a list control with icon to the main layout
        this.lst = ui.addList(this.main, list, "Icon", 0.8)

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )

        // Add a button control to the main layout
        this.btn = ui.addButton(this.main, "Change Icon Color", "Outlined")

        // Add a callback handler to change the icon color when the button is touched
        this.btn.setOnTouch( this.changeIconColor )
    }
    
    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title, "Short")
    }

    changeIconColor()
    {
        this.lst.iconColor = "#e91e63"
    }
}
 */
    
            
    
/**
@sample Contacts list
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Avatar url
        var avatar = "https://static.wikia.nocookie.net/heroes-and-villain/images/7/7e/Bilbo_BOFA_12.png/revision/latest/scale-to-width-down/350?cb=20190320192007"
        
        // Initialize the contact items to show
        var list = [
            [avatar, "Frodo", "+0123456789"],
            [avatar, "Bilbo", "+0123456789"],
            [avatar, "Well", "+0123456789"]
        ]

        // Add a list control with avatar to the main layout
        this.lst = ui.addList(this.main, list, "Avatar", 0.8)

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }

    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title + " : " +body, "Short")
    }
}
 */
    
            
    
/**
@sample Elevated list
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var list = [
            ["favorite", "Javascript", "This is a sample body text."],
            ["person", "Java", "This is a sample body text."],
            ["settings", "Python", "This is a sample body text."]
        ]

        // Add an elevated list control to the main layout
        this.lst = ui.addList(this.main, list, "Icon,Elevated", 0.8)

        // Set the elevation depth to 5
        this.lst.elevation = 5

        // Set the list label
        this.lst.label = "This is a label text"

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }

    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title + " : " +body, "Short")
    }
}
 */
    
            
    
/**
@sample Outlined List
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Initialize the list items to show
        var list = [
            ["favorite", "Javascript", "This is a sample body text."],
            ["person", "Java", "This is a sample body text."],
            ["settings", "Python", "This is a sample body text."]
        ]

        // Add an outlined list control to the main layout
        this.lst = ui.addList(this.main, list, "Icon,Outlined", 0.8)
        
        // Set the list label
        this.lst.label = "My awesome list"

        // Set the corner radius to 12
        this.lst.cornerRadius = 12

        // Adds a callback handler when the list is touched
        this.lst.setOnTouch( this.onTouch )
    }

    onTouch(title, body, icon, action, index)
    {
        ui.showPopup(title + " : " +body, "Short")
    }
}
 */
    
            
    
/**
@sample Selectable List
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var list = ["Javascript", "Java", "Python"]

        // Add a list control to the main layout
        this.lst = ui.addList(this.main, list, "", 0.6)

        // Set the list label
        this.lst.label = "Long press any item to select"

        // Add on long touch event and set the list to selectable
        this.lst.setOnLongTouch( this.onLongTouch   )

        // Add `onSelect` event listener to the list
        // and display the selected item in the popup
        this.lst.setOnSelect( this.onSelect )
    }

    onLongTouch()
    {
        this.lst.selectable = true
    }

    onSelect(title, i, value)
    {
        ui. showPopup(title + " : " + value)
    }
}
 */
    
            