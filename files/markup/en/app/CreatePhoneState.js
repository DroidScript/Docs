
/** # CreatePhoneState #
 * @abbrev pst
 * 
 * $$ pst = app.CreatePhoneState(types) $$ 
 * @param {str} types CellLocation,DataConnection,DataActivity,CallState,ServiceState,SignalStrength,CallForwarding,MessageWaiting
 * @returns dso-PhoneState
*/


// CreatePhoneState.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The PhoneState component is able to detect phone state changes.

The callback data depends on the type:

<smp>“CellLocation” : **object:** { cellId:num\_int, areaCode:num\_int }</smp>
<smp>“DataConnection” : **object:** { state:str-"Connected|Disconnected", networkType:str-Unknown }</smp>
<smp>“DataActivity” : **unknown**</smp>
<smp>“CallState” : **object:** { state:str-Idle, number:str\_num }</smp>
<smp>“ServiceState” : **string:** “OutOfService”</smp>
<smp>“SignalStrength” : **number:** _float_</smp>
<smp>“CallForwarding” : **boolean**</smp>
<smp>“MessageWaiting” : **boolean**</smp>

 */

/** ## Methods ##
 * These are the methods available for CreatePhoneState
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ pst.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ pst.GetType() $$
 * @returns str-PhoneState
 */


/** ### SetOnChange ###
 * %cb% a phone state has changed.
 * $$ pst.SetOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["type","data"],"pTypes":["str-CellLocation|DataConnection|DataActivity|CallState|ServiceState|SignalStrength|CallForwarding|MessageWaiting","all"]}
 */


/** ### Start ###
 * Start listening.
 * $$ pst.Start() $$
 */


/** ### Stop ###
 * Stop listening.
 * $$ pst.Stop() $$
 */

// CreatePhoneState.txt --> All the sample codes

/** @Sample
<sample Demo>

function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	txt = app.CreateText( "", 0.95, 0.95, "multiline,left" );
	txt.SetTextSize( 14 );
	lay.AddChild( txt );

	app.AddLayout( lay );

	var types = "CellLocation,DataConnection,DataActivity,CallState,"
	    + "ServiceState,SignalStrength,CallForwarding,MessageWaiting";

    state = app.CreatePhoneState( types );
    state.SetOnChange( state_OnChange );
    state.Start();
}

var log = [];
function state_OnChange( type, data )
{
    log.push( type.bold() + ":<br>\t" + JSON.stringify(data) );
    txt.SetHtml( log.join("<br>") );
}
</sample>

 */

