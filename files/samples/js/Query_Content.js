
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	
	
	//Create an contacts intent button.
	btnPhone = app.CreateButton( "Get Phone Number", 0.4, 0.1 )
	btnPhone.SetOnTouch( btnPhone_OnTouch )
	lay.AddChild( btnPhone )
	
	//Create a Get Contacts button.
	btnContact = app.CreateButton( "Get D Contacts", 0.4, 0.1 )
	btnContact.SetOnTouch( btnContact_OnTouch )
	lay.AddChild( btnContact )

	//Add layout to app.	
	app.AddLayout( lay )
}

//Called when user touches our Get Phone Number button.
function btnPhone_OnTouch()
{
    var action = "android.intent.action.PICK";
    var uri = "content://contacts";
    var type =  "vnd.android.cursor.dir/phone_v2";
    app.SendIntent( null, null, action, null, uri, type, null, "result", OnResult )
}

//Called with intent result.
function OnResult( resultCode, result )
{
    //Query for contact info.
    var rows = app.QueryContent( result.data, "data1, display_name" )
    app.ShowPopup( rows[0].display_name + " " + rows[0].data1 )
}

//Called when user touches our Get D Contact button.
function btnContact_OnTouch()
{
    //Query for all contact info where name begins with D.
    var uri = "content://com.android.contacts/data";
    var columns = "display_name, data1";
    var select = "display_name LIKE ?";
    var params = "D%";
    var rows = app.QueryContent( uri, columns, select, params )
    
    //Show result (stringify as useful way of converting JS objects to text)
    alert( JSON.stringify(rows) )
}

