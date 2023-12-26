from native import app

# IOT device Template
global g_debug, g_autoBoot, g_APTime

```python
"""
  IOT device Template
  ==================

  This template provides a starting point for building WiFi based internet
  connected devices.

  The app initially starts up as an Access point and allows HTTP connections
  for the user/owner to configure router name and password so the device can
  switch to an internet connection so it can provide IOT functionality.

  It is expected that the device will suffer power loss from time to time and
  also network loss.  During startup the app swtiches to Access point mode for
  a few minutes so that it can be re-configured if desired (eg. Change router).

  Setting the g_autoBoot
  started up when the device is powered. You may need to disable the lock
  screen in the Android/Security settings for this to work properly.

  Recommended devices: OrangePi_Zero_Plus2, BannanaPi_Zero
"""

#Global variables.
g_debug = False         #Enable debug mode.
g_autoBoot = False      #Auto start this app on boot up.
g_ssids = "[none]"     #Current list of ssids/routers.
g_APTime = 1*30000     #How long to run Access Point at startup.

#Called when application is started.
def OnStart():
    global txtInfo, serv
    #Check this Android version supports hotspot control.
    if( app.GetOSVersion() > 23 ):
        app.Quit( "Sorry, only Marshmallow or older supported!" )

    #Create a layout with objects vertically centered.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    #Create a text label and add it to layout.
    s = "Endpoint:\n"+ app.GetIPAddress() +":8080/setup\n"
    txtInfo = app.CreateText( s, 0.8, 0.1, "MultiLine" )
    lay.AddChild( txtInfo )

    #Add layout to app.
    app.AddLayout( lay )

    #Make a folder for this app and copy index file there.
    home = "/sdcard/" + app.GetAppName()
    app.MakeFolder( home )
    app.CopyFile( "index.html", home+"/index.html" )

    #Create web server with end points.
    serv = app.CreateWebServer( 8080 /*,"Upload,ListDir"*/ )
    serv.SetFolder( home )
    serv.AddServlet( "/setup", OnSetup )

    #Watch for wifi changes
    app.SetOnWifiChange( OnWifiChange )

    #Use the access point for the first few minutes
    #to give user chance to re-configure device.
    if( not g_debug ):
        UseAccessPoint()
        setTimeout( lambda: UseRouter(), g_APTime )
    else:
        UseRouter()

    #Configure this app to start on boot up.
    #(Note: SetAutoWifi and SetAutoStart have no effect in APKs)
    app.SetAutoBoot( "app" if g_autoBoot else None )
    app.SetAutoWifi( g_autoBoot )
    app.SetAutoStart( app.GetAppName() if g_autoBoot else None )

#Start the access point. (always uses 192.168.43.1)
def UseAccessPoint():
    #Note: The ssid and key parameters are optional.
    #(It can take as much as 10 seconds to toggle the AP)
    app.ShowPopup( "Starting AP..." )
    app.SetWifiApEnabled( True, "MyAp", "MyPassword" )

    #Repeatedly check if access point is started ok.
    setTimeout( lambda: RestartServer() if app.IsWifiApEnabled() else None, 5000 )
    setTimeout( lambda: RestartServer() if app.IsWifiApEnabled() else None, 10000 )

#Connect to the given or last known router.
def UseRouter(ssid=None, key=None):
    global ssid, key
    #Attempt to use last know ssid if none given.
    if not ssid:
        ssid = app.LoadText( "ssid" )
        if ssid == "AP":
            app.ShowPopup( "No router set")
            return
        key = app.LoadText( "key")

    #Disable AP and connect to router.
    app.SetWifiApEnabled( False )
    app.SetWifiEnabled( True )
    app.ShowPopup( "Connecting to router: " + ssid )
    setTimeout( lambda: app.WifiConnect(ssid, key), 5000)

#Watch for router changes.
def OnWifiChange(state, ssid):
    app.ShowPopup( "wifi state:" + state + " ssid:" + ssid )
    if state == "CONNECTED":
        RestartServer()

#Restart HTTP server.
def RestartServer():
    txtInfo.SetText( "Endpoint:\n"+ app.GetIPAddress() +":8080/setup\n" )
    serv.Start()

#Handle network setup process.
#eg. http://192.168.43.1:8080/setup?ssid=NETGEAR21&key=ab34fb42
#    http://192.168.1.217:8080/setup?ssid=AP
def OnSetup(request, info):
    print( "API:" + JSON.stringify