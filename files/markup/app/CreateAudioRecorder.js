
/** # CreateAudioRecorder #
 * @abbrev rec
 * 
 * $$ rec = app.CreateAudioRecorder() $$ 
 * @returns dso-AudioRecorder
*/


// CreateAudioRecorder.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The AudioRecorder object can be used to listen for sound and record it to a file.
After creation you have to define the recording file with the **SetFile** Method:
<js>rec.SetFile( "/sdcard/demofile.wav" );</js>

After that you can **Start** the recording: <js>rec.Start();</js>

The recorded audio will then be written to the specified file.

Finally you can also **Stop** the recording: <js>rec.Stop();</js>

 */

/** ## Methods ##
 * These are the methods available for CreateAudioRecorder
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ rec.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### GetData ###
 * Returns a list of frequency values. The amount is dependent on the set frequency.
 * $$ rec.GetData() $$
 * @returns lst-[ frequencies:num_int ]
 */


/** ### GetPeak ###
 * Returns the PMPO value (Peak music power output).
 * $$ rec.GetPeak() $$
 * @returns num_flt
 */


/** ### GetRMS ###
 * Returns the RMS value (Root Mean Square)
 * $$ rec.GetRMS() $$
 * @returns num_flt
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ rec.GetType() $$
 * @returns str-AudioRecorder
 */


/** ### Pause ###
 * Pauses the recording temporally.
 * $$ rec.Pause() $$
 */


/** ### SetFile ###
 * Define the file where the recorder should record to.
 * $$ rec.SetFile(file) $$
 * @param {str_ptf} file 
 */


/** ### SetFrequency ###
 * Set the Recording frequency to one of the possible values.
 * $$ rec.SetFrequency(frequency) $$
 * @param {num_int} frequency 8000|11025|22050|44100|48000
 */


/** ### SetSource ###
 * Define the file where the recorder should record to.
 * $$ rec.SetSource(src) $$
 * @param {str} src Default|Camcorder|Mic|Unprocessed|Voicecommunication|Voiceperformance|Voicerecognition
 */


/** ### Start ###
 * Start recording to the specified file.
 * $$ rec.Start() $$
 */


/** ### Stop ###
 * Stop the audio recording.
 * $$ rec.Stop() $$
 */

// CreateAudioRecorder.txt --> All the sample codes

/** @Sample
<sample Example>
var file = "/sdcard/demofile.wav";
function OnStart()
{
	<b>rec = app.CreateAudioRecorder();
	rec.SetFile( file );
	rec.Start();</b>

	app.ShowPopup( "Please speak" );
	setTimeout( StopRecording, 5000 );
}

function StopRecording()
{
    rec.Stop();
	app.ShowPopup( "Finished recording. Now playing" );

    ply = app.CreateMediaPlayer();
	ply.SetFile( file );
	ply.SetOnReady( ply.Play );
}
</sample>

 */

