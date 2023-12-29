// ------------- HEADER SECTION ------------- 


/** # SaveNumber #
 * @brief Save a number value across multiple starts
 * Save a number value to remember varibale values between multiple app starts and updates.
 * 
 * See also: @LoadNumber.
 * $$ app.SaveNumber(name, value, file) $$ 
 * @param {str} name 
 * @param {num} value 
 * @param {str_ptf} file 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Click Counter
var clicks = 0, file = "demofile";

function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    clicks = app.LoadNumber( "clicks", 0, file );

    btn = app.CreateButton( "Click Me", 0.5, 0.1 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
	<b>app.SaveNumber( "clicks", ++clicks, file );</b>
	app.ShowPopup( "Clicks: " + clicks );
}
 */
    
            
    
/**
@sample Python Click Counter
from native import app

clicks = 0
file = "demofile"

def OnStart():
    global clicks
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    clicks = app.LoadNumber("clicks", 0, file)

    btn = app.CreateButton("Click Me", 0.5, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    app.AddLayout(lay)

def btn_OnTouch():
    clicks += 1
    app.SaveNumber("clicks", clicks, file)
    app.ShowPopup("Clicks: " + str(clicks))
 */
    
            