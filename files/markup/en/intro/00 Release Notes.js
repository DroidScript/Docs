// ------------- HEADER SECTION ------------- 


/** # 00 Release Notes #

 * 
 * $$ intro.00 Release Notes() $$ 
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
<!-- /[^\\]([_*])/\\$1/ /:/&colon;/ -->

## DS 2.61 (23-Mar-2023)
- Updated UI plugin to v0.22

#### DS 2.60b\_p4 (21-Mar-2023)
- FileManager extension now supports remote install of APKs/SPKs/PPKs.
- FileManager extension now allows diff comparison of two text files.
- Device now displays multiple remote (wifi ide) connections.
- Fixed crash when switching to terminal.
- Fixed crash after subscribing to monthly premium.
- Added yearly premium subscription option (cheaper).

#### DS 2.60b\_p3 (28-Feb-2023)
- Extension API func ext.Open() now switches to coding tabs when loading/displaying a file.
- Added new 'options' param to ide.Obfuscate(), use 'noswap' to prevent app\* swapify.
- Fixed missing 'Billing' permission in AABs when using app.CreatePlayStore.
- Fixed missing 'Accounts' permission in AABs when using app.GetUser/Accounts.
- Fixed the double-tap wifi "EADDRINUSE" error in wifi ide.
- Added DS build number to About box + new app.GetDSBuild() method.
- Tidied up app.CreateBluetoothList() layout.
- Prevented ide.AddModule from firing more than once per run.

#### DS 2.60b\_p2 (21-Feb-2023)
- Fixed issue with using ctrl.Batch() method with obfuscation.
- Removed troublesome bytecode file.

### DS 2.60b1 (28-Feb-2023)
- Added FLA\_MUTABLE to app.SetInForeground() and others to stop API 31 error.
- Added app.GetIsBatteryOptimized() detects if app is being optimized.
- Added app.ShowBatterySettings() show user battery optimization settings.
- Added foreground location service support for Android 10+.
- Project dir is now added to module search paths for cfg.Node apps.
- Added new obfuscate option to build.json (array of extra files to obfuscate).
- Added ide.Obfuscate( src,dest ) method (useful for building extensions/plugins).
- Added new !clean IDE command (cleans internal cache/temp dirs and re-extracts internal assets)
- Added new !reset IDE command (resets to fresh install state, keeps projects & prefs)
- Fixed bug with app.HttpRequest() and docs sample.
- Upgraded Node from version 12 to version 16.
- Fixed issue with ide.AddModule() randomly missing out modules.
- Fixed problem with multiple @ symbols in ide.AddModule() method.
- Added new cfg.NodeESM option to support use of ES modules.
- Added new 'esm' option to app.CreateNode() to support ES modules.
- Added new 'debug' option to app.CreateNode() enables generic debug trace for express and others.
- Added new 'id' parameter to node.Run/Execute calls (for isolating script contexts in extended mode).
- Fixed issue with BLE onUartReceive returning atob wrapped values.
- Fixed issue building APKs with non-english characters in app title.
- Fixed bug with quotes in debug run box causing DS crash.
- Update internal docs to v237.
- Fixed mail.Send for Android 11.
- GameView: Added default loading splash screen.
- GameView: Added gfx.SetSplash() (allows use of animated gif during load).
- GameView: Fixed bug where OnReady called too early when loading text.
- GameView: Added gfx.useCanvas property (use outside of OnLoad).
- GameView: Added new gfx.debug=true option to visualise physics objects (use outside OnLoad)
- GameView: Added new AddShape( 'polygon', [[x,y],[x,y],..] ) option to physics.
- GameView: Fixed keyboard bug where keydown not being called in OnControl function.
- GameView: Fixed bug where natural size of sprites was not available after load.
- GameView: Added new ide.Export("GameView",src,dest) command to export game as HTML.

### DS 2.58b1 (08-Jan-2023)
- UI plugin now automatically added to APKs when building Hybrid apps.
- Fixed atob2 errors in Hybrid apps.
- Fixed plugin sub-folders unwanted .js extension swaps in APK builds.
- Fixed building APK with Hybrid apps.
- Fixed missing options parameter on app.UpdateProgressBar.
- Added 'shallow' option to app.ExtractAssets() method (only extracts top level).
- Added 'extended' option to app.CreateNode() method (allows use of app\* methods).
- Added 'documents' to app.GetSpecialFolder() method.
- Added new Bluetooth permissions for Android 12.
- Improved notification listener robustness.
- Added app.GetPublicFolder()
- Added app.GetTempFolder() method (Android automatically deletes old files if needed)
- Added '/Public' file path support (maps to scoped/sandbox public folder for app).
- Added '/Private' file path support (maps to app's private folder).
- Added '/Temp' file path support (maps to app's cache/temp folder).
- Added 'uri' type to app.SendIntent() extras.
- Added 'Camera Photo' sample (uses built-in camera app)
- Changed app.SaveJson() to take any object type.
- Added node.SetEnv( name, val ) method to nodejs component.
- Fixed list control not auto-expanding when calling SetTextSize or SetDivider.
- Added 'Expand' method to list control.
- Fixed app.Uri2Path for folder names containing blanks.
- Fixed issue with drawer not displaying in cfg.Fast mode.
- Fixed edit.setCursorColor() for Android 10+.
- Added new edit.SetSelectColor() method.

## DS 2.57 (24-Nov-2022)
- Chat extension now deleted on install (using Discord now).
- UpdateProgressBar now has 'doevents' option to force ui update in v8 mode.
- Fixed issue with slow APK builds.
- Fixed issue with APK install just showing folder after build.
- Hybrid apps are now auto-detected (don't need cfg.Hybrid)
- Hybrid apps now removed from samples list, use UI plugin docs instead.
- Main DS App class changed to DsApp, so won't clash with Hybrid/Enjine apps.
- Added include() function for compatibility with Hybrid/Enjine apps.
- Updated Hybrid templates.
- Fixed crash with Notification listener during WhatsApp messages.

### DS 2.56b1 (15-Nov-2022)
- Hybrid components docs now visible after UI plugin install.
- Layout extension now automatically installed from UI plugin.
- Progress bar now shown when extracting assets at startup.

### DS 2.55b1 (23-Oct-2022)
- Added new 'CloudStore' tab to device IDE.
- Added new SSH/Device Terminal tab to device IDE.
- Switched device IDE 'Chat' tab to use Discord.
- Added new 'RemoteTerminal' SSH extension to wifi IDE.
- Move UI controls into an updatable internal DS plugin.
- Support for ds&colon;/\* style paths in HTML elements (eg. ds&colon;/Sys/app.js).
- The 'FontAwesome' option can now be used with app.CreateTabs.
- Changed wifi IDE right side tabs to show icons only.
- Changed node.Run() method to use separate VM contexts on each call.
- Changed FileDiff extension to full browser width.
- Fixed problem of ide.AddModule() only working once after DS restart.
- Added link to Playstore unsubscribe page.

### DS 2.54b1 (11-Sep-2022)
- Added 'YouTube Player' and 'Google Maps' samples.
- Added 'Card Flip' and 'Card Animation' samples.
- Added 'Shopping Cart' sample.
- Fixed bugs with device IDE image chooser.
- Added ext.displayWidth + ext.displayHeight to extensions API.
- Added ext.Play, ext.Stop, ext.Save to extensions API.
- Fixed bug causing notification listener to fail.
- Fixed bug with fine/coarse location in AABs.
- Made AAB builder more reliable (was often getting stuck at 99%)
- Added new WYSIWYG Layout extension to WiFi IDE (in experiments mode)
- Added version number to APK/AAB build output files.
- Added SPK auto-save feature when building APKs/AABs.
- Fixed problem with Turkish characters in control callbacks.

### DS 2.53b1 (24-Aug-2022)
- Added new app.eventSource property.
- Fixed extraction issues with APK asset files containing 'dots'.
- Fixed mui.js not found bug when building Node APKs.
- Fixed build.json being ignored for AAB files.
- Fixed debug messages from NodeJS apps not readable.
- Improved !addmodule command to support versions (eg. mi...\@1.6.0)
- Added new GitHub feature for premium users.

### DS 2.52b1 (07-Jun-2022)
- Added SetSpeed and SetPitch methods to MediaPlayer.
- Plugins can now contain sub-folders ('docs' sub-folder is removed in APK build).
- Added support for Cancel(id) or Cancel('\*') in notification listener.
- JS errors from remote pages are now ignored for HTML and Hybrid apps.
- Multiple cfg.Hybrid app samples added when in 'experiments' mode.
- Re-organized app templates.

#### DS 2.51b\_p3 (21-Mar-2022)
- Fixed app.SaveText() causing 'Storage' permission request.
- Added 'fillscreen' and 'fullscreen' options for Custom Dialogs.

#### DS 2.51b\_p2 (16-Mar-2022)
- Updated app.ChooseFile() to support GoogleDrive,OneDrive and DropBox.
- Added 'nodownload' option to app.ChooseFile (just returns uri, no downloading of files).
- Added 'persist' option to app.ChooseFile (persists file permission after reboot).
- Added 'pretty' option to app.Uri2Path (returns DS style paths).
- AddPermission 'alert' bug fixed (introduced in 2.51b1).

#### DS 2.51b\_p1 (10-Mar-2022)
- AddPermission 'alert' bug fixed.
- Added 'pretty path' parameter to app.GetPermission() callback.

### DS 2.51b1 (02-Mar-2022)
- Fixed playback of transparent animated gifs in Image control.
- APKBuilder is no longer sensitive to spaces around brackets of LoadPlugin call.
- List.OnTouch() event now returns unicode chars with correct upper case hex codes.
- Transparent apps now startup with zero size (to prevent black flash).
- Added cfg.Legacy option to enable various legacy transparent app behaviour.
- Added app.UpdateUI() method for forcing UI drawing during heavy processing.
- Enabled 3rd party cookies by default for webviews, fetch and xmlHttpRequest.
- Fixed broken app.SetAlarm() method.
- app.ListFolder() now supports SAF (can list outside scoped storage).

### DS 2.51a1 (15-Feb-2022)
- Added support for /Internal/\* and /External/\* SAF paths.
- app.GetPermission() now supports 'external' and 'internal' keywords.
- Replaced 'Sdcard Access' sample with 'Storage Access' sample.
- Improved permissions detection for file&colon;///android\_asset paths.
- Fixed 'Share SPK' for scoped storage devices.
- Fixed app.SendFile, app.SendImage, app.SendMail for scoped storage devices.
- Added QUERY\_ALL\_PACKAGES permission to X version.
- Removed default params from edit/mui.js (older webviews don't not like it)
- Added web.Func(name,args...) for easy calling of functions defined in a WebView.
- Added app.Func(name,args...) for easy calling of main script functions from a WebView.
- app.SimulateTouch() now copes with lower case keywords.
- Fixed 'atob' issue with console logging in NodeJS apps.
- Added new GetDocumentFile() method to Plugin parent object.
- Added new app.GetRouterAddress() method.
- Added tabs.SetTextSize(size,mode) method.
- Added cfg.Fast mode for premium users (3x faster apps!)
- Added XMLHttpRequest polyfill for Fast mode.

#### DS 2.5\_p1 (06-Jan-2022)
- Added 'Query Images' and 'Query Videos' samples.
- Fixed crash when building APKs/AABs for Html apps.

## DS 2.50 (31-Dec-2021)
- Fixed ctrl.Batch call for base methods (use underscore)
- Added app.PreventWifiSleep() to IDE server code (not sure it will help).
- Fixed crash issues on ListView related to blurry icon fix.
- Sped up app icon list even more and fixed its light mode text color.
- Hidden 'SDK' menu for Android 10 or newer (scoped storage issues).

### DS 2.17b1 (23-Dec-2021)
- Added new 'Node' app type - cfg.Node.
- Sped up app icon list display and app startup.
- Added typeId field to every DS object.
- Added app.Show/Hide methods.
- Added obj.Batch() for faster batched method calls (set ctrl props all at once).
- Added ReadFile and WriteFile to extension.js.
- Introduced new 'glob' object for storing global variables (shorter alternative to app.data)
- Improved MUI code completion/help in wifi-ide.
- Increased size of wifi-ide tooltip docs jump link, changed from '?' to '...'.
- Improved ide.AddModule() method (now shows yes/no dialog)
- Fixed zip path traversal vulnerability (causes Google Play warning)
- Added app.WalkFolder for recursive listing (use same options as listFolder).
- Added 'NoEmpty' option to app.ListFolder and app.WalkFolder (hides empty folders)
- Added 'Project' option to app.ListFolder (shows DS project folders only)
- Added new extension function - openEditorFile( filename, lineOrPattern )

### DS 2.14b1 (07-Dec-2021)
- Added 'Music Sequencer' sample.
- Added 'Synth Song Player' sample.
- Fixed Music docs dark theme issue in wifi ide.
- Fixed blurry icons in list control (when > 64dip).
- Improved app -> node messaging reliability.
- Added ide.AddModule() method (adds a node module from code)
- app.Script() now 'defers' execution by default.
- app.Script() now has noDefer parameter (causes inline load of script)
- Errors in app.Script() includes are now highlighted.
- Fixed language extension bug that caused loss of code changes.
- Added new CloudStore extension to the WiFi IDE (for premium users).
- Modified app.GetAppPath() to return full path to resources when in APK.
- Added app.ReadFileData(file,mode) method ('base64','hex','int','ascii').
- Fixed music component so it works inside APKs.
- DS and all exported APKs are both 64bit and 32bit compatible by default.
- mui: Added Add\*\*\* methods to MUI.
- mui: Added SetColor method to Buttons
- mui: Added SetColor method to FABs
- mui: Button padding is added to button with null width.
- mui: Add SetText method to FAB
- mui: Added Add\*\*\* method to each control.
- mui: Pass TextEdit control as param to pickers.
- mui: Added SetTextEdit method to pickers.
- mui: Added touch discovery to TextEdits
- mui: Added SetOnTouch method to TextEdits
- mui: Added 1 Outlined Button. A true material outline button.
- mui: Added SetOnClose to AddBanner.
- mui: Added SetOnClose to AddDialog.
- mui: Redesign Modal dialog control.
- mui: Added SetOnClose to AddModal.
- mui: Added 'Full' options to AddModal.
- mui: Fixed minor glitches on CreateDialog.
- mui: Added SetTextEdit method to ListDialogs.
- mui: Added SetOnReady and SetOnProgress method on DataTable

### DS 2.13b1 (18-Nov-2021)
- Fixed !addmodule command on slower devices.
- Icon buttons sample fixed.
- Plugin exceptions are now shown in debug log.
- SysProc component now sets HOME and TMPDIR environment vars if none provided.
- Fixed bug in 'packages' param of app.SetKioskMode() method.
- Added 'Background Job' template to device IDE.
- Fixed bug where version part of plugin names were not stripped off.
- Blocked the use of 'Service' and 'Job' as app names.
- MUI assets are now excluded from APKs if not used.
- Changed camera profile for front camera recording.
- Updated to newer APK/AAB v3 signature method.
- Added RealPath() conversion to app.OpenDatabase() method.
- Fixed app.GetIPAddress() for Android 11.
- Fixed CustomTabs on Android 11.
- Added 'Custom Browser Tabs' sample.
- Fixed Speech Recognition on Android 11.
- Fixed TextToSpeech on Android 11.
- Fixed Background services for Android 11.
- AAB files are now automatically signed with user.keystore file.
- Added OnDone() callback to Node object.

### DS 2.12b1 (23-Jul-2021)
- Updated to Google Play Billing libraries v4.
- Fixed case sensitivity issue with Desyrel font.
- Allowed use of lib sub folder in plugins (for .so files)
- Old Plugin folders are deleted when re-installing plugins
- app.CreateNode() now supports 'paths' parameter (same as nodejs NOD\_PATH env variable)
- mui: Added ShowMenu() method to show menu on a given control
- mui: Added SetList() method to all list control
- mui: Added animation to spinner
- mui: Added SetHint to Spinner
- mui: Added SetList to Spinner
- mui: Added SetList to Menu
- mui: Added SetOnIconTouch to TextEdits with icons

### DS 2.11b2 (23-Jul-2021)
- Fixed issues with Node on 64bit devices and scoped devices.
- Added app.RealPath method. Converts short file paths to full paths.
- Improved 'plugin not licensed' error handling.

### DS 2.11b1 (16-Jul-2021)
- Added support for NodeJS scripts and modules!
- Added new !addmodule command to wifi ide command box.
- Improved wifi ide file browser drag-drop handling.
- Removed 'UseBasicInput' option from chat webview.
- Removed 'ongoing notification' (not effective at keeping DS alive).

### DS 210b1 (20-May-2021)
- Added new Chat tab to right slide panel of mobile IDE.
- Fixed chat (red dot on tab) message indicator on wifi editor.
- Added app.CreateCustomTabs (thanks to Candlelight)
- Added more fine grain control over COSU Kiosk mode (for >= Android 9).
- Added GetCurrentTabName() method to tab control.
- Added 'NoMargins' option to tab control.
- Improved app startup time slightly.
- BuildAPK dialog now saves version and package name for each project.
- autoPermissions value in build.json now also checked when running app in ide.
- App now shows warning before exiting if required dangerous permissions are missing.
- Added new noPermsAction field in build.json (set to 'exit', 'continue', 'default').
- Added new !getperms command to wifi ide (gets dangerous permissions of current app).
- Added app.SaveJson and app.LoadJson methods (thanks to HJCD Studios)
- Fixed broken wiki link in docs/resources.
- External storage access (SAF) is now available to non-premium users.
- Added 'NoVibrate' and 'Low' (priority) options to app.CreateNotification() method.
- Added ongoing notification to keep DS alive in background.

## DS 209 (06-May-2021)
- Version number update only.

### DS 208b2 (04-May-2021)
- Created separate plugins page for premium (more plugins available).
- app.AddCameraView() is now detected in permissions scan.

### DS 208b1 (20-Apr-2021)
- Added extra support for deep linking with 'urlScheme' tag in build.json.
- Added default deep link scheme 'ds://\*' and 'http://ds/\*' for testing apps in IDE.
- Fixed img.Play() method (should start animated gifs).
- mui: Added new Spinner control.
- mui: Added SetOnTouch method to DataTable.
- mui: Added 'color' property on ListModern data for avatar color.
- mui: To change badge color, set MUI.theme.badgeColor=color after initializing MUI.
- Removed support for Admob (Google requirement).
- Updated Chat component (now shows count of logged on users).

### DS 207b1 (18-Mar-2021)
- Added new 'cleartask' option to app.SendIntent().
- Fixed issue with i-frames opening separate window in html apps.
- Fixed issue with IDE hiding after running app on Android10+.

## DS 206 (04-Mar-2021)
- Fix for new projects created in Wifi IDE having old 'holo' look.
- mui: Fix for DataTable column sorting with duplicate vals.
- Chat extension moved to 'experiments' mode.

## DS 205 (03-Mar-2021)
- Default theme for wifi ide is now dark.
- mui: SetOnSelectionStatus bug in CreateDataTable docs fixed.
- mui: Icons in CreateDataTable headers now showing properly.
- Fixed banner add clicks always going to Premium dialog.
- Improved reliability of language extension.

### DS 204b1 (18-Feb-2021)
- Added new "/Plugins" keyword to get path to plugins.
- Added gfx.GetJoystick() gets object containing joystick states.
- Added new gfx.multiTouch=true option to GameView (x/y vals will be arrays).
- Wifi IDE app icons is now refreshed after spk installs.
- GameView: Fixed gfx.Reload() not working on some devices.
- Enabled the download and install of .ppk files from the DroidStore.
- Fixed bug preventing multiple plugin installs at once.
- app.AutoWifi and app.AutoStart now deprecated in favour of ide.AutoWifi, ide.AutoStart.
- app.AutoBoot() can now contain both 'app' and 'service' keywords at same time.
- Fixed app.IsStarted() to work for multi-page html apps.
- Added app.ScheduleJob() method to schedule background jobs (using Job.js file).
- Added 'Background Job' app template for premium users.
- Added app.PinScreen() method (screen pinning must be enabled in settings).

### DS 203b1 (08-Feb-2021)
- Fixed bug with SendDataGrams showing EADDRINUSE error.
- Added datagram buffer size options to Send/ReceiveDatagram (1k,2k,4k,8k,16k,32k,64k)
- Added new app.GetJoystickStates() method, returns single object with all states.
- Removed semi-colons from device code completion.
- Download component and WebView/Html Apps now support 'content-disposition' header.
- Added US\_FUL\_SCREE\_INTENT permission if required.
- Removed deprecated funcs SetLanguage, Language2Code.
- Fixed obfuscation issues related to SetAppLanguage and GetAppLangCode.
- Added app.CreateCanvas() method, creates blank image with auto-update turned off.
- Fixed SE\_ALARM permission having wrong path.
- Added new ide.MakePlugin method (turns current project into a plugin and installs it).
- Updated Wifi IDE toolbar and button styles.
- Scoped storage state remembered from first run (safe to install your APKs on Android 10)
- Added app.IsScoped() method to indicate 'scoped storage' on Android 10+.
- Added SetOnRequest() to detect all WebView requests (params: url,method,isMain,isRedirect).
- Added Stop() method to WebView, cancels current page load.
- Added SetBlockedUrls() to WebView, comma seperated list of urls to block.

## DS 202 (08-Feb-2021)
- Fixed bad link in documentation to CloudStore component.
- Update CloudStore documentation.

#### DS 201b1
- Fixed imagegrid showing black squares after 200b1 scoped storage changes.
- Added new app.Path2Uri method (gets a 'content:/\*' path for images and videos).
- MUI: Fixed MenuWithIcon error.
- MUI: Fixed DataTable selectable icons.

#### DS 200b1
- Fixed many file access issues on Android 10/11 with fresh DS installs.
- Added '/Storage' keyword as new alternative to '/sdcard'.
- Added '/External' keyword as new alternative to '/extsdcard'.
- Added support for 'content&colon;' paths on app.ReadFile() and for Image Controls.
- APKBuilder now uses private storage for its temp files.
- Fixed bug in plugin docs extraction (non-doc file deletion code failed).
- app.ChooseFile() method now returns a second 'name' parameter in callback.

#### DS 195b1
- Fixed bug with APK builder corrupting user assets.
- Fixed issue with scoped storage re-directs.
- Updated new improved search extension (thanks to Cemal)
- Added new premium file differencing extension (thanks to Cemal)
- Fixed assets not being added from phone Downloads folder.
- Fixed issue with app.Execute obfuscation.
- MUI: app.InitializeUIKit(color) to change color.
- MUI: app.InitializeUIKit(color, theme) to force change the theme to dark or light.
- MUI: Added new DataTable control.
- MUI: Dialogs and pickers displayed on the center will now close when back key is click.
- MUI: Added SetText,SetHtml,SetTextColor, SetTextSize method to banner.
- MUI: Added SetTitle, SetTitleColor, SetText, SetHtml, SetTextColor, SetTextSize method to dialogs.
- MUI: Added SetTitle, SetText, SetTextColor, SetHeaderColor to modal.
- MUI: Added SetText, SetHtml, SetTextColor to AlertSimple.
- MUI: Added SetHeight method to ListDialog and CheckList dialogs for long list.

#### DS 194b1
- Allowed 'app' query parameter on wifi IDE urls.
- Added 'Launch in new tab' option to wifi IDE app icons.
- Obfuscated MUI APKs now work.
- Added new built-in Music Engine (thanks to Cemal)
- Updated CloudStore component to use enjine.io
- Fixed bug with installing spks over existing ones.
- Added SetDescription method to all controls (for accessibility)

#### DS 193b1
- Switched to use scoped storage for user scripts in Android 10/11.
- The 'Store' tab now shows a stripped down version of the DroidStore.
- Added new 'Search' extension to wifi ide (thanks to Cemal)
- Plugins can be uninstalled in the docs.
- Extensions now show up in the docs too.
- Added 'List Colors' sample.
- List control can now cope with missing values between semi-colons in list.
- Added basic intellisense for MUI controls.
- Added intellisense for plugins to Wifi IDE.
- Callbacks from BT,USB and Plugins now return source webview.
- Wifi IDE now starts with code window expanded.
- Added Alt-Enter key combo for forward search on highlighted word.
- Wifi IDE code window now defaults to wide.
- Added SetItemColor() and SetItemColorByIndex() methods to List control.
- Added hidden option cfg.NoSwapify (prevents func name swapping during obfuscation)
- app.Execute() is no longer obfuscated (now works from webviews inside APKs)
- Added new ide command !addpackage
- Plugins with version number after \_underscore now installed correctly.
- Refactored code suggestions (thanks to Symbroson).
- Clicking the method preview in mobile ide now opens the corresponding docs page.
- !addplugin behaves better when given bad plugin names.
- Added Disconnect() method to WebServer (disconnects websock clients)
- Added websocket buffer size options to WebServer (ws\_64k,ws\_128k,ws\_512k,ws\_1M,ws\_5M,ws\_10M)

#### DS 1.92b1 (28-Sep-2020)
- Added latest docs with MUI and GameView updates.
- Add new 'Store' tab along side standard samples (soon to show DroidStore).
- Speeded up/improved app launcher page.
- Added new 'ScratchPad' extension.
- Added auto-translation to Language extension.
- Added extension.js to DS internal assets.
- Added ext.Log() function to extension.js
- Added missing app.AddTabs() method.
- Tabs: increased layTop height to 0.06.
- Tabs: setting tab text widths based on dynamic width if unspecified.
- Tabs: added "fade" option to Tabs.
- Tabs: showing new tab first before hiding others to prevent flicker.
- added \_SetTmpDebug() and \_RestoreDebug() for use in pure JS plugins/Libs.

#### DS 1.91b2 (23-Jul-2020)

- DS now offers to install and run your APK after build
- Added app.LaunchApp() method, launches apps if installed else tries GPlay.
- Fixed app.ShowProgress can now take null as first parameter.
- Fixed app background not defaulting to dark mode (grey).
- Fixed APK installs from DS launching second instance of DS.
- Fixed scanfile bug in 'Create Shortcut' option.
- Fixed issue with custom button colors in APKs for holo theme.

#### DS 1.91b1 (16-Jul-2020)
- Added new MUI\* material controls for premium users!
- Added MUI controls demo app to docs.
- Added new 'Class' file/template.
- Upgraded obfuscator to support ES6 classes properly.
- Added M(ctx,func) macro for using class methods as callbacks (maintains 'this' context)
- Fixed issue with Text control autoshrink mode on first draw.
- Added Work-a-round for recent Android Speech recognition double results bug.
- Fixed spelling of app.GetSpeechEngines().
- Added SetProgressOptions method to theme component.
- Added 'Solid' option to app.ShowProgress (shows solid background behind spinner).
- DS now uses app.InstallApp() to install APKs (needed for Android 10).
- Fixed "Install" permission automatically added when using app.InstallApp().
- Enabled DS method auto debugging/tracing in APKs (disabled by default).
- Added 'VCenter' and 'Bottom' options to text controls.
- Improved extension support in Wifi IDE.
- Created demo Wifi IDE extension.
- You can hide your projects and files from DS by putting a ~ at front of folder/file name.
- SPKs now contain a new hidden file '~package.json' with the DS version used.
- Older SPKs and DS projects now default to Holo theme.
- Added "Biometric" permission option.
- Fixed problem with the word Add being incorrectly replaced when using Ad\* methods.
- NoIcons now defaults to true if a screen reader is detected.
- Fixed app.GetThemeInfo() unset colours. Now returns null.
- app.Install() now returns (packageName,status) params in callback.
- Added new !plugindocs IDE command to fix docs for a plugin after deleting .edit folder.

#### DS 1.90b1 (26-May-2020)
- Added new cfg.Dark, cfg.Light, cfg.Holo theming options.
- New dark theme is used by default (use cfg.holo to go back to old look).
- Added app.GetThemeInfo() method (gets main settings of current theme).
- Added 'Controls Light' and 'Controls Dark' samples.
- Added new switch control (slider switch).
- Intermitent obfuscation errors fixed.
- Added app.InstallApp(apk,callback) method (callback returns error/success status).
- Added 'AllProgress' option to WebView (shows progress for all loads).
- Fixed some issues with 'AutoSize/Scale' mode for text and buttons.
- Disabled BaselineAligned mode for Linear Layouts (use 'BaseAlign' if needed)
- Added app.GetTextBounds() to calc size of text for given font size (most params optional)
- Added TW(txt,size) function to as shorthand way of getting text width (size param optional).
- Added DW() and DH() convenience funcs (same as app.GetDisplayWidth/Height).
- Dialog.AdjustColor is now applied before Dialog.SetDividerColor.
- Added 'dialog' option to button control (picks up dialog button theme).
- Added web.SetOnUrl() method to intercept url clicks (passes url to callback).
- Error descriptions in the WebView no longer include "net&colon;&colon;" on the front.
- Spinner bug fixed when using spn.SetList and spn.SelectItem right after creation.
- Added 'vertical' option to toggle button (makes LED go to bottom).
- All controls are now automatically dimmed when disabled.
- app.GetObjects() now removes destroyed child controls before returning.
- Added 'external' option to app.GetPrivateFolder() method.
- Added app.GetAccessibility() to check for screen readers etc (thanks to Jason Custer for Java)
- Added app.GetSpeachEngines() to list installed TTS engines (thanks to Jason Custer for Java)
- Fixed issues with auto-complete on device when using app.Add\* methods.

#### DS 1.82b2 (24-Apr-2020)
- Added Merge(), List() and Delete() methods to CloudStore component.
- Added "Network" permission when using app.CreateCloudStore().
- Updated Obfuscator to ES6.
- Added app.SetMargins() to set default margins for controls.
- Added app.SetTextSize() to set default text size for controls.
- Enabled GameView to work in IOS and Android browsers.
- Enabled GameView touch events to work in mobile browsers.
- Improved GameView asset loading checks.
- Fixed app.ShowCheckList button size issues.
- Added 'AutoSize' option to button control (Auto-sizes text to fit).
- Added 'AutoShrink' option to button and text control (Auto-shrinks text to fit).
- Fixed GLview (added missing libs).
- Added app.SetAppLanguage(), app.GetAppLanguages(), app.GetAppLangCode().
- Deprecated app.Language2Code(), app.SetLanguage().
- Added language translation premium sample.
- Added initial version of GameView docs (thanks to Symbroson).

#### DS 1.82b1 (11-Apr-2020)
- Moved manifest minSdkVersion to 21 (Android 5.0)
- Added new app.Add\* funcs for all controls.
- Added new CloudStore component + sample (premium only).
- Added Listen() and SetOnNotify() methods to Notification component .
- Added 'Notification Listener' sample.
- Added 'action' param to SetOnBroadcast (for catching generic Android broadcasts).
- Prevented OnConfig firing after screen unlock.
- Fixed DS repeated re-draw after screen unlock.
- Fixed use of gfx.Script() calls in GameView.
- Fixed GameView issue with batched sprites not showing.
- Fixed GameView to wait till all assets are loaded before calling OnReady().
- Added app.data object for storing user data globally.
- Added SetOnStatus method to AdView.
- Enabled the use of #rrggbb colors with gfx.SetBackColor.
- Fixed "Cannot read property SetAlpha of null error" when using keyboards.
- Added 'NoIcons' option to settings for screen reader support.
- Updated Terminal extension to use dark theme.
- Fixed wrong heading on copy app menu.

##### DS 1.81a1 (24-Jan-2020)
- Fixed GLView failure.

## DS 1.80 (20-Jan-2020)

#### DS 1.80b2 (12-Jan-2020)
- Fixed problem with screen height measurement on phones with hardware buttons.

#### DS 1.80b1 (10-Jan-2020)
- Added Admob support + sample for premium users.
- Added net.ReceiveVideoStream() for premium users.
- Added new 'Card' Layout type + sample.
- Added app.SetNavBarColor/SetStatusBarColor for premium users + sample.
- Added 'btn-1' to 'btn-12' to app.GetJoystickState() method.
- Added \_\_BUILD\_TIME\_\_ macro.
- Added SetCorderRadius(radius) method to Linear layout control.
- Fixed issue with miscalculated display height for devices with soft nav bars.
- Added app.IsPortrait() convenience function.
- Added 'Location' permission automatically for app.CreateBluetoothSerial() method.
- Fixed missing leading zero in hexmode response for BtSerial,File,NetClient,UsbSerial objects.
- Added option to BTSerial for packet length headers, eg. bt.SetSplitMode( "Head", 2, "LE" ).
- Added raw 'Direct Commands' Nxt serial BT sample (same techique should work for EV3).

##### DS 1.79a4 (12-Dec-2019)
- Fixed problem with loading DS plugins on Android7 and lower.

##### DS 1.79a3 (06-Dec-2019)
- Added .startsWith polyfill older Androids.
- Fixed crash on OrangePi Zero.
- \_AddPermissions() now works in IDE.
- PuckJS Plugin now requests Location permission in IDE.
- 3dp accuracy now supported on seekbars.
- Default seekbar max-rate changed from 20ms to 100ms.
- Added app.RedirectAssets. (Reads Img,Snd,Html,Misc assets from given folder not APK).
- Added 'NoRedirect' to web.LoadUrl() and web.LoadHtml() methods (blocks asset redirect).
- Added 'Move' touch events to GameView (and blocked null events)

##### DS 1.79a2
- Fixed app.ShowTip error on touching tooltip.
- app.WifiScan() now supports 'detail' option (returns array with details).

##### DS 1.79a1 (05-Nov-2019)
- Added obj.Animate + animation sample.
- Changed ListView to use normal font by default (can use 'bold' option)
- Dialog titles are now thinner by default (use 'old' option to revert).
- Dialog corners are now rounded by default (use 'old' option to revert).
- Dialog title text size is smaller by default (use 'old' option to revert).
- Added optional radius param to Dialog.SetBackColor() method.
- Added Theme.SetDialogCornerRadius(), Theme.SetTitleDividerHeight(), Theme.SetTitleTextSize().
- Added Dialog.SetTitleDividerColor(), Dialog.SetTitleDividerHeight(), Dialog.SetTitleTextSize().
- Smartened up the Custom Dialog sample.
- Fixed UDP send method (was broken in v178).
- Fixed UDP ReceiveDatagrams() method.
- Improved Wifi Broadcast sample.

## DS 1.78 (27-Oct-2019)
- Fixed 127.0.0.1 IDE error for Chromebooks.
- Removed method tips question mark link for non app.\* methods.

#### DS 1.77b1 (16-Oct-2019)
- Improved dark mode support on device editor.
- Added 'BlackGrad' option to list control.
- Added gfx.GetTime() method, returns time since last gfx.Pause() or gfx.Play().
- Fixed sound.Pause() method in GameView.
- Enabled OnControl() callbacks in GameView even when game is paused.
- Added gfx.IsPaused() to GameView.
- Added gfx.Reload() to GameView (reloads game from scratch).
- Added app.SetMockLocation() for premium users.
- Prevented background touch during app.ShowProgress (use 'NonModal' to revert).
- Changed 'device' parameter of app.CreateUSBSerial() to select by PID not index.
- Allowed app.GetPermission( "usb&colon;"+pid ) for USB devices.
- Added app.Translate(cancel,ok) method to translate buttons globally.
- NetClient now supports SetSplitMode and SetDataMode (for use with AutoReceive).
- Added SetTitleHeight() and SetTitleColor() methods to custom dialog.

##### DS 1.77a1 (19-Sep-2019)
- Added lots of new docs (thanks to Symbroson).
- Docs now support dark/light mode (thanks to Symbroson).
- Remote terminal now available by default for premium users.
- Fixed 'Game' template for non-premium Wifi IDE users.
- Fixed Service SetInForeground permission issue.
- Added btn.SetOnLongTouch method.
- APK 'Debug Build' option now defaults to off and obfuscate to on.
- Added app.ShowCheckList() method + sample.
- Fixed problem with building APKs on Android 9.
- Added optional angle parameter to glview.DrawSprite method.
- Added new optional 'folder' parameter to app.ChooseFile method.

## DS 1.76 (27-Aug-2019)
- Added support for ublox-7 USB GPS module + Sample.
- Added android&colon;directBootAware to enable USB serial devices at boot.
- Changed Hello World sample so it's not re-created every time.
- Fixed problem with NV21toRGB32 function during camera image processing.

#### DS 1.76b1 (19-Aug-2019)

- Fixed problem with NV21toRGB32 function during camera image processing.
- Added support for ublox-7 USB GPS module + Sample.
- Added android&colon;directBootAware to enable USB serial devices at boot.
- Changed Hello World sample so it's not re-created every time.

#### DS 1.75b2 (02-Aug-2019)
- Added missing 64 bit libs for FastCanvas.

#### DS 1.75b1 (01-Aug-2019)
- Fixed logic of app.SetOptions( "usebrowser") was inverted for HTML apps.
- Fixed anchor tags with local relative file paths in HTML apps and WebViews.
- Removed admin filter from manifest (please use 'X' version of DS for kiosk apps)

##### DS 1.75a3 (01-Aug-2019)
- Fixed Webview data dir prefix issue for Android 9.
- lst.SetEllipsize now sets both title and body.
- GameView physics enabled for Text objects.
- GameView Tween method fixed for Text objects.
- obj.IsOverlap() fixed for Linear Layouts.
- Temporarily removed support for NoDom option.
- Removed support for GameView 'gles' mode.

##### DS 1.75a2 (23-Jul-2019)
- Added support for 64bit and API28 (required by Google Play)
- app.SetKioskMode( "LockTask", true ) enables proper Android COSU kiosk apps.
- app.SetKioskMode( "Pin", true ) enables proper pinning/unpinning of tasks.
- app.ReplaceInFile() options param can now be left blank.
- app.ReplaceInFile() now accepts regex strings.
- Updated GameView intellisense to include Text object.
- Improved gfx.CreateText() to allow numerics (previously had to use .toString()).
- Added gfx.RemoveText(), gfx.RemoveGraphic(), gfx.RemoveBackground() methods.
- Added sprite.Contains(x,y) method.
- Added sprite.Flip( sprite, horiz, vert ) method.

##### DS 1.75a1
- Updated some samples to use 'this' instead of app.GetLast\*
- Removed app.CreateListView(), use app.CreateListDialog instead.
- Sped up SQLite callbacks again.
- Added 'modal' and 'kiosk' option to app.CreateDialog().
- Fixed custom dialog sizing issue when using app.SetDensity().

## DS 1.74 (19-Jun-2019)
- Changed to darker look and feel for Wifi IDE.
- Added dark mode in Wifi IDE for Premium users.
- Added app.SendImage() method.
- Modified internal \_Cbm function slightly to allow use of local scope callback funcs.
- More docs added (thanks to Symbroson)
- Added \_AddPlugins() function to allow manual inclusion of plugins.
- Added web.SetTextZoom( zoom ).
- app.CreateBluetoothList now requests permission "Location" for > Android 8.
- Changed app.WifiScan now returns list with pipe | instead of comma delimeters.
- Fixed app.ChooseWifi now removes duplicate ssids.
- Added gfx.CreateText() method to GameView (allows use of bitmap fonts)
- Fixed GameView bounce sample.

#### DS 1.74b2 (14-Jun-2019)
- Changed to darker look and feel for Wifi IDE.
- Added dark mode in Wifi IDE for Premium users.
- Added app.SendImage() method.
- Modified internal\_Cbm function slightly to allow use of local scope callback funcs.
- More docs added (thanks to Symbroson)
- Added\_AddPlugins() function to allow manual inclusion of plugins.
- Added web.SetTextZoom( zoom ).
- app.CreateBluetoothList now requests permission "Location" for > Android 8.
- Changed app.WifiScan now returns list with pipe | instead of comma delimeters.
- Fixed app.ChooseWifi now removes duplicate ssids.
- Added gfx.CreateText() method to GameView (allows use of bitmap fonts)
- Fixed GameView bounce sample.

#### DS 1.73b1 (03-May-2019)
- Added 'boolean' type for obj.Method().
- WebViews/HTML apps now pause when not in foreground (can use 'NoPause' option).
- Added CHANGE\_NETWORK\_STATE permission for app.SetWifiApEnabled method (for Orange-Pi).
- Fixed AdjustColor() exception when dialog has not title.
- Added public Object GetObject( String id ) to plugin parent object (gets a DS object).
- Added "Wifi Access Point" and "IOT Device" samples.
- Added "GPIO Banana-Pi" and "UART Banana-Pi" samples.
- Added app.Quit( msg,[title],[options] ) method (shows message and force quits app).
- Added premium nag popup every month (for non-premium users).

##### DS 1.73a8 (17-Apr-2019)
- Added intellisense to device editor for GameView methods and objects.
- Allowed on device function info/tips to scale up as well as shrink to fit.
- Added new 'AutoSize' option to TextView (scales up and down towards target size).
- Added new config keywords - cfg.NoDom, cfg.Game, cfg.Transparent, cfg.Landscape, cfg.Portrait.
- Deprecated \_AddOptions() method in favour of cfg.\* keywords.
- Added 'Bunny Storm' GameView demo.
- Removed HScroll, VScroll and GLView game demos.

##### DS 1.73a7 (16-Apr-2019)
- Added new app.CreateGame() method (create GameView apps with one line of code).
- Disabled app.\* exception logging in release builds.
- Invalid id's in V8 engine clearTimeout/clearInterval calls now ignored.
- Changed "Game Bounce" demo to use GameView.

##### DS 1.73a6 (11-Apr-2019)
- Fixed IsDebugging results for release builds when not calling app.SetDebug.
- Fixed services throwing ADB exception in APK builds.
- Fixed exception when pressing back button in NoDom mode.
- Fixed launcher sample for package names that contained the sequence ".gif".

##### DS 1.73a5 (07-Apr-2019)
- obj.GetWidth/GetHeight/GetAbsWidth/GetAbsHeight/GetLeft/Right now all return numeric vals.
- Disabled internal ADB debugging for release APKs.
- Added app.SetDebug() for finer logging control (use optional switches 'console,ds,adb' or true/false).
- Added app.IsDebugging() in favour of IsDebugEnabled()
- Deprecated app.SetDebugEnabled() and app.IsDebugEnabled().
- Fixed gles libs included in APKs when 'gles' option not used.

##### DS 1.73a4 (28-Mar-2019)
- Added 'Alarms' permission option.
- Fixed AutoBoot mode for services on Oreo+ (must call app.SetInForeground).
- Updated the services template for Oreo+.

##### DS 1.73a3
- Added 'long' and 'bool' types to SendIntent extras.
- Added 'ExactIdle' option to app.SetAlarm().
- Added 'NavRight' mode option to app.SetKioskMode().

##### DS 1.73a2 (27-Mar-2019)
- Added app.IsNavBarOnRight() method.
- Fixed issue with web.SetOnConsole 'bad token'.
- Added public void CallScript(Bundle b,String webViewId) to plugin API.
- Added new I() function to force unique instance of callbacks.

##### DS 1.73a1 (07-Mar-2019)
- Added 'UseBrowser' option for HTML apps.
- Enabled file downloading in HTML apps.
- Added 'Screen' option to obj.GetPosition()- returns screen relative posn.
- Added app.GetParent() method to get parent layout object (if set).
- GameView methods now added to intellisense in wifi ide.
- Added exception handling to onActivityResult (protect against plugin crashes).
- Removed wallpaper service from APK manifests.
- Internal super.onDestroy() now called when permissions not given by user.
- Enabled all FTDI usb device types for serial comms.
- Added tooltip/help sample.
- Added app.ChooseWifi() method (popup to choose wifi ssid).
- Added app template selector to on-device editor.
- Plugin extraction now shows progress spinner for APK builds.

#### DS 1.72 (06-Feb-2019)

#### DS 1.72b2 (02-Feb-2019)
- GameView now defaults to using WebView/WebGL rather than GLES.
- Fixed slow GameView performance on Chromebooks (switched to WebGL mode).
- GameView sprites without width and height now looks same size all devices.
- GameView now has an Execute method to run JavaScript inside game.
- Added 'NoActionBar' option to webview (prevents copy/paste popup).
- Got rid of annoying popup copy/paste/action bar on Chromebooks.
- Enabled APK builder is out of date warning.
- Added SetOnTouch event to webviews.
- Fixed 'JavaScript' section of Wifi Editor docs.

#### DS 1.72b1 (27-Jan-2019)
- Re-instated the app.js file (so plugin docs/intellisense work again).
- Added (experimental)\_DoEvents method NoDom mode.
- Fixed app.SetOnError() for NoDom mode.

## DS 1.71 (13-Jan-2019)
- Chromebook blocks game template now working.
- Fixed black background on 'SDK' menu on Chromebook.
- Delayed homepage load by 2 seconds (else sometimes fails).
- Chromebook Terminal tab now fixed (for premium users)
- Terminal extension now works after second wifi button press.
- Fixed app.Execute() double quotes bug.
- SQLite now works with NODOM option.
- Switched from Locale.ENGLISH to Locale.ROOT to prevent missing lang issues.
- Using NoDom now works with Transparent apps and DS shortcuts.

## DS 1.70 (09-Jan-2019)
- Added italian language.
- Add 'Experiments' option (terminal,blockly)
- SDK menu now enabled by default.
- Add new auto-wifi option.
- Removed SMS permissions for GPlay version of DS.

##### DS 1.69a4
- Added !delplugin command to wifi ide (eg. !delplugin bluetoothle)
- WifiConnect now works for Android 4.4 with WPA\_PSK routers.
- Added app.WifiScan(callback) method (returns list of ssids).
- Added 3rd 'status' param to app.HttpRequest() callback function.
- Added option to use '~' character instead of '=' between params.
- Fixed app.CreateNxt() method.
- Improved debug overlay auto scrolling + made monospace for IOT devices.
- app.Execute() now supported in NoDOM mode.
- Enabled replacement of 'Basic' app template using "/sdcard/DroidScript/Template.js".

##### DS 1.69a3 (06-Dec-2018)
- Upgraded internally to Font-Awesome 4.47
- Added void OnNewIntent event to plugin API.
- app.GetAppPath() now returns correct path for services running in IDE.
- Fixed SQLlite query callbacks not working in services.
- Fixed plugin callbacks inside services not working.
- Service Stop() method now disables action of 'Persist' option.
- Fixed calling cam.Stop() twice in row crash.
- Fixed IDE bug causing repeated load of extension html file.
- Added new 'combine' option app.CreateSysProc() to combine output and error stream.
- Added new 'builder' option app.CreateSysProc() to force use of proc builder
- app.CreateSysProc() can now accept '|' separated command list.

##### DS 1.69a2 (26-Oct-2018)
- Fixed app.SysExec() timeout param had no effect.
- Added 'su' and 'sh' options to app.SysExec(), runs commands in a shell.
- Added UART and GPIO banana-pi samples for DS-IO.
- Changed Wifi IDE debug tab $ commands to run via 'sh' shell.
- Added !getplugin command to DS-IO (eg. !getplugin bluetoothle)
- Added !getspk command (eg. !getspk http&colon;//www.me.org/spks/hello.spk).
- Added !buildapk command (eg. !buildapk com.test.puck 1.0 false).
- Changed Wifi IDE home page for DS-IO.
- Changed USB Serial devices only vendor id match now required (not device id).
- Added 'ShowUI' option to app.SetVolume(), also level of -1 keeps current volume.
- Added SetOnInput and SetOnError methods to SysProc object.
- Changed Terminal sample to use callbacks.
- Added .data JavaScript property to all DS object for safely storing user data.
- Fixed small memory leak related to anonymous functions as callbacks.
- Added 'id' property to websockets and websocket callbacks.
- Remote Android shell Terminal added to Wifi IDE (premium only).
- Added 'Persist' option to app.CreateService() (attempts to force restart if service killed).
- Added app/svc.SetInForeground( title,text,largeIcon,smallIcon,importance ) for services.
- Added app/svc.SetInBackground() for services.
- Added app.ToFront() method (moves app to foreground).
- Added 'Tasks' option to app.SetKioskMode (prevents recent tasks button working)
- Removed sony smartwatch and pebble entries from manifest
- Added OnPause, OnResume, OnConfig, OnMenu events to plugin API.
- Added app.GetDrawerState() method ('Open', 'Closed', 'Sliding').
- Added SetOnFocus method to TextEdit control (callback returns state true/false).
- Made FlappyDinos demo for GameView + fixed some bugs.

## DS 1.68 (30-Aug-2018)
- "Install" permission now auto added only when necessary.
- "SysWin" permission now auto added when using app.CreateOverlay().
- Fixed permissions problem with Overlays on Oreo.
- app.StartApp() can now be used without any params to launch the current app.

#### DS 1.68b1 (29-Aug-2018)

##### DS 1.68a1 (18-Sep-2018)

#### DS 1.67b1 (27-Aug-2018)
- app.SetKioskMode() now asks for appropriate permissions when required.
- app.GetPermission() now suppports the 'overlay' keyword.
- Added app.CreateOverlay() method (Premium only).
- Added "Chat Heads" sample (Premium only).
- Added 'rawX','rawY',screenX,screenY params to Image and Layout OnTouch callbacks.
- Fixed Launcher sample for >= Oreo.
- Added app.ChooseAccount() to request user's device email address.
- Fixed dodgy chars in docs for CreateSeekBar, CreateSensor, CreateWebServer and CreateWebView.

#### DS 1.66b3 (24-Aug-2018)
- Fix plugin onActivityResult issue.
- Added 'nokeys' option to app.CreateDialog() method.
- Added 'nokeys' and 'showkeys' options to app.SetOptions().
- Removed dodgy html characters from some of the docs examples.

#### DS 1.66b2
- List control onclick event params now cope with double quotes.
- Fixed recently introduced bug with spinner calling onChange when first shown.
- Added code to handle OnActivityResult in DS plugins.

#### DS 1.66b1 (21-Aug-2018)
- Fixed Notification SetSmallImage method crashing on API < 23 (now does nothing)
- app.GetIPAddress() now works when phone is running as an Access Point.
- Wifi IDE can now easily be used when phone is running as Access Point.
- File browsing now always enabled for Embedded systems.
- Added new !exit command to wifi IDE (useful to kill DS on embedded systems)
- Fix bug on GPIO sys.Out() for banana-pi (eg.echo 1 > /sys/class/gpio\_sw/PA11/data)
- Fixed bugs where some premium features were not being checked.
- Added app.SetWifiApEnabled( true, ssid, key ) for Android 6 or older device only.
- Added app.IsWifiApEnabled() for Android 6 or older device only.
- Fixed bug with app.CreateWizard() not allowing text editing (focus was blocked)
- Fixed problem with dark text in Spinner lists on Oreo.
- Spinner now copes better with large fonts.
- Fixed problem with lists chopping of bottom of text on Oreo.
- img.Save() now works after multiple calls to img.Update() are made.
- The ReadData() method on the file object is now escaped when using text mode.
- List control onclick event params are now JavaScript escaped instead of ^\*^ escaped.
- app.GetAccounts() and app.GetUser() now request appropriate permissions on Oreo.
- Save SPK option now added to menus on Chromebooks.

## DS 1.65 (23-Aug-2018)

#### DS 1.65b1 (12-Aug-2018)
- Fixed Phone States sample permissions issue for Oreo.
- Added SetSmallImage() to Notify component (image should be a single color with alpha).
- Updated Notifications sample.

##### DS 1.65a4 (10-Aug-2018)
- Added support for BananaPi-M2-Zero (runs in headless mode).
- Creating app shortcuts now working on oreo.
- Notifications now working on Oreo.
- Coarse location permission now requested on oreo when using PhoneState object.
- Fixed menu button on Chromebooks.
- Tool-tip short descriptions for app.\* methods added for WiFi-IDE/Chromebooks.
- Added lay.SetTouchThrough() method.

##### DS 1.65a3 (07-Aug-2018)
- Fixed the crash on Marshmallow after accepting permissions.
- HTML apps are now scanned for permissions before launch in IDE.
- When using auto-permissions, apps will not start unless ALL perms are accepted.
- Added autoPermissions&colon;true/false option to build.json file.
- Added app.IsDebugEnabled().

##### DS 1.65a2 (01-Aug-2018)
- API level 26 now default target (Google Play requirement)
- UDP sockets now closed when net.Close() or net.Destroy() is called.
- app.CheckPermission( "extsdcard" ) now returns storage uri on success else empty string.
- app.CheckPermission() can now take a 'dangerous' perms list ("Storage,Camera,SMS,...").
- app.GetPermission() callback returns a list of un-granted perms when using 'dangerous' perms.

##### DS 1.65a1 (17-Jul-2018)
- Added app.ExtExec() command (can now execute commands in Termux!).
- Added French, German and Russian language options.
- Added extensions facility to WiFi editor (for both left and right tabs)
- Fixed Chromebooks menu button.
- You can now drop \*.obj files onto the Wifi editor file browser.
- Fixed SetOnLongTouch() callback failure on Text controls.
- Fixed docs failing to copy or run samples.
- Added support for PixelBook (untested).
- Added 'exact' option to app.SetAlarm (only works for single shot alarms).
- Various typos etc fixed in samples (thanks to BareK)
- Added Wifi IDE F3 and Shift+F3 for searching for selected word (same as Ctrl+K).
- Added Ctrl+L for deleting current line (same as Ctrl+D)
- Added Ctrl+G for goto line.

##### DS 1.64a4 (26-Apr-2018)
- Fixed scaling bug with re-loading images after calling app.SetDensity.
- Enabled Cam/audio + location in WebView and HTML apps ('NoCapture','NoLocate' to disable).
- Added app.script() method (async load of local scripts)
- Added Angry Birds style game demo for game engine.
- Game engine libs now exluded from non-game APK builds.

##### DS 1.64a3
- Various Game engine updates.
- Added app.ExtractPlugins method.
- Added obj.Method( name,types,p1,p2,p3,p4 ) access Java via reflection (premium).

##### DS 1.63a1 (20-Jan-2018)
<!--its pst has 6 pages-->
- Added Block based editing for DSJ files (still in alpha)!
- Added screenshot button to Wifi IDE (screen shots now captured to .edit folder).
- Added 'nofocus' option to app.Alert() method (useful for kiosk mode)
- Added dlg.IsVisible() method.
- Added new app.CreateWizard + new 'Wizard' sample for premium users.
- Fixed recent bug with img.SetImage() not allowing image as first param.
- Added 'base64' mode to app.WriteFile method (writes a base64 string to raw binary data)
- Added app.SimulateScroll( obj,x,y,dx,dy,count,fling ) method, simulates mouse wheel scrolls.
- Added app.SimulateDrag( obj,x1,y1,x2,y2,step,pause ) method, simulates mouse drag.
- Shortened startup time on Chromebooks.

##### DS 1.62a2
- Removed jqplot from internal assets, moved jquery to /Sys/Libs.
- Removed 'WebView Gauges' and 'WebView Graphs' samples moved to downloadable demos.
- Fixed drawer lock/unlock bug.
- Enabled mixing of width/height vals with 'FillX', 'FillY' option.
- Fixed app.SetScreenMode to remove menus when null/empty string used.
- Changed app.SetScreenMode to fire OnConfig.

##### DS 1.62a1
- Added game engine (alpha)!
- Fixed Launcher sample to use android.intent.action.MAIN instead of .VIEW.

## DS 1.61 (22-12-2017)

#### DS 1.61b1 (15-Dec-2017)
- Fixed byte swap bug on 'Audio Sample' sample.
- Enabled file rename and file copy to external sdcards.
- Added external sdcard write sample.
- Fixed "Send Intent" sample for newer Gmail version.
- Improved app.SendMail() to show fewer app choices (when no attachment used).
- Added options param to app.SendMail(), use 'SendTo' if have attachment and you know it's gmail.
- Fixed app.GetExternalFolder("external") now returns space on primary external sdcard.
- Fixed img.MeasureText(txt) now responds to img.SetPixelMode().

#### DS 1.60b1 (08-Dec-2017)
- Added app.GetRSSI() to get wifi strength.
- Added support for external sdcard MakeFolder.
- Fixed bugs with GlView and V8 not working in last release.

## DS 1.59 (23-Dec-2017)

#### DS 1.59b1 (07-Dec-2017)
- Added new 'Button' option to image controls (causes image to depress like a button when touched)
- Added new app.DisableTouch() to disable/enable all touch events on controls in main activity.
- Added new net.WakeOnLan(ip,mac) for premium users.
- Added support for controlling media players with app.BroadcastIntent() method (see forum).
- Added 'TouchModal' option to YesNoDialog.
- Changed ShowProgress and YesNoDialog to 'TouchModal' by default (use 'NoTouchModal' to revert)
- Added options param to Custom dialog SetTitle() method, use 'Left', 'Center' or 'Right' for text alignment.
- Added new 'Auto-Help' settings option to prevent/enable slide out help panel.
- Added new img.MeasureText(txt) method to get width and height of text when drawn.
- Changed device editor to show IP address of connected user when using WiFi IDE.
- Added SAF support for text files&colon; write,read,delete, app.CheckPermission, app.GetPermission.
- Fixed app.GetExternalFolder() now returns primary external sdcard path.
- File paths starting with '/extsdcard' now map to the primary external sdcard.
- Your IP address is now visible in the about dialog.

##### DS 1.59a2
- Added support for Khadas Vim device (including gpio access).
- WebServer object supports new SetOnUpload(callback) method (filename + ip address passed to cb)
- Fixed WebServer bug which required use of at least one Servlet to get file uploads working.

##### DS 1.59a1
- Added 'json' mode to app.HttpRequest method.

##### DS 1.58a1
- Enabled creation of live wallpapers for premium users!
- Changed .js files inside SPK files to .js.txt to side step Google security issues.
- Added 'SaveSPK' option to device editor (saves to /DroidScript/SPKs folder).
- Added app.SetDensity to scale density of all controls in app (call before creating controls).
- Added basic animated GIF support to Image controls.
- Added URL intent interception via build.json (use 'urlHost' and 'urlPathPrefix' fields).
- Added 'UseBrowser' option to Webview to cause links to launch in the default browser.
- Fixed issue with fontawesome text in app.CreateList() and sumultainious use of fontawesome icons.
- Fixed canvas.Save() not getting Storage permissions for APK build.

## DS 1.57 (09-Nov-2017)

#### DS 1.57b1 (12-Oct-2017)
- Added built-in support for programming Espruino devices over USB/OTG cable.
- Added new !screenshot command to Wifi editor debug tab -> /sdcard/screenshot.jpg
- Re-instated the app.GoToSleep() method.
- Internally mapped '/sdcard' path to users external/internal public directory.
- Added new 'Power' mode keyword to app.SetKioskMode (blocks use of power key).
- Added 'response' parameter to app.UploadFile() callback=>(status,file,response).
- Added new app.ClearValue(name,file) method to remove prefs values.

## DS 1.56 (18-Aug-2017)

#### DS 1.56b (15-Aug-2017)
- Added app.IsLocationEnabled("GPS,Network") method.
- Added GetData() method to AudioRecorder component.
- Added DrawSamples() method to ImageView (draws a sample graph).
- Added 'Audio Sample' sample.
- Added app.GetBluetoothName() method.
- Added app.GetBluetoothAddress() method.
- Fixed problem with device to device bluetooth dropping last character.
- Removed BIND\_DEVICE\_ADMIN permission.

#### DS 1.55b1 (15-Aug-2017)
- Enabled device -> device bluetooth connections!
- Added Portuguese language (thanks to Maico aka 'Big Eyes Games').
- Added bluetooth listen sample.
- Added updated and re-organised docs (thanks to AlexF).
- Fixed Immediate window execute bug.
- Added 'NoScrollBar' and 'ScrollFade' options to Scroller control.
- Added 'NoApp' option to WebView to prevent app.\* calls.
- Obfuscation errors are now trapped and displayed.
- Added 'Bluetooth Select' sample.
- Added OnConsole method to webview, calls back with (message, lineNum, sourceFile, isError).
- Added 'noGUI' option to config.json (replaces 'headless' option)
- Added SetSubtitles and SetOnSubtitle methods to VideoView control (call after OnReady).
- Prevented use of .. in webserver file uploads (for security reasons).
- Added new webview option "AllowCapture" to enable use of camera and microphone (and WebRTC).
- Added new grabWidth parameter to app.AddDrawer method.

## DS 1.54 (16-Jun-2017)

#### DS 1.54 (15-Jun-2017)
- Fixed error handling override on webview (SetOnError method).
- Fixed files list not being hidden when showing docs/samples.
- Fixed launcher text size on low-res phones.
- Fixed language download problems on Kitkat devices.
- Fixed language download problems on JellyBean devices.
- Added USB serial support for Pimoroni Flotilla Dock and AdaFruit Circuit Playground.
- Added support for spanish language, docs and samples.
- Fixed problem with editing HTML files with multi-file version of DS.
- Added multi-file handling to device editor.
- Keyboard navigation added to device editor (Ctrl-I,Ctrl-SPACE,Ctrl-O).
- Added Ctrl-C,Ctrl-V,Ctrl-X,Ctrl-Z,Ctrl-Y,Ctrl-A,Ctrl-D handling to device editor.
- Added Ctrl-F,Ctrl-H,Ctrl-K,Ctrl-S handling to device editor.
- Added Tab/Shift-Tab indent/outdent to device editor for physical keyboards.
- Added SetEllipsize() method and 'SingleLine' option to button control.
- Empty jar file no longer required in JavaScript based plugins.
- app.SysExec() now shows error stream (use NoErrors option to disable).
- app.SysExec() now has extra maxLines and a timeout parameter.
- $ shell commands from WiFi editor now shows error stream.
- $ shell commands from WiFi editor now work even if app is not running.
- Added app.GetBtProfileState() method (use 'a2dp','headset', 'gatt', 'health' ).
- Docs now loaded from sdcard (makes user editing/translation easier)
- Fixed bug in app.GetMemoryInfo() method.
- Added SetProgressBarOptions() method to theme object.
- Added 'light' option to Downloader object (controls progress bar theme)
- Fixed excessive 'ScreenSize changed' logging on Remix.
- Starting activities via app.SendIntent() in services now works without needing 'newtask' option.
- Added img.SetPixelData method (takes base64 data string).
- Added img.Flatten() translate,scale,skew,alpha are applied to image data (can be saved).
- Enabled use of Wifi editor over wired network.

## DS 1.50 (30-Apr-2017)
- Added dt (time diff) parameter to app.Animate callback.
- Fixed missing OnCancel callback in Custom dialogs.
- Added obj.ClearFocus method.
- Fixed SetOnEnter method for edit boxes ('SingleLine' mode only)
- Fixed lay.SetTouchable bug for overlapping layouts.
- Added Copy option to DS app menu.
- Added 'install now' option after APK builds.
- Changed to 'Share via Email' option to 'Share SPK' (now works with gdrive)
- Added warning about .wav and .mpg files not working in APKs
- Added app.SendText() method (useful for sharing text with other apps)
- Added extra 'choose' parameter to app.SendFile method.
- Image control in 'TouchThrough' mode now fires touch callbacks.
- Orientation sensor now works for devices with no magnetometer (azimuth is always zero).
- Added 'TouchSpy' option to layouts (spies on touch events to all children)
- Added app.IsCharging and app.GetChargeType() methods.
- Added app.SetSpeakerPhone() and app.GetSpeakerPhone() methods.
- Added app.Animate() method (use instead of setInterval for smoother animation).
- Added app.SetPriority() method to change GUI thread priority ('Low','Medium','High').
- Change game samples to use app.Animate() (gives smoother framerate).
- Using \_AddOption( "NoDom" ) now forces app into high performance mode.
- APK 'Network' permissions issue fixed for app.WifiConnect, app.SetOnWifiChange.
- Added 'TouchThrough' option to Image control.
- Added SetOnDownload method to Downloader object.
- Added optional 'name' parameter to Downloader.Download method.
- Added file download sample and fixed download error reporting.
- Added app.WifiConnect( ssid,key ) method.
- Added app.IsConnected() method (detects any network connection).
- Added app.SetOnWifiChange(), fires event with params 'state' and 'ssid'.
- Fix for AndroidThings preview3 or Raspberry Pi.
- Web Server WebSocket sending now works inside services.
- Unplugging and plugging OTG/USB keyboards will not stop DS now.
- Building HTML apps with obfuscation now works.
- Back/arrow keys not responding in dialogs with Gboard fixed.
- Flags data now added to activity intent json results.
- Link to video tutorial now in docs.
- Added Google Analytics support + premium sample.
- Fixed SMS non-number (carrier) text messages causing error
- When an SMS is received the 'number' param no longer drops the leading "+" sign.
- JS alert boxes now are now themed (disable with app.SetOptions("NoThemeAlerts")).
- Fixed flip animation x2 speed and callback issues.
- Fixed Sony SmartWatch2 issues.

#### 1.47b (13-Mar-2017)
<!--its post has 7 pages!-->
- Added support for Android Things.
- Add shop to DS menus.
- Updated to FontAwesome 4.7
- Added tweening support + 'Image Tween' sample.
- Wifi editor remote file browser now shows hidden files.
- Fixed DS crashing on JellyBean 4.1.1
- Fixed 'Sensors' sample (SetOrientation callback was firing too early).
- Added SetButtonText() method to YesNoDialog.
- Added 'FillXY','FillX','FillY','Wrap' options to obj.SetSize() method.
- app.ListFolder now supports the 'Regex', 'FilesOnly', 'FoldersOnly' options.
- Added SetLanguage() method to CodeEdit (.js,.java,.php,.c,.cpp,.cs,.rb,.m,.py,.txt)
- Added app.DiscoverBtDevices(), app.PairBtDevice(), app.UnpairBtDevice(), app.IsBtDevicePaired().
- Added app.WakeUp() and app.Unlock() methods.
- Added dlg.EnableBackKey() and dlg.SetOnBack() methods.
- Added "progress" option to WebView (shows progress spinner).
- Added SetRedirect( urlFrom, urlTo ) method to WebView.

## DS 1.45

#### DS 1.45b (26-Jan-2017)
- Added Chromebook support.
- Added Booty5 plugin and game editor support.
- Improved continuous speech recognition (updated sample).
- Fixed services crashing when killed with task managers.
- List expand mode, adding removing items now triggers expand/contract.
- Plugin docs with gifs now work in wifi ide.
- Permissions scanning now only done at top level of project.
- Obfuscation of strings now more reliable.
- Added x1,x2,x3,x4 options to scale up textview html images.
- Added new 'useChrome' option to config.json (useful for Android TV boxes).
- Added USB CDC serial support for Waterrower exercise machine.

## DS 1.42 (02-Dec-2016)
- Added usb.SetMaxWrite() method and increased r/w buffers to 16k default.
- Made premium samples visible.
- Added support for NexBox/LeelBox mini Android TV boxes.
- Added support for DS extensions in Wifi editor (add your own tabs).

## DS 1.41
- Fixed bug with TextToSpeech failing to swap languages (eg. en\_GB, en\_IN).
- Added touch callbacks to Absolute and Frame layouts.
- Fixed freeze when trying to use SetPosition in Linear/Frame (now logs warning).
- Added 'Web Server' template for premium users.
- Fixed Kiosk sample callbacks for latest Android Webview update.

#### DS 1.40b (20-Nov-2016)
- Added docs for CustomDialogs, WebServer and Services.
- Added 'Expand' option to list control (forces expansion to full height inside scrollers).
- Wifi IDE now lists prototype and object member functions.
- Added template apps to WiFi IDE for premium users.
- Added 'Real' option to app.GetScreenWidth() and app.GetScreenHeight().
- Added app.HasSoftNav() method (detects devices with soft navigation bar).
- Files containing .min.js are not obfuscated in APK builds.
- Added 'UseBasicInput' option to webview (makes softkeyboard useful for html code editors).
- Added web.SimulateKeys() method to webview (can send keys to html textarea)
- Changed app.CreateListDialog() now requires call to dlg.Show() (or use 'ShowNow' option)
- Changed app.CreateYesNoDialog() now requires call to dlg.Show() (or use 'ShowNow' option)
- Changed app.CreateListView() now requires call to lvw.Show() (or use 'ShowNow' option)
- Added SetOnCancel method to Downloader component.
- Fixed recently introduced bug in VideoView streaming.
- Fixed bug with List control showing images from /sdcard/Pictures folder.

## DS 1.38

#### DS 1.38b (20-Okt-2016)
- Added AdjustColor() method to image controls.
- Changed img.SetImage() with no params on old image maintains dimensions.
- Added 'rescale' option on SetImage,LoadImage (forces resize of layout).
- Added app.SetKioskMode() for premium users eg. SetKioskMode("Status,Nav",true,"Black")
- Added 'obfuscate' option to APK builder.
- Added 'Dark Theme' option to DS settings.

## DS 1.36 (26-Sep-2016)
- Added new asset chooser to on-device code editor.
- Added new downloadable demos page to DS menu.
- Added app.GetThumbnail() method (gets a small image from a photo).
- Added app.ScanFile() method (adds media files to phone gallery).
- Release mode APKs now obfuscated more aggressively.
- Added theme.SetTextEditOptions( "underline" ) option.
- Added lay.SetOnChildChange() method to layouts (useful for auto-save).
- Enabled anonymous functions in callbacks (use sparingly!)
- Custom buttons now gray out when disabled.
- Added ctl.IsEnabled() method to all controls.
- Added usb.SetDataMode() and usb.SetSplitMode() methods.
- Enabled calendar access through content app.QueryContent() method.
- Added calendar query sample for premium users.
- Added web.SetOnError() method, callback returns params&colon;- errNum, errMsg, url.
- Fixed tabs bug introduced in 1.35b.
- Fixed short menu when starting in landscape mode.
- Added 'engine' parameter to app.TextToSpeech method (allows swapping voices).
- Added 'time' parameter to Locator (GPS) callback.
- Added serv.Stop() method to web server.
- Added Sys.In() and Sys.Err() method (reads console input and error streams).
- Added cam.SetOrientation() and cam.SetPostRotation() methods.
- Fixed issue causing Playstore dev console warnings.
- Added 'stay awake' option to DS settings.
- Plugins can now contain native .so files.
- Added SetGravity() method to linear layouts (left,top,right,bottom,center,vcenter).
- Added "ReverseLandscape" and "ReversePortrait" options to app.SetOrientation() method.
- Added Linux "Terminal" sample for premium users.
- Added app.PlayRingtone() method ("Alarm", "Notification", "Ringtone" ).
- Added multiple pathPatterns support to build.json (eg. ".\*\\.jpg,.\*\\.txt")

#### DS 1.35b (23-Jun-2016)
- Added support for Android's sliding drawers.
- Added 'Drawer Menu' sample.
- Added app.DownloadFile() method (uses Android download manager).
- Added .SetEnabled() method for all controls.
- Added app.ChooseFile("Choose a file", "\*/\*", OnFileChoose) method.
- Added app.ChooseContact() method.
- Added new "Choose" sample (get user to choose files or contacts).
- Added support for Remix Mini (runs in desktop mode).
- Added 'Launcher' sample (advanced sample for premium users only).
- Added img.SetPixelMode method (allows use of pixel coords in drawing funcs).
- Changed manifest to show running apps separately in task manager (can alt-tab on remix).
- Added SetPosition() method and 'TouchModal', 'NoTouch', 'NoFocus' options to custom dialogs.
- Added cam.SetVideoSize( width, height ) method.
- Added new "Query Content" sample (advanced sample for premium users only).
- Added result callback parameter to web.Execute() method.
- Added 'Horiz' option to list control (makes title and body text flow horizontally)
- Added lst.SetColumnWidths(icon,title,body) method to list control.
-?Added lst.SetIconSize() and 'inner' and 'outer' option to lst.SetTextMargins().
- Add lst.SetIconMargins() method and 'Menu' mode to list control.
- Added "px,sp,dip,dp,mm,pt" options to obj.SetSize() method.
- Added 'mode' param to obj.SetMargins() and obj.SetPadding() (use&colon; 'px','sp','dip','mm','pt').
- Changed alarms in a service now call back to service unless 'App' used in SetAlarm() options.
- Fixed rounding errors in image control (canvas) drawing methods.
- Fixed bug which causes callbacks to get out of sequence.
- Fixed full screen mode showing blank bar over softkeys on older devices.

