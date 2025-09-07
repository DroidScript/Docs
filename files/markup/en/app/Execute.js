// ------------- HEADER SECTION -------------


/** # Execute #
 * @brief Execute js code from your app or a WebWiew
 * Executes a piece of code asynchroneously to your program. It is designed for interacting with your main app from within a [WebView](CreateWebView.htm).
 * $$ app.Execute(js) $$
 * @param {str_jsc} js
*/




// ------------- SAMPLES -------------



/**
@sample Execute code from WebView
var html = `
<html>
<head>
    <script src='file:///android_asset/app.js'></script>
</head>

<script>
    var source = "html";
    function btn_OnTouch()
    {
        app.Execute( "app.Alert( 'source: " + source + "\\\\ntarget: ' + source );" );
    }
</script>

<body style="text-align: center;">
    <input type="button" onclick="btn_OnTouch()" value="Click me!"></button>
</body>
</html>`;

var source = "app";

function OnStart()
{
    lay = app.CreateLayout( "linear", "fillxy,vcenter" );

    web = app.CreateWebView( .5, .2 );
    web.LoadHtml( html );
    lay.AddChild( web );

    btn = app.CreateButton("call myFunction", .4, .1);
    btn.SetOnTouch(btn_OnTouch);
    lay.AddChild(btn);

    app.AddLayout( lay );
}

function btn_OnTouch()
{
    app.Execute( "app.Alert( 'source: " + source + "\\ntarget: ' + source );" );
}
 */

/**
@sample Python Execute code from WebView
from native import app

html = """
<html>
<head>
    <script src='file:///android_asset/app.js'></script>
</head>

<script>
    var source = "html";
    function btn_OnTouch()
    {
        app.Execute( "app.Alert( 'source: " + source + "\\\\ntarget: ' + source );" );
    }
</script>

<body style="text-align: center;">
    <input type="button" onclick="btn_OnTouch()" value="Click me!"></button>
</body>
</html>
"""

source = "app";

def OnStart():
    lay = app.CreateLayout( "linear", "fillxy,vcenter" )

    web = app.CreateWebView( .5, .2 )
    web.LoadHtml( html )
    lay.AddChild( web )

    btn = app.CreateButton("call myFunction", .4, .1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    app.AddLayout( lay )

def btn_OnTouch():
    app.Execute( "app.Alert( 'source: " + source + "\\ntarget: ' + source );" )
 
 */


/**
@sample Python Creating a Button
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    btn = app.CreateButton("Click Me")
    btn.SetSize(0.2, 0.1)
    lay.AddChild(btn)

    app.AddLayout(lay)
 */



/**
@sample Python Creating a DatePicker
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    dp = app.CreateDatePicker()
    dp.SetDate(2022, 12, 31)
    lay.AddChild(dp)

    app.AddLayout(lay)
 */



/**
@sample Python Creating a ProgressBar
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    pb = app.CreateProgressBar()
    pb.SetRange(0, 100)
    pb.SetValue(50)
    lay.AddChild(pb)

    app.AddLayout(lay)
 */



/**
@sample Python Creating a ToggleButton
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    tbtn = app.CreateToggleButton("ON")
    tbtn.SetSize(0.2, 0.1)
    lay.AddChild(tbtn)

    app.AddLayout(lay)
 */



/**
@sample Python Creating a Spinner
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    spinner = app.CreateSpinner(["Option 1", "Option 2", "Option 3"])
    spinner.SetSize(0.5, 0.2)
    lay.AddChild(spinner)

    app.AddLayout(lay)
 */



/**
@sample Python Showing a Popup
from native import app

def OnStart():
    app.ShowPopup("Hello, world!")
 */



/**
@sample Python Enabling Bluetooth
from native import app

def OnStart():
    app.SetBluetoothEnabled(True)
 */



/**
@sample Python Disabling Bluetooth
from native import app

def OnStart():
    app.SetBluetoothEnabled(False)
 */



/**
@sample Python Discover Bluetooth Devices
from native import app

def OnStart():
    app.SetBluetoothEnabled(True)
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    lst = app.CreateList("", 0.8, 0.4)
    lst.SetBackColor("#11ffffff")
    lay.AddChild(lst)

    app.AddLayout(lay)

    app.ShowProgress()

    def OnFound(name, address):
        lst.AddItem(name, address)

    def OnComplete():
        app.HideProgress()

    app.DiscoverBtDevices("", OnFound, OnComplete)
 */



/**
@sample Python Delete created file
from native import app

def OnStart():
    app.WriteFile("myFile.txt", "Bye World!\n", "Append")

    app.DeleteFile("myFile.txt")

    if app.FileExists("myFile.txt"):
        app.ShowPopup("myFile was not deleted!")
    else:
        app.ShowPopup("myFile was deleted!")
 */



/**
@sample Python Delete created folder
from native import app

def OnStart():
    app.MakeFolder("myFolder")

    app.DeleteFolder("myFolder")

    if app.FolderExists("myFolder"):
        app.ShowPopup("myFolder was not deleted!")
    else:
        app.ShowPopup("myFolder was deleted!")
 */



/**
@sample Python Destroy layout and check if deleted
from native import app

def OnStart():
    global lay
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    btn = app.CreateButton("Don't Press Me", 0.3, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    app.AddLayout(lay)

def btn_OnTouch():
    app.DestroyLayout(lay)

    text = this.GetText() or "nothing in here!"
    app.ShowPopup(text)
 */



/**
@sample Python Downloading the DroidScript logo
from native import app

def OnStart():
    src = "http://www.androidscript.org/droidscriptwp/wp-content/uploads/2015/10/droidscript_logo_64x64.png"
    dst = "/sdcard/Downloads/logo.png"
    app.DownloadFile(src, dst, "MyTitle", "My Description", "NoDialog")
 */



/**
@sample Python Download to external storage
from native import app

def OnStart():
    src = "http://www.androidscript.org/droidscriptwp/wp-content/uploads/2015/10/droidscript_logo_64x64.png"
    dst = app.GetExternalFolder() + "/Downloads/logo.png"
    app.DownloadFile(src, dst, "MyTitle", "My Description", "NoDialog")
 */



/**
@sample Python Enable GPS
from native import app

def OnStart():
    app.EnableGps()
 */



/**
@sample Python Disable GPS
from native import app

def OnStart():
    app.DisableGps()
 */
