// ------------- HEADER SECTION ------------- 


/** # 08 Best Practices #
 * 
 * $$ intro.08 Best Practices() $$ 
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
## General

- Use the cfg object to enter specific app modes immediately (See @04CodingFeatures for more details)
- Use app.@../app/Script to load extra source files
- Use app.Add\* eqivalents to app.Create* to make your code shorter and cleaner
- Use features that DS provides you instead of doing them yourself (ie. filtering ListFolder items)
- Frequently check the debug log for any warnings or errors - especially before releasing your app (see @../app/CreateDebug)
- Use the web IDE for coding if you have a laptop because it is much easier than typing and debugging on a phone

## Performance

### UI
- Wrap your UI creation in app.Hide and app.Show
- Use cfg.@04CodingFeatures#Dark and cfg.@04CodingFeatures#Light for an easy Light/Dark theme setting
- <grey>Use obj.@../app/CreateLayout#Batch to do a whole bunch of configuration calls at one shot</grey>
- Add a (optionally animated) splash screen while your app loads UI
- Use <js nobox>app.@../app/SetDebug(false)</js> in your release version
- Reduce the use of app.\* calls (especially in loops) as it calls the backend bridge in most cases
    - Use lay.@../app/CreateLayout#SetChildMargins and lay.@../app/CreateLayout#SetChildTextSize to apply these properties to all children
    - When initializing list controls use a [precompiled item list](../app/CreateList.htm) instead of calling AddItem multiple times
    - Apply styling to buttons and text boxes using the “Html” option
    - Use the premium app.@../app/CreateTheme method for styling controls

### Graphics / Animations
- Use app.@../app/Animate instead of setInterval
- Use <js nobox>img.@../app/CreateImage#SetAutoUpdate(false)</js> and use manual img.@../app/CreateImage#Update calls
- Switch to the @../app/CreateGameView control (using cfg.@04CodingFeatures#Game) as its generally faster and works in web browsers too
- use the “async” option to load images

## Getting Help
- Check out this documentation and the [DS Wiki](https://droidscript.org/wiki/doku.php) for any hints
- Check if your issue has been resolved before by searching keywords on Google and on the @../Resources#Official_Forums
- For short questions check out the Chat extension in the mobile or WiFi IDE
- For more complex questions formalize your issue in the @../Resources#Official_Forums
  - Always be polite, respectful and never offend any person or group of people
  - Describe your issue in a way people can understand it without knowing anything about your individual project
  - Attach screenshots and demo SPKs to your question
  - Consider putting together a minimal demo showcasing your issue

<sample GetDeviceSpecs>
 */



