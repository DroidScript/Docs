
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create image.
	img = app.CreateImage( "/Sys/Img/Hello.png", 0.1 )
	lay.AddChild( img )
	
	//Create a 'Send File' button
	btnSend = app.CreateButton( "Send File to another App", 0.8 )
	btnSend.SetMargins( 0, 0.05, 0, 0 )
	btnSend.SetOnTouch( btnSend_OnTouch )
	lay.AddChild( btnSend )
	
	//Create a 'Send Image' button
	btnImg = app.CreateButton( "Send Image to Google Drive", 0.8 )
	btnImg.SetMargins( 0, 0.05, 0, 0 )
	btnImg.SetOnTouch( btnImg_OnTouch )
	lay.AddChild( btnImg )
	
	//Create a 'Send Text' button
	btnTxt = app.CreateButton( "Send Text to Google Drive", 0.8 )
	btnTxt.SetMargins( 0, 0.05, 0, 0 )
	btnTxt.SetOnTouch( btnTxt_OnTouch )
	lay.AddChild( btnTxt )
	
	//Add layout to app.	
	app.AddLayout( lay )
}

//Send a file to another App (user's choice).
function btnSend_OnTouch()
{
    var file = "/sdcard/sftest.txt";
    app.WriteFile( file, "Hello World" )
	app.SendFile( file, "sftest.txt", "Send File" )
}

//Send an image to Google Drive.
function btnImg_OnTouch()
{
    var file = "/sdcard/MyDroid.jpg";
    img.Save( file )
    
    var packageName = "com.google.android.apps.docs";
    var className = "com.google.android.apps.docs.shareitem.UploadSharedItemActivity";
    var action = "android.intent.action.SEND";
    var category = "android.intent.category.DEFAULT"
    var uri = null;
    var type = "multipart/*";
    var extras = [
        {name:"android.intent.extra.STREAM", type:"file", value:file},
        {name:"android.intent.extra.SUBJECT", type:"string", value:"MyDroid.jpg"},
    ];
    
    extras = JSON.stringify( extras )
    app.SendIntent(packageName, className, action, category, uri, type, extras)
}

//Send text to Google Drive.
function btnTxt_OnTouch()
{
    var textData = "The cat sat on the mat";
    var packageName = "com.google.android.apps.docs";
    var className = "com.google.android.apps.docs.shareitem.UploadSharedItemActivity";
    var action = "android.intent.action.SEND";
    var category = "android.intent.category.DEFAULT"
    var uri = null;
    var type = "text/plain";
    var extras = [
        {name:"android.intent.extra.TEXT", type:"string", value:textData},
    ];
    
    extras = JSON.stringify( extras )
    app.SendIntent(packageName, className, action, category, uri, type, extras)
}

