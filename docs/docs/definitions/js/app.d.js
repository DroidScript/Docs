/** @type {DsApp} */
var app;
/** @typedef {DsAudioRecorder | DsBluetoothList | DsBluetoothSerial | DsButton | DsCameraView | DsCheckBox | DsCloudStore | DsCodeEdit | DsCrypt | DsDialog | DsDownloader | DsEmail | DsFile | DsGameView | DsGLView | DsImage | DsLayout | DsList | DsListDialog | DsLocator | DsMediaPlayer | DsMediaStore | DsNetClient | DsNode | DsNotification | DsNxt | DsOverlay | DsPhoneState | DsPlayStore | DsScroller | DsSeekBar | DsSensor | DsService | DsSMS | DsSpeechRec | DsSpinner | DsSwitch | DsSynth | DsSysProc | DsTabs | DsText | DsTextEdit | DsTheme | DsToggle | DsUSBSerial | DsVideoView | DsWebServer | DsWebSocket | DsWebView | DsWizard | DsYesNoDialog | DsZipUtil | DsDatabase | DsCheckList} AppObject */
/** @typedef {AppObject} dso app object */

class DsApp {

	/**
	 * Create and add Button to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `FontAwesome`, `Html`, `Monospace`, `Normal`, `Aluminium`, `Gray`, `Lego`, `SingleLine`, `Custom`, `NoPad`, `FillX/Y`, `NoSound`
	 * @return {DsButton} 
	 */
	AddButton(layout, text, width, height, options) {return}

	/**
	 * Create and add CameraView to Layout
	 * @param {DsLayout} layout 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `Front`, `UseBitmap`, `UseABGR`, `NoRotate`, `<resolution>`\
 	 * &emsp; `<resolution>` - CIF: 352x288\
 	 * &emsp; QQVGA: 160x120\
 	 * &emsp; QVGA: 320x240\
 	 * &emsp; SVGA: 800x600\
 	 * &emsp; VGA: 640x480\
 	 * &emsp; XGA: 1024x768\
 	 * &emsp; UXGA: 1600x1200
	 * @return {DsCameraView} 
	 */
	AddCameraView(layout, width, height, options) {return}

	/**
	 * Create and add Button to Layout
	 * @param {DsLayout} layout 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {string | ("fix"|"alias"|"px"|"Button"|"ScaleCenter"|"async"|"FontAwesome"|"Resize"|"TouchThrough"|"Icon"|"wallpaper"|"NoPlay")[]} [options=''] <br>
 	 * &emsp; `fix` - image with fixed resolution\
 	 * &emsp; `px` - use pixel values for size\
 	 * &emsp; `Button` - causes image to depress like a button when touched\
 	 * &emsp; `async` - loads the image asynchronously\
 	 * &emsp; `Icon` - allows loading of app icons\
 	 * &emsp; `NoPlay` - prevent gifs from playing automatically
	 * @param {num_pxl} [pxw=-1] 
	 * @param {num_pxl} [pxh=-1] 
	 * @return {DsImage} 
	 */
	AddCanvas(layout, width, height, options, pxw, pxh) {return}

	/**
	 * Create and add CheckBox to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `FillX/Y`, `NoSound`
	 * @return {DsCheckBox} 
	 */
	AddCheckBox(layout, text, width, height, options) {return}

	/**
	 * Create and add CodeEdit to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `FillX/Y`
	 * @return {DsCodeEdit} 
	 */
	AddCodeEdit(layout, text, width, height, options) {return}

	/**
	 * Adds a slide-able layout on given side
	 * @param {DsLayout} layout 
	 * @param {"Left"|"Right"} side 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [grabWidth] 
	 */
	AddDrawer(layout, side, width, grabWidth) {return}

	/**
	 * Create and add Image to Layout
	 * @param {DsLayout} layout 
	 * @param {str_ptf} file 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {string | ("fix"|"alias"|"px"|"Button"|"ScaleCenter"|"async"|"FontAwesome"|"Resize"|"TouchThrough"|"Icon"|"wallpaper"|"NoPlay")[]} [options=''] <br>
 	 * &emsp; `px` - use pixel values for size\
 	 * &emsp; `Button` - causes image to depress like a button when touched\
 	 * &emsp; `async` - loads the image asynchronously\
 	 * &emsp; `Icon` - allows loading of app icons\
 	 * &emsp; `NoPlay` - prevent gifs from playing automatically
	 * @param {num_pxl} [pxw=-1] 
	 * @param {num_pxl} [pxh=-1] 
	 * @return {DsImage} 
	 */
	AddImage(layout, file, width, height, options, pxw, pxh) {return}

	/**
	 * Adds a layout to the app
	 * @param {DsLayout} layout 
	 * @param {"Linear"|"Absolute"|"Frame"|"Card"} [type] 
	 * @param {str_com} [options] `TouchThrough`, `TouchSpy`, `Left`, `Top`, `Right`, `Bottom`, `Center`, `H/VCenter`, `Wrap`, `Horizontal`, `Vertical`, `FillX/Y`\
 	 * &emsp; `TouchThrough` - forwards touch events to underlying children\
 	 * &emsp; `TouchSpy` - spies for touch events on all children
	 * @return {DsLayout} 
	 */
	AddLayout(layout, type, options) {return}

	/**
	 * Create and add List to Layout
	 * @param {DsLayout} layout 
	 * @param {str_lst} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("bold"|"Expand"|"Menu"|"Horiz"|"html"|"FontAwesome"|"monospace"|"Normal"|"WhiteGrad"|"BlackGrad"|"AlumButton"|"GreenButton"|"OrangeButton"|"NoSound")[]} [options=''] <br>
 	 * &emsp; `bold` - bold item titles\
 	 * &emsp; `Expand` - Expand list to full height inside scrollers\
 	 * &emsp; `Menu` - applies various settings to make the list appear like an in-app menu\
 	 * &emsp; `Horiz` - makes title and body text flow horizontally
	 * @param {str} [delim=','] 
	 * @return {DsList} 
	 */
	AddList(layout, list, width, height, options, delim) {return}

	/**
	 * Create and add Scroller to Layout
	 * @param {DsLayout} layout 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX"|"FillY"|"FillXY"|"Horizontal"|"Vertical"|"NoScrollBar"|"ScrollFade")[]} [options] 
	 * @return {DsScroller} 
	 */
	AddScroller(layout, width, height, options) {return}

	/**
	 * Create and add SeekBar to Layout
	 * @param {DsLayout} layout 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `FillX/Y`
	 * @return {DsSeekBar} 
	 */
	AddSeekBar(layout, width, height, options) {return}

	/**
	 * Create and add Spinner to Layout
	 * @param {DsLayout} layout 
	 * @param {str_com} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `FillX/Y`, `NoSound`
	 * @return {DsSpinner} 
	 */
	AddSpinner(layout, list, width, height, options) {return}

	/**
	 * Create and add Switch toggle to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `Monospace`, `Custom`, `NoPad`, `FillX/Y`, `NoSound`
	 * @return {DsSwitch} 
	 */
	AddSwitch(layout, text, width, height, options) {return}

	/**
	 * Returns a new Tabs object
	 * @param {str_com} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("Fade"|"FontAwesome"|"NoMargins"|"VCenter")[]} [options] 
	 * @return {DsTabs} 
	 */
	AddTabs(list, width, height, options) {return}

	/**
	 * Create and add Text to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `AutoScale`, `AutoSize`, `Multiline`, `Left`, `Right`, `Html`, `Bold`, `Monospace`, `NoWrap`, `Log`, `FillX/Y`
	 * @return {DsText} 
	 */
	AddText(layout, text, width, height, options) {return}

	/**
	 * Create and add TextEdit to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `AutoSelect`, `AutoSize`, `Bold`, `Extract`, `Left`, `Center`, `Right`, `Monospace`, `NoSpell`, `NoKeyboard`, `Numbers`, `ReadOnly`, `SingleLine`, `FillX/Y`, `Password`\
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
	 * @return {DsTextEdit} 
	 */
	AddTextEdit(layout, text, width, height, options) {return}

	/**
	 * Create and add Toggle to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `Monospace`, `Custom`, `NoPad`, `FillX/Y`, `NoSound`
	 * @return {DsToggle} 
	 */
	AddToggle(layout, text, width, height, options) {return}

	/**
	 * Create and add VideoView to Layout
	 * @param {DsLayout} layout 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] 
	 * @return {DsVideoView} 
	 */
	AddVideoView(layout, width, height, options) {return}

	/**
	 * Create and add WebView to Layout
	 * @param {DsLayout} layout 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options=''] `AllowZoom`, `AutoZoom`, `Wide`, `FillX/Y`, `NoAccel`, `NoActionBar`, `IgnoreErrors`, `IgnoreSSLErrors`, `NoApp`, `NoCapture`, `NoCors`, `NoLocate`, `NoLongTouch`, `NoPause`, `NoScrollBars`, `Overview`, `Progress`, `ScrollFade`, `UseBasicInput`, `UseBrowser`\
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
	 * @param {num_prc} [zoom] 
	 * @return {DsWebView} 
	 */
	AddWebView(layout, width, height, options, zoom) {return}

	/**
	 * Shows a popup message with an 'OK' button to exit
	 * @param {str} message 
	 * @param {str} [title] 
	 * @param {string | ("NoDim"|"NoFocus")[]} [options=''] 
	 * @param {num_int} [hue] `-180..180`
	 */
	Alert(message, title, options, hue) {return}

	/**
	 * Similar to setInterval
	 * @param {(time: num_mls, dtime: num_mls) => void} [callback] 
	 * @param {num_fps} [fps=-1] 
	 */
	Animate(callback, fps) {return}

	/**
	 * Used for broadcasting messages between DroidScript apps
	 * @param {"Exec"} type 
	 * @param {str} message 
	 */
	Broadcast(type, message) {return}

	/**
	 * Send broadcast intent
	 * @param {str} action `android action`
	 * @param {str} category 
	 * @param {str} data 
	 * @param {str} type 
	 * @param {str} extras 
	 * @param {str_com} [options] 
	 */
	BroadcastIntent(action, category, data, type, extras, options) {return}

	/**
	 * Calls a phone number
	 * @param {"number"} number 
	 */
	Call(number) {return}

	/** Cancel background job */
	CancelJob() {return}

	/**
	 * Checks if app is licensed with Google Play
	 * @param {str_b64} key `GPlay license key`
	 */
	CheckLicense(key) {return}

	/**
	 * Checks if permission was granted
	 * @param {str} type `Camera`, `Storage`, `ExtSDcard`, `Network`, `Notify`, `Location`, `SMS`, `Calendar`, `Body`, `Contacts`, `Record`, `Biometric`, `Phone`, `Accounts`, `License`, `android.permission.*`
	 * @return {str[]} 
	 */
	CheckPermission(type) {return}

	/**
	 * Let the user choose an google account
	 * @param {(account: "email") => void} callback 
	 */
	ChooseAccount(callback) {return}

	/**
	 * Let the user choose an image
	 * @param {"Phone"|"Email"} type 
	 * @param {(name: str, data: str) => void} callback 
	 */
	ChooseContact(type, callback) {return}

	/**
	 * Let the user choose a file
	 * @param {str} message 
	 * @param {str} type `file mimetype`
	 * @param {(path: str_pth|str_uri, name: str) => void} callback 
	 * @param {str_pth} [fldr] 
	 * @param {string | ("persist"|"nodownload")[]} [options] <br>
 	 * &emsp; `persist` - keep file permission after reboot\
 	 * &emsp; `nodownload` - prevents file downloads
	 */
	ChooseFile(message, type, callback, fldr, options) {return}

	/**
	 * Let the user choose an image
	 * @param {string | (""|"internal"|"external")[]} options 
	 * @param {(path: str_pth) => void} callback 
	 */
	ChooseImage(options, callback) {return}

	/**
	 * Let the user choose a WiFi network
	 * @param {str} title1 
	 * @param {str} title2 
	 * @param {(ssid: str) => void} callback 
	 * @param {string | ("force"|"large")[]} [options=''] 
	 * @param {"ssids"} [extra] 
	 */
	ChooseWifi(title1, title2, callback, options, extra) {return}

	/** Clears saved web cookies */
	ClearCookies() {return}

	/**
	 * Deletes app.Save*() storage
	 * @param {str_ptf} [file] 
	 */
	ClearData(file) {return}

	/**
	 * Deletes a variable saved via app.Save*()
	 * @param {str} name 
	 * @param {str_ptf} [file] 
	 */
	ClearValue(name, file) {return}

	/**
	 * Closes the drawer layout on the given side with slide animation
	 * @param {"Left"|"Right"} [side] 
	 */
	CloseDrawer(side) {return}

	/**
	 * Copies a file to a given destination
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 */
	CopyFile(source, destination) {return}

	/**
	 * Copies a folder to a given destination
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {bin} [overwrite=false] 
	 * @param {"pattern"} [filter] 
	 */
	CopyFolder(source, destination, overwrite, filter) {return}

	/**
	 * Returns an AudioRecorder object
	 * @return {DsAudioRecorder} 
	 */
	CreateAudioRecorder() {return}

	/**
	 * Returns a new BluetoothList object with selectable list of paired and discovered Bluetooth devices
	 * @param {str} [filter] 
	 * @return {DsBluetoothList} 
	 */
	CreateBluetoothList(filter) {return}

	/**
	 * Communicate with other Bluetooth devices
	 * @param {"Text"|"Int"|"Hex"} [mode='Text'] 
	 * @return {DsBluetoothSerial} 
	 */
	CreateBluetoothSerial(mode) {return}

	/**
	 * Creates a button control
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `FontAwesome`, `Html`, `Monospace`, `Normal`, `Aluminium`, `Gray`, `Lego`, `SingleLine`, `Custom`, `AutoShrink`, `AutoSize`, `NoPad`, `FillX/Y`, `NoSound`\
 	 * &emsp; `AutoShrink` - Auto-shrinks text to fit\
 	 * &emsp; `AutoSize` - Auto-sizes text to fit
	 * @return {DsButton} 
	 */
	CreateButton(text, width, height, options) {return}

	/**
	 * Returns a new CameraView object to access the device camera
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `Front`, `UseBitmap`, `UseABGR`, `NoRotate`, `<id>`, `<resolution>`\
 	 * &emsp; `<id>` - “front,back,cam0,cam1,cam2,cam3”\
 	 * &emsp; `<resolution>` - CIF: 352x288\
 	 * &emsp; QQVGA: 160x120\
 	 * &emsp; QVGA: 320x240\
 	 * &emsp; SVGA: 800x600\
 	 * &emsp; VGA: 640x480\
 	 * &emsp; XGA: 1024x768\
 	 * &emsp; UXGA: 1600x1200
	 * @return {DsCameraView} 
	 */
	CreateCameraView(width, height, options) {return}

	/**
	 * Create a blank white Image object
	 * @param {str_ptc} file 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {string | ("fix"|"alias"|"px"|"Button"|"ScaleCenter"|"async"|"FontAwesome"|"Resize"|"TouchThrough"|"Icon"|"wallpaper"|"NoPlay")[]} [options=''] <br>
 	 * &emsp; `fix` - image with fixed resolution\
 	 * &emsp; `px` - use pixel values for size\
 	 * &emsp; `Button` - causes image to depress like a button when touched\
 	 * &emsp; `async` - loads the image asynchronously\
 	 * &emsp; `Icon` - allows loading of app icons\
 	 * &emsp; `NoPlay` - prevent gifs from playing automatically
	 * @param {num_pxl} [pxw=-1] 
	 * @param {num_pxl} [pxh=-1] 
	 * @return {DsImage} 
	 */
	CreateCanvas(file, width, height, options, pxw, pxh) {return}

	/**
	 * Returns a new CheckBox object
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `FillX/Y`, `NoSound`
	 * @return {DsCheckBox} 
	 */
	CreateCheckBox(text, width, height, options) {return}

	/**
	 * Returns a new CloudStore object
	 * @param {str} apiKey 
	 * @return {DsCloudStore} 
	 */
	CreateCloudStore(apiKey) {return}

	/**
	 * Returns a new CodeEdit object
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `FillX/Y`
	 * @return {DsCodeEdit} 
	 */
	CreateCodeEdit(text, width, height, options) {return}

	/**
	 * Returns a new Crypt object to encrypt or decrypt a string with a given key or create a hash of it
	 * @param {str_com} [options] 
	 * @return {DsCrypt} 
	 */
	CreateCrypt(options) {return}

	/**
	 * Creates a CustomTab control
	 * @return {obj} 
	 */
	CreateCustomTabs() {return}

	/**
	 * Shows a debug log overlay
	 * @param {"dialog"|"clear"} [options] <br>
 	 * &emsp; `dialog` - Show the debug log as black overlay dialog\
 	 * &emsp; `clear` - Clear content before showing
	 * @return {nil} 
	 */
	CreateDebug(options) {return}

	/**
	 * Returns a new Dialog object to display messages
	 * @param {str} title 
	 * @param {string | ("AutoCancel"|"NoCancel"|"NoTitle"|"NoFocus"|"NoDim"|"NoKeys"|"Fillscreen"|"Fullscreen"|"TouchModal"|"NoTouch"|"Modal"|"Kiosk"|"Old")[]} [options] <br>
 	 * &emsp; `Old` - apply old list style affecting title style and unrounded corners
	 * @return {DsDialog} 
	 */
	CreateDialog(title, options) {return}

	/**
	 * Returns a new Downloader object
	 * @param {string | ("NoDialog"|"Light")[]} [options] 
	 * @return {DsDownloader} 
	 */
	CreateDownloader(options) {return}

	/**
	 * Returns an Email object for user to send emails
	 * @param {str} account `account email`
	 * @param {str} password `account password`
	 * @return {DsEmail} 
	 */
	CreateEmail(account, password) {return}

	/**
	 * Returns a new File object
	 * @param {str_ptf} file 
	 * @param {"r"|"w"|"rw"} mode 
	 * @return {DsFile} 
	 */
	CreateFile(file, mode) {return}

	/**
	 * CreateGame automatically turns your app in game mode and adds a [GameView](CreateGameView.htm) control to it which loads the referenced script
	 * @param {str_ptf} file 
	 * @param {"Portrait"|"Landscape"} [orient] 
	 * @return {{ game: DsGameView, lay: DsLayout}} { game, lay}
	 */
	CreateGame(file, orient) {return}

	/**
	 * The GameView is a blindingly fast container for game development with a physics engine and PIXI as underlying sprite container which uses the GPU to render graphics
	 * @param {num_frc} width 
	 * @param {num_frc} height 
	 * @param {str_com} [options] 
	 * @return {DsGameView} 
	 */
	CreateGameView(width, height, options) {return}

	/**
	 * Returns a GLView object
	 * @param {num_frc} width 
	 * @param {num_frc} height 
	 * @param {"fast2d"} [options] 
	 * @return {DsGLView} 
	 */
	CreateGLView(width, height, options) {return}

	/**
	 * Returns a new Image object
	 * @param {str_ptc} [file] 
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {string | ("fix"|"alias"|"px"|"Button"|"ScaleCenter"|"async"|"FontAwesome"|"Resize"|"TouchThrough"|"Icon"|"wallpaper"|"NoPlay")[]} [options=''] <br>
 	 * &emsp; `fix` - image with fixed resolution\
 	 * &emsp; `px` - use pixel values for size\
 	 * &emsp; `Button` - causes image to depress like a button when touched\
 	 * &emsp; `async` - loads the image asynchronously\
 	 * &emsp; `Icon` - allows loading of app icons\
 	 * &emsp; `NoPlay` - prevent gifs from playing automatically
	 * @param {num_pxl} [pxw=-1] 
	 * @param {num_pxl} [pxh=-1] 
	 * @return {DsImage} 
	 */
	CreateImage(file, width, height, options, pxw, pxh) {return}

	/**
	 * Returns a new Layout object
	 * @param {"Linear"|"Absolute"|"Frame"|"Card"} type 
	 * @param {str_com} [options] `AutoSize`, `TouchThrough`, `TouchSpy`, `Left`, `Top`, `Right`, `Bottom`, `Center`, `H/VCenter`, `Wrap`, `Horizontal`, `Vertical`, `FillX/Y`\
 	 * &emsp; `AutoSize` - Resizes itself and child controls after device rotation\
 	 * &emsp; `TouchThrough` - forwards touch events to underlying children\
 	 * &emsp; `TouchSpy` - spies for touch events on all children
	 * @return {DsLayout} 
	 */
	CreateLayout(type, options) {return}

	/**
	 * Returns a new List object
	 * @param {str_com} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("bold"|"Expand"|"Menu"|"Horiz"|"html"|"FontAwesome"|"monospace"|"Normal"|"WhiteGrad"|"BlackGrad"|"AlumButton"|"GreenButton"|"OrangeButton"|"NoSound")[]} [options=''] <br>
 	 * &emsp; `bold` - bold item titles\
 	 * &emsp; `Expand` - Expand list to full height inside scrollers\
 	 * &emsp; `Menu` - applies various settings to make the list appear like an in-app menu\
 	 * &emsp; `Horiz` - makes title and body text flow horizontally
	 * @param {str} [delim=','] 
	 * @return {DsList} 
	 */
	CreateList(list, width, height, options, delim) {return}

	/**
	 * Returns a new ListDialog object
	 * @param {str} title 
	 * @param {str} list 
	 * @param {"Multi"|"AutoCancel"} [options] 
	 * @return {DsListDialog} 
	 */
	CreateListDialog(title, list, options) {return}

	/**
	 * Returns a new Locator object
	 * @param {string | ("GPS"|"Network")[]} type 
	 * @param {str_com} [options] 
	 * @return {DsLocator} 
	 */
	CreateLocator(type, options) {return}

	/**
	 * Returns a new MediaPlayer object
	 * @return {DsMediaPlayer} 
	 */
	CreateMediaPlayer() {return}

	/**
	 * Returns a new MediaStore object
	 * @return {DsMediaStore} 
	 */
	CreateMediaStore() {return}

	/**
	 * Add music to your app
	 * @return {obj} 
	 */
	CreateMusic() {return}

	/**
	 * Returns a new NetClient object
	 * @param {"UDP"|"TCP"|"Raw"} type <br>
 	 * &emsp; `UDP` - fast but does not guarantee data correctness\
 	 * &emsp; `TCP` - slow but guarantees data correctness\
 	 * &emsp; `Raw` - drop 4 Byte header before every message
	 * @return {DsNetClient} 
	 */
	CreateNetClient(type) {return}

	/**
	 * Creates a NodeJS background process with all the functionality of common node.js
	 * @param {str_pth} [paths] `NODE_PATH env variable`
	 * @param {string | ("extended"|"legacy"|"nostart"|"esm")[]} [options] <br>
 	 * &emsp; `extended` - allow app methods in default main instance\
 	 * &emsp; `legacy` - dont use named pipes for messaging\
 	 * &emsp; `nostart` - disable auto start\
 	 * &emsp; `esm` - use EcmaScript-Modules
	 * @return {DsNode} 
	 */
	CreateNode(paths, options) {return}

	/**
	 * Returns a new Notification object
	 * @param {string | ("Ongoing"|"AutoCancel"|"FullScreen"|"NoVibrate"|"Low")[]} [options] <br>
 	 * &emsp; `Low` - priority
	 * @return {DsNotification} 
	 */
	CreateNotification(options) {return}

	/**
	 * Returns a new Nxt object
	 * @return {DsNxt} 
	 */
	CreateNxt() {return}

	/**
	 * Returns a new Overlay object
	 * @param {string | ("ShowWhenLocked"|"TurnScreenOn"|"KeepScreenOn")[]} [options] 
	 * @return {DsOverlay} 
	 */
	CreateOverlay(options) {return}

