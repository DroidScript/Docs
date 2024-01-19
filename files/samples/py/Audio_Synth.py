from native import app

#Init some variables.
minFreq = 200
maxFreq = 2000
freq = 1100

#Called when application is started.
def OnStart():
    global layVca, layVcf
    #Lock screen orientation to Portrait.
    app.SetOrientation( "Portrait" )

    #Create main layout that fills the screen.
    lay = app.CreateLayout( "linear", "fillxy,vcenter" )

    #Create wave shape toggle buttons.
    layShape = app.CreateLayout( "linear", "horizontal" )
    layShape.SetPadding( 0,0.01,0,0 )
    layShape.SetSize( 0.9 )
    lay.AddChild( layShape )
    togSin = app.CreateToggle( "Sin", -1,-1, "vertical" )
    togSin.SetOnTouch( tog_OnTouch )
    layShape.AddChild( togSin )
    togSaw = app.CreateToggle( "Saw", -1,-1, "vertical" )
    togSaw.SetChecked( True )
    togSaw.SetOnTouch( tog_OnTouch )
    layShape.AddChild( togSaw )
    togSqu = app.CreateToggle( "Square", -1,-1, "vertical" )
    togSqu.SetOnTouch( tog_OnTouch )
    layShape.AddChild( togSqu )
    togWht = app.CreateToggle( "White", -1,-1, "vertical" )
    togWht.SetOnTouch( tog_OnTouch )
    layShape.AddChild( togWht )

    #Create tabs.
    tabs = app.CreateTabs( "VCA,VCF,PHASER,DELAY", 0.9, 0.68, "" )
    tabs.SetMargins( 0,0.02,0,0 )
    lay.AddChild( tabs )

    #Create VCA controls.
    layVca = tabs.GetLayout( "VCA" )
    CreateVCAControls()

    #Create VCF controls.
    layVcf = tabs.GetLayout( "VCF" )
    CreateVCFControls()

    #Create Phaser controls.
    layPha = tabs.GetLayout( "PHASER" )
    layVca.AddChild( layPha )
    CreatePhaserControls()

    #Create Delay controls.
    layDel = tabs.GetLayout( "DELAY" )
    layVca.AddChild( layDel )
    CreateDelayControls()

    #Create layout for buttons and freqency slider.
    layBtn = app.CreateLayout( "linear", "vertical" )
    layBtn.SetSize( 0.9 )
    layBtn.SetMargins( 0, 0.01, 0, 0 )
    layBtn.SetPadding( 0, 0.01, 0, 0.01 )
    lay.AddChild( layBtn )

    #Create Play image/button.
    btnPlay = app.CreateButton( "Play", 0.6 )
    btnPlay.SetOnTouch( btnPlay_OnTouch )
    btnPlay.SetMargins( 0,0,0,0.01 )
    layBtn.AddChild( btnPlay )

    #Create Frequency text label.
    txtFreq = app.CreateText( "Frequency" )
    layBtn.AddChild( txtFreq )

    #Create frequency seek bar.
    skbFreq = app.CreateSeekBar( 0.8 )
    skbFreq.SetRange( 1.0 )
    skbFreq.SetValue( 0.5 )
    skbFreq.SetOnTouch( skbFreq_OnTouch )
    layBtn.AddChild( skbFreq )

    #Add main layout to app.
    app.AddLayout( lay )

    #Create Synth object and set initial vals.
    synth1 = app.CreateSynth()
    synth1.SetWaveShape( "Saw" )
    synth1.SetVolume( 1.0, 1.0 )

    #Update synth to reflect initial slider positions.
    skbFreq_OnTouch( skbFreq.GetValue() )
    skbVcaAttack_OnTouch( skbVcaAttack.GetValue() )
    skbVcaDecay_OnTouch( skbVcaDecay.GetValue() )
    skbVcaSustain_OnTouch( skbVcaSustain.GetValue() )
    skbVcaRelease_OnTouch( skbVcaRelease.GetValue() )
    skbVcfAttack_OnTouch( skbVcfAttack.GetValue() )
    skbVcfDecay_OnTouch( skbVcfDecay.GetValue() )
    skbVcfSustain_OnTouch( skbVcfSustain.GetValue() )
    skbVcfRelease_OnTouch( skbVcfRelease.GetValue() )
    skbVcfCutoff_OnTouch( skbVcfCutoff.GetValue() )
    skbVcfResonance_OnTouch( skbVcfResonance.GetValue() )
    skbDryWet_OnTouch( skbDryWet.GetValue() )
    skbSweepRate_OnTouch( skbSweepRate.GetValue() )
    skbSweepRange_OnTouch( skbSweepRange.GetValue() )
    skbPhaserFeedback_OnTouch( skbPhaserFeedback.GetValue() )
    skbDelay_OnTouch( skbDelay.GetValue() )
    skbFeedback_OnTouch( skbFeedback.GetValue() )

