// ------------- HEADER SECTION ------------- 


/** # addImage #
 * @abbrev img
 * @brief addImage
 * 
 * $$ img = ui.addImage(parent, file, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the image.
 * @param {str} file The path to the image.
 * @param {str} options A comma seprated options for the image. Can be `Canvas` `Button` or `Avatar`
 * @param {num} width Fraction of the screen width.
 * @param {num} height Fraction of the screen height.
 * @returns obj-Image Component.
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds an image into your layout.

 Please note that a <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">canvas</span> image cannot switch to Button or Avatar in <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">setOptions</span> method.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addImage Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#backcolor-20" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-25" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-30" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-35" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-40" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#cornerradius-45" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-50" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#erroricon-55" data-transition="pop" data-rel="popup" class="ui-link">errorIcon </a></div><div class="samp"><a href="#file-60" data-transition="pop" data-rel="popup" class="ui-link">file </a></div><div class="samp"><a href="#fill-65" data-transition="pop" data-rel="popup" class="ui-link">fill </a></div><div class="samp"><a href="#fillcolor-70" data-transition="pop" data-rel="popup" class="ui-link">fillColor </a></div><div class="samp"><a href="#fontfile-75" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-80" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#isvisible-85" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#left-90" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#linecap-95" data-transition="pop" data-rel="popup" class="ui-link">lineCap </a></div><div class="samp"><a href="#linejoin-100" data-transition="pop" data-rel="popup" class="ui-link">lineJoin </a></div><div class="samp"><a href="#linewidth-105" data-transition="pop" data-rel="popup" class="ui-link">lineWidth </a></div><div class="samp"><a href="#margins-110" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#miterlimit-115" data-transition="pop" data-rel="popup" class="ui-link">miterLimit </a></div><div class="samp"><a href="#opacity-120" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-125" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#padding-130" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-135" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#pixeldata-140" data-transition="pop" data-rel="popup" class="ui-link">pixelData </a></div><div class="samp"><a href="#position-145" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-150" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#strokecolor-155" data-transition="pop" data-rel="popup" class="ui-link">strokeColor </a></div><div class="samp"><a href="#textcolor-160" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-165" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#textstyle-170" data-transition="pop" data-rel="popup" class="ui-link">textStyle </a></div><div class="samp"><a href="#top-175" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-180" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#visibility-185" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-190" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="backcolor-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-30" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="cornerradius-45" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-50" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="erroricon-55" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the material icon for error placeholder image.</p></div><div data-role="popup" id="file-60" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the path or url of the image file.</p></div><div data-role="popup" id="fill-65" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the background color of the canvas.</p></div><div data-role="popup" id="fillcolor-70" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the fill color used on close paths such as square&#44; circle&#44; rectangle or arcs.</p></div><div data-role="popup" id="fontfile-75" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-80" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="isvisible-85" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="left-90" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="linecap-95" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the style of the end caps for a line. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">square</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">round</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">butt</span></p></div><div data-role="popup" id="linejoin-100" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the type of corner created when two lines meet. Values <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bevel</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">round</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">miter</span></p></div><div data-role="popup" id="linewidth-105" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the current line thickness.</p></div><div data-role="popup" id="margins-110" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="miterlimit-115" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the maximum miter length.</p></div><div data-role="popup" id="opacity-120" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-125" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="padding-130" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-135" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="pixeldata-140" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Returns the pixel data of the image.</p></div><div data-role="popup" id="position-145" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-150" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="strokecolor-155" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the current color of the line or stroke.</p></div><div data-role="popup" id="textcolor-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textsize-165" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the text-size for drawing in the canvas.</p></div><div data-role="popup" id="textstyle-170" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the text-style for drawing in the canvas. Values are <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">normal</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">italic</span>.</p></div><div data-role="popup" id="top-175" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-180" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="visibility-185" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-190" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnLoad ###
 * Sets a callback function on load event *  * 
 * $$ img.setOnLoad(callback) $$
 * @param {} callback 
 */


/** ### enableContextMenu ###
 * Enable or disbale the context menu or the right click menus *  * 
 * $$ img.enableContextMenu(value) $$
 * @param {bin} value Value. Can be `true` `false`
 */


/** ### setImage ###
 * Update the image file *  * 
 * $$ img.setImage(file) $$
 * @param {str} file The path to the image file.
 */


