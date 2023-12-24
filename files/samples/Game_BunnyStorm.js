
//Configure app for landscape game mode.
cfg.Game, cfg.Landscape

//Variables
var bunnys = []
var gravity = 1/gfx.height
var startBunnyCount = 3
var amount = 10
var isAdding = false

//Handle game loading.
function OnLoad()
{
	gfx.SetBackColor( 0xffffff )
	
	//Pre-load the bunny texture.
	wabbitTexture = gfx.CreateTexture( "/Sys/Img/Bunny.png" )
    
	//Handle touch events.
	gfx.SetOnTouchDown( function(ev){isAdding = true;} )
	gfx.SetOnTouchUp( function(ev){isAdding = false;} )
}

//Called when game has loaded.
function OnReady()
{
	//Add some bunnies.
	for (var i = 0; i < startBunnyCount; i++) 
	    AddBunny()
	
    //Start animating
	gfx.Play()
}

//Add a bunny to scene.
function AddBunny() 
{
	var bunny = gfx.CreateBasicSprite( wabbitTexture )
	bunny.vx = (Math.random()*10) / gfx.width
	bunny.vy = ((Math.random()*10)-5) / gfx.height
	
	bunny.x = bunny.y = 0
	bunnys.push(bunny)
	
	gfx.AddSprite( bunny )
}

//Update bunny positions.
function OnAnimate()
{
	//Add more bunnies when touched
	if( isAdding )
	{
		for (var i = 0; i < amount; i++) 
			AddBunny()
	}
	
	//Bounce bunnies.
	for (var i = 0; i < bunnys.length; i++) 
	{
		var bunny = bunnys[i]
		bunny.x += bunny.vx
		bunny.y += bunny.vy
		bunny.vy += gravity
	
		if (bunny.x > 1)
		{
			bunny.vx *= -1
			bunny.x = 1
		}
		else if (bunny.x < 0)
		{
			bunny.vx *= -1
			bunny.x = 0
		}
		
		if (bunny.y > 1)
		{
			bunny.vy *= -0.85
			bunny.y = 1
			if (Math.random() > 0.5)
				bunny.vy -= Math.random() * 6 / gfx.height
		} 
		else if (bunny.y < 0)
		{
			bunny.vy = 0;
			bunny.y = 0
		}
	}
}

