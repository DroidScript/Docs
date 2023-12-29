// ------------- HEADER SECTION ------------- 


/** # LoadNumber #
 * @brief Load saved boolean value
 * Load a saved number value to remember varibale values between multiple app starts.
 * 
 * See also: @SaveNumber.
 * $$ app.LoadNumber(name, default, file) $$ 
 * @param {str} name 
 * @param {num} default 
 * @param {str_ptf} file 
 * @returns num
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Click Counter
var clicks = 0, file = "demofile";

function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    <b>clicks = app.LoadNumber( "clicks", 0, file );</b>

    btn = app.CreateButton( "Click Me", 0.5, 0.1 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
	app.SaveNumber( "clicks", ++clicks, file );
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
    
            