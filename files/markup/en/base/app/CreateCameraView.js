
/** # CreateCameraView #
 * @abbrev cam
 * 
 * $$ cam = app.CreateCameraView(width, height, options) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options Front,UseBitmap,UseABGR,NoRotate,"&lt;resolution&gt;":"CIF: 352x288\\nQQVGA: 160x120\\nQVGA: 320x240\\nSVGA: 800x600\\nVGA: 640x480\\nXGA: 1024x768\\nUXGA: 1600x1200"
 * @returns dso-CameraView
*/


// CreateCameraView.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
**CameraView**s are used to access the device camera.
You can use the “Front” option to show the front camera instead of the default back camera.

The camera needs some time to initialize first.
You can define a callback function via **SetOnReady** which is called if the camera can be used.
There you have to to call the **StartPreview** function of the CameraView control to start the preview.
<sample Show Camera Preview>

The basic functionality of the camera control is taking pictures or recording video.
<sample Take pictures>
<sample Record Video>

But it provides advanced image processing functions as well. These are color reporting, motion detection and face recognision.
<sample Motion Detector>

More samples can be found in the samples section of DroidScript.

 */

/** ## Methods ##
 * These are the methods available for CreateCameraView
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ cam.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Animate ###
 * Animates the control. *  * There are * 	“in”-Animations which are used to show objects from hidden state * 	“out”-animations which are used to hide objects in visible state and * 	“static”-animations which keep the visible state.
 * $$ cam.Animate(type, callback, time) $$
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} callback {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} time 
 */


/** ### AutoCapture ###
 * Automatically takes pictures if a motion was detected by cam.[MotionMosaic]{switchPopup(this, 'MotionMosaic')}. * The first # in the filename is a placeholder for numbers increasing for every taken picture.
 * $$ cam.AutoCapture(path, fileName, maxCount) $$
 * @param {str_ptd} path 
 * @param {str} fileName File_n#_motion
 * @param {num_int} maxCount 
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ cam.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ cam.ClearFocus() $$
 */


/** ### FindFaces ###
 * Finds faces in the current camera view.
 * $$ cam.FindFaces(maxCount) $$
 * @param {num_int} maxCount 
 * @returns obj-{ confidence:num_frc&comma; eyeDistance:num&comma; midPoint:obj:{x:num&comma; y:num}&comma; pose:num_int }
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ cam.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ cam.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ cam.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetCameraCount ###
 * Returns the amount of cameras built in to the device.
 * $$ cam.GetCameraCount() $$
 * @returns num_int
 */


/** ### GetColorEffects ###
 * Returns a list of available color effects for the camera.
 * $$ cam.GetColorEffects() $$
 * @returns str-none,mono,negative,solarize,sepia,posterize,whiteboard,blackboard,aqua,vage-cold,point-blue,point-red-yellow,emboss,sketch,neon
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ cam.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetImageHeight ###
 * Returns the camera capture height in pixels.
 * $$ cam.GetImageHeight() $$
 * @returns num_frc
 */


/** ### GetImageWidth ###
 * Returns the camera capture width in pixels.
 * $$ cam.GetImageWidth() $$
 * @returns num_frc
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ cam.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetMaxZoom ###
 * Returns the hightst possible zoom value.
 * $$ cam.GetMaxZoom() $$
 * @returns num
 */


/** ### GetParameters ###
 * Get properties, possible values and settings of the camera as “key=value; pairs.
 * $$ cam.GetParameters() $$
 * @returns str_smc-key1=value1;key2=value2;...
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ cam.GetParent() $$
 * @returns dso
 */


/** ### GetPictureSizes ###
 * Returns a list of possible picture dimensions.
 * $$ cam.GetPictureSizes() $$
 * @returns str_com-w1 x h1\,w2 x h2\,...
 */


/** ### GetPixelData ###
 * Returns the current camera's raw, png or jpg image datas encoded as base64.
 * $$ cam.GetPixelData(format, left, top, width, height) $$
 * @param {str} format GrayScale:fastest|JSON:"slowest&colon; “ARGB&comma;ARGB&comma;...”"|"&lt;resolution&gt;":"CIF: 352x288\\nQQVGA: 160x120\\nQVGA: 320x240\\nSVGA: 800x600\\nVGA: 640x480\\nXGA: 1024x768\\nUXGA: 1600x1200"|rawbase64|pngbase64|jpgbase64
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @returns str_b64
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ cam.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ cam.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ cam.GetType() $$
 * @returns str-CameraView
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ cam.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ cam.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetZoom ###
 * Returns the curent zoom value.
 * $$ cam.GetZoom() $$
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ cam.Gone() $$
 */


