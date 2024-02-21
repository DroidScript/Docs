/** # VideoView
 * Adds a video view into your app layout.
 * @param {Object} parent The layout where to add the video view.
 * @param {string} url The video source url. Supported video formats are `"mp4", "ogg", "webm"`
 * @param {string} options Comma separated options. Values can be one or a combination of the following: `autoplay`, `loop`, `controls`, `muted`, `fill` or `stretch`. If you pass "controls", you can optionally remove some controls such as "nodownload", "nofullscreen" and "noremoteplayback".
 * @param {number} width Fraction of the parent width. Values can be [0-1].
 * @param {number} height Fraction of the parent height. Values can be [0-1].
 * @returns Object
 * 
 * By default, the video will be resize relative to its dimensions. If you want the video to cover the entire width and height, pass `"fill"` in the options argument.
 */
ui.addVideoView = function(parent, url="", options="", width, height) {
    return new ui.VideoView(parent, url, options, width, height)
}

ui.VideoView = class extends ui.Control {
    
    constructor(parent, url, options, width, height) {
        
        super(parent, width, height, options, "VideoView")
        
        //Invisible properties (not shown in auto-complete).
        this._url = url;
        this._mtdata = {};
        
        //Visible properties.
        
        //Create the html element(s).
        this._create()
    }
    
    //--- Invisible methods --------------------------
    
    _create() {
        let elem = this._ctl = document.createElement("video")
        elem.classList.add("ui-video-view")
        elem.src = this._url
        elem.controls = this._options.includes("control")
        elem.loop = this._options.includes("loop")
        elem.muted = this._options.includes("muted")
        if( this._options.includes("fill") ) elem.style.objectFit = "cover"
        else if( this._options.includes("stretch") ) elem.style.objectFit = "fill"
        if( this._options.includes("control") ) {
            var ctrlst = []
            if( this._options.includes("nodownload") ) ctrlst.push( "nodownload" )
            if( this._options.includes("nofullscreen") ) ctrlst.push( "nofullscreen" )
            if( this._options.includes("noremoteplayback") ) ctrlst.push( "noremoteplayback" )
            elem.setAttribute("controlslist", ctrlst.join(" "))
        }
        elem.addEventListener("loadedmetadata", e => {
            this._mtdata = {
                dur: elem.duration,
                width: elem.videoWidth,
                height: elem.videoHeight,
                ratio: elem.videoWidth / elem.videoHeight
            }
        })
        elem.addEventListener("canplay", e => {
            if( this._onReady ) this._onReady( this._mtdata )
            if( this._options.includes("autoplay") ) elem.play()
        })
        elem.addEventListener("play", e => { if( this._onPlay ) this._onPlay() })
        elem.addEventListener("pause", e => { if( this._onPause ) this._onPause() })
        elem.addEventListener("ended", e => { if( this._onComplete ) this._onComplete() })
        elem.addEventListener("error", e => { if( this._onError ) this._onError() })
        elem.addEventListener("seeked", e => { if( this._onSeek ) this._onSeek( elem.currentTime ) })
        elem.addEventListener("seeking", e => { if( this._onSeeking ) this._onSeeking( elem.currentTime ) })
        elem.addEventListener("volumechange", e => { if( this._onVolume ) this._onVolume( elem.volume ) })
        elem.addEventListener("timeupdate", e => { if( this._onProg ) this._onProg( elem.currentTime ) })
        
        this._div.appendChild( elem )
    }
    
    //--- Visible properties/methods -----------------

    /** ## Properties
     * Here are the setter and getter properties for the VideoView component.
     */

    /** @prop {string} url Sets or returns the video source url. */
    set url( val ) { this._ctl.src = val }
    get url() { return this._ctl.src }

    /** @prop {number} volume Sets or returns the video volume. Values can be [0-1]. */
    set volume( val ) { this._ctl.volume = val }
    get volume() { return this._ctl.volume }

    /** @prop {number} duration Returns the time duration of the video in seconds. */
    get duration() { return this._ctl.duration }

    /** @prop {boolean} played Returns a boolean whether the video is currently playing. */
    get played() { return this._ctl.played }

    /** @prop {boolean} paused Returns a boolean whether the video is paused. */
    get paused() { return this._ctl.paused }

    /** @prop {boolean} completed Returns a boolean whether the video playback is completed. */
    get completed() { return this._ctl.ended }

    /** @prop {boolean} muted Returns a boolean whether the video audio is muted. */
    set muted( val ) { this._ctl.muted = val }
    get muted() { return this._ctl.muted }

    /** @prop {boolean} seeking Returns a boolean whether the user is currently seeking in the video playback seekbar. */
    get seeking() { return this._ctl.seeking }

    /** @prop {number} speed Sets or returns the playback speed. */
    set speed( val ) { this._ctl.playbackRate = val }
    get speed() { return this._ctl.playbackRate }

    /** @prop {boolean} loop Sets or returns a boolean whether the video should start over again when completed. */
    set loop( val ) { this._ctl.loop = val }
    get loop() { return this._ctl.loop }

    /** ## Methods
     * Here are the methods for the VideoView component.
     */

    /** ### enterFullscreen
     * Play video in fullscreen if supported.
     * $$ vid.enterFullscreen()
     */
    enterFullscreen() {
        if( this._ctl.webkitSupportsFullscreen ) this._ctl.webkitEnterFullscreen();
        else console.warn( "Fullscreen is not supported" )
    }

    /** ### exitFullscreen
     * Exit fullscreen if video is playing fullscreen.
     * $$ vid.exitFullscreen()
     */
    exitFullscreen() {
        if( this._ctl.webkitDisplayingFullscreen ) this._ctl.webkitExitFullScreen();
        else console.warn( "Video is not playing in fullscreen" )
    }
    
    /** ### play
     * Play the video.
     * $$ vid.play()
     */
    play() { this._ctl.play() }

    /** ### stop
     * Stop the playing video.
     * $$ vid.stop()
     */
    stop() { this._ctl.pause() }

    /** ### setOnReady
     * Sets a callback handler when the video has buffered enough to begin playing. Video might not completely loaded for this event to be fired.
     * $$ vid.setOnReady( cb )
     * @param {function} cb The callback function to be called. ---> @arg {object} info Basic information of the video such as duration and dimensions.
     */
    setOnReady( cb ) { this._onReady = cb }

    /** ### setOnPlay
     * Sets a callback handler when the video is played by the user or programmatically.
     * $$ vid.setOnPlay( cb )
     * @param {function} cb The callback function to be called.
     */
    setOnPlay( cb ) { this._onPlay = cb }

    /** ### setOnPause
     * Sets a callback handler when the video is pause by the user or programmatically.
     * $$ vid.setOnPause( cb )
     * @param {function} cb The callback function to be called.
     */
    setOnPause( cb ) { this._onPause = cb }

    /** ### setOnComplete
     * Sets a callback handler when the video playback is completed.
     * $$ vid.setOnComplete( cb )
     * @param {function} cb The callback function to be called.
     */
    setOnComplete( cb ) { this._onComplete = cb }

    /** ### setOnError
     * Sets a callback function when an error occurs while the video source is being loaded.
     * $$ vid.setOnError( cb )
     * @param {function} cb The callback function to be called.
     */
    setOnError( cb ) { this._onError = cb }

    /** ### setOnSeek
     * Sets a callback handler when seeking event is completed.
     * $$ vid.setOnSeek( cb )
     * @param {function} cb The callback function to be called. ---> @arg {number} pos The playback position in seconds.
     */
    setOnSeek( cb ) { this._onSeek = cb }

    /** ### setOnSeeking
     * Sets a callback handler when seeking event is active. Called when the user touches or slides the seekbar track.
     * $$ vid.setOnSeeking( cb )
     * @param {function} cb The callback function to be called. ---> @arg {number} pos The playback position in seconds.
     */
    setOnSeeking( cb ) { this._onSeeking = cb }

    /** ### setOnVolume
     * Sets a callback function when the volume of the video changes.
     * $$ vid.setOnVolume( cb )
     * @param {function} cb The callback function. ---> @arg {number} volume The audio volume of the video.
     */
    setOnVolume( cb ) { this._onVolume = cb }

    /** ### setOnProgress
     * Sets a callback handler to be be called while the video is playing. This is usefull when you have a custom progress bar where to constantly update the playback time.
     * $$ vid.setOnProgress( cb )
     * @param {function} cb The callback function. ---> @arg {number} time The elapsed playback time in seconds.
     */
    setOnProgress( cb ) { this._onProg = cb }

    /** ### load
     * Reloads the video source.
     * $$ vid.load()
     */
    load() { this._ctl.load() }

    /** ### seekTo
     * Sets the playback position.
     * $$ vid.seekTo( time )
     * @param {number} time The playback position in seconds.
     */
    seekTo( time ) { this._ctl.currentTime = time }

    /** ### capture
     * Capture an image in the playback. This will return an image data which you can save or manipulate.
     * $$ vid.capture(type, format)
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
}

/**
@sample Simple video view
class Main extends App
{
   onStart()
   {
        //Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        //Create a video view and pass the video url
        let src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        this.vid = ui.addVideoView(this.main, src, "AutoPlay", 0.8, 0.8)

        //Create a horizontal layout where to add video controls
        this.lay = ui.addLayout(this.main, "Linear", "Horizontal,VCenter", 0.8, 0.15)
        this.lay.setChildMargins(0.01, 0, 0.01, 0)

        //Create the play button
        this.playBtn = ui.addButton(this.lay, "Play", "", 0.2)
        this.playBtn.setOnTouch( this.play )

        //Create the pause/stop button
        this.pauseBtn = ui.addButton(this.lay, "Pause", "", 0.2)
        this.pauseBtn.setOnTouch( this.pause )

        //Create the mute toggle button
        this.muteBtn = ui.addButton(this.lay, "Mute", "Toggle", 0.2)
        this.muteBtn.setOnTouch( this.toggleMute )
    }

    //Handle play button
    play() { this.vid.play() }

    //Handle pause/stop button
    pause() { this.vid.stop() }

    //Handle mute toggle button
    toggleMute( val ) { this.vid.muted = val }
}
 */

/**
@sample Video view callbacks
class Main extends App
{
   onStart()
   {
        //Create a fullscreen layout with objects vertically centered
        this.main = ui.addLayout("main", "Linear", "VCenter,FillXY")

        //Create a video view with default Controls and Fill options
        let src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        this.vid = ui.addVideoView(this.main, src, "Controls,Fill", 0.8, 0.8)

        //Add video event listeners
        this.vid.setOnComplete( this.onComplete )
        this.vid.setOnPlay( this.onPlay )
        this.vid.setOnPause( this.onPause )
        this.vid.setOnSeek( this.onSeek )
        this.vid.setOnSeeking( this.onSeeking )
        this.vid.setOnVolume( this.onVolume )
        this.vid.setOnProgress( this.onProgress )
    }

    //Handle on complete event
    onComplete() { ui.showPopup( "Video completed" ) }

    //Handle on play event
    onPlay() { ui.showPopup( "Video is playing" ) }

    //Handle on pause/stop event
    onPause() { ui.showPopup( "Video has been paused" ) }

    //Handle seek event completed
    onSeek( val ) { console.log("On seek : " + val) }

    //Handle on active seeking event
    onSeeking( val ) { console.log("Seeking : " + val) }

    //Handle volume change event
    onVolume( val ) { ui.showPopup( val ) }

    //Handle playing progress event
    onProgress( time ) { console.log("Playback time : " + time) }
}
 */