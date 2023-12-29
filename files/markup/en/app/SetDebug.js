// ------------- HEADER SECTION ------------- 


/** # SetDebug #
 * @brief Control the debug level of the program
 * 
 * $$ app.SetDebug(switches) $$ 
 * @param {str_com} switches console,ds,adb,all
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
SetDebug lets you control the debugging level. The available modes are:
	“console”: allows console.log messages
	“ds”: allows app.Debug messages
	“adb”: allows adb debug messages (ie at apk startup)
	<js nobox>true</js>: enable all debug messages
	<js nobox>false</js> or “” : disable all debug messages

Note that debugging is disabled in apk release mode by default. Otherwise it is always enabled at start.

See Also: @Debug, @GetDebug, @IsDebugging
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Demonstration
function OnStart()
{
    app.CreateDebug();

	app.Debug("default 1");   // default on
	console.log("default 2"); // default on

	app.SetDebug("adb");
	app.Debug("adb 3");       // off
	console.log("adb 4");     // off

	<b>app.SetDebug("console");</b>
	app.Debug("console 5");   // off
	console.log("console 6"); // on

	app.SetDebug("ds");
	app.Debug("ds 7");        // on
	console.log("ds 8");      // off

	app.SetDebug("");
	app.Debug("null 9");      // off
	console.log("null 10");   // off

	app.SetDebug("true");
	app.Debug("true 11");     // on
	console.log("true 12");   // on

	app.SetDebug("false");
	app.Debug("hello 13");    // off
	console.log("hello 14");  // off
}
 */
    
            
    
/**
@sample Python Demonstration
from native import app

def OnStart():
    app.CreateDebug()

    app.Debug("default 1")   # default on
    print("default 2") # default on

    app.SetDebug("adb")
    app.Debug("adb 3")       # off
    print("adb 4")     # off

    <b>app.SetDebug("console")</b>
    app.Debug("console 5")   # off
    print("console 6") # on

    app.SetDebug("ds")
    app.Debug("ds 7")        # on
    print("ds 8")      # off

    app.SetDebug("")
    app.Debug("null 9")      # off
    print("null 10")   # off

    app.SetDebug("true")
    app.Debug("true 11")     # on
    print("true 12")   # on

    app.SetDebug("false")
    app.Debug("hello 13")    # off
    print("hello 14")  # off
 */
    
            