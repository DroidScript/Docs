// ------------- HEADER SECTION -------------


/** # CreateAudioRecorder #
 * @abbrev rec
 * @brief Returns an AudioRecorder object
 * 
 * $$ rec = app.CreateAudioRecorder() $$ 
 * @returns dso-AudioRecorder
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
The AudioRecorder object can be used to listen for sound and record it to a file.
After creation you have to define the recording file with the **SetFile** Method:
<js>rec.SetFile( "/sdcard/demofile.wav" );</js>

After that you can **Start** the recording: <js>rec.Start();</js>

The recorded audio will then be written to the specified file.

Finally you can also **Stop** the recording: <js>rec.Stop();</js>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### GetData ###
 * @brief Returns a new list of frequency values
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
 * @brief Pause the recording
 * Pauses the recording temporally.
 * $$ rec.Pause() $$
 */


/** ### SetFile ###
 * @brief Define the recording file
 * Define the file where the recorder should record to.
 * $$ rec.SetFile(file) $$
 * @param {str_ptf} file 
 */


/** ### SetFrequency ###
 * @brief Define the Recording frequency
 * Set the Recording frequency to one of the possible values.
 * $$ rec.SetFrequency(frequency) $$
 * @param {num_int} frequency 8000|11025|22050|44100|48000
 */


/** ### SetSource ###
 * @brief Define the recording file
 * Define the file where the recorder should record to.
 * $$ rec.SetSource(src) $$
 * @param {str} src Default|Camcorder|Mic|Unprocessed|Voicecommunication|Voiceperformance|Voicerecognition
 */


/** ### Start ###
 * Start recording to the specified file.
 * $$ rec.Start() $$
 */


/** ### Stop ###
 * @brief Stop recording
 * Stop the audio recording.
 * $$ rec.Stop() $$
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Example
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
 */
    
            
    
/**
@sample Python Example
from native import app

file = "/sdcard/demofile.wav"

def OnStart():
    global rec
    <b>rec = app.CreateAudioRecorder()
    rec.SetFile( file )
    rec.Start()</b>

    app.ShowPopup( "Please speak" )
    setTimeout( StopRecording, 5000 )

def StopRecording():
    rec.Stop()
    app.ShowPopup( "Finished recording. Now playing" )

    ply = app.CreateMediaPlayer()
    ply.SetFile( file )
    ply.SetOnReady( ply.Play )
 */
    
            