
//Create days of the week array.
var dotw = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

//Create array to store calender data.
var rows = [];

//Called when application is started.
function OnStart()
{
    //Create a layout with objects vertically centered.
	lay = app.CreateLayout( "linear", "FillXY" )		

    //Create a list view.
    lst = app.CreateList( "",1,-1,"fillXY" )
    lay.AddChild( lst ) 
    lst.SetOnTouch( lst_OnTouch )
    lst.SetTextColor1( "#eeeeee" )
    lst.SetTextColor2( "#88ffff" )
    
    //Add layout to app. 
    app.AddLayout( lay )
    
    //Get the users appointments for next 30 days.
    GetAppointments( 30 )
}

//Get the user's appointments.
function GetAppointments( days )
{
    //Set the date range.    
    var d1 = new Date().getTime()
    var d2 = new Date().getTime() + 1000 * 60 * 60 * 24 * days;
    
    //Query the content database for calendar info.
    var uri = "content://com.android.calendar/instances/when/"+d1+"/"+d2;
    var select = null, params=null;
    var columns = "title, begin, end, allDay,description,eventLocation";
    rows = app.QueryContent( uri, columns, select, params )
    
    //Sort the resulting rows.
    rows.sort(function(a, b) {
      return parseFloat(a.begin) - parseFloat(b.begin) })  
    
    //Put data in list control.
    var rec, dz1,dz2,body;
    for( var i=0; i<rows.length; i++ )
    {
        rec = rows[i];
        dz1 = (new Date(Number(rec.begin))).toLocaleString()
        dz2 = (new Date(Number(rec.end))).toLocaleString()
        if(rec.allDay=="1") body = dz1.slice(0,10)
        else body=(dz1+" - "+dz2).replace(/Z/g," ")
        lst.AddItem( rec.title, body)
        console.log( "title " + rec.title )
    }
}

//Handle list item touches.
function  lst_OnTouch( title, body, icon, index )
{
   //Get info from list.
   var rec = rows[index];
   var dat = new Date(Number(rec.begin))
   var day = dotw[dat.getDay()];
   var tim = dat.toLocaleString()
   if(rec.allDay=="1") tim = dat.toLocaleDateString()
   
   var s = "title: " + rec.title+"\n\n"+
        "desc: "+rec.description+"\n\n"+
        day+"\n"+tim+"\n"+
        "location: "+rec.eventLocation;
   app.ShowPopup(s)
}
