// ------------- HEADER SECTION -------------


/** # addImage #
 * @abbrev img
 * @brief addImage
 * 
 * $$ img = ui.addImage(parent, file, options, width, height) $$ 
 * @param {obj} parent The parent layout where to add the image.
 * @param {str} file The path to the image.
 * @param {str} options A comma seprated options for the image. Can be `Canvas` `Button` or `Avatar`
 * @param {num} width Fraction of the screen width.
 * @param {num} height Fraction of the screen height.
 * @returns obj-Image Component.
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds an image into your layout.

 Please note that a <col nobox #4c4>canvas</col> image cannot switch to Button or Avatar in <col nobox #4c4>setOptions</col> method.

### Properties
These are the setter and getter properties for the addImage Component.
<smp noinl>absHeight:"num:'Returns the absolute height of the control in pixels.'"</smp>
<smp noinl>absLeft:"num:'Returns the absolute distance of the control from the left in pixels.'"</smp>
<smp noinl>absTop:"num:'Returns the absolute distance of the control from the top in pixels.'"</smp>
<smp noinl>absWidth:"num:'Returns the absolute width of the control in pixels.'"</smp>
<smp noinl>backColor:"str:'A hexadecimal color of the form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>backImage:"str:'The path to your image file.'"</smp>
<smp noinl>border:"num:'Sets or returns the border thickness in pixels.'"</smp>
<smp noinl>borderColor:"str:'Sets or returns the border color. Color is in hexadecimal form <col nobox #fb8c00>#rrggbb</col>'"</smp>
<smp noinl>borderStyle:"str:'Sets or returns the border style. Values can be <col nobox #fb8c00>dotted</col>, <col nobox #fb8c00>dashed</col>, <col nobox #fb8c00>solid</col>, <col nobox #fb8c00>double</col>, <col nobox #fb8c00>groove</col>, <col nobox #fb8c00>ridge</col>, <col nobox #fb8c00>inset</col> and <col nobox #fb8c00>outset</col>. Default is <col nobox #fb8c00>solid</col>.'"</smp>
<smp noinl>cornerRadius:"num:'Sets or returns the corner radius in pixels.'"</smp>
<smp noinl>disabled:"bin:'Sets or returns the <col nobox #fb8c00>disabled</col> state of the control.'"</smp>
<smp noinl>errorIcon:"str:'Sets or returns the material icon for error placeholder image.'"</smp>
<smp noinl>file:"str:'Sets or returns the path or url of the image file.'"</smp>
<smp noinl>fill:"str:'Sets or returns the background color of the canvas.'"</smp>
<smp noinl>fillColor:"str:'Sets or returns the fill color used on close paths such as square, circle, rectangle or arcs.'"</smp>
<smp noinl>fontFile:"str:'Sets or returns the <col nobox #fb8c00>relative</col> path to the font-family use.'"</smp>
<smp noinl>height:"num:'Sets or returns the height of the control as a fraction of the parent control.'"</smp>
<smp noinl>isVisible:"bin:'Returns whether the control is visible or not.'"</smp>
<smp noinl>left:"num:'Returns the distance of the control from the left.'"</smp>
<smp noinl>lineCap:"str:'Sets or returns the style of the end caps for a line. Values can be <col nobox #fb8c00>square</col> <col nobox #fb8c00>round</col> <col nobox #fb8c00>butt</col>'"</smp>
<smp noinl>lineJoin:"str:'Sets or returns the type of corner created when two lines meet. Values <col nobox #fb8c00>bevel</col> <col nobox #fb8c00>round</col> <col nobox #fb8c00>miter</col>'"</smp>
<smp noinl>lineWidth:"num:'Sets or returns the current line thickness.'"</smp>
<smp noinl>margins:"lst:'Sets or returns the margin of the control. Works on controls with <col nobox #fb8c00>Linear</col> parent only. You can also pass a number to set equal margins for all sides.'"</smp>
<smp noinl>miterLimit:"num:'Sets or returns the maximum miter length.'"</smp>
<smp noinl>opacity:"num:'Sets or returns the opacity of the control.'"</smp>
<smp noinl>options:"str:'Sets or returns the <col nobox #fb8c00>options</col> of the control.'"</smp>
<smp noinl>padding:"lst:'Sets or returns the padding of the control. You can also pass a number to set equal padding for all sides.'"</smp>
<smp noinl>parent:"obj:'Returns the parent layout control.'"</smp>
<smp noinl>pixelData:"lst:'Returns the pixel data of the image.'"</smp>
<smp noinl>position:"obj:'Returns the position of the control. The returned object has <col nobox #fb8c00>left</col> <col nobox #fb8c00>top</col> <col nobox #fb8c00>right</col> and <col nobox #fb8c00>bottom</col> props.'"</smp>
<smp noinl>rotation:"num:'Sets or returns the angle of rotation in degrees.'"</smp>
<smp noinl>strokeColor:"str:'Sets or returns the current color of the line or stroke.'"</smp>
<smp noinl>textColor:"str:'Sets or returns the color of the text.'"</smp>
<smp noinl>textSize:"num:'Sets or returns the text-size for drawing in the canvas.'"</smp>
<smp noinl>textStyle:"str:'Sets or returns the text-style for drawing in the canvas. Values are <col nobox #fb8c00>normal</col> and <col nobox #fb8c00>italic</col>.'"</smp>
<smp noinl>top:"num:'Returns the distance of the control from the top.'"</smp>
<smp noinl>type:"str:'Returns the type of the control.'"</smp>
<smp noinl>visibility:"str:'Sets or returns the visibility of the control.'"</smp>
<smp noinl>width:"num:'Sets or returns the width of the control as a fraction of the parent control.'"</smp>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### setOnLoad ###
 * @brief setOnLoad
 * Sets a callback function on load event
 * $$ img.setOnLoad(callback) $$
 * @param {fnc_json} callback 
 */


