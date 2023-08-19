// ------------- HEADER SECTION ------------- 


/** # GetObjects #
 * @brief Get map of created DroidScript objects
 * Returns a map of DroidScript control objects with their id as key.
 * $$ app.GetObjects() $$ 
 * @returns lst-[ id:str_oid: control:dso ]
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Types of all Objects
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	img = app.CreateImage( "/Sys/Img/Hello.png", 0.2, -1 );
	lay.AddChild( img );

	btn = app.CreateButton( "Get Objects", 0.3, 0.1 );
	btn.SetMargins( 0, 0.05, 0, 0 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
	var objs = app.GetObjects();

    var lst = [];
    for(var i in objs)
        lst.push( i + ": " + objs[i].GetType() );

    app.Alert( lst.join( "\n" ));
}
 */
    
            