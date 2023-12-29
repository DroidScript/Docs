// ------------- HEADER SECTION ------------- 


/** # Call #
 * @brief Calls a phone number
 * Call is used to call the given phone number.
 * $$ app.Call(number) $$ 
 * @param {str} number number
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Check Voice Messages
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    edtNumber = app.CreateTextEdit( "5500", .8, -1, "singleline,number,center" );
    edtNumber.SetTextSize(20);
    lay.AddChild(edtNumber);

	btnPhone = app.CreateButton( "Call", 0.5, 0.1 );
	btnPhone.SetOnTouch( btnCall_OnTouch );
	lay.AddChild( btnPhone );

	app.AddLayout( lay );
}

function btnCall_OnTouch()
{
	<b>app.Call( edtNumber.GetText() );</b>
}
 */
    
            
    
/**
@sample Python Check Voice Messages
from native import app

def OnStart():
    global edtNumber
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    edtNumber = app.CreateTextEdit( "5500", .8, -1, "singleline,number,center" )
    edtNumber.SetTextSize(20)
    lay.AddChild(edtNumber)

    btnPhone = app.CreateButton( "Call", 0.5, 0.1 )
    btnPhone.SetOnTouch( btnCall_OnTouch )
    lay.AddChild( btnPhone )

    app.AddLayout( lay )

def btnCall_OnTouch():
    <b>app.Call( edtNumber.GetText() )</b>
 */
    
            