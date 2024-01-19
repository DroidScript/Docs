
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )

	//Add an image.
	img = app.AddImage( lay, null, 0.8, 0.6 )
	img.SetBackColor( "#222222" )

	//Add a button.
	btn = app.AddButton( lay, "Take Photo", 0.4 )
	btn.SetMargins( 0, 0.05, 0, 0 )
	btn.SetOnTouch( btn_OnTouch )

	//Add layout to app.
	app.AddLayout( lay )
}

//Called when user touches our button.
function btn_OnTouch()
{
    //Create a placeholder file.
    file = "/Private/photo.jpg"
    app.WriteFile( file, "" )

    //Get a public URI for the file.
    var uri = app.Path2Uri( file )

    //Send intent to built-in photo app.
    let extras = [ {name:"output", type:"uri", value:uri} ]
    extras = JSON.stringify(extras)
    app.SendIntent( null,null,"android.media.action.IMAGE_CAPTURE",
        null,null,null, extras, "result", OnResult )
}

//Handle the photo result.
function OnResult( code, data )
{
    if(code<0) img.SetImage( file )
}
