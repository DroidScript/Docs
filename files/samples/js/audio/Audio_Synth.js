//This sample demonstrates all available 
//functionality of the Software Synthesizer.
//(This sample can be useful for creating game sounds)

//Init some variables.
var minFreq = 200; 
var maxFreq = 2000; 
var freq = 1100;

//Called when application is started.
function OnStart()
{ 
	//Lock screen orientation to Portrait.
	app.SetOrientation( "Portrait" )

	//Create main layout that fills the screen.
	lay = app.CreateLayout( "Linear", "FillXY,VCenter" )

	//Create wave shape toggle buttons.
	layShape = app.CreateLayout( "Linear", "Horizontal" )
	layShape.SetPadding( 0,0.01,0,0 )
	layShape.SetSize( 0.9 )
	lay.AddChild( layShape )
	togSin = app.CreateToggle( "Sin", -1,-1, "vertical" )
	togSin.SetOnTouch( tog_OnTouch )
	layShape.AddChild( togSin )
	togSaw = app.CreateToggle( "Saw", -1,-1, "vertical" )
	togSaw.SetChecked( true )
	togSaw.SetOnTouch( tog_OnTouch )
	layShape.AddChild( togSaw )
	togSqu = app.CreateToggle( "Square", -1,-1, "vertical" )
	togSqu.SetOnTouch( tog_OnTouch )
	layShape.AddChild( togSqu )
	togWht = app.CreateToggle( "White", -1,-1, "vertical" )
	togWht.SetOnTouch( tog_OnTouch )
	layShape.AddChild( togWht )

	//Create tabs.
	tabs = app.CreateTabs( "VCA,VCF,PHASER,DELAY", 0.9, 0.68, "" )
	tabs.SetMargins( 0,0.02,0,0 )
	lay.AddChild( tabs )     

	//Create VCA controls.
	layVca = tabs.GetLayout( "VCA" )
	CreateVCAControls()

	//Create VCF controls.
	layVcf = tabs.GetLayout( "VCF" )
	CreateVCFControls()

	//Create Phaser controls.
	layPha = tabs.GetLayout( "PHASER" )
	layVca.AddChild( layPha )
	CreatePhaserControls()

	 //Create Delay controls.
	layDel = tabs.GetLayout( "DELAY" )
	layVca.AddChild( layDel )
	CreateDelayControls()

	//Create layout for buttons and freqency slider.
	layBtn = app.CreateLayout( "Linear", "Vertical" )
	layBtn.SetSize( 0.9 )
	layBtn.SetMargins( 0, 0.01, 0, 0 )
	layBtn.SetPadding( 0, 0.01, 0, 0.01 )
	lay.AddChild( layBtn )

	//Create Play image/button.
	btnPlay = app.CreateButton( "Play", 0.6 )
	btnPlay.SetOnTouch( btnPlay_OnTouch )
	btnPlay.SetMargins( 0,0,0,0.01 )
	layBtn.AddChild( btnPlay ) 

	//Create Frequency text label.
	txtFreq = app.CreateText( "Frequency" )
	layBtn.AddChild( txtFreq )

	//Create frequency seek bar.
	skbFreq = app.CreateSeekBar( 0.8 )
	skbFreq.SetRange( 1.0 )
	skbFreq.SetValue( 0.5 )
	skbFreq.SetOnTouch( skbFreq_OnTouch )
	layBtn.AddChild( skbFreq )

	//Add main layout to app.
	app.AddLayout( lay )

	//Create Synth object and set initial vals.
	synth1 = app.CreateSynth()
	synth1.SetWaveShape( "Saw" )
	synth1.SetVolume( 1.0, 1.0 )

	//Update synth to reflect initial slider positions.
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
}

