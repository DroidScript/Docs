// ------------- HEADER SECTION -------------


/** # Script #
 * @brief import an external JavaScript file
 *
 * $$ app.Script(file, noDefer=false) $$
 * @param {str_ptf} file
 * @param {bin:load script inline} [noDefer=false]
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Loads a local JavaScript file to your app to make its functionality available in your app.
By default it is loaded just before OnStart is being called unless you set “NoDefer” to <js>true</js> which forces inline loading.
This is to ensure errors are highlighted correctly in external source files.

See Also: @LoadScript
 */



// ------------- SAMPLES -------------



/**
@sample Deferred Loading (recommended)
app.WriteFile( "script.js", "var num = 7;\nfunction computeNum() { return 6 * num; }" );
<b>app.Script( "script.js" );</b>

function OnStart() {
    app.ShowPopup( "script.js loaded." );
    app.Alert( computeNum(), "computed number: " );
}
 */



/**
@sample Inline Loading
app.WriteFile( "script.js", "var num = 7;\nfunction computeNum() { return 6 * num; }" );

function OnStart() {
    <b>app.Script( "script.js", true );</b>

    // without noDefer true computeNum won't be defined
    app.ShowPopup( "script.js loaded." );
    app.Alert( computeNum(), "computed number: " );
}
 */



/**
@sample Python Deferred Loading (recommended)
from native import app

app.WriteFile( "script.js", "num = 7;\nfunction computeNum() { return 6 * num; }" )
app.LoadScript( "script.js" )

def OnStart():
    app.ShowPopup( "script.js loaded." )
    app.Alert( computeNum(), "computed number: " )
 */



/**
@sample Python Inline Loading
from native import app

app.WriteFile( "script.js", "num = 7;\nfunction computeNum() { return 6 * num; }" )

def OnStart():
    app.LoadScript( "script.js", True )

    # without noDefer True computeNum won't be defined
    app.ShowPopup( "script.js loaded." )
    app.Alert( computeNum(), "computed number: " )
 */
