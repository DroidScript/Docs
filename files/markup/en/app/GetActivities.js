
/** # GetActivities #

 * GetActivities returns a list of object of currently running activities.
 * 
 * See Also: @GetRunningApps, @GetRunningServices
 * $$ app.GetActivities() $$ 
 * @returns lst-[{ label:str&comma; packageName:str&comma; className:str }]
*/


// GetActivities.txt --> All the sample codes

/** @Sample
<sample Show Activities>
function OnStart()
{
    app.ShowProgress();

    var lay = app.CreateLayout( "linear" );

    var list = app.GetActivities();

	lst = app.CreateList( "", 1, 1 );
	lay.AddChild( lst )

	app.AddLayout(lay);

    for(var i in list) {
        var a = list[i];
        lst.AddItem(a.label, a.packageName);
    }

    app.HideProgress();
}
</sample>

 */

