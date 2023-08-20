// ------------- HEADER SECTION ------------- 


/** # addLayout #
 * @abbrev lay
 * @brief addLayout
 * 
 * $$ lay = ui.addLayout(parent, type, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add this component. Pass a string `main` for the main layout of your app.
 * @param {str} type The layout type. Values can be `Linear` `Absolute` `Frame` `Slide`
 * @param {str} options Layout options. Values can be \n Orientation:  `Horizontal` `Vertical` \n Horizontal Alignment: `Left` `Center` `Right` \n Vertical Alignment: `Top` `VCenter` `Bottom` \n Dimensions: `FillX` `FillY` \n Scroll: `ScrollX` `ScrollY` `ScrollXY` `NoScrollBar` \n Utils: `BackColor` to apply light or dark background rather than transparent.
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {obj} height Fraction of the screen height. [0-1]
 * @returns obj-Layout Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a layout into your app. A layout is the basic ui component of an app. It is where you add other ui components such as buttons, textfields, checkboxes, list, images and many more.

 To add a layout, simply call the <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">addLayout</span> method of the <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">ui</span> object.

 There are 4 types of layouts: <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Linear</span>, <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Absolute</span>, <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Frame</span>, and <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Slide</span>.

 Layouts are transparent by default but you can set a background color or a background image.

 You can add child objects to the Layout by passing the layout as parent when initializing a control.

 By default, Layouts will auto-size to wrap and fit their contents but you have 3 more options as to how layout sizes within it's parent: <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">FillXY</span>, <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">FillX</span>, and <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">FillY</span>.

 <h3>Linear Layouts</h3>

 Linear layouts are probably the most common type and are used to organize controls in the <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Vertical</span> or <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Horizontal</span> orientation on the screen.

 You can also pass alignment options. For vertical alignment you can pass <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Top</span>, <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">VCenter</span>, and <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Bottom</span>. For horizontal alignment you can pass <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Left</span>, <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Center</span>, and <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Right</span>. These will align your children accordingly.

 For children spacing, see <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">childSpacing</span> property below.

 <h3>Absolute Layouts</h3>

 Absolute layouts ignore all alignment options and allow the absolute positioning of controls by calling the <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">setPosition</span> method of each child control. However, you are encouraged to use linear layouts for most of your programs, unless it is absolutely necessary.

 <h3>Frame Layouts</h3>

 Frame layouts are used to display objects in front or behind each other. Everytime a child control is added, the new control is placed in a new layer in front of the previously added control at the top left of the frame. You can then use <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">setPosition</span> method of the child control to position it relative to the frame.

 <h3>Slide Layouts</h3>

 Slide layouts are used to display carousels or swipeable contents. The same as the Frame layout, this will add a new layer when a new control is added with a swipeable behaviour. You can pass alignment options to align your children within the Slide layout layer. Please note that <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Vertical</span> and <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Horizontal</span> options will be the direction of the swipe.

 If your parent layout is of type <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Slide</span>, do not add <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">setOnTouch</span> callback handler in order for the slide layout to work perfectly.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addLayout Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#alignment-20" data-transition="pop" data-rel="popup" class="ui-link">alignment </a></div><div class="samp"><a href="#backcolor-25" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-30" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-35" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-40" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-45" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#childmargins-50" data-transition="pop" data-rel="popup" class="ui-link">childMargins </a></div><div class="samp"><a href="#childspacing-55" data-transition="pop" data-rel="popup" class="ui-link">childSpacing </a></div><div class="samp"><a href="#cornerradius-60" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#currentslide-65" data-transition="pop" data-rel="popup" class="ui-link">currentSlide </a></div><div class="samp"><a href="#disabled-70" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#fontfile-75" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-80" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#isvisible-85" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#left-90" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#margins-95" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-100" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-105" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#orientation-110" data-transition="pop" data-rel="popup" class="ui-link">orientation </a></div><div class="samp"><a href="#padding-115" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-120" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-125" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-130" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#textcolor-135" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-140" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#top-145" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-150" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#verticalalignment-155" data-transition="pop" data-rel="popup" class="ui-link">verticalAlignment </a></div><div class="samp"><a href="#visibility-160" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-165" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="alignment-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the horizontal alignment of the control in a Linear Layout. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Center</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Right</span></p></div><div data-role="popup" id="backcolor-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-30" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-35" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="childmargins-50" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margins of child components. The array is of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">[left&#44; top&#44; right&#44; bottom]</span>.</p></div><div data-role="popup" id="childspacing-55" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the spacing of the child control in a Linear Layout. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Around</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Between</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Even</span></p></div><div data-role="popup" id="cornerradius-60" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="currentslide-65" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the index of the current slide.</p></div><div data-role="popup" id="disabled-70" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="fontfile-75" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-80" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="isvisible-85" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="left-90" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="margins-95" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-100" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-105" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="orientation-110" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the orientation of the controls in a Linear Layout. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Horizontal</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Vertical</span></p></div><div data-role="popup" id="padding-115" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-120" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-125" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-130" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="textcolor-135" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textsize-140" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="top-145" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-150" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="verticalalignment-155" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the vertical alignment of the controls in a Linear Layout. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">VCenter</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Bottom</span></p></div><div data-role="popup" id="visibility-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-165" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setChildMargins ###
 * Sets a default margins for the children of the layout component *  * 
 * $$ lay.setChildMargins(left, top, right, bottom, mode) $$
 * @param {num} left Left margin.
 * @param {num} top Top margin.
 * @param {num} right Right margin.
 * @param {num} bottom Bottom margin.
 * @param {str} mode Can be `px`. Default is a fraction of viewport.
 */


