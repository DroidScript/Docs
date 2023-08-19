// ------------- HEADER SECTION ------------- 


/** # addTextField #
 * @abbrev tfd
 * @brief addTextField
 * 
 * $$ tfd = ui.addTextField(parent, text, options, width, height) $$ 
 * @param {obj} parent The layout where to add the TextField Component.
 * @param {str} text The initial value of the TextField
 * @param {str} options A comma separated options for the TextField Component. \n Color: `Primary` or `Secondary` \n Sizes: `Small` or `Medium` \n Type: `Text` `Password` `Email` `Search` `Number` `Date` `Time` or `DateTime` \n Variant: `Standard` `Filled` or `Outlined` \n Utils: `Autofocus`
 * @param {num} width Fraction of the screen width.
 * @param {num} height Fraction of the screen height.
 * @returns obj-TextField Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Add a textfield component into your app. Collect inputs from users. Inputs can be a number, text, emails, passwords and more. Just pass the corresponding type into

 the options arguments to get your desired type of TextField.

 If you want a materialize date and time pickers, see <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">DatePicker</span>, <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">TimePicker</span> or <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">DateTimePicker</span> components.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addTextField Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#autofocus-20" data-transition="pop" data-rel="popup" class="ui-link">autoFocus </a></div><div class="samp"><a href="#backcolor-25" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-30" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-35" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-40" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-45" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#color-50" data-transition="pop" data-rel="popup" class="ui-link">color </a></div><div class="samp"><a href="#cornerradius-55" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-60" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#endadornment-65" data-transition="pop" data-rel="popup" class="ui-link">endAdornment </a></div><div class="samp"><a href="#error-70" data-transition="pop" data-rel="popup" class="ui-link">error </a></div><div class="samp"><a href="#fontfile-75" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-80" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#helpertext-85" data-transition="pop" data-rel="popup" class="ui-link">helperText </a></div><div class="samp"><a href="#hint-90" data-transition="pop" data-rel="popup" class="ui-link">hint </a></div><div class="samp"><a href="#inputtype-95" data-transition="pop" data-rel="popup" class="ui-link">inputType </a></div><div class="samp"><a href="#isvisible-100" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#label-105" data-transition="pop" data-rel="popup" class="ui-link">label </a></div><div class="samp"><a href="#labelcolor-110" data-transition="pop" data-rel="popup" class="ui-link">labelColor </a></div><div class="samp"><a href="#left-115" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#margins-120" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#maxrows-125" data-transition="pop" data-rel="popup" class="ui-link">maxRows </a></div><div class="samp"><a href="#minrows-130" data-transition="pop" data-rel="popup" class="ui-link">minRows </a></div><div class="samp"><a href="#opacity-135" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-140" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#outlinecolor-145" data-transition="pop" data-rel="popup" class="ui-link">outlineColor </a></div><div class="samp"><a href="#padding-150" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-155" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#placeholder-160" data-transition="pop" data-rel="popup" class="ui-link">placeholder </a></div><div class="samp"><a href="#position-165" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#required-170" data-transition="pop" data-rel="popup" class="ui-link">required </a></div><div class="samp"><a href="#rotation-175" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#sizevariant-180" data-transition="pop" data-rel="popup" class="ui-link">sizeVariant </a></div><div class="samp"><a href="#startadornment-185" data-transition="pop" data-rel="popup" class="ui-link">startAdornment </a></div><div class="samp"><a href="#stepincrement-190" data-transition="pop" data-rel="popup" class="ui-link">stepIncrement </a></div><div class="samp"><a href="#text-195" data-transition="pop" data-rel="popup" class="ui-link">text </a></div><div class="samp"><a href="#textcolor-200" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-205" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#top-210" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-215" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#variant-220" data-transition="pop" data-rel="popup" class="ui-link">variant </a></div><div class="samp"><a href="#visibility-225" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-230" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="autofocus-20" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns a boolean value whethe the input is focus when rendered into the DOM.</p></div><div data-role="popup" id="backcolor-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-30" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-35" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="color-50" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color of the textfield component.</p></div><div data-role="popup" id="cornerradius-55" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-60" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="endadornment-65" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the end adornment text or icon.</p></div><div data-role="popup" id="error-70" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the error state of the TextField component.</p></div><div data-role="popup" id="fontfile-75" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-80" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="helpertext-85" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the helper text or the hint below the input.</p></div><div data-role="popup" id="hint-90" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the hint text. It's the same as the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">placeholder</span> property.</p></div><div data-role="popup" id="inputtype-95" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the input type. See <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">type</span> params for available values.</p></div><div data-role="popup" id="isvisible-100" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="label-105" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the label text.</p></div><div data-role="popup" id="labelcolor-110" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets return the label color in hexadecimal format <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="left-115" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="margins-120" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="maxrows-125" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the maximum rows for a <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">multiline</span> textfield.</p></div><div data-role="popup" id="minrows-130" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the minimum rows for a <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">multiline</span> textfield.</p></div><div data-role="popup" id="opacity-135" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-140" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="outlinecolor-145" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the outline color in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span> when the textfield is focus.</p></div><div data-role="popup" id="padding-150" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-155" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="placeholder-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the placeholder text.</p></div><div data-role="popup" id="position-165" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="required-170" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns a boolean value whether the text field in required or not.</p></div><div data-role="popup" id="rotation-175" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="sizevariant-180" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the size variant of the textfield. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Medium</span></p></div><div data-role="popup" id="startadornment-185" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the start adornment text or icon.</p></div><div data-role="popup" id="stepincrement-190" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the step increment if the input is of type number;</p></div><div data-role="popup" id="text-195" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the text value of the TextField Component.</p></div><div data-role="popup" id="textcolor-200" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textsize-205" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="top-210" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-215" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="variant-220" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the variant of the TextField. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Standard</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Filled</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span></p></div><div data-role="popup" id="visibility-225" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-230" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnEnter ###
 * Sets a callback function on `enter` or `submit` event *  * 
 * $$ tfd.setOnEnter(callback) $$
 * @param {fnc_json} callback {"pNames":["text "],"pTypes":["str-The text value of the input."]}
 */


