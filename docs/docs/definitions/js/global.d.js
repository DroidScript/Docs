/** @typedef {any} all all types */
/** @typedef {boolean} bin Boolean */
/** @typedef {Function} fnc Function */
/** @typedef {any[]} lst List */
/** @typedef {number} num Number */
/** @typedef {object} obj Object */
/** @typedef {string} str String */
/** @typedef {void} nil void */
/** @typedef {any[]} lst_obj of objects */
/** @typedef {number[]} lst_num of numbers */
/** @typedef {number} num_byt bytes */
/** @typedef {number} num_col hexadecimal 0xrrggbb */
/** @typedef {number} num_dat datetime in milliseconds (from JS Date object) */
/** @typedef {number} num_deg angle in degrees (0..360) */
/** @typedef {number} num_dhx 0-255 */
/** @typedef {number} num_fac factor */
/** @typedef {number} num_flt float */
/** @typedef {number} num_fps frames per second */
/** @typedef {number} num_frc fraction (0..1) */
/** @typedef {number} num_gbt gigabytes */
/** @typedef {number} num_hrz hertz */
/** @typedef {number} num_int integer */
/** @typedef {number} num_met meters */
/** @typedef {number} num_mls milliseconds */
/** @typedef {number} num_mtu maximum transmission unit */
/** @typedef {number} num_prc percent */
/** @typedef {number} num_pxl pixel */
/** @typedef {number} num_rad angle in radient (0..2*π) */
/** @typedef {number} num_sec seconds */
/** @typedef {string} str_acc account Email */
/** @typedef {string} str_b64 base64 encoded */
/** @typedef {string} str_col <br>&nbsp;&nbsp;hexadecimal: “#rrggbb”, “#aarrggbb”<br>&nbsp;&nbsp;colourName: “red”, “green”, ... */
/** @typedef {string|string[]} str_com comma “,” separated */
/** @typedef {string} str_eml comma separated email addresses or names */
/** @typedef {string} str_flt float */
/** @typedef {string} str_fmt format */
/** @typedef {string} str_htm html code */
/** @typedef {string} str_hex hexadecimal “00”..“FF” */
/** @typedef {string} str_int integer */
/** @typedef {string} str_jsc javascript code */
/** @typedef {string} str_jsn JSON object */
/** @typedef {string} str_lst separated */
/** @typedef {string} str_mim mimetype */
/** @typedef {string} str_mod mode */
/** @typedef {string} str_num number */
/** @typedef {string} str_oid object id “#id” */
/** @typedef {string} str_ort “Default”, “Portrait”, “Landscape” */
/** @typedef {string} str_pip pipe “|” separated */
/** @typedef {string} str_ptc file path or content:// uri */
/** @typedef {string} str_pth path to file or folder ( “/absolute/...” or “relative/...” ) */
/** @typedef {string} str_ptf path to file ( “/absolute/...” or “relative/...” ) */
/** @typedef {string} str_ptd path to folder ( “/absolute/...” or “relative/...” ) */
/** @typedef {string} str_pfa “/absolute/...” path to a file */
/** @typedef {string} str_pfr “relative/...” path to a file */
/** @typedef {string} str_pda “/absolute/...” path to a folder */
/** @typedef {string} str_pdr “relative/...” path to a folder */
/** @typedef {string} str_pxl integer in pixels */
/** @typedef {string} str_smc semicolon “;” separated */
/** @typedef {string} str_sql sql code */
/** @typedef {string} str_sty style */
/** @typedef {string} str_uri URI encoded */
/** @typedef {string} str_url url path */


/**
 * Add extra options to the app
 * @param {str_com} options 
 */
function _AddOptions(options) {return}

/**
 * Add extra permissions to the app when exporting APKs
 * @param {str_com} perms 
 */
function _AddPermissions(perms) {return}

/**
 * Manually include extra plugins in the app
 * @param {str_com} plugins 
 */
function _AddPlugins(plugins) {return}

/**
 * Creates a new plugin object to interact with a dynamically loaded java plugin
 * @param {str} name `Package Name`
 * @param {str} options 
 * @return {DsPlugin} Plugin
 */
function _CreatePlugin(name, options) {return}

/**
 * Remove extra permissions from the app when exporting APKs
 * @param {str_com} perms 
 */
function _RemovePermissions(perms) {return}

/** Helper class that automaticall binds the 'this' context for all methods to the current object instance */
class Bound {

	/**
	 * Binds the 'this' context for all methods
	 * @param {all} ctx 
	 */
	bindMethods(ctx) {return}
}

/** @type {Dscfg} Global App configuration modes */
const cfg = null;

/**
 * Shortcut for ../app/GetDisplayHeight
 * @return {num_int} 
 */
function DH() {return}

/**
 * Shortcut for ../app/GetDisplayWidth
 * @return {num_int} 
 */
function DW() {return}

/**
 * Disables callback optimization
 * @param {(...args: lst) => void} callback 
 * @return {(...args: lst) => void} 
 */
function I(callback) {return}

/** @type {Dside} Functions to interact with the DroidScript IDE */
const ide = null;

/**
 * Node.js style LoadScript helper
 * @param {str_pth} file 
 * @param {bin} [noDefer=false] 
 */
