/** # CameraView
 * Adds a camera view into your app to take pictures and record videos.
 * $$ cam = ui.addCameraView(parent, options, width, height)
 * @param {uio-Layout} parent The parent layout where to add the camera view.
 * @param {String} options Comma separated options for the camera view. Available values are "Front", "Back", "Video", "Fill" and "Stretch". "Video" option includes audio.
 * @param {Number} width Fraction of the parent width [0-1].
 * @param {Number} height Fraction of the parent height [0-1].
 * @returns uio-CameraView
 */


/**
@description
The `capture` method returns the image data. To save the image in DroidScript, you can use the `WriteFile` method like this:
<js>
// capture an image
img = cam.capture("jpeg", "base64")
filePath = "image.jpeg"
app.WriteFile(filePath, img, "base64")
</js>
Likewise, the `record` method requires a callback to be called when the video data is ready. To save videos in DroidScript, you can use the `WriteFile` method like this:
<js>
// record a video
cam.record("mp4", "base64", onRecord)

// in your callback function
onRecord( data ) {
    filePath = "video.mp4"
    app.WriteFile(filePath, data, "base64")
}
</js>

Note: Don't forget to add permission to "Camera" and/or "Microphone" when you are taking videos.
 */


    /** ## Properties
     * These are the setter and getter properties for CameraView component.
     */


    /** @prop {number} imageHeight Sets or returns the image height in pixels. */


    /** @prop {number} width Sets or returns the image width in pixels. */


    /** @prop {object} capabilities Returns the capabilities of the camera. You can inspect this object to set camera constraints. */


    /** @prop {number} frameRate Sets or returns the video frame rate. See `capabilites` for min and max values. */


    /** @prop {string} focusMode Sets or returns the camera focus mode. Available values are `"manual"`, `"single-shot"`, `"continuous"` */


    /** @prop {number} focusDistance Sets or returns the focus distance. See `capabilities` for min and max values. */


    /** @prop {object} img Sets the preview image taken on capture. Must be a UI image component. */


    /** @prop {boolean} sound Sets or returns a boolean value whether the sound is enabled or disabled */


    /** @prop {string} source The camera source to be use. Values can be `"front"` or `"back"`. */


    /** @prop {number} iso Sets or returns the camera iso. See `capabilities` for max and min values. */


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


    /** ### getPixelData
     * Returns the pixel data of the image preview or a given portion of it.
     * $$ cam.getPixelData(format, left, top, width, height)
     * @param {string} format Values are "rgba" array, or "pngbase64" or "jpgbase64".
     * @param {number} left Starting pixel from the left.
     * @param {number} top Starting pixel from the top.
     * @param {number} width The width of the image portion in pixels.
     * @param {number} height The height of the image portion in pixels. 
     */


    /** ### capture
     * Capture an image. This will return an image data which you can save or manipulate.
     * $$ cam.capture(type, format)
     * @param {string} type The image type. Values are "jpg" or "jpeg"", "png", "webp", "gif". Default is "jpg".
     * @param {string} format The returned data format. Can be "base64", "bytes"(regular array), "uint8array"(typed array) or "arraybuffer". Default is "base64"
     * @return object
     */


    /** ### record
     * Record a video.
     * $$ cam.record(type, format, cb)
     * @param {string} type Video output encoding format. Values can be "mp4", "ogg" and "webm".Default is "mp4"
     * @param {string} format Return video data format. Values can be "blob", "base64", "bytes" (regular array), "objecturl", "arraybuffer", "uint8array" (typed array). Default is "base64"
     * @param {function} cb The callback function to be called passing the video data.
     */


    /** ### setPictureSize
     * Sets the size of the image.
     * $$ cam.setPictureSize(width, height)
     * @param {number} width The image width in pixels. See `capabilities` for minimum and maximum values.
     * @param {number} height The image height in pixels. See `capabilities` for minimum and maximum values.
     */


    /** ### startPreview
     * Start streaming the camera.
     * $$ cam.startPreview()
     */


	/** ### updatePreview
	 * Update the camera preview. Call it when you have updated the constraints of the camera such as setting the source from back to front, or setting zoom level etc.
	 * $$ cam.updatePreview()
	 */


    /** ### stop 
     * Stops the camera from streaming.
     * $$ cam.stop()
     */


    /** ### stop
     * Stop recording a video.
     * $$ cam.stop()
     */


    /** ### setOnReady
     * Add a callback handler when the camera is ready.
     * $$ cam.setOnReady( cb )
     * @param {function} cb The callback function to be called.
     */


    /** ### setOnError
     * Add a callback handler when an error occured.
     * @param {function} cb The callback function to be called. ---> @arg {string} error The error message.
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


/** ## Examples
 * Try these samples for `CameraView` control.
 * @jdocs You can edit the code, save it and run. See your app in real time.
 */


