// ------------- HEADER SECTION -------------


/** # CreateWebServer #
 * @abbrev sock
 * @brief Returns a new WebServer object
 *
 * $$ sock = app.CreateWebServer(port, options?) $$
 * @param {num_int} port
 * @param {str_com} [options] ListDir:Show files in folder|Upload:Allow file uploads|NoWelcome:Ignore index&period;html|Reflect:Reflect web socket messages back to all clients,"&lt;BUFSIZE&gt;":"“ws_64k, ws_128k, ws_512k, ws_1M, ws_5M, ws_10M”"
 * @returns dso-WebServer
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Web servers form the foundation of the web, especially the Internet of Things (IoT). Turning your phone or tablet into a web server or creating a network of interconnected devices is very simple with DroidScript. Set a document root for the server using the SetFolder method of the WebServer object. This is the folder location on your device that your web pages will be served from.
<js>wbs.SetFolder( path );</js>

Start the server using the Start method.
<js> wbs.Start();</js>

And stop it using the Stop method.
<js>wbs.Stop();</js>

The following example shows how to create a basic webserver for serving pages over WiFi from your device. It will serve a built in demo page.

For simplicity some of the features in the demo page will not work in this first example. Try them and you will see how the server presents errors. The next example shows how to handle all the features of the demo page.
<sample Basic>

The second example shows how to accept file upload and permit directory listings by including permissions in the options parameter of the app.CreateWebServer method.

It also adds a servlet to respond to messsages from the web client. A servelet can be used to process data supplied by a user via form elements or it can handle requests made from the client application.

To get a better understanding of how client - server messaging works you can view the source of the served demo page and the network view in the developer tools of your favorite browser to see how the simple GET request is sent from the client browser to the servlet for processing by the OnServlet function when the Send Message button is clicked.
<sample Servlets>

Web sockets are faster than servlets and can be used for both client - server applications or peer-to-peer systems where each connected node is both a client and a server without a centralized server.

This makes web sockets very useful for datasharing in multiplayer games.

All requests sent to the same servlet will queue up behind each other and are processed in order. The server application is said to be blocking all other requests whilst a servlet completes each task synchronously.

Web sockets recieve the request and then start a process to handle the request. When the task is complete any data or messages to be returned will be sent back to the relevant connected clients. In this case the server application is said to be non-blocking or asynchronous.
See Also: @CreateWebSocket

Web sockets can be used for broadcast purposes, for example sending the same message to all connected clients. They can also be used to send different direct messages to a specific one device using the IP address.

The following example demonstrates web sockets being used to receive messages from and broadcasting messages to connected devices.
<sample Send and Receive messages>
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### AddRedirect ###
 * @brief Redirect urls
 * Redirects a url pattern (with \* wildcards) to a target location
 * $$ sock.AddRedirect(pattern, location) $$
 * @param {str_url} pattern
 * @param {str_url} location
 */


/** ### AddServlet ###
 * @brief Called when servlet received a message
 * %cb% a HTTP GET request on a given servlet name was recieved.
 * $$ sock.AddServlet(path, callback) $$
 * @param {str:url path} path /endpoint name
 * @param {fnc_json} callback {"pNames":["args","info"],"pTypes":["obj-{ parameter:str: argument:str }","obj-{ remoteAddress:str }"]}
 */


/** @extern Batch */

/** ### Disconnect ###
 * @brief Disconnect Client from WebServer
 * Disconnects a client from the WebServer.
 * $$ sock.Disconnect(ip, id?) $$
 * @param {str} ip
 * @param {num_int} [id]
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ sock.GetType() $$
 * @returns str-WebServer
 */


/** ### GetWebSockClients ###
 * @brief Get connected clients
 * Returns a list of connected client [WebSockets](CreateWebSocket.htm).
 * $$ sock.GetWebSockClients() $$
 * @returns lst_obj-[{ remoteAddress:str, id:num_int }]
 */


/** @extern Method */

/** ### SendText ###
 * @brief Send message to client(s)
 * Sends a message to a specific client.
 * If no id is given, all clients of the specified ip are notified.
 * If neither ip nor id is given, the message will be sent to all connected clients.
 * $$ sock.SendText(txt, ip, id) $$
 * @param {str} txt
 * @param {str} ip
 * @param {num_int} id
 */


