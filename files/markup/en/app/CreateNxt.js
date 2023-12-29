// ------------- HEADER SECTION ------------- 


/** # CreateNxt #
 * @abbrev nxt
 * @brief Returns a new Nxt object
 * The NXT object is used to manage the connection between your Android phone and the Lego Mindstorms NXT brick.
 * <deprecated Please install and visit the NXT-Docs from the Plugins page>
 * $$ nxt = app.CreateNxt() $$ 
 * @returns dso-Nxt
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### Beep ###
 * @brief Play frequency tone
 * Play tone with given frequency for a given time in milliseconds.
 * $$ nxt.Beep(frequency, duration) $$
 * @param {num_hrz} frequency 
 * @param {num_mls} duration 
 */


/** ### Brake ###
 * @brief Brakes motors smoothly
 * Brakes motors by lowering the input power.
 * $$ nxt.Brake(motors) $$
 * @param {str} motors A,B,C|ABC
 */


/** ### CheckConnection ###
 * @brief Check if device is connected to NXT
 * Check whether phone/tablet is connected to the NXT.
 * $$ nxt.CheckConnection() $$
 * @returns bin
 */


/** ### Connect ###
 * @brief Connect to NXT
 * Connects to the NXT device via Bluetooth.
 * $$ nxt.Connect(name) $$
 * @param {str} name 
 */


/** ### Disconnect ###
 * @brief Disconnect NXT
 * Disconnect Phone/Tablet from NXT.
 * $$ nxt.Disconnect() $$
 */


/** ### Drive ###
 * commands NXT to drive motors
 * $$ nxt.Drive(motors, power, rotations, options) $$
 * @param {str} motors A,B,C|ABC
 * @param {num_prc} power 
 * @param {num_prc} rotations -100..100
 * @param {num_flt} options 0|rotations
 */


/** ### FileFindFirst ###
 * @brief Find first program file
 * Find the first program file of the NXT.
 * $$ nxt.FileFindFirst(pattern) $$
 * @param {str} pattern 
 * @returns str
 */


/** ### FileFindNext ###
 * Find next program file on the NXT.
 * $$ nxt.FileFindNext(handle) $$
 * @param {str} handle 
 * @returns str
 */


/** ### GetBtAddress ###
 * @brief Returns NXT Bt address
 * Returns Bluetooth address of a connected NXT brick
 * $$ nxt.GetBtAddress() $$
 * @returns str
 */


/** ### GetBtName ###
 * @brief Returns NXT Bt name
 * Returns Bluetooth name of a connected NXT brick
 * $$ nxt.GetBtName() $$
 * @returns str
 */


/** ### GetCurrentProgram ###
 * @brief Returns the current running program name
 * Returns the name of the currently running program.
 * $$ nxt.GetCurrentProgram() $$
 * @returns str
 */


/** ### GetRotationCount ###
 * @brief Returns a new wheel encoder value.
 * Returns the wheel encoder value of a motor.
 * $$ nxt.GetRotationCount(motor) $$
 * @param {str} motor A,B,C|ABC
 * @returns num_int
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ nxt.GetType() $$
 * @returns str-Nxt
 */


/** ### IsBluetoothEnabled ###
 * @brief Checks if bt is enabled
 * Checks if bluetooth is enabled on the device.
 * $$ nxt.IsBluetoothEnabled() $$
 * @returns bin
 */


/** ### IsConnected ###
 * @brief Checks if NXT is connected
 * Checks if the device is connected to a NXT.
 * $$ nxt.IsConnected() $$
 * @returns bin
 */


/** ### IsEnabled ###
 * @brief Checks if bt is enabled
 * Checks if bluetooth is enabled on the device. Its the same as nxt.IsBluetoothEnabled.
 * $$ nxt.IsEnabled() $$
 * @returns bin
 */


/** ### IsMotorIdle ###
 * @brief Check if a motor is powered
 * Checks if a motor is currently powered
 * $$ nxt.IsMotorIdle(motor) $$
 * @param {str} motor A,B,C|ABC
 */


/** ### IsPaired ###
 * @brief Checks if the device is paired with an other
 * Checks if a Bluetooth device with a given name is paired with our device.
 * $$ nxt.IsPaired(name) $$
 * @param {str} name 
 * @returns bin
 */


/** ### PlaySoundFile ###
 * Play a sound file for a given amount of times.
 * $$ nxt.PlaySoundFile(file, repeat) $$
 * @param {str_ptf} file 
 * @param {num_int} repeat 
 */


/** ### ReadColorSensor ###
 * Read a color sensor value on the input where the sensor is plugged into.
 * 
 * In “ColorDetect” mode this function returns a value between 1 and 6 which represent the colors “black”, “blue”, “green”, “yellow”, “red”, or “white”.
 * You can use the ToColorName function to convert from these six values to a color name.
 * All other modes return a value between 0 and 1023.
 * $$ nxt.ReadColorSensor(input, mode) $$
 * @param {num_int} input 1
 * @param {str} mode ColorDetect|LightSense|RedSense|GreenSense|BlueSense
 * @returns num_int-1..6 or 0..1023
 */


