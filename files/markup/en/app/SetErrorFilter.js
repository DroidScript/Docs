// ------------- HEADER SECTION -------------


/** # SetErrorFilter #
 * @brief Filter/ignore certain errors
 * Allow filtering out certain errors for nodejs apps.
 * $$ app.SetErrorFilter(regex) $$ 
 * @param {str} regex regex pattern
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Filter Errors
function OnStart()
{
    app.SetErrorFilter( "Uncaught Error: My Custom Error.*" );
    throw Error( "My Custom Error" );
    app.Alert( "Error was ignored" );
}
 */
    
            
    
/**
@sample Python Filter Errors
from native import app

def OnStart():
    app.SetErrorFilter( "Uncaught Error: My Custom Error.*" )
    raise Error( "My Custom Error" )
    app.Alert( "Error was ignored" )
 */
    
            