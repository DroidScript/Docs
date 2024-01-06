/** all types */
declare type all = any;
/** Boolean */
declare type bin = boolean;
/** app object */
declare type dso = AppObject;
/** game object */
declare type gvo = GameObject;
/** smartwatch object */
declare type swo = SmartWatchObject;
/** JavaScript object */
declare type jso = JSObject;
/** Function */
declare type fnc = Function;
/** List */
declare type lst = any[];
/** Number */
declare type num = number;
/** Object */
declare type obj = object;
/** String */
declare type str = string;
/** ui object */
declare type uio = UIObject;
/** of objects */
declare type lst_obj = any[];
/** of numbers */
declare type lst_num = number[];
/** bytes */
declare type num_byt = number;
/** hexadecimal 0xrrggbb */
declare type num_col = number;
/** datetime in milliseconds (from JS Date object) */
declare type num_dat = number;
/** angle in degrees (0..360) */
declare type num_deg = number;
/** 0-255 */
declare type num_dhx = number;
/** factor */
declare type num_fac = number;
/** float */
declare type num_flt = number;
/** frames per second */
declare type num_fps = number;
/** fraction (0..1) */
declare type num_frc = number;
/** gigabytes */
declare type num_gbt = number;
/** hertz */
declare type num_hrz = number;
/** integer */
declare type num_int = number;
/** meters */
declare type num_met = number;
/** milliseconds */
declare type num_mls = number;
/** maximum transmission unit */
declare type num_mtu = number;
/** percent */
declare type num_prc = number;
/** pixel */
declare type num_pxl = number;
/** angle in radient (0..2*π) */
declare type num_rad = number;
/** seconds */
declare type num_sec = number;
/** account Email */
declare type str_acc = string;
/** base64 encoded */
declare type str_b64 = string;
/** <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ... */
declare type str_col = string;
/** comma “,” separated */
declare type str_com = string|string[];
/** comma separated email addresses or names */
declare type str_eml = string;
/** float */
declare type str_flt = string;
/** format */
declare type str_fmt = string;
/** html code */
declare type str_htm = string;
/** hexadecimal “00”..“FF” */
declare type str_hex = string;
/** integer */
declare type str_int = string;
/** javascript code */
declare type str_jsc = string;
/** JSON object */
declare type str_jsn = string;
/** separated */
declare type str_lst = string;
/** mimetype */
declare type str_mim = string;
/** mode */
declare type str_mod = string;
/** number */
declare type str_num = string;
/** object id “#id” */
declare type str_oid = string;
/** “Default”, “Portrait”, “Landscape” */
declare type str_ort = string;
/** pipe “|” separated */
declare type str_pip = string;
/** file path or content:// uri */
declare type str_ptc = string;
/** path to file or folder ( “/absolute/...” or “relative/...” ) */
declare type str_pth = string;
/** path to file ( “/absolute/...” or “relative/...” ) */
declare type str_ptf = string;
/** path to folder ( “/absolute/...” or “relative/...” ) */
declare type str_ptd = string;
/** “/absolute/...” path to a file */
declare type str_pfa = string;
/** “relative/...” path to a file */
declare type str_pfr = string;
/** “/absolute/...” path to a folder */
declare type str_pda = string;
/** “relative/...” path to a folder */
declare type str_pdr = string;
/** integer in pixels */
declare type str_pxl = string;
/** semicolon “;” separated */
declare type str_smc = string;
/** sql code */
declare type str_sql = string;
/** style */
declare type str_sty = string;
/** URI encoded */
declare type str_uri = string;
/** url path */
declare type str_url = string;


class DsGfx {

	/** Adds a background to the game */
	AddBackground(obj: GfxBackground): void;

	/** Adds a basic shape object to the game.
	 * See Also: CreateCircle, CreateEllipse, CreateRectangle, CreatePolygon */
	AddGraphic(obj: obj, x: num_frc, y: num_frc, w: num_frc, h: num_frc, angle: num_rad, alpha: num_frc): void;

	/** Adds physics to the game */
	AddPhysics(gravity: num, accuracy: num, sleep: num): void;

	/** Adds a sprite object */
	AddSprite(sprite: GfxSprite, x: num_frc, y: num_frc, w: num_frc, h: num_frc, angle: num_frc, alpha: num_frc): void;

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
	CreateEllipse(width: num_frc, height: num_frc, color: num_col, lineWidth: num_pxl, lineColor: num_col, lineAlpha: num_frc, group: str): GfxEllipse;

	/**
	 * Creates a polygonal game object
	 * @param points 
 	 * &emsp; `point_x_y`
	 */
	CreatePolygon(points: num_frc[], pivotX: num_frc, pivotY: num_frc, color: num_col, lineWidth: num_pxl, lineColor: num_col, lineAlpha: num_frc, group: str): GfxPolygon;

	/** Creates a rectangle */
	CreateRectangle(width: num_frc, height: num_frc, color: num_col, lineWidth: num_pxl, lineColor: num_col, lineAlpha: num_frc, group: str): GfxRectangle;

	/** Returns a new sound object */
	CreateSound(file: str_ptf): GfxSound;

	/** Returns a new sprite object */
	CreateSprite(file: str_ptf, group: str, callback: () => void): GfxSprite;

