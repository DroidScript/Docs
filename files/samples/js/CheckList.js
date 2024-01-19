
//Called when application is started.
function OnStart() 
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create a button to show popup list.
	btn = app.CreateButton( "Show List", 0.3 )
	btn.SetOnTouch( btn_OnTouch )
	lay.AddChild( btn )
	
	//Add layout to app.	
	app.AddLayout( lay )
}


//Called when user touches our button.
function btn_OnTouch()
{
	//Try to load list data from previous check list.
	var lst = app.ReadFile( "/sdcard/checklist.json" )

	//Use previous list data or create new data if none found.
	if( lst ) lst = JSON.parse( lst )
	else lst = [{title:"Sheep",check:true},{title:"Cows",check:false},
			{title:"Pigs",check:true}, {title:"Goats",check:true}]

	app.ShowCheckList( "Select Animals", lst, OnFinish )
}

//Returns data when user has finished with checklist
function OnFinish( data )
{
	if( data )
	{
		app.ShowPopup( JSON.stringify(data) )
		app.WriteFile( "/sdcard/checklist.json", JSON.stringify(data) )
	}
}

