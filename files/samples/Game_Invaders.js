//This sample demonstrates how to create a simple game by moving
//images around within an absolute layout. 
//
//Note: It is recomended that you use the 'canvas' drawing method 
//demonstrated by the 'Pong' and 'Bounce' samples for any games 
//which include more than a few objects moving at high speed.
//(The advantage of this method however is that you can more
//easily handle touch events on each object).


//Create global variables.
var level=1, clear=false, gameOver=false;
var missileFlying=false, explodeFrame=1;
var xInv=0.4, yInv=0.02, wInv=0.15, hInv=0.08, dirInv=1;
var xDef=0.4, yDef=0.8, dirDef=1, xDefLast=0;
var xMis=0, yMis=0, wMis=0.05, hMis=0.03;

//Called when application is started.
function OnStart()
{
	//Lock screen orientation to Portrait.
	app.SetOrientation( "Portrait" )

	//Create layout containing a background image.
	layBack = app.CreateLayout( "Linear", "FillXY" )
	imgBack = app.CreateImage( "/Sys/Img/BlackBack.jpg", 1.0, 1.0 )
	imgBack.SetOnTouchDown( imgBack_OnTouchDown )
	layBack.AddChild( imgBack )

	//Create an Absolute layout. (So we can position items 
	//at a specific x y location)
	//Note: We set the 'TouchThrough' option to allow touch 
	//events to pass through the top layout to the background layout.
	lay = app.CreateLayout( "Absolute", "FillXY,TouchThrough" ) 

	//Create a text control to show titles/messages.
	txt = app.CreateText( "Invaders", 1,0.1, "bold" )
	txt.SetPosition( 0, 0.4 )
	txt.SetTextSize( 48 )
	txt.SetTextColor( "#ffBEDF51" )
	lay.AddChild( txt )

	//Create an invader image at top of screen.
	imgInvader = app.CreateImage( "/Sys/Img/Icon.png", wInv )
	imgInvader.SetPosition( xInv, yInv )
	lay.AddChild( imgInvader )

	//Create a defender image at bottom of screen.
	imgDefender = app.CreateImage( "/Sys/Img/Hello.png", 0.15 )
	imgDefender.SetPosition( xDef, yDef )
	lay.AddChild( imgDefender )

	//Create a missile image (hidden at first).
	imgMissile = app.CreateImage( "/Sys/Img/Hello.png", wMis )
	imgMissile.SetVisibility( "Hide" )
	lay.AddChild( imgMissile )

	//Create an explosion image (hidden at first).
	imgExplode = app.CreateImage( "/Sys/Img/Explode1.png", wInv*2 )
	imgExplode.SetVisibility( "Hide" )
	lay.AddChild( imgExplode )

	//Add layouts to app. 
	app.AddLayout( layBack )
	app.AddLayout( lay )

	//Create Synth object for invader sounds.
	synthInv = app.CreateSynth( "VCA,VCF" )
	synthInv.SetWaveShape( "Saw" )
	//synthInv.SetVcaAttack( 200 ) 
	synthInv.SetVca( 200, 100, 0.25, 1000 )

	//Create Synth object for missile sounds.
	synthDef = app.CreateSynth( "VCA,VCF" )
	synthDef.SetWaveShape( "White" )
	synthDef.SetVca( 1, 900, 0, 0 ) 
	synthDef.SetVcf( 10, 500, 0, 0, 1000, 0.85, 2.0 ) 

	//Create Synth object for explosion sounds.
	synthExp = app.CreateSynth( "VCA,VCF" )
	synthExp.SetWaveShape( "White" )
	synthExp.SetVca( 1, 1, 0.8, 800 ) 
	synthExp.SetVcf( 1, 1, 0, 400, 1000, 0.85, 2.0 ) 

	//Create Synth object for game over sound.
	synthEnd = app.CreateSynth( "VCA,VCF" )
	synthEnd.SetWaveShape( "Saw" )
	synthEnd.SetVca( 10, 400, 0.8, 100 )
	synthEnd.SetVcf( 10, 400, 0.8, 100, 1000, 0.85, 2.0 ) 

	//Create and start sensor object in Orientation mode.
	orient = app.CreateSensor( "Orientation" )
	orient.Start()

	//Clear the initial message after 1 second.
	setTimeout( ClearMessage, 1000 )

	//Call the 'UpdateInvader' function in 1 sec.
	setTimeout( UpdateInvader, 1000 )
	
	//Call the 'UpdateDefender' function in 1 sec.
	setTimeout( UpdateDefender, 1000 )
}

//Update the position of the invader.
function UpdateInvader()
{
	//Do nothing if invaders are 
	//all dead or game over.
	if( clear || gameOver ) return;

	//Control direction of invader.
	var moveDown = false;
	if( xInv > 0.8 ) { dirInv =-1; moveDown=true; }
	if( xInv < 0.05 ) { dirInv = 1; moveDown=true; }

	//Move the invader.
	xInv = xInv + 0.05 * dirInv;
	if( moveDown ) yInv = yInv + 0.1;
	imgInvader.SetPosition( xInv, yInv )

	//Play invader sound.
	synthInv.PlayTone( 60, 1000 )

	//Set the invader speed.
	var speed = 400 - level * 40;
	if( speed < 50 ) speed = 50;

	//Randomize direction at higher levels.
	var val = Math.random() * (30 - level)
	if( val < 1.0 ) dirInv = -dirInv;

	//Check if invader made it to bottom
	if( yInv > 0.8 )
		GameOver()

	//Call this function again in less than 400 ms;
	setTimeout( UpdateInvader, speed )
}

