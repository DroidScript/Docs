// ------------- HEADER SECTION ------------- 


/** # addButton #
 * @abbrev btn
 * @brief addButton
 * 
 * $$ btn = ui.addButton(parent, text, options, width, height) $$ 
 * @param {obj} parent The layout where to add the button.
 * @param {str} text The button text or the material icon text.
 * @param {str} options A comma separated options. Can be one or a combination of the following: \n Variant: `Contained` `Outlined` `Text` `Default` \n Color: `Primary` `Secondary` `Default` \n Size: `Small` `Medium` `Large` \n Util: `Icon` `NoRipple` `Upload` \n In case of upload, you can specify `Multiple` to accept multiple files.
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 * @returns obj-Button Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a button control into your app.

 In case of <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Upload</span>, you can specify <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Multiple</span> to accept multiple files.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addButton Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#acceptedfiles-20" data-transition="pop" data-rel="popup" class="ui-link">acceptedFiles </a></div><div class="samp"><a href="#backcolor-25" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-30" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#badge-35" data-transition="pop" data-rel="popup" class="ui-link">badge </a></div><div class="samp"><a href="#badgecolor-40" data-transition="pop" data-rel="popup" class="ui-link">badgeColor </a></div><div class="samp"><a href="#border-45" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-50" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-55" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#color-60" data-transition="pop" data-rel="popup" class="ui-link">color </a></div><div class="samp"><a href="#cornerradius-65" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-70" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#fontfile-75" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-80" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#icon-85" data-transition="pop" data-rel="popup" class="ui-link">icon </a></div><div class="samp"><a href="#isvisible-90" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#left-95" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#margins-100" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-105" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-110" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#padding-115" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-120" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-125" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-130" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#sizevariant-135" data-transition="pop" data-rel="popup" class="ui-link">sizeVariant </a></div><div class="samp"><a href="#text-140" data-transition="pop" data-rel="popup" class="ui-link">text </a></div><div class="samp"><a href="#textcolor-145" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-150" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#tooltip-155" data-transition="pop" data-rel="popup" class="ui-link">toolTip </a></div><div class="samp"><a href="#tooltipposition-160" data-transition="pop" data-rel="popup" class="ui-link">toolTipPosition </a></div><div class="samp"><a href="#top-165" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-170" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#variant-175" data-transition="pop" data-rel="popup" class="ui-link">variant </a></div><div class="samp"><a href="#visibility-180" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-185" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="acceptedfiles-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the accepted files for an upload button.</p></div><div data-role="popup" id="backcolor-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-30" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="badge-35" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the badge content. You can pass a <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">string</span></p></div><div data-role="popup" id="badgecolor-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the badge. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span></p></div><div data-role="popup" id="border-45" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-50" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-55" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="color-60" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color of the button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Inherit</span></p></div><div data-role="popup" id="cornerradius-65" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius of the button.</p></div><div data-role="popup" id="disabled-70" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="fontfile-75" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-80" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="icon-85" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the material icon font use for the leading icon.</p></div><div data-role="popup" id="isvisible-90" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="left-95" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="margins-100" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-105" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-110" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="padding-115" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-120" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-125" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-130" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="sizevariant-135" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the size variant of the button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">small</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">medium</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">large</span></p></div><div data-role="popup" id="text-140" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the button text.</p></div><div data-role="popup" id="textcolor-145" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the text color in hexadecimal format.</p></div><div data-role="popup" id="textsize-150" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="tooltip-155" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the tooltip text.</p></div><div data-role="popup" id="tooltipposition-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the tooltip position. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span></p></div><div data-role="popup" id="top-165" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-170" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="variant-175" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the variant of the button. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Contained</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Text</span></p></div><div data-role="popup" id="visibility-180" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-185" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnFileSelect ###
 * @brief setOnFileSelect
 * Sets a callback on file select
 * $$ btn.setOnFileSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["files "],"pTypes":["lst-An array of file objects selected."]}
 */


/** ### setToolTip ###
 * @brief setToolTip
 * Sets a tooltip when the button is hovered
 * $$ btn.setToolTip(title, pos) $$
 * @param {str} title The text of the tooltip
 * @param {str} pos Position of the tooltip. \n Positions : `top` `left` `right` `bottom` `bottom-end` `bottom-start` `left-end` `left-start` `right-end` `right-start` `top-end` `top-start`
 */


