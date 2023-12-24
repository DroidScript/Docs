The translated code is as follows:

```python
HeyHoNotes = [
    "D4", "C4", "D4", "D4", "D4", "A3",
    "D4", "D4", "E4", "E4", "F4", "F4", "F4", "F4", "E4",
    "A4", "G4", "A4", "G4", "A4", "G4", "A4", "G4", "F4", "E4"
]

HeyHoDurations = [
    "2n", "2n", "4n", "8n", "8n", "2n",
    "4n", "4n", "4n", "4n", "8n", "8n", "8n", "8n", "2n",
    "4n+8n", "8n", "4n+8n", "8n", "4n+8n", "8n", "8n", "8n", "8n", "8n"
]

HeyHoVelocity = [
    0.9, 0.9, 0.9, 0.7, 0.7, 0.9,
    0.9, 0.7, 0.9, 0.7, 0.9, 0.7, 0.7, 0.7, 0.9,
    0.9, 0.7, 0.9, 0.7, 0.9, 0.7, 0.9, 0.7, 0.7, 0.7
]

length = 25
note, duration, velocity = "", "", 0
turn = index = 0

def OnStart():
    lay = app.CreateLayout("Linear", "VCenter,FillXY")
    btn = app.AddButton(lay, "Play", 0.3)
    btn.SetOnTouch(btn_OnTouch)
    app.AddLayout(lay)

def btn_OnTouch():
    music = app.CreateMusic()
    synth = music.CreateSynth("Synth")
    music.RepeatTransport(repeat, "4n")
    music.StartTransport()

def repeat(time):
    global turn, index, note, duration, velocity
    turn = index % length
    index += 1

    note = HeyHoNotes[turn]
    duration = HeyHoDurations[turn]
    velocity = HeyHoVelocity[turn]

    synth.PlayStopTone(note, duration, time, velocity)
```