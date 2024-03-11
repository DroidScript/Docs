/** # Image
 * @abbrev img
 * Adds an image into your layout.
 * @jdocs Images serve to visually enhance applications, displaying graphics or photos. Add an image into your app using the `addImage` method like this:
 * $$ img = ui.addImage(parent, file, options, width, height)  $$
 * @param {uio-Layout} parent The parent layout where to add the image.
 * @param {String} file The path to the image.
 * @param {String} [options='Image'] A comma seprated options.\n`Image`, `Canvas`, `Button` and `Avatar`. Default is image. \nFor `Avatar` you can pass `Small` or `Large`.
 * @param {Number} [width] Fraction of the parent width `[0-1]`.
 * @param {Number} [height] Fraction of the parent height `[0-1]`.
 * @returns uio-Image
 */


/**
 * Please note that a `canvas` image cannot switch to Button or Avatar in `setOptions` method.
 */


	/** ## Properties
	 * Here are the available setters and getters for the Image Component.
	 * @prop {Array} pixelData Returns the pixel data of the image.
	 * @prop {String} fillColor Sets or returns the fill color used on close paths such as square, circle, rectangle or arcs.
	 * @prop {String} image Sets or returns the path or url of the image file.
	 * @prop {Number} lineWidth Sets or returns the current line thickness.
	 * @prop {String} lineCap Sets or returns the style of the end caps for a line. Values can be `square` `round` `butt`
	 * @prop {String} lineJoin Sets or returns the type of corner created when two lines meet. Values `bevel` `round` `miter`
	 * @prop {Number} miterLimit Sets or returns the maximum miter length.
	 * @prop {String} strokeColor Sets or returns the current color of the line or stroke.
	 * @prop {String} fill Sets or returns the background color of the canvas.
     * @prop {String} textStyle Sets or returns the text-style for drawing in the canvas. Values are `normal` and `italic`.
     * @prop {Number} textSize Sets or returns the text-size for drawing in the canvas.
     * @prop {String} errorIcon Sets or returns the material icon for error placeholder image.
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
	 * Here are the available methods of the Image Component.
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


	/** ### enableContextMenu
	 * Enable or disbale the context menu or the right click menus.
	 * $$ img.enableContextMenu( value ) $$
	 * @param {Boolean} value Value. Can be `true` `false`
	 */


	/** ### getPixelColor
	 * Get the color of a single pixel in the image. The returned array is of the form `[red, green, blue, alpha]`.
	 * $$ img.getPixelColor( x, y ) $$
	 * @param {Number} x The x-coordinate of the pixel from the left.
	 * @param {Number} y The y-coordinate of the pixel from the top.
     * @param {String} format Pass `"hex"` to return color as hexadecimal formart `"#rrggbb"` or `"hexa"` to include include alpha `"#aarrggbb"` . Pass `"rgb"` to return color as `rgb` format `"rgb(r, g, b)"` or pass `"rgba"` for `"rgba(r, g, b, a)"`.
	 * @returns Array
	 */


    /** ### setPixelColor
     * Sets the color of a specific pixel in the canvas.
     * @param {Number} x The x-coordinate of the pixel.
     * @param {Number} y The y-coordinate of the pixel.
     * @param {String} color A hexadecimal color format of the form `"#rrggbb"` or a comma separated rgb color of the form `"r,g,b"`.
     */


	/** ### getPixelData
	 * Returns the pixel data of the image.
	 * $$ img.getPixelData() $$
     * @param {Number} x The x-coordinate where to start getting image data.
     * @param {Number} y The y-coordinate where to start getting image data.
     * @param {Number} width The width of the image data.
     * @param {Number} height The height of the image data.
	 * @returns Object
	 */


    /** ### setPixelData
     * Set the pixel data of the canvas.
     * @param {String} base64 Base64 encoded string of the image or the `ImageData` object of the canvas.
     * @param {Number} x The x-coordinate of the top-left corner.
     * @param {Number} y The y-coordinate of the top-left corner.
     * @param {Number} width The width of the new image data.
     * @param {Number} height The height of the new image data.
     */


    /** ### setFont
     * Sets a single line font styling for rendering text on canvas.
     * @param {String} family The font-family for the text.
     * @param {Number} size The text-size for the text.
     * @param {String} style Value can be `normal` or `italic`,
     * @param {String} weight Values can be `normal` or `bold`.
     */


	/** ### drawLine
	 * Draws a line between two points in the canvas.
	 * $$ img.drawLine(x1, y1, x2, y2, strokeColor, strokeWidth ) $$
	 * @param {Number} x1 The x-coordinate of the starting point in pixels.
	 * @param {Number} y1 The y-coordinate of the starting point in pixels
	 * @param {Number} x2 The x-coordinate of the second point in pixels.
	 * @param {Number} y2 The y-coordinate of the second point in pixels.
	 * @param {String} [strokeColor] A hexadecimal color.
	 * @param {Number} [strokeWidth] The stroke thickness.
	 * @@ This works only when a `canvas` option is pass.
	 */


	/** ### drawCircle
	 * Draws a circle in the canvas.
	 * $$ img.drawCircle(x, y, radius, fillColor, strokeColor, strokeWidth ) $$
	 * @param {Number} x The x-coordinate of the center of the circle in pixels.
	 * @param {Number} y The y-coordinate of the center of the circle in pixels.
	 * @param {Number} radius The radius of the circle in pixels.
	 * @param {String} [fillColor] A hexadecimal color.
	 * @param {String} [strokeColor] A hexadecimal color.
	 * @param {Number} [strokeWidth] The stoke thickness.
	 * @@ This works only when a `canvas` option is pass. @@
	 */


	/** ### drawSquare
	 * Draws a square into the canvas.
	 * $$ img.drawSquare(x, y, width, fillColor, strokeColor, strokeWidth) $$
	 * @param {Number} x The position from the left of the top-left corner of the square in pixels.
	 * @param {Number} y The distance from the top of the top-left corner of the square in pixels.
	 * @param {Number} width The width of the square in pixels.
	 * @param {String} [fillColor] A hexadecimal color.
	 * @param {String} [strokeColor] A hexadecimal color.
	 * @param {Number} [strokeWidth] The stroke thickness in pixels.
	 * @@ This works only when a `canvas` option is pass. @@
	 */


	/** ### drawRectangle
	 * Draws a rectangle into the canvas.
	 * $$ img.drawRectangle(x1, y1, width, height, fillColor, strokeColor, strokeWidth) $$
	 * @param {Number} x1 The distance from the left of the top-left corner of the rectangle in pixels.
	 * @param {Number} y1 The distance from the top of the top-left corner of the rectangle in pixels.
	 * @param {Number} width The width of the rectangle in pixels.
	 * @param {Number} height The height of the rectangle in pixels.
	 * @param {String} [fillColor] A hexadecimal color.
	 * @param {String} [strokeColor] A hexadecimal color.
	 * @param {Number} [strokeWidth] The stroke thickness.
	 * @@ This works only when a `canvas` option is pass. @@
	 */


	/** ### drawArc
	 * Draws an arc in the canvas.
	 * $$ img.drawArc(x, y, radius, start, end, fillColor, strokeColor, strokeWidth) $$
	 * @param {Number} x The x-coordinate of the center of the arc in pixels.
	 * @param {Number} y The y-coordinate of the center of the arc in pixels.
	 * @param {Number} radius The radius of the arc in pixels.
	 * @param {Number} start The starting angle in degress
	 * @param {Number} end The angle in degress in which the arc will stop.
	 * @param {String} [fillColor] A hexadecimal color.
	 * @param {String} [strokeColor] A hexadecimal color.
	 * @param {Number} [strokeWidth] The stroke thickness.
     * @param {String} type The type of arc. Can be `filled` or `segment`.
	 * @@ This works only when a `canvas` option is pass.
	 */


    /** ### drawPolyline
	 * Draws a polyline on the canvas by passing an array of points.
	 * @param {Array} points An array of coordinates. Each element on this array is an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point, or an object of the form `{x, y}`.
	 * @param {String} [strokeColor] A hexadecimal color.
	 * @param {Number} [strokeWidth] The stroke thickness.
	 */


	/** ### drawPolygon
	 * Draws a polygon on the canvas by passing an array of points.
	 * @param {Array} points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point, or an object of the form `{x, y}`.
	 * @param {String} [fillColor] A hexadecimal color.
	 * @param {String} [strokeColor] A hexadecimal color.
	 * @param {Number} [strokeWidth] The stroke thickness.
	 */


	/** ### drawPoint
	 * Draws a single pixel point in a specified coordinate.
	 * $$ img.drawPoint(x, y, color) $$
	 * @param {Number} x The x-coordinate in pixels.
	 * @param {Number} y The y-coordinate in pixels.
     * @paramm {Number} size The width of point in pixels.
	 * @param {String} [color] A hexadecimal color.
	 */


    /** ### drawText
     * Add a text in the canvas image.
     * $$ img.drawText(text, x, y, fillColor, strokeColor, strokeWidth) $$
     * @param {String} text The text to be drawn.
     * @param {Number} x Distance from the left in pixels.
     * @param {Number} y Distance from the top in pixels.
     * @param {String} fillColor Text color in hexadecimal format `#rrggbb`.
     * @param {String} strokeColor Text border color in hexadecimal format `#rrggbb`.
     * @param {Number} strokeWidth The border width in pixels.
     */


	/** ### drawImage
	 * Draws an image to the canvas.
	 * $$ drawImage( img, x, y, width, height) $$
	 * @param {String} img Path to image file.
	 * @param {Number} [x] The distance from the left of the top-left corner of the image in pixels.
	 * @param {Number} [y] The distance from the top of the top-left corner of the image in pixels.
	 * @param {Number} [width] If provided, the image will be shrink or stretch to fill this width in pixels.
	 * @param {Number} [height] If provided, the height of the image will be shrink or stretch to fill this height in pixels.
	 * @@ This works only when a `canvas` option is pass. @@
	 */


	/** ### clear
	 * Clears the drawings by filling the whole canvas with white background color.
	 * $$ img.clear() $$
	 */


    /** ### translateOrigin
     * Translate the origin of the canvas at a new coordinate with the given angle of rotation.
     * $$ img.translateOrigin(x, y, angle) $$
     * @param {Number} x The new x-coordinate of the origin.
     * @param {Number} y The new y-coordinate of the origin.
     * @param {Number} angle The angle of rotation in degrees.
     */


    /** ### rotate
     * Rotate the canvas at a given angle and pivot point.
     * $$ img.rotate(angle, x, y) $$
     * @param {Number} angle The angle of rotation in degrees.
     * @param {Number} x An optional x-coordinate of the pivot.
     * @param {Number} y An optional y-coordinate of the pivot.
     */


    /** ### measureText
     * Measure the text metrics with the current settings of the canvas context.
     * $$ img.measureText( text ) $$
     * @param {String} text The text to measure.
     * @returns Object
     */


    /** ### setOnTouchDown
     * Add a callback function on touch down event.
     * $$ img.setOnTouchDown( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */


    /** ### setOnTouchUp
     * Add a callback function on touch up event.
     * $$ img.setOnTouchUp( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */


    /** ### setOnTouch
	 * Sets a callback function when the image component is touch.
	 * $$ img.setOnTouch( callback ) $$
	 * @param {Function} callback The callback function. ---> @arg {Object} pos The position of the touch event.
	 */


    /** ### setOnLoad
	 * Sets a callback function on load event.
	 * $$ img.setOnLoad( callback ) $$
	 * @param {Function} callback The callback function.
	 */


	/** ### setOnTouchMove
	 * Sets a callback function when the a mouse move event is triggered.
	 * $$ img.setOnTouchMove( callback ) $$
	 * @param {Function} callback The callback function. ---> @arg {Object} pos The position of the touch event.
	 */


    /** ### setOnLongTouch
     * Adds a callback handler for a long touch event. The touch timer is about 500 milliseconds.
     * $$ img.setOnLongTouch( callback ) $$
     * @param {Function} callback The callback function to be called. ---> @arg {Object} pos The position of the touch event.
     */


