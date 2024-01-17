// ------------- HEADER SECTION -------------


/** # CreatePlayStore #
 * @abbrev pls
 * @brief Returns a new PlayStore object
 * 
 * $$ pls = app.CreatePlayStore() $$ 
 * @returns dso-PlayStore
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Creates a new PlayStore instance for retreiving informations or purchasing items.

Notes: If your email address is listed in the 'licence testing' section of the developer console settings page, then using this sample will result in a test subscription with an order id of '1234' which recurs daily (even if configured for monthly) and you will not be charged.
Subscriptions can be cancelled in the Google Play App found on your device (they will stay active for the remains of the period that has been purchased).
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### GetBillingInfo ###
 * @brief Get product info from Google Play.
 * Get product info of paid items from Google Play.
 * $$ pls.GetBillingInfo(prodIDs, callback, options?) $$
 * @param {str} prodIDs 
 * @param {fnc_json} callback {"pNames":["items"],"pTypes":["lst_obj-[{ skuDetailsToken:str&comma; productId:str&comma; type:str&comma; price:str&comma; price_amount_micros:num_int&comma; price_currency_code:str&comma; title:str&comma; description:str }]"]}
 * @param {str} [options] IAP:In-App purchases|SUBS:subscriptions
 */


/** ### GetPurchases ###
 * @brief Get purchased items from Google Play.
 * Get product info of purchased items from Google Play.
 * $$ pls.GetPurchases(callback, options?) $$
 * @param {fnc_json} callback {"pNames":["items"],"pTypes":["lst_obj-[{ skuDetailsToken:str&comma; productId:str&comma; type:str&comma; price:str&comma; price_amount_micros:num_int&comma; price_currency_code:str&comma; title:str&comma; description:str }]"]}
 * @param {str} [options] SUBS
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ pls.GetType() $$
 * @returns str-PlayStore
 */


/** ### Purchase ###
 * @brief Purchase an item on Google Play.
 * Purchase an item on Google Play.
 * $$ pls.Purchase(prodID, token, callback?, options?) $$
 * @param {str} prodID 
 * @param {str} token 
 * @param {fnc_json} [callback] {"pNames":["prodId","orderId","purchToken","devToken","packageName"],"pTypes":["str","str","str","str","str"]}
 * @param {str} [options] SUBS
 */