/**
@sample Camera app in DroidScript
//Force this app to portrait mode
cfg.Portrait

//Make sure to add Camera permission
_AddPermissions("Camera")

//Main class for the app
class Main extends App
{
    //Called when app starts
    onStart()
    {
        //Create a main layout of type Frame
        this.main = ui.addLayout("main", "Frame", "FillXY")

		//Add a camera view that fills the parent width and height
		//The Fill option makes the image preview fills the entire camera view, otherwise the actual resolution will be viewed.
        this.cam = ui.addCameraView(this.main, "Fill", 1, 1)

		//Create a horizontal layout that will be displayed in the bottom of the screen
        this.layBtm = ui.addLayout(this.main, "Linear", "Horizontal,Vcenter", 1, 0.1)
        this.layBtm.childSpacing = "Between"
        this.layBtm.setPosition(0, 0.9)
        this.layBtm.padding = [1, null, 1, null, "rem"]

		//Create a camera switch toggle icon at the left
        this.toggleCam = ui.addButton(this.layBtm, "flip_camera_android", "icon")
        this.toggleCam.textColor = "#fff"
        this.toggleCam.setOnTouch( this.onSwitchCam )
        
        //Create a snap button which is a bit larger
        this.snapBtn = ui.addButton(this.layBtm, "camera", "icon")
        this.snapBtn.textColor = "#fff"
        this.snapBtn.iconSize = "2.5rem"
        this.snapBtn.setOnTouch( this.captureImg )
        
        //Create a preview image and pass it to the previewImage prop of the camera view
        this.prevImg = ui.addImage(this.layBtm, "", "avatar,initial", null)
        this.cam.previewImage = this.prevImg
        this.prevImg.setSize(2.5, 2.5, "rem")
        this.prevImg.cornerRadius = "50%"
        this.prevImg.backColor = "black"

		//Start the camera preview
        this.cam.startPreview()
    }
    
    //Handle switching of camera source
    onSwitchCam() {
        let src = this.cam.source == "front" ? "back" : "front"
        this.cam.source = src
        this.cam.updatePreview()
    }
    
    //Handle capture and save the image
    captureImg() {
        const img = this.cam.capture("jpg", "base64")
        
        //Create unique filename
        const name = "img-" + new Date().getTime() + ".jpg"
        const path = "/Internal/DCIM/" + name
        
        //Save the image data
        app.WriteFile(path, img, "base64")
        
        ui.showPopup( "Image has been saved!" )
    }
}
 */


/**
@sample Video recorder in DroidScript
//Force this app to portrait mode.
cfg.Portrait

//Make sure to add Camera permission
_AddPermissions("Camera")

//Main class for the app
class Main extends App
{
    //Called when app starts
    onStart()
    {
        this.time = 0

        //Create a main layout of type Frame
        this.main = ui.addLayout("main", "Absolute", "FillXY")

		//Add a camera view that fills the parent width and height
		//The Fill option makes the image preview fills the entire camera view, otherwise the actual resolution will be viewed.
        this.cam = ui.addCameraView(this.main, "Fill,Video", 1, 1)
        
        this.timer = ui.addText(this.main, "", "Center,Caption", 1)
        this.timer.textColor = "#fff"
        this.timer.setPosition(0, 0.025)

		//Create a horizontal layout that will be displayed in the bottom of the screen
        this.layBtm = ui.addLayout(this.main, "Linear", "Horizontal", 1, 0.1)
        this.layBtm.setPosition(0, 0.9)
        
        //Create a snap button which is a bit larger
        this.vidBtn = ui.addButton(this.layBtm, "videocam", "icon")
        this.vidBtn.textColor = "#fff"
        this.vidBtn.iconSize = "2.5rem"
        this.vidBtn.setOnTouch( this.handleRecord )

		//Start the camera preview
        this.cam.startPreview()
    }
    
    //Handle switching of camera source
    handleRecord() {
        //Start recording if icon is videocam
        if(this.vidBtn.icon == "videocam") {
            this.cam.record("mp4", "base64", this.onRecord)
            this.interval = setInterval(() => {
                this.timer.text = (++ this.time) + " sec"
            }, 1000)
        }
        // otherwise stop the recording
        else this.cam.stop()
        
        //Switch button icon
        this.vidBtn.icon = this.cam.recording ? "stop" : "videocam"
    }
    
    //Handle on record and save the video data
    onRecord( data ) {
        
        // Clear interval
        clearInterval( this.interval )
        this.interval = null
        this.timer.text = ""
        this.time = 0
        
        //Create unique filename
        const name = "vid-" + new Date().getTime() + ".mp4"
        const path = "/Internal/DCIM/" + name
        
        //Save the video data
        app.WriteFile(path, data, "base64")

        ui.showPopup( "Video has been saved!" )
    }
}
 */


