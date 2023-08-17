
/** # GetData #
 * Returns data stored via app.SetData(key, value). All data will be lost when the app is closed.
 * 
 * See Also: @SetData
 * $$ app.GetData(name) $$ 
 * @param {str} name 
 * @returns str
*/


// GetData.txt --> All the sample codes

/** @Sample
<sample Get Saved Data>
function OnStart()
{
    app.SetData( "myvar", "Hello World!" );
    <b>var data = app.GetData("myvar");</b>
    app.Alert( data, "Saved Data:" );
}
</sample>

<sample Random Value>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btn = app.AddButton( lay, "Press Me", 0.3, 0.1 );
	btn.SetOnTouch( btn_OnTouch );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
	app.SetData( "number", 100 * Math.random() | 0 );

    <b>var data = app.GetData( "number" );</b>
	app.ShowPopup( "Data: " + data);
}
</sample>

 */