/** ### SetFolder ###
 * @brief Set server root folder
 * Specifies the root folder of the server.
 * $$ sock.SetFolder(folder) $$
 * @param {str_ptd} folder
 */


/** ### SetOnReceive ###
 * @brief Called when received client message
 * %cb% the server received a message from a client.
 * $$ sock.SetOnReceive(callback) $$
 * @param {fnc_json} callback {"pNames":["msg","ip","id"],"pTypes":["str","str","num_int"]}
 */


/** ### SetOnUpload ###
 * @brief Called when file uploaded to server
 * %cb% a file was uploaded to the server.
 * $$ sock.SetOnUpload(callback) $$
 * @param {fnc_json} callback {"pNames":["filename","ip"],"pTypes":["str","str"]}
 */


/** ### SetResponse ###
 * @brief Respond to incoming HTTP request
 * Responds to an incoming HTTP request
 * $$ sock.SetResponse(text) $$
 * @param {str} text
 */


/** ### SetUploadFolder ###
 * @brief Defile file upload destination
 * Set a folder where uploaded files are to be placed.
 * $$ sock.SetUploadFolder(folder) $$
 * @param {str_ptd} folder
 */


/** ### Start ###
 * @brief Start server
 * Start the server.
 * $$ sock.Start() $$
 */


/** ### Stop ###
 * Stop server
 * $$ sock.Stop() $$
 */



// ------------- SAMPLES -------------



/**
@sample Basic
function OnStart()
{
    var ip = app.GetIPAddress();
    app.Alert( ip +":8080", "Type the following address into your browser" );

    <b>serv = app.CreateWebServer( 8080 );
    serv.SetFolder( "/sdcard/DroidScript" );
    serv.Start();</b>
}
 */



/**
@sample Servlets
function OnStart()
{
    var ip = app.GetIPAddress();
    app.Alert( ip +":8080", "Type the following address into your browser" );

	<b>serv = app.CreateWebServer( 8080, "Upload,ListDir" );
	serv.SetFolder( "/sdcard/DroidScript" );
	serv.AddServlet( "/message", OnServlet );
	serv.Start();</b>
}

function OnServlet( request, info )
{
	serv.SetResponse( "Got it!" );
	app.ShowPopup(  info.remoteAddress + " says: " + request.msg );
}
 */



/**
@sample Send and Receive messages
var indexhtml = `
<html>
<head>
	<title>WebSockets Demo</title>

	<script>
		var count = 0;

		function Connect()
		{
			// Open web socket to phone.
			ws = new WebSocket( "ws://" + window.location.host );
			ws.onopen = ws_onopen;
			ws.onmessage = ws_onmessage;
			ws.onclose = ws_onclose;
			ws.onerror = ws_onerror;
		}

		function Send() {
			ws.send( "Hello " + count++ );
		}

		function ws_onopen() {
			id_info.innerHTML = "Socket Open";
		}

		function ws_onmessage( msg ) {
			id_info.innerHTML = msg.data;
		}

		function ws_onclose() {
			id_info.innerHTML = "Socket Closed";
		}

		function ws_onerror(e) {
			id_info.innerHTML = "Socket Error: " + e.data;
		}
	</script>
</head>

<body>
	<h2>DroidScript WebSockets Demo</h2>
	<div id="id_info">Ready</div>
	<button onclick="Connect()">Connect</button>
	<button onclick="Send()">Send Message</button>
</body>
</html>`;

var count = 0;

function OnStart()
{
    // Create the Index.html file
    // note: in regular use move the html to a separate file
    app.WriteFile( "Index.html", indexhtml );

    ip = app.GetIPAddress();
    app.Alert( ip +":8080", "Type the following address into your browser" );

	app.PreventWifiSleep();

	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	txt = app.CreateText( "No connected clients.", 0.8, 0.3, "AutoScale,MultiLine" );
	txt.SetTextSize( 22 );
	lay.AddChild( txt );

	txtMsg = app.CreateText( "", 0.8, 0.3, "AutoScale,MultiLine" );
	txtMsg.SetTextSize( 22 );
	lay.AddChild( txtMsg );

	btn = app.CreateButton( "Send Message", 0.4, 0.1);
	btn.SetMargins( 0, 0.05, 0, 0 );
	btn.SetOnTouch( SendMessage );
	lay.AddChild( btn );

	app.AddLayout( lay );

	serv = app.CreateWebServer( 8080 );
	serv.SetFolder( app.GetAppPath() );
	serv.SetOnReceive( serv_OnReceive );
	serv.Start();

	setInterval( ShowConnections, 3000 );
}

function ShowConnections()
{
	var clients = serv.GetWebSockClients();
	var list = [];
	for( var i = 0; i < clients.length; i++ )
		list.push(clients[i].remoteAddress);

	if(list.length) txt.SetText( list.join("\n") );
}

function SendMessage() {
	serv.SendText( "Hello " + count++ )
}

function serv_OnReceive( msg, ip ) {
	txtMsg.SetText( ip + ": " + msg );
}
 */



