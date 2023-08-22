// ------------- HEADER SECTION ------------- 


/** # addButtonGroup #
 * @abbrev btg
 * @brief addButtonGroup
 * 
 * $$ btg = ui.addButtonGroup(parent, list, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the ButtonGroup
 * @param {lst} list The item to be displayed on the buttn group.
 * @param {str} options A comma separated options. Can be one or a combination of the following: \n Variant: `Contained` `Outlined` `Text` `Default` \n Color: `Primary` `Secondary` `Default` \n Size: `Small` `Medium` `Large` \n Orientation: `Horizontal` `Vertical` \n Util: `Icon` `NoElevation`
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 * @returns obj-ButtonGroup Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a button group into your app.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addButtonGroup Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#backcolor-20" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-25" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-30" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-35" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-40" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#color-45" data-transition="pop" data-rel="popup" class="ui-link">color </a></div><div class="samp"><a href="#cornerradius-50" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-55" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#fontfile-60" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-65" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#isvisible-70" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#left-75" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#list-80" data-transition="pop" data-rel="popup" class="ui-link">list </a></div><div class="samp"><a href="#margins-85" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-90" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-95" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#orientation-100" data-transition="pop" data-rel="popup" class="ui-link">orientation </a></div><div class="samp"><a href="#padding-105" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-110" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-115" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-120" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#sizevariant-125" data-transition="pop" data-rel="popup" class="ui-link">sizeVariant </a></div><div class="samp"><a href="#textcolor-130" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-135" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#tooltipposition-140" data-transition="pop" data-rel="popup" class="ui-link">toolTipPosition </a></div><div class="samp"><a href="#tooltips-145" data-transition="pop" data-rel="popup" class="ui-link">toolTips </a></div><div class="samp"><a href="#top-150" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-155" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#variant-160" data-transition="pop" data-rel="popup" class="ui-link">variant </a></div><div class="samp"><a href="#visibility-165" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-170" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="backcolor-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-30" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="color-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color of the button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span></p></div><div data-role="popup" id="cornerradius-50" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-55" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="fontfile-60" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-65" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="isvisible-70" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="left-75" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="list-80" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the list items of the button group.</p></div><div data-role="popup" id="margins-85" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-90" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-95" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="orientation-100" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the orientation of the button group. Can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">horizontal</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">vertical</span></p></div><div data-role="popup" id="padding-105" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-110" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-115" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-120" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="sizevariant-125" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the size variant. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">small</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">medium</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">large</span></p></div><div data-role="popup" id="textcolor-130" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the button text.</p></div><div data-role="popup" id="textsize-135" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the font size of the button text.</p></div><div data-role="popup" id="tooltipposition-140" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the position of the tooltip. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span></p></div><div data-role="popup" id="tooltips-145" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the list of tooltip titles.</p></div><div data-role="popup" id="top-150" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-155" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="variant-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the variant. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Contained</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Text</span></p></div><div data-role="popup" id="visibility-165" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-170" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the button is touch
 * $$ btg.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["text ","index ","event "],"pTypes":["str-The button text.","num-The index of the correspoding button.","obj-The pointer click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ btg.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["text ","index ","event "],"pTypes":["str-Button text.","num-The index of the corresponding button.","obj-The pointer event object."]}
 */


/** ### setList ###
 * @brief setList
 * Sets the new list of the button group
 * $$ btg.setList(items) $$
 * @param {str} items A comma separated list or an array
 */


/** ### setItemByIndex ###
 * @brief setItemByIndex
 * Sets a new text for the item in the button group
 * $$ btg.setItemByIndex(item, index) $$
 * @param {str} item The new text
 * @param {num} index The index of the item.
 */


/** ### addItem ###
 * @brief addItem
 * Adds an additional item in the button group
 * $$ btg.addItem(item) $$
 * @param {str} item The additional item.
 */


/** ### removeItemIndex ###
 * @brief removeItemIndex
 * Removes an item in the button group by its index
 * $$ btg.removeItemIndex(index) $$
 * @param {num} index The index of the item to be remove.
 */


