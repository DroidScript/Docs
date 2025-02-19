//This example shows how to receive data from other apps
//which offer the 'Share via' option, such as the 'My Files' 
//app or 'ES File Explorer' or 'S Memo' apps.

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a 'text' label and text boxt.
	txt = app.CreateText( "Shared Text:" )
	lay.AddChild( txt )
	txt1 = app.CreateText( "", 0.9, 0.4 , "multiline" )
	txt1.SetBackColor( "#ff222222" )
	txt1.SetTextSize( 18 )
	lay.AddChild( txt1 )
	
	//Create 'files' label and text box.
	txt = app.CreateText( "Shared Files:" )
	txt.SetMargins( 0,0.05,0,0 )
	lay.AddChild( txt )
	txt2 = app.CreateText( "", 0.9, 0.4, "multiline" )
	txt2.SetBackColor( "#ff222222" )
	txt2.SetTextSize( 18 )
	lay.AddChild( txt2 )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Get shared text (if any).
	sharedText = app.GetSharedText()
	if( sharedText ) txt1.SetText( sharedText )
	
	//Get first shared file (if any).
	sharedFiles = app.GetSharedFiles()
	if( sharedFiles ) txt2.SetText( sharedFiles[0] )
	
	//Uncomment the code below to register your program to 
	//handle all shared data. (It will be auto-launched the 
	//next time shared data is received)
	//app.SetSharedApp( "My AppName" )
}

