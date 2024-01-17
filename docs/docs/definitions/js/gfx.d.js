/** @type {DsGfx} */
var gfx;
/** @typedef {GfxPhysics | GfxBackground | GfxCircle | GfxEllipse | GfxPolygon | GfxRectangle | GfxSound | GfxSprite | GfxSpriteSheet | GfxText} GameObject */
/** @typedef {GameObject} gvo game object */

class DsGfx {

	/**
	 * Adds a background to the game
	 * @param {GfxBackground} obj 
	 * @return {void} 
	 */
	AddBackground(obj) {}

	/**
	 * Adds a basic shape object to the game
	 * @param {obj} obj 
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} w 
	 * @param {num_frc} h 
	 * @param {num_rad} angle 
	 * @param {num_frc} alpha 
	 * @return {void} 
	 */
	AddGraphic(obj, x, y, w, h, angle, alpha) {}

	/**
	 * Adds physics to the game
	 * @param {num} gravity 
	 * @param {num} accuracy 
	 * @param {num} sleep 
	 * @return {GfxPhysics} 
	 */
	AddPhysics(gravity, accuracy, sleep) {}

	/**
	 * Adds a sprite object
	 * @param {GfxSprite} sprite 
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} w 
	 * @param {num_frc} h 
	 * @param {num_frc} angle 
	 * @param {num_frc} alpha 
	 * @return {void} 
	 */
	AddSprite(sprite, x, y, w, h, angle, alpha) {}

	/**
	 * Adds a text object
	 * @param {GfxText} obj 
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} angle 
	 * @param {num_frc} alpha 
	 * @return {void} 
	 */
	AddText(obj, x, y, angle, alpha) {}

	/**
	 * Executes code in the main app
	 * @param {str_jsc} js 
	 * @return {void} 
	 */
	AppExec(js) {}

	/**
	 * The display aspect ratio
	 * @type {num} 
	 */
	aspect;

	/**
	 * Returns a new background
	 * @param {str_ptf} file 
	 * @param {string | ("stretch")[]} options 
	 * @return {GfxBackground} 
	 */
	CreateBackground(file, options) {}

	/**
	 * Creates a circle
	 * @param {num_frc} width 
	 * @param {num_col} color 
	 * @param {num_pxl} lineWidth 
	 * @param {num_col} lineColor 
	 * @param {num_frc} lineAlpha 
	 * @param {str} group 
	 * @return {GfxCircle} 
	 */
	CreateCircle(width, color, lineWidth, lineColor, lineAlpha, group) {}

	/**
	 * Creates an ellipse
	 * @param {num_frc} width 
	 * @param {num_frc} height 
	 * @param {num_col} color 
	 * @param {num_pxl} lineWidth 
	 * @param {num_col} lineColor 
	 * @param {num_frc} lineAlpha 
	 * @param {str} group 
	 * @return {GfxEllipse} 
	 */
	CreateEllipse(width, height, color, lineWidth, lineColor, lineAlpha, group) {}

	/**
	 * Creates a polygonal game object
	 * @param {num_frc[]} points 
	 * @param {num_frc} pivotX 
	 * @param {num_frc} pivotY 
	 * @param {num_col} color 
	 * @param {num_pxl} lineWidth 
	 * @param {num_col} lineColor 
	 * @param {num_frc} lineAlpha 
	 * @param {str} group 
	 * @return {GfxPolygon} 
	 */
	CreatePolygon(points, pivotX, pivotY, color, lineWidth, lineColor, lineAlpha, group) {}

	/**
	 * Creates a rectangle
	 * @param {num_frc} width 
	 * @param {num_frc} height 
	 * @param {num_col} color 
	 * @param {num_pxl} lineWidth 
	 * @param {num_col} lineColor 
	 * @param {num_frc} lineAlpha 
	 * @param {str} group 
	 * @return {GfxRectangle} 
	 */
	CreateRectangle(width, height, color, lineWidth, lineColor, lineAlpha, group) {}

	/**
	 * Returns a new sound object
	 * @param {str_ptf} file 
	 * @return {GfxSound} 
	 */
	CreateSound(file) {}