/* --- parent_methods here ----- */


/* ## Examples */


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
        this.main = ui.addLayout( "main", "Linear", "", 1, 1 )

        ui.addAppBar( this.main, "Analog Clock" )

        // Create a canvas image
        this.img = ui.addImage( this.main, "", "canvas", "300px", "300px")
        this.img.margins = [null, 0.1]

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

        ui.addText(this.main, "Color", "H5");

        ui.addDivider(this.main);

        var lay = ui.addLayout( this.main, "Linear", "Horizontal,Center,VCenter", 1)
        lay.childSpacing = "even"

        var colors = ["#009688", "#673ab7", "#e53935", "#1e88e5"]
        
        for( var i=0; i<colors.length; i++ ) {
            var btn = ui.addLayout( lay, "Linear", "", "48px", "48px" )
            btn.backColor = colors[i];
            btn.setCornerRadius(8,8,8,8);
            btn.setOnTouch( this.changeColor.bind(this, colors[i]) );
        }

        ui.addDivider(this.main);

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


/**
@sample Python Basic Image
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

    img = ui.addImage(main, image, "", 0.5)

    img.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You touched the mango!")
 */


/**
@sample Python Avatar
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

    img = ui.addImage(main, image, "Avatar")

    img.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You touched the mango!")
 */


