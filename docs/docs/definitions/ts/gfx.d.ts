declare var gfx: DsGfx;
declare type GfxGraphic = GfxCircle|GfxEllipse|GfxPolygon|GfxRectangle;
declare type GfxTexture = { noframe: bin, baseTexture: obj, frame: {x:num_frc, y:num_frc, width:num_frc, height:num_frc} };
declare type GameObject = GfxPhysics | GfxBackground | GfxCircle | GfxEllipse | GfxPolygon | GfxRectangle | GfxSound | GfxSprite | GfxSpriteSheet | GfxText;
/** game object */
declare type gvo = GameObject;

declare class DsGfx {

	/** Adds a background to the game */
	AddBackground(obj: GfxBackground): void;

	/** Adds a basic shape object to the game */
	AddGraphic(obj: obj, x: num_frc, y: num_frc, w?: num_frc, h?: num_frc, angle?: num_rad, alpha?: num_frc): void;

	/** Adds physics to the game */
	AddPhysics(gravity?: num, accuracy?: num, sleep?: num): GfxPhysics;

	/** Adds a sprite object */
	AddSprite(sprite: GfxSprite, x?: num_frc, y?: num_frc, w?: num_frc, h?: num_frc, angle?: num_frc, alpha?: num_frc): void;

	/** Adds a text object */
	AddText(obj: GfxText, x: num_frc, y: num_frc, angle: num_frc, alpha: num_frc): void;

	/** Executes code in the main app */
	AppExec(js: str_jsc): void;

	/** The display aspect ratio */
	aspect: num;

	/** Returns a new background */
	CreateBackground(file: str_ptf, options: string | ("stretch")[]): GfxBackground;

	/** Creates a circle */
	CreateCircle(width: num_frc, color: num_col, lineWidth: num_pxl, lineColor: num_col, lineAlpha: num_frc, group: str): GfxCircle;

	/** Creates an ellipse */
	CreateEllipse(width: num_frc, height: num_frc, color: num_col, lineWidth?: num_pxl, lineColor?: num_col, lineAlpha?: num_frc, group?: str): GfxEllipse;

	/** Creates a polygonal game object */
	CreatePolygon(points: num_frc[], pivotX: num_frc, pivotY: num_frc, color: num_col, lineWidth?: num_pxl, lineColor?: num_col, lineAlpha?: num_frc, group?: str): GfxPolygon;

	/** Creates a rectangle */
	CreateRectangle(width: num_frc, height: num_frc, color: num_col, lineWidth?: num_pxl, lineColor?: num_col, lineAlpha?: num_frc, group?: str): GfxRectangle;

	/** Returns a new sound object */
	CreateSound(file: str_ptf): GfxSound;

	/** Returns a new sprite object */
	CreateSprite(file: str_ptf, group?: str, callback?: (this: GfxSprite) => void): GfxSprite;

	/** Returns a new SpriteSheet object */
	CreateSpriteSheet(file: str_ptf, callback: (this: GfxSpriteSheet) => void): GfxSpriteSheet;

	/** Returns a new text object */
	CreateText(text: str, fontSize: num, fontFile: str_ptf, align: "left"|"center"|"right", callback: (this: GfxText) => void): GfxText;

	/** Returns a new texture object */
	CreateTexture(file: str_pth): GfxTexture;

	/**
	 * GameView custom data
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** En/Disables the physics engine */
	EnablePhysics(enabled: bin): void;

	/** Enclose an area with a physics fence */
	Enclose(groupId: str, options: string | ("left"|"top"|"right"|"bottom")[], density?: num, bounce?: num, friction?: num, offset?: num): void;

	/** Get joystick states */
	GetJoystick(id: str): obj;

	/** Get object's order index */
	GetOrder(object: gvo): num_int;

	/**
	 * Get time since last gfx.Pause or gfx.Play
	 * @return Date
	 */
	GetTime(): Date;

	/** Display height in pixels */
	height: num_pxl;

	/** Tests if two objects overlap */
	IsOverlap(obj1: gvo, obj2: gvo, depth: num): bin;

	/** Get paused state */
	IsPaused(): bin;

