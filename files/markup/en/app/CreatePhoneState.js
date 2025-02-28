// ------------- HEADER SECTION -------------


/** # CreatePhoneState #
 * @abbrev pst
 * @brief Returns a new PhoneState object
 *
 * $$ pst = app.CreatePhoneState(types) $$
 * @param {str_lst} types CellLocation,DataConnection,DataActivity,CallState,ServiceState,SignalStrength,CallForwarding,MessageWaiting
 * @returns dso-PhoneState
*/


// ------------- LONG DESCRIPTION -------------

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



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern Batch */

/** @extern data */

/** ### GetNumber ###
 * Returns the phone number.
 * $$ pst.GetNumber() $$
 * @returns str-Number
 */

/** ### GetType ###
 * Returns the control class name.
 * $$ pst.GetType() $$
 * @returns str-PhoneState
 */


/** ### SetOnChange ###
 * @brief Called when a phone state has changed
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



// ------------- SAMPLES -------------



/**
@sample Demo
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
 */



/**
@sample Python Demo
from native import app
from browser import window

log = []

def OnStart():
    global txt
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    txt = app.CreateText("", 0.95, 0.95, "multiline,left")
    txt.SetTextSize(14)
    lay.AddChild(txt)

    app.AddLayout(lay)

    types = "CellLocation,DataConnection,DataActivity,CallState," + "ServiceState,SignalStrength,CallForwarding,MessageWaiting"

    state = app.CreatePhoneState(types)
    state.SetOnChange(state_OnChange)
    state.Start()

def state_OnChange(type, data):
    log.append(f"<b>{type}</b>:<br>\t{window.JSON.stringify(data)}")
    txt.SetHtml("<br>".join(log))
 */
