/*
  IOT device Template
  ===================
  
  This template provides a starting point for building WiFi based internet
  connected devices.  
  
  The app initially starts up as an Access point and allows HTTP connections
  for the user/owner to configure router name and password so the device can 
  switch to an internet connection so it can provide IOT functionality.
  
  It is expected that the device will suffer power loss from time to time and
  also network loss.  During startup the app swtiches to Access point mode for 
  a few minutes so that it can be re-configured if desired (eg. Change router). 
  
  Setting the g_autoBoot global to true will cause this app to be automatically 
  started up when the device is powered. You may need to disable the lock 
  screen in the Android/Security settings for this to work properly.
*/

//Initialise global variables.
var g_debug = true;           //Enable debug mode.
var g_autoBoot = true;        //Auto start this app on boot up.
var g_ApName = "MyAp"         //Name of this access point.
var g_ApPass = "MyPassword"   //Access point password.
var g_ApTime = 1*30000;       //How long to run Access Point at startup.
var g_ssids = "[none]";       //Current list of ssids/routers found.
var g_ssid = null;            //Current router ssid or null if not connected. 

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a text label and add it to layout.
	var s = "Endpoints:\n"+ app.GetIPAddress() +":8080/scan\n"
	s += app.GetIPAddress() +":8080/setup\n"
	txtInfo = app.CreateText( s, 0.8, 0.1, "MultiLine" )
	lay.AddChild( txtInfo )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Make a folder for this app and copy index file there.
	var home = "/sdcard/" + app.GetAppName()
	app.MakeFolder( home )
	app.CopyFile( "index.html", home+"/index.html" )
	
	//Create web server with end points.
	serv = app.CreateWebServer( 8080 /*,"Upload,ListDir"*/ )
	serv.SetFolder( home )
	serv.AddServlet( "/setup", serv_OnSetup )
	serv.AddServlet( "/scan", serv_OnScan )
	
	//Watch for wifi changes
	app.SetOnWifiChange( OnWifiChange )
	
	//Use the access point for the first few minutes
	//to give user chance to re-configure device.
	if( !g_debug ) {
	    UseAccessPoint()
	    setTimeout( function(){UseRouter()}, g_ApTime )
	} else UseRouter()
	
	//Configure this app to start on boot up.
	//(Note: SetAutoWifi and SetAutoStart have no effect in APKs)
    app.SetAutoBoot( g_autoBoot ? "app" : null ) 
    app.SetAutoWifi( g_autoBoot )    
    app.SetAutoStart( g_autoBoot ? app.GetAppName() : null ) 
    
    //Get latest list of wifi router ssids.
    app.WifiScan( function(ssid){ g_ssids=ssid } )
}

//Start the access point. (always uses 192.168.43.1)
function UseAccessPoint()
{
    //Note: The ssid and key parameters are optional.
	//(It can take as much as 10 seconds to toggle the AP)
	app.ShowPopup( "Starting AP..." )
    app.SetWifiApEnabled( true, g_ApName, g_ApPass )
    g_ssid = null;
    
    //Repeatedly check if access point is started ok.
    setTimeout( function(){ if(app.IsWifiApEnabled()) RestartServer()}, 5000 )
    setTimeout( function(){ if(app.IsWifiApEnabled()) RestartServer()}, 10000 )
}

//Connect to the given or last known router.
function UseRouter( ssid, key )
{
    //Attempt to use last know ssid if none given.
    if( !ssid ) {
        ssid = app.LoadText( "ssid" )
        if( ssid=="AP" ) { app.ShowPopup( "No router set" ) return; }
        key = app.LoadText( "key")
    }
    else {
        //Store router info to internal flash memory.
        //(Note: this info is not secure on rooted devices, so
        //you may wish to encrypt/scramble this data).
        app.SaveText( "ssid", ssid )
        app.SaveText( "key", key )
    }
    
    //Disable AP and connect to router.
    g_ssid = null;
    app.SetWifiApEnabled( false )
    app.SetWifiEnabled( true )
    app.ShowPopup( "Connecting to router: " + ssid )
    setTimeout( function(){ app.WifiConnect(ssid,key)},5000)
    
    //Check for failure (eg. bad password) and revert to access point if so.
    setTimeout( function(){ if( g_ssid!=ssid ) UseAccessPoint() }, 15000 )
}

//Watch for router changes.
function OnWifiChange( state, ssid )
{
    app.ShowPopup( "wifi state:" + state + " ssid:" + ssid )
    if( state=="CONNECTED" ) { g_ssid = ssid; RestartServer() }
}

//Restart HTTP server.
function RestartServer()
{
    txtInfo.SetText( "Endpoint:\n"+ app.GetIPAddress() +":8080/setup\n" )
    serv.Start()
}

//Return list of knows router SSIDs.
function serv_OnScan( request, info )
{
    serv.SetResponse( g_ssids )
    
    //Refresh list for next time.
    app.WifiScan( function(ssid){ g_ssids=ssid } )
}

//Handle network setup process.
//eg. http://192.168.43.1:8080/setup?ssid=NETGEAR21&key=ab34fb42
//    http://192.168.1.217:8080/setup?ssid=AP
function serv_OnSetup( request, info )
{
    console.log( "API:" + JSON.stringify(request) )
    
    //Store router info to internal flash memory.
    //(Note: this info is not secure on rooted devices, so
    //you may wish to encrypt/scramble this data).
    //if( request.ssid ) app.SaveText( "ssid", request.ssid )
    //if( request.key ) app.SaveText( "key", request.key )
    
    //Switch to given router or AP (with delay to allow http response to go).
    if( request.ssid=="AP" ) setTimeout( function(){UseAccessPoint()}, 1000 )
    else setTimeout( function(){UseRouter(request.ssid,request.key)}, 1000 )
    
    //Set client response.
	serv.SetResponse( "router changed" )
}

