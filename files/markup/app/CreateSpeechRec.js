
/** # CreateSpeechRec #
 * @abbrev spr
 * 
 * $$ spr = app.CreateSpeechRec(options) $$ 
 * @param {str_com} options NoBeep,Partial
 * @returns dso-SpeechRec
*/


// CreateSpeechRec.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The **SpeechRec** object can be used to listen for and recognize speech.
Use the **Recognize** method of the SpeechRec object to tell it to start listening:
<js>speech.Recognize();</js>

When the SpeechRec object has started listening, the **OnReady** callback function will be called. Use the **SetOnReady** method to set the name of your OnReady callback function.

If the SpeechRec object recognizes speech, the **OnResult** callback function will be called. The results are passed to the OnResult callback function as an array, with the most probable result at the front. Use the **SetOnResult** method to set the name of your OnResult callback function.

If the SpeechRec object does not recognize anything, the **OnError** callback function will be called. Use the **SetOnError** method to set the name of your OnError callback function.

 */

/** ## Methods ##
 * These are the methods available for CreateSpeechRec
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ spr.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### Cancel ###
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
 * Check whether SpeechRec is currently listening.
 * $$ spr.IsListening() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ spr.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### Recognize ###
 * Start recognizing speech.
 * $$ spr.Recognize() $$
 */


/** ### SetOnError ###
 * %cb% an error occured.
 * $$ spr.SetOnError(callback) $$
 * @param {fnc_json} callback {"pNames":["error"],"pTypes":["str"]}
 */


/** ### SetOnReady ###
 * %cb% the SpeechRec object is ready for use.
 * $$ spr.SetOnReady(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnResult ###
 * %cb% a text was successfully recognized
 * $$ spr.SetOnResult(callback) $$
 * @param {fnc_json} callback {"pNames":["result"],"pTypes":["str"]}
 */


/** ### Stop ###
 * Stop speech recording and start recognizing.
 * $$ spr.Stop() $$
 */

// CreateSpeechRec.txt --> All the sample codes

/** @Sample
<sample Example>
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
</sample>

 */

