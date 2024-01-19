
//Init variables.
var cartSize = 0
var clonedCard = null
var clickedBtn
var diff
var isPortrait = app.IsPortrait()
var width = isPortrait ? 0.44 : 0.25

//Called when application is started.
function OnStart()
{
    //Disable debugging for best performance.
    app.SetDebugEnabled( false )

    canvas = app.CreateLayout( "Absolute", "FillXY" )

    var scroller = app.AddScroller( canvas, 1, 1, "ScrollFade" )
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" )
    lay.SetSize( 1, 1 )
    scroller.AddChild( lay )

    btnCart = app.AddButton( lay, "[fa-shopping-cart]", -1, -1, "fontawesome" )
    btnCart.SetStyle( "#395B64", "#395B64", 100, "", 0, 0 )
    btnCart.SetSize( 150, 150, "px" )
    btnCart.SetTextSize( 50, "px" )
    btnCart.SetMargins( 0, 0.02 )
    btnCart.Focus()

    var horiz

    for( var i = 0; i < 6; i++ )
    {
        if( i % (isPortrait ? 2 : 3) === 0 )
        {
            horiz = app.AddLayout( lay, "Linear", "Horizontal" )
            horiz.SetChildMargins( 0.02, 0.02, 0.02, isPortrait ? 0.02 : 0.05 )
        }

        var card = addCard()
        horiz.AddChild( card )

        if( i === 0 )
            firstCard = horiz
    }

    //Add layout to app.
    app.AddLayout(canvas)

    //We subtract the distance of the first element from the screen and
    //the distance from its parent and find the extra space added to each element.
    diff = firstCard.GetPosition("Screen").top - firstCard.GetPosition().top
}

function addCard(blockClick)
{
    var card = app.CreateLayout( "Card" )
    card.SetBackColor( "#E7F6F2" )
    card.SetCornerRadius( 10 )

    var layContent = app.AddLayout( card, "Linear", "FillXY,Left" )
    layContent.SetPadding( 0, 0, 0, 0.05 )

    app.AddImage( layContent, "/Sys/Img/Xylophone.png", width )

    var innerCard = app.AddLayout( layContent, "Card", "FillXY" )
    innerCard.SetBackColor( "#E7F6F2" )
    innerCard.SetCornerRadius( 0 )
    innerCard.SetElevation( 10 )

    layInfo = app.AddLayout( innerCard, "Linear", "Left,FillXY" )

    var title = app.AddText( layInfo, "Xylophone", -1, -1, "Bold" )
    title.SetPadding( 0.02, 0.02, 0.02 )
    title.SetTextColor( "#395B64" )

    var text = app.AddText( layInfo, "Price: <b>$99.99</b>", -1, -1, "HTML" )
    text.SetPadding( 0.02, 0.01, 0, isPortrait ? 0.08 : 0.15 )
    text.SetTextColor( "#395B64" )

    var layContentEnd = app.AddLayout( card, "Linear", "FillXY,Bottom" )
    var btnAdd = app.AddButton( layContentEnd, "[fa-shopping-cart]  Add To Chart", -1, -1, "FontAwesome,FillX" )
    btnAdd.SetStyle( "#2C3333", "#2C3333", 30, "", 0, 0 )
    btnAdd.SetMargins( 0.02, 0, 0.02, 0.02 )
    btnAdd.SetOnTouch( addToCart )

    btnAdd.data.card = card

    return card
}

function addToCart()
{
    // Do not repeat the process without removing the created clone.
    if( clonedCard !== null ) return

    const pos = this.data.card.GetPosition( "Screen" )
    var targetPos = btnCart.GetPosition( "Screen" )
    this.SetOnTouch( null )

    clonedCard = app.CreateLayout( "Card" )
    clonedCard.SetPosition( pos.left, pos.top - diff )
    clonedCard.SetSize( pos.width, pos.height )
    clonedCard.SetBackColor( "#EEEEEE" )
    clonedCard.SetCornerRadius( 10 )
    clonedCard.SetBackAlpha( 0.5 )
    clonedCard.SetElevation( 0 )
    clonedCard.Hide()

    var cover = app.AddLayout( clonedCard, "Linear", "VCenter,FillXY" )

    var icon = app.AddButton( cover, "[fa-cart-plus]", -1, -1, "FontAwesome" )
    icon.SetStyle( "#395B64", "#395B64", 100, "", 0, 0 )
    icon.SetMargins( 0, 10, 0, 0, "px" )
    icon.SetSize( 150, 150, "px" )
    icon.SetTextSize( 50, "px" )

    canvas.AddChild( clonedCard )

    var target = {
        x: targetPos.left,
        y: [ targetPos.top - targetPos.height / 2 ],
        w: targetPos.width,
        h: targetPos.height
    }

    clickedBtn = this

    clonedCard.Animate( "ZoominEnter", function() {
        startTween( target )
    }, 250 )
}

function startTween( target )
{
    clonedCard.Tween( target, 250, "Exponential.InOut", 0, false, function() {
        btnCart.Animate( "RubberBand", null, 500 )
        btnCart.SetText( "[fa-shopping-cart] " + (++cartSize) )

        canvas.RemoveChild( clonedCard )
        clickedBtn.SetOnTouch( addToCart )

        clonedCard = null
    } )
}
