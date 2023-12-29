// ------------- HEADER SECTION ------------- 


/** # CreateVideoView #
 * @abbrev vid
 * @brief Returns a new VideoView object
 * 
 * $$ vid = app.CreateVideoView(width, height, options) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options 
 * @returns dso-VideoView
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
The **VideoView** can be used to play local video files from the filesystem or video streams from remote sources.
Use **SetFile** to set the video file or video stream address.
<js>player.SetFile( "https://file-examples.com/wp-content/uploads/2017/04/file\_example\_MP4\_640\_3MG.mp4" );</js>
When the video is ready to play, the **OnReady** callback function will be called, you can then use **Play** to start playing the video.

If the video cannot be played, the OnError callback function will be called. Use **SetOnReady** and **SetOnError** to set the names of your **OnReady** and OnError callback functions.
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern AdjustColor */

/** @extern Batch */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** ### GetDuration ###
 * @brief Get video duration in seconds
 * Retunrs the video duration in seconds.
 * $$ vid.GetDuration() $$
 * @returns num_flt
 */


/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ vid.GetType() $$
 * @returns str-VideoView
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** ### IsPlaying ###
 * @brief Checks if the view is currently playing
 * Returns whether the VideoView is currently playing a video
 * $$ vid.IsPlaying() $$
 * @returns bin
 */


/** ### IsReady ###
 * @brief Check if the video is ready for playback
 * Returns whether the video is ready for playing.
 * $$ vid.IsReady() $$
 * @returns bin
 */


/** @extern IsVisible */

/** @extern Method */

/** ### Pause ###
 * @brief Pause the video
 * Pauses the video.
 * $$ vid.Pause() $$
 */


/** ### Play ###
 * @brief Play video
 * Plays the video.
 * $$ vid.Play() $$
 */


/** ### SeekTo ###
 * @brief Seek to a given playback time
 * Seek the video to given time in seconds.
 * $$ vid.SeekTo(seconds) $$
 * @param {num_int} seconds 
 */


/** @extern SetBackAlpha */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** @extern SetColorFilter */

/** @extern SetDescription */

/** @extern SetEnabled */

/** ### SetFile ###
 * @brief Set video source
 * Set the video file path or url
 * $$ vid.SetFile(file) $$
 * @param {str_pth||str_url} file http(s)://url
 */


/** @extern SetMargins */

/** ### SetOnComplete ###
 * @brief Called when playback finished
 * %cb% the playback has finished playing
 * $$ vid.SetOnComplete(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnError ###
 * @brief Called when an error occured
 * %cb% an error occured.
 * $$ vid.SetOnError(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnReady ###
 * @brief Called when video is ready for playback
 * %cb% the video is ready for playback.
 * $$ vid.SetOnReady(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnSubtitle ###
 * @brief Called when subtitle text changed
 * %cb% the subtitle text changed.
 * $$ vid.SetOnSubtitle(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetPadding */

/** @extern SetPosition */

/** @extern SetScale */

/** @extern SetSize */

/** ### SetSubtitles ###
 * @brief Set a subtitle source
 * Set a subtitle file where to retreive the video subtitles from.
 * $$ vid.SetSubtitles(file) $$
 * @param {str_ptf} file 
 */


/** @extern SetVisibility */

/** ### SetVolume ###
 * @brief Change the playback volume
 * Change the video player volume
 * $$ vid.SetVolume(left, right) $$
 * @param {num_prc} left 
 * @param {num_prc} right 
 */


/** @extern Show */

/** ### Stop ###
 * @brief Stop video playback.
 * Stop the video playback.
 * $$ vid.Stop() $$
 */


/** @extern Tween */


// ------------- SAMPLES ------------- 


    
/**
@sample Video Stream
function OnStart()
{
    lay = app.CreateLayout( "Linear", "FillXY,VCenter" );

    app.ShowProgress( "Buffering..." );

    player = app.CreateVideoView( 0.9, 0.4 );
    player.SetOnReady( playerOnReady );
    player.SetOnError( player_OnError );
    lay.AddChild( player );

    <b>player.SetFile( "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_640_3MG.mp4" );</b>

    app.AddLayout( lay );
}

function playerOnReady()
{
    app.HideProgress();
    app.ShowPopup( "Ready" );
    player.Play();
}

function player_OnError(e)
{
    app.HideProgress();
    app.ShowPopup( "Error" );
}
 */
    
            
    
/**
@sample Python Video Stream
from native import app

def OnStart():
    global player
    lay = app.CreateLayout("Linear", "FillXY,VCenter")

    app.ShowProgress("Buffering...")

    player = app.CreateVideoView(0.9, 0.4)
    player.SetOnReady(playerOnReady)
    player.SetOnError(player_OnError)
    lay.AddChild(player)

    player.SetFile("https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_640_3MG.mp4")

    app.AddLayout(lay)

def playerOnReady():
    app.HideProgress()
    app.ShowPopup("Ready")
    player.Play()

def player_OnError(e):
    app.HideProgress()
    app.ShowPopup("Error")
 */
    
            