declare var app: DsApp;
declare type AppObject = DsAudioRecorder | DsBluetoothList | DsBluetoothSerial | DsButton | DsCameraView | DsCheckBox | DsCloudStore | DsCodeEdit | DsCrypt | DsDialog | DsDownloader | DsEmail | DsFile | DsGameView | DsGLView | DsImage | DsLayout | DsList | DsListDialog | DsLocator | DsMediaPlayer | DsMediaStore | DsNetClient | DsNode | DsNotification | DsNxt | DsOverlay | DsPhoneState | DsPlayStore | DsScroller | DsSeekBar | DsSensor | DsService | DsSMS | DsSpeechRec | DsSpinner | DsSwitch | DsSynth | DsSysProc | DsTabs | DsText | DsTextEdit | DsTheme | DsToggle | DsUSBSerial | DsVideoView | DsWebServer | DsWebSocket | DsWebView | DsWizard | DsYesNoDialog | DsZipUtil | DsDatabase | DsCheckList;
/** app object */
declare type dso = AppObject;

declare class DsApp {

	/**
	 * Create and add Button to Layout
	 * @param options `FontAwesome`, `Html`, `Monospace`, `Normal`, `Aluminium`, `Gray`, `Lego`, `SingleLine`, `Custom`, `NoPad`, `FillX/Y`, `NoSound`
	 */
	AddButton(layout: DsLayout, text: str, width?: num_frc, height?: num_frc, options?: str_com): DsButton;

	/**
	 * Create and add CameraView to Layout
	 * @param options `Front`, `UseBitmap`, `UseABGR`, `NoRotate`, `<resolution>`\
 	 * &emsp; `<resolution>` - CIF: 352x288\
 	 * &emsp; QQVGA: 160x120\
 	 * &emsp; QVGA: 320x240\
 	 * &emsp; SVGA: 800x600\
 	 * &emsp; VGA: 640x480\
 	 * &emsp; XGA: 1024x768\
 	 * &emsp; UXGA: 1600x1200
	 */
	AddCameraView(layout: DsLayout, width?: num_frc, height?: num_frc, options?: str_com): DsCameraView;

	/**
	 * Create and add Button to Layout
	 * @param options <br>
 	 * &emsp; `fix` - image with fixed resolution\
 	 * &emsp; `px` - use pixel values for size\
 	 * &emsp; `Button` - causes image to depress like a button when touched\
 	 * &emsp; `async` - loads the image asynchronously\
 	 * &emsp; `Icon` - allows loading of app icons\
 	 * &emsp; `NoPlay` - prevent gifs from playing automatically
	 */
	AddCanvas(layout: DsLayout, width?: num, height?: num, options?: string | ("fix"|"alias"|"px"|"Button"|"ScaleCenter"|"async"|"FontAwesome"|"Resize"|"TouchThrough"|"Icon"|"wallpaper"|"NoPlay")[], pxw?: num_pxl, pxh?: num_pxl): DsImage;

	/**
	 * Create and add CheckBox to Layout
	 * @param options `FillX/Y`, `NoSound`
	 */
	AddCheckBox(layout: DsLayout, text: str, width?: num_frc, height?: num_frc, options?: str_com): DsCheckBox;

	/**
	 * Create and add CodeEdit to Layout
	 * @premium
	 * @param options `FillX/Y`
	 */
	AddCodeEdit(layout: DsLayout, text: str, width?: num_frc, height?: num_frc, options?: str_com): DsCodeEdit;

	/** Adds a slide-able layout on given side */
	AddDrawer(layout: DsLayout, side: "Left"|"Right", width?: num_frc, grabWidth?: num_frc): void;

	/**
	 * Create and add Image to Layout
	 * @param options <br>
 	 * &emsp; `px` - use pixel values for size\
 	 * &emsp; `Button` - causes image to depress like a button when touched\
 	 * &emsp; `async` - loads the image asynchronously\
 	 * &emsp; `Icon` - allows loading of app icons\
 	 * &emsp; `NoPlay` - prevent gifs from playing automatically
	 */
	AddImage(layout: DsLayout, file: str_ptf, width?: num, height?: num, options?: string | ("fix"|"alias"|"px"|"Button"|"ScaleCenter"|"async"|"FontAwesome"|"Resize"|"TouchThrough"|"Icon"|"wallpaper"|"NoPlay")[], pxw?: num_pxl, pxh?: num_pxl): DsImage;

	/**
	 * Adds a layout to the app
	 * @param options `TouchThrough`, `TouchSpy`, `Left`, `Top`, `Right`, `Bottom`, `Center`, `H/VCenter`, `Wrap`, `Horizontal`, `Vertical`, `FillX/Y`\
 	 * &emsp; `TouchThrough` - forwards touch events to underlying children\
 	 * &emsp; `TouchSpy` - spies for touch events on all children
	 */
	AddLayout(layout: DsLayout, type?: "Linear"|"Absolute"|"Frame"|"Card", options?: str_com): DsLayout;

	/**
	 * Create and add List to Layout
	 * @param options <br>
 	 * &emsp; `bold` - bold item titles\
 	 * &emsp; `Expand` - Expand list to full height inside scrollers\
 	 * &emsp; `Menu` - applies various settings to make the list appear like an in-app menu\
 	 * &emsp; `Horiz` - makes title and body text flow horizontally
	 */
	AddList(layout: DsLayout, list: str_lst, width?: num_frc, height?: num_frc, options?: string | ("bold"|"Expand"|"Menu"|"Horiz"|"html"|"FontAwesome"|"monospace"|"Normal"|"WhiteGrad"|"BlackGrad"|"AlumButton"|"GreenButton"|"OrangeButton"|"NoSound")[], delim?: str): DsList;

	/** Create and add Scroller to Layout */
	AddScroller(layout: DsLayout, width?: num_frc, height?: num_frc, options?: string | ("FillX"|"FillY"|"FillXY"|"Horizontal"|"Vertical"|"NoScrollBar"|"ScrollFade")[]): DsScroller;

	/**
	 * Create and add SeekBar to Layout
	 * @param options `FillX/Y`
	 */
	AddSeekBar(layout: DsLayout, width?: num_frc, height?: num_frc, options?: str_com): DsSeekBar;

	/**
	 * Create and add Spinner to Layout
	 * @param options `FillX/Y`, `NoSound`
	 */
	AddSpinner(layout: DsLayout, list: str_com, width?: num_frc, height?: num_frc, options?: str_com): DsSpinner;

	/**
	 * Create and add Switch toggle to Layout
	 * @param options `Monospace`, `Custom`, `NoPad`, `FillX/Y`, `NoSound`
	 */
	AddSwitch(layout: DsLayout, text: str, width?: num_frc, height?: num_frc, options?: str_com): DsSwitch;

	/** Returns a new Tabs object */
	AddTabs(list: str_com, width?: num_frc, height?: num_frc, options?: string | ("Fade"|"FontAwesome"|"NoMargins"|"VCenter")[]): DsTabs;

	/**
	 * Create and add Text to Layout
	 * @param options `AutoScale`, `AutoSize`, `Multiline`, `Left`, `Right`, `Html`, `Bold`, `Monospace`, `NoWrap`, `Log`, `FillX/Y`
	 */
	AddText(layout: DsLayout, text: str, width?: num_frc, height?: num_frc, options?: str_com): DsText;

	/**
	 * Create and add TextEdit to Layout
	 * @param options `AutoSelect`, `AutoSize`, `Bold`, `Extract`, `Left`, `Center`, `Right`, `Monospace`, `NoSpell`, `NoKeyboard`, `Numbers`, `ReadOnly`, `SingleLine`, `FillX/Y`, `Password`\
 	 * &emsp; `AutoSelect` - Select all Text if user enter the Textedit\
 	 * &emsp; `AutoSize` - Expand or shrink the control automatically so the text fits in the Textedit\
 	 * &emsp; `Bold` - Write bold text\
 	 * &emsp; `Extract` - enables full screen keyboard in landscape mode\
 	 * &emsp; `Left` - Justify the text to the left\
 	 * &emsp; `Center` - Justify the text in the middle\
 	 * &emsp; `Right` - Justify the text to the right\
 	 * &emsp; `NoSpell` - Disable the spell-checker\
 	 * &emsp; `NoKeyboard` - Shows no Keyboard\
 	 * &emsp; `ReadOnly` - The user cant change the Text\
 	 * &emsp; `SingleLine` - Dont break text for long lines and change 'Enter' key to 'Done'\
 	 * &emsp; `Password` - displays characters as dots
	 */
	AddTextEdit(layout: DsLayout, text: str, width?: num_frc, height?: num_frc, options?: str_com): DsTextEdit;

	/**
	 * Create and add Toggle to Layout
	 * @param options `Monospace`, `Custom`, `NoPad`, `FillX/Y`, `NoSound`
	 */
	AddToggle(layout: DsLayout, text: str, width?: num_frc, height?: num_frc, options?: str_com): DsToggle;

	/** Create and add VideoView to Layout */
	AddVideoView(layout: DsLayout, width?: num_frc, height?: num_frc, options?: str_com): DsVideoView;

	/**
	 * Create and add WebView to Layout
	 * @param options `AllowZoom`, `AutoZoom`, `Wide`, `FillX/Y`, `NoAccel`, `NoActionBar`, `IgnoreErrors`, `IgnoreSSLErrors`, `NoApp`, `NoCapture`, `NoCors`, `NoLocate`, `NoLongTouch`, `NoPause`, `NoScrollBars`, `Overview`, `Progress`, `ScrollFade`, `UseBasicInput`, `UseBrowser`\
 	 * &emsp; `AllowZoom` - Allows the user to zoom the page\
 	 * &emsp; `Wide` - force page using “wide” viewport\
 	 * &emsp; `NoAccel` - for OrangePi support\
 	 * &emsp; `NoActionBar` - prevents copy/paste popup\
 	 * &emsp; `NoApp` - prevent app.* calls\
 	 * &emsp; `NoCapture` - Disable camera\
 	 * &emsp; `NoCors` - attempts to disable CORS and i-frame restrictions\
 	 * &emsp; `NoLocate` - Disable location sensor\
 	 * &emsp; `NoPause` - Dont pause WebView when app in background\
 	 * &emsp; `Overview` - Zoom to full width of page\
 	 * &emsp; `Progress` - Shows a progress indicator when loading\
 	 * &emsp; `UseBasicInput` - makes softkeyboard useful for html code editors\
 	 * &emsp; `UseBrowser` - Open links in external browser
	 */
	AddWebView(layout: DsLayout, width?: num_frc, height?: num_frc, options?: str_com, zoom?: num_prc): DsWebView;

	/**
	 * Shows a popup message with an 'OK' button to exit
	 * @param hue `-180..180`
	 */
	Alert(message: str, title?: str, options?: string | ("NoDim"|"NoFocus")[], hue?: num_int): void;

	/** Similar to setInterval */
	Animate(callback?: (time: num_mls, dtime: num_mls) => void, fps?: num_fps): void;

	/** Used for broadcasting messages between DroidScript apps */
	Broadcast(type: "Exec", message: str): void;

	/**
	 * Send broadcast intent
	 * @param action `android action`
	 */
	BroadcastIntent(action: str, category: str, data: str, type: str, extras: str, options?: str_com): void;

	/** Calls a phone number */
	Call(number: "number"): void;

	/** Cancel background job */
	CancelJob(): void;

	/**
	 * Checks if app is licensed with Google Play
	 * @param key `GPlay license key`
	 */
	CheckLicense(key: str_b64): void;

	/**
	 * Checks if permission was granted
	 * @param type `Camera`, `Storage`, `ExtSDcard`, `Network`, `Notify`, `Location`, `SMS`, `Calendar`, `Body`, `Contacts`, `Record`, `Biometric`, `Phone`, `Accounts`, `License`, `android.permission.*`
	 */
	CheckPermission(type: str): str[];

	/** Let the user choose an google account */
	ChooseAccount(callback: (account: "email") => void): void;

	/** Let the user choose an image */
	ChooseContact(type: "Phone"|"Email", callback: (name: str, data: str) => void): void;

	/**
	 * Let the user choose a file
	 * @param type `file mimetype`
	 * @param options <br>
 	 * &emsp; `persist` - keep file permission after reboot\
 	 * &emsp; `nodownload` - prevents file downloads
	 */
	ChooseFile(message: str, type: str, callback: (path: str_pth|str_uri, name: str) => void, fldr?: str_pth, options?: string | ("persist"|"nodownload")[]): void;

	/** Let the user choose an image */
	ChooseImage(options: string | (""|"internal"|"external")[], callback: (path: str_pth) => void): void;

	/** Let the user choose a WiFi network */
	ChooseWifi(title1: str, title2: str, callback: (ssid: str) => void, options?: string | ("force"|"large")[], extra?: "ssids"): void;

	/** Clears saved web cookies */
	ClearCookies(): void;

	/** Deletes app.Save*() storage */
	ClearData(file?: str_ptf): void;

	/** Deletes a variable saved via app.Save*() */
	ClearValue(name: str, file?: str_ptf): void;

	/** Closes the drawer layout on the given side with slide animation */
	CloseDrawer(side?: "Left"|"Right"): void;

	/** Copies a file to a given destination */
	CopyFile(source: str_pth, destination: str_pth): void;

	/** Copies a folder to a given destination */
	CopyFolder(source: str_pth, destination: str_pth, overwrite?: bin, filter?: "pattern"): void;

	/** Returns an AudioRecorder object */
	CreateAudioRecorder(): DsAudioRecorder;

	/** Returns a new BluetoothList object with selectable list of paired and discovered Bluetooth devices */
	CreateBluetoothList(filter?: str): DsBluetoothList;

	/** Communicate with other Bluetooth devices */
	CreateBluetoothSerial(mode?: "Text"|"Int"|"Hex"): DsBluetoothSerial;

	/**
	 * Creates a button control
	 * @param options `FontAwesome`, `Html`, `Monospace`, `Normal`, `Aluminium`, `Gray`, `Lego`, `SingleLine`, `Custom`, `AutoShrink`, `AutoSize`, `NoPad`, `FillX/Y`, `NoSound`\
 	 * &emsp; `AutoShrink` - Auto-shrinks text to fit\
 	 * &emsp; `AutoSize` - Auto-sizes text to fit
	 */
	CreateButton(text: str, width?: num_frc, height?: num_frc, options?: str_com): DsButton;

	/**
	 * Returns a new CameraView object to access the device camera
	 * @param options `Front`, `UseBitmap`, `UseABGR`, `NoRotate`, `<id>`, `<resolution>`\
 	 * &emsp; `<id>` - “front,back,cam0,cam1,cam2,cam3”\
 	 * &emsp; `<resolution>` - CIF: 352x288\
 	 * &emsp; QQVGA: 160x120\
 	 * &emsp; QVGA: 320x240\
 	 * &emsp; SVGA: 800x600\
 	 * &emsp; VGA: 640x480\
 	 * &emsp; XGA: 1024x768\
 	 * &emsp; UXGA: 1600x1200
	 */
	CreateCameraView(width?: num_frc, height?: num_frc, options?: str_com): DsCameraView;

	/**
	 * Create a blank white Image object
	 * @param options <br>
 	 * &emsp; `fix` - image with fixed resolution\
 	 * &emsp; `px` - use pixel values for size\
 	 * &emsp; `Button` - causes image to depress like a button when touched\
 	 * &emsp; `async` - loads the image asynchronously\
 	 * &emsp; `Icon` - allows loading of app icons\
 	 * &emsp; `NoPlay` - prevent gifs from playing automatically
	 */
	CreateCanvas(file: str_ptc, width?: num, height?: num, options?: string | ("fix"|"alias"|"px"|"Button"|"ScaleCenter"|"async"|"FontAwesome"|"Resize"|"TouchThrough"|"Icon"|"wallpaper"|"NoPlay")[], pxw?: num_pxl, pxh?: num_pxl): DsImage;

	/**
	 * Returns a new CheckBox object
	 * @param options `FillX/Y`, `NoSound`
	 */
	CreateCheckBox(text: str, width?: num_frc, height?: num_frc, options?: str_com): DsCheckBox;

	/**
	 * Returns a new CloudStore object
	 * @premium
	 */
	CreateCloudStore(apiKey: str): DsCloudStore;

	/**
	 * Returns a new CodeEdit object
	 * @premium
	 * @param options `FillX/Y`
	 */
	CreateCodeEdit(text: str, width?: num_frc, height?: num_frc, options?: str_com): DsCodeEdit;

	/** Returns a new Crypt object to encrypt or decrypt a string with a given key or create a hash of it */
	CreateCrypt(options?: str_com): DsCrypt;

	/** Creates a CustomTab control */
	CreateCustomTabs(): obj;

	/**
	 * Shows a debug log overlay
	 * @param options <br>
 	 * &emsp; `dialog` - Show the debug log as black overlay dialog\
 	 * &emsp; `clear` - Clear content before showing
	 */
	CreateDebug(options?: "dialog"|"clear"): nil;

	/**
	 * Returns a new Dialog object to display messages
	 * @param options <br>
 	 * &emsp; `Old` - apply old list style affecting title style and unrounded corners
	 */
	CreateDialog(title: str, options?: string | ("AutoCancel"|"NoCancel"|"NoTitle"|"NoFocus"|"NoDim"|"NoKeys"|"Fillscreen"|"Fullscreen"|"TouchModal"|"NoTouch"|"Modal"|"Kiosk"|"Old")[]): DsDialog;

	/** Returns a new Downloader object */
	CreateDownloader(options?: string | ("NoDialog"|"Light")[]): DsDownloader;

	/**
	 * Returns an Email object for user to send emails
	 * @param account `account email`
	 * @param password `account password`
	 */
	CreateEmail(account: str, password: str): DsEmail;

	/** Returns a new File object */
	CreateFile(file: str_ptf, mode: "r"|"w"|"rw"): DsFile;

	/**
	 * CreateGame automatically turns your app in game mode and adds a [GameView](CreateGameView.htm) control to it which loads the referenced script
	 * @return \{ game, lay}
	 */
	CreateGame(file: str_ptf, orient?: "Portrait"|"Landscape"): { game: DsGameView, lay: DsLayout};

	/** The GameView is a blindingly fast container for game development with a physics engine and PIXI as underlying sprite container which uses the GPU to render graphics */
	CreateGameView(width: num_frc, height: num_frc, options?: str_com): DsGameView;

	/** Returns a GLView object */
	CreateGLView(width: num_frc, height: num_frc, options?: "fast2d"): DsGLView;

	/**
	 * Returns a new Image object
	 * @param options <br>
 	 * &emsp; `fix` - image with fixed resolution\
 	 * &emsp; `px` - use pixel values for size\
 	 * &emsp; `Button` - causes image to depress like a button when touched\
 	 * &emsp; `async` - loads the image asynchronously\
 	 * &emsp; `Icon` - allows loading of app icons\
 	 * &emsp; `NoPlay` - prevent gifs from playing automatically
	 */
	CreateImage(file?: str_ptc, width?: num, height?: num, options?: string | ("fix"|"alias"|"px"|"Button"|"ScaleCenter"|"async"|"FontAwesome"|"Resize"|"TouchThrough"|"Icon"|"wallpaper"|"NoPlay")[], pxw?: num_pxl, pxh?: num_pxl): DsImage;

