// ------------- HEADER SECTION -------------


/** # SetData #
 * @brief Save data while app is running
 * Saves variables until the app closes. All saved data will be lost afterwards. %c
 * 
 * See Also: @GetData, @ClearData
 * $$ app.SetData(name, value) $$ 
 * @param {str} name 
 * @param {str} value 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Basic
function OnStart()
{
    <b>app.SetData( "myvar", "Hello World!" );</b>
    var data = app.GetData("myvar");
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
    var data = 100 * Math.random() | 0;
	<b>app.SetData( "number", data );</b>

	app.ShowPopup( "Data: " + app.GetData( "number" ));
}
 */
    
            
    
/**
@sample Python Basic
from native import app

def OnStart():
    app.SetData( "myvar", "Hello World!" )
    data = app.GetData("myvar")
    app.Alert( data, "Saved Data:" )
 */
    
            
    
/**
@sample Python Random Value
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    btn = app.AddButton( lay, "Press Me", 0.3, 0.1 )
    btn.SetOnTouch( btn_OnTouch )

    app.AddLayout( lay )

def btn_OnTouch():
    data = str(int(100 * (random.random())))
    app.SetData( "number", data )

    app.ShowPopup( "Data: " + app.GetData( "number" ))
 */
    
            