//Create the VCA controls.
function CreateVCAControls()
{
	//Create VCA attack controls.
	txtVcaAttack = app.CreateText( "VCA Attack" )
	txtVcaAttack.SetMargins(0,0.04,0,0)
	layVca.AddChild( txtVcaAttack )
	skbVcaAttack = app.CreateSeekBar( 0.7, -1 )
	skbVcaAttack.SetOnTouch( skbVcaAttack_OnTouch )
	skbVcaAttack.SetRange( 1000 )
	skbVcaAttack.SetValue( 10 )
	layVca.AddChild( skbVcaAttack )

	//Create VCA decay controls.
	txtVcaDecay = app.CreateText( "VCA Decay" )
	layVca.AddChild( txtVcaDecay )
	skbVcaDecay = app.CreateSeekBar( 0.7, -1 )
	skbVcaDecay.SetOnTouch( skbVcaDecay_OnTouch )
	skbVcaDecay.SetRange( 1000 )
	skbVcaDecay.SetValue( 500 )
	layVca.AddChild( skbVcaDecay )

	//Create VCA sustain controls.
	txtVcaSustain = app.CreateText( "VCA Sustain" )
	layVca.AddChild( txtVcaSustain )
	skbVcaSustain = app.CreateSeekBar( 0.7, -1 )
	skbVcaSustain.SetOnTouch( skbVcaSustain_OnTouch )
	skbVcaSustain.SetRange( 1.0 )
	skbVcaSustain.SetValue( 0.5 )
	layVca.AddChild( skbVcaSustain )

	//Create VCA release controls.
	txtVcaRelease = app.CreateText( "VCA Release" )
	layVca.AddChild( txtVcaRelease )
	skbVcaRelease = app.CreateSeekBar( 0.7, -1 )
	skbVcaRelease.SetOnTouch( skbVcaRelease_OnTouch )
	skbVcaRelease.SetRange( 1000 )
	skbVcaRelease.SetValue( 500 )
	layVca.AddChild( skbVcaRelease )
}

//Create the VCF controls.
function CreateVCFControls()
{
	//Create Enable check box.
	chkVcf = app.CreateCheckBox( "" )
	chkVcf.SetMargins( 0,0.02,0,0.02 )
	chkVcf.SetOnTouch( chkVcf_OnTouch )
	layVcf.AddChild( chkVcf )

	//Create VCF attack controls.
	txtVcfAttack = app.CreateText( "VCF Attack" )
	layVcf.AddChild( txtVcfAttack )
	skbVcfAttack = app.CreateSeekBar( 0.7, -1 )
	skbVcfAttack.SetOnTouch( skbVcfAttack_OnTouch )
	skbVcfAttack.SetRange( 1000 )
	skbVcfAttack.SetValue( 200 )
	layVcf.AddChild( skbVcfAttack )

	//Create VCF decay controls.
	txtVcfDecay = app.CreateText( "VCF Decay" )
	layVcf.AddChild( txtVcfDecay )
	skbVcfDecay = app.CreateSeekBar( 0.7, -1 )
	skbVcfDecay.SetOnTouch( skbVcfDecay_OnTouch )
	skbVcfDecay.SetRange( 1000 )
	skbVcfDecay.SetValue( 500 )
	layVcf.AddChild( skbVcfDecay )

	//Create VCF sustain controls.
	txtVcfSustain = app.CreateText( "VCF Sustain" )
	layVcf.AddChild( txtVcfSustain )
	skbVcfSustain = app.CreateSeekBar( 0.7, -1 )
	skbVcfSustain.SetOnTouch( skbVcfSustain_OnTouch )
	skbVcfSustain.SetRange( 1.0 )
	skbVcfSustain.SetValue( 0.5 )
	layVcf.AddChild( skbVcfSustain )

	//Create VCF release controls.
	txtVcfRelease = app.CreateText( "VCF Release" )
	layVcf.AddChild( txtVcfRelease )
	skbVcfRelease = app.CreateSeekBar( 0.7, -1 )
	skbVcfRelease.SetOnTouch( skbVcfRelease_OnTouch )
	skbVcfRelease.SetRange( 1000 )
	skbVcfRelease.SetValue( 500 )
	layVcf.AddChild( skbVcfRelease )

	//Create VCF cutoff controls.
	txtVcfCutoff = app.CreateText( "VCF Cutoff" )
	layVcf.AddChild( txtVcfCutoff )
	skbVcfCutoff = app.CreateSeekBar( 0.7, -1 )
	skbVcfCutoff.SetOnTouch( skbVcfCutoff_OnTouch )
	skbVcfCutoff.SetRange( 2000 )
	skbVcfCutoff.SetValue( 1500 )
	layVcf.AddChild( skbVcfCutoff )

	//Create VCF resonance controls.
	txtVcfResonance = app.CreateText( "VCF Resonance" )
	layVcf.AddChild( txtVcfResonance)
	skbVcfResonance = app.CreateSeekBar( 0.7, -1 )
	skbVcfResonance.SetOnTouch( skbVcfResonance_OnTouch )
	skbVcfResonance.SetRange( 1.0 )
	skbVcfResonance.SetValue( 0.75 )
	layVcf.AddChild( skbVcfResonance )
}