/**
@sample Python Button
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    image = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"

    img = ui.addImage(main, image, "Button", 0.5)

    img.setOnTouch(onTouch)

def onTouch(event):
    ui.showPopup("You touched the mango!")
 */


/**
@sample Python Drawings
from hybrid import ui

def OnStart():
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    img = ui.addImage(main, "", "canvas", 1, 1)
    img.lineCap = "round"
    img.lineJoin = "round"

    img.drawLine(130, 40, 300, 500, "#009688", 10)

    img.drawSquare(320, 200, 200, "#683ab7")

    img.drawCircle(400, 300, 250, "#00000000", "", 20)

    img.drawArc(800, 200, 100, 40, 270, "#44009688", "#009688", 10)

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
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    img = ui.addImage(main, "", "canvas", "300px", "500px")

    img.drawRectangle(0, 0, 300, 500, "#fff", "", 4)

    img.drawPolygon([
        {"x": 300, "y": 0},
        {"x": 300, "y": 500},
        {"x": 0, "y": 500}
    ])

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
    global img, time
    main = ui.addLayout("main", "Linear", "VCenter", 1, 1)

    ui.addAppBar(main, "Analog Clock")

    img = ui.addImage(main, "", "canvas", "300px", "300px")

    img.lineCap = "round"
    img.lineWidth = 4
    img.strokeColor = "#009688"
    img.lineJoin = "round"

    time = ui.addText(main, "00:00:00", "h6,bold")
    time.setMargins(0, 0.05, 0, 0)

    draw()
    app.SetInterval(draw.bind(), 1000)

def draw():
    img.clear()

    x, y, n = 0, 0, 0

    for n in range(1, 13):
        x = 130 * math.cos(n * (math.pi / 6))
        y = 130 * math.sin(n * (math.pi / 6))

        x += 150
        y += 150

        img.drawCircle(x, y, 4, "#311b92")

    date = datetime.datetime.now()

    hour = date.hour if date.hour <= 12 else date.hour - 12
    minutes = date.minute
    seconds = date.second

    hourAngle = hour * (math.pi / 6) - (math.pi / 2)
    minAngle = minutes * (math.pi / 30) - (math.pi / 2)
    secAngle = seconds * (math.pi / 30) - (math.pi / 2)

    drawHand(hourAngle, 80, 7, "#311b92")
    drawHand(minAngle, 100, 4, "#1e88e5")
    drawHand(secAngle, 110, 2, "#d81b60")

    img.drawCircle(150, 150, 8, "#000")

    time.text = (
        str(hour).zfill(2) + ":" +
        str(minutes).zfill(2) + ":" +
        str(seconds).zfill(2) +
        " " +
        ("PM" if date.hour > 12 else "AM")
    )

def drawHand(angle, length, width, color):
    x = length * math.cos(angle)
    y = length * math.sin(angle)

    x += 150
    y += 150

    img.drawLine(150, 150, x, y, color, width)
 */


/**
@sample Python Scratch Pad
from hybrid import ui

def OnStart():
    color = "#000000"
    main = ui.addLayout("main", "Linear", "Top", 1, 1)
    main.setChildMargins(0, 0.01, 0, 0.01)

    lay = ui.addLayout(main, "Linear", "Horizontal,Center,VCenter", 1)
    lay.setChildMargins(0.01, 0, 0.01, 0)

    colors = ["#009688", "#673ab7", "#e53935", "#1e88e5"]

    ui.addText(lay, "Color", "H5")
    for color in colors:
        btn = ui.addButton(lay, "", color)
        btn.onClick = changeColor

def changeColor():
    color = sender.backgroundColor
 */