## DS 1.34 (29-Apr-2016)

#### DS 1.34b1 (14-Apr-2016)
- Enabled homeScreen/launcher creation using build.json (e.g. "homeScreen"&colon;true ).
- Enabled new config.json file and headless mode.
- Added new 'SDK' menu item (Plugin generator) for premium users.
- Added \_sdk\_ file detection to enable SDK menu for non premium users.
- Added new app.UploadFile( url, file, name, callback ) method.
- Added file sharing/opening filter option to build.json (e.g. "pathPattern"&colon;".\*\\.txt" ).
- Layouts now support touch methods (only OnTouchDown works when in 'touchthrough' mode).
- Added app.CreateWebSocket method for handling reliable connected web sockets.
- Enabled use of FontAwsome icons in the list control.
- Added 'NoWrap' and 'Log' options to Text object (Log=='multiline,left,nowrap').
- Added txtEdit.SetOnEnter() method (disables enter key and fires callback).
- Added .Hide .Show .Gone .Isvisible methods to all objects.
- Added support for html file input boxes on Lollipop and higher.
- Added 'IgnoreSslErrors' option to webview and app.SetOptions.
- Device app list no longer refreshes on WiFi file edits.
- Added 'address' param to udp OnReceive callback.
- Added app.IsAppInstalled() and app.GetActivities() methods (useful for making launchers).
- Added "Icon" option to img.CreateImage (allows loading of app icons).
- Added callback option to app.SendIntent() when using 'result' option.
- Added 'orientation' option to config.json file (forces a particular orientation).
- Fixed app.GetVersion was not working in german.
- Fixed App.Get/SetClipboardText() fails in service.
- Added option for file '/sdcard/DroidScript/\_nopremium\_' to disable premium.
- Changed http server upload limit increased to 1 Gig.

