
#Import the DroidScript app object.
from native import app

#Called when application is created.
def OnStart() :
    app.ShowPopup( "App Started!" )
    app.EnableBackKey( False )

#Called when the back key is pressed.
def OnBack() :
    app.Alert( "OnBack" )
    app.Exit()

#Called when config changes (eg. phone is rotated).
def OnConfig() :
    app.ShowPopup( "OnConfig" )

#Called when application is paused.
def OnPause() :
    app.ShowPopup( "OnPause" )

#Called when application is resumed.
def OnResume() :
    app.ShowPopup( "OnResume" )

#Handle data sent from other apps.
def OnData( isStartUp ) :
    app.ShowPopup( "OnData" )
    app.Debug( app.GetIntent() )