/** ### show ###
 * Makes the layout visible *  * 
 * $$ lay.show() $$
 */


/** ### goto ###
 * Transition to the given index *  * 
 * $$ lay.goto(index) $$
 * @param {num} index Index of a given layout.
 */


/** ### getCurrentSlide ###
 * Returns the index of the current Slide Layout *  * 
 * $$ lay.getCurrentSlide() $$
 * @returns num
 */


/** ### next ###
 * Transition to the next slide *  * 
 * $$ lay.next() $$
 */


/** ### previous ###
 * Transition to the previous slide *  * 
 * $$ lay.previous() $$
 */


/** ### getChildOrder ###
 * Returns the index of the child from the layout children stack in order *  * 
 * $$ lay.getChildOrder(child) $$
 * @param {obj} child The child component of the layout.
 * @returns num
 */


/** ### childToFront ###
 * Move the child to the front *  * 
 * $$ lay.childToFront(child) $$
 * @param {obj} child The child object of the layout.
 */


/** ### hasChild ###
 * Check whether a component is a child of this layout *  * 
 * $$ lay.hasChild(child) $$
 * @param {obj} child The child component to check.
 * @returns bin
 */


/** ### removeChild ###
 * Removes a child from this layout *  * 
 * $$ lay.removeChild(child) $$
 * @param {obj} child The child component to be remove.
 */


/** ### setOnTouch ###
 * Adds a callback handler when the component is touch *  * 
 * $$ lay.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * Adds a callback function on right click *  * 
 * $$ lay.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * Animate the component *  * 
 * $$ lay.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * Sets the size of the component *  * 
 * $$ lay.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### hide ###
 * Hide the component *  * 
 * $$ lay.hide() $$
 */


/** ### gone ###
 * Destroy the component *  * 
 * $$ lay.gone() $$
 */


/** ### destroy ###
 * Destroy the component *  * 
 * $$ lay.destroy() $$
 */


/** ### setScale ###
 * Sets the x and y scaling of the component *  * 
 * $$ lay.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom *  * 
 * $$ lay.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * Sets the margin of the component *  * 
 * $$ lay.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * Sets the padding component container *  * 
 * $$ lay.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * Sets the position of the component relative to its parent dimensions *  * 
 * $$ lay.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * Sets the border line for the component container *  * 
 * $$ lay.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * Sets the corner radius of the component *  * 
 * $$ lay.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * Bring this component forward by a given z-index *  * 
 * $$ lay.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * Bring this component backward by a given z-index *  * 
 * $$ lay.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Main layout
class Main extends App
{
    onStart()
    {
        // Create a fullscreen linear layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Add a callback hanlder when the layout is touched
        this.main.setOnTouch( this.onTouch )

        // Add a button control to the main layout
        this.btn = ui.addButton(this.main, "Button", "primary")

        // Add a callback handler when the button is touched
        this.btn.setOnTouch( this.btnTouch )
    }

    onTouch()
    {
        ui.showPopup( "You click the layout!" )
    }

    btnTouch()
    {
        if(this.main.backColor == "yellow")
        {
            this.main.backColor = "white"
        }  
        else
        {
            this.main.backColor = "yellow"
        }
    }
}
 */
    
            
    
/**
@sample Bottom aligned with margins
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen main layout with objects aligned at the bottom
        this.main = ui.addLayout("main", "Linear", "Bottom,FillXY")

        // Set margins for children controls
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Add buttons to the main layout
        this.btn1 = ui.addButton( this.main, "Button 1", "Primary" )
        this.btn2 = ui.addButton( this.main, "Button 2", "Secondary" )
        this.btn3 = ui.addButton( this.main, "Button 3", "Primary,Outlined" )
    }
}
 */
    
            
    
/**
@sample Orientation and spacing
class Main extends App
{
    onStart()
    {
        // Create a fullscreen main layout with objects centered horizontally
        this.main = ui.addLayout("main", "Linear", "VCenter,Horizontal", 1, 1)

        // Set the children spacing
        this.main.childSpacing = "even"

        // Add buttons to the main layout.
        this.btn1 = ui.addButton(this.main, "Button 1", "Primary")
        this.btn2 = ui.addButton(this.main, "Button 2", "Secondary")
        this.btn3 = ui.addButton(this.main, "Button 3", "Primary,Outlined")
    }
}
 */
    
            
    
/**
@sample Slide Layout
class Main extends App
{
    onStart()
    {
        // Create a fullscreen slide layout with objects vertically centered
        // You can pass `Vertical` option to make a vertical slide
        this.main = ui.addLayout( "main", "Slide", "VCenter,FillXY" )
        
        // Adds an onSlide event handler to the layout
        this.main.setOnSlide( this.onSlide )

        // Adds a yellow-colored Linear first layout to the slide
        var lay1 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay1.backColor = "yellow"
        ui.addText(lay1, "First Page")

        // Adds a green-colored Linear second layout to the slide
        var lay2 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay2.backColor = "green"
        ui.addText(lay2, "Second Page")

        // Adds a red-colored Linear third layout to the slide
        var lay3 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay3.backColor = "red"
        ui.addText(lay3, "Third Page")

        // Adds a blue-colored Linear fourth layout to the slide
        var lay4 = ui.addLayout(this.main, "Linear", "VCenter", 0.8, 0.5)
        lay4.backColor = "blue"
        ui.addText(lay4, "Fourth Page")

        ui.showPopup("Swipe horizontally", "Long");
    }

    onSlide( ctrl, index ) {
        ui.showPopup( index, "", 350 );
    }
}
 */
    
            