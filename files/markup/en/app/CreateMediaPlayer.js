// ------------- HEADER SECTION ------------- 


/** # CreateMediaPlayer #
 * @abbrev ply
 * @brief Returns a new MediaPlayer object
 * 
 * $$ ply = app.CreateMediaPlayer() $$ 
 * @returns dso-MediaPlayer
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
The MediaPlayer object can be used to play sound files from the phone or tablet.
Use the SetFile method of the MediaPlayer object to set the sound file to play. Supported sound file types include .ogg and .mp3.

When the sound file is ready for playback, the **OnReady** callback function will be called. Then you can start playing using the **Start** method.
If the soundtrack has finished playing, the **OnComplete** callback will be called. All together you code could look like that:
<sample Playing Audio>

The SeekTo method can be used to adjust the playback position by passing in the time in seconds. Passing in 0 will set the playback position to the beginning of the sound file: <js>player.SeekTo( 0 );</js>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### Close ###
 * Close the media player and thus make it unuseable for further use.
 * $$ ply.Close() $$
 */


/** ### GetDuration ###
 * Returns the total duration of the currently loaded song in seconds.
 * $$ ply.GetDuration() $$
 * @returns num_sec
 */


/** ### GetPosition ###
 * Returns the elapsed playtime in seconds.
 * $$ ply.GetPosition() $$
 * @returns num_sec
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ ply.GetType() $$
 * @returns str-MediaPlayer
 */


/** ### IsLooping ###
 * Checks if the media player will replay the song from the begining if it has finished.
 * $$ ply.IsLooping() $$
 */


/** ### IsPlaying ###
 * Checks if the media player is currently playing.
 * $$ ply.IsPlaying() $$
 */


/** ### IsReady ###
 * Checks if the media player is ready for use.
 * $$ ply.IsReady() $$
 */


/** ### Pause ###
 * Pause the current playing song.
 * $$ ply.Pause() $$
 */


/** ### Play ###
 * Play the current loaded song from the last paused time or from a given start time in in seconds.
 * $$ ply.Play() $$
 */


/** ### SeekTo ###
 * Seek the player to a given time in seconds.
 * $$ ply.SeekTo(time) $$
 * @param {num_flt} time 
 */


/** ### SetFile ###
 * Load a sound file to the media player.
 * $$ ply.SetFile(file) $$
 * @param {str_ptf} file 
 */


/** ### SetLooping ###
 * Define whether the media player should replay the song when completed.
 * $$ ply.SetLooping(loop) $$
 * @param {bin} loop 
 */


/** ### SetOnComplete ###
 * %cb% a sound file has finished playing.
 * $$ ply.SetOnComplete(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnReady ###
 * %cb% the player is ready for use.
 * $$ ply.SetOnReady(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnSeekDone ###
 * %cb% a seeking process is done.
 * $$ ply.SetOnSeekDone(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetSpeed ###
 * Change the speed of the playing song.
 * $$ ply.SetSpeed(speed) $$
 * @param {num_fac} speed 
 */


/** ### SetPitch ###
 * Change the pitch of the playing song.
 * $$ ply.SetPitch(pitch) $$
 * @param {num_fac} pitch 
 */


/** ### SetVolume ###
 * Change the volume of the playing song.
 * $$ ply.SetVolume(left, right) $$
 * @param {num_prc} left 
 * @param {num_prc} right 
 */


/** ### Stop ###
 * Stop playing a song.
 * $$ ply.Stop() $$
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Playing Audio
function OnStart()
{
	<b>player = app.CreateMediaPlayer();
    player.SetOnReady(Play);
	player.SetOnComplete( player_OnComplete );
	player.SetFile( "/Sys/Snd/Poing.ogg" );</b>
}

function Play()
{
	player.Play();
}

function player_OnComplete()
{
	app.ShowPopup( "OnComplete" );
}
 */
    
            