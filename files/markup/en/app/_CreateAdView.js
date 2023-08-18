
/** # _CreateAdView #
 * @abbrev adv
 * @brief Returns an AdView object
 * 
 * $$ adv = app._CreateAdView(unitId, testId, width, height, options) $$ 
 * @param {str} unitId 
 * @param {str} testId 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options 
 * @returns dso-AdView
*/




// -------- VISIBLE METHODS & PROPERTIES --------- 


/** ### GetType ###
 * Returns the control class name.
 * $$ adv.GetType() $$
 * @returns str-AdView
 */


/** ### Load ###
 * Loads an advertising banner.
 * $$ adv.Load() $$
 */


/** ### SetOnStatus ###
 * Called when the AdView status changed. A List of StatusCodes can be obtained by [the AdView source](https://github.com/pozirk/ANEAdMob/blob/ad9ba23e23733a36e4efebb00b124153ad409f1a/air/AdMob/com/pozirk/ads/admob/AdMob.as#L106).
 * $$ adv.SetOnStatus(callback) $$
 * @param {fnc_json} callback {"pNames":["status"],"pTypes":["str-ALTERNATIVE|..."]}
 */