/** ### HasFlash ###
 * Checks if the currently used camera has a camera flash.
 * $$ cam.HasFlash() $$
 * @returns bin
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ cam.Hide() $$
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ cam.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ cam.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsRecording ###
 * Returns a boolea indicating whether the camera is currently recording a video.
 * $$ cam.IsRecording() $$
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ cam.IsVisible() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ cam.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### MotionMosaic ###
 * Defines a raster which is used for motion detection. * Use AutoCapture to take pictures if a motion was detected.
 * $$ cam.MotionMosaic(xtiles, ytiles, sensitivity, minPeriod, image) $$
 * @param {num_int} xtiles 
 * @param {num_int} ytiles 
 * @param {num_pxl} sensitivity 
 * @param {num_mls} minPeriod 
 * @param {dso} image CreateImage
 */


/** ### Record ###
 * Record a video to a given file. If seconds is specified, the recording will automatically stop after this time. Otherwise call cam.Stop().
 * $$ cam.Record(file, seconds) $$
 * @param {str_ptf} file 
 * @param {num_sec} seconds 
 */


/** ### ReportColors ###
 * Keeps tracks of the average color around a given point.
 * $$ cam.ReportColors(list, callback, sampSize, maxRate) $$
 * @param {str_pip} list x1:num_frc\,y1:num_frc\|x2:num_frc\,y2:num_frc\|...
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["lst-[[r1,g1,b1], [r2,g2,b2], ...]"]}
 * @param {num_pxl} sampSize 
 * @param {num_mls} maxRate 
 */


/** ### SetBackAlpha ###
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ cam.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ cam.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ cam.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ cam.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
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
 * $$ cam.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColorEffect ###
 * Applies a color effect to the camera.
 * $$ cam.SetColorEffect(effect) $$
 * @param {str} effect none|mono|negative|solarize|sepia|posterize|whiteboard|blackboard|aqua|vage
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ cam.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ cam.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetDuplicateImage ###
 * Define two @CreateImage controls where the camera view is duplicated to. This method may be used for cardboart AR. Have a look at [Daves forum post](https://groups.google.com/d/msg/androidscript/gJI6axNtkqk/Cc22nwVbr0QJ) about that method.
 * $$ cam.SetDuplicateImage(image1, image2) $$
 * @param {dso} image1 CreateImage
 * @param {dso} image2 CreateImage
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ cam.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetFlash ###
 * En- or disables the camera flash if available.
 * $$ cam.SetFlash(onoff) $$
 * @param {bin} onoff 
 */


/** ### SetFocusMode ###
 * Change the cameras focus mode depending  on the purpose.
 * $$ cam.SetFocusMode(mode) $$
 * @param {str} mode Auto|Picture:for taking pictures|Video:for recording videos|Macro|EDOF:Extended Depth Of Field for continuous digital focusing|Fixed|Infinity
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ cam.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetOnFocus ###
 * Define a callback function called when the user focuses the control.
 * $$ cam.SetOnFocus(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnPicture ###
 * Defines a callback function which is called if cam.AutoCapture took a picture. The _file_ parameter contains the path to the image file.
 * $$ cam.SetOnPicture(callback) $$
 * @param {fnc_json} callback {"pNames":["file"],"pTypes":["str_pth"]}
 */


/** ### SetOnReady ###
 * Defines a callback function which is called when the camera is ready for use.
 * $$ cam.SetOnReady(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOrientation ###
 * Rotates the camera view.
 * $$ cam.SetOrientation(angle) $$
 * @param {num_deg} angle 0|90|180|270
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ cam.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetParameter ###
 * Change property values of the camera. * See GetProperties to get a full list of available keys.
 * $$ cam.SetParameter(name, value) $$
 * @param {str} name 
 * @param {num||str} value 
 */


/** ### SetPictureSize ###
 * Define a custom picture size in pixels.
 * $$ cam.SetPictureSize(width, height) $$
 * @param {num_pxl} width 
 * @param {num_pxl} height 
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ cam.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetPostRotation ###
 * Rotates captured image in any desired angle in degrees.
 * $$ cam.SetPostRotation(angle) $$
 * @param {num_deg} angle 
 */


