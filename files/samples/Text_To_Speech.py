from hybrid import ui
from native import app

# Translated Python Code

# Called when application is started.
def OnStart():
    global edt
    # Create a layout with objects vertically centered.
    lay = ui.createLayout( "linear", "VCenter,FillXY" )

    # Create a text edit box.
    edt = ui.createTextEdit( "Hello World!", 0.8, 0.3 )
    lay.addChild( edt )

    # Create a button.
    btn = ui.createButton( "Press Me", 0.3 )

    # Set function to call when button pressed.
    btn.setOnTouch( btn_OnTouch )

    # Add button to layout.
    lay.addChild( btn )

    # Add layout to app.
    app.addLayout( lay )

# Called when user touches the button.
def btn_OnTouch():
    # Speak the text at default pitch and speed.
    pitch = 1.0
    speed = 1.0
    app.textToSpeech( edt.getText(), pitch, speed )