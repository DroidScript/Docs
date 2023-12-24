
//Called when application is created.
function OnStart()
{       
	app.ShowPopup( "OnStart" )
	app.EnableBackKey( false )
}

//Called when the back key is pressed.
function OnBack() 
{              
	alert( "OnBack" )   
	app.Exit()
}

//Called when application is paused.
//(eg. When user switches to home screen)
function OnPause() 
{ 
	app.ShowPopup( "OnPause" )
}

//Called when application is resumed.
//(eg. When user returns from home screen)
function OnResume() 
{ 
	app.ShowPopup( "OnResume" )
}

//Called when configuration changes.
//(eg. When user rotates phone)
function OnConfig() 
{              
	app.ShowPopup( "OnConfig" )    
}

//Handle data sent from other apps.
function OnData( isStartUp )
{
	var intent = app.GetIntent()
	if( intent ) app.ShowPopup( JSON.stringify(intent) )
}



