//This sample demonstrates getting a list of UK place names
//within a post code area using the free geonames.org web service.

//Called when application is started.
function OnStart()
{
    //Create a layout with objects vertically centered.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )    

    //Create an text edit box for postcode entry. 
	edt = app.CreateTextEdit( "CB1", 0.8 ) 
	lay.AddChild( edt ) 

    //Create a button to send request.
	btn = app.CreateButton( "Get Places", 0.3, 0.1 ) 
	btn.SetMargins( 0, 0.05, 0, 0 ) 
    btn.SetOnTouch( btn_OnTouch ) 
	lay.AddChild( btn ) 

    //Create a text label to show results.
    txt = app.CreateText( "", 0.8, 0.6, "Left,Multiline" ) 
	txt.SetBackColor( "#ff222222" ) 
    txt.SetTextSize( 12 )
    lay.AddChild( txt )
    
    //Add layout to app.    
    app.AddLayout( lay )

}   

//Handle button press.
function btn_OnTouch() 
{ 
    //Get user entered post code.
    var postCode = edt.GetText()
    
    //Send request to remote server.
    var url = "http://api.geonames.org";
    var path = "/postalCodeLookupJSON";
    var params = "postalcode=" + postCode + "|country=UK|username=androidscript";
    app.HttpRequest( "get", url, path, params, HandleReply )
    
    app.ShowProgress( "Loading..." )
}

//Handle the servers reply.
function HandleReply( error, response, status )
{
    txt.SetText( response )
    app.HideProgress()
}


