
function OnStart()
{
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )
    
    layAnim = app.CreateLayout( "Linear", "VCenter,FillX" )
    lay.AddChild( layAnim )
    
	img = app.CreateImage( "/Sys/Img/Hello.png", 0.2 )
	layAnim.AddChild( img )
	
    txt = app.CreateText( "Hello World!" )
    layAnim.AddChild( txt )
    
    types = ["NewsPaper","Jelly", "Flash","RubberBand","ShakeHorizontal","ShakeVertical","Swing","TaDa",
    "Bounce","BounceLeft","BounceTop","BounceRight","BounceBottom",
    "FadeIn","FadeOut",
    "Fall","FallRotate",
    "FlipFromVerticalSwing","FlipFromHorizontal","FlipFromBottom","FlipFromVertical","FlipFromHorizontalSwing","FlipFromTop","FlipFromRight","FlipFromLeft","FlipToHorizontal","FlipToVertical",
    "SlideFromLeft","SlideFromTop","SlideFromRight","SlideFromBottom","SlideToLeft","SlideToTop","SlideToRight","SlideToBottom",
    "ScaleFromLeft","ScaleFromTop","ScaleFromRight","ScaleFromBottom","ScaleToLeft","ScaleToTop","ScaleToRight","ScaleToBottom",
    "ZoominEnter","ZoominExit","ZoominLeft","ZoominTop","ZoominRight","ZoominBottom",
    "ZoomOutExit","ZoomOutLeft","ZoomOutTop","ZoomOutRight","ZoomOutBottom"
    ];
    
    lst = app.CreateList( types, 1, 0.7, "ShowScroll" )
    lst.SetMargins( 0, 0.05 )
    lst.SetOnTouch( lst_OnTouch )
    lay.AddChild( lst )
    
    app.AddLayout( lay )
}

function lst_OnTouch( name )
{
    layAnim.Animate( name )
}