	/**
	 * Returns a new sprite object
	 * @param {str_ptf} file 
	 * @param {str} group 
	 * @param {() => void} callback 
	 * @return {GfxSprite} 
	 */
	CreateSprite(file, group, callback) {}

	/**
	 * Returns a new SpriteSheet object
	 * @param {str_ptf} file 
	 * @param {() => void} callback 
	 * @return {GfxSpriteSheet} 
	 */
	CreateSpriteSheet(file, callback) {}

	/**
	 * Returns a new text object
	 * @param {str} text 
	 * @param {num} fontSize 
	 * @param {str_ptf} fontFile 
	 * @param {"left"|"center"|"right"} align 
	 * @param {() => void} callback 
	 * @return {GfxText} 
	 */
	CreateText(text, fontSize, fontFile, align, callback) {}

	/**
	 * Returns a new texture object
	 * @return {GfxTexture} 
	 */
	CreateTexture() {}

	/**
	 * GameView custom data
	 * @type {obj} 
	 */
	data;

	/**
	 * En/Disables the physics engine
	 * @param {bin} enabled 
	 * @return {void} 
	 */
	EnablePhysics(enabled) {}

	/**
	 * Enclose an area with a physics fence
	 * @param {str} groupId 
	 * @param {string | ("left"|"top"|"right"|"bottom")[]} options 
	 * @param {num} density 
	 * @param {num} bounce 
	 * @param {num} friction 
	 * @param {num} offset 
	 * @return {void} 
	 */
	Enclose(groupId, options, density, bounce, friction, offset) {}

	/**
	 * Get joystick states
	 * @param {str} id 
	 * @return {obj} 
	 */
	GetJoystick(id) {}

	/**
	 * Get object's order index
	 * @param {gvo} object 
	 * @return {num_int} 
	 */
	GetOrder(object) {}

	/**
	 * Get time since last gfx.Pause or gfx.Play
	 * @return {Date} Date
	 */
	GetTime() {}

	/**
	 * Display height in pixels
	 * @type {num_pxl} 
	 */
	height;

	/**
	 * Tests if two objects overlap
	 * @param {gvo} obj1 
	 * @param {gvo} obj2 
	 * @param {num} depth 
	 * @return {bin} 
	 */
	IsOverlap(obj1, obj2, depth) {}

	/**
	 * Get paused state
	 * @return {bin} 
	 */
	IsPaused() {}

	/**
	 * True when game is ready
	 * @type {bin} 
	 */
	isReady;

	/**
	 * Currently pressed key
	 * @type {str} 
	 */
	keyDown;

	/**
	 * Current key state
	 * @type {"Down"|"Up"} 
	 */
	keyState;

	/**
	 * Enables multitouch
	 * @type {bin} 
	 */
	multiTouch;

	/**
	 * List of active objects
	 * @type {lst_obj} 
	 */
	objects;

	/**
	 * Pause game
	 * @return {void} 
	 */
	Pause() {}

	/**
	 * Start or resume game
	 * @return {void} 
	 */
	Play() {}

	/**
	 * Restart game from scratch
	 * @return {void} 
	 */
	Reload() {}

	/**
	 * Remove background from game
	 * @param {GfxBackground} obj 
	 * @return {void} 
	 */
	RemoveBackground(obj) {}

	/**
	 * Remove graphic from game
	 * @param {GfxGraphic} obj 
	 * @return {void} 
	 */
	RemoveGraphic(obj) {}

	/**
	 * Remove sprite from game
	 * @param {GfxSprite} sprite 
	 * @return {void} 
	 */
	RemoveSprite(sprite) {}

	/**
	 * Remove text from game
	 * @param {GfxText} obj 
	 * @return {void} 
	 */
	RemoveText(obj) {}

	/**
	 * Synchronously import a .js file
	 * @param {str_uri} uri 
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	Script(uri, callback) {}

	/**
	 * Set solid background color
	 * @param {str_col} col 
	 * @return {void} 
	 */
	SetBackColor(col) {}