/** ### setOnChange ###
 * Sets a callback function on `values changes` event *  * 
 * $$ tfd.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["text "],"pTypes":["str-The text value of the input."]}
 */


/** ### setOnFocus ###
 * Adds a callback function when the textfield is focus or blur *  * 
 * $$ tfd.setOnFocus(callback) $$
 * @param {fnc_json} callback {"pNames":["focus "],"pTypes":["bin-The focus state of the input component."]}
 */


/** ### setRows ###
 * Sets the minimum and maximum number of rows on a multiline type TextField *  * 
 * $$ tfd.setRows(min, max) $$
 * @param {num} min The minimum number of rows.
 * @param {num} max The maximum number of rows.
 */


/** ### setStartAdornment ###
 * Set a start adornment control into the TextField Component *  * 
 * $$ tfd.setStartAdornment(text, type) $$
 * @param {str} text Text or material icon font.
 * @param {str} type A comma separated options for start adornment control. Options can be \n `Icon` : If the adornment is an icon. \n `Touchable` : If the adornment is touchable.
 */


/** ### setStartAdornmentOnTouch ###
 * Add a callback handler when the start adornment control is touch *  * 
 * $$ tfd.setStartAdornmentOnTouch(callback) $$
 * @param {} callback 
 */


/** ### getStartAdornment ###
 * Returns the start adornment text *  * 
 * $$ tfd.getStartAdornment() $$
 * @returns str
 */


/** ### setEndAdornment ###
 * Add an end adornment control into the TextField Component *  * 
 * $$ tfd.setEndAdornment(text, type) $$
 * @param {str} text Text or material icon font.
 * @param {str} type A comma separated options for end adornment control. Options can be \n `Icon` : If the adornment is an icon. \n `Touchable` : If the adornment is touchable.
 */


/** ### setEndAdornmentOnTouch ###
 * Add a callback handler when the end adornment control is touch *  * 
 * $$ tfd.setEndAdornmentOnTouch(callback) $$
 * @param {} callback 
 */


/** ### getEndAdornment ###
 * Returns the end adornment text *  * 
 * $$ tfd.getEndAdornment() $$
 * @returns str
 */


/** ### setOnTouch ###
 * Adds a callback handler when the component is touch *  * 
 * $$ tfd.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * Adds a callback function on right click *  * 
 * $$ tfd.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * Animate the component *  * 
 * $$ tfd.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * Sets the size of the component *  * 
 * $$ tfd.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0
 * @param {num} height Fraction of the parent height. [0
 */


/** ### show ###
 * Show the component *  * 
 * $$ tfd.show() $$
 */


/** ### hide ###
 * Hide the component *  * 
 * $$ tfd.hide() $$
 */


/** ### gone ###
 * Destroy the component *  * 
 * $$ tfd.gone() $$
 */


/** ### destroy ###
 * Destroy the component *  * 
 * $$ tfd.destroy() $$
 */


/** ### setScale ###
 * Sets the x and y scaling of the component *  * 
 * $$ tfd.setScale(x, y) $$
 * @param {num} x The x
 * @param {num} y The y
 */


/** ### getPosition ###
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom *  * 
 * $$ tfd.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * Sets the margin of the component *  * 
 * $$ tfd.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * Sets the padding component container *  * 
 * $$ tfd.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0
 * @param {num} right Fraction of the component width. [0
 * @param {num} bottom Fraction of the component height. [0
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * Sets the position of the component relative to its parent dimensions *  * 
 * $$ tfd.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0
 * @param {num} top Fraction of the screen height. [0
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * Sets the border line for the component container *  * 
 * $$ tfd.setBorder(width, clr, style) $$
 * @param {num} width Border
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border
 */


/** ### setCornerRadius ###
 * Sets the corner radius of the component *  * 
 * $$ tfd.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top
 * @param {num} tr Top
 * @param {num} bl Bottom
 * @param {num} br Bottom
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * Bring this component forward by a given z-index *  * 
 * $$ tfd.bringForward(zIndex) $$
 * @param {num} zIndex The z
 */


