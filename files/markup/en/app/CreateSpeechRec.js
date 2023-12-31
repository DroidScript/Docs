// ------------- HEADER SECTION -------------


/** # CreateSpeechRec #
 * @abbrev spr
 * @brief Returns a new SpeechRec object
 * 
 * $$ spr = app.CreateSpeechRec(options) $$ 
 * @param {str_com} options NoBeep,Partial
 * @returns dso-SpeechRec
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
The **SpeechRec** object can be used to listen for and recognize speech.
Use the **Recognize** method of the SpeechRec object to tell it to start listening:
<js>speech.Recognize();</js>

When the SpeechRec object has started listening, the **OnReady** callback function will be called. Use the **SetOnReady** method to set the name of your OnReady callback function.

If the SpeechRec object recognizes speech, the **OnResult** callback function will be called. The results are passed to the OnResult callback function as an array, with the most probable result at the front. Use the **SetOnResult** method to set the name of your OnResult callback function.

If the SpeechRec object does not recognize anything, the **OnError** callback function will be called. Use the **SetOnError** method to set the name of your OnError callback function.
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### Cancel ###
 * @brief Stop recognition
 * Stop recognizing speech and break other processes.
 * $$ spr.Cancel() $$
 */


/** ### GetRMS ###
 * Returns the RMS value (Root Mean Square) from the audio recorder.
 * $$ spr.GetRMS() $$
 * @returns num_flt
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ spr.GetType() $$
 * @returns str-SpeechRec
 */


/** ### IsListening ###
 * @brief Check whether SpeechRec is listening
 * Check whether SpeechRec is currently listening.
 * $$ spr.IsListening() $$
 * @returns bin
 */


/** @extern Method */

/** ### Recognize ###
 * @brief Start speech recognition
 * Start recognizing speech.
 * $$ spr.Recognize() $$
 */


/** ### SetOnError ###
 * @brief Called when an error occured.
 * %cb% an error occured.
 * $$ spr.SetOnError(callback) $$
 * @param {fnc_json} callback {"pNames":["error"],"pTypes":["str"]}
 */


/** ### SetOnReady ###
 * @brief Called when SpeechRec is ready for use
 * %cb% the SpeechRec object is ready for use.
 * $$ spr.SetOnReady(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnResult ###
 * @brief Called when text was recognized
 * %cb% a text was successfully recognized
 * $$ spr.SetOnResult(callback) $$
 * @param {fnc_json} callback {"pNames":["result"],"pTypes":["str"]}
 */


/** ### Stop ###
 * @brief Stop recording and start recognition
 * Stop speech recording and start recognizing.
 * $$ spr.Stop() $$
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Example
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btn = app.CreateButton( "Talk To Me", 0.3, 0.1 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );

<b>	speech = app.CreateSpeechRec();
	speech.SetOnReady( speech_OnReady );
	speech.SetOnResult( speech_OnResult );
	speech.SetOnError( speech_OnError );
</b>}

function btn_OnTouch()
{
	speech.Recognize();
}

function speech_OnReady()
{
	app.ShowPopup( "Listening...", "Short" );
}

function speech_OnResult( results )
{
	app.ShowPopup( results[0] );
}

function speech_OnError()
{
	app.ShowPopup( "Please speak more clearly!" );
}
 */
    
            
    
/**
@sample Python 
from native import app

def OnStart():
    global speech
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    btn = app.CreateButton( "Talk To Me", 0.3, 0.1 )
    btn.SetOnTouch( btn_OnTouch )
    lay.AddChild( btn )

    app.AddLayout( lay )

    speech = app.CreateSpeechRec()
    speech.SetOnReady( speech_OnReady )
    speech.SetOnResult( speech_OnResult )
    speech.SetOnError( speech_OnError )

def btn_OnTouch():
    speech.Recognize()

def speech_OnReady():
    app.ShowPopup( "Listening...", "Short" )

def speech_OnResult( results ):
    app.ShowPopup( results[0] )

def speech_OnError():
    app.ShowPopup( "Please speak more clearly!" )
 */
    
            