/**
@sample Python Basic
from native import app

def OnStart():
    ip = app.GetIPAddress()
    app.Alert( ip +":8080", "Type the following address into your browser" )

    serv = app.CreateWebServer( 8080 )
    serv.SetFolder( "/sdcard/DroidScript" )
    serv.Start()
 */



/**
@sample Python Servlets
from native import app

def OnStart():
    global serv
    ip = app.GetIPAddress()
    app.Alert( ip +":8080", "Type the following address into your browser" )

    serv = app.CreateWebServer( 8080, "Upload,ListDir" )
    serv.SetFolder( "/sdcard/DroidScript" )
    serv.AddServlet( "/message", OnServlet )
    serv.Start()

def OnServlet( request, info ):
    serv.SetResponse( "Got it!" )
    app.ShowPopup(  info.remoteAddress + " says: " + request.msg )
 */



/**
@sample Python Send and Receive messages
from native import app

indexhtml = """
<html>
<head>
    <title>WebSockets Demo</title>

        count = 0;

        function Connect()
        {
            // Open web socket to phone.
            ws = new WebSocket( "ws://" + window.location.host );
            ws.onopen = ws_onopen;
            ws.onmessage = ws_onmessage;
            ws.onclose = ws_onclose;
            ws.onerror = ws_onerror;
        }

        function Send() {
            ws.send( "Hello " + count++ );
        }

        function ws_onopen() {
            id_info.innerHTML = "Socket Open";
        }

        function ws_onmessage( msg ) {
            id_info.innerHTML = msg.data;
        }

        function ws_onclose() {
            id_info.innerHTML = "Socket Closed";
        }

        function ws_onerror(e) {
            id_info.innerHTML = "Socket Error: " + e.data;
        }

</head>

<body>
    <h2>DroidScript WebSockets Demo</h2>
    <div id="id_info">Ready</div>
    <button onclick="Connect()">Connect</button>
    <button onclick="Send()">Send Message</button>
</body>
</html>
"""

count = 0

def OnStart():
    global txt, serv, ip, txtMsg
    # Create the Index.html file
    # note: in regular use move the html to a separate file
    app.WriteFile( "Index.html", indexhtml )

    ip = app.GetIPAddress()
    app.Alert( ip +":8080", "Type the following address into your browser" )

    app.PreventWifiSleep()

    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    txt = app.CreateText( "No connected clients.", 0.8, 0.3, "AutoScale,MultiLine" )
    txt.SetTextSize( 22 )
    lay.AddChild( txt )

    txtMsg = app.CreateText( "", 0.8, 0.3, "AutoScale,MultiLine" )
    txtMsg.SetTextSize( 22 )
    lay.AddChild( txtMsg )

    btn = app.CreateButton( "Send Message", 0.4, 0.1)
    btn.SetMargins( 0, 0.05, 0, 0 )
    btn.SetOnTouch( SendMessage )
    lay.AddChild( btn )

    app.AddLayout( lay )

    serv = app.CreateWebServer( 8080 )
    serv.SetFolder( app.GetAppPath() )
    serv.SetOnReceive( serv_OnReceive )
    serv.Start()

    setInterval( ShowConnections, 3000 )

def ShowConnections():
    clients = serv.GetWebSockClients()
    list = []
    for client in clients:
        list.append(client.remoteAddress)

    if list:
        txt.SetText( "\n".join(list) )

def SendMessage():
    serv.SendText( "Hello " + str(count) )
    count += 1

def serv_OnReceive( msg, ip, id):
    txtMsg.SetText( ip + ": " + msg )
 */