	/** True when game is ready */
	isReady: bin;

	/** Currently pressed key */
	keyDown: str;

	/** Current key state */
	keyState: "Down"|"Up";

	/** Enables multitouch */
	multiTouch: bin;

	/** List of active objects */
	objects: lst_obj;

	/** Pause game */
	Pause(): void;

	/** Start or resume game */
	Play(): void;

	/** Restart game from scratch */
	Reload(): void;

	/** Remove background from game */
	RemoveBackground(obj: GfxBackground): void;

	/** Remove graphic from game */
	RemoveGraphic(obj: GfxGraphic): void;

	/** Remove sprite from game */
	RemoveSprite(sprite: GfxSprite): void;

	/** Remove text from game */
	RemoveText(obj: GfxText): void;

	/** Synchronously import a .js file */
	Script(uri: str_uri, callback: () => void): void;

	/** Set solid background color */
	SetBackColor(col: str_col|num): void;

	/** Define a callback which is called when two [Physics objects](AddPhysics.htm) collide */
	SetOnCollide(callback: (a: gvo, b: gvo) => void): void;

	/** Define a KeyDown callback */
	SetOnKeyDown(callback: (key: str) => void): void;

	/** Define a KeyUp callback */
	SetOnKeyUp(callback: (key: str) => void): void;

	/** Set callback for touch down */
	SetOnTouchDown(callback: (x: num_frc|lst_num, y: num_frc|lst_num) => void): void;

	/** Set callback for touch move */
	SetOnTouchMove(callback: (x: num_frc|lst_num, y: num_frc|lst_num) => void): void;

	/** Set callback for touch up */
	SetOnTouchUp(callback: (x: num_frc|lst_num, y: num_frc|lst_num) => void): void;

	/** Change the drawing order of an object */
	SetOrder(object: obj, order: num): void;

	/** Swap drawing order of two objects */
	SwapOrder(object1: gvo, object2: gvo): void;

	/**
	 * Gfx version number
	 * @return 1.1
	 */
	version: str;

	/** Shortcut to app.../app/Vibrate) */
	Vibrate(pattern: str): void;

	/** Display width */
	width: num_pxl;

}

declare class GfxPhysics {

	/** Adds velocity to the object */
	AddShape(type: "Polygon", points: [num_frc, num_frc][]): void;

	/** Adds velocity to the object */
	AddVelocity(x: num, y: num, angular?: num, bodyRelative?: bin): void;

	/**
	 * Applies an impulse p=m*v to the object
	 * @param offsetX `-1..1`
	 * @param offsetY `-1..1`
	 */
	ApplyImpulse(x: num, y: num, offsetX?: num, offsetY?: num): void;

	/** Checks if a point is in the hitbox */
	Contains(x: num_frc, y: num_frc): bin;

	/** Temporally En/Disables physics for the game object */
	EnablePhysics(enable: bin): void;

	/** Returns the total velocity or a component of it */
	GetVelocity(component: "x"|"y"|"angular"): num;

	/** Removes physics from the game oblect */
	RemovePhysics(): void;

	/**
	 * Applies a 2D transformation matrix to the game object
	 * @param mtx Matrix
	 */
	SetMatrix(mtx: Matrix): void;

	/** Set physics properties */
	SetPhysics(groupId: str|num, type: "moveable"|"fixed"|"dynamic", density?: num, bounce?: num, friction?: num, linearDamp?: num, angularDamp?: num): void;

	/** Define the collision shape */
	SetShape(shape: "rect"|"round", width?: num_frc, height?: num_frc): void;

	/** Set the object velocity */
	SetVelocity(x: num, y: num, angular?: num, bodyRelative?: bin): void;

	/** Update internal physics properties */
	UpdatePhysics(): void;
}


declare class GfxBackground {

	/** Scroll Background */
	Scroll(x: num, y: num): void;

	/** Indicates if ready for use */
	loaded: bin;
}


declare class GfxCircle {

	/** The alpha value */
	alpha: num_frc;

	/** The rotation fraction */
	angle: num_frc;

	/** Check if the sprite contains a point */
	Contains(x: num_frc, y: num_frc): bin;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** PIXI graphic */
	graphic: obj;

