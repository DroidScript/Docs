
/** # GetRunningServices #
 * @brief Get list of running services
 * Returns a list of objects containing info about all currently running services in the background.
 * 
 * See Also: @GetRunningApps, @GetInstalledApps
 * $$ app.GetRunningServices() $$ 
 * @returns lst_obj-[{ user:num_int&comma; pid:num_bin&comma; name:str }]
*/


// GetRunningServices.txt --> All the sample codes

/** @Sample
<sample Show Running Services>
function OnStart()
{
    app.ShowProgress();

    var lay = app.CreateLayout( "linear", "fillxy,vcenter" );

    lst = app.CreateList( "", .9, .9 );
    lst.SetTextSize1( 15 );
    lay.AddChild( lst );

    <b>var list = app.GetRunningServices();

    for( var i in list )
    {
        var a = list[i];
        var body =
            "user: " + a.user +
            "\npid: " + a.pid;
        lst.AddItem( a.name, body );
    }</b>

    app.AddLayout( lay );

    app.HideProgress();
}
</sample>

 */

