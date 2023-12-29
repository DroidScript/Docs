// ------------- HEADER SECTION ------------- 


/** # GetKeyboardHeight #
 * @brief Get current keyboard height
 * Returns the height of the device keyboard in pixels. Returns _0_ if the keyboard is hidden.
 * 
 * See Also: @ShowKeyboard
 * $$ app.GetKeyboardHeight() $$ 
 * @returns num_pxl
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Keyboard Height
function OnStart()
{
	lay = app.CreateLayout( "linear" );

    txt = app.CreateText( "Keyboard Height: ", .8, -1, "left" );
	lay.AddChild( txt );

    edt = app.CreateTextEdit( "Hello World", .8, .4 );
	lay.AddChild( edt );

	app.SetOnShowKeyboard( OnKeyboardShow );

	app.AddLayout( lay );
}

function OnKeyboardShow()
{
    <b>var height = app.GetKeyboardHeight();</b>
    txt.SetText( "Keyboard Height: " + height + "px" );
}
 */
    
            
    
/**
@sample Python Show Keyboard Height
from native import app

def OnStart():
    global txt
    lay = app.CreateLayout("linear")

    txt = app.CreateText("Keyboard Height: ", .8, -1, "left")
    lay.AddChild(txt)

    edt = app.CreateTextEdit("Hello World", .8, .4)
    lay.AddChild(edt)

    app.SetOnShowKeyboard(OnKeyboardShow)

    app.AddLayout(lay)

def OnKeyboardShow(shown):
    height = app.GetKeyboardHeight()
    txt.SetText("Keyboard Height: " + str(height) + "px")
 */
    
            