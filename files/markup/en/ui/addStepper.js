// ------------- HEADER SECTION -------------


/** # addStepper #
 * @abbrev stp
 * @brief addStepper
 * 
 * $$ stp = ui.addStepper(parent, steps, options, width, height) $$ 
 * @param {obj} parent The parent layout of the Stepper
 * @param {lst} steps An array of titles.
 * @param {str} options A comma separated Stepper options. Values can be `Vertical` `Horizontal` `Loop` `Mobile` or `AlternativeLabel`.
 * @param {num} width Fraction of the screen width. [0-1]
 * @param {num} height Fraction of the screen height. [0-1]
 * @returns uio-Stepper
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a Stepper to a given layout. A stepper can display a series of steps or information that a user can navigate forward or backward.

 For <col nobox #4c4>Mobile</col> option, an additional position options can be added <col nobox #4c4>Top</col>, <col nobox #4c4>Static</col> or <col nobox #4c4>Bottom</col> and <col nobox #4c4>AutoSwipe</col> to enable auto swiping.

 To style step count text, pass <col nobox #4c4>Fraction</col>, <col nobox #4c4>Dots</col> or <col nobox #4c4>Progress</col> options.

 For <col nobox #4c4>vertical</col> and <col nobox #4c4>mobile</col>, you can add Layout type <col nobox #4c4>Linear</col> or <col nobox #4c4>Absolute</col>

### Properties
These are the setter and getter properties for the addStepper Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>activeStep:"num:'Sets or returns the active step.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>elevation:"num:'Sets or returns the elevation of the mobile stepper. Value ranges from <col nobox #fb8c00>0</col> to <col nobox #fb8c00>24</col>.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>orientation:"str:'Sets or returns the orientation of the Stepper. Values can be <col nobox #fb8c00>Horizontal</col> or <col nobox #fb8c00>Vertical</col>.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnComplete ###
 * @brief setOnComplete
 * Adds a callback function to be called when the stepper is complete
 * $$ stp.setOnComplete(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### setOnChange ###
 * @brief setOnChange
 * Adds a callback function to be called when the stepper has changed step
 * $$ stp.setOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["index"],"pTypes":["num-The index of the active step."]}
 */


/** ### nextStep ###
 * @brief nextStep
 * Go to the next step
 * $$ stp.nextStep() $$
 */


/** ### previousStep ###
 * @brief previousStep
 * Go to the previous step
 * $$ stp.previousStep() $$
 */


/** ### getLayout ###
 * @brief getLayout
 * Returns the layout of the corresponding step layout where you can add controls
 * $$ stp.getLayout(index) $$
 * @param {num} index The index of the corresponing stepper layout
 * @returns uio-addLayout
 */


/** ### getLayoutIndex ###
 * @brief getLayoutIndex
 * Get the index of the corresponding layout
 * $$ stp.getLayoutIndex(layout) $$
 * @param {obj} layout The layout to check.
 * @returns num
 */


/** ### removeStep ###
 * @brief removeStep
 * Removes a corresponding step by its index
 * $$ stp.removeStep(index) $$
 * @param {num} index The index of the step to remove.
 */


/** ### setTitleText ###
 * @brief setTitleText
 * Sets a new title for the corresponding step by its index
 * $$ stp.setTitleText(index, title) $$
 * @param {num} index The index of the Stepper.
 * @param {str} title The new title text.
 */


/** @extern setOnTouch */

/** @extern setOnContextMenu */

/** @extern animate */

/** @extern setSize */

/** @extern show */

/** @extern hide */

/** @extern gone */

/** @extern destroy */

/** @extern setScale */

/** @extern getPosition */

/** @extern setMargins */

/** @extern setPadding */

/** @extern setPosition */

/** @extern setBorder */

/** @extern setCornerRadius */

/** @extern bringForward */

/** @extern sendBackward */


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
    
            
    
/**
@sample Python Progress control implementation
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.childSpacing = "Even"

    # Indeterminate Linear
    prog1 = ui.addProgress(main, 40, "linear", 0.7)

    # Determinate Linear
    prog2 = ui.addProgress(main, None, "Linear,Secondary,indeterminate", 0.7)

    # Determinate Circular
    prog3 = ui.addProgress(main, 50, "Circular")

    # Indeterminate Circular, enlarge and secondary
    prog4 = ui.addProgress(main, None, "Circular,Secondary,indeterminate")
    prog4.circleSize = 100
 */
    
            
    
