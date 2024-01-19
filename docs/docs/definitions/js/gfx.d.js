/** @type {DsGfx} */
var gfx;
/** @typedef {GfxCircle|GfxEllipse|GfxPolygon|GfxRectangle} GfxGraphic */
/** @typedef {{ noframe: bin, baseTexture: obj, frame: {x:num_frc, y:num_frc, width:num_frc, height:num_frc} }} GfxTexture */
/** @typedef {GfxPhysics | GfxBackground | GfxCircle | GfxEllipse | GfxPolygon | GfxRectangle | GfxSound | GfxSprite | GfxSpriteSheet | GfxText} GameObject */
/** @typedef {GameObject} gvo game object */

class DsGfx {

	/**
	 * Adds a background to the game
	 * @param {GfxBackground} obj 
	 */
	AddBackground(obj) {return}

	/**
	 * Adds a basic shape object to the game
	 * @param {obj} obj 
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [w] 
	 * @param {num_frc} [h] 
	 * @param {num_rad} [angle] 
	 * @param {num_frc} [alpha] 
	 */
	AddGraphic(obj, x, y, w, h, angle, alpha) {return}

	/**
	 * Adds physics to the game
	 * @param {num} [gravity] 
	 * @param {num} [accuracy] 
	 * @param {num} [sleep] 
	 * @return {GfxPhysics} 
	 */
	AddPhysics(gravity, accuracy, sleep) {return}

	/**
	 * Adds a sprite object
	 * @param {GfxSprite} sprite 
	 * @param {num_frc} [x] 
	 * @param {num_frc} [y] 
	 * @param {num_frc} [w] 
	 * @param {num_frc} [h] 
	 * @param {num_frc} [angle] 
	 * @param {num_frc} [alpha] 
	 */
	AddSprite(sprite, x, y, w, h, angle, alpha) {return}

	/**
	 * Adds a text object
	 * @param {GfxText} obj 
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} angle 
	 * @param {num_frc} alpha 
	 */
	AddText(obj, x, y, angle, alpha) {return}

	/**
	 * Executes code in the main app
	 * @param {str_jsc} js 
	 */
	AppExec(js) {return}

	/** @type {num} The display aspect ratio */
	aspect;

	/**
	 * Returns a new background
	 * @param {str_ptf} file 
	 * @param {string | ("stretch")[]} options 
	 * @return {GfxBackground} 
	 */
	CreateBackground(file, options) {return}

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
	CreateCircle(width, color, lineWidth, lineColor, lineAlpha, group) {return}

	/**
	 * Creates an ellipse
	 * @param {num_frc} width 
	 * @param {num_frc} height 
	 * @param {num_col} color 
	 * @param {num_pxl} [lineWidth] 
	 * @param {num_col} [lineColor] 
	 * @param {num_frc} [lineAlpha] 
	 * @param {str} [group] 
	 * @return {GfxEllipse} 
	 */
	CreateEllipse(width, height, color, lineWidth, lineColor, lineAlpha, group) {return}

	/**
	 * Creates a polygonal game object
	 * @param {num_frc[]} points 
	 * @param {num_frc} pivotX 
	 * @param {num_frc} pivotY 
	 * @param {num_col} color 
	 * @param {num_pxl} [lineWidth] 
	 * @param {num_col} [lineColor] 
	 * @param {num_frc} [lineAlpha] 
	 * @param {str} [group] 
	 * @return {GfxPolygon} 
	 */
	CreatePolygon(points, pivotX, pivotY, color, lineWidth, lineColor, lineAlpha, group) {return}

	/**
	 * Creates a rectangle
	 * @param {num_frc} width 
	 * @param {num_frc} height 
	 * @param {num_col} color 
	 * @param {num_pxl} [lineWidth] 
	 * @param {num_col} [lineColor] 
	 * @param {num_frc} [lineAlpha] 
	 * @param {str} [group] 
	 * @return {GfxRectangle} 
	 */
	CreateRectangle(width, height, color, lineWidth, lineColor, lineAlpha, group) {return}

	/**
	 * Returns a new sound object
	 * @param {str_ptf} file 
	 * @return {GfxSound} 
	 */
	CreateSound(file) {return}

	/**
	 * Returns a new sprite object
	 * @param {str_ptf} file 
	 * @param {str} [group] 
	 * @param {(this: GfxSprite) => void} [callback] 
	 * @return {GfxSprite} 
	 */
	CreateSprite(file, group, callback) {return}