	/**
	 * Returns a new Layout object
	 * @param options `AutoSize`, `TouchThrough`, `TouchSpy`, `Left`, `Top`, `Right`, `Bottom`, `Center`, `H/VCenter`, `Wrap`, `Horizontal`, `Vertical`, `FillX/Y`\
 	 * &emsp; `AutoSize` - Resizes itself and child controls after device rotation\
 	 * &emsp; `TouchThrough` - forwards touch events to underlying children\
 	 * &emsp; `TouchSpy` - spies for touch events on all children
	 */
	CreateLayout(type: "Linear"|"Absolute"|"Frame"|"Card", options?: str_com): DsLayout;

	/**
	 * Returns a new List object
	 * @param options <br>
 	 * &emsp; `bold` - bold item titles\
 	 * &emsp; `Expand` - Expand list to full height inside scrollers\
 	 * &emsp; `Menu` - applies various settings to make the list appear like an in-app menu\
 	 * &emsp; `Horiz` - makes title and body text flow horizontally
	 */
	CreateList(list: str_com, width?: num_frc, height?: num_frc, options?: string | ("bold"|"Expand"|"Menu"|"Horiz"|"html"|"FontAwesome"|"monospace"|"Normal"|"WhiteGrad"|"BlackGrad"|"AlumButton"|"GreenButton"|"OrangeButton"|"NoSound")[], delim?: str): DsList;

	/** Returns a new ListDialog object */
	CreateListDialog(title: str, list: str, options?: "Multi"|"AutoCancel"): DsListDialog;

	/** Returns a new Locator object */
	CreateLocator(type: string | ("GPS"|"Network")[], options?: str_com): DsLocator;

	/** Returns a new MediaPlayer object */
	CreateMediaPlayer(): DsMediaPlayer;

	/** Returns a new MediaStore object */
	CreateMediaStore(): DsMediaStore;

	/** Add music to your app */
	CreateMusic(): obj;

	/**
	 * Returns a new NetClient object
	 * @param type <br>
 	 * &emsp; `UDP` - fast but does not guarantee data correctness\
 	 * &emsp; `TCP` - slow but guarantees data correctness\
 	 * &emsp; `Raw` - drop 4 Byte header before every message
	 */
	CreateNetClient(type: "UDP"|"TCP"|"Raw"): DsNetClient;

	/**
	 * Creates a NodeJS background process with all the functionality of common node.js
	 * @param paths `NODE_PATH env variable`
	 * @param options <br>
 	 * &emsp; `extended` - allow app methods in default main instance\
 	 * &emsp; `legacy` - dont use named pipes for messaging\
 	 * &emsp; `nostart` - disable auto start\
 	 * &emsp; `esm` - use EcmaScript-Modules
	 */
	CreateNode(paths?: str_pth, options?: string | ("extended"|"legacy"|"nostart"|"esm")[]): DsNode;

	/**
	 * Returns a new Notification object
	 * @param options <br>
 	 * &emsp; `Low` - priority
	 */
	CreateNotification(options?: string | ("Ongoing"|"AutoCancel"|"FullScreen"|"NoVibrate"|"Low")[]): DsNotification;

	/**
	 * Returns a new Nxt object
	 * @deprecated Please install and visit the NXT-Docs from the Plugins page
	 */
	CreateNxt(): DsNxt;

	/**
	 * Returns a new Overlay object
	 * @premium
	 */
	CreateOverlay(options?: string | ("ShowWhenLocked"|"TurnScreenOn"|"KeepScreenOn")[]): DsOverlay;

	/** Returns a new PhoneState object */
	CreatePhoneState(types: "CellLocation"|"DataConnection"|"DataActivity"|"CallState"|"ServiceState"|"SignalStrength"|"CallForwarding"|"MessageWaiting"): DsPhoneState;

	/** Returns a new PlayStore object */
	CreatePlayStore(): DsPlayStore;

	/** Returns a new Scroller object */
	CreateScroller(width?: num_frc, height?: num_frc, options?: string | ("FillX"|"FillY"|"FillXY"|"Horizontal"|"Vertical"|"NoScrollBar"|"ScrollFade")[]): DsScroller;

	/**
	 * Returns a new SeekBar object
	 * @param options `FillX/Y`
	 */
	CreateSeekBar(width?: num_frc, height?: num_frc, options?: str_com): DsSeekBar;

	/** Returns a new Sensor object */
	CreateSensor(type: "Accelerometer"|"MagneticField"|"Orientation"|"Light"|"Proximity"|"Temperature"|"GameRotation"|"GeomagneticRotation"|"Gravity"|"Gyroscope"|"HeartRate"|"Acceleration"|"Pressure"|"Humidity"|"RotationMotion"|"StepCounter"|"StepDetector", options?: string | ("Slow"|"Medium"|"Fast"|"Fastest")[]): DsSensor;

	/**
	 * Returns a new Service object
	 * @param packageName `this`, `<package>`
	 * @param className `this`, `<class>`
	 * @param options <br>
 	 * &emsp; `Persist` - attempts to force restart if service killed
	 */
	CreateService(packageName: str, className: str, callback?: (this: DsService) => void, options?: string | ("Persist")[]): DsService;

	/**
	 * Creates a Home-Screen shortcut to an app
	 * @param options <br>
 	 * &emsp; `Debug` - start app in debug mode\
 	 * &emsp; `Game` - runs in GameView mode
	 */
	CreateShortcut(name: str, iconFile: str_ptf, file: str_ptf, options?: string | ("Portrait"|"Landscape"|"Transparent"|"Debug"|"Game"|"remote")[]): nil;

	/**
	 * Returns a new SMS object to send and retreive SMS messages
	 * @xfeature
	 */
	CreateSMS(): DsSMS;

	/** Returns a new SpeechRec object */
	CreateSpeechRec(options?: string | ("NoBeep"|"Partial")[]): DsSpeechRec;

	/**
	 * Returns a new Spinner object
	 * @param options `FillX/Y`, `NoSound`
	 */
	CreateSpinner(list: str_com, width?: num_frc, height?: num_frc, options?: str_com): DsSpinner;

	/**
	 * Creates a switch control
	 * @param options `Monospace`, `Custom`, `NoPad`, `FillX/Y`, `NoSound`
	 */
	CreateSwitch(text: str, width?: num_frc, height?: num_frc, options?: str_com): DsSwitch;

	/** Returns a new Synth object */
	CreateSynth(type?: string | ("Signal"|"VCA"|"VCF")[]): DsSynth;

	/**
	 * Returns a new SysProc object
	 * @param cmd program name
	 * @param options <br>
 	 * &emsp; `combine` - combines stdout and stderr\
 	 * &emsp; `builder` - force use of proc builder
	 */
	CreateSysProc(cmd: "sh"|"su"|"busybox", env?: str, dir?: str_ptd, options?: string | ("combine"|"builder")[]): DsSysProc;

	/** Returns a new Tabs object */
	CreateTabs(list: str_com, width?: num_frc, height?: num_frc, options?: string | ("Fade"|"FontAwesome"|"NoMargins"|"VCenter")[]): DsTabs;

	/**
	 * Returns a new Text object
	 * @param options `AutoScale`, `AutoSize`, `Multiline`, `Left`, `Right`, `Bottom`, `VCenter`, `Html`, `Bold`, `Monospace`, `AutoShrink`, `NoWrap`, `Log`, `FillX/Y`\
 	 * &emsp; `AutoShrink` - Auto-shrinks text to fit
	 */
	CreateText(text: str, width?: num_frc, height?: num_frc, options?: str_com): DsText;

	/**
	 * Returns a new TextEdit object
	 * @param options `AutoSelect`, `AutoSize`, `Bold`, `Extract`, `Left`, `Center`, `Right`, `Monospace`, `NoSpell`, `NoKeyboard`, `Numbers`, `ReadOnly`, `SingleLine`, `FillX/Y`, `Password`\
 	 * &emsp; `AutoSelect` - Select all Text if user enter the Textedit\
 	 * &emsp; `AutoSize` - Expand or shrink the control automatically so the text fits in the Textedit\
 	 * &emsp; `Bold` - Write bold text\
 	 * &emsp; `Extract` - enables full screen keyboard in landscape mode\
 	 * &emsp; `Left` - Justify the text to the left\
 	 * &emsp; `Center` - Justify the text in the middle\
 	 * &emsp; `Right` - Justify the text to the right\
 	 * &emsp; `NoSpell` - Disable the spell-checker\
 	 * &emsp; `NoKeyboard` - Shows no Keyboard\
 	 * &emsp; `ReadOnly` - The user cant change the Text\
 	 * &emsp; `SingleLine` - Dont break text for long lines and change 'Enter' key to 'Done'\
 	 * &emsp; `Password` - displays characters as dots
	 */
	CreateTextEdit(text: str, width?: num_frc, height?: num_frc, options?: str_com): DsTextEdit;

	/**
	 * Returns a new Theme object
	 * @premium
	 */
	CreateTheme(baseTheme: "Dark"|"Light"|"Default"): DsTheme;

	/**
	 * Returns a new Toggle object
	 * @param options `Monospace`, `Custom`, `NoPad`, `FillX/Y`, `NoSound`
	 */
	CreateToggle(text: str, width?: num_frc, height?: num_frc, options?: str_com): DsToggle;

	/**
	 * Returns a new USBSerial object
	 * @param parity <br>
 	 * &emsp; `0` - none\
 	 * &emsp; `1` - odd\
 	 * &emsp; `2` - even\
 	 * &emsp; `3` - mark\
 	 * &emsp; `4` - space
	 * @param device `Product ID from Device Magager > Hardware IDs`
	 */
	CreateUSBSerial(baudRate?: 300|600|1200|2400|4800|9600|19200|38400|57600|115200|230400|460800|921600, dataBits?: 5|6|7|8, stopBits?: 1|2|15, parity?: 0|1|2|3|4, device?: num): DsUSBSerial;

	/** Returns a new VideoView object */
	CreateVideoView(width?: num_frc, height?: num_frc, options?: str_com): DsVideoView;

	/**
	 * Returns a new WebServer object
	 * @param options `ListDir`, `Upload`, `NoWelcome`, `Reflect`, `<BUFSIZE>`\
 	 * &emsp; `ListDir` - Show files in folder\
 	 * &emsp; `Upload` - Allow file uploads\
 	 * &emsp; `NoWelcome` - Ignore index.html\
 	 * &emsp; `Reflect` - Reflect web socket messages back to all clients\
 	 * &emsp; `<BUFSIZE>` - “ws_64k, ws_128k, ws_512k, ws_1M, ws_5M, ws_10M”
	 */
	CreateWebServer(port: num_int, options?: str_com): DsWebServer;

	/** Returns a new WebSocket object */
	CreateWebSocket(ip: str, id?: str, retry?: num_int, options?: str): DsWebSocket;

	/**
	 * Returns a new WebView object
	 * @param options `AllowZoom`, `AutoZoom`, `ClearCookies`, `FillX/Y`, `Local`, `NoAccel`, `NoActionBar`, `IgnoreErrors`, `IgnoreSSLErrors`, `NoApp`, `NoCapture`, `NoCors`, `NoLocate`, `NoLongTouch`, `NoPause`, `NoScrollBars`, `Overview`, `Persist`, `Progress`, `ScrollFade`, `UseBasicInput`, `UseBrowser`, `Wide`\
 	 * &emsp; `AllowZoom` - Allows the user to zoom the page\
 	 * &emsp; `ClearCookies` - Clear all webview cookies at startup\
 	 * &emsp; `Local` - loads URLs starting with / from /Storage/[AppName\]/ instead\
 	 * &emsp; `NoAccel` - for OrangePi support\
 	 * &emsp; `NoActionBar` - prevents copy/paste popup\
 	 * &emsp; `NoApp` - prevent app.* calls\
 	 * &emsp; `NoCapture` - Disable camera\
 	 * &emsp; `NoCors` - attempts to disable CORS and i-frame restrictions\
 	 * &emsp; `NoLocate` - Disable location sensor\
 	 * &emsp; `NoPause` - Dont pause WebView when app in background\
 	 * &emsp; `Overview` - Zoom to full width of page\
 	 * &emsp; `Persist` - keeps file cache\, history and form data between re-loads/startups\
 	 * &emsp; `Progress` - Shows a progress indicator when loading\
 	 * &emsp; `UseBasicInput` - makes softkeyboard useful for html code editors\
 	 * &emsp; `UseBrowser` - Open links in external browser\
 	 * &emsp; `Wide` - force page using “wide” viewport
	 */
	CreateWebView(width?: num_frc, height?: num_frc, options?: str_com, zoom?: num_prc): DsWebView;

	/**
	 * The wizard is supposed to simplify a configuration progress which requires several inputs and decisions by the user
	 * @premium
	 */
	CreateWizard(title: str, width?: num_frc, height?: num_frc, callback?: (this: DsWizard, layout: DsLayout, page: num_int) => void, options?: string | ("AutoCancel"|"NoCancel"|"NoTitle"|"NoFocus"|"NoDim"|"NoKeys"|"TouchModal"|"NoTouch")[]): DsWizard;

	/** Returns a new YesNoDialog object */
	CreateYesNoDialog(message: str, options?: string | ("NoDim"|"NoFocus"|"TouchModal")[]): DsYesNoDialog;

	/** Returns a new ZipUtil object */
	CreateZipUtil(mode: str): DsZipUtil;

	/** Debug messages to the console */
	Debug(message: str): void;

	/** Deletes a database */
	DeleteDatabase(name: str): void;

	/** Deletes a file */
	DeleteFile(file: str_ptf): void;

	/** Delete a folder */
	DeleteFolder(folder: str_ptd): void;

	/** Destroy a layout */
	DestroyLayout(layout: DsLayout): void;

	/**
	 * Disable specific device keys
	 * @param keyList `VOLUME_DOWN`, `VOLUME_UP`, `FORWARD`, `BACK`, `MENU`, `ENTER`, `...`
	 */
	DisableKeys(keyList: str_com): void;

	/** Suppress all touch events */
	DisableTouch(disable: bin): void;

	/** Search for nearby bluetooth devices */
	DiscoverBtDevices(filter: str, onFound?: (name: str, address: str) => void, onComplete?: () => void): void;

	/** Download a file with Androids download manager */
	DownloadFile(source: str, destination: str_pth, title?: str, description?: str, options?: "NoDialog"): void;

	/** Allows to en- or disable the devices back key */
	EnableBackKey(enable: bin): void;

	/** Show an error message */
	Error(message: str, line: num_int, file: str_ptf, quit?: bin): void;

	/** Execute js code from your app or a WebWiew */
	Execute(js: str_jsc): void;

	/** Close and stop the app */
	Exit(kill?: bin): void;

	/**
	 * Execute a bash script using Termux
	 * @premium
	 */
	ExtExec(name: "termux", file: str_ptf, args?: str, options?: "hide"): void;

	/**
	 * Extract app assets to a local directory
	 * @param options <br>
 	 * &emsp; `DoEvents` - extract in background\
 	 * &emsp; `shallow` - extract top level
	 */
	ExtractAssets(source: str_pth, destination: str_pth, overwrite?: bin, options?: string | ("DoEvents"|"shallow")[]): void;

	/** Forcefully update your plugins */
	ExtractPlugins(): void;

	/** Checks if the file exists */
	FileExists(file: str_ptf): bin;

	/** Checks if the folder exists */
	FolderExists(folder: str_ptd): bin;

	/** Call main app functions from inside a webview */
	Func(name: str, ...args: all): void;

	/**
	 * Google Analytics
	 * @premium
	 */
	GA(command: "create"|"send"|"set"|"require"|"provide"|"remove", fields: str_com, options?: obj): void;

	/**
	 * Get accesibility feature availability
	 * @return \{ enabled, exploreByTouch, screenReader }
	 */
	GetAccessibility(): { enabled: bin, exploreByTouch: bin, screenReader: bin };

	/** Returns a string of all known account names on the device separated with comma ',' */
	GetAccounts(): str_com;

	/**
	 * GetActivities returns a list of object of currently running activities
	 * @deprecated Filters are applied since Android 11. Full functionality can be accessed in the X-Version of DS.
	 */
	GetActivities(): { label: str, packageName: str, className: str }[];

	/** Convert language name to its code or get current language code */
	GetAppLangCode(name: str): str;

	/** Get translation languages */
	GetAppLanguages(): str[];

	/** Get current app name */
	GetAppName(): str;

	/** Get path to app assets */
	GetAppPath(): str_pth;

	/** Get current battery level */
	GetBatteryLevel(): num_prc;

	/** Get the bluetooth address */
	GetBluetoothAddress(): str;

	/** Get the bluetooth name */
	GetBluetoothName(): str;

	/** Returns Bluetooth type connected state */
	GetBtProfileState(type: "a2dp"|"headset"|"gatt"|"health"): "Connected"|"Disconnected";

	/** Get APK build number */
	GetBuildNum(): num_int;

	/** Get current charge type */
	GetChargeType(): "AC"|"USB"|"Wireless"|"None";

	/** Get latest clipboard text */
	GetClipboardText(): str;

	/** Get user country name */
	GetCountry(): str;

	/** Get users country code */
	GetCountryCode(): str;

	/** Retreive saved data */
	GetData(name: str): str;

	/** Get apps database folder */
	GetDatabaseFolder(): str_pth;

	/** Returns the current active debug switches */
	GetDebug(): string | ("console"|"ds"|"adb"|"all")[];

	/** Get devces default orientation */
	GetDefaultOrientation(): "Portrait"|"Landscape";

	/** Get device ID */
	GetDeviceId(): str;

	/** Get apps display height */
	GetDisplayHeight(): num_pxl;

	/** Get apps display width */
	GetDisplayWidth(): num_pxl;

	/** Get current drawer state */
	GetDrawerState(side: "left"|"right"): "Open"|"Closed";

	/** Get current DS version */
	GetDSVersion(): num_flt;

	/**
	 * Get environment variable
	 * @param name `PATH`, `...`
	 */
	GetEnv(name: str): str;

	/** Get external sdcard folder */
	GetExternalFolder(): str_pth;

	/**
	 * Get last modified date of a file or folder
	 * @return Date
	 */
	GetFileDate(file: str_ptf): Date;

	/** Get the size of a file or folder */
	GetFileSize(file: str_ptf): num_flt;

	/** Get remaining storage size */
	GetFreeSpace(mode: "internal"|"external"): num_gbt;

	/**
	 * Get data about installed apps
	 * @deprecated Filters are applied since Android 11. Full functionality can be accessed in the X-Version of DS.
	 */
	GetInstalledApps(): { packageName: str, className: str, uid: num_int, targetSdkVersion: num_int, dataDir: str_pth, sourceDir: str_pth, publicSourceDir: str_pth, nativeLibraryDir: str_pth }[];

	/**
	 * Get received intent data
	 * @return \{ action, type, data, flags, extras: { app_intent, app_file, app_options } }
	 */
	GetIntent(): { action: str, type: str, data: str, flags: num_int, extras: { app_intent: str, app_file: str_pth, app_options: str } };

	/** Get internal storage path */
	GetInternalFolder(): str_pth;

	/** Get network IP address */
	GetIPAddress(): str;

	/** Returns the name of a conected joystick */
	GetJoystickName(id: num_int): str;

	/**
	 * Returns the state of a connected joystick
	 * @param key `A`, `B`, `C`, `X`, `Y`, `Z`, `R1`, `L1`, `Left`, `Right`, `Up`, `Down`, `Start`, `ThumbLeft`, `ThumbRight`, `axis-0..9`, `btn-1..12`
	 */
	GetJoystickState(id: num_int, key: str): num;

	/**
	 * Get joystick key states object
	 * @return \{ key: value }
	 */
	GetJoystickStates(id: num_int): {[key: str]: num};

	/** Get current keyboard height */
	GetKeyboardHeight(): num_pxl;

