// ------------- HEADER SECTION -------------


/** # CreateNetClient #
 * @abbrev net
 * @brief Returns a new NetClient object
 *
 * $$ net = app.CreateNetClient(type) $$
 * @param {str_lst} type UDP:fast but does not guarantee data correctness|TCP:slow but guarantees data correctness,Raw:drop 4 Byte header before every message
 * @returns dso-NetClient
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
NetClients can be used to communicate with servers on the web. You can choose between two different protocols:
    The connection based _**T**ransmission**C**ontrol**P**rotocol_ which always checks if the data was received correctly and in right order. It is used in most cases because it is very reliable. The downside is that it is relatively slow becaus of the numerous checks.
    The connectionless _**U**ser**D**atagram**P**rotocol_ which sends the data once without any checks so that packages may be corrupt or lost completely during the transmission. Because of that data can be sent as fast as possible and it suits perfectly for games which need a fast update rate between the devices.

Note: A few routers block fast UDP messages by default
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** ### AutoReceive ###
 * @brief Calls the OnReceive callback for incoming TCP data
 * Receive TCP received data automatically by calling the OnReceive callback.
 * $$ net.AutoReceive(server, port=80, mode?) $$
 * @param {str_url} server
 * @param {num_int} [port=80]
 * @param {str} [mode] US-ASCII|UTF-8|UTF-16LE|UTF-16BE|UTF-16
 */


/** @extern Batch */

/** ### Close ###
 * Closes the NetClient socket.
 * $$ net.Close() $$
 */


/** ### Connect ###
 * @brief Connect to a server
 * Connect the NetClient to a server.
 * $$ net.Connect(address, port=80) $$
 * @param {str_url} address
 * @param {num_int} [port=80]
 */


/** ### Disconnect ###
 * @brief Disconnect from server
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
 * @brief Get NetClient connected state
 * Checks if the NetClient is connected to a server.
 * $$ net.IsConnected() $$
 * @returns bin
 */


/** @extern IsEnabled */

/** ### ReceiveBytes ###
 * Receive data as bytes.
 * $$ net.ReceiveBytes(mode) $$
 * @param {str} mode Int|Hex
 * @returns lst-[ bytes:num_byt ]
 */


/** ### ReceiveDatagram ###
 * Receive an UDP Datagram.
 * $$ net.ReceiveDatagram(mode?, port=80, timeout?, options?) $$
 * @param {str} [mode] US-ASCII|UTF-8|UTF-16LE|UTF-16BE|UTF-16
 * @param {num_int} [port=80]
 * @param {num} [timeout]
 * @param {str_lst} [options] &lt;BUFSIZ:"“1k,2k,4k,8k,16k,32k,64k”"&gt;
 * @returns str
 */


/** ### ReceiveDatagrams ###
 * @brief Receive UDP datagrams
 * Receive datagrams over UDP and calls the OnReceive callback for each one.
 * $$ net.ReceiveDatagrams(port=80, mode?, options?) $$
 * @param {num_int} [port=80]
 * @param {str} [mode] US-ASCII|UTF-8|UTF-16LE|UTF-16BE|UTF-16
 * @param {str_lst} [options] &lt;BUFSIZ:"“1k,2k,4k,8k,16k,32k,64k”"&gt;
 */


/** ### ReceiveFile ###
 * Receive a file via TCP from the server.
 * $$ net.ReceiveFile(file, wait?) $$
 * @param {str} file
 * @param {num} [wait]
 * @returns str
 */


/** ### ReceiveText ###
 * @brief Receive text over TCP
 * Receive text from TCP connection.
 * $$ net.ReceiveText(mode?) $$
 * @param {str} [mode] US-ASCII|UTF-8|UTF-16LE|UTF-16BE|UTF-16
 * @returns str
 */


/** ### ReceiveVideoStream ###
 * @brief Receive video over UDP
 * Receive video from TCP connection.
 *
 * <premium>
 * $$ net.ReceiveVideoStream(port, img) $$
 * @param {num} port
 * @param {dso} img CreateImage
 * @returns str
 */


/** ### SendBytes ###
 * Send bytes over TCP connection.
 * $$ net.SendBytes(data, mode?) $$
 * @param {lst} data [ bytes:num_byt ]||str_com-bytes:hexadecimal 00&period;&period;FF
 * @param {str} [mode] Int|Hex
 */


/** ### SendDatagram ###
 * Send an UDP Datagram.
 * $$ net.SendDatagram(data, mode?, address?, port?, options?) $$
 * @param {str} data
 * @param {str} [mode] US-ASCII|UTF-8|UTF-16LE|UTF-16BE|UTF-16
 * @param {str_url} [address]
 * @param {num_int} [port]
 * @param {str} [options] Text|Hex|Bytes
 */


/** ### SetDataMode ###
 * @brief Define data format for outgoing data
 * Enable sending data in several modes.
 * $$ net.SetDataMode(mode?) $$
 * @param {str} [mode] Hex:comma separated text value|Int:comma separated byte numbers|Text:string of text characters|&lt;encoding:"UTF-16L/BE"&gt;
 */


