
/** # CreateImage #
 * @abbrev img
 * @brief Returns a new Image object
 * 
 * $$ img = app.CreateImage(file, width, height, options, pxw, pxh) $$ 
 * @param {str_ptc} file 
 * @param {num} width 
 * @param {num} height 
 * @param {str_com} options fix:image with fixed resolution,alias,px:use pixel values for size,Button:causes image to depress like a button when touched,ScaleCenter,async:loads the image asynchronously,FontAwesome,Resize,TouchThrough,Icon:allows loading of app icons,wallpaper,NoPlay:prevent gifs from playing automatically
 * @param {num_pxl} pxw 
 * @param {num_pxl} pxh 
 * @returns dso-Image
*/


// CreateImage.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Image controls can be used to display images such like png, jpg or gif.
Just pass the file path and you're done.
%c
Without the **width** and **height** dimensions the image will be shown without any scaling.
<sample Original Size>

If you specify one of them and leave the other _null_, _-1_ or blank, it will be scaled so that the aspect ratio is kept.
<sample Maintain Aspect>

And if you specify both parameters it will be scaled to your wishes.
<sample Stretched>

If you want images to depress like buttons if touched you can use the “Button” **option**.
<sample Button>


### Drawing on Images
Images are also useful for drawing basic shapes and other images on it and therefore for creating dynamic animations or even basic games. To create an empty image you can pass _null_ as file parameter.

This way you can also specify a fixed pixel size to the image you can use the “fix” **option** and pass values for the **pxw** and **pxh** parameters.
<js>
img = app.CreateImage( null, 0.8, 0.5, "fix", 20, 20 );
img.DrawLine( 0, 0, 1, 1 );
</js>

If you dislike the anti-alias effect you can apply the “alias” **option** on a higher resolution image and draw a low-resolution image on it:
<js>
img2 = app.CreateImage( null, .8, .5, "alias" );
img2.DrawImage( img, 0, 0, 1, 1, 0 );
</js>

