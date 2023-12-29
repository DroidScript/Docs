// ------------- HEADER SECTION ------------- 


/** # SetAutoStart #
 * @brief Autostart DroidScript Project on DS restart
 * Set a DroidScript project name which will be launched automatically when DroidScript starts.
 * 
 * <deprecated in favour of ide.AutoStart>
 * 
 * See Also: @SetSharedApp, @SetAutoBoot
 * $$ app.SetAutoStart(appName) $$ 
 * @param {str} appName 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Auto Start 'Hello World'
function OnStart()
{
    app.SetAutoStart( "Hello World" );
    app.ShowPopup( "You may now restart DroidScript." );
}
 */
    
            
    
/**
@sample Unset Autostart
function OnStart()
{
    app.SetAutoStart( "" );
    app.ShowPopup( "Autostart unset." );
}
 */
    
            
    
/**
@sample Python Auto Start 'Hello World'
from native import app

def OnStart():
    app.SetAutoStart( "Hello World" )
    app.ShowPopup( "You may now restart DroidScript." )
 */
    
            
    
/**
@sample Python Unset Autostart
from native import app

def OnStart():
    app.SetAutoStart( "" )
    app.ShowPopup( "Autostart unset." )
 */
    
            