	/**
	 * Define a callback which is called when two [Physics objects](AddPhysics.htm) collide
	 * @param {(a: gvo, b: gvo) => void} callback 
	 * @return {void} 
	 */
	SetOnCollide(callback) {}

	/**
	 * Define a KeyDown callback
	 * @param {(key: str) => void} callback 
	 * @return {void} 
	 */
	SetOnKeyDown(callback) {}

	/**
	 * Define a KeyUp callback
	 * @param {(key: str) => void} callback 
	 * @return {void} 
	 */
	SetOnKeyUp(callback) {}

	/**
	 * Set callback for touch down
	 * @param {(x: num_frc|lst_num, y: num_frc|lst_num) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Set callback for touch move
	 * @param {(x: num_frc|lst_num, y: num_frc|lst_num) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Set callback for touch up
	 * @param {(x: num_frc|lst_num, y: num_frc|lst_num) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Change the drawing order of an object
	 * @param {obj} object 
	 * @param {num} order 
	 * @return {void} 
	 */
	SetOrder(object, order) {}

	/**
	 * Swap drawing order of two objects
	 * @param {gvo} object1 
	 * @param {gvo} object2 
	 * @return {void} 
	 */
	SwapOrder(object1, object2) {}

	/**
	 * Gfx version number
	 * @type {str} 1.1
	 */
	version;

	/**
	 * Shortcut to app.../app/Vibrate)
	 * @param {str} pattern 
	 * @return {void} 
	 */
	Vibrate(pattern) {}

	/**
	 * Display width
	 * @type {num_pxl} 
	 */
	width;

}

class GfxPhysics {

	/**
	 * Adds velocity to the object
	 * @param {"Polygon"} type 
	 * @param {[num_frc, num_frc][]} points 
	 * @return {void} 
	 */
	AddShape(type, points) {}

	/**
	 * Adds velocity to the object
	 * @param {num} x 
	 * @param {num} y 
	 * @param {num} angular 
	 * @param {bin} bodyRelative 
	 * @return {void} 
	 */
	AddVelocity(x, y, angular, bodyRelative) {}

	/**
	 * Applies an impulse p=m*v to the object
	 * @param {num} x 
	 * @param {num} y 
	 * @param {num} offsetX `-1..1`
	 * @param {num} offsetY `-1..1`
	 * @return {void} 
	 */
	ApplyImpulse(x, y, offsetX, offsetY) {}

	/**
	 * Checks if a point is in the hitbox
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {}

	/**
	 * Temporally En/Disables physics for the game object
	 * @param {bin} enable 
	 * @return {void} 
	 */
	EnablePhysics(enable) {}

	/**
	 * Returns the total velocity or a component of it
	 * @param {"x"|"y"|"angular"} component 
	 * @return {num} 
	 */
	GetVelocity(component) {}

	/**
	 * Removes physics from the game oblect
	 * @return {void} 
	 */
	RemovePhysics() {}

	/**
	 * Applies a 2D transformation matrix to the game object
	 * @param {Matrix} mtx \Matrix
	 * @return {void} 
	 */
	SetMatrix(mtx) {}

	/**
	 * Set physics properties
	 * @param {str} groupId 
	 * @param {"moveable"|"fixed"} type 
	 * @param {num} density 
	 * @param {num} bounce 
	 * @param {num} friction 
	 * @param {num} linearDamp 
	 * @param {num} angularDamp 
	 * @return {void} 
	 */
	SetPhysics(groupId, type, density, bounce, friction, linearDamp, angularDamp) {}

	/**
	 * Define the collision shape
	 * @param {"rect"|"round"} shape 
	 * @param {num_frc} width 
	 * @param {num_frc} height 
	 * @return {void} 
	 */
	SetShape(shape, width, height) {}

	/**
	 * Set the object velocity
	 * @param {num} x 
	 * @param {num} y 
	 * @param {num} angular 
	 * @param {bin} bodyRelative 
	 * @return {void} 
	 */
	SetVelocity(x, y, angular, bodyRelative) {}

