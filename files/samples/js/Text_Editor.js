
//Called when application is started. 
function OnStart() 
{ 
	//Create a layout with objects vertically centered. 
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )  
	
	//Create an edit box. 
	edt = app.CreateTextEdit( "", 0.96, 0.8 ) 
	edt.SetBackColor( "#333333" )
	lay.AddChild( edt ) 
	
	//Create a horizontal layout for buttons. 
	layBut = app.CreateLayout("Linear", "Horizontal") 
	lay.AddChild( layBut ) 

	//Create an Load button. 
	btnLoad = app.CreateButton( "Load", 0.23, 0.1 ) 
	btnLoad.SetOnTouch( btnLoad_OnTouch ) 
	layBut.AddChild( btnLoad ) 

	//Create an save button. 
	btnSave = app.CreateButton( "Save", 0.23, 0.1 ) 
	btnSave.SetOnTouch( btnSave_OnTouch ) 
	layBut.AddChild( btnSave ) 

	//Add layout to app.	 
	app.AddLayout( lay ) 
} 

//Called when user touches Load button. 
function btnLoad_OnTouch() 
{ 
   var txt = app.ReadFile( "/sdcard/testfile.txt" )
   edt.SetText( txt )
} 

//Called when user touches save button. 
function btnSave_OnTouch() 
{ 
    var txt = edt.GetText()
	app.WriteFile( "/sdcard/testfile.txt", txt )
} 