	/**
	 * Returns a new SpriteSheet object
	 * @param {str_ptf} file 
	 * @param {(this: GfxSpriteSheet) => void} callback 
	 * @return {GfxSpriteSheet} 
	 */
	CreateSpriteSheet(file, callback) {return}

	/**
	 * Returns a new text object
	 * @param {str} text 
	 * @param {num} fontSize 
	 * @param {str_ptf} fontFile 
	 * @param {"left"|"center"|"right"} align 
	 * @param {(this: GfxText) => void} callback 
	 * @return {GfxText} 
	 */
	CreateText(text, fontSize, fontFile, align, callback) {return}

	/**
	 * Returns a new texture object
	 * @param {str_pth} file 
	 * @return {GfxTexture} 
	 */
	CreateTexture(file) {return}

	/** @type {{ key: str, value: all }} GameView custom data */
	data;

	/**
	 * En/Disables the physics engine
	 * @param {bin} enabled 
	 */
	EnablePhysics(enabled) {return}

	/**
	 * Enclose an area with a physics fence
	 * @param {str} groupId 
	 * @param {string | ("left"|"top"|"right"|"bottom")[]} options 
	 * @param {num} [density] 
	 * @param {num} [bounce] 
	 * @param {num} [friction] 
	 * @param {num} [offset] 
	 */
	Enclose(groupId, options, density, bounce, friction, offset) {return}

	/**
	 * Get joystick states
	 * @param {str} id 
	 * @return {obj} 
	 */
	GetJoystick(id) {return}

	/**
	 * Get object's order index
	 * @param {gvo} object 
	 * @return {num_int} 
	 */
	GetOrder(object) {return}

	/**
	 * Get time since last gfx.Pause or gfx.Play
	 * @return {Date} Date
	 */
	GetTime() {return}

	/** @type {num_pxl} Display height in pixels */
	height;

	/**
	 * Tests if two objects overlap
	 * @param {gvo} obj1 
	 * @param {gvo} obj2 
	 * @param {num} depth 
	 * @return {bin} 
	 */
	IsOverlap(obj1, obj2, depth) {return}

	/**
	 * Get paused state
	 * @return {bin} 
	 */
	IsPaused() {return}

	/** @type {bin} True when game is ready */
	isReady;

	/** @type {str} Currently pressed key */
	keyDown;

	/** @type {"Down"|"Up"} Current key state */
	keyState;

	/** @type {bin} Enables multitouch */
	multiTouch;

	/** @type {lst_obj} List of active objects */
	objects;

	/** Pause game */
	Pause() {return}

	/** Start or resume game */
	Play() {return}

	/** Restart game from scratch */
	Reload() {return}

	/**
	 * Remove background from game
	 * @param {GfxBackground} obj 
	 */
	RemoveBackground(obj) {return}

	/**
	 * Remove graphic from game
	 * @param {GfxGraphic} obj 
	 */
	RemoveGraphic(obj) {return}

	/**
	 * Remove sprite from game
	 * @param {GfxSprite} sprite 
	 */
	RemoveSprite(sprite) {return}

	/**
	 * Remove text from game
	 * @param {GfxText} obj 
	 */
	RemoveText(obj) {return}

	/**
	 * Synchronously import a .js file
	 * @param {str_uri} uri 
	 * @param {() => void} callback 
	 */
	Script(uri, callback) {return}

	/**
	 * Set solid background color
	 * @param {str_col|num} col 
	 */
	SetBackColor(col) {return}

	/**
	 * Define a callback which is called when two [Physics objects](AddPhysics.htm) collide
	 * @param {(a: gvo, b: gvo) => void} callback 
	 */
	SetOnCollide(callback) {return}

	/**
	 * Define a KeyDown callback
	 * @param {(key: str) => void} callback 
	 */
	SetOnKeyDown(callback) {return}

	/**
	 * Define a KeyUp callback
	 * @param {(key: str) => void} callback 
	 */
	SetOnKeyUp(callback) {return}

	/**
	 * Set callback for touch down
	 * @param {(x: num_frc|lst_num, y: num_frc|lst_num) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Set callback for touch move
	 * @param {(x: num_frc|lst_num, y: num_frc|lst_num) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Set callback for touch up
	 * @param {(x: num_frc|lst_num, y: num_frc|lst_num) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Change the drawing order of an object
	 * @param {obj} object 
	 * @param {num} order 
	 */
	SetOrder(object, order) {return}

