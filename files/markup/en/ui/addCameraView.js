
/** # CameraView
 * Adds a camera view into your app to take pictures and record videos.
 * $$ cam = ui.addCameraView(parent, options, width, height)
 * @param {object} parent The parent layout where to add the camera view.
 * @param {string} options Comma separated options for the camera view. Available values are "Front", "Back", "Video", "Fill" and "Stretch". "Video" option includes audio.
 * @param {number} width Fraction of the parent width [0-1].
 * @param {number} height Fraction of the parent height [0-1].
 * @returns object
 */

/**
@description
The `capture` method returns the image data. To save the image in DroidScript, you can use the `CreateFile` method like this:
<js>
// capture an image
img = cam.capture("jpg", "bytes")

const file = app.CreateFile("myimage.jpg", "rw")
file.WriteDate(bytes, "bytes")
file.Close()
</js>
Likewise, the `record` method requires a callback to be called when the video data is ready. To save videos in DroidScript, you can use the `CreateFile` method like this:
<js>
// record a video
cam.record("mp4", "bytes", onRecord)

// in your callback function
onRecord( bytes ) {
    const file = app.CreateFile("myvideo.mp4", "rw")
    file.WriteDate(bytes, "bytes")
    file.Close()
}
</js>
 */

ui.addCameraView = function(parent, options, width, height) {
    return new ui.CameraView(parent, options, width, height)
}