	/**
	 * Returns a new PhoneState object
	 * @param {"CellLocation"|"DataConnection"|"DataActivity"|"CallState"|"ServiceState"|"SignalStrength"|"CallForwarding"|"MessageWaiting"} types 
	 * @return {DsPhoneState} 
	 */
	CreatePhoneState(types) {return}

	/**
	 * Returns a new PlayStore object
	 * @return {DsPlayStore} 
	 */
	CreatePlayStore() {return}

	/**
	 * Returns a new Scroller object
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX"|"FillY"|"FillXY"|"Horizontal"|"Vertical"|"NoScrollBar"|"ScrollFade")[]} [options] 
	 * @return {DsScroller} 
	 */
	CreateScroller(width, height, options) {return}

	/**
	 * Returns a new SeekBar object
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `FillX/Y`
	 * @return {DsSeekBar} 
	 */
	CreateSeekBar(width, height, options) {return}

	/**
	 * Returns a new Sensor object
	 * @param {"Accelerometer"|"MagneticField"|"Orientation"|"Light"|"Proximity"|"Temperature"|"GameRotation"|"GeomagneticRotation"|"Gravity"|"Gyroscope"|"HeartRate"|"Acceleration"|"Pressure"|"Humidity"|"RotationMotion"|"StepCounter"|"StepDetector"} type 
	 * @param {string | ("Slow"|"Medium"|"Fast"|"Fastest")[]} [options] 
	 * @return {DsSensor} 
	 */
	CreateSensor(type, options) {return}

	/**
	 * Returns a new Service object
	 * @param {str} packageName `this`, `<package>`
	 * @param {str} className `this`, `<class>`
	 * @param {(this: DsService) => void} [callback] 
	 * @param {string | ("Persist")[]} [options] <br>
 	 * &emsp; `Persist` - attempts to force restart if service killed
	 * @return {DsService} 
	 */
	CreateService(packageName, className, callback, options) {return}

	/**
	 * Creates a Home-Screen shortcut to an app
	 * @param {str} name 
	 * @param {str_ptf} iconFile 
	 * @param {str_ptf} file 
	 * @param {string | ("Portrait"|"Landscape"|"Transparent"|"Debug"|"Game"|"remote")[]} [options] <br>
 	 * &emsp; `Debug` - start app in debug mode\
 	 * &emsp; `Game` - runs in GameView mode
	 * @return {nil} 
	 */
	CreateShortcut(name, iconFile, file, options) {return}

	/**
	 * Returns a new SMS object to send and retreive SMS messages
	 * @return {DsSMS} 
	 */
	CreateSMS() {return}

	/**
	 * Returns a new SpeechRec object
	 * @param {string | ("NoBeep"|"Partial")[]} [options] 
	 * @return {DsSpeechRec} 
	 */
	CreateSpeechRec(options) {return}

	/**
	 * Returns a new Spinner object
	 * @param {str_com} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `FillX/Y`, `NoSound`
	 * @return {DsSpinner} 
	 */
	CreateSpinner(list, width, height, options) {return}

	/**
	 * Creates a switch control
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `Monospace`, `Custom`, `NoPad`, `FillX/Y`, `NoSound`
	 * @return {DsSwitch} 
	 */
	CreateSwitch(text, width, height, options) {return}

	/**
	 * Returns a new Synth object
	 * @param {string | ("Signal"|"VCA"|"VCF")[]} [type='Signal'] 
	 * @return {DsSynth} 
	 */
	CreateSynth(type) {return}

	/**
	 * Returns a new SysProc object
	 * @param {"sh"|"su"|"busybox"} cmd program name
	 * @param {str} [env] 
	 * @param {str_ptd} [dir] 
	 * @param {string | ("combine"|"builder")[]} [options] <br>
 	 * &emsp; `combine` - combines stdout and stderr\
 	 * &emsp; `builder` - force use of proc builder
	 * @return {DsSysProc} 
	 */
	CreateSysProc(cmd, env, dir, options) {return}

	/**
	 * Returns a new Tabs object
	 * @param {str_com} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("Fade"|"FontAwesome"|"NoMargins"|"VCenter")[]} [options] 
	 * @return {DsTabs} 
	 */
	CreateTabs(list, width, height, options) {return}

	/**
	 * Returns a new Text object
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `AutoScale`, `AutoSize`, `Multiline`, `Left`, `Right`, `Bottom`, `VCenter`, `Html`, `Bold`, `Monospace`, `AutoShrink`, `NoWrap`, `Log`, `FillX/Y`\
 	 * &emsp; `AutoShrink` - Auto-shrinks text to fit
	 * @return {DsText} 
	 */
	CreateText(text, width, height, options) {return}

	/**
	 * Returns a new TextEdit object
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `AutoSelect`, `AutoSize`, `Bold`, `Extract`, `Left`, `Center`, `Right`, `Monospace`, `NoSpell`, `NoKeyboard`, `Numbers`, `ReadOnly`, `SingleLine`, `FillX/Y`, `Password`\
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
	 * @return {DsTextEdit} 
	 */
	CreateTextEdit(text, width, height, options) {return}

	/**
	 * Returns a new Theme object
	 * @param {"Dark"|"Light"|"Default"} baseTheme 
	 * @return {DsTheme} 
	 */
	CreateTheme(baseTheme) {return}

	/**
	 * Returns a new Toggle object
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] `Monospace`, `Custom`, `NoPad`, `FillX/Y`, `NoSound`
	 * @return {DsToggle} 
	 */
	CreateToggle(text, width, height, options) {return}

	/**
	 * Returns a new USBSerial object
	 * @param {300|600|1200|2400|4800|9600|19200|38400|57600|115200|230400|460800|921600} [baudRate=9600] 
	 * @param {5|6|7|8} [dataBits=8] 
	 * @param {1|2|15} [stopBits=1] 
	 * @param {0|1|2|3|4} [parity=0] <br>
 	 * &emsp; `0` - none\
 	 * &emsp; `1` - odd\
 	 * &emsp; `2` - even\
 	 * &emsp; `3` - mark\
 	 * &emsp; `4` - space
	 * @param {num} [device] `Product ID from Device Magager > Hardware IDs`
	 * @return {DsUSBSerial} 
	 */
	CreateUSBSerial(baudRate, dataBits, stopBits, parity, device) {return}

	/**
	 * Returns a new VideoView object
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] 
	 * @return {DsVideoView} 
	 */
	CreateVideoView(width, height, options) {return}

	/**
	 * Returns a new WebServer object
	 * @param {num_int} port 
	 * @param {str_com} [options] `ListDir`, `Upload`, `NoWelcome`, `Reflect`, `<BUFSIZE>`\
 	 * &emsp; `ListDir` - Show files in folder\
 	 * &emsp; `Upload` - Allow file uploads\
 	 * &emsp; `NoWelcome` - Ignore index.html\
 	 * &emsp; `Reflect` - Reflect web socket messages back to all clients\
 	 * &emsp; `<BUFSIZE>` - “ws_64k, ws_128k, ws_512k, ws_1M, ws_5M, ws_10M”
	 * @return {DsWebServer} 
	 */
	CreateWebServer(port, options) {return}

	/**
	 * Returns a new WebSocket object
	 * @param {str} ip 
	 * @param {str} [id] 
	 * @param {num_int} [retry] 
	 * @param {str} [options] 
	 * @return {DsWebSocket} 
	 */
	CreateWebSocket(ip, id, retry, options) {return}

	/**
	 * Returns a new WebView object
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options=''] `AllowZoom`, `AutoZoom`, `ClearCookies`, `FillX/Y`, `Local`, `NoAccel`, `NoActionBar`, `IgnoreErrors`, `IgnoreSSLErrors`, `NoApp`, `NoCapture`, `NoCors`, `NoLocate`, `NoLongTouch`, `NoPause`, `NoScrollBars`, `Overview`, `Persist`, `Progress`, `ScrollFade`, `UseBasicInput`, `UseBrowser`, `Wide`\
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
	 * @param {num_prc} [zoom] 
	 * @return {DsWebView} 
	 */
	CreateWebView(width, height, options, zoom) {return}

	/**
	 * The wizard is supposed to simplify a configuration progress which requires several inputs and decisions by the user
	 * @param {str} title 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {(this: DsWizard, layout: DsLayout, page: num_int) => void} [callback] 
	 * @param {string | ("AutoCancel"|"NoCancel"|"NoTitle"|"NoFocus"|"NoDim"|"NoKeys"|"TouchModal"|"NoTouch")[]} [options] 
	 * @return {DsWizard} 
	 */
	CreateWizard(title, width, height, callback, options) {return}

	/**
	 * Returns a new YesNoDialog object
	 * @param {str} message 
	 * @param {string | ("NoDim"|"NoFocus"|"TouchModal")[]} [options] 
	 * @return {DsYesNoDialog} 
	 */
	CreateYesNoDialog(message, options) {return}

	/**
	 * Returns a new ZipUtil object
	 * @param {str} mode 
	 * @return {DsZipUtil} 
	 */
	CreateZipUtil(mode) {return}

	/**
	 * Debug messages to the console
	 * @param {str} message 
	 */
	Debug(message) {return}

	/**
	 * Deletes a database
	 * @param {str} name 
	 */
	DeleteDatabase(name) {return}

	/**
	 * Deletes a file
	 * @param {str_ptf} file 
	 */
	DeleteFile(file) {return}

	/**
	 * Delete a folder
	 * @param {str_ptd} folder 
	 */
	DeleteFolder(folder) {return}

	/**
	 * Destroy a layout
	 * @param {DsLayout} layout 
	 */
	DestroyLayout(layout) {return}

	/**
	 * Disable specific device keys
	 * @param {str_com} keyList `VOLUME_DOWN`, `VOLUME_UP`, `FORWARD`, `BACK`, `MENU`, `ENTER`, `...`
	 */
	DisableKeys(keyList) {return}

	/**
	 * Suppress all touch events
	 * @param {bin} disable 
	 */
	DisableTouch(disable) {return}

	/**
	 * Search for nearby bluetooth devices
	 * @param {str} filter 
	 * @param {(name: str, address: str) => void} [onFound] 
	 * @param {() => void} [onComplete] 
	 */
	DiscoverBtDevices(filter, onFound, onComplete) {return}

	/**
	 * Download a file with Androids download manager
	 * @param {str} source 
	 * @param {str_pth} destination 
	 * @param {str} [title] 
	 * @param {str} [description] 
	 * @param {"NoDialog"} [options] 
	 */
	DownloadFile(source, destination, title, description, options) {return}

	/**
	 * Allows to en- or disable the devices back key
	 * @param {bin} enable 
	 */
	EnableBackKey(enable) {return}

	/**
	 * Show an error message
	 * @param {str} message 
	 * @param {num_int} line 
	 * @param {str_ptf} file 
	 * @param {bin} [quit=false] 
	 */
	Error(message, line, file, quit) {return}

	/**
	 * Execute js code from your app or a WebWiew
	 * @param {str_jsc} js 
	 */
	Execute(js) {return}

	/**
	 * Close and stop the app
	 * @param {bin} [kill] 
	 */
	Exit(kill) {return}

	/**
	 * Execute a bash script using Termux
	 * @param {"termux"} name 
	 * @param {str_ptf} file 
	 * @param {str} [args] 
	 * @param {"hide"} [options] 
	 */
	ExtExec(name, file, args, options) {return}

	/**
	 * Extract app assets to a local directory
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {bin} [overwrite=false] 
	 * @param {string | ("DoEvents"|"shallow")[]} [options] <br>
 	 * &emsp; `DoEvents` - extract in background\
 	 * &emsp; `shallow` - extract top level
	 */
	ExtractAssets(source, destination, overwrite, options) {return}

	/** Forcefully update your plugins */
	ExtractPlugins() {return}

	/**
	 * Checks if the file exists
	 * @param {str_ptf} file 
	 * @return {bin} 
	 */
	FileExists(file) {return}

	/**
	 * Checks if the folder exists
	 * @param {str_ptd} folder 
	 * @return {bin} 
	 */
	FolderExists(folder) {return}

	/**
	 * Call main app functions from inside a webview
	 * @param {str} name 
	 * @param {(all)[]} args 
	 */
	Func(name, ...args) {return}

	/**
	 * Google Analytics
	 * @param {"create"|"send"|"set"|"require"|"provide"|"remove"} command 
	 * @param {str_com} fields 
	 * @param {obj} [options] 
	 */
	GA(command, fields, options) {return}

	/**
	 * Get accesibility feature availability
	 * @return {{ enabled: bin, exploreByTouch: bin, screenReader: bin }} { enabled, exploreByTouch, screenReader }
	 */
	GetAccessibility() {return}

	/**
	 * Returns a string of all known account names on the device separated with comma ','
	 * @return {str_com} 
	 */
	GetAccounts() {return}

	/**
	 * GetActivities returns a list of object of currently running activities
	 * @return {{ label: str, packageName: str, className: str }[]} 
	 */
	GetActivities() {return}

	/**
	 * Convert language name to its code or get current language code
	 * @param {str} name 
	 * @return {str} 
	 */
	GetAppLangCode(name) {return}

	/**
	 * Get translation languages
	 * @return {str[]} 
	 */
	GetAppLanguages() {return}

	/**
	 * Get current app name
	 * @return {str} 
	 */
	GetAppName() {return}

	/**
	 * Get path to app assets
	 * @return {str_pth} 
	 */
	GetAppPath() {return}

	/**
	 * Get current battery level
	 * @return {num_prc} 
	 */
	GetBatteryLevel() {return}

	/**
	 * Get the bluetooth address
	 * @return {str} 
	 */
	GetBluetoothAddress() {return}

	/**
	 * Get the bluetooth name
	 * @return {str} 
	 */
	GetBluetoothName() {return}

	/**
	 * Returns Bluetooth type connected state
	 * @param {"a2dp"|"headset"|"gatt"|"health"} type 
	 * @return {"Connected"|"Disconnected"} 
	 */
	GetBtProfileState(type) {return}

	/**
	 * Get APK build number
	 * @return {num_int} 
	 */
	GetBuildNum() {return}

	/**
	 * Get current charge type
	 * @return {"AC"|"USB"|"Wireless"|"None"} 
	 */
	GetChargeType() {return}

	/**
	 * Get latest clipboard text
	 * @return {str} 
	 */
	GetClipboardText() {return}

	/**
	 * Get user country name
	 * @return {str} 
	 */
	GetCountry() {return}

	/**
	 * Get users country code
	 * @return {str} 
	 */
	GetCountryCode() {return}

	/**
	 * Retreive saved data
	 * @param {str} name 
	 * @return {str} 
	 */
	GetData(name) {return}

	/**
	 * Get apps database folder
	 * @return {str_pth} 
	 */
	GetDatabaseFolder() {return}

	/**
	 * Returns the current active debug switches
	 * @return {string | ("console"|"ds"|"adb"|"all")[]} 
	 */
	GetDebug() {return}

	/**
	 * Get devces default orientation
	 * @return {"Portrait"|"Landscape"} 
	 */
	GetDefaultOrientation() {return}

	/**
	 * Get device ID
	 * @return {str} 
	 */
	GetDeviceId() {return}

	/**
	 * Get apps display height
	 * @return {num_pxl} 
	 */
	GetDisplayHeight() {return}

	/**
	 * Get apps display width
	 * @return {num_pxl} 
	 */
	GetDisplayWidth() {return}

	/**
	 * Get current drawer state
	 * @param {"left"|"right"} side 
	 * @return {"Open"|"Closed"} 
	 */
	GetDrawerState(side) {return}

	/**
	 * Get current DS version
	 * @return {num_flt} 
	 */
	GetDSVersion() {return}

	/**
	 * Get environment variable
	 * @param {str} name `PATH`, `...`
	 * @return {str} 
	 */
	GetEnv(name) {return}

	/**
	 * Get external sdcard folder
	 * @return {str_pth} 
	 */
	GetExternalFolder() {return}

	/**
	 * Get last modified date of a file or folder
	 * @param {str_ptf} file 
	 * @return {Date} Date
	 */
	GetFileDate(file) {return}

	/**
	 * Get the size of a file or folder
	 * @param {str_ptf} file 
	 * @return {num_flt} 
	 */
	GetFileSize(file) {return}

	/**
	 * Get remaining storage size
	 * @param {"internal"|"external"} mode 
	 * @return {num_gbt} 
	 */
	GetFreeSpace(mode) {return}

	/**
	 * Get data about installed apps
	 * @return {{ packageName: str, className: str, uid: num_int, targetSdkVersion: num_int, dataDir: str_pth, sourceDir: str_pth, publicSourceDir: str_pth, nativeLibraryDir: str_pth }[]} 
	 */
	GetInstalledApps() {return}

	/**
	 * Get received intent data
	 * @return {{ action: str, type: str, data: str, flags: num_int, extras: { app_intent: str, app_file: str_pth, app_options: str } }} { action, type, data, flags, extras: { app_intent, app_file, app_options } }
	 */
	GetIntent() {return}

	/**
	 * Get internal storage path
	 * @return {str_pth} 
	 */
	GetInternalFolder() {return}

	/**
	 * Get network IP address
	 * @return {str} 
	 */
	GetIPAddress() {return}

	/**
	 * Returns the name of a conected joystick
	 * @param {num_int} id 
	 * @return {str} 
	 */
	GetJoystickName(id) {return}

	/**
	 * Returns the state of a connected joystick
	 * @param {num_int} id 
	 * @param {str} key `A`, `B`, `C`, `X`, `Y`, `Z`, `R1`, `L1`, `Left`, `Right`, `Up`, `Down`, `Start`, `ThumbLeft`, `ThumbRight`, `axis-0..9`, `btn-1..12`
	 * @return {num} 
	 */
	GetJoystickState(id, key) {return}

	/**
	 * Get joystick key states object
	 * @param {num_int} id 
	 * @return {{[key: str]: num}} { key: value }
	 */
	GetJoystickStates(id) {return}

	/**
	 * Get current keyboard height
	 * @return {num_pxl} 
	 */
	GetKeyboardHeight() {return}

	/**
	 * Get device language
	 * @return {str} 
	 */
	GetLanguage() {return}

	/**
	 * Get user language code
	 * @return {str} 
	 */
	GetLanguageCode() {return}

	/**
	 * Get devices MAC address
	 * @return {str} 
	 */
	GetMacAddress() {return}

	/**
	 * Get a path to an unambiguous media file
	 * @param {str} folder `app name`
	 * @param {str} ext 
	 * @return {str_pth} 
	 */
	GetMediaFile(folder, ext) {return}

	/**
	 * Get RAM memory information
	 * @return {{ avail: num_byt, low: bin, threshold: num_byt, total: num_byt }} { avail, low, threshold, total }
	 */
	GetMemoryInfo() {return}

	/**
	 * Returns a string list of metadata values contained in an audio file
	 * @param {str_ptf} file 
	 * @param {string | ("album"|"artist"|"genre"|"title"|"composer"|"author"|"duration"|"bitrate"|"width"|"height")[]} [keys] 
	 * @return {str_com} 
	 */
	GetMetadata(file, keys) {return}

	/**
	 * Get device model name
	 * @return {str} 
	 */
	GetModel() {return}

	/**
	 * Get APK name
	 * @return {str} 
	 */
	GetName() {return}

	/**
	 * Get the caller notification id
	 * @return {str} 
	 */
	GetNotifyId() {return}

	/**
	 * Get map of created DroidScript objects
	 * @return {dso[]} 
	 */
	GetObjects() {return}

	/**
	 * Get app options
	 * @return {string | ("portrait"|"landscape"|"dark"|"light"|"holo"|"node"|"hybrid"|"mui"|"transparent"|"debug"|"remote"|"noswapify")[]} 
	 */
	GetOptions() {return}

	/**
	 * Get current screen orientation
	 * @return {"Portrait"|"Landscape"} 
	 */
	GetOrientation() {return}

	/**
	 * Get API target level
	 * @return {num_int} 
	 */
	GetOSVersion() {return}

	/**
	 * Get APK package name
	 * @return {str} 
	 */
	GetPackageName() {return}

	/**
	 * Get list of paired bluetooth devices
	 * @return {{ name: str, address: str }[]} 
	 */
	GetPairedBtDevices() {return}

	/**
	 * Get APK's local storage path
	 * @return {str_pth} 
	 */
	GetPath() {return}

	/**
	 * GetPermission accepts a list of 'dangerus' classified permissions and returns a list of ungranted permissions in the **callback** function, or in case of only “ExtSDCard” the path URI of the user-selected folder
	 * @param {str_com} type `Camera`, `ExtSDcard`, `External`, `Internal`, `Network`, `Notify`, `Storage`, `Overlay`, `SMS`, `Location`, `Calendar`, `Body`, `Contacts`, `Record`, `Phone`, `Biometric`, `Accounts`, `License`, `android.permission.*`, `usb:<pid>`
	 * @param {(ungranted: str_com|str_uri) => void} callback 
	 */
	GetPermission(type, callback) {return}

	/**
	 * Get path to a private folder
	 * @param {str} name 
	 * @param {"external"} [options] 
	 * @return {str_pth} 
	 */
	GetPrivateFolder(name, options) {return}

	/**
	 * Get ID of a resource
	 * @param {str} name 
	 * @param {"android"} [options] 
	 * @return {str} 
	 */
	GetResourceId(name, options) {return}

	/**
	 * Get current device ringer mode
	 * @return {"Normal"|"Vibrate"|"Silent"} 
	 */
	GetRingerMode() {return}

	/**
	 * Get device rotation
	 * @return {0|90|180|270} 
	 */
	GetRotation() {return}

	/**
	 * Returns the routers ip address
	 * @return {str} `ip address`
	 */
	GetRouterAddress() {return}

	/**
	 * Get RSSI in dBm
	 * @return {num_int} `-127..-30`
	 */
	GetRSSI() {return}

	/**
	 * Get list of running apps
	 * @return {{ user: num_int, pid: num_int, name: str, foreground: bin }[]} 
	 */
	GetRunningApps() {return}

	/**
	 * Get list of running services
	 * @return {{ user: num_int, pid: num_int, name: str }[]} 
	 */
	GetRunningServices() {return}

	/**
	 * Get the screen density
	 * @return {num_int} 
	 */
	GetScreenDensity() {return}

	/**
	 * Get width of device screen
	 * @param {"Real"} [options] 
	 * @return {num_pxl} 
	 */
	GetScreenHeight(options) {return}

	/**
	 * Get height of device screen
	 * @param {"Real"} [options] 
	 * @return {num_pxl} 
	 */
	GetScreenWidth(options) {return}

	/**
	 * Get list of shared files
	 * @return {str_pth[]} 
	 */
	GetSharedFiles() {return}

	/**
	 * Get value of shared text
	 * @return {str} 
	 */
	GetSharedText() {return}

	/**
	 * Get associated app shortcuts
	 * @return {lst} 
	 */
	GetShortcuts() {return}

	/**
	 * Checks if the speaker is enabled for phone calls
	 * @return {bin} 
	 */
	GetSpeakerPhone() {return}

	/**
	 * Get full path to a special media folder
	 * @param {"DCIM"|"Pictures"|"Movies"|"Downloads"|"Documents"|"Music"} name 
	 * @return {str_pth} 
	 */
	GetSpecialFolder(name) {return}

	/**
	 * Get tts engines
	 * @return {str[]} 
	 */
	GetSpeechEngines() {return}

	/**
	 * Get WiFi network SSID (name)
	 * @return {str} 
	 */
	GetSSID() {return}

	/**
	 * Calculates text bounds
	 * @param {str} txt 
	 * @param {num} [size] 
	 * @param {num_frc} [width] 
	 * @param {dso} [obj] 
	 * @return {{ width: num_frc, height: num_frc }} { width, height }
	 */
	GetTextBounds(txt, size, width, obj) {return}

