There appears to be a few undefined variables and undefined functions in the given code. Here is the modified version of the code with all the required imports and variables defined:

```python
import threading
from androidhelper import Android

app = Android()

g_debug = True
g_autoBoot = True
g_ApName = "MyAp"
g_ApPass = "MyPassword"
g_ApTime = 1 * 30000
g_ssids = "[none]"
g_ssid = None

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY") 
    s = "Endpoints:\n"+ app.GetIPAddress() +":8080/scan\n"
    s += app.GetIPAddress() +":8080/setup\n"
    txtInfo = app.CreateText(s, 0.8, 0.1, "MultiLine")
    lay.AddChild(txtInfo)
    app.AddLayout(lay)
    home = "/sdcard/" + app.GetAppName()
    app.MakeFolder(home)
    app.CopyFile("index.html", home+"/index.html")
    serv = app.CreateWebServer(8080)
    serv.SetFolder(home)
    serv.AddServlet("/setup", serv_OnSetup)
    serv.AddServlet("/scan", serv_OnScan)
    app.SetOnWifiChange(OnWifiChange)
    if not g_debug:
        UseAccessPoint()
        threading.Timer(g_ApTime/1000, UseRouter).start()
    else:
        UseRouter()
    app.SetAutoBoot("app" if g_autoBoot else None) 
    app.SetAutoWifi(g_autoBoot)    
    app.SetAutoStart(app.GetAppName() if g_autoBoot else None) 
    app.WifiScan(lambda ssid: g_ssids = ssid)

def UseAccessPoint():
    app.ShowPopup("Starting AP...")
    app.SetWifiApEnabled(True, g_ApName, g_ApPass)
    g_ssid = None
    threading.Timer(5, lambda: RestartServer(True)).start()
    threading.Timer(10, lambda: RestartServer(True)).start()

def UseRouter(ssid=None, key=None):
    if not ssid:
        ssid = app.LoadText("ssid")
        if ssid == "AP":
            app.ShowPopup("No router set")
            return
        key = app.LoadText("key")
    else:
        app.SaveText("ssid", ssid)
        app.SaveText("key", key)
    g_ssid = None
    app.SetWifiApEnabled(False)
    app.SetWifiEnabled(True)
    app.ShowPopup("Connecting to router: " + ssid)
    threading.Timer(5, lambda: app.WifiConnect(ssid, key)).start()
    threading.Timer(15, lambda: UseAccessPoint()).start()

def OnWifiChange(state, ssid):
    app.ShowPopup("wifi state:" + state + " ssid:" + ssid)
    if state == "CONNECTED":
        g_ssid = ssid
        RestartServer(False)

def RestartServer(isAccessPoint):
    txtInfo.SetText("Endpoint:\n"+ app.GetIPAddress() +":8080/setup\n")
    if isAccessPoint:
        serv.Start()

def serv_OnScan(request, info):
    serv.SetResponse(g_ssids)
    app.WifiScan(lambda ssid: g_ssids = ssid)

def serv_OnSetup(request, info):
    print("API:" + str(request))
    if request.ssid == "AP":
        threading.Timer(1, lambda: UseAccessPoint()).start()
    else:
        threading.Timer(1, lambda: UseRouter(request.ssid, request.key)).start()
    serv.SetResponse("router changed")

OnStart()
```