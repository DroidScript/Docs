
//Called when application is started.
function OnStart()
{   
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )
	lay.SetBackColor( "#333333" )
	
	//Create a scroller for log window.
    scroll = app.CreateScroller( 0.95, 0.9 )
    scroll.SetBackColor( "black" )
    lay.AddChild( scroll )
      
	//Create text control for logging (max 500 lines).
	txt = app.CreateText( "", 2,-1, "Log,Monospace" )
	txt.SetBackColor( "black" )
	txt.SetLog( 500 )
	scroll.AddChild( txt )
	
	//Create an text edit box for entering commands.
    edt = app.CreateTextEdit( "netstat", 0.95, -1, "SingleLine" )
    edt.SetMargins( 0,8,0,0, "dip" )
    edt.SetBackColor( "black" )
    edt.SetOnEnter( edt_OnEnter )
    edt.SetHint( ">" )
    lay.AddChild( edt )

	//Add layout to app.	
	app.AddLayout( lay )
	
	//Create system process.
	sys = app.CreateSysProc( "sh" )
	sys.SetOnInput( sys_OnInput )
	sys.SetOnError( sys_OnError )
	
    //Detect keyboard showing.
    app.SetOnShowKeyboard( app_OnShowKeyBoard )
    
    //Disable debug so logs don't fill up.
	app.SetDebugEnabled( false )
	
	//Run the netstat command.
	setTimeout( edt_OnEnter, 1000 )
}

//Called when we get data from the input stream.
function sys_OnInput( data )
{
    //Write data to log.
    txt.Log( data )
 
    //Scroll to bottom if lines added.
    setTimeout( Scroll, 100 )
}

//Called when we get errors from the input stream.
function sys_OnError( data )
{
    //Write data to log.
    txt.Log( data, "Red" )
 
    //Scroll to bottom if lines added.
    setTimeout( Scroll, 100 )
}

//Handle enter key.
function edt_OnEnter()
{
    var cmd = edt.GetText()
    
    //Add command to log window.
    txt.Log( cmd+"\n", "Green" )
    
    //Send command to output stream.
    sys.Out( cmd+"\n" )
}

//Handle soft-keyboard show and hide.
function app_OnShowKeyBoard( shown )
{
    //Get fractional height of keyboard.
    var kbh = app.GetKeyboardHeight() / app.GetDisplayHeight()
    
    if( shown ) scroll.SetSize( 0.95, 0.9-kbh )
    else scroll.SetSize( 0.95, 0.9 )
    Scroll()
}

//Scroll to bottom of log window.
function Scroll()
{
    scroll.ScrollTo( 0, 999 )
}
