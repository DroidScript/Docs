
/** # SetOnShowKeyboard #
 * @brief Called on keyboard visibility changes
 * Define a callback function to detect when keyboard visible state has changed.
 * 
 * See Also: @ShowKeyboard, @HideKeyboard
 * $$ app.SetOnShowKeyboard(callback) $$ 
*/


// SetOnShowKeyboard.txt --> All the sample codes

/** @Sample
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

	app.SetOnShowKeyboard( OnKeyboardShown );
}

function tgl_OnTouch( show )
{
	if( show ) app.ShowKeyboard( edt );
	else app.HideKeyboard();
}

<b>function OnKeyboard( shown )
{
    app.ShowPopup( "Keyboard shown: " + shown );
}</b>
</sample>

 */