function include(file, noDefer) {return}

/**
 * Disables callback optimization and sets a custom this context
 * @param {all} ctx 
 * @param {(...args: lst) => void} callback 
 * @return {(this: all, ...args: lst) => void} 
 */
function M(ctx, callback) {return}

/**
 * Translate a string id into its respective language from the lang.json file
 * @param {str} id 
 * @param {str} [lang='en'] 
 * @return {str} 
 */
function T(id, lang) {return}

/**
 * Shortcut for ../app/GetTextBounds.width
 * @param {str} txt 
 * @param {num} size 
 * @return {num} 
 */
function TW(txt, size) {return}


class DsPlugin {

	/**
	 * Returns the type of the control
	 * @return {"Plugin"} 
	 */
	GetType() {return}

	/**
	 * Call a function in the java plugin with up to 8 parameters
	 * @param {str} cmd 
	 * @param {all} [p1] 
	 * @param {all} [p2] 
	 * @param {all} [p3] 
	 * @param {all} [p4] 
	 * @param {all} [p5] 
	 * @param {all} [p6] 
	 * @param {all} [p7] 
	 * @param {all} [p8] 
	 * @return {str} 
	 */
	Send(cmd, p1, p2, p3, p4, p5, p6, p7, p8) {return}

	/**
	 * Calls a command on an internal java object with up to 8 parameters
	 * @param {str} cmd 
	 * @param {all} obj 
	 * @param {all} [p1] 
	 * @param {all} [p2] 
	 * @param {all} [p3] 
	 * @param {all} [p4] 
	 * @param {all} [p5] 
	 * @param {all} [p6] 
	 * @param {all} [p7] 
	 * @param {all} [p8] 
	 * @return {str} 
	 */
	SendObj(cmd, obj, p1, p2, p3, p4, p5, p6, p7, p8) {return}

	/**
	 * Requests to create a new object in the java plugin with up to 8 parameters, and expects a unique identifier as return value in return
	 * @param {str} type 
	 * @param {all} [p1] 
	 * @param {all} [p2] 
	 * @param {all} [p3] 
	 * @param {all} [p4] 
	 * @param {all} [p5] 
	 * @param {all} [p6] 
	 * @param {all} [p7] 
	 * @param {all} [p8] 
	 * @return {str} 
	 */
	CreateObj(type, p1, p2, p3, p4, p5, p6, p7, p8) {return}

	/**
	 * Sends an image to the java plugin
	 * @param {str} cmd 
	 * @param {DsImage} [img] 
	 * @param {num_int} [width] 
	 * @param {num_int} [height] 
	 * @return {str} 
	 */
	SendImg(cmd, img, width, height) {return}

	/**
	 * Sends a camera view to the java plugin
	 * @param {str} cmd 
	 * @param {DsCameraView} cam 
	 * @return {str} 
	 */
	SendCam(cmd, cam) {return}

	/** Calls the destroy methon on the java plugin */
	Destroy() {return}
}


class Dscfg {

	/** @type {nil} Start the app in 'Game' mode */
	Game;

	/** @type {nil} Start the app in 'Landscape' mode */
	Landscape;

	/** @type {nil} Start the app in 'Portrait' mode */
	Portrait;

	/** @type {nil} Make the app transparent */
	Transparent;

	/** @type {nil} Share */
	Share;

	/** @type {nil} U sb */
	USB;

	/** @type {nil} Start the app in 'Light' mode */
	Light;

	/** @type {nil} Start the app in 'Dark' mode */
	Dark;

	/** @type {nil} Start the app in legacy 'Holo' mode */
	Holo;

	/** @type {nil} Allow the use of MaterialUI contruls in your app */
	MUI;

	/** @type {nil} Start the app as 'Node.js' process */
	Node;

	/** @type {nil} Start the app as 'Node.js' Ecma Script Module process */
	NodeESM;

	/** @type {nil} Disable DOM library to significantly increase performance */
	Fast;

	/** @type {nil} Automatically start a local server for your app */
	Serv;

	/** @type {nil} Shows a Console instead of a GUI app */
	Console;
}


class Dside {

	/**
	 * Create a new plugin as DroidScript project
	 * @param {str} name 
	 */
	MakePlugin(name) {return}

	/**
	 * Enable AutoWifi in the IDE
	 * @param {bin} auto 
	 */
	SetAutoWifi(auto) {return}

	/**
	 * Set a default start application
	 * @param {str} appName 
	 */
	SetAutoStart(appName) {return}

	/**
	 * Obfuscate a javascript source file
	 * @param {str_pth} src 
	 * @param {str_pth} desc 
	 * @param {string | ("NoSwap")[]} options <br>
 	 * &emsp; `NoSwap` - Dont swap function names
	 */
	Obfuscate(src, desc, options) {return}

	/**
	 * Export your Game as pure HTML project
	 * @param {"GameView"|"Html"|"Hybrid"} type 
	 * @param {str_pth} src 
	 * @param {str_pth} desc 
	 */
	Export(type, src, desc) {return}

	/**
	 * Add a NodeJS module to your app from code
	 * @param {str} name 
	 * @param {bin} [overwrite] 
	 */
	AddModule(name, overwrite) {return}
}


