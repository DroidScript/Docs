
//Called when application is started.
function OnStart()
{
	//Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "VCenter,FillXY" )	

	//Create text control for logging.
	txt = app.CreateText( "", 0.9,0.9, "MultiLine,Left" )
	txt.SetTextSize( 22 )
	lay.AddChild( txt )
	
	//Add layout to app.	
	app.AddLayout( lay )
	
	//Set list of phone states to watch.
	var types = "CellLocation, DataConnection, DataActivity, CallState,"
	    + "ServiceState, SignalStrength, CallForwarding, MessageWaiting";

    //Start watching phone states.
    state = app.CreatePhoneState( types )
    state.SetOnChange( state_OnChange )
    state.Start()
}

//Called when phone states change.
function state_OnChange( type, data )
{
    switch( type )
    {
        case "CellLocation": 
            txt.Log( "cellId: " + data.cellId ) 
            txt.Log( "area code: " + data.areaCode )  
            break;
        
        case "DataConnection": 
            txt.Log( "data state: " + data.state )  
            txt.Log( "network type: " + data.networkType ) 
            break;
            
         case "DataActivity": 
            txt.Log( "data: " + data )  
            break;
                
        case "CallState":
            txt.Log( "call state: " + data.state )  
            txt.Log( "number: " + data.number )  
            break;
            
        case "ServiceState":
            txt.Log( "service state: " + data )    
            break;    
            
        case "SignalStrength":
            txt.Log( "signal strength: " + data )    
            break;   
            
        case "MessageWaiting":
            txt.Log( "message: " + data ) 
            break;
            
        case "CallForwarding":
            txt.Log( "forwarding: " + data ) 
            break;
    }
}

