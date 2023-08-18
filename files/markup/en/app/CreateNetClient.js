
/** # CreateNetClient #
 * @abbrev net
 * @brief Returns a new NetClient object
 * 
 * $$ net = app.CreateNetClient(type) $$ 
 * @param {str} type UDP:fast but does not guarantee data correctness|TCP:slow but guarantees data correctness,Raw:drop 4 Byte header before every message
 * @returns dso-NetClient
*/


// CreateNetClient.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
NetClients can be used to communicate with servers on the web. You can choose between two different protocols:
	The connection based _**T**ransmission**C**ontrol**P**rotocol_ which always checks if the data was received correctly and in right order. It is used in most cases because it is very reliable. The downside is that it is relatively slow becaus of the numerous checks.
	The connectionless _**U**ser**D**atagram**P**rotocol_ which sends the data once without any checks so that packages may be corrupt or lost completely during the transmission. Because of that data can be sent as fast as possible and it suits perfectly for games which need a fast update rate between the devices.

Note: A few routers block fast UDP messages by default

 */



// -------- VISIBLE METHODS & PROPERTIES --------- 


/** ### AutoReceive ###
 * Receive TCP received data automatically by calling the OnReceive callback.
 * $$ net.AutoReceive(server, port, mode) $$
 * @param {str_url} server 
 * @param {num_int} port 
 * @param {str} mode US
 */


/**
 * @extern Batch
 */

/** ### Close ###
 * Closes the NetClient socket.
 * $$ net.Close() $$
 */


/** ### Connect ###
 * Connect the NetClient to a server.
 * $$ net.Connect(address, port) $$
 * @param {str_url} address 
 * @param {num_int} port 
 */


/** ### Disconnect ###
 * Disconnect the NetClient from the server.
 * $$ net.Disconnect() $$
 */


/** ### DownloadFile ###
 * Downloads a file via TCP from the server.
 * $$ net.DownloadFile(file) $$
 * @param {str_url} file 
 */


/** ### GetBroadcastAddress ###
 * Returns the broadcast address of UDP connections.
 * $$ net.GetBroadcastAddress() $$
 * @returns str
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ net.GetType() $$
 * @returns str-NetClient
 */


/** ### IsConnected ###
 * Checks if the NetClient is connected to a server.
 * $$ net.IsConnected() $$
 */


/**
 * @extern IsEnabled
 */

/** ### ReceiveBytes ###
 * Receive data as bytes.
 * $$ net.ReceiveBytes(mode) $$
 * @param {str} mode Int|Hex
 * @returns lst-[ bytes:num_byt ]
 */


/** ### ReceiveDatagram ###
 * Receive an UDP Datagram.
 * $$ net.ReceiveDatagram(mode, port, timeout, options) $$
 * @param {str} mode US
 * @param {num_int} port 
 * @param {num} timeout 
 * @param {str} options &lt;BUFSIZ:"“1k,2k,4k,8k,16k,32k,64k”"&gt;
 * @returns str
 */


/** ### ReceiveDatagrams ###
 * Receive datagrams over UDP and calls the OnReceive callback for each one.
 * $$ net.ReceiveDatagrams(port, mode, options) $$
 * @param {num_int} port 
 * @param {str} mode US
 * @param {str} options &lt;BUFSIZ:"“1k,2k,4k,8k,16k,32k,64k”"&gt;
 */


/** ### ReceiveFile ###
 * Receive a file via TCP from the server.
 * $$ net.ReceiveFile(file, wait) $$
 * @param {str} file 
 * @param {num} wait 
 * @returns str
 */


/** ### ReceiveText ###
 * Receive text from TCP connection.
 * $$ net.ReceiveText(mode) $$
 * @param {str} mode US
 * @returns str
 */


/** ### ReceiveVideoStream ###
 * Receive video from TCP connection. *  * <premium>
 * $$ net.ReceiveVideoStream(port, img) $$
 * @param {num} port 
 * @param {dso} img CreateImage
 * @returns str
 */


/** ### SendBytes ###
 * Send bytes over TCP connection.
 * $$ net.SendBytes(data, mode) $$
 * @param {lst} data [ bytes:num_byt ]||str_com
 * @param {str} mode Int|Hex
 */


/** ### SendDatagram ###
 * Send an UDP Datagram.
 * $$ net.SendDatagram(data, mode, address, port, options) $$
 * @param {str} data 
 * @param {str} mode US
 * @param {str_url} address 
 * @param {num_int} port 
 * @param {str} options Text|Hex|Bytes
 */


/** ### SetDataMode ###
 * Enable sending data in several modes.
 * $$ net.SetDataMode(mode) $$
 * @param {str} mode Hex:comma separated text value|Int:comma separated byte numbers|Text:string of text characters|&lt;encoding:"UTF
 */


