
/** # CreateUSBSerial #
 * @abbrev usb
 * 
 * $$ usb = app.CreateUSBSerial(baudRate, dataBits, stopBits, parity, device) $$ 
 * @param {num_int} baudRate 300|600|1200|2400|4800|9600|19200|38400|57600|115200|230400|460800|921600
 * @param {num_int} dataBits 5|6|7|8
 * @param {num_int} stopBits 1|2|15
 * @param {num_int} parity 0:none|1:odd|2:even|3:mark|4:space
 * @param {num} device pid
 * @returns dso-USBSerial
*/


// CreateUSBSerial.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The USBSerial component can be used to communicate with other USB devices connected to yours.

The default constructor values are:
	baudrate: 9600
	To find out more about RTD and DTR or USB serial at all visit [Wikipedia: RS-232](https://en.wikipedia.org/wiki/RS-232#Data\_and\_control\_signals)

<red>Note: this application only works on devices that support OTG and allow access to external serial devices.</red>
**Known to work:** Nexus7, GalaxyS3/S4, ExperiaZUltra, TescoHudl
**Dont work:** Nexus4, GalaxyS1, AsusMemo
 */

/** ## Methods ##
 * These are the methods available for CreateUSBSerial
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ usb.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ usb.GetType() $$
 * @returns str-USBSerial
 */


/** ### IsConnected ###
 * Returns whether a USB serial device is connected.
 * $$ usb.IsConnected() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ usb.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### SetDataMode ###
 * Enable sending data in several modes.
 * $$ usb.SetDataMode(mode) $$
 * @param {str} mode Hex:comma separated text value|Int:comma separated byte numbers|Text:string of text characters|&lt;encoding:"UTF
 */


/** ### SetDTR ###
 * Raises the `D`ata `T`erminal `R`eady state.
 * $$ usb.SetDTR(onOff) $$
 * @param {bin} onOff 
 */


/** ### SetMaxRead ###
 * Define the maximum amount of bytes you want to receive at once.
 * $$ usb.SetMaxRead(bytes) $$
 * @param {num_int} bytes 
 */


/** ### SetMaxWrite ###
 * Define maximum amount of bytes to send at once.
 * $$ usb.SetMaxWrite(bytes) $$
 * @param {num_int} bytes 
 */


/** ### SetOnReceive ###
 * The SetOnReceive callback is called automatically after data has been received via the USB serial connection.
 * $$ usb.SetOnReceive(callback) $$
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["str"]}
 */


/** ### SetRTS ###
 * Raises the `R`equest `T`o `S`end state.
 * $$ usb.SetRTS(onOff) $$
 * @param {bin} onOff 
 */


/** ### SetSplitMode ###
 * Tells the serial listener how to split received data. Splitted data will result in multiple OnReceive calls. * p2 and p3 have different purposes for different modes: * <style type='text/css'>th{align:center;}td{padding:0 10px 0 10px;}</style><table><tr><th>mode</th><th>p1</th><th>p2</th></tr><tr><td>Size</td><td>Size of one data package</td><td>-</td></tr><tr><td>End</td><td>Byte indicating end of data</td><td>-</td></tr><tr><td>Start-End</td><td>Byte indicating start of data</td><td>Byte indicating end of data</td></tr></table>
 * $$ usb.SetSplitMode(mode, p2, p3) $$
 * @param {str} mode End|Start
 * @param {str||num_int} p2 
 * @param {str||num_int} p3 
 */


/** ### SetTimeout ###
 * 
 * $$ usb.SetTimeout(ms) $$
 * @param {num_mls} ms 
 */


/** ### Start ###
 * Start listening to the USB serial connection.
 * $$ usb.Start() $$
 */


/** ### Stop ###
 * Stop listening on USB serial connection
 * $$ usb.Stop() $$
 */


/** ### Write ###
 * Send data over the USB serial connection to the other device.
 * $$ usb.Write(text, encoding) $$
 * @param {str} text 
 * @param {str} encoding US
 */

// CreateUSBSerial.txt --> All the sample codes

/** @Sample
 
 */