/** ### SetPreviewImage ###
 * Defines an image control which will show the captured picture automatically when taken.
 * $$ cam.SetPreviewImage(image) $$
 * @param {dso} image CreateImage
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ cam.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ cam.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetSound ###
 * En-/Disables the camera sound playing when taking pictures.
 * $$ cam.SetSound(enabled) $$
 * @param {bin} enabled 
 */


/** ### SetVideoSize ###
 * Define a custom video recording size in pixels.
 * $$ cam.SetVideoSize(width, height) $$
 * @param {num_pxl} width 
 * @param {num_pxl} height 
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ cam.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### SetZoom ###
 * Change the zoom value of the camera.
 * $$ cam.SetZoom(level) $$
 * @param {num} level 
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ cam.Show() $$
 */


/** ### StartPreview ###
 * Start the camera preview on the display.
 * $$ cam.StartPreview() $$
 */


/** ### Stop ###
 * Stop recording a video.
 * $$ cam.Stop() $$
 */


/** ### StopPreview ###
 * Stop the camera preview on the display.
 * $$ cam.StopPreview() $$
 */


/** ### Stream ###
 * Streams the camera view to a local ip.
 * $$ cam.Stream(ip, port, quality, fps, mtu) $$
 * @param {str} ip 
 * @param {num_int} port 
 * @param {num_prc} quality 
 * @param {num_fps} fps 
 * @param {num_mtu} mtu 
 */


/** ### TakePicture ###
 * Takes a picture of the current view and saves it to a file.
 * $$ cam.TakePicture(file) $$
 * @param {str_ptf} file 
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ cam.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */

// CreateCameraView.txt --> All the sample codes

/** @Sample
<sample Show Camera Preview>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>cam = app.CreateCameraView( 0.8, 0.4 );
    cam.SetOnReady( cam_OnReady );
	lay.AddChild( cam );</b>

	app.AddLayout( lay );
}

function cam_OnReady() {
  cam.StartPreview();
}
</sample>

<sample Take pictures>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>cam = app.CreateCameraView( 0.8, 0.4 );
    cam.SetOnReady( cam_OnReady );
	lay.AddChild( cam );</b>

	btn = app.CreateButton( "Snap", 0.3, -1 );
	btn.SetOnTouch( Snap );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function cam_OnReady() {
    cam.SetPictureSize( 1024, 768 );
    cam.StartPreview();
}

function Snap()
{
	cam.TakePicture( "/sdcard/MyPic.jpg" );
	app.ShowPopup("Picture saved");
}
</sample>

<sample Record Video>

function OnStart()
{
    app.SetOrientation("Landscape");

	lay = app.CreateLayout( "Linear", "Horizontal,FillXY,VCenter" );

	cam = app.CreateCameraView( .9, 1 );
	cam.SetOnReady( cam_OnReady );
	lay.AddChild( cam );

	tgl = app.CreateToggle( "Rec", 0.1 );
    tgl.SetOnTouch( Record );
	lay.AddChild( tgl );

	app.AddLayout( lay );

	recFolder = "/sdcard/Videos";
	app.MakeFolder( recFolder );
}

function cam_OnReady()
{
    cam.SetFocusMode( "Video" );
    cam.StartPreview();
}

function Record( start )
{
	if( start )
	{
	    cam.Record( recFolder + "/test.mp4" );
        app.ShowPopup("Recording");
	}
	else
	{
	    cam.Stop();
        app.ShowPopup("Saved to " + recFolder + "/test.mp4");
	}
}
</sample>

<sample Motion Detector>

var sensitivity = 10; // motion threshold
var minPeriod = 500;  // millisecs
var snapFolder = "/sdcard/Snaps";

function OnStart()
{
	app.SetOrientation( "Landscape" );

    lay = app.CreateLayout( "linear", "fillxy,VCenter" );

	layCam = app.CreateLayout( "Frame" );
	lay.AddChild( layCam );

	cam = app.CreateCameraView( 1, 1, "front" );
    cam.SetOnReady( StartDetection );
	layCam.AddChild( cam );

	app.AddLayout( lay );
}

function StartDetection()
{
	var w = cam.GetImageWidth();
	var h = cam.GetImageHeight();

	img = app.CreateImage( null, 1, 1, "Fix", w, h );
	img.SetAlpha( 0.5 );
	layCam.AddChild( img );

	cam.MotionMosaic( 3, 3, sensitivity, minPeriod, img );
	cam.StartPreview();
}
</sample>

 */

