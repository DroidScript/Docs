// ------------- HEADER SECTION -------------


/** # ToFront #
 * @brief Bring your app to the foreground
 * Brings the app back to the foreground.
 * 
 * See Also: @ToBack.
 * $$ app.ToFront() $$ 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Hide and Peek
function OnStart()
{
    app.ToBack();
    setTimeout("app.ToFront()", 5000);
}

function OnPause()
{
    app.ShowPopup( "OnPause" );
}

function OnResume()
{
    app.ShowPopup( "OnResume" );
}
 */
    
            
    
/**
@sample Python Hide and Peek
from native import app

def OnStart():
    app.ToBack()
    app.SetTimeout("app.ToFront()", 5000)

def OnPause():
    app.ShowPopup( "OnPause" )

def OnResume():
    app.ShowPopup( "OnResume" )
 */
    
            