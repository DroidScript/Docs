// ------------- HEADER SECTION ------------- 


/** # addSlider #
 * @abbrev sld
 * @brief addSlider
 * 
 * $$ sld = ui.addSlider(parent, value, options, width, height) $$ 
 * @param {obj} parent The layout where to add the Slider Component.
 * @param {num} value The initial value of the Slider. Value must be between 0
 * @param {str} options A comma separated options for the Slider Component. Options can be \n Color: `Primary` `Secondary` \n Orienation: `Horizontal` `Vertical` \n Track: `Normal` `Inverted` `False`
 * @param {num} width Fraction of the screen width. [0
 * @param {num} height Fraction of the screen height.
 * @returns obj-Slider Component.
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a Slider Component into your App.

 A Slider Component defines a control for selecting a number whose exact value must be within the range.

 Default range is 0 to 100. However, you can set restrictions on what numbers are accepted with the min, max, steps and even marks.

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addSlider Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#backcolor-20" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-25" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-30" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-35" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-40" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#color-45" data-transition="pop" data-rel="popup" class="ui-link">color </a></div><div class="samp"><a href="#cornerradius-50" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-55" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#fontfile-60" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-65" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#isvisible-70" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#left-75" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#margins-80" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#marks-85" data-transition="pop" data-rel="popup" class="ui-link">marks </a></div><div class="samp"><a href="#maxvalue-90" data-transition="pop" data-rel="popup" class="ui-link">maxValue </a></div><div class="samp"><a href="#minvalue-95" data-transition="pop" data-rel="popup" class="ui-link">minValue </a></div><div class="samp"><a href="#opacity-100" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-105" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#orientation-110" data-transition="pop" data-rel="popup" class="ui-link">orientation </a></div><div class="samp"><a href="#padding-115" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-120" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-125" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-130" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#step-135" data-transition="pop" data-rel="popup" class="ui-link">step </a></div><div class="samp"><a href="#textcolor-140" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-145" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#top-150" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#track-155" data-transition="pop" data-rel="popup" class="ui-link">track </a></div><div class="samp"><a href="#type-160" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#value-165" data-transition="pop" data-rel="popup" class="ui-link">value </a></div><div class="samp"><a href="#valuelabeldisplay-170" data-transition="pop" data-rel="popup" class="ui-link">valueLabelDisplay </a></div><div class="samp"><a href="#visibility-175" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-180" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="backcolor-20" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-30" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-35" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="color-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the theme color of the Slider. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Primary</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Secondary</span></p></div><div data-role="popup" id="cornerradius-50" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-55" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="fontfile-60" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-65" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="isvisible-70" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="left-75" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="margins-80" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="marks-85" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the marks on the Slider Component. The marks will be base on the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">step</span> property. To add a custom labels in each mark&#44; pass an array with an object element with properties <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">label<String></span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">value<Number></span>. See marks array example below.</p></div><div data-role="popup" id="maxvalue-90" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the maximum value.</p></div><div data-role="popup" id="minvalue-95" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the minimum value.</p></div><div data-role="popup" id="opacity-100" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-105" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="orientation-110" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the orientation of the Slider Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Vertical</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Horizontal</span></p></div><div data-role="popup" id="padding-115" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-120" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-125" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-130" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="step-135" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the Sider Component steps.</p></div><div data-role="popup" id="textcolor-140" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textsize-145" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="top-150" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="track-155" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the track properties of the Slider Component. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Normal</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">False</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Inverted</span></p></div><div data-role="popup" id="type-160" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="value-165" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the value of the Slider Component.</p></div><div data-role="popup" id="valuelabeldisplay-170" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the value label display type. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">on</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">auto</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">off</span>. If <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">on</span>&#44; value label will always be shown. If <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">auto</span>&#44; value label will be shown when sliding is active. If <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">false</span>&#44; value label display will not be shown.</p></div><div data-role="popup" id="visibility-175" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-180" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnChange ###
 * Sets a callback function when the value of the Slider Component changes *  * 
 * $$ sld.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["value "],"pTypes":["num-The value of the Slider component."]}
 */


/** ### setOnSelect ###
 * Sets a callback function when a final value is selected. This is equal to submit value event *  * 
 * $$ sld.setOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["value "],"pTypes":["num-The value of the Slider component."]}
 */


/** ### setRange ###
 * Sets a range value for the Slider Component *  * 
 * $$ sld.setRange(min, max) $$
 * @param {num} min Minimum value of the slider.
 * @param {num} max Maximum value of the slider.
 */


/** ### setMarks ###
 * Sets the marks of the Slider Component * If value is `Boolean` the marks is base on the step * If the value is `Array`, the elements must be an object of the form `{ label, value }` where `label` is a string and `value` is a number within the range *  * 
 * $$ sld.setMarks(val) $$
 * @param {obj} val The marks on the Slider Component.
 */


