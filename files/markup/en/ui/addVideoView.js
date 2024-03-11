/** # VideoView
 * Adds a video view into your app layout.
 * @param {uio-Layout} parent The layout where to add the video view.
 * @param {string} url The video source url. Supported video formats are `"mp4", "ogg", "webm"`
 * @param {string} options Comma separated options. Values can be one or a combination of the following: `autoplay`, `loop`, `controls`, `muted`, `fill` or `stretch`. If you pass "controls", you can optionally remove some controls such as "nodownload", "nofullscreen" and "noremoteplayback".
 * @param {number} width Fraction of the parent width. Values can be [0-1].
 * @param {number} height Fraction of the parent height. Values can be [0-1].
 * @returns uio-VideoView
 * 
 * By default, the video will be resize relative to its dimensions. If you want the video to cover the entire width and height, pass `"fill"` in the options argument.
 */


    /** ## Properties
     * Here are the setter and getter properties for the VideoView component.
     */


    /** @prop {string} url Sets or returns the video source url. */


    /** @prop {number} volume Sets or returns the video volume. Values can be [0-1]. */


    /** @prop {number} duration Returns the time duration of the video in seconds. */


    /** @prop {boolean} played Returns a boolean whether the video is currently playing. */


    /** @prop {boolean} paused Returns a boolean whether the video is paused. */


    /** @prop {boolean} completed Returns a boolean whether the video playback is completed. */


    /** @prop {boolean} muted Returns a boolean whether the video audio is muted. */


    /** @prop {boolean} seeking Returns a boolean whether the user is currently seeking in the video playback seekbar. */


    /** @prop {number} speed Sets or returns the playback speed. */


    /** @prop {boolean} loop Sets or returns a boolean whether the video should start over again when completed. */


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
     * Here are the methods for the VideoView component.
     */


    /** ### enterFullscreen
     * Play video in fullscreen if supported.
     * $$ vid.enterFullscreen()
     */


    /** ### exitFullscreen
     * Exit fullscreen if video is playing fullscreen.
     * $$ vid.exitFullscreen()
     */


    /** ### play
     * Play the video.
     * $$ vid.play()
     */


    /** ### stop
     * Stop the playing video.
     * $$ vid.stop()
     */


    /** ### setOnReady
     * Sets a callback handler when the video has buffered enough to begin playing. Video might not completely loaded for this event to be fired.
     * $$ vid.setOnReady( cb )
     * @param {function} cb The callback function to be called. ---> @arg {object} info Basic information of the video such as duration and dimensions.
     */


    /** ### setOnPlay
     * Sets a callback handler when the video is played by the user or programmatically.
     * $$ vid.setOnPlay( cb )
     * @param {function} cb The callback function to be called.
     */


    /** ### setOnPause
     * Sets a callback handler when the video is pause by the user or programmatically.
     * $$ vid.setOnPause( cb )
     * @param {function} cb The callback function to be called.
     */


    /** ### setOnComplete
     * Sets a callback handler when the video playback is completed.
     * $$ vid.setOnComplete( cb )
     * @param {function} cb The callback function to be called.
     */


    /** ### setOnError
     * Sets a callback function when an error occurs while the video source is being loaded.
     * $$ vid.setOnError( cb )
     * @param {function} cb The callback function to be called.
     */


    /** ### setOnSeek
     * Sets a callback handler when seeking event is completed.
     * $$ vid.setOnSeek( cb )
     * @param {function} cb The callback function to be called. ---> @arg {number} pos The playback position in seconds.
     */


    /** ### setOnSeeking
     * Sets a callback handler when seeking event is active. Called when the user touches or slides the seekbar track.
     * $$ vid.setOnSeeking( cb )
     * @param {function} cb The callback function to be called. ---> @arg {number} pos The playback position in seconds.
     */


    /** ### setOnVolume
     * Sets a callback function when the volume of the video changes.
     * $$ vid.setOnVolume( cb )
     * @param {function} cb The callback function. ---> @arg {number} volume The audio volume of the video.
     */


    /** ### setOnProgress
     * Sets a callback handler to be be called while the video is playing. This is usefull when you have a custom progress bar where to constantly update the playback time.
     * $$ vid.setOnProgress( cb )
     * @param {function} cb The callback function. ---> @arg {number} time The elapsed playback time in seconds.
     */


    /** ### load
     * Reloads the video source.
     * $$ vid.load()
     */


    /** ### seekTo
     * Sets the playback position.
     * $$ vid.seekTo( time )
     * @param {number} time The playback position in seconds.
     */


    /** ### capture
     * Capture an image in the playback. This will return an image data which you can save or manipulate.
     * $$ vid.capture(type, format)
     * @param {string} type The image type. Values are "jpg", "png", "webp", "gif". Default is "jpg".
     * @param {string} format The returned data format. Can be "base64", "bytes"(regular array), "uint8array"(typed array) or "arraybuffer".
     * @return object
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
 * Try these samples for `VideoView` control.
 * @jdocs You can edit the code, save it and run. See your app in real time.
 */


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


/**
@sample Python Simple video view
from hybrid import ui

def onStart():
    # Create a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Create a video view and pass the video URL
    src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    vid = ui.addVideoView(main, src, "AutoPlay", 0.8, 0.8)

    # Create a horizontal layout where to add video controls
    lay = ui.addLayout(main, "Linear", "Horizontal,VCenter", 0.8, 0.15)
    lay.setChildMargins(0.01, 0, 0.01, 0)

    # Create the play button
    playBtn = ui.addButton(lay, "Play", "", 0.2)
    playBtn.setOnTouch(play)

    # Create the pause/stop button
    pauseBtn = ui.addButton(lay, "Pause", "", 0.2)
    pauseBtn.setOnTouch(pause)

    # Create the mute toggle button
    muteBtn = ui.addButton(lay, "Mute", "Toggle", 0.2)
    muteBtn.setOnTouch(toggleMute)

# Handle play button
def play(): vid.play()

# Handle pause/stop button
def pause(): vid.stop()

# Handle mute toggle button
def toggleMute(val): vid.muted = val
 */


/**
@sample Python Video view callbacks
from hybrid import ui

def onStart():
    # Create a fullscreen layout with objects vertically centered
    main = ui.addLayout("main", "Linear", "VCenter,FillXY")

    # Create a video view with default Controls and Fill options
    src = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    vid = ui.addVideoView(main, src, "Controls,Fill", 0.8, 0.8)

    # Add video event listeners
    vid.setOnComplete(onComplete)
    vid.setOnPlay(onPlay)
    vid.setOnPause(onPause)
    vid.setOnSeek(onSeek)
    vid.setOnSeeking(onSeeking)
    vid.setOnVolume(onVolume)
    vid.setOnProgress(onProgress)

# Handle on complete event
def onComplete(): ui.showPopup("Video completed")

# Handle on play event
def onPlay(): ui.showPopup("Video is playing")

# Handle on pause/stop event
def onPause(): ui.showPopup("Video has been paused")

# Handle seek event completed
def onSeek(val): print("On seek : " + str(val))

# Handle on active seeking event
def onSeeking(val): print("Seeking : " + str(val))

# Handle volume change event
def onVolume(val): ui.showPopup(str(val))

# Handle playing progress event
def onProgress(time): print("Playback time : " + str(time))
 */


