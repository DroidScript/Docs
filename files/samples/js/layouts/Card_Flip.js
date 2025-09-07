

//Set card dimensions according to screen orientation.
var isPortrait = app.IsPortrait()
var width = isPortrait ? 0.7 : 0.25
var height = isPortrait ? 0.7 : 0.7

//Called when application is started.
function OnStart()
{
    //Create a layout with objects vertically centered.
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    //=== Front Face ===

    var front = app.CreateLayout( "Card" )
    front.SetBackColor( "#FFFFFF" )
    front.SetSize( width, height )
    front.SetCornerRadius( 10 )
    front.SetElevation( 0 )

    var frontContent = app.AddLayout( front, "Linear", "VCenter,FillXY" )
    app.AddImage( frontContent, "/Sys/Img/Hello.png", width / 2, -1, "FillXY" )

    var btnInfo = app.AddButton( front, "[fa-info-circle]", -1, -1, "FillX,FontAwesome")
    btnInfo.SetTextSize( 26 )
    btnInfo.SetTextColor( "#212121" )
    btnInfo.SetOnTouch( flipCard )
    btnInfo.SetBackAlpha( 0.1 )

    //=== Back Face ===

    var back = app.CreateLayout( "Card", "TouchSpy" )
    back.SetBackColor( "#FFFFFF" )
    back.SetSize( width, height )
    back.SetCornerRadius( 10 )
    back.SetElevation( 0 )

    var backContent = app.AddLayout( back, "Linear", "VCenter,FillXY" )

    var btnReturn = app.AddButton( backContent, "[fa-close]", -1, -1, "FillX,FontAwesome")
    btnReturn.SetTextSize( 26 )
    btnReturn.SetTextColor( "#212121" )
    btnReturn.SetOnTouch( flipCard )
    btnReturn.SetBackAlpha( 0.1 )

    var scroller = app.AddScroller( backContent, -1, -1, "FillXY" )
    var text = app.CreateText( "Lorem ipsum dolor sit amet ".repeat(40), width, -1, "Left,Multiline" )
    text.SetPadding( 0.04, 0.01, 0.04, 0.02 )
    text.SetTextColor( "#212121" )
    text.SetTextSize( 16 )
    scroller.AddChild( text )

    //=== FlipLayout ===

    flipLayout = createFlipLayout( front, back )
    lay.AddChild( flipLayout )

    //Add layout to app.
    app.AddLayout( lay )

    app.SetDebugEnabled( false )
}

function flipCard()
{
    flipLayout.Flip()
}

function createFlipLayout( front, back )
{
    var visibleCtrl = front
    var invisibleCtrl = back
    var isFlipping = false

    var frame = app.CreateLayout( "Frame" )
    frame.AddChild( back )
    frame.AddChild( front )

    invisibleCtrl.SetScale( 0, 1 )

    function onAnimationEnd()
    {
        var _visible = visibleCtrl

        //It changes the visible and the invisible.
        visibleCtrl = invisibleCtrl
        invisibleCtrl = _visible

        isFlipping = false
    }

    frame.Flip = function()
    {
        //Ignore touches if animation is not finished.
        if( isFlipping ) return

        isFlipping = true

        visibleCtrl.Tween( { sw: 0 }, 250, "Linear.None", 0, false, function() {
            frame.ChildToFront( invisibleCtrl )
            invisibleCtrl.Animate( "FlipFromHorizontal", onAnimationEnd, 250 )
        } )
    }

    return frame
}