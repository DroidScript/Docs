
//Called when application is started.
function OnStart()
{
    //Create the main layout.
    lay = app.CreateLayout( "linear", "FillXY" )    
    
    //Create a full screen scroller
    scroll = app.CreateScroller( 1.0, 1.0 )
    lay.AddChild( scroll )
 
    //Create a layout inside scroller.
    layScroll = app.CreateLayout( "Linear", "Left" )
    scroll.AddChild( layScroll )
    
    //Create an image twice the screen size.
    img = app.CreateImage( "/Sys/Img/Hello.png", 2.0, 2.0 )
    layScroll.AddChild( img )
       
    //Add layout to app.    
    app.AddLayout( lay )
    
    //Initially scroll to center of image.
    scroll.ScrollTo( 0.5, 0.5 )
    
    //Show the current scroll position every second.
    setInterval( ShowScrollPos, 1000 )
}

//Called every second.
function ShowScrollPos()
{
    //Current scroll position and diplay it.
    var x = scroll.GetScrollX()
    var y = scroll.GetScrollY()
    app.ShowPopup( x.toFixed(2) + ", " + y.toFixed(2) )
}
