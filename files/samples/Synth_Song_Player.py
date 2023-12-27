Translated code:

```python
# Synth Song Player by CandleLight

# Setup notes in the song.
HeyHoNotes = [
    "D4", "C4", "D4", "D4", "D4", "A3",
    "D4", "D4", "E4", "E4", "F4", "F4", "F4", "F4", "E4",
    "A4", "G4", "A4", "G4", "A4", "G4", "A4", "G4", "F4", "E4"
]

# Setup note durations.
HeyHoDurations = [
    "2n", "2n", "4n", "8n", "8n", "2n",
    "4n", "4n", "4n", "4n", "8n", "8n", "8n", "8n", "2n",
    "4n+8n", "8n", "4n+8n", "8n", "4n+8n", "8n", "8n", "8n", "8n", "8n"
]

# Setup note velocities.
HeyHoVelocity = [
    0.9, 0.9, 0.9, 0.7, 0.7, 0.9,
    0.9, 0.7, 0.9, 0.7, 0.9, 0.7, 0.7, 0.7, 0.9,
    0.9, 0.7, 0.9, 0.7, 0.9, 0.7, 0.9, 0.7, 0.7, 0.7
]

# Other variables.
length = 25
note, duration, velocity = "", "", ""
turn = index = 0

# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("Linear", "VCenter,FillXY")

    # Add a 'Play' button.
    btn = app.AddButton(lay, "Play", 0.3)
    btn.SetOnTouch(btn_OnTouch)

    # Add layout to app.
    app.AddLayout(lay)

# Called when user touches our 'Play' button.
def btn_OnTouch():
    # Create music component.
    music = app.CreateMusic()

    # Create synthesizer object.
    synth = music.CreateSynth("Synth")

    # Create a transport in repeat mode.
    music.RepeatTransport(repeat, "4n")
    music.StartTransport()

# Play each note.
def repeat(time):
    global turn, index, note, duration, velocity
    turn = index % length  # if notes end back first.
    note = HeyHoNotes[turn]
    duration = HeyHoDurations[turn]
    velocity = HeyHoVelocity[turn]
    synth.PlayStopTone(note, duration, time, velocity)
```

Note that the `app.CreateLayout`, `app.AddButton`, `btn.SetOnTouch`, `app.CreateMusic`, `music.CreateSynth`, `music.RepeatTransport`, `music.StartTransport`, and `synth.PlayStopTone` functions might need to be adjusted to the Python equivalent depending on the framework you are using.