	/** Get device language */
	GetLanguage(): str;

	/** Get user language code */
	GetLanguageCode(): str;

	/** Get devices MAC address */
	GetMacAddress(): str;

	/**
	 * Get a path to an unambiguous media file
	 * @param folder `app name`
	 */
	GetMediaFile(folder: str, ext: str): str_pth;

	/**
	 * Get RAM memory information
	 * @return \{ avail, low, threshold, total }
	 */
	GetMemoryInfo(): { avail: num_byt, low: bin, threshold: num_byt, total: num_byt };

	/** Returns a string list of metadata values contained in an audio file */
	GetMetadata(file: str_ptf, keys?: string | ("album"|"artist"|"genre"|"title"|"composer"|"author"|"duration"|"bitrate"|"width"|"height")[]): str_com;

	/** Get device model name */
	GetModel(): str;

	/** Get APK name */
	GetName(): str;

	/** Get the caller notification id */
	GetNotifyId(): str;

	/** Get map of created DroidScript objects */
	GetObjects(): dso[];

	/** Get app options */
	GetOptions(): string | ("portrait"|"landscape"|"dark"|"light"|"holo"|"node"|"hybrid"|"mui"|"transparent"|"debug"|"remote"|"noswapify")[];

	/** Get current screen orientation */
	GetOrientation(): "Portrait"|"Landscape";

	/** Get API target level */
	GetOSVersion(): num_int;

	/** Get APK package name */
	GetPackageName(): str;

	/** Get list of paired bluetooth devices */
	GetPairedBtDevices(): { name: str, address: str }[];

	/** Get APK's local storage path */
	GetPath(): str_pth;

	/**
	 * GetPermission accepts a list of 'dangerus' classified permissions and returns a list of ungranted permissions in the **callback** function, or in case of only “ExtSDCard” the path URI of the user-selected folder
	 * @param type `Camera`, `ExtSDcard`, `External`, `Internal`, `Network`, `Notify`, `Storage`, `Overlay`, `SMS`, `Location`, `Calendar`, `Body`, `Contacts`, `Record`, `Phone`, `Biometric`, `Accounts`, `License`, `android.permission.*`, `usb:<pid>`
	 */
	GetPermission(type: str_com, callback: (ungranted: str_com|str_uri) => void): void;

	/** Get path to a private folder */
	GetPrivateFolder(name: str, options?: "external"): str_pth;

	/** Get ID of a resource */
	GetResourceId(name: str, options?: "android"): str;

	/** Get current device ringer mode */
	GetRingerMode(): "Normal"|"Vibrate"|"Silent";

	/** Get device rotation */
	GetRotation(): 0|90|180|270;

	/**
	 * Returns the routers ip address
	 * @return `ip address`
	 */
	GetRouterAddress(): str;

	/**
	 * Get RSSI in dBm
	 * @return `-127..-30`
	 */
	GetRSSI(): num_int;

	/**
	 * Get list of running apps
	 * @deprecated Filters are applied since Android 11. Full functionality can be accessed in the X-Version of DS.
	 */
	GetRunningApps(): { user: num_int, pid: num_int, name: str, foreground: bin }[];

	/**
	 * Get list of running services
	 * @deprecated Filters are applied since Android 11. Full functionality can be accessed in the X-Version of DS.
	 */
	GetRunningServices(): { user: num_int, pid: num_int, name: str }[];

	/** Get the screen density */
	GetScreenDensity(): num_int;

	/** Get width of device screen */
	GetScreenHeight(options?: "Real"): num_pxl;

	/** Get height of device screen */
	GetScreenWidth(options?: "Real"): num_pxl;

	/** Get list of shared files */
	GetSharedFiles(): str_pth[];

	/** Get value of shared text */
	GetSharedText(): str;

	/** Get associated app shortcuts */
	GetShortcuts(): lst;

	/** Checks if the speaker is enabled for phone calls */
	GetSpeakerPhone(): bin;

	/** Get full path to a special media folder */
	GetSpecialFolder(name: "DCIM"|"Pictures"|"Movies"|"Downloads"|"Documents"|"Music"): str_pth;

	/** Get tts engines */
	GetSpeechEngines(): str[];

	/** Get WiFi network SSID (name) */
	GetSSID(): str;

	/**
	 * Calculates text bounds
	 * @return \{ width, height }
	 */
	GetTextBounds(txt: str, size?: num, width?: num_frc, obj?: dso): { width: num_frc, height: num_frc };

	/**
	 * Get theme configuration
	 * @return \{ baseTheme, holo, dark, titleHeight, backColor, dialogColor, btnColor, dialogBtnColor, textColor1, textColor2,btnTextColor, highlightColor }
	 */
	GetThemeInfo(): { baseTheme: str, holo: bin, dark: bin, titleHeight: num_frc, backColor: str_col, dialogColor: str_col, btnColor: str_col, dialogBtnColor: str_col, textColor1: str_col, textColor2: str_col,btnTextColor: str_col, highlightColor: str_col };

	/** Create downscaled copy of an image */
	GetThumbnail(source: str_pth, destination: str_pth, width?: num_pxl, height?: num_pxl): nil;

	/** Returns the upper border distance from the app display to the device screen as height relative float or in pixels with the **px** option */
	GetTop(options?: "px"): num_frc;

	/** Returns the object class name */
	GetType(): "App";

	/** Get current user email */
	GetUser(): str_acc;

	/** Get apk version number */
	GetVersion(): num;

	/** Get volume of a given audio type */
	GetVolume(stream: "alarm"|"dtmf"|"music"|"notification"|"ring"|"system"|"voicecall"): num_frc;

	/** Puts the phone into sleep mode */
	GoToSleep(): void;

	/** Checks if device has soft keys */
	HasSoftNav(): bin;

	/** Hide the main app layout */
	Hide(): void;

	/** Hide the device keyboard */
	HideKeyboard(): void;

	/** Hide progress indicator */
	HideProgress(): void;

	/** Hide progress bar dialog */
	HideProgressBar(): void;

	/**
	 * Send Http request
	 * @param type <br>
 	 * &emsp; `GET` - retrieve data\
 	 * &emsp; `POST` - submit data\
 	 * &emsp; `JSON` - post json data\
 	 * &emsp; `PUT` - replace target resource\
 	 * &emsp; `DELETE` - deletes the resource\
 	 * &emsp; `HEAD` - omit body
	 */
	HttpRequest(type: "GET"|"POST"|"JSON"|"PUT"|"DELETE"|"HEAD", baseUrl: str_url, path?: str, params?: str, callback?: (error: bin, reply: str, status: num_int) => void, headers?: str): void;

	/** In ide */
	InIDE(): bin;

	/** Start apk installation process */
	InstallApp(apkFile: str_ptf, callback?: (packageName: str, status: str) => void, options?: str): bin;

	/** Returns true if ran from apk */
	IsAPK(): bin;

	/** Check if package is installed */
	IsAppInstalled(packageName: str): bin;

	/** Check bluetooth enabled */
	IsBluetoothEnabled(): bin;

	/** Check if bluetooth is on */
	IsBluetoothOn(): bin;

	/** Check bt paired state to other device */
	IsBtDevicePaired(name: str): bin;

	/** Check whether device is charging */
	IsCharging(): bin;

	/** Check if device OS is ChromeOS */
	IsChrome(): bin;

	/** Check if device is connected to any network */
	IsConnected(): bin;

	/** Check whether app is debugging */
	IsDebugging(): bin;

	/** Check if debug view is currently shown */
	IsDebugVisible(): bin;

	/** Check if path leads to a folder */
	IsFolder(folder: str_ptd): bin;

	/** Check whether device keyboard is shown */
	IsKeyboardShown(): bin;

	/** Check if location method is enabled */
	IsLocationEnabled(mode: "GPS"|"Network"): bin;

	/** Check if NavBar is on righthand side */
	IsNavBarOnRight(): bin;

	/** Check if apk version increased */
	IsNewVersion(): bin;

	/** Check if device is in portrait mode */
	IsPortrait(): bin;

	/** Check if user has a DroidScript Premium subscription */
	IsPremium(): bin;

	/** Indicates 'scoped storage' on Android 10+ */
	IsScoped(): bin;

	/** Check if device screen is on */
	IsScreenOn(): bin;

	/** Check id app is a service */
	IsService(): bin;

	/** Check if app has finished loading */
	IsStarted(): bin;

	/** Check if user device is a tablet */
	IsTablet(): bin;

	/** Check if OS is AndroidThings */
	IsTV(): bin;

	/** Check if the mobile Wifi Access Point is enabled */
	IsWifiApEnabled(): bin;

	/** Check if WiFi is enabled */
	IsWifiEnabled(): bin;

	/** Kill an app by its pid */
	KillApp(pid: num_int): void;

	/**
	 * Launch or search an app
	 * @param noPlay `dont search`
	 */
	LaunchApp(packageName: str, noPlay?: bin): void;

	/**
	 * Get a list of files ans folders contained in a specific folder
	 * @param path `must not have a trailing slash`
	 * @param options <br>
 	 * &emsp; `Alphasort` - sorts the paths in alphabetical order\
 	 * &emsp; `FullPath` - returns absolute paths to the listed items\
 	 * &emsp; `RegEx` - accepts regexp patterns\
 	 * &emsp; `Folders` - list folders only\
 	 * &emsp; `Files` - list files only\
 	 * &emsp; `NoEmpty` - hide empty folders\
 	 * &emsp; `project` - Shows DS project folders only
	 */
	ListFolder(path: str_pth, filter?: str, limit?: num_int, options?: string | ("Alphasort"|"FullPath"|"RegEx"|"Folders"|"Files"|"NoEmpty"|"project")[]): str_pth[];

	/** Returns a list of granted permissions
	 * 
	 * See Also: GetPermission CheckPermission RemovePermission */
	ListPermissions(type: "Camera"|"Storage"|"ExtSDcard"|"Network"|"Notify"|"Location"|"SMS"|"Calendar"|"Body"|"Contacts"|"Record"|"Biometric"|"Phone"|"Accounts"|"License"): str_uri[];

	/** Load saved boolean value */
	LoadBoolean(name: str, dflt?: bin, file?: str_ptf): bin;

	/** Load saved json object */
	LoadJson(name: str, dflt?: obj, file?: str_ptf): obj;

	/** Load saved boolean value */
	LoadNumber(name: str, dflt?: num, file?: str_ptf): num;

	/** Load an installed plugin to your app */
	LoadPlugin(url: str_url): void;

	/** Asynchronously import a .js file */
	LoadScript(path: str_pth, callback?: (info: { isTrusted: bin }) => void): void;

	/** Load saved text value to remember varibale values between multiple app starts */
	LoadText(name: str, dflt?: str, file?: str_ptf): str;

	/** Lock the device */
	Lock(): void;

	/** Hide and lock a drawer */
	LockDrawer(side: "left"|"right"): void;

	/** Create new folder in the local fs */
	MakeFolder(folder: str_ptd): void;

	/** OpenDatabase creates or opens a local database in which large amounts of data can be stored that can still be queried in a reasonable amount of time */
	OpenDatabase(name: str): DsDatabase;

	/** Opens the drawer layout on the given side with slide animation */
	OpenDrawer(side?: "Left"|"Right"): void;

	/** Allow user to open a file with an external app */
	OpenFile(file: str_ptf, type?: str_mim, choose?: str): void;

	/** Allow user to open an url with an external app */
	OpenUrl(url: str_url, type?: str_mim, choose?: str): void;

	/** Pairs a bluetooth device with yours */
	PairBtDevice(address: str, callback?: () => void): void;

	/**
	 * Convert file path to content uri
	 * @return `content://[uri]`
	 */
	Path2Uri(path: str_pth): str_ptc;

	/** Pin app on screen */
	PinScreen(enable: bin): void;

	/** Play specific ringtone type */
	PlayRingtone(type: "Alarm"|"Notification"|"Ringtone"): void;

	/** Plays a local or remote sound file */
	PlaySound(file: str_ptf|str_url): void;

	/**
	 * Prevent screen from locking after some time
	 * @param mode <br>
 	 * &emsp; `Full` - Device can sleep,Screen and Keyboard on\
 	 * &emsp; `Partial` - CPU always on,Screen and Keyboard off
	 */
	PreventScreenLock(mode: bin|"Full"|"Partial"): void;

	/** Prevent Wifi from powering down */
	PreventWifiSleep(): void;

	/**
	 * Queries content from the android content model
	 * @premium
	 * @param sort <br>
 	 * &emsp; `coloumn` - a coloumn specified in 'coloumns'
	 */
	QueryContent(uri: str_uri, columns: str_com, select?: str_sql, args?: str_lst, sort?: "coloumn"): any[];

	/** Quit the app with showing a dialog and exit after closing */
	Quit(msg: str, title?: str, options?: string | ("NoDim"|"NoFocus")[]): void;

	/**
	 * Read the content of a local file
	 * @param encoding <br>
 	 * &emsp; `ISO-8859-1` - Latin-1
	 */
	ReadFile(file: str_ptc, encoding?: "US-ASCII"|"UTF-8"|"UTF-16"|"UTF-16BE"|"UTF-16LE"|"windows-1252"|"ISO-8859-1"|"base64"): str;

	/** Read local file content data */
	ReadFileData(file: str_pfa, mode?: "base64"|"hex"|"int"|"ascii"): lst;

	/** Convert short to full path */
	RealPath(path: str_pth): void;

	/** Read assets from given folder */
	RedirectAssets(dir: str_ptd): void;

	/** Remove drawer layout from a given side */
	RemoveDrawer(side: "left"|"right"): void;

	/** Removes a layout added to the app */
	RemoveLayout(layout: DsLayout): void;

	/** Removes a granted permission
	 * 
	 * See Also: GetPermission CheckPermission ListPermissions */
	RemovePermission(uri: str_uri): void;

	/** Rename or move a local file */
	RenameFile(source: str_pth, destination: str_pth): void;

	/** Rename or move a local folder */
	RenameFolder(source: str_pth, destination: str_pth): void;

	/** Replace text in a local file */
	ReplaceInFile(file: str_ptf, txt: str, rep: str, options?: str_com): void;

	/** Save a boolean value across multiple starts */
	SaveBoolean(name: str, value: bin, file?: str_ptf): void;

	/** Save web cookies */
	SaveCookies(): void;

	/** Save a json object across multiple starts */
	SaveJson(name: str, value: obj, file?: str_ptf): void;

	/** Save a number value across multiple starts */
	SaveNumber(name: str, value: num, file?: str_ptf): void;

	/** Save a text value across multiple starts */
	SaveText(name: str, value: str, file?: str_ptf): void;

	/** Adds media files to phone gallery */
	ScanFile(file: str_ptf): void;

	/** Schedules background jobs defined in a Job.js file
	 * 
	 * See Also: CancelJob */
	ScheduleJob(delay: num_mls, options?: str): void;

	/** Take a screen shot of your app */
	ScreenShot(fileName: str_ptf, quality?: num_prc): void;

	/**
	 * Import an external JavaScript file
	 * @param noDefer `load script inline`
	 */
	Script(file: str_ptf, noDefer?: bin): void;

	/** Send a file to a remote target */
	SendFile(file: str_pfa, subject?: str, text?: str, choose?: str): void;

	/** Send an image to a remote target */
	SendImage(file: str_pfa, choose?: str): void;

	/**
	 * Intens can be used to perform an operation between different applications or activities
	 * @param action `android.intent.action.*`
	 * @param category `android.intent.category.*`
	 * @param options <br>
 	 * &emsp; `Result` - expect a result to be passed to the callback function
	 */
	SendIntent(packageName?: str, className?: str, action?: str, category?: str, uri?: str_uri, type?: str_mim, extras?: str|{ name: str, type: "string"|"float"|"int"|"long"|"bool"|"list"|"file"|"uri"|"keydown"|"keyup", value: str }[], options?: string | ("Result"|"ClearTask")[], callback?: (resultCode: -1|0|1, data?: { action: str, type: str, data: str, flags: num_int, extras: obj }) => void): void;

	/** Open the EMail app and autofill fields */
	SendMail(address: str, subject?: str, body?: str, attach?: str_pth, type?: str_mim, options?: "SendTo"): void;

	/** Send message from Service to main app */
	SendMessage(message: str): void;

	/** Open the SMS app and autofill fields */
	SendSMS(msg?: str, number?: str_num): void;

	/** Share text between apps */
	SendText(text: str, subject?: str, choose?: str): void;

	/**
	 * Set alarm to open your app at a specific time
	 * @param options <br>
 	 * &emsp; `Exact` - only works for single shot alarms\
 	 * &emsp; `App` - Opens main app if called from a service
	 */
	SetAlarm(type: "Set"|"Repeat"|"Cancel", id?: str|num_int, callback?: (id: str|num_int) => void, time?: num_dat, interval?: num_mls, options?: string | ("ExactIdle"|"Exact"|"App")[]): void;

	/** Load the language code from lang.json */
	SetAppLanguage(name: str): void;

	/** Autostart APK when device boots */
	SetAutoBoot(auto: "App"|"Service"|"None"): void;

	/**
	 * Autostart DroidScript Project on DS restart
	 * @deprecated in favour of ide.AutoStart
	 */
	SetAutoStart(appName: str): void;

	/**
	 * Automatically enable the WiFi editor
	 * @deprecated in favour of ide.AutoWifi
	 */
	SetAutoWifi(auto: bin): void;

	/** Change the app's background color */
	SetBackColor(color: str_col): void;

	/** Enable Bluetooth on the device */
	SetBluetoothEnabled(enable: bin): void;

	/** Change the device clipboard text */
	SetClipboardText(text: str): void;

	/** Save data while app is running */
	SetData(name: str, value: str): void;

	/** Control the debug level of the program */
	SetDebug(switches: string | ("console"|"ds"|"adb"|"all")[]): void;

	/**
	 * Control the debug level of the program
	 * @deprecated in favour of \@SetDebug
	 */
	SetDebugEnabled(onoff: bin): void;

	/** Changes the dpi value for any control creatred afterwards */
	SetDensity(dpi: num_int): void;

	/**
	 * Filter/ignore certain errors
	 * @param regex `regex pattern`
	 */
	SetErrorFilter(regex: str): void;

	/** Set services to run in the background */
	SetInBackground(): void;

	/** Set services to run in the foreground */
	SetInForeground(title?: str, text?: str, largeIcon?: str_ptf, smallIcon?: str_ptf, importance?: "min"|"low"|"default"|"high"|"none"): void;

	/**
	 * Set options for the connected joystick
	 * @param options <br>
 	 * &emsp; `ForwardKeys` - allows the joystick key presses to pass onto the child controls of the main activity
	 */
	SetJoystickOptions(options?: string | ("ForwardKeys")[]): void;

	/**
	 * Blocks android functionality outside your app
	 * @premium
	 * @xfeature
	 * @param mode <br>
 	 * &emsp; `LockTask` - COSU kiosk\
 	 * &emsp; `Pin` - task un-/pinning
	 * @param options <br>
 	 * &emsp; `Tasks` - prevents recent tasks button working
	 */
	SetKioskMode(mode: string | ("Power"|"Status"|"Nav"|"NavRight"|"LockTask"|"Pin")[], enable?: bin, options?: string | ("Black"|"Tasks")[], packages?: str): void;