#### DS 1.33 (27-Feb-2016)

#### DS 1.33b (21-Feb-2016)
- Improved device code editor (large file support, yoyo, search+replace, volume moves cursor).
- Code completion/suggestions + method info added to both editors.
- Added transparent App support using \_AddOptions( "Transparent" ) [premium only].
- Added App theming with app.CreateTheme() method [premium only].
- Added App theming sample [premium only].
- Added new app.CreateCodeEdit() method [premium only].
- Enabled MediaPlayer object to stream music over http.
- Added app.SetPosition() to allow tiny popop transparent Apps.
- Passwords now available in TextEdit (use 'password' option).
- Added app.SetOnShowKeyboard() method (passes true/false to callback).
- Added dlg.SetBackColor() method (can be transparent).
- Added dlg.SetSize() method (with optional 'px' mode)
- Added app.SimulateKey() method (eg. app.SimulateKey(edit,"C","SHIFT\_LEFT\_ON") )
- Added 'NoDialog' option to the downloader object.
- Added usb.SetMaxRead(bytes) and usb.SetTimeout(ms) methods.
- Added new 'pl', 'ps' modes to \*.SetTextSize() (scales text in proportion with device resolution)
- Added 'touchmodal','notouch','nofocus','secure','showlocked','wakescreen','screenon' to App.SetOptions().
- Added edit.SetCursorColor() method.
- Added icon buttons sample.
- Fixed commas in APK version causing bad build.
- Http server sample now fixed.
- Apostrophi and special chars in app names now prevented (in device IDE).
- ListDialog and YesNoDialog now support SetSize, SetBackColor and SetTitleHeight.
- Fixed problems with upper case 'i' characters in the options params in non-english langs.
- Progress now supports 'NoDim' option.
- Moved minimum platform support up to API 11 (Honeycomb).
- Custom dialog now supports 'NoDim' option.
- Added app.IsPremium() method (only meaningful when running inside IDE)
- Custom buttons now padded by default (use 'NoPad' option to remove).
- Websockets now firing callbacks inside a service.
- Added 'FadeIn', 'FadeOut', 'CrossFade' to lay.Animate() + extra 'time' parameter.
- Added obj.SetColorFilter( color, mode ) method to most objects (supports Porter-Duff modes).
- Added obj.AdjustColor( hue, sat, bright, cont ) method to most objects.
- Added web.SetUserAgent( agent ) method.
- Added 'Network' permissions when using WebSockets.
- Fixed SetTextColor and SetTextSize on spinner.

