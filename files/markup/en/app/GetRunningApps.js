
/** # GetRunningApps #
 * @brief Get list of running apps
 * Returns a list of objects containing info about all currently running apps in the fore- or background.
 * 
 * See Also: @GetRunningServices, @GetInstalledApps
 * $$ app.GetRunningApps() $$ 
 * @returns lst_obj-[{ user:num_int&comma; pid:num_bin&comma; name:str&comma; foreground:bin }]
*/


// GetRunningApps.txt --> All the sample codes

/** @Sample
<sample Show Running Apps>
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
</sample>

<sample Is In Foreground>
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
</sample>

 */

