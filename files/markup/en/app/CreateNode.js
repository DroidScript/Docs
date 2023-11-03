// ------------- HEADER SECTION ------------- 


/** # CreateNode #
 * @abbrev node
 * 
 * $$ node = app.CreateNode(paths, options) $$ 
 * @param {str_pth} paths NODE_PATH env variable
 * @param {str} options extended:allow app.* methods,legacy:don't use named pipes for messaging
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Creates a NodeJS background process with all the functionality of common node.js.

Note that to define private functions (functions that are invisible by the main app) you have to declare them as global variable without usign the var keyword.
This is actually a safer way of working as it prevents name clashes and libraries overwriting each other's functions and variables accidentally.  Ideally you should put your code into objects or classes for better protection and avoid using many globals.

<js>
var myLocalVariable = "Local Hello";
myGlobalVariable = "Global Hello"

function myLocalFunction() { return "Local Hello"; }
myGlobalFunction = function() { return "Global Hello"; }
</js>

For more details have a look at the Node docs in the @../Plugins page
 */



// ------------- SAMPLES ------------- 

/**
@sample Basic

var nodeJs = 'console.log("Hello World");\nconsole.error("Hello Error");\n'

function OnStart()
{
    app.WriteFile("node_script.js", nodeJs);

    lay = app.CreateLayout("linear", "VCenter,FillXY")
    txt = app.AddText(lay, "Debug Log:", 1, 1, "Log");

    <b>node = app.CreateNode();
    node.SetOnOutput((msg) => { txt.Log(msg); });
    node.SetOnError((msg) => { txt.Log(msg, "red"); });
    node.SetOnMessage((msg) => { txt.Log(msg); });
    node.SetOnReady(node_OnReady);</b>

    app.AddLayout(lay);
}

function node_OnReady()
{
    node.Run("node_script.js");
}
</sample>
*/