/** ### getPixelColor ###
 * Get the pixel color of a single pixel in the image *  * 
 * $$ img.getPixelColor(x, y) $$
 * @param {num} x The x-coordinate of the pixel from the left.
 * @param {num} y The y-coordinate of the pixel from the top.
 * @returns lst
 */


/** ### getPixelData ###
 * Returns the pixel data of the image *  * 
 * $$ img.getPixelData() $$
 * @returns str
 */


/** ### drawLine ###
 * Draws a line between two points in the canvas *  * 
 * $$ img.drawLine(x1, y1, x2, y2, strokeColor, strokeWidth) $$
 * @param {num} x1 The x-coordinate of the starting point in pixels.
 * @param {num} y1 The y-coordinate of the starting point in pixels
 * @param {num} x2 The x-coordinate of the second point in pixels.
 * @param {num} y2 The y-coordinate of the second point in pixels.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness.
 */


/** ### drawCircle ###
 * Draws a circle in the canvas *  * 
 * $$ img.drawCircle(x, y, radius, fillColor, strokeColor, strokeWidth) $$
 * @param {num} x The x-coordinate of the center of the circle in pixels.
 * @param {num} y The y-coordinate of the center of the circle in pixels.
 * @param {num} radius The radius of the circle in pixels.
 * @param {str} fillColor A hexadecimal color.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stoke thickness.
 */


/** ### drawSquare ###
 * Draws a square into the canvas *  * 
 * $$ img.drawSquare(x, y, width, fillColor, strokeColor, strokeWidth) $$
 * @param {num} x The position from the left of the top-left corner of the square in pixels.
 * @param {num} y The distance from the top of the top-left corner of the square in pixels.
 * @param {num} width The width of the square in pixels.
 * @param {str} fillColor A hexadecimal color.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness in pixels.
 */


/** ### drawRectangle ###
 * Draws a rectangle into the canvas *  * 
 * $$ img.drawRectangle(x1, y1, width, height, fillColor, strokeColor, strokeWidth) $$
 * @param {num} x1 The distance from the left of the top-left corner of the rectangle in pixels.
 * @param {num} y1 The distance from the top of the top-left corner of the rectangle in pixels.
 * @param {num} width The width of the rectangle in pixels.
 * @param {num} height The height of the rectangle in pixels.
 * @param {str} fillColor A hexadecimal color.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness.
 */


/** ### drawArc ###
 * Draws an arc in the canvas *  * 
 * $$ img.drawArc(x, y, radius, start, end, fillColor, strokeColor, strokeWidth) $$
 * @param {num} x The x-coordinate of the center of the arc in pixels.
 * @param {num} y The y-coordinate of the center of the arc in pixels.
 * @param {num} radius The radius of the arc in pixels.
 * @param {num} start The starting angle in degress
 * @param {num} end The angle in degress in which the arc will stop.
 * @param {str} fillColor A hexadecimal color.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness.
 */


/** ### drawImage ###
 * Draws an image to the canvas *  * 
 * $$ img.drawImage(img, x, y, width, height) $$
 * @param {str} img Path to image file.
 * @param {num} x The distance from the left of the top-left corner of the image in pixels.
 * @param {num} y The distance from the top of the top-left corner of the image in pixels.
 * @param {num} width If provided, the image will be shrink or stretch to fill this width in pixels.
 * @param {num} height If provided, the height of the image will be shrink or stretch to fill this height in pixels.
 */


/** ### clear ###
 * Clears the drawings by filling the whole canvas with white background color *  * 
 * $$ img.clear() $$
 */


/** ### drawPolyline ###
 * Draws a polyline on the canvas by passing an array of points *  * 
 * $$ img.drawPolyline(points, strokeColor, strokeWidth) $$
 * @param {lst} points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness.
 */


/** ### drawPolygon ###
 * Draws a polygon on the canvas by passing an array of points *  * 
 * $$ img.drawPolygon(points, fillColor, strokeColor, strokeWidth) $$
 * @param {lst} points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
 * @param {str} fillColor A hexadecimal color.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness.
 */


/** ### drawPoint ###
 * Draws a single pixel point in a specified coordinate *  * 
 * $$ img.drawPoint(x, y, color) $$
 * @param {num} x The x-coordinate in pixels.
 * @param {num} y The y-coordinate in pixels.
 * @param {str} color A hexadecimal color.
 */


