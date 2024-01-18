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
 * @brief Close the media player.
 * Close the media player and thus make it unuseable for further use.
 * $$ ply.Close() $$
 */


/** ### GetDuration ###
 * @brief Get the song length in seconds
 * Returns the total duration of the currently loaded song in seconds.
 * $$ ply.GetDuration() $$
 * @returns num_sec
 */


/** ### GetPosition ###
 * @brief Get  elapsed playtime in seconds
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
 * @brief Returns if the player is looping.
 * Checks if the media player will replay the song from the begining if it has finished.
 * $$ ply.IsLooping() $$
 * @returns bin
 */


/** ### IsPlaying ###
 * @brief Get current playing state
 * Checks if the media player is currently playing.
 * $$ ply.IsPlaying() $$
 * @returns bin
 */


/** ### IsReady ###
 * @brief Returns if player is useable yet
 * Checks if the media player is ready for use.
 * $$ ply.IsReady() $$
 * @returns bin
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
 * @brief Load a sound file to the player
 * Load a sound file to the media player.
 * $$ ply.SetFile(file) $$
 * @param {str_ptf} file
 */


/** ### SetLooping ###
 * @brief Set looping mode
 * Define whether the media player should replay the song when completed.
 * $$ ply.SetLooping(loop) $$
 * @param {bin} loop
 */


/** ### SetOnComplete ###
 * @brief Called when the player has finished playing a track
 * %cb% a sound file has finished playing.
 * $$ ply.SetOnComplete(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnReady ###
 * @brief Called when the player is ready for use
 * %cb% the player is ready for use.
 * $$ ply.SetOnReady(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnSeekDone ###
 * @brief Called when ply.Seek has finished
 * %cb% a seeking process is done.
 * $$ ply.SetOnSeekDone(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetSpeed ###
 * @brief Set the playback speed
 * Change the speed of the playing song.
 * $$ ply.SetSpeed(speed) $$
 * @param {num_fac} speed
 */


/** ### SetPitch ###
 * @brief Set the playback pitch
 * Change the pitch of the playing song.
 * $$ ply.SetPitch(pitch) $$
 * @param {num_fac} pitch
 */


/** ### SetVolume ###
 * @brief Set the playback volume
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



/**
@sample Python Playing Audio
from native import app

def OnStart():
    global player
    player = app.CreateMediaPlayer()
    player.SetOnReady(Play)
    player.SetOnComplete(player_OnComplete)
    player.SetFile("/Sys/Snd/Poing.ogg")

def Play():
    player.Play()

def player_OnComplete():
    app.ShowPopup("OnComplete")
 */
