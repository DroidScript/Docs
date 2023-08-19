// ------------- HEADER SECTION ------------- 


/** # addAccordion #
 * @abbrev acc
 * @brief addAccordion
 * 
 * $$ acc = ui.addAccordion(parent, titles, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the text.
 * @param {obj} titles An array of accordion titles.
 * @param {str} options A comma separated options. Can be one or a combination of the following: `Square` \n Layout type `Linear` or `Absolute`
 * @param {num} width Fraction of the screen width: [0
 * @param {num} height Fraction of the screen height. [0
 * @returns obj-Accordion Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds an accordion or expansion panel into your app. This is very useful to display controls that are grouped together.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addAccordion Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#backcolor-20" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-25" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-30" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-35" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-40" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#cornerradius-45" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-50" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#expandicon-55" data-transition="pop" data-rel="popup" class="ui-link">expandIcon </a></div><div class="samp"><a href="#fontfile-60" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-65" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#isvisible-70" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#itempadding-75" data-transition="pop" data-rel="popup" class="ui-link">itemPadding </a></div><div class="samp"><a href="#left-80" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#margins-85" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-90" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-95" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#padding-100" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-105" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-110" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-115" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#rounded-120" data-transition="pop" data-rel="popup" class="ui-link">rounded </a></div><div class="samp"><a href="#secondarytext-125" data-transition="pop" data-rel="popup" class="ui-link">secondaryText </a></div><div class="samp"><a href="#textcolor-130" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textcolor1-135" data-transition="pop" data-rel="popup" class="ui-link">textColor1 </a></div><div class="samp"><a href="#textcolor2-140" data-transition="pop" data-rel="popup" class="ui-link">textColor2 </a></div><div class="samp"><a href="#textsize-145" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#textsize1-150" data-transition="pop" data-rel="popup" class="ui-link">textSize1 </a></div><div class="samp"><a href="#textsize2-155" data-transition="pop" data-rel="popup" class="ui-link">textSize2 </a></div><div class="samp"><a href="#titlewidth-160" data-transition="pop" data-rel="popup" class="ui-link">titleWidth </a></div><div class="samp"><a href="#titles-165" data-transition="pop" data-rel="popup" class="ui-link">titles </a></div><div class="samp"><a href="#toggle-170" data-transition="pop" data-rel="popup" class="ui-link">toggle </a></div><div class="samp"><a href="#top-175" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-180" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#visibility-185" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-190" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="backcolor-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-30" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="cornerradius-45" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius of the accordion panel. You can also pass an array of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">[tl&#44; tr&#44; bl&#44; br]</span>. See also <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">setCornerRadius</span> method.</p></div><div data-role="popup" id="disabled-50" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns whether the accordion is disabled or not. <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">True</span> only if all accordion is disable&#44; otherwise <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">false</span>.</p></div><div data-role="popup" id="expandicon-55" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the material icon font for the expand icon.</p></div><div data-role="popup" id="fontfile-60" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-65" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="isvisible-70" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="itempadding-75" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of each accordion item. See also <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">setItemPadding</span> method.</p></div><div data-role="popup" id="left-80" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="margins-85" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-90" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-95" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="padding-100" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-105" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-110" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-115" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="rounded-120" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns whether the accordion is rounded or not.</p></div><div data-role="popup" id="secondarytext-125" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the secondary text of the accordion items. See also <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">setSecondaryText</span> method.</p></div><div data-role="popup" id="textcolor-130" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textcolor1-135" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the title text color in hexadecimal format <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="textcolor2-140" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the secondary text color in hexadecimal format <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="textsize-145" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="textsize1-150" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the accordion title text size.</p></div><div data-role="popup" id="textsize2-155" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the accordion secondary text size.</p></div><div data-role="popup" id="titlewidth-160" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets and returns the width of the title as fraction. Useful when you have a long title.</p></div><div data-role="popup" id="titles-165" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the list of titles for the accordion panel. Each element of the titles array is a string.</p></div><div data-role="popup" id="toggle-170" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Collapse or shrink a corresponding accordion by its index.</p></div><div data-role="popup" id="top-175" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-180" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="visibility-185" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-190" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### getLayout ###
 * Get the layout of the corresponding accordion item. This is very useful when you add a control or component that will be displayed when the accordion collapse *  * 
 * $$ acc.getLayout(index) $$
 * @param {num} index The index of the accordion. You can also pass accordion title.
 * @returns obj-Layout Component
 */