/** ### setOnTouchMove ###
 * Sets a callback function when the a mouse move event is triggered *  * 
 * $$ img.setOnTouchMove(callback) $$
 * @param {} callback 
 */


/** ### setOnTouch ###
 * Adds a callback handler when the component is touch *  * 
 * $$ img.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * Adds a callback function on right click *  * 
 * $$ img.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * Animate the component *  * 
 * $$ img.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * Sets the size of the component *  * 
 * $$ img.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * Show the component *  * 
 * $$ img.show() $$
 */


/** ### hide ###
 * Hide the component *  * 
 * $$ img.hide() $$
 */


/** ### gone ###
 * Destroy the component *  * 
 * $$ img.gone() $$
 */


/** ### destroy ###
 * Destroy the component *  * 
 * $$ img.destroy() $$
 */


/** ### setScale ###
 * Sets the x and y scaling of the component *  * 
 * $$ img.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom *  * 
 * $$ img.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * Sets the margin of the component *  * 
 * $$ img.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * Sets the padding component container *  * 
 * $$ img.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * Sets the position of the component relative to its parent dimensions *  * 
 * $$ img.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * Sets the border line for the component container *  * 
 * $$ img.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * Sets the corner radius of the component *  * 
 * $$ img.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * Bring this component forward by a given z-index *  * 
 * $$ img.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * Bring this component backward by a given z-index *  * 
 * $$ img.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic Image
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        var image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

        // Add an image control to the main layout with a width of 7/10 of the parent width
        this.img = ui.addImage(this.main, image, "", 0.5)

        // Add callback handler for `onTouch` event on the image control
        this.img.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You touched the mango!" ) 
    }
}
 */
    
            
    
/**
@sample Avatar
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        var image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

        // Add an image control to the main layout.
        // Avatar option will ignore the width of the image control.
        this.img = ui.addImage(this.main, image, "Avatar")

        // Add callback handler for `onTouch` event on the image control
        this.img.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You touched the mango!" )
    }
}
 */
    
            
    
/**
@sample Button
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter,FillXY")

        var image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

        // Add an image control to the main layout.
        // `Button` option will add touch effect when image is click.
        this.img = ui.addImage(this.main, image, "Button", 0.5)

        // Add callback handler for `onTouch` event on the image control
        this.img.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You touched the mango!" )
    }
}
 */
    
            
    
/**
@sample Drawings
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        // Add an image control into the main layout.
        // Pass canvas option to enable drawings on the image
        this.img = ui.addImage( this.main, "", "canvas", 1, 1 )
        this.img.lineCap = "round"
        this.img.lineJoin = "round"

        // Draw a line from (130, 40) to (300, 500)
        this.img.drawLine( 130, 40, 300, 500, "#009688", 10)

        // Draw a square from (320, 200) with a side of 200
        this.img.drawSquare( 320, 200, 200, "#683ab7")

        // Draw a circle centered at (400, 300) with a radius of 300
        this.img.drawCircle(400, 300, 250, "#00000000", "", 20)

        // Draw an arc centered at (800, 200) with a radius of 100
        // from 40 degrees to 270 degrees
        this.img.drawArc(800, 200, 100, 40, 270, "#44009688", "#009688", 10)

        // Draw a polyline from the given set of points below.
        var points = [
            [0,0],
            [400,40],
            [20, 40],
            [300, 340],
            [140, 500]
        ]
        this.img.lineCap = "square"
        this.img.lineJoin = "miter"
        this.img.drawPolyline( points, "blue", 10 )
    }
}
 */
    
            
    
/**
@sample Text and Shapes
class Main extends App
{
    onStart()
    {
        // create a main layout with object vertically centered
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 );

        // add a canvas image
        this.img = ui.addImage( this.main, "", "canvas", "300px", "500px");

        // draw rectangle
        this.img.drawRectangle(0, 0, 300, 500, "#fff", "", 4);

        // draw polygon
        this.img.drawPolygon([
            {x: 300, y: 0},
            {x: 300, y: 500},
            {x: 0, y: 500}
        ]);

        // draw text
        this.img.textSize = 100;
        this.img.textWeight = "bold";
        this.img.fillColor = "white";
        this.img.drawText("Hello", 30, 225, "", "", 3);
        this.img.drawText("World", 10, 325, "", "", 3);
    }
}
 */
    
            
    
