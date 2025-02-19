// ------------- HEADER SECTION -------------


/** # CreateCameraView #
 * @abbrev cam
 * @brief Returns a new CameraView object to access the device camera
 * 
 * $$ cam = app.CreateCameraView(width, height, options) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options Front,UseBitmap,UseABGR,NoRotate,"&lt;id&gt;":"“front,back,cam0,cam1,cam2,cam3”","&lt;resolution&gt;":"CIF: 352x288\\nQQVGA: 160x120\\nQVGA: 320x240\\nSVGA: 800x600\\nVGA: 640x480\\nXGA: 1024x768\\nUXGA: 1600x1200"
 * @returns dso-CameraView
*/


// ------------- LONG DESCRIPTION ------------- 

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



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Animate */

/** ### AutoCapture ###
 * @brief Takes a picture if a motion was detected
 * Automatically takes pictures if a motion was detected by cam.[MotionMosaic]{switchPopup(this, 'MotionMosaic')}.
 * The first # in the filename is a placeholder for numbers increasing for every taken picture.
 * $$ cam.AutoCapture(path, fileName, maxCount) $$
 * @param {str_ptd} path 
 * @param {str} fileName File_n#_motion
 * @param {num_int} maxCount 
 */


/** @extern Batch */

/** @extern ClearFocus */

/** ### FindFaces ###
 * @brief Find faces in the current camera view
 * Finds faces in the current camera view.
 * $$ cam.FindFaces(maxCount) $$
 * @param {num_int} maxCount 
 * @returns obj-{ confidence:num_frc&comma; eyeDistance:num&comma; midPoint:"obj-{x:num&comma; y:num}"&comma; pose:num_int }
 */


/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** ### GetCameraCount ###
 * @brief Returns the device camera count
 * Returns the amount of cameras built in to the device.
 * $$ cam.GetCameraCount() $$
 * @returns num_int
 */


/** ### GetColorEffects ###
 * @brief Returns a new list of available color effects
 * Returns a list of available color effects for the camera.
 * $$ cam.GetColorEffects() $$
 * @returns str-none,mono,negative,solarize,sepia,posterize,whiteboard,blackboard,aqua,vage-cold,point-blue,point-red-yellow,emboss,sketch,neon
 */


/** @extern GetHeight */

/** ### GetImageHeight ###
 * @brief Returns the camera height
 * Returns the camera capture height in pixels.
 * $$ cam.GetImageHeight() $$
 * @returns num_frc
 */


/** ### GetImageWidth ###
 * @brief Returns the camera width
 * Returns the camera capture width in pixels.
 * $$ cam.GetImageWidth() $$
 * @returns num_frc
 */


/** @extern GetLeft */

/** ### GetMaxZoom ###
 * Returns the hightst possible zoom value.
 * $$ cam.GetMaxZoom() $$
 * @returns num
 */


/** ### GetParameters ###
 * @brief Get camera parameters
 * Get properties, possible values and settings of the camera as “key=value; pairs.
 * $$ cam.GetParameters() $$
 * @returns str_smc-key1=value1;key2=value2;...
 */


/** @extern GetParent */

/** ### GetPictureSizes ###
 * @brief Returns a new list of possible picture dimensions
 * Returns a list of possible picture dimensions.
 * $$ cam.GetPictureSizes() $$
 * @returns str_com-w1 x h1\,w2 x h2\,...
 */


/** ### GetPixelData ###
 * @brief Returns base64 pixel data as raw bitmap, png or jpg format
 * Returns the current camera's raw, png or jpg image datas encoded as base64.
 * $$ cam.GetPixelData(format, left, top, width, height) $$
 * @param {str} format GrayScale:fastest|JSON:"slowest&colon; “ARGB&comma;ARGB&comma;...”"|"&lt;resolution&gt;":"CIF: 352x288\\nQQVGA: 160x120\\nQVGA: 320x240\\nSVGA: 800x600\\nVGA: 640x480\\nXGA: 1024x768\\nUXGA: 1600x1200"|rawbase64|pngbase64|jpgbase64
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @returns str_b64
 */


/** @extern GetPosition */

/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ cam.GetType() $$
 * @returns str-CameraView
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** ### GetZoom ###
 * Returns the curent zoom value.
 * $$ cam.GetZoom() $$
 * @returns num
 */


/** @extern Gone */

/** ### HasFlash ###
 * @brief Returns if the current camera supports flashlight
 * Checks if the currently used camera has a camera flash.
 * $$ cam.HasFlash() $$
 * @returns bin
 */