	/**
	 * Update internal physics properties
	 * @return {void} 
	 */
	UpdatePhysics() {}
}


class GfxBackground {

	/**
	 * Scroll Background
	 * @param {num} x 
	 * @param {num} y 
	 * @return {void} 
	 */
	Scroll(x, y) {}

	/**
	 * Indicates if ready for use
	 * @type {bin} 
	 */
	loaded;
}


class GfxCircle {

	/**
	 * The alpha value
	 * @type {num_frc} 
	 */
	alpha;

	/**
	 * The rotation fraction
	 * @type {num_frc} 
	 */
	angle;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {}

	/**
	 * Extra properties
	 * @type {obj} 
	 */
	data;

	/**
	 * PIXI graphic
	 * @type {obj} 
	 */
	graphic;

	/**
	 * The object's group
	 * @type {str} 
	 */
	group;

	/**
	 * The objects height
	 * @type {num_frc} 
	 */
	height;

	/**
	 * Rotation x pivot
	 * @type {num_frc} 
	 */
	pivotX;

	/**
	 * Rotation y pivot
	 * @type {num_frc} 
	 */
	pivotY;

	/**
	 * Horizontal scaling
	 * @type {num_fac} 
	 */
	scaleX;

	/**
	 * Vertical scaling
	 * @type {num_fac} 
	 */
	scaleY;

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx \Matrix
	 * @return {void} 
	 */
	SetMatrix(mtx) {}

	/**
	 * Updates internal properties
	 * @return {void} 
	 */
	Update() {}

	/**
	 * Visibility state
	 * @type {bin} 
	 */
	visible;

	/**
	 * Object width
	 * @type {num} 
	 */
	width;
}


class GfxEllipse {

	/**
	 * The alpha value
	 * @type {num_frc} 
	 */
	alpha;

	/**
	 * The rotation fraction
	 * @type {num_frc} 
	 */
	angle;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {}

	/**
	 * Extra properties
	 * @type {obj} 
	 */
	data;

	/**
	 * PIXI graphic
	 * @type {obj} 
	 */
	graphic;

	/**
	 * The object's group
	 * @type {str} 
	 */
	group;

	/**
	 * The objects height
	 * @type {num_frc} 
	 */
	height;

	/**
	 * Rotation x pivot
	 * @type {num_frc} 
	 */
	pivotX;

	/**
	 * Rotation y pivot
	 * @type {num_frc} 
	 */
	pivotY;

	/**
	 * Horizontal scaling
	 * @type {num_fac} 
	 */
	scaleX;

	/**
	 * Vertical scaling
	 * @type {num_fac} 
	 */
	scaleY;

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx \Matrix
	 * @return {void} 
	 */
	SetMatrix(mtx) {}

	/**
	 * Updates internal properties
	 * @return {void} 
	 */
	Update() {}

	/**
	 * Visibility state
	 * @type {bin} 
	 */
	visible;

	/**
	 * Object width
	 * @type {num} 
	 */
	width;
}


class GfxPolygon {

	/**
	 * The alpha value
	 * @type {num_frc} 
	 */
	alpha;

	/**
	 * The rotation fraction
	 * @type {num_frc} 
	 */
	angle;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {}

	/**
	 * Extra properties
	 * @type {obj} 
	 */
	data;

	/**
	 * PIXI graphic
	 * @type {obj} 
	 */
	graphic;

	/**
	 * The object's group
	 * @type {str} 
	 */
	group;

	/**
	 * The objects height
	 * @type {num_frc} 
	 */
	height;

	/**
	 * Rotation x pivot
	 * @type {num_frc} 
	 */
	pivotX;

	/**
	 * Rotation y pivot
	 * @type {num_frc} 
	 */
	pivotY;

	/**
	 * Horizontal scaling
	 * @type {num_fac} 
	 */
	scaleX;

	/**
	 * Vertical scaling
	 * @type {num_fac} 
	 */
	scaleY;

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx \Matrix
	 * @return {void} 
	 */
	SetMatrix(mtx) {}

	/**
	 * Updates internal properties
	 * @return {void} 
	 */
	Update() {}

