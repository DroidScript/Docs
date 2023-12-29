// ------------- HEADER SECTION ------------- 


/** # GetRouterAddress #
 * Returns the routers ip address. (Its typically your own IP but ending with a .1, ie. 192.168.178.1)
 * $$ app.GetRouterAddress() $$ 
 * @returns str:ip address
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Get Router Address
function OnStart()
{
    var ip = app.GetRouterAddress();
    app.Alert(ip);
}
 */
    
            
    
/**
@sample Python Get Router Address
from native import app

def OnStart():
    ip = app.GetRouterAddress()
    app.Alert(ip)
 */
    
            