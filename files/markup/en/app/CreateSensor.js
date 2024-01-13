// ------------- HEADER SECTION -------------


/** # CreateSensor #
 * @abbrev sns
 * @brief Returns a new Sensor object
 * 
 * $$ sns = app.CreateSensor(type, options?) $$ 
 * @param {str} type Accelerometer|MagneticField|Orientation|Light|Proximity|Temperature|GameRotation|GeomagneticRotation|Gravity|Gyroscope|HeartRate|Acceleration|Pressure|Humidity|RotationMotion|StepCounter|StepDetector
 * @param {str_com} [options] Slow|Medium|Fast|Fastest
 * @returns dso-Sensor
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
The sensor object can be used to access numerous sensors of your device. You can use the **SetOnChange** function of the Sensor to set the name of a function you want to be called when a the changes occur.

Change the rate that a sensor checks for changes by adding one the options “Fastest”, “Fast”, “Medium” or “Slow”. “Slow” is the default.
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** @extern Batch */

/** ### GetAzimuth ###
 * @brief Get first value of a sensor
 * Returns the first/x/azimuth value of a sensor.
 * $$ sns.GetAzimuth() $$
 * @returns num
 */


/** ### GetNames ###
 * Returns a list of builtin sensors in your device.
 * $$ sns.GetNames() $$
 * @returns str_com
 */


/** ### GetPitch ###
 * @brief Get second value of a sensor
 * Returns the second/y/pitch value of a sensor.
 * $$ sns.GetPitch() $$
 * @returns num
 */


/** ### GetRoll ###
 * @brief Get third value of a sensor
 * Returns the third/z/roll value of a sensor.
 * $$ sns.GetRoll() $$
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ sns.GetType() $$
 * @returns str-Sensor
 */


/** ### GetValues ###
 * @brief Get all values from sensor
 * Returns all values of a sensor.
 * $$ sns.GetValues() $$
 * @returns lst-[ time:num_mls, first:num, second:num, third:num ]
 */


/** @extern Method */

/** ### SetMaxRate ###
 * @brief Set maximum OnChange rate
 * Define a minimum timeout between two OnChage calls.
 * $$ sns.SetMaxRate(rate) $$
 * @param {num_mls} rate 
 */


/** ### SetMinChange ###
 * @brief Set minimum value difference which triggers OnChange
 * Define a minimum threshold value which triggers a OnChange call.
 * $$ sns.SetMinChange(min) $$
 * @param {num} min 
 */


/** ### SetOnChange ###
 * @brief Called when a sensor value has changed
 * %cb% a sensor value has changed.
 * $$ sns.SetOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["first","second","third","time"],"pTypes":["num","num","num","num_mls"]}
 */


/** ### Start ###
 * @brief Start the sensor
 * Start reading from the sensor.
 * $$ sns.Start() $$
 */


/** ### Stop ###
 * @brief Stop the sensor
 * Stop reading from the sensor.
 * $$ sns.Stop() $$
 */



// ------------- SAMPLES ------------- 


    
/**
@sample GetNames
function OnStart()
{
    sns = app.CreateSensor();
    <b>var names = sns.GetNames();
    app.Alert(names.replace(/,/g, ",\n"), "Sensor Names");</b>
}
 */
    
            
    
/**
@sample Accelerometer
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	txt = app.CreateText( "", 0.8, 0.3, "Multiline" );
	lay.AddChild( txt );
	app.AddLayout( lay );

	<b>sns = app.CreateSensor( "Accelerometer" );
	sns.SetOnChange( sns_OnChange );
	sns.Start();</b>

}

function sns_OnChange( x, y, z, time )
{
	txt.SetText( "x=" + x + "\n y=" + y + "\n z=" + z );
}
 */
    
            
    
/**
@sample Orientation
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	txt = app.CreateText( "", 0.8, 0.3, "Multiline" );
	lay.AddChild( txt );
	app.AddLayout( lay );

	<b>sns = app.CreateSensor( "Orientation" );
	sns.SetOnChange( sns_OnChange );
	sns.Start();</b>

}

function sns_OnChange( azimuth, pitch, roll, time )
{
	var msg = " azimuth = " + azimuth.toFixed(1);
	msg += "\n pitch = " + pitch.toFixed(1);
	msg += "\n roll = " + roll.toFixed(1);
	txt.SetText( msg );
}
 */
    
            
    
/**
@sample Light
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	txt = app.CreateText( "", 0.8, 0.3 );
	lay.AddChild( txt );
	app.AddLayout( lay );

	<b>sns = app.CreateSensor( "Light" );
	sns.SetOnChange( sns_OnChange );
	sns.Start();</b>
}

function sns_OnChange( lux )
{
	txt.SetText( "level = " + lux + " lux" );
}
 */
    
            
    
/**
@sample Python GetNames
from native import app

def OnStart():
    sns = app.CreateSensor()
    names = sns.GetNames()
    app.Alert(names.replace(",", ",\n"), "Sensor Names")
 */
    
            
    
/**
@sample Python Accelerometer
from native import app

def OnStart():
    global txt
    lay = app.CreateLayout("Linear", "VCenter,FillXY")

    txt = app.CreateText("", 0.8, 0.3, "Multiline,Left")
    lay.AddChild(txt)
    app.AddLayout(lay)

    sns = app.CreateSensor("Accelerometer")
    sns.SetOnChange(sns_OnChange)
    sns.Start()

def sns_OnChange(x, y, z, time):
    txt.SetText("x=" + str(x) + "\n y=" + str(y) + "\n z=" + str(z))
 */
    
            
    
/**
@sample Python Orientation
from native import app

def OnStart():
    global txt
    lay = app.CreateLayout("Linear", "VCenter,FillXY")

    txt = app.CreateText("", 0.8, 0.3, "Multiline")
    lay.AddChild(txt)
    app.AddLayout(lay)

    sns = app.CreateSensor("Orientation")
    sns.SetOnChange(sns_OnChange)
    sns.Start()

def sns_OnChange(azimuth, pitch, roll, time):
    msg = " azimuth = " + str(azimuth)
    msg += "\n pitch = " + str(pitch)
    msg += "\n roll = " + str(roll)
    txt.SetText(msg)
 */
    
            
    
/**
@sample Python Light
from native import app

def OnStart():
    global txt
    lay = app.CreateLayout("Linear", "VCenter,FillXY")

    txt = app.CreateText("", 0.8, 0.3)
    lay.AddChild(txt)
    app.AddLayout(lay)

    sns = app.CreateSensor("Light")
    sns.SetOnChange(sns_OnChange)
    sns.Start()

def sns_OnChange(lux, second, third, time):
    txt.SetText("level = " + str(lux) + " lux")
 */
    
            