
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


// CreateVideoView.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The **VideoView** can be used to play local video files from the filesystem or video streams from remote sources.
Use **SetFile** to set the video file or video stream address.
<js>player.SetFile( "https://file-examples.com/wp-content/uploads/2017/04/file\_example\_MP4\_640\_3MG.mp4" );</js>
When the video is ready to play, the **OnReady** callback function will be called, you can then use **Play** to start playing the video.

If the video cannot be played, the OnError callback function will be called. Use **SetOnReady** and **SetOnError** to set the names of your **OnReady** and OnError callback functions.
 */



// -------- VISIBLE METHODS & PROPERTIES --------- 


/**
 * @extern AdjustColor
 */

/**
 * @extern Batch
 */

/**
 * @extern ClearFocus
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

/** ### GetDuration ###
 * Retunrs the video duration in seconds.
 * $$ vid.GetDuration() $$
 * @returns num_flt
 */


/**
 * @extern GetHeight
 */

/**
 * @extern GetLeft
 */

/**
 * @extern GetParent
 */

/**
 * @extern GetPosition
 */

/**
 * @extern GetTop
 */

/** ### GetType ###
 * Returns the control class name.
 * $$ vid.GetType() $$
 * @returns str-VideoView
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

/** ### IsPlaying ###
 * Returns whether the VideoView is currently playing a video
 * $$ vid.IsPlaying() $$
 * @returns bin
 */


/** ### IsReady ###
 * Returns whether the video is ready for playing.
 * $$ vid.IsReady() $$
 * @returns bin
 */


/**
 * @extern IsVisible
 */

/**
 * @extern Method
 */

/** ### Pause ###
 * Pauses the video.
 * $$ vid.Pause() $$
 */


/** ### Play ###
 * Plays the video.
 * $$ vid.Play() $$
 */


/** ### SeekTo ###
 * Seek the video to given time in seconds.
 * $$ vid.SeekTo(seconds) $$
 * @param {num_int} seconds 
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

/**
 * @extern SetColorFilter
 */

/**
 * @extern SetDescription
 */

/**
 * @extern SetEnabled
 */

/** ### SetFile ###
 * Set the video file path or url
 * $$ vid.SetFile(file) $$
 * @param {str_pth||str_url} file http(s)://url
 */


/**
 * @extern SetMargins
 */

/** ### SetOnComplete ###
 * %cb% the playback has finished playing
 * $$ vid.SetOnComplete(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnError ###
 * %cb% an error occured.
 * $$ vid.SetOnError(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnReady ###
 * %cb% the video is ready for playback.
 * $$ vid.SetOnReady(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnSubtitle ###
 * %cb% the subtitle text changed.
 * $$ vid.SetOnSubtitle(callback) $$
 * @param {fnc_json} callback {}
 */


/**
 * @extern SetPadding
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

/** ### SetSubtitles ###
 * Set a subtitle file where to retreive the video subtitles from.
 * $$ vid.SetSubtitles(file) $$
 * @param {str_ptf} file 
 */


/**
 * @extern SetVisibility
 */

/** ### SetVolume ###
 * Change the video player volume
 * $$ vid.SetVolume(left, right) $$
 * @param {num_prc} left 
 * @param {num_prc} right 
 */


/**
 * @extern Show
 */

/** ### Stop ###
 * Stop the video playback.
 * $$ vid.Stop() $$
 */


/**
 * @extern Tween
 */
// CreateVideoView.txt --> All the sample codes

/** @Sample
<sample Video Stream>
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
</sample>

 */

