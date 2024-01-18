// ------------- HEADER SECTION -------------


/** # CreateSound #
 * @abbrev snd
 * @brief Returns a new sound object
 * Creates a sound object which can play audio files.
 * $$ snd = gfx.CreateSound(file) $$ 
 * @param {str_ptf} file 
 * @returns gvo-Sound
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### file
 * @prop
 * @brief The file url
 * Contains the url of the loaded file.
 * @returns str
 */

                    
/** ### Pause ###
 * @brief Pause the track
 * Pause the playback if the sound is currently palaying.
 * $$ snd.Pause() $$
 */


/** ### Play ###
 * @brief Play the soundtrack
 * Start the playback of the current loaded audio file.
 * $$ snd.Play(loop, delay, gap) $$
 * @param {bin} [loop] 
 * @param {num_mls} [delay] delay before playback start
 * @param {num_mls} [gap] time gap between two loops
 */