	/**
	 * Get theme configuration
	 * @return {{ baseTheme: str, holo: bin, dark: bin, titleHeight: num_frc, backColor: str_col, dialogColor: str_col, btnColor: str_col, dialogBtnColor: str_col, textColor1: str_col, textColor2: str_col,btnTextColor: str_col, highlightColor: str_col }} { baseTheme, holo, dark, titleHeight, backColor, dialogColor, btnColor, dialogBtnColor, textColor1, textColor2,btnTextColor, highlightColor }
	 */
	GetThemeInfo() {return}

	/**
	 * Create downscaled copy of an image
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {num_pxl} [width=-1] 
	 * @param {num_pxl} [height=-1] 
	 * @return {nil} 
	 */
	GetThumbnail(source, destination, width, height) {return}

	/**
	 * Returns the upper border distance from the app display to the device screen as height relative float or in pixels with the **px** option
	 * @param {"px"} [options] 
	 * @return {num_frc} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the object class name
	 * @return {"App"} 
	 */
	GetType() {return}

	/**
	 * Get current user email
	 * @return {str_acc} 
	 */
	GetUser() {return}

	/**
	 * Get apk version number
	 * @return {num} 
	 */
	GetVersion() {return}

	/**
	 * Get volume of a given audio type
	 * @param {"alarm"|"dtmf"|"music"|"notification"|"ring"|"system"|"voicecall"} stream 
	 * @return {num_frc} 
	 */
	GetVolume(stream) {return}

	/** Puts the phone into sleep mode */
	GoToSleep() {return}

	/**
	 * Checks if device has soft keys
	 * @return {bin} 
	 */
	HasSoftNav() {return}

	/** Hide the main app layout */
	Hide() {return}

	/** Hide the device keyboard */
	HideKeyboard() {return}

	/** Hide progress indicator */
	HideProgress() {return}

	/** Hide progress bar dialog */
	HideProgressBar() {return}

	/**
	 * Send Http request
	 * @param {"GET"|"POST"|"JSON"|"PUT"|"DELETE"|"HEAD"} type <br>
 	 * &emsp; `GET` - retrieve data\
 	 * &emsp; `POST` - submit data\
 	 * &emsp; `JSON` - post json data\
 	 * &emsp; `PUT` - replace target resource\
 	 * &emsp; `DELETE` - deletes the resource\
 	 * &emsp; `HEAD` - omit body
	 * @param {str_url} baseUrl 
	 * @param {str} [path] 
	 * @param {str} [params] 
	 * @param {(error: bin, reply: str, status: num_int) => void} [callback] 
	 * @param {str} [headers] 
	 */
	HttpRequest(type, baseUrl, path, params, callback, headers) {return}

	/**
	 * In ide
	 * @return {bin} 
	 */
	InIDE() {return}

	/**
	 * Start apk installation process
	 * @param {str_ptf} apkFile 
	 * @param {(packageName: str, status: str) => void} [callback] 
	 * @param {str} [options] 
	 * @return {bin} 
	 */
	InstallApp(apkFile, callback, options) {return}

	/**
	 * Returns true if ran from apk
	 * @return {bin} 
	 */
	IsAPK() {return}

	/**
	 * Check if package is installed
	 * @param {str} packageName 
	 * @return {bin} 
	 */
	IsAppInstalled(packageName) {return}

	/**
	 * Check bluetooth enabled
	 * @return {bin} 
	 */
	IsBluetoothEnabled() {return}

	/**
	 * Check if bluetooth is on
	 * @return {bin} 
	 */
	IsBluetoothOn() {return}

	/**
	 * Check bt paired state to other device
	 * @param {str} name 
	 * @return {bin} 
	 */
	IsBtDevicePaired(name) {return}

	/**
	 * Check whether device is charging
	 * @return {bin} 
	 */
	IsCharging() {return}

	/**
	 * Check if device OS is ChromeOS
	 * @return {bin} 
	 */
	IsChrome() {return}

	/**
	 * Check if device is connected to any network
	 * @return {bin} 
	 */
	IsConnected() {return}

	/**
	 * Check whether app is debugging
	 * @return {bin} 
	 */
	IsDebugging() {return}

	/**
	 * Check if debug view is currently shown
	 * @return {bin} 
	 */
	IsDebugVisible() {return}

	/**
	 * Check if path leads to a folder
	 * @param {str_ptd} folder 
	 * @return {bin} 
	 */
	IsFolder(folder) {return}

	/**
	 * Check whether device keyboard is shown
	 * @return {bin} 
	 */
	IsKeyboardShown() {return}

	/**
	 * Check if location method is enabled
	 * @param {"GPS"|"Network"} mode 
	 * @return {bin} 
	 */
	IsLocationEnabled(mode) {return}

	/**
	 * Check if NavBar is on righthand side
	 * @return {bin} 
	 */
	IsNavBarOnRight() {return}

	/**
	 * Check if apk version increased
	 * @return {bin} 
	 */
	IsNewVersion() {return}

	/**
	 * Check if device is in portrait mode
	 * @return {bin} 
	 */
	IsPortrait() {return}

	/**
	 * Check if user has a DroidScript Premium subscription
	 * @return {bin} 
	 */
	IsPremium() {return}

	/**
	 * Indicates 'scoped storage' on Android 10+
	 * @return {bin} 
	 */
	IsScoped() {return}

	/**
	 * Check if device screen is on
	 * @return {bin} 
	 */
	IsScreenOn() {return}

	/**
	 * Check id app is a service
	 * @return {bin} 
	 */
	IsService() {return}

	/**
	 * Check if app has finished loading
	 * @return {bin} 
	 */
	IsStarted() {return}

	/**
	 * Check if user device is a tablet
	 * @return {bin} 
	 */
	IsTablet() {return}

	/**
	 * Check if OS is AndroidThings
	 * @return {bin} 
	 */
	IsTV() {return}

	/**
	 * Check if the mobile Wifi Access Point is enabled
	 * @return {bin} 
	 */
	IsWifiApEnabled() {return}

	/**
	 * Check if WiFi is enabled
	 * @return {bin} 
	 */
	IsWifiEnabled() {return}

	/**
	 * Kill an app by its pid
	 * @param {num_int} pid 
	 */
	KillApp(pid) {return}

	/**
	 * Launch or search an app
	 * @param {str} packageName 
	 * @param {bin} [noPlay] `dont search`
	 */
	LaunchApp(packageName, noPlay) {return}

	/**
	 * Get a list of files ans folders contained in a specific folder
	 * @param {str_pth} path `must not have a trailing slash`
	 * @param {str} [filter] 
	 * @param {num_int} [limit] 
	 * @param {string | ("Alphasort"|"FullPath"|"RegEx"|"Folders"|"Files"|"NoEmpty"|"project")[]} [options] <br>
 	 * &emsp; `Alphasort` - sorts the paths in alphabetical order\
 	 * &emsp; `FullPath` - returns absolute paths to the listed items\
 	 * &emsp; `RegEx` - accepts regexp patterns\
 	 * &emsp; `Folders` - list folders only\
 	 * &emsp; `Files` - list files only\
 	 * &emsp; `NoEmpty` - hide empty folders\
 	 * &emsp; `project` - Shows DS project folders only
	 * @return {str_pth[]} 
	 */
	ListFolder(path, filter, limit, options) {return}

	/**
	 * Returns a list of granted permissions
	 * 	 * 
	 * 	 * See Also: GetPermission CheckPermission RemovePermission
	 * @param {"Camera"|"Storage"|"ExtSDcard"|"Network"|"Notify"|"Location"|"SMS"|"Calendar"|"Body"|"Contacts"|"Record"|"Biometric"|"Phone"|"Accounts"|"License"} type 
	 * @return {str_uri[]} 
	 */
	ListPermissions(type) {return}

	/**
	 * Load saved boolean value
	 * @param {str} name 
	 * @param {bin} [dflt] 
	 * @param {str_ptf} [file] 
	 * @return {bin} 
	 */
	LoadBoolean(name, dflt, file) {return}

	/**
	 * Load saved json object
	 * @param {str} name 
	 * @param {obj} [dflt] 
	 * @param {str_ptf} [file] 
	 * @return {obj} 
	 */
	LoadJson(name, dflt, file) {return}

	/**
	 * Load saved boolean value
	 * @param {str} name 
	 * @param {num} [dflt] 
	 * @param {str_ptf} [file] 
	 * @return {num} 
	 */
	LoadNumber(name, dflt, file) {return}

	/**
	 * Load an installed plugin to your app
	 * @param {str_url} url 
	 */
	LoadPlugin(url) {return}

	/**
	 * Asynchronously import a .js file
	 * @param {str_pth} path 
	 * @param {(info: { isTrusted: bin }) => void} [callback] 
	 */
	LoadScript(path, callback) {return}

	/**
	 * Load saved text value to remember varibale values between multiple app starts
	 * @param {str} name 
	 * @param {str} [dflt] 
	 * @param {str_ptf} [file] 
	 * @return {str} 
	 */
	LoadText(name, dflt, file) {return}

	/** Lock the device */
	Lock() {return}

	/**
	 * Hide and lock a drawer
	 * @param {"left"|"right"} side 
	 */
	LockDrawer(side) {return}

	/**
	 * Create new folder in the local fs
	 * @param {str_ptd} folder 
	 */
	MakeFolder(folder) {return}

	/**
	 * OpenDatabase creates or opens a local database in which large amounts of data can be stored that can still be queried in a reasonable amount of time
	 * @param {str} name 
	 * @return {DsDatabase} 
	 */
	OpenDatabase(name) {return}

	/**
	 * Opens the drawer layout on the given side with slide animation
	 * @param {"Left"|"Right"} [side] 
	 */
	OpenDrawer(side) {return}

	/**
	 * Allow user to open a file with an external app
	 * @param {str_ptf} file 
	 * @param {str_mim} [type] 
	 * @param {str} [choose] 
	 */
	OpenFile(file, type, choose) {return}

	/**
	 * Allow user to open an url with an external app
	 * @param {str_url} url 
	 * @param {str_mim} [type] 
	 * @param {str} [choose] 
	 */
	OpenUrl(url, type, choose) {return}

	/**
	 * Pairs a bluetooth device with yours
	 * @param {str} address 
	 * @param {() => void} [callback] 
	 */
	PairBtDevice(address, callback) {return}

	/**
	 * Convert file path to content uri
	 * @param {str_pth} path 
	 * @return {str_ptc} `content://[uri]`
	 */
	Path2Uri(path) {return}

	/**
	 * Pin app on screen
	 * @param {bin} enable 
	 */
	PinScreen(enable) {return}

	/**
	 * Play specific ringtone type
	 * @param {"Alarm"|"Notification"|"Ringtone"} type 
	 */
	PlayRingtone(type) {return}

	/**
	 * Plays a local or remote sound file
	 * @param {str_ptf|str_url} file 
	 */
	PlaySound(file) {return}

	/**
	 * Prevent screen from locking after some time
	 * @param {bin|"Full"|"Partial"} mode <br>
 	 * &emsp; `Full` - Device can sleep,Screen and Keyboard on\
 	 * &emsp; `Partial` - CPU always on,Screen and Keyboard off
	 */
	PreventScreenLock(mode) {return}

	/** Prevent Wifi from powering down */
	PreventWifiSleep() {return}

	/**
	 * Queries content from the android content model
	 * @param {str_uri} uri 
	 * @param {str_com} columns 
	 * @param {str_sql} [select] 
	 * @param {str_lst} [args] 
	 * @param {"coloumn"} [sort] <br>
 	 * &emsp; `coloumn` - a coloumn specified in 'coloumns'
	 * @return {any[]} 
	 */
	QueryContent(uri, columns, select, args, sort) {return}

	/**
	 * Quit the app with showing a dialog and exit after closing
	 * @param {str} msg 
	 * @param {str} [title] 
	 * @param {string | ("NoDim"|"NoFocus")[]} [options] 
	 */
	Quit(msg, title, options) {return}

	/**
	 * Read the content of a local file
	 * @param {str_ptc} file 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16"|"UTF-16BE"|"UTF-16LE"|"windows-1252"|"ISO-8859-1"|"base64"} [encoding] <br>
 	 * &emsp; `ISO-8859-1` - Latin-1
	 * @return {str} 
	 */
	ReadFile(file, encoding) {return}

	/**
	 * Read local file content data
	 * @param {str_pfa} file 
	 * @param {"base64"|"hex"|"int"|"ascii"} [mode] 
	 * @return {lst} 
	 */
	ReadFileData(file, mode) {return}

	/**
	 * Convert short to full path
	 * @param {str_pth} path 
	 */
	RealPath(path) {return}

	/**
	 * Read assets from given folder
	 * @param {str_ptd} dir 
	 */
	RedirectAssets(dir) {return}

	/**
	 * Remove drawer layout from a given side
	 * @param {"left"|"right"} side 
	 */
	RemoveDrawer(side) {return}

	/**
	 * Removes a layout added to the app
	 * @param {DsLayout} layout 
	 */
	RemoveLayout(layout) {return}

	/**
	 * Removes a granted permission
	 * 	 * 
	 * 	 * See Also: GetPermission CheckPermission ListPermissions
	 * @param {str_uri} uri 
	 */
	RemovePermission(uri) {return}

	/**
	 * Rename or move a local file
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 */
	RenameFile(source, destination) {return}

	/**
	 * Rename or move a local folder
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 */
	RenameFolder(source, destination) {return}

	/**
	 * Replace text in a local file
	 * @param {str_ptf} file 
	 * @param {str} txt 
	 * @param {str} rep 
	 * @param {str_com} [options] 
	 */
	ReplaceInFile(file, txt, rep, options) {return}

	/**
	 * Save a boolean value across multiple starts
	 * @param {str} name 
	 * @param {bin} value 
	 * @param {str_ptf} [file] 
	 */
	SaveBoolean(name, value, file) {return}

	/** Save web cookies */
	SaveCookies() {return}

	/**
	 * Save a json object across multiple starts
	 * @param {str} name 
	 * @param {obj} value 
	 * @param {str_ptf} [file] 
	 */
	SaveJson(name, value, file) {return}

	/**
	 * Save a number value across multiple starts
	 * @param {str} name 
	 * @param {num} value 
	 * @param {str_ptf} [file] 
	 */
	SaveNumber(name, value, file) {return}

	/**
	 * Save a text value across multiple starts
	 * @param {str} name 
	 * @param {str} value 
	 * @param {str_ptf} [file] 
	 */
	SaveText(name, value, file) {return}

	/**
	 * Adds media files to phone gallery
	 * @param {str_ptf} file 
	 */
	ScanFile(file) {return}

	/**
	 * Schedules background jobs defined in a Job.js file
	 * 	 * 
	 * 	 * See Also: CancelJob
	 * @param {num_mls} delay 
	 * @param {str} [options] 
	 */
	ScheduleJob(delay, options) {return}

	/**
	 * Take a screen shot of your app
	 * @param {str_ptf} fileName 
	 * @param {num_prc} [quality] 
	 */
	ScreenShot(fileName, quality) {return}

	/**
	 * Import an external JavaScript file
	 * @param {str_ptf} file 
	 * @param {bin} [noDefer=false] `load script inline`
	 */
	Script(file, noDefer) {return}

	/**
	 * Send a file to a remote target
	 * @param {str_pfa} file 
	 * @param {str} [subject] 
	 * @param {str} [text] 
	 * @param {str} [choose] 
	 */
	SendFile(file, subject, text, choose) {return}

	/**
	 * Send an image to a remote target
	 * @param {str_pfa} file 
	 * @param {str} [choose] 
	 */
	SendImage(file, choose) {return}

	/**
	 * Intens can be used to perform an operation between different applications or activities
	 * @param {str} [packageName] 
	 * @param {str} [className] 
	 * @param {str} [action] `android.intent.action.*`
	 * @param {str} [category] `android.intent.category.*`
	 * @param {str_uri} [uri] 
	 * @param {str_mim} [type] 
	 * @param {str|{ name: str, type: "string"|"float"|"int"|"long"|"bool"|"list"|"file"|"uri"|"keydown"|"keyup", value: str }[]} [extras] 
	 * @param {string | ("Result"|"ClearTask")[]} [options=''] <br>
 	 * &emsp; `Result` - expect a result to be passed to the callback function
	 * @param {(resultCode: -1|0|1, data?: { action: str, type: str, data: str, flags: num_int, extras: obj }) => void} [callback] 
	 */
	SendIntent(packageName, className, action, category, uri, type, extras, options, callback) {return}

	/**
	 * Open the EMail app and autofill fields
	 * @param {str} address 
	 * @param {str} [subject] 
	 * @param {str} [body] 
	 * @param {str_pth} [attach] 
	 * @param {str_mim} [type] 
	 * @param {"SendTo"} [options] 
	 */
	SendMail(address, subject, body, attach, type, options) {return}

	/**
	 * Send message from Service to main app
	 * @param {str} message 
	 */
	SendMessage(message) {return}

	/**
	 * Open the SMS app and autofill fields
	 * @param {str} [msg] 
	 * @param {str_num} [number] 
	 */
	SendSMS(msg, number) {return}

	/**
	 * Share text between apps
	 * @param {str} text 
	 * @param {str} [subject] 
	 * @param {str} [choose] 
	 */
	SendText(text, subject, choose) {return}

	/**
	 * Set alarm to open your app at a specific time
	 * @param {"Set"|"Repeat"|"Cancel"} type 
	 * @param {str|num_int} [id] 
	 * @param {(id: str|num_int) => void} [callback] 
	 * @param {num_dat} [time] 
	 * @param {num_mls} [interval] 
	 * @param {string | ("ExactIdle"|"Exact"|"App")[]} [options] <br>
 	 * &emsp; `Exact` - only works for single shot alarms\
 	 * &emsp; `App` - Opens main app if called from a service
	 */
	SetAlarm(type, id, callback, time, interval, options) {return}

	/**
	 * Load the language code from lang.json
	 * @param {str} name 
	 */
	SetAppLanguage(name) {return}

	/**
	 * Autostart APK when device boots
	 * @param {"App"|"Service"|"None"} auto 
	 */
	SetAutoBoot(auto) {return}

	/**
	 * Autostart DroidScript Project on DS restart
	 * @param {str} appName 
	 */
	SetAutoStart(appName) {return}

	/**
	 * Automatically enable the WiFi editor
	 * @param {bin} auto 
	 */
	SetAutoWifi(auto) {return}

	/**
	 * Change the app's background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Enable Bluetooth on the device
	 * @param {bin} enable 
	 */
	SetBluetoothEnabled(enable) {return}

	/**
	 * Change the device clipboard text
	 * @param {str} text 
	 */
	SetClipboardText(text) {return}

	/**
	 * Save data while app is running
	 * @param {str} name 
	 * @param {str} value 
	 */
	SetData(name, value) {return}

	/**
	 * Control the debug level of the program
	 * @param {string | ("console"|"ds"|"adb"|"all")[]} switches 
	 */
	SetDebug(switches) {return}

	/**
	 * Control the debug level of the program
	 * @param {bin} onoff 
	 */
	SetDebugEnabled(onoff) {return}

	/**
	 * Changes the dpi value for any control creatred afterwards
	 * @param {num_int} dpi 
	 */
	SetDensity(dpi) {return}

	/**
	 * Filter/ignore certain errors
	 * @param {str} regex `regex pattern`
	 */
	SetErrorFilter(regex) {return}

	/** Set services to run in the background */
	SetInBackground() {return}

	/**
	 * Set services to run in the foreground
	 * @param {str} [title] 
	 * @param {str} [text] 
	 * @param {str_ptf} [largeIcon] 
	 * @param {str_ptf} [smallIcon] 
	 * @param {"min"|"low"|"default"|"high"|"none"} [importance] 
	 */
	SetInForeground(title, text, largeIcon, smallIcon, importance) {return}

	/**
	 * Set options for the connected joystick
	 * @param {string | ("ForwardKeys")[]} [options] <br>
 	 * &emsp; `ForwardKeys` - allows the joystick key presses to pass onto the child controls of the main activity
	 */
	SetJoystickOptions(options) {return}

	/**
	 * Blocks android functionality outside your app
	 * @param {string | ("Power"|"Status"|"Nav"|"NavRight"|"LockTask"|"Pin")[]} mode <br>
 	 * &emsp; `LockTask` - COSU kiosk\
 	 * &emsp; `Pin` - task un-/pinning
	 * @param {bin} [enable] 
	 * @param {string | ("Black"|"Tasks")[]} [options=''] <br>
 	 * &emsp; `Tasks` - prevents recent tasks button working
	 * @param {str} [packages] 
	 */
	SetKioskMode(mode, enable, options, packages) {return}

	/**
	 * Set default margins
	 * @param {num} [left=0] 
	 * @param {num} [top=0] 
	 * @param {num} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Set app menu
	 * @param {str_com} list 
	 * @param {str_ptf} [iconPath] 
	 */
	SetMenu(list, iconPath) {return}

	/**
	 * Emulate GPS location
	 * @param {num} lat 
	 * @param {num} lng 
	 * @param {num} [accuracy] 
	 */
	SetMockLocation(lat, lng, accuracy) {return}

	/**
	 * Set NavBar color
	 * @param {str_col} color 
	 */
	SetNavBarColor(color) {return}

	/**
	 * Called on incoming Broadcasts
	 * @param {(type: str, msg: str) => void} callback 
	 * @param {str} action 
	 */
	SetOnBroadcast(callback, action) {return}

	/**
	 * Called on app debug messages
	 * @param {() => void} callback 
	 */
	SetOnDebug(callback) {return}

	/**
	 * Called on thrown JS errors
	 * @param {(error: str) => void} callback 
	 */
	SetOnError(callback) {return}

	/**
	 * Catch key events fired in your app
	 * @param {(action: "DOWN"|"UP", name: str, keycode: num_int, extrakeys: "Shift"|"Ctrl"|"Alt"|"Meta") => void} callback 
	 */
	SetOnKey(callback) {return}

	/**
	 * Called on keyboard visibility changes
	 * @param {(shown: bin) => void} callback 
	 */
	SetOnShowKeyboard(callback) {return}

	/**
	 * Called on WiFi connected state changes
	 * @param {(state: "CONNECTING"|"CONNECTED"|"DISCONNECTED", ssid: str) => void} callback 
	 */
	SetOnWifiChange(callback) {return}

	/**
	 * Define global app options
	 * @param {string | ("UseBrowser"|"NoKeys"|"ShowKeys"|"NoPause"|"NoThemeAlerts"|"IgnoreSslErrors"|"TouchModal"|"NoCors"|"NoTouch"|"NoFocus"|"Secure"|"ShowLocked"|"WakeScreen"|"ScreenOn")[]} [options] <br>
 	 * &emsp; `NoPause` - dont pause when not in foreground
	 */
	SetOptions(options) {return}

	/**
	 * Fix display orientation
	 * @param {"Default"|"Landscape"|"ReverseLandscape"|"Portrait"|"ReversePortrait"} orient 
	 * @param {() => void} [callback] 
	 */
	SetOrientation(orient, callback) {return}

	/**
	 * Change app position and size
	 * @param {num_frc} left 
	 * @param {num_frc} top 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Change GUI thread priority
	 * @param {"Low"|"Medium"|"High"} level 
	 */
	SetPriority(level) {return}

	/**
	 * Set current device ringer mode
	 * @param {"Normal"|"Vibrate"|"Silent"} mode 
	 */
	SetRingerMode(mode) {return}

	/**
	 * Change screen brightness
	 * @param {num_frc} level 
	 */
	SetScreenBrightness(level) {return}

	/**
	 * Changes the screen mode of your application
	 * @param {"Default"|"Normal"|"Full"|"Game"} mode 
	 */
	SetScreenMode(mode) {return}

	/**
	 * Auto-Launch Project when shared data received
	 * @param {"AppName"} name 
	 */
	SetSharedApp(name) {return}

	/**
	 * En/Disable speaker for phone calls
	 * @param {bin} on 
	 */
	SetSpeakerPhone(on) {return}

