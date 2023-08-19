// ------------- HEADER SECTION ------------- 


/** # SetOnDebug #
 * @brief Called on app debug messages
 * Define a callback function for debug messages.
 * 
 * See also: @Debug, @SetDebug
 * $$ app.SetOnDebug(callback) $$ 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample OnDebug
function OnStart()
{
    <b>app.SetOnDebug( OnDebug );</b>
    app.Debug( "app started" );
}

function OnDebug(msg)
{
    app.SetDebug();
    app.Alert( msg, "Received debug message:" );
    app.SetDebug( true );
}
 */
    
            