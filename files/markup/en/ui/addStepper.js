/** # Stepper #
 * @abbrev stp
 * A Stepper in mobile UI design is a navigation element that guides users through a multi-step process, typically used for forms or sequential tasks.
 * @img(img1.png)
 * @img(img2.png)
 * @jdocs In Material Design, it provides clear indicators of progress and allows users to navigate forward and backward through steps, ensuring a structured and user-friendly experience in mobile applications. Add a stepper into your app using the `addStepper` method like this:
 * $$ stp = ui.addStepper(parent, steps, options, width, height) $$
 * @param {uio-Layout} parent The parent layout of the Stepper.
 * @param {Array} [steps] An array of titles.
 * @param {String} [options] A comma separated options.\n`Vertical`, `Horizontal`, `Loop`, `Mobile`, `AlternativeLabel`.
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-Stepper
 */


/**
 * For `Mobile` option, an additional position options can be added `Top`, `Static` or `Bottom` and `AutoSwipe` to enable auto swiping.
 * To style step count text, pass `Fraction`, `Dots` or `Progress` options.
 * For `vertical` and `mobile`, you can add Layout type `Linear` or `Absolute`
 */


	/** ## Properties ##
	 * Here are the available setters and getters of the Stepper Component.
	 * @prop {Number} activeStep Sets or returns the active step.
	 * @prop {String} orientation Sets or returns the orientation of the Stepper. Values can be `Horizontal` or `Vertical`.
     * @prop {Number} elevation Sets or returns the elevation of the mobile stepper. Value ranges from `0` to `24`.
	 */


    /** @extern width */


    /** @extern height */


    /** @extern opacity */


    /** @extern textSize */


    /** @extern textColor */


    /** @extern rotation */


    /** @extern fontFile */


    /** @extern visibility */


    /** @extern type */


    /** @extern absWidth */


    /** @extern absHeight */


    /** @extern backColor */


    /** @extern backImage */


    /** @extern isVisible */


    /** @extern top */


    /** @extern left */


    /** @extern absTop */


    /** @extern absLeft */


    /** @extern parent */


    /** @extern position */


    /** @extern margins */


    /** @extern padding */


    /** @extern options */


    /** @extern disabled */


    /** @extern border */


    /** @extern borderColor */


    /** @extern borderStyle */


    /** @extern cornerRadius */


    /** @extern el */


    /** @extern elStyle */


	/** ## Methods
	 * Here are the methods available for Stepper Component.
	 */


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


    /** ### setOnComplete
	 * Adds a callback function to be called when the stepper is complete. For mobile stepper, callback will be called upon showing the last step.
	 * $$ stp.setOnComplete( callback ) $$
	 * @param {Function} callback The function to be called
	 */


	/** ### setOnChange
	 * Adds a callback function to be called when the stepper has changed step.
	 * $$ stp.setOnChange( callback ) $$
	 * @param {Function} callback The callback function to be called. ---> @arg {Number} index The index of the active step.
	 */


	/** ### nextStep
	 * Go to the next step.
	 * $$ stp.nextStep() $$
	 */


	/** ### previousStep
	 * Go to the previous step.
	 * $$ stp.previousStep() $$
	 */


	/** ### getLayout
	 * Returns the layout of the corresponding step layout where you can add controls.
	 * $$ stp.getLayout( index ) $$
	 * @param {Number} index The index of the corresponing stepper layout
	 * @returns Object Layout
	 */


	/** ### getLayoutIndex
	 * Get the index of the corresponding layout.
	 * $$ stp.getLayoutIndex(layout) $$
	 * @param {Object} layout The layout to check.
	 * @returns Number
	 */


	/** ### removeStep
	 * Removes a corresponding step by its index.
	 * $$ stp.removeStep( index ) $$
	 * @param {Number} index The index of the step to remove.
	 */


    /** ### setTitleText
     * Sets a new title for the corresponding step by its index.
     * $$ stp.setTitleText(index, title) $$
     * @param {Number} index The index of the Stepper.
     * @param {String} title The new title text.
     */


/* --- parent_methods here ----- */


/* ## Examples */


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


