// ------------- HEADER SECTION -------------


/** # addProgress #
 * @abbrev prg
 * @brief addProgress
 * 
 * $$ prg = ui.addProgress(parent, value?, options?, width?, height?) $$ 
 * @param {obj} parent The parent layout where to add the prgress component.
 * @param {num} [value] the initial value of the progress component.
 * @param {str_com} [options] Color: `Primary` `Secondary` \n `Type`: `Circular` `Linear` \n `Variant`: `Determinate` `Indeterminate`
 * @param {num} [width] Fraction of the screen width. [0-1]
 * @param {num} [height] Fraction fo the screen height. [0-1]
 * @returns uio-Progress
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a progress component into your app.

 If you pass a null value on initialization and you won't passed a variant option, the default variant will be <col nobox #4c4>indeterminate</col>.

 Otherwise if there's no variant option and the value is not null, it will automatically be a <col nobox #4c4>determinate</col> variant.

### Properties
These are the setter and getter properties for the addProgress Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>circleSize:"num:'Sets or returns the size of the circular progress control. This will assume a pixel unit.'"</smp>
<smp noinl>color:"str:'Sets or returns the theme color. Values can be <col nobox #fb8c00>Default</col> <col nobox #fb8c00>Primary</col> or <col nobox #fb8c00>Secondary</col>'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the size of the text within the control.'"</smp>
<smp noinl>thickness:"num:'Sets or returns the thickness of the circular stroke.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Sets or returns the type of the Progress Component. Values can be <col nobox #fb8c00>Linear</col> or <col nobox #fb8c00>Circular</col>'"</smp>
<smp noinl>value:"num:'Sets or returns the value of the progress control.'"</smp>
<smp noinl>variant:"str:'Sets or returns the variant of the progress component. Values can be <col nobox #fb8c00>Determinate</col> or <col nobox #fb8c00>Indeterminate</col>.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


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
    
            