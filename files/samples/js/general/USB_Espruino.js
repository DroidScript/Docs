// Espruino programmer example. 
// Note: this application only works on devices that support OTG.

//Global variables. 
var usb=null, reply=""; 

//Called when application is started. 
function OnStart() 
{ 
    //Create a layout with objects vertically centered. 
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )    

    //Create title text. 
    txt = app.CreateText("Espruino") 
    txt.SetTextSize( 22 ) 
    txt.SetMargins( 0,0,0,0.01 ) 
    lay.AddChild( txt ) 

    //Create a read-only edit box to show espruino responses. 
    txtReply = app.CreateText( "", 0.96, 0.4, "Log,MonoSpace" ) 
    txtReply.SetMargins( 0,0,0,0.01 ) 
    txtReply.SetBackColor( "#333333" )
    txtReply.SetTextSize( 12 ) 
    lay.AddChild( txtReply ) 
    
    //Create an edit box containing an example espruino program. 
    edt = app.CreateTextEdit( "", 0.96, 0.4, "NoSpell" ) 
    lay.AddChild( edt ) 
    
    //Create program spinner.
    spin = app.CreateSpinner( "[Clear],Flash,PWM,Servo,Move-0,Move-1", 0.6 )
    spin.SetOnTouch( spin_OnTouch )
    spin.SetText( "[Clear]" )
    lay.AddChild( spin )
    
    //Create a horizontal layout for buttons. 
    layBut = app.CreateLayout("Linear", "Horizontal") 
    lay.AddChild( layBut ) 

    //Create an connect button. 
    btnConnect = app.CreateButton( "Connect", 0.23, 0.1 ) 
    btnConnect.SetOnTouch( btnConnect_OnTouch ) 
    layBut.AddChild( btnConnect ) 

    //Create an send button. 
    btnSend = app.CreateButton( "Send", 0.23, 0.1 ) 
    btnSend.SetOnTouch( btnSend_OnTouch ) 
    layBut.AddChild( btnSend ) 

     //Create a reset button. 
    btnReset = app.CreateButton( "Reset", 0.23, 0.1 ) 
    btnReset.SetOnTouch( btnReset_OnTouch ) 
    layBut.AddChild( btnReset ) 

    //Create an save button. 
    btnSave = app.CreateButton( "Save", 0.23, 0.1 ) 
    btnSave.SetOnTouch( btnSave_OnTouch ) 
    layBut.AddChild( btnSave ) 

    //Add layout to app.     
    app.AddLayout( lay ) 
} 

//Called when user touches connect button. 
function btnConnect_OnTouch() 
{ 
    //Create USB serial object. 
    usb = app.CreateUSBSerial() 
    if( !usb ) 
    {
        app.ShowPopup( "Please connect a USB device" )
        return;
    }
    usb.SetOnReceive( usb_OnReceive )
    app.ShowPopup( "Connected" )
} 

//Called when user touches send button. 
function btnSend_OnTouch() 
{  
    //Get rid of blank lines, spaces etc that cause 
    //a problem for Espruino. 
    var s = edt.GetText() 
    s = s.replace( RegExp("\n\n+","gim"), "\n" ) 
    s = s.replace( RegExp("\n +","gim"), "\n" ) 
    s = s.replace( RegExp("\\)\\s*\\{","gim"), "\)\{" ) 
    s = s.replace( RegExp(", +","gim"), "," ) 
    s = s.replace( RegExp("\\( +","gim"), "\(" ) 
    s = s.replace( RegExp(" +\\)","gim"), "\)" ) 

    //Send program to Espruino. 
    Send( s ) 
} 

//Called when user touches reset button. 
function btnReset_OnTouch() 
{ 
    //Clear log.
    reply = "";
    txtReply.SetText( reply )
    
    //Send reset and turn leds off. 
    var s = "reset()\n"; 
    s += "analogWrite( A1, 0.0 )\n";
    s += "digitalWrite(LED1,0)\n"; 
    s += "digitalWrite(LED2,0)\n"; 
    Send( s ) 
} 

//Called when user touches save button. 
function btnSave_OnTouch() 
{ 
    var s = "save()\n"; 
    Send( s ) 
} 

//Called when user touches program spinner.
function spin_OnTouch( item )
{
    var s ="";
    if( item=="Flash" )
    {
        s = "var state=0;\n\nfunction flash()\n{\n";  
        s += " digitalWrite( LED1, state )\n"; 
        s += " state = !state;\n"; 
        s += "}\n"; 
        s += "setInterval( flash, 200 )\n"; 
    }
    else if( item=="PWM" )
    {
        s += "analogWrite( A1, 0.5 )\n";
    }
    else if( item=="Servo" )
    {
        s += "function setServo(pin,pos)\n";
        //s += "function setServo(pin,pos)\n";
        s += "{\n";
        s += " if (pos<0) pos=0;\n";
        s += " if (pos>1) pos=1;\n";
        s += " analogWrite(pin, (1+pos)/50.0, {freq:20})\n";
        s += "}\n";
        s += "setServo( C7, 0.5 )\n";
    }
    else if( item=="Move-0" )
    {
        s += "setServo( C7, 0.0 )\n";
    }
    else if( item=="Move-1" )
    {
        s += "setServo( C7, 1.0 )\n";
    }
    edt.SetText( s )
}

//Check connection and send data. 
function Send( s ) 
{ 
    if( usb ) usb.Write( s ) 
    else app.ShowPopup( "Please connect" ) 
} 

//Called when we get data from Espruino.
function usb_OnReceive( txt )
{
    txtReply.Log( txt )
}