	/**
	 * Swap drawing order of two objects
	 * @param {gvo} object1 
	 * @param {gvo} object2 
	 */
	SwapOrder(object1, object2) {return}

	/** @type {str} Gfx version number */
	version;

	/**
	 * Shortcut to app.../app/Vibrate)
	 * @param {str} pattern 
	 */
	Vibrate(pattern) {return}

	/** @type {num_pxl} Display width */
	width;

}

class GfxPhysics {

	/**
	 * Adds velocity to the object
	 * @param {"Polygon"} type 
	 * @param {[num_frc, num_frc][]} points 
	 */
	AddShape(type, points) {return}

	/**
	 * Adds velocity to the object
	 * @param {num} x 
	 * @param {num} y 
	 * @param {num} [angular] 
	 * @param {bin} [bodyRelative] 
	 */
	AddVelocity(x, y, angular, bodyRelative) {return}

	/**
	 * Applies an impulse p=m*v to the object
	 * @param {num} x 
	 * @param {num} y 
	 * @param {num} [offsetX=0] `-1..1`
	 * @param {num} [offsetY=0] `-1..1`
	 */
	ApplyImpulse(x, y, offsetX, offsetY) {return}

	/**
	 * Checks if a point is in the hitbox
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {return}

	/**
	 * Temporally En/Disables physics for the game object
	 * @param {bin} enable 
	 */
	EnablePhysics(enable) {return}

	/**
	 * Returns the total velocity or a component of it
	 * @param {"x"|"y"|"angular"} component 
	 * @return {num} 
	 */
	GetVelocity(component) {return}

	/** Removes physics from the game oblect */
	RemovePhysics() {return}

	/**
	 * Applies a 2D transformation matrix to the game object
	 * @param {Matrix} mtx Matrix
	 */
	SetMatrix(mtx) {return}

	/**
	 * Set physics properties
	 * @param {str|num} groupId 
	 * @param {"moveable"|"fixed"|"dynamic"} type 
	 * @param {num} [density] 
	 * @param {num} [bounce] 
	 * @param {num} [friction] 
	 * @param {num} [linearDamp] 
	 * @param {num} [angularDamp] 
	 */
	SetPhysics(groupId, type, density, bounce, friction, linearDamp, angularDamp) {return}

	/**
	 * Define the collision shape
	 * @param {"rect"|"round"} shape 
	 * @param {num_frc} [width] 
	 * @param {num_frc} [height] 
	 */
	SetShape(shape, width, height) {return}

	/**
	 * Set the object velocity
	 * @param {num} x 
	 * @param {num} y 
	 * @param {num} [angular] 
	 * @param {bin} [bodyRelative] 
	 */
	SetVelocity(x, y, angular, bodyRelative) {return}

	/** Update internal physics properties */
	UpdatePhysics() {return}
}


class GfxBackground {

	/**
	 * Scroll Background
	 * @param {num} x 
	 * @param {num} y 
	 */
	Scroll(x, y) {return}

	/** @type {bin} Indicates if ready for use */
	loaded;
}


class GfxCircle {

	/** @type {num_frc} The alpha value */
	alpha;

	/** @type {num_frc} The rotation fraction */
	angle;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** @type {obj} PIXI graphic */
	graphic;

	/** @type {str} The object's group */
	group;

	/** @type {num_frc} The objects height */
	height;

	/** @type {num_frc} Rotation x pivot */
	pivotX;

	/** @type {num_frc} Rotation y pivot */
	pivotY;

	/** @type {num_fac} Horizontal scaling */
	scaleX;

	/** @type {num_fac} Vertical scaling */
	scaleY;

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx Matrix
	 */
	SetMatrix(mtx) {return}

	/** Updates internal properties */
	Update() {return}

	/** @type {bin} Visibility state */
	visible;

	/** @type {num} Object width */
	width;
}


class GfxEllipse {

	/** @type {num_frc} The alpha value */
	alpha;

	/** @type {num_frc} The rotation fraction */
	angle;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** @type {obj} PIXI graphic */
	graphic;

	/** @type {str} The object's group */
	group;

	/** @type {num_frc} The objects height */
	height;