/** ### enableContextMenu ###
 * @brief enableContextMenu
 * Enable or disbale the context menu or the right click menus
 * $$ img.enableContextMenu(value) $$
 * @param {bin} value Value. Can be `true` `false`
 */


/** ### setImage ###
 * @brief setImage
 * Update the image file
 * $$ img.setImage(file) $$
 * @param {str} file The path to the image file.
 */


/** ### getPixelColor ###
 * @brief getPixelColor
 * Get the pixel color of a single pixel in the image
 * $$ img.getPixelColor(x, y) $$
 * @param {num} x The x-coordinate of the pixel from the left.
 * @param {num} y The y-coordinate of the pixel from the top.
 * @returns lst
 */


/** ### getPixelData ###
 * @brief getPixelData
 * Returns the pixel data of the image
 * $$ img.getPixelData() $$
 * @returns str
 */


/** ### drawLine ###
 * @brief drawLine
 * Draws a line between two points in the canvas
 * $$ img.drawLine(x1, y1, x2, y2, strokeColor, strokeWidth) $$
 * @param {num} x1 The x-coordinate of the starting point in pixels.
 * @param {num} y1 The y-coordinate of the starting point in pixels
 * @param {num} x2 The x-coordinate of the second point in pixels.
 * @param {num} y2 The y-coordinate of the second point in pixels.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness.
 */


/** ### drawCircle ###
 * @brief drawCircle
 * Draws a circle in the canvas
 * $$ img.drawCircle(x, y, radius, fillColor, strokeColor, strokeWidth) $$
 * @param {num} x The x-coordinate of the center of the circle in pixels.
 * @param {num} y The y-coordinate of the center of the circle in pixels.
 * @param {num} radius The radius of the circle in pixels.
 * @param {str} fillColor A hexadecimal color.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stoke thickness.
 */


/** ### drawSquare ###
 * @brief drawSquare
 * Draws a square into the canvas
 * $$ img.drawSquare(x, y, width, fillColor, strokeColor, strokeWidth) $$
 * @param {num} x The position from the left of the top-left corner of the square in pixels.
 * @param {num} y The distance from the top of the top-left corner of the square in pixels.
 * @param {num} width The width of the square in pixels.
 * @param {str} fillColor A hexadecimal color.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness in pixels.
 */


/** ### drawRectangle ###
 * @brief drawRectangle
 * Draws a rectangle into the canvas
 * $$ img.drawRectangle(x1, y1, width, height, fillColor, strokeColor, strokeWidth) $$
 * @param {num} x1 The distance from the left of the top-left corner of the rectangle in pixels.
 * @param {num} y1 The distance from the top of the top-left corner of the rectangle in pixels.
 * @param {num} width The width of the rectangle in pixels.
 * @param {num} height The height of the rectangle in pixels.
 * @param {str} fillColor A hexadecimal color.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness.
 */


/** ### drawArc ###
 * @brief drawArc
 * Draws an arc in the canvas
 * $$ img.drawArc(x, y, radius, start, end, fillColor, strokeColor, strokeWidth) $$
 * @param {num} x The x-coordinate of the center of the arc in pixels.
 * @param {num} y The y-coordinate of the center of the arc in pixels.
 * @param {num} radius The radius of the arc in pixels.
 * @param {num} start The starting angle in degress
 * @param {num} end The angle in degress in which the arc will stop.
 * @param {str} fillColor A hexadecimal color.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness.
 */


/** ### drawImage ###
 * @brief drawImage
 * Draws an image to the canvas
 * $$ img.drawImage(img, x, y, width, height) $$
 * @param {str} img Path to image file.
 * @param {num} x The distance from the left of the top-left corner of the image in pixels.
 * @param {num} y The distance from the top of the top-left corner of the image in pixels.
 * @param {num} width If provided, the image will be shrink or stretch to fill this width in pixels.
 * @param {num} height If provided, the height of the image will be shrink or stretch to fill this height in pixels.
 */