/** ### setTitleText ###
 * Update the accordion title by passing its corresponding index *  * 
 * $$ acc.setTitleText(index, title) $$
 * @param {num} index The index of the corresponding title to updates.
 * @param {str} title The new title text.
 */


/** ### setSecondaryText ###
 * Adds a secondary text on the accordion *  * 
 * $$ acc.setSecondaryText(text, index) $$
 * @param {obj} text The secondary text to display. You can pass arguments as string or array by following the format below. \n String: `"Secodary text 1,Secondary text 2,Secondary text 3"` \n Array: `[ "Secondary text 1", "Secondary text 2", "Secondary text 3" ]`
 * @param {num} index If `index` is provided, the corresponding index will be updated with the new text.
 */


/** ### setExpandIcon ###
 * Sets the expand icon at the right of the accordion *  * 
 * $$ acc.setExpandIcon(icon) $$
 * @param {str} icon A material icon
 */


/** ### addItem ###
 * Adds an item to the accordion *  * 
 * $$ acc.addItem(title, secondaryText, index) $$
 * @param {str} title Accordion title
 * @param {str} secondaryText Accordion secondary text
 * @param {num} index The index at which the accordion item will be added. If `null`, the item will be added at the bottom of the accordion.
 */


/** ### removeItemByIndex ###
 * Removes accordion item by its index *  * 
 * $$ acc.removeItemByIndex(index) $$
 * @param {num} index The index of the corresponding accordion to remove.
 */


/** ### removeItemByName ###
 * Removes accordion item by its title name *  * 
 * $$ acc.removeItemByName(title) $$
 * @param {str} title The title of the corresponding accordion to remove.
 */


/** ### shiftItem ###
 * Removes the first accordion item *  * 
 * $$ acc.shiftItem() $$
 */


/** ### popItem ###
 * Removes the last accordion item *  * 
 * $$ acc.popItem() $$
 */


/** ### setEnabled ###
 * Enable or disable the accordion component or an item in the accordion component *  * 
 * $$ acc.setEnabled(index, value) $$
 * @param {num} index The index of the corresponding accordion.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * Get the enabled state of an accordion item by its index *  * 
 * $$ acc.getEnabled(index) $$
 * @param {num} index The index of the accordion item.
 * @returns bin
 */


/** ### setEnabledByName ###
 * Enable or disable an accordion item by its name *  * 
 * $$ acc.setEnabledByName(name, value) $$
 * @param {str} name The title of the accordion
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabledByName ###
 * Get the enabled state of an accordion item by its name *  * 
 * $$ acc.getEnabledByName(name) $$
 * @param {str} name The title of the accordion.
 * @returns bin
 */


/** ### getLayoutIndex ###
 * Get the index of the corresponding layout *  * 
 * $$ acc.getLayoutIndex(layout) $$
 * @param {obj} layout The layout to check.
 * @returns num
 */


/** ### setOnTouch ###
 * Sets a callback function when the accordion is touch *  * 
 * $$ acc.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["index ","expand "],"pTypes":["num-The index of the corresponding accordion item.","bin-The expanded state of the accordion."]}
 */


/** ### setOnContextMenu ###
 * Adds a callback function on right click *  * 
 * $$ acc.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["title ","index ","event "],"pTypes":["str-The accordion title text.","num-The index of the corresponding accordion item.","obj-The pointer event object."]}
 */


/** ### setTextColor ###
 * Sets the color of the title and the secondary text respectively *  * 
 * $$ acc.setTextColor(color1, color2) $$
 * @param {str} color1 Color of the title text in hexadecimal format `#rrggbb`
 * @param {str} color2 Color of the secondary text in hexadecimal format `#rrggbb`
 */


/** ### setCornerRadius ###
 * Sets the corner radius of the top and bottom accordion panels *  * 
 * $$ acc.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top
 * @param {num} tr Top
 * @param {num} bl Bottom
 * @param {num} br Bottom
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### animate ###
 * Animate the component *  * 
 * $$ acc.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * Sets the size of the component *  * 
 * $$ acc.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0
 * @param {num} height Fraction of the parent height. [0
 */


/** ### show ###
 * Show the component *  * 
 * $$ acc.show() $$
 */


/** ### hide ###
 * Hide the component *  * 
 * $$ acc.hide() $$
 */


/** ### gone ###
 * Destroy the component *  * 
 * $$ acc.gone() $$
 */


/** ### destroy ###
 * Destroy the component *  * 
 * $$ acc.destroy() $$
 */


/** ### setScale ###
 * Sets the x and y scaling of the component *  * 
 * $$ acc.setScale(x, y) $$
 * @param {num} x The x
 * @param {num} y The y
 */


