/*
 This demonstrates a very basic app launcher (home screen).
 You can set this app as your home screen by adding the
 'homeScreen=true' option to your build.json file.
*/

//Called when application is started.
function OnStart()
{ 
    //Lock screen orientation to Portrait.
    app.SetOrientation( "Portrait" )
    
	//Create the main layout with background image.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	
	lay.SetBackground( "/res/drawable/pattern_carbon", "repeat" )

    //Create a full screen scroller.
    scroller = app.CreateScroller( 1.0, 1.0 )
    lay.AddChild( scroller )
    	
    //Display all activity icons.
    DisplayIcons( scroller )
    
	//Add layout to app.	
	app.AddLayout( lay )
}

//Draw the icons
function DisplayIcons( lay )
{
    app.ShowProgress()
    
    //Switch off debugging for max speed.
    app.SetDebugEnabled( false )
    
    //Create a layout to contain icons.
    layIcons = app.CreateLayout( "Linear" )
    layIcons.SetSize( 1,-1 )
    lay.AddChild( layIcons )
   
    //Get a list of launchable app activities.
    var list = app.GetActivities()
    
    //Set icons per row count.
    var iconsPerRow = 4;
    var iconW = 0.6/(iconsPerRow)
     
    //Create an icon for each activity.
    for( var i=0; i<list.length; i++ )
    {
        //Get activity info.
        var a = list[i];
	    //console.log( a.label )
	    
        //Create horizontal layout for rows.
        if( i%iconsPerRow==0 ) {
            var layIconsHoriz = app.CreateLayout( "Linear", "Horizontal" )
            layIcons.AddChild( layIconsHoriz )
        }
        //Create layout to wrap icon and text.
        var layIcon = app.CreateLayout( "Linear", "Vertical" )
        layIcon.SetMargins( 0.038/iconsPerRow, 0.015, 0.038/iconsPerRow, 0 )
        layIconsHoriz.AddChild( layIcon )
        
        //Load icon image and set touch callbacks.
        var imgIcon = app.CreateImage( a.packageName+"/"+a.className,iconW,-1,"Icon" )
        imgIcon.SetOnTouchDown( img_OnTouchDown )
        imgIcon.SetOnTouchUp( img_OnTouchUp )
        imgIcon.SetOnLongTouch( img_OnLongTouch )
        layIcon.AddChild( imgIcon )
        
        //Store activity info and icon layout in image object for convenience.
        imgIcon.label = a.label;
        imgIcon.packageName = a.packageName;
        imgIcon.className = a.className;
        imgIcon.layIcon = layIcon;
        
        //Create text label.
        var txtIcon = app.CreateText( a.label, iconW*1.5,-1, "Multiline" )
        txtIcon.SetTextSize( 14 )
        txtIcon.SetTextColor( "#ffeeeeee" )
        layIcon.AddChild( txtIcon )
    }
    
    app.SetDebugEnabled( true )
    app.HideProgress()
}

//Destroy and redraw all icons.
function RedrawIcons()
{
    scroller.DestroyChild( layIcons )
    DisplayIcons( scroller )
}

//Handle icon touch down.
function img_OnTouchDown()
{
    //Shrink and fade icon.
    this.Scale( 0.95, 0.95 )
    this.SetAlpha( 0.7 )
}

//Handle icon touch up.
function img_OnTouchUp()
{
    //Restore icon appearance.
    this.Scale( 1, 1 )
    this.SetAlpha( 1 )
    
    //Launch activity.
    var action = "android.intent.action.MAIN";
    app.SendIntent( this.packageName, this.className, action ) 
}

//Handle icon long touch.
function img_OnLongTouch()
{
    //Restore icon appearance.
    this.Scale( 1, 1 )
    this.SetAlpha( 1 )
    
    //Store current icon.
    curIcon = this;
    
    //Show options dialog.
    var list = "Remove,Uninstall,Info";
    lstOps = app.CreateListDialog( "", list, "AutoCancel" )
    lstOps.SetOnTouch( lstOps_Select ) 
    lstOps.Show()
}

//Called when icon long click option chosen.
function lstOps_Select( item )
{
    if( item=="Remove" )
    {
        curIcon.layIcon.SetVisibility( "Gone" )
    }
    else if( item=="Info" )
    {
        var msg = "Name: " + curIcon.label + 
            "\n\nPackage Name: " + curIcon.packageName + 
            "\n\nClass Name: " + curIcon.className;
        app.Alert( msg, "App Info" )
    }
    else if( item=="Uninstall" )
    {
        var action = "android.intent.action.DELETE";
        var uri = "package:" + curIcon.packageName;
        var cb = OnResult;
        app.SendIntent( null, null, action, null, uri, null, null, "result", cb ) 
    }
}

//Handle intent result.
function OnResult( resultCode )
{
    console.log( resultCode )
    
    //Check if app is still installed and remove icon if gone.
    var isInstalled = app.IsAppInstalled( curIcon.packageName )
    if( !isInstalled ) curIcon.layIcon.SetVisibility( "Gone" )
}

