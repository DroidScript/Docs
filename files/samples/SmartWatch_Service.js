//This is an example of a Sony Smartwatch2 service App. 
//You must name the app with a prefix of "SWS-" for it  
//to be detected by the watch. eg. "SWS-MyApp"  
//(Note: This app can only be launched from the Watch, it 
//has no interface for the phone/tablet) 

//Called when application is started. 
function OnStart() 
{ 
    //Create SmartWatch object and set callbacks. 
    watch = app.CreateSmartWatch( "Sony" ) 
    watch.SetOnShow( watch_OnShow ) 
    watch.SetOnHide( watch_OnHide ) 
    watch.SetOnTouch( watch_OnTouch ) 
    watch.SetOnSwipe( watch_OnSwipe ) 
    watch.SetOnStop( watch_OnStop ) 
    watch.SetOnMenu( watch_OnMenu ) 
    watch.SetOnBack( watch_OnBack ) 
     
    //Show a quick message at startup. 
    watch.ShowMessage( "Hello" ) 
     
    //Create a watch layout. 
    lay = watch.CreateLayout( "Linear", "fillxy" ) 
     
    //Add some text. 
    txt = watch.CreateText( "ABC", 1.0, 0.3, "" ) 
    txt.SetBackColor( "#ff006666" ) 
    txt.SetMargins( 0,0.1,0,0 ) 
    txt.SetTextSize( 8 ) 
    txt.SetTextColor( "#ffffffff" ) 
    lay.AddChild( txt ) 
     
    //Add an image. 
    img = watch.CreateImage( "/Sys/Img/Icon.png", 0.3 ) 
    lay.AddChild( img ) 
     
    //Add and display layout. 
    watch.AddLayout( lay ) 
    watch.ShowLayout() 
} 

//Called when SmartWatch app is shown. 
function watch_OnShow() 
{ 
    app.ShowPopup( "OnShow" ) 
     
    //Show the layout. 
    watch.ShowLayout() 
} 

//Called when SmartWatch app is hidden. 
function watch_OnHide() 
{ 
   app.ShowPopup( "OnHide" ) 
} 

//Called when SmartWatch app is stopped. 
function watch_OnStop() 
{ 
    app.ShowPopup( "OnStop" ) 
} 

//Handle SmartWatch touch event. 
function watch_OnTouch( dir, x, y ) 
{ 
    app.ShowPopup( "OnTouch dir="+dir+" x="+x+" y="+y ) 
} 

//Handle SmartWatch swipe event. 
function watch_OnSwipe( dir ) 
{ 
    app.ShowPopup( "OnSwipe dir="+dir ) 
} 

//Called when SmartWatch menu button is touched. 
function watch_OnMenu() 
{ 
    //Show an image on screen.
    app.ShowPopup("watch_OnMenu") 
} 

//Called when SmartWatch back button is touched. 
function watch_OnBack() 
{ 
    //Stop the watch app.
    watch.StopApp()
} 

