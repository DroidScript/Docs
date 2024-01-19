
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "FillXY" )

    //Create an edit control.
    edit = app.CreateTextEdit( "Hello", 1, 0.9, "" ) 
    edit.SetMargins( 0,0,0,0.01 )
    edit.SetBackColor( "#1a1a1b" )
    edit.SetTextColor( "#ffffff" )
    lay.AddChild( edit ) 
    
	//Create a horizontal layout for icon buttons. 
    layBut = app.CreateLayout("Linear", "Horizontal") 
    lay.AddChild( layBut ) 
    
    //Create an array of icon buttons. 
    var btns = ["[fa-undo]","[fa-search]","[fa-file]","[fa-save]","[fa-repeat]"];
    for( var i=0; i<btns.length; i++ )
    {
        btn = app.CreateButton( btns[i], -1,-1, "FontAwesome" ) 
        btn.icon = btns[i];
        btn.SetTextSize( 22 )
        btn.SetOnTouch( btns_OnTouch ) 
        layBut.AddChild( btn ) 
    }
	
	//Add layout to app.	
	app.AddLayout( lay )
}

//Handle button presses.
function btns_OnTouch()
{
    switch( this.icon )
    {
        case "[fa-undo]": edit.Undo(); break
        case "[fa-repeat]": edit.Redo(); break
        case "[fa-search]": alert("Todo!"); break
        
        case "[fa-file]": 
            edit.SetText( app.ReadFile( "/Storage/testfile.txt" ) )
            break
        case "[fa-save]": 
            app.WriteFile( "/Storage/testfile.txt", edit.GetText() )
            break
    }
}
