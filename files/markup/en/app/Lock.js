// ------------- HEADER SECTION ------------- 


/** # Lock #
 * @brief Lock the device
 * Locks the device.
 * 
 * <red>**Requires Root**</red>
 * 
 * See Also: @Unlock
 * $$ app.Lock() $$ 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Demo
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY,touchspy" );

	btn = app.CreateButton( "Disable", 0.3, 0.1 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
	app.Lock();
	app.ShowPopup( "Locked" );
}
 */
    
            
    
/**
@sample Python Demo
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY,touchspy")

    btn = app.CreateButton("Disable", 0.3, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    app.AddLayout(lay)

def btn_OnTouch():
    app.Lock()
    app.ShowPopup("Locked")
 */
    
            