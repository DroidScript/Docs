
_dbg = true; _map = []; _scripts = [];
_languages = null; _curLang = "en";    
_cbMap = []; _cbId=0; _docs = false; _busy=false; _isV8=false;
_btl = null; _lvw = null; _ldg = null; 
_ynd = null; _nxt = null; _smw = null;
_inf = null; _rec = null; _pst = null;
_sms = null; _eml = null; _wpr = null;
_crp = null; _spr = null;


function App() 
{				
	/*#app*/ this.GetType = function() { return "App"; }
	/*#app*/ this.GetObjects = function() { return _map; }
	/*#app*/ this.Exit = function( kill ) { prompt( "#", "App.Exit("+kill ); }
	/*#app*/ this.ToBack = function() { prompt( "#", "App.ToBack(" ); }
	/*#app*/ this.Execute = function( js ) { prompt( "#", "App.Execute("+js ); } 
	/*#app*/ this.StartApp = function( file,options,intent ) { prompt( "#", "App.StartApp(\f"+file+"\f"+options+"\f"+intent ); }
	/*#app*/ this.StopApp = function( name ) { prompt( "#", "App.StopApp("+name ); }
	/*#app*/ this.SetScreenMode = function( mode ) { prompt( "#", "App.SetScreenMode(\f"+mode ); }
	/*#app*/ this.SetOptions = function( options ) { prompt( "#", "App.SetOptions(\f"+options ); }
	/*#app*/ this.SetTheme = function( theme ) { prompt( "#", "App.SetTheme(\f"+(theme?theme.id:null) ); }
	/*#app*/ this.SetDensity = function( dpi ) { prompt( "#", "App.SetDensity(\f"+dpi ); }
	/*#app*/ this.SetPosition = function( left,top,width,height,options ) { prompt( "#", "App.SetPosition(\f"+left+"\f"+top+"\f"+width+"\f"+height+"\f"+options ); }
	/*#app*/ this.SetBackColor = function( clr ) { prompt( "#", "App.SetBackColor(\f"+clr ); }  
	/*#app*/ this.StartService = function( packageName,className ) { prompt( "#", "App.StartService(\f"+packageName+"\f"+className ); }
	/*#app*/ this.StopService = function() { prompt( "#", "App.StopService(" ); }
	/*#app*/ this.StartDebugServer = function() { prompt( "#", "App.StartDebugServer(" ); }
	/*#app*/ this.StopDebugServer = function() { prompt( "#", "App.StopDebugServer(" ); }
	/*#app*/ this.SendIntent = function( packageName,className,action,category,uri,type,extras,options,callback ) { prompt( "#", "App.SendIntent(\f"+packageName+"\f"+className+"\f"+action+"\f"+category+"\f"+uri+"\f"+type+"\f"+extras+"\f"+options+"\f"+_Cbm(callback) ); }
	/*#app*/ this.BroadcastIntent = function( action,category,data,type,extras,options ) { prompt( "#", "App.BroadcastIntent(\f"+action+"\f"+category+"\f"+data+"\f"+type+"\f"+extras+"\f"+options ); }
	/*#app*/ this.SendMessage = function( msg ) { prompt( "#", "App.SendMessage(\f"+msg ); }
	/*#app*/ this.Script = function( file ) { _LoadScriptSync( file ); }
	/*#app*/ this.LoadScript = function( url, callback ) { _LoadScript( url, callback ); }
	/*#app*/ this.LoadPlugin = function( url ) { _LoadPlugin( url ); }
	/*#app*/ this.SysExec = function( cmd,options,maxRead,timeout ) { return prompt( "#", "App.SysExec(\f"+cmd+"\f"+options+"\f"+maxRead+"\f"+timeout ); } 
	/*#app*/ this.ExtExec = function( name,file,args,options ) { return prompt( "#", "App.ExtExec(\f"+name+"\f"+file+"\f"+args+"\f"+options ); } 
	/*#app*/ this.SetPriority = function( level ) { prompt( "#", "App.SetPriority(\f"+level ); } 
	/*#app*/ this.Odroid = function( p1,p2,p3 ) { return prompt( "#", "App.Odroid(\f"+p1+"\f"+p2+"\f"+p3 ); }
	/*#app*/ this.GetName = function() { return prompt( "#", "App.GetName(" ); }
	/*#app*/ this.GetPath = function() { return prompt( "#", "App.GetPath(" ); }
	/*#app*/ this.GetAppName = function() { return prompt( "#", "App.GetAppName(" ); }
	/*#app*/ this.GetAppPath = function() { return prompt( "#", "App.GetAppPath(" ); }
	/*#app*/ this.GetVersion = function() { return parseFloat(prompt( "#", "App.GetVersion(" )); }
	/*#app*/ this.GetDSVersion = function() { return parseFloat(prompt( "#", "App.GetDSVersion(" )); }	
	/*#app*/ this.IsNewVersion = function() { return prompt( "#", "App.IsNewVersion(" )=="true"; }
	/*#app*/ this.InIDE = function() { return prompt( "#", "App.InIDE(" )=="true"; }	
	/*#app*/ this.IsAPK = function() { return prompt( "#", "App.IsAPK(" )=="true"; }	
	/*#app*/ this.IsService = function() { return prompt( "#", "App.IsService(" )=="true"; }	
	/*#app*/ this.IsPremium = function() { return prompt( "#", "App.IsPremium(" )=="true"; }	
	/*#app*/ this.IsEngine = function() { return prompt( "#", "App.IsEngine(" )=="true"; }	
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
	/*#app*/ this.GetActivities = function( options ) { return eval(prompt( "#", "App.GetActivities(\f"+options )); }
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
	/*#app*/ this.GetBuildNum = function() { return parseInt( prompt( "#", "App.GetBuildNum(" )); }	
	/*#app*/ this.GetOSVersion = function() { return parseInt( prompt( "#", "App.GetBuildNum(" )); }	
	/*#app*/ this.GetModel = function() { return prompt( "#", "App.GetModel(" ); }	
	/*#app*/ this.IsTablet = function() { return prompt( "#", "App.IsTablet(" )=="true"; }	
	/*#app*/ this.IsChrome = function() { return prompt( "#", "App.IsChrome(" )=="true"; }	
	/*#app*/ this.IsThings = function() { return prompt( "#", "App.IsThings(" )=="true"; }	
	/*#app*/ this.SetOnError = function( callback ) { prompt( "#", "App.SetOnError(\f"+_Cbm(callback) ); }
	/*#app*/ this.SetOnDebug = function( callback ) { prompt( "#", "App.SetOnDebug(\f"+_Cbm(callback) ); }
	/*#app*/ this.SetOnKey = function( callback ) { prompt( "#", "App.SetOnKey(\f"+_Cbm(callback) ); }
	/*#app*/ this.SetOnShowKeyboard = function( callback ) { prompt( "#", "App.SetOnShowKeyboard(\f"+_Cbm(callback) ); }
	/*#app*/ this.SetOnWifiChange = function( callback ) { prompt( "#", "App.SetOnWifiChange(\f"+_Cbm(callback) ); }
	/*#app*/ this.DisableKeys = function( keyList ) { prompt( "#", "App.DisableKeys(\f"+keyList ); }
	/*#app*/ this.DisableTouch = function( disable ) { prompt( "#", "App.DisableTouch(\f"+disable ); }
	/*#app*/ this.GetIPAddress = function() { return prompt( "#", "App.GetIPAddress(" ); }
	/*#app*/ this.GetMacAddress = function() { return prompt( "#", "App.GetMacAddress(" ); }
	/*#app*/ this.GetSSID = function() { return prompt( "#", "App.GetSSID(" ); }
	/*#app*/ this.GetRSSI = function() { return parseInt(prompt( "#", "App.GetRSSI(" )); }
	/*#app*/ this.Broadcast = function( type,msg ) { prompt( "#", "App.Broadcast("+type+"\f"+msg ); }
	/*#app*/ this.SetOnBroadcast = function( callback ) { prompt( "#", "App.SetOnBroadcast("+_Cbm(callback) ); }
	/*#app*/ this.SetData = function( name,value ) { prompt( "#", "App.SetData(\f"+name+"\f"+value ); }
	/*#app*/ this.GetData = function( name ) { return prompt( "#", "App.GetData(\f"+name ); }	
	/*#app*/ this.SetClipboardText = function( txt ) { prompt( "#", "App.SetClipboardText("+txt ); }
	/*#app*/ this.GetClipboardText = function() { return prompt( "#", "App.GetClipboardText(" ); }
	/*#app*/ this.EnableBackKey = function( enable ) { prompt( "#", "App.EnableBackKey("+enable ); }		
	/*#app*/ this.Wait = function( secs ) { prompt( "#", "App.Wait("+secs ); }
	/*#app*/ this.Alert = function( msg,title,options,hue ) { prompt( "#", "App.Alert(\f"+msg+"\f"+title+"\f"+options+"\f"+hue ); }
	/*#app*/ this.HideKeyboard = function( hide ) { prompt( "#", "App.HideKeyboard("+hide ); }
	/*#app*/ this.ShowKeyboard = function( obj ) { return prompt( "#", "App.ShowKeyboard(\f"+obj.id )=="true"; }
	/*#app*/ this.IsKeyboardShown = function() { return prompt( "#", "App.IsKeyboardShown(" )=="true"; }
	/*#app*/ this.GetKeyboardHeight = function() { return prompt( "#", "App.GetKeyboardHeight(" ); }
	/*#app*/ this.TextToSpeech = function( text,pitch,rate,callback,stream,locale,engine ) { prompt( "#", "App.TextToSpeech(\f"+text+"\f"+pitch+"\f"+rate+"\f"+_Cbm(callback)+"\f"+stream+"\f"+locale+"\f"+engine ); }
	/*#app*/ this.Debug = function( msg ) { prompt( "#", "App.Debug(\f"+msg ); }
	/*#app*/ this.Error = function( msg,line,file,quit ) { prompt( "#", "App.Error(\f"+msg+"\f"+line+"\f"+file+"\f"+quit ); }
	/*#app*/ this.SetDebugEnabled = function( enable ) { prompt( "#", "App.SetDebugEnabled("+enable ); _dbg=enable; }
	/*#app*/ this.CreateDebug = function() { prompt( "#", "App.CreateDebug(" ); }
	/*#app*/ this.ShowDebug = function( show ) { prompt( "#", "App.ShowDebug("+show ); }
	/*#app*/ this.SendMail = function( address,subject,body,attach,type,options ) { prompt( "#", "App.SendMail(\f"+address+"\f"+subject+"\f"+body+"\f"+attach+"\f"+type+"\f"+options ); }		
	/*#app*/ this.SendFile = function( file,subject,text,choose ) { prompt( "#", "App.SendFile(\f"+file+"\f"+subject+"\f"+text+"\f"+choose ); }		
	/*#app*/ this.SendText = function( text,subject,choose ) { prompt( "#", "App.SendText(\f"+text+"\f"+subject+"\f"+choose ); }		
	// this._Extract = function( p1 ) { prompt( "#", "App._Extract("+p1 ); }
	/*#app*/ this.ExtractAssets = function( src,dest,overwrite ) { prompt( "#", "App.ExtractAssets(\f"+src+"\f"+dest+"\f"+overwrite ); }
	/*#app*/ this.ExtractPlugins = function() { prompt( "#", "App.ExtractPlugins(\f" ); }
	/*#app*/ this.GetResourceId = function( name,options ) { return parseInt(prompt( "#", "App.GetResourceId(\f"+name+"\f"+options )); }	
	/*#app*/ this.Vibrate = function( pattern ) { prompt( "#", "App.Vibrate("+pattern ); }
	/*#app*/ this.ShowPopup = function( msg,options ) { prompt( "#", "App.ShowPopup("+msg+"\f"+options ); }
	/*#app*/ this.ShowProgress = function( msg,options ) { prompt( "#", "App.ShowProgress(\f"+msg+"\f"+options ); }	
	/*#app*/ this.HideProgress = function() { prompt( "#", "App.HideProgress(" ); }	
	/*#app*/ this.ShowProgressBar = function( title,percent,options ) { prompt( "#", "App.ShowProgressBar(\f"+title+"\f"+percent+"\f"+options ); }	
	/*#app*/ this.UpdateProgressBar = function( percent ) { prompt( "#", "App.UpdateProgressBar(\f"+percent ); }	
	/*#app*/ this.HideProgressBar = function() { prompt( "#", "App.HideProgressBar(" ); }	
	/*#app*/ this.LoadText = function( name,dflt,file ) { return prompt( "#", "App.LoadText("+name+"\f"+dflt+"\f"+file ); }
	/*#app*/ this.LoadNumber = function( name,dflt,file ) { return parseFloat(prompt( "#", "App.LoadNumber("+name+"\f"+dflt+"\f"+file )); }	
	/*#app*/ this.LoadBoolean = function( name,dflt,file ) { return (prompt( "#", "App.LoadBoolean("+name+"\f"+dflt+"\f"+file )=="true"); }
	/*#app*/ this.SaveText = function( name,value,file ) { prompt( "#", "App.SaveText("+name+"\f"+value+"\f"+file ); }
	/*#app*/ this.SaveNumber = function( name,value,file ) { prompt( "#", "App.SaveNumber("+name+"\f"+value+"\f"+file ); }	
	/*#app*/ this.SaveBoolean = function( name,value,file ) { prompt( "#", "App.SaveBoolean("+name+"\f"+value+"\f"+file ); }	
	/*#app*/ this.ClearData = function( file ) { prompt( "#", "App.ClearData(\f"+file ); }
	/*#app*/ this.ClearValue = function( name,file ) { prompt( "#", "App.ClearValue(\f"+name+"\f"+file ); }
	/*#app*/ this.GetTop = function() { return parseFloat(prompt( "#", "App.GetTop(" )); }
	/*#app*/ this.HasSoftNav = function() { return prompt( "#", "App.HasSoftNav(" )=="true"; }
	/*#app*/ this.GetScreenWidth = function( options ) { return parseFloat(prompt( "#", "App.GetScreenWidth(\f"+options )); }
	/*#app*/ this.GetScreenHeight = function( options ) { return parseFloat(prompt( "#", "App.GetScreenHeight(\f"+options )); }
	/*#app*/ this.GetScreenDensity = function() { return parseFloat(prompt( "#", "App.GetScreenDensity(" )); }
	/*#app*/ this.GetDisplayWidth = function() { return parseFloat(prompt( "#", "App.GetDisplayWidth(" )); }
	/*#app*/ this.GetDisplayHeight = function() { return parseFloat(prompt( "#", "App.GetDisplayHeight(" )); }
	/*#app*/ this.GetDefaultOrientation = function() { return prompt( "#", "App.GetDefaultOrientation(" ); }	
	/*#app*/ this.GetOrientation = function() { return prompt( "#", "App.GetOrientation(" ); }	
	/*#app*/ this.SetOrientation = function( orient,callback ) { prompt( "#", "App.SetOrientation(\f"+orient+"\f"+_Cbm(callback) ); }	
	/*#app*/ this.GetRotation = function() { return parseInt(prompt( "#", "App.GetRotation(" )); }	
	/*#app*/ this.GetBatteryLevel = function() { return parseFloat(prompt( "#", "App.GetBatteryLevel(\f" )); }
	/*#app*/ this.IsCharging = function() { return prompt( "#", "App.IsCharging(" )=="true"; }
	/*#app*/ this.GetChargeType = function() { return prompt( "#", "App.GetChargeType(\f" ); }
	/*#app*/ this.PreventScreenLock = function( mode ) { prompt( "#", "App.PreventScreenLock("+mode ); }	
	/*#app*/ this.PreventWifiSleep = function() { prompt( "#", "App.PreventWifiSleep(" ); }
	/*#app*/ this.SetWifiEnabled = function( enable ) { prompt( "#", "App.SetWifiEnabled(\f"+enable ); }
	/*#app*/ this.IsWifiEnabled = function() { return prompt( "#", "App.IsWifiEnabled(" )=="true"; }
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
	/*#app*/ this.PlayRingtone = function( type ) { prompt( "#", "App.PlayRingtone(\f"+type ); }
	/*#app*/ this.SetRingerMode = function( mode ) { prompt( "#", "App.SetRingerMode(\f"+mode ); }
	/*#app*/ this.GetRingerMode = function() { return prompt( "#", "App.GetRingerMode(" ); }
	/*#app*/ this.SetSpeakerPhone = function( on ) { prompt( "#", "App.SetSpeakerPhone(\f"+on ); }
	/*#app*/ this.GetSpeakerPhone = function() { return prompt( "#", "App.GetSpeakerPhone(" )=="true"; }
	/*#app*/ this.SetVolume = function( stream,level ) { prompt( "#", "App.SetVolume(\f"+stream+"\f"+level ); }
	/*#app*/ this.GetVolume = function( stream ) { return parseFloat(prompt( "#", "App.GetVolume(\f"+stream )); }
	/*#app*/ this.SetTitle = function( title ) { prompt( "#", "App.SetTitle("+title ); }	
	/*#app*/ this.SetMenu = function( list,iconPath ) { prompt( "#", "App.SetMenu("+list+"\f"+iconPath ); }
	/*#app*/ this.ShowMenu = function() { prompt( "#", "App.ShowMenu(" ); }		
	/*#app*/ this.AddLayout = function( layout ) { prompt( "#", "App.AddLayout("+layout.id ); }	
	/*#app*/ this.RemoveLayout = function( layout ) { prompt( "#", "App.RemoveLayout("+ layout.id ); }
	/*#app*/ this.DestroyLayout = function( layout ) { prompt( "#", "App.DestroyLayout("+ layout.id ); }	
	/*#app*/ this.AddDrawer = function( layout,side,width,grabWidth ) { prompt( "#", "App.AddDrawer(\f"+layout.id+"\f"+side+"\f"+width+"\f"+grabWidth ); }	
	/*#app*/ this.RemoveDrawer = function( side ) { prompt( "#", "App.RemoveDrawer(\f"+ side ); }
	/*#app*/ this.OpenDrawer = function( side ) { prompt( "#", "App.OpenDrawer(\f"+side ); }	
	/*#app*/ this.CloseDrawer = function( side ) { prompt( "#", "App.CloseDrawer(\f"+side ); }	
	/*#app*/ this.LockDrawer = function( side ) { prompt( "#", "App.LockDrawer(\f"+side ); }	
	/*#app*/ this.UnlockDrawer = function( side ) { prompt( "#", "App.UnlockDrawer(\f"+side ); }	
	/*#app*/ this.MakeFolder = function( fldr ) { prompt( "#", "App.MakeFolder("+fldr ); }	
	/*#app*/ this.GetPrivateFolder = function( name ) { return prompt( "#", "App.GetPrivateFolder(\f"+name ); }	
	/*#app*/ this.GetDatabaseFolder = function() { return prompt( "#", "App.GetDatabaseFolder(" ); }
	/*#app*/ this.DeleteDatabase = function( name ) { prompt( "#", "App.DeleteDatabase(\f"+name); }
	/*#app*/ this.FolderExists = function( fldr ) { return prompt( "#", "App.FolderExists("+fldr )=="true"; }
	/*#app*/ this.FileExists = function( file ) { return prompt( "#", "App.FileExists("+file )=="true"; }
	/*#app*/ this.IsFolder = function( fldr ) { return prompt( "#", "App.IsFolder("+fldr )=="true"; }
	/*#app*/ this.ListFolder = function( path,filter,limit,options ) { return eval(prompt( "#", "App.ListFolder(\f"+path+"\f"+filter+"\f"+limit+"\f"+options )); }
	/*#app*/ this.GetExternalFolder = function() { return prompt( "#", "App.GetExternalFolder(" ); }
	/*#app*/ this.GetInternalFolder = function() { return prompt( "#", "App.GetInternalFolder(" ); }
	/*#app*/ this.GetSpecialFolder = function( name ) { return prompt( "#", "App.GetSpecialFolder(\f"+name ); }
	/*#app*/ this.GetEnv = function( name ) { return prompt( "#", "App.GetEnv(\f"+name ); }
	/*#app*/ this.GetPermission = function( type,callback ) { prompt( "#", "App.GetPermission(\f"+type+"\f"+_Cbm(callback) ); }
	/*#app*/ this.CheckPermission = function( type ) { return prompt( "#", "App.CheckPermission(\f"+type )=="true"; }
	/*#app*/ this.ReadFile = function( file,encoding ) { return prompt( "#", "App.ReadFile(\f"+file+"\f"+encoding ); }
	/*#app*/ this.WriteFile = function( file,text,mode,encoding ) { prompt( "#", "App.WriteFile(\f"+file+"\f"+text+"\f"+mode+"\f"+encoding ); }	
	/*#app*/ this.OpenFile = function( file,type,choose ) { prompt( "#", "App.OpenFile(\f"+file+"\f"+type+"\f"+choose ); }	
	/*#app*/ this.OpenUrl = function( url,type,choose ) { prompt( "#", "App.OpenUrl(\f"+url+"\f"+type+"\f"+choose ); }
	/*#app*/ this.DownloadFile = function( src,dest,title,desc,options ) { prompt( "#", "App.DownloadFile(\f"+src+"\f"+dest+"\f"+title+"\f"+desc+"\f"+options ); }
	/*#app*/ this.ChooseFile = function( msg,type,callback ) { prompt( "#", "App.ChooseFile(\f"+msg+"\f"+type+"\f"+_Cbm(callback) ); }
	/*#app*/ this.ChooseContact = function( type,callback ) { prompt( "#", "App.ChooseContact(\f"+type+"\f"+_Cbm(callback) ); }
	/*#app*/ this.ChooseImage = function( options,callback ) { prompt( "#", "App.ChooseImage(\f"+options+"\f"+_Cbm(callback) ); }
	/*#app*/ this.DeleteFile = function( file ) { prompt( "#", "App.DeleteFile("+file); }
	/*#app*/ this.CopyFile = function( src,dest ) { prompt( "#", "App.CopyFile("+src+"\f"+dest); }
	/*#app*/ this.CopyFolder = function( src,dest,overwrite,filter ) { prompt( "#", "App.CopyFolder(\f"+src+"\f"+dest+"\f"+overwrite+"\f"+filter); }
	/*#app*/ this.DeleteFolder = function( fldr ) { prompt( "#", "App.DeleteFolder("+fldr); }
	/*#app*/ this.RenameFile = function( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); }
	/*#app*/ this.RenameFolder = function( src,dest ) { prompt( "#", "App.RenameFile(\f"+src+"\f"+dest); }
	/*#app*/ this.ReplaceInFile = function( file,txt,rep,options ) { prompt( "#", "App.ReplaceInFile(\f"+file+"\f"+txt+"\f"+rep+"\f"+options); }
	/*#app*/ this.UnzipFile = function( src,dest ) { prompt( "#", "App.UnzipFile(\f"+src+"\f"+dest); }
	/*#app*/ this.ZipFile = function( src,dest ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest); }
	/*#app*/ this.ZipFolder = function( src,dest ) { prompt( "#", "App.ZipFile(\f"+src+"\f"+dest); }
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
	/*#app*/ this.SetKioskMode = function( mode,enable,options ) { prompt( "#", "App.SetKioskMode(\f"+mode+"\f"+enable+"\f"+options); }
	/*#app*/ this.GetMetadata = function( file,keys ) { return prompt( "#", "App.GetMetadata(\f"+file+"\f"+keys); }
	/*#app*/ this.SetAlarm = function( type,id,callback,time,interval,options ) { return prompt( "#", "App.SetAlarm(\f"+type+"\f"+id+"\f"+_Cbm(callback)+"\f"+time+"\f"+interval+"\f"+options); }
	/*#app*/ this.Call = function( number ) { prompt( "#", "App.Call(\f"+number ); }
	/*#app*/ this.SimulateTouch = function( obj,x,y,dir ) { prompt( "#", "App.SimulateTouch(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dir ); }
	/*#app*/ this.SimulateDrag = function( obj,x1,y1,x2,y2,step,pause ) { prompt( "#", "App.SimulateDrag(\f"+obj.id+"\f"+x1+"\f"+y1+"\f"+x2+"\f"+y2+"\f"+step+"\f"+pause ); }
	/*#app*/ this.SimulateScroll = function( obj,x,y,dx,dy,count,fling ) { prompt( "#", "App.SimulateScroll(\f"+obj.id+"\f"+x+"\f"+y+"\f"+dx+"\f"+dy+"\f"+count+"\f"+fling ); }
	/*#app*/ this.SimulateKey = function( obj,keyName,modifiers,pause ) { prompt( "#", "App.SimulateKey(\f"+obj.id+"\f"+keyName+"\f"+modifiers+"\f"+pause ); }
	/*#app*/ this.GetJoystickState = function( id,key ) { return parseFloat(prompt( "#", "App.GetJoyState(\f"+id+"\f"+key)); }
	/*#app*/ this.GetJoystickName = function( id ) { return prompt( "#", "App.GetJoyName(\f"+id); }
	/*#app*/ this.SetJoystickOptions = function( options ) { prompt( "#", "App.SetJoystickOptions(\f"+options ); }
	/*#app*/ this.SetAutoBoot = function( auto ) { prompt( "#", "App.SetAutoBoot(\f"+auto); }
	/*#app*/ this.SetAutoWifi = function( auto ) { prompt( "#", "App.SetAutoWifi(\f"+auto); }
	/*#app*/ this.SetAutoStart = function( appName ) { prompt( "#", "App.SetAutoStart(\f"+appName); }
	/*#app*/ this.HttpRequest = function( type,baseUrl,path,params,callback,headers ) { prompt( "#", "App.HttpRequest(\f"+type+"\f"+baseUrl+"\f"+path+"\f"+params+"\f"+_Cbm(callback)+"\f"+headers); }
	/*#app*/ this.UploadFile = function( url,file,name,callback ) { prompt( "#", "App.UploadFile(\f"+url+"\f"+file+"\f"+name+"\f"+_Cbm(callback) ); }
	/*#app*/ this.SaveCookies = function() { prompt( "#", "App.SaveCookies(" ); }	
	/*#app*/ this.ClearCookies = function( session ) { prompt( "#", "App.ClearCookies(\f"+session ); }
	/*#app*/ this.SetUserAgent = function( agent ) { prompt( "#", "App.SetUserAgent(\f"+agent ); } 
    /*#app*/ this.SetUserCreds = function( name,password ) { prompt( "#", "App.SetUserCreds(\f"+name+"\f"+password ); }
    /*#app*/ this.QueryContent = function( uri,columns,select,args,sort ) { return eval(prompt( "#", "App.QueryContent(\f"+uri+"\f"+columns+"\f"+select+"\f"+args+"\f"+sort)); }
	/*#app*/ this.Uri2Path = function( uri ) { return prompt( "#", "App.Uri2Path(\f"+uri); }
	/*#app*/ this.ScreenShot = function( fileName,quality ) { prompt( "#", "App.ScreenShot(\f"+fileName+"\f"+quality ); }
	/*#app*/ this.InstallWallpaper = function( packageName,className ) { prompt( "#", "App.InstallWallpaper\f"+packageName+"\f"+className ); }
	
	//These objects auto-release when layout is destroyed.		
	/*#app*/ this.CreateLayout = function( type,options ) { var ret = prompt( "#", "App.CreateLayout("+type+"\f"+options ); if( ret ) return new Lay(ret); else return null; }	
	/*#app*/ this.CreateImage = function( file,width,height,options,w,h ) { var ret = prompt( "#", "App.CreateImage("+file+"\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h );  if( ret ) return new Img(ret); else return null; }	
	/*#app*/ this.CreateButton = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateButton("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Btn(ret); else return null;  }		
	/*#app*/ this.CreateToggle = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateToggle("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Tgl(ret); else return null;  }		
	/*#app*/ this.CreateCheckBox = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateCheckBox("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Chk(ret); else return null;  }		
	/*#app*/ this.CreateSpinner = function( list,width,height,options ) { var ret = prompt( "#", "App.CreateSpinner("+list+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Spn(ret); else return null; }		
	/*#app*/ this.CreateSeekBar = function( width,height,options ) { var ret = prompt( "#", "App.CreateSeekBar("+width+"\f"+height+"\f"+options ); if( ret ) return new Skb(ret); else return null; }		
	/*#app*/ this.CreateText = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateText("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txt(ret); else return null; }		
	/*#app*/ this.CreateTextEdit = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateTextEdit("+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Txe(ret); else return null; }		
	/*#app*/ this.CreateList = function( list,width,height,options,delim ) { var ret = prompt( "#", "App.CreateList(\f"+list+"\f"+width+"\f"+height+"\f"+options+"\f"+delim ); if( ret ) return new Lst(ret); else return null; }	
	/*#app*/ this.CreateWebView = function( width,height,options,zoom ) { var ret = prompt( "#", "App.CreateWeb(\f"+width+"\f"+height+"\f"+options+"\f"+zoom ); if( ret ) return new Web(ret); else return null; }	
	/*#app*/ this.CreateScroller = function( width,height,options ) { var ret = prompt( "#", "App.CreateScroller("+width+"\f"+height+"\f"+options ); if( ret ) return new Scr(ret); else return null; }	
	/*#app*/ this.CreateCameraView = function( width,height,options ) { var ret = prompt( "#", "App.CreateCameraView("+width+"\f"+height+"\f"+options );  if( ret ) return new Cam(ret); else return null; }	
	/*#app*/ this.CreateVideoView = function( width,height,options ) { var ret = prompt( "#", "App.CreateVideoView(\f"+width+"\f"+height+"\f"+options );  if( ret ) return new Vid(ret); else return null; }	
	/*#app*/ this.CreateGameView = function( width,height,options ) { var ret = prompt( "#", "App.CreateGameView(\f"+width+"\f"+height+"\f"+options );  if( ret ) return new WGL(ret); else return null; }	
	/*#app*/ this.CreateCodeEdit = function( text,width,height,options ) { var ret = prompt( "#", "App.CreateCodeEdit(\f"+text+"\f"+width+"\f"+height+"\f"+options ); if( ret ) return new Cde(ret); else return null; }		
	/*#app*/ this.CreateTheme = function( baseTheme ) { var ret = prompt( "#", "App.CreateTheme(\f"+baseTheme ); if( ret ) return new Thm(ret); else return null;  }		
	
	//These objects auto-release (ie. single instance)
	/*#app*/ this.CreateYesNoDialog = function( msg,options ) { if( _ynd ) _ynd.Release(); var ret = prompt( "#", "App.CreateYesNoDialog(\f"+msg+"\f"+options ); if( ret ) _ynd = new Ynd(ret); else _ynd = null; return _ynd; }		
	/*#app*/ this.CreateListDialog = function( title,list,options ) { if( _ldg ) _ldg.Release(); var ret = prompt( "#", "App.CreateListDialog(\f"+title+"\f"+list+"\f"+options ); if( ret ) _ldg = new Ldg(ret); else _ldg = null; return _ldg; }	
	/*#app*/ this.CreateListView = function( list,title,options ) { if( _lvw ) _lvw.Release(); var ret = prompt( "#", "App.CreateListView(\f"+list+"\f"+title+"\f"+options ); if( ret ) _lvw = new Lvw(ret); else _lvw = null; return _lvw; }	
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
	/*#app*/ this.CreateDialog = function( title,options ) { var ret = prompt( "#", "App.CreateDialog(\f"+title+"\f"+options ); if( ret ) return new Dlg(ret); else return null; }		
	/*#app*/ this.CreateMediaPlayer = function() { var ret = prompt( "#", "App.CreateMediaPlayer(" ); if( ret ) return new Aud(ret); else return null; }
	/*#app*/ this.CreateSensor = function( type,options ) { var ret = prompt( "#", "App.CreateSensor("+type+"\f"+options ); if( ret ) return new Sns(ret); else return null; }		
	/*#app*/ this.CreateLocator = function( type,options ) { var ret = prompt( "#", "App.CreateLocator("+type+"\f"+options ); if( ret ) return new Loc(ret); else return null; }		
	/*#app*/ this.CreateNetClient = function( type ) { var ret = prompt( "#", "App.CreateNetClient("+type ); if( ret ) return new Net(ret); else return null; }
	/*#app*/ this.CreateNxtRemote = function() { var ret = prompt( "#", "App.CreateNxtRemote(" ); if( ret ) return new Nxt(ret,null); else return null; }	
	/*#app*/ this.CreateWebServer = function( port,options ) { var ret = prompt( "#", "App.CreateWebServer("+port+"\f"+options ); if( ret ) return new Wbs(ret); else return null; }	
	/*#app*/ this.CreateUSBSerial = function( baudRate,dataBits,stopBits,parity,device ) { var ret = prompt( "#", "App.CreateUSBSerial(\f"+baudRate+"\f"+dataBits+"\f"+stopBits+"\f"+parity+"\f"+device ); if( ret ) return new Usb(ret); else return null; }	
	/*#app*/ this.CreateSysProc = function( cmd,env,dir ) { var ret = prompt( "#", "App.CreateSysProc(\f"+cmd+"\f"+env+"\f"+dir ); if( ret ) return new Sys(ret); else return null; }	
	/*#app*/ this.CreateService = function( packageName,className,callback,options ) { var ret = prompt( "#", "App.CreateService(\f"+packageName+"\f"+className+"\f"+options+"\f"+_Cbm(callback) ); if( ret ) return new Svc(ret); else return null; }	
	/*#app*/ this.CreateObject = function( name ) { try { return eval( "new "+name+"()" ); } catch(e) { return null; } }	
	/*#app*/ this.CreateSynth = function( type ) { var ret = prompt( "#", "App.CreateSynth("+type ); if( ret ) return new Syn(ret); else return null; }	
	/*#app*/ this.CreateBluetoothSerial = function( mode ) { var ret = prompt( "#", "App.CreateBluetoothSerial(\f"+mode ); if( ret ) return new Bts(ret); else return null; }	
	/*#app*/ this.CreateZipUtil = function( mode ) { var ret = prompt( "#", "App.CreateZipUtil(\f"+mode ); if( ret ) return new Zip(ret); else return null; }	
	/*#app*/ this.CreateDownloader = function( options ) { var ret = prompt( "#", "App.CreateDownloader(\f"+options ); if( ret ) return new Dwn(ret); else return null; }	
	/*#app*/ this.CreateMediaStore = function() { var ret = prompt( "#", "App.CreateMediaStore(" ); if( ret ) return new Med(ret); else return null; }	
	/*#app*/ this.CreatePlayStore = function() { var ret = prompt( "#", "App.CreatePlayStore(" ); if( ret ) return new Ply(ret); else return null; }	
	/*#app*/ this.CreateNotification = function( options ) { var ret = prompt( "#", "App.CreateNotification(\f"+options ); if( ret ) return new Not(ret); else return null; }	
	/*#app*/ this.CreateFile = function( file,mode ) { var ret = prompt( "#", "App.CreateFile(\f"+file+"\f"+mode ); if( ret ) return new Fil(ret); else return null; }	
	
	//Special methods.
	this.Start = function() { if(typeof OnStart=='function') { OnStart(); prompt("#","_Start"); } }
	
	/*#app*/ this.GA = function( cmd )
	{
		try {
			if( cmd.toLowerCase()=='create' ) {
				_LoadScriptSync( "/Sys/ga.js" );
				window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
				var dbg = _dbg; app.SetDebugEnabled( false );
				ga('create', arguments[1], {'storage':'none', 'clientId':app.GetDeviceId()});
				ga('set', { checkProtocolTask: null, checkStorageTask: null });
				app.SetDebugEnabled( dbg );
			}
			else ga.apply( this, arguments );
		}
		catch(e){}
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
	
	/*#app*/ this.Language2Code = function(name) { 
		if( name ) return _languages.codes[name.toLowerCase()]; 
		else return _curLang; 
	}

	/*#app*/ this.SetLanguage = function( name ) { 
		var json = app.ReadFile( "lang.json" )
		_languages = JSON.parse(json);
		_curLang = _languages.codes[name.toLowerCase()];
	}

	//Helper classes.
	/*#app*/ this.CreateNxt = function() { var nxtHelp = new _NxtHelp(); return nxtHelp.nxt_CreateNxt(); }
	/*#app*/ this.CreateTabs = function( list,width,height,options ) { return new _Tabs( list,width,height,options ); }
	/*#app*/ this.CreateWebSocket = function( id,ip,port,options ) { return new _WebSock( id,ip,port,options ); }
	/*#app*/ this.CreateWizard = function( title,width,height,callback ) { return new _Wizard( title,width,height,callback ) }
	
	//Externally defined methods.
	/*#app*/ this.ShowTextDialog = function( title,deflt,callback ) { _ShowTextDialog( title,deflt,callback ) }
	/*#app*/ this.ShowTip = function( msg,left,top,timeOut,options ) { _ShowTip( msg,left,top,timeOut,options ) }
	/*#app*/ this.PlaySound = function( file ) { _PlaySound( file ) }
	
	//Hybrid objects.
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
		
		var db = sqlitePlugin.openDatabase( name );
		db.name = name;
	    
	    db.GetType = function() { return "Database"; }
	    db.GetName = function() { return db.name; }
		db.ExecuteSql = function( sql, params, success, error ) 
		{
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

function SObj( id )
{
	_map[id] = this; 
	this.id = id;
	this.Destroy  = function() { prompt( this.id, "Obj.Release(" ); _map[this.id] = null; } 
    this.Release  = function() { prompt( this.id, "Obj.Release(" ); _map[this.id] = null; } 
    this.Method  = function(name,types,p1,p2,p3,p4) { return prompt( this.id, "Obj.Method(\f"+name+"\f"+types+"\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4 );  }       
}

function Obj( id )
{
	_map[id] = this; 
	this.id = id;
	this._left = 0; this._top = 0; 
	this.Destroy  = function() { prompt( this.id, "Obj.Release(" ); _map[this.id] = null; } 
    this.Release  = function() { prompt( this.id, "Obj.Release(" ); _map[this.id] = null; }  
    this.Method  = function(name,types,p1,p2,p3,p4) { return prompt( this.id, "Obj.Method(\f"+name+"\f"+types+"\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4 );  }             
    /*#obj*/ this.SetVisibility  = function( mode ) { prompt( this.id, "Obj.SetVisibility("+mode ); }    
    /*#obj*/ this.GetVisibility  = function() { return prompt( this.id, "Obj.GetVisibility(" ); }   
    /*#obj*/ this.Hide  = function() { prompt( this.id, "Obj.SetVisibility(Hide" ); } 
    /*#obj*/ this.Gone  = function() { prompt( this.id, "Obj.SetVisibility(Gone" ); }   
    /*#obj*/ this.Show  = function() { prompt( this.id, "Obj.SetVisibility(Show" ); } 
    /*#obj*/ this.IsVisible  = function() { return prompt( this.id, "Obj.GetVisibility(" )=="Show"; }  
    /*#obj*/ this.IsEnabled  = function() { return prompt( this.id, "Obj.IsEnabled(" )=="true"; } 
    /*#obj*/ this.SetEnabled  = function( enable ) { prompt( this.id, "Obj.SetEnabled(\f"+enable ); }    
    /*#obj*/ this.SetPadding  = function( left,top,right,bottom,mode ) { prompt( this.id, "Obj.SetPadding(\f"+left+"\f"+top+"\f"+right+"\f"+bottom+"\f"+mode ); }
    /*#obj*/ this.SetMargins  = function( left,top,right,bottom,mode ) { prompt( this.id, "Obj.SetMargins(\f"+left+"\f"+top+"\f"+right+"\f"+bottom+"\f"+mode ); }
    /*#obj*/ this.SetBackground  = function( file,options ) { prompt( this.id, "Obj.SetBackground("+file+"\f"+options ); }
    /*#obj*/ this.SetBackAlpha  = function( alpha ) { prompt( this.id, "Obj.SetBackAlpha(\f"+alpha ); }
    /*#obj*/ this.SetBackColor  = function( clr ) { prompt( this.id, "Obj.SetBackColor(\f"+clr ); }  
    /*#obj*/ this.SetBackGradient  = function( colour1,colour2,colour3,options ) { prompt( this.id, "Obj.SetBackGradient(Linear\f"+colour1+"\f"+colour2+"\f"+colour3+"\f"+options+"\f"+null+"\f"+null+"\f"+null ); }  
    /*#obj*/ this.SetBackGradientRadial  = function( x,y,radius,colour1,colour2,colour3,options ) { prompt( this.id, "Obj.SetBackGradient(Radial\f"+x+"\f"+y+"\f"+radius+"\f"+colour1+"\f"+colour2+"\f"+colour3+"\f"+options ); }  
    /*#obj*/ this.SetColorFilter  = function( clr,mode ) { prompt( this.id, "Obj.SetColorFilter(\f"+clr+"\f"+mode ); }
    /*#obj*/ this.AdjustColor  = function( hue,sat,bright,cont ) { prompt( this.id, "Obj.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    /*#obj*/ this.SetPosition  = function( left,top,width,height,options ) { prompt( this.id, "Obj.SetPosition(\f"+left+"\f"+top+"\f"+width+"\f"+height+"\f"+options ); this._left = left; this._top = top;}
    /*#obj*/ this.SetSize  = function( width,height,options ) { prompt( this.id, "Obj.SetSize(\f"+width+"\f"+height+"\f"+options ); }
    /*#obj*/ this.GetWidth  = function( options ) { return prompt( this.id, "Obj.GetWidth(\f"+options ); }  
    /*#obj*/ this.GetHeight  = function( options ) { return prompt( this.id, "Obj.GetHeight(\f"+options ); }   
    /*#obj*/ this.GetAbsWidth  = function() { return prompt( this.id, "Obj.GetAbsWidth(" ); }  
    /*#obj*/ this.GetAbsHeight  = function() { return prompt( this.id, "Obj.GetAbsHeight(" ); }   
    /*#obj*/ this.GetLeft  = function( options ) { return prompt( this.id, "Obj.GetLeft(\f"+options ); }  
    /*#obj*/ this.GetTop  = function( options ) { return prompt( this.id, "Obj.GetTop(\f"+options ); }   
    /*#obj*/ this.GetPosition  = function( options ) { return eval(prompt( this.id, "Obj.GetPosition(\f"+options )); } 
    /*#obj*/ this.SetScale  = function( x,y ) { prompt(this.id,"Obj.SetScale(\f"+x+"\f"+y); }
    /*#obj*/ this.Focus  = function() { prompt(this.id,"Obj.Focus(\f"); }
    /*#obj*/ this.ClearFocus  = function() { prompt(this.id,"Obj.ClearFocus(\f"); }
    /*#obj*/ this.Tween = function( target,duration,type,repeat,yoyo,callback ) { _Tween.apply( this, [target,duration,type,repeat,yoyo,callback] ); }
}

function Thm( id )
{
    var obj = new SObj( id ); 
    obj.GetType = function() { return "Theme"; }
    obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Thm.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    obj.SetBackColor = function( clr ) { prompt( obj.id, "Thm.SetBackColor(\f"+clr ); } 
    obj.SetBackground = function( file,options ) { prompt( obj.id, "Thm.SetBackground(\f"+file+"\f"+options ); }
    obj.SetTextColor = function( clr ) { prompt( obj.id, "Thm.SetTextColor(\f"+clr ); } 
    obj.SetBtnTextColor = function( clr ) { prompt( obj.id, "Thm.SetBtnTextColor(\f"+clr ); } 
    obj.SetButtonOptions = function( options ) { prompt( obj.id, "Thm.SetButtonOptions(\f"+options ); } 
    obj.SetButtonStyle = function( clr1,clr2,radius,strokeClr,strokeWidth,shadow,checkClr ) { prompt( obj.id, "Thm.SetButtonStyle(\f"+clr1+"\f"+clr2+"\f"+radius+"\f"+strokeClr+"\f"+strokeWidth+"\f"+shadow+"\f"+checkClr ); }     
    obj.SetCheckBoxOptions = function( options ) { prompt( obj.id, "Thm.SetCheckBoxOptions(\f"+options ); } 
    obj.SetTextEditOptions = function( options ) { prompt( obj.id, "Thm.SetTextEditOptions(\f"+options ); }
    obj.SetProgressBarOptions = function( options ) { prompt( obj.id, "Thm.SetProgressBarOptions(\f"+options ); }
    obj.SetProgressBackColor = function( clr ) { prompt( obj.id, "Thm.SetProgressBackColor(\f"+clr ); } 
    obj.SetProgressTextColor = function( clr ) { prompt( obj.id, "Thm.SetProgressTextColor(\f"+clr ); } 
    obj.SetTitleHeight = function( height,options ) { prompt( obj.id, "Thm.SetTitleHeight(\f"+height+"\f"+options ); }
    obj.SetTitleColor = function( clr ) { prompt( obj.id, "Thm.SetTitleColor(\f"+clr ); } 
    obj.SetTitleDividerColor = function( clr ) { prompt( obj.id, "Thm.SetTitleDividerColor(\f"+clr ); } 
    obj.SetDialogColor = function( clr ) { prompt( obj.id, "Thm.SetDialogColor(\f"+clr ); }
    obj.SetDialogBtnColor = function( clr ) { prompt( obj.id, "Thm.SetDialogBtnColor(\f"+clr ); }
    obj.SetDialogBtnTxtColor = function( clr ) { prompt( obj.id, "Thm.SetDialogBtnTxtColor(\f"+clr ); }
    obj.SetDimBehind = function( dim ) { prompt( obj.id, "Thm.SetDimBehind(\f"+dim ); } 
	return obj;
}

function Lay( id )
{
	var obj = new Obj( id );
	obj.GetType = function() { return "Layout"; }
    obj.SetOrientation = function( orient ) { prompt( obj.id, "Lay.SetOrientation(\f"+orient ); } 
    obj.SetGravity = function( gravity ) { prompt( obj.id, "Lay.SetGravity(\f"+gravity ); }    
    obj.AddChild = function( child,order ) { prompt( obj.id, "Lay.AddChild(\f"+(child?child.id:null)+"\f"+order ); if(child) child._parent = this; }
    obj.RemoveChild = function( child ) { prompt( obj.id, "Lay.RemoveChild("+(child?child.id:null) ); if(child) child._parent = null; }    
    obj.DestroyChild = function( child ) { prompt( obj.id, "Lay.DestroyChild("+(child?child.id:null) ); if(child) child._parent = null; }    
    obj.ChildToFront = function( child ) { prompt( obj.id, "Lay.ChildToFront("+(child?child.id:null) ); }
    obj.GetChildOrder = function( child ) { return parseInt(prompt( obj.id, "Lay.GetChildOrder(\f"+(child?child.id:null) )); }  
    obj.Animate = function( type,callback,time ) { prompt( obj.id, "Lay.Animate(\f"+type+"\f"+_Cbm(callback)+"\f"+time ); }
    obj.SetTouchable = function( touchable ) { prompt( obj.id, "Lay.SetTouchable(\f"+touchable ); }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Lay.SetOnTouch(\f"+_Cbm(callback) ); } 
    obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "Lay.SetOnTouchUp(\f"+_Cbm(callback) ); }  
    obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "Lay.SetOnTouchMove(\f"+_Cbm(callback) ); }
    obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "Lay.SetOnTouchDown(\f"+_Cbm(callback) ); } 
    obj.SetOnLongTouch = function( callback ) { prompt( obj.id, "Lay.SetOnLongTouch(\f"+_Cbm(callback) ); } 
    obj.SetOnChildChange = function( callback ) { prompt( obj.id, "Lay.SetOnChildChange(\f"+_Cbm(callback) ); }  
    return obj;
}

function Img( id )
{
    var obj = new Obj( id ); 
    obj._auto = true; obj._gfb = "";
    /*#img*/ obj.GetType = function() { return "Image"; }
    /*#img*/ obj.Clear = function() { if( obj._auto ) prompt( obj.id, "Img.Clear(" ); else { this.Draw("c"); } } 
    /*#img*/ obj.Update = function() { if( obj._auto ) prompt( obj.id, "Img.Update(" ); else { prompt( obj.id, "Img.Batch("+obj._gfb ); obj._gfb = ""; } }
    /*#img*/ obj.SetAutoUpdate = function( onoff ) { obj._auto=onoff; prompt( obj.id, "Img.SetAutoUpdate(\f"+onoff ); }
    /*#img*/ obj.SetPixelMode = function( onoff ) { prompt( obj.id, "Img.SetPixelMode(\f"+onoff ); }
    obj.SetName = function( name ) { prompt( obj.id, "Img.SetName("+name ); }
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
    /*#img*/ obj.SetOnTouch = function( callback ) { prompt( obj.id, "Img.SetOnTouch("+_Cbm(callback) ); } 
    /*#img*/ obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "Img.SetOnTouchUp("+_Cbm(callback) ); }  
    /*#img*/ obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "Img.SetOnTouchMove("+_Cbm(callback) ); }
    /*#img*/ obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "Img.SetOnTouchDown("+_Cbm(callback) ); } 
    /*#img*/ obj.SetOnLongTouch = function( callback ) { prompt( obj.id, "Img.SetOnLongTouch("+_Cbm(callback) ); } 
    /*#img*/ obj.SetOnLoad = function( callback ) { prompt( obj.id, "Img.SetOnLoad\f"+_Cbm(callback) ); }   
    /*#img*/ obj.SetTouchable = function( touchable ) { prompt( obj.id, "Img.SetTouchable("+touchable ); }
    /*#img*/ obj.SetMaxRate = function( ms ) { prompt( obj.id, "Img.SetMaxRate("+ms ); }
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
	/*#img*/ obj.SetAlpha = function( alpha ) { if( obj._auto ) prompt( obj.id, "Img.SetAlpha("+alpha ); else this.Draw( "k",null,alpha ); }
    /*#img*/ obj.SetColor = function( clr ) { if( obj._auto ) prompt( obj.id, "Img.SetColor("+clr ); else this.Draw( "o", clr ); }
    /*#img*/ obj.SetTextSize = function( size ) { if( obj._auto ) prompt( obj.id, "Img.SetTextSize("+size ); else this.Draw( "x",null,size ); }
    /*#img*/ obj.SetFontFile = function( file ) { if( obj._auto ) prompt( obj.id, "Img.SetFontFile(\f"+file ); else this.Draw( "f",file ); }  
    /*#img*/ obj.SetLineWidth = function( width ) { if( obj._auto ) prompt( obj.id, "Img.SetLineWidth("+width ); else this.Draw( "w",null,width ); }
    /*#img*/ obj.SetPaintColor = function( clr ) { if( obj._auto ) prompt( obj.id, "Img.SetPaintColor("+clr ); else this.Draw( "n",clr ); }
    /*#img*/ obj.SetPaintStyle = function( style ) { if( obj._auto ) prompt( obj.id, "Img.SetPaintStyle("+style ); else this.Draw( "s",style ); } 
    /*#img*/ obj.Rotate = function( angle,pivX,pivY ) { prompt( obj.id, "Img.Rotate("+angle+"\f"+pivX+"\f"+pivY ); }
    /*#img*/ obj.Move = function( x,y ) { prompt( obj.id, "Img.Move("+x+"\f"+y ); }
    /*#img*/ obj.Scale = function( x,y ) { prompt( obj.id, "Img.Scale("+x+"\f"+y ); }
    /*#img*/ obj.Skew = function( x,y ) { prompt( obj.id, "Img.Skew("+x+"\f"+y ); }
    /*#img*/ obj.Transform = function( matrix ) { prompt( obj.id, "Img.Transform(\f"+matrix ); }
    /*#img*/ obj.Reset = function() { prompt( obj.id, "Img.Reset(" ); }
    /*#img*/ obj.Flatten = function() { prompt( obj.id, "Img.Flatten(" ); }
    /*#img*/ obj.Save = function( fileName,quality ) { prompt( obj.id, "Img.Save\f"+fileName+"\f"+quality ); }
    /*#img*/ obj.DrawFrame = function( ms ) { prompt( obj.id, "Img.DrawFrame\f"+ms ); }
    /*#img*/ obj.Draw = function( func, p1, p2, p3, p4, p5, p6, p7 ) {
		if( obj._gfb.length > 2 ) obj._gfb += "\f";
		obj._gfb += func + "¬" + p1 + "¬" + p2 + "¬" + p3 + "¬" + p4 + "¬" + p5 + "¬" + p6 + "¬" + p7;
	}
    return obj;
}

function Btn( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "Button"; }
    obj.SetEnabled = function( enable ) { prompt( obj.id, "Btn.SetEnabled(\f"+enable ); }  
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Btn.SetOnClick("+_Cbm(callback) ); }
    obj.SetOnTouchEx = function( callback ) { prompt( obj.id, "Btn.SetOnClick("+_Cbm(callback) ); }
    obj.SetText = function( text ) { prompt( obj.id, "Btn.SetText("+text ); }   
    obj.SetHtml = function( html ) { prompt( obj.id, "Btn.SetHtml("+html ); }  
    obj.GetText = function() { return prompt( obj.id, "Btn.GetText(" ); }  
    obj.SetTextColor = function( clr ) { prompt( obj.id, "Btn.SetTextColor("+clr ); }    
    obj.SetFontFile = function( file ) { prompt( obj.id, "Btn.SetFontFile(\f"+file ); }  
    obj.SetTextShadow = function( radius,dx,dy,color ) { prompt( obj.id, "Btn.SetTextShadow(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); } 
    obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Btn.SetTextSize(\f"+size+"\f"+mode ); }   
    obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Btn.GetTextSize(\f"+mode )); } 
    obj.SetEllipsize = function( mode ) { prompt( obj.id, "Btn.SetEllipsize(\f"+mode ); } 
    obj.SetBackColor = function( clr ) { prompt( obj.id, "Btn.SetBackColor(\f"+clr ); } 
    obj.SetStyle = function( clr1,clr2,radius,strokeClr,strokeWidth,shadow ) { prompt( obj.id, "Btn.SetStyle(\f"+clr1+"\f"+clr2+"\f"+radius+"\f"+strokeClr+"\f"+strokeWidth+"\f"+shadow ); }     
	return obj;
}

function Tgl( id )
{
    var obj = new Obj( id );
    obj.GetType = function() { return "Toggle"; }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Tgl.SetOnClick("+_Cbm(callback) ); }
    obj.SetText = function( text ) { prompt( obj.id, "Tgl.SetText("+text ); }
    obj.GetText = function() { return prompt( obj.id, "Tgl.GetText(" ); }  
    obj.SetTextColor = function( clr ) { prompt( obj.id, "Tgl.SetTextColor("+clr ); }    
    obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Tgl.SetTextSize(\f"+size+"\f"+mode ); }   
    obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Tgl.GetTextSize(\f"+mode )); }  
    obj.SetChecked = function( checked ) { prompt( obj.id, "Tgl.SetChecked("+checked ); }   
    obj.GetChecked = function() { return prompt( obj.id, "Tgl.GetChecked(" )=="true"; } 
    obj.SetStyle = function( clr1,clr2,radius,strokeClr,strokeWidth,shadow,checkClr ) { prompt( obj.id, "Tgl.SetStyle(\f"+clr1+"\f"+clr2+"\f"+radius+"\f"+strokeClr+"\f"+strokeWidth+"\f"+shadow+"\f"+checkClr ); }        
    return obj;      
}

function Chk( id )
{
    var obj = new Obj( id );
    obj.GetType = function() { return "CheckBox"; }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Chk.SetOnClick("+_Cbm(callback) ); }
    obj.SetText = function( text ) { prompt( obj.id, "Chk.SetText("+text ); }    
    obj.GetText = function() { return prompt( obj.id, "Chk.GetText(" ); }   
    obj.SetTextColor = function( clr ) { prompt( obj.id, "Chk.SetTextColor("+clr ); }    
    obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Chk.SetTextSize(\f"+size+"\f"+mode ); }   
    obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Chk.GetTextSize(\f"+mode )); }  
    obj.SetChecked = function( checked ) { prompt( obj.id, "Chk.SetChecked("+checked ); }   
    obj.GetChecked = function() { return prompt( obj.id, "Chk.GetChecked(" )=="true"; }    
    obj.SetColorFilter = function( clr,mode ) { prompt( obj.id, "Chk.SetColorFilter(\f"+clr+"\f"+mode ); }
    obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Chk.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    return obj;      
}

function Spn( id )
{
    var obj = new Obj( id );   
    obj.GetType = function() { return "Spinner"; }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Spn.SetOnClick("+_Cbm(callback) ); }
    obj.SetOnChange = function( callback ) { prompt( obj.id, "Spn.SetOnClick("+_Cbm(callback) ); }
    obj.SetText = function( txt ) { prompt( obj.id, "Spn.SetText("+txt ); }   
    obj.SelectItem = function( item ) { prompt( obj.id, "Spn.SetText("+item ); }   
    obj.GetText = function() { return prompt( obj.id, "Spn.GetText(" ); } 
    obj.SetTextColor = function( clr ) { prompt( obj.id, "Spn.SetTextColor("+clr ); }    
    obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Spn.SetTextSize(\f"+size+"\f"+mode ); }   
    obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Spn.GetTextSize(\f"+mode )); }  
    obj.SetList = function( list,delim ) { prompt(obj.id, "Spn.SetList(\f"+list+"\f"+delim); }
    obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Spn.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    return obj;
}

function Skb( id )
{
    var obj = new Obj( id );   
    obj.GetType = function() { return "SeekBar"; }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Skb.SetOnClick("+_Cbm(callback) ); }
    obj.SetOnChange = function( callback ) { prompt( obj.id, "Skb.SetOnClick("+_Cbm(callback) ); }
    obj.GetValue = function() { return parseFloat(prompt( obj.id, "Skb.GetValue(" )); }  
    obj.SetValue = function( val ) { prompt( obj.id, "Skb.SetValue("+val ); }
    obj.SetRange = function( range ) { prompt( obj.id, "Skb.SetRange("+range ); }
    obj.SetMaxRate = function( rate ) { prompt( obj.id, "Skb.SetMaxRate("+rate ); }
    obj.SetColorFilter = function( clr,mode ) { prompt( obj.id, "Skb.SetColorFilter(\f"+clr+"\f"+mode ); }
    obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Skb.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    return obj;
}

function Ibn( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "ImageButton"; }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Ibn.SetOnClick("+_Cbm(callback) ); }
    obj.SetText = function( text ) { prompt( obj.id, "Ibn.SetText("+text ); }    
    obj.SetTextColor = function( clr ) { prompt( obj.id, "Ibn.SetTextColor("+clr ); }    
    obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Ibn.SetTextSize(\f"+size+"\f"+mode ); }   
    obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Ibn.GetTextSize(\f"+mode )); }  
    return obj;           
}

function Txt( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "Text"; }
    obj.SetText = function( text ) { prompt( obj.id, "Txt.SetText("+text ); }  
    obj.SetHtml = function( html ) { prompt( obj.id, "Txt.SetHtml("+html ); } 
    obj.GetHtml = function() { return prompt( obj.id, "Txt.GetHtml(" ); } 
    obj.Log = function( msg,options ) { prompt( obj.id, "Txt.Log(\f"+msg+"\f"+options ); } 
    obj.SetLog = function( maxLines ) { prompt( obj.id, "Txt.SetLog(\f"+maxLines ); } 
    obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Txt.SetTextSize(\f"+size+"\f"+mode ); }   
    obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Txt.GetTextSize(\f"+mode )); }  
    obj.GetText = function() { return prompt( obj.id, "Txt.GetText(" ); }  
    obj.SetTextColor = function( color ) { prompt( obj.id, "Txt.SetTextColor("+color ); }    
    obj.SetFontFile = function( file ) { prompt( obj.id, "Txt.SetFontFile(\f"+file ); }   
    obj.GetLineCount = function() { return parseInt(prompt( obj.id, "Txt.GetLineCount(")); }   
    obj.GetMaxLines = function() { return parseInt(prompt( obj.id, "Txt.GetMaxLines(")); }   
    obj.GetLineTop = function( line ) { return parseFloat(prompt( obj.id, "Txt.GetLineTop("+line )); }   
    obj.GetLineStart = function( line ) { return parseInt(prompt( obj.id, "Txt.GetLineStart("+line )); }  
    obj.SetEllipsize = function( mode ) { prompt( obj.id, "Txt.SetEllipsize(\f"+mode ); } 
    obj.SetTextShadow = function( radius,dx,dy,color ) { prompt( obj.id, "Txt.SetTextShadow(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }   
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Txt.SetOnTouch("+_Cbm(callback) ); } 
    obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "Txt.SetOnTouchUp("+_Cbm(callback) ); }  
    obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "Txt.SetOnTouchMove("+_Cbm(callback) ); }
    obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "Txt.SetOnTouchDown("+_Cbm(callback) ); } 
    obj.SetOnLongTouch = function( callback ) { prompt( obj.id, "Txt.SetOnLongTouch("+_Cbm(callback) ); }   
    obj.SetTouchable = function( touchable ) { prompt( obj.id, "Txt.SetTouchable("+touchable ); }
    return obj;
}

function Txe( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "TextEdit"; } 
    obj.SetText = function( txt ) { prompt( obj.id, "Txe.SetText("+txt ); } 
    obj.SetHtml = function( html ) { prompt( obj.id, "Txe.SetHtml("+html ); }    
    obj.GetHtml = function() { return prompt( obj.id, "Txe.GetHtml(" ); } 
    obj.SetHint = function( text ) { prompt( obj.id, "Txe.SetHint("+text ); } 
    obj.InsertText = function( text,start,end ) { prompt( obj.id, "Txe.InsertText(\f"+text+"\f"+start ); }  
    obj.ReplaceText = function( text,start,end ) { prompt( obj.id, "Txe.ReplaceText(\f"+text+"\f"+start+"\f"+end ); }  
    obj.GetText = function() { return prompt( obj.id, "Txe.GetText(" ); }
    obj.SetOnChange = function( callback ) { prompt( obj.id, "Txe.SetOnChange(\f"+_Cbm(callback) ); }  
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Txe.SetOnTouch(\f"+_Cbm(callback) ); }  
    obj.SetOnEnter = function( callback ) { prompt( obj.id, "Txe.SetOnEnter(\f"+_Cbm(callback) ); }  
    obj.SetTextColor = function( color ) { prompt( obj.id, "Txe.SetTextColor("+color ); }    
    obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Txe.SetTextSize(\f"+size+"\f"+mode ); }   
    obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Txe.GetTextSize(\f"+mode )); }   
    obj.GetLineCount = function() { return parseInt(prompt( obj.id, "Txe.GetLineCount(")); } 
    obj.GetMaxLines = function() { return parseInt(prompt( obj.id, "Txe.GetMaxLines(")); }  
    obj.GetLineTop = function( line ) { return parseFloat(prompt( obj.id, "Txe.GetLineTop("+line )); }   
    obj.GetLineStart = function( line ) { return parseInt(prompt( obj.id, "Txe.GetLineStart("+line )); } 
    obj.SetCursorColor = function( color ) { prompt( obj.id, "Txe.SetCursorColor(\f"+color ); }  
    obj.SetCursorPos = function( pos ) { prompt( obj.id, "Txe.SetCursorPos("+pos ); }  
    obj.GetCursorPos = function() { return parseInt(prompt( obj.id, "Txe.GetCursorPos(")); }   
    obj.GetCursorLine = function() { return parseInt(prompt( obj.id, "Txe.GetCursorLine(")); }  
    obj.SetSelection = function( start,stop ) { prompt( obj.id, "Txe.SetSelection(\f"+start+"\f"+stop ); } 
    obj.GetSelectedText = function() { return prompt( obj.id, "Txe.GetSelectedText("); }  
    obj.GetSelectionStart = function() { return parseInt(prompt( obj.id, "Txe.GetSelectionStart(")); }  
    obj.GetSelectionEnd = function() { return parseInt(prompt( obj.id, "Txe.GetSelectionEnd(")); }   
    obj.Undo = function() { prompt( obj.id, "Txe.Undo("); }   
    obj.Redo = function() { prompt( obj.id, "Txe.Redo("); }  
    obj.ClearHistory = function() { prompt( obj.id, "Txe.ClearHistory("); }  
    return obj;
}

function Cde( id )
{
    var obj = new Obj( id ); 
    obj.GetType = function() { return "CodeEdit"; }  
    obj.GetText = function() { return prompt( obj.id, "Cde.GetText(" ); } 
    obj.GetSelectedText = function() { return prompt( obj.id, "Cde.GetSelectedText(" ); } 
    obj.SetText = function( txt ) { prompt( obj.id, "Cde.SetText(\f"+txt ); } 
    obj.SetHtml = function( html ) { prompt( obj.id, "Cde.SetText(\f"+html ); }   
    obj.Undo = function() { prompt( obj.id, "Cde.Undo("); }   
    obj.Redo = function() { prompt( obj.id, "Cde.Redo("); } 
    obj.Copy = function() { prompt( obj.id, "Cde.Copy(" ); } 
    obj.Cut = function() { prompt( obj.id, "Cde.Cut(" ); } 
    obj.Paste = function() { prompt( obj.id, "Cde.Paste(" ); } 
    obj.SetSelectMode = function( onOff ) { prompt( obj.id, "Cde.SetSelectMode(\f"+onOff ); }
    obj.GetSelectMode = function() { return prompt( obj.id, "Cde.GetSelectMode(" )=="true"; }
    obj.SelectAll = function() { prompt( obj.id, "Cde.SelectAll(" ); }
    obj.Search = function( text,dir,matchCase,wholeWord ) { prompt( obj.id, "Cde.Search(\f"+text+"\f"+dir+"\f"+matchCase+"\f"+wholeWord ); } 
    obj.Replace = function( text ) { prompt( obj.id, "Cde.Replace(\f"+text ); } 
    obj.ReplaceAll = function( text,newText,matchCase,wholeWord ) { prompt( obj.id, "Cde.ReplaceAll(\f"+text+"\f"+newText+"\f"+matchCase+"\f"+wholeWord ); } 
    obj.SetUseKeyboard = function( onOff ) { prompt( obj.id, "Cde.SetUseKeyboard(\f"+onOff ); }
    obj.SetNavigationMethod = function( method ) { prompt( obj.id, "Cde.SetNavigationMethod(\f"+method); }  
    obj.ClearHistory = function() { prompt( obj.id, "Cde.ClearHistory("); }  
    obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Cde.SetTextSize(\f"+size+"\f"+mode ); }  
    obj.SetTextColor = function( color ) { prompt( obj.id, "Cde.SetTextColor(\f"+color ); }  
    obj.SetColorScheme = function( scheme ) { prompt( obj.id, "Cde.SetColorScheme(\f"+scheme ); }  
    obj.GetCursorLine = function() { return parseInt(prompt( obj.id, "Cde.GetCursorLine(")); } 
    obj.GetLineStart = function( line ) { return parseInt(prompt( obj.id, "Cde.GetLineStart("+line )); } 
    obj.HighlightLine = function( line ) { prompt( obj.id, "Cde.HighlightLine(\f"+line ); } 
    obj.SetCursorPos = function( pos ) { prompt( obj.id, "Cde.SetCursorPos("+pos ); }  
    obj.GetCursorPos = function() { return parseInt(prompt( obj.id, "Cde.GetCursorPos(")); }   
    obj.InsertText = function( text,start,end ) { prompt( obj.id, "Cde.InsertText(\f"+text+"\f"+start ); }  
    obj.ReplaceText = function( text,start,end ) { prompt( obj.id, "Cde.ReplaceText(\f"+text+"\f"+start+"\f"+end ); } 
    obj.SetSelection = function( start,stop ) { prompt( obj.id, "Cde.SetSelection(\f"+start+"\f"+stop ); } 
    obj.SetLanguage = function( ext ) { prompt( obj.id, "Cde.SetLanguage(\f"+ext ); }  
    obj.SetOnChange = function( callback ) { prompt( obj.id, "Cde.SetOnChange(\f"+_Cbm(callback) ); }  
    obj.SetOnDoubleTap = function( callback ) { prompt( obj.id, "Cde.SetOnDoubleTap(\f"+_Cbm(callback) ); } 
    obj.SetOnKey = function( callback ) { prompt( obj.id, "Cde.SetOnKey(\f"+_Cbm(callback) ); }
    return obj;
}

function Lst( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "List"; }
    obj.SetList = function( list,delim ) { prompt( this.id, "Lst.SetList(\f"+list+"\f"+delim ); }
    obj.GetList = function( delim ) { return eval(prompt( obj.id, "Lst.GetList("+delim )); }
    obj.AddItem = function( title,body,image ) { prompt( obj.id, "Lst.AddItem(\f"+title+"\f"+body+"\f"+image ); }
    obj.InsertItem = function( index,title,body,image ) { prompt( obj.id, "Lst.InsertItem(\f"+index+"\f"+title+"\f"+body+"\f"+image ); }
    obj.SetItem = function( title,newTitle,newBody,newImage ) { prompt( obj.id, "Lst.SetItem(\f"+title+"\f"+newTitle+"\f"+newBody+"\f"+newImage ); }
    obj.SetItemByIndex = function( index,newTitle,newBody,newImage ) { prompt( obj.id, "Lst.SetItemByIndex(\f"+index+"\f"+newTitle+"\f"+newBody+"\f"+newImage ); }
    obj.RemoveItem = function( title ) { prompt( obj.id, "Lst.RemoveItem(\f"+title ); }
    obj.RemoveItemByIndex = function( index ) { prompt( obj.id, "Lst.RemoveItemByIndex(\f"+index ); }
    obj.RemoveAll = function() { prompt( obj.id, "Lst.RemoveAll(" ); }
    obj.SelectItem = function( title,body,scroll ) { var p="Lst.SelectItem(\f"+title+"\f"+body+"\f"+scroll; prompt(obj.id,p); }
    obj.SelectItemByIndex = function( index,scroll ) { var p="Lst.SelectItemByIndex(\f"+index+"\f"+scroll; prompt(obj.id,p); }
    obj.GetItem = function( title ) { var p="Lst.GetItem(\f"+title; return eval(prompt(obj.id,p)); }
    obj.GetItemByIndex = function( index ) { var p="Lst.GetItemByIndex(\f"+index; return eval(prompt(obj.id,p)); }
    obj.GetLength = function() { return parseInt(prompt(obj.id,"Lst.GetLength(")); }
    obj.ScrollToItem = function( title,body ) { var p="Lst.ScrollToItem(\f"+title+"\f"+body; prompt(obj.id,p); }
    obj.ScrollToItemByIndex = function( index ) { var p="Lst.ScrollToItemByIndex(\f"+index; prompt(obj.id,p); }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Lst.SetOnClick("+_Cbm(callback) ); }    
    obj.SetOnLongTouch = function( callback ) { prompt( obj.id, "Lst.SetOnLongClick("+_Cbm(callback) ); }    
    obj.SetTextColor = function( clr ) { prompt( obj.id, "Lst.SetTextColor1("+clr ); } 
    obj.SetTextColor1 = function( clr ) { prompt( obj.id, "Lst.SetTextColor1("+clr ); } 
    obj.SetTextColor2 = function( clr ) { prompt( obj.id, "Lst.SetTextColor2("+clr ); }
    obj.SetHiTextColor1 = function( clr ) { prompt( obj.id, "Lst.SetHiTextColor1("+clr ); }
    obj.SetHiTextColor2 = function( clr ) { prompt( obj.id, "Lst.SetHiTextColor2("+clr ); } 
    obj.SetTextSize = function( size,mode ) { prompt( obj.id, "Lst.SetTextSize1(\f"+size+"\f"+mode ); }  
    obj.SetTextSize1 = function( size,mode ) { prompt( obj.id, "Lst.SetTextSize1(\f"+size+"\f"+mode ); }  
    obj.SetTextSize2 = function( size,mode ) { prompt( obj.id, "Lst.SetTextSize2(\f"+size+"\f"+mode ); }   
    obj.GetTextSize = function( mode ) { return parseFloat(prompt( obj.id, "Lst.GetTextSize(\f"+mode )); }   
    obj.SetColumnWidths = function( icon,title,body,mode ) { prompt( obj.id, "Lst.SetColumnWidths(\f"+icon+"\f"+title+"\f"+body+"\f"+mode ); }  
    obj.SetTextMargins = function( left,top,right,bottom,mode,options ) { prompt( this.id, "Lst.SetTextMargins(\f"+left+"\f"+top+"\f"+right+"\f"+bottom+"\f"+mode+"\f"+options ); }
    obj.SetIconMargins = function( left,top,right,bottom,mode ) { prompt( this.id, "Lst.SetIconMargins(\f"+left+"\f"+top+"\f"+right+"\f"+bottom+"\f"+mode ); }
    obj.SetIconSize = function( size,mode ) { prompt( obj.id, "Lst.SetIconSize(\f"+size+"\f"+mode ); } 
    obj.SetEllipsize = function( mode ) { prompt( obj.id, "Lst.SetEllipsize1(\f"+mode ); } 
    obj.SetEllipsize1 = function( mode ) { prompt( obj.id, "Lst.SetEllipsize1(\f"+mode ); }
    obj.SetEllipsize2 = function( mode ) { prompt( obj.id, "Lst.SetEllipsize2(\f"+mode ); }
    obj.SetTextShadow = function( radius,dx,dy,color ) { prompt( obj.id, "Lst.SetTextShadow1(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }
    obj.SetTextShadow1 = function( radius,dx,dy,color ) { prompt( obj.id, "Lst.SetTextShadow1(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }
    obj.SetTextShadow2 = function( radius,dx,dy,color ) { prompt( obj.id, "Lst.SetTextShadow2(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color ); }
    obj.SetDivider = function( height,color ) { prompt( obj.id, "Lst.SetDivider(\f"+height+"\f"+color ); }
    obj.SetFontFile = function( file ) { prompt( obj.id, "Lst.SetFontFile(\f"+file ); }  
	obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Lst.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
    return obj;
}

function Web( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "WebView"; }
    obj.SetOnProgress = function( callback ) { prompt( obj.id, "Web.SetOnProgress("+_Cbm(callback) ); }
    obj.SetOnError = function( callback ) { prompt( obj.id, "Web.SetOnError(\f"+_Cbm(callback) ); }  
    obj.SetOnConsole = function( callback ) { prompt( obj.id, "Web.SetOnConsole(\f"+_Cbm(callback) ); } 
    obj.LoadHtml = function( html,base,options ) { prompt(obj.id,"Web.LoadHtml(\f"+html+"\f"+base+"\f"+options); }
    obj.LoadUrl = function( url,options ) { prompt(obj.id,"Web.LoadUrl(\f"+url+"\f"+options); }
    obj.Reload = function() { prompt(obj.id,"Web.Reload(" ); }
    obj.Back = function() { prompt(obj.id,"Web.Back(" ); }
    obj.Forward = function() { prompt(obj.id,"Web.Forward(" ); }
    obj.CanGoBack = function() { return prompt( obj.id, "Web.CanGoBack(" )=="true"; } 
    obj.CanGoForward = function() { return prompt( obj.id, "Web.CanGoForward(" )=="true"; } 
    obj.Execute = function( code,callback ) { prompt( obj.id, "Web.Execute(\f"+code+"\f"+_Cbm(callback) ); } 
    obj.ClearHistory = function() { prompt(obj.id,"Web.ClearHistory(" ); }
    obj.GetUrl = function() { return prompt(obj.id,"Web.GetUrl(" ); }
    obj.Capture = function( file ) { prompt( obj.id, "Web.Capture(\f"+file ); } 
    obj.Print = function() { prompt( obj.id, "Web.Print(\f" ); }
    obj.SetUserAgent = function( agent ) { prompt( obj.id, "Web.SetUserAgent(\f"+agent ); } 
    obj.SetUserCreds = function( name,password ) { prompt( obj.id, "Web.SetUserCreds(\f"+name+"\f"+password ); }
    obj.SimulateKey = function( keyName,modifiers,pause ) { prompt( obj.id, "Web.SimulateKey(\f"+keyName+"\f"+modifiers+"\f"+pause ); }
    obj.SetRedirect = function( urlFrom, urlTo ) { prompt( obj.id, "Web.SetRedirect(\f"+urlFrom+"\f"+urlTo ); } 
    obj.SetTouchMode = function( mode ) { prompt( obj.id, "Web.SetTouchMode(\f"+mode ); } 
    return obj;
}

function Scr( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "Scroller"; }
    obj.AddChild = function( child ) { prompt( obj.id, "Scr.AddChild(\f"+(child?child.id:null) ); }
    obj.RemoveChild = function( child ) { prompt( obj.id, "Scr.RemoveChild(\f"+(child?child.id:null) ); }    
    obj.DestroyChild = function( child ) { prompt( obj.id, "Scr.DestroyChild(\f"+(child?child.id:null) ); }  
    obj.ScrollTo = function( x,y ) { prompt( obj.id, "Scr.ScrollTo\f"+x+"\f"+y ); }
    obj.ScrollBy = function( x,y ) { prompt( obj.id, "Scr.ScrollBy\f"+x+"\f"+y ); }
    obj.GetScrollX = function() { return parseFloat(prompt( obj.id, "Scr.GetScrollX(" )); }
    obj.GetScrollY = function() { return parseFloat(prompt( obj.id, "Scr.GetScrollY(" )); }
    return obj;
}

function Dlg( id )
{
    var obj = new Obj( id );   
    obj.GetType = function() { return "Dialog"; }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Dlg.SetOnClick("+_Cbm(callback) ); }
    obj.AddLayout = function( layout ) { prompt( obj.id, "Dlg.AddLayout("+ layout.id ); }	
	obj.RemoveLayout = function( layout ) { prompt( obj.id, "Dlg.RemoveLayout("+ layout.id ); }	
	obj.Show = function() { prompt( obj.id, "Dlg.Show(" ); }
	obj.Hide = function() { prompt( obj.id, "Dlg.Hide(" ); }
	obj.IsVisible = function() { return prompt( obj.id, "Dlg.IsVisible\f" )=="true"; } 
	obj.Dismiss = function() { prompt( obj.id, "Dlg.Dismiss(" ); }
	obj.SetTitle = function( title,options ) { prompt( obj.id, "Dlg.SetTitle(\f"+title+"\f"+options ); }
	obj.SetBackColor = function( clr ) { prompt( obj.id, "Dlg.SetBackColor(\f"+clr ); } 
	obj.SetBackground = function( file,options ) { prompt( obj.id, "Dlg.SetBackground(\f"+file+"\f"+options ); }
	obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Dlg.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
	obj.SetSize = function( width,height,options ) { prompt( obj.id, "Dlg.SetSize(\f"+width+"\f"+height+"\f"+options ); }
	obj.SetPosition = function( left,top,width,height,options ) { prompt( obj.id, "Dlg.SetPosition(\f"+left+"\f"+top+"\f"+width+"\f"+height+"\f"+options ); }
	obj.SetOnCancel = function( callback ) { prompt( obj.id, "Dlg.SetOnCancel(\f"+_Cbm(callback) ); }
	obj.EnableBackKey = function( enable ) { prompt( obj.id, "Dlg.EnableBackKey(\f"+enable ); }
	obj.SetOnBack = function( callback ) { prompt( obj.id, "Dlg.SetOnBack(\f"+_Cbm(callback) ); }
	return obj;
}

function Ynd( id )
{
    var obj = new SObj( id );    
    obj.GetType = function() { return "YesNoDialog"; }
    obj.Show = function() { prompt( obj.id, "Ynd.Show(" ); }
	obj.Hide = function() { prompt( obj.id, "Ynd.Hide(" ); }
	obj.Dismiss = function() { prompt( obj.id, "Ynd.Dismiss(" ); }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Ynd.SetOnClick("+_Cbm(callback) ); }
	obj.SetBackColor = function( clr ) { prompt( obj.id, "Ynd.SetBackColor(\f"+clr ); } 
	obj.SetBackground = function( file,options ) { prompt( obj.id, "Ynd.SetBackground(\f"+file+"\f"+options ); }
	obj.SetSize = function( width,height,options ) { prompt( obj.id, "Ynd.SetSize(\f"+width+"\f"+height+"\f"+options ); }
	obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Ynd.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
	obj.SetButtonText = function( yes,no ) { prompt( obj.id, "Ynd.SetButtonText(\f"+yes+"\f"+no ); }
    return obj;
}

function Lvw( id )
{
    var obj = new Obj( id );   
    obj.GetType = function() { return "ListView"; }
    obj.Show = function() { prompt( obj.id, "Lvw.Show(" ); }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Lvw.SetOnClick("+_Cbm(callback) ); }   
    return obj; 
}

function Ldg( id )
{
    var obj = new SObj( id );  
    obj.GetType = function() { return "ListDialog"; } 
    obj.Show = function() { prompt( obj.id, "Ldg.Show(" ); }
	obj.Hide = function() { prompt( obj.id, "Ldg.Hide(" ); }
	obj.Dismiss = function() { prompt( obj.id, "Ldg.Dismiss(" ); }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Ldg.SetOnClick("+_Cbm(callback) ); }
    obj.SetTitle = function( title ) { prompt( obj.id, "Ldg.SetTitle(\f"+ title ); }
	obj.SetBackColor = function( clr ) { prompt( obj.id, "Ldg.SetBackColor(\f"+clr ); } 
	obj.SetBackground = function( file,options ) { prompt( obj.id, "Ldg.SetBackground(\f"+file+"\f"+options ); }
	obj.SetTextColor = function( clr ) { prompt( obj.id, "Ldg.SetTextColor(\f"+clr ); } 
	obj.AdjustColor = function( hue,sat,bright,cont ) { prompt( obj.id, "Ldg.AdjustColor(\f"+hue+"\f"+sat+"\f"+bright+"\f"+cont ); }
	obj.SetSize = function( width,height,options ) { prompt( obj.id, "Ldg.SetSize(\f"+width+"\f"+height+"\f"+options ); }
    return obj;    
}

function Btl( id )
{
    var obj = new Obj( id );   
    obj.GetType = function() { return "BluetoothList"; }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "Btl.SetOnClick("+_Cbm(callback) ); }
    obj.SetOnTouchEx = function( callback ) { prompt( obj.id, "Btl.SetOnClick("+callback ); }
    return obj;    
}

function Net( id )
{
    var obj = new SObj( id );    
    obj.GetType = function() { return "NetClient"; }
    obj.Connect = function( address,port ) { return prompt( obj.id, "Net.Connect("+address+"\f"+port )=="true"; }
    obj.SetOnConnect = function( callback ) { prompt( obj.id, "Net.SetOnConnect("+_Cbm(callback) ); }
    obj.Disconnect = function() { prompt( obj.id, "Net.Disconnect(" ); }
	obj.IsEnabled = function() { return prompt( obj.id, "Net.IsEnabled(" )=="true"; } 
    obj.IsConnected = function() { return prompt( obj.id, "Net.IsConnected(" )=="true"; }   
    obj.SetTimeout = function( secs ) { prompt( obj.id, "Net.SetTimeout("+secs ); } 
    obj.SendText = function( text,mode ) { prompt( obj.id, "Net.SendText("+text+"\f"+mode ); }
    obj.SendBytes = function( data,mode ) { prompt( obj.id, "Net.SendBytes(\f"+data+"\f"+mode ); }
    obj.ReceiveText = function( mode ) { return prompt( obj.id, "Net.ReceiveText("+mode ); }     
    obj.ReceiveBytes = function( mode ) { return eval(prompt( obj.id, "Net.ReceiveBytes(\f"+mode )); }   
    obj.ReceiveFile = function( file,wait ) { return prompt( obj.id, "Net.ReceiveFile("+file+"\f"+wait ); }        
    obj.DownloadFile = function( file ) { return prompt( obj.id, "Net.DownloadFile("+file ); } 
    obj.SetOnDownload = function( callback ) { prompt( obj.id, "Net.SetOnDownload("+_Cbm(callback) ); }    
    obj.GetBroadcastAddress = function() { return prompt( obj.id, "Net.GetBroadcastAddress(" ); } 
    obj.SendDatagram = function( data,mode,address,port,options ) { prompt( obj.id, "Net.SendDatagram(\f"+data+"\f"+mode+"\f"+address+"\f"+port+"\f"+options ); }
    obj.ReceiveDatagram = function( mode,port,timeout ) { return prompt( obj.id, "Net.ReceiveDatagram("+mode+"\f"+port+"\f"+timeout ); }
    obj.ReceiveDatagrams = function( port,mode ) { prompt( obj.id, "Net.ReceiveDatagrams(\f"+port+"\f"+mode ); }  
    obj.SetOnReceive = function( callback ) { prompt( obj.id, "Net.SetOnReceive("+_Cbm(callback) ); }           
    obj.AutoReceive = function( server,port,mode ) { return prompt( obj.id, "Net.AutoReceive("+server+"\f"+port+"\f"+mode ); } 
    obj.WakeOnLan = function( ip,mac ) { prompt( obj.id, "Net.WakeOnLan(\f"+ip+"\f"+mac ); }
    return obj;   
}

function Aud( id )
{
    var obj = new SObj( id );    
    obj.GetType = function() { return "MediaPlayer"; }
    obj.SetFile = function( file ) { prompt( obj.id, "Aud.SetFile("+file ); } 
    obj.SetLooping = function( loop ) { prompt( obj.id, "Aud.SetLooping(\f"+loop ); } 
    obj.Close = function() { prompt( obj.id, "Aud.Close(" ); }
    obj.Release = function() { prompt( obj.id, "Aud.Release(" ); _map[obj.id] = null; }
    obj.Destroy = function() { prompt( obj.id, "Aud.Release(" ); _map[obj.id] = null; }
    obj.Play = function( from ) { prompt( obj.id, "Aud.Play(\f"+from ); }
    obj.Pause = function() { prompt( obj.id, "Aud.Pause(" ); }
    obj.Stop = function() { prompt( obj.id, "Aud.Stop(" ); }    
    obj.IsReady = function() { return prompt( obj.id, "Aud.IsReady(" )=="true"; } 
	obj.IsPlaying = function() { return prompt( obj.id, "Aud.IsPlaying(" )=="true"; } 
    obj.IsLooping = function() { return prompt( obj.id, "Aud.IsLooping(" )=="true"; }    
    obj.SeekTo = function( time ) { prompt( obj.id, "Aud.SeekTo("+time ); }
    obj.GetPosition = function() { return parseFloat(prompt( obj.id, "Aud.GetPosition(" )); }  
    obj.GetDuration = function() { return parseFloat(prompt( obj.id, "Aud.GetDuration(" )); }  
    obj.SetVolume = function( left,right ) { prompt( obj.id, "Aud.SetVolume("+left+"\f"+right ); }
    obj.SetOnReady = function( callback ) { prompt( obj.id, "Aud.SetOnReady("+_Cbm(callback) ); } 
    obj.SetOnComplete = function( callback ) { prompt( obj.id, "Aud.SetOnComplete("+_Cbm(callback) ); }    
    obj.SetOnSeekDone = function( callback ) { prompt( obj.id, "Aud.SetOnSeekDone("+_Cbm(callback) ); }  
    return obj;  
}

function Dwn( id )
{
    var obj = new SObj( id );    
    obj.GetType = function() { return "Downloader"; }
    obj.Download = function( url,fldr,name,headers ) { prompt( obj.id, "Dwn.Download(\f"+url+"\f"+fldr+"\f"+name+"\f"+headers ); }
    obj.IsComplete = function() { return prompt( obj.id, "Dwn.IsComplete(" )=="true"; } 
    obj.GetProgress = function() { return parseFloat(prompt( obj.id, "Dwn.GetProgress(" )); }  
    obj.GetSize = function() { return parseFloat(prompt( obj.id, "Dwn.GetSize(" )); }  
    obj.SetOnDownload = function( callback ) { prompt( obj.id, "Dwn.SetOnDownload(\f"+_Cbm(callback) ); }  
    obj.SetOnComplete = function( callback ) { prompt( obj.id, "Dwn.SetOnComplete(\f"+_Cbm(callback) ); }  
    obj.SetOnCancel = function( callback ) { prompt( obj.id, "Dwn.SetOnCancel(\f"+_Cbm(callback) ); }  
    obj.SetOnError = function( callback ) { prompt( obj.id, "Dwn.SetOnError(\f"+_Cbm(callback) ); }    
    return obj;  
}

function Med( id )
{
    var obj = new SObj( id );  
    obj.GetType = function() { return "MediaStore"; } 
    obj.QueryMedia = function( filter,sort,options ) { prompt( obj.id, "Med.QueryMedia(\f"+filter+"\f"+sort+"\f"+options ); }
    obj.SetOnMediaResult = function( callback ) { prompt( obj.id, "Med.SetOnMediaResult(\f"+_Cbm(callback) ); } 
    obj.QueryArtists = function( filter,sort,options ) { prompt( obj.id, "Med.QueryArtists(\f"+filter+"\f"+sort+"\f"+options ); }
    obj.SetOnArtistsResult = function( callback ) { prompt( obj.id, "Med.SetOnArtistsResult(\f"+_Cbm(callback) ); } 
    obj.QueryAlbums = function( filter,sort,options ) { prompt( obj.id, "Med.QueryAlbums(\f"+filter+"\f"+sort+"\f"+options ); }
    obj.SetOnAlbumsResult = function( callback ) { prompt( obj.id, "Med.SetOnAlbumsResult(\f"+_Cbm(callback) ); } 
    obj.GetAlbumArt = function( img,id,options ) { return prompt( obj.id, "Med.GetAlbumArt(\f"+(img?img.id:null)+"\f"+id+"\f"+options )=="true"; }
    obj.GetSongArt = function( img,id,options ) { return prompt( obj.id, "Med.GetSongArt(\f"+(img?img.id:null)+"\f"+id+"\f"+options )=="true"; }
    return obj;  
}

function Ply( id )
{
    var obj = new SObj( id );    
    obj.GetType = function() { return "PlayStore"; }
    obj.GetBillingInfo = function( prodIDs,callback,options ) { ret = prompt( obj.id, "Ply.GetBillingInfo(\f"+prodIDs+"\f"+_Cbm(callback)+"\f"+options ); }
    obj.Purchase = function( prodID,token,callback,options ) { ret = prompt( obj.id, "Ply.Purchase(\f"+prodID+"\f"+token+"\f"+_Cbm(callback)+"\f"+options ); }
    obj.GetPurchases = function( callback,options ) { ret = prompt( obj.id, "Ply.GetPurchases(\f"+_Cbm(callback)+"\f"+options ); }
    return obj;  
}

function Rec( id )
{
    var obj = new SObj( id );
    obj.GetType = function() { return "AudioRecorder"; }
    obj.SetFile = function( file ) { prompt( obj.id, "Rec.SetFile("+file ); }   
    obj.SetFrequency = function( freq ) { prompt( obj.id, "Rec.SetFrequency(\f"+freq ); }        
    obj.Start = function() { prompt( obj.id, "Rec.Start(" ); }  
    obj.Stop = function() { prompt( obj.id, "Rec.Stop(" ); }  
    obj.Pause = function() { prompt( obj.id, "Rec.Pause(" ); }
    obj.GetRMS = function() { return parseFloat(prompt( obj.id, "Rec.GetRMS(" )); }
    obj.GetPeak = function() { return parseFloat(prompt( obj.id, "Rec.GetPeak(" )); }
    obj.GetData = function() { return JSON.parse(prompt( obj.id, "Rec.GetData(" )); }
    return obj;      
}

function Sns( id )
{
    var obj = new SObj( id );    
    obj.GetType = function() { return "Sensor"; }
    obj.SetOnChange = function( callback ) { prompt( obj.id, "Sns.SetOnChange("+_Cbm(callback) ); } 
    obj.SetMinChange = function( min ) { prompt( obj.id, "Sns.SetMinChange("+min ); } 
    obj.SetMaxRate = function( rate ) { prompt( obj.id, "Sns.SetMaxRate(\f"+rate ); } 
    obj.GetNames = function() { return prompt( obj.id, "Sns.GetNames(" ); }
    obj.Start = function() { prompt( obj.id, "Sns.Start(" ); }
    obj.Stop = function() { prompt( obj.id, "Sns.Stop(" ); }
    obj.GetAzimuth = function() { return parseFloat(prompt( obj.id, "Sns.GetAzimuth(" )); }  
    obj.GetPitch = function() { return parseFloat(prompt( obj.id, "Sns.GetPitch(" )); }
    obj.GetRoll = function() { return parseFloat(prompt( obj.id, "Sns.GetRoll(" )); }
    obj.GetValues = function() { return eval(prompt( obj.id, "Sns.GetValues(" )); }
    return obj;
}

function Loc( id )
{
    var obj = new SObj( id );    
    obj.GetType = function() { return "Locator"; }
    obj.SetOnChange = function( callback ) { prompt( obj.id, "Loc.SetOnChange("+_Cbm(callback) ); } 
    obj.Start = function() { prompt( obj.id, "Loc.Start(" ); }
    obj.Stop = function() { prompt( obj.id, "Loc.Stop(" ); }
    obj.SetRate = function( rate ) { prompt( obj.id, "Loc.SetRate("+rate ); } 
    obj.GetDistanceTo = function( lat,lng ) { return parseFloat(prompt( obj.id, "Loc.GetDistanceTo("+lat+"\f"+lng )); }
    obj.GetBearingTo = function( lat,lng ) { return parseFloat(prompt( obj.id, "Loc.GetBearingTo("+lat+"\f"+lng )); }
    return obj;
}

function Pst( id )
{
    var obj = new SObj( id );    
    obj.GetType = function() { return "PhoneState"; }
    obj.SetOnChange = function( callback ) { prompt( obj.id, "Pst.SetOnChange("+_Cbm(callback) ); } 
    obj.Start = function() { prompt( obj.id, "Pst.Start(" ); }
    obj.Stop = function() { prompt( obj.id, "Pst.Stop(" ); }
    return obj;
}

function Cam( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "CameraView"; }
    obj.StartPreview = function() { prompt( obj.id, "Cam.StartPreview(" ); }   
    obj.StopPreview = function() { prompt( obj.id, "Cam.StopPreview(" ); } 
    obj.Focus = function() { prompt( obj.id, "Cam.Focus(" ); }
    obj.SetFocusMode = function( mode ) { prompt( obj.id, "Cam.SetFocusMode(\f"+mode ); } 
    obj.SetZoom = function( level ) { prompt( obj.id, "Cam.SetZoom(\f"+level ); }  
    obj.GetZoom = function() { return parseInt(prompt( obj.id, "Cam.GetZoom(" )); }
    obj.GetMaxZoom = function() { return parseInt(prompt( obj.id, "Cam.GetMaxZoom(" )); }  
    obj.SetOrientation = function( angle ) { prompt( obj.id, "Cam.SetOrientation(\f"+angle ); }
    obj.SetPostRotation = function( angle ) { prompt( obj.id, "Cam.SetPostRotation(\f"+angle ); }  
    obj.SetPictureSize = function( width,height ) { prompt( obj.id, "Cam.SetPictureSize(\f"+width+"\f"+height ); } 
    obj.SetVideoSize = function( width,height ) { prompt( obj.id, "Cam.SetVideoSize(\f"+width+"\f"+height ); } 
    obj.GetPictureSizes = function() { return prompt( obj.id, "Cam.GetPictureSizes(" ); }  
    obj.SetColorEffect = function( effect ) { prompt( obj.id, "Cam.SetColorEffect(\f"+effect ); } 
    obj.GetColorEffects = function() { return prompt( obj.id, "Cam.GetColorEffects(" ); }  
    obj.TakePicture = function( file ) { prompt( obj.id, "Cam.TakePicture("+file ); } 
    obj.Record = function( file,seconds ) { prompt( obj.id, "Cam.Record(\f"+file+"\f"+seconds ); } 
    obj.IsRecording = function() { return prompt( obj.id, "Cam.IsRecording(" )=="true"; }  
    obj.Stop = function() { prompt( obj.id, "Cam.Stop(" ); } 
    obj.Stream = function( ip,port,quality,fps,mtu ) { prompt( obj.id, "Cam.Stream("+ip+"\f"+port+"\f"+quality+"\f"+fps+"\f"+mtu ); }
    obj.HasFlash = function() { return prompt( obj.id, "Cam.HasFlash(" )=="true"; }
    obj.SetFlash = function( onoff ) { prompt( obj.id, "Cam.SetFlash("+onoff ); } 
    obj.SetSound = function( onoff ) { prompt( obj.id, "Cam.SetSound("+onoff ); } 
    obj.GetImageWidth = function() { return parseInt(prompt( obj.id, "Cam.GetImageWidth(" )); }  
    obj.GetImageHeight = function() { return parseInt(prompt( obj.id, "Cam.GetImageHeight(" )); }  
    obj.GetCameraCount = function() { return parseInt(prompt( obj.id, "Cam.GetCameraCount(" )); } 
    obj.SetPreviewImage = function( img ) { prompt( obj.id, "Cam.SetPreviewImage("+(img?img.id:null) ); } 
    obj.SetDuplicateImage = function( img1,img2 ) { prompt( obj.id, "Cam.SetDuplicateImage(\f"+(img1?img1.id:null)+"\f"+(img2?img2.id:null) ); } 
    obj.MotionMosaic = function( xtiles,ytiles,sensitivity,minPeriod,img ) { prompt( obj.id, "Cam.MotionMosaic("+xtiles+"\f"+ytiles+"\f"+sensitivity+"\f"+minPeriod+"\f"+(img?img.id:null) ); }
    obj.ReportColors = function( list,callback,sampSize,maxRate ) { prompt( obj.id, "Cam.ReportColors(\f"+list+"\f"+_Cbm(callback)+"\f"+sampSize+"\f"+maxRate ); } 
    obj.AutoCapture = function( path,file,maxCount ) { prompt( obj.id, "Cam.AutoCapture("+path+"\f"+file+"\f"+maxCount ); } 
    obj.SetOnReady = function( callback ) { prompt( obj.id, "Cam.SetOnReady("+_Cbm(callback) ); }
    obj.SetOnMotion = function( callback ) { prompt( obj.id, "Cam.SetOnMotion("+_Cbm(callback) ); }
    obj.SetOnPicture = function( callback ) { prompt( obj.id, "Cam.SetOnPicture\f"+_Cbm(callback) ); }
    obj.SetOnFocus = function( callback ) { prompt( obj.id, "Cam.SetOnFocus\f"+_Cbm(callback) ); } 
    obj.GetPixelData = function( format,left,top,width,height ) { return prompt( obj.id, "Cam.GetPixelData(\f"+format+"\f"+left+"\f"+top+"\f"+width+"\f"+height ); } 
    obj.FindFaces = function( max ) { return eval(prompt( obj.id, "Cam.FindFaces(\f"+max )); }
    obj.GetParameters = function() { return prompt( obj.id, "Cam.GetParams(\f" ); }
    obj.SetParameter = function( name,value ) { if( typeof value=="string" ) prompt( obj.id, "Cam.SetParam(\f"+name+"\f"+value ); else prompt( obj.id, "Cam.SetParamNum(\f"+name+"\f"+value ); }
    return obj;   
}

function Vid( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "VideoView"; }
    obj.SetFile = function( file ) { prompt( obj.id, "Vid.SetFile("+file ); }
    obj.SetSubtitles = function( file ) { prompt( obj.id, "Vid.SetSubtitles(\f"+file ); }    
    obj.Play = function() { prompt( obj.id, "Vid.Play(" ); }
    obj.Pause = function() { prompt( obj.id, "Vid.Pause(" ); }
    obj.Stop = function() { prompt( obj.id, "Vid.Stop(" ); }   
    obj.IsReady = function() { return prompt( obj.id, "Vid.IsReady(" )=="true"; }  
	obj.IsPlaying = function() { return prompt( obj.id, "Vid.IsPlaying(" )=="true"; } 
    obj.SeekTo = function( secs ) { prompt( obj.id, "Vid.SeekTo("+secs ); }
    obj.GetPosition = function() { return parseFloat(prompt( obj.id, "Vid.GetPosition(" )); }  
    obj.GetDuration = function() { return parseFloat(prompt( obj.id, "Vid.GetDuration(" )); }  
    obj.SetVolume = function( left,right ) { prompt( obj.id, "Vid.SetVolume(\f"+left+"\f"+right ); }
    obj.SetOnReady = function( callback ) { prompt( obj.id, "Vid.SetOnReady("+_Cbm(callback) ); } 
    obj.SetOnComplete = function( callback ) { prompt( obj.id, "Vid.SetOnComplete("+_Cbm(callback) ); }    
    obj.SetOnError = function( callback ) { prompt( obj.id, "Vid.SetOnError("+_Cbm(callback) ); }
    obj.SetOnSubtitle = function( callback ) { prompt( obj.id, "Vid.SetOnSubtitle(\f"+_Cbm(callback) ); }
    return obj;   
}

function GLV( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "GLView"; }
    obj.Release = function() { prompt( obj.id, "GLV.Release(" ); _map[obj.id] = null; }
    obj.Destroy = function() { prompt( obj.id, "GLV.Release(" ); _map[obj.id] = null; }
    obj.Execute = function( p1,p2,p3,p4 ) { prompt( obj.id, "GLV.Execute(\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); } 
    obj.Exec = function( p1,p2,p3,p4 ) { _gfx.Exec( p1,p2,p3,p4 ); }
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "GLV.SetOnTouch(\f"+_Cbm(callback) ); } 
    obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "GLV.SetOnTouchUp(\f"+_Cbm(callback) ); }  
    obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "GLV.SetOnTouchMove(\f"+_Cbm(callback) ); }
    obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "GLV.SetOnTouchDown(\f"+_Cbm(callback) ); } 
    obj.SetTouchable = function( touchable ) { prompt( obj.id, "GLV.SetTouchable(\f"+touchable ); }
    return obj;   
}

function WGL( id )
{
    var obj = new Obj( id );  
    obj.GetType = function() { return "GameView"; }
    obj.Destroy = function() { prompt( obj.id, "WGL.Destroy(" ); _map[obj.id] = null; }
    obj.SetFile = function( file ) { prompt( obj.id, "WGL.SetFile(\f"+file ); } 
    obj.SetFrameRate = function( fps ) { prompt( obj.id, "WGL.SetFrameRate(\f"+fps ); } 
    obj.SetOnTouch = function( callback ) { prompt( obj.id, "WGL.SetOnTouch(\f"+_Cbm(callback) ); } 
    obj.SetOnTouchUp = function( callback ) { prompt( obj.id, "WGL.SetOnTouchUp(\f"+_Cbm(callback) ); }  
    obj.SetOnTouchMove = function( callback ) { prompt( obj.id, "WGL.SetOnTouchMove(\f"+_Cbm(callback) ); }
    obj.SetOnTouchDown = function( callback ) { prompt( obj.id, "WGL.SetOnTouchDown(\f"+_Cbm(callback) ); } 
    obj.SetTouchable = function( touchable ) { prompt( obj.id, "WGL.SetTouchable(\f"+touchable ); }
    return obj;   
}

function Nxt( id, nxtHelper )
{
    var obj = new SObj( id );  
    var nxtHelp = nxtHelper;
    obj.GetType = function() { return "NxtRemote"; }
    obj.Connect = function( name ) { return prompt( obj.id, "Nxt.Connect("+name )=="true"; }
    obj.SetOnConnect = function( callback ) { prompt( obj.id, "Nxt.SetOnConnect("+_Cbm(callback) ); }
    obj.SetOnConnectEx = function( callback ) { prompt( obj.id, "Nxt.SetOnConnect("+callback ); }
    obj.Disconnect = function() { prompt( obj.id, "Nxt.Disconnect(" ); }
	obj.IsEnabled = function() { return prompt( obj.id, "Nxt.IsEnabled(" )=="true"; } 
	obj.IsBluetoothEnabled = function() { return prompt( obj.id, "Nxt.IsEnabled(" )=="true"; } 
	obj.RequestEnable = function() { prompt( obj.id, "Nxt.RequestEnable(" ); }
	obj.IsPaired = function( name ) { return prompt( obj.id, "Nxt.IsPaired("+name )=="true"; } 
    obj.IsConnected = function() { return prompt( obj.id, "Nxt.IsConnected(" )=="true"; }  
    obj.IsMotorIdle = function( motor ) { return prompt( obj.id, "Nxt.IsMotorIdle("+motor )=="true"; } 
    obj.GetRotationCount = function( motor ) { return parseFloat(prompt( obj.id, "Nxt.GetRotationCount(\f"+motor )); } 
	obj.Beep = function( freq,dur ) { prompt( obj.id, "Nxt.Beep("+freq+"\f"+dur ); }
	obj.SetInvert = function( invert ) { prompt( obj.id, "Nxt.SetInvert("+invert ); }
	obj.Drive = function( motors,power,rotations,options ) { prompt( obj.id, "Nxt.Drive("+motors+"\f"+power+"\f"+rotations+"\f"+options ); }		
	obj.Brake = function( motors ) { prompt( obj.id, "Nxt.Brake("+motors ); }
	obj.Stop = function( motors ) { prompt( obj.id, "Nxt.Stop("+motors ); }
	obj.Reset = function( motors ) { prompt( obj.id, "Nxt.Reset(\f"+motors ); }
	obj.SendMail = function( mailbox,type,msg ) { prompt( obj.id, "Nxt.SendMail("+mailbox+"\f"+type+"\f"+msg ); }
	obj.ReadMail = function( mailbox,type,remove ) { var ret = prompt( obj.id, "Nxt.ReadMail("+mailbox+"\f"+type+"\f"+remove );  
		if(type.toLowerCase()=="number") return parseFloat(ret); else if(type.toLowerCase()=="logic") return (ret=="true"); else return ret; }
	obj.SetLampColor = function( input,clr ) { prompt( obj.id, "Nxt.SetLampColor("+input+"\f"+clr ); }	
	obj.PlaySoundFile = function( file,repeat ) { prompt( obj.id, "Nxt.PlaySoundFile("+file+"\f"+repeat ); }
	obj.ReadSoundSensor = function( input,mode ) { return parseInt(prompt( obj.id, "Nxt.ReadSoundSensor("+input+"\f"+mode )); }
	obj.ReadColorSensor = function( input,mode ) { return parseInt(prompt( obj.id, "Nxt.ReadColorSensor("+input+"\f"+mode )); }
	obj.ToColorName = function( val ) { return prompt( obj.id, "Nxt.ToColorName("+val ); } 	
	obj.ReadLightSensor = function( input,active ) { return parseInt(prompt( obj.id, "Nxt.ReadLightSensor("+input+"\f"+active )); }	
	obj.ReadTouchSensor = function( input ) { return prompt( obj.id, "Nxt.ReadTouchSensor("+input )=="1"; }		
	obj.ReadDistanceSensor = function( input ) { return parseInt(prompt( obj.id, "Nxt.ReadDistanceSensor("+input )); }			
	obj.GetCurrentProgram = function() { return prompt( obj.id, "Nxt.GetCurrentProgram(" ); }
	obj.StartProgram = function( name ) { prompt( obj.id, "Nxt.StartProgram("+name ); }
	obj.StopProgram = function() { prompt( obj.id, "Nxt.StopProgram(" ); }
	obj.FileFindFirst = function( pattern ) { if( _inf ) _inf.Release(); var ret = prompt( obj.id, "Nxt.FileFindFirst("+pattern ); if( ret ) _inf = new Inf(ret); else _inf = null; return _inf; }
	obj.FileFindNext = function( handle ) { if( _inf ) _inf.Release(); var ret = prompt( obj.id, "Nxt.FileFindNext("+handle ); if( ret ) _inf = new Inf(ret); else _inf = null; return _inf; }
	
	//Helper functions.
	obj.ShowDevices = function() { nxtHelp.nxt_ShowDevices(); }
	obj.CheckConnection = function() { return nxtHelp.nxt_CheckConnection(); }
	obj.SetOnConnected = function( callback ) { nxtHelp.nxt_OnConnected = callback; }
	obj.GetBtName = function() { return nxtHelp.nxtName; }
	obj.GetBtAddress = function() { return nxtHelp.nxtAddress; }
	return obj;
}

function Bts( id )
{
    var obj = new SObj( id ); 
    obj.GetType = function() { return "BluetoothSerial"; } 
    obj.Connect = function( name,channel ) { return prompt( obj.id, "Bts.Connect("+name+"\f"+channel )=="true"; }
    obj.Listen = function( enabled ) { prompt( obj.id, "Bts.Listen(\f" + enabled ) }
    obj.SetOnConnect = function( callback ) { prompt( obj.id, "Bts.SetOnConnect("+_Cbm(callback) ); }
    obj.SetOnDisconnect = function( callback ) { prompt( obj.id, "Bts.SetOnDisconnect(\f"+_Cbm(callback) ); }
    obj.Disconnect = function() { prompt( obj.id, "Bts.Disconnect(" ); }
	obj.IsBluetoothEnabled = function() { return prompt( obj.id, "Bts.IsEnabled(" )=="true"; } 
	obj.RequestEnable = function() { prompt( obj.id, "Bts.RequestEnable(" ); }
	obj.IsPaired = function( name ) { return prompt( obj.id, "Bts.IsPaired("+name )=="true"; } 
    obj.IsConnected = function() { return prompt( obj.id, "Bts.IsConnected(" )=="true"; }  
    obj.Write = function( data ) { prompt( obj.id, "Bts.Write("+data ); }
    obj.SetOnReceive = function( callback ) { prompt( obj.id, "Bts.SetOnReceive("+_Cbm(callback) ); } 
    obj.SetSplitMode = function( mode,p2,p3 ) { prompt( obj.id, "Bts.SetSplitMode("+mode+"\f"+p2+"\f"+p3 ); } 
    obj.SetTimeout = function( ms ) { prompt( obj.id, "Bts.SetTimeout("+ms ); } 
    obj.Clear = function() { prompt( obj.id, "Bts.Clear("); }
	return obj;
}

function Zip( id )
{
    var obj = new SObj( id );  
    obj.GetType = function() { return "ZipUtil"; }
    obj.Open = function( file ) { prompt( obj.id, "Zip.Open(\f"+file ); }   
    obj.Create = function( file ) { prompt( obj.id, "Zip.Create(\f"+file ); } 
    obj.Close = function() { prompt( obj.id, "Zip.Close(" ); } 
    obj.List = function( path ) { return prompt( obj.id, "Zip.List(\f"+path ); }  
    obj.Extract = function( name,file ) { prompt( obj.id, "Zip.Extract(\f"+name+"\f"+file ); } 
    obj.AddFile = function( name,file ) { prompt( obj.id, "Zip.AddFile(\f"+name+"\f"+file ); }  
    obj.AddText = function( name,text ) { prompt( obj.id, "Zip.AddText(\f"+name+"\f"+text ); } 
    obj.CreateKey = function( file,pass,name,org ) { prompt( obj.id, "Zip.CreateKey(\f"+file+"\f"+pass+"\f"+name+"\f"+org ); }
    obj.CreateDebugKey = function( file ) { prompt( obj.id, "Zip.CreateDebugKey(\f"+file ); }
    obj.Sign = function( fileIn,fileOut,keyStore,pass ) { return prompt( obj.id, "Zip.Sign(\f"+fileIn+"\f"+fileOut+"\f"+keyStore+"\f"+pass )=="true"; } 
    obj.UpdateManifest = function( fileIn, fileOut, packageName, appName, permissions, options ) { prompt( obj.id, "Zip.UpdateManifest(\f"+fileIn+"\f"+fileOut+"\f"+packageName+"\f"+appName+"\f"+permissions+"\f"+options ); } 
	return obj;
}

function Not( id )
{
    var obj = new SObj( id );  
    obj.GetType = function() { return "Notification"; }
    obj.SetMessage = function( ticker,title,text ) { prompt( obj.id, "Not.SetMessage(\f"+ticker+"\f"+title+"\f"+text ); }
    obj.Notify = function( id ) { prompt( obj.id, "Not.Notify(\f"+id ); }   
    obj.Cancel = function( id ) { prompt( obj.id, "Not.Cancel(\f"+id ); }  
    obj.SetLargeImage = function( image ) { if( image.id ) prompt( obj.id, "Not.SetLargeImage(\f"+(image?image.id:null) ); 
		else prompt( obj.id, "Not.SetLargeImageFile(\f"+image ); }  
    obj.SetLights = function( color,onMs,offMs ) { prompt( obj.id, "Not.SetLights(\f"+color+"\f"+onMs+"\f"+offMs ); } 
    return obj;
}

function Crp( id )
{
    var obj = new SObj( id );  
    obj.GetType = function() { return "Crypt"; }
    obj.Hash = function( text,mode,options ) { return prompt( obj.id, "Crp.Hash\f"+text+"\f"+mode+"\f"+options ); }
    obj.Encrypt = function( text,password ) { return prompt( obj.id, "Crp.Encrypt\f"+text+"\f"+password ); }   
    obj.Decrypt = function( text,password ) { return prompt( obj.id, "Crp.Decrypt\f"+text+"\f"+password ); } 
   	return obj;
}

function Spr( id )
{
    var obj = new SObj( id );  
    obj.GetType = function() { return "SpeechRec"; }
    obj.Destroy = function() { prompt( obj.id, "Spr.Destroy(" ); _map[obj.id] = null; }
    obj.Recognize = function() { return prompt( obj.id, "Spr.Recognize(\f" ); }
    obj.Stop = function() { prompt( obj.id, "Spr.Stop(" ); }
    obj.Cancel = function() { prompt( obj.id, "Spr.Cancel(" ); }
    obj.GetRMS = function() { return parseFloat(prompt( obj.id, "Spr.GetRMS(" )); }
    obj.IsListening = function() { return prompt( obj.id, "Spr.IsListening(")=="true"; }
    obj.SetOnReady = function( callback ) { prompt( obj.id, "Spr.SetOnReady(\f"+_Cbm(callback) ); } 
    obj.SetOnResult = function( callback ) { prompt( obj.id, "Spr.SetOnResult(\f"+_Cbm(callback) ); } 
    obj.SetOnError = function( callback ) { prompt( obj.id, "Spr.SetOnError(\f"+_Cbm(callback) ); } 
   	return obj;
}

function Inf( id )
{
	var obj = new SObj( id ); 
	obj.GetType = function() { return "NxtInfo"; }
	obj.GetName = function() { return prompt( obj.id, "Inf.GetName(" ); }
	obj.GetHandle = function() { return parseInt( prompt( obj.id, "Inf.GetHandle(" )); }
	obj.GetSize = function() { return parseInt( prompt( obj.id, "Inf.GetSize(" )); }
	return obj;
}

function SMS( id )
{
    var obj = new SObj( id ); 
    obj.GetType = function() { return "SMS"; }
	obj.Send = function( number,msg,options ) { prompt( obj.id, "SMS.Send(\f"+number+"\f"+msg+"\f"+options ); }	
	obj.SetOnStatus = function( callback ) { prompt( obj.id, "SMS.SetOnStatus("+_Cbm(callback) ); }
	obj.SetOnMessage = function( callback ) { prompt( obj.id, "SMS.SetOnMessage("+_Cbm(callback) ); }
	return obj;
}

function EMAIL( id )
{
    var obj = new SObj( id ); 
    obj.GetType = function() { return "Email"; }
    obj.SetSMTP = function( server,port ) { prompt( obj.id, "EML.SetSMTP("+server+"\f"+port ); }
    obj.SetIMAP = function( server,port ) { prompt( obj.id, "EML.SetIMAP("+server+"\f"+port ); }
	obj.Send = function( subject,body,sender,recipients,attach ) { prompt( obj.id, "EML.Send(\f"+subject+"\f"+body+"\f"+sender+"\f"+recipients+"\f"+attach ); }
	obj.Receive = function( folder,maxCount,filter ) { prompt( obj.id, "EML.Receive("+folder+"\f"+maxCount+"\f"+filter ); }	
	obj.SetOnStatus = function( callback ) { prompt( obj.id, "EML.SetOnStatus("+_Cbm(callback) ); }
	obj.SetOnMessage = function( callback ) { prompt( obj.id, "EML.SetOnMessage("+_Cbm(callback) ); }
	return obj;
}

function Wbs( id )
{
	var obj = new SObj( id );
	obj.GetType = function() { return "WebServer"; }
	obj.Destroy = function() { prompt( obj.id, "Wbs.Destroy(" ); _map[obj.id] = null; }
	obj.SetFolder = function( folder ) { prompt( obj.id, "Wbs.SetFolder(\f"+folder ); }
	obj.SetUploadFolder = function( folder ) { prompt( obj.id, "Wbs.SetUploadFolder(\f"+folder ); }
    obj.Start = function() { prompt( obj.id, "Wbs.Start(" ); }
    obj.Stop = function() { prompt( obj.id, "Wbs.Stop(" ); }
    obj.SetResponse = function( text ) { prompt( obj.id, "Wbs.SetResponse("+text ); }
    obj.AddRedirect = function( pattern,location ) { prompt( obj.id, "Wbs.AddRedirect(\f"+pattern+"\f"+location ); }
    obj.AddServlet = function( path,callback ) { prompt( obj.id, "Wbs.AddServlet("+path+"\f"+_Cbm(callback) ); }
    obj.SendText = function( txt, ip ) { prompt( obj.id, "Wbs.SendText(\f"+txt+"\f"+ip ); }
    obj.GetWebSockClients = function() { return eval(prompt( obj.id, "Wbs.GetWebSockClients(" )); }
    obj.SetOnReceive = function( callback ) { prompt( obj.id, "Wbs.SetOnReceive(\f"+_Cbm(callback) ); }  
    obj.SetOnUpload = function( callback ) { prompt( obj.id, "Wbs.SetOnUpload(\f"+_Cbm(callback) ); }
    return obj;
}

function Usb( id )
{
	var obj = new SObj( id );
	obj.GetType = function() { return "USBSerial"; }
    obj.Start = function() { prompt( obj.id, "Usb.Start(" ); }
    obj.Stop = function() { prompt( obj.id, "Usb.Stop(" ); }
    obj.Write = function( txt,encoding ) { prompt( obj.id, "Usb.Write(\f"+txt+"\f"+encoding ); }
    obj.SetOnReceive = function( callback ) { prompt( obj.id, "Usb.SetOnReceive("+_Cbm(callback) ); }  
    obj.SetDTR = function( onOff ) { prompt( obj.id, "Usb.SetDTR(\f"+onOff ); } 
    obj.SetRTS = function( onOff ) { prompt( obj.id, "Usb.SetRTS(\f"+onOff ); }   
    obj.SetMaxRead = function( bytes ) { prompt( obj.id, "Usb.SetMaxRead(\f"+bytes ); }  
    obj.SetMaxWrite = function( bytes ) { prompt( obj.id, "Usb.SetMaxWrite(\f"+bytes ); }   
    obj.SetTimeout = function( ms ) { prompt( obj.id, "Usb.SetTimeout(\f"+ms ); } 
    obj.IsConnected = function() { return prompt( obj.id, "Usb.IsConnected(" )=="true"; }    
    obj.SetDataMode = function( mode ) { prompt( obj.id, "Usb.SetDataMode(\f"+mode ); }  
    obj.SetSplitMode = function( mode,p2,p3 ) { prompt( obj.id, "Usb.SetSplitMode(\f"+mode+"\f"+p2+"\f"+p3 ); }   
    return obj;
}

function Sys( id )
{
	var obj = new SObj( id );
	obj.GetType = function() { return "SysProc"; }
    obj.Out = function( cmd ) { prompt( obj.id, "Sys.Out(\f"+cmd ); }
    obj.In = function( maxLines, options ) { return prompt( obj.id, "Sys.In(\f"+maxLines+"\f"+options ); }
    obj.Err = function( maxLines, options ) { return prompt( obj.id, "Sys.Err(\f"+maxLines+"\f"+options ); }
    obj.ReadFileAsByte = function( file ) { return parseInt(prompt( obj.id, "Sys.ReadFileAsByte(\f"+file )); }
    obj.WriteToFile = function( file,data ) { prompt( obj.id, "Sys.WriteToFile(\f"+file+"\f"+data ); }
    return obj;
}

function Fil( id )
{
	var obj = new SObj( id ); 
	obj.GetType = function() { return "File"; }
    obj.Close = function() { prompt( obj.id, "Fil.Close(" ); }
    obj.ReadText = function( type ) { return prompt( obj.id, "Fil.ReadText(\f"+type ); }
    obj.WriteText = function( data,type ) { prompt( obj.id, "Fil.WriteText(\f"+data+"\f"+type ); }
    obj.ReadNumber = function( type ) { return parseFloat(prompt( obj.id, "Fil.ReadNumber(\f"+type )); }
    obj.WriteNumber = function( data,type ) { prompt( obj.id, "Fil.WriteNumber(\f"+data+"\f"+type ); }
    obj.ReadData = function( len,mode ) { return eval(prompt( obj.id, "Fil.ReadData(\f"+len+"\f"+mode )); }
    obj.WriteData = function( data,mode ) { prompt( obj.id, "Fil.WriteData(\f"+data+"\f"+mode ); }
    obj.Seek = function( offset ) { prompt( obj.id, "Fil.Seek(\f"+offset ); }
    obj.Skip = function( bytes ) { prompt( obj.id, "Fil.Skip(\f"+bytes ); }
    obj.GetPointer = function() { return parseInt(prompt( obj.id, "Fil.GetPointer(" )); }
    obj.GetLength = function() { return parseInt(prompt( obj.id, "Fil.GetLength(" )); }
    obj.SetLength = function( len ) { prompt( obj.id, "Fil.SetLength(\f"+len ); }
	return obj;
}

function Plg( id )
{
	var obj = new SObj( id );
	obj.GetType = function() { return "Plugin"; }
    obj.Send = function( cmd,p1,p2,p3,p4,p5,p6,p7,p8 ) {
		return prompt( obj.id, "Plg.Send\f"+cmd+"\f"+typeof p1+"\f"+p1+"\f"+typeof p2+"\f"+p2+"\f"+typeof p3+"\f"+p3+"\f"+typeof p4+"\f"+p4+"\f"+typeof p5+"\f"+p5+"\f"+typeof p6+"\f"+p6+"\f"+typeof p7+"\f"+p7+"\f"+typeof p8+"\f"+p8 ); 
	}
	obj.SendObj = function( cmd,ob,p1,p2,p3,p4,p5,p6,p7,p8 ) { 
		return prompt( obj.id, "Plg.SendObj\f"+cmd+"\f"+(ob?ob.id:null)+"\f"+typeof p1+"\f"+p1+"\f"+typeof p2+"\f"+p2+"\f"+typeof p3+"\f"+p3+"\f"+typeof p4+"\f"+p4+"\f"+typeof p5+"\f"+p5+"\f"+typeof p6+"\f"+p6+"\f"+typeof p7+"\f"+p7+"\f"+typeof p8+"\f"+p8 ); 
	}
	obj.CreateObj = function( type,p1,p2,p3,p4,p5,p6,p7,p8 ) {
		return prompt( obj.id, "Plg.CreateObj\f"+type+"\f"+typeof p1+"\f"+p1+"\f"+typeof p2+"\f"+p2+"\f"+typeof p3+"\f"+p3+"\f"+typeof p4+"\f"+p4+"\f"+typeof p5+"\f"+p5+"\f"+typeof p6+"\f"+p6+"\f"+typeof p7+"\f"+p7+"\f"+typeof p8+"\f"+p8 ); 
	}
	obj.SendImg = function( cmd,img,width,height ) { return prompt( obj.id, "Plg.SendImg\f"+cmd+"\f"+(img?img.id:null)+"\f"+width+"\f"+height ); }
    obj.SendCam = function( cmd,cam ) { return prompt(obj.id, "Plg.SendCam\f"+cmd+"\f"+(cam?cam.id:null) ); }
    obj.Destroy = function() { prompt(obj.id, "Plg.Destroy" ); }
    return obj;
}

function Svc( id )
{
	var obj = new SObj( id );
	obj.GetType = function() { return "Service"; }
	obj.Stop = function() { prompt( obj.id, "Svc.Stop(" ); }
    obj._Send = function( cmd,p1,p2,p3,p4,p5,p6,p7 ) { 
		prompt( obj.id, "Svc.Send(\f"+cmd+"\f"+typeof p1+"\f"+p1+"\f"+typeof p2+"\f"+p2+"\f"+typeof p3+"\f"+p3+"\f"+typeof p4+"\f"+p4+"\f"+typeof p5+"\f"+p5+"\f"+typeof p6+"\f"+p6+"\f"+typeof p7+"\f"+p7 ); 
	}
	obj._SendImg = function( cmd,img ) { prompt( obj.id, "Svc.SendImg(\f"+cmd+"\f"+(img?img.id:null) ); }
	obj.SendMessage = function( msg ) { prompt( obj.id, "Svc.SendMsg(\f"+msg ); }
	obj.SetOnMessage = function( callback ) { prompt( obj.id, "Svc.SetOnMessage(\f"+_Cbm(callback) ); }
    return obj;
}

function Syn( id )
{
	var obj = new SObj( id );
	obj.GetType = function() { return "Synth"; }
    obj.Start = function() { prompt( this.id, "Syn.Start(" ); }
    obj.Stop = function() { prompt( this.id, "Syn.Stop(" ); }
    obj.PlayTone = function( freq,dur) { prompt( this.id, "Syn.PlayTone("+freq+"\f"+dur ); }
    obj.PlayNote = function( note ) { prompt( this.id, "Syn.PlayNote("+note ); }
    obj.PlayMidiTune = function( tune ) { prompt( this.id, "Syn.PlayMidiTune("+tune ); }
    obj.SetFrequency = function( freq ) { prompt( this.id, "Syn.SetFrequency("+freq ); }
    obj.SetWaveShape = function( shape ) { prompt( this.id, "Syn.SetWaveShape("+shape ); }
    obj.SetVolume = function( left,right ) { prompt( this.id, "Syn.SetVolume("+left+"\f"+right ); }
    obj.SetNoteLength = function( dur ) { prompt( this.id, "Syn.SetNoteLength("+dur ); }
    
    obj.SetVca = function( attack,decay,sustain,release ) { prompt( this.id, "Syn.SetVca\f"+attack+"\f"+decay+"\f"+sustain+"\f"+release ); }
    obj.SetVcaAttack = function( attack ) { prompt( this.id, "Syn.SetVcaAttack("+attack ); }
    obj.SetVcaDecay = function( decay ) { prompt( this.id, "Syn.SetVcaDecay("+decay ); }
    obj.SetVcaSustain = function( sustain ) { prompt( this.id, "Syn.SetVcaSustain("+sustain ); }
    obj.SetVcaRelease = function( release ) { prompt( this.id, "Syn.SetVcaRelease("+release ); }
    obj.SetVcaEnabled = function( enable ) { prompt( this.id, "Syn.SetVcaEnabled("+enable ); }
    
    obj.SetVcf = function( attack,decay,sustain,release,cuttoff,resonance,depth ) { prompt( this.id, "Syn.SetVcf\f"+attack+"\f"+decay+"\f"+sustain+"\f"+release+"\f"+cuttoff+"\f"+resonance+"\f"+depth ); }
    obj.SetVcfAttack = function( attack ) { prompt( this.id, "Syn.SetVcfAttack("+attack ); }
    obj.SetVcfDecay = function( decay ) { prompt( this.id, "Syn.SetVcfDecay("+decay ); }
    obj.SetVcfSustain = function( sustain ) { prompt( this.id, "Syn.SetVcfSustain("+sustain ); }
    obj.SetVcfRelease = function( release ) { prompt( this.id, "Syn.SetVcfRelease("+release ); }
    obj.SetVcfCutoff = function( cuttoff ) { prompt( this.id, "Syn.SetVcfCutoff("+cuttoff ); }
    obj.SetVcfResonance = function( resonance ) { prompt( this.id, "Syn.SetVcfResonance("+resonance ); }
    obj.SetVcfDepth = function( depth ) { prompt( this.id, "Syn.SetVcfDepth("+depth ); }
    obj.SetVcfEnabled = function( enable ) { prompt( this.id, "Syn.SetVcfEnabled("+enable ); }
    
    obj.SetPhaser = function( drywet,rate,range,feedback ) { prompt( this.id, "Syn.SetPhaser\f"+drywet+"\f"+rate+"\f"+range+"\f"+feedback ); }
    obj.SetPhaserDryWet = function( drywet ) { prompt( this.id, "Syn.SetPhaserDryWet("+drywet ); }
    obj.SetPhaserRate = function( rate ) { prompt( this.id, "Syn.SetPhaserRate("+rate ); }
    obj.SetPhaserRange = function( range ) { prompt( this.id, "Syn.SetPhaserRange("+range ); }
    obj.SetPhaserFeedback = function( feedback ) { prompt( this.id, "Syn.SetPhaserFeedback("+feedback ); }
    obj.SetPhaserEnabled = function( enable ) { prompt( this.id, "Syn.SetPhaserEnabled("+enable ); }
    
    obj.SetDelay = function( ms ) { prompt( this.id, "Syn.SetDelay("+ms ); }
    obj.SetFeedback = function( feedback ) { prompt( this.id, "Syn.SetFeedback("+feedback ); }
    obj.SetDelayEnabled = function( enable ) { prompt( this.id, "Syn.SetDelayEnabled("+enable ); }
    return obj;
}

function Wpr( id )
{
    var obj = new SObj( id );  
    obj.GetType = function() { return "Wallpaper"; }
    obj.IsVisible = function() { return prompt( obj.id, "Wpr.IsVisible\f" )=="true"; } 
   	return obj;
}

function _Try( p1,p2,p3,p4 ) { return prompt( "#", "App.Try(\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4 ); } 
function _Call( id, func, params ) { if( func ) func.apply( _map[id], params ); }
function _Cb( obj, func ) { return new _ObjCb(obj, func); }
function _ObjCb( obj, func ) { _cbMap[++_cbId] = obj; this.name = "_cbMap['"+_cbId+"']."+func; }
function _Cbm( func ) { return ( func ? (func.name ? func.name : new _ObjCbm(func).name) : null ); }
function _ObjCbm( func ) { _cbMap[++_cbId] = func; this.name = "_cbMap['"+_cbId+"']"; }

function _ExecV8( file ) { return prompt( "#", "_ExecV8(\f"+file ); }
function _Thread( file ) { return prompt( "#", "_Thread(\f"+file ); }
function _CreateCP( service ) { return prompt( "#", "_CreateCP(\f"+service ); }
function _ExecCP( callbackId,service,action,argsJson ) { 
	return prompt( "#", "_ExecCP(\f"+callbackId+"\f"+service+"\f"+action+"\f"+argsJson ); 
}

function _LoadScript( url, callback )
{
    if( _scripts[url] ) { 
		if( callback ) callback(); return; 
	}
	if( url.slice(-4)==".dsj" ) url += ".js";
	var dbg = _dbg; app.SetDebugEnabled( false );
	if( url.indexOf(":")<0 && !app.FileExists(url) ) 
	    alert("Error: "+url+" not found!" + 
	        (app.IsAPK?"\n\n(Note: Assets are case sensitive)":"") );
	app.SetDebugEnabled( dbg );
	if( _isV8 ) _ExecV8(url);
	else {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = url;
		script.onload = callback;
		head.appendChild(script);
    }
    _scripts[url] = true;
}

function _LoadScriptSync( url )
{
    if( _scripts[url] ) return; 
    if( url.slice(-4)==".dsj" ) url += ".js";
    var dbg = _dbg; app.SetDebugEnabled( false );
    if( url.indexOf(":")<0 && !app.FileExists(url) ) 
	    alert("Error: "+url+" not found!" + 
	        (app.IsAPK?"\n\n(Note: Assets are case sensitive)":"") );
	app.SetDebugEnabled( dbg );
    if( _isV8 ) _ExecV8(url);
	else {
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');
		script.type = 'text/javascript';
		var dbg = _dbg; app.SetDebugEnabled( false );
		script.text = app.ReadFile( url ); 
		app.SetDebugEnabled( dbg );
		head.appendChild(script);
    }
    _scripts[url] = true;
}

function _LoadPlugin( name )
{
    if( !name ) return;
    var privDir = app.GetPrivateFolder( "Plugins" );
    _LoadScriptSync( privDir+"/"+name.toLowerCase()+"/"+name+".inc" );
}

function _CreatePlugin( name, options ) 
{ 
	var ret = prompt( "#", "App.CreatePlugin("+name+"\f"+options ); 
	if( ret ) return new Plg(ret); 
	else throw "Failed to create plugin:" + name; 
}	

function _Run(s) { 
    //if( _busy ) { setTimeout( function(){_Run(s)},0); return; }
	_busy = true; eval( s ); _busy = false;
}

function _SafeRun(s) {
	//if( _busy ) { setTimeout( function(){_SafeRun(s)},0); return; }
	try { _busy = true; eval( s ); _busy = false; }
	catch(e) {}
}

function T( id, lang ) {
	var tr = _languages.trans[id];
	if( tr ) tr = tr[lang?lang:_curLang]; else return "[No Translation]";
	return (tr ? tr : _languages.trans[id]["en"]);
}

function OnCreate(extract,debug) 
{       
	if( typeof _CheckFolderName=='function' ) _CheckFolderName();
	//if( extract ) app._Extract( true );
	if(typeof OnStart=='function') { OnStart(); prompt("#","_Start"); }
	if( debug ) app.CreateDebug();
}

app = new App();

function _Log( msg ) { app.Debug( msg ); }
function _Err( msg ) { app.Debug( "ERROR: " + msg ); }
function _GetStack() { return new Error().stack }
function _AddPermissions() {}
function _RemovePermissions() {}
function _AddOptions() {}