ui.CameraView = class extends ui.Control
{
    constructor(parent, options, width, height) {
        super(parent, width, height, options, "CameraView")
        //invisible stuffs
        this._supported = true
        this._activePreview = false
        this._props.video = {
            facingMode: this._options.includes("front") ? "user" : "environment",
            width: {min: 320, ideal: 1080},
            height: {min: 240, ideal: 720},
            torch: this._options.includes("flash")
        }
        // if( this._options.includes("video") ) this._props.audio = true
        // Check if the browser supports getUserMedia
        this._supported = (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
        this._constraints = {}
        this._MR = null, this._vidChunks = [], this._recording = false
        this._create()
    }

    _create() {
        this._div.style.position = "relative";
        this._ctl = document.createElement( "video" )
        this._ctl.autoplay = true;
        this._ctl.poster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABHNCSVQICAgIfAhkiAAAAD5JREFUeJztwTEBAAAAwqD1T20LL6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICnAZykAAGmdZWOAAAAAElFTkSuQmCC";
        this._ctl.classList.add( "ui-camera-view" )
        if( this._options.includes("fill") ) this._ctl.style.objectFit = "cover"
        else if( this._options.includes("stretch") ) this._ctl.style.objectFit = "fill"
        this._div.appendChild( this._ctl )
        navigator.mediaDevices.enumerateDevices()
        	.then(devices => {
            	this._camCount = devices.filter(device => device.kind === 'videoinput').length;
            	if(this._camCount > 0) if( this._onReady ) this._onReady()
          	})
          	.catch(err => {
            	if( this._onError ) this._onError( err )
          	})
    }
    
    _getTrack( type ) {
        const tracks =  this._ctl.srcObject.getTracks()
        if(tracks && tracks.length) return tracks.find(track => track.kind == type)
        return null
    }
    
    //Visible properties
    
    /** ## Properties
     * These are the setter and getter properties for CameraView component.
     */
     
    get cameraCount() { return this._camCount }
    
    /** @prop {number} imageHeight Sets or returns the image height in pixels. */
    set imageHeight( val ) { return this._props.video.height.ideal = val }
    get imageHeight() { return this._ctl.videoHeight }
    
    /** @prop {number} width Sets or returns the image width in pixels. */
    set imageWidth( val ) { this._props.video.width.ideal = val }
    get imageWidth() { return this._ctl.videoWidth }
    
    // not yet supported
    get maxZoom() { return }
    set zoom( val ) {}
    get zoom() { return }
    set colorEffect( color ) {}
    set orientation( val ) {}
    set flash( val ) {
        const vid = this._getTrack("video")
        if(val === this._props.video.torch) return
        if( vid ) {
            const sett = this.capabilities
            if("torch" in sett) this._props.video.torch = val
        }
    }
    get flash() { return this._props.video.torch }

    get recording() { return this._recording }
    
    /** @prop {object} capabilities Returns the capabilities of the camera. You can inspect this object to set camera constraints. */
    get capabilities() {
        const vid = this._getTrack("video")
        return vid ? vid.getCapabilities() : {}
    }
    
    /** @prop {number} frameRate Sets or returns the video frame rate. See `capabilites` for min and max values. */
    set frameRate( val ) { this._props.video.frameRate = val }
    get frameRate() { return this._props.video.frameRate }
    
    /** @prop {string} focusMode Sets or returns the camera focus mode. Available values are `"manual"`, `"single-shot"`, `"continuous"` */
    set focusMode(val = "continuous") {
        val = val.toLowerCase()
        this._props.video.focusMode = val
    }
    get focusMode() { return this._props.video.focusMode }
    
    /** @prop {number} focusDistance Sets or returns the focus distance. See `capabilities` for min and max values. */
    set focusDistance( val ) { this._props.video.focusDistance = val }
    get focusDistance() { return this._props.video.focusDistance }
    
    /** @prop {object} img Sets the preview image taken on capture. Must be a UI image component. */
    set previewImage( img ) { if(img.type == "Image") this._previewImg = img }
    
    /** @prop {boolean} sound Sets or returns a boolean value whether the sound is enabled or disabled */
    set sound( val ) { this._props.audio = val }
    get sound() { return this._props.audio }
    
    /** @prop {string} source The camera source to be use. Values can be `"front"` or `"back"`. */
    set source(val = "back") {
        val = val.toLowerCase().trim()
        val = val == "back" ? "environment" : "user"
        if(val === this._props.video.facingMode) return
        this._props.video.facingMode = val
    }
    get source() { return this._props.video.facingMode == "user" ? "front" : "back" }
    
    /** @prop {number} iso Sets or returns the camera iso. See `capabilities` for max and min values. */
    set iso( val ) { this._props.video.iso = val }
    get iso() { return this._props.video.iso }
    
    /** ### getPixelData
     * Returns the pixel data of the image preview or a given portion of it.
     * $$ cam.getPixelData(format, left, top, width, height)
     * @param {string} format Values are "rgba" array, or "pngbase64" or "jpgbase64".
     * @param {number} left Starting pixel from the left.
     * @param {number} top Starting pixel from the top.
     * @param {number} width The width of the image portion in pixels.
     * @param {number} height The height of the image portion in pixels. 
     */
    getPixelData(format="rgba", left=0, top=0, width, height) {
        format = format.toLowerCase()
        const c = document.createElement("canvas"), ctx = c.getContext("2d")
        c.width = this._ctl.videoWidth, c.height = this._ctl.videoHeight
        ctx.drawImage(this._ctl, 0, 0, c.width, c.height)
        const img = ctx.getImageData(left, top, width||c.width, height||c.height)
        if(format == "rgba") return img
        const c2 = document.createElement("canvas"), ctx2 = c2.getContext("2d")
        c2.width = width || c.width, c2.height = height || c.height
        ctx2.putImageData(img, 0, 0) 
        if( format.includes("png") ) return c2.toDataURL("image/png")
        if( format.includes("jpg") ) return c2.toDataURL("image/jpg")
    }
    
    /** ### capture
     * Capture an image. This will return an image data which you can save or manipulate.
     * $$ cam.capture(type, format)
     * @param {string} type The image type. Values are "jpg", "png", "webp", "gif". Default is "jpg".
     * @param {string} format The returned data format. Can be "base64", "bytes"(regular array), "uint8array"(typed array) or "arraybuffer".
     * @return object
     */
    capture(type = "jpg", format="base64") {
        type = type.toLowerCase(), format = format.toLowerCase()
        const c = document.createElement("canvas"), ctx = c.getContext("2d")
        c.width = this._ctl.videoWidth, c.height = this._ctl.videoHeight
        ctx.drawImage(this._ctl, 0, 0, c.width, c.height)
        const img = c.toDataURL("image/" + type)
        if( this._previewImg ) this._previewImg.image = img
        if(format == "base64") return img
        // Remove the data URL prefix to get the base64-encoded image data
        const base64 = img.split(",")[1]
        const binaryData = atob( base64 )
        const uint8Array = new Uint8Array( binaryData.length )
        for (let i = 0; i < binaryData.length; i++) uint8Array[i] = binaryData.charCodeAt(i)
        if(format == "uint8array") return uint8Array
        if( format.includes("bytes") ) return [...uint8Array]
        if(format == "arraybuffer") return uint8Array.buffer
    }
    
    // type: mp4, ogg, webm
    // format: blob, base64, bytes, objecturl, arraybuffer, uint8array
    /** ### record
     * Record a video.
     * $$ cam.record(type, format, cb)
     * @param {string} type Video output encoding format. Values can be "mp4", "ogg" and "webm".Default is "mp4"
     * @param {string} format Return video data format. Values can be "blob", "base64", "bytes" (regular array), "objecturl", "arraybuffer", "uint8array" (typed array). Default is "blob"
     * @param {function} cb The callback function to be called passing the video data.
     */
    record(type="mp4", format="blob", cb) {
        if(typeof cb != "function") return // callback is required
        type = type.toLowerCase(), format = format.toLowerCase()
        this._recording = true, this._onRecord = cb
        this._MR = new MediaRecorder( this._ctl.srcObject ), this._vidChunks = []
        this._MR.ondataavailable = event => { 
          	if(event.data.size > 0) this._vidChunks.push( event.data )
        };
        this._MR.onstop = () => {
            this._MR = null
          	const blob = new Blob(this._vidChunks, {type: "video/" + format}); // mp4, ogg, webm
          	if(format == "blob") return this._onRecord( blob )
          	if(format == "objecturl") return this._onRecord( URL.createObjectURL(blob) )
          	// if not blob and not objecturl
          	const reader = new FileReader()
            reader.onload = () => {
                // arraybuffer / dataUri:base64
                const arrayBuffer = reader.result
                // base64 dataUri
                if(format == "base64") return this._onRecord( arrayBuffer )
                // arraybuffer
                if(format == "arraybuffer") return this._onRecord( arrayBuffer )
                // uint8array
                const uint8Array = new Uint8Array( arrayBuffer )
                if(format == "uint8array") return this._onRecord( uint8Array )
                // bytes
                const bytes = [...uint8Array]
                if( format.includes("byte") ) return this._onRecord( bytes )
            }
            if(format == "base64") reader.readAsDataURL( blob )
            else reader.readAsArrayBuffer( blob )
        };
        this._MR.start()
    }
    
    /** ### setPictureSize
     * Sets the size of the image.
     * $$ cam.setPictureSize(width, height)
     * @param {number} width The image width in pixels. See `capabilities` for minimum and maximum values.
     * @param {number} height The image height in pixels. See `capabilities` for minimum and maximum values.
     */
    setImageSize(width, height) {
        this._props.video.width.ideal = width, this._props.video.height.ideal = height;
    }
    
    /** ### startPreview
     * Start streaming the camera.
     * $$ cam.startPreview()
     */
    startPreview() { this.updatePreview() }

	/** ### updatePreview
	 * Update the camera preview. Call it when you have updated the constraints of the camera such as setting the source from back to front, or setting zoom level etc.
	 * $$ cam.updatePreview()
	 */
    updatePreview() {
        if(!this._supported || this._props == this._constraints) return
        if( this._activePreview ) this._ctl.pause(), this.stopPreview()
        navigator.mediaDevices.getUserMedia( this._props )
        .then(stream => {
            this._ctl.srcObject = stream
            this._activePreview = true
            this._constraints = JSON.parse( JSON.stringify(this._props) )
        })
        .catch(error => { if( this._onError ) this._onError() });
    }
    
    /** ### stop 
     * Stops the camera from streaming.
     * $$ cam.stop()
     */
    stopPreview() {
        const tracks = this._ctl.srcObject.getTracks()
        if(tracks && tracks.length) tracks.forEach(track => track.stop())
        this._activePreview = false
    }
    
    /** ### stop
     * Stop recording a video.
     * $$ cam.stop()
     */
    stop() {
        if( !this._recording ) return
        this._recording = false
        this._MR.stop()
    }
    
    /** ### setOnReady
     * Add a callback handler when the camera is ready.
     * $$ cam.setOnReady( cb )
     * @param {function} cb The callback function to be called.
     */
    setOnReady( cb ) { this._onReady = cb }
    
    /** ### setOnError
     * Add a callback handler when an error occured.
     * @param {function} cb The callback function to be called. ---> @arg {string} error The error message.
     */
    setOnError( cb ) { this._onError = cb }

    setOnFocus( cb ) { this._onFocus = cb }
}

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
        this.layBtm = ui.addLayout(this.main, "Linear", "Horizontal,Bottom", 1, 0.1)
        this.layBtm.childSpacing = "Between"
        this.layBtm.setPosition(0, 0.9)
        this.layBtm.padding = [null, null, null, "1rem"]

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
        
        const img = this.cam.capture("jpg", "bytes")
        
        //Create unique filename
        const name = "img-" + new Date().getTime() + ".jpg"
        const path = "/Internal/DCIM/" + name
        
        //Save the image data
        const file = app.CreateFile(path, "rw")
        file.WriteData(img, "bytes")
        file.Close()
        
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





