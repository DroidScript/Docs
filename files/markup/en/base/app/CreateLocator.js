
/** # CreateLocator #
 * @abbrev loc
 * 
 * $$ loc = app.CreateLocator(type, options) $$ 
 * @param {str_com} type GPS,Network
 * @param {str_com} options 
 * @returns dso-Locator
*/


// CreateLocator.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The Locator component can be used to find your whereabouts on the planet using either your device's GPS or information from your network. The provider specifies where the locator should retreive its information from . “Network” means get the location from the cell network and wifi, “GPS” tells the locator to use the device's GPS

To Start the locator use the **Start** method. You can also stop it with **Stop**.
To get regulat updates about your current positino use the **SetOnChange** function.
 */

/** ## Methods ##
 * These are the methods available for CreateLocator
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ loc.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### GetBearingTo ###
 * Returns the approximate initial bearing in degrees East of true North when traveling along the shortest path between this location and the given location.
 * $$ loc.GetBearingTo(latitude, longitude) $$
 * @param {num} latitude 
 * @param {num} longitude 
 * @returns num
 */


/** ### GetDistanceTo ###
 * Returns the approximate distance in meters between this location and the given location.
 * $$ loc.GetDistanceTo(latitude, longitude) $$
 * @param {num} latitude 
 * @param {num} longitude 
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ loc.GetType() $$
 * @returns str-Locator
 */


/** ### SetOnChange ###
 * Define a function which is called when some of the values changed.
 * $$ loc.SetOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["data","time"],"pTypes":["obj-{ provider:str&comma; latitude:num&comma; longitude:num&comma; speed:num&comma; bearing:num&comma; altitude:num&comma; accuracy:num_met }","num_mls"]}
 */


/** ### SetRate ###
 * Set Locator update frequency in seconds
 * $$ loc.SetRate(rate) $$
 * @param {num_sec} rate 
 */


/** ### Start ###
 * Start the locator.
 * $$ loc.Start() $$
 */


/** ### Stop ###
 * Stop the locator.
 * $$ loc.Stop() $$
 */

// CreateLocator.txt --> All the sample codes

/** @Sample
<sample Get Location Updates>
function OnStart()
{
	<b>loc = app.CreateLocator("GPS,Network");
	loc.SetOnChange(loc_OnChange);
	loc.Start();
	app.ShowPopup("Locating");</b>
}

function loc_OnChange(pos)
{
	var msg = pos.latitude + ", " + pos.longitude;
	app.ShowPopup( msg );
}
</sample>

 */

