from native import app, ui

# Translated Python Code

# Example showing how to control an Arduino Uno via OTG cable.
#
# This demo requires the following sketch on your Uno:-
# http://androidscript.org/demos/arduino/DS_USB_Uno.ino
#
# Note: Some older devices do not support OTG.

# Called when application is started.
def OnStart():
    global usb
    # Create a layout with objects vertically centered.
    lay = ui.createLayout( "linear", "VCenter,FillXY" )

    # Create a toggle button.
    btn = ui.createToggle( "LED On/Off", 0.4 )
    btn.setOnTouch( btn_OnTouch )
    lay.addChild( btn )

    # Add layout to app.
    app.addLayout( lay )

    # Create USB serial object.
    usb = native.createUSBSerial()
    if not usb:
        app.showPopup( "Please connect your Arduino and restart" )
        return
    usb.setOnReceive( usb_OnReceive )
    app.showPopup( "Connected" )

# Called when user touches our toggle button.
def btn_OnTouch(isChecked):
    if not usb:
        return

    # Send LED command to Uno.
    if isChecked:
        usb.write( "ledh" )
    else:
        usb.write( "ledl" )

# Called when we get data from Espruino.
def usb_OnReceive(data):
    console.log( data )