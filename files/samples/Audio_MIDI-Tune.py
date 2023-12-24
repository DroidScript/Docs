import app 
from native import gfx, ui

#Called when application is started.
def OnStart():
    #Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")    

    #Create a button.
    btn = app.CreateButton("Press Me", 0.3, 0.1)
    btn.SetMargins(0, 0.05, 0, 0)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    #Add layout to app.
    app.AddLayout(lay)

    #Create Synth object to generate sounds.
    synth = app.CreateSynth("VCF")
    synth.SetWaveShape("Saw")
    synth.SetVca(10, 400, 0.8, 100)
    synth.SetVcf(10, 400, 0.8, 100, 1000, 0.85, 2.0) 

#Called when user touches our button.
def btn_OnTouch():
    #Play a MIDI tune.
    synth.SetNoteLength(2.5)
    synth.PlayMidiTune("46:16,40:16,35:4")