/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** ### IsRecording ###
 * @brief Returns if the camera is currently recording
 * Returns a boolea indicating whether the camera is currently recording a video.
 * $$ cam.IsRecording() $$
 * @returns bin
 */


/** @extern IsVisible */

/** @extern Method */

/** ### MotionMosaic ###
 * @brief Define a raster for motion detection
 * Defines a raster which is used for motion detection.
 * Use AutoCapture to take pictures if a motion was detected.
 * $$ cam.MotionMosaic(xtiles, ytiles, sensitivity, minPeriod, image) $$
 * @param {num_int} xtiles 
 * @param {num_int} ytiles 
 * @param {num_pxl} sensitivity 
 * @param {num_mls} minPeriod 
 * @param {dso} image CreateImage
 */


/** ### Record ###
 * @brief Start recording video
 * Record a video to a given file. If seconds is specified, the recording will automatically stop after this time. Otherwise call cam.Stop(). For the quality, you can also pass integers found here https://developer.android.com/reference/android/media/CamcorderProfile
 * $$ cam.Record(file, seconds, quality) $$
 * @param {str_ptf} file 
 * @param {num_sec} seconds 
 * @param {str} quality high|low|480p|720p|1080p|2k|4k|8k|qvga|vga|cif
 */


/** ### ReportColors ###
 * @brief Keeps tracks of the average color around a given point
 * Keeps tracks of the average color around a given point.
 * $$ cam.ReportColors(list, callback, sampSize, maxRate) $$
 * @param {str_pip} list x1:num_frc\,y1:num_frc\|x2:num_frc\,y2:num_frc\|...
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["lst-[[r:num,g:num,b:num]]"]}
 * @param {num_pxl} sampSize 
 * @param {num_mls} maxRate 
 */


/** @extern SetBackAlpha */

/** @extern Resize */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** ### SetColorEffect ###
 * Applies a color effect to the camera.
 * $$ cam.SetColorEffect(effect) $$
 * @param {str} effect none|mono|negative|solarize|sepia|posterize|whiteboard|blackboard|aqua|vage-cold|point-blue|point-red-yellow|emboss|sketch|neon
 */


/** @extern SetColorFilter */

/** @extern SetDescription */

/** ### SetDuplicateImage ###
 * @brief Define two camera view duplicate targets
 * Define two @CreateImage controls where the camera view is duplicated to. This method may be used for cardboart AR. Have a look at [Daves forum post](https://groups.google.com/d/msg/androidscript/gJI6axNtkqk/Cc22nwVbr0QJ) about that method.
 * $$ cam.SetDuplicateImage(image1, image2) $$
 * @param {dso} image1 CreateImage
 * @param {dso} image2 CreateImage
 */


/** @extern SetEnabled */

/** ### SetFlash ###
 * @brief En-/Disables the camera flash
 * En- or disables the camera flash if available.
 * $$ cam.SetFlash(onoff) $$
 * @param {bin} onoff 
 */


/** ### SetFocusMode ###
 * @brief Change focus mode
 * Change the cameras focus mode depending  on the purpose.
 * $$ cam.SetFocusMode(mode) $$
 * @param {str} mode Auto|Picture:for taking pictures|Video:for recording videos|Macro|EDOF:Extended Depth Of Field for continuous digital focusing|Fixed|Infinity
 */


/** @extern SetMargins */

/** @extern SetOnFocus */

/** ### SetOnPicture ###
 * @brief Called when cam.AutoCapture took a picture
 * Defines a callback function which is called if cam.AutoCapture took a picture. The _file_ parameter contains the path to the image file.
 * $$ cam.SetOnPicture(callback) $$
 * @param {fnc_json} callback {"pNames":["file"],"pTypes":["str_pth"]}
 */


/** ### SetOnReady ###
 * @brief Called if the camera is ready for use
 * Defines a callback function which is called when the camera is ready for use.
 * $$ cam.SetOnReady(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOrientation ###
 * Rotates the camera view.
 * $$ cam.SetOrientation(angle) $$
 * @param {num_deg} angle 0|90|180|270
 */


/** @extern SetPadding */

/** ### SetParameter ###
 * @brief Change camera properties
 * Change property values of the camera.
 * See GetProperties to get a full list of available keys.
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


/** @extern SetPosition */

/** ### SetPostRotation ###
 * @brief Rotate the captured image
 * Rotates captured image in any desired angle in degrees.
 * $$ cam.SetPostRotation(angle) $$
 * @param {num_deg} angle 
 */