//Create Phaser controls.
function CreatePhaserControls()
{
	//Create Enable check box.
	chkPhaser = app.CreateCheckBox( "" )
	chkPhaser.SetMargins( 0,0.02,0,0.02 )
	chkPhaser.SetOnTouch( chkPhaser_OnTouch )
	layPha.AddChild( chkPhaser )

	//Create Dry/Wet controls.
	txtDryWet = app.CreateText( "Dry/Wet" )
	layPha.AddChild( txtDryWet )
	skbDryWet = app.CreateSeekBar( 0.7, -1 )
	skbDryWet.SetOnTouch( skbDryWet_OnTouch )
	skbDryWet.SetRange( 1.0 )
	skbDryWet.SetValue( 0.5 )
	layPha.AddChild( skbDryWet )

	//Create Sweep rate controls.
	txtSweepRate = app.CreateText( "Sweep Rate" )
	layPha.AddChild( txtSweepRate )
	skbSweepRate = app.CreateSeekBar( 0.7, -1 )
	skbSweepRate.SetOnTouch( skbSweepRate_OnTouch )
	skbSweepRate.SetRange( 5.0 )
	skbSweepRate.SetValue( 2.0 )
	layPha.AddChild( skbSweepRate )

	//Create Sweep range controls.
	txtSweepRange = app.CreateText( "Sweep Range" )
	layPha.AddChild( txtSweepRange )
	skbSweepRange = app.CreateSeekBar( 0.7, -1 )
	skbSweepRange.SetOnTouch( skbSweepRange_OnTouch )
	skbSweepRange.SetRange( 7.0 )
	skbSweepRange.SetValue( 5.0 )
	layPha.AddChild( skbSweepRange )

	//Ceate Feedback controls.
	txtPhaserFeedback = app.CreateText( "Feedback" )
	layPha.AddChild( txtPhaserFeedback)
	skbPhaserFeedback = app.CreateSeekBar( 0.7, -1 )
	skbPhaserFeedback.SetOnTouch( skbPhaserFeedback_OnTouch )
	skbPhaserFeedback.SetRange( 0.5 )
	skbPhaserFeedback.SetValue( 0.1 )
	layPha.AddChild( skbPhaserFeedback )
}

//Create delay controls.
function CreateDelayControls()
{
	//Create Enable check box.
	chkDelay = app.CreateCheckBox( "" )
	chkDelay.SetMargins( 0,0.02,0,0.02 )
	chkDelay.SetOnTouch( chkDelay_OnTouch )
	layDel.AddChild( chkDelay )

	//Create Delay controls.
	txtDelay = app.CreateText( "Delay" )
	layDel.AddChild( txtDelay )
	skbDelay = app.CreateSeekBar( 0.7, -1 )
	skbDelay.SetOnTouch( skbDelay_OnTouch )
	skbDelay.SetRange( 1000 )
	skbDelay.SetValue( 40 )
	layDel.AddChild( skbDelay )

	//Create feedback controls.
	txtFeedback = app.CreateText( "Feedback" )
	layDel.AddChild( txtFeedback)
	skbFeedback = app.CreateSeekBar( 0.7, -1 )
	skbFeedback.SetOnTouch( skbFeedback_OnTouch )
	skbFeedback.SetRange( 1.0 )
	skbFeedback.SetValue( 0.1 )
	layDel.AddChild( skbFeedback )
}

//Handle wave shape select.
function tog_OnTouch()
{
	//Clear all toggles.
	togSin.SetChecked( false )
	togSaw.SetChecked( false )
	togSqu.SetChecked( false )
	togWht.SetChecked( false )

	//Set chosen toggle and set wave shape.
	var tog = this;
	tog.SetChecked( true )
	synth1.SetWaveShape( tog.GetText() )
}

//Handle Play button down.
function btnPlay_OnTouch() 
{
	synth1.PlayTone( freq, 2000 )
}