	/**
	 * Visibility state
	 * @type {bin} 
	 */
	visible;

	/**
	 * Object width
	 * @type {num} 
	 */
	width;
}


class GfxRectangle {

	/**
	 * The alpha value
	 * @type {num_frc} 
	 */
	alpha;

	/**
	 * The rotation fraction
	 * @type {num_frc} 
	 */
	angle;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {}

	/**
	 * Extra properties
	 * @type {obj} 
	 */
	data;

	/**
	 * PIXI graphic
	 * @type {obj} 
	 */
	graphic;

	/**
	 * The object's group
	 * @type {str} 
	 */
	group;

	/**
	 * The objects height
	 * @type {num_frc} 
	 */
	height;

	/**
	 * Rotation x pivot
	 * @type {num_frc} 
	 */
	pivotX;

	/**
	 * Rotation y pivot
	 * @type {num_frc} 
	 */
	pivotY;

	/**
	 * Horizontal scaling
	 * @type {num_fac} 
	 */
	scaleX;

	/**
	 * Vertical scaling
	 * @type {num_fac} 
	 */
	scaleY;

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx \Matrix
	 * @return {void} 
	 */
	SetMatrix(mtx) {}

	/**
	 * Updates internal properties
	 * @return {void} 
	 */
	Update() {}

	/**
	 * Visibility state
	 * @type {bin} 
	 */
	visible;

	/**
	 * Object width
	 * @type {num} 
	 */
	width;
}


class GfxSound {

	/**
	 * The file url
	 * @type {str} 
	 */
	file;

	/**
	 * Pause the track
	 * @return {void} 
	 */
	Pause() {}

	/**
	 * Play the soundtrack
	 * @param {bin} loop 
	 * @param {num_mls} delay `delay before playback start`
	 * @param {num_mls} gap `time gap between two loops`
	 * @return {void} 
	 */
	Play(loop, delay, gap) {}
}


class GfxSprite {

	/**
	 * Incicates if added to game
	 * @type {bin} 
	 */
	added;

	/**
	 * The alpha value
	 * @type {num_frc} 
	 */
	alpha;

	/**
	 * The rotation fraction
	 * @type {num_frc} 
	 */
	angle;

	/**
	 * Sprite aspect ratio
	 * @type {num} 
	 */
	aspect;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {}

	/**
	 * Extra properties
	 * @type {obj} 
	 */
	data;

	/**
	 * Flip sprite
	 * @param {bin} horiz 
	 * @param {bin} vert 
	 * @return {void} 
	 */
	Flip(horiz, vert) {}

	/**
	 * Get current frame
	 * @return {num_int} 
	 */
	GetFrame() {}

	/**
	 * Go to animation frame
	 * @param {num_int} frame 
	 * @return {void} 
	 */
	Goto(frame) {}

	/**
	 * The object's group
	 * @type {str} 
	 */
	group;

	/**
	 * The objects height
	 * @type {num_frc} 
	 */
	height;

	/**
	 * Pause tweening
	 * @return {void} 
	 */
	PauseTween() {}

	/**
	 * Rotation x pivot
	 * @type {num_frc} 
	 */
	pivotX;

	/**
	 * Rotation y pivot
	 * @type {num_frc} 
	 */
	pivotY;

	/**
	 * Play sprite animation
	 * @param {num_int} startFrame 
	 * @param {num_int} speed 
	 * @param {bin} loop 
	 * @return {void} 
	 */
	Play(startFrame, speed, loop) {}

	/**
	 * Play range of animation frames
	 * @param {num_int} firstFrame 
	 * @param {num_int} lastFrame 
	 * @param {num} speed 
	 * @param {bin} loop 
	 * @return {void} 
	 */
	PlayRange(firstFrame, lastFrame, speed, loop) {}

	/**
	 * Play to animation frame
	 * @param {num_int} frame 
	 * @return {void} 
	 */
	PlayTo(frame) {}

	/**
	 * Resume tweening
	 * @return {void} 
	 */
	PlayTween() {}

	/**
	 * Horizontal scaling
	 * @type {num_fac} 
	 */
	scaleX;