## DS 1.32 (15-Dec-2015)

#### DS 1.32b (12-Dec-2015)
- Fixed problem with multiple notifications returning wrong ids.
- Added app.IsAPK() method.
- Fixed bugs with txt.Log() method.
- Fixed .json files breaking release builds.
- Fixed bug in GetPosition() returning incorrect top value.
- Added 'px' option SetPosition, GetPosition and SetSize methods.
- Added 'px' option to GetLeft,GetTop,GetWidth,GetHeight methods.
- Fixed bug in cam.GetPixelData (red/blue pixel swap).
- Fixed problem of app.DisableKeys() blocking unwanted keystrokes.
- Fixed lst.GetTextSize() returning wrong size.
- Fixed lst.SetTextSize() not updating list.
- Added 'px','dip','sp','mm', 'pt' options to \*.SetTextSize().
- All top level plugin files included in APK build (including .so files).

#### DS 1.31b (01-Dec-2015)
- Added new 'DroidScript Premuim' option.
- Added new device browser to WiFi editor [premium]
- Add Playstore IAP sample [premium].
- Add Playstore subscriptions template [premium].
- Added support for a new build.json file (enabled more advanced build options).
- Added serv.AddRedirect(pattern,location) method to web server object.
- Added \_RemovePermissions() function.
- Scroller control ScrollBy method now accepts fractional values.
- Added support for web cookies.
- Added app.ClearCookies() and app.SaveCookies() methods.
- Added Release() method to plugins (called to clear up resources).
- net.SendDatagram() now has extra options param (supports "Text", "Hex" or "Bytes").
- Added "SUBS" (subscriptions) option to all PlayStore methods.
- Playstore OnPurchase callback now returns prodId,orderId,purchToken,devToken,packageName.
- Fixed APK version number rounding bug.
- Fixed AutoBoot not working for APKs.
- Fixed crypt.Hash() function adding line feeds (can use 'wrap' option for old behavior).
- Fixed intermittend bug with spinner GetText() method.
- Sqlite now works in services.
- app.IsScreenOn(), app.PreventScreenLock(), app.PreventWifiSleep() now work in services.
- app.TextToSpeech() method now defaults to the 'system' audio stream.
- app.TextToSpeech() has extra 'stream' parameter ['alarm','music','system'..etc].
- Added 'base64' mode to app.ReadFile() method (reads binary data to base64 string).
- Added support for custom controls inside user plugins.

