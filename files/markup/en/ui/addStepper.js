// ------------- HEADER SECTION ------------- 


/** # addStepper #
 * @abbrev stp
 * @brief addStepper
 * 
 * $$ stp = ui.addStepper(parent, steps, options, width, height) $$ 
 * @param {obj} parent The parent layout of the Stepper
 * @param {lst} steps An array of titles.
 * @param {str} options A comma separated Stepper options. Values can be `Vertical` `Horizontal` `Loop` `Mobile` or `AlternativeLabel`.
 * @param {num} width Fraction of the screen width. [0
 * @param {num} height Fraction of the screen height. [0
 * @returns obj-Stepper Component
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a Stepper to a given layout. A stepper can display a series of steps or information that a user can navigate forward or backward.

 For <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Mobile</span> option, an additional position options can be added <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Top</span>, <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Static</span> or <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Bottom</span> and <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">AutoSwipe</span> to enable auto swiping.

 To style step count text, pass <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Fraction</span>, <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Dots</span> or <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Progress</span> options.

 For <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">vertical</span> and <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">mobile</span>, you can add Layout type <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Linear</span> or <span style="color:#4c4; font-family:Courier, monospace; font-size:100%; padding:0px 2px;">Absolute</span>

<style>.samp { margin-top: 2px; } </style><h3>Properties</h3>These are the setter and getter properties for the addStepper Component.
<div class="samp"><a href="#absheight-0" data-transition="pop" data-rel="popup" class="ui-link">absHeight </a></div><div class="samp"><a href="#absleft-5" data-transition="pop" data-rel="popup" class="ui-link">absLeft </a></div><div class="samp"><a href="#abstop-10" data-transition="pop" data-rel="popup" class="ui-link">absTop </a></div><div class="samp"><a href="#abswidth-15" data-transition="pop" data-rel="popup" class="ui-link">absWidth </a></div><div class="samp"><a href="#activestep-20" data-transition="pop" data-rel="popup" class="ui-link">activeStep </a></div><div class="samp"><a href="#backcolor-25" data-transition="pop" data-rel="popup" class="ui-link">backColor </a></div><div class="samp"><a href="#backimage-30" data-transition="pop" data-rel="popup" class="ui-link">backImage </a></div><div class="samp"><a href="#border-35" data-transition="pop" data-rel="popup" class="ui-link">border </a></div><div class="samp"><a href="#bordercolor-40" data-transition="pop" data-rel="popup" class="ui-link">borderColor </a></div><div class="samp"><a href="#borderstyle-45" data-transition="pop" data-rel="popup" class="ui-link">borderStyle </a></div><div class="samp"><a href="#cornerradius-50" data-transition="pop" data-rel="popup" class="ui-link">cornerRadius </a></div><div class="samp"><a href="#disabled-55" data-transition="pop" data-rel="popup" class="ui-link">disabled </a></div><div class="samp"><a href="#elevation-60" data-transition="pop" data-rel="popup" class="ui-link">elevation </a></div><div class="samp"><a href="#fontfile-65" data-transition="pop" data-rel="popup" class="ui-link">fontFile </a></div><div class="samp"><a href="#height-70" data-transition="pop" data-rel="popup" class="ui-link">height </a></div><div class="samp"><a href="#isvisible-75" data-transition="pop" data-rel="popup" class="ui-link">isVisible </a></div><div class="samp"><a href="#left-80" data-transition="pop" data-rel="popup" class="ui-link">left </a></div><div class="samp"><a href="#margins-85" data-transition="pop" data-rel="popup" class="ui-link">margins </a></div><div class="samp"><a href="#opacity-90" data-transition="pop" data-rel="popup" class="ui-link">opacity </a></div><div class="samp"><a href="#options-95" data-transition="pop" data-rel="popup" class="ui-link">options </a></div><div class="samp"><a href="#orientation-100" data-transition="pop" data-rel="popup" class="ui-link">orientation </a></div><div class="samp"><a href="#padding-105" data-transition="pop" data-rel="popup" class="ui-link">padding </a></div><div class="samp"><a href="#parent-110" data-transition="pop" data-rel="popup" class="ui-link">parent </a></div><div class="samp"><a href="#position-115" data-transition="pop" data-rel="popup" class="ui-link">position </a></div><div class="samp"><a href="#rotation-120" data-transition="pop" data-rel="popup" class="ui-link">rotation </a></div><div class="samp"><a href="#textcolor-125" data-transition="pop" data-rel="popup" class="ui-link">textColor </a></div><div class="samp"><a href="#textsize-130" data-transition="pop" data-rel="popup" class="ui-link">textSize </a></div><div class="samp"><a href="#top-135" data-transition="pop" data-rel="popup" class="ui-link">top </a></div><div class="samp"><a href="#type-140" data-transition="pop" data-rel="popup" class="ui-link">type </a></div><div class="samp"><a href="#visibility-145" data-transition="pop" data-rel="popup" class="ui-link">visibility </a></div><div class="samp"><a href="#width-150" data-transition="pop" data-rel="popup" class="ui-link">width </a></div>
<div data-role="popup" id="absheight-0" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute height of the control in pixels.</p></div><div data-role="popup" id="absleft-5" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the left in pixels.</p></div><div data-role="popup" id="abstop-10" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute distance of the control from the top in pixels.</p></div><div data-role="popup" id="abswidth-15" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the absolute width of the control in pixels.</p></div><div data-role="popup" id="activestep-20" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the active step.</p></div><div data-role="popup" id="backcolor-25" class="ui-content"><p><span style="color:#4c4;">String</span><br>A hexadecimal color of the form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="backimage-30" class="ui-content"><p><span style="color:#4c4;">String</span><br>The path to your image file.</p></div><div data-role="popup" id="border-35" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the border thickness in pixels.</p></div><div data-role="popup" id="bordercolor-40" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border color. Color is in hexadecimal form <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">#rrggbb</span></p></div><div data-role="popup" id="borderstyle-45" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the border style. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dotted</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">dashed</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">double</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">groove</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">ridge</span>&#44; <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">inset</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">outset</span>. Default is <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">solid</span>.</p></div><div data-role="popup" id="cornerradius-50" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the corner radius in pixels.</p></div><div data-role="popup" id="disabled-55" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">disabled</span> state of the control.</p></div><div data-role="popup" id="elevation-60" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the elevation of the mobile stepper. Value ranges from <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">0</span> to <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">24</span>.</p></div><div data-role="popup" id="fontfile-65" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">relative</span> path to the font-family use.</p></div><div data-role="popup" id="height-70" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the height of the control as a fraction of the parent control.</p></div><div data-role="popup" id="isvisible-75" class="ui-content"><p><span style="color:#4c4;">Boolean</span><br>Returns whether the control is visible or not.</p></div><div data-role="popup" id="left-80" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the left.</p></div><div data-role="popup" id="margins-85" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the margin of the control. Works on controls with <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Linear</span> parent only. You can also pass a number to set equal margins for all sides.</p></div><div data-role="popup" id="opacity-90" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the opacity of the control.</p></div><div data-role="popup" id="options-95" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">options</span> of the control.</p></div><div data-role="popup" id="orientation-100" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the orientation of the Stepper. Values can be <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Horizontal</span> or <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">Vertical</span>.</p></div><div data-role="popup" id="padding-105" class="ui-content"><p><span style="color:#4c4;">Array</span><br>Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.</p></div><div data-role="popup" id="parent-110" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the parent layout control.</p></div><div data-role="popup" id="position-115" class="ui-content"><p><span style="color:#4c4;">Object</span><br>Returns the position of the control. The returned object has <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">left</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">top</span> <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">right</span> and <span style="color:#fb8c00; font-family:Courier&#44; monospace; font-size:100%; padding:0px 2px;">bottom</span> props.</p></div><div data-role="popup" id="rotation-120" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the angle of rotation in degrees.</p></div><div data-role="popup" id="textcolor-125" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the color of the text.</p></div><div data-role="popup" id="textsize-130" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the size of the text within the control.</p></div><div data-role="popup" id="top-135" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Returns the distance of the control from the top.</p></div><div data-role="popup" id="type-140" class="ui-content"><p><span style="color:#4c4;">String</span><br>Returns the type of the control.</p></div><div data-role="popup" id="visibility-145" class="ui-content"><p><span style="color:#4c4;">String</span><br>Sets or returns the visibility of the control.</p></div><div data-role="popup" id="width-150" class="ui-content"><p><span style="color:#4c4;">Number</span><br>Sets or returns the width of the control as a fraction of the parent control.</p></div>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnComplete ###
 * Adds a callback function to be called when the stepper is complete *  * 
 * $$ stp.setOnComplete(callback) $$
 * @param {} callback 
 */


