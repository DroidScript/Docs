/** all types */
declare type all = any;
/** Boolean */
declare type bin = boolean;
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
/** void */
declare type nil = void;
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


/** Add extra options to the app */
declare function _AddOptions(options: str_com): void;

/** Add extra permissions to the app when exporting APKs */
declare function _AddPermissions(perms: str_com): void;

/** Manually include extra plugins in the app */
declare function _AddPlugins(plugins: str_com): void;

/**
 * Helper class that automaticall binds the 'this' context for all methods to the current object instance
 * @return class
 */
declare class Bound {

	/** Binds the 'this' context for all methods */
	bindMethods(ctx: all): void;
}

/** Global App configuration modes */
declare const cfg: Dscfg;

/**
 * Creates a new plugin object to interact with a dynamically loaded java plugin
 * @param name `Package Name`
 * @return Plugin
 */
declare function _CreatePlugin(name: str, options: str): DsPlugin;

/** Shortcut for ../app/GetDisplayHeight */
declare function DH(): num_int;

/** Shortcut for ../app/GetDisplayWidth */
declare function DW(): num_int;

/** Disables callback optimization */
declare function I(callback: (...args: lst) => void): (...args: lst) => void;

/** Functions to interact with the DroidScript IDE */
declare const ide: Dside;

/** Node.js style LoadScript helper */
declare function include(file: str_pth, noDefer?: bin): void;

/** Disables callback optimization and sets a custom this context */
declare function M(ctx: all, callback: (...args: lst) => void): (this: all, ...args: lst) => void;

/** Remove extra permissions from the app when exporting APKs */
declare function _RemovePermissions(perms: str_com): void;

/** Translate a string id into its respective language from the lang.json file */
declare function T(id: str, lang?: str): str;

/** Shortcut for ../app/GetTextBounds.width */
declare function TW(txt: str, size: num): num;


declare class Dscfg {

	/** Start the app in 'Game' mode */
	Game: nil;

	/** Start the app in 'Landscape' mode */
	Landscape: nil;

	/** Start the app in 'Portrait' mode */
	Portrait: nil;

	/** Make the app transparent */
	Transparent: nil;

	/** Share */
	Share: nil;

	/** U sb */
	USB: nil;

	/** Start the app in 'Light' mode */
	Light: nil;

	/** Start the app in 'Dark' mode */
	Dark: nil;

	/** Start the app in legacy 'Holo' mode */
	Holo: nil;

	/** Allow the use of MaterialUI contruls in your app */
	MUI: nil;

	/** Start the app as 'Node.js' process */
	Node: nil;

	/** Start the app as 'Node.js' Ecma Script Module process */
	NodeESM: nil;

	/** Disable DOM library to significantly increase performance */
	Fast: nil;

	/** Automatically start a local server for your app */
	Serv: nil;

	/** Shows a Console instead of a GUI app */
	Console: nil;
}


declare class DsPlugin {

	/** Returns the type of the control */
	GetType(): "Plugin";

	/** Call a function in the java plugin with up to 8 parameters */
	Send(cmd: str, p1?: all, p2?: all, p3?: all, p4?: all, p5?: all, p6?: all, p7?: all, p8?: all): str;

	/** Calls a command on an internal java object with up to 8 parameters */
	SendObj(cmd: str, obj: all, p1?: all, p2?: all, p3?: all, p4?: all, p5?: all, p6?: all, p7?: all, p8?: all): str;

	/** Requests to create a new object in the java plugin with up to 8 parameters, and expects a unique identifier as return value in return */
	CreateObj(type: str, p1?: all, p2?: all, p3?: all, p4?: all, p5?: all, p6?: all, p7?: all, p8?: all): str;

	/** Sends an image to the java plugin */
	SendImg(cmd: str, img?: DsImage, width?: num_int, height?: num_int): str;

	/** Sends a camera view to the java plugin */
	SendCam(cmd: str, cam: DsCameraView): str;

	/** Calls the destroy methon on the java plugin */
	Destroy(): void;
}


declare class Dside {

	/** Create a new plugin as DroidScript project */
	MakePlugin(name: str): void;

	/** Enable AutoWifi in the IDE */
	SetAutoWifi(auto: bin): void;

	/** Set a default start application */
	SetAutoStart(appName: str): void;

	/**
	 * Obfuscate a javascript source file
	 * @param options <br>
 	 * &emsp; `NoSwap` - Dont swap function names
	 */
	Obfuscate(src: str_pth, desc: str_pth, options: string | ("NoSwap")[]): void;

	/** Export your Game as pure HTML project */
	Export(type: "GameView"|"Html"|"Hybrid", src: str_pth, desc: str_pth): void;

	/** Add a NodeJS module to your app from code */
	AddModule(name: str, overwrite?: bin): void;
}


