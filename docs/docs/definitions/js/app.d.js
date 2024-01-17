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
	 * @param {string | ("FontAwesome"|"Html"|"Monospace"|"Normal"|"Aluminium"|"Gray"|"Lego"|"SingleLine"|"Custom"|"NoPad"|"FillX/Y"|"NoSound")[]} [options] 
	 * @return {DsButton} 
	 */
	AddButton(layout, text, width, height, options) {}

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
	AddCameraView(layout, width, height, options) {}

	/**
	 * Create and add Button to Layout
	 * @param {DsLayout} layout 
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
	AddCanvas(layout, file, width, height, options, pxw, pxh) {}

	/**
	 * Create and add CheckBox to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX/Y"|"NoSound")[]} [options] 
	 * @return {DsCheckBox} 
	 */
	AddCheckBox(layout, text, width, height, options) {}

	/**
	 * Create and add CodeEdit to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX/Y")[]} [options] 
	 * @return {DsCodeEdit} 
	 */
	AddCodeEdit(layout, text, width, height, options) {}

	/**
	 * Adds a slide-able layout on given side
	 * @param {DsLayout} layout 
	 * @param {"left"|"right"} side 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [grabWidth] 
	 * @return {void} 
	 */
	AddDrawer(layout, side, width, grabWidth) {}

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
	AddImage(layout, file, width, height, options, pxw, pxh) {}

	/**
	 * Adds a layout to the app
	 * @param {DsLayout} layout 
	 * @param {"Linear"|"Absolute"|"Frame"|"Card"} [type] 
	 * @param {"TouchThrough"|"TouchSpy"|"Left"|"Top"|"Right"|"Bottom"|"Center"|"H/VCenter"|"Wrap"|"Horizontal"|"Vertical"|"FillX/Y"} [options] <br>
 	 * &emsp; `TouchThrough` - forwards touch events to underlying children\
 	 * &emsp; `TouchSpy` - spies for touch events on all children
	 * @return {void} 
	 */
	AddLayout(layout, type, options) {}

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
	 * @param {str} [delim=',] 
	 * @return {DsList} 
	 */
	AddList(layout, list, width, height, options, delim) {}

	/**
	 * Create and add Scroller to Layout
	 * @param {DsLayout} layout 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX"|"FillY"|"FillXY"|"Horizontal"|"Vertical"|"NoScrollBar"|"ScrollFade")[]} [options] 
	 * @return {DsScroller} 
	 */
	AddScroller(layout, width, height, options) {}

	/**
	 * Create and add SeekBar to Layout
	 * @param {DsLayout} layout 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX/Y")[]} [options] 
	 * @return {DsSeekBar} 
	 */
	AddSeekBar(layout, width, height, options) {}

	/**
	 * Create and add Spinner to Layout
	 * @param {DsLayout} layout 
	 * @param {str_com} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX/Y"|"NoSound")[]} [options] 
	 * @return {DsSpinner} 
	 */
	AddSpinner(layout, list, width, height, options) {}

	/**
	 * Create and add Switch toggle to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("Monospace"|"Custom"|"NoPad"|"FillX/Y"|"NoSound")[]} [options] 
	 * @return {DsSwitch} 
	 */
	AddSwitch(layout, text, width, height, options) {}

	/**
	 * Returns a new Tabs object
	 * @param {str_com} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"Fade"|"FontAwesome"|"NoMargins"|"VCenter"} [options] 
	 * @return {DsTabs} 
	 */
	AddTabs(list, width, height, options) {}

	/**
	 * Create and add Text to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("AutoScale"|"AutoSize"|"Multiline"|"Left"|"Right"|"Html"|"Bold"|"Monospace"|"NoWrap"|"Log"|"FillX/Y")[]} [options] 
	 * @return {DsText} 
	 */
	AddText(layout, text, width, height, options) {}

	/**
	 * Create and add TextEdit to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("AutoSelect"|"AutoSize"|"Bold"|"Extract"|"Left"|"Center"|"Right"|"Monospace"|"NoSpell"|"NoKeyboard"|"Numbers"|"ReadOnly"|"SingleLine"|"FillX/Y"|"Password")[]} [options] <br>
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
	AddTextEdit(layout, text, width, height, options) {}

	/**
	 * Create and add Toggle to Layout
	 * @param {DsLayout} layout 
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("Monospace"|"Custom"|"NoPad"|"FillX/Y"|"NoSound")[]} [options] 
	 * @return {DsToggle} 
	 */
	AddToggle(layout, text, width, height, options) {}

	/**
	 * Create and add VideoView to Layout
	 * @param {DsLayout} layout 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] 
	 * @return {DsVideoView} 
	 */
	AddVideoView(layout, width, height, options) {}

	/**
	 * Create and add WebView to Layout
	 * @param {DsLayout} layout 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("AllowZoom"|"AutoZoom"|"Wide"|"FillX/Y"|"NoAccel"|"NoActionBar"|"IgnoreErrors"|"IgnoreSSLErrors"|"NoApp"|"NoCapture"|"NoCors"|"NoLocate"|"NoLongTouch"|"NoPause"|"NoScrollBars"|"Overview"|"Progress"|"ScrollFade"|"UseBasicInput"|"UseBrowser")[]} [options=''] <br>
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
	AddWebView(layout, width, height, options, zoom) {}

	/**
	 * Shows a popup message with an 'OK' button to exit
	 * @param {str} message 
	 * @param {str} title 
	 * @param {string | ("NoDim"|"NoFocus")[]} [options=''] 
	 * @param {num_int} [hue] `-180..180`
	 * @return {void} 
	 */
	Alert(message, title, options, hue) {}

	/**
	 * Similar to setInterval
	 * @param {(time: num_mls, dtime: num_mls) => void} [callback] 
	 * @param {num_fps} [fps=-1] 
	 * @return {void} 
	 */
	Animate(callback, fps) {}

	/**
	 * Used for broadcasting messages between DroidScript apps
	 * @param {"Exec"} type 
	 * @param {str} message 
	 * @return {void} 
	 */
	Broadcast(type, message) {}

	/**
	 * Send broadcast intent
	 * @param {str} action `android action`
	 * @param {str} category 
	 * @param {str} data 
	 * @param {str} type 
	 * @param {str} extras 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	BroadcastIntent(action, category, data, type, extras, options) {}

	/**
	 * Calls a phone number
	 * @param {"number"} number 
	 * @return {void} 
	 */
	Call(number) {}

	/**
	 * Cancel background job
	 * @return {void} 
	 */
	CancelJob() {}

	/**
	 * Checks if app is licensed with Google Play
	 * @param {str_b64} key `GPlay license key`
	 * @return {void} 
	 */
	CheckLicense(key) {}

	/**
	 * Checks if permission was granted
	 * @param {"Camera"|"Storage"|"ExtSDcard"|"Network"|"Notify"|"Location"|"SMS"|"Calendar"|"Body"|"Contacts"|"Record"|"Biometric"|"Phone"|"Accounts"|"License"|"android.permission.*"} type 
	 * @return {str[]} 
	 */
	CheckPermission(type) {}

	/**
	 * Let the user choose an google account
	 * @param {(account: "email") => void} callback 
	 * @return {void} 
	 */
	ChooseAccount(callback) {}

	/**
	 * Let the user choose an image
	 * @param {"Phone"|"Email"} type 
	 * @param {(name: str, data: str) => void} callback 
	 * @return {void} 
	 */
	ChooseContact(type, callback) {}

	/**
	 * Let the user choose a file
	 * @param {str} message 
	 * @param {"mimetype"} type 
	 * @param {(path: str_pth|str_uri, name: str) => void} callback 
	 * @param {str_pth} [fldr] 
	 * @param {"persist"|"nodownload"} [options] <br>
 	 * &emsp; `persist` - keep file permission after reboot\
 	 * &emsp; `nodownload` - prevents file downloads
	 * @return {void} 
	 */
	ChooseFile(message, type, callback, fldr, options) {}

	/**
	 * Let the user choose an image
	 * @param {string | (""|"internal"|"external")[]} options 
	 * @param {(path: str_pth) => void} callback 
	 * @return {void} 
	 */
	ChooseImage(options, callback) {}

	/**
	 * Let the user choose a WiFi network
	 * @param {str} title1 
	 * @param {str} title2 
	 * @param {(ssid: str) => void} callback 
	 * @param {string | ("force"|"large")[]} [options=''] 
	 * @param {"ssids"} [extra] 
	 * @return {void} 
	 */
	ChooseWifi(title1, title2, callback, options, extra) {}

	/**
	 * Clears saved web cookies
	 * @return {void} 
	 */
	ClearCookies() {}

	/**
	 * Deletes app.Save*() storage
	 * @param {str_ptf} [file] 
	 * @return {void} 
	 */
	ClearData(file) {}

	/**
	 * Deletes a variable saved via app.Save*()
	 * @param {str} name 
	 * @param {str_ptf} [file] 
	 * @return {void} 
	 */
	ClearValue(name, file) {}

	/**
	 * Closes the drawer layout on the given side with slide animation
	 * @param {"left"|"right"} side 
	 * @return {void} 
	 */
	CloseDrawer(side) {}

	/**
	 * Copies a file to a given destination
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @return {void} 
	 */
	CopyFile(source, destination) {}

	/**
	 * Copies a folder to a given destination
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {bin} [overwrite=false] 
	 * @param {"pattern"} [filter] 
	 * @return {void} 
	 */
	CopyFolder(source, destination, overwrite, filter) {}

	/**
	 * Returns an AudioRecorder object
	 * @return {DsAudioRecorder} 
	 */
	CreateAudioRecorder() {}

	/**
	 * Returns a new BluetoothList object with selectable list of paired and discovered Bluetooth devices
	 * @param {str} [filter] 
	 * @return {DsBluetoothList} 
	 */
	CreateBluetoothList(filter) {}

	/**
	 * Communicate with other Bluetooth devices
	 * @param {"Text"|"Int"|"Hex"} [mode='Text'] 
	 * @return {DsBluetoothSerial} 
	 */
	CreateBluetoothSerial(mode) {}

	/**
	 * Creates a button control
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FontAwesome"|"Html"|"Monospace"|"Normal"|"Aluminium"|"Gray"|"Lego"|"SingleLine"|"Custom"|"AutoShrink"|"AutoSize"|"NoPad"|"FillX/Y"|"NoSound")[]} [options] <br>
 	 * &emsp; `AutoShrink` - Auto-shrinks text to fit\
 	 * &emsp; `AutoSize` - Auto-sizes text to fit
	 * @return {DsButton} 
	 */
	CreateButton(text, width, height, options) {}

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
	CreateCameraView(width, height, options) {}

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
	CreateCanvas(file, width, height, options, pxw, pxh) {}

	/**
	 * Returns a new CheckBox object
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX/Y"|"NoSound")[]} [options] 
	 * @return {DsCheckBox} 
	 */
	CreateCheckBox(text, width, height, options) {}

	/**
	 * Returns a new CloudStore object
	 * @param {str} apiKey 
	 * @return {DsCloudStore} 
	 */
	CreateCloudStore(apiKey) {}

	/**
	 * Returns a new CodeEdit object
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX/Y")[]} [options] 
	 * @return {DsCodeEdit} 
	 */
	CreateCodeEdit(text, width, height, options) {}

	/**
	 * Returns a new Crypt object to encrypt or decrypt a string with a given key or create a hash of it
	 * @param {str_com} [options] 
	 * @return {DsCrypt} 
	 */
	CreateCrypt(options) {}

	/**
	 * Creates a CustomTab control
	 * @return {void} 
	 */
	CreateCustomTabs() {}

	/**
	 * Shows a debug log overlay
	 * @param {"dialog"|"clear"} [options] <br>
 	 * &emsp; `dialog` - Show the debug log as black overlay dialog\
 	 * &emsp; `clear` - Clear content before showing
	 * @return {void} 
	 */
	CreateDebug(options) {}

	/**
	 * Returns a new Dialog object to display messages
	 * @param {str} title 
	 * @param {string | ("AutoCancel"|"NoCancel"|"NoTitle"|"NoFocus"|"NoDim"|"NoKeys"|"Fillscreen"|"Fullscreen"|"TouchModal"|"NoTouch"|"Modal"|"Kiosk"|"Old")[]} [options] <br>
 	 * &emsp; `Old` - apply old list style affecting title style and unrounded corners
	 * @return {DsDialog} 
	 */
	CreateDialog(title, options) {}

	/**
	 * Returns a new Downloader object
	 * @param {string | ("NoDialog"|"Light")[]} [options] 
	 * @return {DsDownloader} 
	 */
	CreateDownloader(options) {}

	/**
	 * Returns an Email object for user to send emails
	 * @param {"email"} account 
	 * @param {"password"} password 
	 * @return {DsEmail} 
	 */
	CreateEmail(account, password) {}

	/**
	 * Returns a new File object
	 * @param {str_ptf} file 
	 * @param {"r"|"w"|"rw"} mode 
	 * @return {DsFile} 
	 */
	CreateFile(file, mode) {}

	/**
	 * CreateGame automatically turns your app in game mode and adds a [GameView](CreateGameView.htm) control to it which loads the referenced script
	 * @param {str_ptf} file 
	 * @param {"Portrait"|"Landscape"} [orient] 
	 * @return {{ game: DsGameView, lay: DsLayout}} \{ game, lay}
	 */
	CreateGame(file, orient) {}

	/**
	 * The GameView is a blindingly fast container for game development with a physics engine and PIXI as underlying sprite container which uses the GPU to render graphics
	 * @param {num_frc} width 
	 * @param {num_frc} height 
	 * @param {str_com} [options] 
	 * @return {DsGameView} 
	 */
	CreateGameView(width, height, options) {}

	/**
	 * Returns a GLView object
	 * @param {num_frc} width 
	 * @param {num_frc} height 
	 * @param {"fast2d"} [options] 
	 * @return {DsGLView} 
	 */
	CreateGLView(width, height, options) {}

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
	CreateImage(file, width, height, options, pxw, pxh) {}

	/**
	 * Returns a new Layout object
	 * @param {"Linear"|"Absolute"|"Frame"|"Card"} type 
	 * @param {string | ("AutoSize"|"TouchThrough"|"TouchSpy"|"Left"|"Top"|"Right"|"Bottom"|"Center"|"H/VCenter"|"Wrap"|"Horizontal"|"Vertical"|"FillX/Y")[]} [options] <br>
 	 * &emsp; `AutoSize` - Resizes itself and child controls after device rotation\
 	 * &emsp; `TouchThrough` - forwards touch events to underlying children\
 	 * &emsp; `TouchSpy` - spies for touch events on all children
	 * @return {DsLayout} 
	 */
	CreateLayout(type, options) {}

	/**
	 * Returns a new List object
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
	CreateList(list, width, height, options, delim) {}

	/**
	 * Returns a new ListDialog object
	 * @param {str} title 
	 * @param {str} list 
	 * @param {"Multi"} [options] 
	 * @return {DsListDialog} 
	 */
	CreateListDialog(title, list, options) {}

	/**
	 * Returns a new Locator object
	 * @param {string | ("GPS"|"Network")[]} type 
	 * @param {str_com} [options] 
	 * @return {DsLocator} 
	 */
	CreateLocator(type, options) {}

	/**
	 * Returns a new MediaPlayer object
	 * @return {DsMediaPlayer} 
	 */
	CreateMediaPlayer() {}

	/**
	 * Returns a new MediaStore object
	 * @return {DsMediaStore} 
	 */
	CreateMediaStore() {}

	/**
	 * Add music to your app
	 * @return {obj} 
	 */
	CreateMusic() {}

	/**
	 * Returns a new NetClient object
	 * @param {"UDP"|"TCP"|"Raw"} type <br>
 	 * &emsp; `UDP` - fast but does not guarantee data correctness\
 	 * &emsp; `TCP` - slow but guarantees data correctness\
 	 * &emsp; `Raw` - drop 4 Byte header before every message
	 * @return {DsNetClient} 
	 */
	CreateNetClient(type) {}

	/**
	 * Creates a NodeJS background process with all the functionality of common node.js
	 * @param {str_pth} [paths] `NODE_PATH env variable`
	 * @param {"extended"|"legacy"|"nostart"|"esm"} [options] <br>
 	 * &emsp; `extended` - allow app methods in default main instance\
 	 * &emsp; `legacy` - dont use named pipes for messaging\
 	 * &emsp; `nostart` - disable auto start\
 	 * &emsp; `esm` - use EcmaScript-Modules
	 * @return {DsNode} 
	 */
	CreateNode(paths, options) {}

	/**
	 * Returns a new Notification object
	 * @param {string | ("Ongoing"|"AutoCancel"|"FullScreen"|"NoVibrate"|"Low")[]} [options] <br>
 	 * &emsp; `Low` - priority
	 * @return {DsNotification} 
	 */
	CreateNotification(options) {}

	/**
	 * Returns a new Nxt object
	 * @return {DsNxt} 
	 */
	CreateNxt() {}

	/**
	 * Returns a new Overlay object
	 * @param {string | ("ShowWhenLocked"|"TurnScreenOn"|"KeepScreenOn")[]} [options] 
	 * @return {DsOverlay} 
	 */
	CreateOverlay(options) {}

	/**
	 * Returns a new PhoneState object
	 * @param {"CellLocation"|"DataConnection"|"DataActivity"|"CallState"|"ServiceState"|"SignalStrength"|"CallForwarding"|"MessageWaiting"} types 
	 * @return {DsPhoneState} 
	 */
	CreatePhoneState(types) {}

	/**
	 * Returns a new PlayStore object
	 * @return {DsPlayStore} 
	 */
	CreatePlayStore() {}

	/**
	 * Returns a new Scroller object
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX"|"FillY"|"FillXY"|"Horizontal"|"Vertical"|"NoScrollBar"|"ScrollFade")[]} [options] 
	 * @return {DsScroller} 
	 */
	CreateScroller(width, height, options) {}

	/**
	 * Returns a new SeekBar object
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX/Y")[]} [options] 
	 * @return {DsSeekBar} 
	 */
	CreateSeekBar(width, height, options) {}

	/**
	 * Returns a new Sensor object
	 * @param {"Accelerometer"|"MagneticField"|"Orientation"|"Light"|"Proximity"|"Temperature"|"GameRotation"|"GeomagneticRotation"|"Gravity"|"Gyroscope"|"HeartRate"|"Acceleration"|"Pressure"|"Humidity"|"RotationMotion"|"StepCounter"|"StepDetector"} type 
	 * @param {string | ("Slow"|"Medium"|"Fast"|"Fastest")[]} [options] 
	 * @return {DsSensor} 
	 */
	CreateSensor(type, options) {}

	/**
	 * Returns a new Service object
	 * @param {str} packageName `this`, `<package>`
	 * @param {str} className `this`, `<class>`
	 * @param {() => void} [callback] 
	 * @param {string | ("Persist")[]} [options] <br>
 	 * &emsp; `Persist` - attempts to force restart if service killed
	 * @return {DsService} 
	 */
	CreateService(packageName, className, callback, options) {}

	/**
	 * Creates a Home-Screen shortcut to an app
	 * @param {str} name 
	 * @param {str_ptf} iconFile 
	 * @param {str_ptf} file 
	 * @param {string | ("Portrait"|"Landscape"|"Transparent"|"Debug"|"Game"|"remote")[]} [options] <br>
 	 * &emsp; `Debug` - start app in debug mode\
 	 * &emsp; `Game` - runs in GameView mode
	 * @return {void} 
	 */
	CreateShortcut(name, iconFile, file, options) {}

	/**
	 * Returns a new SMS object to send and retreive SMS messages
	 * @return {DsSMS} 
	 */
	CreateSMS() {}

	/**
	 * Returns a new SpeechRec object
	 * @param {string | ("NoBeep"|"Partial")[]} [options] 
	 * @return {DsSpeechRec} 
	 */
	CreateSpeechRec(options) {}

	/**
	 * Returns a new Spinner object
	 * @param {str_com} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("FillX/Y"|"NoSound")[]} [options] 
	 * @return {DsSpinner} 
	 */
	CreateSpinner(list, width, height, options) {}

	/**
	 * Creates a switch control
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("Monospace"|"Custom"|"NoPad"|"FillX/Y"|"NoSound")[]} [options] 
	 * @return {DsSwitch} 
	 */
	CreateSwitch(text, width, height, options) {}

	/**
	 * Returns a new Synth object
	 * @param {"Signal"|"VCA"|"VCF"} [type='Signal'] 
	 * @return {DsSynth} 
	 */
	CreateSynth(type) {}

	/**
	 * Returns a new SysProc object
	 * @param {"sh"|"su"|"busybox"} cmd program name
	 * @param {str} env 
	 * @param {str_ptd} dir 
	 * @param {string | ("combine"|"builder")[]} [options] <br>
 	 * &emsp; `combine` - combines stdout and stderr\
 	 * &emsp; `builder` - force use of proc builder
	 * @return {DsSysProc} 
	 */
	CreateSysProc(cmd, env, dir, options) {}

	/**
	 * Returns a new Tabs object
	 * @param {str_com} list 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"Fade"|"FontAwesome"|"NoMargins"|"VCenter"} [options] 
	 * @return {DsTabs} 
	 */
	CreateTabs(list, width, height, options) {}

	/**
	 * Returns a new Text object
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("AutoScale"|"AutoSize"|"Multiline"|"Left"|"Right"|"Bottom"|"VCenter"|"Html"|"Bold"|"Monospace"|"AutoShrink"|"NoWrap"|"Log"|"FillX/Y")[]} [options] <br>
 	 * &emsp; `AutoShrink` - Auto-shrinks text to fit
	 * @return {DsText} 
	 */
	CreateText(text, width, height, options) {}

	/**
	 * Returns a new TextEdit object
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("AutoSelect"|"AutoSize"|"Bold"|"Extract"|"Left"|"Center"|"Right"|"Monospace"|"NoSpell"|"NoKeyboard"|"Numbers"|"ReadOnly"|"SingleLine"|"FillX/Y"|"Password")[]} [options] <br>
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
	CreateTextEdit(text, width, height, options) {}

	/**
	 * Returns a new Theme object
	 * @param {"Dark"|"Light"} baseTheme 
	 * @return {DsTheme} 
	 */
	CreateTheme(baseTheme) {}

	/**
	 * Returns a new Toggle object
	 * @param {str} text 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("Monospace"|"Custom"|"NoPad"|"FillX/Y"|"NoSound")[]} [options] 
	 * @return {DsToggle} 
	 */
	CreateToggle(text, width, height, options) {}

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
	CreateUSBSerial(baudRate, dataBits, stopBits, parity, device) {}

	/**
	 * Returns a new VideoView object
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str_com} [options] 
	 * @return {DsVideoView} 
	 */
	CreateVideoView(width, height, options) {}

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
	CreateWebServer(port, options) {}

	/**
	 * Returns a new WebSocket object
	 * @param {str} ip 
	 * @param {str} [id] 
	 * @param {num_int} [retry] 
	 * @param {str} [options] 
	 * @return {DsWebSocket} 
	 */
	CreateWebSocket(ip, id, retry, options) {}

	/**
	 * Returns a new WebView object
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {string | ("AllowZoom"|"AutoZoom"|"ClearCookies"|"FillX/Y"|"Local"|"NoAccel"|"NoActionBar"|"IgnoreErrors"|"IgnoreSSLErrors"|"NoApp"|"NoCapture"|"NoCors"|"NoLocate"|"NoLongTouch"|"NoPause"|"NoScrollBars"|"Overview"|"Persist"|"Progress"|"ScrollFade"|"UseBasicInput"|"UseBrowser"|"Wide")[]} [options=''] <br>
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
	CreateWebView(width, height, options, zoom) {}

	/**
	 * The wizard is supposed to simplify a configuration progress which requires several inputs and decisions by the user
	 * @param {str} title 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {(layout: DsLayout, page: num_int) => void} [callback] 
	 * @param {string | ("AutoCancel"|"NoCancel"|"NoTitle"|"NoFocus"|"NoDim"|"NoKeys"|"TouchModal"|"NoTouch")[]} [options] 
	 * @return {DsWizard} 
	 */
	CreateWizard(title, width, height, callback, options) {}

	/**
	 * Returns a new YesNoDialog object
	 * @param {str} message 
	 * @param {string | ("NoDim"|"NoFocus"|"TouchModal")[]} [options] 
	 * @return {DsYesNoDialog} 
	 */
	CreateYesNoDialog(message, options) {}

	/**
	 * Returns a new ZipUtil object
	 * @param {str} mode 
	 * @return {DsZipUtil} 
	 */
	CreateZipUtil(mode) {}

	/**
	 * Debug messages to the console
	 * @param {str} message 
	 * @return {void} 
	 */
	Debug(message) {}

	/**
	 * Deletes a database
	 * @param {str} name 
	 * @return {void} 
	 */
	DeleteDatabase(name) {}

	/**
	 * Deletes a file
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	DeleteFile(file) {}

	/**
	 * Delete a folder
	 * @param {str_ptd} folder 
	 * @return {void} 
	 */
	DeleteFolder(folder) {}

	/**
	 * Destroy a layout
	 * @param {DsLayout} layout 
	 * @return {void} 
	 */
	DestroyLayout(layout) {}

	/**
	 * Disable specific device keys
	 * @param {str_com} keyList `VOLUME_DOWN`, `VOLUME_UP`, `FORWARD`, `BACK`, `MENU`, `ENTER`, `...`
	 * @return {void} 
	 */
	DisableKeys(keyList) {}

	/**
	 * Suppress all touch events
	 * @param {bin} disable 
	 * @return {void} 
	 */
	DisableTouch(disable) {}

	/**
	 * Search for nearby bluetooth devices
	 * @param {str} filter 
	 * @param {(name: str, address: str) => void} [onFound] 
	 * @param {() => void} [onComplete] 
	 * @return {void} 
	 */
	DiscoverBtDevices(filter, onFound, onComplete) {}

	/**
	 * Download a file with Androids download manager
	 * @param {str} source 
	 * @param {str_pth} destination 
	 * @param {str} [title] 
	 * @param {str} [description] 
	 * @param {"NoDialog"} [options] 
	 * @return {void} 
	 */
	DownloadFile(source, destination, title, description, options) {}

	/**
	 * Allows to en- or disable the devices back key
	 * @param {bin} enable 
	 * @return {void} 
	 */
	EnableBackKey(enable) {}

	/**
	 * Show an error message
	 * @param {str} message 
	 * @param {num_int} line 
	 * @param {str_ptf} file 
	 * @param {bin} [quit=false] 
	 * @return {void} 
	 */
	Error(message, line, file, quit) {}

	/**
	 * Execute js code from your app or a WebWiew
	 * @param {str_jsc} js 
	 * @return {void} 
	 */
	Execute(js) {}

	/**
	 * Close and stop the app
	 * @param {bin} kill 
	 * @return {void} 
	 */
	Exit(kill) {}

	/**
	 * Execute a bash script using Termux
	 * @param {"termux"} name 
	 * @param {str_ptf} file 
	 * @param {str} [args] 
	 * @param {"hide"} [options] 
	 * @return {void} 
	 */
	ExtExec(name, file, args, options) {}

	/**
	 * Extract app assets to a local directory
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {bin} [overwrite=false] 
	 * @param {"DoEvents"|"shallow"} [options] <br>
 	 * &emsp; `DoEvents` - extract in background\
 	 * &emsp; `shallow` - extract top level
	 * @return {void} 
	 */
	ExtractAssets(source, destination, overwrite, options) {}

	/**
	 * Forcefully update your plugins
	 * @return {void} 
	 */
	ExtractPlugins() {}

	/**
	 * Checks if the file exists
	 * @param {str_ptf} file 
	 * @return {bin} 
	 */
	FileExists(file) {}

	/**
	 * Checks if the folder exists
	 * @param {str_ptd} folder 
	 * @return {bin} 
	 */
	FolderExists(folder) {}

	/**
	 * Call main app functions from inside a webview
	 * @param {str} name 
	 * @param {all} ...args 
	 * @return {void} 
	 */
	Func(name, ...args) {}

	/**
	 * Google Analytics
	 * @param {"create"|"send"|"set"|"require"|"provide"|"remove"} command 
	 * @param {str_com} fields 
	 * @param {obj} [options] 
	 * @return {void} 
	 */
	GA(command, fields, options) {}

	/**
	 * Get accesibility feature availability
	 * @return {{ enabled: bin, exploreByTouch: bin, screenReader: bin }} \{ enabled, exploreByTouch, screenReader }
	 */
	GetAccessibility() {}

	/**
	 * Returns a string of all known account names on the device separated with comma ','
	 * @return {str_com} 
	 */
	GetAccounts() {}

	/**
	 * GetActivities returns a list of object of currently running activities
	 * @return {{ label: str, packageName: str, className: str }[]} 
	 */
	GetActivities() {}

	/**
	 * Convert language name to its code or get current language code
	 * @param {str} name 
	 * @return {str} 
	 */
	GetAppLangCode(name) {}

	/**
	 * Get translation languages
	 * @return {str[]} 
	 */
	GetAppLanguages() {}

	/**
	 * Get current app name
	 * @return {str} 
	 */
	GetAppName() {}

	/**
	 * Get path to app assets
	 * @return {str_pth} 
	 */
	GetAppPath() {}

	/**
	 * Get current battery level
	 * @return {num_prc} 
	 */
	GetBatteryLevel() {}

	/**
	 * Get the bluetooth address
	 * @return {str} 
	 */
	GetBluetoothAddress() {}

	/**
	 * Get the bluetooth name
	 * @return {str} 
	 */
	GetBluetoothName() {}

	/**
	 * Returns Bluetooth type connected state
	 * @param {"a2dp"|"headset"|"gatt"|"health"} type 
	 * @return {"Connected"|"Disconnected"} 
	 */
	GetBtProfileState(type) {}

	/**
	 * Get APK build number
	 * @return {num_int} 
	 */
	GetBuildNum() {}

	/**
	 * Get current charge type
	 * @return {"AC"|"USB"|"Wireless"|"None"} 
	 */
	GetChargeType() {}

	/**
	 * Get latest clipboard text
	 * @return {str} 
	 */
	GetClipboardText() {}

	/**
	 * Get user country name
	 * @return {str} 
	 */
	GetCountry() {}

	/**
	 * Get users country code
	 * @return {str} 
	 */
	GetCountryCode() {}

	/**
	 * Retreive saved data
	 * @param {str} name 
	 * @return {str} 
	 */
	GetData(name) {}

	/**
	 * Get apps database folder
	 * @return {str_pth} 
	 */
	GetDatabaseFolder() {}

	/**
	 * Returns the current active debug switches
	 * @return {string | ("console"|"ds"|"adb"|"all")[]} 
	 */
	GetDebug() {}

	/**
	 * Get devces default orientation
	 * @return {"Portrait"|"Landscape"} 
	 */
	GetDefaultOrientation() {}

	/**
	 * Get device ID
	 * @return {str} 
	 */
	GetDeviceId() {}

	/**
	 * Get apps display height
	 * @return {num_pxl} 
	 */
	GetDisplayHeight() {}

	/**
	 * Get apps display width
	 * @return {num_pxl} 
	 */
	GetDisplayWidth() {}

	/**
	 * Get current drawer state
	 * @param {"left"|"right"} side 
	 * @return {"Open"|"Closed"} 
	 */
	GetDrawerState(side) {}

	/**
	 * Get current DS version
	 * @return {num_flt} 
	 */
	GetDSVersion() {}

	/**
	 * Get environment variable
	 * @param {str} name `PATH`, `...`
	 * @return {str} 
	 */
	GetEnv(name) {}

	/**
	 * Get external sdcard folder
	 * @return {str_pth} 
	 */
	GetExternalFolder() {}

	/**
	 * Get last modified date of a file or folder
	 * @param {str_ptf} file 
	 * @return {Date} Date
	 */
	GetFileDate(file) {}

	/**
	 * Get the size of a file or folder
	 * @param {str_ptf} file 
	 * @return {num_flt} 
	 */
	GetFileSize(file) {}

	/**
	 * Get remaining storage size
	 * @param {"internal"|"external"} mode 
	 * @return {num_gbt} 
	 */
	GetFreeSpace(mode) {}

	/**
	 * Get data about installed apps
	 * @return {{ packageName: str, className: str, uid: num_int, targetSdkVersion: num_int, dataDir: str_pth, sourceDir: str_pth, publicSourceDir: str_pth, nativeLibraryDir: str_pth }[]} 
	 */
	GetInstalledApps() {}

	/**
	 * Get received intent data
	 * @return {{ action: str, type: str, data: str, flags: num_int, extras: { app_intent: str, app_file: str_pth, app_options: str } }} \{ action, type, data, flags, extras: { app_intent, app_file, app_options } }
	 */
	GetIntent() {}

	/**
	 * Get internal storage path
	 * @return {str_pth} 
	 */
	GetInternalFolder() {}

	/**
	 * Get network IP address
	 * @return {str} 
	 */
	GetIPAddress() {}

	/**
	 * Returns the name of a conected joystick
	 * @param {num_int} id 
	 * @return {str} 
	 */
	GetJoystickName(id) {}

	/**
	 * Returns the state of a connected joystick
	 * @param {num_int} id 
	 * @param {str} key `A`, `B`, `C`, `X`, `Y`, `Z`, `R1`, `L1`, `Left`, `Right`, `Up`, `Down`, `Start`, `ThumbLeft`, `ThumbRight`, `axis-0..9`, `btn-1..12`
	 * @return {num} 
	 */
	GetJoystickState(id, key) {}

	/**
	 * Get joystick key states object
	 * @param {num_int} id 
	 * @return {{[key: str]: num}} \{ key: value }
	 */
	GetJoystickStates(id) {}

	/**
	 * Get current keyboard height
	 * @return {num_pxl} 
	 */
	GetKeyboardHeight() {}

	/**
	 * Get device language
	 * @return {str} 
	 */
	GetLanguage() {}

	/**
	 * Get user language code
	 * @return {str} 
	 */
	GetLanguageCode() {}

	/**
	 * Get devices MAC address
	 * @return {str} 
	 */
	GetMacAddress() {}

	/**
	 * Get a path to an unambiguous media file
	 * @param {str} folder `app name`
	 * @param {str} ext 
	 * @return {str_pth} 
	 */
	GetMediaFile(folder, ext) {}

	/**
	 * Get RAM memory information
	 * @return {{ avail: num_byt, low: bin, threshold: num_byt, total: num_byt }} \{ avail, low, threshold, total }
	 */
	GetMemoryInfo() {}

	/**
	 * Returns a string list of metadata values contained in an audio file
	 * @param {str_ptf} file 
	 * @param {string | ("album"|"artist"|"genre"|"title"|"composer"|"author"|"duration"|"bitrate"|"width"|"height")[]} [keys] 
	 * @return {str_com} 
	 */
	GetMetadata(file, keys) {}

	/**
	 * Get device model name
	 * @return {str} 
	 */
	GetModel() {}

	/**
	 * Get APK name
	 * @return {str} 
	 */
	GetName() {}

	/**
	 * Get the caller notification id
	 * @return {str} 
	 */
	GetNotifyId() {}

	/**
	 * Get map of created DroidScript objects
	 * @return {dso[]} 
	 */
	GetObjects() {}

	/**
	 * Get app options
	 * @return {string | ("portrait"|"landscape"|"dark"|"light"|"holo"|"node"|"hybrid"|"mui"|"transparent"|"debug"|"remote"|"noswapify")[]} 
	 */
	GetOptions() {}

	/**
	 * Get current screen orientation
	 * @return {"Portrait"|"Landscape"} 
	 */
	GetOrientation() {}

	/**
	 * Get API target level
	 * @return {num_int} 
	 */
	GetOSVersion() {}

	/**
	 * Get APK package name
	 * @return {str} 
	 */
	GetPackageName() {}

	/**
	 * Get list of paired bluetooth devices
	 * @return {{ name: str, address: str }[]} 
	 */
	GetPairedBtDevices() {}

	/**
	 * Get APK's local storage path
	 * @return {str_pth} 
	 */
	GetPath() {}

	/**
	 * GetPermission accepts a list of 'dangerus' classified permissions and returns a list of ungranted permissions in the **callback** function, or in case of only “ExtSDCard” the path URI of the user-selected folder
	 * @param {str_com} type `Camera`, `ExtSDcard`, `External`, `Internal`, `Network`, `Notify`, `Storage`, `Overlay`, `SMS`, `Location`, `Calendar`, `Body`, `Contacts`, `Record`, `Phone`, `Biometric`, `Accounts`, `License`, `android.permission.*`, `usb:<pid>`
	 * @param {(ungranted: str_com|str_uri) => void} [callback] 
	 * @return {void} 
	 */
	GetPermission(type, callback) {}

	/**
	 * Get path to a private folder
	 * @param {str} name 
	 * @param {"external"} [options] 
	 * @return {str_pth} 
	 */
	GetPrivateFolder(name, options) {}

	/**
	 * Get ID of a resource
	 * @param {str} name 
	 * @param {"android"} [options] 
	 * @return {str} 
	 */
	GetResourceId(name, options) {}

	/**
	 * Get current device ringer mode
	 * @return {"Normal"|"Vibrate"|"Silent"} 
	 */
	GetRingerMode() {}

	/**
	 * Get device rotation
	 * @return {0|90|180|270} 
	 */
	GetRotation() {}

	/**
	 * Returns the routers ip address
	 * @return {str} `ip address`
	 */
	GetRouterAddress() {}

	/**
	 * Get RSSI in dBm
	 * @return {num_int} `-127..-30`
	 */
	GetRSSI() {}

	/**
	 * Get list of running apps
	 * @return {{ user: num_int, pid: num_int, name: str, foreground: bin }[]} 
	 */
	GetRunningApps() {}

	/**
	 * Get list of running services
	 * @return {{ user: num_int, pid: num_int, name: str }[]} 
	 */
	GetRunningServices() {}

	/**
	 * Get the screen density
	 * @return {num_int} 
	 */
	GetScreenDensity() {}

	/**
	 * Get width of device screen
	 * @param {"Real"} [options] 
	 * @return {num_pxl} 
	 */
	GetScreenHeight(options) {}

	/**
	 * Get height of device screen
	 * @param {"Real"} [options] 
	 * @return {num_pxl} 
	 */
	GetScreenWidth(options) {}

	/**
	 * Get list of shared files
	 * @return {str_pth[]} 
	 */
	GetSharedFiles() {}

	/**
	 * Get value of shared text
	 * @return {str} 
	 */
	GetSharedText() {}

	/**
	 * Get associated app shortcuts
	 * @return {lst} 
	 */
	GetShortcuts() {}

	/**
	 * Checks if the speaker is enabled for phone calls
	 * @return {bin} 
	 */
	GetSpeakerPhone() {}

	/**
	 * Get full path to a special media folder
	 * @param {"DCIM"|"Pictures"|"Movies"|"Downloads"|"Documents"|"Music"} name 
	 * @return {str_pth} 
	 */
	GetSpecialFolder(name) {}

	/**
	 * Get tts engines
	 * @return {str[]} 
	 */
	GetSpeechEngines() {}

	/**
	 * Get WiFi network SSID (name)
	 * @return {str} 
	 */
	GetSSID() {}

	/**
	 * Calculates text bounds
	 * @param {str} txt 
	 * @param {num} [size] 
	 * @param {num_frc} [width] 
	 * @param {dso} [obj] 
	 * @return {{ width: num_frc, height: num_frc }} \{ width, height }
	 */
	GetTextBounds(txt, size, width, obj) {}

	/**
	 * Get theme configuration
	 * @return {{ baseTheme: str, holo: bin, dark: bin, titleHeight: num_frc, backColor: str_col, dialogColor: str_col, btnColor: str_col, dialogBtnColor: str_col, textColor1: str_col, textColor2: str_col,btnTextColor: str_col, highlightColor: str_col }} \{ baseTheme, holo, dark, titleHeight, backColor, dialogColor, btnColor, dialogBtnColor, textColor1, textColor2,btnTextColor, highlightColor }
	 */
	GetThemeInfo() {}

	/**
	 * Create downscaled copy of an image
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {num_pxl} [width=-1] 
	 * @param {num_pxl} [height=-1] 
	 * @return {void} 
	 */
	GetThumbnail(source, destination, width, height) {}

	/**
	 * Returns the upper border distance from the app display to the device screen as height relative float or in pixels with the **px** option
	 * @param {"px"} [options] 
	 * @return {num_frc} 
	 */
	GetTop(options) {}

	/**
	 * Returns the object class name
	 * @return {"App"} 
	 */
	GetType() {}

	/**
	 * Get current user email
	 * @return {str_acc} 
	 */
	GetUser() {}

	/**
	 * Get apk version number
	 * @return {num} 
	 */
	GetVersion() {}

	/**
	 * Get volume of a given audio type
	 * @param {"alarm"|"dtmf"|"music"|"notification"|"ring"|"system"|"voicecall"} stream 
	 * @return {num_frc} 
	 */
	GetVolume(stream) {}

	/**
	 * Puts the phone into sleep mode
	 * @return {void} 
	 */
	GoToSleep() {}

	/**
	 * Checks if device has soft keys
	 * @return {bin} 
	 */
	HasSoftNav() {}

	/**
	 * Hide the main app layout
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Hide the device keyboard
	 * @return {void} 
	 */
	HideKeyboard() {}

	/**
	 * Hide progress indicator
	 * @return {void} 
	 */
	HideProgress() {}

	/**
	 * Hide progress bar dialog
	 * @return {void} 
	 */
	HideProgressBar() {}

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
	 * @return {void} 
	 */
	HttpRequest(type, baseUrl, path, params, callback, headers) {}

	/**
	 * In ide
	 * @return {bin} 
	 */
	InIDE() {}

	/**
	 * Start apk installation process
	 * @param {str_ptf} apkFile 
	 * @param {(packageName: str, status: str) => void} [callback] 
	 * @param {str} [options] 
	 * @return {bin} 
	 */
	InstallApp(apkFile, callback, options) {}

	/**
	 * Returns true if ran from apk
	 * @return {bin} 
	 */
	IsAPK() {}

	/**
	 * Check if package is installed
	 * @param {str} packageName 
	 * @return {bin} 
	 */
	IsAppInstalled(packageName) {}

	/**
	 * Check bluetooth enabled
	 * @return {bin} 
	 */
	IsBluetoothEnabled() {}

	/**
	 * Check if bluetooth is on
	 * @return {bin} 
	 */
	IsBluetoothOn() {}

	/**
	 * Check bt paired state to other device
	 * @param {str} name 
	 * @return {bin} 
	 */
	IsBtDevicePaired(name) {}

	/**
	 * Check whether device is charging
	 * @return {bin} 
	 */
	IsCharging() {}

	/**
	 * Check if device OS is ChromeOS
	 * @return {bin} 
	 */
	IsChrome() {}

	/**
	 * Check if device is connected to any network
	 * @return {bin} 
	 */
	IsConnected() {}

	/**
	 * Check whether app is debugging
	 * @return {bin} 
	 */
	IsDebugging() {}

	/**
	 * Check if debug view is currently shown
	 * @return {bin} 
	 */
	IsDebugVisible() {}

	/**
	 * Check if path leads to a folder
	 * @param {str_ptd} folder 
	 * @return {bin} 
	 */
	IsFolder(folder) {}

	/**
	 * Check whether device keyboard is shown
	 * @return {bin} 
	 */
	IsKeyboardShown() {}

	/**
	 * Check if location method is enabled
	 * @param {"GPS"|"Network"} mode 
	 * @return {bin} 
	 */
	IsLocationEnabled(mode) {}

	/**
	 * Check if NavBar is on righthand side
	 * @return {bin} 
	 */
	IsNavBarOnRight() {}

	/**
	 * Check if apk version increased
	 * @return {bin} 
	 */
	IsNewVersion() {}

	/**
	 * Check if device is in portrait mode
	 * @return {bin} 
	 */
	IsPortrait() {}

	/**
	 * Check if user has a DroidScript Premium subscription
	 * @return {bin} 
	 */
	IsPremium() {}

	/**
	 * Indicates 'scoped storage' on Android 10+
	 * @return {bin} 
	 */
	IsScoped() {}

	/**
	 * Check if device screen is on
	 * @return {bin} 
	 */
	IsScreenOn() {}

	/**
	 * Check id app is a service
	 * @return {bin} 
	 */
	IsService() {}

	/**
	 * Check if app has finished loading
	 * @return {bin} 
	 */
	IsStarted() {}

	/**
	 * Check if user device is a tablet
	 * @return {bin} 
	 */
	IsTablet() {}

	/**
	 * Check if OS is AndroidThings
	 * @return {bin} 
	 */
	IsTV() {}

	/**
	 * Check if the mobile Wifi Access Point is enabled
	 * @return {bin} 
	 */
	IsWifiApEnabled() {}

	/**
	 * Check if WiFi is enabled
	 * @return {bin} 
	 */
	IsWifiEnabled() {}

	/**
	 * Kill an app by its pid
	 * @param {num_int} pid 
	 * @return {void} 
	 */
	KillApp(pid) {}

	/**
	 * Launch or search an app
	 * @param {str} packageName 
	 * @param {bin} [noPlay] `dont search`
	 * @return {void} 
	 */
	LaunchApp(packageName, noPlay) {}

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
	ListFolder(path, filter, limit, options) {}

	/**
	 * Returns a list of granted permissions
	 * 	 * 
	 * 	 * See Also: GetPermission CheckPermission RemovePermission
	 * @param {"Camera"|"Storage"|"ExtSDcard"|"Network"|"Notify"|"Location"|"SMS"|"Calendar"|"Body"|"Contacts"|"Record"|"Biometric"|"Phone"|"Accounts"|"License"} type 
	 * @return {str_uri[]} 
	 */
	ListPermissions(type) {}

	/**
	 * Load saved boolean value
	 * @param {str} name 
	 * @param {bin} [dflt] 
	 * @param {str_ptf} [file] 
	 * @return {bin} 
	 */
	LoadBoolean(name, dflt, file) {}

	/**
	 * Load saved json object
	 * @param {str} name 
	 * @param {obj} [dflt] 
	 * @param {str_ptf} [file] 
	 * @return {obj} 
	 */
	LoadJson(name, dflt, file) {}

	/**
	 * Load saved boolean value
	 * @param {str} name 
	 * @param {num} [dflt] 
	 * @param {str_ptf} [file] 
	 * @return {num} 
	 */
	LoadNumber(name, dflt, file) {}

	/**
	 * Load an installed plugin to your app
	 * @param {str_url} url 
	 * @return {void} 
	 */
	LoadPlugin(url) {}

	/**
	 * Asynchronously import a .js file
	 * @param {str_pth} path 
	 * @param {(info: { isTrusted: bin }) => void} [callback] 
	 * @return {void} 
	 */
	LoadScript(path, callback) {}

	/**
	 * Load saved text value to remember varibale values between multiple app starts
	 * @param {str} name 
	 * @param {str} [dflt] 
	 * @param {str_ptf} [file] 
	 * @return {void} 
	 */
	LoadText(name, dflt, file) {}

	/**
	 * Lock the device
	 * @return {void} 
	 */
	Lock() {}

	/**
	 * Hide and lock a drawer
	 * @param {"left"|"right"} side 
	 * @return {void} 
	 */
	LockDrawer(side) {}

	/**
	 * Create new folder in the local fs
	 * @param {str_ptd} folder 
	 * @return {void} 
	 */
	MakeFolder(folder) {}

	/**
	 * OpenDatabase creates or opens a local database in which large amounts of data can be stored that can still be queried in a reasonable amount of time
	 * @param {str} name 
	 * @return {DsDatabase} 
	 */
	OpenDatabase(name) {}

	/**
	 * Opens the drawer layout on the given side with slide animation
	 * @param {"left"|"right"} side 
	 * @return {void} 
	 */
	OpenDrawer(side) {}

	/**
	 * Allow user to open a file with an external app
	 * @param {str_ptf} file 
	 * @param {str_mim} [type] 
	 * @param {str} [choose] 
	 * @return {void} 
	 */
	OpenFile(file, type, choose) {}

	/**
	 * Allow user to open an url with an external app
	 * @param {str_url} url 
	 * @param {str_mim} [type] 
	 * @param {str} [choose] 
	 * @return {void} 
	 */
	OpenUrl(url, type, choose) {}

	/**
	 * Pairs a bluetooth device with yours
	 * @param {str} address 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	PairBtDevice(address, callback) {}

	/**
	 * Convert file path to content uri
	 * @param {str_pth} path 
	 * @return {str_ptc} `content://[uri]`
	 */
	Path2Uri(path) {}

	/**
	 * Pin app on screen
	 * @param {bin} enable 
	 * @return {void} 
	 */
	PinScreen(enable) {}

	/**
	 * Play specific ringtone type
	 * @param {"Alarm"|"Notification"|"Ringtone"} type 
	 * @return {void} 
	 */
	PlayRingtone(type) {}

	/**
	 * Plays a local or remote sound file
	 * @param {str_ptf|str_url} file 
	 * @return {void} 
	 */
	PlaySound(file) {}

	/**
	 * Prevent screen from locking after some time
	 * @param {bin|"Full"|"Partial"} mode <br>
 	 * &emsp; `Full` - Device can sleep,Screen and Keyboard on\
 	 * &emsp; `Partial` - CPU always on,Screen and Keyboard off
	 * @return {void} 
	 */
	PreventScreenLock(mode) {}

	/**
	 * Prevent Wifi from powering down
	 * @return {void} 
	 */
	PreventWifiSleep() {}

	/**
	 * Queries content from the android content model
	 * @param {str_uri} uri 
	 * @param {str_com} columns 
	 * @param {str_sql} [select] 
	 * @param {lst} [args] 
	 * @param {"coloumn"} [sort] <br>
 	 * &emsp; `coloumn` - a coloumn specified in 'coloumns'
	 * @return {void} 
	 */
	QueryContent(uri, columns, select, args, sort) {}

	/**
	 * Quit the app with showing a dialog and exit after closing
	 * @param {str} msg 
	 * @param {str} [title] 
	 * @param {string | ("NoDim"|"NoFocus")[]} [options] 
	 * @return {void} 
	 */
	Quit(msg, title, options) {}

	/**
	 * Read the content of a local file
	 * @param {str_ptc} file 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16"|"UTF-16BE"|"UTF-16LE"|"windows-1252"|"ISO-8859-1"|"base64"} [encoding] <br>
 	 * &emsp; `ISO-8859-1` - Latin-1
	 * @return {void} 
	 */
	ReadFile(file, encoding) {}

	/**
	 * Read local file content data
	 * @param {str_pfa} file 
	 * @param {"base64"|"hex"|"int"|"ascii"} [mode] 
	 * @return {void} 
	 */
	ReadFileData(file, mode) {}

	/**
	 * Convert short to full path
	 * @param {str_pth} path 
	 * @return {void} 
	 */
	RealPath(path) {}

	/**
	 * Read assets from given folder
	 * @param {str_ptd} dir 
	 * @return {void} 
	 */
	RedirectAssets(dir) {}

	/**
	 * Remove drawer layout from a given side
	 * @param {"left"|"right"} side 
	 * @return {void} 
	 */
	RemoveDrawer(side) {}

	/**
	 * Removes a layout added to the app
	 * @param {DsLayout} layout 
	 * @return {void} 
	 */
	RemoveLayout(layout) {}

	/**
	 * Removes a granted permission
	 * 	 * 
	 * 	 * See Also: GetPermission CheckPermission ListPermissions
	 * @param {str_uri} uri 
	 * @return {void} 
	 */
	RemovePermission(uri) {}

	/**
	 * Rename or move a local file
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @return {void} 
	 */
	RenameFile(source, destination) {}

	/**
	 * Rename or move a local folder
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @return {void} 
	 */
	RenameFolder(source, destination) {}

	/**
	 * Replace text in a local file
	 * @param {str_ptf} file 
	 * @param {str} txt 
	 * @param {str} rep 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	ReplaceInFile(file, txt, rep, options) {}

	/**
	 * Save a boolean value across multiple starts
	 * @param {str} name 
	 * @param {bin} value 
	 * @param {str_ptf} [file] 
	 * @return {void} 
	 */
	SaveBoolean(name, value, file) {}

	/**
	 * Save web cookies
	 * @return {void} 
	 */
	SaveCookies() {}

	/**
	 * Save a json object across multiple starts
	 * @param {str} name 
	 * @param {obj} value 
	 * @param {str_ptf} [file] 
	 * @return {void} 
	 */
	SaveJson(name, value, file) {}

	/**
	 * Save a number value across multiple starts
	 * @param {str} name 
	 * @param {num} value 
	 * @param {str_ptf} [file] 
	 * @return {void} 
	 */
	SaveNumber(name, value, file) {}

	/**
	 * Save a text value across multiple starts
	 * @param {str} name 
	 * @param {str} value 
	 * @param {str_ptf} [file] 
	 * @return {void} 
	 */
	SaveText(name, value, file) {}

	/**
	 * Adds media files to phone gallery
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	ScanFile(file) {}

	/**
	 * Schedules background jobs defined in a Job.js file
	 * 	 * 
	 * 	 * See Also: CancelJob
	 * @param {num_mls} delay 
	 * @param {str} [options] 
	 * @return {void} 
	 */
	ScheduleJob(delay, options) {}

	/**
	 * Take a screen shot of your app
	 * @param {str_ptf} fileName 
	 * @param {num_prc} [quality] 
	 * @return {void} 
	 */
	ScreenShot(fileName, quality) {}

	/**
	 * Import an external JavaScript file
	 * @param {str_ptf} file 
	 * @param {bin} [noDefer=false] `load script inline`
	 * @return {void} 
	 */
	Script(file, noDefer) {}

	/**
	 * Send a file to a remote target
	 * @param {str_pfa} file 
	 * @param {str} [subject] 
	 * @param {str} [text] 
	 * @param {str} [choose] 
	 * @return {void} 
	 */
	SendFile(file, subject, text, choose) {}

	/**
	 * Send an image to a remote target
	 * @param {str_pfa} file 
	 * @param {str} [choose] 
	 * @return {void} 
	 */
	SendImage(file, choose) {}

	/**
	 * Intens can be used to perform an operation between different applications or activities
	 * @param {str} [packageName] 
	 * @param {str} [className] 
	 * @param {str} [action] android.intent.action.*
	 * @param {str} [category] android.intent.category.*
	 * @param {str_uri} [uri] 
	 * @param {str_mim} [type] 
	 * @param {{ name: str, type: "string"|"float"|"int"|"long"|"bool"|"list"|"file"|"uri"|"keydown"|"keyup", value: str }[]} [extras] 
	 * @param {string | ("Result"|"ClearTask")[]} [options=''] <br>
 	 * &emsp; `Result` - expect a result to be passed to the callback function
	 * @param {(resultCode: -1|0|1, data?: { action: str, type: str, data: str, flags: num_int, extras: obj }) => void} [callback] 
	 * @return {void} 
	 */
	SendIntent(packageName, className, action, category, uri, type, extras, options, callback) {}

	/**
	 * Open the EMail app and autofill fields
	 * @param {str} address 
	 * @param {str} [subject] 
	 * @param {str} [body] 
	 * @param {str_pth} [attach] 
	 * @param {str_mim} [type] 
	 * @param {"SendTo"} [options] 
	 * @return {void} 
	 */
	SendMail(address, subject, body, attach, type, options) {}

	/**
	 * Send message from Service to main app
	 * @param {str} message 
	 * @return {void} 
	 */
	SendMessage(message) {}

	/**
	 * Open the SMS app and autofill fields
	 * @param {str} [msg] 
	 * @param {str_num} [number] 
	 * @return {void} 
	 */
	SendSMS(msg, number) {}

	/**
	 * Share text between apps
	 * @param {str} text 
	 * @param {str} [subject] 
	 * @param {str} [choose] 
	 * @return {void} 
	 */
	SendText(text, subject, choose) {}

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
	 * @return {void} 
	 */
	SetAlarm(type, id, callback, time, interval, options) {}

	/**
	 * Load the language code from lang.json
	 * @param {str} name 
	 * @return {void} 
	 */
	SetAppLanguage(name) {}

	/**
	 * Autostart APK when device boots
	 * @param {"App"|"Service"|"None"} auto 
	 * @return {void} 
	 */
	SetAutoBoot(auto) {}

	/**
	 * Autostart DroidScript Project on DS restart
	 * @param {str} appName 
	 * @return {void} 
	 */
	SetAutoStart(appName) {}

	/**
	 * Automatically enable the WiFi editor
	 * @param {bin} auto 
	 * @return {void} 
	 */
	SetAutoWifi(auto) {}

	/**
	 * Change the app's background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Enable Bluetooth on the device
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetBluetoothEnabled(enable) {}

	/**
	 * Change the device clipboard text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetClipboardText(text) {}

	/**
	 * Save data while app is running
	 * @param {str} name 
	 * @param {str} value 
	 * @return {void} 
	 */
	SetData(name, value) {}

	/**
	 * Control the debug level of the program
	 * @param {string | ("console"|"ds"|"adb"|"all")[]} switches 
	 * @return {void} 
	 */
	SetDebug(switches) {}

	/**
	 * Control the debug level of the program
	 * @param {bin} onoff 
	 * @return {void} 
	 */
	SetDebugEnabled(onoff) {}

	/**
	 * Changes the dpi value for any control creatred afterwards
	 * @param {num_int} dpi 
	 * @return {void} 
	 */
	SetDensity(dpi) {}

	/**
	 * Filter/ignore certain errors
	 * @param {str} regex `regex pattern`
	 * @return {void} 
	 */
	SetErrorFilter(regex) {}

	/**
	 * Set services to run in the background
	 * @return {void} 
	 */
	SetInBackground() {}

	/**
	 * Set services to run in the foreground
	 * @param {str} [title] 
	 * @param {str} [text] 
	 * @param {str_ptf} [largeIcon] 
	 * @param {str_ptf} [smallIcon] 
	 * @param {"min"|"low"|"default"|"high"|"none"} [importance] 
	 * @return {void} 
	 */
	SetInForeground(title, text, largeIcon, smallIcon, importance) {}

	/**
	 * Set options for the connected joystick
	 * @param {string | ("ForwardKeys")[]} [options] <br>
 	 * &emsp; `ForwardKeys` - allows the joystick key presses to pass onto the child controls of the main activity
	 * @return {void} 
	 */
	SetJoystickOptions(options) {}

	/**
	 * Blocks android functionality outside your app
	 * @param {string | ("Power"|"Status"|"Nav"|"NavRight"|"LockTask"|"Pin")[]} mode <br>
 	 * &emsp; `LockTask` - COSU kiosk\
 	 * &emsp; `Pin` - task un-/pinning
	 * @param {bin} [enable] 
	 * @param {string | ("Black"|"Tasks")[]} [options=''] <br>
 	 * &emsp; `Tasks` - prevents recent tasks button working
	 * @param {str} [packages] 
	 * @return {void} 
	 */
	SetKioskMode(mode, enable, options, packages) {}

	/**
	 * Set default margins
	 * @param {num} [left=0] 
	 * @param {num} [top=0] 
	 * @param {num} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Set app menu
	 * @param {str_com} list 
	 * @param {str_ptf} [iconPath] 
	 * @return {void} 
	 */
	SetMenu(list, iconPath) {}

	/**
	 * Emulate GPS location
	 * @param {num} lat 
	 * @param {num} lng 
	 * @param {num} [accuracy] 
	 * @return {void} 
	 */
	SetMockLocation(lat, lng, accuracy) {}

	/**
	 * Set NavBar color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetNavBarColor(color) {}

	/**
	 * Called on incoming Broadcasts
	 * @param {(type: str, msg: str) => void} callback 
	 * @param {str} action 
	 * @return {void} 
	 */
	SetOnBroadcast(callback, action) {}

	/**
	 * Called on app debug messages
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnDebug(callback) {}

	/**
	 * Called on thrown JS errors
	 * @param {(error: str) => void} callback 
	 * @return {void} 
	 */
	SetOnError(callback) {}

	/**
	 * Catch key events fired in your app
	 * @param {(action: "DOWN"|"UP", name: str, keycode: num_int, extrakeys: "Shift"|"Ctrl"|"Alt"|"Meta") => void} callback 
	 * @return {void} 
	 */
	SetOnKey(callback) {}

	/**
	 * Called on keyboard visibility changes
	 * @param {(shown: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnShowKeyboard(callback) {}

	/**
	 * Called on WiFi connected state changes
	 * @param {(state: "CONNECTING"|"CONNECTED"|"DISCONNECTED", ssid: str) => void} callback 
	 * @return {void} 
	 */
	SetOnWifiChange(callback) {}

	/**
	 * Define global app options
	 * @param {string | ("UseBrowser"|"NoKeys"|"ShowKeys"|"NoPause"|"NoThemeAlerts"|"IgnoreSslErrors"|"TouchModal"|"NoCors"|"NoTouch"|"NoFocus"|"Secure"|"ShowLocked"|"WakeScreen"|"ScreenOn")[]} [options] <br>
 	 * &emsp; `NoPause` - dont pause when not in foreground
	 * @return {void} 
	 */
	SetOptions(options) {}

	/**
	 * Fix display orientation
	 * @param {"Default"|"Landscape"|"ReverseLandscape"|"Portrait"|"ReversePortrait"} orient 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	SetOrientation(orient, callback) {}

	/**
	 * Change app position and size
	 * @param {num_frc} left 
	 * @param {num_frc} top 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Change GUI thread priority
	 * @param {"Low"|"Medium"|"High"} level 
	 * @return {void} 
	 */
	SetPriority(level) {}

	/**
	 * Set current device ringer mode
	 * @param {"Normal"|"Vibrate"|"Silent"} mode 
	 * @return {void} 
	 */
	SetRingerMode(mode) {}

	/**
	 * Change screen brightness
	 * @param {num_frc} level 
	 * @return {void} 
	 */
	SetScreenBrightness(level) {}

	/**
	 * Changes the screen mode of your application
	 * @param {"Default"|"Normal"|"Full"|"Game"} mode 
	 * @return {void} 
	 */
	SetScreenMode(mode) {}

	/**
	 * Auto-Launch Project when shared data received
	 * @param {"AppName"} name 
	 * @return {void} 
	 */
	SetSharedApp(name) {}

	/**
	 * En/Disable speaker for phone calls
	 * @param {bin} on 
	 * @return {void} 
	 */
	SetSpeakerPhone(on) {}

	/**
	 * Set status bar color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetStatusBarColor(color) {}

	/**
	 * Set default text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode='px'] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the theme of your app to any created [Theme Object](CreateTheme.htm)
	 * @param {DsTheme} theme 
	 * @return {void} 
	 */
	SetTheme(theme) {}

	/**
	 * Change the user agent for html apps
	 * @param {str} agent 
	 * @param {str} [options] `Add-appends to default user agent`
	 * @return {void} 
	 */
	SetUserAgent(agent, options) {}

	/**
	 * Set user credentials in an html app for websites that require user login
	 * @param {str} name 
	 * @param {str} password 
	 * @return {void} 
	 */
	SetUserCreds(name, password) {}

	/**
	 * Change volume of a given audio type
	 * @param {"Alarm"|"DTMF"|"Music"|"Notification"|"Ring"|"System"|"Voicecall"} stream <br>
 	 * &emsp; `DTMF` - Dual Tone Multi-Frequency
	 * @param {num_frc} level 
	 * @param {"ShowUI"} [options] 
	 * @return {void} 
	 */
	SetVolume(stream, level, options) {}

	/**
	 * En/Disable the mobile Wifi Access Point of the device
	 * @param {bin} enable 
	 * @param {str} [ssid] 
	 * @param {str} [key] 
	 * @return {void} 
	 */
	SetWifiApEnabled(enable, ssid, key) {}

	/**
	 * En/Disable Wifi on the device
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetWifiEnabled(enable) {}

	/**
	 * Show main app layout
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Shows a CheckList
	 * @param {str} title 
	 * @param {str|{ title: str, check: bin }} list `title:checked`
	 * @param {(data: { title: str, checked: bin }) => void} [callback] 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {str} [options] sun-moon:shows sun and moon icons instead of default check boxes
	 * @return {DsCheckList} 
	 */
	ShowCheckList(title, list, callback, width, height, options) {}

	/**
	 * Opens the in-app debug console as black overlay
	 * @param {bin} show 
	 * @param {"dialog"|"clear"} [options] <br>
 	 * &emsp; `dialog` - Show the debug log as black overlay dialog\
 	 * &emsp; `clear` - Clear content before showing
	 * @return {void} 
	 */
	ShowDebug(show, options) {}

	/**
	 * Show keyboard on a focussed control
	 * @param {dso} obj 
	 * @return {bin} 
	 */
	ShowKeyboard(obj) {}

	/**
	 * Show the in-app menu
	 * @return {void} 
	 */
	ShowMenu() {}

	/**
	 * Show a popup message
	 * @param {str} message 
	 * @param {string | ("Bottom"|"Short"|"Long")[]} [options] 
	 * @return {void} 
	 */
	ShowPopup(message, options) {}

	/**
	 * Show a progress indicator
	 * @param {str} message 
	 * @param {string | ("NoDim"|"NonModal"|"Solid")[]} [options] <br>
 	 * &emsp; `NoDim` - Don't darken background\
 	 * &emsp; `NonModal` - allow background touch\
 	 * &emsp; `Solid` - shows solid background behind spinner
	 * @return {void} 
	 */
	ShowProgress(message, options) {}

	/**
	 * Show a progress bar dialog
	 * @param {str} title 
	 * @param {num_prc} [percent] 
	 * @param {"Light"} [options] 
	 * @return {void} 
	 */
	ShowProgressBar(title, percent, options) {}

	/**
	 * Show a text input dialog
	 * @param {str} title 
	 * @param {str} [dflt] 
	 * @param {(text: str) => void} [callback] 
	 * @return {void} 
	 */
	ShowTextDialog(title, dflt, callback) {}

	/**
	 * Shows a tooltip message on the screen
	 * @param {str} message 
	 * @param {num_frc} [left] 
	 * @param {num_frc} [top] 
	 * @param {num_mls} [timeOut] 
	 * @param {"Down"} [options] 
	 * @return {void} 
	 */
	ShowTip(message, left, top, timeOut, options) {}

	/**
	 * Simulates a drag event on an app object in a scrollable container
	 * @param {dso} obj 
	 * @param {num_frc} x1 
	 * @param {num_frc} y1 
	 * @param {num_frc} x2 
	 * @param {num_frc} y2 
	 * @param {num} [step] 
	 * @param {num} [pause] 
	 * @return {void} 
	 */
	SimulateDrag(obj, x1, y1, x2, y2, step, pause) {}

	/**
	 * Simulates a key event on an app object
	 * @param {dso} obj 
	 * @param {str} keyName 
	 * @param {"META_META_ON"|"META_RIGHT_ON"|"NUM_LOCK_ON"|"SCROLL_LOCK_ON"|"SHIFT_LEFT_ON"|"SHIFT_MASK"|"SHIFT_ON"|"SHIFT_RIGHT_ON"|"SYM_ON"} [modifiers] 
	 * @param {num} [pause] 
	 * @return {void} 
	 */
	SimulateKey(obj, keyName, modifiers, pause) {}

	/**
	 * Simulates a scroll event on a scrollable app object
	 * @param {dso} obj 
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} dx 
	 * @param {num_frc} dy 
	 * @param {num} [count] 
	 * @param {num} [fling] 
	 * @return {void} 
	 */
	SimulateScroll(obj, x, y, dx, dy, count, fling) {}

	/**
	 * Simulate a touch event on a reachable control
	 * @param {dso} obj 
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {"Down"|"Move"|"Up"} dir 
	 * @return {void} 
	 */
	SimulateTouch(obj, x, y, dir) {}

	/**
	 * Start your DS app in an html project
	 * @return {void} 
	 */
	Start() {}

	/**
	 * Starts an app in a new window
	 * @param {str_ptf} file 
	 * @param {string | ("Portrait"|"Landscape"|"Transparent"|"Debug"|"Game"|"remote")[]} [options=''] <br>
 	 * &emsp; `Debug` - start app in debug mode\
 	 * &emsp; `Game` - runs in GameView mode
	 * @param {str} [intent] `{ action`, ` type`, ` data`, ` extras }`
	 * @return {void} 
	 */
	StartApp(file, options, intent) {}

	/**
	 * Start remote debug server
	 * @return {void} 
	 */
	StartDebugServer() {}

	/**
	 * Starts a parallel service
	 * @param {str} packageName 
	 * @param {str} className 
	 * @return {void} 
	 */
	StartService(packageName, className) {}

	/**
	 * Stop an app started via StartApp
	 * @param {str_pth} name 
	 * @return {void} 
	 */
	StopApp(name) {}

	/**
	 * Stop a running debug server
	 * @return {void} 
	 */
	StopDebugServer() {}

	/**
	 * Stops a running app service
	 * @return {void} 
	 */
	StopService() {}

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
	SysExec(command, options, maxRead, timeout) {}

	/**
	 * Audiolize text
	 * @param {str} text 
	 * @param {num} [pitch] 
	 * @param {num} [rate] 
	 * @param {() => void} [callback] 
	 * @param {"music"} [stream] 
	 * @param {str} [locale] 
	 * @param {str} [engine] 
	 * @return {void} 
	 */
	TextToSpeech(text, pitch, rate, callback, stream, locale, engine) {}

	/**
	 * Put the app in the background
	 * @return {void} 
	 */
	ToBack() {}

	/**
	 * Bring your app to the foreground
	 * @return {void} 
	 */
	ToFront() {}

	/**
	 * Translate “Ok” and “Cancel” buttons
	 * @param {str} Ok 
	 * @param {str} Cancel 
	 * @return {void} 
	 */
	Translate(Ok, Cancel) {}

	/**
	 * Unlocks the device
	 * @return {void} 
	 */
	Unlock() {}

	/**
	 * Unlock a locked drawer
	 * @param {"left"|"right"} side 
	 * @return {void} 
	 */
	UnlockDrawer(side) {}

	/**
	 * Unpair a paired Bluetooth device
	 * @param {str} address 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	UnpairBtDevice(address, callback) {}

	/**
	 * Unzip a zip file
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {"spk"} [options] <br>
 	 * &emsp; `spk` - Extract SPK as DS project folder
	 * @return {void} 
	 */
	UnzipFile(source, destination, options) {}

	/**
	 * Update the ProgressBar percentage
	 * @param {num_prc} percent 
	 * @param {"doevents"} [options] <br>
 	 * &emsp; `doevents` - force v8 UI update
	 * @return {void} 
	 */
	UpdateProgressBar(percent, options) {}

	/**
	 * Force UI refresh
	 * @param {num_mls} ms `Update Rate`
	 * @return {void} 
	 */
	UpdateUI(ms) {}

	/**
	 * Uploads a file to a server
	 * @param {str_url} url 
	 * @param {str_ptf} file 
	 * @param {str} name 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	UploadFile(url, file, name, callback) {}

	/**
	 * Decode a URI encoded string
	 * @param {str_uri} uri 
	 * @param {str} [options] `returns DS style paths`
	 * @return {str} 
	 */
	Uri2Path(uri, options) {}

	/**
	 * Vibrate device in a pattern
	 * @param {str_com} pattern 
	 * @return {void} 
	 */
	Vibrate(pattern) {}

	/**
	 * Perform a synchronous delay
	 * @param {num_sec} seconds 
	 * @param {bin} [doEvents=false] 
	 * @return {void} 
	 */
	Wait(seconds, doEvents) {}

	/**
	 * Wake the screen up
	 * @return {void} 
	 */
	WakeUp() {}

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
	WalkFolder(path, filter, limit, options) {}

	/**
	 * Connect to a WiFi network by specifying the ssid and a password
	 * @param {str} ssid 
	 * @param {str} key 
	 * @return {void} 
	 */
	WifiConnect(ssid, key) {}

	/**
	 * Scan for any available Wifi networks
	 * @param {(ssids: str_pip|lst) => void} callback 
	 * @param {"detail"} [options] 
	 * @return {void} 
	 */
	WifiScan(callback, options) {}

	/**
	 * Write text to a local file
	 * @param {str_ptf} file 
	 * @param {str} text 
	 * @param {"Append"|"ASCII"} [mode] 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16"|"UTF-16BE"|"UTF-16LE"|"windows-1252"|"ISO-8859-1"} [encoding] <br>
 	 * &emsp; `ISO-8859-1` - Latin-1
	 * @return {void} 
	 */
	WriteFile(file, text, mode, encoding) {}

	/**
	 * Compress a file to zip
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {"spk"} [options] <br>
 	 * &emsp; `spk` - Create SPK from File
	 * @return {void} 
	 */
	ZipFile(source, destination, options) {}

	/**
	 * Compress a folder to zip
	 * @param {str_pth} source 
	 * @param {str_pth} destination 
	 * @param {"spk"} [options] <br>
 	 * &emsp; `spk` - Create SPK from DS project folder
	 * @return {void} 
	 */
	ZipFolder(source, destination, options) {}

}

