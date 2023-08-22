// ------------- HEADER SECTION ------------- 


/** # CreateUSBSerial #
 * @abbrev usb
 * @brief Returns a new USBSerial object
 * 
 * $$ usb = app.CreateUSBSerial(baudRate, dataBits, stopBits, parity, device) $$ 
 * @param {num_int} baudRate 300|600|1200|2400|4800|9600|19200|38400|57600|115200|230400|460800|921600
 * @param {num_int} dataBits 5|6|7|8
 * @param {num_int} stopBits 1|2|15
 * @param {num_int} parity 0:none|1:odd|2:even|3:mark|4:space
 * @param {num} device pid
 * @returns dso-USBSerial
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
The USBSerial component can be used to communicate with other USB devices connected to yours.

The default constructor values are:
	baudrate: 9600
	To find out more about RTD and DTR or USB serial at all visit [Wikipedia: RS-232](https://en.wikipedia.org/wiki/RS-232#Data\_and\_control\_signals)

<red>Note: this application only works on devices that support OTG and allow access to external serial devices.</red>
**Known to work:** Nexus7, GalaxyS3/S4, ExperiaZUltra, TescoHudl
**Dont work:** Nexus4, GalaxyS1, AsusMemo
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### GetType ###
 * Returns the control class name.
 * $$ usb.GetType() $$
 * @returns str-USBSerial
 */


/** ### IsConnected ###
 * @brief Checks if a USB device is connected
 * Returns whether a USB serial device is connected.
 * $$ usb.IsConnected() $$
 * @returns bin
 */


/** @extern Method */

/** ### SetDataMode ###
 * @brief Define data format for outgoing data
 * Enable sending data in several modes.
 * $$ usb.SetDataMode(mode) $$
 * @param {str} mode Hex:comma separated text value|Int:comma separated byte numbers|Text:string of text characters|&lt;encoding:"UTF-16L/BE"&gt;
 */


/** ### SetDTR ###
 * @brief Raises the DTR state
 * Raises the **D**ata **T**erminal **R**eady state.
 * $$ usb.SetDTR(onOff) $$
 * @param {bin} onOff 
 */


/** ### SetMaxRead ###
 * @brief Set maximum bytes to received
 * Define the maximum amount of bytes you want to receive at once.
 * $$ usb.SetMaxRead(bytes) $$
 * @param {num_int} bytes 
 */


/** ### SetMaxWrite ###
 * @brief Set maximum bytes to send
 * Define maximum amount of bytes to send at once.
 * $$ usb.SetMaxWrite(bytes) $$
 * @param {num_int} bytes 
 */


/** ### SetOnReceive ###
 * @brief Called after received Data via USB
 * The SetOnReceive callback is called automatically after data has been received via the USB serial connection.
 * $$ usb.SetOnReceive(callback) $$
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["str"]}
 */


/** ### SetRTS ###
 * @brief Raises the RTS state
 * Raises the **R**equest **T**o **S**end state.
 * $$ usb.SetRTS(onOff) $$
 * @param {bin} onOff 
 */


/** ### SetSplitMode ###
 * @brief Specify how to split received data
 * Tells the serial listener how to split received data. Splitted data will result in multiple OnReceive calls. * p2 and p3 have different purposes for different modes: * <style type='text/css'>th{align:center;}td{padding:0 10px 0 10px;}</style><table><tr><th>mode</th><th>p1</th><th>p2</th></tr><tr><td>Size</td><td>Size of one data package</td><td>-</td></tr><tr><td>End</td><td>Byte indicating end of data</td><td>-</td></tr><tr><td>Start-End</td><td>Byte indicating start of data</td><td>Byte indicating end of data</td></tr></table>
 * $$ usb.SetSplitMode(mode, p2, p3) $$
 * @param {str} mode End|Start-End|Size
 * @param {str||num_int} p2 
 * @param {str||num_int} p3 
 */


/** ### SetTimeout ###
 * 
 * $$ usb.SetTimeout(ms) $$
 * @param {num_mls} ms 
 */


/** ### Start ###
 * @brief Start listening to serial port
 * Start listening to the USB serial connection.
 * $$ usb.Start() $$
 */


/** ### Stop ###
 * @brief Stop listening to serial port
 * Stop listening on USB serial connection
 * $$ usb.Stop() $$
 */


/** ### Write ###
 * @brief Send data to connected device
 * Send data over the USB serial connection to the other device.
 * $$ usb.Write(text, encoding) $$
 * @param {str} text 
 * @param {str} encoding US-ASCII|UTF16L/BE
 */



// ------------- SAMPLES ------------- 

