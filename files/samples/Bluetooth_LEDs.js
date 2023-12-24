//This sample demonstrates controlling the PWM outputs on
//pins C6,C7 and C8 of an Espruino circuit board via Bluetooth.
//
//The program was designed to control tri-color LED strips. 
//See it in action here:- http://youtu.be/_h4zEzTA7lM
//(Make sure you are paired with the HC-05 module first)

//Called when application is started.
function OnStart()
{
    //Create a layout with objects vertically centered.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )    

    //Create a 'Connect' button.
    btn = app.CreateButton( "Connect", 0.4, 0.1 )
    btn.SetOnTouch( btn_OnTouch )
    lay.AddChild( btn )
    app.AddLayout( lay )
    
    //Create 'Red' seek bar.
    skbRed = app.CreateSeekBar( 0.8, -1 )
    skbRed.SetMargins( 0, 0.05, 0, 0 )
    skbRed.SetRange( 1.0 )
    skbRed.SetOnTouch( skbRed_OnTouch )
    lay.AddChild( skbRed )
    
    //Create 'Green' seek bar.
    skbGreen = app.CreateSeekBar( 0.8, -1 )
    skbGreen.SetMargins( 0, 0.05, 0, 0 )
    skbGreen.SetRange( 1.0 )
    skbGreen.SetOnTouch( skbGreen_OnTouch )
    lay.AddChild( skbGreen )
    
    //Create 'Blue' seek bar.
    skbBlue = app.CreateSeekBar( 0.8, -1 )
    skbBlue.SetMargins( 0, 0.05, 0, 0 )
    skbBlue.SetRange( 1.0 )
    skbBlue.SetOnTouch( skbBlue_OnTouch )
    lay.AddChild( skbBlue )
    
    //Create a 'Random' button.
    btnRand = app.CreateButton( "Random", 0.4, 0.1 )
    btnRand.SetMargins( 0,0.05,0,0 )
    btnRand.SetOnTouch( btnRand_OnTouch )
    lay.AddChild( btnRand )
    app.AddLayout( lay )
    
    //Create Bluetooth serial object.
    bt = app.CreateBluetoothSerial()
    bt.SetOnConnect( bt_OnConnect )
}

//Called when user touches the button.
function btn_OnTouch() 
{
    bt.Connect( "HC-05" )
}

//Called when we are connected.
function bt_OnConnect( ok )
{
    if( ok ) 
    { 
        bt.Write( "digitalWrite(LED1,1)\n" )
        app.ShowPopup( "Connected!" )
    }
    else app.ShowPopup( "Failed to connect!" )
}

//Called when user touches the 'Red' seek bar.
function skbRed_OnTouch( value )
{
    bt.Write( "analogWrite(C6," + (value*value).toFixed(2) + ")\n" )
}

//Called when user touches the 'Green' seek bar.
function skbGreen_OnTouch( value )
{
    bt.Write( "analogWrite(C7," + (value*value).toFixed(2) + ")\n" )
}

//Called when user touches the 'Blue' seek bar.
function skbBlue_OnTouch( value )
{
    bt.Write( "analogWrite(C8," + (value*value).toFixed(2) + ")\n" )
}

//Called when 'Random' button is pressed.
function btnRand_OnTouch()
{
    if( btnRand.GetText()=="Random" )
    {
        //Call the 'RandomFlash' function repeatedly.
        val = 0;
        timer = setInterval( RandomFlash, 500 )
        btnRand.SetText( "Stop" )
    }
    else 
    {
        SwitchOff()
        clearInterval( timer )
        btnRand.SetText( "Random" )
    }
}

//Flash the LEDs with random colors.
function RandomFlash()
{
    var red = (Math.random() > 0.5)
    var green = (Math.random() > 0.5)
    var blue = (Math.random() > 0.5)
    if( (!red && !green && !blue) ) red = green = blue = true;
    bt.Write( "analogWrite(C6,"+ (red?1:0) +")\n" )
    bt.Write( "analogWrite(C7,"+ (green?1:0) +")\n" )
    bt.Write( "analogWrite(C8,"+ (blue?1:0) +")\n" )
}

//Turn off LEDs.
function SwitchOff()
{
    bt.Write( "analogWrite(C6,0)\n" )
    bt.Write( "analogWrite(C7,0)\n" )
    bt.Write( "analogWrite(C8,0)\n" )
}

