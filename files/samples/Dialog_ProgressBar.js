
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a button to start demo.
	btn = app.CreateButton( "Start", 0.3, 0.1 )
	btn.SetOnTouch( btn_OnTouch )
	lay.AddChild( btn )

	//Add layout to app.	
	app.AddLayout( lay )
}

//Called when user touches our button.
function btn_OnTouch()
{
    app.ShowProgressBar( "Processing...", 0 )
    setTimeout( "Update(10)", 1000 )
    setTimeout( "Update(30)", 2000 )
    setTimeout( "Update(40)", 3000 )
    setTimeout( "Update(60)", 4000 )
    setTimeout( "Update(100)", 5000 )
    setTimeout( "Hide()", 6000 )
}

//Update the progress bar.
function Update( progress )
{
    app.UpdateProgressBar( progress )
}

//Hide the progress bar.
function Hide()
{
    app.HideProgressBar()
}
