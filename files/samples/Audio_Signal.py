Translated code:

```
# Init some variables.
minFreq = 200
maxFreq = 2000

# Called when application is started.
def OnStart():
    # Create layout that fills the screen.
    lay = app.CreateLayout("Linear", "FillXY,VCenter")

    # Create wave shape toggle buttons.
    togSin = app.CreateToggle("Sin", 0.3, 0.1)
    togSin.SetChecked(True)
    togSin.SetOnTouch(tog_OnTouch)
    lay.AddChild(togSin)
    togSaw = app.CreateToggle("Saw", 0.3, 0.1)
    togSaw.SetOnTouch(tog_OnTouch)
    lay.AddChild(togSaw)
    togSqu = app.CreateToggle("Square", 0.3, 0.1)
    togSqu.SetOnTouch(tog_OnTouch)
    lay.AddChild(togSqu)

    # Create 'Start' button.
    btnStart = app.CreateButton("Start", 0.4, 0.1)
    btnStart.SetMargins(0, 0.05, 0, 0)
    btnStart.SetOnTouch(btnStart_OnTouch)
    lay.AddChild(btnStart)

    # Create 'Stop' button.
    btnStop = app.CreateButton("Stop", 0.4, 0.1)
    btnStop.SetOnTouch(btnStop_OnTouch)
    lay.AddChild(btnStop)

    # Create 'Frequency' text label.
    txtFreq = app.CreateText("Frequency")
    txtFreq.SetMargins(0, 0.05, 0, 0)
    lay.AddChild(txtFreq)

    # Create frequency seek bar.
    skbFreq = app.CreateSeekBar(0.8, -1)
    skbFreq.SetRange(1.0)
    skbFreq.SetValue(0.5)
    skbFreq.SetOnTouch(skbFreq_OnTouch)
    lay.AddChild(skbFreq)

    # Create 'volume' text label.
    txtVol = app.CreateText("Volume")
    txtVol.SetMargins(0, 0.05, 0, 0)
    lay.AddChild(txtVol)

    # Create volume seek bar.
    skbVol = app.CreateSeekBar(0.8, -1)
    skbVol.SetOnTouch(skbVol_OnTouch)
    skbVol.SetRange(1.0)
    skbVol.SetValue(0.5)
    lay.AddChild(skbVol)

    # Add main layout to app.
    app.AddLayout(lay)

    # Create Synth object and set initial vals.
    synth = app.CreateSynth("Signal")
    synth.SetVolume(0.5, 0.5)
    skbFreq_OnTouch(skbFreq.GetValue())

# Handle wave shape select.
def tog_OnTouch():
    # Clear all toggles.
    togSin.SetChecked(False)
    togSaw.SetChecked(False)
    togSqu.SetChecked(False)

    # Set chosen toggle and set wave shape.
    tog = this
    tog.SetChecked(True)
    synth.SetWaveShape(tog.GetText())

# Handle 'Start' button.
def btnStart_OnTouch():
    synth.Start()
    # synth.PlayNote("C2")

# Handle 'Stop' button.
def btnStop_OnTouch():
    synth.Stop()

# Called when user changes frequency.
def skbFreq_OnTouch(value):
    freq = minFreq + (maxFreq - minFreq) * value
    synth.SetFrequency(freq)

    txtFreq.SetText(str(round(freq)) + " Hz")

# Called when user touches volume bar.
def skbVol_OnTouch(value):
    synth.SetVolume(value, value)
```