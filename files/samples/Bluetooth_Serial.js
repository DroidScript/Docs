
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a button 1/3 of screen width and 1/4 screen height.
	btn = app.CreateButton( "Connect", 0.4, 0.15 )
	btn.SetOnTouch( btn_OnTouch )
	lay.AddChild( btn )
	app.AddLayout( lay )
	
	//Create Bluetooth serial object.
	bt = app.CreateBluetoothSerial()
	bt.SetOnConnect( bt_OnConnect )
	bt.SetOnReceive( bt_OnReceive )
	bt.SetSplitMode( "End", "\n" )
}

//Called when user touches the button.
function btn_OnTouch() 
{
    bt.Connect( "HC-05" )
}

//Called when we are connected.
function bt_OnConnect( ok )
{
    if( ok ) bt.Write( "digitalWrite(LED1,1)\n" )
    else app.ShowPopup( "Failed to connect!" )
}

//Called when we get data from device.
function bt_OnReceive( data )
{
    app.ShowPopup( data )
}