	/**
	 * Vertical scaling
	 * @type {num_fac} 
	 */
	scaleY;

	/**
	 * Set animation looping
	 * @param {bin} loop 
	 * @return {void} 
	 */
	SetLoop(loop) {}

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx \Matrix
	 * @return {void} 
	 */
	SetMatrix(mtx) {}

	/**
	 * Set animation speed
	 * @param {num} speed 
	 * @return {void} 
	 */
	SetPlaySpeed(speed) {}

	/**
	 * Set animation frame range
	 * @param {num_int} firstFrame 
	 * @param {num_int} lastFrame 
	 * @param {bin} loop 
	 * @param {bin} play 
	 * @param {num} speed 
	 * @return {void} 
	 */
	SetRange(firstFrame, lastFrame, loop, play, speed) {}

	/**
	 * Set sprite size
	 * @param {num_frc} w 
	 * @param {num_frc} h 
	 * @return {void} 
	 */
	SetSize(w, h) {}

	/**
	 * Change animation
	 * @param {GfxSpriteSheet} sheet 
	 * @return {void} 
	 */
	SetSpriteSheet(sheet) {}

	/**
	 * Change sprite texture
	 * @param {GfxTexture} tx 
	 * @return {void} 
	 */
	SetTexture(tx) {}

	/**
	 * Setup tween methods
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, w: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, w, sw, sh, rot }
	 * @param {num_mls} duration 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} type 
	 * @param {num_int} repeat 
	 * @param {bin} yoyo 
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetTween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Start tween
	 * @return {void} 
	 */
	StartTween() {}

	/**
	 * Update tween to now
	 * @return {void} 
	 */
	StepTween() {}

	/**
	 * Stop animation
	 * @return {void} 
	 */
	Stop() {}

	/**
	 * Stop animation on frame
	 * @param {num_int} frame 
	 * @return {void} 
	 */
	StopAt(frame) {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, w: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, w, sw, sh, rot }
	 * @param {num_mls} duration 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} type 
	 * @param {num_int} repeat 
	 * @param {bin} yoyo 
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Updates internal properties
	 * @return {void} 
	 */
	Update() {}

	/**
	 * Visibility state
	 * @type {bin} 
	 */
	visible;

	/**
	 * Object width
	 * @type {num} 
	 */
	width;

	/**
	 * X-position on the screen
	 * @type {num_frc} 
	 */
	x;

	/**
	 * Y-position on the screen
	 * @type {num_frc} 
	 */
	y;
}


class GfxSpriteSheet {

	/**
	 * Extra properties
	 * @type {obj} 
	 */
	data;

	/**
	 * Loaded indicator
	 * @type {bin} 
	 */
	loaded;
}


class GfxText {

	/**
	 * Multiline text alignment
	 * @type {"left"|"center"|"right"} 
	 */
	align;

	/**
	 * The alpha value
	 * @type {num_frc} 
	 */
	alpha;

	/**
	 * The rotation fraction
	 * @type {num_frc} 
	 */
	angle;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {}

	/**
	 * Source file
	 * @type {str_pth} 
	 */
	file;

	/**
	 * Pixel font size
	 * @type {num_pxl} 
	 */
	fontSize;

	/**
	 * The objects height
	 * @type {num_frc} 
	 */
	height;

	/**
	 * Rotation x pivot
	 * @type {num_frc} 
	 */
	pivotX;

	/**
	 * Rotation y pivot
	 * @type {num_frc} 
	 */
	pivotY;

	/**
	 * Horizontal scaling
	 * @type {num_fac} 
	 */
	scaleX;

	/**
	 * Vertical scaling
	 * @type {num_fac} 
	 */
	scaleY;

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx \Matrix
	 * @return {void} 
	 */
	SetMatrix(mtx) {}

	/**
	 * Updates internal properties
	 * @return {void} 
	 */
	Update() {}

	/**
	 * Visibility state
	 * @type {bin} 
	 */
	visible;

	/**
	 * Object width
	 * @type {num} 
	 */
	width;
}


