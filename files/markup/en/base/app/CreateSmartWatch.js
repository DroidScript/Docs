
/** # CreateSmartWatch #
 * @abbrev smw
 * Returns a SmartWatch object.
 * $$ smw = app.CreateSmartWatch(type) $$ 
 * @param {str} type |Sony
 * @returns dso-SmartWatch
*/


/** ## Methods ##
 * These are the methods available for CreateSmartWatch
 */


/** ### AddLayout ###
 * AddLayout adds a layout to the SmartWatch screen so that it is visible (if not hidden with SetVisibility)
 * $$ smw.AddLayout(layout) $$
 * @param {obj} layout SWlay
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ smw.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### CreateImage ###
 * Creates a SmartWatch Image. See also: @CreateImage
 * $$ smw.CreateImage(image, width, height, options, pxwidth, pxheight) $$
 * @param {str_ptf} image 
 * @param {num} width 
 * @param {num} height 
 * @param {str_com} options fix,alias,px:use pixel values for size,Button:causes image to depress like a button when touched,ScaleCenter,async:loads the image asynchronously,FontAwesome,Resize,TouchThrough,Icon:allows loading of app icons,wallpaper,NoPlay:prevent gifs from playing automatically
 * @param {num_pxl} pxwidth 
 * @param {num_pxl} pxheight 
 * @returns swo-Image
 */


/** ### CreateLayout ###
 * Creates a SmartWatch Layout. See also: @CreateLayout
 * $$ smw.CreateLayout(type, options) $$
 * @param {str} type Linear|Absolute|Frame
 * @param {str_com} options TouchThrough:forwards touch events to underlying children,TouchSpy:spies for touch events on all children,Left|Top|Right|Bottom|Center|VCenter,Wrap,Horizontal|Vertical,FillX,FillY,FillXY
 * @returns swo-Layout
 */


/** ### CreateSensor ###
 * Creates a SmartWatch Sensor. See also: @CreateSensor
 * $$ smw.CreateSensor(name, options) $$
 * @param {str} name Accelerometer|MagneticField|Orientation|Light|Proximity|Temperature|GameRotation|GeomagneticRotation|Gravity|Gyroscope|HeartRate|Acceleration|Pressure|Humidity|RotationMotion|StepCounter|StepDetector
 * @param {str_com} options Slow|Medium|Fast|Fastest
 * @returns swo-Sensor
 */


/** ### CreateText ###
 * Creates a SmartWatch Text. See also: @CreateText
 * $$ smw.CreateText(text, width, height, options) $$
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options Multiline,Left|Right,Html,Bold,Monospace,AutoSize,NoWrap,Log
 * @returns swo-Text
 */


/** ### GetVersion ###
 * Returns the SmartWatch DS version number.
 * $$ smw.GetVersion() $$
 * @returns str
 */


/** ### RemoveLayout ###
 * Removes a SmartWatch layout from the screen.
 * $$ smw.RemoveLayout(layout) $$
 * @param {obj} layout SWlay
 */


/** ### SetMenu ###
 * Set the SmartWatch menu fields
 * $$ smw.SetMenu(list, iconPath) $$
 * @param {str_com} list 
 * @param {str_ptf} iconPath 
 */


/** ### SetOnBack ###
 * %cb% the SmartWatch back button was pressed.
 * $$ smw.SetOnBack(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnHide ###
 * %cb% the SmartWatch app is hidden.
 * $$ smw.SetOnHide(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnMenu ###
 * %cb% the SmartWatch menu button is touched.
 * $$ smw.SetOnMenu(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnShow ###
 * %cb% the SmartWatch app is shown.
 * $$ smw.SetOnShow(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnStart ###
 * %cb% the SmartWatch app has started.
 * $$ smw.SetOnStart(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnStop ###
 * %cb% the SmartWatch app has stopped.
 * $$ smw.SetOnStop(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnSwipe ###
 * %cb% the SmartWatch screen is swiped.
 * $$ smw.SetOnSwipe(callback) $$
 * @param {fnc_json} callback {"pNames":["dir"],"pTypes":["str-Left|Up|Right|Down"]}
 */


/** ### SetOnTouch ###
 * %cb% the SmartWatch was touched.
 * $$ smw.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["dir","x","y"],"pTypes":["str-Down|Move|Up","num_frc","num_frc"]}
 */


/** ### SetScreenState ###
 * Change the screen state
 * $$ smw.SetScreenState(p1) $$
 * @param {?} p1 
 */


/** ### ShowLayout ###
 * Show a layout on the screen
 * $$ smw.ShowLayout(layout, x, y) $$
 * @param {obj} layout SWlay
 * @param {num_frc} x 
 * @param {num_frc} y 
 */


/** ### ShowMessage ###
 * Shows a message on the screen
 * $$ smw.ShowMessage(message) $$
 * @param {str} message 
 */


/** ### StopApp ###
 * Stops the running SmartWatch app.
 * $$ smw.StopApp() $$
 */


/** ### Vibrate ###
 * Makes the SmartWatch vibrate
 * $$ smw.Vibrate(p1, p2, p3) $$
 * @param {?} p1 
 * @param {?} p2 
 * @param {?} p3 
 */

// CreateSmartWatch.txt --> All the sample codes

/** @Sample
 
 */

