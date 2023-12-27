'''
 This sample demonstrates communicating via the primary UART port of 
 the BananaPi zero. (GND,Rx,Tx pins near the mini HDMI connector).

 You can easily test this app on Windows with the PuTTY program by 
 connecting a USB->UART converter to the GPIO pins (converters can 
 easily found in ebay for a few dollars).

 Sample originally tested with the Kitkat image released on 2018-07-09
 Look here for more info:- http://wiki.banana-pi.org/Banana_Pi_BPI-ZERO
'''

# Called when application is started.
def OnStart(): 
	# Create a layout with objects vertically centered.
	lay = app.CreateLayout("linear", "VCenter,FillXY")

	# Create a text label and add it to layout.
	txt = app.CreateText("Banana-Pi UART")
	txt.SetTextSize(32)
	lay.AddChild(txt)

	# Create a button.
	btn = app.CreateButton("Send Serial", 0.4, 0.15)
	btn.SetMargins(0, 0.05, 0, 0)
	btn.SetOnTouch(btn_OnTouch)
	lay.AddChild(btn)

	# Add layout to app.
	app.AddLayout(lay)

	# Create system processing object as super user.
	sys = app.CreateSysProc("su")

# Called when user touches our 'Send Serial' button.
def btn_OnTouch():
    sys.Out("echo hello > /dev/ttyS0\n")
