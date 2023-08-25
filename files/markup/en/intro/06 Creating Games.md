## Introduction
Something many coding beginners dream of is creating their own game. And not infrequently they think of a fancy 3D MMO shooter with eyecatching graphics, many levels, quests, characters and an exciting tears moving story on top of that.
The reality looks a bit different but that's actually not a bad thing.

Not that you'll be disappointed at the end: No DroidScript doesn't natively support 3D graphics yet. However it might not be far away. Let's be patient.

## Overview:
For those who dislike reading I'll summarize some facts about the four ways you can create games in DroidScript:

**GUI Games:**
	<green>+</green> Well suited for beginners
	<green>+</green> Easy animations using [Tween.js](https://github.com/tweenjs/tween.js)
	<green>+</green> Intuitive style customization
	<green>+</green> Builtin touch, change etc. events for each element
	<red>**-**</red> Not suited for games with many animations and high framerate

**[Image View](../app/CreateImage.htm):**
	<green>+</green> Supports drawing of basic shapes, text (+ font loading) and image drawing
	<green>+</green> Good for simple games with more complex animations
	<red>**-**</red> Framerate drops quickly with increasing amount of drawing commands
		- basic shapes/text only: 20 draw commands → 30 fps
		- 6 0.3x0.2 images: ~20 fps (the smaller the drawn image the faster the drawing)

**[GLView](../app/CreateGLView.htm):**
	<green>+</green> Very fast rendering
	<green>+</green> Supports drawing of subareas of a larger image (sprite sheets)
	<red>**-**</red> Only supports drawing images

**[Game View](../app/CreateGameView.htm):**
	<green>+</green> Enormously fast rendering (See the [Game BunnyStorm sample]{OpenSample('Game BunnyStorm')})
	<green>+</green> Many builtin game features:
		- Physics using Box2D
		- Sounds using JGAudio
		- SpriteSheets and SpriteSheet animations
		- Easy animations using [Tween.js](https://github.com/tweenjs/tween.js)
		- Bitmap Fonts as game objects using angelcode xml format (visit [BMFont Generator](http://www.angelcode.com/products/bmfont))
	<green>+</green> GL rendering and more with [PIXI.js](https://github.com/pixijs/pixi.js/tree/1.5.3)
		- basic shapes and polygons as game objects
	<green>+</green> Helper functions and main app access through the gfx object
	<red>**-**</red> **Only works on Android 6 and newer**


## GUI Games
The by far easiest way to create games without complex maths and drawing commands is using GUI controls for your game.
There will be few or even no animations at all. Instead the user can interact with the game like in a normal app.

The following sample is a Tic Tac Toe implementation using button controls.
It also demonstrates how UI controls can be animated using the Tween method.

<sample Tic Tac Toe>
var btns = [], round = 1;
var wh = app.GetDisplayWidth() / app.GetDisplayHeight();

//Called when app started.
function OnStart()
{
    app.SetOrientation( "Portrait" );
    app.SetDebug( false );

    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );
    lay.SetBackColor( "#3355cc" );

    txtPlayer = app.CreateText( "Player 1" );
    txtPlayer.SetTextSize( 60, "pl" );
    txtPlayer.SetMargins( 0, 0, 0, 0.1 );
    lay.AddChild( txtPlayer );

    //Create 3×3 Buttons
    for (var i = 0;  i < 3; i++)
    {
        var layH = app.CreateLayout( "Linear", "Horizontal" );
        lay.AddChild( layH );

        for (var j = 0; j < 3; j++)
        {
            var btn = app.CreateButton( "", 0.3, 0.3 * wh, "gray" );
            btn.SetOnTouch( btn_OnTouch );
            btn.SetTextSize( 60, "pl" );
            layH.AddChild( btn );

            btn.data.index = 3 * i + j;
            btns.push( btn );
        }
    }

    app.AddLayout( lay );
}

//Occupy button
function btn_OnTouch()
{
    var player = round % 2 + 1;

	if( this.GetText() != "" ) return;
	else this.SetText("XO"[player - 1]);

	this.Tween( { sw:-1, rot: 360 }, 200 );
    lay.SetTouchable( false );

	//Check winrows if someone won
    var winRows = [ "012", "345", "678", "036", "147", "258", "048", "642" ];
	for(var i in winRows)
	{
		var row = "";
		for(var j = 0; j < 3; j++)
		    row += btns[winRows[i][j]].GetText();

		if(row == "XXX" || row == "OOO")
			return EndGame(player );
	}

	//End game if no more free buttons exists
	if(++round == 9) return EndGame(0);
	txtPlayer.SetText( "Player " + player );
    lay.SetTouchable( true );
}

//Show results and reset
function EndGame(player)
{
    if( player ) app.Alert( "Player" + player + " won!", "Congratulations" );
    else app.Alert( "It's a draw." );

    // reset game
    setTimeout( function() {
        btns.forEach( function(btn) { btn.SetText(""); } );
        lay.SetTouchable( true );
        round = 0;
    }, 2000 );
}
</sample Tic Tac Toe>

## Games with Images
The most basic graphics container is the [Image](../app/CreateImage.htm) control. It also provides the most functionality for drawing like basic shapes, paint style and color, image drawing and even 2D matrix transformations.
Despite the fact that the picture view is very powerful, it is not particularly fast.

You should definitely use [<js>img.SetAutoUpdate(false);</js>](../app/CreateImage.htm#SetAutoUpdate) to be able to control when to update the canvas.

By default you can achieve a maximum framerate of 60 fps, however the framerate decreases relatively fast the more draw commands you use.

The following sample is a simple two-player Pong implementation using basic shapes only.
It also demonstrates how you can handle multiple touches, and how a game can be made fps independent, so that collision detection on low fps is no problem any more.
An [advanced version](https://dspk.justplayer.de/browse/view/69) is available on the dspk store.

<sample Pong>
// User variables
var x1 = 0.5, x2 = 0.5, p1 = 0, p2 = 0;

// Called when app started.
function OnStart()
{
    app.SetOrientation( "Portrait" );

    lay = app.CreateLayout( "Linear" );

    img = app.CreateImage( null, 1, 1 );
    img.SetOnTouch( img_OnTouch );
    img.SetAutoUpdate( false );
    img.SetTextSize( 30 );
    lay.AddChild( img );

    Score();
    app.AddLayout( lay );
    app.Animate( OnAnimate, 50 );
}

// Move user bar
function img_OnTouch( ev ) { x2 = ev.X; }

function crop( v, a, b ) { return v < a ? a : v > b ? b : v; }

// Calculate ball movement for a given deltatime
var x, y, v = 0.5, dx = 0, dy = 0;
function Calculate( dt )
{
    x += v * dx * dt / 1000;
    y += v * dy * dt / 1000;
    v += dt / 5e4;

    if( dy < 0 && y < 0.5)
        x1 += crop( 10 * (x - x1), -2, 2 ) * dt / 1000;

    if( x < 0.02 ) dx = Math.abs(dx);
    if( x > 0.98 ) dx = -Math.abs(dx);
    if( y > 0.04 && y < 0.05 && x > x1 - 0.1 && x < x1 + 0.1 ) {
        dy =  Math.abs( dy );
        dx += 5 * ( x1 - x );
    }
    if( y < 0.96 && y > 0.95 && x > x2 - 0.1 && x < x2 + 0.1 ) {
        dy = -Math.abs( dy );
        dx += 5 * ( x - x2 );
    }
    if( y < 0 ) Score( p2++ );
    if( y > 1 ) Score( p1++ );
}

// Core loop
function OnAnimate( t, dt, nodraw )
{
    // Calculate positions in 4 milliseconds steps
    do { Calculate(4); dt -= 4; }
    while( dt > 0 );

    // Render state
    img.Clear();
    img.DrawCircle( x, y, 0.02 );
    img.DrawText( p1, 0.05, 0.4 );
    img.DrawText( p2, 0.05, 0.6 );
    img.DrawRectangle( x1 - 0.1, 0.03, x1 + 0.1, 0.04 );
    img.DrawRectangle( x2 - 0.1, 0.96, x2 + 0.1, 0.97 );
    img.Update();
}

// Reset after score
function Score()
{
    x = 0.5; dx = 0;
    y = 0.5; dy = 0;
    v = 0.5;
    var PI = Math.PI;

    setTimeout( function()
    {
        var a = Math.random() * PI;
        if( a > PI/2 ) a += PI/2;
        dx = Math.cos( a + PI/4 );
        dy = Math.sin( a + PI/4 );
    }, 1000 );
}
</sample Pong>

## Games with GLView
The third option you have is the so called GLView which is based on the [FastCanvas Plugin](https://github.com/phonegap/phonegap-plugin-fast-canvas)

The GLView has 2 unique properties:
	- Your application runs a full screen canvas
	- Use of the 2D canvas API is limited to transforms and drawing images (see: [FastCanvas API](https://github.com/phonegap/phonegap-plugin-fast-canvas/blob/master/README.md#fastcanvas-api))

That does not mean the GLView is bad. The GLView can render an enormous amount of sprites on a acceptable framerate. (Ie. on my device 500 rendered sprites produced a framerate of about 45 fps).
This makes it perfect for games using images and sprite sheets only.
Additionally the GameView will also run on older devices unlike the last graphic container you'll experience now.

## The GameView

[https://dsgameview.wixsite.com/gameview]()