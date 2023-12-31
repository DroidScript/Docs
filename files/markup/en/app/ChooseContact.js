// ------------- HEADER SECTION -------------


/** # ChooseContact #
 * @brief Let the user choose an image
 * ChooseContact opens the Contacts app so that the user can select the name and either the phone number or email address of a user.
 * $$ app.ChooseContact(type, callback) $$ 
 * @param {str} type Phone|Email
 * @param {fnc_json} callback {"pNames":["name","data"],"pTypes":["str","str"]}
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Choose Phone Number
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btnChoose = app.CreateButton( "Choose Phone", 0.5, 0.1 );
	btnChoose.SetOnTouch( btnChoose_OnTouch );
	lay.AddChild( btnChoose );

	app.AddLayout( lay );
}

function btnChoose_OnTouch()
{
	<b>app.ChooseContact( "phone", OnPhoneChoose );</b>
}

function OnPhoneChoose( name, number )
{
     app.ShowPopup( name + " " + number );
}
 */
    
            
    
/**
@sample Choose Email Address
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btnChoose = app.CreateButton( "Choose Email", 0.5, 0.1 );
	btnChoose.SetOnTouch( btnChoose_OnTouch );
	lay.AddChild( btnChoose );

	app.AddLayout( lay );
}

function btnChoose_OnTouch()
{
	<b>app.ChooseContact( "email", OnEmailChoose );</b>
}

function OnEmailChoose( name, email )
{
     app.ShowPopup( name + " " + email );
}
 */
    
            
    
/**
@sample Python Choose Phone Number
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    btnChoose = app.CreateButton( "Choose Phone", 0.5, 0.1 )
    btnChoose.SetOnTouch( btnChoose_OnTouch )
    lay.AddChild( btnChoose )

    app.AddLayout( lay )

def btnChoose_OnTouch():
    app.ChooseContact( "phone", OnPhoneChoose )

def OnPhoneChoose( name, number ):
    app.ShowPopup( name + " " + number )
 */
    
            
    
/**
@sample Python Choose Email Address
from native import app

def OnStart():
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    btnChoose = app.CreateButton( "Choose Email", 0.5, 0.1 )
    btnChoose.SetOnTouch( btnChoose_OnTouch )
    lay.AddChild( btnChoose )

    app.AddLayout( lay )

def btnChoose_OnTouch():
    app.ChooseContact( "email", OnEmailChoose )

def OnEmailChoose( name, email ):
    app.ShowPopup( name + " " + email )
 */
    
            