	/**
	 * Set status bar color
	 * @param {str_col} color 
	 */
	SetStatusBarColor(color) {return}

	/**
	 * Set default text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode='px'] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the theme of your app to any created [Theme Object](CreateTheme.htm)
	 * @param {DsTheme} theme 
	 */
	SetTheme(theme) {return}

	/**
	 * Change the user agent for html apps
	 * @param {str} agent 
	 * @param {str} [options] `Add-appends to default user agent`
	 */
	SetUserAgent(agent, options) {return}

	/**
	 * Set user credentials in an html app for websites that require user login
	 * @param {str} name 
	 * @param {str} password 
	 */
	SetUserCreds(name, password) {return}

	/**
	 * Change volume of a given audio type
	 * @param {"Alarm"|"DTMF"|"Music"|"Notification"|"Ring"|"System"|"Voicecall"} stream <br>
 	 * &emsp; `DTMF` - Dual Tone Multi-Frequency
	 * @param {num_frc} level 
	 * @param {"ShowUI"} [options] 
	 */
	SetVolume(stream, level, options) {return}

	/**
	 * En/Disable the mobile Wifi Access Point of the device
	 * @param {bin} enable 
	 * @param {str} [ssid] 
	 * @param {str} [key] 
	 */
	SetWifiApEnabled(enable, ssid, key) {return}

	/**
	 * En/Disable Wifi on the device
	 * @param {bin} enable 
	 */
	SetWifiEnabled(enable) {return}

	/** Show main app layout */
	Show() {return}

	/**
	 * Shows a CheckList
	 * @param {str} title 
	 * @param {str|{ title: str, check: bin }[]} list `title:checked`
	 * @param {(this: DsCheckList, data: { title: str, checked: bin }) => void} [callback] 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str} [options] sun-moon:shows sun and moon icons instead of default check boxes
	 * @return {DsCheckList} 
	 */
	ShowCheckList(title, list, callback, width, height, options) {return}

	/**
	 * Opens the in-app debug console as black overlay
	 * @param {bin} show 
	 * @param {"dialog"|"clear"} [options] <br>
 	 * &emsp; `dialog` - Show the debug log as black overlay dialog\
 	 * &emsp; `clear` - Clear content before showing
	 */
	ShowDebug(show, options) {return}

	/**
	 * Show keyboard on a focussed control
	 * @param {dso} obj 
	 * @return {bin} 
	 */
	ShowKeyboard(obj) {return}

	/** Show the in-app menu */
	ShowMenu() {return}

	/**
	 * Show a popup message
	 * @param {str} message 
	 * @param {string | ("Bottom"|"Short"|"Long")[]} [options] 
	 */
	ShowPopup(message, options) {return}

	/**
	 * Show a progress indicator
	 * @param {str} [message] 
	 * @param {string | ("NoDim"|"NonModal"|"Solid")[]} [options] <br>
 	 * &emsp; `NoDim` - Don't darken background\
 	 * &emsp; `NonModal` - allow background touch\
 	 * &emsp; `Solid` - shows solid background behind spinner
	 */
	ShowProgress(message, options) {return}

	/**
	 * Show a progress bar dialog
	 * @param {str} title 
	 * @param {num_prc} [percent] 
	 * @param {"Light"} [options] 
	 */
	ShowProgressBar(title, percent, options) {return}

	/**
	 * Show a text input dialog
	 * @param {str} title 
	 * @param {str} [dflt] 
	 * @param {(text: str) => void} [callback] 
	 */
	ShowTextDialog(title, dflt, callback) {return}

	/**
	 * Shows a tooltip message on the screen
	 * @param {str} message 
	 * @param {num_frc} [left] 
	 * @param {num_frc} [top] 
	 * @param {num_mls} [timeOut] 
	 * @param {"Down"} [options] 
	 */
	ShowTip(message, left, top, timeOut, options) {return}

	/**
	 * Simulates a drag event on an app object in a scrollable container
	 * @param {dso} obj 
	 * @param {num_frc} x1 
	 * @param {num_frc} y1 
	 * @param {num_frc} x2 
	 * @param {num_frc} y2 
	 * @param {num} [step] 
	 * @param {num} [pause] 
	 */
	SimulateDrag(obj, x1, y1, x2, y2, step, pause) {return}

	/**
	 * Simulates a key event on an app object
	 * @param {dso} obj 
	 * @param {str} keyName 
	 * @param {"META_META_ON"|"META_RIGHT_ON"|"NUM_LOCK_ON"|"SCROLL_LOCK_ON"|"SHIFT_LEFT_ON"|"SHIFT_MASK"|"SHIFT_ON"|"SHIFT_RIGHT_ON"|"SYM_ON"} [modifiers] 
	 * @param {num} [pause] 
	 */
	SimulateKey(obj, keyName, modifiers, pause) {return}

	/**
	 * Simulates a scroll event on a scrollable app object
	 * @param {dso} obj 
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} dx 
	 * @param {num_frc} dy 
	 * @param {num} [count] 
	 * @param {num} [fling] 
	 */
	SimulateScroll(obj, x, y, dx, dy, count, fling) {return}

	/**
	 * Simulate a touch event on a reachable control
	 * @param {dso} obj 
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {"Down"|"Move"|"Up"} dir 
	 */
	SimulateTouch(obj, x, y, dir) {return}

	/** Start your DS app in an html project */
	Start() {return}

	/**
	 * Starts an app in a new window
	 * @param {str_ptf} file 
	 * @param {string | ("Portrait"|"Landscape"|"Transparent"|"Debug"|"Game"|"remote")[]} [options=''] <br>
 	 * &emsp; `Debug` - start app in debug mode\
 	 * &emsp; `Game` - runs in GameView mode
	 * @param {str} [intent] `{ action`, ` type`, ` data`, ` extras }`
	 */
	StartApp(file, options, intent) {return}

	/** Start remote debug server */
	StartDebugServer() {return}

	/**
	 * Starts a parallel service
	 * @param {str} packageName 
	 * @param {str} className 
	 */
	StartService(packageName, className) {return}

	/**
	 * Stop an app started via StartApp
	 * @param {str_pth} name 
	 */
	StopApp(name) {return}

	/** Stop a running debug server */
	StopDebugServer() {return}

	/** Stops a running app service */
	StopService() {return}

	/**
	 * Execute a shell command on the android shell
	 * @param {str} command 
	 * @param {"log"|"noread"|"sh"|"su"} [options=''] <br>
 	 * &emsp; `log` - logs output to console\
 	 * &emsp; `noread` - dont read result (just execute)
	 * @param {num} [maxRead] 
	 * @param {num_sec} [timeout] 
	 * @return {str} 
	 */
	SysExec(command, options, maxRead, timeout) {return}

	/**
	 * Audiolize text
	 * @param {str} text 
	 * @param {num} [pitch] 
	 * @param {num} [rate] 
	 * @param {() => void} [callback] 
	 * @param {"music"} [stream] 
	 * @param {str} [locale] 
	 * @param {str} [engine] 
	 */
	TextToSpeech(text, pitch, rate, callback, stream, locale, engine) {return}

	/** Put the app in the background */
	ToBack() {return}

	/** Bring your app to the foreground */
	ToFront() {return}

	/**
	 * Translate “Ok” and “Cancel” buttons
	 * @param {str} Ok 
	 * @param {str} Cancel 
	 */
	Translate(Ok, Cancel) {return}

	/** Unlocks the device */
	Unlock() {return}

	/**
	 * Unlock a locked drawer
	 * @param {"left"|"right"} side 
	 */
	UnlockDrawer(side) {return}

	/**
	 * Unpair a paired Bluetooth device
	 * @param {str} address 
	 * @param {() => void} [callback] 
	 */
	UnpairBtDevice(address, callback) {return}

	/**
	 * Unzip a zip file
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {"spk"} [options] <br>
 	 * &emsp; `spk` - Extract SPK as DS project folder
	 */
	UnzipFile(source, destination, options) {return}

	/**
	 * Update the ProgressBar percentage
	 * @param {num_prc} percent 
	 * @param {"doevents"} [options] <br>
 	 * &emsp; `doevents` - force v8 UI update
	 */
	UpdateProgressBar(percent, options) {return}

	/**
	 * Force UI refresh
	 * @param {num_mls} ms `Update Rate`
	 */
	UpdateUI(ms) {return}

	/**
	 * Uploads a file to a server
	 * @param {str_url} url 
	 * @param {str_ptf} file 
	 * @param {str} name 
	 * @param {() => void} [callback] 
	 */
	UploadFile(url, file, name, callback) {return}

	/**
	 * Decode a URI encoded string
	 * @param {str_uri} uri 
	 * @param {str} [options] `returns DS style paths`
	 * @return {str} 
	 */
	Uri2Path(uri, options) {return}

	/**
	 * Vibrate device in a pattern
	 * @param {str_com} pattern 
	 */
	Vibrate(pattern) {return}

	/**
	 * Perform a synchronous delay
	 * @param {num_sec} seconds 
	 * @param {bin} [doEvents=false] 
	 */
	Wait(seconds, doEvents) {return}

	/** Wake the screen up */
	WakeUp() {return}

	/**
	 * Lists the contents of a folder recursively
	 * @param {str_pth} path 
	 * @param {str} [filter] 
	 * @param {num_int} [limit] 
	 * @param {string | ("Alphasort"|"FullPath"|"RegEx"|"Folders"|"Files"|"NoEmpty"|"project")[]} [options] <br>
 	 * &emsp; `Alphasort` - sorts the paths in alphabetical order\
 	 * &emsp; `FullPath` - returns absolute paths to the listed items\
 	 * &emsp; `RegEx` - accepts regexp patterns\
 	 * &emsp; `Folders` - list folders only\
 	 * &emsp; `Files` - list files only\
 	 * &emsp; `NoEmpty` - hide empty folders\
 	 * &emsp; `project` - Shows DS project folders only
	 * @return {str_pth[]} 
	 */
	WalkFolder(path, filter, limit, options) {return}

	/**
	 * Connect to a WiFi network by specifying the ssid and a password
	 * @param {str} ssid 
	 * @param {str} key 
	 */
	WifiConnect(ssid, key) {return}

	/**
	 * Scan for any available Wifi networks
	 * @param {(ssids: str_pip|lst) => void} callback 
	 * @param {"detail"} [options] 
	 */
	WifiScan(callback, options) {return}

	/**
	 * Write text to a local file
	 * @param {str_ptf} file 
	 * @param {str} text 
	 * @param {"Append"|"ASCII"|"Base64"} [mode] 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16"|"UTF-16BE"|"UTF-16LE"|"windows-1252"|"ISO-8859-1"} [encoding] <br>
 	 * &emsp; `ISO-8859-1` - Latin-1
	 */
	WriteFile(file, text, mode, encoding) {return}

	/**
	 * Compress a file to zip
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {"spk"} [options] <br>
 	 * &emsp; `spk` - Create SPK from File
	 */
	ZipFile(source, destination, options) {return}

	/**
	 * Compress a folder to zip
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {"spk"} [options] <br>
 	 * &emsp; `spk` - Create SPK from DS project folder
	 */
	ZipFolder(source, destination, options) {return}

}

class DsAudioRecorder {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Returns a new list of frequency values
	 * @return {num_int[]} 
	 */
	GetData() {return}

	/**
	 * Returns the PMPO value (Peak music power output)
	 * @return {num_flt} 
	 */
	GetPeak() {return}

	/**
	 * Returns the RMS value (Root Mean Square)
	 * @return {num_flt} 
	 */
	GetRMS() {return}

	/**
	 * Returns the control class name
	 * @return {"AudioRecorder"} 
	 */
	GetType() {return}

	/** Pause the recording */
	Pause() {return}

	/**
	 * Define the recording file
	 * @param {str_ptf} file 
	 */
	SetFile(file) {return}

	/**
	 * Define the Recording frequency
	 * @param {8000|11025|22050|44100|48000} frequency 
	 */
	SetFrequency(frequency) {return}

	/**
	 * Define the recording file
	 * @param {"Default"|"Camcorder"|"Mic"|"Unprocessed"|"Voicecommunication"|"Voiceperformance"|"Voicerecognition"} src 
	 */
	SetSource(src) {return}

	/** Start recording to the specified file */
	Start() {return}

	/** Stop recording */
	Stop() {return}
}


class DsBluetoothList {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Returns the control class name
	 * @return {"BluetoothList"} 
	 */
	GetType() {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: DsBluetoothList, name: str, address: str) => void} callback 
	 */
	SetOnTouch(callback) {return}
}


class DsBluetoothSerial {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Clears the Bluetooth buffer of the serial connection */
	Clear() {return}

	/**
	 * Connect a Bluetooth device
	 * @param {str} name 
	 * @param {str} [channel] 
	 */
	Connect(name, channel) {return}

	/** Disconnect the Bluetooth connection */
	Disconnect() {return}

	/**
	 * Returns the control class name
	 * @return {"BluetoothSerial"} 
	 */
	GetType() {return}

	/**
	 * Checks if Bluetooth is enabled or not
	 * @return {bin} 
	 */
	IsBluetoothEnabled() {return}

	/**
	 * Checks if a Bluetooth connection exists to another device
	 * @return {bin} 
	 */
	IsConnected() {return}

	/**
	 * Check pairing status to another device
	 * @param {str} name 
	 * @return {bin} 
	 */
	IsPaired(name) {return}