	/** Set default margins */
	SetMargins(left?: num, top?: num, right?: num, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Set app menu */
	SetMenu(list: str_com, iconPath?: str_ptf): void;

	/**
	 * Emulate GPS location
	 * @premium
	 */
	SetMockLocation(lat: num, lng: num, accuracy?: num): void;

	/**
	 * Set NavBar color
	 * @premium
	 */
	SetNavBarColor(color: str_col): void;

	/** Called on incoming Broadcasts */
	SetOnBroadcast(callback: (type: str, msg: str) => void, action: str): void;

	/** Called on app debug messages */
	SetOnDebug(callback: () => void): void;

	/** Called on thrown JS errors */
	SetOnError(callback: (error: str) => void): void;

	/** Catch key events fired in your app */
	SetOnKey(callback: (action: "DOWN"|"UP", name: str, keycode: num_int, extrakeys: "Shift"|"Ctrl"|"Alt"|"Meta") => void): void;

	/** Called on keyboard visibility changes */
	SetOnShowKeyboard(callback: (shown: bin) => void): void;

	/** Called on WiFi connected state changes */
	SetOnWifiChange(callback: (state: "CONNECTING"|"CONNECTED"|"DISCONNECTED", ssid: str) => void): void;

	/**
	 * Define global app options
	 * @param options <br>
 	 * &emsp; `NoPause` - dont pause when not in foreground
	 */
	SetOptions(options?: string | ("UseBrowser"|"NoKeys"|"ShowKeys"|"NoPause"|"NoThemeAlerts"|"IgnoreSslErrors"|"TouchModal"|"NoCors"|"NoTouch"|"NoFocus"|"Secure"|"ShowLocked"|"WakeScreen"|"ScreenOn")[]): void;

	/** Fix display orientation */
	SetOrientation(orient: "Default"|"Landscape"|"ReverseLandscape"|"Portrait"|"ReversePortrait", callback?: () => void): void;

	/** Change app position and size */
	SetPosition(left: num_frc, top: num_frc, width?: num_frc, height?: num_frc, options?: "px"): void;

	/** Change GUI thread priority */
	SetPriority(level: "Low"|"Medium"|"High"): void;

	/** Set current device ringer mode */
	SetRingerMode(mode: "Normal"|"Vibrate"|"Silent"): void;

	/** Change screen brightness */
	SetScreenBrightness(level: num_frc): void;

	/** Changes the screen mode of your application */
	SetScreenMode(mode: "Default"|"Normal"|"Full"|"Game"): void;

	/** Auto-Launch Project when shared data received */
	SetSharedApp(name: "AppName"): void;

	/** En/Disable speaker for phone calls */
	SetSpeakerPhone(on: bin): void;

	/**
	 * Set status bar color
	 * @premium
	 */
	SetStatusBarColor(color: str_col): void;

	/**
	 * Set default text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/**
	 * Change the theme of your app to any created [Theme Object](CreateTheme.htm)
	 * @premium
	 */
	SetTheme(theme: DsTheme): void;

	/**
	 * Change the user agent for html apps
	 * @param options `Add-appends to default user agent`
	 */
	SetUserAgent(agent: str, options?: str): void;

	/** Set user credentials in an html app for websites that require user login */
	SetUserCreds(name: str, password: str): void;

	/**
	 * Change volume of a given audio type
	 * @param stream <br>
 	 * &emsp; `DTMF` - Dual Tone Multi-Frequency
	 */
	SetVolume(stream: "Alarm"|"DTMF"|"Music"|"Notification"|"Ring"|"System"|"Voicecall", level: num_frc, options?: "ShowUI"): void;

	/** En/Disable the mobile Wifi Access Point of the device */
	SetWifiApEnabled(enable: bin, ssid?: str, key?: str): void;

	/** En/Disable Wifi on the device */
	SetWifiEnabled(enable: bin): void;

	/** Show main app layout */
	Show(): void;

	/**
	 * Shows a CheckList
	 * @param list `title:checked`
	 * @param options sun-moon:shows sun and moon icons instead of default check boxes
	 */
	ShowCheckList(title: str, list: str|{ title: str, check: bin }[], callback?: (this: DsCheckList, data: { title: str, checked: bin }) => void, width?: num_frc, height?: num_frc, options?: str): DsCheckList;

	/**
	 * Opens the in-app debug console as black overlay
	 * @param options <br>
 	 * &emsp; `dialog` - Show the debug log as black overlay dialog\
 	 * &emsp; `clear` - Clear content before showing
	 */
	ShowDebug(show: bin, options?: "dialog"|"clear"): void;

	/** Show keyboard on a focussed control */
	ShowKeyboard(obj: dso): bin;

	/** Show the in-app menu */
	ShowMenu(): void;

	/** Show a popup message */
	ShowPopup(message: str, options?: string | ("Bottom"|"Short"|"Long")[]): void;

	/**
	 * Show a progress indicator
	 * @param options <br>
 	 * &emsp; `NoDim` - Don't darken background\
 	 * &emsp; `NonModal` - allow background touch\
 	 * &emsp; `Solid` - shows solid background behind spinner
	 */
	ShowProgress(message?: str, options?: string | ("NoDim"|"NonModal"|"Solid")[]): void;

	/** Show a progress bar dialog */
	ShowProgressBar(title: str, percent?: num_prc, options?: "Light"): void;

	/** Show a text input dialog */
	ShowTextDialog(title: str, dflt?: str, callback?: (text: str) => void): void;

	/** Shows a tooltip message on the screen */
	ShowTip(message: str, left?: num_frc, top?: num_frc, timeOut?: num_mls, options?: "Down"): void;

	/** Simulates a drag event on an app object in a scrollable container */
	SimulateDrag(obj: dso, x1: num_frc, y1: num_frc, x2: num_frc, y2: num_frc, step?: num, pause?: num): void;

	/** Simulates a key event on an app object */
	SimulateKey(obj: dso, keyName: str, modifiers?: "META_META_ON"|"META_RIGHT_ON"|"NUM_LOCK_ON"|"SCROLL_LOCK_ON"|"SHIFT_LEFT_ON"|"SHIFT_MASK"|"SHIFT_ON"|"SHIFT_RIGHT_ON"|"SYM_ON", pause?: num): void;

	/** Simulates a scroll event on a scrollable app object */
	SimulateScroll(obj: dso, x: num_frc, y: num_frc, dx: num_frc, dy: num_frc, count?: num, fling?: num): void;

	/** Simulate a touch event on a reachable control */
	SimulateTouch(obj: dso, x: num_frc, y: num_frc, dir: "Down"|"Move"|"Up"): void;

	/** Start your DS app in an html project */
	Start(): void;

	/**
	 * Starts an app in a new window
	 * @param options <br>
 	 * &emsp; `Debug` - start app in debug mode\
 	 * &emsp; `Game` - runs in GameView mode
	 * @param intent `{ action`, ` type`, ` data`, ` extras }`
	 */
	StartApp(file: str_ptf, options?: string | ("Portrait"|"Landscape"|"Transparent"|"Debug"|"Game"|"remote")[], intent?: str): void;

	/** Start remote debug server */
	StartDebugServer(): void;

	/** Starts a parallel service */
	StartService(packageName: str, className: str): void;

	/** Stop an app started via StartApp */
	StopApp(name: str_pth): void;

	/** Stop a running debug server */
	StopDebugServer(): void;

	/** Stops a running app service */
	StopService(): void;

	/**
	 * Execute a shell command on the android shell
	 * @param options <br>
 	 * &emsp; `log` - logs output to console\
 	 * &emsp; `noread` - dont read result (just execute)
	 */
	SysExec(command: str, options?: "log"|"noread"|"sh"|"su", maxRead?: num, timeout?: num_sec): str;

	/** Audiolize text */
	TextToSpeech(text: str, pitch?: num, rate?: num, callback?: () => void, stream?: "music", locale?: str, engine?: str): void;

	/** Put the app in the background */
	ToBack(): void;

	/** Bring your app to the foreground */
	ToFront(): void;

	/** Translate “Ok” and “Cancel” buttons */
	Translate(Ok: str, Cancel: str): void;

	/** Unlocks the device */
	Unlock(): void;

	/** Unlock a locked drawer */
	UnlockDrawer(side: "left"|"right"): void;

	/** Unpair a paired Bluetooth device */
	UnpairBtDevice(address: str, callback?: () => void): void;

	/**
	 * Unzip a zip file
	 * @param options <br>
 	 * &emsp; `spk` - Extract SPK as DS project folder
	 */
	UnzipFile(source: str_pth, destination: str_pth, options?: "spk"): void;

	/**
	 * Update the ProgressBar percentage
	 * @param options <br>
 	 * &emsp; `doevents` - force v8 UI update
	 */
	UpdateProgressBar(percent: num_prc, options?: "doevents"): void;

	/**
	 * Force UI refresh
	 * @param ms `Update Rate`
	 */
	UpdateUI(ms: num_mls): void;

	/** Uploads a file to a server */
	UploadFile(url: str_url, file: str_ptf, name: str, callback?: () => void): void;

	/**
	 * Decode a URI encoded string
	 * @deprecated In recent versions of Android (10), its no longer possible to query the content database for the _data column (for security reasons) which makes it impossible to work out the original file path.
	 * @param options `returns DS style paths`
	 */
	Uri2Path(uri: str_uri, options?: str): str;

	/** Vibrate device in a pattern */
	Vibrate(pattern: str_com): void;

	/** Perform a synchronous delay */
	Wait(seconds: num_sec, doEvents?: bin): void;

	/** Wake the screen up */
	WakeUp(): void;

	/**
	 * Lists the contents of a folder recursively
	 * @param options <br>
 	 * &emsp; `Alphasort` - sorts the paths in alphabetical order\
 	 * &emsp; `FullPath` - returns absolute paths to the listed items\
 	 * &emsp; `RegEx` - accepts regexp patterns\
 	 * &emsp; `Folders` - list folders only\
 	 * &emsp; `Files` - list files only\
 	 * &emsp; `NoEmpty` - hide empty folders\
 	 * &emsp; `project` - Shows DS project folders only
	 */
	WalkFolder(path: str_pth, filter?: str, limit?: num_int, options?: string | ("Alphasort"|"FullPath"|"RegEx"|"Folders"|"Files"|"NoEmpty"|"project")[]): str_pth[];

	/** Connect to a WiFi network by specifying the ssid and a password */
	WifiConnect(ssid: str, key: str): void;

	/** Scan for any available Wifi networks */
	WifiScan(callback: (ssids: str_pip|lst) => void, options?: "detail"): void;

	/**
	 * Write text to a local file
	 * @param encoding <br>
 	 * &emsp; `ISO-8859-1` - Latin-1
	 */
	WriteFile(file: str_ptf, text: str, mode?: "Append"|"ASCII"|"Base64", encoding?: "US-ASCII"|"UTF-8"|"UTF-16"|"UTF-16BE"|"UTF-16LE"|"windows-1252"|"ISO-8859-1"): void;

	/**
	 * Compress a file to zip
	 * @param options <br>
 	 * &emsp; `spk` - Create SPK from File
	 */
	ZipFile(source: str_pth, destination: str_pth, options?: "spk"): void;

	/**
	 * Compress a folder to zip
	 * @param options <br>
 	 * &emsp; `spk` - Create SPK from DS project folder
	 */
	ZipFolder(source: str_pth, destination: str_pth, options?: "spk"): void;

}

declare class DsAudioRecorder {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Returns a new list of frequency values */
	GetData(): num_int[];

	/** Returns the PMPO value (Peak music power output) */
	GetPeak(): num_flt;

	/** Returns the RMS value (Root Mean Square) */
	GetRMS(): num_flt;

	/** Returns the control class name */
	GetType(): "AudioRecorder";

	/** Pause the recording */
	Pause(): void;

	/** Define the recording file */
	SetFile(file: str_ptf): void;

	/** Define the Recording frequency */
	SetFrequency(frequency: 8000|11025|22050|44100|48000): void;

	/** Define the recording file */
	SetSource(src: "Default"|"Camcorder"|"Mic"|"Unprocessed"|"Voicecommunication"|"Voiceperformance"|"Voicerecognition"): void;

	/** Start recording to the specified file */
	Start(): void;

	/** Stop recording */
	Stop(): void;
}


declare class DsBluetoothList {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Returns the control class name */
	GetType(): "BluetoothList";

	/** Define a callback function for touch events */
	SetOnTouch(callback: (this: DsBluetoothList, name: str, address: str) => void): void;
}


declare class DsBluetoothSerial {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Clears the Bluetooth buffer of the serial connection */
	Clear(): void;

	/** Connect a Bluetooth device */
	Connect(name: str, channel?: str): void;

	/** Disconnect the Bluetooth connection */
	Disconnect(): void;

	/** Returns the control class name */
	GetType(): "BluetoothSerial";

	/** Checks if Bluetooth is enabled or not */
	IsBluetoothEnabled(): bin;

	/** Checks if a Bluetooth connection exists to another device */
	IsConnected(): bin;

	/** Check pairing status to another device */
	IsPaired(name: str): bin;

	/** Listen <s>or stop listening</s> for incoming messages */
	Listen(enabled: bin): void;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Ask user to enable Bluetooth */
	RequestEnable(): void;

	/**
	 * Define data format for outgoing data
	 * @param mode `Hex`, `Int`, `Text`, `<encoding>`\
 	 * &emsp; `Hex` - comma separated text value\
 	 * &emsp; `Int` - comma separated byte numbers\
 	 * &emsp; `Text` - string of text characters\
 	 * &emsp; `encoding` - UTF-16L/BE
	 */
	SetDataMode(mode: str): void;

	/** If the device has sent the connection request
	 * 	name is of type boolean (true if the connection was established successful)
	 * 	and address is your BluetoothSerial object
	 * 
	 * if the device has received the connection request
	 * 	name is a string with the clients bluetooth name
	 * 	and address includes the bluetooth address */
	SetOnConnect(callback: (this: DsBluetoothSerial, name: str, address: str) => void): void;

	/** Called after disconnecting from bluetooth connection */
	SetOnDisconnect(callback: (this: DsBluetoothSerial, name: str, address: str) => void): void;

	/** Called after received Data via Bluetooth */
	SetOnReceive(callback: (this: DsBluetoothSerial, data: str) => void): void;

	/** Specify how to split received data */
	SetSplitMode(mode: "End"|"Start-End"|"Size"|"Head", p2: str|num_int, p3?: str|num_int): void;

	/** Set idle disconnect timeout */
	SetTimeout(milliseconds: num_mls): void;

	/** Send data to connected device */
	Write(data: str): void;
}


declare class DsButton {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsButton, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "Button";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: (this: DsButton) => void): void;

	/** Called when the button was long pressed */
	SetOnLongTouch(callback: (this: DsButton) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Customize the button looks */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsButton) => void): void;
}


declare class DsCameraView {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsCameraView, type: str) => void, time?: num_mls): void;

	/**
	 * Takes a picture if a motion was detected
	 * @param fileName File_n#_motion
	 */
	AutoCapture(path: str_ptd, fileName: str, maxCount?: num_int): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/**
	 * Find faces in the current camera view
	 * @return \{ confidence, eyeDistance, midPoint, pose }
	 */
	FindFaces(maxCount?: num_int): { confidence: num_frc, eyeDistance: num, midPoint: {x:num, y:num}, pose: num_int };

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Returns the device camera count */
	GetCameraCount(): num_int;

	/** Returns a new list of available color effects */
	GetColorEffects(): "none"|"mono"|"negative"|"solarize"|"sepia"|"posterize"|"whiteboard"|"blackboard"|"aqua"|"vage-cold"|"point-blue"|"point-red-yellow"|"emboss"|"sketch"|"neon";

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Returns the camera height */
	GetImageHeight(): num_frc;

	/** Returns the camera width */
	GetImageWidth(): num_frc;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the hightst possible zoom value */
	GetMaxZoom(): num;

	/**
	 * Get camera parameters
	 * @return `key1=value1;key2=value2;...`
	 */
	GetParameters(): str_smc;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns a new list of possible picture dimensions
	 * @return `w1 x h1`, `w2 x h2`, `...`
	 */
	GetPictureSizes(): str_com;

	/**
	 * Returns base64 pixel data as raw bitmap, png or jpg format
	 * @param format `GrayScale`, `JSON`, `<resolution>`, `rawbase64`, `pngbase64`, `jpgbase64`\
 	 * &emsp; `GrayScale` - fastest\
 	 * &emsp; `JSON` - slowest: “ARGB,ARGB,...”\
 	 * &emsp; `<resolution>` - CIF: 352x288\
 	 * &emsp; QQVGA: 160x120\
 	 * &emsp; QVGA: 320x240\
 	 * &emsp; SVGA: 800x600\
 	 * &emsp; VGA: 640x480\
 	 * &emsp; XGA: 1024x768\
 	 * &emsp; UXGA: 1600x1200
	 */
	GetPixelData(format: str, left: num_frc, top: num_frc, width: num_frc, height: num_frc): str_b64;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "CameraView";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Returns the curent zoom value */
	GetZoom(): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Returns if the current camera supports flashlight */
	HasFlash(): bin;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Returns if the camera is currently recording */
	IsRecording(): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Define a raster for motion detection */
	MotionMosaic(xtiles: num_int, ytiles: num_int, sensitivity: num_pxl, minPeriod?: num_mls, image?: DsImage): void;

	/** Start recording video */
	Record(file: str_ptf, seconds?: num_sec, quality?: "high"|"low"|"480p"|"720p"|"1080p"|"2k"|"4k"|"8k"|"qvga"|"vga"|"cif"): void;

	/**
	 * Keeps tracks of the average color around a given point
	 * @param list `x1`, `y1`, `x2`, `y2`, `...`
	 */
	ReportColors(list: str_pip, callback: (this: DsCameraView, data: [num,num,num][]) => void, sampSize?: num_pxl, maxRate?: num_mls): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Applies a color effect to the camera */
	SetColorEffect(effect: "none"|"mono"|"negative"|"solarize"|"sepia"|"posterize"|"whiteboard"|"blackboard"|"aqua"|"vage-cold"|"point-blue"|"point-red-yellow"|"emboss"|"sketch"|"neon"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** Define two camera view duplicate targets */
	SetDuplicateImage(image1: DsImage, image2: DsImage): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** En-/Disables the camera flash */
	SetFlash(onoff: bin): void;

	/**
	 * Change focus mode
	 * @param mode <br>
 	 * &emsp; `Picture` - for taking pictures\
 	 * &emsp; `Video` - for recording videos\
 	 * &emsp; `EDOF` - Extended Depth Of Field for continuous digital focusing
	 */
	SetFocusMode(mode: "Auto"|"Picture"|"Video"|"Macro"|"EDOF"|"Fixed"|"Infinity"): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control gets focused */
	SetOnFocus(callback: (this: DsCameraView) => void): void;

	/** Called when cam.MotionMosaic detected a motion */
	SetOnMotion(callback: (this: DsCameraView, data: lst_num) => void): void;

	/** Called when cam.AutoCapture took a picture */
	SetOnPicture(callback: (this: DsCameraView, file: str_pth) => void): void;

	/** Called if the camera is ready for use */
	SetOnReady(callback: (this: DsCameraView) => void): void;

	/** Rotates the camera view */
	SetOrientation(angle: 0|90|180|270): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Change camera properties */
	SetParameter(name: str, value: num|str): void;

	/** Define a custom picture size in pixels */
	SetPictureSize(width: num_pxl, height: num_pxl): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Rotate the captured image */
	SetPostRotation(angle: num_deg): void;

	/** Define a preview image for captured pictures */
	SetPreviewImage(image: DsImage): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** N-/Disables the camera sound */
	SetSound(enabled: bin): void;

	/** Define custom video recording size */
	SetVideoSize(width: num_pxl, height: num_pxl): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Change the zoom value of the camera */
	SetZoom(level: num): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Start the camera preview on the display */
	StartPreview(): void;

	/** Stop recording video */
	Stop(): void;

	/** Stop the camera preview on the display */
	StopPreview(): void;

	/** Streams the camera view to a local ip */
	Stream(ip: str, port?: num_int, quality?: num_prc, fps?: num_fps, mtu?: num_mtu): void;

	/** Save the current camera view to a file */
	TakePicture(file: str_ptf): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsCameraView) => void): void;
}