There are a whole bunch of drawing methods defined here. Some of the were already used above. You can draw lines, rectangles, circles and other images, just to name a few. You can even draw a transformed image using an [transformation matrix](https://docs.rainmeter.net/tips/transformation-matrix-guide). Check out the **Draw\*** methods in the method list below to get more details about all drawing functions.
<sample Draw Shapes>

### Drawing on Images _fast_
If you have many draw operations to perform at runtime (ie. for games) you might want to disable the automatic canvas update after each Draw* call using the **SetAutoUpdate** method. To force the rendering now, you have to call **Update**.

Another way to increase the animation speed is using the _NoDom_ configuration. This will disable html and js Dom elements in your app that consume a lot of resources, but app functions can still be used.
For animations you can then use the **Animate** function of the app object which calls a function for a given amount per second. Note that the canvas still needs some time to refresh - so going over 60 fps makes no sense at all.
<sample Advanced Clock Animating>

 */



// -------- VISIBLE METHODS & PROPERTIES --------- 


/**
 * @extern AdjustColor
 */

/**
 * @extern Animate
 */

/**
 * @extern Batch
 */

/** ### Clear ###
 * Clears everything on the image except the background.
 * $$ img.Clear() $$
 */


/**
 * @extern ClearFocus
 */

/** ### DrawArc ###
 * Draws an elliptical arc by specifying the corners of the surrounding rectangle and the angle range of the arc to be drawn.
 * $$ img.DrawArc(x1, y1, x2, y2, start, sweep) $$
 * @param {num:corner 1} x1 
 * @param {num:corner 1} y1 
 * @param {num:corner 2} x2 
 * @param {num:corner 2} y2 
 * @param {num_deg} start 
 * @param {num_deg} sweep 
 */


/** ### DrawCircle ###
 * Draws a Circle.
 * $$ img.DrawCircle(x, y, radius) $$
 * @param {num} x 
 * @param {num} y 
 * @param {num:width relative} radius 
 */


/** ### DrawFrame ###
 * Draws the frame on a given time of a loaded gif file.
 * $$ img.DrawFrame(ms) $$
 * @param {num_mls} ms 
 */


/** ### DrawImage ###
 * Draws an Image:dso-CreateImage. * See [Android Developers](https://developer.android.com/reference/android/graphics/PorterDuff.Mode#enum-values_1) for 'mode' info
 * $$ img.DrawImage(image, x, y, w, h, angle, mode) $$
 * @param {dso} image CreateImage
 * @param {num} x 
 * @param {num} y 
 * @param {num} w 
 * @param {num} h 
 * @param {num_deg} angle 
 * @param {str} mode ADD|CLEAR|DARKEN|DST|DST_ATOP|DST_IN|DST_OUT|DST_OVER|LIGHTEN|MULTIPLY|OVERLAY|SCREEN|SRC|SRC_ATOP|SRC_IN|SRC_OUT|SRC_OVER|XOR
 */


/** ### DrawImageMtx ###
 * Draws an image with a 2d [transformation matrix](https://docs.rainmeter.net/tips/transformation-matrix-guide).
 * $$ img.DrawImageMtx(image, matrix) $$
 * @param {dso} image CreateImage
 * @param {lst} matrix [a, b, c, d, tx, ty]
 */


/** ### DrawLine ###
 * Draws a line.
 * $$ img.DrawLine(x1, y1, x2, y2) $$
 * @param {num} x1 
 * @param {num} y1 
 * @param {num} x2 
 * @param {num} y2 
 */


/** ### DrawPoint ###
 * Draws a single pixel.
 * $$ img.DrawPoint(x, y) $$
 * @param {num} x 
 * @param {num} y 
 */


/** ### DrawRectangle ###
 * Draws a rectangle.
 * $$ img.DrawRectangle(x1, y1, x2, y2) $$
 * @param {num} x1 
 * @param {num} y1 
 * @param {num} x2 
 * @param {num} y2 
 */


/** ### DrawSamples ###
 * Draws a vertically centered graph in relation to the specified range in both direction. * The sample value _0_ would be vertically centered, _-range_ at the top and _range_ at the bottom. * The sample x positions are evenly distributed over the whole image width.
 * $$ img.DrawSamples(data, range) $$
 * @param {lst} data [ data:num_int ]
 * @param {num} range 
 */


/** ### DrawText ###
 * Draws a text.
 * $$ img.DrawText(txt, x, y) $$
 * @param {str} txt 
 * @param {num} x 
 * @param {num} y 
 */


/** ### Flatten ###
 * Applies certain modifications to the image data, such as translate, scale, skew or alpha.
 * $$ img.Flatten() $$
 */


/**
 * @extern Focus
 */

/**
 * @extern GetAbsHeight
 */

/**
 * @extern GetAbsWidth
 */

/**
 * @extern GetHeight
 */

/**
 * @extern GetLeft
 */

/** ### GetName ###
 * Returns the name set via SetName.
 * $$ img.GetName() $$
 * @returns str
 */


/**
 * @extern GetParent
 */

/** ### GetPixelColor ###
 * Returns the [r,g,b] values from a pixel on the image.
 * $$ img.GetPixelColor(x, y) $$
 * @param {num} x 
 * @param {num} y 
 * @returns lst-[ red:num_dhx, green:num_dhx, blue:num_dhx ]
 */


/** ### GetPixelData ###
 * Returns the raw, png or jpg image data encoded as base64.
 * $$ img.GetPixelData(format, left, top, width, height) $$
 * @param {str} format rawbase64|pngbase64|jpgbase64
 * @param {num_int} left 
 * @param {num_int} top 
 * @param {num_int} width 
 * @param {num_int} height 
 * @returns str_b64
 */


/**
 * @extern GetPosition
 */

/**
 * @extern GetTop
 */

/** ### GetType ###
 * Returns the control class name.
 * $$ img.GetType() $$
 * @returns str-Image
 */


/**
 * @extern GetVisibility
 */

/**
 * @extern GetWidth
 */

/**
 * @extern Gone
 */

/**
 * @extern Hide
 */

/**
 * @extern IsEnabled
 */

/**
 * @extern IsOverlap
 */

/**
 * @extern IsVisible
 */

/** ### MeasureText ###
 * Measure width and height of a given text with the current image settings.
 * $$ img.MeasureText(txt) $$
 * @param {str} txt 
 * @returns obj-{ width:num_frc&comma; height:num_frc }
 */


/**
 * @extern Method
 */

/** ### Move ###
 * Moves the content of the image to the specified position.
 * $$ img.Move(x, y) $$
 * @param {num} x 
 * @param {num} y 
 */


/** ### Reset ###
 * Resets all transformations.
 * $$ img.Reset() $$
 */


/** ### Rotate ###
 * Rotates the content.
 * $$ img.Rotate(angle, pivotX, pivotY) $$
 * @param {num_deg} angle 
 * @param {num} pivotX 
 * @param {num} pivotY 
 */


/** ### Save ###
 * Saves the image to a file on the local filesystem.
 * $$ img.Save(fileName, quality) $$
 * @param {str_ptf} fileName 
 * @param {num_prc} quality for jpg files
 */


/** ### Scale ###
 * Scales the content by the given factors.
 * $$ img.Scale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetAlpha ###
 * Change the image alpha to a value between 0 and 255, where 0 is full transparent.
 * $$ img.SetAlpha(alpha) $$
 * @param {num_dhx} alpha 
 */


/** ### SetAutoUpdate ###
 * En/disable updating the view after every drawing or transformation method.
 * $$ img.SetAutoUpdate(onoff) $$
 * @param {bin} onoff 
 */


/**
 * @extern SetBackAlpha
 */

/**
 * @extern SetBackColor
 */

/**
 * @extern SetBackGradient
 */

/**
 * @extern SetBackGradientRadial
 */

/**
 * @extern SetBackground
 */

/** ### SetColor ###
 * Fills the image with a specific color.
 * $$ img.SetColor(color) $$
 * @param {str_col} color 
 */


/**
 * @extern SetColorFilter
 */

/**
 * @extern SetDescription
 */

/**
 * @extern SetEnabled
 */

/**
 * @extern SetFontFile
 */

/** ### SetImage ###
 * Set the content to an image:dso-"CreateImage" control or specify a path to an image which will then be loaded.
 * $$ img.SetImage(image, width, height, options) $$
 * @param {str_pth||dso} image Image
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options rescale
 */


/** ### SetLineWidth ###
 * Set the stroke width to a number in pixels.
 * $$ img.SetLineWidth(width) $$
 * @param {num_pxl} width 
 */


/**
 * @extern SetMargins
 */

/** ### SetMaxRate ###
 * Set a minimum timeout between two touch 'move' actions fired.
 * $$ img.SetMaxRate(milliseconds) $$
 * @param {num_mls} milliseconds 
 */


/** ### SetName ###
 * Change the name of the image.
 * $$ img.SetName(name) $$
 * @param {str} name 
 */


/** ### SetOnLoad ###
 * %cb% the image has loaded in “async” mode.
 * $$ img.SetOnLoad(callback) $$
 * @param {fnc_json} callback {"pNames":["img"],"pTypes":["dso-CreateImage"]}
 */


/**
 * @extern SetOnLongTouch
 */

/**
 * @extern SetOnTouch
 */

/**
 * @extern SetOnTouchDown
 */

/**
 * @extern SetOnTouchMove
 */

/**
 * @extern SetOnTouchUp
 */

/**
 * @extern SetPadding
 */

/** ### SetPaintColor ###
 * Change the current paint color for drawing methods.
 * $$ img.SetPaintColor(color) $$
 * @param {str_col} color 
 */


/** ### SetPaintStyle ###
 * Change the current paint style for drawing methods.
 * $$ img.SetPaintStyle(style) $$
 * @param {str} style Fill|Line
 */


/** ### SetPixelData ###
 * Set the image to base64 encoded pixel data.
 * $$ img.SetPixelData(data, width, height, options) $$
 * @param {str_b64} data &lt;rawbase64&gt;|data&colon;image/jpg;base64&comma;&lt;jpgbase64&gt;,data&colon;image/png;base64&comma;&lt;pngbase64&gt;
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px,icon,resize|rescale|square,fix:set bitmap size
 */


/** ### SetPixelMode ###
 * En-/Disable pixel mode for the image so that all drawing methods use either control relative or pixel values.
 * $$ img.SetPixelMode(onoff) $$
 * @param {bin} onoff 
 */


/**
 * @extern SetPosition
 */

/**
 * @extern SetScale
 */

/**
 * @extern SetSize
 */

/** ### SetTextSize ###
 * Change the size of drawn text.
 * $$ img.SetTextSize(size) $$
 * @param {num} size 
 */


/**
 * @extern SetTouchable
 */

/**
 * @extern SetVisibility
 */

/**
 * @extern Show
 */

/** ### Skew ###
 * Skews the content.
 * $$ img.Skew(x, y) $$
 * @param {num} x 
 * @param {num} y 
 */


/** ### Transform ###
 * Transform the content with a 2d transformation matrix.
 * $$ img.Transform(matrix) $$
 * @param {lst} matrix 
 */


/**
 * @extern Tween
 */

/** ### Update ###
 * Update the view in disabled AutoUpdate mode.
 * $$ img.Update() $$
 */

// CreateImage.txt --> All the sample codes

/** @Sample
<sample Original Size>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>img = app.CreateImage( "/Sys/Img/Droid1.png" );
	img.SetOnTouch( img_OnTouch );
	lay.AddChild( img );</b>

	app.AddLayout( lay );
}

function img_OnTouch( ev )
{
	if( ev.action=="Down" )
		app.ShowPopup( "Ouch!" );
}
</sample>

<sample Stretched>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>img = app.CreateImage( "/Sys/Img/Droid1.png", 0.5, 0.7 );
	img.SetOnTouch( img_OnTouch );
	lay.AddChild( img );</b>

	app.AddLayout( lay );
}

function img_OnTouch( ev )
{
	if( ev.action=="Down" )
		app.ShowPopup( "Aaaargh!" );
}
</sample>

<sample Maintain Aspect>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>img = app.CreateImage( "/Sys/Img/Droid1.png", 0.5, -1 );
	img.SetOnTouch( img_OnTouch );
	lay.AddChild( img );</b>

	app.AddLayout( lay );
}

function img_OnTouch( ev )
{
	if( ev.action=="Down" )
		app.ShowPopup( ev.x[0] + ", " + ev.y[0], "Short" );
}
</sample>

<sample Draw Shapes>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>img = app.CreateImage( null, 0.8, 0.8 );
	lay.AddChild( img );

	img.SetColor( "#8888ff" );
	img.SetPaintColor( "#ff0000" );
	img.DrawCircle( 0.5, 0.5, 0.1 );
	img.DrawRectangle( 0.7, 0.7, 0.1, 0.75 );</b>

	app.AddLayout( lay );
}
</sample>

<sample Advanced Clock Animating>
cfg.No_Dom, cfg.Portrait;

var wh;

function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    // clock pointer
    ptr = app.CreateImage( null, 0.1, 0.1, "fix,alias", 30, 30 );
    ptr.SetTextSize( 4.3 );

    // image aspect ratio for drawing square images
    wh = ptr.GetAbsWidth() / ptr.GetAbsHeight();

    // main canvas
	img = app.CreateImage( null, 1, 1, "alias" );
    img.SetPaintStyle( "line" );
	img.SetAutoUpdate( false );
    img.SetLineWidth( 15 );
	lay.AddChild( img );

	app.AddLayout( lay );

    app.SetDebug( "console" );
    app.Animate( OnAnimate, 40 );
}

function OnAnimate( time, dtime )
{
    time = Date.now();

    // calculate pointer position from current time
    var secs = time / 1000;
    var angle = Math.PI * secs / 2 + Math.abs( Math.sin( Math.PI * secs ));
    var px = 0.5 + 0.5 * Math.cos( angle );
    var py = 0.5 + 0.5 * Math.sin( angle );

    // get current datetime
    var hrs = Math.floor( secs / 3600 ) % 60;
    var min = Math.floor( secs / 60 ) % 60;
    var sec = Math.floor( secs ) % 60;
    var time = min + ":" + sec;

    // measure text dimensions for centering
    var tsize = ptr.MeasureText( time );
    var tx = (1 - tsize.width ) / 2;
    var ty = (1 + tsize.height) / 2;

    // draw pointer and datetime text
    ptr.Clear();
    ptr.SetPaintColor( "red" );
    ptr.DrawLine( .5, .5, px, py );
    ptr.SetPaintColor( "white" );
    ptr.DrawText( time, tx, ty );

    // render
    img.Clear();
    img.DrawCircle( .5, .5, .48 );
    img.DrawImage( ptr, 0, (1 - wh) / 2, 1, wh );
    img.Update();
}
</sample>

<sample Button>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btn = app.CreateImage( "/Sys/Img/Hello.png", 0.2, -1, "button" );
    btn.SetOnTouchUp( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
	app.ShowPopup( "Hello World!" );
	app.Vibrate( "0,100,30,100,50,300" );
}
</sample>

 */

