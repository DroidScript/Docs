//Called when application is started.  
function OnStart()  
{  
    //Create a layout with objects vertically centered.  
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )  
      
    //Create an 'Add' button.  
    btnAdd = app.CreateButton( "Add to Database", 0.6, 0.1 )  
    btnAdd.SetOnTouch( btnAdd_OnTouch )  
    lay.AddChild( btnAdd )  
      
    //Create a 'Remove' button.  
    btnRemove = app.CreateButton( "Remove from Database", 0.6, 0.1 )  
    btnRemove.SetOnTouch( btnRemove_OnTouch )  
    lay.AddChild( btnRemove )  
      
    //Create a 'Delete' button.  
    btnDelete = app.CreateButton( "Delete Database", 0.6, 0.1 )  
    btnDelete.SetOnTouch( btnDelete_OnTouch )  
    lay.AddChild( btnDelete )  
      
    //Create text box to show results.  
    txt = app.CreateText( "", 0.9, 0.4, "multiline" )  
    txt.SetMargins( 0,0.1,0,0 )  
    txt.SetBackColor( "#ff222222" )  
    txt.SetTextSize( 18 )  
    lay.AddChild( txt )  
      
    //Add layout to app.      
    app.AddLayout( lay )  
      
    //Create or open a database called "MyData".  
    db = app.OpenDatabase( "MyData" )  
      
    //Create a table (if it does not exist already).  
    db.ExecuteSql( "CREATE TABLE IF NOT EXISTS test_table " +  
        "(id integer primary key, data text, data_num integer)" )  

    //Get all the table rows.      
    DisplayAllRows() 
}  

//Called when user touches our 'Add' button.  
function btnAdd_OnTouch()  
{  
    //Add some data (with error handler).  
    db.ExecuteSql( "INSERT INTO test_table (data, data_num)" +   
        " VALUES (?,?)", ["test", 100], null, OnError )  

    //Get all the table rows.      
    DisplayAllRows()  
}  

//Called when user touches our 'Remove' button.  
function btnRemove_OnTouch()  
{      
    //Remove data.  
    db.ExecuteSql( "DELETE FROM test_table WHERE id > 3" )  

    //Get all the table rows.      
    DisplayAllRows()  
}  

//Called when user touches our 'Delete' button.  
function btnDelete_OnTouch()  
{      
   //Delete this database.  
   db.Delete()  

   //Get all the table rows.  
   DisplayAllRows() 
}  

//function to display all records 
function DisplayAllRows() 
{ 
    txt.SetText("")  
      
    //Get all the table rows.  
    db.ExecuteSql( "select * from test_table;", [], OnResult ) 
} 

//Callback to show query results in debug.  
function OnResult( results )   
{  
    var s = "";  
    var len = results.rows.length;  
    for(var i = 0; i < len; i++ )   
    {  
        var item = results.rows.item(i)  
        s += item.id + ", " + item.data + ", " + item.data_num + "\n";   
    }  
    txt.SetText( s )  
}  

//Callback to show errors.  
function OnError( msg )   
{  
    app.Alert( "Error: " + msg )  
    console.log( "Error: " + msg )  
}  

