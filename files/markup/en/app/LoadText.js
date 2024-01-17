// ------------- HEADER SECTION -------------


/** # LoadText #
 * Load saved text value to remember varibale values between multiple app starts.
 * 
 * See also: @SaveText.
 * $$ app.LoadText(name, default?, file?) $$ 
 * @param {str} name 
 * @param {str} [default] 
 * @param {str_ptf} [file] 
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Load Saved Text
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

	app.AddLayout( lay );
}

function btnSave_OnTouch()
{
	app.SaveText( "value", edtValue.GetText(), file );
	app.ShowPopup( "Value Saved." );
}

function btnLoad_OnTouch()
{
    <b>var value = app.LoadText( "value", "no value stored", file );</b>
	app.ShowPopup( value );
}
 */
    
            
    
/**
@sample Python Load Saved Text
from native import app

file = "demofile"

def OnStart():
    global edtValue
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    text = app.LoadText("value", "My Value", file)
    edtValue = app.CreateTextEdit(text, 0.5)
    lay.AddChild(edtValue)

    btnSave = app.CreateButton("Save Value", 0.5, 0.1)
    btnSave.SetOnTouch(btnSave_OnTouch)
    lay.AddChild(btnSave)

    btnLoad = app.CreateButton("Load Value", 0.5, 0.1)
    btnLoad.SetOnTouch(btnLoad_OnTouch)
    lay.AddChild(btnLoad)

    app.AddLayout(lay)

def btnSave_OnTouch():
    app.SaveText("value", edtValue.GetText(), file)
    app.ShowPopup("Value Saved.")

def btnLoad_OnTouch():
    value = app.LoadText("value", "no value stored", file)
    app.ShowPopup(value)
 */
    
            