	/** @type {num_frc} Rotation x pivot */
	pivotX;

	/** @type {num_frc} Rotation y pivot */
	pivotY;

	/** @type {num_fac} Horizontal scaling */
	scaleX;

	/** @type {num_fac} Vertical scaling */
	scaleY;

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx Matrix
	 */
	SetMatrix(mtx) {return}

	/** Updates internal properties */
	Update() {return}

	/** @type {bin} Visibility state */
	visible;

	/** @type {num} Object width */
	width;
}


class GfxPolygon {

	/** @type {num_frc} The alpha value */
	alpha;

	/** @type {num_frc} The rotation fraction */
	angle;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** @type {obj} PIXI graphic */
	graphic;

	/** @type {str} The object's group */
	group;

	/** @type {num_frc} The objects height */
	height;

	/** @type {num_frc} Rotation x pivot */
	pivotX;

	/** @type {num_frc} Rotation y pivot */
	pivotY;

	/** @type {num_fac} Horizontal scaling */
	scaleX;

	/** @type {num_fac} Vertical scaling */
	scaleY;

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx Matrix
	 */
	SetMatrix(mtx) {return}

	/** Updates internal properties */
	Update() {return}

	/** @type {bin} Visibility state */
	visible;

	/** @type {num} Object width */
	width;
}


class GfxRectangle {

	/** @type {num_frc} The alpha value */
	alpha;

	/** @type {num_frc} The rotation fraction */
	angle;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** @type {obj} PIXI graphic */
	graphic;

	/** @type {str} The object's group */
	group;

	/** @type {num_frc} The objects height */
	height;

	/** @type {num_frc} Rotation x pivot */
	pivotX;

	/** @type {num_frc} Rotation y pivot */
	pivotY;

	/** @type {num_fac} Horizontal scaling */
	scaleX;

	/** @type {num_fac} Vertical scaling */
	scaleY;

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx Matrix
	 */
	SetMatrix(mtx) {return}

	/** Updates internal properties */
	Update() {return}

	/** @type {bin} Visibility state */
	visible;

	/** @type {num} Object width */
	width;
}


class GfxSound {

	/** @type {str} The file url */
	file;

	/** Pause the track */
	Pause() {return}

	/**
	 * Play the soundtrack
	 * @param {bin} loop 
	 * @param {num_mls} delay `delay before playback start`
	 * @param {num_mls} gap `time gap between two loops`
	 */
	Play(loop, delay, gap) {return}
}


class GfxSprite {

	/** @type {bin} Incicates if added to game */
	added;

	/** @type {num_frc} The alpha value */
	alpha;

	/** @type {num_frc} The rotation fraction */
	angle;

	/** @type {num} Sprite aspect ratio */
	aspect;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Flip sprite
	 * @param {bin} horiz 
	 * @param {bin} vert 
	 */
	Flip(horiz, vert) {return}

	/**
	 * Get current frame
	 * @return {num_int} 
	 */
	GetFrame() {return}

	/**
	 * Go to animation frame
	 * @param {num_int} frame 
	 */
	Goto(frame) {return}

	/** @type {str} The object's group */
	group;

	/** @type {num_frc} The objects height */
	height;

	/** Pause tweening */
	PauseTween() {return}

	/** @type {num_frc} Rotation x pivot */
	pivotX;

	/** @type {num_frc} Rotation y pivot */
	pivotY;

	/**
	 * Play sprite animation
	 * @param {num_int} startFrame 
	 * @param {num_int} speed 
	 * @param {bin} loop 
	 */
	Play(startFrame, speed, loop) {return}

	/**
	 * Play range of animation frames
	 * @param {num_int} firstFrame 
	 * @param {num_int} lastFrame 
	 * @param {num} speed 
	 * @param {bin} loop 
	 */
	PlayRange(firstFrame, lastFrame, speed, loop) {return}

	/**
	 * Play to animation frame
	 * @param {num_int} frame 
	 */
	PlayTo(frame) {return}

	/** Resume tweening */
	PlayTween() {return}

	/** @type {num_fac} Horizontal scaling */
	scaleX;

	/** @type {num_fac} Vertical scaling */
	scaleY;

	/**
	 * Set animation looping
	 * @param {bin} loop 
	 */
	SetLoop(loop) {return}

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx Matrix
	 */
	SetMatrix(mtx) {return}

