/** # Progress
 * @abbrev prg
 * A progress refers to the visual indication of a task's completion status.
 * @img(img1.png)
 * @jdocs It includes progress bars, spinners, or other elements that show the user the advancement of an operation. Add a progress into your app using the `addProgress` method like this:
 * $$ prg = ui.addProgress(parent, value, options, width, height) $$
 * @param {uio-Layout} parent The parent layout where to add the prgress component.
 * @param {Number} [value] the initial value of the progress component.
 * @param {String} [options] A comma separated options.\nTheme Color: `Primary`, `Secondary`\nType: `Circular`, `Linear`\nVariant: `Determinate`, `Indeterminate`
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction fo the parent height `[0-1]`.
 * @returns uio-Progress
 */


/**
 * If you pass a null value on initialization and you won't passed a variant option, the default variant will be `indeterminate`.
 * Otherwise if there's no variant option and the value is not null, it will automatically be a `determinate` variant.
 */


	/** ## Properties
	 * Here are the available setters and getters for the Progress Component.
	 * @prop {Number} value Sets or returns the value of the progress control.
	 * @prop {String} type Sets or returns the type of the Progress Component. Values can be `Linear` or `Circular`
	 * @prop {String} variant Sets or returns the variant of the progress component. Values can be `Determinate` or `Indeterminate`.
	 * @prop {String} color Sets or returns the theme color. Values can be `Default` `Primary` or `Secondary`
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


    /** @extern elStyle */


	/** ## Methods
	 * Here are the available methods for the Progress Component.
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
@sample Python Basic Image
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

    # Add an image control to the main layout with a width of 7/10 of the parent width
    img = ui.addImage(main, image, "", 0.5)

    # Add callback handler for `onTouch` event on the image control
    img.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You touched the mango!")
 */


/**
@sample Python Avatar
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

    # Add an image control to the main layout.
    # Avatar option will ignore the width of the image control.
    img = ui.addImage(main, image, "Avatar")

    # Add callback handler for `onTouch` event on the image control
    img.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You touched the mango!")
 */


/**
@sample Python Button
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

    # Add an image control to the main layout.
    # `Button` option will add touch effect when image is click.
    img = ui.addImage(main, image, "Button", 0.5)

    # Add callback handler for `onTouch` event on the image control
    img.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You touched the mango!")
 */


/**
@sample Python Drawings
from hybrid import ui

def OnStart():
    # Creates a fullscreen layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # Add an image control into the main layout.
    # Pass canvas option to enable drawings on the image
    img = ui.addImage(main, "", "canvas", 1, 1)
    img.lineCap = "round"
    img.lineJoin = "round"

    # Draw a line from (130, 40) to (300, 500)
    img.drawLine(130, 40, 300, 500, "#009688", 10)

    # Draw a square from (320, 200) with a side of 200
    img.drawSquare(320, 200, 200, "#683ab7")

    # Draw a circle centered at (400, 300) with a radius of 300
    img.drawCircle(400, 300, 250, "#00000000", "", 20)

    # Draw an arc centered at (800, 200) with a radius of 100
    # from 40 degrees to 270 degrees
    img.drawArc(800, 200, 100, 40, 270, "#44009688", "#009688", 10)

    # Draw a polyline from the given set of points below.
    points = [
        [0, 0],
        [400, 40],
        [20, 40],
        [300, 340],
        [140, 500]
    ]
    img.lineCap = "square"
    img.lineJoin = "miter"
    img.drawPolyline(points, "blue", 10)
 */


/**
@sample Python Text and Shapes
from hybrid import ui

def OnStart():
    # create a main layout with object vertically centered
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    # add a canvas image
    img = ui.addImage(main, "", "canvas", "300px", "500px")

    # draw rectangle
    img.drawRectangle(0, 0, 300, 500, "#fff", "", 4)

    # draw polygon
    img.drawPolygon([
        {"x": 300, "y": 0},
        {"x": 300, "y": 500},
        {"x": 0, "y": 500}
    ])

    # draw text
    img.textSize = 100
    img.textWeight = "bold"
    img.fillColor = "white"
    img.drawText("Hello", 30, 225, "", "", 3)
    img.drawText("World", 10, 325, "", "", 3)
 */


/**
@sample Python Analog Clock
from hybrid import ui
import math

def OnStart():
    global img
    # Create a linear layout with objects vertically centered.
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    ui.addAppBar(main, "Analog Clock")

    # Create a canvas image
    img = ui.addImage(main, "", "canvas", "300px", "300px")

    # Set the initial line styles
    img.lineCap = "round"
    img.lineWidth = 4
    img.strokeColor = "#009688"
    img.lineJoin = "round"

    # Create a text to display the time
    time = ui.addText(main, "00:00:00", "h6,bold")
    time.setMargins(0, 0.05, 0, 0)

    # Call the draw function every second
    app.SetInterval(draw.bind(), 1000)

def draw():
    # Clear all the drawings first in the canvas
    img.clear()

    x, y, n = 0, 0, 0

    # Draw the 12 dot for every hour
    for n in range(1, 13):
        x = 130 * math.cos(n * (math.pi / 6))
        y = 130 * math.sin(n * (math.pi / 6))

        x += 150
        y += 150

        img.drawCircle(x, y, 4, "#311b92")

    date = new Date()

    # Get the hour, minutes and seconds
    hour = date.getHours() if date.getHours() <= 12 else date.getHours() - 12
    minutes = date.getMinutes()
 */


