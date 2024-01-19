
//Called when application is started.
function OnStart()
{   
	//Create layout that fills the screen.
	lay = app.CreateLayout( "Linear", "FillXY,VCenter" )
	
	//Create text control to show email.
	txtMsg = app.CreateText( "", 0.8, 0.8, "Left,Multiline" )
	txtMsg.SetBackColor( "#ff222222" )
	lay.AddChild( txtMsg ) 
	
	//Create 'Receive' button.
	btn = app.CreateButton( "Receive", 0.4, 0.1 )
	btn.SetMargins( 0,0.02,0,0 )
	btn.SetOnTouch( btn_OnTouch )
	lay.AddChild( btn ) 
	
	//Add main layout to app.
	app.AddLayout( lay )
	
	//Create email object and set callbacks.
	email = app.CreateEmail( "mymail@gmail.com", "MyPass" )
	email.SetIMAP( "imap.gmail.com" )
	//email.SetIMAP( "imap.mail.yahoo.com" )
	email.SetOnMessage( email_OnMessage )
	email.SetOnStatus( email_OnStatus )
}

//Handle 'Receive' button.
function btn_OnTouch()
{
	app.ShowPopup( "Receiving...", "Short" )
	
	//Start receiving emails from the Inbox folder but only 
	//check the last 20 emails.  You can add a subject filter 
	//in the third parameter such as "MyScript".
	email.Receive( "Inbox", 20, "" )
}

//Handle received messages.
function email_OnMessage( msg )
{
	txtMsg.SetText( msg.from + "\n" + msg.to + "\n" + 
		msg.subject + "\n\n" + msg.body )
}

//Handle status messages.
function email_OnStatus( status )
{
	app.ShowPopup( status )
}