class DsAudioRecorder {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Returns a new list of frequency values
	 * @return {num_int[]} 
	 */
	GetData() {}

	/**
	 * Returns the PMPO value (Peak music power output)
	 * @return {num_flt} 
	 */
	GetPeak() {}

	/**
	 * Returns the RMS value (Root Mean Square)
	 * @return {num_flt} 
	 */
	GetRMS() {}

	/**
	 * Returns the control class name
	 * @return {"AudioRecorder"} 
	 */
	GetType() {}

	/**
	 * Pause the recording
	 * @return {void} 
	 */
	Pause() {}

	/**
	 * Define the recording file
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFile(file) {}

	/**
	 * Define the Recording frequency
	 * @param {8000|11025|22050|44100|48000} frequency 
	 * @return {void} 
	 */
	SetFrequency(frequency) {}

	/**
	 * Define the recording file
	 * @param {"Default"|"Camcorder"|"Mic"|"Unprocessed"|"Voicecommunication"|"Voiceperformance"|"Voicerecognition"} src 
	 * @return {void} 
	 */
	SetSource(src) {}

	/**
	 * Start recording to the specified file
	 * @return {void} 
	 */
	Start() {}

	/**
	 * Stop recording
	 * @return {void} 
	 */
	Stop() {}
}


class DsBluetoothList {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Returns the control class name
	 * @return {"BluetoothList"} 
	 */
	GetType() {}