/** ### SetPreviewImage ###
 * @brief Define a preview image for captured pictures
 * Defines an image control which will show the captured picture automatically when taken.
 * $$ cam.SetPreviewImage(image) $$
 * @param {dso} image CreateImage
 */


/** @extern SetScale */

/** @extern SetSize */

/** ### SetSound ###
 * @brief n-/Disables the camera sound
 * En-/Disables the camera sound playing when taking pictures.
 * $$ cam.SetSound(enabled) $$
 * @param {bin} enabled 
 */


/** ### SetVideoSize ###
 * @brief Define custom video recording size
 * Define a custom video recording size in pixels.
 * $$ cam.SetVideoSize(width, height) $$
 * @param {num_pxl} width 
 * @param {num_pxl} height 
 */


/** @extern SetVisibility */

/** ### SetZoom ###
 * Change the zoom value of the camera.
 * $$ cam.SetZoom(level) $$
 * @param {num} level 
 */


/** @extern SetWeight */

/** @extern Show */

/** ### StartPreview ###
 * Start the camera preview on the display.
 * $$ cam.StartPreview() $$
 */


/** ### Stop ###
 * @brief Stop recording video
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
 * @brief Save the current camera view to a file
 * Takes a picture of the current view and saves it to a file.
 * $$ cam.TakePicture(file) $$
 * @param {str_ptf} file 
 */


/** @extern Tween */


// ------------- SAMPLES ------------- 


    
/**
@sample Show Camera Preview
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
 */
    
            
    
/**
@sample Take pictures
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
 */
    
            
    
/**
@sample Record Video
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
 */
    
            
    
/**
@sample Motion Detector
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
 */
    
            
    
/**
@sample Python Show Camera Preview
from native import app

def OnStart():
    global cam
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    cam = app.CreateCameraView( 0.8, 0.4 )
    cam.SetOnReady( cam_OnReady )
    lay.AddChild( cam )

    app.AddLayout( lay )

def cam_OnReady():
    cam.StartPreview()
 */
    
            
    
/**
@sample Python Take pictures
from native import app

def OnStart():
    global cam
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    cam = app.CreateCameraView( 0.8, 0.4 )
    cam.SetOnReady( cam_OnReady )
    lay.AddChild( cam )

    btn = app.CreateButton( "Snap", 0.3, -1 )
    btn.SetOnTouch( Snap )
    lay.AddChild( btn )

    app.AddLayout( lay )

def cam_OnReady():
    cam.SetPictureSize( 1024, 768 )
    cam.StartPreview()

def Snap():
    cam.TakePicture( "/sdcard/MyPic.jpg" )
    app.ShowPopup("Picture saved")
 */
    
            
    
/**
@sample Python Record Video
from native import app

def OnStart():
    global cam, recFolder
    app.SetOrientation("Landscape")

    lay = app.CreateLayout( "Linear", "Horizontal,FillXY,VCenter" )

    cam = app.CreateCameraView( .9, 1 )
    cam.SetOnReady( cam_OnReady )
    lay.AddChild( cam )

    tgl = app.CreateToggle( "Rec", 0.1 )
    tgl.SetOnTouch( Record )
    lay.AddChild( tgl )

    app.AddLayout( lay )

    recFolder = "/sdcard/Videos"
    app.MakeFolder( recFolder )

def cam_OnReady():
    cam.SetFocusMode( "Video" )
    cam.StartPreview()

def Record( start ):
    if start:
        cam.Record( recFolder + "/test.mp4" )
        app.ShowPopup("Recording")
    else:
        cam.Stop()
        app.ShowPopup("Saved to " + recFolder + "/test.mp4")
 */
    
            
    
/**
@sample Python Motion Detector
from native import app

def OnStart():
    global layCam, cam
    app.SetOrientation( "Landscape" )

    lay = app.CreateLayout( "linear", "fillxy,VCenter" )

    layCam = app.CreateLayout( "Frame" )
    lay.AddChild( layCam )

    cam = app.CreateCameraView( 1, 1, "front" )
    cam.SetOnReady( StartDetection )
    layCam.AddChild( cam )

    app.AddLayout( lay )

def StartDetection():
    w = cam.GetImageWidth()
    h = cam.GetImageHeight()

    img = app.CreateImage( None, 1, 1, "Fix", w, h )
    img.SetAlpha( 0.5 )
    layCam.AddChild( img )

    cam.MotionMosaic( 3, 3, sensitivity, minPeriod, img )
    cam.StartPreview()
 */
    
            