/** ### ReadDistanceSensor ###
 * @brief Get measured ultrasinic distance in cm
 * Reads the distance measured by the ultrasonic sensor in centimeters.
 * $$ nxt.ReadDistanceSensor(input) $$
 * @param {num_int} input 1..4
 * @returns num_flt
 */


/** ### ReadLightSensor ###
 * @brief Measures the light intensity
 * Reads the intensity of the light currently being 'seen' by the NXT light sensor. If active is set true an additionall white LED will be turned on while sensing.
 * $$ nxt.ReadLightSensor(input, active) $$
 * @param {num_int} input 1..4
 * @param {bin} active 
 * @returns num_int-0..100
 */


/** ### ReadMail ###
 * Reads a message from the NXT brick's mail box. This message can be written using a normal NXT-G program running on the brick. This allows you to read values from NXT-G programs with your phone or tablet.
 * $$ nxt.ReadMail(mailbox, type, remove) $$
 * @param {num_int} mailbox 1..10
 * @param {str} type Text|Number|Logic
 * @param {bin} remove 
 * @returns str
 */


/** ### ReadSoundSensor ###
 * @brief Measure the sound pressure level
 * Reads the sound pressure level of the surrounding.
 * $$ nxt.ReadSoundSensor(input, mode) $$
 * @param {num_int} input 1..4
 * @param {str} mode DB:Decibels|DbA:A-weighted Decibels
 * @returns num_flt
 */


/** ### ReadTouchSensor ###
 * @brief Check if the touch sensor is pressed
 * Returns whether the touch sensor switch is currently pushed.
 * $$ nxt.ReadTouchSensor(input) $$
 * @param {num_int} input 1..4
 * @returns bin
 */


/** ### RequestEnable ###
 * @brief Request enabling bluetooth if it isn't
 * Invokes system dialog box which could enable Bluetooth on tablet/phone when Bluetooth is disabled.
 * $$ nxt.RequestEnable() $$
 */


/** ### Reset ###
 * Reset wheel encoder offset to 0.
 * $$ nxt.Reset(motors) $$
 * @param {str} motors A,B,C|ABC
 */


/** ### SendMail ###
 * Sends a message to the NXT brick's mail box.
 * $$ nxt.SendMail(mailbox, type, message) $$
 * @param {num_int} mailbox 1..10
 * @param {str} type Text|Number|Logic
 * @param {str||num_int} message 
 */


/** ### SetInvert ###
 * @brief Inverts the direction of motor commands
 * Provides a convenient way to invert the direction of the motor commands.
 * $$ nxt.SetInvert(invert) $$
 * @param {bin} invert 
 */


/** ### SetLampColor ###
 * @brief Change sensor LED color
 * Changes the color sensor LED to one color of “White”, “Red”, “Green”, “Blue” or “Off”
 * $$ nxt.SetLampColor(input, color) $$
 * @param {num_int} input 1..4
 * @param {str_col} color “White”|“Red”|“Green”|“Blue”|“Off”
 */


/** ### SetOnConnect ###
 * @brief Called when NXT connection established or failed
 * %cb% the NXT has been connected via Bluetooth or if it failed to.
 * $$ nxt.SetOnConnect(callback) $$
 * @param {fnc_json} callback {"pNames":["connected"],"pTypes":["bin"]}
 */


/** ### SetOnConnected ###
 * @brief Called when bt connection established
 * %cb% the NXT has been successfully connected via Bluetooth
 * $$ nxt.SetOnConnected(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### ShowDevices ###
 * @brief Shows a list of paired NXT devices to connect to
 * Shows the user a dialog box that contains a list of NXT bricks which are paired with the phone. The user can then select the brick to connect to via Bluetooth.
 * $$ nxt.ShowDevices() $$
 */


/** ### StartProgram ###
 * Starts an NXT-G program on the NXT brick if available.
 * $$ nxt.StartProgram(name) $$
 * @param {str_pth} name 
 */


/** ### Stop ###
 * Stop powering some motors.
 * $$ nxt.Stop(motors) $$
 * @param {str} motors A,B,C|ABC
 */


/** ### StopProgram ###
 * @brief Stops the current running program
 * Stops a the currently running NXT-G program.
 * $$ nxt.StopProgram() $$
 */


/** ### ToColorName ###
 * @brief Convert color number to its name
 * Converts a color integer received from ReadColorSensor to a meaningful color name.
 * $$ nxt.ToColorName(val) $$
 * @param {num_int} val 1..6
 * @returns str-black|blue|green|yellow|red|white
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Basic
function OnStart()
{
    <b>nxt = app.CreateNxt();
    nxt.SetOnConnected( OnConnected );
    nxt.ShowDevices();</b>
}

function OnConnected()
{
    nxt.Beep( 100, 500 );
}
 */
    
            
    