/** ### clear ###
 * @brief clear
 * Clears the drawings by filling the whole canvas with white background color
 * $$ img.clear() $$
 */


/** ### drawPolyline ###
 * @brief drawPolyline
 * Draws a polyline on the canvas by passing an array of points
 * $$ img.drawPolyline(points, strokeColor, strokeWidth) $$
 * @param {lst} points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness.
 */


/** ### drawPolygon ###
 * @brief drawPolygon
 * Draws a polygon on the canvas by passing an array of points
 * $$ img.drawPolygon(points, fillColor, strokeColor, strokeWidth) $$
 * @param {lst} points An array of coordinates. Each element on this array if an array of the form `[x, y]` where `x` is the x-coordinate of a point and `y` is the y-coordinate of a point.
 * @param {str} fillColor A hexadecimal color.
 * @param {str} strokeColor A hexadecimal color.
 * @param {num} strokeWidth The stroke thickness.
 */


/** ### drawPoint ###
 * @brief drawPoint
 * Draws a single pixel point in a specified coordinate
 * $$ img.drawPoint(x, y, color) $$
 * @param {num} x The x-coordinate in pixels.
 * @param {num} y The y-coordinate in pixels.
 * @param {str} color A hexadecimal color.
 */


/** ### setOnTouchMove ###
 * @brief setOnTouchMove
 * Sets a callback function when the a mouse move event is triggered
 * $$ img.setOnTouchMove(callback) $$
 * @param {fnc_json} callback 
 */


/** ### setOnTouch ###
 * @brief setOnTouch
 * Adds a callback handler when the component is touch
 * $$ img.setOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The click event object."]}
 */


/** ### setOnContextMenu ###
 * @brief setOnContextMenu
 * Adds a callback function on right click
 * $$ img.setOnContextMenu(callback) $$
 * @param {fnc_json} callback {"pNames":["event "],"pTypes":["obj-The pointer event object."]}
 */


/** ### animate ###
 * @brief animate
 * Animate the component
 * $$ img.animate(anim, duration) $$
 * @param {str} anim The type of animation. Here are the available values \n `bounce` `flash` `pulse` `rubberBand` `shakeX` `shakeY` `headShake` `swing` `tada` `wobble` `jello` `heartBeat` \n `Back Entrances `backInDown` `backInLeft` `backInRight` `backInUp` \n `Back Exits `backOutDown` `backOutLeft` `backOutRight` `backOutUp` \n `Bouncing Entrances `bounceIn` `bounceInDown` `bounceInLeft` `bounceInRight` `bounceInUp` \n `Bouncing exits `bounceOut` `bounceOutDown` `bounceOutLeft` `bounceOutRight` `bounceOutUp` \n `Fading entrances `fadeIn` `fadeInDown` `fadeInDownBig` `fadeInLeft` `fadeInLeftBig` `fadeInRight` `fadeInRightBig` `fadeInUp` `fadeInUpBig` `fadeInTopLeft` `fadeInTopRight` `fadeInBottomLeft` `fadeInBottomRight` \n `Fading exits `fadeOut` `fadeOutDown` `fadeOutDownBig` `fadeOutLeft` `fadeOutLeftBig` `fadeOutRight` `fadeOutRightBig` `fadeOutUp` `fadeOutUpBig` `fadeOutTopLeft` `fadeOutTopRight` `fadeOutBottomRight` `fadeOutBottomLeft` \n `Flippers `flip` `flipInX` `flipInY` `flipOutX` `flipOutY` \n `Lightspeed `lightSpeedInRight` `lightSpeedInLeft` `lightSpeedOutRight` `lightSpeedOutLeft` \n `Rotating Entrances `rotateIn` `rotateInDownLeft` `rotateInDownRight` `rotateInUpLeft` `rotateInUpRight` \n `Rotating Exits `rotateOut` `rotateOutDownLeft` `rotateOutDownRight` `rotateOutUpLeft` `rotateOutUpRight` \n `Specials `hinge` `jackInTheBox` `rollIn` `rollOut` \n `Zooming Entrances `zoomIn` `zoomInDown` `zoomInLeft` `zoomInRight` `zoomInUp` \n `Zooming Exits `zoomOut` `zoomOutDown` `zoomOutLeft` `zoomOutRight` `zoomOutUp` \n `Sliding Entrances `slideInDown` `slideInLeft` `slideInRight` `slideInUp` \n `Sliding Exits `slideOutDown` `slideOutLeft` `slideOutRight` `slideOutUp`.
 * @param {num} duration The time in milliseconds.
 */


