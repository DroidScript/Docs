// ------------- HEADER SECTION ------------- 


/** # SetUserAgent #
 * Change the user agent for html apps. For more details [ask Wikipedia](https://en.wikipedia.org/wiki/User_agent).
 * $$ app.SetUserAgent(agent, options) $$ 
 * @param {str} agent 
 * @param {str} options Add-appends to default user agent
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Example
var defaultUserAgent = navigator.userAgent;
var myUserAgent = defaultUserAgent;

function OnStart()
{
    app.SetUserAgent( myUserAgent );
}
 */
    
            
    
/**
@sample Python Example
from native import app

defaultUserAgent = navigator.userAgent
myUserAgent = defaultUserAgent

def OnStart():
    app.SetUserAgent(myUserAgent)
 */
    
            