/**
@sample Python Setting progress value
from hybrid import ui

def OnStart():
    global prog
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.childSpacing = "Even"

    # Add an indeterminate linear progress control to the main layout
    prog = ui.addProgress(main, 0, "Linear", 0.7)

    # Add a button control to the main layout
    btn = ui.addButton(main, "Increment")

    # Add a callback handler when the button is touched
    btn.setOnTouch(onTouch)

def onTouch(event):
    # Increment the value of the progress control by 10
    if prog.value < 100:
        prog.value += 10
    else:
        ui.showPopup("Progress is complete!")
 */
    
            
    
/**
@sample Python Basic stepper
from hybrid import ui

def OnStart():
    global stp
    # Creates a fullscreen layout with object vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.setChildMargins(0, 0, 0, 0.02)

    # Initialize the steps array
    steps = ["Step 1", "Step 2", "Step 3"]

    # Add a stepper component to the main layout
    stp = ui.addStepper(main, steps, "", 0.6)

    # Add back button control to the main layout
    btnBack = ui.addButton(main, "Back", "Raised,Primary")
    btnBack.setOnTouch(back)

    # Add next button control to the main layout
    btnNext = ui.addButton(main, "Next", "Raised,Primary")
    btnNext.setOnTouch(next)

def next(event):
    stp.nextStep()

def back(event):
    stp.previousStep()
 */
    
            
    
/**
@sample Python Vertical stepper
from hybrid import ui

def OnStart():
    global stp
    # Creates a fulscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Stepper titles
    steps = ["Step 1", "Step 2", "Step 3"]

    # Add a stepper control into the main layout
    stp = ui.addStepper(main, steps, "Vertical", 0.5, 0.6)

    # Get the layout of the first step
    step1Lay = stp.getLayout(0)
    step1Lay.setChildMargins(0, 0.005, 0, 0.005)

    # Add controls to the first step layout
    ui.addText(step1Lay, "This is a text content on step 1")
    btnStep1Next = ui.addButton(step1Lay, "Next", "Raised,Primary")
    btnStep1Next.setOnTouch(next)

    # Get the layout of the second step
    step2Lay = stp.getLayout(1)
    step2Lay.setChildMargins(0, 0.005, 0, 0.005)

    # Add controls to the second step layout
    ui.addText(step2Lay, "This is a text content on step 2")
    btnStep2Next = ui.addButton(step2Lay, "Next", "Raised,Primary")
    btnStep2Next.setOnTouch(next)

    # Get the layout of the third step
    step3Lay = stp.getLayout(2)
    step3Lay.setChildMargins(0, 0.005, 0, 0.005)

    # Add controls to the third step layout
    ui.addText(step3Lay, "This is a text content on step 3")
    btnStep3Next = ui.addButton(step3Lay, "Next", "Raised,Primary")
    btnStep3Next.setOnTouch(next)

def next(event):
    stp.nextStep()

def back():
    stp.previousStep()
 */
    
            
    
/**
@sample Python Mobile Stepper
from hybrid import ui

def OnStart():
    # Creates a layout with objects verticaly centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    steps = ["Step 1", "Step 2", "Step 3"]

    img1 = "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
    img2 = "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
    img3 = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"

    # Add stepper control with `mobile` option
    stp = ui.addStepper(main, steps, "mobile", 0.6, 0.7)

    # get the first layout on the stepper
    lay1 = stp.getLayout(0)

    # add an image control to the first layout
    ui.addImage(lay1, img1, "", 1, 1)

    # get the second layout on the stepper
    lay2 = stp.getLayout(1)

    # add an image control to the second layout
    ui.addImage(lay2, img2, "", 1, 1)

    # get the third layout on the stepper
    lay3 = stp.getLayout(2)

    # add an image control to the third layout
    ui.addImage(lay3, img3, "", 1, 1)

    # Add a callback handler when stepper layout changes
    stp.setOnChange(onChange)

def onChange(index):
    ui.showPopup("Layout index " + str(index))
 */
    
            
    
/**
@sample Python Autoswipe and Fraction Mobile Stepper
from hybrid import ui

def OnStart():
    ui.setTheme("dark")

    # Creates a layout with objects verticaly centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    steps = ["Step 1", "Step 2", "Step 3"]

    img1 = "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"
    img2 = "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"
    img3 = "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"

    # Add stepper control with `mobile` option
    stp = ui.addStepper(main, steps, "mobile,autoswipe,fraction", 0.6)

    # Get the first layout on the stepper
    lay1 = stp.getLayout(0)

    # Add an image control to the first layout
    ui.addImage(lay1, img1, "", 1)

    # Get the second layout on the stepper
    lay2 = stp.getLayout(1)

    # Add an image control to the second layout
    ui.addImage(lay2, img2, "", 1)

    # Get the third layout on the stepper
    lay3
 */
    
            