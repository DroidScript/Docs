//Sample showing how to use Raw TCP comms. 
//This connects to one of Google's web servers and 
//ask for the default HTML page.

//Called when application is started.
function OnStart()
{       
	//Create main layout.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )
	
	//Set default message to send (HTTP Get command).
	var msg = "GET / HTTP/1.1\r\n";
        
	//Create text edit (for outgoing message).
	edt = app.CreateTextEdit( msg, 0.9, 0.1 )
    edt.SetBackColor( "#111111" )
	lay.AddChild( edt )
	
	//Create text edit (for incomming message).
	txt = app.CreateTextEdit( "", 0.9, 0.5, "ReadOnly,NoKeyboard" )
	txt.SetTextSize( 12 )
	txt.SetMargins( 0, 0.02, 0, 0 )
	txt.SetBackColor( "#111111" )
	lay.AddChild( txt )

    //Create 'Connect' button.
	btnConnect = app.CreateButton( "Connect", 0.4, -1 )
	btnConnect.SetOnTouch( btnConnect_OnTouch )
	btnConnect.SetMargins( 0, 0.02, 0, 0 )
	lay.AddChild( btnConnect )  
	
	//Create 'Send' button.
	btnSend = app.CreateButton( "Send", 0.4, -1 )
	btnSend.SetOnTouch( btnSend_OnTouch1 )
	lay.AddChild( btnSend )   
	
	//Create 'Disconnect' button.
	btnDiscon = app.CreateButton( "Disconnect", 0.4, -1 )
	btnDiscon.SetOnTouch( btnDiscon_OnTouch )
	lay.AddChild( btnDiscon )  
	
	//Add layouts to app.
	app.AddLayout( lay )

	//Create network object.
	net = app.CreateNetClient( "TCP,Raw" )  
	net.SetOnConnect( net_OnConnect )
}

//Handle connect button.
function btnConnect_OnTouch()
{
    //Connect to server (use name or IP).
	net.Connect( "www.google.com", 80 )
}

//Called when we connect (or fail to connect).
function net_OnConnect( connected )
{
	if( connected ) app.ShowPopup( "Connected!" )
	else app.ShowPopup( "Failed to connect!" )
}

//Handle Send button press.
function btnSend_OnTouch1()
{
    //Check connection.
	if( !net.IsConnected() ) 
	{
	    app.ShowPopup( "Please connect" )
	    return;
	}
    
	//Send message in UTF-8 text format.
	//modes: "US-ASCII", "UTF-16LE", "UTF-16BE", "UTF-16", "UTF-8"
	net.SendText( edt.GetText() + "\r\n", "UTF-8" )  
	    
    //Read response.
    //(Large responses may need multiple reads)
	var msg = net.ReceiveText( "UTF-8" )
    if( msg ) txt.SetText( msg )
}

//Alternative hex version.
function btnSend_OnTouch2()
{
	//Send Http GET request as a hex list.
	//(This mode is useful for editing hex values in an Edit control).
	var bytes = "47,45,54,20,2F,20,48,54,54,50,2F,31,2E,31,0D,0A,0D,0A";
	net.SendBytes( bytes, "Hex" )
		
	//Read response as hex list.
	var msg = net.ReceiveBytes( "Hex" )
    if( msg ) txt.SetText( msg )
}

//Alternative integer version.
function btnSend_OnTouch3()
{
	//Send Http GET request using integer array.
	var bytes = [0x47,0x45,0x54,0x20,0x2F,0x20,0x48,0x54,0x54,0x50,
	        0x2F,0x31,0x2E,0x31,0x0D,0x0A,0x0D,0x0A];
	net.SendBytes( bytes, "Int" )
		
	//Read response to an array.
	var msg = net.ReceiveBytes( "Int" )
    if( msg ) txt.SetText( msg )
    
    //Get first byte.
    var first = msg[0];
    app.ShowPopup( "first byte = " + first )
}

//Handle disconnect button.
function btnDiscon_OnTouch()
{
    //Disconnect from server.
    net.Disconnect()
    
    if( !net.IsConnected() ) 
	    app.ShowPopup( "Disconnected" )
}