declare class DsCheckBox {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsCheckBox, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get current checked state */
	GetChecked(): bin;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "CheckBox";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Changes the ckecked state */
	SetChecked(checked: bin): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the CheckBox was touched */
	SetOnTouch(callback: (this: DsCheckBox, isChecked: bin) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsCheckBox) => void): void;
}


declare class DsCloudStore {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Returns the control class name */
	GetType(): "CloudStore";

	/** Deletes a file in the cloud */
	Delete(file: str_ptf, callback: (this: DsCloudStore, success: bin, result: {data: str,error: str}, status: num_int) => void): void;

	/** Lists files of the cloud */
	List(filter: str, callback: (this: DsCloudStore, error: bin, result: {data: str_com,error: str}, status: num_int) => void): void;

	/** Loads data from the cloud */
	Load(file: str_ptf, callback: str, options?: (this: DsCloudStore, error: bin, result: {data: all,error: str}, status: num_int) => void): void;

	/** Merges data in the cloud */
	Merge(file: str_ptf, data: obj, callback?: (this: DsCloudStore, success: bin, result: {data: str,error: str}, status: num_int) => void): void;

	/** Saves data in the cloud */
	Save(file: str_ptf, data: all, callback?: (this: DsCloudStore, success: bin, result: {data: str,error: str}, status: num_int) => void, options?: str): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** Upload a file to the cloud */
	Upload(data: str, name: str, type?: str_mim, callback?: (this: DsCloudStore, response: {error: str,name: str,folder: str,id: str,mimetype: str_mim,size: num}) => void, password?: str): void;
}


declare class DsCodeEdit {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsCodeEdit, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clears the undo/redo history */
	ClearHistory(): void;

	/** Copy selected text to the clipboard */
	Copy(): void;

