
//Called when application is started.
function OnStart()
{
	//Create the main layout.
	layMain = app.CreateLayout( "Linear", "FillXY" )	
	layMain.SetBackground( "/Sys/Img/BlueBack.jpg" )
	layMain.SetPadding( 0, 0.1, 0, 0 ) 

	//Create button and add to main layout.
	btn = app.CreateButton( "Demo", 0.3, 0.06, "gray" )
	btn.SetOnTouch( btn_OnTouch )
	layMain.AddChild( btn )

	//Create a layout we can slide over the main layout.
	//(This hidden layout is actually on top of the main
	//layout, it just appears to slide from the left)
	laySlide = app.CreateLayout( "Linear", "FillXY" )
	laySlide.SetPadding( 0, 0.1, 0, 0 ) 
	laySlide.SetBackground( "/Sys/Img/GreenBack.jpg" )
	laySlide.SetVisibility( "Hide" )
	
	//Create button and add to sliding layout.
	btnBack = app.CreateButton( "Back", 0.3, 0.06, "gray" )
	btnBack.SetOnTouch( btnBack_OnTouch )
	laySlide.AddChild( btnBack )
	
	//Add layouts to app.	
	app.AddLayout( layMain )
	app.AddLayout( laySlide )
}

//Called when user touches our 'slide' button.
function btn_OnTouch()
{
	laySlide.Animate( "SlideFromLeft" )
}

//Called when user touches our 'back' button.
function btnBack_OnTouch()
{
	laySlide.Animate( "SlideToLeft" )	
}