//Called when 'Orientation' sensor changes.
function UpdateDefender()
{
	//Get current roll angle.
	roll = orient.GetRoll()
	
	//If tilted less than 5 degrees.
	if( Math.abs( roll ) > 5 ) 
	{
		//Alter x posn of defender if device tilted.
		if( roll > 0 ) xDef += 0.05; 
		else xDef -= 0.05; 

		//Limit range of defender's x posn.
		if( xDef < 0.05 ) xDef = 0.05;
		else if( xDef > 0.8 ) xDef = 0.8;

		//Move defender if x posn has changed.
		if( xDef != xDefLast )
			imgDefender.SetPosition( xDef, yDef )
		xDefLast = xDef;
	}
	
	//Call this function again in 100 ms;
	setTimeout( UpdateDefender, 100 )
}

//Handle user touching background image.
function imgBack_OnTouchDown()
{
	if( !gameOver ) 
	{
		//Only one missile at a time.
		if( missileFlying || clear==true ) 
			return;
		
		//Play fire sound.
		synthDef.PlayTone( 1000, 600 )
	    
		//Position and show missile.
		xMis = xDef+0.05;
		yMis = yDef-0.05;
		imgMissile.SetPosition( xMis, yMis )
		imgMissile.SetVisibility( "Show" )
	    
		//Start timer to move missile.
		missileFlying = true;
		setTimeout( UpdateMissile, 100 )
	}
	else {
		//Reset game (if allowed).
		if( resetEnabled ) 
			Reset()
	}
}

//Update the missile posn.
function UpdateMissile()
{
	//Move missile upwards.
	yMis -= 0.02;
	imgMissile.SetPosition( xMis, yMis )

	//Get center coords of invader and missile.
	var yCenterInv = (yInv+hInv)/2;
	var xCenterInv = (xInv+wInv)/2;
	var yCenterMis = (yMis+hMis)/2;
	var xCenterMis = (xMis+wMis)/2;

	//Check for collision with invader.
	if( Math.abs(yCenterInv-yCenterMis) < 0.03 && 
		Math.abs(xCenterInv-xCenterMis) < 0.03 ) 
	{
		//Hide invader and missile.
		imgInvader.SetVisibility( "Hide" )
		imgMissile.SetVisibility( "Hide" )
		clear = true;
	    
		//Show explosion and play a sound.
		Explode()
		synthExp.PlayTone( 100, 1000 )
	    
		//Trigger next level of game after 2 secs.
		setTimeout( NextLevel, 2000 )
		return;
	}
	//Call this function again in 25 ms if
	//missile is still on screen.
	if( yMis > -0.05 )
		setTimeout( UpdateMissile, 40 )
	else
		missileFlying = false;
}

//Start next level of game.
function NextLevel()
{
	//Increase level and show message.
	level++;
	ShowMessage( "Level " + level, 1000 )

	//Reset state of invader.
	xInv=0.4, yInv=0.02;
	imgInvader.SetPosition( xInv, yInv )
	imgInvader.SetVisibility( "Show" )

	//Reset flags.
	clear = false;
	missileFlying = false;
	gameOver = false;

	//Call the 'UpdateInvader' function.
	//(start the invasion again).
	UpdateInvader()
}


//Reset the game.
function Reset()
{
	level=0; 
	NextLevel() 
}

//Show an animated explosion.
function Explode( state )
{
	//If we have not shown all explosion frames.
	if( explodeFrame < 6 ) 
	{
		//Position and show explosion image.
		var file = "Explode" + explodeFrame + ".png";
		imgExplode.SetImage( "/Sys/Img/" + file, wInv*2 )
		imgExplode.SetPosition( xInv-wInv/4, yInv-wInv/4 )
		imgExplode.SetVisibility( "Show" )
		
		//Increment frame and call this func again.
		explodeFrame++;
		setTimeout( Explode, 100 )
	}
	else { 
		//Explosion has finished, so reset
		//frame counter and hide image.
		explodeFrame = 1;
		imgExplode.SetVisibility( "Hide" )
	}
}

//Do game over screen.
function GameOver()
{
	//Play little tune.
	synthEnd.SetNoteLength( 2.5 )
	synthEnd.PlayMidiTune( "46:16,40:16,35:4" )

	//Show message.
	gameOver = true;
	ShowMessage( "Game Over!" )

	//Prevent user resetting game 3 seconds.
	resetEnabled = false;
	setTimeout( "resetEnabled=true", 3000 )
}

//Show message for a given time in millisecs.
function ShowMessage( msg, duration )
{
	txt.SetText( msg )
	if( duration ) 
		setTimeout( ClearMessage, duration )
}

//Clear the current message.
function ClearMessage()
{
	txt.SetText("")
}
