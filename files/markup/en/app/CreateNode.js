// ------------- HEADER SECTION -------------


/** # CreateNode #
 * @abbrev node
 *
 * $$ node = app.CreateNode(paths?, options?) $$
 * @param {str_pth} [paths] NODE_PATH env variable
 * @param {str_com} [options] extended:allow app methods in default main instance,legacy:dont use named pipes for messaging,nostart:disable auto start,esm:use EcmaScript-Modules
 * @returns dso-Node
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



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### Func ###
 * Call a function in the node process. Otherwise, use parent.Func() to call a function on the main app process from node process.
 * $$ node.Func(func, arg1, arg2) $$
 * @param {str} func Function name
 * @param {lst} [args] ...arguments
 */

/** ### GetVersion ###
 * Returns the plugin version
 * $$ node.GetVersion() $$
 * @returns num
 */


/** ### Start ###
 * Start the main Node process
 * $$ node.Start(args?, paths?) $$
 * @param {lst} [args] argument array
 * @param {lst} [paths]
 */


/** ### SetOnReady ###
 * %cb% the Node component is ready for use.
 * $$ node.SetOnReady(cb) $$
 * @param {fnc_json} cb {}
 */


/** ### SetOnDone ###
 * %cb% the node process has exited.
 * $$ node.SetOnDone(cb) $$
 * @param {fnc_json} cb {}
 */


/** ### SetOnOutput ###
 * %cb% the node process prints to stdout.
 * $$ node.SetOnOutput(cb) $$
 * @param {fnc_json} cb {"pNames":["stdout"],"pTypes":["str:newline delimeted"]}
 */


/** ### SetOnError ###
 * %cb% the node process prints to stderr.
 * $$ node.SetOnError(cb) $$
 * @param {fnc_json} cb {"pNames":["msg"],"pTypes":["str:newline delimeted"]}
 */


/** ### SetOnMessage ###
 * %cb% a system/pipe message was received from the node process.
 * $$ node.SetOnMessage(cb) $$
 * @param {fnc_json} cb {"pNames":["msg"],"pTypes":["str"]}
 */


/** ### SetEnv ###
 * Set a process environment variable.
 * $$ node.SetEnv(name, val) $$
 * @param {str} name
 * @param {str} val
 */


/** ### GetEnv ###
 * Get a process environment variable.
 * $$ node.GetEnv(name) $$
 * @param {str} name
 * @returns str
 */


/** ### OpenMsgPipe ###
 * Open a message pipe
 * $$ node.OpenMsgPipe(isCmd) $$
 * @param {bin} isCmd
 */


/** ### CloseMsgPipe ###
 * Close a message pipe
 * $$ node.CloseMsgPipe(isCmd) $$
 * @param {bin} isCmd
 */


/** ### SendPipeMsg ###
 * Send a message over the message pipe
 * $$ node.SendPipeMsg(msg, isCmd=false) $$
 * @param {str} msg
 * @param {bin} [isCmd=false]
 */


/** ### SendMessage ###
 * Send a message to the running node process. Calls cb of parent.SetOnMessage
 * $$ node.SendMessage(msg) $$
 * @param {str} msg
 */


/** ### IsReady ###
 * Returns if the Node component is ready for use
 * $$ node.IsReady() $$
 * @returns bin
 */


/** ### IsDone ###
 * Returns if the node process exited
 * $$ node.IsDone() $$
 * @returns bin
 */


/** ### Run ###
 * Run a NodeJS source file. Use id to run in a new context
 * $$ node.Run(file, id?, newPaths?) $$
 * @param {str_pth} file
 * @param {str:Context ID} [id]
 * @param {str_lst} [newPaths]
 */


/** ### Execute ###
 * Execute a line of code in the node process.
 * $$ node.Execute(js, id?) $$
 * @param {str_jsc} js
 * @param {str:Context ID} [id]
 */


/** ### AddModule ###
 * Install a node module from npmjs.org
 * $$ node.AddModule(name, dir?) $$
 * @param {str} name name|name^ver
 * @param {str:optional target directory} [dir]
 */



// ------------- SAMPLES -------------



/**
@sample Basic
var nodeJs = 'console.log("Hello World");\nconsole.error("Hello Error");\n'

function OnStart()
{
    app.WriteFile("node_script.js", nodeJs);

    lay = app.CreateLayout("linear", "VCenter, FillXY")
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
 */



/**
@sample Python Basic
from native import app

nodeJs = 'print("Hello World");\nconsole.error("Hello Error");\n'

def OnStart():
    global node
    app.WriteFile("node_script.js", nodeJs)

    lay = app.CreateLayout("linear", "VCenter, FillXY")
    txt = app.AddText(lay, "Debug Log:", 1, 1, "Log")

    node = app.CreateNode()

    def onOutput(msg):
        txt.Log(msg)

    def onError(msg):
        txt.Log(msg, "red")

    def onMessage(msg):
        txt.Log(msg)

    node.SetOnOutput(onOutput)
    node.SetOnError(onError)
    node.SetOnMessage(onMessage)
    node.SetOnReady(node_OnReady)

    app.AddLayout(lay)

def node_OnReady():
    node.Run("node_script.js")
 */