/** ### SetSplitMode ###
 * @brief Specify how to split received data
 * Tells AutoReceive how to split received data. Splitted data will result in multiple OnReceive calls.
 * p2 and p3 have different purposes for different modes:
 * <table><tr><th>mode</th><th>p1</th><th>p2</th></tr><tr><td>Size</td><td>Size of one data package</td><td>-</td></tr><tr><td>End</td><td>Byte indicating end of data</td><td>-</td></tr><tr><td>Start-End</td><td>Byte indicating start of data</td><td>Byte indicating end of data</td></tr></table>
 * $$ net.SetSplitMode(mode, p2?, p3?) $$
 * @param {str} mode End|Start-End|Size
 * @param {str||num_int} [p2]
 * @param {str||num_int} [p3]
 */


/** ### SendText ###
 * Sends text over TCP connection.
 * $$ net.SendText(text, mode?) $$
 * @param {str} text
 * @param {str} [mode] US-ASCII|UTF-8|UTF-16LE|UTF-16BE|UTF-16
 */


/** ### SetOnConnect ###
 * @brief Called when TCP connected or failed to connect to a server.
 * %cb% a TCP connection could be established or if it failed to connect to the server. The _connected_ state is passed as first argument.
 * $$ net.SetOnConnect(callback) $$
 * @param {fnc_json} callback {"pNames":["connected"],"pTypes":["bin"]}
 */


/** ### SetOnDownload ###
 * @brief called when a file download has finished
 * %cb% a TCP file download has finished.
 * $$ net.SetOnDownload(callback) $$
 * @param {fnc_json} callback {"pNames":["something"],"pTypes":["num_int"]}
 */


/** ### SetOnReceive ###
 * @brief Called when a TCP NetClient received some data via AutoReceive
 * %cb% a TCP NetClient received some data when AutoReceive was set.
 * $$ net.SetOnReceive(callback) $$
 * @param {fnc_json} callback {"pNames":["address"],"pTypes":["str"]}
 */


/** ### SetTimeout ###
 * @brief Timeout between two receive checks
 * Define an interval in which the client should check for new messages.
 * $$ net.SetTimeout(seconds) $$
 * @param {num_sec} seconds
 */


/** ### WakeOnLan ###
 * @brief Wake up devices if they are configured to
 * Wakes up PC's (and perhaps other devices) when the BIOS/device is configured for it.
 *
 * <premium>
 * $$ net.WakeOnLan(ip, mac?) $$
 * @param {str} ip
 * @param {str} [mac]
 */



// ------------- SAMPLES -------------



/**
@sample TCP Basic
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
 */



/**
@sample TCP AutoReceive
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
 */



/**
@sample UDP Messaging
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
 */



/**
@sample Python TCP Basic
from native import app

def OnStart():
    global web, txt, net
    lay = app.CreateLayout("linear")

    web = app.CreateWebView(1, 0.5, "ignoreerrors")
    lay.AddChild(web)

    txt = app.CreateTextEdit("", 1, 0.5, "ReadOnly,NoKeyboard")
    txt.SetTextSize(12)
    lay.AddChild(txt)

    app.AddLayout(lay)

    net = app.CreateNetClient("TCP,Raw")
    net.SetOnConnect(net_OnConnect)
    net.Connect("www.randomfunfacts.com", 80)

def net_OnConnect(connected):
    if not connected:
        return app.ShowPopup("Failed to connect!")

    net.SendText("GET / HTTP/1.1\r\nHost:www.randomfunfacts.com\r\n\r\n", "UTF-8")

    msg = ""
    s = ""
    while True:
        s = net.ReceiveText("UTF-8")
        msg += s
        if len(s) == 0:
            break

    txt.SetText(msg)
    web.LoadHtml(msg)

    net.Disconnect()
 */



/**
@sample Python TCP AutoReceive
from native import app

def OnStart():
    global net, msg, web, txt
    lay = app.CreateLayout("linear")

    web = app.CreateWebView(1, 0.5, "ignoreerrors")
    lay.AddChild(web)

    txt = app.CreateTextEdit("", 1, 0.5, "ReadOnly,NoKeyboard")
    txt.SetTextSize(12)
    lay.AddChild(txt)

    app.AddLayout(lay)

    net = app.CreateNetClient("TCP,Raw")
    net.SetOnConnect(net_OnConnect)
    net.SetOnReceive(OnReceive)
    net.AutoReceive("www.randomfunfacts.com", 80, "UTF-8")

sent = False
msg = ""
def net_OnConnect(connected):

    if not connected:
        return app.ShowPopup("Failed to connect!")

    if sent:
        return sent and msg != ""
    else:
        sent = True

    net.SendText("GET / HTTP/1.1\r\nHost:www.randomfunfacts.com\r\n\r\n", "UTF-8")

def OnReceive(s):

    msg += s

    if s.endswith("\r\n\r\n"):
        txt.SetText(msg)
        web.LoadHtml(msg)
        msg = ""
 */



/**
@sample Python UDP Messaging
from native import app

def OnStart():
    global net, address, id, port
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    btn = app.CreateButton("Send", 0.3, 0.1)
    btn.SetMargins(0, 0.05, 0, 0)
    lay.AddChild(btn)
    btn.SetOnTouch(btn_OnTouch)

    app.AddLayout(lay)

    net = app.CreateNetClient("UDP")

    address = net.GetBroadcastAddress()
    id = app.GetDeviceId()
    port = 19700

    app.SetInterval(CheckForMsg, 500)

def btn_OnTouch():
    packet = id + "|Hello"
    net.SendDatagram(packet, "UTF-8", address, port)

def CheckForMsg():
    packet = net.ReceiveDatagram("UTF-8", port, 10)
    if packet:
        parts = packet.split("|")

        if parts[0] != id:
            app.ShowPopup(parts[1])
 */