/** ### getMarks ###
 * Returns the step marks of the Slider Component. See `setMarks` methods for possible values *  * 
 * $$ sld.getMarks() $$
 * @returns bin
 */


/** ### setOnTouch ###
 * Adds a callback handler when the component is touch *  * 
 * $$ sld.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * Adds a callback function on right click *  * 
 * $$ sld.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * Animate the component *  * 
 * $$ sld.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * Sets the size of the component *  * 
 * $$ sld.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0
 * @param {num} height Fraction of the parent height. [0
 */


/** ### show ###
 * Show the component *  * 
 * $$ sld.show() $$
 */


/** ### hide ###
 * Hide the component *  * 
 * $$ sld.hide() $$
 */


/** ### gone ###
 * Destroy the component *  * 
 * $$ sld.gone() $$
 */


/** ### destroy ###
 * Destroy the component *  * 
 * $$ sld.destroy() $$
 */


/** ### setScale ###
 * Sets the x and y scaling of the component *  * 
 * $$ sld.setScale(x, y) $$
 * @param {num} x The x
 * @param {num} y The y
 */


/** ### getPosition ###
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom *  * 
 * $$ sld.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * Sets the margin of the component *  * 
 * $$ sld.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * Sets the padding component container *  * 
 * $$ sld.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0
 * @param {num} right Fraction of the component width. [0
 * @param {num} bottom Fraction of the component height. [0
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * Sets the position of the component relative to its parent dimensions *  * 
 * $$ sld.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0
 * @param {num} top Fraction of the screen height. [0
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * Sets the border line for the component container *  * 
 * $$ sld.setBorder(width, clr, style) $$
 * @param {num} width Border
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border
 */


/** ### setCornerRadius ###
 * Sets the corner radius of the component *  * 
 * $$ sld.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top
 * @param {num} tr Top
 * @param {num} bl Bottom
 * @param {num} br Bottom
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * Bring this component forward by a given z-index *  * 
 * $$ sld.bringForward(zIndex) $$
 * @param {num} zIndex The z
 */


/** ### sendBackward ###
 * Bring this component backward by a given z-index *  * 
 * $$ sld.sendBackward(zIndex) $$
 * @param {num} zIndex The z
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Marks array
var marks = [
        { label: "First stop", value: 10 },
        { label: "Second stop", value: 30 },
        { label: "Third stop", value: 70 }
    ]
 */
    
            
    
/**
@sample Basic slider
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a slider control to the main layout with an initial value of 10
        this.sld = ui.addSlider(this.main, 10, "", 0.7)

        // Add a callback handler when the value of the slider changes
        this.sld.setOnChange( this.onChange )

        // Create a popup where to display values
        this.popup = ui.showPopup( 10 )
    }

    onChange( value )
    {
        this.popup.text = value
        this.popup.show()
    }
}
 */
    
            
    
/**
@sample Slider steps and marks
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a slider control to the main layout with an initial value of 10
        this.sld = ui.addSlider(this.main, 10, "", 0.7)

        // Set the step to 10
        this.sld.step = 10

        // Add marks for every step
        this.sld.marks = true

        // Add a callback handler when the value of the slider changes
        this.sld.setOnSelect( this.onSelect )

        // Add a text control to show the selected value
        this.txt = ui.addText(this.main, "Value is 10")
    }

    onSelect( value )
    {
        this.txt.text = "Value is " + value
    }
}
 */
    
            
    
/**
@sample Slider with custom step marks
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a slider control to the main layout with an initial value of 10
        this.sld = ui.addSlider(this.main, 10, "Primary", 0.7)

        // Set the step to 10
        this.sld.step = 10

        // Add custom marks for values at 10, 40 and 60
        this.sld.marks = [
            { label: "First", value: 10 },
            { label: "Second", value: 40 },
            { label: "Third", value: 60 }
        ]

        // Add a callback handler when the value of the slider changes
        this.sld.setOnSelect( this.onSelect )

        // Add a text control to show the selected value
        this.txt = ui.addText(this.main, "Value is 10")
        this.txt.margins = 0.02
    }

    onSelect( value )
    {
        this.txt.text = "Value is " + value
    }
}
 */
    
            
    
/**
@sample Vertical slider
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Add a vertical slider control to the main layout
        this.sld = ui.addSlider(this.main, 10, "Vertical,Primary", 0.2, 0.7)

        // Add a callback handler when the value of the slider changes
        this.sld.setOnChange( this.onChange )

        // Create a popup where to display values
        this.popup = ui.showPopup( 10 )
    }

    onChange( value )
    {
        this.popup.text = value
        this.popup.show()
    }
}
 */
    
            