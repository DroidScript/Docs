// ------------- HEADER SECTION -------------


/** # _CreatePlugin #
 * Creates a new plugin object to interact with a dynamically loaded java plugin. See @../intro/CreatePlugins for more plugin information
 * $$ global._CreatePlugin(name, options) $$
 * @param {str} name Package Name
 * @param {str} options
 * @returns obj-Plugin
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### GetType ###
 * Returns the type of the control
 * $$ undefined.GetType() $$
 * @returns str-Plugin
 */


/** ### Send ###
 * Call a function in the java plugin with up to 8 parameters
 * $$ undefined.Send(cmd, p1?, p2?, p3?, p4?, p5?, p6?, p7?, p8?) $$
 * @param {str} cmd
 * @param {all} [p1]
 * @param {all} [p2]
 * @param {all} [p3]
 * @param {all} [p4]
 * @param {all} [p5]
 * @param {all} [p6]
 * @param {all} [p7]
 * @param {all} [p8]
 * @returns str
 */


/** ### SendObj ###
 * Calls a command on an internal java object with up to 8 parameters
 * $$ undefined.SendObj(cmd, obj, p1?, p2?, p3?, p4?, p5?, p6?, p7?, p8?) $$
 * @param {str} cmd
 * @param {all} obj
 * @param {all} [p1]
 * @param {all} [p2]
 * @param {all} [p3]
 * @param {all} [p4]
 * @param {all} [p5]
 * @param {all} [p6]
 * @param {all} [p7]
 * @param {all} [p8]
 * @returns str
 */


/** ### CreateObj ###
 * Requests to create a new object in the java plugin with up to 8 parameters, and expects a unique identifier as return value in return
 * $$ undefined.CreateObj(type, p1?, p2?, p3?, p4?, p5?, p6?, p7?, p8?) $$
 * @param {str} type
 * @param {all} [p1]
 * @param {all} [p2]
 * @param {all} [p3]
 * @param {all} [p4]
 * @param {all} [p5]
 * @param {all} [p6]
 * @param {all} [p7]
 * @param {all} [p8]
 * @returns str
 */


/** ### SendImg ###
 * Sends an image to the java plugin
 * $$ undefined.SendImg(cmd, img?, width?, height?) $$
 * @param {str} cmd
 * @param {dso} [img] CreateImage
 * @param {num_int} [width]
 * @param {num_int} [height]
 * @returns str
 */


/** ### SendCam ###
 * Sends a camera view to the java plugin
 * $$ undefined.SendCam(cmd, cam) $$
 * @param {str} cmd
 * @param {dso} cam CreateCameraView
 * @returns str
 */


/** ### Destroy ###
 * Calls the destroy methon on the java plugin
 * $$ undefined.Destroy() $$
 */