#### DS 1.30b (03-Nov-2015)
- Added webserv.SetUploadFolder() method.
- app.SendIntent() can now be used with null package and class names.
- Added lst.SetTextSize2() and 'normal' option (turns of bold title text).
- Added app.GetKeyboardHeight() method.
- Updated fontawesome to version 4.4.
- Added app.CreatePhoneState() listens for phone state changes (including cell location).
- Added 'Phone States' sample.
- Added app.GetSSID() method.
- Added txt.Log( msg,options ) method to text control (useful for logging).
- Added more docs for basic components and controls (authored by Steve Garman).
- Added app.HttpRequest() method (useful to get around CORS issues).
- Added app.SysExec( cmd ) method (returns result as text).
- Added new $sys command to WiFi debugger (eg. "$logcat" shows internal app logs).
- Enabled multi-part SMS messaging with new 'MultiPart' option on sms.Send() method.
- Added GetPeak() method to AudioRecorder component.
- Added cam.HasFlash() method;
- Added new option 'overview' option to webview control.
- Added Arduino VID 0x2A03 (the other manufacturer).

#### DS 1.29b (09-Okt-2015)
- Fixed docs bug when using basic JavaScript reference.
- svc.SendMessage() now copes with quotes and json objects.

#### DS 1.28b (01-Okt-2015)
- Added offline JavaScript reference.
- Added 'include system assets' check box.
- Enabled app.Vibrate(), app.TextToSpeech(), app.SendIntent(), app.SetAlarm() in services.
- Added app.GetRunningServices() and app.GetRunningApps() methods.
- Enabled drag/drop of resources in WiFi IDE.
- WiFi IDE now stops both service and App when pressing stop button.
- Added support for multiple simultaneous USB serial devices (OTG hubs).
- Added app.SendMessage() and svc.SetOnMessage() methods.
- Added app.GetNotifyId() method (gets id of in-comming notification).
- Added app.ShowKeyboard( ctrl ) method (control must have focus).
- Added ctrl.Focus() method.
- Added app.IsKeyboardShown() method.
- Added 'Extract' option in EditText (enables full screen keyboard in landscape).
- Fixed app.ReadFile was adding extra newline at end of files.
- Added new 'FullPath' option to app.ListFolder() method (returns full names).
- Added 'NoScrollBars' option to WebView control.
- Added app.GetSpecialFolder() method ('DCIM','Pictures','Movies','Downloads'..etc).
- Added app.GetBatteryLevel() method.
- Added cam.SetZoom( level ), cam.GetZoom(), cam.GetMaxZoom() methods.
- Fixed Alarms bug introduced in 1.27b.
- Fixed bug with usb serial connections introduced in 1.27b.
- Added app.ClearData() method (clears app.SaveText/SaveNumber..etc values).

