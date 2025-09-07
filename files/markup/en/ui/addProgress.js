/** # Progress
 * @abbrev prg
 * A progress refers to the visual indication of a task's completion status.
 * @img(img1.png)
 * @jdocs It includes progress bars, spinners, or other elements that show the user the advancement of an operation. Add a progress into your app using the “addProgress” method like this:
 * $$ prg = ui.addProgress(parent, value, options, width, height) $$
 * @param {uio-Layout} parent The parent layout where to add the prgress component.
 * @param {Number} [value] the initial value of the progress component.
 * @param {String} [options] A comma separated options.\nTheme Color: “Primary”, “Secondary”\nType: “Circular”, “Linear”\nVariant: “Determinate”, “Indeterminate”
 * @param {Number} [width] Fraction of the parent width “[0-1]”.
 * @param {Number} [height] Fraction fo the parent height “[0-1]”.
 * @returns uio-Progress
 */


/**
 * If you pass a null value on initialization and you won't passed a variant option, the default variant will be “indeterminate”.
 * Otherwise if there's no variant option and the value is not null, it will automatically be a “determinate” variant.
 */


	/** ## Properties
	 * @jdocs Here are the available setters and getters for the Progress Component.
	 * @prop {Number} value Sets or returns the value of the progress control.
	 * @prop {String} type Sets or returns the type of the Progress Component. Values can be “Linear” or “Circular”
	 * @prop {String} variant Sets or returns the variant of the progress component. Values can be “Determinate” or “Indeterminate”.
	 * @prop {String} color Sets or returns the theme color. Values can be “Default” “Primary” or “Secondary”
	 * @prop {Number} circleSize Sets or returns the size of the circular progress control. This will assume a pixel unit.
	 * @prop {Number} thickness Sets or returns the thickness of the circular stroke.
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


	/** ## Methods
	 * @jdocs Here are the available methods for the Progress Component.
	 */


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


    /** @extern addClass */


    /** @extern setOnContextMenu */


/* --- parent_methods here ----- */


/* ## Examples */


/**
@sample Progress control implementation
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.childSpacing = "Even"

        // Indeterminate Linear
        this.prog1 = ui.addProgress(this.main, 40, "linear", 0.7)

        // Determinate Linear
        this.prog2 = ui.addProgress(this.main, null, "Linear,Secondary,indeterminate", 0.7)

        // Determinate Circular
        this.prog3 = ui.addProgress(this.main, 50, "Circular")

        // Indeterminate Circular, enlarge and secondary
        this.prog4 = ui.addProgress(this.main, null, "Circular,Secondary,indeterminate")
        this.prog4.circleSize = 100
    }
}
 */


/**
@sample Setting progress value
class Main extends App
{
    onStart()
    {
        // Creates a fullscreen layout with objects vertically centered.
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")
        this.main.childSpacing = "Even"

        // Add an indeterminate linear progress control to the main layout
        this.prog = ui.addProgress(this.main, 0, "Linear", 0.7)

        // Add a button control to the main layout
        this.btn = ui.addButton(this.main, "Increment")

        // Add a callback handler when the button is touched
        this.btn.setOnTouch( this.onTouch )
    }

    onTouch()
    {
        // Increment the value of the progress control by 10
        if( this.prog.value < 100 )
        {
            this.prog.value += 10
        }
        else
        {
            ui.showPopup( "Progress is complete!" )
        }
    }
}
 */


/**
@sample Python Progress control implementation
from hybrid import ui

def OnStart():
    #Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.childSpacing = "Even"

    #Indeterminate Linear
    prog1 = ui.addProgress(main, 40, "linear", 0.7)

    #Determinate Linear
    prog2 = ui.addProgress(main, None, "Linear,Secondary,indeterminate", 0.7)

    #Determinate Circular
    prog3 = ui.addProgress(main, 50, "Circular")

    #Indeterminate Circular, enlarge and secondary
    prog4 = ui.addProgress(main, None, "Circular,Secondary,indeterminate")
    prog4.circleSize = 100
 */


/**
@sample Python Setting progress value
from hybrid import ui

def OnStart():
    global prog
    
    #Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")
    main.childSpacing = "Even"

    #Add an indeterminate linear progress control to the main layout
    prog = ui.addProgress(main, 0, "Linear", 0.7)

    #Add a button control to the main layout
    btn = ui.addButton(main, "Increment")

    #Add a callback handler when the button is touched
    btn.setOnTouch( onTouch )

def onTouch( event ):
    global prog

    #Increment the value of the progress control by 10
    if prog.value < 100:
        prog.value += 10
    else:
        ui.showPopup( "Progress is complete!" )
 */


