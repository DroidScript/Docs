
/** # CreateGLView #
 * @abbrev glv
 * 
 * $$ glv = app.CreateGLView(width, height, options) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options fast2d
 * @returns dso-GLView
*/


// CreateGLView.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
GLView is a fast 2D canvas suitable for drawing and moving graphics around on the screen quickly, ideal for games. The options parameter should be always set to “Fast2d”.
%c

Use the **CreateImage** method of the GLView object to create an image that can be used with the GLView.
You can specity a **callback** function too which will be called once the image is ready to use.

To draw the sprite on the canvas use the **DrawImage** method.
<red>Note: don't forget to specify all parameters, including angle. Otherwise the image will not be drawn.</red>
You can leave either width or height -1 to scale the other parameter according to the sprite aspect ratio.

Once all drawing has been done, the **Render** method must be called to render all the GLView graphics to the screen.
<sample DrawImage>

### Render Loop
To create a rendering loop for a game, use the setInterval JavaScript function to call your drawing function at regular intervals.
The example below draws a continuously rotating image by calling the DrawFrame function 30 times each second, updating the angle each time:
<sample Render Loop>

### Sprite Touch Detection
If you need to want to simulate OnTouch for a GLView Image, you will need to keep track of the position, width and height that it has been drawn with. Then use the GLView OnTouch event to determine if the touch coordinates are within the GLView Image yourself. To prevent touch detect on all sprites on the touch position define a drawing order according to a list.
<sample Sprite Touch>

### Sprite Animations
GLView supports the use of Sprite Sheets. The DrawSprite method can be used to draw part of an image to the GLView.
The following example uses a sprite sheet containing 8 stages of a character running. The DrawSprite method is used to draw each of the 8 sections in turn to give the effect of the character continuously running:
<sample Sprite Sheet Animation>

 */

/** ## Methods ##
 * These are the methods available for CreateGLView
 */


/** ### aspect ###
 * width/height relation
 * $$ glv.aspect() $$
 * @returns num_flt
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ glv.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### canvas ###
 * [HTMLDivElement]
 * $$ glv.canvas() $$
 * @returns obj
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ glv.ClearFocus() $$
 */


/** ### CreateImage ###
 * Create a sprite object which can be drawn on the GLView
 * $$ glv.CreateImage(file, callback) $$
 * @param {str_ptf} file 
 * @param {fnc_json} callback {}
 * @returns dso_glv
 */


/** ### DrawImage ###
 * Draws an image to the canvas
 * $$ glv.DrawImage(image, x, y, w, h, angle) $$
 * @param {obj} image glv Image
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @param {num_frc} w 
 * @param {num_frc} h 
 * @param {num_deg} angle 
 */


/** ### DrawSprite ###
 * Draws a part of an image to the canvas.
 * $$ glv.DrawSprite(sheet, sx, sy, sw, sh, dx, dy, dw, dh, angle) $$
 * @param {obj} sheet GLV Image
 * @param {num_pxl} sx 
 * @param {num_pxl} sy 
 * @param {num_pxl} sw 
 * @param {num_pxl} sh 
 * @param {num_frc} dx 
 * @param {num_frc} dy 
 * @param {num_frc} dw 
 * @param {num_frc} dh 
 * @param {num_deg} angle 
 */


/** ### _Exec ###
 * calls _gfx.Exec()
 * $$ glv._Exec(p1, p2, p3, p4) $$
 * @param {?} p1 
 * @param {?} p2 
 * @param {?} p3 
 * @param {?} p4 
 */


/** ### _Execute ###
 * 
 * $$ glv._Execute(p1, p2, p3, p4) $$
 * @param {?} p1 
 * @param {?} p2 
 * @param {?} p3 
 * @param {?} p4 
 */


/** ### Explode ###
 * Destroys the control with an explode animation and sound.
 * $$ glv.Explode() $$
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ glv.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ glv.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ glv.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetContext ###
 * Returns the current FastCanvas context
 * $$ glv.GetContext() $$
 * @returns obj-ctx
 */


/** ### GetContext.ctx.capture ###
 * Captures the current cached context to a png image. * The path is relative to /sdcard but requires a leading '/', ie “/Pictures/mycapture.png”
 * $$ glv.GetContext.ctx.capture(x, y, w, h, fileName, successCallback, errorCallback) $$
 * @param {num_pxl} x 
 * @param {num_pxl} y 
 * @param {num_pxl} w 
 * @param {num_pxl} h 
 * @param {str:path relative to “/sdcard”} fileName 
 * @param {fnc} successCallback 
 * @param {fnc} errorCallback 
 */