#Create the VCA controls.
def CreateVCAControls():
    #Create VCA attack controls.
    txtVcaAttack = app.CreateText( "VCA Attack" )
    txtVcaAttack.SetMargins(0,0.04,0,0)
    layVca.AddChild( txtVcaAttack )
    skbVcaAttack = app.CreateSeekBar( 0.7, -1 )
    skbVcaAttack.SetOnTouch( skbVcaAttack_OnTouch )
    skbVcaAttack.SetRange( 1000 )
    skbVcaAttack.SetValue( 10 )
    layVca.AddChild( skbVcaAttack )

    #Create VCA decay controls.
    txtVcaDecay = app.CreateText( "VCA Decay" )
    layVca.AddChild( txtVcaDecay )
    skbVcaDecay = app.CreateSeekBar( 0.7, -1 )
    skbVcaDecay.SetOnTouch( skbVcaDecay_OnTouch )
    skbVcaDecay.SetRange( 1000 )
    skbVcaDecay.SetValue( 500 )
    layVca.AddChild( skbVcaDecay )

    #Create VCA sustain controls.
    txtVcaSustain = app.CreateText( "VCA Sustain" )
    layVca.AddChild( txtVcaSustain )
    skbVcaSustain = app.CreateSeekBar( 0.7, -1 )
    skbVcaSustain.SetOnTouch( skbVcaSustain_OnTouch )
    skbVcaSustain.SetRange( 1.0 )
    skbVcaSustain.SetValue( 0.5 )
    layVca.AddChild( skbVcaSustain )

    #Create VCA release controls.
    txtVcaRelease = app.CreateText( "VCA Release" )
    layVca.AddChild( txtVcaRelease )
    skbVcaRelease = app.CreateSeekBar( 0.7, -1 )
    skbVcaRelease.SetOnTouch( skbVcaRelease_OnTouch )
    skbVcaRelease.SetRange( 1000 )
    skbVcaRelease.SetValue( 500 )
    layVca.AddChild( skbVcaRelease )

#Create the VCF controls.
def CreateVCFControls():
    #Create Enable check box.
    chkVcf = app.CreateCheckBox( "" )
    chkVcf.SetMargins( 0,0.02,0,0.02 )
    chkVcf.SetOnTouch( chkVcf_OnTouch )
    layVcf.AddChild( chkVcf )

    #Create VCF attack controls.
    txtVcfAttack = app.CreateText( "VCF Attack" )
    layVcf.AddChild( txtVcfAttack )
    skbVcfAttack = app.CreateSeekBar( 0.7, -1 )
    skbVcfAttack.SetOnTouch( skbVcfAttack_OnTouch )
    skbVcfAttack.SetRange( 1000 )
    skbVcfAttack.SetValue( 200 )
    layVcf.AddChild( skbVcfAttack )

    #Create VCF decay controls.
    txtVcfDecay = app.CreateText( "VCF Decay" )
    layVcf.AddChild( txtVcfDecay )
    skbVcfDecay = app.CreateSeekBar( 0.7, -1 )
    skbVcfDecay.SetOnTouch( skbVcfDecay_OnTouch )
    skbVcfDecay.SetRange( 1000 )
    skbVcfDecay.SetValue( 500 )
    layVcf.AddChild( skbVcfDecay )

    #Create VCF sustain controls.
    txtVcfSustain = app.CreateText( "VCF Sustain" )
    layVcf.AddChild( txtVcfSustain )
    skbVcfSustain = app.CreateSeekBar( 0.7, -1 )
    skbVcfSustain.SetOnTouch( skbVcfSustain_OnTouch )
    skbVcfSustain.SetRange( 1.0 )
    skbVcfSustain.SetValue( 0.5 )
    layVcf.AddChild( skbVcfSustain )

    #Create VCF release controls.
    txtVcfRelease = app.CreateText( "VCF Release" )
    layVcf.AddChild( txtVcfRelease )
    skbVcfRelease = app.CreateSeekBar( 0.