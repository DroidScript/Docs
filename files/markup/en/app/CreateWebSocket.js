// ------------- HEADER SECTION -------------


/** # CreateWebSocket #
 * @abbrev wbs
 * @brief Returns a new WebSocket object
 *
 * $$ wbs = app.CreateWebSocket(ip, id?, retry?, options?) $$
 * @param {str} ip
 * @param {str} [id]
 * @param {num_int} [retry]
 * @param {str} [options]
 * @returns dso-WebSocket
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
WebSocket are useful when constantly comminicating with a server and when a fast reaction time is required.
A web socket will automatically open after creating it. Once after finished loading, the **OnOpen** callback is called.

In order to receive messages from the server you have to specify a **OnMessage** callback.

See Also: @CreateWebServer
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern Batch */

/** @extern data */

/** ### Close ###
 * @brief Close web socket
 * Close the web socket.
 * $$ wbs.Close() $$
 */


/** ### GetSocket ###
 * @brief Get js Socket instance
 * Returns the js Socket instance
 * $$ wbs.GetSocket() $$
 * @returns jso-WebSocket
 */


/** ### IsOpen ###
 * @brief Check if WebSocket is open
 * Check whether WebSocket is open
 * $$ wbs.IsOpen() $$
 * @returns bin
 */


/** ### Send ###
 * @brief Send message to server
 * Send a message to the server
 * $$ wbs.Send(message) $$
 * @param {str} message
 */


/** ### SetOnClose ###
 * @brief Called when WebSocket was closed
 * %cb% the WebSocket has been closed.
 * $$ wbs.SetOnClose(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnMessage ###
 * @brief Called when received message from server
 * %cb% the WebSocket recived a message from the server.
 * $$ wbs.SetOnMessage(callback) $$
 * @param {fnc_json} callback {"pNames":["message"],"pTypes":["str"]}
 */


/** ### SetOnOpen ###
 * @brief Called when WebSocket is open
 * %cb% the WebSocket has been opened.
 * $$ wbs.SetOnOpen(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnWsClose ###
 * @brief Called when WebSocket client is close
 * %cb% the WebSocket client has been close.
 * $$ wbs.SetOnWsClose(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnWsOpen ###
 * @brief Called when WebSocket client is open
 * %cb% the WebSocket client has been open.
 * $$ wbs.SetOnWsOpen(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnWsReceive ###
 * @brief Called when WebSocket client receives a message
 * %cb% the WebSocket client receives a message.
 * $$ wbs.SetOnWsReceive(callback) $$
 * @param {fnc_json} callback {}
 */



// ------------- SAMPLES -------------



/**
@sample Basic
function OnStart()
{
    ip = app.GetIPAddress();

    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    txt = app.CreateText( "No connected clients.", 0.8, 0.3, "AutoScale,log" );
    txt.SetTextSize( 22 );
    lay.AddChild( txt );

    app.AddLayout( lay );

    serv = app.CreateWebServer( 8080 );
    serv.SetFolder( app.GetAppPath() );
    serv.SetOnReceive( serv_OnReceive );
    serv.Start();

    <b>var sock = app.CreateWebSocket( "sock1", ip, 8080 );
    sock.SetOnOpen( OnSockOpen );
    sock.SetOnClose( OnSockClose );</b>
}

function OnSockOpen()
{
    app.ShowPopup( "Connected" );
    var clients = serv.GetWebSockClients();
    for(var i in clients)
        txt.Log( clients[i].id + ": " + clients[i].remoteAddress );
}

function OnSockClose()
{
    app.ShowPopup( "Disconnected" );
}
 */



/**
@sample Python Basic
from native import app

def OnStart():
    global txt, serv
    ip = app.GetIPAddress()

    lay = app.CreateLayout("linear", "VCenter,FillXY")

    txt = app.CreateText("No connected clients.", 0.8, 0.3, "AutoScale,log")
    txt.SetTextSize(22)
    lay.AddChild(txt)

    app.AddLayout(lay)

    serv = app.CreateWebServer(8080)
    serv.SetFolder(app.GetAppPath())
    serv.SetOnReceive(serv_OnReceive)
    serv.Start()

    sock = app.CreateWebSocket("sock1", ip, 8080)
    sock.SetOnOpen(OnSockOpen)
    sock.SetOnClose(OnSockClose)

def OnSockOpen():
    app.ShowPopup("Connected")
    clients = serv.GetWebSockClients()
    for i in clients:
        txt.Log(clients[i].id + ": " + clients[i].remoteAddress)

def OnSockClose():
    app.ShowPopup("Disconnected")
 */
