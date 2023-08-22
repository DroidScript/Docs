// ------------- HEADER SECTION ------------- 


/** # addChip #
 * @abbrev chp
 * @brief addChip
 * 
 * $$ chp = ui.addChip(parent, text, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the Chip.
 * @param {str} text The text on the chip.
 * @param {str} options A comma separated option. \n Color: `Primary` `Secondary` `Default` \n Size: `Small` `Medium` \n Variant: `Outlined` `Default` \n Util: `Touchable`
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns obj-Chip Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a chip into your app.

 If you want to change the height of the Chip later on after initializing, pass the <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">height</span> argument.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addChip Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#avatar-20" data-transition="pop" data-rel="popup" class="ui-link">avatar </a></div><div class="samp"><a href="#backcolor-25" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-30" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-35" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-40" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-45" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#color-50" data-transition="pop" data-rel="popup" class="ui-link">color </a></div><div class="samp"><a href="#cornerradius-55" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#deleteicon-60" data-transition="pop" data-rel="popup" class="ui-link">deleteIcon </a></div><div class="samp"><a href="#disabled-65" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#enabled-70" data-transition="pop" data-rel="popup" class="ui-link">enabled </a></div><div class="samp"><a href="#fontfile-75" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-80" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#icon-85" data-transition="pop" data-rel="popup" class="ui-link">icon </a></div><div class="samp"><a href="#iconcolor-90" data-transition="pop" data-rel="popup" class="ui-link">iconColor </a></div><div class="samp"><a href="#iconsize-95" data-transition="pop" data-rel="popup" class="ui-link">iconSize </a></div><div class="samp"><a href="#isvisible-100" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#left-105" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#margins-110" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-115" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-120" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#padding-125" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-130" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-135" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-140" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#sizevariant-145" data-transition="pop" data-rel="popup" class="ui-link">sizeVariant </a></div><div class="samp"><a href="#text-150" data-transition="pop" data-rel="popup" class="ui-link">text </a></div><div class="samp"><a href="#textcolor-155" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-160" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#top-165" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-170" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#variant-175" data-transition="pop" data-rel="popup" class="ui-link">variant </a></div><div class="samp"><a href="#visibility-180" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-185" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="avatar-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the avatar. Can be image or a single character.</p></div><div data-role="popup" id="backcolor-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-30" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-35" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="color-50" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color of the chip. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span></p></div><div data-role="popup" id="cornerradius-55" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="deleteicon-60" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the delete icon.</p></div><div data-role="popup" id="disabled-65" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="enabled-70" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the chip is enabled or disabled.</p></div><div data-role="popup" id="fontfile-75" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-80" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="icon-85" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the material icon font if icon is provided.</p></div><div data-role="popup" id="iconcolor-90" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the icon color in hexadecimal format.</p></div><div data-role="popup" id="iconsize-95" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the font-size of the icon in css font-size format. You can pass string values to be more specific such as <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">12px</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">1.5rem</span>.</p></div><div data-role="popup" id="isvisible-100" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="left-105" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="margins-110" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-115" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-120" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="padding-125" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-130" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-135" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-140" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="sizevariant-145" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the size variant. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">small</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">medium</span></p></div><div data-role="popup" id="text-150" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the text of the chip.</p></div><div data-role="popup" id="textcolor-155" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textsize-160" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="top-165" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-170" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="variant-175" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the variant of the chip. Vaues can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Default</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Outlined</span></p></div><div data-role="popup" id="visibility-180" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-185" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setTouchable ###
 * @brief setTouchable
 * Sets the chip to clickable. This will add a pointer cursor into the chip when hovered
 * $$ chp.setTouchable(touchable) $$
 * @param {bin} touchable Can be `true` or `false`
 */


/** ### setOnDelete ###
 * @brief setOnDelete
 * Sets a callback function when the chip is deleted. This will automatically add a delete icon to the chip
 * $$ chp.setOnDelete(callback) $$
 * @param {fnc_json} callback 
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the chip
 * $$ chp.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-left corner radius.
 * @param {num} tr Top-right corner radius.
 * @param {num} bl Bottom-left corner radius.
 * @param {num} br Bottom-right corner radius.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the component is touch
 * $$ chp.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ chp.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ chp.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ chp.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ chp.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ chp.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ chp.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ chp.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ chp.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ chp.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ chp.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ chp.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ chp.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ chp.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ chp.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ chp.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Chips
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0.025, 0, 0.025)

        // Add a default chip to the main layout
        this.chip1 = ui.addChip(this.main, "Basic Chip")

        // Add a callback handler for `onTouch` event.
        this.chip1.setOnTouch( this.onTouch )

        // Add a small primary chip
        this.chip2 = ui.addChip(this.main, "Small Primary Chip", "Primary,Small")
        this.chip2.setOnTouch( this.onTouch )

        // Add a touchable secondary chip
        this.chip3 = ui.addChip(this.main, "Secondary Chip", "Secondary,Touchable")
        this.chip2.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        ui.showPopup( "You touched the chip!" )
    }
}
 */
    
            
    
/**
@sample Deletable chip
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a touchable and deletable chip
        this.chip = ui.addChip(this.main, 'Deletable', 'Secondary,Touchable')

        // Add callback hanlder for `onDelete` event.
        // This will also add a delete icon to the chip.
        this.chip.setOnDelete( this.onDelete )
    }

    onDelete()
    {
        ui.showPopup( "Chip is deleted!" )
    }
}
 */
    
            
    
/**
@sample Custom styles
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a chip control to the main layout
        this.chip = ui.addChip(this.main, "Shopping Cart")

        // Add a leading icon to the chip control
        this.chip.icon = "shopping_cart"

        // Sets the icon color of the chip control
        this.chip.iconColor = "#673ab7"

        // Sets the text size of the chip control
        this.chip.textSize = 14
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
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a chip control to the main layout
        this.chip = ui.addChip(this.main, "Character Avatar")

        // Set the avatar property of the main layout
        this.chip.avatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"
    }
}
 */
    
            