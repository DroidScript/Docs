
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

## Games with Images
The most basic graphics container is the [Image](../app/CreateImage.htm) control. It also provides the most functionality for drawing like basic shapes, paint style and color, image drawing and even 2D matrix transformations.
Despite the fact that the picture view is very powerful, it is not particularly fast.

You should definitely use [<js>img.SetAutoUpdate(false);</js>](../app/CreateImage.htm#SetAutoUpdate) to be able to control when to update the canvas.

By default you can achieve a maximum framerate of 60 fps, however the framerate decreases relatively fast the more draw commands you use.

The following sample is a simple two-player Pong implementation using basic shapes only.
It also demonstrates how you can handle multiple touches, and how a game can be made fps independent, so that collision detection on low fps is no problem any more.
An [advanced version](https://dspk.justplayer.de/browse/view/69) is available on the dspk store.

<sample Pong>

## Games with GLView
The third option you have is the so called GLView which is based on the [FastCanvas Plugin](https://github.com/phonegap/phonegap-plugin-fast-canvas)

The GLView has 2 unique properties:
	- Your application runs a full screen canvas
	- Use of the 2D canvas API is limited to transforms and drawing images (see: [FastCanvas API](https://github.com/phonegap/phonegap-plugin-fast-canvas/blob/master/README.md#fastcanvas-api))

That does not mean the GLView is bad. The GLView can render an enormous amount of sprites on a acceptable framerate. (Ie. on my device 500 rendered sprites produced a framerate of about 45 fps).
This makes it perfect for games using images and sprite sheets only.
Additionally the GameView will also run on older devices unlike the last graphic container you'll experience now.

## The GameView