/** ### SetSplitMode ###
 * Tells AutoReceive how to split received data. Splitted data will result in multiple OnReceive calls. * p2 and p3 have different purposes for different modes: * <style type='text/css'>th{align:center;}td{padding:0 10px 0 10px;}</style><table><tr><th>mode</th><th>p1</th><th>p2</th></tr><tr><td>Size</td><td>Size of one data package</td><td>-</td></tr><tr><td>End</td><td>Byte indicating end of data</td><td>-</td></tr><tr><td>Start-End</td><td>Byte indicating start of data</td><td>Byte indicating end of data</td></tr></table>
 * $$ net.SetSplitMode(mode, p2, p3) $$
 * @param {str} mode End|Start
 * @param {str||num_int} p2 
 * @param {str||num_int} p3 
 */


/** ### SendText ###
 * Sends text over TCP connection.
 * $$ net.SendText(text, mode) $$
 * @param {str} text 
 * @param {str} mode US
 */


/** ### SetOnConnect ###
 * %cb% a TCP connection could be established or if it failed to connect to the server. The _connected_ state is passed as first argument.
 * $$ net.SetOnConnect(callback) $$
 * @param {fnc_json} callback {"pNames":["connected"],"pTypes":["bin"]}
 */


/** ### SetOnDownload ###
 * %cb% a TCP file download has finished.
 * $$ net.SetOnDownload(callback) $$
 * @param {fnc_json} callback {"pNames":["something"],"pTypes":["num_int"]}
 */


/** ### SetOnReceive ###
 * %cb% a TCP NetClient received some data when AutoReceive was set.
 * $$ net.SetOnReceive(callback) $$
 * @param {fnc_json} callback {"pNames":["address"],"pTypes":["str"]}
 */


/** ### SetTimeout ###
 * Define an interval in which the client should check for new messages.
 * $$ net.SetTimeout(seconds) $$
 * @param {num_sec} seconds 
 */


/** ### WakeOnLan ###
 * Wakes up PC's (and perhaps other devices) when the BIOS/device is configured for it. *  * <premium>
 * $$ net.WakeOnLan(ip, mac) $$
 * @param {str} ip 
 * @param {str} mac 
 */

// CreateNetClient.txt --> All the sample codes

/** @Sample
<sample TCP Basic>
function OnStart()
{
    lay = app.CreateLayout( "linear" );

    web = app.CreateWebView( 1, .5, "ignoreerrors" );
    lay.AddChild( web );

	txt = app.CreateTextEdit( "", 1, .5, "ReadOnly,NoKeyboard" );
	txt.SetTextSize( 12 );
	lay.AddChild( txt );

    app.AddLayout( lay );

	<b>net = app.CreateNetClient( "TCP,Raw" );
	net.SetOnConnect( net_OnConnect );
	net.Connect( "www.randomfunfacts.com", 80 );</b>
}

function net_OnConnect( connected )
{
	if( !connected ) return app.ShowPopup( "Failed to connect!" );

	net.SendText( "GET / HTTP/1.1\r\nHost:www.randomfunfacts.com\r\n\r\n", "UTF-8" );

	var msg = "", s = "";
	do msg += s = net.ReceiveText( "UTF-8" );
	while( s.length > 0 );

    txt.SetText( msg );
    web.LoadHtml( msg );

    net.Disconnect();
}
</sample>

<sample TCP AutoReceive>
function OnStart()
{
    lay = app.CreateLayout( "linear" );

    web = app.CreateWebView( 1, .5, "ignoreerrors" );
    lay.AddChild( web );

	txt = app.CreateTextEdit( "", 1, .5, "ReadOnly,NoKeyboard" );
	txt.SetTextSize( 12 );
	lay.AddChild( txt );

    app.AddLayout( lay );

	<b>net = app.CreateNetClient( "TCP,Raw" );
	net.SetOnConnect( net_OnConnect );
	net.SetOnReceive( OnReceive );
	net.AutoReceive( "www.randomfunfacts.com", 80, "UTF-8" );</b>
}

var sent = false;
function net_OnConnect( connected )
{
	if( !connected ) return app.ShowPopup( "Failed to connect!" );

    if( sent ) return sent = msg != "";
    else sent = true;

	net.SendText( "GET / HTTP/1.1\r\nHost:www.randomfunfacts.com\r\n\r\n", "UTF-8" );
}

var msg = "";
function OnReceive( s )
{
    msg += s;

    if(s.endsWith( "\r\n\r\n" ))
    {
        txt.SetText( msg );
        web.LoadHtml( msg );
        msg = "";
    }
}
</sample>

<sample UDP Messaging>

function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    btn = app.CreateButton( "Send", 0.3, 0.1 );
    btn.SetMargins( 0, 0.05, 0, 0 );
    lay.AddChild( btn );
    btn.SetOnTouch( btn_OnTouch );

    app.AddLayout( lay );

    net = app.CreateNetClient( "UDP" );

    address = net.GetBroadcastAddress();
    id = app.GetDeviceId();
    port = 19700;

    setInterval( CheckForMsg, 500 );
}

function btn_OnTouch()
{
    var packet = id + "|Hello";
    net.SendDatagram( packet, "UTF-8", address, port );
}

function CheckForMsg()
{
    var packet = net.ReceiveDatagram( "UTF-8", port, 10 );
    if( packet )
    {
        var parts = packet.split( "|" );

        if( parts[0] != id )
            app.ShowPopup( parts[1] );
    }
}
</sample>

 */

