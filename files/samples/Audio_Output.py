#Translated Python code

import androidhelper

droid = androidhelper.Android()

#Called when application is started.
def OnStart():
    #Create layout that fills the screen.
    lay = droid.fullScrreen().vcard()
    
    #Create 'Play' button.
    btn = droid.buttonCreate('Play', 'Play')
    btn.setOnTouch(btn_OnTouch)
    lay.addChild(btn)
    
    #Add main layout to app.
    droid.addLayout(lay)
    
    #Create media player.
    player = droid.mediaCreate()
    
    #Load a file (can be ogg or mp3).
    player.setFile("/Sys/Snd/Poing.ogg")

#Handle 'Play' button.
def btn_OnTouch():
    player.seekTo(0)
    player.play()