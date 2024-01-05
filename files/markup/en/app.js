
_IsDS = (typeof _bridge!='undefined' || typeof __vm!='undefined');
_isV8=false; _isNode=false; _isIDE=false;

_dbg = _dbgSave = true; _map = []; _scripts = [];
_languages = null; _curLang = "en"; _started=false;
_cbMap = []; _cbId=0; _docs = false; _busy=false;
_btl = null; _lvw = null; _ldg = null;
_ynd = null; _nxt = null; _smw = null;
_inf = null; _rec = null; _pst = null;
_sms = null; _eml = null; _wpr = null;
_crp = null; _spr = null;

function DsApp()
{
	this.data = {};
	this.typeId = "DsApp"
	/*#app*/ this.GetType = function() { return "DsApp"; }
	/*#app*/ this.GetObjects = function() { return _GetObjects(); }
	/*#app*/ this.IsStarted = function() { return prompt( "#", "App.IsStarted(" )=="true"; }
	/*#app*/ this.Exit = function( kill ) { prompt( "#", "App.Exit("+kill ); }
	/*#app*/ this.Quit = function( msg,title,options ) { prompt( "#", "App.Quit(\f"+msg+"\f"+title+"\f"+options ); }
	/*#app*/ this.ToBack = function() { prompt( "#", "App.ToBack(" ); }
	/*#app*/ this.ToFront = function() { prompt( "#", "App.ToFront(" ); }
	/*#app*/ this.Hide = function() { prompt( "#", "App.Hide(" ); }
	/*#app*/ this.Show = function() { prompt( "#", "App.Show(" ); }
	/*#app*/ this.UpdateUI = function( ms ) { prompt( "#", "_DoEvents(\f"+ms ); }
	/*#app*/ this.Execute = function( js ) { prompt( "#", "App.Execute("+js ); }
	/*#app*/ this.StartApp = function( file,options,intent ) { prompt( "#", "App.StartApp(\f"+file+"\f"+options+"\f"+intent ); }
	/*#app*/ this.StopApp = function( name ) { prompt( "#", "App.StopApp("+name ); }
	/*#app*/ this.LaunchApp = function( packageName,noPlay ) { prompt( "#", "App.LaunchApp(\f"+packageName+"\f"+noPlay ); }
	/*#app*/ this.SetScreenMode = function( mode ) { prompt( "#", "App.SetScreenMode(\f"+mode ); }
	/*#app*/ this.SetOptions = function( options ) { prompt( "#", "App.SetOptions(\f"+options ); }
	/*#app*/ this.SetTheme = function( theme ) { prompt( "#", "App.SetTheme(\f"+(theme?theme.id:null) ); }
	/*#app*/ this.GetThemeInfo = function() { return eval(prompt( "#", "App.GetThemeInfo(" )); }
	/*#app*/ this.SetDensity = function( dpi ) { prompt( "#", "App.SetDensity(\f"+dpi ); }
	/*#app*/ this.SetPosition = function( left,top,width,height,options ) { prompt( "#", "App.SetPosition(\f"+left+"\f"+top+"\f"+width+"\f"+height+"\f"+options ); }
	/*#app*/ this.SetBackColor = function( clr ) { prompt( "#", "App.SetBackColor(\f"+clr ); }
	/*#app*/ this.SetNavBarColor = function( clr ) { prompt( "#", "App.SetNavBarColor(\f"+clr ); }
	/*#app*/ this.SetStatusBarColor = function( clr ) { prompt( "#", "App.SetStatusBarColor(\f"+clr ); }
	/*#app*/ this.StartService = function( packageName,className ) { prompt( "#", "App.StartService(\f"+packageName+"\f"+className ); }
	/*#app*/ this.StopService = function() { prompt( "#", "App.StopService(" ); }
	/*#app*/ this.ScheduleJob = function( delay,options ) { prompt( "#", "App.ScheduleJob(\f"+delay+"\f"+options ); }
	/*#app*/ this.CancelJob = function() { prompt( "#", "App.CancelJob(" ); }
	/*#app*/ this.StartDebugServer = function() { prompt( "#", "App.StartDebugServer(" ); }
	/*#app*/ this.StopDebugServer = function() { prompt( "#", "App.StopDebugServer(" ); }
	/*#app*/ this.SendIntent = function( packageName,className,action,category,uri,type,extras,options,callback ) { prompt( "#", "App.SendIntent(\f"+packageName+"\f"+className+"\f"+action+"\f"+category+"\f"+uri+"\f"+type+"\f"+extras+"\f"+options+"\f"+_Cbm(callback) ); }
	/*#app*/ this.BroadcastIntent = function( action,category,data,type,extras,options ) { prompt( "#", "App.BroadcastIntent(\f"+action+"\f"+category+"\f"+data+"\f"+type+"\f"+extras+"\f"+options ); }
	/*#app*/ this.SendMessage = function( msg ) { prompt( "#", "App.SendMessage(\f"+msg ); }
	/*#app*/ this.SetInForeground = function( title,text,largeIcon,smallIcon,importance ) { prompt( "#", "App.SetInForeground(\f"+title+"\f"+text+"\f"+largeIcon+"\f"+smallIcon+"\f"+importance ); }
	/*#app*/ this.SetInBackground = function() { prompt( "#", "App.SetInBackground(\f" ); }
	/*#app*/ this.Script = function( file, noDefer ) { _LoadScriptSync( file, noDefer?false:true ); }
	/*#app*/ this.LoadScript = function( url, callback ) { _LoadScript( url, callback ); }
	/*#app*/ this.LoadPlugin = function( url ) { _LoadPlugin( url ); }
	/*#app*/ this.SysExec = function( cmd,options,maxRead,timeout ) { return prompt( "#", "App.SysExec(\f"+cmd+"\f"+options+"\f"+maxRead+"\f"+timeout ); }
	/*#app*/ this.ExtExec = function( name,file,args,options ) { return prompt( "#", "App.ExtExec(\f"+name+"\f"+file+"\f"+args+"\f"+options ); }
	/*#app*/ this.SetPriority = function( level ) { prompt( "#", "App.SetPriority(\f"+level ); }
	/*#app*/ //this.Odroid = function( p1,p2,p3 ) { return prompt( "#", "App.Odroid(\f"+p1+"\f"+p2+"\f"+p3 ); }
	/*#app*/ this.GetName = function() { return prompt( "#", "App.GetName(" ); }
	/*#app*/ this.GetPath = function() { return prompt( "#", "App.GetPath(" ); }
	/*#app*/ this.GetAppName = function() { return prompt( "#", "App.GetAppName(" ); }
	/*#app*/ this.GetAppPath = function() { return prompt( "#", "App.GetAppPath(" ); }
	/*#app*/ this.GetVersion = function() { return parseFloat(prompt( "#", "App.GetVersion(" )); }
	/*#app*/ this.GetDSVersion = function() { return parseFloat(prompt( "#", "App.GetDSVersion(" )); }
	/*#app*/ this.GetDSBuild = function() { return parseInt(prompt( "#", "App.GetDSBuild(" )); }
	/*#app*/ this.IsNewVersion = function() { return prompt( "#", "App.IsNewVersion(" )=="true"; }
	/*#app*/ this.InIDE = function() { return prompt( "#", "App.InIDE(" )=="true"; }
	/*#app*/ this.IsAPK = function() { return prompt( "#", "App.IsAPK(" )=="true"; }
	/*#app*/ this.IsService = function() { return prompt( "#", "App.IsService(" )=="true"; }
	/*#app*/ this.IsPremium = function() { return prompt( "#", "App.IsPremium(" )=="true"; }
	/*#app*/ this.IsEngine = function() { return prompt( "#", "App.IsEngine(" )=="true"; }
	/*#app*/ this.IsScoped = function() { return prompt( "#", "App.IsScoped(" )=="true"; }
	/*#app*/ this.GetPackageName = function() { return prompt( "#", "App.GetPackageName(" ); }
	/*#app*/ this.CheckLicense = function( key ) { prompt( "#", "App.CheckLicense(\f"+key ); }
	/*#app*/ this.GetAccounts = function() { return prompt( "#", "App.GetAccounts(" ); }
	/*#app*/ this.GetUser = function() { return prompt( "#", "App.GetUser(" ); }
	/*#app*/ this.GetDeviceId = function() { return prompt( "#", "App.GetDeviceId(" ); }
	/*#app*/ this.GetCountryCode = function() { return prompt( "#", "App.GetCountryCode(" ); }
	/*#app*/ this.GetLanguageCode = function() { return prompt( "#", "App.GetLanguageCode(" ); }
	/*#app*/ this.GetCountry = function() { return prompt( "#", "App.GetCountry(" ); }
	/*#app*/ this.GetLanguage = function() { return prompt( "#", "App.GetLanguage(" ); }
	/*#app*/ this.GetOptions = function() { return prompt( "#", "App.GetOptions(" ); }
	/*#app*/ this.GetSharedText = function( index ) { return prompt( "#", "App.GetSharedText("+index ); }
	/*#app*/ this.GetSharedFiles = function() { var s = prompt( "#", "App.GetSharedFiles(" ); if(s.length) return s.split(","); else return null; }
	/*#app*/ this.GetActivities = function() { return eval(prompt( "#", "App.GetActivities(" )); }
	/*#app*/ this.IsAppInstalled = function( packageName ) { return prompt( "#", "App.IsAppInstalled(\f"+packageName )=="true"; }
	/*#app*/ this.GetInstalledApps = function() { return eval(prompt( "#", "App.GetInstalledApps(\f" )); }
	/*#app*/ this.GetRunningApps = function() { return eval(prompt( "#", "App.GetRunningApps(\f" )); }
	/*#app*/ this.GetRunningServices = function() { return eval(prompt( "#", "App.GetRunningServices(\f" )); }
	/*#app*/ this.GetMemoryInfo = function() { return eval(prompt( "#", "App.GetMemoryInfo(\f" )); }
	/*#app*/ this.GetIntent = function() { var s = prompt( "#", "App.GetIntent(" ); if(s.length) return JSON.parse(s); else return null; }
	/*#app*/ this.GetNotifyId = function() { return prompt( "#", "App.GetNotifyId(" ); }
	/*#app*/ this.SetSharedApp = function( name ) { prompt( "#", "App.SetSharedApp("+name ); }
	/*#app*/ this.GetMediaFile = function( appName,ext ) { return prompt( "#", "App.GetMediaFile(\f"+appName+"\f"+ext ); }
	/*#app*/ this.KillApp = function( procId ) { prompt( "#", "App.KillApp("+procId ); }
	/*#app*/ this.CreateShortcut = function( name,iconFile,file,options ) { prompt( "#", "App.CreateShortcut(\f"+name+"\f"+iconFile+"\f"+file+"\f"+options ); }
	/*#app*/ this.GetShortcuts = function() { var s = prompt( "#", "App.GetShortcuts(" ); if(s.length) return JSON.parse(s); else return null; }
	/*#app*/ this.GetBuildNum = function() { return parseInt( prompt( "#", "App.GetBuildNum(" )); }
	/*#app*/ this.GetOSVersion = function() { return parseInt( prompt( "#", "App.GetBuildNum(" )); }
	/*#app*/ this.GetModel = function() { return prompt( "#", "App.GetModel(" ); }
	/*#app*/ this.IsTablet = function() { return prompt( "#", "App.IsTablet(" )=="true"; }
	/*#app*/ this.IsChrome = function() { return prompt( "#", "App.IsChrome(" )=="true"; }
	/*#app*/ this.IsTV = function() { return prompt( "#", "App.IsTV(" )=="true"; }
	/*#app*/ this.SetErrorFilter = function( filter ) { prompt( "#", "App.SetErrorFilter(\f"+filter ); }
	/*#app*/ this.SetOnError = function( callback ) { prompt( "#", "App.SetOnError(\f"+_Cbm(callback) ); }
	/*#app*/ this.SetOnDebug = function( callback ) { prompt( "#", "App.SetOnDebug(\f"+_Cbm(callback) ); }
	/*#app*/ this.SetOnKey = function( callback ) { prompt( "#", "App.SetOnKey(\f"+_Cbm(callback) ); }
	/*#app*/ this.SetOnShowKeyboard = function( callback ) { prompt( "#", "App.SetOnShowKeyboard(\f"+_Cbm(callback) ); }
	/*#app*/ this.SetOnWifiChange = function( callback ) { prompt( "#", "App.SetOnWifiChange(\f"+_Cbm(callback) ); }
	/*#app*/ this.WifiScan = function( callback,options ) { prompt( "#", "App.WifiScan(\f"+_Cbm(callback)+"\f"+options ); }
	/*#app*/ this.DisableKeys = function( keyList ) { prompt( "#", "App.DisableKeys(\f"+keyList ); }
	/*#app*/ this.DisableTouch = function( disable ) { prompt( "#", "App.DisableTouch(\f"+disable ); }
	/*#app*/ this.GetIPAddress = function() { return prompt( "#", "App.GetIPAddress(" ); }
	/*#app*/ this.GetMacAddress = function() { return prompt( "#", "App.GetMacAddress(" ); }
	/*#app*/ this.GetRouterAddress = function() { return prompt( "#", "App.GetRouterAddress(" ); }
	/*#app*/ this.GetSSID = function() { return prompt( "#", "App.GetSSID(" ); }
	/*#app*/ this.GetRSSI = function() { return parseInt(prompt( "#", "App.GetRSSI(" )); }
	/*#app*/ this.Broadcast = function( type,msg ) { prompt( "#", "App.Broadcast("+type+"\f"+msg ); }
	/*#app*/ this.SetOnBroadcast = function( callback,action ) { prompt( "#", "App.SetOnBroadcast(\f"+_Cbm(callback)+"\f"+action ); }
	/*#app*/ this.SetData = function( name,value ) { prompt( "#", "App.SetData(\f"+name+"\f"+value ); }
	/*#app*/ this.GetData = function( name ) { return prompt( "#", "App.GetData(\f"+name ); }
	/*#app*/ this.SetClipboardText = function( txt ) { prompt( "#", "App.SetClipboardText("+txt ); }
	/*#app*/ this.GetClipboardText = function() { return prompt( "#", "App.GetClipboardText(" ); }
	/*#app*/ this.EnableBackKey = function( enable ) { prompt( "#", "App.EnableBackKey("+enable ); }
	/*#app*/ this.Wait = function( secs,doEvents ) { prompt( "#", "App.Wait(\f"+secs+"\f"+doEvents ); }
	/*#app*/ this.Alert = function( msg,title,options,hue ) { if(title) prompt( "#", "App.Alert(\f"+msg+"\f"+title+"\f"+options+"\f"+hue ); else alert(msg); }
	/*#app*/ this.HideKeyboard = function() { prompt( "#", "App.HideKeyboard(" ); }
	/*#app*/ this.ShowKeyboard = function( obj ) { return prompt( "#", "App.ShowKeyboard(\f"+obj.id )=="true"; }
	/*#app*/ this.IsKeyboardShown = function() { return prompt( "#", "App.IsKeyboardShown(" )=="true"; }
	/*#app*/ this.GetKeyboardHeight = function() { return parseInt(prompt( "#", "App.GetKeyboardHeight(" )); }
	/*#app*/ this.TextToSpeech = function( text,pitch,rate,callback,stream,locale,engine ) { prompt( "#", "App.TextToSpeech(\f"+text+"\f"+pitch+"\f"+rate+"\f"+_Cbm(callback)+"\f"+stream+"\f"+locale+"\f"+engine ); }
	/*#app*/ this.Debug = function( msg ) { prompt( "#", "App.Debug(\f"+(typeof msg=='object'?JSON.stringify(msg):msg) ); }
	/*#app*/ this.Error = function( msg,line,file,quit ) { prompt( "#", "App.Error(\f"+msg+"\f"+line+"\f"+file+"\f"+quit ); }
	/*#app*/ this.SetDebugEnabled = function( enable ) { prompt( "#", "_UseDbg(\f"+enable ); _dbg=enable; }
	/*#app*/ this.SetDebug = function( switches ) { prompt( "#", "_UseDbg(\f"+switches ); _dbg=switches; }
	/*#app*/ this.GetDebug = function() { return prompt( "#", "_GetDbg(\f" ); }
	/*#app*/ this.IsDebugEnabled = function() { return _dbg?true:false; }
	/*#app*/ this.IsDebugging = function() { return prompt( "#", "App.IsDebugging(" )=="true"; }
	/*#app*/ this.IsDebugVisible = function() { return prompt( "#", "App.IsDebugVisible(" )=="true"; }
	/*#app*/ this.CreateDebug = function( options ) { prompt( "#", "App.CreateDebug(\f"+options ); }
	/*#app*/ this.ShowDebug = function( show,options ) { prompt( "#", "App.ShowDebug(\f"+show+"\f"+options ); }
	/*#app*/ this.SendMail = function( address,subject,body,attach,type,options ) { prompt( "#", "App.SendMail(\f"+address+"\f"+subject+"\f"+body+"\f"+attach+"\f"+type+"\f"+options ); }
	/*#app*/ this.SendFile = function( file,subject,text,choose ) { prompt( "#", "App.SendFile(\f"+file+"\f"+subject+"\f"+text+"\f"+choose ); }
	/*#app*/ this.SendText = function( text,subject,choose ) { prompt( "#", "App.SendText(\f"+text+"\f"+subject+"\f"+choose ); }
	/*#app*/ this.SendImage = function( file,choose ) { prompt( "#", "App.SendImage(\f"+file+"\f"+choose ); }
	/*#app*/ this.SendSMS = function( msg,number ){ app.SendIntent(null,null,"android.intent.action.SENDTO",null,'smsto:'+number,null,JSON.stringify([{name:"sms_body",type:"string",value:msg}])); }
	// this._Extract = function( p1 ) { prompt( "#", "App._Extract("+p1 ); }
	/*#app*/ this.ExtractAssets = function( src,dest,overwrite,options,filter ) { prompt( "#", "App.ExtractAssets(\f"+src+"\f"+dest+"\f"+overwrite+"\f"+options+"\f"+filter ); }
	/*#app*/ this.RedirectAssets = function( dir ) { prompt( "#", "App.RedirectAssets(\f"+dir ); }
	/*#app*/ this.ExtractPlugins = function() { prompt( "#", "App.ExtractPlugins(\f" ); }
	/*#app*/ this.GetResourceId = function( name,options ) { return parseInt(prompt( "#", "App.GetResourceId(\f"+name+"\f"+options )); }
	/*#app*/ this.Vibrate = function( pattern ) { prompt( "#", "App.Vibrate("+pattern ); }
	/*#app*/ this.ShowPopup = function( msg,options ) { prompt( "#", "App.ShowPopup("+msg+"\f"+options ); }
	/*#app*/ this.ShowProgress = function( msg,options ) { prompt( "#", "App.ShowProgress(\f"+msg+"\f"+options ); }
	/*#app*/ this.HideProgress = function() { prompt( "#", "App.HideProgress(" ); }
	/*#app*/ this.ShowProgressBar = function( title,percent,options ) { prompt( "#", "App.ShowProgressBar(\f"+title+"\f"+percent+"\f"+options ); }
	/*#app*/ this.UpdateProgressBar = function( percent,options ) { prompt( "#", "App.UpdateProgressBar(\f"+percent+"\f"+options ); }
	/*#app*/ this.HideProgressBar = function() { prompt( "#", "App.HideProgressBar(" ); }
	/*#app*/ this.LoadText = function( name,dflt,file ) { return prompt( "#", "App.LoadText("+name+"\f"+dflt+"\f"+file ); }
	/*#app*/ this.LoadNumber = function( name,dflt,file ) { return parseFloat(prompt( "#", "App.LoadNumber("+name+"\f"+dflt+"\f"+file )); }
	/*#app*/ this.LoadBoolean = function( name,dflt,file ) { return (prompt( "#", "App.LoadBoolean("+name+"\f"+dflt+"\f"+file )=="true"); }
	/*#app*/ this.LoadJson = function(name,dflt,file) { try { return JSON.parse(prompt("#","App.LoadText("+name+"\f"+dflt+"\f"+file)); } catch(e) { app.Debug("WARNING: app.LoadJson Failed: "+e); } }
	/*#app*/ this.SaveText = function( name,value,file ) { prompt( "#", "App.SaveText("+name+"\f"+value+"\f"+file ); }
	/*#app*/ this.SaveNumber = function( name,value,file ) { prompt( "#", "App.SaveNumber("+name+"\f"+value+"\f"+file ); }
	/*#app*/ this.SaveBoolean = function( name,value,file ) { prompt( "#", "App.SaveBoolean("+name+"\f"+value+"\f"+file ); }
	/*#app*/ this.SaveJson = function(name,data,file) { try { prompt("#","App.SaveText("+name+"\f"+JSON.stringify(data)+"\f"+file); } catch(e) { app.Debug("WARNING: app.SaveJson Failed: "+e); } }
	/*#app*/ this.ClearData = function( file ) { prompt( "#", "App.ClearData(\f"+file ); }
	/*#app*/ this.ClearValue = function( name,file ) { prompt( "#", "App.ClearValue(\f"+name+"\f"+file ); }
	/*#app*/ this.GetTop = function() { return parseFloat(prompt( "#", "App.GetTop(" )); }
	/*#app*/ this.HasSoftNav = function() { return prompt( "#", "App.HasSoftNav(" )=="true"; }
	/*#app*/ this.IsNavBarOnRight = function() { return prompt( "#", "App.IsNavBarOnRight(" )=="true"; }
	/*#app*/ this.GetScreenWidth = function( options ) { return parseFloat(prompt( "#", "App.GetScreenWidth(\f"+options )); }
	/*#app*/ this.GetScreenHeight = function( options ) { return parseFloat(prompt( "#", "App.GetScreenHeight(\f"+options )); }
	/*#app*/ this.GetScreenDensity = function() { return parseFloat(prompt( "#", "App.GetScreenDensity(" )); }
	/*#app*/ this.GetDisplayWidth = function() { return parseFloat(prompt( "#", "App.GetDisplayWidth(" )); }
	/*#app*/ this.GetDisplayHeight = function() { return parseFloat(prompt( "#", "App.GetDisplayHeight(" )); }
	/*#app*/ this.GetDefaultOrientation = function() { return prompt( "#", "App.GetDefaultOrientation(" ); }
	/*#app*/ this.GetOrientation = function() { return prompt( "#", "App.GetOrientation(" ); }
	/*#app*/ this.IsPortrait = function() { return prompt( "#", "App.GetOrientation(" )=="Portrait"; }
	/*#app*/ this.SetOrientation = function( orient,callback ) { prompt( "#", "App.SetOrientation(\f"+orient+"\f"+_Cbm(callback) ); }
	/*#app*/ this.GetRotation = function() { return parseInt(prompt( "#", "App.GetRotation(" )); }
	/*#app*/ this.GetBatteryLevel = function() { return parseFloat(prompt( "#", "App.GetBatteryLevel(\f" )); }
	/*#app*/ this.IsBatteryOptimized = function() { return prompt( "#", "App.IsBatteryOptimized(" )=="true"; }
	/*#app*/ this.IsCharging = function() { return prompt( "#", "App.IsCharging(" )=="true"; }
	/*#app*/ this.ShowBatterySettings = function() { prompt( "#", "App.ShowBatterySettings(" ); }
	/*#app*/ this.GetChargeType = function() { return prompt( "#", "App.GetChargeType(\f" ); }
	/*#app*/ this.PreventScreenLock = function( mode ) { prompt( "#", "App.PreventScreenLock("+mode ); }
	/*#app*/ this.PreventWifiSleep = function() { prompt( "#", "App.PreventWifiSleep(" ); }
	/*#app*/ this.SetWifiEnabled = function( enable ) { prompt( "#", "App.SetWifiEnabled(\f"+enable ); }
	/*#app*/ this.IsWifiEnabled = function() { return prompt( "#", "App.IsWifiEnabled(" )=="true"; }
	/*#app*/ this.SetWifiApEnabled = function( enable,ssid,key ) { prompt( "#", "App.SetWifiApEnabled(\f"+enable+"\f"+ssid+"\f"+key ); }
	/*#app*/ this.IsWifiApEnabled = function() { return prompt( "#", "App.IsWifiApEnabled(" )=="true"; }
	/*#app*/ this.WifiConnect = function( ssid,key ) { prompt( "#", "App.WifiConnect(\f"+ssid+"\f"+key ); }
	/*#app*/ this.IsConnected = function() { return prompt( "#", "App.IsConnected(" )=="true"; }
	/*#app*/ this.SetBluetoothEnabled = function( enable ) { prompt( "#", "App.SetBluetoothEnabled(\f"+enable ); }
	/*#app*/ this.IsBluetoothEnabled = function() { return prompt( "#", "App.IsBluetoothEnabled(" )=="true"; }
	/*#app*/ this.GetPairedBtDevices = function() { return eval(prompt( "#", "App.GetPairedBTDevices(\f" )); }
	/*#app*/ this.IsBtDevicePaired = function( name ) { return prompt( "#", "App.IsBtDevicePaired(\f"+name )=="true"; }
	/*#app*/ this.DiscoverBtDevices = function( filter,onFound,onComplete ) { prompt( "#", "App.DiscoverBtDevices(\f"+filter+"\f"+_Cbm(onFound)+"\f"+_Cbm(onComplete) ); }
	/*#app*/ this.PairBtDevice = function( address,callback ) { prompt( "#", "App.PairBtDevice(\f"+address+"\f"+_Cbm(callback) ); }
	/*#app*/ this.UnpairBtDevice = function( address,callback ) { prompt( "#", "App.UnpairBtDevice(\f"+address+"\f"+_Cbm(callback) ); }
	/*#app*/ this.GetBtProfileState = function( type ) { return prompt( "#", "App.GetBtProfileState(\f"+type ); }
	/*#app*/ this.GetBluetoothName = function() { return prompt( "#", "App.GetBluetoothName(" ); }
	/*#app*/ this.GetBluetoothAddress = function() { return prompt( "#", "App.GetBluetoothAddress(" ); }
	/*#app*/ this.IsLocationEnabled = function( types ) { return prompt( "#", "App.IsLocationEnabled(\f"+types )=="true"; }
	/*#app*/ this.SetMockLocation = function( lat,lng,accuracy,speed ) { prompt( "#", "App.SetMockLocation(\f"+lat+"\f"+lng+"\f"+accuracy+"\f"+speed ); }
	/*#app*/ this.PlayRingtone = function( type ) { prompt( "#", "App.PlayRingtone(\f"+type ); }
	/*#app*/ this.SetRingerMode = function( mode ) { prompt( "#", "App.SetRingerMode(\f"+mode ); }
	/*#app*/ this.GetRingerMode = function() { return prompt( "#", "App.GetRingerMode(" ); }
	/*#app*/ this.SetSpeakerPhone = function( on ) { prompt( "#", "App.SetSpeakerPhone(\f"+on ); }
	/*#app*/ this.GetSpeakerPhone = function() { return prompt( "#", "App.GetSpeakerPhone(" )=="true"; }
	/*#app*/ this.SetVolume = function( stream,level,options ) { prompt( "#", "App.SetVolume(\f"+stream+"\f"+level+"\f"+options ); }
	/*#app*/ this.GetVolume = function( stream ) { return parseFloat(prompt( "#", "App.GetVolume(\f"+stream )); }
	/*#app*/ this.SetTitle = function( title ) { prompt( "#", "App.SetTitle("+title ); }
	/*#app*/ this.SetMenu = function( list,iconPath ) { prompt( "#", "App.SetMenu("+list+"\f"+iconPath ); }
	/*#app*/ this.ShowMenu = function() { prompt( "#", "App.ShowMenu(" ); }
	/*#app*/ this.Translate = function( cancel,ok ) { prompt( "#", "App.Translate(\f"+cancel+"\f"+ok ); }
	/*#app*/ this.AddLayout = function( layout,type,options ) { if( !type ) prompt( "#", "App.AddLayout("+layout.id ); else { var ret = prompt( (layout?layout.id:null), "App.AddLayout("+type+"\f"+options ); if( ret ) return new Lay(ret); else return null; } }
	/*#app*/ this.RemoveLayout = function( layout ) { prompt( "#", "App.RemoveLayout("+ layout.id ); }
	/*#app*/ this.DestroyLayout = function( layout ) { prompt( "#", "App.DestroyLayout("+ layout.id ); }
	/*#app*/ this.AddDrawer = function( layout,side,width,grabWidth ) { prompt( "#", "App.AddDrawer(\f"+layout.id+"\f"+side+"\f"+width+"\f"+grabWidth ); }
	/*#app*/ this.RemoveDrawer = function( side ) { prompt( "#", "App.RemoveDrawer(\f"+ side ); }
	/*#app*/ this.OpenDrawer = function( side ) { prompt( "#", "App.OpenDrawer(\f"+side ); }
	/*#app*/ this.CloseDrawer = function( side ) { prompt( "#", "App.CloseDrawer(\f"+side ); }
	/*#app*/ this.LockDrawer = function( side ) { prompt( "#", "App.LockDrawer(\f"+side ); }
	/*#app*/ this.UnlockDrawer = function( side ) { prompt( "#", "App.UnlockDrawer(\f"+side ); }
	/*#app*/ this.GetDrawerState = function( side ) { return prompt( "#", "App.GetDrawerState(\f"+side ); }
	/*#app*/ this.MakeFolder = function( fldr ) { prompt( "#", "App.MakeFolder("+fldr ); }
	/*#app*/ this.GetPrivateFolder = function( name,options ) { return prompt( "#", "App.GetPrivateFolder(\f"+name+"\f"+options ); }
	/*#app*/ this.GetPublicFolder = function() { return prompt( "#", "App.GetPublicFolder(" ); }
	/*#app*/ this.GetTempFolder = function() { return prompt( "#", "App.GetTempFolder(" ); }
	/*#app*/ this.GetDatabaseFolder = function() { return prompt( "#", "App.GetDatabaseFolder(" ); }
	/*#app*/ this.DeleteDatabase = function( name ) { prompt( "#", "App.DeleteDatabase(\f"+name); }
	/*#app*/ this.FolderExists = function( fldr ) { return prompt( "#", "App.FolderExists("+fldr )=="true"; }
	/*#app*/ this.FileExists = function( file ) { return prompt( "#", "App.FileExists("+file )=="true"; }
	/*#app*/ this.IsFolder = function( fldr ) { return prompt( "#", "App.IsFolder("+fldr )=="true"; }
	/*#app*/ this.ListFolder = function( path,filter,limit,options ) { return eval(prompt( "#", "App.ListFolder(\f"+path+"\f"+filter+"\f"+limit+"\f"+options )); }
	/*#app*/ this.WalkFolder = function( path,filter,depth,limit,options ) { return JSON.parse(prompt( "#", "App.WalkFolder(\f"+path+"\f"+filter+"\f"+depth+"\f"+limit+"\f"+options )); }
	/*#app*/ this.GetExternalFolder = function() { return prompt( "#", "App.GetExternalFolder(" ); }
	/*#app*/ this.GetInternalFolder = function() { return prompt( "#", "App.GetInternalFolder(" ); }
	/*#app*/ this.GetSpecialFolder = function( name ) { return prompt( "#", "App.GetSpecialFolder(\f"+name ); }
	/*#app*/ this.GetEnv = function( name ) { return prompt( "#", "App.GetEnv(\f"+name ); }
	/*#app*/ this.GetPermission = function( name,callback ) { prompt( "#", "App.GetPermission(\f"+name+"\f"+_Cbm(callback) ); }
	/*#app*/ this.CheckPermission = function( name ) { return prompt( "#", "App.CheckPermission(\f"+name ); }
	/*#app*/ this.RemovePermission = function( uri ) { return prompt( "#", "App.RemovePermission(\f"+uri ); }
	/*#app*/ this.ListPermissions = function( type ) { return prompt( "#", "App.ListPermissions(\f"+type ); }
	/*#app*/ this.ReadFile = function( file,encoding ) { return prompt( "#", "App.ReadFile(\f"+file+"\f"+encoding ); }
	/*#app*/ this.ReadFileData = function( file,mode ) { return JSON.parse(prompt( "#", "App.ReadFileData(\f"+file+"\f"+mode )); }
	/*#app*/ this.WriteFile = function( file,text,mode,encoding ) { prompt( "#", "App.WriteFile(\f"+file+"\f"+text+"\f"+mode+"\f"+encoding ); }
	/*#app*/ this.OpenFile = function( file,type,choose ) { prompt( "#", "App.OpenFile(\f"+file+"\f"+type+"\f"+choose ); }
	/*#app*/ this.OpenUrl = function( url,type,choose ) { prompt( "#", "App.OpenUrl(\f"+url+"\f"+type+"\f"+choose ); }
	/*#app*/ this.DownloadFile = function( src,dest,title,desc,options ) { prompt( "#", "App.DownloadFile(\f"+src+"\f"+dest+"\f"+title+"\f"+desc+"\f"+options ); }
	/*#app*/ this.ChooseFile = function( msg,type,callback,fldr,options ) { prompt( "#", "App.ChooseFile(\f"+msg+"\f"+type+"\f"+_Cbm(callback)+"\f"+fldr+"\f"+options ); }
	/*#app*/ this.ChooseContact = function( type,callback ) { prompt( "#", "App.ChooseContact(\f"+type+"\f"+_Cbm(callback) ); }
	/*#app*/ this.ChooseImage = function( options,callback ) { prompt( "#", "App.ChooseImage(\f"+options+"\f"+_Cbm(callback) ); }
	/*#app*/ this.ChooseAccount = function( callback ) { prompt( "#", "App.ChooseAccount(\f"+_Cbm(callback) ); }
	/*#app*/ this.DeleteFile = function( file ) { prompt( "#", "App.DeleteFile("+file); }
	/*#app*/ this.CopyFile = function( src,dest ) { prompt( "#", "App.CopyFile("+src+"\f"+dest); }
	/*#app*/ this.CopyFolder = function( src,dest,overwrite,filter ) { prompt( "#", "App.CopyFolder(\f"+src+"\f"+dest+"\f"+overwrite+"\f"+filter); }
	/*#app*/ this.DeleteFolder = function( fldr ) { prompt( "#", "App.DeleteFolder("+fldr); }
	/*#app*/ this.RenameFile = function( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); }
	/*#app*/ this.RenameFolder = function( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); }
	/*#app*/ this.ReplaceInFile = function( file,txt,rep,options ) { prompt( "#", "App.ReplaceInFile(\f"+file+"\f"+txt+"\f"+rep+"\f"+options); }
	/*#app*/ this.UnzipFile = function( src,dest,options ) { prompt( "#", "App.UnzipFile(\f"+src+"\f"+dest+"\f"+options); }
	/*#app*/ this.ZipFile = function( src,dest,options ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest+"\f"+options); }
	/*#app*/ this.ZipFolder = function( src,dest,options ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest+"\f"+options); }
	/*#app*/ this.GetFreeSpace = function( mode ) { return parseFloat(prompt( "#", "App.GetFreeSpace(\f"+mode)); }
	/*#app*/ this.GetFileDate = function( file ) { var d = parseInt(prompt( "#", "App.GetFileDate(\f"+file)); if( d ) return new Date(d); else return null; }
	/*#app*/ this.GetFileSize = function( file ) { return parseInt(prompt( "#", "App.GetFileSize(\f"+file)); }
	/*#app*/ this.GetThumbnail = function( src,dest,width,height ) { prompt( "#", "App.GetThumbnail(\f"+src+"\f"+dest+"\f"+width+"\f"+height); }
	/*#app*/ this.ScanFile = function( file ) { prompt( "#", "App.ScanFile(\f"+file); }
	/*#app*/ this.GetLastButton = function() { var ret = prompt( "#", "App.GetLastButton(" ); if( ret ) return (_map[ret]); else return null; }
	/*#app*/ this.GetLastToggle = function() { var ret = prompt( "#", "App.GetLastToggle(" ); if( ret ) return (_map[ret]); else return null; }
	/*#app*/ this.GetLastCheckBox = function() { var ret = prompt( "#", "App.GetLastCheckBox(" ); if( ret ) return (_map[ret]); else return null; }
	/*#app*/ this.GetLastImage = function() { var ret = prompt( "#", "App.GetLastImage(" ); if( ret ) return (_map[ret]); else return null; }
	/*#app*/ this.IsBluetoothOn = function() { return prompt( "#", "App.IsBluetoothOn(" )=="true"; }
	/*#app*/ this.IsScreenOn = function() { return prompt( "#", "App.IsScreenOn(" )=="true"; }
	/*#app*/ this.WakeUp = function() { prompt( "#", "App.WakeUp(" ); }
	/*#app*/ this.GoToSleep = function() { prompt( "#", "App.GoToSleep(" ); }
	/*#app*/ this.Unlock = function() { prompt( "#", "App.Unlock(" ); }
	/*#app*/ this.Lock = function() { prompt( "#", "App.Lock(" ); }
	/*#app*/ this.SetScreenBrightness = function( level ) { prompt( "#", "App.SetScreenBrightness(\f"+level); }
	/*#app*/ this.SetKioskMode = function( mode,enable,options,packages ) { prompt( "#", "App.SetKioskMode(\f"+mode+"\f"+enable+"\f"+options+"\f"+packages); }
	/*#app*/ this.PinScreen = function( enable ) { prompt( "#", "App.PinScreen(\f"+enable); }
	/*#app*/ this.GetMetadata = function( file,keys ) { return prompt( "#", "App.GetMetadata(\f"+file+"\f"+keys); }
	/*#app*/ this.SetAlarm = function( type,id,callback,time,interval,options ) { return prompt( "#", "App.SetAlarm(\f"+type+"\f"+id+"\f"+_Cbm(callback)+"\f"+time+"\f"+interval+"\f"+options); }
	/*#app*/ this.Call = function( number ) { prompt( "#", "App.Call(\f"+number ); }
	/*#app*/ this.SimulateTouch = function( obj,x,y,dir ) { prompt( "#", "App.SimulateTouch(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dir ); }
	/*#app*/ this.SimulateDrag = function( obj,x1,y1,x2,y2,step,pause ) { prompt( "#", "App.SimulateDrag(\f"+obj.id+"\f"+x1+"\f"+y1+"\f"+x2+"\f"+y2+"\f"+step+"\f"+pause ); }
	/*#app*/ this.SimulateScroll = function( obj,x,y,dx,dy,count,fling ) { prompt( "#", "App.SimulateScroll(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dx+"\f"+dy+"\f"+count+"\f"+fling ); }
	/*#app*/ this.SimulateKey = function( obj,keyName,modifiers,pause ) { prompt( "#", "App.SimulateKey(\f"+obj.id+"\f"+keyName+"\f"+modifiers+"\f"+pause ); }
	/*#app*/ this.GetJoystickState = function( id,key ) { return parseFloat(prompt( "#", "App.GetJoyState(\f"+id+"\f"+key)); }
	/*#app*/ this.GetJoystickStates = function( id ) { return eval(prompt( "#", "App.GetJoyStates(\f"+id)); }
	/*#app*/ this.GetJoystickName = function( id ) { return prompt( "#", "App.GetJoyName(\f"+id); }
	/*#app*/ this.SetJoystickOptions = function( options ) { prompt( "#", "App.SetJoystickOptions(\f"+options ); }
	/*#app*/ this.SetAutoBoot = function( auto ) { prompt( "#", "App.SetAutoBoot(\f"+auto); }
	this.SetAutoWifi = function( auto ) { prompt( "#", "App.SetAutoWifi(\f"+auto); }
	this.SetAutoStart = function( appName ) { prompt( "#", "App.SetAutoStart(\f"+appName); }
	/*#app*/ this.HttpRequest = function( type,baseUrl,path,params,callback,headers ) { prompt( "#", "App.HttpRequest(\f"+type+"\f"+baseUrl+"\f"+path+"\f"+params+"\f"+_Cbm(callback)+"\f"+headers); }
	/*#app*/ this.UploadFile = function( url,file,name,callback ) { prompt( "#", "App.UploadFile(\f"+url+"\f"+file+"\f"+name+"\f"+_Cbm(callback) ); }
	/*#app*/ this.SaveCookies = function() { prompt( "#", "App.SaveCookies(" ); }
	/*#app*/ this.ClearCookies = function() { prompt( "#", "App.ClearCookies(" ); }
	/*#app*/ this.SetUserAgent = function( agent,options ) { prompt( "#", "App.SetUserAgent(\f"+agent+"\f"+options ); }
    /*#app*/ this.SetUserCreds = function( name,password ) { prompt( "#", "App.SetUserCreds(\f"+name+"\f"+password ); }
    /*#app*/ this.QueryContent = function( uri,columns,select,args,sort ) { return eval(prompt( "#", "App.QueryContent(\f"+uri+"\f"+columns+"\f"+select+"\f"+args+"\f"+sort)); }
	/*#app*/ this.Uri2Path = function( uri,options ) { return prompt( "#", "App.Uri2Path(\f"+uri+"\f"+options); }
	/*#app*/ this.Path2Uri = function( path ) { return prompt( "#", "App.Path2Uri(\f"+path); }
	/*#app*/ this.RealPath = function( path ) { return prompt( "#", "App.RealPath(\f"+path); }
	/*#app*/ this.ScreenShot = function( fileName,quality ) { prompt( "#", "App.ScreenShot(\f"+fileName+"\f"+quality ); }
	/*#app*/ this.InstallWallpaper = function( packageName,className ) { prompt( "#", "App.InstallWallpaper\f"+packageName+"\f"+className ); }
	/*#app*/ this.GetTextBounds  = function( txt,size,width,obj ) { return eval(prompt( "#", "App.GetTextBounds(\f"+txt+"\f"+size+"\f"+width+"\f"+(obj?obj.id:null)) ); }
	/*#app*/ this.InstallApp = function( apkFile,callback,options ) { prompt( "#", "App.InstallApp(\f"+apkFile+"\f"+_Cbm(callback)+"\f"+options ); }
	/*#app*/ this.GetAccessibility = function() { return JSON.parse(prompt( "#", "App.GetAccessibility(" )); }
	/*#app*/ this.GetSpeechEngines = function() { return JSON.parse(prompt( "#", "App.GetSpeechEngines(" )); }

	//These objects auto-release when layout is destroyed.
	/*#app*/ this.CreateLayout = function( type,options ) { var ret = prompt( "#", "App.CreateLayout("+type+"\f"+options ); if( ret ) return new Lay(ret); else return null; }
	/*#app*/ this.CreateImage = function( file,width,height,options,w,h ) { var ret = prompt( "#", "App.CreateImage("+file+"\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h );  if( ret ) return new Img(ret); else return null; }
	/*#app*/ this.CreateCanvas = function( width,height,options,w,h ) { var ret = prompt( "#", "App.CreateCanvas(\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h );  if( ret ) return new Img(ret); else return null; }
	/*#app*/ this.AddImage = function( lay,file,width,height,options,w,h ) { var ret = prompt( (lay?lay.id:null), "App.AddImage("+file+"\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h );  if( ret ) return new Img(ret); else return null; }
	/*#app*/ this.AddCanvas = function( lay,width,height,options,w,h ) { var ret = prompt( (lay?lay.id:null), "App.AddCanvas(\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h );  if( ret ) return new Img(ret); else return null; }
	/*#app*/ this.CreateButton = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateButton("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Btn(ret); else return null;  }
	/*#app*/ this.AddButton = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddButton("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Btn(ret); else return null;  }
	/*#app*/ this.CreateToggle = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateToggle("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Tgl(ret); else return null;  }
	/*#app*/ this.AddToggle = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddToggle("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Tgl(ret); else return null;  }
	/*#app*/ this.CreateSwitch = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateSwitch("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Swi(ret); else return null;  }
	/*#app*/ this.AddSwitch = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddSwitch("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Swi(ret); else return null;  }
	/*#app*/ this.CreateCheckBox = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateCheckBox("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Chk(ret); else return null;  }
	/*#app*/ this.AddCheckBox = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddCheckBox("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Chk(ret); else return null;  }
	/*#app*/ this.CreateSpinner = function( list,width,height,options ) { var ret = prompt( "#", "App.CreateSpinner("+list+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Spn(ret); else return null; }
	/*#app*/ this.AddSpinner = function( lay,list,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddSpinner("+list+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Spn(ret); else return null; }
	/*#app*/ this.CreateSeekBar = function( width,height,options ) { var ret = prompt( "#", "App.CreateSeekBar("+width+"\f"+height+"\f"+options ); if( ret ) return new Skb(ret); else return null; }
	/*#app*/ this.AddSeekBar = function( lay,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddSeekBar("+width+"\f"+height+"\f"+options ); if( ret ) return new Skb(ret); else return null; }
	/*#app*/ this.CreateText = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateText("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txt(ret); else return null; }
	/*#app*/ this.AddText = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddText("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txt(ret); else return null; }
	/*#app*/ this.CreateTextEdit = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateTextEdit("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txe(ret); else return null; }
	/*#app*/ this.AddTextEdit = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddTextEdit("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txe(ret); else return null; }
	/*#app*/ this.CreateList = function( list,width,height,options,delim ) { var ret = prompt( "#", "App.CreateList(\f"+list+"\f"+width+"\f"+height+"\f"+options+"\f"+delim ); if( ret ) return new Lst(ret); else return null; }
	/*#app*/ this.AddList = function( lay,list,width,height,options,delim ) { var ret = prompt( (lay?lay.id:null), "App.AddList(\f"+list+"\f"+width+"\f"+height+"\f"+options+"\f"+delim ); if( ret ) return new Lst(ret); else return null; }
	/*#app*/ this.CreateWebView = function( width,height,options,zoom ) { var ret = prompt( "#", "App.CreateWeb(\f"+width+"\f"+height+"\f"+options+"\f"+zoom ); if( ret ) return new Web(ret); else return null; }
	/*#app*/ this.AddWebView = function( lay,width,height,options,zoom ) { var ret = prompt( (lay?lay.id:null), "App.AddWeb(\f"+width+"\f"+height+"\f"+options+"\f"+zoom ); if( ret ) return new Web(ret); else return null; }
	/*#app*/ this.CreateScroller = function( width,height,options ) { var ret = prompt( "#", "App.CreateScroller("+width+"\f"+height+"\f"+options ); if( ret ) return new Scr(ret); else return null; }
	/*#app*/ this.AddScroller = function( lay,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddScroller("+width+"\f"+height+"\f"+options ); if( ret ) return new Scr(ret); else return null; }
	/*#app*/ this.CreateCameraView = function( width,height,options ) { var ret = prompt( "#", "App.CreateCameraView("+width+"\f"+height+"\f"+options );  if( ret ) return new Cam(ret); else return null; }
	/*#app*/ this.AddCameraView = function( lay,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddCameraView("+width+"\f"+height+"\f"+options );  if( ret ) return new Cam(ret); else return null; }
	/*#app*/ this.CreateVideoView = function( width,height,options ) { var ret = prompt( "#", "App.CreateVideoView(\f"+width+"\f"+height+"\f"+options );  if( ret ) return new Vid(ret); else return null; }
	/*#app*/ this.AddVideoView = function( lay,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddVideoView(\f"+width+"\f"+height+"\f"+options );  if( ret ) return new Vid(ret); else return null; }
	/*#app*/ this.CreateCodeEdit = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateCodeEdit(\f"+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Cde(ret); else return null; }
	/*#app*/ this.AddCodeEdit = function( lay,text,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddCodeEdit(\f"+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Cde(ret); else return null; }
	/*#app*/ this.CreateAdView = function( unitId,testId,width,height,options ) { var ret = prompt( "#", "App.CreateAdView(\f"+unitId+"\f"+testId+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Adv(ret); else return null; }
	/*#app*/ this.AddAdView = function( lay,unitId,testId,width,height,options ) { var ret = prompt( (lay?lay.id:null), "App.AddAdView(\f"+unitId+"\f"+testId+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Adv(ret); else return null; }


	//These objects auto-release (ie. single instance)
	/*#app*/ this.CreateYesNoDialog = function( msg,options ) { if( _ynd ) _ynd.Release(); var ret = prompt( "#", "App.CreateYesNoDialog(\f"+msg+"\f"+options ); if( ret ) _ynd = new Ynd(ret); else _ynd = null; return _ynd; }
	/*#app*/ this.CreateListDialog = function( title,list,options ) { if( _ldg ) _ldg.Release(); var ret = prompt( "#", "App.CreateListDialog(\f"+title+"\f"+list+"\f"+options ); if( ret ) _ldg = new Ldg(ret); else _ldg = null; return _ldg; }
	/*#app*/ //this.CreateListView = function( list,title,options ) { if( _lvw ) _lvw.Release(); var ret = prompt( "#", "App.CreateListView(\f"+list+"\f"+title+"\f"+options ); if( ret ) _lvw = new Lvw(ret); else _lvw = null; return _lvw; }
	/*#app*/ this.CreateBluetoothList = function( filter ) { if( _btl ) _btl.Release(); var ret = prompt( "#", "App.CreateBluetoothList("+filter ); if( ret) _btl = new Btl(ret); else _btl = null; return _btl; }
	/*#app*/ this.CreateAudioRecorder = function() { if( _rec ) _rec.Release(); var ret = prompt( "#", "App.CreateAudioRecorder(" ); if( ret) _rec = new Rec(ret); else _rec = null; return _rec; }
	/*#app*/ this.CreateSMS = function() { if( _sms ) _sms.Release(); var ret = prompt( "#", "App.CreateSMS(" ); if( ret) _sms = new SMS(ret); else _sms = null; return _sms; }
	/*#app*/ this.CreateEmail = function( account,password ) { if( _eml ) _eml.Release(); var ret = prompt( "#", "App.CreateEmail("+account+"\f"+password ); if( ret) _eml = new EMAIL(ret); else _eml = null; return _eml; }
	/*#app*/ this.CreateSmartWatch = function( type ) { if( _smw ) _smw.Release(); var ret = prompt( "#", "App.CreateSmartWatch(\f"+type ); if( ret) _smw = new SMW(ret); else _smw = null; return _smw; }
	/*#app*/ this.CreateCrypt = function( options ) { if( _crp ) _crp.Release(); var ret = prompt( "#", "App.CreateCrypt(\f"+options ); if( ret) _crp = new Crp(ret); else _crp = null; return _crp; }
	/*#app*/ this.CreateSpeechRec = function( options ) { if( _spr ) _spr.Release(); var ret = prompt( "#", "App.CreateSpeechRec(\f"+options ); if( ret) _spr = new Spr(ret); else _spr = null; return _spr; }
	/*#app*/ this.CreatePhoneState = function( types ) { if( _pst ) _pst.Release(); var ret = prompt( "#", "App.CreatePhoneState(\f"+types ); if( ret) _pst = new Pst(ret); else _pst = null; return _pst; }
	/*#app*/ this.CreateWallpaper = function( options ) { if( _wpr ) _wpr.Release(); var ret = prompt( "#", "App.CreateWallpaper(\f"+options ); if( ret) _wpr = new Wpr(ret); else _wpr = null; return _wpr; }

	//These objects need releasing manually.
	/*#app*/ this.CreateTheme = function( baseTheme ) { var ret = prompt( "#", "App.CreateTheme(\f"+baseTheme ); if( ret ) return new Thm(ret); else return null;  }
	/*#app*/ this.CreateDialog = function( title,options ) { var ret = prompt( "#", "App.CreateDialog(\f"+title+"\f"+options ); if( ret ) return new Dlg(ret); else return null; }
	/*#app*/ this.CreateOverlay = function( options ) { var ret = prompt( "#", "App.CreateOverlay(\f"+options ); if( ret ) return new Ovl(ret); else return null; }
	/*#app*/ this.CreateMediaPlayer = function() { var ret = prompt( "#", "App.CreateMediaPlayer(" ); if( ret ) return new Aud(ret); else return null; }
	/*#app*/ this.CreateSensor = function( type,options ) { var ret = prompt( "#", "App.CreateSensor("+type+"\f"+options ); if( ret ) return new Sns(ret); else return null; }
	/*#app*/ this.CreateLocator = function( type,options ) { var ret = prompt( "#", "App.CreateLocator("+type+"\f"+options ); if( ret ) return new Loc(ret); else return null; }
	/*#app*/ this.CreateNetClient = function( type ) { var ret = prompt( "#", "App.CreateNetClient("+type ); if( ret ) return new Net(ret); else return null; }
	/*#app*/ this.CreateNxtRemote = function() { var ret = prompt( "#", "App.CreateNxtRemote(" ); if( ret ) return new Nxt(ret,null); else return null; }
	/*#app*/ this.CreateWebServer = function( port,options ) { var ret = prompt( "#", "App.CreateWebServer("+port+"\f"+options ); if( ret ) return new Wbs(ret); else return null; }
	/*#app*/ this.CreateUSBSerial = function( baudRate,dataBits,stopBits,parity,device ) { var ret = prompt( "#", "App.CreateUSBSerial(\f"+baudRate+"\f"+dataBits+"\f"+stopBits+"\f"+parity+"\f"+device ); if( ret ) return new Usb(ret); else return null; }
	/*#app*/ this.CreateSysProc = function( cmd,env,dir,options ) { var ret = prompt( "#", "App.CreateSysProc(\f"+cmd+"\f"+env+"\f"+dir+"\f"+options ); if( ret ) return new Sys(ret); else return null; }
	/*#app*/ this.CreateService = function( packageName,className,callback,options ) { var ret = prompt( "#", "App.CreateService(\f"+packageName+"\f"+className+"\f"+options+"\f"+_Cbm(callback) ); if( ret ) return new Svc(ret); else return null; }
	/*#app*/ this.CreateSynth = function( type ) { var ret = prompt( "#", "App.CreateSynth("+type ); if( ret ) return new Syn(ret); else return null; }
	/*#app*/ this.CreateBluetoothSerial = function( mode ) { var ret = prompt( "#", "App.CreateBluetoothSerial(\f"+mode ); if( ret ) return new Bts(ret); else return null; }
	/*#app*/ this.CreateZipUtil = function( mode ) { var ret = prompt( "#", "App.CreateZipUtil(\f"+mode ); if( ret ) return new Zip(ret); else return null; }
	/*#app*/ this.CreateDownloader = function( options ) { var ret = prompt( "#", "App.CreateDownloader(\f"+options ); if( ret ) return new Dwn(ret); else return null; }
	/*#app*/ this.CreateMediaStore = function() { var ret = prompt( "#", "App.CreateMediaStore(" ); if( ret ) return new Med(ret); else return null; }
	/*#app*/ this.CreatePlayStore = function() { var ret = prompt( "#", "App.CreatePlayStore(" ); if( ret ) return new Ply(ret); else return null; }
	/*#app*/ this.CreateNotification = function( options ) { var ret = prompt( "#", "App.CreateNotification(\f"+options ); if( ret ) return new Not(ret); else return null; }
	/*#app*/ this.CreateFile = function( file,mode ) { var ret = prompt( "#", "App.CreateFile(\f"+file+"\f"+mode ); if( ret ) return new Fil(ret); else return null; }

	//----- Special methods ---------------------

	this.Start = function() {
	    if(typeof OnStart=='function') {
	        _dbg = app.GetDebug(); OnStart(); prompt("#","_Start"); _started=true;
	    }
	}

	/*#app*/ this.CreateObject = function( name, type ) {
		if( !type ) try { return eval( "new "+name+"()" ); } catch(e) { return null; }
		else { var ret = prompt( "#", "_Obj(\f"+type+"\f"+name ); if( ret ) return new SObj(ret); else return null; }
	}

    /*#app*/ this.Func = function( name, args ) {
        for( var a in arguments )
            if( typeof arguments[a]=='function' ) arguments[a] = _Cbm(arguments[a])
        app.Execute( "_OnFunc('"+btoa2(JSON.stringify(Array.from(arguments)))+"')", function(){} )
    }

	/*#app*/ this.GA = function( cmd )
	{
	    var dbg = _dbg; _UseDbg( false );
		try {
			if( app.FileExists("/Sys/ga.js") )
			{
				if( cmd.toLowerCase()=='create' ) {
					_LoadScriptSync( "/Sys/ga.js" );
					window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
					ga('create', arguments[1], {'storage':'none', 'clientId':app.GetDeviceId()});
					ga('set', { checkProtocolTask: null, checkStorageTask: null });
				}
				else ga.apply( this, arguments );
			}
		}
		catch(e) {}
		finally{  _UseDbg( dbg ) }
	}

	var _anim_t = 0;
	function _animatev8() {if(_cbAnimate) {var t=new Date().getTime(); _cbAnimate(t,t-_anim_t); _anim_t=t;}}
	function _animate() {if(_cbAnimate) {var t=new Date().getTime(); _cbAnimate(t,t-_anim_t); _anim_t=t; requestAnimationFrame(_animate);}}
	/*#app*/ this.Animate = function( callback,fps )
	{
		_cbAnimate = callback;
		_anim_t = new Date().getTime();
		if( _isV8 ) {
			_fps=(fps?fps:30);
			if( _cbAnimate ) _tmAnimate = setInterval( _animatev8, 1000/_fps );
			else if( _tmAnimate ) clearInterval( _tmAnimate );
		}
		else {
			window._fps=(fps?fps:30);
			requestAnimationFrame(_animate);
		}
	}

	/*#app*/ this.GetAppLanguages = function() { return _languages.langs; }

	/*#app*/ this.GetAppLangCode = function(name) {
		if( name ) return _languages.codes[name.toLowerCase()];
		else return _curLang;
	}

	/*#app*/ this.SetAppLanguage = function( name )
	{
		var file = _GetMain().includes("/assets/samples/") ? "/assets/lang.json" : "lang.json";
		var json = app.ReadFile( file )
		_languages = JSON.parse(json);
		_curLang = _languages.codes[name.toLowerCase()];
	}

	//Helper classes.
	/*#app*/ this.CreateNxt = function() { var nxtHelp = new _NxtHelp(); return nxtHelp.nxt_CreateNxt(); }
	/*#app*/ this.CreateTabs = function( list,width,height,options ) { return new _Tabs( list,width,height,options ); }
	/*#app*/ this.CreateWebSocket = function( address,id,retry,options ) { return new _WebSock( address,id,retry,options ); }
	/*#app*/ this.CreateWizard = function( title,width,height,callback,options ) { return new _Wizard( title,width,height,callback,options ) }
	/*#app*/ this.CreateGame = function( file,orient ) { return new _Game( file,orient ) }

	//Externally defined methods.
	/*#app*/ this.ShowTextDialog = function( title,deflt,callback ) { _ShowTextDialog( title,deflt,callback ) }
	/*#app*/ this.ShowCheckList = function( title,list,callback,width,height,options ) { return new _CheckList( title,list,callback,width,height,options ); }
	/*#app*/ this.ShowTip = function( msg,left,top,timeOut,options ) { _ShowTip( msg,left,top,timeOut,options ) }
	/*#app*/ this.PlaySound = function( file ) { _PlaySound( file ) }
	/*#app*/ this.ChooseWifi = function( title1,title2,callback,options,extra ) { var wifi = new _WifiScan( title1,title2,callback,options,extra ); wifi.Select(); }

	//Internal plugins.
	/*#app*/ this.CreateMusic = function() { _LoadScriptSync( "/Sys/plugs/Music/Music.inc" ); return new Music() }
	/*#app*/ this.CreateCloudStore = function( key,server ) { _LoadScriptSync( "/Sys/cloud.js" ); return new CloudStore(key,server) }
	/*#app*/ this.CreateCustomTabs = function() { _LoadPlugin("CustomTabs"); return new CustomTabsWrapperClass() }
	/*#app*/ this.CreateNode = function(paths,options) { _LoadPlugin("Node"); return new Node(paths,options) }

	//Hybrid objects.
	/*#app*/ this.CreateGameView = function( width,height,options )
	{
		if( options ) options = options.toLowerCase(); else options = "";
	    if( options.indexOf("gles")>-1 ) {
			var obj = prompt( "#", "App.CreateGameView(\f"+width+"\f"+height+"\f"+options );
			if( obj ) return new WGL(obj); else return null;
		}
		else {
			var obj = app.CreateWebView( width,height,"gameview"+options );
			obj.GetType = function() { return "GameView"; }
			obj.SetFrameRate = function( fps ) { }
			obj.SetFile = function( file ) { obj.LoadHtml( _WglTemplate(file),"" ) }
			return obj;
		}
	}

	/*#app*/ this.CreateGLView = function( width,height,options )
	{
	    var glv = null;
	    if( options.toLowerCase().indexOf("fast2d") > -1 )
	    {
			_LoadScriptSync( "/Sys/cp.js" );
    		_LoadScriptSync( "/Sys/gl.js" );
    		glv = new GLV( prompt( "#", "App.CreateGLView(\f"+width+"\f"+height+"\f"+options ));
    		glv.canvas = FastCanvas.create();
    		glv.ctx = glv.canvas.getContext("2d");
    		glv.width = Math.round(app.GetDisplayWidth()*width);
    		glv.height = Math.round(app.GetDisplayHeight()*height);
    		glv.aspect = glv.width / glv.height;
    		glv.GetType = function() { return "GLView"; }
	    }
		return glv;
	}

	/*#app*/ this.OpenDatabase = function( name )
	{
		_LoadScriptSync( "/Sys/cp.js" );
		_LoadScriptSync( "/Sys/sql.js" );
		_CreateCP( "sqliteplugin" );

		name = app.RealPath( name )
		var db = sqlitePlugin.openDatabase( name );
		db.name = name;

	    db.GetType = function() { return "Database"; }
	    db.GetName = function() { return db.name; }
		db.ExecuteSql = function( sql, params, success, error )
		{
		    console.log( "SQL: " + sql )
			if( !success ) success = null;
			if( !error ) error = _Err;

			db.transaction( function(tx) {
				tx.executeSql( sql, params,
					function(tx,res) { if(success) success.apply(db,[res]) },
					function(t,e) { error.apply(db,[e.message]); }
				); }, error
			);
		}
		db.Close = function() { db.close( _Log, _Err ); }
		db.Delete = function() { sqlitePlugin.deleteDatabase(db.name,_Log,_Err); }
		return db;
	}
}

SObj = function( id, typeId )
{
	_map[id] = this;
	var self = this;
	self.id = id;
	self.typeId = typeId;
	self.data = {};
	self.Batch = function( args ) { _Batch( self, args ) }
	self.Destroy  = function() { prompt( this.id, "SObj.Release(" ); _map[this.id] = null; }
    self.Release  = function() { prompt( this.id, "SObj.Release(" ); _map[this.id] = null; }
    self.Method  = function(name,types,p1,p2,p3,p4) { return prompt( this.id, "SObj.Method(\f"+name+"\f"+types+"\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4 );  }
}

Obj = function( id, typeId )
{
	_map[id] = this;
	var self = this;
	this.id = id;
	this.typeId = typeId;
	this.data = {};
	this._left = 0; this._top = 0; this._parent = null;

	self.Batch = function( args ) { _Batch( self, args ) }
	self.Destroy  = function() { prompt( self.id, "Obj.Release(" ); _map[self.id] = null; }
    self.Release  = function() { prompt( self.id, "Obj.Release(" ); _map[self.id] = null; }
    /*#obj*/ self.GetParent = function() { return self._parent; }
    /*#obj*/ self.Method  = function(name,types,p1,p2,p3,p4) { return prompt( self.id, "Obj.Method(\f"+name+"\f"+types+"\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4 );  }
    /*#obj*/ self.SetVisibility  = function( mode ) { prompt( self.id, "Obj.SetVisibility("+mode ); }
    /*#obj*/ self.GetVisibility  = function() { return prompt( self.id, "Obj.GetVisibility(" ); }
    /*#obj*/ self.Hide  = function() { prompt( self.id, "Obj.SetVisibility(Hide" ); }
    /*#obj*/ self.Gone  = function() { prompt( self.id, "Obj.SetVisibility(Gone" ); }
    /*#obj*/ self.Show  = function() { prompt( self.id, "Obj.SetVisibility(Show" ); }
    /*#obj*/ self.IsVisible  = function() { return prompt( self.id, "Obj.GetVisibility(" )=="Show"; }
    /*#obj*/ self.IsEnabled  = function() { return prompt( self.id, "Obj.IsEnabled(" )=="true"; }
    /*#obj*/ self.SetEnabled  = function( enable ) { prompt( self.id, "Obj.SetEnabled(\f"+enable ); }
    /*#obj*/ self.SetPadding  = function( left,top,right,bottom,mode ) { prompt( self.id, "Obj.SetPadding(\f"+left+"\f"+top+"\f"+right+"\f"+bottom+"\f"+mode ); }
    /*#obj*/ self.SetMargins  = function( left,top,right,bottom,mode ) { prompt( self.id, "Obj.SetMargins(\f"+left+"\f"+top+"\f"+right+"\f"+bottom+"\f"+mode ); }
    /*#obj*/ self.SetBackground  = function( file,options ) { prompt( self.id, "Obj.SetBackground("+file+"\f"+options ); }
    /*#obj*/ self.SetBackAlpha  = function( alpha ) { prompt( self.id, "Obj.SetBackAlpha(\f"+alpha ); }
    /*#obj*/ self.SetBackColor  = function( clr ) { prompt( self.id, "Obj.SetBackColor(\f"+clr ); }
    /*#obj*/ self.SetBackGradient  = function( colour1,colour2,colour3,options ) { prompt( self.id, "Obj.SetBackGradient(Linear\f"+colour1+"\f"+colour2+"\f"+colour3+"\f"+options+"\f"+null+"\f"+null+"\f"+null ); }
    /*#obj*/ self.SetBackGradientRadial  = function( x,y,radius,colour1,colour2,colour3,options ) { prompt( self.id, "Obj.SetBackGradient(Radial\f"+x+"\f"+y+"\f"+radius+"\f"+colour1+"\f"+colour2+"\f"+colour3+"\f"+options ); }
    /*#obj*/ self.SetColorFilter  = function( clr,mode ) { prompt( self.id, "Obj.SetColorFilter(\f"+clr+"\f"+mode ); }
    /*#obj*/ self.AdjustColor  = function( hue,sat,bright,cont ) { prompt( self.id, "Obj.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    /*#obj*/ self.SetPosition  = function( left,top,width,height,options ) { prompt( self.id, "Obj.SetPosition(\f"+left+"\f"+top+"\f"+width+"\f"+height+"\f"+options ); self._left = left; self._top = top;}
    /*#obj*/ self.SetSize  = function( width,height,options ) { prompt( self.id, "Obj.SetSize(\f"+width+"\f"+height+"\f"+options ); }
    /*#obj*/ self.Resize  = function() { prompt( self.id, "Obj.Resize(\f"); }
    /*#obj*/ self.GetWidth  = function( options ) { return parseFloat(prompt( self.id, "Obj.GetWidth(\f"+options )); }
    /*#obj*/ self.GetHeight  = function( options ) { return parseFloat(prompt( self.id, "Obj.GetHeight(\f"+options )); }
    /*#obj*/ self.GetAbsWidth  = function() { return parseInt(prompt( self.id, "Obj.GetAbsWidth(" )); }
    /*#obj*/ self.GetAbsHeight  = function() { return parseInt(prompt( self.id, "Obj.GetAbsHeight(" )); }
    /*#obj*/ self.GetLeft  = function( options ) { return parseFloat(prompt( self.id, "Obj.GetLeft(\f"+options )); }
    /*#obj*/ self.GetTop  = function( options ) { return parseFloat(prompt( self.id, "Obj.GetTop(\f"+options )); }
    /*#obj*/ self.GetPosition  = function( options ) { return eval(prompt( self.id, "Obj.GetPosition(\f"+options )); }
    /*#obj*/ self.SetScale  = function( x,y ) { prompt(self.id,"Obj.SetScale(\f"+x+"\f"+y); }
    /*#obj*/ self.Focus  = function() { prompt(self.id,"Obj.Focus(\f"); }
    /*#obj*/ self.ClearFocus  = function() { prompt(self.id,"Obj.ClearFocus(\f"); }
    /*#obj*/ self.Tween = function( target,duration,type,repeat,yoyo,callback ) { _Tween.apply( this, [target,duration,type,repeat,yoyo,callback] ); }
    /*#obj*/ self.Animate = function( type,callback,time ) { prompt( self.id, "Obj.Animate(\f"+type+"\f"+_Cbm(callback)+"\f"+time ); }
    /*#obj*/ self.SetDescription  = function( text ) { prompt( self.id, "Obj.SetDescription(\f"+text ); }
}

function Thm( id )
{
    var obj = new SObj( id, "Thm" );
    /*#thm*/ obj.GetType = function() { return "Theme"; }
    /*#thm*/ obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Thm.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    /*#thm*/ obj.SetBackColor = function( clr ) { prompt( obj.id, "Thm.SetBackColor(\f"+clr ); }
    /*#thm*/ obj.SetBackground = function( file,options ) { prompt( obj.id, "Thm.SetBackground(\f"+file+"\f"+options ); }
    /*#thm*/ obj.SetTextColor = function( clr1, clr2 ) { prompt( obj.id, "Thm.SetTextColor(\f"+clr1+"\f"+clr2 ); }
    /*#thm*/ obj.SetBtnTextColor = function( clr ) { prompt( obj.id, "Thm.SetBtnTextColor(\f"+clr ); }
    /*#thm*/ obj.SetButtonOptions = function( options ) { prompt( obj.id, "Thm.SetButtonOptions(\f"+options ); }
    /*#thm*/ obj.SetButtonPadding = function( left,top,right,bottom,mode ) { prompt( obj.id, "Thm.SetButtonPadding(\f"+left+"\f"+top+"\f"+right+"\f"+bottom+"\f"+mode ); }
    /*#thm*/ obj.SetButtonStyle = function( clr1,clr2,radius,strokeClr,strokeWidth,shadow,checkClr ) { prompt( obj.id, "Thm.SetButtonStyle(\f"+clr1+"\f"+clr2+"\f"+radius+"\f"+strokeClr+"\f"+strokeWidth+"\f"+shadow+"\f"+checkClr ); }
    /*#thm*/ obj.SetCheckBoxOptions = function( options ) { prompt( obj.id, "Thm.SetCheckBoxOptions(\f"+options ); }
    /*#thm*/ obj.SetTextEditOptions = function( options ) { prompt( obj.id, "Thm.SetTextEditOptions(\f"+options ); }
    /*#thm*/ obj.SetProgressOptions = function( options ) { prompt( obj.id, "Thm.SetProgressOptions(\f"+options ); }
    /*#thm*/ obj.SetProgressBarOptions = function( options ) { prompt( obj.id, "Thm.SetProgressBarOptions(\f"+options ); }
    /*#thm*/ obj.SetProgressBackColor = function( clr ) { prompt( obj.id, "Thm.SetProgressBackColor(\f"+clr ); }
    /*#thm*/ obj.SetProgressTextColor = function( clr ) { prompt( obj.id, "Thm.SetProgressTextColor(\f"+clr ); }
    /*#thm*/ obj.SetTitleHeight = function( height,options ) { prompt( obj.id, "Thm.SetTitleHeight(\f"+height+"\f"+options ); }
    /*#thm*/ obj.SetTitleColor = function( clr ) { prompt( obj.id, "Thm.SetTitleColor(\f"+clr ); }
    /*#thm*/ obj.SetTitleTextSize = function( height,options ) { prompt( obj.id, "Thm.SetTitleTextSize(\f"+height+"\f"+options ); }
    /*#thm*/ obj.SetTitleDividerColor = function( clr ) { prompt( obj.id, "Thm.SetTitleDividerColor(\f"+clr ); }
    /*#thm*/ obj.SetTitleDividerHeight = function( height,options ) { prompt( obj.id, "Thm.SetTitleDividerHeight(\f"+height+"\f"+options ); }
    /*#thm*/ obj.SetDialogColor = function( clr ) { prompt( obj.id, "Thm.SetDialogColor(\f"+clr ); }
    /*#thm*/ obj.SetDialogCornerRadius = function( radius ) { prompt( obj.id, "Thm.SetDialogCornerRadius(\f"+radius ); }
    /*#thm*/ obj.SetDialogBtnColor = function( clr ) { prompt( obj.id, "Thm.SetDialogBtnColor(\f"+clr ); }
    /*#thm*/ obj.SetDialogBtnTxtColor = function( clr ) { prompt( obj.id, "Thm.SetDialogBtnTxtColor(\f"+clr ); }
    /*#thm*/ obj.SetDimBehind = function( dim ) { prompt( obj.id, "Thm.SetDimBehind(\f"+dim ); }
    /*#thm*/ obj.SetListDividerColor = function( clr ) { prompt( obj.id, "Thm.SetListDividerColor(\f"+clr ); }
    /*#thm*/ obj.SetHighlightColor = function( clr ) { prompt( obj.id, "Thm.SetHighlightColor(\f"+clr ); }
	return obj;
}

function Lay( id )
{
	var obj = new Obj( id, "Lay" );
	/*#lay*/ obj.GetType = function() { return "Layout"; }
    /*#lay*/ obj.SetOrientation = function( orient ) { prompt( obj.id, "Lay.SetOrientation(\f"+orient ); }
    /*#lay*/ obj.SetGravity = function( gravity ) { prompt( obj.id, "Lay.SetGravity(\f"+gravity ); }
    /*#lay*/ obj.AddChild = function( child,order ) { prompt( obj.id, "Lay.AddChild(\f"+(child?child.id:null)+"\f"+order ); if(child) child._parent = this; }
    /*#lay*/ obj.RemoveChild = function( child ) { prompt( obj.id, "Lay.RemoveChild("+(child?child.id:null) ); if(child) child._parent = null; }
    /*#lay*/ obj.DestroyChild = function( child ) { prompt( obj.id, "Lay.DestroyChild("+(child?child.id:null) ); if(child) child._parent = null; }
    /*#lay*/ obj.ChildToFront = function( child ) { prompt( obj.id, "Lay.ChildToFront("+(child?child.id:null) ); }
    /*#lay*/ obj.GetChildOrder = function( child ) { return parseInt(prompt( obj.id, "Lay.GetChildOrder(\f"+(child?child.id:null) )); }
    /*#lay*/ obj.Animate = function( type,callback,time ) { prompt( obj.id, "Lay.Animate(\f"+type+"\f"+_Cbm(callback)+"\f"+time ); }
    /*#lay*/ obj.SetCornerRadius = function( radius ) { prompt( obj.id, "Lay.SetCornerRadius(\f"+radius ); }
    /*#lay*/ obj.SetElevation = function( elevation ) { prompt( obj.id, "Lay.SetElevation(\f"+elevation ); }
    /*#lay*/ obj.SetBackColor = function( clr ) { prompt( obj.id, "Lay.SetBackColor(\f"+clr ); }
    /*#lay*/ obj.SetTouchable = function( touchable ) { prompt( obj.id, "Lay.SetTouchable(\f"+touchable ); }
    /*#lay*/ obj.SetTouchThrough = function( through ) { prompt( obj.id, "Lay.SetTouchThrough(\f"+through ); }
    /*#lay*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Lay.SetOnTouch(\f"+_Cbm(callback) ); }
    /*#lay*/ obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "Lay.SetOnTouchUp(\f"+_Cbm(callback) ); }
    /*#lay*/ obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "Lay.SetOnTouchMove(\f"+_Cbm(callback) ); }
    /*#lay*/ obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "Lay.SetOnTouchDown(\f"+_Cbm(callback) ); }
    /*#lay*/ obj.SetOnLongTouch = function( callback ) { prompt( obj.id, "Lay.SetOnLongTouch(\f"+_Cbm(callback) ); }
    /*#lay*/ obj.SetOnChildChange = function( callback ) { prompt( obj.id, "Lay.SetOnChildChange(\f"+_Cbm(callback) ); }
    /*#lay*/ obj.SetChildMargins  = function( left,top,right,bottom,mode ) { prompt( obj.id, "Lay.SetChildMargins(\f"+left+"\f"+top+"\f"+right+"\f"+bottom+"\f"+mode ); }
	/*#lay*/ obj.SetChildTextSize  = function( size,mode ) { prompt( obj.id, "Lay.SetChildTextSize(\f"+size+"\f"+mode ); }
    return obj;
}

function Img( id )
{
    var obj = new Obj( id, "Img" );
    obj._auto = true; obj._gfb = "";
    /*#img*/ obj.GetType = function() { return "Image"; }
    /*#img*/ obj.Clear = function() { if( obj._auto ) prompt( obj.id, "Img.Clear(" ); else { this.Draw("c"); } }
    /*#img*/ obj.Update = function() { if( obj._auto ) prompt( obj.id, "Img.Update(" ); else { prompt( obj.id, "Img.Batch("+obj._gfb ); obj._gfb = ""; } }
    /*#img*/ obj.SetAutoUpdate = function( onoff ) { obj._auto=onoff; prompt( obj.id, "Img.SetAutoUpdate(\f"+onoff ); }
    /*#img*/ obj.SetPixelMode = function( onoff ) { prompt( obj.id, "Img.SetPixelMode(\f"+onoff ); }
    obj.SetName = function( name ) { prompt( obj.id, "Img.SetName(\f"+name ); }
    obj.GetName = function() { return prompt( obj.id, "Img.GetName(" ); }
    /*#img*/ obj.SetImage = function( image,width,height,options ) {
		if( typeof image=="string" ) prompt( obj.id, "Img.LoadImage(\f"+image+"\f"+width+"\f"+height+"\f"+options );
		else prompt( obj.id, "Img.CopyImage(\f"+(image?image.id:null)+"\f"+width+"\f"+height+"\f"+options );
	}
	/*#img*/ obj.GetPixelData = function( format,left,top,width,height ) { return prompt( obj.id, "Img.GetPixelData(\f"+format+"\f"+left+"\f"+top+"\f"+width+"\f"+height ); }
	/*#img*/ obj.SetPixelData = function( data,width,height,options ) { return prompt( obj.id, "Img.SetPixelData(\f"+data+"\f"+width+"\f"+height+"\f"+options ); }
    /*#img*/ obj.GetPixelColor = function( x,y ) { return eval(prompt( obj.id, "Img.GetPixelColor(\f"+x+"\f"+y )); }
    /*#img*/ obj.SetSize = function( width,height,options ) { prompt( obj.id, "Img.SetSize(\f"+width+"\f"+height+"\f"+options ); }
    /*#img*/ obj.GetHeight = function() { return parseFloat(prompt( obj.id, "Img.GetHeight(" )); }
    /*#img*/ obj.GetWidth = function() { return parseFloat(prompt( obj.id, "Img.GetWidth(" )); }
    /*#img*/ obj.GetAbsHeight = function() { return parseFloat(prompt( obj.id, "Img.GetAbsHeight(" )); }
    /*#img*/ obj.GetAbsWidth = function() { return parseFloat(prompt( obj.id, "Img.GetAbsWidth(" )); }
    /*#img*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Img.SetOnTouch(\f"+_Cbm(callback) ); }
    /*#img*/ obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "Img.SetOnTouchUp(\f"+_Cbm(callback) ); }
    /*#img*/ obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "Img.SetOnTouchMove(\f"+_Cbm(callback) ); }
    /*#img*/ obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "Img.SetOnTouchDown(\f"+_Cbm(callback) ); }
    /*#img*/ obj.SetOnLongTouch = function( callback ) { prompt( obj.id, "Img.SetOnLongTouch(\f"+_Cbm(callback) ); }
    /*#img*/ obj.SetOnLoad = function( callback ) { prompt( obj.id, "Img.SetOnLoad(\f"+_Cbm(callback) ); }
    /*#img*/ obj.SetTouchable = function( touchable ) { prompt( obj.id, "Img.SetTouchable(\f"+touchable ); }
    /*#img*/ obj.SetMaxRate = function( ms ) { prompt( obj.id, "Img.SetMaxRate(\f"+ms ); }
    /*#img*/ obj.SetColorFilter = function( clr,mode ) { prompt( obj.id, "Img.SetColorFilter(\f"+clr+"\f"+mode ); }
    /*#img*/ obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Img.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    /*#img*/ obj.MeasureText = function( txt ) { return eval(prompt( obj.id, "Img.MeasureText(\f"+txt)); }
    /*#img*/ obj.DrawImage = function( image,x,y,w,h,angle,mode ) {
		if( obj._auto ) prompt( obj.id, "Img.DrawImage\f"+(image?image.id:null)+"\f"+x+"\f"+y+"\f"+w+"\f"+h+"\f"+angle+"\f"+mode );
		else this.Draw( "i", (image?image.id:null), x,y,(w?w:-1),(h?h:-1),angle,mode ); }
	/*#img*/ obj.DrawImageMtx = function( image,matrix ) {
		if( obj._auto ) prompt( obj.id, "Img.DrawImageMtx\f"+(image?image.id:null)+"\f"+matrix );
		else this.Draw( "m", (image?image.id:null), matrix ); }
    /*#img*/ obj.DrawPoint = function( x,y ) {
		if( obj._auto ) prompt( obj.id, "Img.DrawPoint("+x+"\f"+y ); else this.Draw( "p", null, x,y ); }
    /*#img*/ obj.DrawCircle = function( x,y,radius ) {
		if( obj._auto ) prompt( obj.id, "Img.DrawCircle("+x+"\f"+y+"\f"+radius );
		else this.Draw( "e", null, x,y,radius ); }
    /*#img*/ obj.DrawArc = function( x1,y1,x2,y2,start,sweep ) {
		if( obj._auto ) prompt( obj.id, "Img.DrawArc("+x1+"\f"+y1+"\f"+x2+"\f"+y2+"\f"+start+"\f"+sweep );
		else this.Draw( "a", null, x1,y1,x2,y2,start,sweep ); }
    /*#img*/ obj.DrawLine = function( x1,y1,x2,y2 ) {
		if( obj._auto ) prompt( obj.id, "Img.DrawLine("+x1+"\f"+y1+"\f"+x2+"\f"+y2 );
		else this.Draw( "l", null, x1,y1,x2,y2 ); }
    /*#img*/ obj.DrawRectangle = function( x1,y1,x2,y2 ) {
		if( obj._auto ) prompt( obj.id, "Img.DrawRect("+x1+"\f"+y1+"\f"+x2+"\f"+y2 );
		else this.Draw( "r", null, x1,y1,x2,y2 ); }
    /*#img*/ obj.DrawText = function( txt,x,y ) {
		if( obj._auto ) prompt( obj.id, "Img.DrawText("+txt+"\f"+x+"\f"+y );
		else this.Draw( "t", txt, x, y, 0,0,0 ); }
	/*#img*/ obj.DrawSamples = function( data,range ) {
		if( obj._auto ) prompt( obj.id, "Img.DrawSamples(\f"+data+"\f"+range );
		else this.Draw( "g", data, range, 0,0,0,0 ); }
	/*#img*/ obj.SetAlpha = function( alpha ) { if( obj._auto ) prompt( obj.id, "Img.SetAlpha(\f"+alpha ); else this.Draw( "k",null,alpha ); }
    /*#img*/ obj.SetColor = function( clr ) { if( obj._auto ) prompt( obj.id, "Img.SetColor(\f"+clr ); else this.Draw( "o", clr ); }
    /*#img*/ obj.SetTextSize = function( size ) { if( obj._auto ) prompt( obj.id, "Img.SetTextSize(\f"+size ); else this.Draw( "x",null,size ); }
    /*#img*/ obj.SetFontFile = function( file ) { if( obj._auto ) prompt( obj.id, "Img.SetFontFile(\f"+file ); else this.Draw( "f",file ); }
    /*#img*/ obj.SetLineWidth = function( width ) { if( obj._auto ) prompt( obj.id, "Img.SetLineWidth(\f"+width ); else this.Draw( "w",null,width ); }
    /*#img*/ obj.SetPaintColor = function( clr ) { if( obj._auto ) prompt( obj.id, "Img.SetPaintColor(\f"+clr ); else this.Draw( "n",clr ); }
    /*#img*/ obj.SetPaintStyle = function( style ) { if( obj._auto ) prompt( obj.id, "Img.SetPaintStyle(\f"+style ); else this.Draw( "s",style ); }
    /*#img*/ obj.Rotate = function( angle,pivX,pivY ) { prompt( obj.id, "Img.Rotate("+angle+"\f"+pivX+"\f"+pivY ); }
    /*#img*/ obj.Move = function( x,y ) { prompt( obj.id, "Img.Move("+x+"\f"+y ); }
    /*#img*/ obj.Scale = function( x,y ) { prompt( obj.id, "Img.Scale("+x+"\f"+y ); }
    /*#img*/ obj.Skew = function( x,y ) { prompt( obj.id, "Img.Skew("+x+"\f"+y ); }
    /*#img*/ obj.Transform = function( matrix ) { prompt( obj.id, "Img.Transform(\f"+matrix ); }
    /*#img*/ obj.Reset = function() { prompt( obj.id, "Img.Reset(" ); }
    /*#img*/ obj.Flatten = function() { prompt( obj.id, "Img.Flatten(" ); }
    /*#img*/ obj.Save = function( fileName,quality ) { prompt( obj.id, "Img.Save\f"+fileName+"\f"+quality ); }
    /*#img*/ obj.DrawFrame = function( ms ) { prompt( obj.id, "Img.DrawFrame\f"+ms ); }
    /*#img*/ obj.Play = function() { prompt( obj.id, "Img.Play\f" ); }
    /*#img*/ obj.Stop = function() { prompt( obj.id, "Img.Stop\f" ); }
    /*#img*/ obj.Draw = function( func, p1, p2, p3, p4, p5, p6, p7 ) {
		if( obj._gfb.length > 2 ) obj._gfb += "\f";
		obj._gfb += func + "~" + p1 + "~" + p2 + "~" + p3 + "~" + p4 + "~" + p5 + "~" + p6 + "~" + p7;
	}
    return obj;
}

function Btn( id )
{
    var obj = new Obj( id, "Btn" );
    /*#btn*/ obj.GetType = function() { return "Button"; }
    /*#btn*/ obj.SetEnabled = function( enable ) { prompt( obj.id, "Btn.SetEnabled(\f"+enable ); }
    /*#btn*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Btn.SetOnTouch(\f"+_Cbm(callback) ); }
    /*#btn*/ obj.SetOnLongTouch = function( callback ) { prompt( obj.id, "Btn.SetOnLongTouch(\f"+_Cbm(callback) ); }
    /*#btn*/ obj.SetText = function( text ) { prompt( obj.id, "Btn.SetText(\f"+text ); }
    /*#btn*/ obj.SetHtml = function( html ) { prompt( obj.id, "Btn.SetHtml(\f"+html ); }
    /*#btn*/ obj.GetText = function() { return prompt( obj.id, "Btn.GetText(" ); }
    /*#btn*/ obj.SetTextColor = function( clr ) { prompt( obj.id, "Btn.SetTextColor(\f"+clr ); }
    /*#btn*/ obj.SetFontFile = function( file ) { prompt( obj.id, "Btn.SetFontFile(\f"+file ); }
    /*#btn*/ obj.SetTextShadow = function( radius,dx,dy,color ) { prompt( obj.id, "Btn.SetTextShadow(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }
    /*#btn*/ obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Btn.SetTextSize(\f"+size+"\f"+mode ); }
    /*#btn*/ obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Btn.GetTextSize(\f"+mode )); }
    /*#btn*/ obj.SetEllipsize = function( mode ) { prompt( obj.id, "Btn.SetEllipsize(\f"+mode ); }
    /*#btn*/ obj.SetBackColor = function( clr ) { prompt( obj.id, "Btn.SetBackColor(\f"+clr ); }
    /*#btn*/ obj.SetStyle = function( clr1,clr2,radius,strokeClr,strokeWidth,shadow ) { prompt( obj.id, "Btn.SetStyle(\f"+clr1+"\f"+clr2+"\f"+radius+"\f"+strokeClr+"\f"+strokeWidth+"\f"+shadow ); }
	return obj;
}

function Tgl( id )
{
    var obj = new Obj( id, "Tgl" );
    /*#tgl*/ obj.GetType = function() { return "Toggle"; }
    /*#tgl*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Tgl.SetOnClick("+_Cbm(callback) ); }
    /*#tgl*/ obj.SetText = function( text ) { prompt( obj.id, "Tgl.SetText("+text ); }
    /*#tgl*/ obj.GetText = function() { return prompt( obj.id, "Tgl.GetText(" ); }
    /*#tgl*/ obj.SetTextColor = function( clr ) { prompt( obj.id, "Tgl.SetTextColor("+clr ); }
    /*#tgl*/ obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Tgl.SetTextSize(\f"+size+"\f"+mode ); }
    /*#tgl*/ obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Tgl.GetTextSize(\f"+mode )); }
    /*#tgl*/ obj.SetChecked = function( checked ) { prompt( obj.id, "Tgl.SetChecked("+checked ); }
    /*#tgl*/ obj.GetChecked = function() { return prompt( obj.id, "Tgl.GetChecked(" )=="true"; }
    /*#tgl*/ obj.SetStyle = function( clr1,clr2,radius,strokeClr,strokeWidth,shadow,checkClr ) { prompt( obj.id, "Tgl.SetStyle(\f"+clr1+"\f"+clr2+"\f"+radius+"\f"+strokeClr+"\f"+strokeWidth+"\f"+shadow+"\f"+checkClr ); }
    return obj;
}

function Swi( id )
{
    var obj = new Obj( id, "Swi" );
    /*#swi*/ obj.GetType = function() { return "Switch"; }
    /*#swi*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Swi.SetOnTouch(\f"+_Cbm(callback) ); }
    /*#swi*/ obj.SetText = function( text ) { prompt( obj.id, "Swi.SetText("+text ); }
    /*#swi*/ obj.GetText = function() { return prompt( obj.id, "Swi.GetText(" ); }
    /*#swi*/ obj.SetTextColor = function( clr ) { prompt( obj.id, "Swi.SetTextColor("+clr ); }
    /*#swi*/ obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Swi.SetTextSize(\f"+size+"\f"+mode ); }
    /*#swi*/ obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Swi.GetTextSize(\f"+mode )); }
    /*#swi*/ obj.SetChecked = function( checked ) { prompt( obj.id, "Swi.SetChecked("+checked ); }
    /*#swi*/ obj.GetChecked = function() { return prompt( obj.id, "Swi.GetChecked(" )=="true"; }
    /*#swi*/ obj.SetColorFilter = function( clr,mode,options ) { prompt( obj.id, "Swi.SetColorFilter(\f"+clr+"\f"+mode+"\f"+options ); }
    /*#swi*/ obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Swi.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    return obj;
}

function Chk( id )
{
    var obj = new Obj( id, "Chk" );
    /*#chk*/ obj.GetType = function() { return "CheckBox"; }
    /*#chk*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Chk.SetOnClick("+_Cbm(callback) ); }
    /*#chk*/ obj.SetText = function( text ) { prompt( obj.id, "Chk.SetText("+text ); }
    /*#chk*/ obj.GetText = function() { return prompt( obj.id, "Chk.GetText(" ); }
    /*#chk*/ obj.SetTextColor = function( clr ) { prompt( obj.id, "Chk.SetTextColor("+clr ); }
    /*#chk*/ obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Chk.SetTextSize(\f"+size+"\f"+mode ); }
    /*#chk*/ obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Chk.GetTextSize(\f"+mode )); }
    /*#chk*/ obj.SetChecked = function( checked ) { prompt( obj.id, "Chk.SetChecked("+checked ); }
    /*#chk*/ obj.GetChecked = function() { return prompt( obj.id, "Chk.GetChecked(" )=="true"; }
    /*#chk*/ obj.SetColorFilter = function( clr,mode ) { prompt( obj.id, "Chk.SetColorFilter(\f"+clr+"\f"+mode ); }
    /*#chk*/ obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Chk.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    return obj;
}

function Spn( id )
{
    var obj = new Obj( id, "Spn" );
    /*#spn*/ obj.GetType = function() { return "Spinner"; }
    /*#spn*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Spn.SetOnClick("+_Cbm(callback) ); }
    /*#spn*/ obj.SetOnChange = function( callback ) { prompt( obj.id, "Spn.SetOnClick("+_Cbm(callback) ); }
    /*#spn*/ obj.SetText = function( txt ) { prompt( obj.id, "Spn.SetText("+txt ); }
    /*#spn*/ obj.SelectItem = function( item ) { prompt( obj.id, "Spn.SetText("+item ); }
    /*#spn*/ obj.GetText = function() { return prompt( obj.id, "Spn.GetText(" ); }
    /*#spn*/ obj.SetTextColor = function( clr ) { prompt( obj.id, "Spn.SetTextColor("+clr ); }
    /*#spn*/ obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Spn.SetTextSize(\f"+size+"\f"+mode ); }
    /*#spn*/ obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Spn.GetTextSize(\f"+mode )); }
    /*#spn*/ obj.SetList = function( list,delim ) { prompt(obj.id, "Spn.SetList(\f"+list+"\f"+delim); }
    /*#spn*/ obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Spn.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    return obj;
}

function Skb( id )
{
    var obj = new Obj( id, "Skb" );
    /*#skb*/ obj.GetType = function() { return "SeekBar"; }
    /*#skb*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Skb.SetOnClick("+_Cbm(callback) ); }
    /*#skb*/ obj.SetOnChange = function( callback ) { prompt( obj.id, "Skb.SetOnClick("+_Cbm(callback) ); }
    /*#skb*/ obj.GetValue = function() { return parseFloat(prompt( obj.id, "Skb.GetValue(" )); }
    /*#skb*/ obj.SetValue = function( val ) { prompt( obj.id, "Skb.SetValue("+val ); }
    /*#skb*/ obj.SetRange = function( range ) { prompt( obj.id, "Skb.SetRange("+range ); }
    /*#skb*/ obj.SetMaxRate = function( rate ) { prompt( obj.id, "Skb.SetMaxRate("+rate ); }
    /*#skb*/ obj.SetColorFilter = function( clr,mode,options ) { prompt( obj.id, "Skb.SetColorFilter(\f"+clr+"\f"+mode+"\f"+options ); }
    /*#skb*/ obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Skb.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    return obj;
}

function Ibn( id )
{
    var obj = new Obj( id, "Ibn" );
    /*#ibn*/ obj.GetType = function() { return "ImageButton"; }
    /*#ibn*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Ibn.SetOnClick("+_Cbm(callback) ); }
    /*#ibn*/ obj.SetText = function( text ) { prompt( obj.id, "Ibn.SetText("+text ); }
    /*#ibn*/ obj.SetTextColor = function( clr ) { prompt( obj.id, "Ibn.SetTextColor("+clr ); }
    /*#ibn*/ obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Ibn.SetTextSize(\f"+size+"\f"+mode ); }
    /*#ibn*/ obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Ibn.GetTextSize(\f"+mode )); }
    return obj;
}

function Txt( id )
{
    var obj = new Obj( id, "Txt" );
    /*#txt*/ obj.GetType = function() { return "Text"; }
    /*#txt*/ obj.SetText = function( text ) { prompt( obj.id, "Txt.SetText(\f"+text ); }
    /*#txt*/ obj.SetHtml = function( html ) { prompt( obj.id, "Txt.SetHtml(\f"+html ); }
    /*#txt*/ obj.GetHtml = function() { return prompt( obj.id, "Txt.GetHtml(" ); }
    /*#txt*/ obj.Log = function( msg,options ) { prompt( obj.id, "Txt.Log(\f"+msg+"\f"+options ); }
    /*#txt*/ obj.SetLog = function( maxLines ) { prompt( obj.id, "Txt.SetLog(\f"+maxLines ); }
    /*#txt*/ obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Txt.SetTextSize(\f"+size+"\f"+mode ); }
    /*#txt*/ obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Txt.GetTextSize(\f"+mode )); }
    /*#txt*/ obj.GetText = function() { return prompt( obj.id, "Txt.GetText(" ); }
    /*#txt*/ obj.SetTextColor = function( color ) { prompt( obj.id, "Txt.SetTextColor(\f"+color ); }
    /*#txt*/ obj.SetFontFile = function( file ) { prompt( obj.id, "Txt.SetFontFile(\f"+file ); }
    /*#txt*/ obj.GetLineCount = function() { return parseInt(prompt( obj.id, "Txt.GetLineCount(")); }
    /*#txt*/ obj.GetMaxLines = function() { return parseInt(prompt( obj.id, "Txt.GetMaxLines(")); }
    /*#txt*/ obj.GetLineTop = function( line ) { return parseFloat(prompt( obj.id, "Txt.GetLineTop("+line )); }
    /*#txt*/ obj.GetLineStart = function( line ) { return parseInt(prompt( obj.id, "Txt.GetLineStart("+line )); }
    /*#txt*/ obj.SetEllipsize = function( mode ) { prompt( obj.id, "Txt.SetEllipsize(\f"+mode ); }
    /*#txt*/ obj.SetTextShadow = function( radius,dx,dy,color ) { prompt( obj.id, "Txt.SetTextShadow(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }
    /*#txt*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Txt.SetOnTouch(\f"+_Cbm(callback) ); }
    /*#txt*/ obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "Txt.SetOnTouchUp(\f"+_Cbm(callback) ); }
    /*#txt*/ obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "Txt.SetOnTouchMove(\f"+_Cbm(callback) ); }
    /*#txt*/ obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "Txt.SetOnTouchDown(\f"+_Cbm(callback) ); }
    /*#txt*/ obj.SetOnLongTouch = function( callback ) { prompt( obj.id, "Txt.SetOnLongTouch(\f"+_Cbm(callback) ); }
    /*#txt*/ obj.SetTouchable = function( touchable ) { prompt( obj.id, "Txt.SetTouchable(\f"+touchable ); }
    return obj;
}

function Txe( id )
{
    var obj = new Obj( id, "Txe" );
    /*#txe*/ obj.GetType = function() { return "TextEdit"; }
    /*#txe*/ obj.SetText = function( txt ) { prompt( obj.id, "Txe.SetText(\f"+txt ); }
    /*#txe*/ obj.SetHtml = function( html ) { prompt( obj.id, "Txe.SetHtml(\f"+html ); }
    /*#txe*/ obj.GetHtml = function() { return prompt( obj.id, "Txe.GetHtml(" ); }
    /*#txe*/ obj.SetHint = function( text ) { prompt( obj.id, "Txe.SetHint(\f"+text ); }
    /*#txe*/ obj.InsertText = function( text,start ) { prompt( obj.id, "Txe.InsertText(\f"+text+"\f"+start ); }
    /*#txe*/ obj.ReplaceText = function( text,start,end ) { prompt( obj.id, "Txe.ReplaceText(\f"+text+"\f"+start+"\f"+end ); }
    /*#txe*/ obj.GetText = function() { return prompt( obj.id, "Txe.GetText(" ); }
    /*#txe*/ obj.SetOnChange = function( callback ) { prompt( obj.id, "Txe.SetOnChange(\f"+_Cbm(callback) ); }
    /*#txe*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Txe.SetOnTouch(\f"+_Cbm(callback) ); }
    /*#txe*/ obj.SetOnEnter = function( callback ) { prompt( obj.id, "Txe.SetOnEnter(\f"+_Cbm(callback) ); }
    /*#txe*/ obj.SetOnFocus = function( callback ) { prompt( obj.id, "Txe.SetOnFocus(\f"+_Cbm(callback) ); }
    /*#txe*/ obj.SetTextColor = function( color ) { prompt( obj.id, "Txe.SetTextColor(\f"+color ); }
    /*#txe*/ obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Txe.SetTextSize(\f"+size+"\f"+mode ); }
    /*#txe*/ obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Txe.GetTextSize(\f"+mode )); }
    /*#txe*/ obj.GetLineCount = function() { return parseInt(prompt( obj.id, "Txe.GetLineCount(")); }
    /*#txe*/ obj.GetMaxLines = function() { return parseInt(prompt( obj.id, "Txe.GetMaxLines(")); }
    /*#txe*/ obj.GetLineTop = function( line ) { return parseFloat(prompt( obj.id, "Txe.GetLineTop("+line )); }
    /*#txe*/ obj.GetLineStart = function( line ) { return parseInt(prompt( obj.id, "Txe.GetLineStart("+line )); }
    /*#txe*/ obj.SetCursorColor = function( color ) { prompt( obj.id, "Txe.SetCursorColor(\f"+color ); }
    /*#txe*/ obj.SetSelectColor = function( color ) { prompt( obj.id, "Txe.SetSelectColor(\f"+color ); }
    /*#txe*/ obj.SetCursorPos = function( pos ) { prompt( obj.id, "Txe.SetCursorPos(\f"+pos ); }
    /*#txe*/ obj.GetCursorPos = function() { return parseInt(prompt( obj.id, "Txe.GetCursorPos(")); }
    /*#txe*/ obj.GetCursorLine = function() { return parseInt(prompt( obj.id, "Txe.GetCursorLine(")); }
    /*#txe*/ obj.SetSelection = function( start,stop ) { prompt( obj.id, "Txe.SetSelection(\f"+start+"\f"+stop ); }
    /*#txe*/ obj.GetSelectedText = function() { return prompt( obj.id, "Txe.GetSelectedText("); }
    /*#txe*/ obj.GetSelectionStart = function() { return parseInt(prompt( obj.id, "Txe.GetSelectionStart(")); }
    /*#txe*/ obj.GetSelectionEnd = function() { return parseInt(prompt( obj.id, "Txe.GetSelectionEnd(")); }
    /*#txe*/ obj.Undo = function() { prompt( obj.id, "Txe.Undo("); }
    /*#txe*/ obj.Redo = function() { prompt( obj.id, "Txe.Redo("); }
    /*#txe*/ obj.ClearHistory = function() { prompt( obj.id, "Txe.ClearHistory("); }
    return obj;
}

function Cde( id )
{
    var obj = new Obj( id, "Cde" );
    /*#cde*/ obj.GetType = function() { return "CodeEdit"; }
    /*#cde*/ obj.GetText = function() { return prompt( obj.id, "Cde.GetText(" ); }
    /*#cde*/ obj.GetSelectedText = function() { return prompt( obj.id, "Cde.GetSelectedText(" ); }
    /*#cde*/ obj.GetSelectionStart = function() { return parseInt(prompt( obj.id, "Cde.GetSelectionStart(")); }
    /*#cde*/ obj.GetSelectionEnd = function() { return parseInt(prompt( obj.id, "Cde.GetSelectionEnd(")); }
    /*#cde*/ obj.SetText = function( txt ) { prompt( obj.id, "Cde.SetText(\f"+txt ); }
    /*#cde*/ obj.SetHtml = function( html ) { prompt( obj.id, "Cde.SetText(\f"+html ); }
    /*#cde*/ obj.Undo = function() { prompt( obj.id, "Cde.Undo("); }
    /*#cde*/ obj.Redo = function() { prompt( obj.id, "Cde.Redo("); }
    /*#cde*/ obj.Copy = function() { prompt( obj.id, "Cde.Copy(" ); }
    /*#cde*/ obj.Cut = function() { prompt( obj.id, "Cde.Cut(" ); }
    /*#cde*/ obj.Paste = function() { prompt( obj.id, "Cde.Paste(" ); }
    /*#cde*/ obj.SetSelectMode = function( onOff ) { prompt( obj.id, "Cde.SetSelectMode(\f"+onOff ); }
    /*#cde*/ obj.GetSelectMode = function() { return prompt( obj.id, "Cde.GetSelectMode(" )=="true"; }
    /*#cde*/ obj.SelectAll = function() { prompt( obj.id, "Cde.SelectAll(" ); }
    /*#cde*/ obj.Search = function( text,dir,matchCase,wholeWord ) { prompt( obj.id, "Cde.Search(\f"+text+"\f"+dir+"\f"+matchCase+"\f"+wholeWord ); }
    /*#cde*/ obj.Replace = function( text ) { prompt( obj.id, "Cde.Replace(\f"+text ); }
    /*#cde*/ obj.ReplaceAll = function( text,newText,matchCase,wholeWord ) { prompt( obj.id, "Cde.ReplaceAll(\f"+text+"\f"+newText+"\f"+matchCase+"\f"+wholeWord ); }
    /*#cde*/ obj.SetUseKeyboard = function( onOff ) { prompt( obj.id, "Cde.SetUseKeyboard(\f"+onOff ); }
    /*#cde*/ obj.SetNavigationMethod = function( method ) { prompt( obj.id, "Cde.SetNavigationMethod(\f"+method); }
    /*#cde*/ obj.ClearHistory = function() { prompt( obj.id, "Cde.ClearHistory("); }
    /*#cde*/ obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Cde.SetTextSize(\f"+size+"\f"+mode ); }
    /*#cde*/ obj.SetTextColor = function( color ) { prompt( obj.id, "Cde.SetTextColor(\f"+color ); }
    /*#cde*/ obj.SetColorScheme = function( scheme ) { prompt( obj.id, "Cde.SetColorScheme(\f"+scheme ); }
    /*#cde*/ obj.GetCursorLine = function() { return parseInt(prompt( obj.id, "Cde.GetCursorLine(")); }
    /*#cde*/ obj.GetLineStart = function( line ) { return parseInt(prompt( obj.id, "Cde.GetLineStart("+line )); }
    /*#cde*/ obj.HighlightLine = function( line ) { prompt( obj.id, "Cde.HighlightLine(\f"+line ); }
    /*#cde*/ obj.SetCursorPos = function( pos ) { prompt( obj.id, "Cde.SetCursorPos("+pos ); }
    /*#cde*/ obj.GetCursorPos = function() { return parseInt(prompt( obj.id, "Cde.GetCursorPos(")); }
    /*#cde*/ obj.InsertText = function( text,start,end ) { prompt( obj.id, "Cde.InsertText(\f"+text+"\f"+start ); }
    /*#cde*/ obj.ReplaceText = function( text,start,end ) { prompt( obj.id, "Cde.ReplaceText(\f"+text+"\f"+start+"\f"+end ); }
    /*#cde*/ obj.SetSelection = function( start,stop ) { prompt( obj.id, "Cde.SetSelection(\f"+start+"\f"+stop ); }
    /*#cde*/ obj.SetLanguage = function( ext ) { prompt( obj.id, "Cde.SetLanguage(\f"+ext ); }
    /*#cde*/ obj.SetOnChange = function( callback ) { prompt( obj.id, "Cde.SetOnChange(\f"+_Cbm(callback) ); }
    /*#cde*/ obj.SetOnDoubleTap = function( callback ) { prompt( obj.id, "Cde.SetOnDoubleTap(\f"+_Cbm(callback) ); }
    /*#cde*/ obj.SetOnKey = function( callback ) { prompt( obj.id, "Cde.SetOnKey(\f"+_Cbm(callback) ); }
    return obj;
}

function Lst( id )
{
    var obj = new Obj( id, "Lst" );
    /*#lst*/ obj.GetType = function() { return "List"; }
    /*#lst*/ obj.SetList = function( list,delim ) { prompt( this.id, "Lst.SetList(\f"+list+"\f"+delim ); }
    /*#lst*/ obj.GetList = function( delim ) { return eval(prompt( obj.id, "Lst.GetList("+delim )); }
    /*#lst*/ obj.AddItem = function( title,body,image ) { prompt( obj.id, "Lst.AddItem(\f"+title+"\f"+body+"\f"+image ); }
    /*#lst*/ obj.InsertItem = function( index,title,body,image ) { prompt( obj.id, "Lst.InsertItem(\f"+index+"\f"+title+"\f"+body+"\f"+image ); }
    /*#lst*/ obj.SetItem = function( title,newTitle,newBody,newImage ) { prompt( obj.id, "Lst.SetItem(\f"+title+"\f"+newTitle+"\f"+newBody+"\f"+newImage ); }
    /*#lst*/ obj.SetItemByIndex = function( index,newTitle,newBody,newImage ) { prompt( obj.id, "Lst.SetItemByIndex(\f"+index+"\f"+newTitle+"\f"+newBody+"\f"+newImage ); }
    /*#lst*/ obj.RemoveItem = function( title ) { prompt( obj.id, "Lst.RemoveItem(\f"+title ); }
    /*#lst*/ obj.RemoveItemByIndex = function( index ) { prompt( obj.id, "Lst.RemoveItemByIndex(\f"+index ); }
    /*#lst*/ obj.RemoveAll = function() { prompt( obj.id, "Lst.RemoveAll(" ); }
    /*#lst*/ obj.SelectItem = function( title,body,scroll ) { var p="Lst.SelectItem(\f"+title+"\f"+body+"\f"+scroll; prompt(obj.id,p); }
    /*#lst*/ obj.SelectItemByIndex = function( index,scroll ) { var p="Lst.SelectItemByIndex(\f"+index+"\f"+scroll; prompt(obj.id,p); }
    /*#lst*/ obj.SetItemColor = function( name,textClr,bakClr ) { prompt( obj.id, "Lst.SetItemColor(\f"+name+"\f"+textClr+"\f"+bakClr ); }
    /*#lst*/ obj.SetItemColorByIndex = function( index,textClr,bakClr ) { prompt( obj.id, "Lst.SetItemColorByIndex(\f"+index+"\f"+textClr+"\f"+bakClr ); }
    /*#lst*/ obj.GetItem = function( title ) { var p="Lst.GetItem(\f"+title; return eval(prompt(obj.id,p)); }
    /*#lst*/ obj.GetItemByIndex = function( index ) { var p="Lst.GetItemByIndex(\f"+index; return eval(prompt(obj.id,p)); }
    /*#lst*/ obj.GetLength = function() { return parseInt(prompt(obj.id,"Lst.GetLength(")); }
    /*#lst*/ obj.ScrollToItem = function( title,body ) { var p="Lst.ScrollToItem(\f"+title+"\f"+body; prompt(obj.id,p); }
    /*#lst*/ obj.ScrollToItemByIndex = function( index ) { var p="Lst.ScrollToItemByIndex(\f"+index; prompt(obj.id,p); }
    /*#lst*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Lst.SetOnClick("+_Cbm(callback) ); }
    /*#lst*/ obj.SetOnLongTouch = function( callback ) { prompt( obj.id, "Lst.SetOnLongClick("+_Cbm(callback) ); }
    /*#lst*/ obj.SetTextColor = function( clr ) { prompt( obj.id, "Lst.SetTextColor1("+clr ); }
    /*#lst*/ obj.SetTextColor1 = function( clr ) { prompt( obj.id, "Lst.SetTextColor1("+clr ); }
    /*#lst*/ obj.SetTextColor2 = function( clr ) { prompt( obj.id, "Lst.SetTextColor2("+clr ); }
    /*#lst*/ obj.SetHiTextColor1 = function( clr ) { prompt( obj.id, "Lst.SetHiTextColor1("+clr ); }
    /*#lst*/ obj.SetHiTextColor2 = function( clr ) { prompt( obj.id, "Lst.SetHiTextColor2("+clr ); }
    /*#lst*/ obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Lst.SetTextSize1(\f"+size+"\f"+mode ); }
    /*#lst*/ obj.SetTextSize1 = function( size,mode ) { prompt( obj.id, "Lst.SetTextSize1(\f"+size+"\f"+mode ); }
    /*#lst*/ obj.SetTextSize2 = function( size,mode ) { prompt( obj.id, "Lst.SetTextSize2(\f"+size+"\f"+mode ); }
    /*#lst*/ obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Lst.GetTextSize(\f"+mode )); }
    /*#lst*/ obj.SetColumnWidths = function( icon,title,body,mode ) { prompt( obj.id, "Lst.SetColumnWidths(\f"+icon+"\f"+title+"\f"+body+"\f"+mode ); }
    /*#lst*/ obj.SetTextMargins = function( left,top,right,bottom,mode,options ) { prompt( this.id, "Lst.SetTextMargins(\f"+left+"\f"+top+"\f"+right+"\f"+bottom+"\f"+mode+"\f"+options ); }
    /*#lst*/ obj.SetIconMargins = function( left,top,right,bottom,mode ) { prompt( this.id, "Lst.SetIconMargins(\f"+left+"\f"+top+"\f"+right+"\f"+bottom+"\f"+mode ); }
    /*#lst*/ obj.SetIconSize = function( size,mode ) { prompt( obj.id, "Lst.SetIconSize(\f"+size+"\f"+mode ); }
    /*#lst*/ obj.SetEllipsize = function( mode ) { prompt( obj.id, "Lst.SetEllipsize(\f"+mode ); }
    /*#lst*/ obj.SetEllipsize1 = function( mode ) { prompt( obj.id, "Lst.SetEllipsize1(\f"+mode ); }
    /*#lst*/ obj.SetEllipsize2 = function( mode ) { prompt( obj.id, "Lst.SetEllipsize2(\f"+mode ); }
    /*#lst*/ obj.SetTextShadow = function( radius,dx,dy,color ) { prompt( obj.id, "Lst.SetTextShadow1(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }
    /*#lst*/ obj.SetTextShadow1 = function( radius,dx,dy,color ) { prompt( obj.id, "Lst.SetTextShadow1(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }
    /*#lst*/ obj.SetTextShadow2 = function( radius,dx,dy,color ) { prompt( obj.id, "Lst.SetTextShadow2(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }
    /*#lst*/ obj.SetDivider = function( height,color ) { prompt( obj.id, "Lst.SetDivider(\f"+height+"\f"+color ); }
    /*#lst*/ obj.SetFontFile = function( file ) { prompt( obj.id, "Lst.SetFontFile(\f"+file ); }
	/*#lst*/ obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Lst.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
	/*#lst*/ obj.Expand = function() { prompt( obj.id, "Lst.Expand(" ); }
    return obj;
}

function Web( id )
{
    var obj = new Obj( id, "Web" );
    /*#web*/ obj.GetType = function() { return "WebView"; }
    /*#web*/ obj.SetOnProgress = function( callback ) { prompt( obj.id, "Web.SetOnProgress("+_Cbm(callback) ); }
    /*#web*/ obj.SetOnError = function( callback ) { prompt( obj.id, "Web.SetOnError(\f"+_Cbm(callback) ); }
    /*#web*/ obj.SetOnConsole = function( callback ) { prompt( obj.id, "Web.SetOnConsole(\f"+_Cbm(callback) ); }
    /*#web*/ obj.LoadHtml = function( html,base,options ) { if(options&&options.toLowerCase().includes("ignoreerrors")) global.__ignoreErrors=true; prompt(obj.id,"Web.LoadHtml(\f"+html+"\f"+base+"\f"+options); global.__ignoreErrors=false; }
    /*#web*/ obj.LoadUrl = function( url,options ) { if(options&&options.toLowerCase().includes("ignoreerrors")) global.__ignoreErrors=true; prompt(obj.id,"Web.LoadUrl(\f"+url+"\f"+options); global.__ignoreErrors=false; }
    /*#web*/ obj.Reload = function() { if(options&&options.toLowerCase().includes("ignoreerrors")) global.__ignoreErrors=true; prompt(obj.id,"Web.Reload(" ); global.__ignoreErrors=false; }
    /*#web*/ obj.LoadFailed = function() { return prompt( obj.id, "Web.LoadFailed(" )=="true"; }
    /*#web*/ obj.Stop = function() { prompt(obj.id,"Web.Stop(" ); }
    /*#web*/ obj.Back = function() { prompt(obj.id,"Web.Back(" ); }
    /*#web*/ obj.Forward = function() { prompt(obj.id,"Web.Forward(" ); }
    /*#web*/ obj.CanGoBack = function() { return prompt( obj.id, "Web.CanGoBack(" )=="true"; }
    /*#web*/ obj.CanGoForward = function() { return prompt( obj.id, "Web.CanGoForward(" )=="true"; }
    /*#web*/ obj.SetErrorPage = function( url ) { prompt(obj.id,"Web.SetErrorPage(\f"+url); }
    /*#web*/ obj.SetInject = function( file ) { prompt(obj.id,"Web.SetInject(\f"+file); }
    /*#web*/ obj.Execute = function( code,callback ) { return prompt( obj.id, "Web.Execute(\f"+code+"\f"+_Cbm(callback) ); }
    /*#web*/ obj.ClearHistory = function() { prompt(obj.id,"Web.ClearHistory(" ); }
    /*#web*/ obj.ClearCookies = function() { prompt(obj.id,"Web.ClearCookies(" ); }
    /*#web*/ obj.GetUrl = function() { return prompt(obj.id,"Web.GetUrl(" ); }
    /*#web*/ obj.GetHomeUrl = function() { return prompt(obj.id,"Web.GetHomeUrl(" ); }
    /*#web*/ obj.GetTitle = function() { return prompt(obj.id,"Web.GetTitle(" ); }
    /*#web*/ obj.Capture = function( file ) { prompt( obj.id, "Web.Capture(\f"+file ); }
    /*#web*/ obj.Print = function() { prompt( obj.id, "Web.Print(\f" ); }
    /*#web*/ obj.SetZoom = function( zoom ) { prompt( obj.id, "Web.SetZoom(\f"+zoom ); }
    /*#web*/ obj.SetTextZoom = function( zoom ) { prompt( obj.id, "Web.SetTextZoom(\f"+zoom ); }
    /*#web*/ obj.SetUserAgent = function( agent,options ) { prompt( obj.id, "Web.SetUserAgent(\f"+agent+"\f"+options ); }
    /*#web*/ obj.SetUserCreds = function( name,password ) { prompt( obj.id, "Web.SetUserCreds(\f"+name+"\f"+password ); }
    /*#web*/ obj.SimulateKey = function( keyName,modifiers,pause ) { prompt( obj.id, "Web.SimulateKey(\f"+keyName+"\f"+modifiers+"\f"+pause ); }
    /*#web*/ obj.SetRedirect = function( urlFrom, urlTo ) { prompt( obj.id, "Web.SetRedirect(\f"+urlFrom+"\f"+urlTo ); }
    /*#web*/ obj.SetUseBrowser = function( urlFilter ) { prompt( obj.id, "Web.SetUseBrowser(\f"+urlFilter ); }
    /*#web*/ obj.SetTouchMode = function( mode ) { prompt( obj.id, "Web.SetTouchMode(\f"+mode ); }
    /*#web*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Web.SetOnTouch(\f"+_Cbm(callback) ); }
    /*#web*/ obj.SetOnUrl = function( callback ) { prompt( obj.id, "Web.SetOnUrl(\f"+_Cbm(callback) ); }
    /*#web*/ obj.SetOnRequest = function( callback ) { prompt( obj.id, "Web.SetOnRequest(\f"+_Cbm(callback) ); }
    /*#web*/ obj.SetBlockedUrls = function( urls ) { prompt( obj.id, "Web.SetBlockedUrls(\f"+urls ); }
    /*#web*/ obj.SetOnContextMenu = function( callback ) { prompt( obj.id, "Web.SetOnContextMenu(\f"+_Cbm(callback) ); }
    /*#web*/ obj.SetContextMenus = function( links,images ) { prompt( obj.id, "Web.SetContextMenus(\f"+links+"\f"+images ); }

    /*#web*/ obj.Func = function( name, args ) {
        for( var a in arguments )
            if( typeof arguments[a]=='function' ) arguments[a] = _Cbm(arguments[a])
        obj.Execute( "_OnFunc('"+btoa2(JSON.stringify(Array.from(arguments)))+"')", function(){} )
    }
    return obj;
}

function Scr( id )
{
    var obj = new Obj( id, "Scr" );
    /*#scr*/ obj.GetType = function() { return "Scroller"; }
    /*#scr*/ obj.AddChild = function( child ) { prompt( obj.id, "Scr.AddChild(\f"+(child?child.id:null) ); }
    /*#scr*/ obj.RemoveChild = function( child ) { prompt( obj.id, "Scr.RemoveChild(\f"+(child?child.id:null) ); }
    /*#scr*/ obj.DestroyChild = function( child ) { prompt( obj.id, "Scr.DestroyChild(\f"+(child?child.id:null) ); }
    /*#scr*/ obj.ScrollTo = function( x,y ) { prompt( obj.id, "Scr.ScrollTo\f"+x+"\f"+y ); }
    /*#scr*/ obj.ScrollBy = function( x,y ) { prompt( obj.id, "Scr.ScrollBy\f"+x+"\f"+y ); }
    /*#scr*/ obj.GetScrollX = function() { return parseFloat(prompt( obj.id, "Scr.GetScrollX(" )); }
    /*#scr*/ obj.GetScrollY = function() { return parseFloat(prompt( obj.id, "Scr.GetScrollY(" )); }
    return obj;
}

function Dlg( id )
{
    var obj = new Obj( id, "Dlg" );
    /*#dlg*/ obj.GetType = function() { return "Dialog"; }
    /*#dlg*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Dlg.SetOnClick("+_Cbm(callback) ); }
    /*#dlg*/ obj.AddLayout = function( layout ) { prompt( obj.id, "Dlg.AddLayout("+ layout.id ); }
	/*#dlg*/ obj.RemoveLayout = function( layout ) { prompt( obj.id, "Dlg.RemoveLayout("+ layout.id ); }
	/*#dlg*/ obj.Show = function() { prompt( obj.id, "Dlg.Show(" ); }
	/*#dlg*/ obj.Hide = function() { prompt( obj.id, "Dlg.Hide(" ); }
	/*#dlg*/ obj.IsVisible = function() { return prompt( obj.id, "Dlg.IsVisible\f" )=="true"; }
	/*#dlg*/ obj.Dismiss = function() { prompt( obj.id, "Dlg.Dismiss(" ); }
	/*#dlg*/ obj.SetTitle = function( title,options ) { prompt( obj.id, "Dlg.SetTitle(\f"+title+"\f"+options ); }
	/*#dlg*/ obj.SetBackColor = function( clr,radius ) { prompt( obj.id, "Dlg.SetBackColor(\f"+clr+"\f"+radius ); }
	/*#dlg*/ obj.SetBackground = function( file,options ) { prompt( obj.id, "Dlg.SetBackground(\f"+file+"\f"+options ); }
	/*#dlg*/ obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Dlg.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
	/*#dlg*/ obj.SetSize = function( width,height,options ) { prompt( obj.id, "Dlg.SetSize(\f"+width+"\f"+height+"\f"+options ); }
	/*#dlg*/ obj.SetPosition = function( left,top,width,height,options ) { prompt( obj.id, "Dlg.SetPosition(\f"+left+"\f"+top+"\f"+width+"\f"+height+"\f"+options ); }
	/*#dlg*/ obj.SetOnCancel = function( callback ) { prompt( obj.id, "Dlg.SetOnCancel(\f"+_Cbm(callback) ); }
	/*#dlg*/ obj.EnableBackKey = function( enable ) { prompt( obj.id, "Dlg.EnableBackKey(\f"+enable ); }
	/*#dlg*/ obj.SetOnBack = function( callback ) { prompt( obj.id, "Dlg.SetOnBack(\f"+_Cbm(callback) ); }
	/*#dlg*/ obj.SetTitleHeight = function( height,options ) { prompt( obj.id, "Dlg.SetTitleHeight(\f"+height+"\f"+options ); }
	/*#dlg*/ obj.SetTitleTextSize = function( height,options ) { prompt( obj.id, "Dlg.SetTitleTextSize(\f"+height+"\f"+options ); }
	/*#dlg*/ obj.SetTitleColor = function( clr ) { prompt( obj.id, "Dlg.SetTitleColor(\f"+clr ); }
	/*#dlg*/ obj.SetTitleDividerColor = function( clr ) { prompt( obj.id, "Dlg.SetTitleDividerColor(\f"+clr ); }
	/*#dlg*/ obj.SetTitleDividerHeight = function( height,options ) { prompt( obj.id, "Dlg.SetTitleDividerHeight(\f"+height+"\f"+options ); }
	/*#dlg*/ obj.GetTitleHeight = function() { return parseFloat(prompt( obj.id, "Dlg.GetTitleHeight(\f" )); }
	return obj;
}

function Ovl( id )
{
    var obj = new Obj( id, "Ovl" );
    /*#ovl*/ obj.GetType = function() { return "Overlay"; }
    /*#ovl*/ obj.AddLayout = function( layout,left,top,options ) { prompt( obj.id, "Ovl.AddLayout(\f"+(layout?layout.id:null)+"\f"+left+"\f"+top+"\f"+options ); }
	/*#ovl*/ obj.RemoveLayout = function( layout ) { prompt( obj.id, "Ovl.RemoveLayout(\f"+(layout?layout.id:null) ); }
	/*#ovl*/ obj.SetPosition = function( layout,left,top,options ) { prompt( obj.id, "Ovl.SetPosition(\f"+(layout?layout.id:null)+"\f"+left+"\f"+top+"\f"+options ); }
	return obj;
}

function Ynd( id )
{
    var obj = new SObj( id, "Ynd" );
    /*#ynd*/ obj.GetType = function() { return "YesNoDialog"; }
    /*#ynd*/ obj.Show = function() { prompt( obj.id, "Ynd.Show(" ); }
	/*#ynd*/ obj.Hide = function() { prompt( obj.id, "Ynd.Hide(" ); }
	/*#ynd*/ obj.Dismiss = function() { prompt( obj.id, "Ynd.Dismiss(" ); }
    /*#ynd*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Ynd.SetOnClick("+_Cbm(callback) ); }
	/*#ynd*/ obj.SetBackColor = function( clr,radius ) { prompt( obj.id, "Ynd.SetBackColor(\f"+clr+"\f"+radius ); }
	/*#ynd*/ obj.SetBackground = function( file,options ) { prompt( obj.id, "Ynd.SetBackground(\f"+file+"\f"+options ); }
	/*#ynd*/ obj.SetSize = function( width,height,options ) { prompt( obj.id, "Ynd.SetSize(\f"+width+"\f"+height+"\f"+options ); }
	/*#ynd*/ obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Ynd.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
	/*#ynd*/ obj.SetButtonText = function( yes,no ) { prompt( obj.id, "Ynd.SetButtonText(\f"+yes+"\f"+no ); }
    return obj;
}

function Lvw( id )
{
    var obj = new Obj( i, "Lvw" );
    /*#lvw*/ obj.GetType = function() { return "ListView"; }
    /*#lvw*/ obj.Show = function() { prompt( obj.id, "Lvw.Show(" ); }
    /*#lvw*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Lvw.SetOnClick("+_Cbm(callback) ); }
    return obj;
}

function Adv( id )
{
    var obj = new Obj( id, "Adv" );
    /*#adv*/ obj.GetType = function() { return "AdView"; }
    /*#adv*/ obj.Load = function() { prompt( obj.id, "Adv.Load(" ); }
    /*#adv*/ obj.SetOnStatus = function( callback ) { prompt( obj.id, "Adv.SetOnStatus(\f"+_Cbm(callback) ); }
    return obj;
}

function Ldg( id )
{
    var obj = new SObj( id, "Ldg" );
    /*#ldg*/ obj.GetType = function() { return "ListDialog"; }
    /*#ldg*/ obj.Show = function() { prompt( obj.id, "Ldg.Show(" ); }
	/*#ldg*/ obj.Hide = function() { prompt( obj.id, "Ldg.Hide(" ); }
	/*#ldg*/ obj.Dismiss = function() { prompt( obj.id, "Ldg.Dismiss(" ); }
    /*#ldg*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Ldg.SetOnClick("+_Cbm(callback) ); }
    /*#ldg*/ obj.SetTitle = function( title ) { prompt( obj.id, "Ldg.SetTitle(\f"+ title ); }
	/*#ldg*/ obj.SetBackColor = function( clr,radius ) { prompt( obj.id, "Ldg.SetBackColor(\f"+clr+"\f"+radius ); }
	/*#ldg*/ obj.SetBackground = function( file,options ) { prompt( obj.id, "Ldg.SetBackground(\f"+file+"\f"+options ); }
	/*#ldg*/ obj.SetTextColor = function( clr ) { prompt( obj.id, "Ldg.SetTextColor(\f"+clr ); }
	/*#ldg*/ obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Ldg.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
	/*#ldg*/ obj.SetSize = function( width,height,options ) { prompt( obj.id, "Ldg.SetSize(\f"+width+"\f"+height+"\f"+options ); }
	/*#ldg*/ obj.SetTitleHeight = function( height,options ) { prompt( obj.id, "Ldg.SetTitleHeight(\f"+height+"\f"+options ); }
	/*#ldg*/ obj.SetTitleColor = function( clr ) { prompt( obj.id, "Ldg.SetTitleColor(\f"+clr ); }
    return obj;
}

function Btl( id )
{
    var obj = new Obj( id, "Btl" );
    /*#btl*/ obj.GetType = function() { return "BluetoothList"; }
    /*#btl*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Btl.SetOnClick("+_Cbm(callback) ); }
    /*#btl*/ obj.SetOnTouchEx = function( callback ) { prompt( obj.id, "Btl.SetOnClick("+callback ); }
    return obj;
}

function Net( id )
{
    var obj = new SObj( id, "Net" );
    /*#net*/ obj.GetType = function() { return "NetClient"; }
    /*#net*/ obj.Connect = function( address,port ) { return prompt( obj.id, "Net.Connect("+address+"\f"+port )=="true"; }
    /*#net*/ obj.SetOnConnect = function( callback ) { prompt( obj.id, "Net.SetOnConnect("+_Cbm(callback) ); }
    /*#net*/ obj.Disconnect = function() { prompt( obj.id, "Net.Disconnect(" ); }
    /*#net*/ obj.Close = function() { prompt( obj.id, "Net.Disconnect(" ); }
	/*#net*/ obj.IsEnabled = function() { return prompt( obj.id, "Net.IsEnabled(" )=="true"; }
    /*#net*/ obj.IsConnected = function() { return prompt( obj.id, "Net.IsConnected(" )=="true"; }
    /*#net*/ obj.SetTimeout = function( secs ) { prompt( obj.id, "Net.SetTimeout("+secs ); }
    /*#net*/ obj.SendText = function( text,mode ) { prompt( obj.id, "Net.SendText("+text+"\f"+mode ); }
    /*#net*/ obj.SendBytes = function( data,mode ) { prompt( obj.id, "Net.SendBytes(\f"+data+"\f"+mode ); }
    /*#net*/ obj.SendData = function( txt,encoding ) { prompt( obj.id, "Net.SendData(\f"+txt+"\f"+encoding ); }
    /*#net*/ obj.ReceiveText = function( mode ) { return prompt( obj.id, "Net.ReceiveText("+mode ); }
    /*#net*/ obj.ReceiveBytes = function( mode ) { return eval(prompt( obj.id, "Net.ReceiveBytes(\f"+mode )); }
    /*#net*/ obj.ReceiveFile = function( file,wait ) { return prompt( obj.id, "Net.ReceiveFile("+file+"\f"+wait ); }
    /*#net*/ obj.DownloadFile = function( file ) { return prompt( obj.id, "Net.DownloadFile("+file ); }
    /*#net*/ obj.SetOnDownload = function( callback ) { prompt( obj.id, "Net.SetOnDownload("+_Cbm(callback) ); }
    /*#net*/ obj.GetBroadcastAddress = function() { return prompt( obj.id, "Net.GetBroadcastAddress(" ); }
    /*#net*/ obj.SendDatagram = function( data,mode,address,port,options ) { prompt( obj.id, "Net.SendDatagram(\f"+data+"\f"+mode+"\f"+address+"\f"+port+"\f"+options ); }
    /*#net*/ obj.ReceiveDatagram = function( mode,port,timeout,options ) { return prompt( obj.id, "Net.ReceiveDatagram(\f"+mode+"\f"+port+"\f"+timeout+"\f"+options ); }
    /*#net*/ obj.ReceiveDatagrams = function( port,mode,options ) { prompt( obj.id, "Net.ReceiveDatagrams(\f"+port+"\f"+mode+"\f"+options ); }
    /*#net*/ obj.ReceiveVideoStream = function( port,img ) { prompt( obj.id, "Net.ReceiveVideoStream(\f"+port+"\f"+(img?img.id:null) ); }
    /*#net*/ obj.SetOnReceive = function( callback ) { prompt( obj.id, "Net.SetOnReceive("+_Cbm(callback) ); }
    /*#net*/ obj.AutoReceive = function( server,port,mode ) { return prompt( obj.id, "Net.AutoReceive("+server+"\f"+port+"\f"+mode ); }
    /*#net*/ obj.WakeOnLan = function( ip,mac ) { prompt( obj.id, "Net.WakeOnLan(\f"+ip+"\f"+mac ); }
    /*#net*/ obj.SetDataMode = function( mode ) { prompt( obj.id, "Net.SetDataMode(\f"+mode ); }
    /*#net*/ obj.SetSplitMode = function( mode,p2,p3 ) { prompt( obj.id, "Net.SetSplitMode(\f"+mode+"\f"+p2+"\f"+p3 ); }
    /*#net*/ obj.Clear = function() { prompt( obj.id, "Net.Clear("); }
    return obj;
}

function Aud( id )
{
    var obj = new SObj( id, "Aud" );
    /*#aud*/ obj.GetType = function() { return "MediaPlayer"; }
    /*#aud*/ obj.SetFile = function( file ) { prompt( obj.id, "Aud.SetFile("+file ); }
    /*#aud*/ obj.SetLooping = function( loop ) { prompt( obj.id, "Aud.SetLooping(\f"+loop ); }
    /*#aud*/ obj.SetSpeed = function( speed ) { prompt( obj.id, "Aud.SetSpeed(\f"+speed ); }
    /*#aud*/ obj.SetPitch = function( pitch ) { prompt( obj.id, "Aud.SetPitch(\f"+pitch ); }
    /*#aud*/ obj.Close = function() { prompt( obj.id, "Aud.Close(" ); }
    /*#aud*/ obj.Release = function() { prompt( obj.id, "Aud.Release(" ); _map[obj.id] = null; }
    /*#aud*/ obj.Destroy = function() { prompt( obj.id, "Aud.Release(" ); _map[obj.id] = null; }
    /*#aud*/ obj.Play = function( from ) { prompt( obj.id, "Aud.Play(\f"+from ); }
    /*#aud*/ obj.Pause = function() { prompt( obj.id, "Aud.Pause(" ); }
    /*#aud*/ obj.Stop = function() { prompt( obj.id, "Aud.Stop(" ); }
    /*#aud*/ obj.IsReady = function() { return prompt( obj.id, "Aud.IsReady(" )=="true"; }
	/*#aud*/ obj.IsPlaying = function() { return prompt( obj.id, "Aud.IsPlaying(" )=="true"; }
    /*#aud*/ obj.IsLooping = function() { return prompt( obj.id, "Aud.IsLooping(" )=="true"; }
    /*#aud*/ obj.SeekTo = function( time ) { prompt( obj.id, "Aud.SeekTo("+time ); }
    /*#aud*/ obj.GetPosition = function() { return parseFloat(prompt( obj.id, "Aud.GetPosition(" )); }
    /*#aud*/ obj.GetDuration = function() { return parseFloat(prompt( obj.id, "Aud.GetDuration(" )); }
    /*#aud*/ obj.SetVolume = function( left,right ) { prompt( obj.id, "Aud.SetVolume("+left+"\f"+right ); }
    /*#aud*/ obj.SetOnReady = function( callback ) { prompt( obj.id, "Aud.SetOnReady("+_Cbm(callback) ); }
    /*#aud*/ obj.SetOnComplete = function( callback ) { prompt( obj.id, "Aud.SetOnComplete("+_Cbm(callback) ); }
    /*#aud*/ obj.SetOnSeekDone = function( callback ) { prompt( obj.id, "Aud.SetOnSeekDone("+_Cbm(callback) ); }
    return obj;
}

function Dwn( id )
{
    var obj = new SObj( id, "Dwn" );
    /*#dwn*/ obj.GetType = function() { return "Downloader"; }
    /*#dwn*/ obj.Download = function( url,fldr,name,headers ) { prompt( obj.id, "Dwn.Download(\f"+url+"\f"+fldr+"\f"+name+"\f"+headers ); }
    /*#dwn*/ obj.IsComplete = function() { return prompt( obj.id, "Dwn.IsComplete(" )=="true"; }
    /*#dwn*/ obj.GetProgress = function() { return parseFloat(prompt( obj.id, "Dwn.GetProgress(" )); }
    /*#dwn*/ obj.GetSize = function() { return parseFloat(prompt( obj.id, "Dwn.GetSize(" )); }
    /*#dwn*/ obj.SetOnDownload = function( callback ) { prompt( obj.id, "Dwn.SetOnDownload(\f"+_Cbm(callback) ); }
    /*#dwn*/ obj.SetOnComplete = function( callback ) { prompt( obj.id, "Dwn.SetOnComplete(\f"+_Cbm(callback) ); }
    /*#dwn*/ obj.SetOnCancel = function( callback ) { prompt( obj.id, "Dwn.SetOnCancel(\f"+_Cbm(callback) ); }
    /*#dwn*/ obj.SetOnError = function( callback ) { prompt( obj.id, "Dwn.SetOnError(\f"+_Cbm(callback) ); }
    return obj;
}

function Med( id )
{
    var obj = new SObj( id, "Med" );
    /*#med*/ obj.GetType = function() { return "MediaStore"; }
    /*#med*/ obj.QueryMedia = function( filter,sort,options ) { prompt( obj.id, "Med.QueryMedia(\f"+filter+"\f"+sort+"\f"+options ); }
    /*#med*/ obj.SetOnMediaResult = function( callback ) { prompt( obj.id, "Med.SetOnMediaResult(\f"+_Cbm(callback) ); }
    /*#med*/ obj.QueryArtists = function( filter,sort,options ) { prompt( obj.id, "Med.QueryArtists(\f"+filter+"\f"+sort+"\f"+options ); }
    /*#med*/ obj.SetOnArtistsResult = function( callback ) { prompt( obj.id, "Med.SetOnArtistsResult(\f"+_Cbm(callback) ); }
    /*#med*/ obj.QueryAlbums = function( filter,sort,options ) { prompt( obj.id, "Med.QueryAlbums(\f"+filter+"\f"+sort+"\f"+options ); }
    /*#med*/ obj.SetOnAlbumsResult = function( callback ) { prompt( obj.id, "Med.SetOnAlbumsResult(\f"+_Cbm(callback) ); }
    /*#med*/ obj.GetAlbumArt = function( img,id,options ) { return prompt( obj.id, "Med.GetAlbumArt(\f"+(img?img.id:null)+"\f"+id+"\f"+options )=="true"; }
    /*#med*/ obj.GetSongArt = function( img,id,options ) { return prompt( obj.id, "Med.GetSongArt(\f"+(img?img.id:null)+"\f"+id+"\f"+options )=="true"; }
    return obj;
}

function Ply( id )
{
    var obj = new SObj( id, "Ply" );
    /*#ply*/ obj.GetType = function() { return "PlayStore"; }
    /*#ply*/ obj.GetBillingInfo = function( prodIDs,callback,options ) { ret = prompt( obj.id, "Ply.GetBillingInfo(\f"+prodIDs+"\f"+_Cbm(callback)+"\f"+options ); }
    /*#ply*/ obj.Purchase = function( prodID,token,callback,options ) { ret = prompt( obj.id, "Ply.Purchase(\f"+prodID+"\f"+token+"\f"+_Cbm(callback)+"\f"+options ); }
    /*#ply*/ obj.GetPurchases = function( callback,options ) { ret = prompt( obj.id, "Ply.GetPurchases(\f"+_Cbm(callback)+"\f"+options ); }
    return obj;
}

function Rec( id )
{
    var obj = new SObj( id, "Rec" );
    /*#rec*/ obj.GetType = function() { return "AudioRecorder"; }
    /*#rec*/ obj.SetFile = function( file ) { prompt( obj.id, "Rec.SetFile("+file ); }
    /*#rec*/ obj.SetSource = function( src ) { prompt( obj.id, "Rec.SetSource(\f"+src ); }
    /*#rec*/ obj.SetFrequency = function( freq ) { prompt( obj.id, "Rec.SetFrequency(\f"+freq ); }
    /*#rec*/ obj.Start = function() { prompt( obj.id, "Rec.Start(" ); }
    /*#rec*/ obj.Stop = function() { prompt( obj.id, "Rec.Stop(" ); }
    /*#rec*/ obj.Pause = function() { prompt( obj.id, "Rec.Pause(" ); }
    /*#rec*/ obj.GetRMS = function() { return parseFloat(prompt( obj.id, "Rec.GetRMS(" )); }
    /*#rec*/ obj.GetPeak = function() { return parseFloat(prompt( obj.id, "Rec.GetPeak(" )); }
    /*#rec*/ obj.GetData = function() { return JSON.parse(prompt( obj.id, "Rec.GetData(" )); }
    return obj;
}

function Sns( id )
{
    var obj = new SObj( id, "Sns" );
    /*#sns*/ obj.GetType = function() { return "Sensor"; }
    /*#sns*/ obj.SetOnChange = function( callback ) { prompt( obj.id, "Sns.SetOnChange("+_Cbm(callback) ); }
    /*#sns*/ obj.SetMinChange = function( min ) { prompt( obj.id, "Sns.SetMinChange("+min ); }
    /*#sns*/ obj.SetMaxRate = function( rate ) { prompt( obj.id, "Sns.SetMaxRate(\f"+rate ); }
    /*#sns*/ obj.GetNames = function() { return prompt( obj.id, "Sns.GetNames(" ); }
    /*#sns*/ obj.Start = function() { prompt( obj.id, "Sns.Start(" ); }
    /*#sns*/ obj.Stop = function() { prompt( obj.id, "Sns.Stop(" ); }
    /*#sns*/ obj.GetAzimuth = function() { return parseFloat(prompt( obj.id, "Sns.GetAzimuth(" )); }
    /*#sns*/ obj.GetPitch = function() { return parseFloat(prompt( obj.id, "Sns.GetPitch(" )); }
    /*#sns*/ obj.GetRoll = function() { return parseFloat(prompt( obj.id, "Sns.GetRoll(" )); }
    /*#sns*/ obj.GetValues = function() { return eval(prompt( obj.id, "Sns.GetValues(" )); }
    return obj;
}

function Loc( id )
{
    var obj = new SObj( id, "Loc" );
    /*#loc*/ obj.GetType = function() { return "Locator"; }
    /*#loc*/ obj.SetOnChange = function( callback ) { prompt( obj.id, "Loc.SetOnChange("+_Cbm(callback) ); }
    /*#loc*/ obj.Start = function() { prompt( obj.id, "Loc.Start(" ); }
    /*#loc*/ obj.Stop = function() { prompt( obj.id, "Loc.Stop(" ); }
    /*#loc*/ obj.SetRate = function( rate ) { prompt( obj.id, "Loc.SetRate("+rate ); }
    /*#loc*/ obj.GetDistanceTo = function( lat,lng ) { return parseFloat(prompt( obj.id, "Loc.GetDistanceTo("+lat+"\f"+lng )); }
    /*#loc*/ obj.GetBearingTo = function( lat,lng ) { return parseFloat(prompt( obj.id, "Loc.GetBearingTo("+lat+"\f"+lng )); }
    return obj;
}

function Pst( id )
{
    var obj = new SObj( id, "Pst" );
    /*#pst*/ obj.GetType = function() { return "PhoneState"; }
    /*#pst*/ obj.SetOnChange = function( callback ) { prompt( obj.id, "Pst.SetOnChange("+_Cbm(callback) ); }
    /*#pst*/ obj.Start = function() { prompt( obj.id, "Pst.Start(" ); }
    /*#pst*/ obj.Stop = function() { prompt( obj.id, "Pst.Stop(" ); }
    return obj;
}

function Cam( id )
{
    var obj = new Obj( id, "Cam" );
    /*#cam*/ obj.GetType = function() { return "CameraView"; }
    /*#cam*/ obj.StartPreview = function() { prompt( obj.id, "Cam.StartPreview(" ); }
    /*#cam*/ obj.StopPreview = function() { prompt( obj.id, "Cam.StopPreview(" ); }
    /*#cam*/ obj.Focus = function() { prompt( obj.id, "Cam.Focus(" ); }
    /*#cam*/ obj.SetFocusMode = function( mode ) { prompt( obj.id, "Cam.SetFocusMode(\f"+mode ); }
    /*#cam*/ obj.SetZoom = function( level ) { prompt( obj.id, "Cam.SetZoom(\f"+level ); }
    /*#cam*/ obj.GetZoom = function() { return parseInt(prompt( obj.id, "Cam.GetZoom(" )); }
    /*#cam*/ obj.GetMaxZoom = function() { return parseInt(prompt( obj.id, "Cam.GetMaxZoom(" )); }
    /*#cam*/ obj.SetOrientation = function( angle ) { prompt( obj.id, "Cam.SetOrientation(\f"+angle ); }
    /*#cam*/ obj.SetPostRotation = function( angle ) { prompt( obj.id, "Cam.SetPostRotation(\f"+angle ); }
    /*#cam*/ obj.SetPictureSize = function( width,height ) { prompt( obj.id, "Cam.SetPictureSize(\f"+width+"\f"+height ); }
    /*#cam*/ obj.SetVideoSize = function( width,height ) { prompt( obj.id, "Cam.SetVideoSize(\f"+width+"\f"+height ); }
    /*#cam*/ obj.GetPictureSizes = function() { return prompt( obj.id, "Cam.GetPictureSizes(" ); }
    /*#cam*/ obj.SetColorEffect = function( effect ) { prompt( obj.id, "Cam.SetColorEffect(\f"+effect ); }
    /*#cam*/ obj.GetColorEffects = function() { return prompt( obj.id, "Cam.GetColorEffects(" ); }
    /*#cam*/ obj.TakePicture = function( file ) { prompt( obj.id, "Cam.TakePicture("+file ); }
    /*#cam*/ obj.Record = function( file,seconds ) { prompt( obj.id, "Cam.Record(\f"+file+"\f"+seconds ); }
    /*#cam*/ obj.IsRecording = function() { return prompt( obj.id, "Cam.IsRecording(" )=="true"; }
    /*#cam*/ obj.Stop = function() { prompt( obj.id, "Cam.Stop(" ); }
    /*#cam*/ obj.Stream = function( ip,port,quality,fps,mtu ) { prompt( obj.id, "Cam.Stream("+ip+"\f"+port+"\f"+quality+"\f"+fps+"\f"+mtu ); }
    /*#cam*/ obj.HasFlash = function() { return prompt( obj.id, "Cam.HasFlash(" )=="true"; }
    /*#cam*/ obj.SetFlash = function( onoff ) { prompt( obj.id, "Cam.SetFlash("+onoff ); }
    /*#cam*/ obj.SetSound = function( onoff ) { prompt( obj.id, "Cam.SetSound("+onoff ); }
    /*#cam*/ obj.GetImageWidth = function() { return parseInt(prompt( obj.id, "Cam.GetImageWidth(" )); }
    /*#cam*/ obj.GetImageHeight = function() { return parseInt(prompt( obj.id, "Cam.GetImageHeight(" )); }
    /*#cam*/ obj.GetCameraCount = function() { return parseInt(prompt( obj.id, "Cam.GetCameraCount(" )); }
    /*#cam*/ obj.SetPreviewImage = function( img ) { prompt( obj.id, "Cam.SetPreviewImage("+(img?img.id:null) ); }
    /*#cam*/ obj.SetDuplicateImage = function( img1,img2 ) { prompt( obj.id, "Cam.SetDuplicateImage(\f"+(img1?img1.id:null)+"\f"+(img2?img2.id:null) ); }
    /*#cam*/ obj.MotionMosaic = function( xtiles,ytiles,sensitivity,minPeriod,img ) { prompt( obj.id, "Cam.MotionMosaic("+xtiles+"\f"+ytiles+"\f"+sensitivity+"\f"+minPeriod+"\f"+(img?img.id:null) ); }
    /*#cam*/ obj.ReportColors = function( list,callback,sampSize,maxRate ) { prompt( obj.id, "Cam.ReportColors(\f"+list+"\f"+_Cbm(callback)+"\f"+sampSize+"\f"+maxRate ); }
    /*#cam*/ obj.AutoCapture = function( path,file,maxCount ) { prompt( obj.id, "Cam.AutoCapture("+path+"\f"+file+"\f"+maxCount ); }
    /*#cam*/ obj.SetOnReady = function( callback ) { prompt( obj.id, "Cam.SetOnReady("+_Cbm(callback) ); }
    /*#cam*/ obj.SetOnMotion = function( callback ) { prompt( obj.id, "Cam.SetOnMotion("+_Cbm(callback) ); }
    /*#cam*/ obj.SetOnPicture = function( callback ) { prompt( obj.id, "Cam.SetOnPicture\f"+_Cbm(callback) ); }
    /*#cam*/ obj.SetOnFocus = function( callback ) { prompt( obj.id, "Cam.SetOnFocus\f"+_Cbm(callback) ); }
    /*#cam*/ obj.GetPixelData = function( format,left,top,width,height ) { return prompt( obj.id, "Cam.GetPixelData(\f"+format+"\f"+left+"\f"+top+"\f"+width+"\f"+height ); }
    /*#cam*/ obj.FindFaces = function( max ) { return eval(prompt( obj.id, "Cam.FindFaces(\f"+max )); }
    /*#cam*/ obj.GetParameters = function() { return prompt( obj.id, "Cam.GetParams(\f" ); }
    /*#cam*/ obj.SetParameter = function( name,value ) { if( typeof value=="string" ) prompt( obj.id, "Cam.SetParam(\f"+name+"\f"+value ); else prompt( obj.id, "Cam.SetParamNum(\f"+name+"\f"+value ); }
    return obj;
}

function Vid( id )
{
    var obj = new Obj( id, "Vid" );
    /*#vid*/ obj.GetType = function() { return "VideoView"; }
    /*#vid*/ obj.SetFile = function( file ) { prompt( obj.id, "Vid.SetFile("+file ); }
    /*#vid*/ obj.SetSubtitles = function( file ) { prompt( obj.id, "Vid.SetSubtitles(\f"+file ); }
    /*#vid*/ obj.Play = function() { prompt( obj.id, "Vid.Play(" ); }
    /*#vid*/ obj.Pause = function() { prompt( obj.id, "Vid.Pause(" ); }
    /*#vid*/ obj.Stop = function() { prompt( obj.id, "Vid.Stop(" ); }
    /*#vid*/ obj.IsReady = function() { return prompt( obj.id, "Vid.IsReady(" )=="true"; }
	/*#vid*/ obj.IsPlaying = function() { return prompt( obj.id, "Vid.IsPlaying(" )=="true"; }
    /*#vid*/ obj.SeekTo = function( secs ) { prompt( obj.id, "Vid.SeekTo("+secs ); }
    /*#vid*/ obj.GetPosition = function() { return parseFloat(prompt( obj.id, "Vid.GetPosition(" )); }
    /*#vid*/ obj.GetDuration = function() { return parseFloat(prompt( obj.id, "Vid.GetDuration(" )); }
    /*#vid*/ obj.SetVolume = function( left,right ) { prompt( obj.id, "Vid.SetVolume(\f"+left+"\f"+right ); }
    /*#vid*/ obj.SetOnReady = function( callback ) { prompt( obj.id, "Vid.SetOnReady("+_Cbm(callback) ); }
    /*#vid*/ obj.SetOnComplete = function( callback ) { prompt( obj.id, "Vid.SetOnComplete("+_Cbm(callback) ); }
    /*#vid*/ obj.SetOnError = function( callback ) { prompt( obj.id, "Vid.SetOnError("+_Cbm(callback) ); }
    /*#vid*/ obj.SetOnSubtitle = function( callback ) { prompt( obj.id, "Vid.SetOnSubtitle(\f"+_Cbm(callback) ); }
    return obj;
}

function GLV( id )
{
    var obj = new Obj( id, "GLV" );
    /*#glv*/ obj.GetType = function() { return "GLView"; }
    /*#glv*/ obj.Release = function() { prompt( obj.id, "GLV.Release(" ); _map[obj.id] = null; }
    /*#glv*/ obj.Destroy = function() { prompt( obj.id, "GLV.Release(" ); _map[obj.id] = null; }
    /*#glv*/ obj.Execute = function( p1,p2,p3,p4 ) { prompt( obj.id, "GLV.Execute(\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
    /*#glv*/ obj.Exec = function( p1,p2,p3,p4 ) { _gfx.Exec( p1,p2,p3,p4 ); }
    /*#glv*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "GLV.SetOnTouch(\f"+_Cbm(callback) ); }
    /*#glv*/ obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "GLV.SetOnTouchUp(\f"+_Cbm(callback) ); }
    /*#glv*/ obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "GLV.SetOnTouchMove(\f"+_Cbm(callback) ); }
    /*#glv*/ obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "GLV.SetOnTouchDown(\f"+_Cbm(callback) ); }
    /*#glv*/ obj.SetTouchable = function( touchable ) { prompt( obj.id, "GLV.SetTouchable(\f"+touchable ); }
    return obj;
}

function WGL( id )
{
    var obj = new Obj( id, "WGL" );
    /*#wgl*/ obj.GetType = function() { return "GameView"; }
    /*#wgl*/ obj.Destroy = function() { prompt( obj.id, "WGL.Destroy(" ); _map[obj.id] = null; }
    /*#wgl*/ obj.SetFile = function( file ) { prompt( obj.id, "WGL.SetFile(\f"+file ); }
    /*#wgl*/ obj.Execute = function( js ) { prompt( obj.id, "WGL.Execute(\f"+js ); }
    /*#wgl*/ obj.SetFrameRate = function( fps ) { prompt( obj.id, "WGL.SetFrameRate(\f"+fps ); }
    //obj.SetOnTouch = function( callback ) { prompt( obj.id, "WGL.SetOnTouch(\f"+_Cbm(callback) ); }
    //obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "WGL.SetOnTouchUp(\f"+_Cbm(callback) ); }
    //obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "WGL.SetOnTouchMove(\f"+_Cbm(callback) ); }
    //obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "WGL.SetOnTouchDown(\f"+_Cbm(callback) ); }
    //obj.SetTouchable = function( touchable ) { prompt( obj.id, "WGL.SetTouchable(\f"+touchable ); }
    return obj;
}

function Nxt( id, nxtHelper )
{
    var obj = new SObj( id, "Nxt" );
    var nxtHelp = nxtHelper;
    /*#nxt*/ obj.GetType = function() { return "NxtRemote"; }
    /*#nxt*/ obj.Connect = function( name ) { return prompt( obj.id, "Nxt.Connect("+name )=="true"; }
    /*#nxt*/ obj.SetOnConnect = function( callback ) { prompt( obj.id, "Nxt.SetOnConnect("+_Cbm(callback) ); }
    /*#nxt*/ obj.SetOnConnectEx = function( callback ) { prompt( obj.id, "Nxt.SetOnConnect("+callback ); }
    /*#nxt*/ obj.Disconnect = function() { prompt( obj.id, "Nxt.Disconnect(" ); }
	/*#nxt*/ obj.IsEnabled = function() { return prompt( obj.id, "Nxt.IsEnabled(" )=="true"; }
	/*#nxt*/ obj.IsBluetoothEnabled = function() { return prompt( obj.id, "Nxt.IsEnabled(" )=="true"; }
	/*#nxt*/ obj.RequestEnable = function() { prompt( obj.id, "Nxt.RequestEnable(" ); }
	/*#nxt*/ obj.IsPaired = function( name ) { return prompt( obj.id, "Nxt.IsPaired("+name )=="true"; }
    /*#nxt*/ obj.IsConnected = function() { return prompt( obj.id, "Nxt.IsConnected(" )=="true"; }
    /*#nxt*/ obj.IsMotorIdle = function( motor ) { return prompt( obj.id, "Nxt.IsMotorIdle("+motor )=="true"; }
    /*#nxt*/ obj.GetRotationCount = function( motor ) { return parseFloat(prompt( obj.id, "Nxt.GetRotationCount(\f"+motor )); }
	/*#nxt*/ obj.Beep = function( freq,dur ) { prompt( obj.id, "Nxt.Beep("+freq+"\f"+dur ); }
	/*#nxt*/ obj.SetInvert = function( invert ) { prompt( obj.id, "Nxt.SetInvert("+invert ); }
	/*#nxt*/ obj.Drive = function( motors,power,rotations,options ) { prompt( obj.id, "Nxt.Drive("+motors+"\f"+power+"\f"+rotations+"\f"+options ); }
	/*#nxt*/ obj.Brake = function( motors ) { prompt( obj.id, "Nxt.Brake("+motors ); }
	/*#nxt*/ obj.Stop = function( motors ) { prompt( obj.id, "Nxt.Stop("+motors ); }
	/*#nxt*/ obj.Reset = function( motors ) { prompt( obj.id, "Nxt.Reset(\f"+motors ); }
	/*#nxt*/ obj.SendMail = function( mailbox,type,msg ) { prompt( obj.id, "Nxt.SendMail("+mailbox+"\f"+type+"\f"+msg ); }
	/*#nxt*/ obj.ReadMail = function( mailbox,type,remove ) { var ret = prompt( obj.id, "Nxt.ReadMail("+mailbox+"\f"+type+"\f"+remove );
		if(type.toLowerCase()=="number") return parseFloat(ret); else if(type.toLowerCase()=="logic") return (ret=="true"); else return ret; }
	/*#nxt*/ obj.SetLampColor = function( input,clr ) { prompt( obj.id, "Nxt.SetLampColor("+input+"\f"+clr ); }
	/*#nxt*/ obj.PlaySoundFile = function( file,repeat ) { prompt( obj.id, "Nxt.PlaySoundFile("+file+"\f"+repeat ); }
	/*#nxt*/ obj.ReadSoundSensor = function( input,mode ) { return parseInt(prompt( obj.id, "Nxt.ReadSoundSensor("+input+"\f"+mode )); }
	/*#nxt*/ obj.ReadColorSensor = function( input,mode ) { return parseInt(prompt( obj.id, "Nxt.ReadColorSensor("+input+"\f"+mode )); }
	/*#nxt*/ obj.ToColorName = function( val ) { return prompt( obj.id, "Nxt.ToColorName("+val ); }
	/*#nxt*/ obj.ReadLightSensor = function( input,active ) { return parseInt(prompt( obj.id, "Nxt.ReadLightSensor("+input+"\f"+active )); }
	/*#nxt*/ obj.ReadTouchSensor = function( input ) { return prompt( obj.id, "Nxt.ReadTouchSensor("+input )=="1"; }
	/*#nxt*/ obj.ReadDistanceSensor = function( input ) { return parseInt(prompt( obj.id, "Nxt.ReadDistanceSensor("+input )); }
	/*#nxt*/ obj.GetCurrentProgram = function() { return prompt( obj.id, "Nxt.GetCurrentProgram(" ); }
	/*#nxt*/ obj.StartProgram = function( name ) { prompt( obj.id, "Nxt.StartProgram("+name ); }
	/*#nxt*/ obj.StopProgram = function() { prompt( obj.id, "Nxt.StopProgram(" ); }
	/*#nxt*/ obj.FileFindFirst = function( pattern ) { if( _inf ) _inf.Release(); var ret = prompt( obj.id, "Nxt.FileFindFirst("+pattern ); if( ret ) _inf = new Inf(ret); else _inf = null; return _inf; }
	/*#nxt*/ obj.FileFindNext = function( handle ) { if( _inf ) _inf.Release(); var ret = prompt( obj.id, "Nxt.FileFindNext("+handle ); if( ret ) _inf = new Inf(ret); else _inf = null; return _inf; }

	//Helper functions.
	/*#nxt*/ obj.ShowDevices = function() { nxtHelp.nxt_ShowDevices(); }
	/*#nxt*/ obj.CheckConnection = function() { return nxtHelp.nxt_CheckConnection(); }
	/*#nxt*/ obj.SetOnConnected = function( callback ) { nxtHelp.nxt_OnConnected = callback; }
	/*#nxt*/ obj.GetBtName = function() { return nxtHelp.nxtName; }
	/*#nxt*/ obj.GetBtAddress = function() { return nxtHelp.nxtAddress; }
	return obj;
}

function Bts( id )
{
    var obj = new SObj( id, "Bts" );
    /*#bts*/ obj.GetType = function() { return "BluetoothSerial"; }
    /*#bts*/ obj.Connect = function( name,channel ) { return prompt( obj.id, "Bts.Connect("+name+"\f"+channel )=="true"; }
    /*#bts*/ obj.Listen = function( enabled ) { prompt( obj.id, "Bts.Listen(\f" + enabled ) }
    /*#bts*/ obj.SetOnConnect = function( callback ) { prompt( obj.id, "Bts.SetOnConnect("+_Cbm(callback) ); }
    /*#bts*/ obj.SetOnDisconnect = function( callback ) { prompt( obj.id, "Bts.SetOnDisconnect(\f"+_Cbm(callback) ); }
    /*#bts*/ obj.Disconnect = function() { prompt( obj.id, "Bts.Disconnect(" ); }
	/*#bts*/ obj.IsBluetoothEnabled = function() { return prompt( obj.id, "Bts.IsEnabled(" )=="true"; }
	/*#bts*/ obj.RequestEnable = function() { prompt( obj.id, "Bts.RequestEnable(" ); }
	/*#bts*/ obj.IsPaired = function( name ) { return prompt( obj.id, "Bts.IsPaired("+name )=="true"; }
    /*#bts*/ obj.IsConnected = function() { return prompt( obj.id, "Bts.IsConnected(" )=="true"; }
    /*#bts*/ obj.Write = function( data ) { prompt( obj.id, "Bts.Write("+data ); }
    /*#bts*/ obj.SetOnReceive = function( callback ) { prompt( obj.id, "Bts.SetOnReceive("+_Cbm(callback) ); }
    /*#bts*/ obj.SetDataMode = function( mode ) { prompt( obj.id, "Bts.SetDataMode(\f"+mode ); }
    /*#bts*/ obj.SetSplitMode = function( mode,p2,p3 ) { prompt( obj.id, "Bts.SetSplitMode("+mode+"\f"+p2+"\f"+p3 ); }
    /*#bts*/ obj.SetTimeout = function( ms ) { prompt( obj.id, "Bts.SetTimeout("+ms ); }
    /*#bts*/ obj.Clear = function() { prompt( obj.id, "Bts.Clear("); }
	return obj;
}

function Zip( id )
{
    var obj = new SObj( id, "Zip" );
    /*#zip*/ obj.GetType = function() { return "ZipUtil"; }
    /*#zip*/ obj.Open = function( file ) { prompt( obj.id, "Zip.Open(\f"+file ); }
    /*#zip*/ obj.Create = function( file ) { prompt( obj.id, "Zip.Create(\f"+file ); }
    /*#zip*/ obj.Close = function() { prompt( obj.id, "Zip.Close(" ); }
    /*#zip*/ obj.List = function( path ) { return prompt( obj.id, "Zip.List(\f"+path ); }
    /*#zip*/ obj.Extract = function( name,file ) { prompt( obj.id, "Zip.Extract(\f"+name+"\f"+file ); }
    /*#zip*/ obj.AddFile = function( name,file ) { prompt( obj.id, "Zip.AddFile(\f"+name+"\f"+file ); }
    /*#zip*/ obj.AddText = function( name,text ) { prompt( obj.id, "Zip.AddText(\f"+name+"\f"+text ); }
    /*#zip*/ obj.CreateKey = function( file,pass,name,org ) { prompt( obj.id, "Zip.CreateKey(\f"+file+"\f"+pass+"\f"+name+"\f"+org ); }
    /*#zip*/ obj.CreateDebugKey = function( file ) { prompt( obj.id, "Zip.CreateDebugKey(\f"+file ); }
    /*#zip*/ obj.Sign = function( fileIn,fileOut,keyStore,pass ) { return prompt( obj.id, "Zip.Sign(\f"+fileIn+"\f"+fileOut+"\f"+keyStore+"\f"+pass )=="true"; }
    /*#zip*/ obj.UpdateManifest = function( fileIn, fileOut, packageName, appName, permissions, options ) { prompt( obj.id, "Zip.UpdateManifest(\f"+fileIn+"\f"+fileOut+"\f"+packageName+"\f"+appName+"\f"+permissions+"\f"+options ); }
	return obj;
}

function Not( id )
{
    var obj = new SObj( id, "Not" );
    /*#not*/ obj.GetType = function() { return "Notification"; }
    /*#not*/ obj.SetMessage = function( ticker,title,text,extra ) { prompt( obj.id, "Not.SetMessage(\f"+ticker+"\f"+title+"\f"+text+"\f"+extra ); }
    /*#not*/ obj.Notify = function( id ) { prompt( obj.id, "Not.Notify(\f"+id ); }
    /*#not*/ obj.Cancel = function( id ) { prompt( obj.id, "Not.Cancel(\f"+id ); }
    /*#not*/ obj.SetLargeImage = function( image ) { if( image.id ) prompt( obj.id, "Not.SetLargeImage(\f"+(image?image.id:null) );
		else prompt( obj.id, "Not.SetLargeImageFile(\f"+image ); }
	/*#not*/ obj.SetSmallImage = function( image ) { if( image.id ) prompt( obj.id, "Not.SetSmallImage(\f"+(image?image.id:null) );
		else prompt( obj.id, "Not.SetSmallImageFile(\f"+image ); }
    /*#not*/ obj.SetLights = function( color,onMs,offMs ) { prompt( obj.id, "Not.SetLights(\f"+color+"\f"+onMs+"\f"+offMs ); }
    /*#not*/ obj.Listen = function( options ) { prompt( obj.id, "Not.Listen(\f"+options ); }
    /*#not*/ obj.SetOnNotify = function( callback ) { prompt( obj.id, "Not.SetOnNotify(\f"+_Cbm(callback) ); }
    return obj;
}

function Crp( id )
{
    var obj = new SObj( id, "Crp" );
    /*#crp*/ obj.GetType = function() { return "Crypt"; }
    /*#crp*/ obj.Hash = function( text,mode,options ) { return prompt( obj.id, "Crp.Hash\f"+text+"\f"+mode+"\f"+options ); }
    /*#crp*/ obj.Encrypt = function( text,password ) { return prompt( obj.id, "Crp.Encrypt\f"+text+"\f"+password ); }
    /*#crp*/ obj.Decrypt = function( text,password ) { return prompt( obj.id, "Crp.Decrypt\f"+text+"\f"+password ); }
   	return obj;
}

function Spr( id )
{
    var obj = new SObj( id, "Spr" );
    /*#spr*/ obj.GetType = function() { return "SpeechRec"; }
    /*#spr*/ obj.Destroy = function() { prompt( obj.id, "Spr.Destroy(" ); _map[obj.id] = null; }
    /*#spr*/ obj.Recognize = function() { return prompt( obj.id, "Spr.Recognize(\f" ); }
    /*#spr*/ obj.Stop = function() { prompt( obj.id, "Spr.Stop(" ); }
    /*#spr*/ obj.Cancel = function() { prompt( obj.id, "Spr.Cancel(" ); }
    /*#spr*/ obj.GetRMS = function() { return parseFloat(prompt( obj.id, "Spr.GetRMS(" )); }
    /*#spr*/ obj.IsListening = function() { return prompt( obj.id, "Spr.IsListening(")=="true"; }
    /*#spr*/ obj.SetOnReady = function( callback ) { prompt( obj.id, "Spr.SetOnReady(\f"+_Cbm(callback) ); }
    /*#spr*/ obj.SetOnResult = function( callback ) { prompt( obj.id, "Spr.SetOnResult(\f"+_Cbm(callback) ); }
    /*#spr*/ obj.SetOnError = function( callback ) { prompt( obj.id, "Spr.SetOnError(\f"+_Cbm(callback) ); }
   	return obj;
}

function Inf( id )
{
	var obj = new SObj( id, "Inf" );
	/*#inf*/ obj.GetType = function() { return "NxtInfo"; }
	/*#inf*/ obj.GetName = function() { return prompt( obj.id, "Inf.GetName(" ); }
	/*#inf*/ obj.GetHandle = function() { return parseInt( prompt( obj.id, "Inf.GetHandle(" )); }
	/*#inf*/ obj.GetSize = function() { return parseInt( prompt( obj.id, "Inf.GetSize(" )); }
	return obj;
}

function SMS( id )
{
    var obj = new SObj( id, "SMS" );
    /*#sms*/ obj.GetType = function() { return "SMS"; }
	/*#sms*/ obj.Send = function( number,msg,options ) { prompt( obj.id, "SMS.Send(\f"+number+"\f"+msg+"\f"+options ); }
	/*#sms*/ obj.SetOnStatus = function( callback ) { prompt( obj.id, "SMS.SetOnStatus("+_Cbm(callback) ); }
	/*#sms*/ obj.SetOnMessage = function( callback ) { prompt( obj.id, "SMS.SetOnMessage("+_Cbm(callback) ); }
	return obj;
}

function EMAIL( id )
{
    var obj = new SObj( id, "EML" );
    /*#email*/ obj.GetType = function() { return "Email"; }
    /*#email*/ obj.SetSMTP = function( server,port ) { prompt( obj.id, "EML.SetSMTP("+server+"\f"+port ); }
    /*#email*/ obj.SetIMAP = function( server,port ) { prompt( obj.id, "EML.SetIMAP("+server+"\f"+port ); }
	/*#email*/ obj.Send = function( subject,body,sender,recipients,attach ) { prompt( obj.id, "EML.Send(\f"+subject+"\f"+body+"\f"+sender+"\f"+recipients+"\f"+attach ); }
	/*#email*/ obj.Receive = function( folder,maxCount,filter ) { prompt( obj.id, "EML.Receive("+folder+"\f"+maxCount+"\f"+filter ); }
	/*#email*/ obj.SetOnStatus = function( callback ) { prompt( obj.id, "EML.SetOnStatus("+_Cbm(callback) ); }
	/*#email*/ obj.SetOnMessage = function( callback ) { prompt( obj.id, "EML.SetOnMessage("+_Cbm(callback) ); }
	return obj;
}

function Wbs( id )
{
	var obj = new SObj( id, "Wbs" );
	/*#wbs*/ obj.GetType = function() { return "WebServer"; }
	/*#wbs*/ obj.Destroy = function() { prompt( obj.id, "Wbs.Destroy(" ); _map[obj.id] = null; }
	/*#wbs*/ obj.SetFolder = function( folder ) { prompt( obj.id, "Wbs.SetFolder(\f"+folder ); }
	/*#wbs*/ obj.SetUploadFolder = function( folder ) { prompt( obj.id, "Wbs.SetUploadFolder(\f"+folder ); }
    /*#wbs*/ obj.Start = function() { prompt( obj.id, "Wbs.Start(" ); }
    /*#wbs*/ obj.Stop = function() { prompt( obj.id, "Wbs.Stop(" ); }
    /*#wbs*/ obj.SetResponse = function( text ) { prompt( obj.id, "Wbs.SetResponse("+text ); }
    /*#wbs*/ obj.AddRedirect = function( pattern,location ) { prompt( obj.id, "Wbs.AddRedirect(\f"+pattern+"\f"+location ); }
    /*#wbs*/ obj.AddServlet = function( path,callback ) { prompt( obj.id, "Wbs.AddServlet("+path+"\f"+_Cbm(callback) ); }
    /*#wbs*/ obj.SendText = function( txt,ip,id ) { prompt( obj.id, "Wbs.SendText(\f"+txt+"\f"+ip+"\f"+id ); }
    /*#wbs*/ obj.Disconnect = function( ip,id ) { prompt( obj.id, "Wbs.Disconnect(\f"+ip+"\f"+id ); }
    /*#wbs*/ obj.GetWebSockClients = function() { return eval(prompt( obj.id, "Wbs.GetWebSockClients(" )); }
    /*#wbs*/ obj.SetOnReceive = function( callback ) { prompt( obj.id, "Wbs.SetOnReceive(\f"+_Cbm(callback) ); }
    /*#wbs*/ obj.SetOnUpload = function( callback ) { prompt( obj.id, "Wbs.SetOnUpload(\f"+_Cbm(callback) ); }
    return obj;
}

function Usb( id )
{
	var obj = new SObj( id, "Usb" );
	/*#usb*/ obj.GetType = function() { return "USBSerial"; }
    /*#usb*/ obj.Start = function() { prompt( obj.id, "Usb.Start(" ); }
    /*#usb*/ obj.Stop = function() { prompt( obj.id, "Usb.Stop(" ); }
    /*#usb*/ obj.Write = function( txt,encoding ) { prompt( obj.id, "Usb.Write(\f"+txt+"\f"+encoding ); }
    /*#usb*/ obj.SetOnReceive = function( callback ) { prompt( obj.id, "Usb.SetOnReceive("+_Cbm(callback) ); }
    /*#usb*/ obj.SetDTR = function( onOff ) { prompt( obj.id, "Usb.SetDTR(\f"+onOff ); }
    /*#usb*/ obj.GetDTR = function() { return prompt( obj.id, "Usb.GetDTR(" )=="true"; }
    /*#usb*/ obj.SetRTS = function( onOff ) { prompt( obj.id, "Usb.SetRTS(\f"+onOff ); }
    /*#usb*/ obj.GetRTS = function() { return prompt( obj.id, "Usb.GetRTS(" )=="true"; }
    /*#usb*/ obj.GetCD = function() { return prompt( obj.id, "Usb.GetCD(" )=="true"; }
    /*#usb*/ obj.SetMaxRead = function( bytes ) { prompt( obj.id, "Usb.SetMaxRead(\f"+bytes ); }
    /*#usb*/ obj.SetMaxWrite = function( bytes ) { prompt( obj.id, "Usb.SetMaxWrite(\f"+bytes ); }
    /*#usb*/ obj.SetTimeout = function( ms ) { prompt( obj.id, "Usb.SetTimeout(\f"+ms ); }
    /*#usb*/ obj.IsConnected = function() { return prompt( obj.id, "Usb.IsConnected(" )=="true"; }
    /*#usb*/ obj.SetDataMode = function( mode ) { prompt( obj.id, "Usb.SetDataMode(\f"+mode ); }
    /*#usb*/ obj.SetSplitMode = function( mode,p2,p3 ) { prompt( obj.id, "Usb.SetSplitMode(\f"+mode+"\f"+p2+"\f"+p3 ); }
    return obj;
}

function Sys( id )
{
	var obj = new SObj( id, "Sys" );
	/*#sys*/ obj.GetType = function() { return "SysProc"; }
	/*#sys*/ obj.Destroy  = function() { prompt( obj.id, "Sys.Destroy(" ); _map[obj.id] = null; }
    /*#sys*/ obj.Out = function( cmd ) { prompt( obj.id, "Sys.Out(\f"+cmd ); }
    /*#sys*/ obj.In = function( maxLines, options ) { return prompt( obj.id, "Sys.In(\f"+maxLines+"\f"+options ); }
    /*#sys*/ obj.Err = function( maxLines, options ) { return prompt( obj.id, "Sys.Err(\f"+maxLines+"\f"+options ); }
    /*#sys*/ obj.ReadFileAsByte = function( file ) { return parseInt(prompt( obj.id, "Sys.ReadFileAsByte(\f"+file )); }
    /*#sys*/ obj.WriteToFile = function( file,data ) { prompt( obj.id, "Sys.WriteToFile(\f"+file+"\f"+data ); }
    /*#sys*/ obj.SetOnInput = function( callback ) { prompt( obj.id, "Sys.SetOnInput(\f"+_Cbm(callback) ); }
    /*#sys*/ obj.SetOnError = function( callback ) { prompt( obj.id, "Sys.SetOnError(\f"+_Cbm(callback) ); }
    return obj;
}

function Fil( id )
{
	var obj = new SObj( id, "Fil" );
	/*#fil*/ obj.GetType = function() { return "File"; }
    /*#fil*/ obj.Close = function() { prompt( obj.id, "Fil.Close(" ); }
    /*#fil*/ obj.ReadText = function( type ) { return prompt( obj.id, "Fil.ReadText(\f"+type ); }
    /*#fil*/ obj.ReadTextAsync = function( type,callback ) { return prompt( obj.id, "Fil.ReadTextAsync(\f"+type+"\f"+_Cbm(callback) ); }
    /*#fil*/ obj.WriteText = function( data,type ) { prompt( obj.id, "Fil.WriteText(\f"+data+"\f"+type ); }
    /*#fil*/ obj.ReadNumber = function( type ) { return parseFloat(prompt( obj.id, "Fil.ReadNumber(\f"+type )); }
    /*#fil*/ obj.WriteNumber = function( data,type ) { prompt( obj.id, "Fil.WriteNumber(\f"+data+"\f"+type ); }
    /*#fil*/ obj.ReadData = function( len,mode ) { return eval(prompt( obj.id, "Fil.ReadData(\f"+len+"\f"+mode )); }
    /*#fil*/ obj.WriteData = function( data,mode ) { prompt( obj.id, "Fil.WriteData(\f"+data+"\f"+mode ); }
    /*#fil*/ obj.Seek = function( offset ) { prompt( obj.id, "Fil.Seek(\f"+offset ); }
    /*#fil*/ obj.Skip = function( bytes ) { prompt( obj.id, "Fil.Skip(\f"+bytes ); }
    /*#fil*/ obj.GetPointer = function() { return parseInt(prompt( obj.id, "Fil.GetPointer(" )); }
    /*#fil*/ obj.GetLength = function() { return parseInt(prompt( obj.id, "Fil.GetLength(" )); }
    /*#fil*/ obj.SetLength = function( len ) { prompt( obj.id, "Fil.SetLength(\f"+len ); }
	return obj;
}

function Plg( id )
{
	var obj = new SObj( id, "Plg" );
	/*#plg*/ obj.GetType = function() { return "Plugin"; }
    /*#plg*/ obj.Send = function( cmd,p1,p2,p3,p4,p5,p6,p7,p8 ) {
		return prompt( obj.id, "Plg.Send\f"+cmd+"\f"+typeof p1+"\f"+p1+"\f"+typeof p2+"\f"+p2+"\f"+typeof p3+"\f"+p3+"\f"+typeof p4+"\f"+p4+"\f"+typeof p5+"\f"+p5+"\f"+typeof p6+"\f"+p6+"\f"+typeof p7+"\f"+p7+"\f"+typeof p8+"\f"+p8 );
	}
	/*#plg*/ obj.SendObj = function( cmd,ob,p1,p2,p3,p4,p5,p6,p7,p8 ) {
		return prompt( obj.id, "Plg.SendObj\f"+cmd+"\f"+(ob?ob.id:null)+"\f"+typeof p1+"\f"+p1+"\f"+typeof p2+"\f"+p2+"\f"+typeof p3+"\f"+p3+"\f"+typeof p4+"\f"+p4+"\f"+typeof p5+"\f"+p5+"\f"+typeof p6+"\f"+p6+"\f"+typeof p7+"\f"+p7+"\f"+typeof p8+"\f"+p8 );
	}
	/*#plg*/ obj.CreateObj = function( type,p1,p2,p3,p4,p5,p6,p7,p8 ) {
		return prompt( obj.id, "Plg.CreateObj\f"+type+"\f"+typeof p1+"\f"+p1+"\f"+typeof p2+"\f"+p2+"\f"+typeof p3+"\f"+p3+"\f"+typeof p4+"\f"+p4+"\f"+typeof p5+"\f"+p5+"\f"+typeof p6+"\f"+p6+"\f"+typeof p7+"\f"+p7+"\f"+typeof p8+"\f"+p8 );
	}
	/*#plg*/ obj.SendImg = function( cmd,img,width,height ) { return prompt( obj.id, "Plg.SendImg\f"+cmd+"\f"+(img?img.id:null)+"\f"+width+"\f"+height ); }
    /*#plg*/ obj.SendCam = function( cmd,cam ) { return prompt(obj.id, "Plg.SendCam\f"+cmd+"\f"+(cam?cam.id:null) ); }
    /*#plg*/ obj.Destroy = function() { prompt(obj.id, "Plg.Destroy" ); }
    return obj;
}

function Svc( id )
{
	var obj = new SObj( id, "Svc" );
	/*#svc*/ obj.GetType = function() { return "Service"; }
	/*#svc*/ obj.Stop = function() { prompt( obj.id, "Svc.Stop(" ); }
    /*#svc*/ obj._Send = function( cmd,p1,p2,p3,p4,p5,p6,p7 ) {
		prompt( obj.id, "Svc.Send(\f"+cmd+"\f"+typeof p1+"\f"+p1+"\f"+typeof p2+"\f"+p2+"\f"+typeof p3+"\f"+p3+"\f"+typeof p4+"\f"+p4+"\f"+typeof p5+"\f"+p5+"\f"+typeof p6+"\f"+p6+"\f"+typeof p7+"\f"+p7 );
	}
	/*#svc*/ obj._SendImg = function( cmd,img ) { prompt( obj.id, "Svc.SendImg(\f"+cmd+"\f"+(img?img.id:null) ); }
	/*#svc*/ obj.SendMessage = function( msg ) { prompt( obj.id, "Svc.SendMsg(\f"+msg ); }
	/*#svc*/ obj.SetOnMessage = function( callback ) { prompt( obj.id, "Svc.SetOnMessage(\f"+_Cbm(callback) ); }
	/*#svc*/ obj.SetInForeground = function( title,text,largeIcon,smallIcon,importance ) { prompt( obj.id, "Svc.SetInForeground(\f"+title+"\f"+text+"\f"+largeIcon+"\f"+smallIcon+"\f"+importance ); }
	/*#svc*/ obj.SetInBackground = function() { prompt( obj.id, "Svc.SendMsg(\f"+"_background" ); }
    return obj;
}

function Syn( id )
{
	var obj = new SObj( id, "Syn" );
	/*#syn*/ obj.GetType = function() { return "Synth"; }
    /*#syn*/ obj.Start = function() { prompt( this.id, "Syn.Start(" ); }
    /*#syn*/ obj.Stop = function() { prompt( this.id, "Syn.Stop(" ); }
    /*#syn*/ obj.PlayTone = function( freq,dur) { prompt( this.id, "Syn.PlayTone("+freq+"\f"+dur ); }
    /*#syn*/ obj.PlayNote = function( note ) { prompt( this.id, "Syn.PlayNote("+note ); }
    /*#syn*/ obj.PlayMidiTune = function( tune ) { prompt( this.id, "Syn.PlayMidiTune("+tune ); }
    /*#syn*/ obj.SetFrequency = function( freq ) { prompt( this.id, "Syn.SetFrequency("+freq ); }
    /*#syn*/ obj.SetWaveShape = function( shape ) { prompt( this.id, "Syn.SetWaveShape("+shape ); }
    /*#syn*/ obj.SetVolume = function( left,right ) { prompt( this.id, "Syn.SetVolume("+left+"\f"+right ); }
    /*#syn*/ obj.SetNoteLength = function( dur ) { prompt( this.id, "Syn.SetNoteLength("+dur ); }

    /*#syn*/ obj.SetVca = function( attack,decay,sustain,release ) { prompt( this.id, "Syn.SetVca\f"+attack+"\f"+decay+"\f"+sustain+"\f"+release ); }
    /*#syn*/ obj.SetVcaAttack = function( attack ) { prompt( this.id, "Syn.SetVcaAttack("+attack ); }
    /*#syn*/ obj.SetVcaDecay = function( decay ) { prompt( this.id, "Syn.SetVcaDecay("+decay ); }
    /*#syn*/ obj.SetVcaSustain = function( sustain ) { prompt( this.id, "Syn.SetVcaSustain("+sustain ); }
    /*#syn*/ obj.SetVcaRelease = function( release ) { prompt( this.id, "Syn.SetVcaRelease("+release ); }
    /*#syn*/ obj.SetVcaEnabled = function( enable ) { prompt( this.id, "Syn.SetVcaEnabled("+enable ); }

    /*#syn*/ obj.SetVcf = function( attack,decay,sustain,release,cuttoff,resonance,depth ) { prompt( this.id, "Syn.SetVcf\f"+attack+"\f"+decay+"\f"+sustain+"\f"+release+"\f"+cuttoff+"\f"+resonance+"\f"+depth ); }
    /*#syn*/ obj.SetVcfAttack = function( attack ) { prompt( this.id, "Syn.SetVcfAttack("+attack ); }
    /*#syn*/ obj.SetVcfDecay = function( decay ) { prompt( this.id, "Syn.SetVcfDecay("+decay ); }
    /*#syn*/ obj.SetVcfSustain = function( sustain ) { prompt( this.id, "Syn.SetVcfSustain("+sustain ); }
    /*#syn*/ obj.SetVcfRelease = function( release ) { prompt( this.id, "Syn.SetVcfRelease("+release ); }
    /*#syn*/ obj.SetVcfCutoff = function( cuttoff ) { prompt( this.id, "Syn.SetVcfCutoff("+cuttoff ); }
    /*#syn*/ obj.SetVcfResonance = function( resonance ) { prompt( this.id, "Syn.SetVcfResonance("+resonance ); }
    /*#syn*/ obj.SetVcfDepth = function( depth ) { prompt( this.id, "Syn.SetVcfDepth("+depth ); }
    /*#syn*/ obj.SetVcfEnabled = function( enable ) { prompt( this.id, "Syn.SetVcfEnabled("+enable ); }

    /*#syn*/ obj.SetPhaser = function( drywet,rate,range,feedback ) { prompt( this.id, "Syn.SetPhaser\f"+drywet+"\f"+rate+"\f"+range+"\f"+feedback ); }
    /*#syn*/ obj.SetPhaserDryWet = function( drywet ) { prompt( this.id, "Syn.SetPhaserDryWet("+drywet ); }
    /*#syn*/ obj.SetPhaserRate = function( rate ) { prompt( this.id, "Syn.SetPhaserRate("+rate ); }
    /*#syn*/ obj.SetPhaserRange = function( range ) { prompt( this.id, "Syn.SetPhaserRange("+range ); }
    /*#syn*/ obj.SetPhaserFeedback = function( feedback ) { prompt( this.id, "Syn.SetPhaserFeedback("+feedback ); }
    /*#syn*/ obj.SetPhaserEnabled = function( enable ) { prompt( this.id, "Syn.SetPhaserEnabled("+enable ); }

    /*#syn*/ obj.SetDelay = function( ms ) { prompt( this.id, "Syn.SetDelay("+ms ); }
    /*#syn*/ obj.SetFeedback = function( feedback ) { prompt( this.id, "Syn.SetFeedback("+feedback ); }
    /*#syn*/ obj.SetDelayEnabled = function( enable ) { prompt( this.id, "Syn.SetDelayEnabled("+enable ); }
    return obj;
}

function Wpr( id )
{
    var obj = new SObj( id, "Wpr" );
    /*#wpr*/ obj.GetType = function() { return "Wallpaper"; }
    /*#wpr*/ obj.IsVisible = function() { return prompt( obj.id, "Wpr.IsVisible\f" )=="true"; }
   	return obj;
}

Bound = class
{
    constructor() {
        this.bindMethods(this);
    }
    bindMethods( ctx ) {
        var meths = Object.getOwnPropertyNames(Object.getPrototypeOf(ctx))
        for (var m in meths) {
            var f = ctx[meths[m]];
            ctx[meths[m]] = f.bind(ctx);
            f._ctx = ctx; f._nohash = true; //<-- for DS callbacks.
        }
    }
}

I = function( func ) { if( func ) func._nohash=true; return func; }
M = function( ctx, func ) { if( func ) { func._nohash=true; func._ctx=ctx } return func; }
TW = function(txt,size) { return app.GetTextBounds(txt,size,0,null).width; }
DW = function(){ return app.GetDisplayWidth() }
DH = function(){ return app.GetDisplayHeight() }

_Try = function( p1,p2,p3,p4 ) { return prompt( "#", "App.Try(\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); }
_Call = function( id, func, params ) { app.eventSource=_map[id]; if( func ) func.apply( _map[id], params ); }
_Cb = function( obj, func ) { return new _ObjCb(obj, func); }
_ObjCb = function( obj, func ) { _cbMap[++_cbId] = obj; this.name = "_cbMap['"+_cbId+"']."+func; }
_hash = function( str ) { var hash=5381, i=str.length; while(i) { hash=(hash*33)^str.charCodeAt(--i); } return hash>>>0; }
_ObjCbmH = function( func ) { var hs = _hash(func.toString()); _cbMap[hs] = func; this.name = "_cbMap['"+hs+"']"; }
_ObjCbm = function( func ) { _cbMap[++_cbId] = function(){ if(func._ctx) func._ctx.source=this; func.apply(func._ctx,arguments) }; this.name = "_cbMap['"+_cbId+"']" }
_Cbm = function( func ) { return ( func ? (window[func.name] ? func.name : (func._nohash?new _ObjCbm(func):new _ObjCbmH(func)).name) : null ); }

_UseDbg = function( b ) { if( !_isNode ) prompt( "#", "_UseDbg(\f"+b ); _dbg=b; }
_SetTempDebug = function(sw) { if(_dbg != _dbgSave) app.SetDebug(sw, _dbgSave = _dbg); }
_RestoreDebug = function() { if(_dbg != _dbgSave) app.SetDebug(_dbgSave = _dbg); }
_Dbg = function( msg ) { return prompt( "#", "_Dbg(\f"+msg ); }

_GetMain = function() { return prompt( "#", "_GetMain(\f" ); }
_ExecV8 = function( file ) { return prompt( "#", "_ExecV8(\f"+file ); }
_Thread = function( file ) { return prompt( "#", "_Thread(\f"+file ); }
_IdeCmd = function( cmd ) { return prompt( "#", "_IdeCmd(\f"+cmd ); }
_DoEvents = function( ms ) { prompt( "#", "_DoEvents(\f"+ms ); }
_CreateCP = function( service ) { return prompt( "#", "_CreateCP(\f"+service ); }
_ExecCP = function( callbackId,service,action,argsJson ) { return prompt( "#", "_ExecCP(\f"+callbackId+"\f"+service+"\f"+action+"\f"+argsJson ); }
_OnFunc = function( json ) { var args=JSON.parse(atob2(json)); return eval(args[0]).apply(window,args.splice(1)) }

_LoadScript = function( url, callback, type, id )
{
    if( _scripts[url] ) {
		if( callback ) callback(); return;
	}
	if( url.slice(-4)==".dsj" ) url += ".js";
	var dbg = _dbg; _UseDbg( false );
	if( url.indexOf(":")<0 && !app.FileExists(url) )
	    alert("Error: "+url+" not found!" +
	        (app.IsAPK?"\n\n(Note: Assets are case sensitive)":"") );
	_UseDbg( dbg );
	if( _isV8 ) _ExecV8(url);
	else if( _isNode ) {
	    require( app.RealPath(url.replace("/Sys/","/Node/")) );
	    if( callback ) callback();
	}
	else {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = type ? type : 'text/javascript';
		if( id ) script.id = id
		script.src = app.RealPath(url);
		script.onload = callback;
		head.appendChild(script);
    }
    _scripts[url] = true;
}

_LoadScriptSync = function( url, defer, type, id )
{
    if( _scripts[url] ) return;
    if( url.slice(-4)==".dsj" ) url += ".js";
    var dbg = _dbg; _UseDbg( false );
    if( url.indexOf(":")<0 && !app.FileExists(url) )
        alert("Error: "+url+" not found!" + (app.IsAPK?"\n\n(Note: Assets are case sensitive)":"") );
    _UseDbg( dbg );
    if( _isV8 ) _ExecV8(url);
    else if( _isNode ) require( app.RealPath(url.replace("/Sys/","/Node/")) );
    else {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = type ? type : 'text/javascript';
        if( id ) script.id = id

        if( defer ) { script.defer = true; script.src = app.RealPath(url) }
        else {
            var dbg = _dbg; _UseDbg( false );
            script.text = app.ReadFile( url );
            _UseDbg( dbg );
        }
        head.appendChild(script);
    }
    _scripts[url] = true;
}


include = function( file, noDefer ) {
    _LoadScriptSync( file, noDefer?false:true );
}

atob2 = function(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

btoa2 = function(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

_LoadPlugin = function( name )
{
    if( !name ) return;
    var privDir = app.GetPrivateFolder( "Plugins" );
    var url = privDir+"/"+name.toLowerCase()+"/"+name+".inc"
    if( !app.FileExists(url) ) url = privDir+"/"+name.toLowerCase()+"/"+name+".js"
    _LoadScriptSync( url );
}

_CreatePlugin = function( name, options )
{
	var ret = prompt( "#", "App.CreatePlugin(\f"+name+"\f"+options );
	if( ret ) return new Plg(ret);
	else throw "Failed to create plugin:" + name;
}

_Run = function(s) {
	_busy = true; eval( s ); _busy = false;
}

_SafeRun = function(s) {
	try { _busy = true;  eval(s);  _busy = false; }
	catch(e) {}
}

_Boost = function( on )
{
    if( !window._prompt ) window._prompt = window.prompt
    if( on ) window.prompt = function( id, args ) { return _bridge.call( id, args ) }
    else window.prompt = window._prompt
}

_Batch = function( ctrl, vals ) {
    var cmd = ""
    for( var v in vals ) {
        if( cmd ) cmd += "|"
        if( v.endsWith("_")) cmd += "Obj."+v
        else cmd += ctrl.typeId + "." + v
        var params = vals[v]
        for( var p in params ) cmd += "\f"+(v.startsWith("SetOn")?_Cbm(params[p]):params[p])
    }
    _bridge.batch( ctrl.id, cmd )
}

T = function( id, lang ) {
	var tr = _languages ? _languages.trans[id] : null;
	if( tr ) tr = tr[lang?lang:_curLang]; else return id;
	return (tr ? tr : _languages.trans[id]["en"]);
}

OnCreate = function(extract,debug,game)
{
    _dbg = app.GetDebug();
	if( debug ) app.CreateDebug();
	if( game ) { app.CreateGame(); prompt("#","_Start"); _started=true; }
	else if(typeof OnStart=='function') { OnStart(); prompt("#","_Start"); _started=true; }
}

_GetObjects = function()
{
	var ids = prompt("#","_ListIds");
	for( var id in _map ) { if( ids.indexOf(id)<0 ) delete _map[id]; }
	return _map;
}


ide = {}
ide.MakePlugin = function( name ){ _LoadScriptSync("/Sys/ide/makeplugin.js"); ide.MakePlugin(name) }
ide.SetAutoWifi = function( auto ) { prompt( "#", "App.SetAutoWifi(\f"+auto); }
ide.SetAutoStart = function( appName ) { prompt( "#", "App.SetAutoStart(\f"+appName); }

ide.Obfuscate = function( src,dest,options ) {
    if( app.InIDE() ) app.Broadcast( "!obfuscate", app.RealPath(src)+"|"+app.RealPath(dest)+"|"+options )
}

ide.Export = function( type,src,dest ) {
    if( app.InIDE() ) app.Broadcast( "!export", type+"|"+app.RealPath(src)+"|"+app.RealPath(dest) )
}

ide.AddModule = function( name, overwrite )
{
    if( !app.InIDE() ) return
    if( glob.addingModule ) return

    if( overwrite || !app.FolderExists(app.GetAppPath()+"/node_modules/"+name.split("@")[0]) ) {
        app.Broadcast( "!addmodule", name )
        OnStart = function(){}
        glob.addingModule = true
        app.Exit()
    }
}

glob = {};
app = new DsApp()
cfg = { Game:0, Landscape:0, Portrait:0, Transparent:0, Share:0, USB:0, Light:0, Dark:0,
        Holo:0, MUI:0, Node:0, NodeESM:0, Fast:0, Serv:0, Console:0 }

_Log = function( msg ) { app.Debug( msg ); }
_Err = function( msg ) { app.Debug( "ERROR: " + msg ); }
_GetStack = function() { return new Error().stack }
_AddPermissions = function() {}
_RemovePermissions = function() {}
_AddOptions = function() {}
_AddPlugins = function() {}

if( typeof global=="undefined" && typeof window!='undefined' ) global = window
if( typeof navigator=="undefined" ) { navigator = {userAgent:"Android"} };
if( _IsDS ) prompt( "#", "_Init" )
