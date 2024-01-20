// ------------- HEADER SECTION -------------


/** # M #
 * Disables callback optimization and sets a custom this context. Required for callbacks within loops, that use the same code but have different contexts
 * $$ global.M(ctx, callback) $$
 * @param {all} ctx
 * @param {fnc_json} callback {"pNames":["...args"],"pTypes":["lst"]}
 * @returns fnc_json-{"pNames":["this","...args"],"pTypes":["all","lst"]}
*/
