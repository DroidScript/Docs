
//Look here for easing function graphs:- 
// https://tweenjs.github.io/tween.js/examples/03_graphs.html

//Called when application is started.
function OnStart()
{
    //Lock screen orientation to Landscape
    app.SetOrientation( "Landscape" )
    
    //Create an Absolute layout so we can position images precisely.
    lay = app.CreateLayout( "Absolute", "FillXY" )
    
    //Create image.
    img = app.CreateImage( "/Sys/Img/Hello.png", 0.2 )
    lay.AddChild( img )
    
    //Add layout to app.    
    app.AddLayout( lay )
    
    //Start Tween animation.
    Tween1()
}
  
function Tween1()
{
    target = { x:0.5, y:0.5, sw:0.5, sh:0.5, rot:360 };
    img.Tween( target, 1500, "Exponential.Out", 1, true, Tween2 )
}

function Tween2()
{
    target = { x: 0.8, y:[0.6,0.3,0.6], rot: 360*3 };
    img.Tween( target, 1000 )
}