#### DS 1.27b (26-Aug-2015)

#### DS 1.26b (25-Aug-2015)
<!--Never happened-->
- Added support for background services (sample on forum)!
- Added support for custom buttons and added 'Button Styles' sample.
- Addded 'IngoreErrors' option to WebView control.
- Added 'Voice Command' continuous speech recognition sample.
- Added app.SendFile() method (sends files to other Apps, user chooses).
- Added web.Print() method to webview (prints docs on Kitkat or greater).
- Added web.Capture(filename) method to webview control (captures jpeg of visible page).
- Added optional id parameter to notification Notify() and Cancel() methods.
- Added 'ScrollFade' option to webview.
- Added "file" type to SendIntent extras + 'Send Files' sample.
- Added support for 'MakeBlock Orion' OTG/USB comms.
- Added support for chinese Arduino clones (CH340 USB/Serial chips).
- Added 'USB Arduino' sample.
- Added quality parameter to img.Save() method + support for png files.
-?Added 'GrayScale' and 'JSON' options to GetPixelData() + 'QVGA','VGA',etc prescaling option.
- Added app.SetOnKey(callback) method (reports key changes, including volume key).
- Added app.DisableKeys(keyList) method (disables normal function of given keys).
- Fixed issue with app.TextToSpeech() params being ignored on second call.
- Added 'Partial' option to app.CreateSpeechRec() method
- Added IsListening(), Stop() and Cancel() methods to SpeechRec object.