/** ### GetContext.ctx.clearRect ###
 * <deprecated does nothing. ctx is automatically cleared after render()>
 * $$ glv.GetContext.ctx.clearRect(x, y, width, height) $$
 * @param {num_pxl} x 
 * @param {num_pxl} y 
 * @param {num_pxl} width 
 * @param {num_pxl} height 
 */


/** ### GetContext.ctx._drawCommands ###
 * 
 * $$ glv.GetContext.ctx._drawCommands() $$
 * @returns str
 */


/** ### GetContext.ctx.drawImage ###
 * Draws a part of a glv image to the glv context, where s are source coordinates and d destination coordinates.
 * $$ glv.GetContext.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) $$
 * @param {obj} image glv Image
 * @param {num_pxl} sx 
 * @param {num_pxl} sy 
 * @param {num_pxl} sw 
 * @param {num_pxl} sh 
 * @param {num_pxl} dx 
 * @param {num_pxl} dy 
 * @param {num_pxl} dw 
 * @param {num_pxl} dh 
 */


/** ### GetContext.ctx._globalAlpha ###
 * 
 * $$ glv.GetContext.ctx._globalAlpha() $$
 * @returns num_frc
 */


/** ### GetContext.ctx.loadTexture ###
 * 
 * $$ glv.GetContext.ctx.loadTexture(image, successCallback, errorCallback) $$
 * @param {str_ptf} image 
 * @param {fnc_json} successCallback {"pNames":["metrics"],"pTypes":["lst-[ width:num_pxl, height:num_pxl ]"]}
 * @param {fnc_json} errorCallback {"pNames":["msg"],"pTypes":["str"]}
 */


/** ### GetContext.ctx.render ###
 * render the draw commands to the context
 * $$ glv.GetContext.ctx.render() $$
 */


/** ### GetContext.ctx.resetTransform ###
 * Reset all transformations to default
 * $$ glv.GetContext.ctx.resetTransform() $$
 */


/** ### GetContext.ctx.restore ###
 * Restore a previously saved context state
 * $$ glv.GetContext.ctx.restore() $$
 */


/** ### GetContext.ctx.rotate ###
 * Rotates the current applied transformation
 * $$ glv.GetContext.ctx.rotate(angle) $$
 * @param {num_rad} angle 
 */


/** ### GetContext.ctx.save ###
 * Saves the current context state
 * $$ glv.GetContext.ctx.save() $$
 */


/** ### GetContext.ctx.scale ###
 * Scales the current applied transformation matrix
 * $$ glv.GetContext.ctx.scale(a, d) $$
 * @param {num_frc} a 
 * @param {num_frc} d 
 */


/** ### GetContext.ctx.setTransform ###
 * Set the current transformation matrix
 * $$ glv.GetContext.ctx.setTransform(a, b, c, d, tx, ty) $$
 * @param {num} a 
 * @param {num} b 
 * @param {num} c 
 * @param {num} d 
 * @param {num} tx 
 * @param {num} ty 
 */


/** ### GetContext.ctx.transform ###
 * Apply an other transformation matrix to the current one
 * $$ glv.GetContext.ctx.transform(a, b, c, d, tx, ty) $$
 * @param {num} a 
 * @param {num} b 
 * @param {num} c 
 * @param {num} d 
 * @param {num} tx 
 * @param {num} ty 
 */


/** ### GetContext.ctx.translate ###
 * 'Moves' the current applied transformation matrix
 * $$ glv.GetContext.ctx.translate(tx, ty) $$
 * @param {num_pxl} tx 
 * @param {num_pxl} ty 
 */


/** ### GetContext.ctx.unloadTexture ###
 * 
 * $$ glv.GetContext.ctx.unloadTexture(image) $$
 * @param {str_ptf} image 
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ glv.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ glv.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ glv.GetParent() $$
 * @returns dso
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ glv.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ glv.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ glv.GetType() $$
 * @returns str-GLView
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ glv.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ glv.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ glv.Gone() $$
 */


/** ### height ###
 * 
 * $$ glv.height() $$
 * @returns num_int
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ glv.Hide() $$
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ glv.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ glv.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ glv.IsVisible() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ glv.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### Render ###
 * Render all draw commands to the canvas
 * $$ glv.Render() $$
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ glv.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ glv.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ glv.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @param {num_frc} radius 
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str_com} options 
 */


