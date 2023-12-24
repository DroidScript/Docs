
// This demo requires the following program on your PC: 
// http://androidscript.org/demos/VideoStreamDemo.exe 
//(You can modify the program above using JavaScript too) 

//Globals variables. 
var ip, net, net2, light; 

//Called when application is created. 
function OnStart() 
{        
	//Create the main graphical layout. 
	CreateLayout()	 

	//Create network object for reading commands from PC. 
	net = app.CreateNetClient( "TCP" )   
	net.SetOnConnect( net_OnConnect ) 
} 

//Create the graphical layout. 
function CreateLayout() 
{ 
	//Lock orientation while we create initial layout. 
	app.SetOrientation( "Landscape" ) 

	//Create horizontal layout for camera view and buttons. 
	lay = app.CreateLayout( "linear", "Horizontal,VCenter,FillXY" ) 

	//Create camera view. 
	cam = app.CreateCameraView( 0.5, 0.7, "CIF" )	
	cam.SetOnReady( cam_OnReady )	
    lay.AddChild( cam )     

	//Create 'Connect' toggle button. 
	btnCon = app.CreateToggle( "Connect", 0.2, -1 ) 
	btnCon.SetMargins( 0.05, 0, 0, 0 ) 
	btnCon.SetOnTouch( btnCon_OnTouch ) 
	lay.AddChild( btnCon )    

	//Add layouts. 
	app.AddLayout( lay ) 
} 

//Called when camera is ready.
function cam_OnReady()
{
    //Set focus mode and start preview.
    cam.SetFocusMode( "Video" )
    cam.StartPreview()
}

//Handle 'Connect' button clicks. 
function btnCon_OnTouch() 
{ 
	//Un-check button until we've connected. 
	btnCon.SetChecked( false ) 

	if( !net.IsConnected() ) { 
		//Start scanning for PC. 
		FindPC() 
	} 
	else {  
		//Disconnect from PC and stop stream. 
		net.Disconnect()  
		cam.Stream("")  
	} 
} 

//Find controller PCs by broadcasting a UDP  
//message and waiting for a responses. 
function FindPC() 
{ 
	//Check wifi is enabled. 
	if(! net.IsEnabled() ) {  
		app.ShowPopup( "Please Enable Wifi" ) return;  
	} 
	//Show progress. 
	app.ShowProgress( "Searching..." )  
	servers = ""; 
	serverIPs = new Array()  
	 
	//Broadcast 'Hello' message to PC(s). 
	if( net2==null ) net2 = app.CreateNetClient( "UDP" ) 
	var addr = net2.GetBroadcastAddress() 
	net2.SendDatagram( "sdemo:hello", "UTF-16LE", addr, 11088 ) 
	for( i=0; i<10; i++ )  
	{ 
		//Check for a response. 
		s = net2.ReceiveDatagram( "UTF-16LE", 11088, 300 ) 
		if( s && s!="sdemo:hello" )  
		{  
			//Extract PC's name and ip address. 
			var ss = s.split(":") 
			serverIPs[ss[1]] = ss[2]; 
			if( servers ) servers += ",";  
			servers += ss[1];  
		} 
	} 
	//Show list of PC's. 
	app.HideProgress()  
	if( servers ) {  
		lstServ = app.CreateListDialog( "Viewers", servers, "" ) 
		lstServ.SetOnTouch( lstServ_OnTouch ) 
		lstServ.Show()
	} 
	else app.Alert( "No PC's Found!\n\nCheck that VideoStreamDemo " + 
		"is running on your PC and that you are in Wifi range." ) 
} 

//Handle chosen PC. 
function lstServ_OnTouch( item ) 
{ 
	//Set ip address and connect to server. 
	ip = serverIPs[item]; 
	Connect() 
} 

//Connects to PC and wait for commands. 
//(Automatically maintains the connection) 
function Connect() 
{ 
	//Start listening for commands. 
    net.SetOnReceive( net_OnReceive )	             
    net.AutoReceive( ip, 11077, "UTF-16LE" ) 

	//Start video stream. 
	var quality = 80, fps = 20, mtu = 32000; 
	cam.Stream( ip, 11055, quality, fps, mtu ) 
} 

//Called when we successfully connect to PC. 
function net_OnConnect( connected ) 
{ 
	if( connected ) { 
		//Mark toggle button as checked. 
		btnCon.SetChecked( true ) 

		//Send a message to PC. 
		net.SendText( "Hello from Android!", "UTF-16LE" ) 
	} 
} 

//Called when we get a message from the PC. 
function net_OnReceive( text ) 
{ 
	app.ShowPopup( text ) 

	//Allow camera flash/light control. 
	if( text=="Light" ) { 
		if( !light ) { cam.SetFlash(true) light=true; } 
		else { cam.SetFlash(false)  light=false; } 
	} 
} 