/** ### setTextShadow ###
 * @brief setTextShadow
 * Sets a text-shadow to the button text
 * $$ btn.setTextShadow(radius, dx, dy, color) $$
 * @param {num} radius The radius in pixels
 * @param {num} dx The x-offset in pixels
 * @param {num} dy The y-offset in pixels
 * @param {str} color The color in hexadecimal `#rrggbb`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding of the button
 * $$ btn.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left The left padding in pixel.
 * @param {num} top The top padding in pixels,
 * @param {num} right The right padding in pixels.
 * @param {num} bottom The bottom padding in pixels.
 * @param {str} mode Can be `px` `%`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the button
 * $$ btn.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the component is touch
 * $$ btn.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ btn.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ btn.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ btn.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ btn.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ btn.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ btn.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ btn.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ btn.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ btn.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ btn.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ btn.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ btn.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ btn.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ btn.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Button variants
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins( 0.01, 0.01, 0.01, 0.01 )

        // Contained
        this.btn1 = ui.addButton( this.main, "Button", "Contained" )

        // Add a callback handler for onTouch event
        this.btn1.setOnTouch( this.onTouch )

        // Outlined
        this.btn2 = ui.addButton( this.main, "Button", "Outlined" )
        this.btn2.setOnTouch( this.onTouch )

        // Text
        this.btn3 = ui.addButton( this.main, "Button", "Text" )
        this.btn3.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "Button is touch!" )
    }
}
 */
    
            
    
/**
@sample Button theme colors
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Add primary button to the main layout
        this.btn1 = ui.addButton(this.main, "Primary", "Contained,Primary")

        // Add a callback handler for onTouch event
        this.btn1.setOnTouch( this.onTouch )

        // Add secondary button to the main layout
        this.btn2 = ui.addButton(this.main, "Secondary", "Outlined,Secondary")
        this.btn2.setOnTouch( this.onTouch )

        // Add default button to the main layout
        this.btn3 = ui.addButton(this.main, "Default", "Text,Default")
        this.btn3.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "Button is touch!" )
    }
}
 */
    
            
    
/**
@sample Button sizes
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Add a small size button to the main layout
        this.btn1 = ui.addButton(this.main, "Small", "Contained,Primary,Small")

        // Add a callback handler for onTouch event
        this.btn1.setOnTouch( this.onTouch )

        // Add a medium/default size button to the main layout
        this.btn2 = ui.addButton(this.main, "Medium", "Contained,Primary,Medium")

        // Add a large size button to the main layout
        this.btn3 = ui.addButton(this.main, "Large", "Contained,Primary,Large")
    }

    onTouch()
    {
        ui.showPopup( "Button is touch!" )
    }
}
 */
    
            
    
/**
@sample Button tooltips
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0, 0.05, 0, 0.05)

        // Add a button to the main layout
        // and add a tooltip to the left of the button
        this.btn1 = ui.addButton(this.main, "Left", "Contained,Primary")
        this.btn1.setToolTip("Tooltip on the left", "left")

        // Add a button to the main layout
        // and add a tooltip to the top of the button
        this.btn2 = ui.addButton(this.main, "Top", "Contained,Primary")
        this.btn2.setToolTip("Tooltip on the top", "top")

        // // Add a button to the main layout
        // and add a tooltip to the right of the button
        this.btn3 = ui.addButton(this.main, "Right", "Contained,Primary")
        this.btn3.setToolTip("Tooltip on the right", "right")

        // // Add a button to the main layout
        // and add a tooltip to the bottom of the button
        this.btn4 = ui.addButton(this.main, "Bottom", "Contained,Primary")
        this.btn4.setToolTip("Tooltip on the bottom", "bottom")
    }
}
 */
    
            
    
/**
@sample Button with icons
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered.
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )
        this.main.setChildMargins("12px", "12px", "12px", "12px")

        // Add a primary contained button and
        // set its leading icon to `send`
        this.btn1 = ui.addButton(this.main, "Send", "Primary")
        this.btn1.icon = "send"

        // Add a secondary contained button and
        // set its leading icon to `shopping_cart`
        this.btn2 = ui.addButton(this.main, "Add to cart", "Secondary")
        this.btn2.icon = "shopping_cart"

        // Add an `android` primary icon button to the main layout
        this.btn3 = ui.addButton(this.main, "android", "Primary,Icon")

        // Add a `settings` secondary icon button to the main layout
        this.btn4 = ui.addButton(this.main, "settings", "Secondary,Icon")
    }
}
 */
    
            
    
/**
@sample Buttons with badges
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)
        this.main.setChildMargins(0.01, 0.01, 0.01, 0.01)

        // Add an android icon button to the main layout
        this.btn1 = ui.addButton(this.main, "android", "Primary,Icon")

        // Add a setting icon button to the main layout and
        // set the badge to `5`
        this.btn2 = ui.addButton(this.main, "settings", "Primary,Icon")
        this.btn2.setBadge( 5 )

        // Add a contained button to the main layout and
        // set the badge to `New` with a `Primary` background color
        this.btn3 = ui.addButton(this.main, "With Badge", "Secondary,Outlined")
        this.btn3.setBadge("New", "Primary")
    }
}
 */
    
            
    
/**
@sample Upload button
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

        // Add a primary upload button with upload icon
        this.btn = ui.addButton(this.main, "Upload File", "Primary,Upload")
        this.btn.icon = "backup"

        // Add a callback handler for `onFileSelect` event
        this.btn.setOnFileSelect( this.onFileSelect )
    }

    onFileSelect( files )
    {
        // Get the first file and display its file name
        const file = files[ 0 ]
        ui.showPopup( `${file.name} is selected.` )
    }
}
 */
    
            