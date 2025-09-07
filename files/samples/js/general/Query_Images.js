
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	
	
	//Add a button.
	btn = app.AddButton( lay, "Get all Images", 0.4, 0.1 )
	btn.SetOnTouch( btn_OnTouch )
	
	//Add an image 20% of screen width.
	img = app.AddImage( lay, "/Sys/Img/Hello.png", 0.6 )

	//Add layout to app.	
	app.AddLayout( lay )
}

//Called when user touches our button.
function btn_OnTouch()
{ 
    //Query for all image info.
	//(Look here for column names: 
	//https://developer.android.com/reference/android/provider/MediaStore.Images.ImageColumns)
    var uri = "content://media/external/images/media";
    var columns = "_data"
    var rows = app.QueryContent( uri, columns )
    
    //Show result (JSON.stringify as useful way of converting JS objects to text)
    alert( JSON.stringify(rows) )
    
    //Show the first image.
    img.SetImage( app.Path2Uri(rows[0]._data) )
}