/** ### SetBackground ###
 * Changes the background to an image which can be repeated using the `repeat` option. * An image which is often used with that option is '/res/drawable/pattern_carbon' - try it out!
 * $$ glv.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ glv.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ glv.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ glv.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetOnTouch ###
 * Define a callback function that is called when the user touches the control. In addition, an `event` object is passed to the callback function to obtain information about the touch `type`, the touch `position(s)`, the `amount` of touches and the `control` that was touched.
 * $$ glv.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-\"Down|Move|Up\", count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchDown ###
 * %cb% the user started toching the control.
 * $$ glv.SetOnTouchDown(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Down, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchMove ###
 * %cb% the user drags a finger over the screen.
 * $$ glv.SetOnTouchMove(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Move, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchUp ###
 * %cb% the users finger leaves the screen.
 * $$ glv.SetOnTouchUp(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Up, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ glv.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ glv.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ glv.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ glv.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetTouchable ###
 * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired.
 * $$ glv.SetTouchable(touchable) $$
 * @param {bin} touchable 
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ glv.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ glv.Show() $$
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ glv.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */


/** ### width ###
 * 
 * $$ glv.width() $$
 * @returns num_int
 */

// CreateGLView.txt --> All the sample codes

/** @Sample
<sample DrawImage>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY" );

	<b>glview = app.CreateGLView( 1, 1, "Fast2d" );
	lay.AddChild( glview );

	img = glview.CreateImage( "/Sys/Img/Hello.png", DrawFrame );</b>

	app.AddLayout( lay );
}

function DrawFrame()
{
	glview.DrawImage( img, 0.25, 0.3, 0.5, -1, 45 );
	glview.Render();
}
</sample>

<sample Render Loop>
var angle = 0;

function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY" );

	<b>glview = app.CreateGLView( 1, 1, "Fast2d" );
	lay.AddChild( glview );

	img = glview.CreateImage( "/Sys/Img/Hello.png", StartRendering );</b>

	app.AddLayout( lay );
}

function StartRendering()
{
	setInterval( DrawFrame, 1000/30 );
}

function DrawFrame()
{
	glview.DrawImage( img, 0.25, 0.3, 0.5, -1, angle );

	angle = angle + 10;
	if( angle == 360 ) angle = 0;

	glview.Render();
}
</sample>

<sample Sprite Sheet Animation>
var spriteCount = 8;
var srcWidth = 50;
var srcHeight = 60;
var frameCount = 0;

function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY" );

	<b>glview = app.CreateGLView( 1, 1, "Fast2d" );
	lay.AddChild( glview );

	img = glview.CreateImage( "/Sys/Img/Sprint.png", StartRendering );</b>

	app.AddLayout( lay );
}

function StartRendering()
{
	setInterval(DrawFrame, 1000/30);
}

function DrawFrame()
{
	var spriteIndex = Math.floor(frameCount / 2) % spriteCount;

	var sx = spriteIndex * srcWidth;
	var sy = 0;

	glview.DrawSprite( img, sx, sy, srcWidth, srcHeight,
				0.3, 0.4, 0.3, -1 );

	glview.Render();
	frameCount++;
}</sample>

<sample Sprite Touch>
objects = [];

//Called when application is started.
function OnStart() {
	//Create layout
	lay = app.CreateLayout( "linear" );

	//Create GLView
	glv = app.CreateGLView( 1, 1, "Fast2d" );
	glv.SetOnTouchUp( touch );

	//set first image
	img1 = glv.CreateImage( "/Sys/Img/Hello.png" );
	img1.name = "img1";
	img1.X = 0.1; img1.Y = 0.3;
	img1.W = 0.7; img1.H = 0.4;
	objects.push(img1);

	//set second image
	img2 = glv.CreateImage( "/Sys/Img/Droid1.png", startRender );
	img2.name = "img2";
	img2.X = 0.5; img2.Y = 0.5;
	img2.W = 0.5; img2.H = 0.3;
	objects.push(img2);

	lay.AddChild( glv );

	//Add layout to app.
	app.AddLayout( lay );
}

// Draw images
function startRender() {
	for(var i in objects) draw(objects[i]);
	glv.Render();
}

// Check which image was touched
function touch(ev) {
	for(var i = objects.length; i-- > 0; ) {
		if( touched( objects[i], ev ) ) {
			app.ShowPopup( "touched " + objects[i].name );
			break;
		}
	}
}

function draw(img, ev) {
	glv.DrawImage( img, img.X, img.Y, img.W, img.H, 0);
}

function touched(img, ev) {
	return img.X < ev.X && img.X + img.W > ev.X
		&& img.Y < ev.Y && img.Y + img.H > ev.Y;
}
</sample>

 */

