// ------------- HEADER SECTION ------------- 


/** # ChooseContact #
 * @brief Let the user choose an image
 * ChooseContact opens the Contacts app so that the user can select the name and either the phone number or email address of a user.
 * $$ app.ChooseContact(type, callback) $$ 
 * @param {str} type Phone|Email
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
    
            