/**
@sample Analog Clock
class Main extends App
{
    onStart()
    {
        // Create a linear layout with objects vertically centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        ui.addAppBar( this.main, "Analog Clock" )

        // Create a canvas image
        this.img = ui.addImage( this.main, "", "canvas", "300px", "300px" )

        // Set the initial line styles
        this.img.lineCap = "round"
        this.img.lineWidth = 4
        this.img.strokeColor = "#009688"
        this.img.lineJoin = "round"

        // Create a text to display the time
        this.time = ui.addText(this.main, "00:00:00", "h6,bold")
        this.time.setMargins(0, 0.05, 0, 0)

        // Call the draw function every second
        setInterval( this.draw.bind(this), 1000)
    }

    draw()
    {
        // Clear all the drawings first in the canvas
        this.img.clear()

        let x, y, n

        // Draw the 12 dot for every hour
        for( n=1; n<=12; n++ ) {
            x = 130 * Math.cos( n * (Math.PI/6) )
            y = 130 * Math.sin( n * (Math.PI/6) )

            x += 150
            y += 150

            this.img.drawCircle(x, y, 4, "#311b92")
        }

        var date = new Date()

        // Get the hour, minutes and seconds
        var hour = date.getHours() > 12 ? date.getHours()-12 : date.getHours();
        var minutes = date.getMinutes()
        var seconds = date.getSeconds()

        // Calculate the corresponding angles
        var hourAngle = hour * ( Math.PI / 6) - ( Math.PI/2 )
        var minAngle = minutes * ( Math.PI / 30 ) - ( Math.PI/2 )
        var secAngle = seconds * ( Math.PI / 30 ) - ( Math.PI/2 )

        // Draw each hand by calling the drawHand function
        this.drawHand(hourAngle, 80, 7, "#311b92")
        this.drawHand(minAngle, 100, 4, "#1e88e5")
        this.drawHand(secAngle, 110, 2, "#d81b60")

        // Draw the black cirlce in the center
        this.img.drawCircle(150, 150, 8, "#000")

        // Display the time
        this.time.text = (`${hour}`.padStart(2, '0')) + ":"+
            (`${minutes}`.padStart(2, '0'))+":" +
            (`${seconds}`.padStart(2, '0')) + (date.getHours() > 12 ? " PM" : " AM")
    }

    drawHand( angle, length, width, color )
    {
        var x, y

        x = length * Math.cos( angle )
        y = length * Math.sin( angle )

        x += 150
        y += 150

        // Draw the hand
        this.img.drawLine(150, 150, x, y, color, width )
    }
}
 */
    
            
    
/**
@sample Scratch Pad
class Main extends App
    {
        onStart()
        {
            this.color = "#000000"
            this.main = ui.addLayout( "main", "Linear", "Top", 1, 1 );
            this.main.setChildMargins(0, 0.01, 0, 0.01);

            var lay = ui.addLayout( this.main, "Linear", "Horizontal,Center,VCenter", 1)
            lay.setChildMargins(0.01, 0, 0.01, 0);

            var colors = ["#009688", "#673ab7", "#e53935", "#1e88e5"]

            ui.addText( lay, "Color", "H5");
            for( var i=0; i<colors.length; i++ ) {
                var btn = ui.addLayout( lay, "Linear", "", "48px", "48px" )
                btn.backColor = colors[i];
                btn.setCornerRadius(8,8,8,8);
                btn.setOnTouch( this.changeColor.bind(this, colors[i]) );
            }

            ui.addText( this.main, "Thickness", "H5")
            this.sld = ui.addSlider( this.main, 5, "", 0.9)
            this.sld.setRange(5, 25);
            this.sld.value = 15;

            this.img = ui.addImage( this.main, "", "canvas", 0.96, 0.7);
            this.img.fill = "#e0e0e0";
            this.img.setOnTouchMove( this.draw );
            this.img.setOnTouchDown( this.draw );
            this.img.setOnTouch( this.draw );
        }

        changeColor( color ) { this.color = color; }

        draw( e ) {
            this.img.drawCircle( e.x, e.y, this.sld.value, this.color, "", 0 )
        }
    }
 */
    
            