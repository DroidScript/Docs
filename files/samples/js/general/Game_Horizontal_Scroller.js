
//Configure app for landscape game mode.
cfg.Game, cfg.Portrait

//Handle game loading.
function OnLoad()
{
    //Add physics and enclose scene with roof and floor.
    gfx.AddPhysics( 50 )
    gfx.Enclose( -1, "top,bottom" )

	//Create our sprite images.
    sky = gfx.CreateBackground( "/Sys/Img/Sky.jpg", "stretch" )
    bunny = gfx.CreateSprite( "/Sys/Img/Bunny.png", "bunnies" )
}

//Called when game has loaded.
function OnReady()
{
	//Set background.
	gfx.AddBackground( sky )
	
	//Add character and set physics properties.
    //(groupId, type, density, bounce, friction)
    gfx.AddSprite( bunny, 0.1, 0.3, 0.1 )
	bunny.SetPhysics( 1, "Dynamic" )

	//Start the game.
    gfx.Play()
}

//Update game objects.
//(called for every frame)
function OnAnimate( time, timeDiff ) 
{
	//Make background slide to the left a small amount.
	sky.Scroll( -0.005, 0 )
}

//Handle screen touches and key presses.
function OnControl( touchState, touchX, touchY, keyState, key )
{
	//Increase bunny upward velocity when screen touched.
	if( touchState=="Up" ) bunny.AddVelocity( 0, -1.5 )
}