/** ### setOnChange ###
 * Adds a callback function to be called when the stepper has changed step *  * 
 * $$ stp.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["index "],"pTypes":["num-The index of the active step."]}
 */


/** ### nextStep ###
 * Go to the next step *  * 
 * $$ stp.nextStep() $$
 */


/** ### previousStep ###
 * Go to the previous step *  * 
 * $$ stp.previousStep() $$
 */


/** ### getLayout ###
 * Returns the layout of the corresponding step layout where you can add controls *  * 
 * $$ stp.getLayout(index) $$
 * @param {num} index The index of the corresponing stepper layout
 * @returns obj-Layout
 */


/** ### getLayoutIndex ###
 * Get the index of the corresponding layout *  * 
 * $$ stp.getLayoutIndex(layout) $$
 * @param {obj} layout The layout to check.
 * @returns num
 */


/** ### removeStep ###
 * Removes a corresponding step by its index *  * 
 * $$ stp.removeStep(index) $$
 * @param {num} index The index of the step to remove.
 */


/** ### setTitleText ###
 * Sets a new title for the corresponding step by its index *  * 
 * $$ stp.setTitleText(index, title) $$
 * @param {num} index The index of the Stepper.
 * @param {str} title The new title text.
 */


/** ### setOnTouch ###
 * Adds a callback handler when the component is touch *  * 
 * $$ stp.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * Adds a callback function on right click *  * 
 * $$ stp.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * Animate the component *  * 
 * $$ stp.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * Sets the size of the component *  * 
 * $$ stp.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0
 * @param {num} height Fraction of the parent height. [0
 */