#### DS 1.25b (07-Jul-2015)
- Added app.SetVolume(stream,level) [streams&colon; alarm,dtmf,music,notification,ring,system,voicecall]
- Added app.GetVolume(stream) method.
- Added app.GetAccounts() method.
- Added 'NoBeep' option to speech recognition (only works on phones at moment).

#### DS 1.24b (21-Jun-2015)
- Added lst.InsertItem() and lst.GetLength().
- Fixed draw speed and mask issues introduced in 1.23b
- Fixed Bluetooth serial 'End' delimeter use in hex mode.
- Added fil.Skip() and fil.GetPointer().

#### DS 1.23b (14-Jun-2015)
- Added support for user created plugins (SDK available).
- Enabled camera recording and "Camera Record" sample.
- Added support for two-way WebSocket comms (sample on forum).
- Added support for google cardboard augmented reality.
- Added app.SendIntent method (with sample).
- Added rest of sensor types (HeartRate,Pressure,StepCounter etc).
- Script errors are now trapped in WebViews.
- Added more documentation.
- Added auto-discovery for chrome App version of WiFi IDE.
- Intellisense now works for controls in WiFi IDE.
- Device name and connected state shown in WiFi IDE.
- Connection password added to WiFi IDE (optional).
- Added new 'Game' mode to app.SetScreenMode().
- app.SetScreenMode("Full") now works on devices with virtual buttons.
- app.SetScreenMode("Full") now works in html apps.
- Added new "Reflect" option to app.CreateWebServer.
- Added new "Alias" option to app.CreateImage (makes drawing jagged).
- Added new low level file access object app.CreateFile().
- Fixed spritesheet example for lollipop.
- Fixed web.LoadHtml path bug + allowed short paths.
- Added NXT Joypad example.
- Added broadcast permssions for moto-g.
- Fixed app.GetUser permissions bug.
- Enabled alert, prompt calls in lollipop updated webview.
- Fixed JavaScript Confirm dialog bug.
- Added app.GetPackageName().
- Added lst.RemoveAll().
- Fixed SWS- SmartWatch service apps not starting.
- Added new app.IsChrome method (detects running in arc welded chrome).
- Added app.GetMediaFile("MyApp",".png") method.
- Fixed sharing files with VIEW intent (used to only work with 'share').
- GetIntent now returns empty string vals rather than "null".
- Fixed issue where manual drawing upate was only working for a single image.
- Fixed duplicate app icons issue during app rename.
- Stopped "Maximum call stack" error.