/** ### getPosition ###
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom *  * 
 * $$ acc.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * Sets the margin of the component *  * 
 * $$ acc.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * Sets the padding component container *  * 
 * $$ acc.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0
 * @param {num} right Fraction of the component width. [0
 * @param {num} bottom Fraction of the component height. [0
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * Sets the position of the component relative to its parent dimensions *  * 
 * $$ acc.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0
 * @param {num} top Fraction of the screen height. [0
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * Sets the border line for the component container *  * 
 * $$ acc.setBorder(width, clr, style) $$
 * @param {num} width Border
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border
 */


/** ### bringForward ###
 * Bring this component forward by a given z-index *  * 
 * $$ acc.bringForward(zIndex) $$
 * @param {num} zIndex The z
 */


/** ### sendBackward ###
 * Bring this component backward by a given z-index *  * 
 * $$ acc.sendBackward(zIndex) $$
 * @param {num} zIndex The z
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Complete accordion implementation
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen main layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        this.accords = [ "Accordion 1", "Accordion 2", "Accordion 3" ]

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion( this.main, this.accords, "", 0.9 )

        // Secondary text to display
        var secTxt = [
            "This is the secondary text 1",
            "This is the secondary text 2",
            "This is the secondary text 3"
        ]

        // sets the secondary text
        this.acc.setSecondaryText( secTxt )

        // Add ontouch event handler to the accordion
        this.acc.setOnTouch( this.onTouch )

        // Add controls to the first accordion layout
        this.lay1 = this.acc.getLayout( 0 )
        this.txt = ui.addText(this.lay1, "This is a text in the first layout.")

        // Add controls to the second layout
        this.lay2 = this.acc.getLayout( 1 )
        this.btn = ui.addButton(this.lay2, "Button", "Primary")

        // Add controls to the third layout
        this.lay3 = this.acc.getLayout( 2 )
        this.tfd = ui.addTextField(this.lay3, "", "Outlined", 0.3)
        this.tfd.label = "Enter some text"
    }
    
    onTouch(index, expand)
    {
        var msg = `${this.accords[index]} is ${expand ? "open" : "close"}`
        ui.showPopup( msg )
    }
}
 */
    
            
    
/**
@sample Items manipulation
class Main extends App
{
    onStart()
    {
        this.count = 1;

        // Creates a fullscreen main layout.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins(0, 0.01, 0, 0.01)

        var accords = [ "Accordion 1", "Accordion 2", "Accordion 3" ]

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion( this.main, accords, "", 0.9 )

        this.lay = ui.addLayout(this.main, "Linear", "Horizontal", 0.9)
        this.lay.childSpacing = "evenly"

        // add a button controls to add or remove accordion item
        this.btn1 = ui.addButton( this.lay, "Append Item" )
        this.btn1.setOnTouch( this.btn1_onTouch )

        this.btn2 = ui.addButton( this.lay, "Add Item in index 1" )
        this.btn2.setOnTouch( this.btn2_onTouch )

        this.btn3 = ui.addButton( this.lay, "Remove Item" )
        this.btn3.setOnTouch(  this.btn3_onTouch )
    }

    btn1_onTouch()
    {
        // add an item at the bottom of the accordion
        this.acc.addItem( "New Bottom Title", "New secondary text" )
    }

    btn2_onTouch()
    {
        var title = "New Title " + this.count++
        // insert item in the second index
        this.acc.addItem( title, "New secondary text", 1 )
    }

    btn3_onTouch()
    {
        this.acc.removeItemByIndex( 2 )
        ui.showPopup( "Second item is removed" )
    }
}
 */
    
            
    
/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen main layout.
        this.main = ui.addLayout("main", "Linear", "VCenter")

        var items = ["Accordion 1", "Accordion 2", "Accordion 3"]
        var texts = ["Description for item 1", "Description for item 2", "Description for item 3"];

        // Adds an accordion to the main layout
        this.acc = ui.addAccordion(this.main, items, "", 0.9)
        this.acc.setSecondaryText( texts )

        // Sets the background color
        this.acc.backColor = "#b2dfdb"

        // Sets the text-sizes
        this.acc.textSize1 = 18
        this.acc.textSize2 = 14

        // Sets the text colors
        this.acc.textColor1 = "#00695c"
        this.acc.textColor2 = "#009688"

        // Sets the corner radius
        this.acc.cornerRadius = 14

        // Sets the expand icon
        this.acc.expandIcon = "favorite"
    }
}
 */
    
            