/** ### show ###
 * Show the component *  * 
 * $$ stp.show() $$
 */


/** ### hide ###
 * Hide the component *  * 
 * $$ stp.hide() $$
 */


/** ### gone ###
 * Destroy the component *  * 
 * $$ stp.gone() $$
 */


/** ### destroy ###
 * Destroy the component *  * 
 * $$ stp.destroy() $$
 */


/** ### setScale ###
 * Sets the x and y scaling of the component *  * 
 * $$ stp.setScale(x, y) $$
 * @param {num} x The x
 * @param {num} y The y
 */


/** ### getPosition ###
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom *  * 
 * $$ stp.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * Sets the margin of the component *  * 
 * $$ stp.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * Sets the padding component container *  * 
 * $$ stp.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0
 * @param {num} right Fraction of the component width. [0
 * @param {num} bottom Fraction of the component height. [0
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * Sets the position of the component relative to its parent dimensions *  * 
 * $$ stp.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0
 * @param {num} top Fraction of the screen height. [0
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * Sets the border line for the component container *  * 
 * $$ stp.setBorder(width, clr, style) $$
 * @param {num} width Border
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border
 */


/** ### setCornerRadius ###
 * Sets the corner radius of the component *  * 
 * $$ stp.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top
 * @param {num} tr Top
 * @param {num} bl Bottom
 * @param {num} br Bottom
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * Bring this component forward by a given z-index *  * 
 * $$ stp.bringForward(zIndex) $$
 * @param {num} zIndex The z
 */


/** ### sendBackward ###
 * Bring this component backward by a given z-index *  * 
 * $$ stp.sendBackward(zIndex) $$
 * @param {num} zIndex The z
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic stepper
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with object vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.setChildMargins(0, 0, 0, 0.02)

        // Initialize the steps array
        var steps = ["Step 1", "Step 2", "Step 3"]
        
        // Add a stepper component to the main layout
        this.stp = ui.addStepper(this.main, steps, "", 0.6)

        // Add back button control to the main layout
        this.btnBack = ui.addButton(this.main, "Back", "Raised,Primary")
        this.btnBack.setOnTouch( this.back )

        // Add next button control to the main layout
        this.btnNext = ui.addButton(this.main, "Next", "Raised,Primary")
        this.btnNext.setOnTouch( this.next )
    }

    next()
    {
        this.stp.nextStep()
    }

    back()
    {
        this.stp.previousStep()
    }
}
 */
    
            
    