/**
@sample Auto Connect
function OnStart()
{
	nxt = app.CreateNxt();

	<b>var deviceName = "myNXTbrick";
	var paired = nxt.IsPaired( deviceName );
	if (paired)
	{
	    app.ShowProgress( "Connecting to " + deviceName + "..." );
            nxt.SetOnConnect( nxt_OnConnect );
            nxt.Connect( deviceName );
	}</b>
}

function nxt_OnConnect( success, nxt )
{
    if( success ) {
        app.ShowPopup( "Connected to: " + nxt.GetBtName() + " : " + nxt.GetBtAddress() );
        nxt.Beep( 2000, 200 );
    }
    else app.Alert( "Failed to connect!" );
    app.HideProgress();
}
 */
    
            
    
/**
@sample Sensors
function OnStart()
{
    nxt = app.CreateNxt();

    lay = app.CreateLayout( "linear", "FillXY,VCenter" );

    var list = "Color,Distance,Light,Mail,Sound,Touch"
    spnType = app.CreateSpinner( list, .3 );
    spnType.SetOnChange( spnType_OnChange );
    lay.AddChild( spnType );

    spnInput = app.CreateSpinner( "1,2,3,4", .3 );
    lay.AddChild( spnInput );

    btn = app.CreateButton( "Measure", .3, .1 );
    btn.SetOnTouch( ReadSensor );
    lay.AddChild( btn );

    app.AddLayout( lay );
}

function spnType_OnChange()
{
    app.SimulateTouch( spnInput );
}

function ReadSensor()
{
    var res = "invalid", inp = Number(spnInput.GetText());

    switch( spnType.GetText() )
    {
        case "Color": res = nxt.ToColorName( nxt.ReadColorSensor( inp, "ColorDetect" )); break;
        case "Distance": res = nxt.ReadDistanceSensor( inp ) + " cm"; break;
        case "Light": res = nxt.ReadLightSensor( inp, false ); break;
        case "Mail": res = nxt.ReadMail( inp, "Text", false ); break;
        case "Sound": res = nxt.ReadSoundSensor( inp, "dB" ); break;
        case "Touch": res = nxt.ReadTouchSensor( inp ); break;
    }

    if(res) app.ShowPopup( res );
    else app.ShowPopup( "No Value" );
}
 */
    
            
    
/**
@sample Python Basic
from hybrid import ui

def OnStart():
    global nxt
    <b>nxt = ui.Nxt()
    nxt.SetOnConnected(OnConnected)
    nxt.ShowDevices()</b>

def OnConnected():
    nxt.Beep(100, 500)
 */
    
            
    
/**
@sample Python Auto Connect
from native import app

def OnStart():
    global nxt
    nxt = app.CreateNxt()

    <b>deviceName = "myNXTbrick"
    paired = nxt.IsPaired(deviceName)
    if paired:
        app.ShowProgress("Connecting to " + deviceName + "...")
        nxt.SetOnConnect(nxt_OnConnect)
        nxt.Connect(deviceName)</b>

def nxt_OnConnect(success, nxt):
    if success:
        app.ShowPopup("Connected to: " + nxt.GetBtName() + " : " + nxt.GetBtAddress())
        nxt.Beep(2000, 200)
    else:
        app.Alert("Failed to connect!")
    app.HideProgress()
 */
    
            
    
/**
@sample Python Sensors
from native import app

def OnStart():
    global spnInput, nxt, spnType
    nxt = app.CreateNxt()

    lay = app.CreateLayout("linear", "FillXY,VCenter")

    list = "Color,Distance,Light,Mail,Sound,Touch"
    spnType = app.CreateSpinner(list, .3)
    spnType.SetOnChange(spnType_OnChange)
    lay.AddChild(spnType)

    spnInput = app.CreateSpinner("1,2,3,4", .3)
    lay.AddChild(spnInput)

    btn = app.CreateButton("Measure", .3, .1)
    btn.SetOnTouch(ReadSensor)
    lay.AddChild(btn)

    app.AddLayout(lay)

def spnType_OnChange(item, index):
    app.SimulateTouch(spnInput)

def ReadSensor():
    res = "invalid"
    inp = int(spnInput.GetText())

    switch = {
        "Color": lambda: nxt.ToColorName(nxt.ReadColorSensor(inp, "ColorDetect")),
        "Distance": lambda: str(nxt.ReadDistanceSensor(inp)) + " cm",
        "Light": lambda: str(nxt.ReadLightSensor(inp, False)),
        "Mail": lambda: nxt.ReadMail(inp, "Text", False),
        "Sound": lambda: str(nxt.ReadSoundSensor(inp, "dB")),
        "Touch": lambda: str(nxt.ReadTouchSensor(inp)),
    }

    result = switch.get(spnType.GetText())
    if result:
        res = result()

    if res:
        app.ShowPopup(res)
    else:
        app.ShowPopup("No Value")
 */
    
            