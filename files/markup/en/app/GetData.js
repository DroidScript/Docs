// ------------- HEADER SECTION -------------


/** # GetData #
 * @brief Retreive saved data
 * Returns data stored via app.SetData(key, value). All data will be lost when the app is closed.
 * 
 * See Also: @SetData
 * $$ app.GetData(name) $$ 
 * @param {str} name 
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Get Saved Data
function OnStart()
{
    app.SetData( "myvar", "Hello World!" );
    <b>var data = app.GetData("myvar");</b>
    app.Alert( data, "Saved Data:" );
}
 */
    
            
    
/**
@sample Random Value
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btn = app.AddButton( lay, "Press Me", 0.3, 0.1 );
	btn.SetOnTouch( btn_OnTouch );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
	app.SetData( "number", 100 * Math.random() | 0 );

    <b>var data = app.GetData( "number" );</b>
	app.ShowPopup( "Data: " + data);
}
 */
    
            
    
/**
@sample Python Get Saved Data
from native import app

def OnStart():
    app.SetData("myvar", "Hello World!")
    data = app.GetData("myvar")
    app.Alert(data, "Saved Data:")
 */
    
            
    
/**
@sample Python Random Value
from native import app
import math
import random

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    btn = app.AddButton(lay, "Press Me", 0.3, 0.1)
    btn.SetOnTouch(btn_OnTouch)

    app.AddLayout(lay)

def btn_OnTouch():
    app.SetData("number", str(int(100 * random.random())))
    data = app.GetData("number")
    app.ShowPopup("Data: " + data)
 */
    
            