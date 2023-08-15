
/** # ShowKeyboard #
 * Shows the keyboard on a focussed control.
 * 
 * See Also: @HideKeyboard
 * $$ app.ShowKeyboard(obj) $$ 
 * @param {dso} obj 
 * @returns bin
*/


// ShowKeyboard.txt --> All the sample codes

/** @Sample
<sample Basic>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	edt = app.CreateTextEdit( "Hell World" );
    edt.Focus();
	lay.AddChild( edt );

	app.AddLayout( lay );

	app.ShowKeyboard( edt );
}
</sample>

<sample Toggle Keyboard>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	tgl = app.CreateToggle( "Keyboard", 0.3, 0.1 );
	tgl.SetOnTouch( tgl_OnTouch );
	lay.AddChild( tgl );

	edt = app.CreateTextEdit( "Text", .8, .1 );
    edt.Focus();
	lay.AddChild(edt);

	app.AddLayout( lay );
}

function tgl_OnTouch( show )
{
	<b>if( show ) app.ShowKeyboard( edt );
	else app.HideKeyboard();</b>
}
</sample>

 */