	/**
	 * Set animation speed
	 * @param {num} speed 
	 */
	SetPlaySpeed(speed) {return}

	/**
	 * Set animation frame range
	 * @param {num_int} firstFrame 
	 * @param {num_int} lastFrame 
	 * @param {bin} loop 
	 * @param {bin} play 
	 * @param {num} speed 
	 */
	SetRange(firstFrame, lastFrame, loop, play, speed) {return}

	/**
	 * Set sprite size
	 * @param {num_frc} w 
	 * @param {num_frc} h 
	 */
	SetSize(w, h) {return}

	/**
	 * Change animation
	 * @param {GfxSpriteSheet} sheet 
	 */
	SetSpriteSheet(sheet) {return}

	/**
	 * Change sprite texture
	 * @param {GfxTexture} tx 
	 */
	SetTexture(tx) {return}

	/**
	 * Setup tween methods
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} duration 
	 * @param {str} type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} repeat 
	 * @param {bin} yoyo 
	 * @param {(this: GfxSprite) => void} callback 
	 */
	SetTween(target, duration, type, repeat, yoyo, callback) {return}

	/** Start tween */
	StartTween() {return}

	/** Update tween to now */
	StepTween() {return}

	/** Stop animation */
	Stop() {return}

	/**
	 * Stop animation on frame
	 * @param {num_int} frame 
	 */
	StopAt(frame) {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} duration 
	 * @param {str} type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} repeat 
	 * @param {bin} yoyo 
	 * @param {(this: GfxSprite) => void} callback 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/** Updates internal properties */
	Update() {return}

	/** @type {bin} Visibility state */
	visible;

	/** @type {num} Object width */
	width;

	/** @type {num_frc} X-position on the screen */
	x;

	/** @type {num_frc} Y-position on the screen */
	y;
}


class GfxSpriteSheet {

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** @type {bin} Loaded indicator */
	loaded;
}


class GfxText {

	/** @type {"left"|"center"|"right"} Multiline text alignment */
	align;

	/** @type {num_frc} The alpha value */
	alpha;

	/** @type {num_frc} The rotation fraction */
	angle;

	/**
	 * Check if the sprite contains a point
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {bin} 
	 */
	Contains(x, y) {return}

	/** @type {str_pth} Source file */
	file;

	/** @type {num_pxl} Pixel font size */
	fontSize;

	/** @type {num_frc} The objects height */
	height;

	/** @type {num_frc} Rotation x pivot */
	pivotX;

	/** @type {num_frc} Rotation y pivot */
	pivotY;

	/** @type {num_fac} Horizontal scaling */
	scaleX;

	/** @type {num_fac} Vertical scaling */
	scaleY;

	/**
	 * Set 2d transformation
	 * @param {Matrix} mtx Matrix
	 */
	SetMatrix(mtx) {return}

	/** Updates internal properties */
	Update() {return}

	/** @type {bin} Visibility state */
	visible;

	/** @type {num} Object width */
	width;
}


class Matrix {

	/** @type {obj} The PIXI.js Matrix */
	mtx;

	/**
	 * Move by a given amount on both axes
	 * @param {num} tx 
	 * @param {num} ty 
	 */
	Translate(tx, ty) {return}

	/**
	 * Rotate by a given angle around the axes origin (0,0)
	 * @param {num} angle 
	 */
	Rotate(angle) {return}

	/**
	 * Scale by a given amount on both axes
	 * @param {num} sx 
	 * @param {num} sy 
	 */
	Scale(sx, sy) {return}

	/**
	 * Set the matrix elements to specific values
	 * @param {num} a 
	 * @param {num} b 
	 * @param {num} c 
	 * @param {num} d 
	 * @param {num} tx 
	 * @param {num} ty 
	 */
	Set(a, b, c, d, tx, ty) {return}

	/**
	 * Skew / Distort the object on both axes
	 * @param {num} skewX 
	 * @param {num} skewY 
	 */
	Skew(skewX, skewY) {return}

	/**
	 * Shortcut to app.../app/Vibrate)
	 * @param {num} tx 
	 * @param {num} ty 
	 * @param {num} pivotX 
	 * @param {num} pivotY 
	 * @param {num} scaleX 
	 * @param {num} scaleY 
	 * @param {num} rotation 
	 * @param {num} skewX 
	 * @param {num} skewY 
	 */
	Transform(tx, ty, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {return}
}