#### DS 1.22b (7-Apr-2015)
- Added editing via ADB option.
- Added Demos to WiFi editor.
- Added sns.SetMaxRate() method (defaults to 20ms).
- Added cam.GetParameters and cam.SetParameter methods (use to set ISO vals).
- Added List GetItem,SetItem,RemoveItem,ScrollToItem,SelectItem \*ByIndex methods.
- lst.GetList() with no params now returns object list.
- Added 'Ongoing' option to Notifications.
- Fixed 'append' mode for app.WriteFile.
- Added 'encoding' parameter for app.WriteFile.
- Added app.SetAutoStart(appName) method.
- Added web.ClearHistory() and web.GetUrl().
- Added app.SetWifiEnabled(enable) and app.IsWifiEnabled() methods.
- Added app.SetBluetoothEnabled(enable) and app.IsBluetoothEnabled() methods.
- Added app.SetRingerMode(mode) and app.GetRingerMode() methods.
- Added nxt.GetRotationCount() method.

#### DS 1.20b (16-Mar-2015)
- Added generic Intent receiver support + sample.
- Added app.SetAutoBoot() and app.SetAutoWifi() methods.
- Added char encoding 'mode' parameter to app.ReadFile().
- Enabled file/text sharing in user APK's.
- Added app.GetDSVersion().
- Added app.DeleteDatabase( name )
- app.DeleteDatabase now deletes journal file.
- Allowed use of optional full path in app.CreateDatabase().
- Added app.GetDatabaseFolder() method.
- Added GetType() method to Database object + GLView object.
- db.Delete() no longer requires the name of the database.
- Prevented spaces and symbols in apk package names.
- Fixed spinner bugs.

#### DS 1.19b (07-Mar-2015)
- Added online Tutorials to WiFi IDE!
- Added SQLite support!
- Added 'Database' sample.
- Added GoPro camera plugin.
- Added Barcode + QR code plugin.
- Added support of ODROID-C1
- Added Latest News to WiFi IDE.
- Added samples filtering on Wifi IDE.
- Plugin docs now visible in Wifi IDE.
- Enabled use of console.log method.
- Folder/FileExists funcs now differentiate between folders and files.
- Added app.GetUserName() method.
- Added app.GetDeviceId() method.
- Plugin docs now show in Wifi IDE.
- Added app.CheckLicense() for Google Play licensing.
- Added mask option to img.DrawImage function.
- Added app.GetEnv() method to get environment vars.
- Minimum OS version moved from Eclair -> Froyo.
- "/Sys/" and "/sys/" paths are now distinct (allows embedded use).
- Reboot after APKPlugin install now not required.

#### DS 1.18b (08-Feb-2015)
- Added html project type.

## DS 1.15
- Added app.SimulateTouch( obj,x,y,dir ) method.
- Fixed img.SetTextSize bug.
- GetObjects now correctly returns a map of all user created objects.
- Rename /sdcard/AndroidScript folder to /sdcard/DroidScript.
- Wifi IDE now support HTML, CSS and TXT files.
- Added 3 GLView examples.
- Added MediaStore sample.
- Added cam.GetPixelData() method (useful for Augmented Reality).
- Added img.GetPixelData() method.
- The 'id' parameter is now sent to alarm callbacks.
- Downloader object supports SetOnError callback.
- Downloader object now shows no complete or error messages (user must supply them).
- app.OpenFile(“/sdcard/my.htm”) now opens with a browser.
- Added optional “px” mode param to \*.SetTextSize and \*.GetTextSize methods.
- Added txt.GetTextSize method (works with autoscale).
- Added app.GetFreeSpace, app.GetFileDate, app.GetFileSize methods.
- ApkBuilder now works for latest CyanogenMod.
- GLView DrawImage and DrawSprite now supports use of -1 in dest width/height.
- GLView now uses fractional draw parameters for DrawImage and DrawSprite.
- GLView now properly disposed when calling app.DestroyLayout().
- GLView now allows img.Destroy().
- APK debug signing now uses proper android debug key.
- app.OpenURL is allowed in remote webviews.
- app.CreateEmail now gets Internet permissions in APK.
- Added 'Speech Recognition' sample.
- Added 'Audio Record' sample.
- Added 'NoSound' option to buttons etc.
- Added 'AllowZoom', 'AutoZoom', 'Wide' options to app.CreateWebView.
- Added extra 'zoom' parameter to app.CreateWebView method.
- Added “AllowRemote” option to WebView.
- Added app.Call method (makes phone calls given a phone number).
- app.OpenFile params 2 and 3 are now optional.
- Wifi IDE now saves all modified scripts
- Added app.ToBack method (Sends app into background).
- Added 'SetLooping(true/false)' method on MediaPlayer.
- Custom icons now supported on List controls!
- Added lst.SetItem, lst.AddItem, lst.RemoveItem methods.
- Added scroll.GetScrollX, scroll.GetScrollY functions.
- Added app.GetOSVersion method + docs.
- Added app.GetClipboardText method.
- Fixed web server demo.
- Appended app name to SPK share via email subject field.

## DS 1.11
- app.StartApp method is now working again.
- Custom dialogs can now use the 'NoTitle' option.
- Added latest news splash check at startup.
- Stopped Huawei phone USB popups.
- Now targetting API >= 14 (prevents HTC legacy menu bar).
- ListFolder can now cope with quotes in file names.
- Put in newer Wifi IDE (with debug filtering).
- Added Dlg.SetTitle method.
- app.Execute calls inside WebView now denied when page is remote.
- Added custom dialog sample.
- Add new icon (Thanks go to Jorge for the new icon).
- App list now supports scrolling.
- Camera preview now correct rotation in portrait mode.
- Fix spinner ontouch trigger when using SetList().
- Can now List IP addresses on websockets.
- Send to msg to specific IP in websockets.
- 'SetHint' method added to TextEdit control.
- 'Number' option added to TextEdit control.
- On device editor now only saves when code changed.
- List item selection always full width.
- Add html formatting options to text, list and buttons.
- Added 'Text Formatting' sample.
- Added 'MonoSpace' font option to lists.
- Fixed Wifi Demo + Camera Stream.
- Auto-scaling text box (use the 'AutoScale' option).
- Enabled normal use of the javascript prompt function.
- SetDivider losing color after Setlist.
- Added app.GetCountryCode, app.GetLanguageCode, app.GetLanguage, app.GetCountry.
- Fixed issue when calling img.SetTextColor before img.Clear().

## DS 1.09
- WebView permissions bug fixed.
- App icons are now sorted alphabetically.
- Added TTF font loading + FontAwesome in Txt, Lst and Img.
- Do alarm service repeat + cancel method.
- Added app.CreateNotification method + sample.
- Added “NoCancel” option to app.CreateDialog method.
- Updated Wifi Editor.
- Added lay.AddChild( child, order ) .
- Added lay.ChildToFront( child ).
- Added lay.GetChildOrder( child ).
- Prevent package name parts starting with numbers.
- Wifi editor folder is now in a hidden folder.
- Don't need the /edit on Wifi Editor URL.
- Added app.GetMacAddress().
- Added app.GetVersion() + app.IsNewVersion() methods.
- Added app.GetObjects method.
- Add GetType() method to objects.
- Text input panning enabled in APK's
- Fixed animate callback bug.
- Email attachments now supported by Email object.
- Visible controls now support 'this' keyword.
- Breaking Change&colon; 'TouchThrough' option needed to touch through layouts.
- Breaking Change&colon; app.ListFolder now returns array (use toString() to get comma sep list).
- Added index param to List OnTouch/OnLongTouch callbacks.
- Camera color detection sample.
- Fixed orientation startup bug.
- Ellipsis option added for Text and List controls.

## DS 1.08
- APK builder plugin.
- Wifi IDE multi script support.
- Wifi IDE quick function finder.
- Encryption sample added.
- Html web server now free.
- Progress bar sample.
- Video streamer sample.
- Video player sample.

## DS 1.06
- Add CopyFile function.
- Fixed black flashes on busy games.
- Encryption + hashing added.
- Arduio via OTG supported.
- IDE run samples.
- IDE supports multiple files.


## DS 1.05 (24-May-2014)
- More documentation.
- Fixed performance issues on Kitkat.
- Added Plugin support.
- Added font size option for Editor.
- Fixed Hudl docs + WebView issues.
- Added JavaScript Beginners guide.
- Various other bug fixes.
- More samples added.
 */



// ------------- SAMPLES ------------- 

