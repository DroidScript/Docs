
//Init variables.
var sum = "";

//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	layMain = app.CreateLayout( "linear", "FillXY" )	

	//Create array to hold number buttons.
	keys = [ 7,8,9,"/", 4,5,6,"*", 1,2,3,"-", 0,".","C","+" ];
	
	//Create text control for displaying sum.
	txtSum = app.CreateText( "", 0.8, 0.1 )
	txtSum.SetTextSize( 42 )
	txtSum.SetBackColor( "#ff222222" )
	txtSum.SetMargins( 0, 0.1, 0, 0.05 )
	layMain.AddChild( txtSum )
	
	//Create first row of buttons.
	lay1st = app.CreateLayout( "linear", "Horizontal" )	
	for( i=0; i<4; i++ ) AddButton( lay1st, keys[i] )
	layMain.AddChild( lay1st )
	
	//Create second row of buttons.
	lay2nd = app.CreateLayout( "linear", "Horizontal" )	
	for( i=4; i<8; i++ ) AddButton( lay2nd, keys[i] )
	layMain.AddChild( lay2nd )
	
	//Create third row of buttons.
	lay3rd = app.CreateLayout( "linear", "Horizontal" )	
	for( i=8; i<12; i++ ) AddButton( lay3rd, keys[i] )
	layMain.AddChild( lay3rd )
	
	//Create fourth row of buttons.
	lay4th = app.CreateLayout( "linear", "Horizontal" )	
	for( i=12; i<16; i++ ) AddButton( lay4th, keys[i] )
	layMain.AddChild( lay4th )
	
	//Create fifth row of buttons.
	lay5th = app.CreateLayout( "linear", "Horizontal" )	
	AddButton( lay5th, "=" )
	layMain.AddChild( lay5th )

	//Add layout to app.	
	app.AddLayout( layMain )
}

//Add a button to a given layout.
function AddButton( lay, name )
{
	if( name=="=" ) w = 0.8; else w=0.2;
	btn = app.CreateButton( name, w, 0.1, "Alum" )
	btn.SetOnTouch( btns_OnTouch )
	lay.AddChild( btn )
}

//Called when user presses number buttons.
function btns_OnTouch()
{
	app.Vibrate( "0,100" )
	
	//Get button text.
	btn = this;
	var txt = btn.GetText()
	
	//Handle equals button.
	if( txt=="=" ) CalcResult()
	
	//Handle clear button.
	else if( txt=="C" ) sum = "";
	
	//Handle other buttons.
	else sum += txt;
	
	//Update display.
	txtSum.SetText( sum )
}

//Calculate sum.
function CalcResult()
{
	try {
		//Evaluate sum (and catch errors).
		sum = eval( sum ).toFixed(2)
	}
	catch(e) { sum = "Error" }
}
