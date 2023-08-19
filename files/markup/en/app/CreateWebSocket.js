// ------------- HEADER SECTION ------------- 


/** # CreateWebSocket #
 * @abbrev wbs
 * @brief Returns a new WebSocket object
 * 
 * $$ wbs = app.CreateWebSocket(ip, id, retry, options) $$ 
 * @param {str} ip 
 * @param {str} id 
 * @param {num_int} retry 
 * @param {str} options 
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

/** ### Close ###
 * Close the web socket.
 * $$ wbs.Close() $$
 */


/** ### GetSocket ###
 * Returns the js Socket instance
 * $$ wbs.GetSocket() $$
 * @returns jso-WebSocket
 */


/** ### IsOpen ###
 * Check whether WebSocket is open
 * $$ wbs.IsOpen() $$
 * @returns bin
 */


/** ### Send ###
 * Send a message to the server
 * $$ wbs.Send(message) $$
 * @param {str} message 
 */


/** ### SetOnClose ###
 * %cb% the WebSocket has been closed.
 * $$ wbs.SetOnClose(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnMessage ###
 * %cb% the WebSocket recived a message from the server.
 * $$ wbs.SetOnMessage(callback) $$
 * @param {fnc_json} callback {"pNames":["message"],"pTypes":["str"]}
 */


/** ### SetOnOpen ###
 * %cb% the WebSocket has been opened.
 * $$ wbs.SetOnOpen(callback) $$
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
    
            