// ------------- SAMPLES ------------- 


    
/**
@sample GetDeviceSpecs
// https://developer.android.com/guide/topics/manifest/uses-sdk-element#ApiLevels
var allBuilds = JSON.parse('{' +
    '"1":{"level":1,"codename":"(no code name)","version":"1.0"}, ' +
    '"2":{"level":2,"codename":"(no code name)","version":"1.1"} , ' +
    '"3":{"level":3,"codename":"Cupcake","version":"1.5"}, ' +
    '"4":{"level":4,"codename":"Donut","version":"1.6"}, ' +
    '"5":{"level":5,"codename":"Eclair","version":"2.0"},  ' +
    '"6":{"level":6,"codename":"Eclair","version":"2.0.1"}, ' +
    '"7":{"level":7,"codename":"Eclair","version":"2.1"}, ' +
    ' "8":{"level":8,"codename":"Froyo","version":"2.2.x"}, ' +
    ' "9":{"level":9,"codename":"Gingerbread","version":"2.3 - 2.3.2"}, ' +
    ' "10":{"level":10,"codename":"Gingerbread","version":"2.3.3 - 2.3.7"}, ' +
    ' "11":{"level":11,"codename":"Honeycomb","version":"3.0"}, ' +
    ' "12":{"level":12,"codename":"Honeycomb","version":"3.1"}, ' +
    ' "13":{"level":13,"codename":"Honeycomb","version":"3.2.x"}, ' +
    ' "14":{"level":14,"codename":"Ice Cream Sandwich","version":"4.0.1 - 4.0.2"}, ' +
    ' "15":{"level":15,"codename":"Ice Cream Sandwich","version":"4.0.3 - 4.0.4"}, ' +
    ' "16":{"level":16,"codename":"Jelly Bean","version":"4.1.x"}, ' +
    ' "17":{"level":17,"codename":"Jelly Bean","version":"4.2.x"}, ' +
    ' "18":{"level":18,"codename":"Jelly Bean","version":"4.3.x"}, ' +
    ' "19":{"level":19,"codename":"KitKat","version":"4.4 - 4.4.4"}, ' +
    ' "20":{"level":20,"codename":"K or L","version":"4 or 5"}, ' +
    ' "21":{"level":21,"codename":"Lollipop","version":"5.0"}, ' +
    ' "22":{"level":22,"codename":"Lollipop","version":"5.1"}, ' +
    ' "23":{"level":23,"codename":"MarshMallow","version":"6.0"}, ' +
    ' "24":{"level":24,"codename":"Nougat","version":"7.0"}, ' +
    ' "25":{"level":25,"codename":"Nougat","version":"7.1"}, ' +
    ' "26":{"level":26,"codename":"Oreo","version":"8.0"}, ' +
    ' "27":{"level":27,"codename":"Oreo","version":"8.1"}, ' +
    ' "28":{"level":28,"codename":"Pie","version":"9"}, ' +
    ' "29":{"level":29,"codename":"Q","version":"10"}, ' +
    ' "30":{"level":30,"codename":"R","version":"11"}, ' +
    ' "31":{"level":31,"codename":"S","version":"12"}, ' +
    ' "32":{"level":32,"codename":"S_V2","version":"12"} ' +
    ' }');
    
var osObj = allBuilds[app.GetOSVersion()]
try
{
    var osInfo = "Android " + osObj.version + " (" +
    osObj.codename + ")  API level " +
    osObj.level
}
catch(err){var osInfo = app.GetOSVersion();}
    
var lay, txt, scroller
//Called when application is started.
function OnStart()
{
    //Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY");
    
    // create viewr for specs
    scroller = app.CreateScroller(1, 0.8);
    var specs = getDeviceSpecs();
    txt = app.CreateText(specs, 1, 0.8, "left,multiLine");
    txt.SetPadding(0.02, 0.01, 0.02, 0.01);
    //txt.SetTextColor("#ff446666");
    scroller.AddChild(txt);
    lay.AddChild(scroller);
    
    //Create a button and add it to layout.
    var btn = app.CreateButton("[fa-copy]", -1, -1, "fontAwesome");
    btn.SetTextSize( 32 )
    
    btn.SetOnTouch(btn_OnTouch);
    lay.AddChild(btn);
    
    //Add layout to app.    
    app.AddLayout(lay);
    OnConfig()
}
    
function btn_OnTouch()
{
    app.SetClipboardText(txt.GetText( ) );
    app.ShowPopup("Copied to clipboard")
}
    
function getBuilderVersion()
{
    var msg = "Apk Builder plugin not installed";
    var path = app.GetPrivateFolder("Plugins") +
        "/apkbuilder/Version.txt"
    if(app.FileExists(path))
    {
        msg = "Apk Builder version " + app.ReadFile( path )
    }
    else if(app.IsAPK())
    {
        msg = "APK built with " + app.GetDSVersion().toFixed(2);
    }
    return msg
}
function getDeviceSpecs()
{
    var os = app.GetOSVersion();
    var model = app.GetModel();
    var tablet = app.IsTablet();
    var fromapk = app.IsAPK();
    var isChrome = app.IsChrome();
    var isPrem = app.IsPremium();
    var isTV = app.IsTV();
    var dsversion = app.GetDSVersion().toFixed(2);
    //Get screen dimensions. 
    var sw = app.GetScreenWidth();
    var sh = app.GetScreenHeight();
    var dens = app.GetScreenDensity();
    //Get display dimensions. 
    var dw = app.GetDisplayWidth();
    var dh = app.GetDisplayHeight();
    //Get drive details
    var intfld = app.GetInternalFolder();
    var extfld = app.GetExternalFolder();
    var intspace = app.GetFreeSpace("internal");
    var extspace = app.GetFreeSpace("external");
    var mem = app.GetMemoryInfo().total.toLocaleString("en-US");
    
    //specs are formatted as a comment so we can paste
    //them somewhere convenient
    try { os = osInfo; }
    catch(err) {}
    var s = "/*\n" +
    "os=" + os + "\n" +
    getBuilderVersion() + "\n" +
    "tablet=" + tablet + "\n" +
    "model=" + model + "\n" +
    "isChrome=" + isChrome + "\n" +
    "isTV=" + isTV +"\n" +
    "DroidScript=" + dsversion + "\n" +
    "Storage access=" + storageScoped() + "\n" +
    "screen width=" + sw + "\n" +
    "screen height=" + sh + "\n" +
    "screen density=" + dens + "\n" +
    "display width=" + dw + "\n" +
    "display height=" + dh + "\n" +
    "internal folder=" + intfld + "\n" +
    "external folder=" + extfld + "\n" +
    "int free space=" + intspace + "\n" +
    "ext free space=" + extspace + "\n" +
    "memory=" + mem +"\n" +
    "premium=" + isPrem +"\n" +
    "country code=" + app.GetCountryCode() + "\n" +
    "country=" + app.GetCountry() + "\n" +
    "language code=" + app.GetLanguageCode() + "\n" +
    "language=" + app.GetLanguage() + "\n" +
    "wifi=" + app.GetIPAddress() + "\n" +
    "userAgent='" + navigator.userAgent + "'\n" +
    "*_";
    return(s);
}
    
function storageScoped() {
    return app.IsScoped()?"Scoped":"Traditional";
}
    
//called when screen rotates
//also called at startup to fix Chromebook display size anomaly
function OnConfig()
{
    var fixwid = lay.GetAbsWidth()/app.GetDisplayWidth();
    var fixhigh = lay.GetAbsHeight()/app.GetDisplayHeight();
    var wid = 1, high = 0.8;
    if (fixwid<1) wid *= fixwid; // chromebook not using full width
    if (fixhigh<1) high *= fixhigh; // or height
    scroller.SetSize( wid,high );
    txt.SetSize( wid, high  );
}
 */
    
            