/** ### removeItemByName ###
 * @brief removeItemByName
 * Removes an item in the button group by its name
 * $$ btg.removeItemByName(name) $$
 * @param {str} name The name of the item to be remove.
 */


/** ### popItem ###
 * @brief popItem
 * Removes the last item of the button group
 * $$ btg.popItem() $$
 */


/** ### shiftItem ###
 * @brief shiftItem
 * Removes the first item in the button group
 * $$ btg.shiftItem() $$
 */


/** ### setToolTip ###
 * @brief setToolTip
 * Adds a tooltip to the ButtonGroup items
 * $$ btg.setToolTip(titles, pos) $$
 * @param {lst} titles The titles for each item in the ButtonGroup.
 * @param {str} pos The positio of the tooltip. \n Can be `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
 */


/** ### enableElevation ###
 * @brief enableElevation
 * Enable of disable the elevation of the button group
 * $$ btg.enableElevation(enable) $$
 * @param {bin} enable Can be `true` or `false`
 */


/** ### setEnabled ###
 * @brief setEnabled
 * Enable or disable a button item in the button group
 * $$ btg.setEnabled(index, value) $$
 * @param {num} index The index of the button item.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabled ###
 * @brief getEnabled
 * Get the enabled state of the button item in the button group
 * $$ btg.getEnabled(index) $$
 * @param {num} index The index of the button item in the button group.
 * @returns bin
 */


/** ### setEnabledByName ###
 * @brief setEnabledByName
 * Enable or disable a button item by its name
 * $$ btg.setEnabledByName(name, value) $$
 * @param {str} name The button text.
 * @param {bin} value Values can be `true` or `false`.
 */


/** ### getEnabledByName ###
 * @brief getEnabledByName
 * Get the enabled state of button item in the button group
 * $$ btg.getEnabledByName(name) $$
 * @param {str} name The button text.
 * @returns bin
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ btg.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ btg.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ btg.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ btg.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ btg.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ btg.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ btg.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ btg.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ btg.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ btg.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ btg.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ btg.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the component
 * $$ btg.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ btg.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ btg.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic ButtonGroup
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add a ButtonGroup control to the main layout
        this.btg = ui.addButtonGroup(this.main, buttons, "", 0.9)

        // Add a callback handler for `onTouch` event
        this.btg.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */
    
            
    
/**
@sample ButtonGroup variants
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add a contained ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add an outlined ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Outlined,Primary", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add a text ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Text,Primary", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */
    
            
    
/**
@sample ButtonGroup colors
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add defualt ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Default", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add primary ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Primary", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add secondary ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Secondary", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */
    
            
    
/**
@sample ButtonGroup sizes
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["Button 1", "Button 2", "Button 3"]

        // Add small size ButtonGroup to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Small", 0.9)
        this.btg1.setOnTouch( this.onTouch )

        // Add medium/default size ButtonGroup to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Medium", 0.9)
        this.btg2.setOnTouch( this.onTouch )

        // Add large size ButtonGroup to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Large", 0.9)
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */
    
            
    
/**
@sample ButtonGroup icons
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Initialize button items
        var buttons = ["delete", "shopping_cart", "dashboard"]

        // Add small and primary contained ButtonGroup icons to the main layout
        this.btg1 = ui.addButtonGroup(this.main, buttons, "Contained,Primary,Small,Icon")
        this.btg1.setOnTouch( this.onTouch )

        // Add a medium and secondary outlined ButtonGroup icons to the main layout
        this.btg2 = ui.addButtonGroup(this.main, buttons, "Outlined,Secondary,Medium,Icon")
        this.btg2.setOnTouch( this.onTouch )

        // Add a large and default text ButtonGroup icons to the main layout
        this.btg3 = ui.addButtonGroup(this.main, buttons, "Text,Large,Icon")
        this.btg3.setOnTouch( this.onTouch )
    }

    onTouch(text, index)
    {
        // Display the touched button text
        ui.showPopup( text )
    }
}
 */
    
            