//Handle Stop button.
function btnStop_OnTouch() 
{
	synth2.PlayTone( freq+440, 2000 )
}

//Called when user changes frequency.
function skbFreq_OnTouch( val )
{
	freq = minFreq + (maxFreq - minFreq) * val;
	synth1.SetFrequency( freq )

	txtFreq.SetText( "Frequency " + Math.round(freq) + "Hz" )
}


//Called when user touches VCA attack bar.
function skbVcaAttack_OnTouch( val )
{ 
	txtVcaAttack.SetText( "VCA Attack "+val+"ms" )
	synth1.SetVcaAttack( val ) 
}

//Called when user touches VCA decay bar.
function skbVcaDecay_OnTouch( val )
{ 
	txtVcaDecay.SetText( "VCA Decay "+val+"ms" )
	synth1.SetVcaDecay( val ) 
}

//Called when user touches VCA sustain bar.
function skbVcaSustain_OnTouch( val )
{ 
	txtVcaSustain.SetText( "VCA Sustain "+val )
	synth1.SetVcaSustain( val ) 
}

//Called when user touches VCA release bar.
function skbVcaRelease_OnTouch( val )
{ 
	txtVcaRelease.SetText( "VCA Release "+val+"ms" )
	synth1.SetVcaRelease( val ) 
}

//Called when user enables/disables VCF.
function chkVcf_OnTouch( val )
{
	synth1.SetVcfEnabled( val )
}

//Called when user touches VCF attack bar.
function skbVcfAttack_OnTouch( val )
{ 
	txtVcfAttack.SetText( "VCF Attack "+val+"ms" )
	synth1.SetVcfAttack( val ) 
}

//Called when user touches VCF decay bar.
function skbVcfDecay_OnTouch( val )
{ 
	txtVcfDecay.SetText( "VCF Decay "+val+"ms" )
	synth1.SetVcfDecay( val ) 
}

//Called when user touches VCF sustain bar.
function skbVcfSustain_OnTouch( val )
{ 
	txtVcfSustain.SetText( "VCF Sustain "+val )
	synth1.SetVcfSustain( val ) 
}

//Called when user touches VCF release bar.
function skbVcfRelease_OnTouch( val )
{ 
	txtVcfRelease.SetText( "VCF Release "+val+"ms" )
	synth1.SetVcfRelease( val ) 
}

//Called when user touches VCF cutoff bar.
function skbVcfCutoff_OnTouch( val )
{ 
	txtVcfCutoff.SetText( "VCF Cutoff "+val+"Hz" )
	synth1.SetVcfCutoff( val ) 
}

//Called when user touches VCF sustain bar.
function skbVcfResonance_OnTouch( val )
{ 
	txtVcfResonance.SetText( "VCF Resonance "+val )
	synth1.SetVcfResonance( val ) 
}

//Called when user enables/disables Phaser.
function chkPhaser_OnTouch( val )
{
	synth1.SetPhaserEnabled( val )
}

//Called when user changes Phaser Dry/Wet.
function skbDryWet_OnTouch( val )
{
	txtDryWet.SetText( "Dry/Wet "+val )
	synth1.SetPhaserDryWet( val ) 
}

//Called when user changes Phaser Sweep Rate.
function skbSweepRate_OnTouch( val )
{
	txtSweepRate.SetText( "Sweep Rate "+val )
	synth1.SetPhaserRate( val ) 
}

//Called when user changes Phaser Sweep Range.
function skbSweepRange_OnTouch( val )
{
	txtSweepRange.SetText( "Sweep Range "+val )
	synth1.SetPhaserRange( val ) 
}

//Called when user changes Phaser Feedback.
function skbPhaserFeedback_OnTouch( val )
{
	txtPhaserFeedback.SetText( "Sweep Feedback "+val )
	synth1.SetPhaserFeedback( val ) 
}

//Called when user enables/disables Delay.
function chkDelay_OnTouch( val )
{
	synth1.SetDelayEnabled( val )
}

//Called when user touches Delay bar.
function skbDelay_OnTouch( val )
{
	txtDelay.SetText( "Delay "+val )
	synth1.SetDelay( val )
}

//Called when user touches Delay Feedback bar.
function skbFeedback_OnTouch( val )
{
	txtFeedback.SetText( "Feedback "+val )
	synth1.SetFeedback( val )
}