	/**
	 * Listen <s>or stop listening</s> for incoming messages
	 * @param {bin} enabled 
	 */
	Listen(enabled) {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/** Ask user to enable Bluetooth */
	RequestEnable() {return}

	/**
	 * Define data format for outgoing data
	 * @param {str} mode `Hex`, `Int`, `Text`, `<encoding>`\
 	 * &emsp; `Hex` - comma separated text value\
 	 * &emsp; `Int` - comma separated byte numbers\
 	 * &emsp; `Text` - string of text characters\
 	 * &emsp; `encoding` - UTF-16L/BE
	 */
	SetDataMode(mode) {return}

	/**
	 * If the device has sent the connection request
	 * 	 * 	name is of type boolean (true if the connection was established successful)
	 * 	 * 	and address is your BluetoothSerial object
	 * 	 * 
	 * 	 * if the device has received the connection request
	 * 	 * 	name is a string with the clients bluetooth name
	 * 	 * 	and address includes the bluetooth address
	 * @param {(this: DsBluetoothSerial, name: str, address: str) => void} callback 
	 */
	SetOnConnect(callback) {return}

	/**
	 * Called after disconnecting from bluetooth connection
	 * @param {(this: DsBluetoothSerial, name: str, address: str) => void} callback 
	 */
	SetOnDisconnect(callback) {return}

	/**
	 * Called after received Data via Bluetooth
	 * @param {(this: DsBluetoothSerial, data: str) => void} callback 
	 */
	SetOnReceive(callback) {return}

	/**
	 * Specify how to split received data
	 * @param {"End"|"Start-End"|"Size"|"Head"} mode 
	 * @param {str|num_int} p2 
	 * @param {str|num_int} [p3] 
	 */
	SetSplitMode(mode, p2, p3) {return}

	/**
	 * Set idle disconnect timeout
	 * @param {num_mls} milliseconds 
	 */
	SetTimeout(milliseconds) {return}

	/**
	 * Send data to connected device
	 * @param {str} data 
	 */
	Write(data) {return}
}


class DsButton {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsButton, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"Button"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: DsButton) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the button was long pressed
	 * @param {(this: DsButton) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Customize the button looks
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsButton) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsCameraView {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsCameraView, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Takes a picture if a motion was detected
	 * @param {str_ptd} path 
	 * @param {str} fileName File_n#_motion
	 * @param {num_int} [maxCount] 
	 */
	AutoCapture(path, fileName, maxCount) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Find faces in the current camera view
	 * @param {num_int} [maxCount] 
	 * @return {{ confidence: num_frc, eyeDistance: num, midPoint: {x:num, y:num}, pose: num_int }} { confidence, eyeDistance, midPoint, pose }
	 */
	FindFaces(maxCount) {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Returns the device camera count
	 * @return {num_int} 
	 */
	GetCameraCount() {return}

	/**
	 * Returns a new list of available color effects
	 * @return {"none"|"mono"|"negative"|"solarize"|"sepia"|"posterize"|"whiteboard"|"blackboard"|"aqua"|"vage-cold"|"point-blue"|"point-red-yellow"|"emboss"|"sketch"|"neon"} 
	 */
	GetColorEffects() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Returns the camera height
	 * @return {num_frc} 
	 */
	GetImageHeight() {return}

	/**
	 * Returns the camera width
	 * @return {num_frc} 
	 */
	GetImageWidth() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the hightst possible zoom value
	 * @return {num} 
	 */
	GetMaxZoom() {return}

	/**
	 * Get camera parameters
	 * @return {str_smc} `key1=value1;key2=value2;...`
	 */
	GetParameters() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns a new list of possible picture dimensions
	 * @return {str_com} `w1 x h1`, `w2 x h2`, `...`
	 */
	GetPictureSizes() {return}

	/**
	 * Returns base64 pixel data as raw bitmap, png or jpg format
	 * @param {str} format `GrayScale`, `JSON`, `<resolution>`, `rawbase64`, `pngbase64`, `jpgbase64`\
 	 * &emsp; `GrayScale` - fastest\
 	 * &emsp; `JSON` - slowest: “ARGB,ARGB,...”\
 	 * &emsp; `<resolution>` - CIF: 352x288\
 	 * &emsp; QQVGA: 160x120\
 	 * &emsp; QVGA: 320x240\
 	 * &emsp; SVGA: 800x600\
 	 * &emsp; VGA: 640x480\
 	 * &emsp; XGA: 1024x768\
 	 * &emsp; UXGA: 1600x1200
	 * @param {num_frc} left 
	 * @param {num_frc} top 
	 * @param {num_frc} width 
	 * @param {num_frc} height 
	 * @return {str_b64} 
	 */
	GetPixelData(format, left, top, width, height) {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"CameraView"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/**
	 * Returns the curent zoom value
	 * @return {num} 
	 */
	GetZoom() {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/**
	 * Returns if the current camera supports flashlight
	 * @return {bin} 
	 */
	HasFlash() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Returns if the camera is currently recording
	 * @return {bin} 
	 */
	IsRecording() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Define a raster for motion detection
	 * @param {num_int} xtiles 
	 * @param {num_int} ytiles 
	 * @param {num_pxl} sensitivity 
	 * @param {num_mls} [minPeriod] 
	 * @param {DsImage} [image] 
	 */
	MotionMosaic(xtiles, ytiles, sensitivity, minPeriod, image) {return}

	/**
	 * Start recording video
	 * @param {str_ptf} file 
	 * @param {num_sec} [seconds] 
	 * @param {"high"|"low"|"480p"|"720p"|"1080p"|"2k"|"4k"|"8k"|"qvga"|"vga"|"cif"} [quality] 
	 */
	Record(file, seconds, quality) {return}

	/**
	 * Keeps tracks of the average color around a given point
	 * @param {str_pip} list `x1`, `y1`, `x2`, `y2`, `...`
	 * @param {(this: DsCameraView, data: [num,num,num][]) => void} callback 
	 * @param {num_pxl} [sampSize] 
	 * @param {num_mls} [maxRate] 
	 */
	ReportColors(list, callback, sampSize, maxRate) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Applies a color effect to the camera
	 * @param {"none"|"mono"|"negative"|"solarize"|"sepia"|"posterize"|"whiteboard"|"blackboard"|"aqua"|"vage-cold"|"point-blue"|"point-red-yellow"|"emboss"|"sketch"|"neon"} effect 
	 */
	SetColorEffect(effect) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * Define two camera view duplicate targets
	 * @param {DsImage} image1 
	 * @param {DsImage} image2 
	 */
	SetDuplicateImage(image1, image2) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * En-/Disables the camera flash
	 * @param {bin} onoff 
	 */
	SetFlash(onoff) {return}

	/**
	 * Change focus mode
	 * @param {"Auto"|"Picture"|"Video"|"Macro"|"EDOF"|"Fixed"|"Infinity"} mode <br>
 	 * &emsp; `Picture` - for taking pictures\
 	 * &emsp; `Video` - for recording videos\
 	 * &emsp; `EDOF` - Extended Depth Of Field for continuous digital focusing
	 */
	SetFocusMode(mode) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control gets focused
	 * @param {(this: DsCameraView) => void} callback 
	 */
	SetOnFocus(callback) {return}

	/**
	 * Called when cam.MotionMosaic detected a motion
	 * @param {(this: DsCameraView, data: lst_num) => void} callback 
	 */
	SetOnMotion(callback) {return}

	/**
	 * Called when cam.AutoCapture took a picture
	 * @param {(this: DsCameraView, file: str_pth) => void} callback 
	 */
	SetOnPicture(callback) {return}

	/**
	 * Called if the camera is ready for use
	 * @param {(this: DsCameraView) => void} callback 
	 */
	SetOnReady(callback) {return}

	/**
	 * Rotates the camera view
	 * @param {0|90|180|270} angle 
	 */
	SetOrientation(angle) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Change camera properties
	 * @param {str} name 
	 * @param {num|str} value 
	 */
	SetParameter(name, value) {return}

	/**
	 * Define a custom picture size in pixels
	 * @param {num_pxl} width 
	 * @param {num_pxl} height 
	 */
	SetPictureSize(width, height) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Rotate the captured image
	 * @param {num_deg} angle 
	 */
	SetPostRotation(angle) {return}

	/**
	 * Define a preview image for captured pictures
	 * @param {DsImage} image 
	 */
	SetPreviewImage(image) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * N-/Disables the camera sound
	 * @param {bin} enabled 
	 */
	SetSound(enabled) {return}

	/**
	 * Define custom video recording size
	 * @param {num_pxl} width 
	 * @param {num_pxl} height 
	 */
	SetVideoSize(width, height) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Change the zoom value of the camera
	 * @param {num} level 
	 */
	SetZoom(level) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Start the camera preview on the display */
	StartPreview() {return}

	/** Stop recording video */
	Stop() {return}

	/** Stop the camera preview on the display */
	StopPreview() {return}

	/**
	 * Streams the camera view to a local ip
	 * @param {str} ip 
	 * @param {num_int} [port] 
	 * @param {num_prc} [quality] 
	 * @param {num_fps} [fps] 
	 * @param {num_mtu} [mtu] 
	 */
	Stream(ip, port, quality, fps, mtu) {return}

	/**
	 * Save the current camera view to a file
	 * @param {str_ptf} file 
	 */
	TakePicture(file) {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsCameraView) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsCheckBox {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsCheckBox, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get current checked state
	 * @return {bin} 
	 */
	GetChecked() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"CheckBox"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Changes the ckecked state
	 * @param {bin} checked 
	 */
	SetChecked(checked) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the CheckBox was touched
	 * @param {(this: DsCheckBox, isChecked: bin) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsCheckBox) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsCloudStore {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Returns the control class name
	 * @return {"CloudStore"} 
	 */
	GetType() {return}

	/**
	 * Deletes a file in the cloud
	 * @param {str_ptf} file 
	 * @param {(this: DsCloudStore, success: bin, result: {data: str,error: str}, status: num_int) => void} callback 
	 */
	Delete(file, callback) {return}

	/**
	 * Lists files of the cloud
	 * @param {str} filter 
	 * @param {(this: DsCloudStore, error: bin, result: {data: str_com,error: str}, status: num_int) => void} callback 
	 */
	List(filter, callback) {return}

	/**
	 * Loads data from the cloud
	 * @param {str_ptf} file 
	 * @param {str} callback 
	 * @param {(this: DsCloudStore, error: bin, result: {data: all,error: str}, status: num_int) => void} [options] 
	 */
	Load(file, callback, options) {return}

	/**
	 * Merges data in the cloud
	 * @param {str_ptf} file 
	 * @param {obj} data 
	 * @param {(this: DsCloudStore, success: bin, result: {data: str,error: str}, status: num_int) => void} [callback] 
	 */
	Merge(file, data, callback) {return}

	/**
	 * Saves data in the cloud
	 * @param {str_ptf} file 
	 * @param {all} data 
	 * @param {(this: DsCloudStore, success: bin, result: {data: str,error: str}, status: num_int) => void} [callback] 
	 * @param {str} [options] 
	 */
	Save(file, data, callback, options) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * Upload a file to the cloud
	 * @param {str} data 
	 * @param {str} name 
	 * @param {str_mim} [type] 
	 * @param {(this: DsCloudStore, response: {error: str,name: str,folder: str,id: str,mimetype: str_mim,size: num}) => void} [callback] 
	 * @param {str} [password] 
	 */
	Upload(data, name, type, callback, password) {return}
}


class DsCodeEdit {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsCodeEdit, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clears the undo/redo history */
	ClearHistory() {return}

	/** Copy selected text to the clipboard */
	Copy() {return}

	/** Cut selected text to the clipboard */
	Cut() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the current cursor line index
	 * @return {num_int} 
	 */
	GetCursorLine() {return}

	/**
	 * Get the cursor position in the text
	 * @return {num_int} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get the start character index of a line
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Get current selection state
	 * @return {bin} 
	 */
	GetSelectMode() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"CodeEdit"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Underlines a certain line in the text
	 * @param {num_int} line 
	 */
	HighlightLine(line) {return}

	/**
	 * Insert text at the cursor
	 * @param {str} text 
	 */
	InsertText(text) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/** Paste clipboard to the current cursor position */
	Paste() {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replace the selected text
	 * @param {str} text 
	 */
	Replace(text) {return}

	/**
	 * Replace all occurances of a string in the text
	 * @param {str} text 
	 * @param {str} newText 
	 * @param {bin} [matchCase=false] 
	 * @param {bin} [wholeWord=false] 
	 */
	ReplaceAll(text, newText, matchCase, wholeWord) {return}

	/**
	 * Replace a range of the text with a string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Search and select a string in the text
	 * @param {str} text 
	 * @param {"Up"|"Down"} [direction='Down'] 
	 * @param {bin} [matchCase=false] 
	 * @param {bin} [wholeWord=false] 
	 */
	Search(text, direction, matchCase, wholeWord) {return}

	/** Select the whole text */
	SelectAll() {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Changes the color scheme of the CodeEdit
	 * @param {"Dark"|"Light"} scheme 
	 */
	SetColorScheme(scheme) {return}

	/**
	 * Change the current cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Change the highlighted language syntax
	 * @param {".js"|".java"|".php"|".c"|".cpp"|".cs"|".rb"|".m"|".py"|".txt"} ext 
	 */
	SetLanguage(ext) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Select between Yoyo or Touch mode
	 * @param {"Yoyo"|"Touch"} method 
	 */
	SetNavigationMethod(method) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: DsCodeEdit) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a Yoyo double-tap callback function
	 * @param {(this: DsCodeEdit) => void} callback 
	 */
	SetOnDoubleTap(callback) {return}

	/**
	 * Define a key-event callback function
	 * @param {(this: DsCodeEdit, action: "Down"|"Move"|"Up", keyname: "VOLUME_DOWN"|"VOLUME_UP"|"BACK"|"MENU", keycode: num_int, extra: "Shift"|"Ctrl"|"Alt"|"Meta") => void} callback 
	 */
	SetOnKey(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Selects part of the text in a given range
	 * @param {num_int} start 
	 * @param {num_int} stop 
	 */
	SetSelection(start, stop) {return}

	/**
	 * En/Disable cursor selection mode
	 * @param {bin} onOff 
	 */
	SetSelectMode(onOff) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disable device keyboard
	 * @param {bin} onOff 
	 */
	SetUseKeyboard(onOff) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsCodeEdit) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/** Undo an action */
	Undo() {return}
}


class DsCrypt {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Decrypt text with a key
	 * @param {str} text 
	 * @param {str} password 
	 * @return {str} 
	 */
	Decrypt(text, password) {return}

	/**
	 * Encrypt text with a key
	 * @param {str} text 
	 * @param {str} password 
	 * @return {str} 
	 */
	Encrypt(text, password) {return}

	/**
	 * Returns the control class name
	 * @return {"Crypt"} 
	 */
	GetType() {return}

	/**
	 * Get a hash from a string
	 * @param {str} text 
	 * @param {"MD5"|"SHA"|"SHA-1"|"SHA-224"|"SHA-256"|"SHA-384"|"SHA-512"} mode 
	 * @param {"Wrap"} [options] 
	 * @return {str} 
	 */
	Hash(text, mode, options) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}
}


class DsDialog {

	/**
	 * Add content layout
	 * @param {DsLayout} layout 
	 */
	AddLayout(layout) {return}

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Hides the control and removes it from the screen */
	Dismiss() {return}

	/**
	 * En/Disables hiding via presing the back key
	 * @param {bin} enable 
	 */
	EnableBackKey(enable) {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get title bar height
	 * @return {num_pxl} 
	 */
	GetTitleHeight() {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"Dialog"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Removes a content layout
	 * @param {DsLayout} layout 
	 */
	RemoveLayout(layout) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @param {num_pxl} radius 
	 */
	SetBackColor(color, radius) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when back button was pressed while the dialog was shown
	 * @param {(this: DsDialog) => void} callback 
	 */
	SetOnBack(callback) {return}

	/**
	 * Called when the dialog is cancelled
	 * @param {(this: DsDialog) => void} callback 
	 */
	SetOnCancel(callback) {return}

	/**
	 * Called when user touched the control
	 * @param {(this: DsDialog, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Changes the dialog title
	 * @param {str} title 
	 */
	SetTitle(title) {return}

	/**
	 * Changes the color of the dialog title
	 * @param {str_col} clr 
	 */
	SetTitleColor(clr) {return}

	/**
	 * Changes the title divider height for "Old" dialogs
	 * @param {str_col} color 
	 */
	SetTitleDividerColor(color) {return}

	/**
	 * Change height of the title divider for "Old" dialogs
	 * @param {num_pxl} height 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [options] 
	 */
	SetTitleDividerHeight(height, options) {return}

	/**
	 * Change height of the title bar for "Old" dialogs
	 * @param {num_pxl} height 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [options] 
	 */
	SetTitleHeight(height, options) {return}

	/**
	 * Changes the title text size for "Old" dialogs
	 * @param {num} size 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [options] 
	 */
	SetTitleTextSize(size, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsDialog) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsDownloader {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Download file(s)
	 * @param {str_url|str_url[]} url 
	 * @param {str_pth} fldr `must not have a trailing slash`
	 * @param {str} [name] 
	 * @param {str} [headers] 
	 */
	Download(url, fldr, name, headers) {return}

	/**
	 * Get current download progress
	 * @return {num_frc} 
	 */
	GetProgress() {return}

	/**
	 * Get target download size in bytes
	 * @return {num_byt} 
	 */
	GetSize() {return}

	/**
	 * Returns the control class name
	 * @return {"Downloader"} 
	 */
	GetType() {return}

	/**
	 * Get download completed state
	 * @return {bin} 
	 */
	IsComplete() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Called when download is cancelled
	 * @param {(this: DsDownloader, file: str_pth) => void} callback 
	 */
	SetOnCancel(callback) {return}

	/**
	 * Called when downloads are finished
	 * @param {(this: DsDownloader) => void} callback 
	 */
	SetOnComplete(callback) {return}

	/**
	 * Called when a file is downloaded
	 * @param {(this: DsDownloader, path: str_pth) => void} callback 
	 */
	SetOnDownload(callback) {return}

	/**
	 * Called when an error occurred while downloading
	 * @param {(this: DsDownloader, error: str) => void} callback 
	 */
	SetOnError(callback) {return}
}


class DsEmail {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Returns the control class name
	 * @return {"Email"} 
	 */
	GetType() {return}

	/**
	 * Start receiving emails from a given folder
	 * @param {str} folder 
	 * @param {num_int} maxCount 
	 * @param {str} [filter] 
	 */
	Receive(folder, maxCount, filter) {return}

	/**
	 * Send an email to someone
	 * @param {str} subject 
	 * @param {str} body 
	 * @param {str} sender `email address`
	 * @param {str} recipients `email address`
	 * @param {str_pth} [attach] 
	 */
	Send(subject, body, sender, recipients, attach) {return}

	/**
	 * Set IMAP settings for receiving messages
	 * @param {str} server `imap/pop.gmail.com`, `imap/pop.mail.yahoo.com`, `imap/pop.gmx.net`\
 	 * &emsp; `pop.gmail.com` - google\
 	 * &emsp; `pop.mail.yahoo.com` - yahoo\
 	 * &emsp; `pop.gmx.net` - gmx
	 * @param {993|995} [port] <br>
 	 * &emsp; `993` - imap\
 	 * &emsp; `995` - pop
	 */
	SetIMAP(server, port) {return}

	/**
	 * Called when a message is received
	 * @param {(this: DsEmail, data: { from: str_eml, to: str_eml, cc: str_eml, subject: str, body: str }) => void} callback 
	 */
	SetOnMessage(callback) {return}

	/**
	 * Called when a status changed
	 * @param {(this: DsEmail, status: str) => void} callback 
	 */
	SetOnStatus(callback) {return}

	/**
	 * Set SMTP settings for sending messages
	 * @param {"smtp.gmail.com"|"smtp.mail.yahoo.com"|"mail.gmx.net"} server <br>
 	 * &emsp; `smtp.gmail.com` - google\
 	 * &emsp; `smtp.mail.yahoo.com` - yahoo\
 	 * &emsp; `mail.gmx.net` - gmx
	 * @param {465|578|587} port <br>
 	 * &emsp; `465` - SSL\
 	 * &emsp; `578` - TLS (gmail, yahoo)\
 	 * &emsp; `587` - gmx
	 */
	SetSMTP(server, port) {return}
}


class DsFile {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Close File */
	Close() {return}

	/**
	 * Get file size in bytes
	 * @return {num_byt} 
	 */
	GetLength() {return}

	/**
	 * Get pointer position
	 * @return {num_int} 
	 */
	GetPointer() {return}

	/**
	 * Returns the control class name
	 * @return {"File"} 
	 */
	GetType() {return}

	/**
	 * Read data from file
	 * @param {num_int} len 
	 * @param {"Int"|"Text"|"Hex"} [mode='Text'] 
	 */
	ReadData(len, mode) {return}

	/**
	 * Read numeric data from file
	 * @param {"Byte"|"UByte"|"Bool"|"Float"|"FloatLE"|"Long"|"LongLE"|"Short"|"UShort"|"ShortLE"|"UShortLE"|"Int"|"UInt"|"IntLE"} type 
	 * @return {num} 
	 */
	ReadNumber(type) {return}

	/**
	 * Read data as text
	 * @param {"UTF"|"Line"|"Char"} type <br>
 	 * &emsp; `UTF` - read UTF-8 string with 2 byte header\
 	 * &emsp; `Line` - read one line terminated by \\n, \\r or \\r\\n\
 	 * &emsp; `Char` - read big-endian 16-bit character
	 * @return {str} 
	 */
	ReadText(type) {return}

	/**
	 * Asynchronously read data as text
	 * @param {"Line"|"Char"} type <br>
 	 * &emsp; `Line` - read one line terminated by \\n, \\r or \\r\\n\
 	 * &emsp; `Char` - read big-endian 16-bit character
	 * @param {(this: DsFile, data: str) => void} callback 
	 */
	ReadTextAsync(type, callback) {return}

	/**
	 * CHange pointer position to a given byte in the file
	 * @param {num_int} offset 
	 */
	Seek(offset) {return}

	/**
	 * Allocate memory for a file
	 * @param {num_int} len 
	 */
	SetLength(len) {return}

	/**
	 * Let the pointer skip some bytes
	 * @param {num_int} bytes 
	 */
	Skip(bytes) {return}

	/**
	 * Write data to the file
	 * @param {"FA"|"FB"|"FC"|"250"|"251"|"252"|"abc46"} data <br>
 	 * &emsp; `abc46` - low order 8-bit bytes
	 * @param {"Hex"|"Int"|"Text"} [mode='Text'] 
	 */
	WriteData(data, mode) {return}

	/**
	 * Write number to the file
	 * @param {num} data 
	 * @param {"Byte"|"UByte"|"Bool"|"Float"|"FloatLE"|"Long"|"LongLE"|"Short"|"UShort"|"ShortLE"|"UShortLE"|"Int"|"UInt"|"IntLE"} [type='Int'] 
	 */
	WriteNumber(data, type) {return}

	/**
	 * Writes text to file
	 * @param {str|num_int[]} data 
	 * @param {"UTF"|"Bytes"|"Char"} [type='Text'] <br>
 	 * &emsp; `UTF` - write UTF-8 encoded text\
 	 * &emsp; `Bytes` - 8-bit bytes\
 	 * &emsp; `Char` - Write big-endian 16-bit characters
	 */
	WriteText(data, type) {return}
}


class DsGameView {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Execute code inside the GameView
	 * @param {str_jsc} js 
	 */
	Execute(js) {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"GameView"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define the game source file
	 * @param {str_ptf} file 
	 */
	SetFile(file) {return}

	/**
	 * Change the target framerate
	 * @param {num_fps} fps 
	 */
	SetFrameRate(fps) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsGameView) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsGLView {

	/** @type {num_flt} Width/height relation */
	aspect;

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** @type {obj} [HTMLDivElement] */
	canvas;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Create a sprite object which can be drawn on the GLView
	 * @param {str_ptf} file 
	 * @param {(this: DsGLView) => void} [callback] 
	 * @return {GLV_img} img
	 */
	CreateImage(file, callback) {return}

	/**
	 * Draw image to canvas
	 * @param {GLV_img} image img
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [w] 
	 * @param {num_frc} [h] 
	 * @param {num_deg} [angle] 
	 */
	DrawImage(image, x, y, w, h, angle) {return}

	/**
	 * Draw part of a sprite to the canvas
	 * @param {GLV_img} sheet img
	 * @param {num_pxl} sx 
	 * @param {num_pxl} sy 
	 * @param {num_pxl} sw 
	 * @param {num_pxl} sh 
	 * @param {num_frc} dx 
	 * @param {num_frc} dy 
	 * @param {num_frc} dw 
	 * @param {num_frc} dh 
	 * @param {num_deg} angle 
	 */
	DrawSprite(sheet, sx, sy, sw, sh, dx, dy, dw, dh, angle) {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Returns the glv context
	 * @return {GLV_ctx} ctx
	 */
	GetContext() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"GLView"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** @type {num_int} Height */
	height;

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/** Render draw commands */
	Render() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when user touched the control
	 * @param {(this: DsGLView, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: DsGLView, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: DsGLView, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: DsGLView, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsGLView) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/** @type {num_int} Width */
	width;
}

class GLV_img {

	/** @type {num_int} Width of the image */
	width;

	/** @type {num_int} Height of the image */
	height;
}
class GLV_ctx {

	/**
	 * Captures the canvas to a png image
	 * @param {num_pxl} x 
	 * @param {num_pxl} y 
	 * @param {num_pxl} w 
	 * @param {num_pxl} h 
	 * @param {str} fileName `path relative to “/sdcard”`
	 * @param {fnc} [successCallback] 
	 * @param {fnc} [errorCallback] 
	 */
	capture(x, y, w, h, fileName, successCallback, errorCallback) {return}

	/**
	 * <deprecated does nothing
	 * @param {num_pxl} x 
	 * @param {num_pxl} y 
	 * @param {num_pxl} [width=-1] 
	 * @param {num_pxl} [height=-1] 
	 */
	clearRect(x, y, width, height) {return}

	/**
	 * Draws part of a sprite to the context
	 * @param {GLV_img} image img
	 * @param {num_pxl} sx 
	 * @param {num_pxl} sy 
	 * @param {num_pxl} sw 
	 * @param {num_pxl} sh 
	 * @param {num_pxl} dx 
	 * @param {num_pxl} dy 
	 * @param {num_pxl} dw 
	 * @param {num_pxl} dh 
	 */
	drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) {return}

	/** Render draw commands */
	render() {return}

	/** Reset all transformations to default */
	resetTransform() {return}

	/** Restore saved context */
	restore() {return}

	/**
	 * Rotates the transformation matrix
	 * @param {num_rad} angle 
	 */
	rotate(angle) {return}

	/** Saves current context */
	save() {return}

	/**
	 * Scale the transformation matrix
	 * @param {num_frc} a 
	 * @param {num_frc} d 
	 */
	scale(a, d) {return}

	/**
	 * Set current matrix
	 * @param {num} a 
	 * @param {num} b 
	 * @param {num} c 
	 * @param {num} d 
	 * @param {num} tx 
	 * @param {num} ty 
	 */
	setTransform(a, b, c, d, tx, ty) {return}

	/**
	 * Transform the current matrix
	 * @param {num} a 
	 * @param {num} b 
	 * @param {num} c 
	 * @param {num} d 
	 * @param {num} tx 
	 * @param {num} ty 
	 */
	transform(a, b, c, d, tx, ty) {return}

	/**
	 * 'Move' the transformation matrix
	 * @param {num_pxl} tx 
	 * @param {num_pxl} ty 
	 */
	translate(tx, ty) {return}
}

class DsImage {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsImage, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Clears the image content */
	Clear() {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Draws an elliptical arc by specifying the corners of the surrounding rectangle and the angle range of the arc to be drawn
	 * @param {num} x1 `corner 1`
	 * @param {num} y1 `corner 1`
	 * @param {num} x2 `corner 2`
	 * @param {num} y2 `corner 2`
	 * @param {num_deg} start 
	 * @param {num_deg} sweep 
	 */
	DrawArc(x1, y1, x2, y2, start, sweep) {return}

	/**
	 * Draws a Circle
	 * @param {num} x 
	 * @param {num} y 
	 * @param {num} radius `width relative`
	 */
	DrawCircle(x, y, radius) {return}

	/**
	 * Draw gif frame on a specific time
	 * @param {num_mls} ms 
	 */
	DrawFrame(ms) {return}

	/**
	 * Draws an Image:dso-CreateImage
	 * @param {DsImage} image 
	 * @param {num} x 
	 * @param {num} y 
	 * @param {num} [w] 
	 * @param {num} [h] 
	 * @param {num_deg} [angle] 
	 * @param {"ADD"|"CLEAR"|"DARKEN"|"DST"|"DST_ATOP"|"DST_IN"|"DST_OUT"|"DST_OVER"|"LIGHTEN"|"MULTIPLY"|"OVERLAY"|"SCREEN"|"SRC"|"SRC_ATOP"|"SRC_IN"|"SRC_OUT"|"SRC_OVER"|"XOR"} [mode] 
	 */
	DrawImage(image, x, y, w, h, angle, mode) {return}

	/**
	 * Draws an image with a 2d transformation matrix
	 * @param {DsImage} image 
	 * @param {[num, num, num, num, num, num]} matrix 
	 */
	DrawImageMtx(image, matrix) {return}

	/**
	 * Draws a line
	 * @param {num} x1 
	 * @param {num} y1 
	 * @param {num} x2 
	 * @param {num} y2 
	 */
	DrawLine(x1, y1, x2, y2) {return}

	/**
	 * Draws a single pixel
	 * @param {num} x 
	 * @param {num} y 
	 */
	DrawPoint(x, y) {return}

	/**
	 * Draws a rectangle
	 * @param {num} x1 
	 * @param {num} y1 
	 * @param {num} x2 
	 * @param {num} y2 
	 */
	DrawRectangle(x1, y1, x2, y2) {return}

	/**
	 * Draws a vertically centered sample graph
	 * @param {num_int[]} data 
	 * @param {num} range 
	 */
	DrawSamples(data, range) {return}

	/**
	 * Draws a text
	 * @param {str} txt 
	 * @param {num} x 
	 * @param {num} y 
	 */
	DrawText(txt, x, y) {return}

	/** Applies modifications to the image data */
	Flatten() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the name set via SetName
	 * @return {str} 
	 */
	GetName() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns color values of a pixel
	 * @param {num} x 
	 * @param {num} y 
	 * @return {[ num_dhx, num_dhx, num_dhx ]} 
	 */
	GetPixelColor(x, y) {return}

	/**
	 * Returns base64 encoded image data
	 * @param {"rawbase64"|"pngbase64"|"jpgbase64"} format 
	 * @param {num_int} [left] 
	 * @param {num_int} [top] 
	 * @param {num_int} [width=-1] 
	 * @param {num_int} [height=-1] 
	 * @return {str_b64} 
	 */
	GetPixelData(format, left, top, width, height) {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"Image"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Measures the size of a given text
	 * @param {str} txt 
	 * @return {{ width: num_frc, height: num_frc }} { width, height }
	 */
	MeasureText(txt) {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Moves the image content
	 * @param {num} x 
	 * @param {num} y 
	 */
	Move(x, y) {return}

	/** Reset all transformations */
	Reset() {return}

	/**
	 * Rotates the content
	 * @param {num_deg} angle 
	 * @param {num} [pivotX] 
	 * @param {num} [pivotY] 
	 */
	Rotate(angle, pivotX, pivotY) {return}

	/**
	 * Saves the image to a file on the local filesystem
	 * @param {str_ptf} fileName 
	 * @param {num_prc} [quality] `for jpg files`
	 */
	Save(fileName, quality) {return}

	/**
	 * Scales the content by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	Scale(x, y) {return}

	/**
	 * Change the alpha value
	 * @param {num_dhx} alpha 
	 */
	SetAlpha(alpha) {return}

	/**
	 * En/Disables automatic view updates
	 * @param {bin} onoff 
	 */
	SetAutoUpdate(onoff) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Fills the image with a color
	 * @param {str_col} color 
	 */
	SetColor(color) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Change the content to an other image
	 * @param {str_pth|DsImage} image 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"rescale"} [options] 
	 */
	SetImage(image, width, height, options) {return}

	/**
	 * Change the stroke width
	 * @param {num_pxl} width 
	 */
	SetLineWidth(width) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Set a minimum OnTouchMove call timeout
	 * @param {num_mls} milliseconds 
	 */
	SetMaxRate(milliseconds) {return}

	/**
	 * Change the name of the image
	 * @param {str} name 
	 */
	SetName(name) {return}

	/**
	 * Called when image has loaded asynchronously
	 * @param {(this: DsImage, img: DsImage) => void} callback 
	 */
	SetOnLoad(callback) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: DsImage, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Called when user touched the control
	 * @param {(this: DsImage, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: DsImage, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: DsImage, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: DsImage, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Change the paint color
	 * @param {str_col} color 
	 */
	SetPaintColor(color) {return}

	/**
	 * Change the paint style
	 * @param {"Fill"|"Line"} style 
	 */
	SetPaintStyle(style) {return}

	/**
	 * Set base64 encoded pixel data
	 * @param {str_b64} data `<rawbase64>`, `data:image/jpg;base64,<jpgbase64>`, `data:image/png;base64,<pngbase64>`
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {string | ("px"|"icon"|"resize"|"rescale"|"square"|"fix")[]} [options] <br>
 	 * &emsp; `fix` - set bitmap size
	 */
	SetPixelData(data, width, height, options) {return}

	/**
	 * Change the pixel mode for drawing methods
	 * @param {bin} onoff 
	 */
	SetPixelMode(onoff) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change the drawn text size
	 * @param {num} size 
	 */
	SetTextSize(size) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Skews the content
	 * @param {num} x 
	 * @param {num} y 
	 */
	Skew(x, y) {return}

	/**
	 * Applies a transformation matrix to the content
	 * @param {lst} matrix 
	 */
	Transform(matrix) {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsImage) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/** Update the view in disabled AutoUpdate mode */
	Update() {return}
}


class DsLayout {

	/**
	 * Add a control to the layout
	 * @param {dso} child 
	 * @param {num_int} [order] 
	 */
	AddChild(child, order) {return}

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsLayout, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Moves a child to the layout front
	 * @param {dso} child 
	 */
	ChildToFront(child) {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Destroys and removes a child from the layout
	 * @param {dso} child 
	 */
	DestroyChild(child) {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Returns the z order of a child
	 * @param {dso} child 
	 * @return {num_int} 
	 */
	GetChildOrder(child) {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"Layout"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Remove a child from the layout
	 * @param {dso} child 
	 */
	RemoveChild(child) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set margins of top-level children
	 * @param {num} [left=0] 
	 * @param {num} [top=0] 
	 * @param {num} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetChildMargins(left, top, right, bottom, mode) {return}

	/**
	 * Change text size of top-level children
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode='px'] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetChildTextSize(size, mode) {return}

	/**
	 * Apply corner radius to card layouts's
	 * @param {num_pxl} radius 
	 */
	SetCornerRadius(radius) {return}

	/**
	 * Apply shadow to card layouts's
	 * @param {num_pxl} elevation 
	 */
	SetElevation(elevation) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Adjust the placing of contained children
	 * @param {"Left"|"Top"|"Right"|"Bottom"|"VCenter"|"HCenter"|"FillX"|"FillY"|"FillXY"} gravity 
	 */
	SetGravity(gravity) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the user changed a control content
	 * @param {(this: DsLayout, src: dso) => void} callback 
	 */
	SetOnChildChange(callback) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: DsLayout, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Called when user touched the control
	 * @param {(this: DsLayout, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: DsLayout, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: DsLayout, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: DsLayout, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Change the children orientation
	 * @param {"Horizontal"|"Vertical"} orient 
	 */
	SetOrientation(orient) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Enable touch event forwarding
	 * @param {bin} through 
	 */
	SetTouchThrough(through) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsLayout) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsList {

	/**
	 * Adds an entry to the list
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {str|str_ptf} [image] 
	 */
	AddItem(title, body, image) {return}

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsList, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Expand the list to the full height inside scrollers */
	Expand() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Returns item data by a title
	 * @param {str} title 
	 * @return {{ title: str, body: str, image: str_pth }} { title, body, image }
	 */
	GetItem(title) {return}

	/**
	 * Returns item data by an index
	 * @param {num_int} index 
	 * @return {{ title: str, body: str, image: str_pth }} { title, body, image }
	 */
	GetItemByIndex(index) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the list length
	 * @return {num_int} 
	 */
	GetLength() {return}

	/**
	 * Returns the whole list as object
	 * @param {str} delim 
	 * @return {{ title: str, body: str, image: str_pth }[]|str} `title1[DELIM]title2[DELIM]...`
	 */
	GetList(delim) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"List"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Inserts an item into the list
	 * @param {num_int} index 
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {str|str_ptf} [image] 
	 */
	InsertItem(index, title, body, image) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/** Clears the list */
	RemoveAll() {return}

	/**
	 * Removes an item by its title
	 * @param {str} title 
	 */
	RemoveItem(title) {return}

	/**
	 * Removes an item by its index
	 * @param {num_int} index 
	 */
	RemoveItemByIndex(index) {return}

	/**
	 * Scrolls to an item by its title
	 * @param {str} title 
	 * @param {str} [body] 
	 */
	ScrollToItem(title, body) {return}

	/**
	 * Scrolls the list to a specific index
	 * @param {num_int} index 
	 */
	ScrollToItemByIndex(index) {return}

	/**
	 * Highlight an item by its title and body
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {bin} [scroll] 
	 */
	SelectItem(title, body, scroll) {return}

	/**
	 * Highlight an item by its index
	 * @param {num_int} index 
	 * @param {bin} [scroll=false] 
	 */
	SelectItemByIndex(index, scroll) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Change coloumn widths
	 * @param {num_frc} icon 
	 * @param {num_frc} title 
	 * @param {num_frc} [body] 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [mode='px'] 
	 */
	SetColumnWidths(icon, title, body, mode) {return}

	/**
	 * Changes the divider style
	 * @param {num_frc} height 
	 * @param {str_col} [color] 
	 */
	SetDivider(height, color) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * Auto-crop titles to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize1(mode) {return}

	/**
	 * Auto-crop bodys to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize2(mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Change selected title highlight color
	 * @param {str_col} color 
	 */
	SetHiTextColor1(color) {return}

	/**
	 * Change selected body highlight color
	 * @param {str_col} color 
	 */
	SetHiTextColor2(color) {return}

	/**
	 * Change icon margins
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [mode='px'] 
	 */
	SetIconMargins(left, top, right, bottom, mode) {return}

	/**
	 * Change the icon size
	 * @param {num} size 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [mode='px'] 
	 */
	SetIconSize(size, mode) {return}

	/**
	 * Change the content of an element by its title
	 * @param {str} title 
	 * @param {str} newTitle 
	 * @param {str} [newBody] 
	 * @param {str_ptf} [newImage] 
	 */
	SetItem(title, newTitle, newBody, newImage) {return}

	/**
	 * Change the content of an element by its index
	 * @param {num_int} index 
	 * @param {str} newTitle 
	 * @param {str} [newBody] 
	 * @param {str_ptf} [newImage] 
	 */
	SetItemByIndex(index, newTitle, newBody, newImage) {return}

	/**
	 * Set item color
	 * @param {str} name 
	 * @param {str_col} textClr 
	 * @param {str_col} [backClr] 
	 */
	SetItemColor(name, textClr, backClr) {return}

	/**
	 * Set item color by index
	 * @param {num_int} index 
	 * @param {str_col} textClr 
	 * @param {str_col} [backClr] 
	 */
	SetItemColorByIndex(index, textClr, backClr) {return}

	/**
	 * Set the content of the whole list
	 * @param {"title"|"title&colon;icon"|"title&colon;body&colon;icon"} list 
	 * @param {str} [delim=','] 
	 */
	SetList(list, delim) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: DsList, title: str, body?: str, icon?: str, index?: num_int) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: DsList, title: str, body?: str, icon?: str, index?: num_int) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Change the default text color of titles
	 * @param {str_col} color 
	 */
	SetTextColor1(color) {return}

	/**
	 * Change the default text color of bodies
	 * @param {str_col} color 
	 */
	SetTextColor2(color) {return}

	/**
	 * Define distances to other controls
	 * @param {num} [left=0] 
	 * @param {num} [top=0] 
	 * @param {num} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @param {"inner"|"outer"} [options] <br>
 	 * &emsp; `inner` - around each individual title and body\
 	 * &emsp; `outer` - around both title and body together
	 */
	SetTextMargins(left, top, right, bottom, mode, options) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Apply shadow to titles
	 * @param {num_deg} radius 
	 * @param {num_int} [dx=0] 
	 * @param {num_int} [dy=0] 
	 * @param {str_col} [color='black'] 
	 */
	SetTextShadow1(radius, dx, dy, color) {return}

	/**
	 * Apply shadow to bodies
	 * @param {num_deg} radius 
	 * @param {num_int} [dx=0] 
	 * @param {num_int} [dy=0] 
	 * @param {str_col} [color='black'] 
	 */
	SetTextShadow2(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Set title text size
	 * @param {num} size 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [mode='px'] 
	 */
	SetTextSize1(size, mode) {return}

	/**
	 * Set body text size
	 * @param {num} size 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [mode='px'] 
	 */
	SetTextSize2(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsList) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsListDialog {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Hides the control and removes it from the screen */
	Dismiss() {return}

	/**
	 * Returns the control class name
	 * @return {"ListDialog"} 
	 */
	GetType() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: DsListDialog, title: str, checked?: bin) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Change the dialog title
	 * @param {str} title 
	 */
	SetTitle(title) {return}

	/** Set the visibility to “Show” */
	Show() {return}
}


class DsLocator {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Calculate bearing between current and given position
	 * @param {num} latitude 
	 * @param {num} longitude 
	 * @return {num} 
	 */
	GetBearingTo(latitude, longitude) {return}

	/**
	 * Calculate distance between current and given position in meters
	 * @param {num} latitude 
	 * @param {num} longitude 
	 * @return {num} 
	 */
	GetDistanceTo(latitude, longitude) {return}

	/**
	 * Returns the control class name
	 * @return {"Locator"} 
	 */
	GetType() {return}

	/**
	 * Called when some of the values changed
	 * @param {(this: DsLocator, data: { provider: str, latitude: num, longitude: num, speed: num, bearing: num, altitude: num, accuracy: num_met }, time: num_mls) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Locator update frequency in seconds
	 * @param {num_sec} rate 
	 */
	SetRate(rate) {return}

	/** Start locator */
	Start() {return}

	/** Stop locator */
	Stop() {return}
}


class DsMediaPlayer {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Close the media player */
	Close() {return}

	/**
	 * Get the song length in seconds
	 * @return {num_sec} 
	 */
	GetDuration() {return}

	/**
	 * Get  elapsed playtime in seconds
	 * @return {num_sec} 
	 */
	GetPosition() {return}

	/**
	 * Returns the control class name
	 * @return {"MediaPlayer"} 
	 */
	GetType() {return}

	/**
	 * Returns if the player is looping
	 * @return {bin} 
	 */
	IsLooping() {return}

	/**
	 * Get current playing state
	 * @return {bin} 
	 */
	IsPlaying() {return}

	/**
	 * Returns if player is useable yet
	 * @return {bin} 
	 */
	IsReady() {return}

	/** Pause the current playing song */
	Pause() {return}

	/** Play the current loaded song from the last paused time or from a given start time in in seconds */
	Play() {return}

	/**
	 * Seek the player to a given time in seconds
	 * @param {num_flt} time 
	 */
	SeekTo(time) {return}

	/**
	 * Load a sound file to the player
	 * @param {str_ptf} file 
	 */
	SetFile(file) {return}

	/**
	 * Set looping mode
	 * @param {bin} loop 
	 */
	SetLooping(loop) {return}

	/**
	 * Called when the player has finished playing a track
	 * @param {(this: DsMediaPlayer) => void} callback 
	 */
	SetOnComplete(callback) {return}

	/**
	 * Called when the player is ready for use
	 * @param {(this: DsMediaPlayer) => void} callback 
	 */
	SetOnReady(callback) {return}

	/**
	 * Called when ply.Seek has finished
	 * @param {(this: DsMediaPlayer) => void} callback 
	 */
	SetOnSeekDone(callback) {return}

	/**
	 * Set the playback speed
	 * @param {num_fac} speed 
	 */
	SetSpeed(speed) {return}

	/**
	 * Set the playback pitch
	 * @param {num_fac} pitch 
	 */
	SetPitch(pitch) {return}

	/**
	 * Set the playback volume
	 * @param {num_prc} left 
	 * @param {num_prc} right 
	 */
	SetVolume(left, right) {return}

	/** Stop playing a song */
	Stop() {return}
}


class DsMediaStore {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Load the album art to an image
	 * @param {DsImage} image 
	 * @param {num_int} id 
	 * @param {"internal"|"external"} [options] 
	 * @return {bin} 
	 */
	GetAlbumArt(image, id, options) {return}

	/**
	 * Load the song art to an image
	 * @param {DsImage} image 
	 * @param {num_int} id 
	 * @param {"internal"|"external"} [options] 
	 * @return {bin} 
	 */
	GetSongArt(image, id, options) {return}

	/**
	 * Returns the control class name
	 * @return {"MediaStore"} 
	 */
	GetType() {return}

	/**
	 * Search for media albums
	 * @param {str_sql} [filter] 
	 * @param {"album"|"_id"|"albumArt"|"artist"|"numSongs"|"firstYear"|"lastYear"} [sort] coloumns
	 * @param {"internal"|"external"} [options] 
	 */
	QueryAlbums(filter, sort, options) {return}

	/**
	 * Search for media artists
	 * @param {str_sql} [filter] 
	 * @param {"_id"|"artist"|"numAlbums"|"numTracks"|""} [sort] coloumns
	 * @param {"internal"|"external"} [options] 
	 */
	QueryArtists(filter, sort, options) {return}

	/**
	 * Search for media
	 * @param {str_sql} [filter] 
	 * @param {string | ("title"|"_id"|"duration"|"size"|"uri"|"album"|"albumID"|"artist"|"artistId")[]} [sort] coloumns
	 * @param {"internal"|"external"} [options] 
	 */
	QueryMedia(filter, sort, options) {return}

	/**
	 * Called when album query has finished
	 * @param {(this: DsMediaStore, result: { album: str, id: num_int, albumArt: str_pth, artist: str, numSongs: num_int, firstYear: str, lastYear: str }[]) => void} callback 
	 */
	SetOnAlbumsResult(callback) {return}

	/**
	 * Called when artist query has finished
	 * @param {(this: DsMediaStore, result: { id: num_int, artist: str, numAlbums: num_int, numTracks: num_int }[]) => void} callback 
	 */
	SetOnArtistsResult(callback) {return}

	/**
	 * Called when media query has finished
	 * @param {(this: DsMediaStore, result: { title: str, id: num_int, duration: num_mls, size: num_byt, uri: str_uri, album: str, albumID: num_int, artist: str, artistId: num_int }[]) => void} callback 
	 */
	SetOnMediaResult(callback) {return}
}


class DsNetClient {

	/**
	 * Calls the OnReceive callback for incoming TCP data
	 * @param {str_url} server 
	 * @param {num_int} [port=80] 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 */
	AutoReceive(server, port, mode) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Closes the NetClient socket */
	Close() {return}

	/**
	 * Connect to a server
	 * @param {str_url} address 
	 * @param {num_int} [port=80] 
	 */
	Connect(address, port) {return}

	/** Disconnect from server */
	Disconnect() {return}

	/**
	 * Downloads a file via TCP from the server
	 * @param {str_url} file 
	 */
	DownloadFile(file) {return}

	/**
	 * Returns the broadcast address of UDP connections
	 * @return {str} 
	 */
	GetBroadcastAddress() {return}

	/**
	 * Returns the control class name
	 * @return {"NetClient"} 
	 */
	GetType() {return}

	/**
	 * Get NetClient connected state
	 * @return {bin} 
	 */
	IsConnected() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Receive data as bytes
	 * @param {"Int"|"Hex"} mode 
	 * @return {num_byt[]} 
	 */
	ReceiveBytes(mode) {return}

	/**
	 * Receive an UDP Datagram
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 * @param {num_int} [port=80] 
	 * @param {num} [timeout] 
	 * @param {str_com} [options] `<BUFSIZ>`\
 	 * &emsp; `BUFSIZ` - “1k,2k,4k,8k,16k,32k,64k”
	 * @return {str} 
	 */
	ReceiveDatagram(mode, port, timeout, options) {return}

	/**
	 * Receive UDP datagrams
	 * @param {num_int} [port=80] 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 * @param {str_com} [options] `<BUFSIZ>`\
 	 * &emsp; `BUFSIZ` - “1k,2k,4k,8k,16k,32k,64k”
	 */
	ReceiveDatagrams(port, mode, options) {return}

	/**
	 * Receive a file via TCP from the server
	 * @param {str} file 
	 * @param {num} [wait] 
	 * @return {str} 
	 */
	ReceiveFile(file, wait) {return}

	/**
	 * Receive text over TCP
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 * @return {str} 
	 */
	ReceiveText(mode) {return}

	/**
	 * Receive video over UDP
	 * @param {num} port 
	 * @param {DsImage} img 
	 * @return {str} 
	 */
	ReceiveVideoStream(port, img) {return}

	/**
	 * Send bytes over TCP connection
	 * @param {num_byt[]|string | ("bytes")[]} data <br>
 	 * &emsp; `bytes` - hexadecimal 00..FF
	 * @param {"Int"|"Hex"} [mode] 
	 */
	SendBytes(data, mode) {return}

	/**
	 * Send an UDP Datagram
	 * @param {str} data 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 * @param {str_url} [address] 
	 * @param {num_int} [port] 
	 * @param {"Text"|"Hex"|"Bytes"} [options] 
	 */
	SendDatagram(data, mode, address, port, options) {return}

	/**
	 * Define data format for outgoing data
	 * @param {str} [mode] `Hex`, `Int`, `Text`, `<encoding>`\
 	 * &emsp; `Hex` - comma separated text value\
 	 * &emsp; `Int` - comma separated byte numbers\
 	 * &emsp; `Text` - string of text characters\
 	 * &emsp; `encoding` - UTF-16L/BE
	 */
	SetDataMode(mode) {return}

	/**
	 * Specify how to split received data
	 * @param {"End"|"Start-End"|"Size"} mode 
	 * @param {str|num_int} [p2] 
	 * @param {str|num_int} [p3] 
	 */
	SetSplitMode(mode, p2, p3) {return}

	/**
	 * Sends text over TCP connection
	 * @param {str} text 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 */
	SendText(text, mode) {return}

	/**
	 * Called when TCP connected or failed to connect to a server
	 * @param {(this: DsNetClient, connected: bin) => void} callback 
	 */
	SetOnConnect(callback) {return}

	/**
	 * Called when a file download has finished
	 * @param {(this: DsNetClient, something: num_int) => void} callback 
	 */
	SetOnDownload(callback) {return}

	/**
	 * Called when a TCP NetClient received some data via AutoReceive
	 * @param {(this: DsNetClient, address: str) => void} callback 
	 */
	SetOnReceive(callback) {return}

	/**
	 * Timeout between two receive checks
	 * @param {num_sec} seconds 
	 */
	SetTimeout(seconds) {return}

	/**
	 * Wake up devices if they are configured to
	 * @param {str} ip 
	 * @param {str} [mac] 
	 */
	WakeOnLan(ip, mac) {return}
}


class DsNode {

	/**
	 * Returns the plugin version
	 * @return {num} 
	 */
	GetVersion() {return}

	/**
	 * Start the main Node process
	 * @param {lst} [args] argument array
	 * @param {lst} [paths] 
	 */
	Start(args, paths) {return}

	/**
	 * Define a callback function which is called when the Node component is ready for use
	 * @param {(this: DsNode) => void} cb 
	 */
	SetOnReady(cb) {return}

	/**
	 * Define a callback function which is called when the node process has exited
	 * @param {(this: DsNode) => void} cb 
	 */
	SetOnDone(cb) {return}

	/**
	 * Define a callback function which is called when the node process prints to stdout
	 * @param {(this: DsNode, stdout: str) => void} cb 
	 */
	SetOnOutput(cb) {return}

	/**
	 * Define a callback function which is called when the node process prints to stderr
	 * @param {(this: DsNode, msg: str) => void} cb 
	 */
	SetOnError(cb) {return}

	/**
	 * Define a callback function which is called when a system/pipe message was received from the node process
	 * @param {(this: DsNode, msg: str) => void} cb 
	 */
	SetOnMessage(cb) {return}

	/**
	 * Set a process environment variable
	 * @param {str} name 
	 * @param {str} val 
	 */
	SetEnv(name, val) {return}

	/**
	 * Get a process environment variable
	 * @param {str} name 
	 * @return {str} 
	 */
	GetEnv(name) {return}

	/**
	 * Open a message pipe
	 * @param {bin} isCmd 
	 */
	OpenMsgPipe(isCmd) {return}

	/**
	 * Close a message pipe
	 * @param {bin} isCmd 
	 */
	CloseMsgPipe(isCmd) {return}

	/**
	 * Send a message over the message pipe
	 * @param {str} msg 
	 * @param {bin} [isCmd=false] 
	 */
	SendPipeMsg(msg, isCmd) {return}

	/**
	 * Send a message to the running node process
	 * @param {str} msg 
	 */
	SendMessage(msg) {return}

	/**
	 * Returns if the Node component is ready for use
	 * @return {bin} 
	 */
	IsReady() {return}

	/**
	 * Returns if the node process exited
	 * @return {bin} 
	 */
	IsDone() {return}

	/**
	 * Run a NodeJS source file
	 * @param {str_pth} file 
	 * @param {str} [id] `Context ID`
	 * @param {str_lst} [newPaths] 
	 */
	Run(file, id, newPaths) {return}

	/**
	 * Execute a line of code in the node process
	 * @param {str_jsc} js 
	 * @param {str} [id] `Context ID`
	 */
	Execute(js, id) {return}

	/**
	 * Install a node module from npmjs.org
	 * @param {"name"|"name^ver"} name 
	 * @param {str} [dir] `optional target directory`
	 */
	AddModule(name, dir) {return}
}


class DsNotification {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Cancel a notification with a specific id
	 * @param {str} [id] `id`, `*`
	 */
	Cancel(id) {return}

	/**
	 * Returns the control class name
	 * @return {"Notification"} 
	 */
	GetType() {return}

	/**
	 * Listen for any notifications
	 * @param {"CheckPerms"} [options] 
	 */
	Listen(options) {return}

	/**
	 * Send the notification to the user
	 * @param {str} [id] 
	 */
	Notify(id) {return}

	/**
	 * Set a large image in the notification
	 * @param {str_ptf} image 
	 */
	SetLargeImage(image) {return}

	/**
	 * Activate device notification LEDs
	 * @param {str_col} color 
	 * @param {num_mls} [onMs] 
	 * @param {num_mls} [offMs] 
	 */
	SetLights(color, onMs, offMs) {return}

	/**
	 * Set notification texts
	 * @param {str} ticker 
	 * @param {str} [title] 
	 * @param {str} [text] 
	 * @param {str} [extra] `Add multiline text in your notification.`
	 */
	SetMessage(ticker, title, text, extra) {return}

	/**
	 * Called when notification intercepted
	 * @param {(this: DsNotification, source: str, title: str, message: str, extra: str, type: "Normal") => void} callback 
	 */
	SetOnNotify(callback) {return}

	/**
	 * Set a small image icon
	 * @param {str_ptf} image 
	 */
	SetSmallImage(image) {return}
}


class DsNxt {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Play frequency tone
	 * @param {num_hrz} frequency 
	 * @param {num_mls} [duration] 
	 */
	Beep(frequency, duration) {return}

	/**
	 * Brakes motors smoothly
	 * @param {"A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC"} motors 
	 */
	Brake(motors) {return}

	/**
	 * Check if device is connected to NXT
	 * @return {bin} 
	 */
	CheckConnection() {return}

	/**
	 * Connect to NXT
	 * @param {str} name 
	 */
	Connect(name) {return}

	/** Disconnect NXT */
	Disconnect() {return}

	/**
	 * Commands NXT to drive motors
	 * @param {"A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC"} motors 
	 * @param {num_prc} power 
	 * @param {num_prc} [rotations] `-100..100`
	 * @param {str} [options] 
	 */
	Drive(motors, power, rotations, options) {return}

	/**
	 * Find first program file
	 * @param {str} pattern 
	 * @return {str} 
	 */
	FileFindFirst(pattern) {return}

	/**
	 * Find next program file on the NXT
	 * @param {str} handle 
	 * @return {str} 
	 */
	FileFindNext(handle) {return}

	/**
	 * Returns NXT Bt address
	 * @return {str} 
	 */
	GetBtAddress() {return}

	/**
	 * Returns NXT Bt name
	 * @return {str} 
	 */
	GetBtName() {return}

	/**
	 * Returns the current running program name
	 * @return {str} 
	 */
	GetCurrentProgram() {return}

	/**
	 * Returns a new wheel encoder value
	 * @param {"A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC"} motor 
	 * @return {num_int} 
	 */
	GetRotationCount(motor) {return}

	/**
	 * Returns the control class name
	 * @return {"Nxt"} 
	 */
	GetType() {return}

	/**
	 * Checks if bt is enabled
	 * @return {bin} 
	 */
	IsBluetoothEnabled() {return}

	/**
	 * Checks if NXT is connected
	 * @return {bin} 
	 */
	IsConnected() {return}

	/**
	 * Checks if bt is enabled
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Check if a motor is powered
	 * @param {"A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC"} motor 
	 * @return {bin} 
	 */
	IsMotorIdle(motor) {return}

	/**
	 * Checks if the device is paired with an other
	 * @param {str} name 
	 * @return {bin} 
	 */
	IsPaired(name) {return}

	/**
	 * Play a sound file a certain amount of times
	 * @param {str_ptf} file 
	 * @param {num_int} [repeat=0] 
	 */
	PlaySoundFile(file, repeat) {return}

	/**
	 * Read a color sensor value on the input where the sensor is plugged into
	 * @param {num_int} input 
	 * @param {"ColorDetect"|"LightSense"|"RedSense"|"GreenSense"|"BlueSense"} [mode] 
	 * @return {num_int} `1..6 or 0..1023`
	 */
	ReadColorSensor(input, mode) {return}

	/**
	 * Get measured ultrasinic distance in cm
	 * @param {num_int} input `1..4`
	 * @return {num_flt} 
	 */
	ReadDistanceSensor(input) {return}

	/**
	 * Measures the light intensity
	 * @param {num_int} input `1..4`
	 * @param {bin} [active] 
	 * @return {num_int} `0..100`
	 */
	ReadLightSensor(input, active) {return}

	/**
	 * Reads a message from the NXT brick's mail box
	 * @param {num_int} mailbox `1..10`
	 * @param {"Text"|"Number"|"Logic"} [type] 
	 * @param {bin} [remove] 
	 * @return {str} 
	 */
	ReadMail(mailbox, type, remove) {return}

	/**
	 * Measure the sound pressure level
	 * @param {num_int} input `1..4`
	 * @param {"DB"|"DbA"} [mode] <br>
 	 * &emsp; `DB` - Decibels\
 	 * &emsp; `DbA` - A-weighted Decibels
	 * @return {num_flt} 
	 */
	ReadSoundSensor(input, mode) {return}

	/**
	 * Check if the touch sensor is pressed
	 * @param {num_int} input `1..4`
	 * @return {bin} 
	 */
	ReadTouchSensor(input) {return}

	/** Request enabling bluetooth if it isn't */
	RequestEnable() {return}

	/**
	 * Reset wheel encoder offset to 0
	 * @param {"A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC"} motors 
	 */
	Reset(motors) {return}

	/**
	 * Sends a message to the NXT brick's mail box
	 * @param {num_int} mailbox `1..10`
	 * @param {"Text"|"Number"|"Logic"} [type] 
	 * @param {str|num_int} [message] 
	 */
	SendMail(mailbox, type, message) {return}

	/**
	 * Inverts the direction of motor commands
	 * @param {bin} invert 
	 */
	SetInvert(invert) {return}

	/**
	 * Change sensor LED color
	 * @param {num_int} input `1..4`
	 * @param {"White"|"Red"|"Green"|"Blue"|"Off"} color 
	 */
	SetLampColor(input, color) {return}

	/**
	 * Called when NXT connection established or failed
	 * @param {(this: DsNxt, connected: bin) => void} callback 
	 */
	SetOnConnect(callback) {return}

	/**
	 * Called when bt connection established
	 * @param {(this: DsNxt) => void} callback 
	 */
	SetOnConnected(callback) {return}

	/** Shows a list of paired NXT devices to connect to */
	ShowDevices() {return}

	/**
	 * Starts an NXT-G program on the NXT brick if available
	 * @param {str_pth} name 
	 */
	StartProgram(name) {return}

	/**
	 * Stop powering some motors
	 * @param {"A"|"B"|"C"|"AB"|"AC"|"BC"|"ABC"} motors 
	 */
	Stop(motors) {return}

	/** Stops the current running program */
	StopProgram() {return}

	/**
	 * Convert color number to its name
	 * @param {num_int} val `1..6`
	 * @return {"black"|"blue"|"green"|"yellow"|"red"|"white"} 
	 */
	ToColorName(val) {return}
}


class DsOverlay {

	/**
	 * Adds layout to overlay
	 * @param {DsLayout} layout 
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {"px"} [options] 
	 */
	AddLayout(layout, left, top, options) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns the control class name
	 * @return {"Overlay"} 
	 */
	GetType() {return}

	/**
	 * Remove layout from overlay
	 * @param {DsLayout} layout 
	 */
	RemoveLayout(layout) {return}

	/**
	 * Changes a child layout position
	 * @param {DsLayout} layout 
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {"px"} [options] 
	 */
	SetPosition(layout, left, top, options) {return}
}


class DsPhoneState {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Returns the control class name
	 * @return {"PhoneState"} 
	 */
	GetType() {return}

	/**
	 * Called when a phone state has changed
	 * @param {(this: DsPhoneState, type: "CellLocation"|"DataConnection"|"DataActivity"|"CallState"|"ServiceState"|"SignalStrength"|"CallForwarding"|"MessageWaiting", data: all) => void} callback 
	 */
	SetOnChange(callback) {return}

	/** Start listening */
	Start() {return}

	/** Stop listening */
	Stop() {return}
}


class DsPlayStore {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Get product info from Google Play
	 * @param {str} prodIDs 
	 * @param {(this: DsPlayStore, items: { skuDetailsToken: str, productId: str, type: str, price: str, price_amount_micros: num_int, price_currency_code: str, title: str, description: str }[]) => void} callback 
	 * @param {"IAP"|"SUBS"} [options] <br>
 	 * &emsp; `IAP` - In-App purchases\
 	 * &emsp; `SUBS` - subscriptions
	 */
	GetBillingInfo(prodIDs, callback, options) {return}

	/**
	 * Get purchased items from Google Play
	 * @param {(this: DsPlayStore, items: { skuDetailsToken: str, productId: str, type: str, price: str, price_amount_micros: num_int, price_currency_code: str, title: str, description: str }[]) => void} callback 
	 * @param {"SUBS"} [options] 
	 */
	GetPurchases(callback, options) {return}

	/**
	 * Returns the control class name
	 * @return {"PlayStore"} 
	 */
	GetType() {return}

	/**
	 * Purchase an item on Google Play
	 * @param {str} prodID 
	 * @param {str} token 
	 * @param {(this: DsPlayStore, prodId: str, orderId: str, purchToken: str, devToken: str, packageName: str) => void} [callback] 
	 * @param {"SUBS"} [options] 
	 */
	Purchase(prodID, token, callback, options) {return}
}


class DsScroller {

	/**
	 * Add a layout control
	 * @param {DsLayout} layout 
	 */
	AddChild(layout) {return}

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsScroller, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/**
	 * Devil rises and takes a child with him to hell
	 * @param {DsLayout} layout 
	 */
	DestroyChild(layout) {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get horizontal scroll bar position
	 * @return {num_frc} 
	 */
	GetScrollX() {return}

	/**
	 * Get vertical scroll bar position
	 * @return {num_frc} 
	 */
	GetScrollY() {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"Scroller"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Remove a scroller layout
	 * @param {dso} child 
	 */
	RemoveChild(child) {return}

	/**
	 * Scroll relative to the current position
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 */
	ScrollBy(x, y) {return}

	/**
	 * Scrolls to a given position
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 */
	ScrollTo(x, y) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsScroller) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsSeekBar {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsSeekBar, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"SeekBar"} 
	 */
	GetType() {return}

	/**
	 * Get current value
	 * @return {num} 
	 */
	GetValue() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @param {str} [options] 
	 */
	SetColorFilter(color, mode, options) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Set rate of OnChange calls
	 * @param {num_mls} rate 
	 */
	SetMaxRate(rate) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: DsSeekBar, value: num) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: DsSeekBar, value: num) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Set value range
	 * @param {num} range 
	 */
	SetRange(range) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set current seekbar value
	 * @param {num} val 
	 */
	SetValue(val) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsSeekBar) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsSensor {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Get first value of a sensor
	 * @return {num} 
	 */
	GetAzimuth() {return}

	/**
	 * Returns a list of builtin sensors in your device
	 * @return {str_com} 
	 */
	GetNames() {return}

	/**
	 * Get second value of a sensor
	 * @return {num} 
	 */
	GetPitch() {return}

	/**
	 * Get third value of a sensor
	 * @return {num} 
	 */
	GetRoll() {return}

	/**
	 * Returns the control class name
	 * @return {"Sensor"} 
	 */
	GetType() {return}

	/**
	 * Get all values from sensor
	 * @return {[ num_mls, num, num, num ]} 
	 */
	GetValues() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set maximum OnChange rate
	 * @param {num_mls} rate 
	 */
	SetMaxRate(rate) {return}

	/**
	 * Set minimum value difference which triggers OnChange
	 * @param {num} min 
	 */
	SetMinChange(min) {return}

	/**
	 * Called when a sensor value has changed
	 * @param {(this: DsSensor, first: num, second: num, third: num, time: num_mls) => void} callback 
	 */
	SetOnChange(callback) {return}

	/** Start the sensor */
	Start() {return}

	/** Stop the sensor */
	Stop() {return}
}


class DsService {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Returns the control class name
	 * @return {"Service"} 
	 */
	GetType() {return}

	/**
	 * Send message to service
	 * @param {str} message 
	 */
	SendMessage(message) {return}

	/** Run service in background */
	SetInBackground() {return}

	/**
	 * Run service in foreground
	 * @param {str} title 
	 * @param {str} [text] 
	 * @param {str_ptf} [largeIcon] 
	 * @param {str_ptf} [smallIcon] 
	 * @param {"none"|"min"|"low"|"high"} [importance] 
	 */
	SetInForeground(title, text, largeIcon, smallIcon, importance) {return}

	/**
	 * Called when service sent a message
	 * @param {(this: DsService, message: str) => void} callback 
	 */
	SetOnMessage(callback) {return}

	/** Stop service */
	Stop() {return}
}


class DsSMS {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Returns the control class name
	 * @return {"SMS"} 
	 */
	GetType() {return}

	/**
	 * Send SMS message
	 * @param {str} number 
	 * @param {str} message 
	 * @param {"MultiPart"} [options] <br>
 	 * &emsp; `MultiPart` - multi-part SMS messaging
	 */
	Send(number, message, options) {return}

	/**
	 * Called when user received a SMS
	 * @param {(this: DsSMS, message: str) => void} callback 
	 */
	SetOnMessage(callback) {return}

	/**
	 * Called when a status has changed
	 * @param {(this: DsSMS, status: str) => void} callback 
	 */
	SetOnStatus(callback) {return}
}


class DsSpeechRec {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Stop recognition */
	Cancel() {return}

	/**
	 * Returns the RMS value (Root Mean Square) from the audio recorder
	 * @return {num_flt} 
	 */
	GetRMS() {return}

	/**
	 * Returns the control class name
	 * @return {"SpeechRec"} 
	 */
	GetType() {return}

	/**
	 * Check whether SpeechRec is listening
	 * @return {bin} 
	 */
	IsListening() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/** Start speech recognition */
	Recognize() {return}

	/**
	 * Called when an error occured
	 * @param {(this: DsSpeechRec, error: str) => void} callback 
	 */
	SetOnError(callback) {return}

	/**
	 * Called when SpeechRec is ready for use
	 * @param {(this: DsSpeechRec) => void} callback 
	 */
	SetOnReady(callback) {return}

	/**
	 * Called when text was recognized
	 * @param {(this: DsSpeechRec, result: str) => void} callback 
	 */
	SetOnResult(callback) {return}

	/** Stop recording and start recognition */
	Stop() {return}
}


class DsSpinner {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsSpinner, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"Spinner"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Change current shown item
	 * @param {str} item 
	 */
	SelectItem(item) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change spinner list
	 * @param {str_com} list 
	 * @param {str} [delim=','] 
	 */
	SetList(list, delim) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when value changed by the user
	 * @param {(this: DsSpinner, item: str, index: num_int) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Define a callback function for touch events
	 * @param {(this: DsSpinner) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change current shown item
	 * @param {str} item 
	 */
	SetText(item) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsSpinner) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsSwitch {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsSwitch, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Checks if switch is activated
	 * @return {bin} 
	 */
	GetChecked() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"Switch"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Change the checked state
	 * @param {bin} checked 
	 */
	SetChecked(checked) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when user touched the control
	 * @param {(this: DsSwitch, value: bin) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Customize the button looks
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsSwitch) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsSynth {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Returns the control class name
	 * @return {"Synth"} 
	 */
	GetType() {return}

	/**
	 * Play a sequence of notes
	 * @param {str_com} tune `note1:duration1,note2:duration2,...`
	 */
	PlayMidiTune(tune) {return}

	/**
	 * Play a single note
	 * @param {num_int} note `0..125`
	 */
	PlayNote(note) {return}

	/**
	 * Plays a frequency tone
	 * @param {num} frequency frequency
	 * @param {num_mls} duration 
	 */
	PlayTone(frequency, duration) {return}

	/**
	 * Change delay effect difference
	 * @param {num_mls} milliseconds 
	 */
	SetDelay(milliseconds) {return}

	/**
	 * Enables the delay effect (plays every note a second time after a given delay)
	 * @param {bin} enable 
	 */
	SetDelayEnabled(enable) {return}

	/**
	 * Adds a delay feedback effect
	 * @param {num_frc} feedback 
	 */
	SetFeedback(feedback) {return}

	/**
	 * Set current frequency
	 * @param {num} frequency 
	 */
	SetFrequency(frequency) {return}

	/**
	 * Set whole note length
	 * @param {num_sec} duration 
	 */
	SetNoteLength(duration) {return}

	/**
	 * Initializes phaser
	 * @param {num_frc} drywet 
	 * @param {num} rate 
	 * @param {num} range 
	 * @param {num_frc} feedback 
	 */
	SetPhaser(drywet, rate, range, feedback) {return}

	/**
	 * Control unprocessed/delayed signals ratio
	 * @param {num_frc} drywet 
	 */
	SetPhaserDryWet(drywet) {return}

	/**
	 * En/Disables phaser effect
	 * @param {bin} enable 
	 */
	SetPhaserEnabled(enable) {return}

	/**
	 * Enables phaser feedback
	 * @param {num_frc} feedback 
	 */
	SetPhaserFeedback(feedback) {return}

	/**
	 * Set sweep range
	 * @param {num} range 
	 */
	SetPhaserRange(range) {return}

	/**
	 * Set sweeps per second
	 * @param {num} rate 
	 */
	SetPhaserRate(rate) {return}

	/**
	 * Initializes the VCA
	 * @param {num_mls} attack 
	 * @param {num_mls} decay 
	 * @param {num_frc} sustain 
	 * @param {num_mls} release 
	 */
	SetVca(attack, decay, sustain, release) {return}

	/**
	 * Set a time of maximum volume
	 * @param {num_mls} attack 
	 */
	SetVcaAttack(attack) {return}

	/**
	 * Controls time when volume is lowered to sustain
	 * @param {num_mls} decay 
	 */
	SetVcaDecay(decay) {return}

	/**
	 * En/Disables VCA effect
	 * @param {bin} enable 
	 */
	SetVcaEnabled(enable) {return}

	/**
	 * Set a time of minimum volume
	 * @param {num} release mls
	 */
	SetVcaRelease(release) {return}

	/**
	 * Set a basis volume
	 * @param {num_frc} sustain 
	 */
	SetVcaSustain(sustain) {return}

	/**
	 * Initialize the VCF effect
	 * @param {num_mls} attack 
	 * @param {num_mls} decay 
	 * @param {num_frc} sustain 
	 * @param {num_mls} release 
	 * @param {num} cuttoff frequency
	 * @param {num_frc} resonance 
	 * @param {num_frc} [depth] 
	 */
	SetVcf(attack, decay, sustain, release, cuttoff, resonance, depth) {return}

	/**
	 * Set a time of maximum frequencies
	 * @param {num_mls} attack 
	 */
	SetVcfAttack(attack) {return}

	/**
	 * Set a maximum frequency which will never be exceeded
	 * @param {num} cuttoff frequency
	 */
	SetVcfCutoff(cuttoff) {return}

	/**
	 * Controls time when frequency is lowered to sustain
	 * @param {num_mls} decay 
	 */
	SetVcfDecay(decay) {return}

	/**
	 * Set filter strength
	 * @param {num_frc} depth 
	 */
	SetVcfDepth(depth) {return}

	/**
	 * En/Disables VCF effect
	 * @param {bin} enable 
	 */
	SetVcfEnabled(enable) {return}

	/**
	 * Set a time of minimum frequency
	 * @param {num_mls} release 
	 */
	SetVcfRelease(release) {return}

	/**
	 * Adds a resonance tone
	 * @param {num_frc} resonance 
	 */
	SetVcfResonance(resonance) {return}

	/**
	 * Set a basis frequency
	 * @param {num_frc} sustain 
	 */
	SetVcfSustain(sustain) {return}

	/**
	 * Set master volume
	 * @param {num_frc} left 
	 * @param {num_frc} right 
	 */
	SetVolume(left, right) {return}

	/**
	 * Set the wave shape of the synthesizer
	 * @param {"Sin"|"Saw"|"Square"|"White"} shape 
	 */
	SetWaveShape(shape) {return}

	/** Start playing */
	Start() {return}

	/** Stop playing */
	Stop() {return}
}


class DsSysProc {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Read from stderr
	 * @param {num_int} maxLines 
	 * @param {string | ("nowait")[]} [options] <br>
 	 * &emsp; `nowait` - dont wait for input
	 */
	Err(maxLines, options) {return}

	/**
	 * Returns the control class name
	 * @return {"SysProc"} 
	 */
	GetType() {return}

	/**
	 * Read from stdin
	 * @param {num_int} maxLines 
	 * @param {string | ("nowait")[]} [options] <br>
 	 * &emsp; `nowait` - dont wait for input
	 */
	In(maxLines, options) {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Write to stdout
	 * @param {str} command 
	 */
	Out(command) {return}

	/**
	 * Read first byte of a file
	 * @param {str_ptf} file 
	 * @return {num_byt} 
	 */
	ReadFileAsByte(file) {return}

	/**
	 * Called when stderr changed
	 * @param {(this: DsSysProc, data: str) => void} callback 
	 */
	SetOnError(callback) {return}

	/**
	 * Called when stdout changed
	 * @param {(this: DsSysProc, data: str) => void} callback 
	 */
	SetOnInput(callback) {return}

	/**
	 * Write binary data to file
	 * @param {str_ptf} file 
	 * @param {str} data 
	 */
	WriteToFile(file, data) {return}
}


class DsTabs {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsTabs, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get current tab name
	 * @return {str} 
	 */
	GetCurrentTabName() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get tab content layout
	 * @param {str} name 
	 * @return {DsLayout} 
	 */
	GetLayout(name) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"Tabs"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Apply corner radius to card layouts's
	 * @param {num_pxl} radius 
	 */
	SetCornerRadius(radius) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when current tab changed
	 * @param {(this: DsTabs, name: str) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Called when the user changed a control content
	 * @param {(this: DsTabs, src: dso) => void} callback 
	 */
	SetOnChildChange(callback) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: DsTabs, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Called when user touched the control
	 * @param {(this: DsTabs, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set text size
	 * @param {num} size 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Enable touch event forwarding
	 * @param {bin} through 
	 */
	SetTouchThrough(through) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Switch current tab
	 * @param {str} name 
	 */
	ShowTab(name) {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsTabs) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	parent = {
		/**
		 * Add a new tab
		 * @param {str} name 
		 */
		AddTab(name) {return}
	}
}


class DsText {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsText, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Return html formatted text
	 * @return {str_htm} 
	 */
	GetHtml() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get amount of text lines
	 * @return {num_int} 
	 */
	GetLineCount() {return}

	/**
	 * Get the start character index of a line
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Get line top position on screen
	 * @param {num_int} line 
	 * @return {num_frc} 
	 */
	GetLineTop(line) {return}

	/**
	 * Get amount of lines fitting in the control
	 * @return {num_int} 
	 */
	GetMaxLines() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"Text"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Append line to the text
	 * @param {str} message 
	 * @param {string | ("Clear"|"Red"|"Green"|"Blue")[]} [options] <br>
 	 * &emsp; `Clear` - Clears the log before writing
	 */
	Log(message, options) {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 */
	SetEllipsize(mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 */
	SetFontFile(file) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Set maximum log length
	 * @param {num_int} maxLines 
	 */
	SetLog(maxLines) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when the control was pressed for eons
	 * @param {(this: DsText, src: dso) => void} callback 
	 */
	SetOnLongTouch(callback) {return}

	/**
	 * Called when user touched the control
	 * @param {(this: DsText, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when the user starts touching the control
	 * @param {(this: DsText, event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchDown(callback) {return}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(this: DsText, event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchMove(callback) {return}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(this: DsText, event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouchUp(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 */
	SetTextShadow(radius, dx, dy, color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 */
	SetTouchable(touchable) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsText) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsTextEdit {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsTextEdit, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clear undo/redo history */
	ClearHistory() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the current cursor line index
	 * @return {num_int} 
	 */
	GetCursorLine() {return}

	/**
	 * Get the cursor position in the text
	 * @return {num_int} 
	 */
	GetCursorPos() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Return html formatted text
	 * @return {str_htm} 
	 */
	GetHtml() {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Get amount of text lines
	 * @return {num_int} 
	 */
	GetLineCount() {return}

	/**
	 * Get the start character index of a line
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {return}

	/**
	 * Get line top position on screen
	 * @param {num_int} line 
	 * @return {num_frc} 
	 */
	GetLineTop(line) {return}

	/**
	 * Get amount of lines fitting in the control
	 * @return {num_int} 
	 */
	GetMaxLines() {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {return}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {return}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"TextEdit"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Insert text at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 */
	InsertText(text, start) {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/** Redo an undone action */
	Redo() {return}

	/**
	 * Replace a range of the text with a string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 */
	ReplaceText(text, start, end) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Change cursor color
	 * @param {str_col} color 
	 */
	SetCursorColor(color) {return}

	/**
	 * Change the current cursor position
	 * @param {num_int} position 
	 */
	SetCursorPos(position) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Shows a grey default text
	 * @param {str} text 
	 */
	SetHint(text) {return}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 */
	SetHtml(str) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when content was changed by the user
	 * @param {(this: DsTextEdit) => void} callback 
	 */
	SetOnChange(callback) {return}

	/**
	 * Called when user pressed 'Done' or 'Enter'
	 * @param {(this: DsTextEdit) => void} callback 
	 */
	SetOnEnter(callback) {return}

	/**
	 * Called when the control gets focused
	 * @param {(this: DsTextEdit) => void} callback 
	 */
	SetOnFocus(callback) {return}

	/**
	 * Set selection color
	 * @param {str_col} col 
	 */
	SetSelectColor(col) {return}

	/**
	 * Select text in a given range
	 * @param {num_int} start 
	 * @param {num_int} stop 
	 */
	SetSelection(start, stop) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsTextEdit) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}

	/** Undo an action */
	Undo() {return}
}


class DsTheme {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Returns the control class name
	 * @return {"Theme"} 
	 */
	GetType() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Define button text color
	 * @param {str_col} color 
	 */
	SetBtnTextColor(color) {return}

	/**
	 * Define button options
	 * @param {str_com} [options] `FontAwesome`, `Html`, `Monospace`, `SingleLine`, `Custom`, `NoPad`, `FillX/Y`, `Normal`, `Aluminium`, `Gray`, `Lego`
	 */
	SetButtonOptions(options) {return}

	/**
	 * Define button paddings
	 * @param {num} [left=0] 
	 * @param {num} [top=0] 
	 * @param {num} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetButtonPadding(left, top, right, bottom, mode) {return}

	/**
	 * Define button style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @param {str_col} [checkClr] 
	 */
	SetButtonStyle(color1, color2, radius, strokeClr, strokeWidth, shadow, checkClr) {return}

	/**
	 * Define check box options
	 * @param {str_com} [options] `FillX/Y`
	 */
	SetCheckBoxOptions(options) {return}

	/**
	 * Define dialog button colors
	 * @param {str_col} color 
	 */
	SetDialogBtnColor(color) {return}

	/**
	 * Define dialog button text colors
	 * @param {str_col} color 
	 */
	SetDialogBtnTxtColor(color) {return}

	/**
	 * Define dialog background colors
	 * @param {str_col} color 
	 */
	SetDialogColor(color) {return}

	/**
	 * Define dialog corner radius
	 * @param {num_pxl} radius 
	 */
	SetDialogCornerRadius(radius) {return}

	/**
	 * Define whether to dim dialog background
	 * @param {bin} dim 
	 */
	SetDimBehind(dim) {return}

	/**
	 * Define highlight colors
	 * @param {str_col} color 
	 */
	SetHighlightColor(color) {return}

	/**
	 * Define list divider colors
	 * @param {str_col} color 
	 */
	SetListDividerColor(color) {return}

	/**
	 * Define progress background color
	 * @param {str_col} color 
	 */
	SetProgressBackColor(color) {return}

	/**
	 * Define progress options
	 * @param {string | ("NoDim"|"NonModal"|"Solid")[]} [options] 
	 */
	SetProgressOptions(options) {return}

	/**
	 * Define progress bar options
	 * @param {"Light"} [options] 
	 */
	SetProgressBarOptions(options) {return}

	/**
	 * Define progress text color
	 * @param {str_col} color 
	 */
	SetProgressTextColor(color) {return}

	/**
	 * Define control text color
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 */
	SetTextColor(color1, color2) {return}

	/**
	 * Define text edit options
	 * @param {"underline"} [options] 
	 */
	SetTextEditOptions(options) {return}

	/**
	 * Define title colors
	 * @param {str_col} color 
	 */
	SetTitleColor(color) {return}

	/**
	 * Define title divider colors
	 * @param {str_col} color 
	 */
	SetTitleDividerColor(color) {return}

	/**
	 * Define title divider height
	 * @param {num_pxl} [height=-1] 
	 */
	SetTitleDividerHeight(height) {return}

	/**
	 * Define title height
	 * @param {num_pxl} [height=-1] 
	 * @param {string | ("px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps")[]} [options] 
	 */
	SetTitleHeight(height, options) {return}

	/**
	 * Define title text size
	 * @param {num} size 
	 * @param {string | ("px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps")[]} [options] 
	 */
	SetTitleTextSize(size, options) {return}
}


class DsToggle {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsToggle, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Checks if toggle is activated
	 * @return {bin} 
	 */
	GetChecked() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {return}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"Toggle"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Change the checked state
	 * @param {bin} checked 
	 */
	SetChecked(checked) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when user touched the control
	 * @param {(this: DsToggle, value: bin) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Customize the button looks
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @param {str_col} [checkClr] 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow, checkClr) {return}

	/**
	 * Change displayed text
	 * @param {str} text 
	 */
	SetText(text) {return}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 */
	SetTextColor(color) {return}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 */
	SetTextSize(size, mode) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsToggle) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsUSBSerial {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Get the 'Data Terminal Ready' state
	 * @return {bin} 
	 */
	GetDTR() {return}

	/**
	 * Get the 'Request To Send' state
	 * @return {bin} 
	 */
	GetRTS() {return}

	/**
	 * Get the 'Carrier Detect' state
	 * @return {bin} 
	 */
	GetCD() {return}

	/**
	 * Returns the control class name
	 * @return {"USBSerial"} 
	 */
	GetType() {return}

	/**
	 * Actively checks if a USB device is connected
	 * @return {bin} 
	 */
	IsConnected() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Define data format for outgoing data
	 * @param {str} mode `Hex`, `Int`, `Text`, `<encoding>`\
 	 * &emsp; `Hex` - comma separated text value\
 	 * &emsp; `Int` - comma separated byte numbers\
 	 * &emsp; `Text` - string of text characters\
 	 * &emsp; `encoding` - UTF-16L/BE
	 */
	SetDataMode(mode) {return}

	/**
	 * Raises the Data Terminal Ready state
	 * @param {bin} onOff 
	 */
	SetDTR(onOff) {return}

	/**
	 * Set maximum bytes to received
	 * @param {num_int} bytes 
	 */
	SetMaxRead(bytes) {return}

	/**
	 * Set maximum bytes to send
	 * @param {num_int} bytes 
	 */
	SetMaxWrite(bytes) {return}

	/**
	 * Called after received Data via USB
	 * @param {(this: DsUSBSerial, data: str) => void} callback 
	 */
	SetOnReceive(callback) {return}

	/**
	 * Raises the Request To Send state
	 * @param {bin} onOff 
	 */
	SetRTS(onOff) {return}

	/**
	 * Specify how to split received data
	 * @param {"End"|"Start-End"|"Size"} mode 
	 * @param {str|num_int} [p2] 
	 * @param {str|num_int} [p3] 
	 */
	SetSplitMode(mode, p2, p3) {return}

	/**
	 * Set timeout
	 * @param {num_mls} ms 
	 */
	SetTimeout(ms) {return}

	/** Start listening to serial port */
	Start() {return}

	/** Stop listening to serial port */
	Stop() {return}

	/**
	 * Send data to connected device
	 * @param {str} text 
	 * @param {str} [encoding] `US-ASCII`, `UTF16L/BE`
	 */
	Write(text, encoding) {return}
}


class DsVideoView {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get video duration in seconds
	 * @return {num_flt} 
	 */
	GetDuration() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"VideoView"} 
	 */
	GetType() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the view is currently playing
	 * @return {bin} 
	 */
	IsPlaying() {return}

	/**
	 * Check if the video is ready for playback
	 * @return {bin} 
	 */
	IsReady() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/** Pause the video */
	Pause() {return}

	/** Play video */
	Play() {return}

	/**
	 * Seek to a given playback time
	 * @param {num_int} seconds 
	 */
	SeekTo(seconds) {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Set video source
	 * @param {str_pth|str_url} file `http(s)://url`
	 */
	SetFile(file) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Called when playback finished
	 * @param {(this: DsVideoView) => void} callback 
	 */
	SetOnComplete(callback) {return}

	/**
	 * Called when an error occured
	 * @param {(this: DsVideoView) => void} callback 
	 */
	SetOnError(callback) {return}

	/**
	 * Called when video is ready for playback
	 * @param {(this: DsVideoView) => void} callback 
	 */
	SetOnReady(callback) {return}

	/**
	 * Called when subtitle text changed
	 * @param {(this: DsVideoView) => void} callback 
	 */
	SetOnSubtitle(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * Set a subtitle source
	 * @param {str_ptf} file 
	 */
	SetSubtitles(file) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/**
	 * Change the playback volume
	 * @param {num_prc} left 
	 * @param {num_prc} right 
	 */
	SetVolume(left, right) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/** Stop video playback */
	Stop() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsVideoView) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsWebServer {

	/**
	 * Redirect urls
	 * @param {str_url} pattern 
	 * @param {str_url} location 
	 */
	AddRedirect(pattern, location) {return}

	/**
	 * Called when servlet received a message
	 * @param {str} path `/endpoint name`
	 * @param {(this: DsWebServer, args: {[parameter: str]: str}, info: { remoteAddress: str }) => void} callback 
	 */
	AddServlet(path, callback) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Disconnect Client from WebServer
	 * @param {str} ip 
	 * @param {num_int} [id] 
	 */
	Disconnect(ip, id) {return}

	/**
	 * Returns the control class name
	 * @return {"WebServer"} 
	 */
	GetType() {return}

	/**
	 * Get connected clients
	 * @return {{ remoteAddress: str, id: num_int }[]} 
	 */
	GetWebSockClients() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Send message to client(s)
	 * @param {str} txt 
	 * @param {str} ip 
	 * @param {num_int} id 
	 */
	SendText(txt, ip, id) {return}

	/**
	 * Set server root folder
	 * @param {str_ptd} folder 
	 */
	SetFolder(folder) {return}

	/**
	 * Called when received client message
	 * @param {(this: DsWebServer, msg: str, ip: str, id: num_int) => void} callback 
	 */
	SetOnReceive(callback) {return}

	/**
	 * Called when file uploaded to server
	 * @param {(this: DsWebServer, filename: str, ip: str) => void} callback 
	 */
	SetOnUpload(callback) {return}

	/**
	 * Respond to incoming HTTP request
	 * @param {str} text 
	 */
	SetResponse(text) {return}

	/**
	 * Defile file upload destination
	 * @param {str_ptd} folder 
	 */
	SetUploadFolder(folder) {return}

	/** Start server */
	Start() {return}

	/** Stop server */
	Stop() {return}
}


class DsWebSocket {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Close web socket */
	Close() {return}

	/**
	 * Get js Socket instance
	 * @return {WebSocket} WebSocket
	 */
	GetSocket() {return}

	/**
	 * Check if WebSocket is open
	 * @return {bin} 
	 */
	IsOpen() {return}

	/**
	 * Send message to server
	 * @param {str} message 
	 */
	Send(message) {return}

	/**
	 * Called when WebSocket was closed
	 * @param {(this: DsWebSocket) => void} callback 
	 */
	SetOnClose(callback) {return}

	/**
	 * Called when received message from server
	 * @param {(this: DsWebSocket, message: str) => void} callback 
	 */
	SetOnMessage(callback) {return}

	/**
	 * Called when WebSocket is open
	 * @param {(this: DsWebSocket) => void} callback 
	 */
	SetOnOpen(callback) {return}
}


class DsWebView {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(this: DsWebView, type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 */
	Animate(type, callback, time) {return}

	/** Load previous page */
	Back() {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/**
	 * Check if history contains a previous page
	 * @return {bin} 
	 */
	CanGoBack() {return}

	/**
	 * Check if history has a following page
	 * @return {bin} 
	 */
	CanGoForward() {return}

	/**
	 * Capture WebView as png
	 * @param {str_ptf} file 
	 */
	Capture(file) {return}

	/** Clear all cookies */
	ClearCookies() {return}

	/** Removes the focus of the control */
	ClearFocus() {return}

	/** Clears the page history for Back() and Forward() */
	ClearHistory() {return}

	/**
	 * Execute JS code inside the WebView
	 * @param {str_jsc} code 
	 * @param {(this: DsWebView, result: all) => void} [callback] 
	 */
	Execute(code, callback) {return}

	/** Set the focus to the control for immediate access */
	Focus() {return}

	/** Load following page */
	Forward() {return}

	/**
	 * Call functions defined inside a webview
	 * @param {str} name 
	 * @param {(all)[]} args 
	 */
	Func(name, ...args) {return}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {return}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {return}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {return}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {return}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {return}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} { left, top, width, height }
	 */
	GetPosition(options) {return}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {return}

	/**
	 * Returns the control class name
	 * @return {"WebView"} 
	 */
	GetType() {return}

	/**
	 * Get current url
	 * @return {str_url} 
	 */
	GetUrl() {return}

	/**
	 * Get starting url
	 * @return {str_url} 
	 */
	GetHomeUrl() {return}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {return}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {return}

	/** Make it gone. It was never there! */
	Gone() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {return}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/**
	 * Returns if the page failed to load
	 * @return {bin} 
	 */
	LoadFailed() {return}

	/**
	 * Load html to WebView
	 * @param {str_htm} html 
	 * @param {str_ptd} [baseFolder] 
	 * @param {str_com} [options] `AllowZoom`, `AutoZoom`, `Wide`, `FillX/Y`, `NoActionBar`, `IgnoreErrors`, `IgnoreSSLErrors`, `NoApp`, `NoCapture`, `NoLocate`, `NoLongTouch`, `NoPause`, `NoRedirect`, `NoScrollBars`, `Overview`, `Progress`, `ScrollFade`, `UseBasicInput`, `UseBrowser`\
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
	LoadHtml(html, baseFolder, options) {return}

	/**
	 * Load url to WebView
	 * @param {str_url} url 
	 * @param {str_com} [options] `AllowZoom`, `AutoZoom`, `Wide`, `FillX/Y`, `NoActionBar`, `IgnoreErrors`, `IgnoreSSLErrors`, `NoApp`, `NoCapture`, `NoLocate`, `NoLongTouch`, `NoPause`, `NoRedirect`, `NoScrollBars`, `Overview`, `Progress`, `ScrollFade`, `UseBasicInput`, `UseBrowser`\
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
	LoadUrl(url, options) {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/** Print webpage via anddroid printer dialog */
	Print() {return}

	/** Reload current page */
	Reload() {return}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 */
	SetBackAlpha(alpha) {return}

	/** Resize a control after device rotation */
	Resize() {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 */
	SetBackColor(color) {return}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 */
	SetBackGradient(color1, color2, color3, options) {return}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Block urls from loading
	 * @param {str[]|"urls"} urls 
	 */
	SetBlockedUrls(urls) {return}

	/**
	 * Define context menus to listen for
	 * @param {str} [links] `Copy URL`, `Open URL`
	 * @param {str} [images] `Download Image`
	 */
	SetContextMenus(links, images) {return}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 */
	SetColorFilter(color, mode) {return}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 */
	SetDescription(desc) {return}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 */
	SetEnabled(enable) {return}

	/**
	 * Define error page
	 * @param {str_url} url 
	 */
	SetErrorPage(url) {return}

	/**
	 * Inject scripts on page load
	 * @param {str_pth} file 
	 */
	SetInject(file) {return}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetMargins(left, top, right, bottom, mode) {return}

	/**
	 * Scales the html text by a given factor
	 * @param {num_frc} zoom 
	 */
	SetTextZoom(zoom) {return}

	/**
	 * Called when message logged to console
	 * @param {(this: DsWebView, msg: str) => void} callback 
	 */
	SetOnConsole(callback) {return}

	/**
	 * Called when a context menu was used
	 * @param {(this: DsWebView, item: str, url: str, img: str, type: str) => void} callback 
	 */
	SetOnContextMenu(callback) {return}

	/**
	 * Called when an error occured
	 * @param {(this: DsWebView, error: str) => void} callback 
	 */
	SetOnError(callback) {return}

	/**
	 * Called when loading progress changed
	 * @param {(this: DsWebView, progress: num_prc) => void} callback 
	 */
	SetOnProgress(callback) {return}

	/**
	 * Traps HTTP Requests
	 * @param {(this: DsWebView, url: str, method: str, isMain: bin, isRedirect: bin) => void} callback 
	 */
	SetOnRequest(callback) {return}

	/**
	 * Called when user touched the control
	 * @param {(this: DsWebView, event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Called when link klicked
	 * @param {(this: DsWebView, url: str_url) => void} callback 
	 */
	SetOnUrl(callback) {return}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 */
	SetPadding(left, top, right, bottom, mode) {return}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 */
	SetPosition(left, top, width, height, options) {return}

	/**
	 * Add url redirection rule
	 * @param {str_url} urlFrom 
	 * @param {str_url} urlTo 
	 */
	SetRedirect(urlFrom, urlTo) {return}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 */
	SetScale(x, y) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/**
	 * En/Disable touchmode on the control
	 * @param {bin} mode 
	 */
	SetTouchMode(mode) {return}

	/**
	 * Define which URLs open in browser
	 * @param {str} urlFilter 
	 */
	SetUseBrowser(urlFilter) {return}

	/**
	 * Set/Add custom user agent
	 * @param {str} agent 
	 * @param {str} [options] `Add-appends to default user agent`
	 */
	SetUserAgent(agent, options) {return}

	/**
	 * Set authentication/login data
	 * @param {str} name 
	 * @param {str} password 
	 */
	SetUserCreds(name, password) {return}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 */
	SetVisibility(mode) {return}

	/** Set the visibility to “Show” */
	Show() {return}

	/**
	 * Simulate key event
	 * @param {str} keyName 
	 * @param {"META_META_ON"|"META_RIGHT_ON"|"NUM_LOCK_ON"|"SCROLL_LOCK_ON"|"SHIFT_LEFT_ON"|"SHIFT_MASK"|"SHIFT_ON"|"SHIFT_RIGHT_ON"|"SYM_ON"} [modifiers] 
	 * @param {num} [pause] 
	 */
	SimulateKey(keyName, modifiers, pause) {return}

	/** Stop loading processes */
	Stop() {return}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target { x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {str} [type] `Linear.None`, `Quadratic.In/Out`, `Cubic.In/Out`, `Quartic.In/Out`, `Quintic.In/Out`, `Sinusoidal.In/Out`, `Exponential.In/Out`, `Circular.In/Out`, `Elastic.In/Out`, `Back.In/Out`, `Bounce.In/Out`
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {(this: DsWebView) => void} [callback] 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {return}
}


class DsWizard {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Hides the control and removes it from the screen */
	Dismiss() {return}

	/** Indicate that wizard finished */
	Finish() {return}

	/**
	 * Returns list of wiz control buttons
	 * @return {[DsButton, DsButton, DsButton]} 
	 */
	GetButtons() {return}

	/**
	 * Get wiz dialog object
	 * @return {DsDialog} 
	 */
	GetDialog() {return}

	/**
	 * Get wiz content layout
	 * @return {DsLayout} 
	 */
	GetLayout() {return}

	/**
	 * Returns the control class name
	 * @return {"Wizard"} 
	 */
	GetType() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {return}

	/** Set the visibility to “Show” */
	Show() {return}
}


class DsYesNoDialog {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 */
	AdjustColor(hue, saturation, brightness, contrast) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Hides the control and removes it from the screen */
	Dismiss() {return}

	/**
	 * Returns the control class name
	 * @return {"YesNoDialog"} 
	 */
	GetType() {return}

	/** Hides the control visually */
	Hide() {return}

	/**
	 * Access Java object methods via reflection
	 * @param {str} name 
	 * @param {str_com} [types] `boolean`, `char`, `byte`, `short`, `int`, `long`, `float`, `double`, `String`, `CharSequence`, `...`
	 * @param {str} [p1] 
	 * @param {str} [p2] 
	 * @param {str} [p3] 
	 * @param {str} [p4] 
	 * @return {all} 
	 */
	Method(name, types, p1, p2, p3, p4) {return}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @param {num_pxl} [radius] 
	 */
	SetBackColor(color, radius) {return}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 */
	SetBackground(file, options) {return}

	/**
	 * Change Yes/No button text
	 * @param {str} yes 
	 * @param {str} no 
	 */
	SetButtonText(yes, no) {return}

	/**
	 * Called when user selects Yes or No
	 * @param {(this: DsYesNoDialog, result: "Yes"|"No") => void} callback 
	 */
	SetOnTouch(callback) {return}

	/**
	 * Change the size of the control
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 */
	SetSize(width, height, options) {return}

	/** Set the visibility to “Show” */
	Show() {return}
}


class DsZipUtil {

	/**
	 * Add file to zip
	 * @param {str} name `zip path`
	 * @param {str_ptf} file 
	 */
	AddFile(name, file) {return}

	/**
	 * Add text to the zip
	 * @param {str} name `zip path`
	 * @param {str} text 
	 */
	AddText(name, text) {return}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties { command: args }
	 */
	Batch(properties) {return}

	/** @type {{ key: str, value: all }} Extra properties */
	data;

	/** Close ZipUtil */
	Close() {return}

	/**
	 * Create zip file
	 * @param {str_ptf} file 
	 * @return {nil} 
	 */
	Create(file) {return}

	/**
	 * Create debug keystore file
	 * @param {str_ptf} file debug.keystore
	 * @return {nil} 
	 */
	CreateDebugKey(file) {return}

	/**
	 * Create a user keystore file
	 * @param {str_ptf} file user.keystore
	 * @param {str} password 
	 * @param {str} name 
	 * @param {str} organization 
	 * @return {nil} 
	 */
	CreateKey(file, password, name, organization) {return}

	/**
	 * Extract file from zip
	 * @param {str} name `zip path`
	 * @param {str_ptf} file 
	 */
	Extract(name, file) {return}

	/**
	 * Returns the control class name
	 * @return {"ZipUtil"} 
	 */
	GetType() {return}

	/**
	 * Get contained file list
	 * @param {str_pth} path 
	 * @return {str_com} 
	 */
	List(path) {return}

	/**
	 * Open existing zip
	 * @param {str_ptf} file 
	 */
	Open(file) {return}

	/**
	 * Sign and check zip against keystore file
	 * @param {str_ptf} fileIn 
	 * @param {str_ptf} fileOut 
	 * @param {str_pth} keyStore 
	 * @param {str} password 
	 * @return {bin} 
	 */
	Sign(fileIn, fileOut, keyStore, password) {return}

	/**
	 * Update zip manifest
	 * @param {str_ptf} fileIn 
	 * @param {str_ptf} fileOut 
	 * @param {str} packageName 
	 * @param {str} appName 
	 * @param {str_com} [permissions] 
	 * @param {string | ("Launch"|"Debug")[]} [options] 
	 */
	UpdateManifest(fileIn, fileOut, packageName, appName, permissions, options) {return}
}


class DsDatabase {

	/**
	 * AddTransaction
	 * 	 * deprecated  Use ExecuteSQL instead
	 * @param {obj} transaction JS SQLitePluginTransaction
	 */
	addTransaction(transaction) {return}

	/**
	 * Close the database
	 * @param {(this: DsDatabase, msg: str) => void} [success] 
	 * @param {(this: DsDatabase, msg: str) => void} [error] 
	 */
	close(success, error) {return}

	/** Close the database */
	Close() {return}

	/** Delete the database */
	Delete() {return}

	/**
	 * Execute SQL query
	 * @param {str_sql} statement 
	 * @param {lst} [params] 
	 * @param {(this: DsDatabase, tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }, res: { rows: { item(i): { id: num, data: all, data_num: num } } }) => void} [success] 
	 * @param {(this: DsDatabase, t: all, err: { message: str }) => void} [error] 
	 */
	executeSql(statement, params, success, error) {return}

	/**
	 * Execute SQL query
	 * @param {str_sql} sql 
	 * @param {lst} [params] 
	 * @param {(this: DsDatabase, res: { length: num_int, rowsAffected: num_int, rows: { item(i): { id: num, data: all, data_num: num } } }) => void} [success] 
	 * @param {(this: DsDatabase, err: str) => void} [error] 
	 */
	ExecuteSql(sql, params, success, error) {return}

	/**
	 * Get database name
	 * @return {str} 
	 */
	GetName() {return}

	/**
	 * Returns the component class name
	 * @return {"Database"} 
	 */
	GetType() {return}

	/** @type {str} Database name */
	name;

	/**
	 * Open database
	 * @param {(this: DsDatabase) => void} [success] 
	 * @param {(this: DsDatabase, msg: str) => void} [error] 
	 */
	open(success, error) {return}

	/**
	 * ReadTransaction
	 * 	 * deprecated  Use ExecuteSql instead
	 * @param {(this: DsDatabase, tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }) => void} fn 
	 * @param {(this: DsDatabase, err: str) => void} [error] 
	 * @param {(this: DsDatabase, tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }, res: { rows: { item(i): { id: num, data: all, data_num: num } } }) => void} [success] 
	 */
	readTransaction(fn, error, success) {return}

	/** StartNextTransaction
	 * 	 * deprecated  Use ExecuteSql instead */
	startNextTransaction() {return}

	/**
	 * Transaction
	 * 	 * deprecated  Use ExecuteSql instead
	 * @param {(this: DsDatabase, tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }) => void} fn 
	 * @param {(this: DsDatabase, err: str) => void} [error] 
	 * @param {(this: DsDatabase, fnc: (this: DsDatabase, tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }) => void, res: { length: num_int, rowsAffected: num_int, rows: { item(i): { id: num, data: all, data_num: num } } }) => void} [success] 
	 */
	transaction(fn, error, success) {return}
}


class DsCheckList {

	/** Show the check list */
	Show() {return}

	/**
	 * Set list
	 * @param {str|{ title: str, check: bin }} data `title:checked`
	 */
	SetList(data) {return}
}


