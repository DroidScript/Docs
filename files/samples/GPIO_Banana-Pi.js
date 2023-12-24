//
// This sample toggles the GPIO on pin 7 of the BananaPi zero.
// (Tested with the Kitkat image released on 2018-07-09)
//
// Look here for more info:- http://wiki.banana-pi.org/Banana_Pi_BPI-ZERO
//

//Called when application is started.
function OnStart()
{ 
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a text label and add it to layout.
	txt = app.CreateText( "Banana-Pi GPIO" )
	txt.SetTextSize( 32 )
	lay.AddChild( txt )

	//Create a toggle button.
	tgl = app.CreateToggle( "GPIO", 0.4 )
	tgl.SetMargins( 0, 0.02, 0, 0 )
	tgl.SetOnTouch( tgl_OnTouch )
	lay.AddChild( tgl )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Create system processing object as super user.
	sys = app.CreateSysProc("su")
}

//Called when user touches our toggle button.
function tgl_OnTouch( isChecked )  
{
	if( isChecked )
		sys.Out( "echo 1 > /sys/class/gpio_sw/PA6/data\n" )
	else
		sys.Out( "echo 0 > /sys/class/gpio_sw/PA6/data\n" )
}