	/** The object's group */
	group: str;

	/** The objects height */
	height: num_frc;

	/** Rotation x pivot */
	pivotX: num_frc;

	/** Rotation y pivot */
	pivotY: num_frc;

	/** Horizontal scaling */
	scaleX: num_fac;

	/** Vertical scaling */
	scaleY: num_fac;

	/**
	 * Set 2d transformation
	 * @param mtx Matrix
	 */
	SetMatrix(mtx: Matrix): void;

	/** Updates internal properties */
	Update(): void;

	/** Visibility state */
	visible: bin;

	/** Object width */
	width: num;
}


declare class GfxEllipse {

	/** The alpha value */
	alpha: num_frc;

	/** The rotation fraction */
	angle: num_frc;

	/** Check if the sprite contains a point */
	Contains(x: num_frc, y: num_frc): bin;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** PIXI graphic */
	graphic: obj;

	/** The object's group */
	group: str;

	/** The objects height */
	height: num_frc;

	/** Rotation x pivot */
	pivotX: num_frc;

	/** Rotation y pivot */
	pivotY: num_frc;

	/** Horizontal scaling */
	scaleX: num_fac;

	/** Vertical scaling */
	scaleY: num_fac;

	/**
	 * Set 2d transformation
	 * @param mtx Matrix
	 */
	SetMatrix(mtx: Matrix): void;

	/** Updates internal properties */
	Update(): void;

	/** Visibility state */
	visible: bin;

	/** Object width */
	width: num;
}


declare class GfxPolygon {

	/** The alpha value */
	alpha: num_frc;

	/** The rotation fraction */
	angle: num_frc;

	/** Check if the sprite contains a point */
	Contains(x: num_frc, y: num_frc): bin;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** PIXI graphic */
	graphic: obj;

	/** The object's group */
	group: str;

	/** The objects height */
	height: num_frc;

	/** Rotation x pivot */
	pivotX: num_frc;

	/** Rotation y pivot */
	pivotY: num_frc;

	/** Horizontal scaling */
	scaleX: num_fac;

	/** Vertical scaling */
	scaleY: num_fac;

	/**
	 * Set 2d transformation
	 * @param mtx Matrix
	 */
	SetMatrix(mtx: Matrix): void;

	/** Updates internal properties */
	Update(): void;

	/** Visibility state */
	visible: bin;

	/** Object width */
	width: num;
}


declare class GfxRectangle {

	/** The alpha value */
	alpha: num_frc;

	/** The rotation fraction */
	angle: num_frc;

	/** Check if the sprite contains a point */
	Contains(x: num_frc, y: num_frc): bin;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** PIXI graphic */
	graphic: obj;

	/** The object's group */
	group: str;

	/** The objects height */
	height: num_frc;

	/** Rotation x pivot */
	pivotX: num_frc;

	/** Rotation y pivot */
	pivotY: num_frc;

	/** Horizontal scaling */
	scaleX: num_fac;

	/** Vertical scaling */
	scaleY: num_fac;

	/**
	 * Set 2d transformation
	 * @param mtx Matrix
	 */
	SetMatrix(mtx: Matrix): void;

	/** Updates internal properties */
	Update(): void;

	/** Visibility state */
	visible: bin;

	/** Object width */
	width: num;
}


declare class GfxSound {

	/** The file url */
	file: str;

	/** Pause the track */
	Pause(): void;

	/**
	 * Play the soundtrack
	 * @param delay `delay before playback start`
	 * @param gap `time gap between two loops`
	 */
	Play(loop: bin, delay: num_mls, gap: num_mls): void;
}


declare class GfxSprite {

	/** Incicates if added to game */
	added: bin;

	/** The alpha value */
	alpha: num_frc;

	/** The rotation fraction */
	angle: num_frc;

	/** Sprite aspect ratio */
	aspect: num;

	/** Check if the sprite contains a point */
	Contains(x: num_frc, y: num_frc): bin;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Flip sprite */
	Flip(horiz: bin, vert: bin): void;

	/** Get current frame */
	GetFrame(): num_int;

	/** Go to animation frame */
	Goto(frame: num_int): void;

