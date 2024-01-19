/*
 This is a simple example of using Google Analytics to track global, real-time 
 usage of your apps.  You need to sign up for an Analytics account and choose 
 the 'Mobile app' tracking method.  https://analytics.google.com
 
 You can track the use of various screens in your app by calling the 'send' 
 command and passing the app name and screen name each time a user navigates
 to a new screen in your app.
*/

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a text label and add it to layout.
	txt = app.CreateText( "Analytics Demo" )
	txt.SetTextSize( 32 )
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Send data to Google Analytics.
	//(the UA code is your unique Analytics code)
	var ver = app.GetVersion()
	app.GA( "create", "UA-12345678-1" )
	app.GA( "send", "screenview", 
	    {"appName":"droidscript","appVersion":ver,"screenName":"main"})
}

