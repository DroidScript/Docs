// ------------- HEADER SECTION -------------


/** # GetRunningApps #
 * @brief Get list of running apps
 *
 * $$ app.GetRunningApps() $$
 * @returns lst_obj-[{ user:num_int&comma; pid:num_int&comma; name:str&comma; foreground:bin }]
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
Returns a list of objects containing info about all currently running apps in the fore- or background.

<deprecated Filters are applied since Android 11. Full functionality can be accessed in the X-Version of DS.> \
See [Android Package Visibility](https://developer.android.com/training/package-visibility) for more information.

See Also: @GetRunningServices, @GetInstalledApps
 */



// ------------- SAMPLES -------------



/**
@sample Show Running Apps
function OnStart()
{
    app.ShowProgress();

    var lay = app.CreateLayout( "linear", "fillxy,vcenter" );

    lst = app.CreateList( "", .9, .9 );
    lst.SetTextSize1( 15 );
    lay.AddChild( lst );

    <b>var list = app.GetRunningApps();

    for( var i in list )
    {
        var a = list[i];
        var body =
            "user: " + a.user +
            "\npid: " + a.pid +
            "\nforeground: " + a.foreground;
        lst.AddItem( a.name, body );
    }</b>

    app.AddLayout( lay );

    app.HideProgress();
}
 */



/**
@sample Is In Foreground
function OnStart()
{
    app.Animate(CheckForeground, 0.2);
}

function CheckForeground()
{
    var apps = app.GetRunningApps();
    var name = app.GetPackageName();
    if(!app.IsAPK()) name += ":NewActivityProcess";

    for(var i in apps)
    {
        if(apps[i].name == name)
            app.ShowPopup("In Foreground: " + apps[i].foreground);
    }
}
 */



/**
@sample Python Show Running Apps
from native import app

def OnStart():
    app.ShowProgress()

    lay = app.CreateLayout( "linear", "fillxy,vcenter" )

    lst = app.CreateList( "", .9, .9 )
    lst.SetTextSize1( 15 )
    lay.AddChild( lst )

    list = app.GetRunningApps()

    for a in list:
        body = f"user: {a.user}\npid: {a.pid}\nforeground: {a.foreground}"
        lst.AddItem(a.name, body)

    app.AddLayout( lay )

    app.HideProgress()
 */



/**
@sample Python Is In Foreground
from native import app

def OnStart():
    app.Animate(CheckForeground, 0.2)

def CheckForeground(time, dtime):
    apps = app.GetRunningApps()
    name = app.GetPackageName()
    if not app.IsAPK():
        name += ":NewActivityProcess"

    for a in apps:
        if a.name == name:
            app.ShowPopup("In Foreground: " + str(a.foreground))
 */