/**
@sample Python Camera app in DroidScript
from hybrid import ui, app

def onStart():
    # Force this app to portrait mode
    cfg.Portrait
    
    # Make sure to add Camera permission
    _AddPermissions("Camera")
    
    # Create a main layout of type Frame
    main = ui.addLayout("main", "Frame", "FillXY")
    
    # Add a camera view that fills the parent width and height
    # The Fill option makes the image preview fill the entire camera view, otherwise the actual resolution will be viewed.
    cam = ui.addCameraView(main, "Fill", 1, 1)
    
    # Create a horizontal layout that will be displayed at the bottom of the screen
    layBtm = ui.addLayout(main, "Linear", "Horizontal,Vcenter", 1, 0.1)
    layBtm.childSpacing = "Between"
    layBtm.setPosition(0, 0.9)
    layBtm.padding = [1, None, 1, None, "rem"]
    
    # Create a camera switch toggle icon at the left
    toggleCam = ui.addButton(layBtm, "flip_camera_android", "icon")
    toggleCam.textColor = "#fff"
    toggleCam.setOnTouch(onSwitchCam)
    
    # Create a snap button which is a bit larger
    snapBtn = ui.addButton(layBtm, "camera", "icon")
    snapBtn.textColor = "#fff"
    snapBtn.iconSize = "2.5rem"
    snapBtn.setOnTouch(captureImg)
    
    # Create a preview image and pass it to the previewImage prop of the camera view
    prevImg = ui.addImage(layBtm, "", "avatar,initial", None)
    cam.previewImage = prevImg
    prevImg.setSize(2.5, 2.5, "rem")
    prevImg.cornerRadius = "50%"
    prevImg.backColor = "black"
    
    # Start the camera preview
    cam.startPreview()

# Handle switching of camera source
def onSwitchCam():
    src = cam.source == "front" ? "back" : "front"
    cam.source = src
    cam.updatePreview()

# Handle capture and save the image
def captureImg():
    img = cam.capture("jpg", "base64")
    
    # Create unique filename
    name = "img-" + str(new Date().getTime()) + ".jpg"
    path = "/Internal/DCIM/" + name
    
    # Save the image data
    app.WriteFile(path, img, "base64")
    
    ui.showPopup("Image has been saved!")
 */


/**
@sample Python Video recorder in DroidScript
from hybrid import ui, app

def onStart():
    # Force this app to portrait mode.
    cfg.Portrait
    
    # Make sure to add Camera permission
    _AddPermissions("Camera")
    
    time = 0
    
    # Create a main layout of type Frame
    main = ui.addLayout("main", "Absolute", "FillXY")
    
    # Add a camera view that fills the parent width and height
    # The Fill option makes the image preview fill the entire camera view, otherwise the actual resolution will be viewed.
    cam = ui.addCameraView(main, "Fill,Video", 1, 1)
    
    timer = ui.addText(main, "", "Center,Caption", 1)
    timer.textColor = "#fff"
    timer.setPosition(0, 0.025)
    
    # Create a horizontal layout that will be displayed at the bottom of the screen
    layBtm = ui.addLayout(main, "Linear", "Horizontal", 1, 0.1)
    layBtm.setPosition(0, 0.9)
    
    # Create a snap button which is a bit larger
    vidBtn = ui.addButton(layBtm, "videocam", "icon")
    vidBtn.textColor = "#fff"
    vidBtn.iconSize = "2.5rem"
    vidBtn.setOnTouch(handleRecord)
    
    # Start the camera preview
    cam.startPreview()

# Handle switching of camera source
def handleRecord():
    # Start recording if icon is videocam
    if vidBtn.icon == "videocam":
        cam.record("mp4", "base64", onRecord)
        interval = setInterval(() => {
            timer.text = str(++time) + " sec"
        }, 1000)
    # otherwise stop the recording
    else:
        cam.stop()
    
    # Switch button icon
    vidBtn.icon = "stop" if cam.recording else "videocam"

# Handle on record and save the video data
def onRecord(data):
    # Clear interval
    clearInterval(interval)
    interval = None
    timer.text = ""
    time = 0
    
    # Create unique filename
    name = "vid-" + str(new Date().getTime()) + ".mp4"
    path = "/Internal/DCIM/" + name
    
    # Save the video data
    app.WriteFile(path, data, "base64")
    
    ui.showPopup("Video has been saved!")
 */


