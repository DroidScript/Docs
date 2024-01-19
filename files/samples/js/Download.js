
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a button.
	btn = app.CreateButton( "Download", 0.3 )
	btn.SetOnTouch( btn_OnTouch )
	lay.AddChild( btn )
	
	//Add layout to app.	
	app.AddLayout( lay )
}

//Called when user touches our button.
function btn_OnTouch()
{
    var url = "http://androidscript.org/images/DroidScript.png";
    var fldr = "/sdcard/temp";
    var file = "icon.png";
    
    //Make sure target folder exists.
    app.MakeFolder( fldr )
    
    //Download file from web.
    //(You can leave out the 'file' parameter to use original file name)
    dload = app.CreateDownloader( /*"NoDialog"*/ )
    dload.SetOnDownload( dload_OnDownload )
    dload.SetOnError( dload_OnError )
    dload.Download( url, fldr, file )
}

//Handle download completion.
function dload_OnDownload( file )
{
	app.ShowPopup( "Downloaded: " + file )
}

//Handle download errors.
function dload_OnError( error )
{
	app.ShowPopup( "Download failed: " + error )
}