/** ### sendBackward ###
 * Bring this component backward by a given z-index *  * 
 * $$ tfd.sendBackward(zIndex) $$
 * @param {num} zIndex The z
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Textfield variants
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 1, 0, 1, "rem")

        // Add a default textfield control to the main layout
        this.tfd1 = ui.addTextField( this.main )
        this.tfd1.label = "Enter text"

        // Handle textfield value changes
        this.tfd1.setOnChange( this.onChange )

        // Add a filled textfield control
        this.tfd2 = ui.addTextField(this.main, "", "Filled,Primary,Number")
        this.tfd2.label =  "Enter number"
        this.tfd2.setOnChange( this.onChange )

        // Add an outlined textfield control
        this.tfd3 = ui.addTextField(this.main, "", "Outlined,Secondary,Email")
        this.tfd3.label = "Enter email"
        this.tfd3.setOnChange( this.onChange )

        this.popup = ui.showPopup( "" )
        this.popup.hide()
    }

    onChange( value )
    {
        this.popup.text = value
        this.popup.show()
    }
}
 */
    
            
    
/**
@sample Callbacks
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.05)

        // Add a default textfield control to the main layout
        this.tfd = ui.addTextField(this.main, "", "Outlined,Secondary")
        this.tfd.label = "Enter text"

        // Add a callback handler when the value changes
        this.tfd.setOnChange( this.onChange )

        // Add a callback handler on submit event
        this.tfd.setOnEnter( this.onEnter )

        // Add a button control to the main layout that will get the value
        // of the textfield when clicked
        this.btn = ui.addButton(this.main, "Get value", "Outlined,Secondary")
        this.btn.setOnTouch( this.btn_onTouch )

        // Initialize a popup to display values
        this.popup = ui.showPopup( "" )
        this.popup.hide()
    }

    onChange( value )
    {
        this.popup.text = "Change : " + value
        this.popup.show()
    }

    onEnter( value )
    {
        this.popup.text = "Enter : " + value
        this.popup.show()
    }

    btn_onTouch()
    {
        this.popup.text = "Value : " + this.tfd.text
        this.popup.show()
    }
}
 */
    
            
    
/**
@sample Multiline textfield
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        
        // Add a text control to the main layout
        this.txt = ui.addText(this.main, "This is a multiline type of TextField input", "Left", 0.8)
        this.txt.setMargins(0, 0, 0, 0.05)

        // Add a Multiline textfield control to the main layout
        this.tfd = ui.addTextField(this.main, "", "Outlined,Secondary,Multiline", 0.8)
        this.tfd.label = "Enter description"
        this.tfd.setRows(3, 6)
    }
}
 */
    
            
    
/**
@sample Advance textfield
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,ScrollY,FillXY")
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Start and end adornment
        ui.addText(this.main,  "Click the eye icon to show password.", "Left", 0.7)
        this.tfd = ui.addTextField(this.main, "", "Outlined,Secondary,Password", 0.7)
        this.tfd.label = "Enter password"
        this.tfd.setStartAdornment("lock", "Icon")
        this.tfd.setEndAdornment("visibility_off", "Icon,Touchable")
        this.tfd.setEndAdornmentOnTouch( this.togglePasswordVisibility )

        // Start Adornment text
        ui.addText(this.main,  "Start text adornment", "Left,Overline", 0.7)
        this.tfd1 = ui.addTextField(this.main, "", "Outlined,Secondary,Number", 0.7)
        this.tfd1.label = "Enter mass" 
        this.tfd1.setStartAdornment("KG", "Text")

        // Start Adornment icon
        ui.addText(this.main,  "Start icon adornment", "Left,Overline", 0.7)
        this.tfd2 = ui.addTextField(this.main, "", "Outlined,Secondary", 0.7)
        this.tfd2.label = "Enter username"
        this.tfd2.setStartAdornment("person", "Icon")

        // End Adornment text
        ui.addText(this.main,  "End text adornment", "Left,Overline", 0.7)
        this.tfd3 = ui.addTextField(this.main, "", "Outlined,Secondary,Number", 0.7)
        this.tfd3.label = "Enter amount"
        this.tfd3.setEndAdornment("$", "Text")

        // End Adornment icon
        ui.addText(this.main,  "End icon adornment", "Left,Overline", 0.7)
        this.tfd4 = ui.addTextField(this.main, "", "Outlined,Secondary,Password", 0.7)
        this.tfd4.label = "Enter password"
        this.tfd4.setEndAdornment("lock", "Icon")
    }

    togglePasswordVisibility()
    {
        if(this.tfd.endAdornment == "visibility_off")
        {
            this.tfd.setEndAdornment("visibility_on", "icon,touchable")
            this.tfd.inputType = 'text'
        }
        else
        {
            this.tfd.setEndAdornment("visibility_off", "icon,touchable")
            this.tfd.inputType = 'password'
        }
    }
}
 */
    
            