	/** The object's group */
	group: str;

	/** The objects height */
	height: num_frc;

	/** Pause tweening */
	PauseTween(): void;

	/** Rotation x pivot */
	pivotX: num_frc;

	/** Rotation y pivot */
	pivotY: num_frc;

	/** Play sprite animation */
	Play(startFrame: num_int, speed: num_int, loop: bin): void;

	/** Play range of animation frames */
	PlayRange(firstFrame: num_int, lastFrame: num_int, speed: num, loop: bin): void;

	/** Play to animation frame */
	PlayTo(frame: num_int): void;

	/** Resume tweening */
	PlayTween(): void;

	/** Horizontal scaling */
	scaleX: num_fac;

	/** Vertical scaling */
	scaleY: num_fac;

	/** Set animation looping */
	SetLoop(loop: bin): void;

	/**
	 * Set 2d transformation
	 * @param mtx Matrix
	 */
	SetMatrix(mtx: Matrix): void;

	/** Set animation speed */
	SetPlaySpeed(speed: num): void;

	/** Set animation frame range */
	SetRange(firstFrame: num_int, lastFrame: num_int, loop: bin, play: bin, speed: num): void;

	/** Set sprite size */
	SetSize(w: num_frc, h: num_frc): void;

	/** Change animation */
	SetSpriteSheet(sheet: GfxSpriteSheet): void;

	/** Change sprite texture */
	SetTexture(tx: GfxTexture): void;

	/**
	 * Setup tween methods
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	SetTween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration: num_mls, type: str, repeat: num_int, yoyo: bin, callback: (this: GfxSprite) => void): void;

	/** Start tween */
	StartTween(): void;

	/** Update tween to now */
	StepTween(): void;

	/** Stop animation */
	Stop(): void;

	/** Stop animation on frame */
	StopAt(frame: num_int): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration: num_mls, type: str, repeat: num_int, yoyo: bin, callback: (this: GfxSprite) => void): void;

	/** Updates internal properties */
	Update(): void;

	/** Visibility state */
	visible: bin;

	/** Object width */
	width: num;

	/** X-position on the screen */
	x: num_frc;

	/** Y-position on the screen */
	y: num_frc;
}


declare class GfxSpriteSheet {

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Loaded indicator */
	loaded: bin;
}


declare class GfxText {

	/** Multiline text alignment */
	align: "left"|"center"|"right";

	/** The alpha value */
	alpha: num_frc;

	/** The rotation fraction */
	angle: num_frc;

	/** Check if the sprite contains a point */
	Contains(x: num_frc, y: num_frc): bin;

	/** Source file */
	file: str_pth;

	/** Pixel font size */
	fontSize: num_pxl;

	/** The objects height */
	height: num_frc;

	/** Rotation x pivot */
	pivotX: num_frc;

	/** Rotation y pivot */
	pivotY: num_frc;

	/** Horizontal scaling */
	scaleX: num_fac;

	/** Vertical scaling */
	scaleY: num_fac;

	/**
	 * Set 2d transformation
	 * @param mtx Matrix
	 */
	SetMatrix(mtx: Matrix): void;

	/** Updates internal properties */
	Update(): void;

	/** Visibility state */
	visible: bin;

	/** Object width */
	width: num;
}


declare class Matrix {

	/**
	 * The PIXI.js Matrix
	 * @return Pixi Matrix
	 */
	mtx: obj;

	/** Move by a given amount on both axes */
	Translate(tx: num, ty: num): void;

	/** Rotate by a given angle around the axes origin (0,0) */
	Rotate(angle: num): void;

	/** Scale by a given amount on both axes */
	Scale(sx: num, sy: num): void;

	/** Set the matrix elements to specific values */
	Set(a: num, b: num, c: num, d: num, tx: num, ty: num): void;

	/** Skew / Distort the object on both axes */
	Skew(skewX: num, skewY: num): void;

	/** Shortcut to app.../app/Vibrate) */
	Transform(tx: num, ty: num, pivotX: num, pivotY: num, scaleX: num, scaleY: num, rotation: num, skewX: num, skewY: num): void;
}