	/** Returns a new SpriteSheet object */
	CreateSpriteSheet(file: str_ptf, callback: () => void): GfxSpriteSheet;

	/** Returns a new text object */
	CreateText(text: str, fontSize: num, fontFile: str_ptf, align: "left"|"center"|"right", callback: () => void): GfxText;

	/** Returns a new texture object */
	CreateTexture: GfxTexture;

	/** GameView custom data */
	data: obj;

	/** En/Disables the physics engine */
	EnablePhysics(enabled: bin): void;

	/** Enclose an area with a physics fence */
	Enclose(groupId: str, options: string | ("left"|"top"|"right"|"bottom")[], density: num, bounce: num, friction: num, offset: num): void;

	/** Get joystick states */
	GetJoystick(id: str): obj;

	/** Get object's order index */
	GetOrder(object: gvo): num_int;

	/**
	 * Get time since last gfx.Pause or gfx.Play
	 * @return Date
	 */
	GetTime(): jso;

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
	SetBackColor(col: str_col): void;

	/** Define a callback which is called when two [Physics objects](AddPhysics.htm) collide */
	SetOnCollide(callback: (a: gvo, b: gvo) => void): void;

	/** Define a KeyDown callback */
	SetOnKeyDown(callback: (key: "LETTER"|"Shift"|"Ctrl"|"Alt"|"Meta"|"...") => void): void;

	/** Define a KeyUp callback */
	SetOnKeyUp(callback: (key: "LETTER"|"Shift"|"Ctrl"|"Alt"|"Meta"|"...") => void): void;

	/** Set callback for touch down */
	SetOnTouchDown(callback: (x: num_frc|fractions, y: num_frc|fractions) => void): void;

	/** Set callback for touch move */
	SetOnTouchMove(callback: (x: num_frc|fractions, y: num_frc|fractions) => void): void;

	/** Set callback for touch up */
	SetOnTouchUp(callback: (x: num_frc|fractions, y: num_frc|fractions) => void): void;

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

class GfxPhysics {

	/**
	 * Adds velocity to the object
	 * @param points 
 	 * &emsp; `x`\
 	 * &emsp; `y`
	 */
	AddShape(type: "Polygon", points: [num_frc, num_frc][]): void;

	/** Adds velocity to the object */
	AddVelocity(x: num, y: num, angular: num, bodyRelative: bin): void;

	/**
	 * Applies an impulse p=m*v to the object
	 * @param offsetX -1..1
	 * @param offsetY -1..1
	 */
	ApplyImpulse(x: num, y: num, offsetX: num, offsetY: num): void;

	/** Checks if a point is in the hitbox */
	Contains(x: num_frc, y: num_frc): bin;

	/** Temporally En/Disables physics for the game object */
	EnablePhysics(enable: bin): void;

	/** Returns the total velocity or a component of it */
	GetVelocity(component: "x"|"y"|"angular"): num;

	/** Removes physics from the game oblect */
	RemovePhysics(): void;

	/** Applies a 2D transformation matrix to the game object */
	SetMatrix(mtx: Matrix): void;

	/** Set physics properties */
	SetPhysics(groupId: str, type: "moveable"|"fixed", density: num, bounce: num, friction: num, linearDamp: num, angularDamp: num): void;

	/** Define the collision shape */
	SetShape(shape: "rect"|"round", width: num_frc, height: num_frc): void;

	/** Set the object velocity */
	SetVelocity(x: num, y: num, angular: num, bodyRelative: bin): void;

	/** Update internal physics properties */
	UpdatePhysics(): void;
}


class GfxBackground {

	/** Scroll Background */
	Scroll(x: num, y: num): void;

	/** Indicates if ready for use */
	loaded: bin;
}


class GfxCircle {
}


class GfxEllipse {
}


class GfxPolygon {
}


class GfxRectangle {
}


class GfxSound {

	/** The file url */
	file: str;

	/** Pause the track */
	Pause(): void;

	/**
	 * Play the soundtrack
	 * @param delay delay before playback start
	 * @param gap time gap between two loops
	 */
	Play(loop: bin, delay: num_mls, gap: num_mls): void;
}


class GfxSprite {

	/** Incicates if added to game */
	added: bin;

	/** Sprite aspect ratio */
	aspect: num;

	/** Flip sprite */
	Flip(horiz: bin, vert: bin): void;

	/** Get current frame */
	GetFrame(): num_int;

	/** Go to animation frame */
	Goto(frame: num_int): void;

	/** Play sprite animation */
	Play(startFrame: num_int, speed: num_int, loop: bin): void;

	/** Play range of animation frames */
	PlayRange(firstFrame: num_int, lastFrame: num_int, speed: num, loop: bin): void;

	/** Play to animation frame */
	PlayTo(frame: num_int): void;

	/** Set animation looping */
	SetLoop(loop: bin): void;

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

	/** Stop animation */
	Stop(): void;

	/** Stop animation on frame */
	StopAt(frame: num_int): void;

	/** X-position on the screen */
	x: num_frv;

	/** Y-position on the screen */
	y: num_frc;
}


class GfxSpriteSheet {

	/** Loaded indicator */
	loaded: bin;
}


class GfxText {

	/** Multiline text alignment */
	align: "left"|"center"|"right";

	/** Source file */
	file: str_pth;

	/** Pixel font size */
	fontSize: num_pxl;
}