/** ### setSize ###
 * @brief setSize
 * Sets the size of the component
 * $$ img.setSize(width, height) $$
 * @param {num} width Fraction of the parent width. [0-1]
 * @param {num} height Fraction of the parent height. [0-1]
 */


/** ### show ###
 * @brief show
 * Show the component
 * $$ img.show() $$
 */


/** ### hide ###
 * @brief hide
 * Hide the component
 * $$ img.hide() $$
 */


/** ### gone ###
 * @brief gone
 * Destroy the component
 * $$ img.gone() $$
 */


/** ### destroy ###
 * @brief destroy
 * Destroy the component
 * $$ img.destroy() $$
 */


/** ### setScale ###
 * @brief setScale
 * Sets the x and y scaling of the component
 * $$ img.setScale(x, y) $$
 * @param {num} x The x-scale of the component.Values less than `0` is smaller than the normal. While values greater than `1` is greater than the normal.
 * @param {num} y The y-scale of the component. Values less than `1` is smaller than the normal. While vaues greater than `1` is greater than the normal.
 */


/** ### getPosition ###
 * @brief getPosition
 * Returns the position of the component. The return object is of the form `{ left, top, right, bottom
 * $$ img.getPosition(options) $$
 * @param {str} options The mode of the measurements. Values can be `px` or `%`
 * @returns obj
 */


/** ### setMargins ###
 * @brief setMargins
 * Sets the margin of the component
 * $$ img.setMargins(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the parent width.
 * @param {num} top Fraction of the parent height.
 * @param {num} right Fraction of the parent width.
 * @param {num} bottom Fraction of the parent height.
 * @param {str} mode `px` or `%`
 */


/** ### setPadding ###
 * @brief setPadding
 * Sets the padding component container
 * $$ img.setPadding(left, top, right, bottom, mode) $$
 * @param {num} left Fraction of the component width.
 * @param {num} top Fraction of the component height. [0-1]
 * @param {num} right Fraction of the component width. [0-1]
 * @param {num} bottom Fraction of the component height. [0-1]
 * @param {str} mode The size thickness mode. Can be `px`
 */


/** ### setPosition ###
 * @brief setPosition
 * Sets the position of the component relative to its parent dimensions
 * $$ img.setPosition(left, top, mode) $$
 * @param {num} left Fraction of the parent width. [0-1]
 * @param {num} top Fraction of the screen height. [0-1]
 * @param {str} mode Unit of measurement. Can be `px` or `%` or any css unit of measurement.
 */


/** ### setBorder ###
 * @brief setBorder
 * Sets the border line for the component container
 * $$ img.setBorder(width, clr, style) $$
 * @param {num} width Border-left thickness in pixels.
 * @param {str} clr Border color in hexadecimal form `#rrggbb`
 * @param {str} style Border-styles. Values can be `dotted` `dashed` `solid` `double` `groove` `ridge` `inset` and `outset`. Default is `solid`
 */


/** ### setCornerRadius ###
 * @brief setCornerRadius
 * Sets the corner radius of the component
 * $$ img.setCornerRadius(tl, tr, bl, br, mode) $$
 * @param {num} tl Top-Left border radius in pixels.
 * @param {num} tr Top-Right border radius in pixels.
 * @param {num} bl Bottom-Left border radius in pixels.
 * @param {num} br Bottom-Right border radius in pixels.
 * @param {str} mode Unit. Values are `px` `rem` or `%`.
 */


/** ### bringForward ###
 * @brief bringForward
 * Bring this component forward by a given z-index
 * $$ img.bringForward(zIndex) $$
 * @param {num} zIndex The z-index. A negative value behaves like `sendBackward` method.
 */


/** ### sendBackward ###
 * @brief sendBackward
 * Bring this component backward by a given z-index
 * $$ img.sendBackward(zIndex) $$
 * @param {num} zIndex The z-index. A positve value behaves like `bringForward` method.
 */



// ------------- SAMPLES ------------- 


    
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
        this.main = ui.addLayout( "main", "Linear", "VCenter", 1, 1 )

        ui.addAppBar( this.main, "Analog Clock" )

        // Create a canvas image
        this.img = ui.addImage( this.main, "", "canvas", "300px", "300px" )

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

            var lay = ui.addLayout( this.main, "Linear", "Horizontal,Center,VCenter", 1)
            lay.setChildMargins(0.01, 0, 0.01, 0);

            var colors = ["#009688", "#673ab7", "#e53935", "#1e88e5"]

            ui.addText( lay, "Color", "H5");
            for( var i=0; i<colors.length; i++ ) {
                var btn = ui.addLayout( lay, "Linear", "", "48px", "48px" )
                btn.backColor = colors[i];
                btn.setCornerRadius(8,8,8,8);
                btn.setOnTouch( this.changeColor.bind(this, colors[i]) );
            }

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
    
            