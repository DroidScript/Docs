
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	
	
	//Create a button 1/3 of screen width and 1/10 screen height.
	btn = app.CreateButton( "Send Intent", 0.3, 0.1 )
	btn.SetOnTouch( btn_OnTouch )
	lay.AddChild( btn )

	//Add layout to app.	
	app.AddLayout( lay )
}

//Called when user touches our button.
function btn_OnTouch()
{
    var packageName = "com.google.android.gm";
    var className = "com.google.android.gm.ComposeActivityGmailExternal";
    var action = "android.intent.action.VIEW";
    var category = null;
    var uri = "myfriend@gmail.com";
    var type = "message/rfc822";
    
    var extras = [ 
        {name:"android.intent.extra.EMAIL", type:"list", value:"fred@gmail.com"},
        {name:"android.intent.extra.SUBJECT", type:"string", value:"My subject"},
        {name:"android.intent.extra.TEXT", type:"string", value:"Hello!"} 
    ];
    extras = JSON.stringify( extras )

    app.SendIntent( packageName, className, action, category, uri, type, extras ) 
}