	/**
	 * Define a callback function for touch events
	 * @param {(name: str, address: str) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}
}


class DsBluetoothSerial {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Clears the Bluetooth buffer of the serial connection
	 * @return {void} 
	 */
	Clear() {}

	/**
	 * Connect a Bluetooth device
	 * @param {str} name 
	 * @param {str} channel 
	 * @return {void} 
	 */
	Connect(name, channel) {}

	/**
	 * Disconnect the Bluetooth connection
	 * @return {void} 
	 */
	Disconnect() {}

	/**
	 * Returns the control class name
	 * @return {"BluetoothSerial"} 
	 */
	GetType() {}

	/**
	 * Checks if Bluetooth is enabled or not
	 * @return {bin} 
	 */
	IsBluetoothEnabled() {}

	/**
	 * Checks if a Bluetooth connection exists to another device
	 * @return {bin} 
	 */
	IsConnected() {}

	/**
	 * Check pairing status to another device
	 * @param {str} name 
	 * @return {bin} 
	 */
	IsPaired(name) {}

	/**
	 * Listen <s>or stop listening</s> for incoming messages
	 * @param {bin} enabled 
	 * @return {void} 
	 */
	Listen(enabled) {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Ask user to enable Bluetooth
	 * @return {void} 
	 */
	RequestEnable() {}

	/**
	 * Define data format for outgoing data
	 * @param {str} mode `Hex`, `Int`, `Text`, `<encoding>`\
 	 * &emsp; `Hex` - comma separated text value\
 	 * &emsp; `Int` - comma separated byte numbers\
 	 * &emsp; `Text` - string of text characters\
 	 * &emsp; `encoding` - UTF-16L/BE
	 * @return {void} 
	 */
	SetDataMode(mode) {}

	/**
	 * If the device has sent the connection request
	 * 	 * 	name is of type boolean (true if the connection was established successful)
	 * 	 * 	and address is your BluetoothSerial object
	 * 	 * 
	 * 	 * if the device has received the connection request
	 * 	 * 	name is a string with the clients bluetooth name
	 * 	 * 	and address includes the bluetooth address
	 * @param {(name: str, address: str) => void} callback 
	 * @return {void} 
	 */
	SetOnConnect(callback) {}

	/**
	 * Called after disconnecting from bluetooth connection
	 * @param {(name: str, address: str) => void} callback 
	 * @return {void} 
	 */
	SetOnDisconnect(callback) {}

	/**
	 * Called after received Data via Bluetooth
	 * @param {(data: str) => void} callback 
	 * @return {void} 
	 */
	SetOnReceive(callback) {}

	/**
	 * Specify how to split received data
	 * @param {"End"|"Start-End"|"Size"} mode 
	 * @param {str|num_int} p2 
	 * @param {str|num_int} [p3] 
	 * @return {void} 
	 */
	SetSplitMode(mode, p2, p3) {}

	/**
	 * Set idle disconnect timeout
	 * @param {num_mls} milliseconds 
	 * @return {void} 
	 */
	SetTimeout(milliseconds) {}

	/**
	 * Send data to connected device
	 * @param {str} data 
	 * @return {void} 
	 */
	Write(data) {}
}


class DsButton {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"Button"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the button was long pressed
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Customize the button looks
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsCameraView {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Takes a picture if a motion was detected
	 * @param {str_ptd} path 
	 * @param {str} fileName File_n#_motion
	 * @param {num_int} [maxCount] 
	 * @return {void} 
	 */
	AutoCapture(path, fileName, maxCount) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Find faces in the current camera view
	 * @param {num_int} [maxCount] 
	 * @return {{ confidence: num_frc, eyeDistance: num, midPoint: {x:num, y:num}, pose: num_int }} \{ confidence, eyeDistance, midPoint, pose }
	 */
	FindFaces(maxCount) {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Returns the device camera count
	 * @return {num_int} 
	 */
	GetCameraCount() {}

	/**
	 * Returns a new list of available color effects
	 * @return {"none"|"mono"|"negative"|"solarize"|"sepia"|"posterize"|"whiteboard"|"blackboard"|"aqua"|"vage-cold"|"point-blue"|"point-red-yellow"|"emboss"|"sketch"|"neon"} 
	 */
	GetColorEffects() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Returns the camera height
	 * @return {num_frc} 
	 */
	GetImageHeight() {}

	/**
	 * Returns the camera width
	 * @return {num_frc} 
	 */
	GetImageWidth() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the hightst possible zoom value
	 * @return {num} 
	 */
	GetMaxZoom() {}

	/**
	 * Get camera parameters
	 * @return {str_smc} `key1=value1;key2=value2;...`
	 */
	GetParameters() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns a new list of possible picture dimensions
	 * @return {str_com} `w1 x h1`, `w2 x h2`, `...`
	 */
	GetPictureSizes() {}

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
	GetPixelData(format, left, top, width, height) {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"CameraView"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Returns the curent zoom value
	 * @return {num} 
	 */
	GetZoom() {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Returns if the current camera supports flashlight
	 * @return {bin} 
	 */
	HasFlash() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Returns if the camera is currently recording
	 * @return {bin} 
	 */
	IsRecording() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Define a raster for motion detection
	 * @param {num_int} xtiles 
	 * @param {num_int} ytiles 
	 * @param {num_pxl} sensitivity 
	 * @param {num_mls} [minPeriod] 
	 * @param {DsImage} [image] 
	 * @return {void} 
	 */
	MotionMosaic(xtiles, ytiles, sensitivity, minPeriod, image) {}

	/**
	 * Start recording video
	 * @param {str_ptf} file 
	 * @param {num_sec} [seconds] 
	 * @param {"high"|"low"|"480p"|"720p"|"1080p"|"2k"|"4k"|"8k"|"qvga"|"vga"|"cif"} [quality] 
	 * @return {void} 
	 */
	Record(file, seconds, quality) {}

	/**
	 * Keeps tracks of the average color around a given point
	 * @param {str_pip} list `x1`, `y1`, `x2`, `y2`, `...`
	 * @param {(data: [num,num,num][]) => void} callback 
	 * @param {num_pxl} [sampSize] 
	 * @param {num_mls} [maxRate] 
	 * @return {void} 
	 */
	ReportColors(list, callback, sampSize, maxRate) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Applies a color effect to the camera
	 * @param {"none"|"mono"|"negative"|"solarize"|"sepia"|"posterize"|"whiteboard"|"blackboard"|"aqua"|"vage-cold"|"point-blue"|"point-red-yellow"|"emboss"|"sketch"|"neon"} effect 
	 * @return {void} 
	 */
	SetColorEffect(effect) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * Define two camera view duplicate targets
	 * @param {DsImage} image1 
	 * @param {DsImage} image2 
	 * @return {void} 
	 */
	SetDuplicateImage(image1, image2) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * En-/Disables the camera flash
	 * @param {bin} onoff 
	 * @return {void} 
	 */
	SetFlash(onoff) {}

	/**
	 * Change focus mode
	 * @param {"Auto"|"Picture"|"Video"|"Macro"|"EDOF"|"Fixed"|"Infinity"} mode <br>
 	 * &emsp; `Picture` - for taking pictures\
 	 * &emsp; `Video` - for recording videos\
 	 * &emsp; `EDOF` - Extended Depth Of Field for continuous digital focusing
	 * @return {void} 
	 */
	SetFocusMode(mode) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control gets focused
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnFocus(callback) {}

	/**
	 * Called when cam.AutoCapture took a picture
	 * @param {(file: str_pth) => void} callback 
	 * @return {void} 
	 */
	SetOnPicture(callback) {}

	/**
	 * Called if the camera is ready for use
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnReady(callback) {}

	/**
	 * Rotates the camera view
	 * @param {0|90|180|270} angle 
	 * @return {void} 
	 */
	SetOrientation(angle) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Change camera properties
	 * @param {str} name 
	 * @param {num|str} value 
	 * @return {void} 
	 */
	SetParameter(name, value) {}

	/**
	 * Define a custom picture size in pixels
	 * @param {num_pxl} width 
	 * @param {num_pxl} height 
	 * @return {void} 
	 */
	SetPictureSize(width, height) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Rotate the captured image
	 * @param {num_deg} angle 
	 * @return {void} 
	 */
	SetPostRotation(angle) {}

	/**
	 * Define a preview image for captured pictures
	 * @param {DsImage} image 
	 * @return {void} 
	 */
	SetPreviewImage(image) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * N-/Disables the camera sound
	 * @param {bin} enabled 
	 * @return {void} 
	 */
	SetSound(enabled) {}

	/**
	 * Define custom video recording size
	 * @param {num_pxl} width 
	 * @param {num_pxl} height 
	 * @return {void} 
	 */
	SetVideoSize(width, height) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Change the zoom value of the camera
	 * @param {num} level 
	 * @return {void} 
	 */
	SetZoom(level) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Start the camera preview on the display
	 * @return {void} 
	 */
	StartPreview() {}

	/**
	 * Stop recording video
	 * @return {void} 
	 */
	Stop() {}

	/**
	 * Stop the camera preview on the display
	 * @return {void} 
	 */
	StopPreview() {}

	/**
	 * Streams the camera view to a local ip
	 * @param {str} ip 
	 * @param {num_int} port 
	 * @param {num_prc} quality 
	 * @param {num_fps} fps 
	 * @param {num_mtu} mtu 
	 * @return {void} 
	 */
	Stream(ip, port, quality, fps, mtu) {}

	/**
	 * Save the current camera view to a file
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	TakePicture(file) {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsCheckBox {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get current checked state
	 * @return {bin} 
	 */
	GetChecked() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"CheckBox"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Changes the ckecked state
	 * @param {bin} checked 
	 * @return {void} 
	 */
	SetChecked(checked) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the CheckBox was touched
	 * @param {(isChecked: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsCloudStore {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Returns the control class name
	 * @return {"CloudStore"} 
	 */
	GetType() {}

	/**
	 * Deletes a file in the cloud
	 * @param {str_ptf} file 
	 * @param {(success: bin, result: {data: str,error: str}, status: num_int) => void} callback 
	 * @return {void} 
	 */
	Delete(file, callback) {}

	/**
	 * Lists files of the cloud
	 * @param {str} filter 
	 * @param {(error: bin, result: {data: str_com,error: str}, status: num_int) => void} callback 
	 * @return {void} 
	 */
	List(filter, callback) {}

	/**
	 * Loads data from the cloud
	 * @param {str_ptf} file 
	 * @param {str} callback 
	 * @param {(error: bin, result: {data: all,error: str}, status: num_int) => void} [options] 
	 * @return {void} 
	 */
	Load(file, callback, options) {}

	/**
	 * Merges data in the cloud
	 * @param {str_ptf} file 
	 * @param {obj} data 
	 * @param {(success: bin, result: {data: str,error: str}, status: num_int) => void} [callback] 
	 * @return {void} 
	 */
	Merge(file, data, callback) {}

	/**
	 * Saves data in the cloud
	 * @param {str_ptf} file 
	 * @param {all} data 
	 * @param {(success: bin, result: {data: str,error: str}, status: num_int) => void} [callback] 
	 * @param {str} [options] 
	 * @return {void} 
	 */
	Save(file, data, callback, options) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * Upload a file to the cloud
	 * @param {str} data 
	 * @param {str} name 
	 * @param {str_mim} [type] 
	 * @param {(response: {error: str,name: str,folder: str,id: str,mimetype: str_mim,size: num}) => void} [callback] 
	 * @param {str} [password] 
	 * @return {void} 
	 */
	Upload(data, name, type, callback, password) {}
}


class DsCodeEdit {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clears the undo/redo history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Copy selected text to the clipboard
	 * @return {void} 
	 */
	Copy() {}

	/**
	 * Cut selected text to the clipboard
	 * @return {void} 
	 */
	Cut() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the current cursor line index
	 * @return {num_int} 
	 */
	GetCursorLine() {}

	/**
	 * Get the cursor position in the text
	 * @return {num_int} 
	 */
	GetCursorPos() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get the start character index of a line
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Get current selection state
	 * @return {bin} 
	 */
	GetSelectMode() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"CodeEdit"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Underlines a certain line in the text
	 * @param {num_int} line 
	 * @return {void} 
	 */
	HighlightLine(line) {}

	/**
	 * Insert text at the cursor
	 * @param {str} text 
	 * @return {void} 
	 */
	InsertText(text) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Paste clipboard to the current cursor position
	 * @return {void} 
	 */
	Paste() {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replace the selected text
	 * @param {str} text 
	 * @return {void} 
	 */
	Replace(text) {}

	/**
	 * Replace all occurances of a string in the text
	 * @param {str} text 
	 * @param {str} newText 
	 * @param {bin} [matchCase=false] 
	 * @param {bin} [wholeWord=false] 
	 * @return {void} 
	 */
	ReplaceAll(text, newText, matchCase, wholeWord) {}

	/**
	 * Replace a range of the text with a string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Search and select a string in the text
	 * @param {str} text 
	 * @param {"Up"|"Down"} [direction='Down'] 
	 * @param {bin} [matchCase=false] 
	 * @param {bin} [wholeWord=false] 
	 * @return {void} 
	 */
	Search(text, direction, matchCase, wholeWord) {}

	/**
	 * Select the whole text
	 * @return {void} 
	 */
	SelectAll() {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Changes the color scheme of the CodeEdit
	 * @param {"Dark"|"Light"} scheme 
	 * @return {void} 
	 */
	SetColorScheme(scheme) {}

	/**
	 * Change the current cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Change the highlighted language syntax
	 * @param {".js"|".java"|".php"|".c"|".cpp"|".cs"|".rb"|".m"|".py"|".txt"} ext 
	 * @return {void} 
	 */
	SetLanguage(ext) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Select between Yoyo or Touch mode
	 * @param {"Yoyo"|"Touch"} method 
	 * @return {void} 
	 */
	SetNavigationMethod(method) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a Yoyo double-tap callback function
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnDoubleTap(callback) {}

	/**
	 * Define a key-event callback function
	 * @param {(action: "Down"|"Move"|"Up", keyname: "VOLUME_DOWN"|"VOLUME_UP"|"BACK"|"MENU", keycode: num_int, extra: "Shift"|"Ctrl"|"Alt"|"Meta") => void} callback 
	 * @return {void} 
	 */
	SetOnKey(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Selects part of the text in a given range
	 * @param {num_int} start 
	 * @param {num_int} stop 
	 * @return {void} 
	 */
	SetSelection(start, stop) {}

	/**
	 * En/Disable cursor selection mode
	 * @param {bin} onOff 
	 * @return {void} 
	 */
	SetSelectMode(onOff) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disable device keyboard
	 * @param {bin} onOff 
	 * @return {void} 
	 */
	SetUseKeyboard(onOff) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}
}


class DsCrypt {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Decrypt text with a key
	 * @param {str} text 
	 * @param {str} password 
	 * @return {str} 
	 */
	Decrypt(text, password) {}

	/**
	 * Encrypt text with a key
	 * @param {str} text 
	 * @param {str} password 
	 * @return {str} 
	 */
	Encrypt(text, password) {}

	/**
	 * Returns the control class name
	 * @return {"Crypt"} 
	 */
	GetType() {}

	/**
	 * Get a hash from a string
	 * @param {str} text 
	 * @param {"MD5"|"SHA"|"SHA-1"|"SHA-224"|"SHA-256"|"SHA-384"|"SHA-512"} mode 
	 * @param {"Wrap"} [options] 
	 * @return {void} 
	 */
	Hash(text, mode, options) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}
}


class DsDialog {

	/**
	 * Add content layout
	 * @param {DsLayout} layout 
	 * @return {void} 
	 */
	AddLayout(layout) {}

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Hides the control and removes it from the screen
	 * @return {void} 
	 */
	Dismiss() {}

	/**
	 * En/Disables hiding via presing the back key
	 * @param {bin} enable 
	 * @return {void} 
	 */
	EnableBackKey(enable) {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get title bar height
	 * @return {num_pxl} 
	 */
	GetTitleHeight() {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"Dialog"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Removes a content layout
	 * @param {DsLayout} layout 
	 * @return {void} 
	 */
	RemoveLayout(layout) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @param {num_pxl} radius 
	 * @return {void} 
	 */
	SetBackColor(color, radius) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when back button was pressed while the dialog was shown
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnBack(callback) {}

	/**
	 * Called when the dialog is cancelled
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnCancel(callback) {}

	/**
	 * Called when user touched the control
	 * @param {(event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Changes the dialog title
	 * @param {str} title 
	 * @return {void} 
	 */
	SetTitle(title) {}

	/**
	 * Changes the color of the dialog title
	 * @param {str_col} clr 
	 * @return {void} 
	 */
	SetTitleColor(clr) {}

	/**
	 * Changes the title divider height for "Old" dialogs
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTitleDividerColor(color) {}

	/**
	 * Change height of the title divider for "Old" dialogs
	 * @param {num_pxl} height 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetTitleDividerHeight(height, options) {}

	/**
	 * Change height of the title bar for "Old" dialogs
	 * @param {num_pxl} height 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [options] 
	 * @return {void} 
	 */
	SetTitleHeight(height, options) {}

	/**
	 * Changes the title text size for "Old" dialogs
	 * @param {num} size 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetTitleTextSize(size, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsDownloader {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Download file(s)
	 * @param {str_url|str_url[]} url 
	 * @param {str_pth} fldr `must not have a trailing slash`
	 * @param {str} [name] 
	 * @param {str} [headers] 
	 * @return {void} 
	 */
	Download(url, fldr, name, headers) {}

	/**
	 * Get current download progress
	 * @return {num_frc} 
	 */
	GetProgress() {}

	/**
	 * Get target download size in bytes
	 * @return {num_byt} 
	 */
	GetSize() {}

	/**
	 * Returns the control class name
	 * @return {"Downloader"} 
	 */
	GetType() {}

	/**
	 * Get download completed state
	 * @return {bin} 
	 */
	IsComplete() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Called when download is cancelled
	 * @param {(file: str_pth) => void} callback 
	 * @return {void} 
	 */
	SetOnCancel(callback) {}

	/**
	 * Called when downloads are finished
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnComplete(callback) {}

	/**
	 * Called when a file is downloaded
	 * @param {(path: str_pth) => void} callback 
	 * @return {void} 
	 */
	SetOnDownload(callback) {}

	/**
	 * Called when an error occurred while downloading
	 * @param {(error: str) => void} callback 
	 * @return {void} 
	 */
	SetOnError(callback) {}
}


class DsEmail {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Returns the control class name
	 * @return {"Email"} 
	 */
	GetType() {}

	/**
	 * Start receiving emails from a given folder
	 * @param {str} folder 
	 * @param {num_int} maxCount 
	 * @param {str} [filter] 
	 * @return {void} 
	 */
	Receive(folder, maxCount, filter) {}

	/**
	 * Send an email to someone
	 * @param {str} subject 
	 * @param {str} body 
	 * @param {str} sender `email address`
	 * @param {str} recipients `email address`
	 * @param {str_pth} [attach] 
	 * @return {void} 
	 */
	Send(subject, body, sender, recipients, attach) {}

	/**
	 * Set IMAP settings for receiving messages
	 * @param {"imap/pop.gmail.com"|"imap/pop.mail.yahoo.com"|"imap/pop.gmx.net"} server <br>
 	 * &emsp; `pop.gmail.com` - google\
 	 * &emsp; `pop.mail.yahoo.com` - yahoo\
 	 * &emsp; `pop.gmx.net` - gmx
	 * @param {993|995} [port] <br>
 	 * &emsp; `993` - imap\
 	 * &emsp; `995` - pop
	 * @return {void} 
	 */
	SetIMAP(server, port) {}

	/**
	 * Called when a message is received
	 * @param {(data: { from: str_eml, to: str_eml, cc: str_eml, subject: str, body: str }) => void} callback 
	 * @return {void} 
	 */
	SetOnMessage(callback) {}

	/**
	 * Called when a status changed
	 * @param {(status: str) => void} callback 
	 * @return {void} 
	 */
	SetOnStatus(callback) {}

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
	 * @return {void} 
	 */
	SetSMTP(server, port) {}
}


class DsFile {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Close File
	 * @return {void} 
	 */
	Close() {}

	/**
	 * Get file size in bytes
	 * @return {num_byt} 
	 */
	GetLength() {}

	/**
	 * Get pointer position
	 * @return {void} 
	 */
	GetPointer() {}

	/**
	 * Returns the control class name
	 * @return {"File"} 
	 */
	GetType() {}

	/**
	 * Read data from file
	 * @param {num_int} len 
	 * @param {"Int"|"Text"|"Hex"} [mode='Text'] 
	 * @return {void} 
	 */
	ReadData(len, mode) {}

	/**
	 * Read numeric data from file
	 * @param {"Byte"|"UByte"|"Bool"|"Float"|"FloatLE"|"Long"|"LongLE"|"Short"|"UShort"|"ShortLE"|"UShortLE"|"Int"|"UInt"|"IntLE"} type 
	 * @return {num} 
	 */
	ReadNumber(type) {}

	/**
	 * Read data as text
	 * @param {"UTF"|"Line"|"Char"} type <br>
 	 * &emsp; `UTF` - read UTF-8 string with 2 byte header\
 	 * &emsp; `Line` - read one line terminated by \\n, \\r or \\r\\n\
 	 * &emsp; `Char` - read big-endian 16-bit character
	 * @return {str} 
	 */
	ReadText(type) {}

	/**
	 * Asynchronously read data as text
	 * @param {"Line"|"Char"} type <br>
 	 * &emsp; `Line` - read one line terminated by \\n, \\r or \\r\\n\
 	 * &emsp; `Char` - read big-endian 16-bit character
	 * @param {(data: str) => void} callback 
	 * @return {void} 
	 */
	ReadTextAsync(type, callback) {}

	/**
	 * CHange pointer position to a given byte in the file
	 * @param {num_int} offset 
	 * @return {void} 
	 */
	Seek(offset) {}

	/**
	 * Allocate memory for a file
	 * @param {num_int} len 
	 * @return {void} 
	 */
	SetLength(len) {}

	/**
	 * Let the pointer skip some bytes
	 * @param {num_int} bytes 
	 * @return {void} 
	 */
	Skip(bytes) {}

	/**
	 * Write data to the file
	 * @param {"FA"|"FB"|"FC"|"250"|"251"|"252"|"abc46"} data <br>
 	 * &emsp; `abc46` - low order 8-bit bytes
	 * @param {"Hex"|"Int"|"Text"} [mode='Text'] 
	 * @return {void} 
	 */
	WriteData(data, mode) {}

	/**
	 * Write number to the file
	 * @param {num} data 
	 * @param {"Byte"|"UByte"|"Bool"|"Float"|"FloatLE"|"Long"|"LongLE"|"Short"|"UShort"|"ShortLE"|"UShortLE"|"Int"|"UInt"|"IntLE"} [type='Int'] 
	 * @return {void} 
	 */
	WriteNumber(data, type) {}

	/**
	 * Writes text to file
	 * @param {str|num_int[]} data 
	 * @param {"UTF"|"Bytes"|"Char"} [type='Text'] <br>
 	 * &emsp; `UTF` - write UTF-8 encoded text\
 	 * &emsp; `Bytes` - 8-bit bytes\
 	 * &emsp; `Char` - Write big-endian 16-bit characters
	 * @return {void} 
	 */
	WriteText(data, type) {}
}


class DsGameView {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Execute code inside the GameView
	 * @param {str_jsc} js 
	 * @return {void} 
	 */
	Execute(js) {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {void} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define the game source file
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFile(file) {}

	/**
	 * Change the target framerate
	 * @param {num_fps} fps 
	 * @return {void} 
	 */
	SetFrameRate(fps) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsGLView {

	/**
	 * Width/height relation
	 * @type {num_flt} 
	 */
	aspect;

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * [HTMLDivElement]
	 * @type {obj} 
	 */
	canvas;

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Create a sprite object which can be drawn on the GLView
	 * @param {str_ptf} file 
	 * @param {() => void} [callback] 
	 * @return {img} \img
	 */
	CreateImage(file, callback) {}

	/**
	 * Draw image to canvas
	 * @param {GLV_img} image \img
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [w] 
	 * @param {num_frc} [h] 
	 * @param {num_deg} [angle] 
	 * @return {void} 
	 */
	DrawImage(image, x, y, w, h, angle) {}

	/**
	 * Draw part of a sprite to the canvas
	 * @param {GLV_img} sheet \img
	 * @param {num_pxl} sx 
	 * @param {num_pxl} sy 
	 * @param {num_pxl} sw 
	 * @param {num_pxl} sh 
	 * @param {num_frc} dx 
	 * @param {num_frc} dy 
	 * @param {num_frc} dw 
	 * @param {num_frc} dh 
	 * @param {num_deg} angle 
	 * @return {void} 
	 */
	DrawSprite(sheet, sx, sy, sw, sh, dx, dy, dw, dh, angle) {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Returns the glv context
	 * @return {ctx} \ctx
	 */
	GetContext() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"GLView"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Height
	 * @type {num_int} 
	 */
	height;

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Render draw commands
	 * @return {void} 
	 */
	Render() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when user touched the control
	 * @param {(event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Width
	 * @type {num_int} 
	 */
	width;
}

class GLV_img {

	/**
	 * Width of the image
	 * @type {num_int} 
	 */
	width;

	/**
	 * Height of the image
	 * @type {num_int} 
	 */
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
	 * @return {void} 
	 */
	capture(x, y, w, h, fileName, successCallback, errorCallback) {}

	/**
	 * <deprecated does nothing
	 * @param {num_pxl} x 
	 * @param {num_pxl} y 
	 * @param {num_pxl} [width=-1] 
	 * @param {num_pxl} [height=-1] 
	 * @return {void} 
	 */
	clearRect(x, y, width, height) {}

	/**
	 * Draws part of a sprite to the context
	 * @param {GLV_img} image \img
	 * @param {num_pxl} sx 
	 * @param {num_pxl} sy 
	 * @param {num_pxl} sw 
	 * @param {num_pxl} sh 
	 * @param {num_pxl} dx 
	 * @param {num_pxl} dy 
	 * @param {num_pxl} dw 
	 * @param {num_pxl} dh 
	 * @return {void} 
	 */
	drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) {}

	/**
	 * Render draw commands
	 * @return {void} 
	 */
	render() {}

	/**
	 * Reset all transformations to default
	 * @return {void} 
	 */
	resetTransform() {}

	/**
	 * Restore saved context
	 * @return {void} 
	 */
	restore() {}

	/**
	 * Rotates the transformation matrix
	 * @param {num_rad} angle 
	 * @return {void} 
	 */
	rotate(angle) {}

	/**
	 * Saves current context
	 * @return {void} 
	 */
	save() {}

	/**
	 * Scale the transformation matrix
	 * @param {num_frc} a 
	 * @param {num_frc} d 
	 * @return {void} 
	 */
	scale(a, d) {}

	/**
	 * Set current matrix
	 * @param {num} a 
	 * @param {num} b 
	 * @param {num} c 
	 * @param {num} d 
	 * @param {num} tx 
	 * @param {num} ty 
	 * @return {void} 
	 */
	setTransform(a, b, c, d, tx, ty) {}

	/**
	 * Transform the current matrix
	 * @param {num} a 
	 * @param {num} b 
	 * @param {num} c 
	 * @param {num} d 
	 * @param {num} tx 
	 * @param {num} ty 
	 * @return {void} 
	 */
	transform(a, b, c, d, tx, ty) {}

	/**
	 * 'Move' the transformation matrix
	 * @param {num_pxl} tx 
	 * @param {num_pxl} ty 
	 * @return {void} 
	 */
	translate(tx, ty) {}
}

class DsImage {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Clears the image content
	 * @return {void} 
	 */
	Clear() {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Draws an elliptical arc by specifying the corners of the surrounding rectangle and the angle range of the arc to be drawn
	 * @param {num} x1 `corner 1`
	 * @param {num} y1 `corner 1`
	 * @param {num} x2 `corner 2`
	 * @param {num} y2 `corner 2`
	 * @param {num_deg} start 
	 * @param {num_deg} sweep 
	 * @return {void} 
	 */
	DrawArc(x1, y1, x2, y2, start, sweep) {}

	/**
	 * Draws a Circle
	 * @param {num} x 
	 * @param {num} y 
	 * @param {num} radius `width relative`
	 * @return {void} 
	 */
	DrawCircle(x, y, radius) {}

	/**
	 * Draw gif frame on a specific time
	 * @param {num_mls} ms 
	 * @return {void} 
	 */
	DrawFrame(ms) {}

	/**
	 * Draws an Image:dso-CreateImage
	 * @param {DsImage} image 
	 * @param {num} x 
	 * @param {num} y 
	 * @param {num} [w] 
	 * @param {num} [h] 
	 * @param {num_deg} [angle] 
	 * @param {"ADD"|"CLEAR"|"DARKEN"|"DST"|"DST_ATOP"|"DST_IN"|"DST_OUT"|"DST_OVER"|"LIGHTEN"|"MULTIPLY"|"OVERLAY"|"SCREEN"|"SRC"|"SRC_ATOP"|"SRC_IN"|"SRC_OUT"|"SRC_OVER"|"XOR"} [mode] 
	 * @return {void} 
	 */
	DrawImage(image, x, y, w, h, angle, mode) {}

	/**
	 * Draws an image with a 2d transformation matrix
	 * @param {DsImage} image 
	 * @param {[num, num, num, num, num, num]} matrix 
	 * @return {void} 
	 */
	DrawImageMtx(image, matrix) {}

	/**
	 * Draws a line
	 * @param {num} x1 
	 * @param {num} y1 
	 * @param {num} x2 
	 * @param {num} y2 
	 * @return {void} 
	 */
	DrawLine(x1, y1, x2, y2) {}

	/**
	 * Draws a single pixel
	 * @param {num} x 
	 * @param {num} y 
	 * @return {void} 
	 */
	DrawPoint(x, y) {}

	/**
	 * Draws a rectangle
	 * @param {num} x1 
	 * @param {num} y1 
	 * @param {num} x2 
	 * @param {num} y2 
	 * @return {void} 
	 */
	DrawRectangle(x1, y1, x2, y2) {}

	/**
	 * Draws a vertically centered sample graph
	 * @param {num_int[]} data 
	 * @param {num} range 
	 * @return {void} 
	 */
	DrawSamples(data, range) {}

	/**
	 * Draws a text
	 * @param {str} txt 
	 * @param {num} x 
	 * @param {num} y 
	 * @return {void} 
	 */
	DrawText(txt, x, y) {}

	/**
	 * Applies modifications to the image data
	 * @return {void} 
	 */
	Flatten() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the name set via SetName
	 * @return {str} 
	 */
	GetName() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns color values of a pixel
	 * @param {num} x 
	 * @param {num} y 
	 * @return {[ num_dhx, num_dhx, num_dhx ]} 
	 */
	GetPixelColor(x, y) {}

	/**
	 * Returns base64 encoded image data
	 * @param {"rawbase64"|"pngbase64"|"jpgbase64"} format 
	 * @param {num_int} [left] 
	 * @param {num_int} [top] 
	 * @param {num_int} [width=-1] 
	 * @param {num_int} [height=-1] 
	 * @return {str_b64} 
	 */
	GetPixelData(format, left, top, width, height) {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"Image"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Measures the size of a given text
	 * @param {str} txt 
	 * @return {{ width: num_frc, height: num_frc }} \{ width, height }
	 */
	MeasureText(txt) {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Moves the image content
	 * @param {num} x 
	 * @param {num} y 
	 * @return {void} 
	 */
	Move(x, y) {}

	/**
	 * Reset all transformations
	 * @return {void} 
	 */
	Reset() {}

	/**
	 * Rotates the content
	 * @param {num_deg} angle 
	 * @param {num} [pivotX] 
	 * @param {num} [pivotY] 
	 * @return {void} 
	 */
	Rotate(angle, pivotX, pivotY) {}

	/**
	 * Saves the image to a file on the local filesystem
	 * @param {str_ptf} fileName 
	 * @param {num_prc} [quality] `for jpg files`
	 * @return {void} 
	 */
	Save(fileName, quality) {}

	/**
	 * Scales the content by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	Scale(x, y) {}

	/**
	 * Change the alpha value
	 * @param {num_dhx} alpha 
	 * @return {void} 
	 */
	SetAlpha(alpha) {}

	/**
	 * En/Disables automatic view updates
	 * @param {bin} onoff 
	 * @return {void} 
	 */
	SetAutoUpdate(onoff) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Fills the image with a color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetColor(color) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Change the content to an other image
	 * @param {str_pth|DsImage} image 
	 * @param {num_frc} [width=-1] 
	 * @param {num_frc} [height=-1] 
	 * @param {"rescale"} [options] 
	 * @return {void} 
	 */
	SetImage(image, width, height, options) {}

	/**
	 * Change the stroke width
	 * @param {num_pxl} width 
	 * @return {void} 
	 */
	SetLineWidth(width) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Set a minimum OnTouchMove call timeout
	 * @param {num_mls} milliseconds 
	 * @return {void} 
	 */
	SetMaxRate(milliseconds) {}

	/**
	 * Change the name of the image
	 * @param {str} name 
	 * @return {void} 
	 */
	SetName(name) {}

	/**
	 * Called when image has loaded asynchronously
	 * @param {(img: DsImage) => void} callback 
	 * @return {void} 
	 */
	SetOnLoad(callback) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Called when user touched the control
	 * @param {(event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Change the paint color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetPaintColor(color) {}

	/**
	 * Change the paint style
	 * @param {"Fill"|"Line"} style 
	 * @return {void} 
	 */
	SetPaintStyle(style) {}

	/**
	 * Set base64 encoded pixel data
	 * @param {str_b64} data `<rawbase64>`, `data:image/jpg;base64,<jpgbase64>`, `data:image/png;base64,<pngbase64>`
	 * @param {num} [width=-1] 
	 * @param {num} [height=-1] 
	 * @param {"px"|"icon"|"resize"|"rescale"|"square"|"fix"} [options] <br>
 	 * &emsp; `fix` - set bitmap size
	 * @return {void} 
	 */
	SetPixelData(data, width, height, options) {}

	/**
	 * Change the pixel mode for drawing methods
	 * @param {bin} onoff 
	 * @return {void} 
	 */
	SetPixelMode(onoff) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change the drawn text size
	 * @param {num} size 
	 * @return {void} 
	 */
	SetTextSize(size) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Skews the content
	 * @param {num} x 
	 * @param {num} y 
	 * @return {void} 
	 */
	Skew(x, y) {}

	/**
	 * Applies a transformation matrix to the content
	 * @param {lst} matrix 
	 * @return {void} 
	 */
	Transform(matrix) {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Update the view in disabled AutoUpdate mode
	 * @return {void} 
	 */
	Update() {}
}


class DsLayout {

	/**
	 * Add a control to the layout
	 * @param {dso} child 
	 * @param {num_int} [order] 
	 * @return {void} 
	 */
	AddChild(child, order) {}

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Moves a child to the layout front
	 * @param {dso} child 
	 * @return {void} 
	 */
	ChildToFront(child) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Destroys and removes a child from the layout
	 * @param {dso} child 
	 * @return {void} 
	 */
	DestroyChild(child) {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Returns the z order of a child
	 * @param {dso} child 
	 * @return {num_int} 
	 */
	GetChildOrder(child) {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"Layout"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Remove a child from the layout
	 * @param {dso} child 
	 * @return {void} 
	 */
	RemoveChild(child) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set margins of top-level children
	 * @param {num} [left=0] 
	 * @param {num} [top=0] 
	 * @param {num} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetChildMargins(left, top, right, bottom, mode) {}

	/**
	 * Change text size of top-level children
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode='px'] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetChildTextSize(size, mode) {}

	/**
	 * Apply corner radius to card layouts's
	 * @param {num_pxl} radius 
	 * @return {void} 
	 */
	SetCornerRadius(radius) {}

	/**
	 * Apply shadow to card layouts's
	 * @param {num_pxl} elevation 
	 * @return {void} 
	 */
	SetElevation(elevation) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Adjust the placing of contained children
	 * @param {"Left"|"Top"|"Right"|"Bottom"|"VCenter"|"HCenter"|"FillX"|"FillY"|"FillXY"} gravity 
	 * @return {void} 
	 */
	SetGravity(gravity) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the user changed a control content
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnChildChange(callback) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Called when user touched the control
	 * @param {(event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Change the children orientation
	 * @param {"Horizontal"|"Vertical"} orient 
	 * @return {void} 
	 */
	SetOrientation(orient) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Enable touch event forwarding
	 * @param {bin} through 
	 * @return {void} 
	 */
	SetTouchThrough(through) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsList {

	/**
	 * Adds an entry to the list
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {str|str_ptf} [image] 
	 * @return {void} 
	 */
	AddItem(title, body, image) {}

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Expand the list to the full height inside scrollers
	 * @return {void} 
	 */
	Expand() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Returns item data by a title
	 * @param {str} title 
	 * @return {{ title: str, body: str, image: str_pth }} \{ title, body, image }
	 */
	GetItem(title) {}

	/**
	 * Returns item data by an index
	 * @param {num_int} index 
	 * @return {{ title: str, body: str, image: str_pth }} \{ title, body, image }
	 */
	GetItemByIndex(index) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the list length
	 * @return {num_int} 
	 */
	GetLength() {}

	/**
	 * Returns the whole list as object
	 * @param {str} delim 
	 * @return {{ title: str, body: str, image: str_pth }[]|str} `title1[DELIM]title2[DELIM]...`
	 */
	GetList(delim) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"List"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Inserts an item into the list
	 * @param {num_int} index 
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {str|str_ptf} [image] 
	 * @return {void} 
	 */
	InsertItem(index, title, body, image) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Clears the list
	 * @return {void} 
	 */
	RemoveAll() {}

	/**
	 * Removes an item by its title
	 * @param {str} title 
	 * @return {void} 
	 */
	RemoveItem(title) {}

	/**
	 * Removes an item by its index
	 * @param {num_int} index 
	 * @return {void} 
	 */
	RemoveItemByIndex(index) {}

	/**
	 * Scrolls to an item by its title
	 * @param {str} title 
	 * @param {str} [body] 
	 * @return {void} 
	 */
	ScrollToItem(title, body) {}

	/**
	 * Scrolls the list to a specific index
	 * @param {num_int} index 
	 * @return {void} 
	 */
	ScrollToItemByIndex(index) {}

	/**
	 * Highlight an item by its title and body
	 * @param {str} title 
	 * @param {str} [body] 
	 * @param {bin} [scroll] 
	 * @return {void} 
	 */
	SelectItem(title, body, scroll) {}

	/**
	 * Highlight an item by its index
	 * @param {num_int} index 
	 * @param {bin} [scroll=false] 
	 * @return {void} 
	 */
	SelectItemByIndex(index, scroll) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Change coloumn widths
	 * @param {num_frc} icon 
	 * @param {num_frc} title 
	 * @param {num_frc} [body] 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [mode='px'] 
	 * @return {void} 
	 */
	SetColumnWidths(icon, title, body, mode) {}

	/**
	 * Changes the divider style
	 * @param {num_frc} height 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetDivider(height, color) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * Auto-crop titles to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize1(mode) {}

	/**
	 * Auto-crop bodys to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize2(mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Change selected title highlight color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetHiTextColor1(color) {}

	/**
	 * Change selected body highlight color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetHiTextColor2(color) {}

	/**
	 * Change icon margins
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [mode='px'] 
	 * @return {void} 
	 */
	SetIconMargins(left, top, right, bottom, mode) {}

	/**
	 * Change the icon size
	 * @param {num} size 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [mode='px'] 
	 * @return {void} 
	 */
	SetIconSize(size, mode) {}

	/**
	 * Change the content of an element by its title
	 * @param {str} title 
	 * @param {str} newTitle 
	 * @param {str} [newBody] 
	 * @param {str_ptf} [newImage] 
	 * @return {void} 
	 */
	SetItem(title, newTitle, newBody, newImage) {}

	/**
	 * Change the content of an element by its index
	 * @param {num_int} index 
	 * @param {str} newTitle 
	 * @param {str} [newBody] 
	 * @param {str_ptf} [newImage] 
	 * @return {void} 
	 */
	SetItemByIndex(index, newTitle, newBody, newImage) {}

	/**
	 * Set item color
	 * @param {str} name 
	 * @param {str_col} textClr 
	 * @param {str_col} [backClr] 
	 * @return {void} 
	 */
	SetItemColor(name, textClr, backClr) {}

	/**
	 * Set item color by index
	 * @param {num_int} index 
	 * @param {str_col} textClr 
	 * @param {str_col} [backClr] 
	 * @return {void} 
	 */
	SetItemColorByIndex(index, textClr, backClr) {}

	/**
	 * Set the content of the whole list
	 * @param {"title"|"title&colon;icon"|"title&colon;body&colon;icon"} list 
	 * @param {str} [delim=','] 
	 * @return {void} 
	 */
	SetList(list, delim) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Define a callback function for touch events
	 * @param {(title: str, body?: str, icon?: str, index?: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {(title: str, body?: str, icon?: str, index?: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Change the default text color of titles
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor1(color) {}

	/**
	 * Change the default text color of bodies
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor2(color) {}

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
	 * @return {void} 
	 */
	SetTextMargins(left, top, right, bottom, mode, options) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Apply shadow to titles
	 * @param {num_deg} radius 
	 * @param {num_int} [dx=0] 
	 * @param {num_int} [dy=0] 
	 * @param {str_col} [color='black'] 
	 * @return {void} 
	 */
	SetTextShadow1(radius, dx, dy, color) {}

	/**
	 * Apply shadow to bodies
	 * @param {num_deg} radius 
	 * @param {num_int} [dx=0] 
	 * @param {num_int} [dy=0] 
	 * @param {str_col} [color='black'] 
	 * @return {void} 
	 */
	SetTextShadow2(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Set title text size
	 * @param {num} size 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [mode='px'] 
	 * @return {void} 
	 */
	SetTextSize1(size, mode) {}

	/**
	 * Set body text size
	 * @param {num} size 
	 * @param {string | ("px"|"sp"|"dip"|"mm"|"pt")[]} [mode='px'] 
	 * @return {void} 
	 */
	SetTextSize2(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsListDialog {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Hides the control and removes it from the screen
	 * @return {void} 
	 */
	Dismiss() {}

	/**
	 * Returns the control class name
	 * @return {"ListDialog"} 
	 */
	GetType() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Define a callback function for touch events
	 * @param {(title: str, checked?: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Change the dialog title
	 * @param {str} title 
	 * @return {void} 
	 */
	SetTitle(title) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}
}


class DsLocator {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Calculate bearing between current and given position
	 * @param {num} latitude 
	 * @param {num} longitude 
	 * @return {num} 
	 */
	GetBearingTo(latitude, longitude) {}

	/**
	 * Calculate distance between current and given position in meters
	 * @param {num} latitude 
	 * @param {num} longitude 
	 * @return {num} 
	 */
	GetDistanceTo(latitude, longitude) {}

	/**
	 * Returns the control class name
	 * @return {"Locator"} 
	 */
	GetType() {}

	/**
	 * Called when some of the values changed
	 * @param {(data: { provider: str, latitude: num, longitude: num, speed: num, bearing: num, altitude: num, accuracy: num_met }, time: num_mls) => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Locator update frequency in seconds
	 * @param {num_sec} rate 
	 * @return {void} 
	 */
	SetRate(rate) {}

	/**
	 * Start locator
	 * @return {void} 
	 */
	Start() {}

	/**
	 * Stop locator
	 * @return {void} 
	 */
	Stop() {}
}


class DsMediaPlayer {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Close the media player
	 * @return {void} 
	 */
	Close() {}

	/**
	 * Get the song length in seconds
	 * @return {num_sec} 
	 */
	GetDuration() {}

	/**
	 * Get  elapsed playtime in seconds
	 * @return {num_sec} 
	 */
	GetPosition() {}

	/**
	 * Returns the control class name
	 * @return {"MediaPlayer"} 
	 */
	GetType() {}

	/**
	 * Returns if the player is looping
	 * @return {void} 
	 */
	IsLooping() {}

	/**
	 * Get current playing state
	 * @return {void} 
	 */
	IsPlaying() {}

	/**
	 * Returns if player is useable yet
	 * @return {void} 
	 */
	IsReady() {}

	/**
	 * Pause the current playing song
	 * @return {void} 
	 */
	Pause() {}

	/**
	 * Play the current loaded song from the last paused time or from a given start time in in seconds
	 * @return {void} 
	 */
	Play() {}

	/**
	 * Seek the player to a given time in seconds
	 * @param {num_flt} time 
	 * @return {void} 
	 */
	SeekTo(time) {}

	/**
	 * Load a sound file to the player
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFile(file) {}

	/**
	 * Set looping mode
	 * @param {bin} loop 
	 * @return {void} 
	 */
	SetLooping(loop) {}

	/**
	 * Called when the player has finished playing a track
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnComplete(callback) {}

	/**
	 * Called when the player is ready for use
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnReady(callback) {}

	/**
	 * Called when ply.Seek has finished
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnSeekDone(callback) {}

	/**
	 * Set the playback speed
	 * @param {num_fac} speed 
	 * @return {void} 
	 */
	SetSpeed(speed) {}

	/**
	 * Set the playback pitch
	 * @param {num_fac} pitch 
	 * @return {void} 
	 */
	SetPitch(pitch) {}

	/**
	 * Set the playback volume
	 * @param {num_prc} left 
	 * @param {num_prc} right 
	 * @return {void} 
	 */
	SetVolume(left, right) {}

	/**
	 * Stop playing a song
	 * @return {void} 
	 */
	Stop() {}
}


class DsMediaStore {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Load the album art to an image
	 * @param {DsImage} image 
	 * @param {num_int} id 
	 * @param {"internal"|"external"} [options] 
	 * @return {bin} 
	 */
	GetAlbumArt(image, id, options) {}

	/**
	 * Load the song art to an image
	 * @param {DsImage} image 
	 * @param {num_int} id 
	 * @param {"internal"|"external"} [options] 
	 * @return {bin} 
	 */
	GetSongArt(image, id, options) {}

	/**
	 * Returns the control class name
	 * @return {"MediaStore"} 
	 */
	GetType() {}

	/**
	 * Search for media albums
	 * @param {str_sql} [filter] 
	 * @param {"album"|"_id"|"albumArt"|"artist"|"numSongs"|"firstYear"|"lastYear"} [sort] coloumns
	 * @param {"internal"|"external"} [options] 
	 * @return {void} 
	 */
	QueryAlbums(filter, sort, options) {}

	/**
	 * Search for media artists
	 * @param {str_sql} [filter] 
	 * @param {"_id"|"artist"|"numAlbums"|"numTracks"} [sort] coloumns
	 * @param {"internal"|"external"} [options] 
	 * @return {void} 
	 */
	QueryArtists(filter, sort, options) {}

	/**
	 * Search for media
	 * @param {str_sql} [filter] 
	 * @param {"title"|"_id"|"duration"|"size"|"uri"|"album"|"albumID"|"artist"|"artistId"} [sort] coloumns
	 * @param {"internal"|"external"} [options] 
	 * @return {void} 
	 */
	QueryMedia(filter, sort, options) {}

	/**
	 * Called when album query has finished
	 * @param {(result: { album: str, id: num_int, albumArt: str_pth, artist: str, numSongs: num_int, firstYear: str, lastYear: str }[]) => void} callback 
	 * @return {void} 
	 */
	SetOnAlbumsResult(callback) {}

	/**
	 * Called when artist query has finished
	 * @param {(result: { id: num_int, artist: str, numAlbums: num_int, numTracks: num_int }[]) => void} callback 
	 * @return {void} 
	 */
	SetOnArtistsResult(callback) {}

	/**
	 * Called when media query has finished
	 * @param {(result: { title: str, id: num_int, duration: num_mls, size: num_byt, uri: str_uri, album: str, albumID: num_int, artist: str, artistId: num_int }[]) => void} callback 
	 * @return {void} 
	 */
	SetOnMediaResult(callback) {}
}


class DsNetClient {

	/**
	 * Calls the OnReceive callback for incoming TCP data
	 * @param {str_url} server 
	 * @param {num_int} [port=80] 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 * @return {void} 
	 */
	AutoReceive(server, port, mode) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Closes the NetClient socket
	 * @return {void} 
	 */
	Close() {}

	/**
	 * Connect to a server
	 * @param {str_url} address 
	 * @param {num_int} [port=80] 
	 * @return {void} 
	 */
	Connect(address, port) {}

	/**
	 * Disconnect from server
	 * @return {void} 
	 */
	Disconnect() {}

	/**
	 * Downloads a file via TCP from the server
	 * @param {str_url} file 
	 * @return {void} 
	 */
	DownloadFile(file) {}

	/**
	 * Returns the broadcast address of UDP connections
	 * @return {str} 
	 */
	GetBroadcastAddress() {}

	/**
	 * Returns the control class name
	 * @return {"NetClient"} 
	 */
	GetType() {}

	/**
	 * Get NetClient connected state
	 * @return {void} 
	 */
	IsConnected() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Receive data as bytes
	 * @param {"Int"|"Hex"} mode 
	 * @return {num_byt[]} 
	 */
	ReceiveBytes(mode) {}

	/**
	 * Receive an UDP Datagram
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 * @param {num_int} [port=80] 
	 * @param {num} [timeout] 
	 * @param {str} [options] `<BUFSIZ>`\
 	 * &emsp; `BUFSIZ` - “1k,2k,4k,8k,16k,32k,64k”
	 * @return {str} 
	 */
	ReceiveDatagram(mode, port, timeout, options) {}

	/**
	 * Receive UDP datagrams
	 * @param {num_int} [port=80] 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 * @param {str} [options] `<BUFSIZ>`\
 	 * &emsp; `BUFSIZ` - “1k,2k,4k,8k,16k,32k,64k”
	 * @return {void} 
	 */
	ReceiveDatagrams(port, mode, options) {}

	/**
	 * Receive a file via TCP from the server
	 * @param {str} file 
	 * @param {num} [wait] 
	 * @return {str} 
	 */
	ReceiveFile(file, wait) {}

	/**
	 * Receive text over TCP
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 * @return {str} 
	 */
	ReceiveText(mode) {}

	/**
	 * Receive video over UDP
	 * @param {num} port 
	 * @param {DsImage} img 
	 * @return {str} 
	 */
	ReceiveVideoStream(port, img) {}

	/**
	 * Send bytes over TCP connection
	 * @param {num_byt[]|string | ("bytes")[]} data <br>
 	 * &emsp; `bytes` - hexadecimal 00..FF
	 * @param {"Int"|"Hex"} [mode] 
	 * @return {void} 
	 */
	SendBytes(data, mode) {}

	/**
	 * Send an UDP Datagram
	 * @param {str} data 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 * @param {str_url} [address] 
	 * @param {num_int} [port] 
	 * @param {"Text"|"Hex"|"Bytes"} [options] 
	 * @return {void} 
	 */
	SendDatagram(data, mode, address, port, options) {}

	/**
	 * Define data format for outgoing data
	 * @param {str} [mode] `Hex`, `Int`, `Text`, `<encoding>`\
 	 * &emsp; `Hex` - comma separated text value\
 	 * &emsp; `Int` - comma separated byte numbers\
 	 * &emsp; `Text` - string of text characters\
 	 * &emsp; `encoding` - UTF-16L/BE
	 * @return {void} 
	 */
	SetDataMode(mode) {}

	/**
	 * Specify how to split received data
	 * @param {"End"|"Start-End"|"Size"} mode 
	 * @param {str|num_int} [p2] 
	 * @param {str|num_int} [p3] 
	 * @return {void} 
	 */
	SetSplitMode(mode, p2, p3) {}

	/**
	 * Sends text over TCP connection
	 * @param {str} text 
	 * @param {"US-ASCII"|"UTF-8"|"UTF-16LE"|"UTF-16BE"|"UTF-16"} [mode] 
	 * @return {void} 
	 */
	SendText(text, mode) {}

	/**
	 * Called when TCP connected or failed to connect to a server
	 * @param {(connected: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnConnect(callback) {}

	/**
	 * Called when a file download has finished
	 * @param {(something: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnDownload(callback) {}

	/**
	 * Called when a TCP NetClient received some data via AutoReceive
	 * @param {(address: str) => void} callback 
	 * @return {void} 
	 */
	SetOnReceive(callback) {}

	/**
	 * Timeout between two receive checks
	 * @param {num_sec} seconds 
	 * @return {void} 
	 */
	SetTimeout(seconds) {}

	/**
	 * Wake up devices if they are configured to
	 * @param {str} ip 
	 * @param {str} [mac] 
	 * @return {void} 
	 */
	WakeOnLan(ip, mac) {}
}


class DsNode {

	/**
	 * Returns the plugin version
	 * @return {num} 
	 */
	GetVersion() {}

	/**
	 * Start the main Node process
	 * @param {lst} [args] argument array
	 * @param {lst} [paths] 
	 * @return {void} 
	 */
	Start(args, paths) {}

	/**
	 * Define a callback function which is called when the Node component is ready for use
	 * @param {() => void} cb 
	 * @return {void} 
	 */
	SetOnReady(cb) {}

	/**
	 * Define a callback function which is called when the node process has exited
	 * @param {() => void} cb 
	 * @return {void} 
	 */
	SetOnDone(cb) {}

	/**
	 * Define a callback function which is called when the node process prints to stdout
	 * @param {(stdout: str) => void} cb 
	 * @return {void} 
	 */
	SetOnOutput(cb) {}

	/**
	 * Define a callback function which is called when the node process prints to stderr
	 * @param {(msg: str) => void} cb 
	 * @return {void} 
	 */
	SetOnError(cb) {}

	/**
	 * Define a callback function which is called when a system/pipe message was received from the node process
	 * @param {(msg: str) => void} cb 
	 * @return {void} 
	 */
	SetOnMessage(cb) {}

	/**
	 * Set a process environment variable
	 * @param {str} name 
	 * @param {str} val 
	 * @return {void} 
	 */
	SetEnv(name, val) {}

	/**
	 * Get a process environment variable
	 * @param {str} name 
	 * @return {str} 
	 */
	GetEnv(name) {}

	/**
	 * Open a message pipe
	 * @param {bin} isCmd 
	 * @return {void} 
	 */
	OpenMsgPipe(isCmd) {}

	/**
	 * Close a message pipe
	 * @param {bin} isCmd 
	 * @return {void} 
	 */
	CloseMsgPipe(isCmd) {}

	/**
	 * Send a message over the message pipe
	 * @param {str} msg 
	 * @param {bin} [isCmd=false] 
	 * @return {void} 
	 */
	SendPipeMsg(msg, isCmd) {}

	/**
	 * Send a message to the running node process
	 * @param {str} msg 
	 * @return {void} 
	 */
	SendMessage(msg) {}

	/**
	 * Returns if the Node component is ready for use
	 * @return {bin} 
	 */
	IsReady() {}

	/**
	 * Returns if the node process exited
	 * @return {bin} 
	 */
	IsDone() {}

	/**
	 * Run a NodeJS source file
	 * @param {str_pth} file 
	 * @param {str} [id] `Context ID`
	 * @param {str_lst} [newPaths] 
	 * @return {void} 
	 */
	Run(file, id, newPaths) {}

	/**
	 * Execute a line of code in the node process
	 * @param {str_jsc} js 
	 * @param {str} [id] `Context ID`
	 * @return {void} 
	 */
	Execute(js, id) {}

	/**
	 * Install a node module from npmjs.org
	 * @param {"name"|"name^ver"} name 
	 * @param {str} [dir] `optional target directory`
	 * @return {void} 
	 */
	AddModule(name, dir) {}
}


class DsNotification {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Cancel a notification with a specific id
	 * @param {"id"|"*"} id 
	 * @return {void} 
	 */
	Cancel(id) {}

	/**
	 * Returns the control class name
	 * @return {"Notification"} 
	 */
	GetType() {}

	/**
	 * Listen for any notifications
	 * @param {"CheckPerms"} [options] 
	 * @return {void} 
	 */
	Listen(options) {}

	/**
	 * Send the notification to the user
	 * @param {str} id 
	 * @return {void} 
	 */
	Notify(id) {}

	/**
	 * Set a large image in the notification
	 * @param {str_ptf} image 
	 * @return {void} 
	 */
	SetLargeImage(image) {}

	/**
	 * Activate device notification LEDs
	 * @param {str_col} color 
	 * @param {num_mls} [onMs] 
	 * @param {num_mls} [offMs] 
	 * @return {void} 
	 */
	SetLights(color, onMs, offMs) {}

	/**
	 * Set notification texts
	 * @param {str} ticker 
	 * @param {str} [title] 
	 * @param {str} [text] 
	 * @param {str} [extra] `Add multiline text in your notification.`
	 * @return {void} 
	 */
	SetMessage(ticker, title, text, extra) {}

	/**
	 * Called when notification intercepted
	 * @param {(source: str, title: str, message: str, extra: str, type: "Normal") => void} callback 
	 * @return {void} 
	 */
	SetOnNotify(callback) {}

	/**
	 * Set a small image icon
	 * @param {str_ptf} image 
	 * @return {void} 
	 */
	SetSmallImage(image) {}
}


class DsNxt {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Play frequency tone
	 * @param {num_hrz} frequency 
	 * @param {num_mls} [duration] 
	 * @return {void} 
	 */
	Beep(frequency, duration) {}

	/**
	 * Brakes motors smoothly
	 * @param {"A"|"B"|"C"|"ABC"} motors 
	 * @return {void} 
	 */
	Brake(motors) {}

	/**
	 * Check if device is connected to NXT
	 * @return {bin} 
	 */
	CheckConnection() {}

	/**
	 * Connect to NXT
	 * @param {str} name 
	 * @return {void} 
	 */
	Connect(name) {}

	/**
	 * Disconnect NXT
	 * @return {void} 
	 */
	Disconnect() {}

	/**
	 * Commands NXT to drive motors
	 * @param {"A"|"B"|"C"|"ABC"} motors 
	 * @param {num_prc} power 
	 * @param {num_prc} [rotations] `-100..100`
	 * @param {str} [options] 
	 * @return {void} 
	 */
	Drive(motors, power, rotations, options) {}

	/**
	 * Find first program file
	 * @param {str} pattern 
	 * @return {str} 
	 */
	FileFindFirst(pattern) {}

	/**
	 * Find next program file on the NXT
	 * @param {str} handle 
	 * @return {str} 
	 */
	FileFindNext(handle) {}

	/**
	 * Returns NXT Bt address
	 * @return {str} 
	 */
	GetBtAddress() {}

	/**
	 * Returns NXT Bt name
	 * @return {str} 
	 */
	GetBtName() {}

	/**
	 * Returns the current running program name
	 * @return {str} 
	 */
	GetCurrentProgram() {}

	/**
	 * Returns a new wheel encoder value
	 * @param {"A"|"B"|"C"|"ABC"} motor 
	 * @return {num_int} 
	 */
	GetRotationCount(motor) {}

	/**
	 * Returns the control class name
	 * @return {"Nxt"} 
	 */
	GetType() {}

	/**
	 * Checks if bt is enabled
	 * @return {bin} 
	 */
	IsBluetoothEnabled() {}

	/**
	 * Checks if NXT is connected
	 * @return {bin} 
	 */
	IsConnected() {}

	/**
	 * Checks if bt is enabled
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Check if a motor is powered
	 * @param {"A"|"B"|"C"|"ABC"} motor 
	 * @return {void} 
	 */
	IsMotorIdle(motor) {}

	/**
	 * Checks if the device is paired with an other
	 * @param {str} name 
	 * @return {bin} 
	 */
	IsPaired(name) {}

	/**
	 * Play a sound file a certain amount of times
	 * @param {str_ptf} file 
	 * @param {num_int} [repeat=0] 
	 * @return {void} 
	 */
	PlaySoundFile(file, repeat) {}

	/**
	 * Read a color sensor value on the input where the sensor is plugged into
	 * @param {1} input 
	 * @param {"ColorDetect"|"LightSense"|"RedSense"|"GreenSense"|"BlueSense"} [mode] 
	 * @return {num_int} `1..6 or 0..1023`
	 */
	ReadColorSensor(input, mode) {}

	/**
	 * Get measured ultrasinic distance in cm
	 * @param {num_int} input `1..4`
	 * @return {num_flt} 
	 */
	ReadDistanceSensor(input) {}

	/**
	 * Measures the light intensity
	 * @param {num_int} input `1..4`
	 * @param {bin} [active] 
	 * @return {num_int} `0..100`
	 */
	ReadLightSensor(input, active) {}

	/**
	 * Reads a message from the NXT brick's mail box
	 * @param {num_int} mailbox `1..10`
	 * @param {"Text"|"Number"|"Logic"} [type] 
	 * @param {bin} [remove] 
	 * @return {str} 
	 */
	ReadMail(mailbox, type, remove) {}

	/**
	 * Measure the sound pressure level
	 * @param {num_int} input `1..4`
	 * @param {"DB"|"DbA"} [mode] <br>
 	 * &emsp; `DB` - Decibels\
 	 * &emsp; `DbA` - A-weighted Decibels
	 * @return {num_flt} 
	 */
	ReadSoundSensor(input, mode) {}

	/**
	 * Check if the touch sensor is pressed
	 * @param {num_int} input `1..4`
	 * @return {bin} 
	 */
	ReadTouchSensor(input) {}

	/**
	 * Request enabling bluetooth if it isn't
	 * @return {void} 
	 */
	RequestEnable() {}

	/**
	 * Reset wheel encoder offset to 0
	 * @param {"A"|"B"|"C"|"ABC"} motors 
	 * @return {void} 
	 */
	Reset(motors) {}

	/**
	 * Sends a message to the NXT brick's mail box
	 * @param {num_int} mailbox `1..10`
	 * @param {"Text"|"Number"|"Logic"} [type] 
	 * @param {str|num_int} [message] 
	 * @return {void} 
	 */
	SendMail(mailbox, type, message) {}

	/**
	 * Inverts the direction of motor commands
	 * @param {bin} invert 
	 * @return {void} 
	 */
	SetInvert(invert) {}

	/**
	 * Change sensor LED color
	 * @param {num_int} input `1..4`
	 * @param {"White"|"Red"|"Green"|"Blue"|"Off"} color 
	 * @return {void} 
	 */
	SetLampColor(input, color) {}

	/**
	 * Called when NXT connection established or failed
	 * @param {(connected: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnConnect(callback) {}

	/**
	 * Called when bt connection established
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnConnected(callback) {}

	/**
	 * Shows a list of paired NXT devices to connect to
	 * @return {void} 
	 */
	ShowDevices() {}

	/**
	 * Starts an NXT-G program on the NXT brick if available
	 * @param {str_pth} name 
	 * @return {void} 
	 */
	StartProgram(name) {}

	/**
	 * Stop powering some motors
	 * @param {"A"|"B"|"C"|"ABC"} motors 
	 * @return {void} 
	 */
	Stop(motors) {}

	/**
	 * Stops the current running program
	 * @return {void} 
	 */
	StopProgram() {}

	/**
	 * Convert color number to its name
	 * @param {num_int} val `1..6`
	 * @return {"black"|"blue"|"green"|"yellow"|"red"|"white"} 
	 */
	ToColorName(val) {}
}


class DsOverlay {

	/**
	 * Adds layout to overlay
	 * @param {DsLayout} layout 
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	AddLayout(layout, left, top, options) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns the control class name
	 * @return {void} 
	 */
	GetType() {}

	/**
	 * Remove layout from overlay
	 * @param {DsLayout} layout 
	 * @return {void} 
	 */
	RemoveLayout(layout) {}

	/**
	 * Changes a child layout position
	 * @param {DsLayout} layout 
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(layout, left, top, options) {}
}


class DsPhoneState {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Returns the control class name
	 * @return {"PhoneState"} 
	 */
	GetType() {}

	/**
	 * Called when a phone state has changed
	 * @param {(type: "CellLocation"|"DataConnection"|"DataActivity"|"CallState"|"ServiceState"|"SignalStrength"|"CallForwarding"|"MessageWaiting", data: all) => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Start listening
	 * @return {void} 
	 */
	Start() {}

	/**
	 * Stop listening
	 * @return {void} 
	 */
	Stop() {}
}


class DsPlayStore {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Get product info from Google Play
	 * @param {str} prodIDs 
	 * @param {(items: { skuDetailsToken: str, productId: str, type: str, price: str, price_amount_micros: num_int, price_currency_code: str, title: str, description: str }[]) => void} [callback] 
	 * @param {"IAP"|"SUBS"} [options] <br>
 	 * &emsp; `IAP` - In-App purchases\
 	 * &emsp; `SUBS` - subscriptions
	 * @return {void} 
	 */
	GetBillingInfo(prodIDs, callback, options) {}

	/**
	 * Get purchased items from Google Play
	 * @param {(items: { skuDetailsToken: str, productId: str, type: str, price: str, price_amount_micros: num_int, price_currency_code: str, title: str, description: str }[]) => void} [callback] 
	 * @param {"SUBS"} [options] 
	 * @return {void} 
	 */
	GetPurchases(callback, options) {}

	/**
	 * Returns the control class name
	 * @return {"PlayStore"} 
	 */
	GetType() {}

	/**
	 * Purchase an item on Google Play
	 * @param {str} prodID 
	 * @param {str} token 
	 * @param {(prodId: str, orderId: str, purchToken: str, devToken: str, packageName: str) => void} [callback] 
	 * @param {"SUBS"} [options] 
	 * @return {void} 
	 */
	Purchase(prodID, token, callback, options) {}
}


class DsScroller {

	/**
	 * Add a layout control
	 * @param {DsLayout} layout 
	 * @return {void} 
	 */
	AddChild(layout) {}

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Devil rises and takes a child with him to hell
	 * @param {DsLayout} layout 
	 * @return {void} 
	 */
	DestroyChild(layout) {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get horizontal scroll bar position
	 * @return {num_frc} 
	 */
	GetScrollX() {}

	/**
	 * Get vertical scroll bar position
	 * @return {num_frc} 
	 */
	GetScrollY() {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"Scroller"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Remove a scroller layout
	 * @param {dso} child 
	 * @return {void} 
	 */
	RemoveChild(child) {}

	/**
	 * Scroll relative to the current position
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {void} 
	 */
	ScrollBy(x, y) {}

	/**
	 * Scrolls to a given position
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @return {void} 
	 */
	ScrollTo(x, y) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsSeekBar {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"SeekBar"} 
	 */
	GetType() {}

	/**
	 * Get current value
	 * @return {num} 
	 */
	GetValue() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @param {str} [options] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode, options) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Set rate of OnChange calls
	 * @param {num_mls} rate 
	 * @return {void} 
	 */
	SetMaxRate(rate) {}

	/**
	 * Called when content was changed by the user
	 * @param {(value: num) => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Called when content was changed by the user
	 * @param {(value: num) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Set value range
	 * @param {num} range 
	 * @return {void} 
	 */
	SetRange(range) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set current seekbar value
	 * @param {num} val 
	 * @return {void} 
	 */
	SetValue(val) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsSensor {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Get first value of a sensor
	 * @return {num} 
	 */
	GetAzimuth() {}

	/**
	 * Returns a list of builtin sensors in your device
	 * @return {str_com} 
	 */
	GetNames() {}

	/**
	 * Get second value of a sensor
	 * @return {num} 
	 */
	GetPitch() {}

	/**
	 * Get third value of a sensor
	 * @return {num} 
	 */
	GetRoll() {}

	/**
	 * Returns the control class name
	 * @return {"Sensor"} 
	 */
	GetType() {}

	/**
	 * Get all values from sensor
	 * @return {[ num_mls, num, num, num ]} 
	 */
	GetValues() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set maximum OnChange rate
	 * @param {num_mls} rate 
	 * @return {void} 
	 */
	SetMaxRate(rate) {}

	/**
	 * Set minimum value difference which triggers OnChange
	 * @param {num} min 
	 * @return {void} 
	 */
	SetMinChange(min) {}

	/**
	 * Called when a sensor value has changed
	 * @param {(first: num, second: num, third: num, time: num_mls) => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Start the sensor
	 * @return {void} 
	 */
	Start() {}

	/**
	 * Stop the sensor
	 * @return {void} 
	 */
	Stop() {}
}


class DsService {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Returns the control class name
	 * @return {"Service"} 
	 */
	GetType() {}

	/**
	 * Send message to service
	 * @param {str} message 
	 * @return {void} 
	 */
	SendMessage(message) {}

	/**
	 * Run service in background
	 * @return {void} 
	 */
	SetInBackground() {}

	/**
	 * Run service in foreground
	 * @param {str} title 
	 * @param {str} [text] 
	 * @param {str_ptf} [largeIcon] 
	 * @param {str_ptf} [smallIcon] 
	 * @param {"none"|"min"|"low"|"high"} [importance] 
	 * @return {void} 
	 */
	SetInForeground(title, text, largeIcon, smallIcon, importance) {}

	/**
	 * Called when service sent a message
	 * @param {(message: str) => void} callback 
	 * @return {void} 
	 */
	SetOnMessage(callback) {}

	/**
	 * Stop service
	 * @return {void} 
	 */
	Stop() {}
}


class DsSMS {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Returns the control class name
	 * @return {"SMS"} 
	 */
	GetType() {}

	/**
	 * Send SMS message
	 * @param {str} number 
	 * @param {str} message 
	 * @param {"MultiPart"} [options] <br>
 	 * &emsp; `MultiPart` - multi-part SMS messaging
	 * @return {void} 
	 */
	Send(number, message, options) {}

	/**
	 * Called when user received a SMS
	 * @param {(message: str) => void} callback 
	 * @return {void} 
	 */
	SetOnMessage(callback) {}

	/**
	 * Called when a status has changed
	 * @param {(status: str) => void} callback 
	 * @return {void} 
	 */
	SetOnStatus(callback) {}
}


class DsSpeechRec {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Stop recognition
	 * @return {void} 
	 */
	Cancel() {}

	/**
	 * Returns the RMS value (Root Mean Square) from the audio recorder
	 * @return {num_flt} 
	 */
	GetRMS() {}

	/**
	 * Returns the control class name
	 * @return {"SpeechRec"} 
	 */
	GetType() {}

	/**
	 * Check whether SpeechRec is listening
	 * @return {bin} 
	 */
	IsListening() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Start speech recognition
	 * @return {void} 
	 */
	Recognize() {}

	/**
	 * Called when an error occured
	 * @param {(error: str) => void} callback 
	 * @return {void} 
	 */
	SetOnError(callback) {}

	/**
	 * Called when SpeechRec is ready for use
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnReady(callback) {}

	/**
	 * Called when text was recognized
	 * @param {(result: str) => void} callback 
	 * @return {void} 
	 */
	SetOnResult(callback) {}

	/**
	 * Stop recording and start recognition
	 * @return {void} 
	 */
	Stop() {}
}


class DsSpinner {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"Spinner"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Change current shown item
	 * @param {str} item 
	 * @return {void} 
	 */
	SelectItem(item) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change spinner list
	 * @param {str_com} list 
	 * @param {str} [delim=','] 
	 * @return {void} 
	 */
	SetList(list, delim) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when value changed by the user
	 * @param {(item: str, index: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Define a callback function for touch events
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change current shown item
	 * @param {str} item 
	 * @return {void} 
	 */
	SetText(item) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsSwitch {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Checks if switch is activated
	 * @return {bin} 
	 */
	GetChecked() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"Switch"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Change the checked state
	 * @param {bin} checked 
	 * @return {void} 
	 */
	SetChecked(checked) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when user touched the control
	 * @param {(value: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Customize the button looks
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsSynth {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Returns the control class name
	 * @return {"Synth"} 
	 */
	GetType() {}

	/**
	 * Play a sequence of notes
	 * @param {str_com} tune `note1:duration1,note2:duration2,...`
	 * @return {void} 
	 */
	PlayMidiTune(tune) {}

	/**
	 * Play a single note
	 * @param {num_int} note `0..125`
	 * @return {void} 
	 */
	PlayNote(note) {}

	/**
	 * Plays a frequency tone
	 * @param {num} frequency frequency
	 * @param {num_mls} duration 
	 * @return {void} 
	 */
	PlayTone(frequency, duration) {}

	/**
	 * Change delay effect difference
	 * @param {num_mls} milliseconds 
	 * @return {void} 
	 */
	SetDelay(milliseconds) {}

	/**
	 * Enables the delay effect (plays every note a second time after a given delay)
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetDelayEnabled(enable) {}

	/**
	 * Adds a delay feedback effect
	 * @param {num_frc} feedback 
	 * @return {void} 
	 */
	SetFeedback(feedback) {}

	/**
	 * Set current frequency
	 * @param {num} frequency 
	 * @return {void} 
	 */
	SetFrequency(frequency) {}

	/**
	 * Set whole note length
	 * @param {num_sec} duration 
	 * @return {void} 
	 */
	SetNoteLength(duration) {}

	/**
	 * Initializes phaser
	 * @param {num_frc} drywet 
	 * @param {num} rate 
	 * @param {num} range 
	 * @param {num_frc} feedback 
	 * @return {void} 
	 */
	SetPhaser(drywet, rate, range, feedback) {}

	/**
	 * Control unprocessed/delayed signals ratio
	 * @param {num_frc} drywet 
	 * @return {void} 
	 */
	SetPhaserDryWet(drywet) {}

	/**
	 * En/Disables phaser effect
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetPhaserEnabled(enable) {}

	/**
	 * Enables phaser feedback
	 * @param {num_frc} feedback 
	 * @return {void} 
	 */
	SetPhaserFeedback(feedback) {}

	/**
	 * Set sweep range
	 * @param {num} range 
	 * @return {void} 
	 */
	SetPhaserRange(range) {}

	/**
	 * Set sweeps per second
	 * @param {num} rate 
	 * @return {void} 
	 */
	SetPhaserRate(rate) {}

	/**
	 * Initializes the VCA
	 * @param {num_mls} attack 
	 * @param {num_mls} decay 
	 * @param {num_frc} sustain 
	 * @param {num_mls} release 
	 * @return {void} 
	 */
	SetVca(attack, decay, sustain, release) {}

	/**
	 * Set a time of maximum volume
	 * @param {num_mls} attack 
	 * @return {void} 
	 */
	SetVcaAttack(attack) {}

	/**
	 * Controls time when volume is lowered to sustain
	 * @param {num_mls} decay 
	 * @return {void} 
	 */
	SetVcaDecay(decay) {}

	/**
	 * En/Disables VCA effect
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetVcaEnabled(enable) {}

	/**
	 * Set a time of minimum volume
	 * @param {num} release mls
	 * @return {void} 
	 */
	SetVcaRelease(release) {}

	/**
	 * Set a basis volume
	 * @param {num_frc} sustain 
	 * @return {void} 
	 */
	SetVcaSustain(sustain) {}

	/**
	 * Initialize the VCF effect
	 * @param {num_mls} attack 
	 * @param {num_mls} decay 
	 * @param {num_frc} sustain 
	 * @param {num_mls} release 
	 * @param {num} cuttoff frequency
	 * @param {num_frc} resonance 
	 * @param {num_frc} depth 
	 * @return {void} 
	 */
	SetVcf(attack, decay, sustain, release, cuttoff, resonance, depth) {}

	/**
	 * Set a time of maximum frequencies
	 * @param {num_mls} attack 
	 * @return {void} 
	 */
	SetVcfAttack(attack) {}

	/**
	 * Set a maximum frequency which will never be exceeded
	 * @param {num} cuttoff frequency
	 * @return {void} 
	 */
	SetVcfCutoff(cuttoff) {}

	/**
	 * Controls time when frequency is lowered to sustain
	 * @param {num_mls} decay 
	 * @return {void} 
	 */
	SetVcfDecay(decay) {}

	/**
	 * Set filter strength
	 * @param {num_frc} depth 
	 * @return {void} 
	 */
	SetVcfDepth(depth) {}

	/**
	 * En/Disables VCF effect
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetVcfEnabled(enable) {}

	/**
	 * Set a time of minimum frequency
	 * @param {num_mls} release 
	 * @return {void} 
	 */
	SetVcfRelease(release) {}

	/**
	 * Adds a resonance tone
	 * @param {num_frc} resonance 
	 * @return {void} 
	 */
	SetVcfResonance(resonance) {}

	/**
	 * Set a basis frequency
	 * @param {num_frc} sustain 
	 * @return {void} 
	 */
	SetVcfSustain(sustain) {}

	/**
	 * Set master volume
	 * @param {num_frc} left 
	 * @param {num_frc} right 
	 * @return {void} 
	 */
	SetVolume(left, right) {}

	/**
	 * Set the wave shape of the synthesizer
	 * @param {"Sin"|"Saw"|"Square"|"White"} shape 
	 * @return {void} 
	 */
	SetWaveShape(shape) {}

	/**
	 * Start playing
	 * @return {void} 
	 */
	Start() {}

	/**
	 * Stop playing
	 * @return {void} 
	 */
	Stop() {}
}


class DsSysProc {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Read from stderr
	 * @param {num_int} maxLines 
	 * @param {string | ("nowait")[]} [options] <br>
 	 * &emsp; `nowait` - dont wait for input
	 * @return {void} 
	 */
	Err(maxLines, options) {}

	/**
	 * Returns the control class name
	 * @return {"SysProc"} 
	 */
	GetType() {}

	/**
	 * Read from stdin
	 * @param {num_int} maxLines 
	 * @param {string | ("nowait")[]} [options] <br>
 	 * &emsp; `nowait` - dont wait for input
	 * @return {void} 
	 */
	In(maxLines, options) {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Write to stdout
	 * @param {str} command 
	 * @return {void} 
	 */
	Out(command) {}

	/**
	 * Read first byte of a file
	 * @param {str_ptf} file 
	 * @return {num_byt} 
	 */
	ReadFileAsByte(file) {}

	/**
	 * Called when stderr changed
	 * @param {(data: str) => void} callback 
	 * @return {void} 
	 */
	SetOnError(callback) {}

	/**
	 * Called when stdout changed
	 * @param {(data: str) => void} callback 
	 * @return {void} 
	 */
	SetOnInput(callback) {}

	/**
	 * Write binary data to file
	 * @param {str_ptf} file 
	 * @param {str} data 
	 * @return {void} 
	 */
	WriteToFile(file, data) {}
}


class DsTabs {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get current tab name
	 * @return {str} 
	 */
	GetCurrentTabName() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get tab content layout
	 * @param {str} name 
	 * @return {DsLayout} 
	 */
	GetLayout(name) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"Tabs"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Apply corner radius to card layouts's
	 * @param {num_pxl} radius 
	 * @return {void} 
	 */
	SetCornerRadius(radius) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when current tab changed
	 * @param {(name: str) => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Called when the user changed a control content
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnChildChange(callback) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Called when user touched the control
	 * @param {(event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set text size
	 * @param {num} size 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Enable touch event forwarding
	 * @param {bin} through 
	 * @return {void} 
	 */
	SetTouchThrough(through) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Switch current tab
	 * @param {str} name 
	 * @return {void} 
	 */
	ShowTab(name) {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	parent = {
		/**
		 * Add a new tab
		 * @param {str} name 
		 * @return {void} 
		 */
		AddTab(name) {}
	}
}


class DsText {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Return html formatted text
	 * @return {str_htm} 
	 */
	GetHtml() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get amount of text lines
	 * @return {num_int} 
	 */
	GetLineCount() {}

	/**
	 * Get the start character index of a line
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Get line top position on screen
	 * @param {num_int} line 
	 * @return {num_frc} 
	 */
	GetLineTop(line) {}

	/**
	 * Get amount of lines fitting in the control
	 * @return {num_int} 
	 */
	GetMaxLines() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"Text"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Append line to the text
	 * @param {str} message 
	 * @param {string | ("Clear"|"Red"|"Green"|"Blue")[]} [options] <br>
 	 * &emsp; `Clear` - Clears the log before writing
	 * @return {void} 
	 */
	Log(message, options) {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Auto-crop text to fit in control
	 * @param {"start"|"middle"|"end"} mode 
	 * @return {void} 
	 */
	SetEllipsize(mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Change the used font
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetFontFile(file) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Set maximum log length
	 * @param {num_int} maxLines 
	 * @return {void} 
	 */
	SetLog(maxLines) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when the control was pressed for eons
	 * @param {(src: dso) => void} callback 
	 * @return {void} 
	 */
	SetOnLongTouch(callback) {}

	/**
	 * Called when user touched the control
	 * @param {(event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when the user starts touching the control
	 * @param {(event: { source: dso, action: "Down", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchDown(callback) {}

	/**
	 * Called when the user drags a finger over the screen
	 * @param {(event: { source: dso, action: "Move", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchMove(callback) {}

	/**
	 * Called when the user finger leaves te screen
	 * @param {(event: { source: dso, action: "Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouchUp(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Define a shadow around the control
	 * @param {num_int} radius 
	 * @param {num_int} [dx] 
	 * @param {num_int} [dy] 
	 * @param {str_col} [color] 
	 * @return {void} 
	 */
	SetTextShadow(radius, dx, dy, color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * En/Disables touch events to be fired on the control
	 * @param {bin} touchable 
	 * @return {void} 
	 */
	SetTouchable(touchable) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsTextEdit {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clear undo/redo history
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the current cursor line index
	 * @return {num_int} 
	 */
	GetCursorLine() {}

	/**
	 * Get the cursor position in the text
	 * @return {num_int} 
	 */
	GetCursorPos() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Return html formatted text
	 * @return {str_htm} 
	 */
	GetHtml() {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Get amount of text lines
	 * @return {num_int} 
	 */
	GetLineCount() {}

	/**
	 * Get the start character index of a line
	 * @param {num_int} line 
	 * @return {num_int} 
	 */
	GetLineStart(line) {}

	/**
	 * Get line top position on screen
	 * @param {num_int} line 
	 * @return {num_frc} 
	 */
	GetLineTop(line) {}

	/**
	 * Get amount of lines fitting in the control
	 * @return {num_int} 
	 */
	GetMaxLines() {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get the selected text
	 * @return {str} 
	 */
	GetSelectedText() {}

	/**
	 * Get selection end position
	 * @return {num_int} 
	 */
	GetSelectionEnd() {}

	/**
	 * Get selection start position
	 * @return {num_int} 
	 */
	GetSelectionStart() {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"TextEdit"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Insert text at a given position
	 * @param {str} text 
	 * @param {num_int} start 
	 * @return {void} 
	 */
	InsertText(text, start) {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Redo an undone action
	 * @return {void} 
	 */
	Redo() {}

	/**
	 * Replace a range of the text with a string
	 * @param {str} text 
	 * @param {num_int} start 
	 * @param {num_int} end 
	 * @return {void} 
	 */
	ReplaceText(text, start, end) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Change cursor color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetCursorColor(color) {}

	/**
	 * Change the current cursor position
	 * @param {num_int} position 
	 * @return {void} 
	 */
	SetCursorPos(position) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Shows a grey default text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetHint(text) {}

	/**
	 * Set current text to html-formatted text
	 * @param {str_htm} str 
	 * @return {void} 
	 */
	SetHtml(str) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when content was changed by the user
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnChange(callback) {}

	/**
	 * Called when user pressed 'Done' or 'Enter'
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnEnter(callback) {}

	/**
	 * Called when the control gets focused
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnFocus(callback) {}

	/**
	 * Set selection color
	 * @param {str_col} col 
	 * @return {void} 
	 */
	SetSelectColor(col) {}

	/**
	 * Select text in a given range
	 * @param {num_int} start 
	 * @param {num_int} stop 
	 * @return {void} 
	 */
	SetSelection(start, stop) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}

	/**
	 * Undo an action
	 * @return {void} 
	 */
	Undo() {}
}


class DsTheme {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Returns the control class name
	 * @return {"Theme"} 
	 */
	GetType() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Define button text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBtnTextColor(color) {}

	/**
	 * Define button options
	 * @param {string | ("FontAwesome"|"Html"|"Monospace"|"SingleLine"|"Custom"|"NoPad"|"FillX/Y"|"Normal"|"Aluminium"|"Gray"|"Lego")[]} [options] 
	 * @return {void} 
	 */
	SetButtonOptions(options) {}

	/**
	 * Define button paddings
	 * @param {num} [left=0] 
	 * @param {num} [top=0] 
	 * @param {num} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetButtonPadding(left, top, right, bottom, mode) {}

	/**
	 * Define button style
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @param {str_col} [checkClr] 
	 * @return {void} 
	 */
	SetButtonStyle(color1, color2, radius, strokeClr, strokeWidth, shadow, checkClr) {}

	/**
	 * Define check box options
	 * @param {string | ("FillX/Y")[]} [options] 
	 * @return {void} 
	 */
	SetCheckBoxOptions(options) {}

	/**
	 * Define dialog button colors
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetDialogBtnColor(color) {}

	/**
	 * Define dialog button text colors
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetDialogBtnTxtColor(color) {}

	/**
	 * Define dialog background colors
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetDialogColor(color) {}

	/**
	 * Define dialog corner radius
	 * @param {num_pxl} radius 
	 * @return {void} 
	 */
	SetDialogCornerRadius(radius) {}

	/**
	 * Define whether to dim dialog background
	 * @param {bin} dim 
	 * @return {void} 
	 */
	SetDimBehind(dim) {}

	/**
	 * Define highlight colors
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetHighlightColor(color) {}

	/**
	 * Define list divider colors
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetListDividerColor(color) {}

	/**
	 * Define progress background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetProgressBackColor(color) {}

	/**
	 * Define progress options
	 * @param {string | ("NoDim"|"NonModal"|"Solid")[]} [options] 
	 * @return {void} 
	 */
	SetProgressOptions(options) {}

	/**
	 * Define progress bar options
	 * @param {"Light"} [options] 
	 * @return {void} 
	 */
	SetProgressBarOptions(options) {}

	/**
	 * Define progress text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetProgressTextColor(color) {}

	/**
	 * Define control text color
	 * @param {str_col} color1 
	 * @param {str_col} color2 
	 * @return {void} 
	 */
	SetTextColor(color1, color2) {}

	/**
	 * Define text edit options
	 * @param {"underline"} [options] 
	 * @return {void} 
	 */
	SetTextEditOptions(options) {}

	/**
	 * Define title colors
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTitleColor(color) {}

	/**
	 * Define title divider colors
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTitleDividerColor(color) {}

	/**
	 * Define title divider height
	 * @param {num_pxl} [height=-1] 
	 * @return {void} 
	 */
	SetTitleDividerHeight(height) {}

	/**
	 * Define title height
	 * @param {num_pxl} [height=-1] 
	 * @param {string | ("px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps")[]} [options] 
	 * @return {void} 
	 */
	SetTitleHeight(height, options) {}

	/**
	 * Define title text size
	 * @param {num} size 
	 * @param {string | ("px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps")[]} [options] 
	 * @return {void} 
	 */
	SetTitleTextSize(size, options) {}
}


class DsToggle {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Checks if toggle is activated
	 * @return {bin} 
	 */
	GetChecked() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Returns the currently contained text
	 * @return {str} 
	 */
	GetText() {}

	/**
	 * Returns the current text size
	 * @param {"px"} mode 
	 * @return {num} 
	 */
	GetTextSize(mode) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"Toggle"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Change the checked state
	 * @param {bin} checked 
	 * @return {void} 
	 */
	SetChecked(checked) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when user touched the control
	 * @param {(value: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Customize the button looks
	 * @param {str_col} [color1='sky'] 
	 * @param {str_col} [color2='sky'] 
	 * @param {num_pxl} [radius=0] 
	 * @param {str_col} [strokeClr='sky'] 
	 * @param {num_pxl} [strokeWidth=0] 
	 * @param {num_frc} [shadow=0] 
	 * @param {str_col} [checkClr] 
	 * @return {void} 
	 */
	SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow, checkClr) {}

	/**
	 * Change displayed text
	 * @param {str} text 
	 * @return {void} 
	 */
	SetText(text) {}

	/**
	 * Change the text color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetTextColor(color) {}

	/**
	 * Change the text size
	 * @param {num} size 
	 * @param {"px"|"dip"|"sp"|"mm"|"pt"|"pl"|"ps"} [mode] <br>
 	 * &emsp; `pl` - scales text in proportion with device resolution\
 	 * &emsp; `ps` - scales text in proportion with device resolution
	 * @return {void} 
	 */
	SetTextSize(size, mode) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsUSBSerial {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Get the 'Data Terminal Ready' state
	 * @return {void} 
	 */
	GetDTR() {}

	/**
	 * Get the 'Request To Send' state
	 * @return {void} 
	 */
	GetRTS() {}

	/**
	 * Get the 'Carrier Detect' state
	 * @return {void} 
	 */
	GetCD() {}

	/**
	 * Returns the control class name
	 * @return {"USBSerial"} 
	 */
	GetType() {}

	/**
	 * Actively checks if a USB device is connected
	 * @return {bin} 
	 */
	IsConnected() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Define data format for outgoing data
	 * @param {str} mode `Hex`, `Int`, `Text`, `<encoding>`\
 	 * &emsp; `Hex` - comma separated text value\
 	 * &emsp; `Int` - comma separated byte numbers\
 	 * &emsp; `Text` - string of text characters\
 	 * &emsp; `encoding` - UTF-16L/BE
	 * @return {void} 
	 */
	SetDataMode(mode) {}

	/**
	 * Raises the Data Terminal Ready state
	 * @param {bin} onOff 
	 * @return {void} 
	 */
	SetDTR(onOff) {}

	/**
	 * Set maximum bytes to received
	 * @param {num_int} bytes 
	 * @return {void} 
	 */
	SetMaxRead(bytes) {}

	/**
	 * Set maximum bytes to send
	 * @param {num_int} bytes 
	 * @return {void} 
	 */
	SetMaxWrite(bytes) {}

	/**
	 * Called after received Data via USB
	 * @param {(data: str) => void} callback 
	 * @return {void} 
	 */
	SetOnReceive(callback) {}

	/**
	 * Raises the Request To Send state
	 * @param {bin} onOff 
	 * @return {void} 
	 */
	SetRTS(onOff) {}

	/**
	 * Specify how to split received data
	 * @param {"End"|"Start-End"|"Size"} mode 
	 * @param {str|num_int} [p2] 
	 * @param {str|num_int} [p3] 
	 * @return {void} 
	 */
	SetSplitMode(mode, p2, p3) {}

	/**
	 * Set timeout
	 * @param {num_mls} ms 
	 * @return {void} 
	 */
	SetTimeout(ms) {}

	/**
	 * Start listening to serial port
	 * @return {void} 
	 */
	Start() {}

	/**
	 * Stop listening to serial port
	 * @return {void} 
	 */
	Stop() {}

	/**
	 * Send data to connected device
	 * @param {str} text 
	 * @param {"US-ASCII"|"UTF16L/BE"} [encoding] 
	 * @return {void} 
	 */
	Write(text, encoding) {}
}


class DsVideoView {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get video duration in seconds
	 * @return {num_flt} 
	 */
	GetDuration() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"VideoView"} 
	 */
	GetType() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the view is currently playing
	 * @return {bin} 
	 */
	IsPlaying() {}

	/**
	 * Check if the video is ready for playback
	 * @return {bin} 
	 */
	IsReady() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Pause the video
	 * @return {void} 
	 */
	Pause() {}

	/**
	 * Play video
	 * @return {void} 
	 */
	Play() {}

	/**
	 * Seek to a given playback time
	 * @param {num_int} seconds 
	 * @return {void} 
	 */
	SeekTo(seconds) {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Set video source
	 * @param {str_pth|str_url} file `http(s)://url`
	 * @return {void} 
	 */
	SetFile(file) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Called when playback finished
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnComplete(callback) {}

	/**
	 * Called when an error occured
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnError(callback) {}

	/**
	 * Called when video is ready for playback
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnReady(callback) {}

	/**
	 * Called when subtitle text changed
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnSubtitle(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set a subtitle source
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	SetSubtitles(file) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Change the playback volume
	 * @param {num_prc} left 
	 * @param {num_prc} right 
	 * @return {void} 
	 */
	SetVolume(left, right) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Stop video playback
	 * @return {void} 
	 */
	Stop() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsWebServer {

	/**
	 * Redirect urls
	 * @param {str_url} pattern 
	 * @param {str_url} location 
	 * @return {void} 
	 */
	AddRedirect(pattern, location) {}

	/**
	 * Called when servlet received a message
	 * @param {"/name"} path url path
	 * @param {(args: {[parameter: str]: str}, info: { remoteAddress: str }) => void} callback 
	 * @return {void} 
	 */
	AddServlet(path, callback) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Disconnect Client from WebServer
	 * @param {str} ip 
	 * @param {num_int} [id] 
	 * @return {void} 
	 */
	Disconnect(ip, id) {}

	/**
	 * Returns the control class name
	 * @return {"WebServer"} 
	 */
	GetType() {}

	/**
	 * Get connected clients
	 * @return {{ remoteAddress: str, id: num_int }[]} 
	 */
	GetWebSockClients() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Send message to client(s)
	 * @param {str} txt 
	 * @param {str} ip 
	 * @param {num_int} id 
	 * @return {void} 
	 */
	SendText(txt, ip, id) {}

	/**
	 * Set server root folder
	 * @param {str_ptd} folder 
	 * @return {void} 
	 */
	SetFolder(folder) {}

	/**
	 * Called when received client message
	 * @param {(msg: str, ip: str, id: num_int) => void} callback 
	 * @return {void} 
	 */
	SetOnReceive(callback) {}

	/**
	 * Called when file uploaded to server
	 * @param {(filename: str, ip: str) => void} callback 
	 * @return {void} 
	 */
	SetOnUpload(callback) {}

	/**
	 * Respond to incoming HTTP request
	 * @param {str} text 
	 * @return {void} 
	 */
	SetResponse(text) {}

	/**
	 * Defile file upload destination
	 * @param {str_ptd} folder 
	 * @return {void} 
	 */
	SetUploadFolder(folder) {}

	/**
	 * Start server
	 * @return {void} 
	 */
	Start() {}

	/**
	 * Stop server
	 * @return {void} 
	 */
	Stop() {}
}


class DsWebSocket {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Close web socket
	 * @return {void} 
	 */
	Close() {}

	/**
	 * Get js Socket instance
	 * @return {WebSocket} WebSocket
	 */
	GetSocket() {}

	/**
	 * Check if WebSocket is open
	 * @return {bin} 
	 */
	IsOpen() {}

	/**
	 * Send message to server
	 * @param {str} message 
	 * @return {void} 
	 */
	Send(message) {}

	/**
	 * Called when WebSocket was closed
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnClose(callback) {}

	/**
	 * Called when received message from server
	 * @param {(message: str) => void} callback 
	 * @return {void} 
	 */
	SetOnMessage(callback) {}

	/**
	 * Called when WebSocket is open
	 * @param {() => void} callback 
	 * @return {void} 
	 */
	SetOnOpen(callback) {}
}


class DsWebView {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Animates a control
	 * @param {str} type `NewsPaper`, `Jelly`, `Flash`, `RubberBand`, `Swing`, `TaDa`, `Bounce`, `Fall`, `FallRotate`, `<br><img width='300px' src='../animate.png'></img>`
	 * @param {(type: str) => void} [callback] 
	 * @param {num_mls} [time] 
	 * @return {void} 
	 */
	Animate(type, callback, time) {}

	/**
	 * Load previous page
	 * @return {void} 
	 */
	Back() {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Check if history contains a previous page
	 * @return {bin} 
	 */
	CanGoBack() {}

	/**
	 * Check if history has a following page
	 * @return {bin} 
	 */
	CanGoForward() {}

	/**
	 * Capture WebView as png
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	Capture(file) {}

	/**
	 * Clear all cookies
	 * @return {void} 
	 */
	ClearCookies() {}

	/**
	 * Removes the focus of the control
	 * @return {void} 
	 */
	ClearFocus() {}

	/**
	 * Clears the page history for Back() and Forward()
	 * @return {void} 
	 */
	ClearHistory() {}

	/**
	 * Execute JS code inside the WebView
	 * @param {str_jsc} code 
	 * @param {(result: all) => void} [callback] 
	 * @return {void} 
	 */
	Execute(code, callback) {}

	/**
	 * Set the focus to the control for immediate access
	 * @return {void} 
	 */
	Focus() {}

	/**
	 * Load following page
	 * @return {void} 
	 */
	Forward() {}

	/**
	 * Call functions defined inside a webview
	 * @param {str} name 
	 * @param {all} ...args 
	 * @return {void} 
	 */
	Func(name, ...args) {}

	/**
	 * Get the control height in pixels
	 * @return {num_int} 
	 */
	GetAbsHeight() {}

	/**
	 * Get the control width in pixels
	 * @return {num_int} 
	 */
	GetAbsWidth() {}

	/**
	 * Get the height of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetHeight(options) {}

	/**
	 * Get distance to the left parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetLeft(options) {}

	/**
	 * Returns the parent control object
	 * @return {dso} 
	 */
	GetParent() {}

	/**
	 * Returns data about position and size
	 * @param {"screen"|"px"} options 
	 * @return {{ left: num, top: num, width: num, height: num }} \{ left, top, width, height }
	 */
	GetPosition(options) {}

	/**
	 * Get distance to the upper parent border
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetTop(options) {}

	/**
	 * Returns the control class name
	 * @return {"WebView"} 
	 */
	GetType() {}

	/**
	 * Get current url
	 * @return {str_url} 
	 */
	GetUrl() {}

	/**
	 * Get starting url
	 * @return {str_url} 
	 */
	GetHomeUrl() {}

	/**
	 * Returns the current visibility state
	 * @return {"Show"|"Hide"|"Gone"} 
	 */
	GetVisibility() {}

	/**
	 * Get the width of the control
	 * @param {"px"} options 
	 * @return {num} 
	 */
	GetWidth(options) {}

	/**
	 * Make it gone. It was never there!
	 * @return {void} 
	 */
	Gone() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is useable
	 * @return {bin} 
	 */
	IsEnabled() {}

	/**
	 * Checks if the control overlaps with another
	 * @param {dso} obj 
	 * @param {num_frc} [depth] 
	 * @return {bin} 
	 */
	IsOverlap(obj, depth) {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Returns if the page failed to load
	 * @return {bin} 
	 */
	LoadFailed() {}

	/**
	 * Load html to WebView
	 * @param {str_htm} html 
	 * @param {str_ptd} [baseFolder] 
	 * @param {string | ("AllowZoom"|"AutoZoom"|"Wide"|"FillX/Y"|"NoActionBar"|"IgnoreErrors"|"IgnoreSSLErrors"|"NoApp"|"NoCapture"|"NoLocate"|"NoLongTouch"|"NoPause"|"NoRedirect"|"NoScrollBars"|"Overview"|"Progress"|"ScrollFade"|"UseBasicInput"|"UseBrowser")[]} [options] <br>
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
	 * @return {void} 
	 */
	LoadHtml(html, baseFolder, options) {}

	/**
	 * Load url to WebView
	 * @param {str_url} url 
	 * @param {string | ("AllowZoom"|"AutoZoom"|"Wide"|"FillX/Y"|"NoActionBar"|"IgnoreErrors"|"IgnoreSSLErrors"|"NoApp"|"NoCapture"|"NoLocate"|"NoLongTouch"|"NoPause"|"NoRedirect"|"NoScrollBars"|"Overview"|"Progress"|"ScrollFade"|"UseBasicInput"|"UseBrowser")[]} [options] <br>
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
	 * @return {void} 
	 */
	LoadUrl(url, options) {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Print webpage via anddroid printer dialog
	 * @return {void} 
	 */
	Print() {}

	/**
	 * Reload current page
	 * @return {void} 
	 */
	Reload() {}

	/**
	 * Set the background transparency by alpha value
	 * @param {num} alpha `0..0.99`, `1..256`
	 * @return {void} 
	 */
	SetBackAlpha(alpha) {}

	/**
	 * Resize a control after device rotation
	 * @return {void} 
	 */
	Resize() {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @return {void} 
	 */
	SetBackColor(color) {}

	/**
	 * Define the background color of the control with a gradient
	 * @param {str_col} color1 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {"left-right"|"right-left"|"top-bottom"|"bottom-top"|"bl-tr"|"br-tl"|"tl-br"|"tr-bl"} [options] 
	 * @return {void} 
	 */
	SetBackGradient(color1, color2, color3, options) {}

	/**
	 * Define a radial background color gradient
	 * @param {num_frc} x 
	 * @param {num_frc} y 
	 * @param {num_frc} [radius] 
	 * @param {str_col} [color1] 
	 * @param {str_col} [color2] 
	 * @param {all} [color3] 
	 * @param {str_com} [options] 
	 * @return {void} 
	 */
	SetBackGradientRadial(x, y, radius, color1, color2, color3, options) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Block urls from loading
	 * @param {str[]|"urls"} urls 
	 * @return {void} 
	 */
	SetBlockedUrls(urls) {}

	/**
	 * Define context menus to listen for
	 * @param {str} [links] `Copy URL`, `Open URL`
	 * @param {str} [images] `Download Image`
	 * @return {void} 
	 */
	SetContextMenus(links, images) {}

	/**
	 * Adjust the visual color effect with different BlendModes
	 * @param {str_col} color 
	 * @param {"Add"|"Multiply"|"clear"|"darken"|"lighten"|"overlay"|"screen"|"xor"|"color"|"color_burn"|"color_dodge"|"difference"|"exclusion"|"hard_light"|"hue"|"luminosity"|"modulate"|"saturation"|"soft_light"|"src"|"dst"|"src_in"|"src_out"|"src_atop"|"src_over"|"dst_in"|"dst_out"|"dst_atop"|"dst_over"} [mode] 
	 * @return {void} 
	 */
	SetColorFilter(color, mode) {}

	/**
	 * Set accesibility description
	 * @param {str} desc 
	 * @return {void} 
	 */
	SetDescription(desc) {}

	/**
	 * En/Disable the control
	 * @param {bin} enable 
	 * @return {void} 
	 */
	SetEnabled(enable) {}

	/**
	 * Define error page
	 * @param {str_url} url 
	 * @return {void} 
	 */
	SetErrorPage(url) {}

	/**
	 * Inject scripts on page load
	 * @param {str_pth} file 
	 * @return {void} 
	 */
	SetInject(file) {}

	/**
	 * Define distances to other controls
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetMargins(left, top, right, bottom, mode) {}

	/**
	 * Scales the html text by a given factor
	 * @param {num_frc} zoom 
	 * @return {void} 
	 */
	SetTextZoom(zoom) {}

	/**
	 * Called when message logged to console
	 * @param {(msg: str) => void} callback 
	 * @return {void} 
	 */
	SetOnConsole(callback) {}

	/**
	 * Called when a context menu was used
	 * @param {(item: str, url: str, img: str, type: str) => void} callback 
	 * @return {void} 
	 */
	SetOnContextMenu(callback) {}

	/**
	 * Called when an error occured
	 * @param {(error: str) => void} callback 
	 * @return {void} 
	 */
	SetOnError(callback) {}

	/**
	 * Called when loading progress changed
	 * @param {(progress: num_prc) => void} callback 
	 * @return {void} 
	 */
	SetOnProgress(callback) {}

	/**
	 * Traps HTTP Requests
	 * @param {(url: str, method: str, isMain: bin, isRedirect: bin) => void} callback 
	 * @return {void} 
	 */
	SetOnRequest(callback) {}

	/**
	 * Called when user touched the control
	 * @param {(event: { source: dso, action: "Down"|"Move"|"Up", count: num_int, x: [ x1: num_frc, x2: num_frc, x3: num_frc ], y: [ y1: num_frc, y2: num_frc, y3: num_frc ] }) => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Called when link klicked
	 * @param {(url: str_url) => void} callback 
	 * @return {void} 
	 */
	SetOnUrl(callback) {}

	/**
	 * Define distances to contained elements
	 * @param {num_frc} [left=0] 
	 * @param {num_frc} [top=0] 
	 * @param {num_frc} [right=0] 
	 * @param {num_frc} [bottom=0] 
	 * @param {"px"|"sp"|"dip"|"mm"|"pt"} [mode='px'] 
	 * @return {void} 
	 */
	SetPadding(left, top, right, bottom, mode) {}

	/**
	 * Defines position and size on absolute layouts
	 * @param {num} left 
	 * @param {num} top 
	 * @param {num} [width] 
	 * @param {num} [height] 
	 * @param {"px"} [options] 
	 * @return {void} 
	 */
	SetPosition(left, top, width, height, options) {}

	/**
	 * Add url redirection rule
	 * @param {str_url} urlFrom 
	 * @param {str_url} urlTo 
	 * @return {void} 
	 */
	SetRedirect(urlFrom, urlTo) {}

	/**
	 * Scale the control by the given factors
	 * @param {num_fac} x 
	 * @param {num_fac} y 
	 * @return {void} 
	 */
	SetScale(x, y) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * En/Disable touchmode on the control
	 * @param {bin} mode 
	 * @return {void} 
	 */
	SetTouchMode(mode) {}

	/**
	 * Define which URLs open in browser
	 * @param {str} urlFilter 
	 * @return {void} 
	 */
	SetUseBrowser(urlFilter) {}

	/**
	 * Set/Add custom user agent
	 * @param {str} agent 
	 * @param {str} [options] `Add-appends to default user agent`
	 * @return {void} 
	 */
	SetUserAgent(agent, options) {}

	/**
	 * Set authentication/login data
	 * @param {str} name 
	 * @param {str} password 
	 * @return {void} 
	 */
	SetUserCreds(name, password) {}

	/**
	 * Change the visibility mode
	 * @param {"Show"|"Hide"|"Gone"} mode 
	 * @return {void} 
	 */
	SetVisibility(mode) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Simulate key event
	 * @param {str} keyName 
	 * @param {"META_META_ON"|"META_RIGHT_ON"|"NUM_LOCK_ON"|"SCROLL_LOCK_ON"|"SHIFT_LEFT_ON"|"SHIFT_MASK"|"SHIFT_ON"|"SHIFT_RIGHT_ON"|"SYM_ON"} [modifiers] 
	 * @param {num} [pause] 
	 * @return {void} 
	 */
	SimulateKey(keyName, modifiers, pause) {}

	/**
	 * Stop loading processes
	 * @return {void} 
	 */
	Stop() {}

	/**
	 * Animates the control
	 * @param {{ x: num_frc, y: num_frc, w: num_frc, h: num_frc, sw: num_frc, sh: num_frc, rot: num_deg }} target \{ x, y, w, h, sw, sh, rot }
	 * @param {num_mls} [duration] 
	 * @param {"Linear.None"|"Quadratic.In/Out"|"Cubic.In/Out"|"Quartic.In/Out"|"Quintic.In/Out"|"Sinusoidal.In/Out"|"Exponential.In/Out"|"Circular.In/Out"|"Elastic.In/Out"|"Back.In/Out"|"Bounce.In/Out"} [type] 
	 * @param {num_int} [repeat] 
	 * @param {bin} [yoyo] 
	 * @param {() => void} [callback] 
	 * @return {void} 
	 */
	Tween(target, duration, type, repeat, yoyo, callback) {}
}


class DsWizard {

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Hides the control and removes it from the screen
	 * @return {void} 
	 */
	Dismiss() {}

	/**
	 * Indicate that wizard finished
	 * @return {void} 
	 */
	Finish() {}

	/**
	 * Returns list of wiz control buttons
	 * @return {[DsButton, DsButton, DsButton]} 
	 */
	GetButtons() {}

	/**
	 * Get wiz dialog object
	 * @return {DsDialog} 
	 */
	GetDialog() {}

	/**
	 * Get wiz content layout
	 * @return {DsLayout} 
	 */
	GetLayout() {}

	/**
	 * Returns the control class name
	 * @return {"Wizard"} 
	 */
	GetType() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

	/**
	 * Checks if the control is currently visible
	 * @return {bin} 
	 */
	IsVisible() {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}
}


class DsYesNoDialog {

	/**
	 * Adjust the visual color effect of the control
	 * @param {num} hue `-180..180`
	 * @param {num} [saturation] `-100..100`
	 * @param {num} [brightness] `-100..100`
	 * @param {num} [contrast] `0..100`
	 * @return {void} 
	 */
	AdjustColor(hue, saturation, brightness, contrast) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Hides the control and removes it from the screen
	 * @return {void} 
	 */
	Dismiss() {}

	/**
	 * Returns the control class name
	 * @return {"YesNoDialog"} 
	 */
	GetType() {}

	/**
	 * Hides the control visually
	 * @return {void} 
	 */
	Hide() {}

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
	Method(name, types, p1, p2, p3, p4) {}

	/**
	 * Change the background color
	 * @param {str_col} color 
	 * @param {num_pxl} [radius] 
	 * @return {void} 
	 */
	SetBackColor(color, radius) {}

	/**
	 * Change the background to an image
	 * @param {str_ptf} file 
	 * @param {"repeat"} [options] 
	 * @return {void} 
	 */
	SetBackground(file, options) {}

	/**
	 * Change Yes/No button text
	 * @param {str} yes 
	 * @param {str} no 
	 * @return {void} 
	 */
	SetButtonText(yes, no) {}

	/**
	 * Called when user selects Yes or No
	 * @param {(result: "Yes"|"No") => void} callback 
	 * @return {void} 
	 */
	SetOnTouch(callback) {}

	/**
	 * Change the size of the control
	 * @param {num} width 
	 * @param {num} height 
	 * @param {"px"|"sp"|"dip"|"dp"|"mm"|"pt"} [options] 
	 * @return {void} 
	 */
	SetSize(width, height, options) {}

	/**
	 * Set the visibility to “Show”
	 * @return {void} 
	 */
	Show() {}
}


class DsZipUtil {

	/**
	 * Add file to zip
	 * @param {str} name `zip path`
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	AddFile(name, file) {}

	/**
	 * Add text to the zip
	 * @param {str} name `zip path`
	 * @param {str} text 
	 * @return {void} 
	 */
	AddText(name, text) {}

	/**
	 * Batch method calls to set object properties
	 * @param {{[command: str]: lst}} properties \{ command: args }
	 * @return {void} 
	 */
	Batch(properties) {}

	/**
	 * Close ZipUtil
	 * @return {void} 
	 */
	Close() {}

	/**
	 * Create zip file
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	Create(file) {}

	/**
	 * Create debug keystore file
	 * @param {str_ptf} file debug.keystore
	 * @return {void} 
	 */
	CreateDebugKey(file) {}

	/**
	 * Create a user keystore file
	 * @param {str_ptf} file user.keystore
	 * @param {str} password 
	 * @param {str} name 
	 * @param {str} organization 
	 * @return {void} 
	 */
	CreateKey(file, password, name, organization) {}

	/**
	 * Extract file from zip
	 * @param {str} name `zip path`
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	Extract(name, file) {}

	/**
	 * Returns the control class name
	 * @return {"ZipUtil"} 
	 */
	GetType() {}

	/**
	 * Get contained file list
	 * @param {str_pth} path 
	 * @return {str_com} 
	 */
	List(path) {}

	/**
	 * Open existing zip
	 * @param {str_ptf} file 
	 * @return {void} 
	 */
	Open(file) {}

	/**
	 * Sign and check zip against keystore file
	 * @param {str_ptf} fileIn 
	 * @param {str_ptf} fileOut 
	 * @param {str_pth} keyStore 
	 * @param {str} password 
	 * @return {bin} 
	 */
	Sign(fileIn, fileOut, keyStore, password) {}

	/**
	 * Update zip manifest
	 * @param {str_ptf} fileIn 
	 * @param {str_ptf} fileOut 
	 * @param {str} packageName 
	 * @param {str} appName 
	 * @param {str_com} [permissions] 
	 * @param {string | ("Launch"|"Debug")[]} [options] 
	 * @return {void} 
	 */
	UpdateManifest(fileIn, fileOut, packageName, appName, permissions, options) {}
}


class DsDatabase {

	/**
	 * AddTransaction
	 * 	 * deprecated  Use ExecuteSQL instead
	 * @param {obj} transaction JS SQLitePluginTransaction
	 * @return {void} 
	 */
	addTransaction(transaction) {}

	/**
	 * Close the database
	 * @param {(msg: str) => void} [success] 
	 * @param {(msg: str) => void} [error] 
	 * @return {void} 
	 */
	close(success, error) {}

	/**
	 * Close the database
	 * @return {void} 
	 */
	Close() {}

	/**
	 * Delete the database
	 * @return {void} 
	 */
	Delete() {}

	/**
	 * Execute SQL query
	 * @param {str_sql} statement 
	 * @param {lst} [params] 
	 * @param {(tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }, res: { rows: { item(i): { id: num, data: all, data_num: num } } }) => void} [success] 
	 * @param {(t: all, err: { message: str }) => void} [error] 
	 * @return {void} 
	 */
	executeSql(statement, params, success, error) {}

	/**
	 * Execute SQL query
	 * @param {str_sql} sql 
	 * @param {lst} [params] 
	 * @param {(res: { length: num_int, rowsAffected: num_int, rows: { item(i): { id: num, data: all, data_num: num } } }) => void} [success] 
	 * @param {(err: str) => void} [error] 
	 * @return {void} 
	 */
	ExecuteSql(sql, params, success, error) {}

	/**
	 * Get database name
	 * @return {str} 
	 */
	GetName() {}

	/**
	 * Returns the component class name
	 * @return {"Database"} 
	 */
	GetType() {}

	/**
	 * Database name
	 * @type {str} 
	 */
	name;

	/**
	 * Open database
	 * @param {() => void} [success] 
	 * @param {(msg: str) => void} [error] 
	 * @return {void} 
	 */
	open(success, error) {}

	/**
	 * ReadTransaction
	 * 	 * deprecated  Use ExecuteSql instead
	 * @param {(tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }) => void} fn 
	 * @param {(err: str) => void} [error] 
	 * @param {(tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }, res: { rows: { item(i): { id: num, data: all, data_num: num } } }) => void} [success] 
	 * @return {void} 
	 */
	readTransaction(fn, error, success) {}

	/**
	 * StartNextTransaction
	 * 	 * deprecated  Use ExecuteSql instead
	 * @return {void} 
	 */
	startNextTransaction() {}

	/**
	 * Transaction
	 * 	 * deprecated  Use ExecuteSql instead
	 * @param {(tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }) => void} fn 
	 * @param {(err: str) => void} [error] 
	 * @param {(fnc: (tx: { db: { openargs: { name: str, dblocation: str }, dbname: str, name: str }, txlock: bin, readOnly: bin, executes: [{ success: str, qid: num_int, sql: str_sql, params: lst }] }) => void, res: { length: num_int, rowsAffected: num_int, rows: { item(i): { id: num, data: all, data_num: num } } }) => void} [success] 
	 * @return {void} 
	 */
	transaction(fn, error, success) {}
}


class DsCheckList {

	/**
	 * Show the check list
	 * @return {void} 
	 */
	Show() {}

	/**
	 * Set list
	 * @param {str|{ title: str, check: bin }} data `title:checked`
	 * @return {void} 
	 */
	SetList(data) {}
}