/**
@sample Vertical stepper
class Main extends App
{
    onStart()
    {
        // Creates a fulscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        // Stepper titles
        var steps = ["Step 1", "Step 2", "Step 3"]

        // Add a stepper control into the main layout
        this.stp = ui.addStepper(this.main, steps, "Vertical", 0.5, 0.6)
        
        // Get the layout of the first step
        var step1Lay = this.stp.getLayout( 0 )
        step1Lay.setChildMargins(0, 0.005, 0, 0.005)

            // Add controls to the first step layout
            ui.addText(step1Lay, "This is a text content on step 1")
            var btnStep1Next = ui.addButton(step1Lay, "Next", "Raised,Primary")
            btnStep1Next.setOnTouch( this.next )

        // Get the layout of the second step
        var step2Lay = this.stp.getLayout( 1 )
        step2Lay.setChildMargins(0, 0.005, 0, 0.005)

            // Add controls to the second step layout
            ui.addText(step2Lay, "This is a text content on step 2")
            var btnStep2Next = ui.addButton(step2Lay, "Next", "Raised,Primary")
            btnStep2Next.setOnTouch( this.next )

        // Get the layout of the third step
        var step3Lay = this.stp.getLayout( 2 )
        step3Lay.setChildMargins(0, 0.005, 0, 0.005)

            // Add controls to the third step layout
            ui.addText(step3Lay, "This is a text content on step 3")
            var btnStep3Next = ui.addButton(step3Lay, "Next", "Raised,Primary")
            btnStep3Next.setOnTouch( this.next )
    }

    next()
    {
        this.stp.nextStep()
    }

    back()
    {
        this.stp.previousStep()
    }
}
 */
    
            
    
/**
@sample Mobile Stepper
class Main extends App
{
    onStart()
    {
        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var steps = ["Step 1", "Step 2", "Step 3"]

        var img1 = "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
        var img2 = "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
        var img3 = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"

        // Add stepper control with `mobile` option
        this.stp = ui.addStepper(this.main, steps, "mobile", 0.6, 0.7)

        // get the first layout on the stepper
        this.lay1 = this.stp.getLayout( 0 )

            // add an image control to the first layout
            ui.addImage(this.lay1, img1, "", 1, 1)
        
        // get the second layout on the stepper
        this.lay2 = this.stp.getLayout( 1 )

            // add an image control to the second layout
            ui.addImage(this.lay2, img2, "", 1, 1)
        
        // get the third layout on the stepper
        this.lay3 = this.stp.getLayout( 2 )

            // add an image control to the third layout
            ui.addImage(this.lay3, img3, "", 1, 1)

        // Add a callback handler when stepper layout changes
        this.stp.setOnChange( this.onChange )
    }

    onChange( index )
    {
        ui.showPopup( "Layout index " + index )
    }
}
 */
    
            
    
/**
@sample Autoswipe and Fraction Mobile Stepper
class Main extends App
{
    onStart()
    {
        ui.setTheme("dark")

        // Creates a layout with objects verticaly centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        var steps = ["Step 1", "Step 2", "Step 3"]

        var img1 = "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
        var img2 = "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
        var img3 = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"

        // Add stepper control with `mobile` option
        this.stp = ui.addStepper(this.main, steps, "mobile,autoswipe,fraction", 0.6)

        // Get the first layout on the stepper
        this.lay1 = this.stp.getLayout( 0 )

            // Add an image control to the first layout
            ui.addImage(this.lay1, img1, "", 1)
        
        // Get the second layout on the stepper
        this.lay2 = this.stp.getLayout( 1 )

            // Add an image control to the second layout
            ui.addImage(this.lay2, img2, "", 1)
        
        // Get the third layout on the stepper
        this.lay3 = this.stp.getLayout( 2 )

            // Add an image control to the third layout
            ui.addImage(this.lay3, img3, "", 1)

        // Add a callback handler when stepper layout changes
        this.stp.setOnChange( this.onChange )
    }

    onChange( index )
    {
        ui.showPopup( "Layout index " + index )
    }
}
 */
    
            