	/** Cut selected text to the clipboard */
	Cut(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the current cursor line index */
	GetCursorLine(): num_int;

	/** Get the cursor position in the text */
	GetCursorPos(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get the start character index of a line */
	GetLineStart(line: num_int): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Get current selection state */
	GetSelectMode(): bin;

	/** Returns the currently contained text */
	GetText(): str;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "CodeEdit";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Underlines a certain line in the text */
	HighlightLine(line: num_int): void;

	/** Insert text at the cursor */
	InsertText(text: str): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Paste clipboard to the current cursor position */
	Paste(): void;

	/** Redo an undone action */
	Redo(): void;

	/** Replace the selected text */
	Replace(text: str): void;

	/** Replace all occurances of a string in the text */
	ReplaceAll(text: str, newText: str, matchCase?: bin, wholeWord?: bin): void;

	/** Replace a range of the text with a string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/** Search and select a string in the text */
	Search(text: str, direction?: "Up"|"Down", matchCase?: bin, wholeWord?: bin): void;

	/** Select the whole text */
	SelectAll(): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Changes the color scheme of the CodeEdit */
	SetColorScheme(scheme: "Dark"|"Light"): void;

	/** Change the current cursor position */
	SetCursorPos(position: num_int): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Change the highlighted language syntax */
	SetLanguage(ext: ".js"|".java"|".php"|".c"|".cpp"|".cs"|".rb"|".m"|".py"|".txt"): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Select between Yoyo or Touch mode */
	SetNavigationMethod(method: "Yoyo"|"Touch"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: (this: DsCodeEdit) => void): void;

	/** Define a Yoyo double-tap callback function */
	SetOnDoubleTap(callback: (this: DsCodeEdit) => void): void;

	/** Define a key-event callback function */
	SetOnKey(callback: (this: DsCodeEdit, action: "Down"|"Move"|"Up", keyname: "VOLUME_DOWN"|"VOLUME_UP"|"BACK"|"MENU", keycode: num_int, extra: "Shift"|"Ctrl"|"Alt"|"Meta") => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Selects part of the text in a given range */
	SetSelection(start: num_int, stop: num_int): void;

	/** En/Disable cursor selection mode */
	SetSelectMode(onOff: bin): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** En/Disable device keyboard */
	SetUseKeyboard(onOff: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsCodeEdit) => void): void;

	/** Undo an action */
	Undo(): void;
}


declare class DsCrypt {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Decrypt text with a key */
	Decrypt(text: str, password: str): str;

	/** Encrypt text with a key */
	Encrypt(text: str, password: str): str;

	/** Returns the control class name */
	GetType(): "Crypt";

	/** Get a hash from a string */
	Hash(text: str, mode: "MD5"|"SHA"|"SHA-1"|"SHA-224"|"SHA-256"|"SHA-384"|"SHA-512", options?: "Wrap"): str;

	/** Set accesibility description */
	SetDescription(desc: str): void;
}


declare class DsDialog {

	/** Add content layout */
	AddLayout(layout: DsLayout): void;

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Hides the control and removes it from the screen */
	Dismiss(): void;

	/** En/Disables hiding via presing the back key */
	EnableBackKey(enable: bin): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get title bar height */
	GetTitleHeight(): num_pxl;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "Dialog";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Removes a content layout */
	RemoveLayout(layout: DsLayout): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col, radius: num_pxl): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when back button was pressed while the dialog was shown */
	SetOnBack(callback: (this: DsDialog) => void): void;

	/** Called when the dialog is cancelled */
	SetOnCancel(callback: (this: DsDialog) => void): void;

	/** Called when user touched the control */
	SetOnTouch(callback: (this: DsDialog, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Changes the dialog title */
	SetTitle(title: str): void;

	/** Changes the color of the dialog title */
	SetTitleColor(clr: str_col): void;

	/** Changes the title divider height for "Old" dialogs */
	SetTitleDividerColor(color: str_col): void;

	/** Change height of the title divider for "Old" dialogs */
	SetTitleDividerHeight(height: num_pxl, options?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Change height of the title bar for "Old" dialogs */
	SetTitleHeight(height: num_pxl, options?: string | ("px"|"sp"|"dip"|"mm"|"pt")[]): void;

	/** Changes the title text size for "Old" dialogs */
	SetTitleTextSize(size: num, options?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsDialog) => void): void;
}


declare class DsDownloader {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/**
	 * Download file(s)
	 * @param fldr `must not have a trailing slash`
	 */
	Download(url: str_url|str_url[], fldr: str_pth, name?: str, headers?: str): void;

	/** Get current download progress */
	GetProgress(): num_frc;

	/** Get target download size in bytes */
	GetSize(): num_byt;

	/** Returns the control class name */
	GetType(): "Downloader";

	/** Get download completed state */
	IsComplete(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Called when download is cancelled */
	SetOnCancel(callback: (this: DsDownloader, file: str_pth) => void): void;

	/** Called when downloads are finished */
	SetOnComplete(callback: (this: DsDownloader) => void): void;

	/** Called when a file is downloaded */
	SetOnDownload(callback: (this: DsDownloader, path: str_pth) => void): void;

	/** Called when an error occurred while downloading */
	SetOnError(callback: (this: DsDownloader, error: str) => void): void;
}


declare class DsEmail {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Returns the control class name */
	GetType(): "Email";

	/** Start receiving emails from a given folder */
	Receive(folder: str, maxCount: num_int, filter?: str): void;

	/**
	 * Send an email to someone
	 * @param sender `email address`
	 * @param recipients `email address`
	 */
	Send(subject: str, body: str, sender: str, recipients: str, attach?: str_pth): void;

	/**
	 * Set IMAP settings for receiving messages
	 * @param server `imap/pop.gmail.com`, `imap/pop.mail.yahoo.com`, `imap/pop.gmx.net`\
 	 * &emsp; `pop.gmail.com` - google\
 	 * &emsp; `pop.mail.yahoo.com` - yahoo\
 	 * &emsp; `pop.gmx.net` - gmx
	 * @param port <br>
 	 * &emsp; `993` - imap\
 	 * &emsp; `995` - pop
	 */
	SetIMAP(server: str, port?: 993|995): void;

	/** Called when a message is received */
	SetOnMessage(callback: (this: DsEmail, data: { from: str_eml, to: str_eml, cc: str_eml, subject: str, body: str }) => void): void;

	/** Called when a status changed */
	SetOnStatus(callback: (this: DsEmail, status: str) => void): void;

	/**
	 * Set SMTP settings for sending messages
	 * @param server <br>
 	 * &emsp; `smtp.gmail.com` - google\
 	 * &emsp; `smtp.mail.yahoo.com` - yahoo\
 	 * &emsp; `mail.gmx.net` - gmx
	 * @param port <br>
 	 * &emsp; `465` - SSL\
 	 * &emsp; `578` - TLS (gmail, yahoo)\
 	 * &emsp; `587` - gmx
	 */
	SetSMTP(server: "smtp.gmail.com"|"smtp.mail.yahoo.com"|"mail.gmx.net", port: 465|578|587): void;
}


declare class DsFile {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Close File */
	Close(): void;

	/** Get file size in bytes */
	GetLength(): num_byt;

	/** Get pointer position */
	GetPointer(): num_int;

	/** Returns the control class name */
	GetType(): "File";

	/** Read data from file */
	ReadData(len: num_int, mode?: "Int"|"Text"|"Hex"): void;

	/** Read numeric data from file */
	ReadNumber(type: "Byte"|"UByte"|"Bool"|"Float"|"FloatLE"|"Long"|"LongLE"|"Short"|"UShort"|"ShortLE"|"UShortLE"|"Int"|"UInt"|"IntLE"): num;

	/**
	 * Read data as text
	 * @param type <br>
 	 * &emsp; `UTF` - read UTF-8 string with 2 byte header\
 	 * &emsp; `Line` - read one line terminated by \\n, \\r or \\r\\n\
 	 * &emsp; `Char` - read big-endian 16-bit character
	 */
	ReadText(type: "UTF"|"Line"|"Char"): str;

	/**
	 * Asynchronously read data as text
	 * @param type <br>
 	 * &emsp; `Line` - read one line terminated by \\n, \\r or \\r\\n\
 	 * &emsp; `Char` - read big-endian 16-bit character
	 */
	ReadTextAsync(type: "Line"|"Char", callback: (this: DsFile, data: str) => void): void;

	/** CHange pointer position to a given byte in the file */
	Seek(offset: num_int): void;

	/** Allocate memory for a file */
	SetLength(len: num_int): void;

	/** Let the pointer skip some bytes */
	Skip(bytes: num_int): void;

	/**
	 * Write data to the file
	 * @param data <br>
 	 * &emsp; `abc46` - low order 8-bit bytes
	 */
	WriteData(data: "FA"|"FB"|"FC"|"250"|"251"|"252"|"abc46", mode?: "Hex"|"Int"|"Text"): void;

	/** Write number to the file */
	WriteNumber(data: num, type?: "Byte"|"UByte"|"Bool"|"Float"|"FloatLE"|"Long"|"LongLE"|"Short"|"UShort"|"ShortLE"|"UShortLE"|"Int"|"UInt"|"IntLE"): void;

	/**
	 * Writes text to file
	 * @param type <br>
 	 * &emsp; `UTF` - write UTF-8 encoded text\
 	 * &emsp; `Bytes` - 8-bit bytes\
 	 * &emsp; `Char` - Write big-endian 16-bit characters
	 */
	WriteText(data: str|num_int[], type?: "UTF"|"Bytes"|"Char"): void;
}


declare class DsGameView {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Execute code inside the GameView */
	Execute(js: str_jsc): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "GameView";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define the game source file */
	SetFile(file: str_ptf): void;

	/** Change the target framerate */
	SetFrameRate(fps: num_fps): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsGameView) => void): void;
}


declare class DsGLView {

	/** Width/height relation */
	aspect: num_flt;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** [HTMLDivElement] */
	canvas: obj;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/**
	 * Create a sprite object which can be drawn on the GLView
	 * @return img
	 */
	CreateImage(file: str_ptf, callback?: (this: DsGLView) => void): GLV_img;

	/**
	 * Draw image to canvas
	 * @param image img
	 */
	DrawImage(image: GLV_img, x: num_frc, y: num_frc, w?: num_frc, h?: num_frc, angle?: num_deg): void;

	/**
	 * Draw part of a sprite to the canvas
	 * @param sheet img
	 */
	DrawSprite(sheet: GLV_img, sx: num_pxl, sy: num_pxl, sw: num_pxl, sh: num_pxl, dx: num_frc, dy: num_frc, dw: num_frc, dh: num_frc, angle: num_deg): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/**
	 * Returns the glv context
	 * @return ctx
	 */
	GetContext(): GLV_ctx;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "GLView";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Height */
	height: num_int;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Render draw commands */
	Render(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when user touched the control */
	SetOnTouch(callback: (this: DsGLView, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (this: DsGLView, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (this: DsGLView, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (this: DsGLView, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsGLView) => void): void;

	/** Width */
	width: num_int;
}

declare class GLV_img {

	/** Width of the image */
	width: num_int;

	/** Height of the image */
	height: num_int;
}
declare class GLV_ctx {

	/**
	 * Captures the canvas to a png image
	 * @param fileName `path relative to “/sdcard”`
	 */
	capture(x: num_pxl, y: num_pxl, w: num_pxl, h: num_pxl, fileName: str, successCallback?: fnc, errorCallback?: fnc): void;

	/**
	 * 
	 * @deprecated does nothing. ctx is automatically cleared after render()
	 */
	clearRect(x: num_pxl, y: num_pxl, width?: num_pxl, height?: num_pxl): void;

	/**
	 * Draws part of a sprite to the context
	 * @param image img
	 */
	drawImage(image: GLV_img, sx: num_pxl, sy: num_pxl, sw: num_pxl, sh: num_pxl, dx: num_pxl, dy: num_pxl, dw: num_pxl, dh: num_pxl): void;

	/** Render draw commands */
	render(): void;

	/** Reset all transformations to default */
	resetTransform(): void;

	/** Restore saved context */
	restore(): void;

	/** Rotates the transformation matrix */
	rotate(angle: num_rad): void;

	/** Saves current context */
	save(): void;

	/** Scale the transformation matrix */
	scale(a: num_frc, d: num_frc): void;

	/** Set current matrix */
	setTransform(a: num, b: num, c: num, d: num, tx: num, ty: num): void;

	/** Transform the current matrix */
	transform(a: num, b: num, c: num, d: num, tx: num, ty: num): void;

	/** 'Move' the transformation matrix */
	translate(tx: num_pxl, ty: num_pxl): void;
}

declare class DsImage {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsImage, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Clears the image content */
	Clear(): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/**
	 * Draws an elliptical arc by specifying the corners of the surrounding rectangle and the angle range of the arc to be drawn
	 * @param x1 `corner 1`
	 * @param y1 `corner 1`
	 * @param x2 `corner 2`
	 * @param y2 `corner 2`
	 */
	DrawArc(x1: num, y1: num, x2: num, y2: num, start: num_deg, sweep: num_deg): void;

	/**
	 * Draws a Circle
	 * @param radius `width relative`
	 */
	DrawCircle(x: num, y: num, radius: num): void;

	/** Draw gif frame on a specific time */
	DrawFrame(ms: num_mls): void;

	/** Draws an Image:dso-CreateImage */
	DrawImage(image: DsImage, x: num, y: num, w?: num, h?: num, angle?: num_deg, mode?: "ADD"|"CLEAR"|"DARKEN"|"DST"|"DST_ATOP"|"DST_IN"|"DST_OUT"|"DST_OVER"|"LIGHTEN"|"MULTIPLY"|"OVERLAY"|"SCREEN"|"SRC"|"SRC_ATOP"|"SRC_IN"|"SRC_OUT"|"SRC_OVER"|"XOR"): void;

	/** Draws an image with a 2d transformation matrix */
	DrawImageMtx(image: DsImage, matrix: [num, num, num, num, num, num]): void;

	/** Draws a line */
	DrawLine(x1: num, y1: num, x2: num, y2: num): void;

	/** Draws a single pixel */
	DrawPoint(x: num, y: num): void;

	/** Draws a rectangle */
	DrawRectangle(x1: num, y1: num, x2: num, y2: num): void;

	/** Draws a vertically centered sample graph */
	DrawSamples(data: num_int[], range: num): void;

	/** Draws a text */
	DrawText(txt: str, x: num, y: num): void;

	/** Applies modifications to the image data */
	Flatten(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the name set via SetName */
	GetName(): str;

	/** Returns the parent control object */
	GetParent(): dso;

	/** Returns color values of a pixel */
	GetPixelColor(x: num, y: num): [ num_dhx, num_dhx, num_dhx ];

	/** Returns base64 encoded image data */
	GetPixelData(format: "rawbase64"|"pngbase64"|"jpgbase64", left?: num_int, top?: num_int, width?: num_int, height?: num_int): str_b64;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "Image";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Measures the size of a given text
	 * @return \{ width, height }
	 */
	MeasureText(txt: str): { width: num_frc, height: num_frc };

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Moves the image content */
	Move(x: num, y: num): void;

	/** Reset all transformations */
	Reset(): void;

	/** Rotates the content */
	Rotate(angle: num_deg, pivotX?: num, pivotY?: num): void;

	/**
	 * Saves the image to a file on the local filesystem
	 * @param quality `for jpg files`
	 */
	Save(fileName: str_ptf, quality?: num_prc): void;

	/** Scales the content by the given factors */
	Scale(x: num_fac, y: num_fac): void;

	/** Change the alpha value */
	SetAlpha(alpha: num_dhx): void;

	/** En/Disables automatic view updates */
	SetAutoUpdate(onoff: bin): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Fills the image with a color */
	SetColor(color: str_col): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Change the content to an other image */
	SetImage(image: str_pth|DsImage, width?: num_frc, height?: num_frc, options?: "rescale"): void;

	/** Change the stroke width */
	SetLineWidth(width: num_pxl): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Set a minimum OnTouchMove call timeout */
	SetMaxRate(milliseconds: num_mls): void;

	/** Change the name of the image */
	SetName(name: str): void;

	/** Called when image has loaded asynchronously */
	SetOnLoad(callback: (this: DsImage, img: DsImage) => void): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (this: DsImage, src: dso) => void): void;

	/** Called when user touched the control */
	SetOnTouch(callback: (this: DsImage, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (this: DsImage, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (this: DsImage, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (this: DsImage, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Change the paint color */
	SetPaintColor(color: str_col): void;

	/** Change the paint style */
	SetPaintStyle(style: "Fill"|"Line"): void;

	/**
	 * Set base64 encoded pixel data
	 * @param data `<rawbase64>`, `data:image/jpg;base64,<jpgbase64>`, `data:image/png;base64,<pngbase64>`
	 * @param options <br>
 	 * &emsp; `fix` - set bitmap size
	 */
	SetPixelData(data: str_b64, width?: num, height?: num, options?: string | ("px"|"icon"|"resize"|"rescale"|"square"|"fix")[]): void;

	/** Change the pixel mode for drawing methods */
	SetPixelMode(onoff: bin): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change the drawn text size */
	SetTextSize(size: num): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Skews the content */
	Skew(x: num, y: num): void;

	/** Applies a transformation matrix to the content */
	Transform(matrix: lst): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsImage) => void): void;

	/** Update the view in disabled AutoUpdate mode */
	Update(): void;
}


declare class DsLayout {

	/** Add a control to the layout */
	AddChild(child: dso, order?: num_int): void;

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsLayout, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Moves a child to the layout front */
	ChildToFront(child: dso): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Destroys and removes a child from the layout */
	DestroyChild(child: dso): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Returns the z order of a child */
	GetChildOrder(child: dso): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "Layout";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Remove a child from the layout */
	RemoveChild(child: dso): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set margins of top-level children */
	SetChildMargins(left?: num, top?: num, right?: num, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/**
	 * Change text size of top-level children
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetChildTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Apply corner radius to card layouts's */
	SetCornerRadius(radius: num_pxl): void;

	/** Apply shadow to card layouts's */
	SetElevation(elevation: num_pxl): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Adjust the placing of contained children */
	SetGravity(gravity: "Left"|"Top"|"Right"|"Bottom"|"VCenter"|"HCenter"|"FillX"|"FillY"|"FillXY"): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the user changed a control content */
	SetOnChildChange(callback: (this: DsLayout, src: dso) => void): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (this: DsLayout, src: dso) => void): void;

	/** Called when user touched the control */
	SetOnTouch(callback: (this: DsLayout, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (this: DsLayout, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (this: DsLayout, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (this: DsLayout, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Change the children orientation */
	SetOrientation(orient: "Horizontal"|"Vertical"): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Enable touch event forwarding */
	SetTouchThrough(through: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsLayout) => void): void;
}


declare class DsList {

	/** Adds an entry to the list */
	AddItem(title: str, body?: str, image?: str|str_ptf): void;

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsList, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Expand the list to the full height inside scrollers */
	Expand(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/**
	 * Returns item data by a title
	 * @return \{ title, body, image }
	 */
	GetItem(title: str): { title: str, body: str, image: str_pth };

	/**
	 * Returns item data by an index
	 * @return \{ title, body, image }
	 */
	GetItemByIndex(index: num_int): { title: str, body: str, image: str_pth };

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the list length */
	GetLength(): num_int;

	/**
	 * Returns the whole list as object
	 * @return `title1[DELIM]title2[DELIM]...`
	 */
	GetList(delim: str): { title: str, body: str, image: str_pth }[]|str;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "List";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Inserts an item into the list */
	InsertItem(index: num_int, title: str, body?: str, image?: str|str_ptf): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Clears the list */
	RemoveAll(): void;

	/** Removes an item by its title */
	RemoveItem(title: str): void;

	/** Removes an item by its index */
	RemoveItemByIndex(index: num_int): void;

	/** Scrolls to an item by its title */
	ScrollToItem(title: str, body?: str): void;

	/** Scrolls the list to a specific index */
	ScrollToItemByIndex(index: num_int): void;

	/** Highlight an item by its title and body */
	SelectItem(title: str, body?: str, scroll?: bin): void;

	/** Highlight an item by its index */
	SelectItemByIndex(index: num_int, scroll?: bin): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Change coloumn widths */
	SetColumnWidths(icon: num_frc, title: num_frc, body?: num_frc, mode?: string | ("px"|"sp"|"dip"|"mm"|"pt")[]): void;

	/** Changes the divider style */
	SetDivider(height: num_frc, color?: str_col): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** Auto-crop titles to fit in control */
	SetEllipsize1(mode: "start"|"middle"|"end"): void;

	/** Auto-crop bodys to fit in control */
	SetEllipsize2(mode: "start"|"middle"|"end"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Change selected title highlight color */
	SetHiTextColor1(color: str_col): void;

	/** Change selected body highlight color */
	SetHiTextColor2(color: str_col): void;

	/** Change icon margins */
	SetIconMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: string | ("px"|"sp"|"dip"|"mm"|"pt")[]): void;

	/** Change the icon size */
	SetIconSize(size: num, mode?: string | ("px"|"sp"|"dip"|"mm"|"pt")[]): void;

	/** Change the content of an element by its title */
	SetItem(title: str, newTitle: str, newBody?: str, newImage?: str_ptf): void;

	/** Change the content of an element by its index */
	SetItemByIndex(index: num_int, newTitle: str, newBody?: str, newImage?: str_ptf): void;

	/** Set item color */
	SetItemColor(name: str, textClr: str_col, backClr?: str_col): void;

	/** Set item color by index */
	SetItemColorByIndex(index: num_int, textClr: str_col, backClr?: str_col): void;

	/** Set the content of the whole list */
	SetList(list: "title"|"title&colon;icon"|"title&colon;body&colon;icon", delim?: str): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Define a callback function for touch events */
	SetOnLongTouch(callback: (this: DsList, title: str, body?: str, icon?: str, index?: num_int) => void): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: (this: DsList, title: str, body?: str, icon?: str, index?: num_int) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Change the default text color of titles */
	SetTextColor1(color: str_col): void;

	/** Change the default text color of bodies */
	SetTextColor2(color: str_col): void;

	/**
	 * Define distances to other controls
	 * @param options <br>
 	 * &emsp; `inner` - around each individual title and body\
 	 * &emsp; `outer` - around both title and body together
	 */
	SetTextMargins(left?: num, top?: num, right?: num, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt", options?: "inner"|"outer"): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/** Apply shadow to titles */
	SetTextShadow1(radius: num_deg, dx?: num_int, dy?: num_int, color?: str_col): void;

	/** Apply shadow to bodies */
	SetTextShadow2(radius: num_deg, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Set title text size */
	SetTextSize1(size: num, mode?: string | ("px"|"sp"|"dip"|"mm"|"pt")[]): void;

	/** Set body text size */
	SetTextSize2(size: num, mode?: string | ("px"|"sp"|"dip"|"mm"|"pt")[]): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsList) => void): void;
}


declare class DsListDialog {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Hides the control and removes it from the screen */
	Dismiss(): void;

	/** Returns the control class name */
	GetType(): "ListDialog";

	/** Hides the control visually */
	Hide(): void;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Define a callback function for touch events */
	SetOnTouch(callback: (this: DsListDialog, title: str, checked?: bin) => void): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Change the dialog title */
	SetTitle(title: str): void;

	/** Set the visibility to “Show” */
	Show(): void;
}


declare class DsLocator {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Calculate bearing between current and given position */
	GetBearingTo(latitude: num, longitude: num): num;

	/** Calculate distance between current and given position in meters */
	GetDistanceTo(latitude: num, longitude: num): num;

	/** Returns the control class name */
	GetType(): "Locator";

	/** Called when some of the values changed */
	SetOnChange(callback: (this: DsLocator, data: { provider: str, latitude: num, longitude: num, speed: num, bearing: num, altitude: num, accuracy: num_met }, time: num_mls) => void): void;

	/** Locator update frequency in seconds */
	SetRate(rate: num_sec): void;

	/** Start locator */
	Start(): void;

	/** Stop locator */
	Stop(): void;
}


declare class DsMediaPlayer {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Close the media player */
	Close(): void;

	/** Get the song length in seconds */
	GetDuration(): num_sec;

	/** Get  elapsed playtime in seconds */
	GetPosition(): num_sec;

	/** Returns the control class name */
	GetType(): "MediaPlayer";

	/** Returns if the player is looping */
	IsLooping(): bin;

	/** Get current playing state */
	IsPlaying(): bin;

	/** Returns if player is useable yet */
	IsReady(): bin;

	/** Pause the current playing song */
	Pause(): void;

	/** Play the current loaded song from the last paused time or from a given start time in in seconds */
	Play(): void;

	/** Seek the player to a given time in seconds */
	SeekTo(time: num_flt): void;

	/** Load a sound file to the player */
	SetFile(file: str_ptf): void;

	/** Set looping mode */
	SetLooping(loop: bin): void;

	/** Called when the player has finished playing a track */
	SetOnComplete(callback: (this: DsMediaPlayer) => void): void;

	/** Called when the player is ready for use */
	SetOnReady(callback: (this: DsMediaPlayer) => void): void;

	/** Called when ply.Seek has finished */
	SetOnSeekDone(callback: (this: DsMediaPlayer) => void): void;

	/** Set the playback speed */
	SetSpeed(speed: num_fac): void;

	/** Set the playback pitch */
	SetPitch(pitch: num_fac): void;

	/** Set the playback volume */
	SetVolume(left: num_prc, right: num_prc): void;

	/** Stop playing a song */
	Stop(): void;
}


declare class DsMediaStore {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Load the album art to an image */
	GetAlbumArt(image: DsImage, id: num_int, options?: "internal"|"external"): bin;

	/** Load the song art to an image */
	GetSongArt(image: DsImage, id: num_int, options?: "internal"|"external"): bin;

	/** Returns the control class name */
	GetType(): "MediaStore";

	/**
	 * Search for media albums
	 * @param sort coloumns
	 */
	QueryAlbums(filter?: str_sql, sort?: "album"|"_id"|"albumArt"|"artist"|"numSongs"|"firstYear"|"lastYear", options?: "internal"|"external"): void;

	/**
	 * Search for media artists
	 * @param sort coloumns
	 */
	QueryArtists(filter?: str_sql, sort?: "_id"|"artist"|"numAlbums"|"numTracks"|"", options?: "internal"|"external"): void;

	/**
	 * Search for media
	 * @param sort coloumns
	 */
	QueryMedia(filter?: str_sql, sort?: string | ("title"|"_id"|"duration"|"size"|"uri"|"album"|"albumID"|"artist"|"artistId")[], options?: "internal"|"external"): void;

	/** Called when album query has finished */
	SetOnAlbumsResult(callback: (this: DsMediaStore, result: { album: str, id: num_int, albumArt: str_pth, artist: str, numSongs: num_int, firstYear: str, lastYear: str }[]) => void): void;

	/** Called when artist query has finished */
	SetOnArtistsResult(callback: (this: DsMediaStore, result: { id: num_int, artist: str, numAlbums: num_int, numTracks: num_int }[]) => void): void;

	/** Called when media query has finished */
	SetOnMediaResult(callback: (this: DsMediaStore, result: { title: str, id: num_int, duration: num_mls, size: num_byt, uri: str_uri, album: str, albumID: num_int, artist: str, artistId: num_int }[]) => void): void;
}


declare class DsNetClient {

	/** Calls the OnReceive callback for incoming TCP data */
	AutoReceive(server: str_url, port?: num_int, mode?: "US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Closes the NetClient socket */
	Close(): void;

	/** Connect to a server */
	Connect(address: str_url, port?: num_int): void;

	/** Disconnect from server */
	Disconnect(): void;

	/** Downloads a file via TCP from the server */
	DownloadFile(file: str_url): void;

	/** Returns the broadcast address of UDP connections */
	GetBroadcastAddress(): str;

	/** Returns the control class name */
	GetType(): "NetClient";

	/** Get NetClient connected state */
	IsConnected(): bin;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Receive data as bytes */
	ReceiveBytes(mode: "Int"|"Hex"): num_byt[];

	/**
	 * Receive an UDP Datagram
	 * @param options `<BUFSIZ>`\
 	 * &emsp; `BUFSIZ` - “1k,2k,4k,8k,16k,32k,64k”
	 */
	ReceiveDatagram(mode?: "US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16", port?: num_int, timeout?: num, options?: str_com): str;

	/**
	 * Receive UDP datagrams
	 * @param options `<BUFSIZ>`\
 	 * &emsp; `BUFSIZ` - “1k,2k,4k,8k,16k,32k,64k”
	 */
	ReceiveDatagrams(port?: num_int, mode?: "US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16", options?: str_com): void;

	/** Receive a file via TCP from the server */
	ReceiveFile(file: str, wait?: num): str;

	/** Receive text over TCP */
	ReceiveText(mode?: "US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"): str;

	/**
	 * Receive video over UDP
	 * @premium
	 */
	ReceiveVideoStream(port: num, img: DsImage): str;

	/**
	 * Send bytes over TCP connection
	 * @param data <br>
 	 * &emsp; `bytes` - hexadecimal 00..FF
	 */
	SendBytes(data: num_byt[]|string | ("bytes")[], mode?: "Int"|"Hex"): void;

	/** Send an UDP Datagram */
	SendDatagram(data: str, mode?: "US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16", address?: str_url, port?: num_int, options?: "Text"|"Hex"|"Bytes"): void;

	/**
	 * Define data format for outgoing data
	 * @param mode `Hex`, `Int`, `Text`, `<encoding>`\
 	 * &emsp; `Hex` - comma separated text value\
 	 * &emsp; `Int` - comma separated byte numbers\
 	 * &emsp; `Text` - string of text characters\
 	 * &emsp; `encoding` - UTF-16L/BE
	 */
	SetDataMode(mode?: str): void;

	/** Specify how to split received data */
	SetSplitMode(mode: "End"|"Start-End"|"Size", p2?: str|num_int, p3?: str|num_int): void;

	/** Sends text over TCP connection */
	SendText(text: str, mode?: "US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"): void;

	/** Called when TCP connected or failed to connect to a server */
	SetOnConnect(callback: (this: DsNetClient, connected: bin) => void): void;

	/** Called when a file download has finished */
	SetOnDownload(callback: (this: DsNetClient, something: num_int) => void): void;

	/** Called when a TCP NetClient received some data via AutoReceive */
	SetOnReceive(callback: (this: DsNetClient, address: str) => void): void;

	/** Timeout between two receive checks */
	SetTimeout(seconds: num_sec): void;

	/**
	 * Wake up devices if they are configured to
	 * @premium
	 */
	WakeOnLan(ip: str, mac?: str): void;
}


declare class DsNode {

	/** Returns the plugin version */
	GetVersion(): num;

	/**
	 * Start the main Node process
	 * @param args argument array
	 */
	Start(args?: lst, paths?: lst): void;

	/** Define a callback function which is called when the Node component is ready for use */
	SetOnReady(cb: (this: DsNode) => void): void;

	/** Define a callback function which is called when the node process has exited */
	SetOnDone(cb: (this: DsNode) => void): void;

	/** Define a callback function which is called when the node process prints to stdout */
	SetOnOutput(cb: (this: DsNode, stdout: str) => void): void;

	/** Define a callback function which is called when the node process prints to stderr */
	SetOnError(cb: (this: DsNode, msg: str) => void): void;

	/** Define a callback function which is called when a system/pipe message was received from the node process */
	SetOnMessage(cb: (this: DsNode, msg: str) => void): void;

	/** Set a process environment variable */
	SetEnv(name: str, val: str): void;

	/** Get a process environment variable */
	GetEnv(name: str): str;

	/** Open a message pipe */
	OpenMsgPipe(isCmd: bin): void;

	/** Close a message pipe */
	CloseMsgPipe(isCmd: bin): void;

	/** Send a message over the message pipe */
	SendPipeMsg(msg: str, isCmd?: bin): void;

	/** Send a message to the running node process */
	SendMessage(msg: str): void;

	/** Returns if the Node component is ready for use */
	IsReady(): bin;

	/** Returns if the node process exited */
	IsDone(): bin;

	/**
	 * Run a NodeJS source file
	 * @param id `Context ID`
	 */
	Run(file: str_pth, id?: str, newPaths?: str_lst): void;

	/**
	 * Execute a line of code in the node process
	 * @param id `Context ID`
	 */
	Execute(js: str_jsc, id?: str): void;

	/**
	 * Install a node module from npmjs.org
	 * @param dir `optional target directory`
	 */
	AddModule(name: "name"|"name^ver", dir?: str): void;
}


declare class DsNotification {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/**
	 * Cancel a notification with a specific id
	 * @param id `id`, `*`
	 */
	Cancel(id?: str): void;

	/** Returns the control class name */
	GetType(): "Notification";

	/** Listen for any notifications */
	Listen(options?: "CheckPerms"): void;

	/** Send the notification to the user */
	Notify(id?: str): void;

	/** Set a large image in the notification */
	SetLargeImage(image: str_ptf): void;

	/** Activate device notification LEDs */
	SetLights(color: str_col, onMs?: num_mls, offMs?: num_mls): void;

	/**
	 * Set notification texts
	 * @param extra `Add multiline text in your notification.`
	 */
	SetMessage(ticker: str, title?: str, text?: str, extra?: str): void;

	/** Called when notification intercepted */
	SetOnNotify(callback: (this: DsNotification, source: str, title: str, message: str, extra: str, type: "Normal") => void): void;

	/** Set a small image icon */
	SetSmallImage(image: str_ptf): void;
}


declare class DsNxt {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Play frequency tone */
	Beep(frequency: num_hrz, duration?: num_mls): void;

	/** Brakes motors smoothly */
	Brake(motors: "A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC"): void;

	/** Check if device is connected to NXT */
	CheckConnection(): bin;

	/** Connect to NXT */
	Connect(name: str): void;

	/** Disconnect NXT */
	Disconnect(): void;

	/**
	 * Commands NXT to drive motors
	 * @param rotations `-100..100`
	 */
	Drive(motors: "A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC", power: num_prc, rotations?: num_prc, options?: str): void;

	/** Find first program file */
	FileFindFirst(pattern: str): str;

	/** Find next program file on the NXT */
	FileFindNext(handle: str): str;

	/** Returns NXT Bt address */
	GetBtAddress(): str;

	/** Returns NXT Bt name */
	GetBtName(): str;

	/** Returns the current running program name */
	GetCurrentProgram(): str;

	/** Returns a new wheel encoder value */
	GetRotationCount(motor: "A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC"): num_int;

	/** Returns the control class name */
	GetType(): "Nxt";

	/** Checks if bt is enabled */
	IsBluetoothEnabled(): bin;

	/** Checks if NXT is connected */
	IsConnected(): bin;

	/** Checks if bt is enabled */
	IsEnabled(): bin;

	/** Check if a motor is powered */
	IsMotorIdle(motor: "A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC"): bin;

	/** Checks if the device is paired with an other */
	IsPaired(name: str): bin;

	/** Play a sound file a certain amount of times */
	PlaySoundFile(file: str_ptf, repeat?: num_int): void;

	/**
	 * Read a color sensor value on the input where the sensor is plugged into
	 * @return `1..6 or 0..1023`
	 */
	ReadColorSensor(input: num_int, mode?: "ColorDetect"|"LightSense"|"RedSense"|"GreenSense"|"BlueSense"): num_int;

	/**
	 * Get measured ultrasinic distance in cm
	 * @param input `1..4`
	 */
	ReadDistanceSensor(input: num_int): num_flt;

	/**
	 * Measures the light intensity
	 * @param input `1..4`
	 * @return `0..100`
	 */
	ReadLightSensor(input: num_int, active?: bin): num_int;

	/**
	 * Reads a message from the NXT brick's mail box
	 * @param mailbox `1..10`
	 */
	ReadMail(mailbox: num_int, type?: "Text"|"Number"|"Logic", remove?: bin): str;

	/**
	 * Measure the sound pressure level
	 * @param input `1..4`
	 * @param mode <br>
 	 * &emsp; `DB` - Decibels\
 	 * &emsp; `DbA` - A-weighted Decibels
	 */
	ReadSoundSensor(input: num_int, mode?: "DB"|"DbA"): num_flt;

	/**
	 * Check if the touch sensor is pressed
	 * @param input `1..4`
	 */
	ReadTouchSensor(input: num_int): bin;

	/** Request enabling bluetooth if it isn't */
	RequestEnable(): void;

	/** Reset wheel encoder offset to 0 */
	Reset(motors: "A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC"): void;

	/**
	 * Sends a message to the NXT brick's mail box
	 * @param mailbox `1..10`
	 */
	SendMail(mailbox: num_int, type?: "Text"|"Number"|"Logic", message?: str|num_int): void;

	/** Inverts the direction of motor commands */
	SetInvert(invert: bin): void;

	/**
	 * Change sensor LED color
	 * @param input `1..4`
	 */
	SetLampColor(input: num_int, color: "White"|"Red"|"Green"|"Blue"|"Off"): void;

	/** Called when NXT connection established or failed */
	SetOnConnect(callback: (this: DsNxt, connected: bin) => void): void;

	/** Called when bt connection established */
	SetOnConnected(callback: (this: DsNxt) => void): void;

	/** Shows a list of paired NXT devices to connect to */
	ShowDevices(): void;

	/** Starts an NXT-G program on the NXT brick if available */
	StartProgram(name: str_pth): void;

	/** Stop powering some motors */
	Stop(motors: "A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC"): void;

	/** Stops the current running program */
	StopProgram(): void;

	/**
	 * Convert color number to its name
	 * @param val `1..6`
	 */
	ToColorName(val: num_int): "black"|"blue"|"green"|"yellow"|"red"|"white";
}


declare class DsOverlay {

	/** Adds layout to overlay */
	AddLayout(layout: DsLayout, left?: num_frc, top?: num_frc, options?: "px"): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Returns the parent control object */
	GetParent(): dso;

	/** Returns the control class name */
	GetType(): "Overlay";

	/** Remove layout from overlay */
	RemoveLayout(layout: DsLayout): void;

	/** Changes a child layout position */
	SetPosition(layout: DsLayout, left?: num_frc, top?: num_frc, options?: "px"): void;
}


declare class DsPhoneState {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Returns the control class name */
	GetType(): "PhoneState";

	/** Called when a phone state has changed */
	SetOnChange(callback: (this: DsPhoneState, type: "CellLocation"|"DataConnection"|"DataActivity"|"CallState"|"ServiceState"|"SignalStrength"|"CallForwarding"|"MessageWaiting", data: all) => void): void;

	/** Start listening */
	Start(): void;

	/** Stop listening */
	Stop(): void;
}


declare class DsPlayStore {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/**
	 * Get product info from Google Play
	 * @param options <br>
 	 * &emsp; `IAP` - In-App purchases\
 	 * &emsp; `SUBS` - subscriptions
	 */
	GetBillingInfo(prodIDs: str, callback: (this: DsPlayStore, items: { skuDetailsToken: str, productId: str, type: str, price: str, price_amount_micros: num_int, price_currency_code: str, title: str, description: str }[]) => void, options?: "IAP"|"SUBS"): void;

	/** Get purchased items from Google Play */
	GetPurchases(callback: (this: DsPlayStore, items: { skuDetailsToken: str, productId: str, type: str, price: str, price_amount_micros: num_int, price_currency_code: str, title: str, description: str }[]) => void, options?: "SUBS"): void;

	/** Returns the control class name */
	GetType(): "PlayStore";

	/** Purchase an item on Google Play */
	Purchase(prodID: str, token: str, callback?: (this: DsPlayStore, prodId: str, orderId: str, purchToken: str, devToken: str, packageName: str) => void, options?: "SUBS"): void;
}


declare class DsScroller {

	/** Add a layout control */
	AddChild(layout: DsLayout): void;

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsScroller, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Devil rises and takes a child with him to hell */
	DestroyChild(layout: DsLayout): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get horizontal scroll bar position */
	GetScrollX(): num_frc;

	/** Get vertical scroll bar position */
	GetScrollY(): num_frc;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "Scroller";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Remove a scroller layout */
	RemoveChild(child: dso): void;

	/** Scroll relative to the current position */
	ScrollBy(x: num_frc, y: num_frc): void;

	/** Scrolls to a given position */
	ScrollTo(x: num_frc, y: num_frc): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsScroller) => void): void;
}


declare class DsSeekBar {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsSeekBar, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "SeekBar";

	/** Get current value */
	GetValue(): num;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over", options?: str): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Set rate of OnChange calls */
	SetMaxRate(rate: num_mls): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: (this: DsSeekBar, value: num) => void): void;

	/**
	 * Called when content was changed by the user
	 * @deprecated in favour of SetOnChange
	 */
	SetOnTouch(callback: (this: DsSeekBar, value: num) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Set value range */
	SetRange(range: num): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set current seekbar value */
	SetValue(val: num): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsSeekBar) => void): void;
}


declare class DsSensor {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Get first value of a sensor */
	GetAzimuth(): num;

	/** Returns a list of builtin sensors in your device */
	GetNames(): str_com;

	/** Get second value of a sensor */
	GetPitch(): num;

	/** Get third value of a sensor */
	GetRoll(): num;

	/** Returns the control class name */
	GetType(): "Sensor";

	/** Get all values from sensor */
	GetValues(): [ num_mls, num, num, num ];

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Set maximum OnChange rate */
	SetMaxRate(rate: num_mls): void;

	/** Set minimum value difference which triggers OnChange */
	SetMinChange(min: num): void;

	/** Called when a sensor value has changed */
	SetOnChange(callback: (this: DsSensor, first: num, second: num, third: num, time: num_mls) => void): void;

	/** Start the sensor */
	Start(): void;

	/** Stop the sensor */
	Stop(): void;
}


declare class DsService {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Returns the control class name */
	GetType(): "Service";

	/** Send message to service */
	SendMessage(message: str): void;

	/** Run service in background */
	SetInBackground(): void;

	/** Run service in foreground */
	SetInForeground(title: str, text?: str, largeIcon?: str_ptf, smallIcon?: str_ptf, importance?: "none"|"min"|"low"|"high"): void;

	/** Called when service sent a message */
	SetOnMessage(callback: (this: DsService, message: str) => void): void;

	/** Stop service */
	Stop(): void;
}


declare class DsSMS {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Returns the control class name */
	GetType(): "SMS";

	/**
	 * Send SMS message
	 * @param options <br>
 	 * &emsp; `MultiPart` - multi-part SMS messaging
	 */
	Send(number: str, message: str, options?: "MultiPart"): void;

	/** Called when user received a SMS */
	SetOnMessage(callback: (this: DsSMS, message: str) => void): void;

	/** Called when a status has changed */
	SetOnStatus(callback: (this: DsSMS, status: str) => void): void;
}


declare class DsSpeechRec {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Stop recognition */
	Cancel(): void;

	/** Returns the RMS value (Root Mean Square) from the audio recorder */
	GetRMS(): num_flt;

	/** Returns the control class name */
	GetType(): "SpeechRec";

	/** Check whether SpeechRec is listening */
	IsListening(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Start speech recognition */
	Recognize(): void;

	/** Called when an error occured */
	SetOnError(callback: (this: DsSpeechRec, error: str) => void): void;

	/** Called when SpeechRec is ready for use */
	SetOnReady(callback: (this: DsSpeechRec) => void): void;

	/** Called when text was recognized */
	SetOnResult(callback: (this: DsSpeechRec, result: str) => void): void;

	/** Stop recording and start recognition */
	Stop(): void;
}


declare class DsSpinner {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsSpinner, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "Spinner";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Change current shown item
	 * @deprecated Use SetText instead
	 */
	SelectItem(item: str): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change spinner list */
	SetList(list: str_com, delim?: str): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when value changed by the user */
	SetOnChange(callback: (this: DsSpinner, item: str, index: num_int) => void): void;

	/**
	 * Define a callback function for touch events
	 * @deprecated Use SetOnChange instead
	 */
	SetOnTouch(callback: (this: DsSpinner) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change current shown item */
	SetText(item: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsSpinner) => void): void;
}


declare class DsSwitch {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsSwitch, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Checks if switch is activated */
	GetChecked(): bin;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "Switch";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Change the checked state */
	SetChecked(checked: bin): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when user touched the control */
	SetOnTouch(callback: (this: DsSwitch, value: bin) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Customize the button looks */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsSwitch) => void): void;
}


declare class DsSynth {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Returns the control class name */
	GetType(): "Synth";

	/**
	 * Play a sequence of notes
	 * @param tune `note1:duration1,note2:duration2,...`
	 */
	PlayMidiTune(tune: str_com): void;

	/**
	 * Play a single note
	 * @param note `0..125`
	 */
	PlayNote(note: num_int): void;

	/**
	 * Plays a frequency tone
	 * @param frequency frequency
	 */
	PlayTone(frequency: num, duration: num_mls): void;

	/** Change delay effect difference */
	SetDelay(milliseconds: num_mls): void;

	/** Enables the delay effect (plays every note a second time after a given delay) */
	SetDelayEnabled(enable: bin): void;

	/** Adds a delay feedback effect */
	SetFeedback(feedback: num_frc): void;

	/** Set current frequency */
	SetFrequency(frequency: num): void;

	/** Set whole note length */
	SetNoteLength(duration: num_sec): void;

	/** Initializes phaser */
	SetPhaser(drywet: num_frc, rate: num, range: num, feedback: num_frc): void;

	/** Control unprocessed/delayed signals ratio */
	SetPhaserDryWet(drywet: num_frc): void;

	/** En/Disables phaser effect */
	SetPhaserEnabled(enable: bin): void;

	/** Enables phaser feedback */
	SetPhaserFeedback(feedback: num_frc): void;

	/** Set sweep range */
	SetPhaserRange(range: num): void;

	/** Set sweeps per second */
	SetPhaserRate(rate: num): void;

	/** Initializes the VCA */
	SetVca(attack: num_mls, decay: num_mls, sustain: num_frc, release: num_mls): void;

	/** Set a time of maximum volume */
	SetVcaAttack(attack: num_mls): void;

	/** Controls time when volume is lowered to sustain */
	SetVcaDecay(decay: num_mls): void;

	/** En/Disables VCA effect */
	SetVcaEnabled(enable: bin): void;

	/**
	 * Set a time of minimum volume
	 * @param release mls
	 */
	SetVcaRelease(release: num): void;

	/** Set a basis volume */
	SetVcaSustain(sustain: num_frc): void;

	/**
	 * Initialize the VCF effect
	 * @param cuttoff frequency
	 */
	SetVcf(attack: num_mls, decay: num_mls, sustain: num_frc, release: num_mls, cuttoff: num, resonance: num_frc, depth?: num_frc): void;

	/** Set a time of maximum frequencies */
	SetVcfAttack(attack: num_mls): void;

	/**
	 * Set a maximum frequency which will never be exceeded
	 * @param cuttoff frequency
	 */
	SetVcfCutoff(cuttoff: num): void;

	/** Controls time when frequency is lowered to sustain */
	SetVcfDecay(decay: num_mls): void;

	/** Set filter strength */
	SetVcfDepth(depth: num_frc): void;

	/** En/Disables VCF effect */
	SetVcfEnabled(enable: bin): void;

	/** Set a time of minimum frequency */
	SetVcfRelease(release: num_mls): void;

	/** Adds a resonance tone */
	SetVcfResonance(resonance: num_frc): void;

	/** Set a basis frequency */
	SetVcfSustain(sustain: num_frc): void;

	/** Set master volume */
	SetVolume(left: num_frc, right: num_frc): void;

	/** Set the wave shape of the synthesizer */
	SetWaveShape(shape: "Sin"|"Saw"|"Square"|"White"): void;

	/** Start playing */
	Start(): void;

	/** Stop playing */
	Stop(): void;
}


declare class DsSysProc {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/**
	 * Read from stderr
	 * @param options <br>
 	 * &emsp; `nowait` - dont wait for input
	 */
	Err(maxLines: num_int, options?: string | ("nowait")[]): void;

	/** Returns the control class name */
	GetType(): "SysProc";

	/**
	 * Read from stdin
	 * @param options <br>
 	 * &emsp; `nowait` - dont wait for input
	 */
	In(maxLines: num_int, options?: string | ("nowait")[]): void;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Write to stdout */
	Out(command: str): void;

	/** Read first byte of a file */
	ReadFileAsByte(file: str_ptf): num_byt;

	/** Called when stderr changed */
	SetOnError(callback: (this: DsSysProc, data: str) => void): void;

	/** Called when stdout changed */
	SetOnInput(callback: (this: DsSysProc, data: str) => void): void;

	/** Write binary data to file */
	WriteToFile(file: str_ptf, data: str): void;
}


declare class DsTabs {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsTabs, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get current tab name */
	GetCurrentTabName(): str;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get tab content layout */
	GetLayout(name: str): DsLayout;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "Tabs";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Apply corner radius to card layouts's */
	SetCornerRadius(radius: num_pxl): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when current tab changed */
	SetOnChange(callback: (this: DsTabs, name: str) => void): void;

	/** Called when the user changed a control content */
	SetOnChildChange(callback: (this: DsTabs, src: dso) => void): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (this: DsTabs, src: dso) => void): void;

	/** Called when user touched the control */
	SetOnTouch(callback: (this: DsTabs, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set text size */
	SetTextSize(size: num, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Enable touch event forwarding */
	SetTouchThrough(through: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Switch current tab */
	ShowTab(name: str): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsTabs) => void): void;

	parent: {
		/** Add a new tab */
		AddTab(name: str): void;
	}
}


declare class DsText {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsText, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Return html formatted text */
	GetHtml(): str_htm;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get amount of text lines */
	GetLineCount(): num_int;

	/** Get the start character index of a line */
	GetLineStart(line: num_int): num_int;

	/** Get line top position on screen */
	GetLineTop(line: num_int): num_frc;

	/** Get amount of lines fitting in the control */
	GetMaxLines(): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "Text";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Append line to the text
	 * @param options <br>
 	 * &emsp; `Clear` - Clears the log before writing
	 */
	Log(message: str, options?: string | ("Clear"|"Red"|"Green"|"Blue")[]): void;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Auto-crop text to fit in control */
	SetEllipsize(mode: "start"|"middle"|"end"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Change the used font */
	SetFontFile(file: str_ptf): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Set maximum log length */
	SetLog(maxLines: num_int): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when the control was pressed for eons */
	SetOnLongTouch(callback: (this: DsText, src: dso) => void): void;

	/** Called when user touched the control */
	SetOnTouch(callback: (this: DsText, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user starts touching the control */
	SetOnTouchDown(callback: (this: DsText, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user drags a finger over the screen */
	SetOnTouchMove(callback: (this: DsText, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when the user finger leaves te screen */
	SetOnTouchUp(callback: (this: DsText, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/** Define a shadow around the control */
	SetTextShadow(radius: num_int, dx?: num_int, dy?: num_int, color?: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** En/Disables touch events to be fired on the control */
	SetTouchable(touchable: bin): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsText) => void): void;
}


declare class DsTextEdit {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsTextEdit, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clear undo/redo history */
	ClearHistory(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the current cursor line index */
	GetCursorLine(): num_int;

	/** Get the cursor position in the text */
	GetCursorPos(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Return html formatted text */
	GetHtml(): str_htm;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Get amount of text lines */
	GetLineCount(): num_int;

	/** Get the start character index of a line */
	GetLineStart(line: num_int): num_int;

	/** Get line top position on screen */
	GetLineTop(line: num_int): num_frc;

	/** Get amount of lines fitting in the control */
	GetMaxLines(): num_int;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get the selected text */
	GetSelectedText(): str;

	/** Get selection end position */
	GetSelectionEnd(): num_int;

	/** Get selection start position */
	GetSelectionStart(): num_int;

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "TextEdit";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Insert text at a given position */
	InsertText(text: str, start: num_int): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Redo an undone action */
	Redo(): void;

	/** Replace a range of the text with a string */
	ReplaceText(text: str, start: num_int, end: num_int): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Change cursor color */
	SetCursorColor(color: str_col): void;

	/** Change the current cursor position */
	SetCursorPos(position: num_int): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Shows a grey default text */
	SetHint(text: str): void;

	/** Set current text to html-formatted text */
	SetHtml(str: str_htm): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when content was changed by the user */
	SetOnChange(callback: (this: DsTextEdit) => void): void;

	/** Called when user pressed 'Done' or 'Enter' */
	SetOnEnter(callback: (this: DsTextEdit) => void): void;

	/** Called when the control gets focused */
	SetOnFocus(callback: (this: DsTextEdit) => void): void;

	/** Set selection color */
	SetSelectColor(col: str_col): void;

	/** Select text in a given range */
	SetSelection(start: num_int, stop: num_int): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsTextEdit) => void): void;

	/** Undo an action */
	Undo(): void;
}


declare class DsTheme {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Returns the control class name */
	GetType(): "Theme";

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Define button text color */
	SetBtnTextColor(color: str_col): void;

	/**
	 * Define button options
	 * @param options `FontAwesome`, `Html`, `Monospace`, `SingleLine`, `Custom`, `NoPad`, `FillX/Y`, `Normal`, `Aluminium`, `Gray`, `Lego`
	 */
	SetButtonOptions(options?: str_com): void;

	/** Define button paddings */
	SetButtonPadding(left?: num, top?: num, right?: num, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Define button style */
	SetButtonStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc, checkClr?: str_col): void;

	/**
	 * Define check box options
	 * @param options `FillX/Y`
	 */
	SetCheckBoxOptions(options?: str_com): void;

	/** Define dialog button colors */
	SetDialogBtnColor(color: str_col): void;

	/** Define dialog button text colors */
	SetDialogBtnTxtColor(color: str_col): void;

	/** Define dialog background colors */
	SetDialogColor(color: str_col): void;

	/** Define dialog corner radius */
	SetDialogCornerRadius(radius: num_pxl): void;

	/** Define whether to dim dialog background */
	SetDimBehind(dim: bin): void;

	/** Define highlight colors */
	SetHighlightColor(color: str_col): void;

	/** Define list divider colors */
	SetListDividerColor(color: str_col): void;

	/** Define progress background color */
	SetProgressBackColor(color: str_col): void;

	/** Define progress options */
	SetProgressOptions(options?: string | ("NoDim"|"NonModal"|"Solid")[]): void;

	/** Define progress bar options */
	SetProgressBarOptions(options?: "Light"): void;

	/** Define progress text color */
	SetProgressTextColor(color: str_col): void;

	/** Define control text color */
	SetTextColor(color1: str_col, color2?: str_col): void;

	/** Define text edit options */
	SetTextEditOptions(options?: "underline"): void;

	/** Define title colors */
	SetTitleColor(color: str_col): void;

	/** Define title divider colors */
	SetTitleDividerColor(color: str_col): void;

	/** Define title divider height */
	SetTitleDividerHeight(height?: num_pxl): void;

	/** Define title height */
	SetTitleHeight(height?: num_pxl, options?: string | ("px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps")[]): void;

	/** Define title text size */
	SetTitleTextSize(size: num, options?: string | ("px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps")[]): void;
}


declare class DsToggle {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsToggle, type: str) => void, time?: num_mls): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Checks if toggle is activated */
	GetChecked(): bin;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Returns the currently contained text */
	GetText(): str;

	/** Returns the current text size */
	GetTextSize(mode: "px"): num;

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "Toggle";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Change the checked state */
	SetChecked(checked: bin): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when user touched the control */
	SetOnTouch(callback: (this: DsToggle, value: bin) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Customize the button looks */
	SetStyle(color1?: str_col, color2?: str_col, radius?: num_pxl, strokeClr?: str_col, strokeWidth?: num_pxl, shadow?: num_frc, checkClr?: str_col): void;

	/** Change displayed text */
	SetText(text: str): void;

	/** Change the text color */
	SetTextColor(color: str_col): void;

	/**
	 * Change the text size
	 * @param mode <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size: num, mode?: "px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsToggle) => void): void;
}


declare class DsUSBSerial {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Get the 'Data Terminal Ready' state */
	GetDTR(): bin;

	/** Get the 'Request To Send' state */
	GetRTS(): bin;

	/** Get the 'Carrier Detect' state */
	GetCD(): bin;

	/** Returns the control class name */
	GetType(): "USBSerial";

	/** Actively checks if a USB device is connected */
	IsConnected(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/**
	 * Define data format for outgoing data
	 * @param mode `Hex`, `Int`, `Text`, `<encoding>`\
 	 * &emsp; `Hex` - comma separated text value\
 	 * &emsp; `Int` - comma separated byte numbers\
 	 * &emsp; `Text` - string of text characters\
 	 * &emsp; `encoding` - UTF-16L/BE
	 */
	SetDataMode(mode: str): void;

	/** Raises the Data Terminal Ready state */
	SetDTR(onOff: bin): void;

	/** Set maximum bytes to received */
	SetMaxRead(bytes: num_int): void;

	/** Set maximum bytes to send */
	SetMaxWrite(bytes: num_int): void;

	/** Called after received Data via USB */
	SetOnReceive(callback: (this: DsUSBSerial, data: str) => void): void;

	/** Raises the Request To Send state */
	SetRTS(onOff: bin): void;

	/** Specify how to split received data */
	SetSplitMode(mode: "End"|"Start-End"|"Size", p2?: str|num_int, p3?: str|num_int): void;

	/** Set timeout */
	SetTimeout(ms: num_mls): void;

	/** Start listening to serial port */
	Start(): void;

	/** Stop listening to serial port */
	Stop(): void;

	/**
	 * Send data to connected device
	 * @param encoding `US-ASCII`, `UTF16L/BE`
	 */
	Write(text: str, encoding?: str): void;
}


declare class DsVideoView {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get video duration in seconds */
	GetDuration(): num_flt;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "VideoView";

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the view is currently playing */
	IsPlaying(): bin;

	/** Check if the video is ready for playback */
	IsReady(): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Pause the video */
	Pause(): void;

	/** Play video */
	Play(): void;

	/** Seek to a given playback time */
	SeekTo(seconds: num_int): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/**
	 * Set video source
	 * @param file `http(s)://url`
	 */
	SetFile(file: str_pth|str_url): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Called when playback finished */
	SetOnComplete(callback: (this: DsVideoView) => void): void;

	/** Called when an error occured */
	SetOnError(callback: (this: DsVideoView) => void): void;

	/** Called when video is ready for playback */
	SetOnReady(callback: (this: DsVideoView) => void): void;

	/** Called when subtitle text changed */
	SetOnSubtitle(callback: (this: DsVideoView) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set a subtitle source */
	SetSubtitles(file: str_ptf): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Change the playback volume */
	SetVolume(left: num_prc, right: num_prc): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Stop video playback */
	Stop(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsVideoView) => void): void;
}


declare class DsWebServer {

	/** Redirect urls */
	AddRedirect(pattern: str_url, location: str_url): void;

	/**
	 * Called when servlet received a message
	 * @param path `/endpoint name`
	 */
	AddServlet(path: str, callback: (this: DsWebServer, args: {[parameter: str]: str}, info: { remoteAddress: str }) => void): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Disconnect Client from WebServer */
	Disconnect(ip: str, id?: num_int): void;

	/** Returns the control class name */
	GetType(): "WebServer";

	/** Get connected clients */
	GetWebSockClients(): { remoteAddress: str, id: num_int }[];

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Send message to client(s) */
	SendText(txt: str, ip: str, id: num_int): void;

	/** Set server root folder */
	SetFolder(folder: str_ptd): void;

	/** Called when received client message */
	SetOnReceive(callback: (this: DsWebServer, msg: str, ip: str, id: num_int) => void): void;

	/** Called when file uploaded to server */
	SetOnUpload(callback: (this: DsWebServer, filename: str, ip: str) => void): void;

	/** Respond to incoming HTTP request */
	SetResponse(text: str): void;

	/** Defile file upload destination */
	SetUploadFolder(folder: str_ptd): void;

	/** Start server */
	Start(): void;

	/** Stop server */
	Stop(): void;
}


declare class DsWebSocket {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Close web socket */
	Close(): void;

	/**
	 * Get js Socket instance
	 * @return WebSocket
	 */
	GetSocket(): WebSocket;

	/** Check if WebSocket is open */
	IsOpen(): bin;

	/** Send message to server */
	Send(message: str): void;

	/** Called when WebSocket was closed */
	SetOnClose(callback: (this: DsWebSocket) => void): void;

	/** Called when received message from server */
	SetOnMessage(callback: (this: DsWebSocket, message: str) => void): void;

	/** Called when WebSocket is open */
	SetOnOpen(callback: (this: DsWebSocket) => void): void;
}


declare class DsWebView {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Animates a control
	 * @param type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 */
	Animate(type: str, callback?: (this: DsWebView, type: str) => void, time?: num_mls): void;

	/** Load previous page */
	Back(): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Check if history contains a previous page */
	CanGoBack(): bin;

	/** Check if history has a following page */
	CanGoForward(): bin;

	/** Capture WebView as png */
	Capture(file: str_ptf): void;

	/** Clear all cookies */
	ClearCookies(): void;

	/** Removes the focus of the control */
	ClearFocus(): void;

	/** Clears the page history for Back() and Forward() */
	ClearHistory(): void;

	/** Execute JS code inside the WebView */
	Execute(code: str_jsc, callback?: (this: DsWebView, result: all) => void): void;

	/** Set the focus to the control for immediate access */
	Focus(): void;

	/** Load following page */
	Forward(): void;

	/** Call functions defined inside a webview */
	Func(name: str, ...args: all): void;

	/** Get the control height in pixels */
	GetAbsHeight(): num_int;

	/** Get the control width in pixels */
	GetAbsWidth(): num_int;

	/** Get the height of the control */
	GetHeight(options: "px"): num;

	/** Get distance to the left parent border */
	GetLeft(options: "px"): num;

	/** Returns the parent control object */
	GetParent(): dso;

	/**
	 * Returns data about position and size
	 * @return \{ left, top, width, height }
	 */
	GetPosition(options: "screen"|"px"): { left: num, top: num, width: num, height: num };

	/** Get distance to the upper parent border */
	GetTop(options: "px"): num;

	/** Returns the control class name */
	GetType(): "WebView";

	/** Get current url */
	GetUrl(): str_url;

	/** Get starting url */
	GetHomeUrl(): str_url;

	/** Returns the current visibility state */
	GetVisibility(): "Show"|"Hide"|"Gone";

	/** Get the width of the control */
	GetWidth(options: "px"): num;

	/** Make it gone. It was never there! */
	Gone(): void;

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is useable */
	IsEnabled(): bin;

	/** Checks if the control overlaps with another */
	IsOverlap(obj: dso, depth?: num_frc): bin;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Returns if the page failed to load */
	LoadFailed(): bin;

	/**
	 * Load html to WebView
	 * @param options `AllowZoom`, `AutoZoom`, `Wide`, `FillX/Y`, `NoActionBar`, `IgnoreErrors`, `IgnoreSSLErrors`, `NoApp`, `NoCapture`, `NoLocate`, `NoLongTouch`, `NoPause`, `NoRedirect`, `NoScrollBars`, `Overview`, `Progress`, `ScrollFade`, `UseBasicInput`, `UseBrowser`\
 	 * &emsp; `AllowZoom` - Allows the user to zoom the page\
 	 * &emsp; `Wide` - force page using “wide” viewport\
 	 * &emsp; `NoActionBar` - prevents copy/paste popup\
 	 * &emsp; `NoApp` - prevent app.* calls\
 	 * &emsp; `NoCapture` - Disable camera\
 	 * &emsp; `NoLocate` - Disable location sensor\
 	 * &emsp; `NoPause` - Dont pause WebView when app in background\
 	 * &emsp; `NoRedirect` - blocks assert redirect\
 	 * &emsp; `Overview` - Zoom to full width of page\
 	 * &emsp; `Progress` - Shows a progress indicator when loading\
 	 * &emsp; `UseBasicInput` - makes softkeyboard useful for html code editors\
 	 * &emsp; `UseBrowser` - Open links in external browser
	 */
	LoadHtml(html: str_htm, baseFolder?: str_ptd, options?: str_com): void;

	/**
	 * Load url to WebView
	 * @param options `AllowZoom`, `AutoZoom`, `Wide`, `FillX/Y`, `NoActionBar`, `IgnoreErrors`, `IgnoreSSLErrors`, `NoApp`, `NoCapture`, `NoLocate`, `NoLongTouch`, `NoPause`, `NoRedirect`, `NoScrollBars`, `Overview`, `Progress`, `ScrollFade`, `UseBasicInput`, `UseBrowser`\
 	 * &emsp; `AllowZoom` - Allows the user to zoom the page\
 	 * &emsp; `Wide` - force page using “wide” viewport\
 	 * &emsp; `NoActionBar` - prevents copy/paste popup\
 	 * &emsp; `NoApp` - prevent app.* calls\
 	 * &emsp; `NoCapture` - Disable camera\
 	 * &emsp; `NoLocate` - Disable location sensor\
 	 * &emsp; `NoPause` - Dont pause WebView when app in background\
 	 * &emsp; `NoRedirect` - blocks assert redirect\
 	 * &emsp; `Overview` - Zoom to full width of page\
 	 * &emsp; `Progress` - Shows a progress indicator when loading\
 	 * &emsp; `UseBasicInput` - makes softkeyboard useful for html code editors\
 	 * &emsp; `UseBrowser` - Open links in external browser
	 */
	LoadUrl(url: str_url, options?: str_com): void;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Print webpage via anddroid printer dialog */
	Print(): void;

	/** Reload current page */
	Reload(): void;

	/**
	 * Set the background transparency by alpha value
	 * @param alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha: num): void;

	/** Resize a control after device rotation */
	Resize(): void;

	/** Change the background color */
	SetBackColor(color: str_col): void;

	/** Define the background color of the control with a gradient */
	SetBackGradient(color1: str_col, color2?: str_col, color3?: all, options?: "left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"): void;

	/** Define a radial background color gradient */
	SetBackGradientRadial(x: num_frc, y: num_frc, radius?: num_frc, color1?: str_col, color2?: str_col, color3?: all, options?: str_com): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Block urls from loading */
	SetBlockedUrls(urls: str[]|"urls"): void;

	/**
	 * Define context menus to listen for
	 * @param links `Copy URL`, `Open URL`
	 * @param images `Download Image`
	 */
	SetContextMenus(links?: str, images?: str): void;

	/** Adjust the visual color effect with different BlendModes */
	SetColorFilter(color: str_col, mode?: "Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"): void;

	/** Set accesibility description */
	SetDescription(desc: str): void;

	/** En/Disable the control */
	SetEnabled(enable: bin): void;

	/** Define error page */
	SetErrorPage(url: str_url): void;

	/** Inject scripts on page load */
	SetInject(file: str_pth): void;

	/** Define distances to other controls */
	SetMargins(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Scales the html text by a given factor */
	SetTextZoom(zoom: num_frc): void;

	/** Called when message logged to console */
	SetOnConsole(callback: (this: DsWebView, msg: str) => void): void;

	/** Called when a context menu was used */
	SetOnContextMenu(callback: (this: DsWebView, item: str, url: str, img: str, type: str) => void): void;

	/** Called when an error occured */
	SetOnError(callback: (this: DsWebView, error: str) => void): void;

	/** Called when loading progress changed */
	SetOnProgress(callback: (this: DsWebView, progress: num_prc) => void): void;

	/** Traps HTTP Requests */
	SetOnRequest(callback: (this: DsWebView, url: str, method: str, isMain: bin, isRedirect: bin) => void): void;

	/** Called when user touched the control */
	SetOnTouch(callback: (this: DsWebView, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void): void;

	/** Called when link klicked */
	SetOnUrl(callback: (this: DsWebView, url: str_url) => void): void;

	/** Define distances to contained elements */
	SetPadding(left?: num_frc, top?: num_frc, right?: num_frc, bottom?: num_frc, mode?: "px"|"sp"|"dip"|"mm"|"pt"): void;

	/** Defines position and size on absolute layouts */
	SetPosition(left: num, top: num, width?: num, height?: num, options?: "px"): void;

	/** Add url redirection rule */
	SetRedirect(urlFrom: str_url, urlTo: str_url): void;

	/** Scale the control by the given factors */
	SetScale(x: num_fac, y: num_fac): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** En/Disable touchmode on the control */
	SetTouchMode(mode: bin): void;

	/** Define which URLs open in browser */
	SetUseBrowser(urlFilter: str): void;

	/**
	 * Set/Add custom user agent
	 * @param options `Add-appends to default user agent`
	 */
	SetUserAgent(agent: str, options?: str): void;

	/** Set authentication/login data */
	SetUserCreds(name: str, password: str): void;

	/** Change the visibility mode */
	SetVisibility(mode: "Show"|"Hide"|"Gone"): void;

	/** Set the visibility to “Show” */
	Show(): void;

	/** Simulate key event */
	SimulateKey(keyName: str, modifiers?: "META_META_ON"|"META_RIGHT_ON"|"NUM_LOCK_ON"|"SCROLL_LOCK_ON"|"SHIFT_LEFT_ON"|"SHIFT_MASK"|"SHIFT_ON"|"SHIFT_RIGHT_ON"|"SYM_ON", pause?: num): void;

	/** Stop loading processes */
	Stop(): void;

	/**
	 * Animates the control
	 * @param target \{ x, y, w, h, sw, sh, rot }
	 * @param type `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 */
	Tween(target: { x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }, duration?: num_mls, type?: str, repeat?: num_int, yoyo?: bin, callback?: (this: DsWebView) => void): void;
}


declare class DsWizard {

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Hides the control and removes it from the screen */
	Dismiss(): void;

	/** Indicate that wizard finished */
	Finish(): void;

	/** Returns list of wiz control buttons */
	GetButtons(): [DsButton, DsButton, DsButton];

	/** Get wiz dialog object */
	GetDialog(): DsDialog;

	/** Get wiz content layout */
	GetLayout(): DsLayout;

	/** Returns the control class name */
	GetType(): "Wizard";

	/** Hides the control visually */
	Hide(): void;

	/** Checks if the control is currently visible */
	IsVisible(): bin;

	/** Set the visibility to “Show” */
	Show(): void;
}


declare class DsYesNoDialog {

	/**
	 * Adjust the visual color effect of the control
	 * @param hue `-180..180`
	 * @param saturation `-100..100`
	 * @param brightness `-100..100`
	 * @param contrast `0..100`
	 */
	AdjustColor(hue: num, saturation?: num, brightness?: num, contrast?: num): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Hides the control and removes it from the screen */
	Dismiss(): void;

	/** Returns the control class name */
	GetType(): "YesNoDialog";

	/** Hides the control visually */
	Hide(): void;

	/**
	 * Access Java object methods via reflection
	 * @premium
	 * @param types `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 */
	Method(name: str, types?: str_com, p1?: str, p2?: str, p3?: str, p4?: str): all;

	/** Change the background color */
	SetBackColor(color: str_col, radius?: num_pxl): void;

	/** Change the background to an image */
	SetBackground(file: str_ptf, options?: "repeat"): void;

	/** Change Yes/No button text */
	SetButtonText(yes: str, no: str): void;

	/** Called when user selects Yes or No */
	SetOnTouch(callback: (this: DsYesNoDialog, result: "Yes"|"No") => void): void;

	/** Change the size of the control */
	SetSize(width?: num, height?: num, options?: "px"|"sp"|"dip"|"dp"|"mm"|"pt"): void;

	/** Set the visibility to “Show” */
	Show(): void;
}


declare class DsZipUtil {

	/**
	 * Add file to zip
	 * @param name `zip path`
	 */
	AddFile(name: str, file: str_ptf): void;

	/**
	 * Add text to the zip
	 * @param name `zip path`
	 */
	AddText(name: str, text: str): void;

	/**
	 * Batch method calls to set object properties
	 * @param properties \{ command: args }
	 */
	Batch(properties: {[command: str]: lst}): void;

	/**
	 * Extra properties
	 * @return \{ key, value }
	 */
	data: { key: str, value: all };

	/** Close ZipUtil */
	Close(): void;

	/** Create zip file */
	Create(file: str_ptf): nil;

	/**
	 * Create debug keystore file
	 * @param file debug.keystore
	 */
	CreateDebugKey(file: str_ptf): nil;

	/**
	 * Create a user keystore file
	 * @param file user.keystore
	 */
	CreateKey(file: str_ptf, password: str, name: str, organization: str): nil;

	/**
	 * Extract file from zip
	 * @param name `zip path`
	 */
	Extract(name: str, file: str_ptf): void;

	/** Returns the control class name */
	GetType(): "ZipUtil";

	/** Get contained file list */
	List(path: str_pth): str_com;

	/** Open existing zip */
	Open(file: str_ptf): void;

	/** Sign and check zip against keystore file */
	Sign(fileIn: str_ptf, fileOut: str_ptf, keyStore: str_pth, password: str): bin;

	/** Update zip manifest */
	UpdateManifest(fileIn: str_ptf, fileOut: str_ptf, packageName: str, appName: str, permissions?: str_com, options?: string | ("Launch"|"Debug")[]): void;
}


declare class DsDatabase {

	/**
	 * AddTransaction
	 *
	 * @deprecated Use ExecuteSQL instead
	 * @param transaction JS SQLitePluginTransaction
	 */
	addTransaction(transaction: obj): void;

	/**
	 * Close the database
	 * @deprecated Use Close instead
	 */
	close(success?: (this: DsDatabase, msg: str) => void, error?: (this: DsDatabase, msg: str) => void): void;

	/** Close the database */
	Close(): void;

	/** Delete the database */
	Delete(): void;

	/**
	 * Execute SQL query
	 * @deprecated Use ExecuteSql instead
	 */
	executeSql(statement: str_sql, params?: lst, success?: (this: DsDatabase, tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }, res: { rows: { item(i): { id: num, data: all, data_num: num } } }) => void, error?: (this: DsDatabase, t: all, err: { message: str }) => void): void;

	/** Execute SQL query */
	ExecuteSql(sql: str_sql, params?: lst, success?: (this: DsDatabase, res: { length: num_int, rowsAffected: num_int, rows: { item(i): { id: num, data: all, data_num: num } } }) => void, error?: (this: DsDatabase, err: str) => void): void;

	/** Get database name */
	GetName(): str;

	/** Returns the component class name */
	GetType(): "Database";

	/**
	 * Database name
	 * @deprecated use GetName instead
	 */
	name: str;

	/**
	 * Open database
	 * @deprecated
	 */
	open(success?: (this: DsDatabase) => void, error?: (this: DsDatabase, msg: str) => void): void;

	/**
	 * ReadTransaction
	 *
	 * @deprecated Use ExecuteSql instead
	 */
	readTransaction(fn: (this: DsDatabase, tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }) => void, error?: (this: DsDatabase, err: str) => void, success?: (this: DsDatabase, tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }, res: { rows: { item(i): { id: num, data: all, data_num: num } } }) => void): void;

	/**
	 * StartNextTransaction
	 *
	 * @deprecated Use ExecuteSql instead
	 */
	startNextTransaction(): void;

	/**
	 * Transaction
	 *
	 * @deprecated Use ExecuteSql instead
	 */
	transaction(fn: (this: DsDatabase, tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }) => void, error?: (this: DsDatabase, err: str) => void, success?: (this: DsDatabase, fnc: (this: DsDatabase, tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }) => void, res: { length: num_int, rowsAffected: num_int, rows: { item(i): { id: num, data: all, data_num: num } } }) => void): void;
}


declare class DsCheckList {

	/** Show the check list */
	Show(): void;

	/**
	 * Set list
	 * @param data `title:checked`
	 */
	SetList(data: str|{ title: str, check: bin }): void;
}


