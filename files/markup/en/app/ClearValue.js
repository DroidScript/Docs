// ------------- HEADER SECTION -------------


/** # ClearValue #
 * @brief Deletes a variable saved via app.Save*()
 * ClearValue deletes a variable saved via app.Save*(). The file parameter is optional. If given, the specified file will be used, otherwise it will be located in the apps private Folder.
 *
 * See Also: @SaveText, @SaveNumber, @SaveBoolean
 * $$ app.ClearValue(name, file) $$
 * @param {str} name
 * @param {str_ptf} file
*/




// ------------- SAMPLES ------------- 



/**
@sample Save, Load and Clear Data
var file = "demofile";

function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	var text = app.LoadText( "value", "My Value", file );
	edtValue = app.CreateTextEdit( text, .5 );
	lay.AddChild( edtValue );

	btnSave = app.CreateButton( "Save Value", 0.5, 0.1 );
	btnSave.SetOnTouch( btnSave_OnTouch );
	lay.AddChild( btnSave );

	btnLoad = app.CreateButton( "Load Value", 0.5, 0.1 );
	btnLoad.SetOnTouch( btnLoad_OnTouch );
	lay.AddChild( btnLoad );

	btnClear = app.CreateButton( "Clear Value", 0.5, 0.1 );
	btnClear.SetOnTouch( btnClear_OnTouch );
	lay.AddChild( btnClear );

	app.AddLayout( lay );
}

function btnSave_OnTouch()
{
	app.SaveText( "value", edtValue.GetText(), file );
	app.ShowPopup( "Value Saved." );
}

function btnLoad_OnTouch()
{
	var value = app.LoadText( "value", "no value stored", file );
	app.ShowPopup( value );
}

function btnClear_OnTouch()
{
	<b>app.ClearData( file );</b>
	app.ShowPopup( "Data Cleared." );
}
 */



/**
@sample Python Save, Load and Clear Data
from native import app

file = "demofile"
edtValue = None

def OnStart():
	global edtValue
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )

	text = app.LoadText( "value", "My Value", file )
	edtValue = app.CreateTextEdit( text, .5 )
	lay.AddChild( edtValue )

	btnSave = app.CreateButton( "Save Value", 0.5, 0.1 )
	btnSave.SetOnTouch( btnSave_OnTouch )
	lay.AddChild( btnSave )

	btnLoad = app.CreateButton( "Load Value", 0.5, 0.1 )
	btnLoad.SetOnTouch( btnLoad_OnTouch )
	lay.AddChild( btnLoad )

	btnClear = app.CreateButton( "Clear Value", 0.5, 0.1 )
	btnClear.SetOnTouch( btnClear_OnTouch )
	lay.AddChild( btnClear )

	app.AddLayout( lay )

def btnSave_OnTouch():
	global edtValue, file
	app.SaveText( "value", edtValue.GetText(), file )
	app.ShowPopup( "Value Saved." )

def btnLoad_OnTouch():
	global file
	value = app.LoadText( "value", "no value stored", file )
	app.ShowPopup( value )

def btnClear_OnTouch():
	global file
	<b>app.ClearData( file )</b>
	app.ShowPopup( "Data Cleared." )
 */