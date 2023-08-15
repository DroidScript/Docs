
/** # GetInstalledApps #
 * Returns a list of objects containing informations about installed apps.
 * 
 * See Also: @GetRunningApps, @GetRunningServices
 * $$ app.GetInstalledApps() $$ 
 * @returns lst-[{ packageName:str&comma; className:str&comma; uid:num_int&comma; targetSdkVersion:num_int&comma; dataDir:str_pth&comma; sourceDir:str_pth&comma; publicSourceDir:str_pth&comma; nativeLibraryDir:str_pth }]
*/


// GetInstalledApps.txt --> All the sample codes

/** @Sample
<sample Show installed apps>
function OnStart()
{
    app.ShowProgress();

    var lay = app.CreateLayout( "linear" );

    var list = app.GetInstalledApps();

	lst = app.CreateList( "", 1, 1 );
	lay.AddChild( lst );

    for(var i in list) {
        var a = list[i];
        lst.AddItem(a.packageName);
    }

	app.AddLayout(lay);

    app.HideProgress();
}
</sample>

 */

