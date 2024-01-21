// ------------- HEADER SECTION -------------


/** # ide #
 * @prop
 * @abbrev ide
 * Functions to interact with the DroidScript IDE
 * $$ global.ide() $$
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### MakePlugin ###
 * Create a new plugin as DroidScript project
 * $$ undefined.MakePlugin(name) $$
 * @param {str} name
 */


/** ### SetAutoWifi ###
 * Enable AutoWifi in the IDE
 * $$ undefined.SetAutoWifi(auto) $$
 * @param {bin} auto
 */


/** ### SetAutoStart ###
 * Set a default start application.
 * Equal to @../app/SetAutoStart
 * $$ undefined.SetAutoStart(appName) $$
 * @param {str} appName
 */


/** ### Obfuscate ###
 * Obfuscate a javascript source file. Useful for developing plugins and extensions
 * $$ undefined.Obfuscate(src, desc, options) $$
 * @param {str_pth} src
 * @param {str_pth} desc
 * @param {str_com} options NoSwap:Dont swap function names
 */


/** ### Export ###
 * Export your Game as pure HTML project. Will support “Hybrid” in a future version too
 * $$ undefined.Export(type, src, desc) $$
 * @param {str} type GameView|Html|Hybrid
 * @param {str_pth} src
 * @param {str_pth} desc
 */


/** ### AddModule ###
 * Add a NodeJS module to your app from code. Can include specific version numbers via “name\@version”
 * $$ undefined.AddModule(name, overwrite?) $$
 * @param {str} name
 * @param {bin} [overwrite]
 */
