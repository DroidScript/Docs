#Translated Python code

import androidhelper

droid = androidhelper.Android()

#Init some variables.
minFreq = 200
maxFreq = 2000

#Called when application is started.
def OnStart():
    #Create layout that fills the screen.
    lay = droid.fullScrreen().vcard()
    
    #Create wave shape toggle buttons.
    togSin = droid.toggleCreate('Sin', 'Sin')
    togSin.setChecked(True)
    togSin.setOnTouch(tog_OnTouch)
    lay.addChild(togSin)
    togSaw = droid.toggleCreate('Saw', 'Saw')
    togSaw.setOnTouch(tog_OnTouch)
    lay.addChild(togSaw)
    togSqu = droid.toggleCreate('Square', 'Square')
    togSqu.setOnTouch(tog_OnTouch)
    lay.addChild(togSqu)
    
    #Create 'Start' button.
    btnStart = droid.buttonCreate('Start', 'Start')
    btnStart.setMargins(0, 0.05, 0, 0)
    btnStart.setOnTouch(btnStart_OnTouch)
    lay.addChild(btnStart)
    
    #Create 'Stop' button.
    btnStop = droid.buttonCreate('Stop', 'Stop')
    btnStop.setOnTouch(btnStop_OnTouch)
    lay.addChild(btnStop)
    
    #Create 'Frequency' text label.
    txtFreq = droid.textCreate('Frequency')
    txtFreq.setMargins(0, 0.05, 0, 0)
    lay.addChild(txtFreq)
    
    #Create frequency seek bar.
    skbFreq = droid.seekBarCreate(0.8, -1)
    skbFreq.setRange(1.0)
    skbFreq.setValue(0.5)
    skbFreq.setOnTouch(skbFreq_OnTouch)
    lay.addChild(skbFreq)
    
    #Create 'volume' text label.
    txtVol = droid.textCreate('Volume')
    txtVol.setMargins(0, 0.05, 0, 0)
    lay.addChild(txtVol)
    
    #Create volume seek bar.
    skbVol = droid.seekBarCreate(0.8, -1)
    skbVol.setOnTouch(skbVol_OnTouch)
    skbVol.setRange(1.0)
    skbVol.setValue(0.5)
    lay.addChild(skbVol)
    
    #Add main layout to app.
    droid.addLayout(lay)
    
    #Create Synth object and set initial vals.
    #synth = droid.createSynth('Signal')
    #synth.setVolume(0.5, 0.5)
    skbFreq_OnTouch(skbFreq.getValue())

#Handle wave shape select.
def tog_OnTouch():
    #Clear all toggles.
    togSin.setChecked(False)
    togSaw.setChecked(False)
    togSqu.setChecked(False)
    
    #Set chosen toggle and set wave shape.
    tog = droid.eventPost()['data']['message']
    tog.setText(tog.getText())
    synth.setWaveShape(tog.getText())

#Handle 'Start' button.
def btnStart_OnTouch():
    synth.start()
    #synth.playNote("C2")

#Handle 'Stop' button.
def btnStop_OnTouch():
    synth.stop()

#Called when user changes frequency.
def skbFreq_OnTouch(value):
    freq = minFreq + (maxFreq - minFreq) * value
    synth.setFrequency(freq)
    
    txtFreq.setText(str(round(freq)) + " Hz")

#Called when user touches volume bar.
def skbVol_OnTouch(value):
    synth.setVolume(value, value)