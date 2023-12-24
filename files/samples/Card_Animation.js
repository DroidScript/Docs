
//Init variables.
var flippedPos = null
var diff = 0
var frame = null
var createdImg = null
var isPortrait = app.IsPortrait()

//DH is shorthand for app.GetDisplayHeight()
//DW s shorthand for app.GetDisplayWidth()
//Let's keep the result (so as not to call it again every time).
var DWTH = DW()
var asp = DWTH / DH()

var width
if( DWTH <= 720 ) width = 0.4
else if ( DWTH <= 1280 ) width = 0.3
else width = 0.2
var height = asp * width

//Set Card data.
var data = [{
   title: "Hello World",
   text: "Lorem ipsum dolor sit amed."
}, {
   title: "Merhaba Dünya",
   text: "Lorem ipsum dolor sit amed."
}, {
   title: "Hallo Welt",
   text: "Lorem ipsum dolor sit amed.".repeat(50)
}, {
    title: "Hola Mundo",
    text: "Lorem ipsum dolor sit amed."
}, {
    title: "Ciao mondo",
    text: "Lorem ipsum dolor sit amed."
}]

//Called when application is started.
function OnStart()
{
   //Switch off debugging for max performance.
   app.SetDebugEnabled( false )
   app.EnableBackKey( false )

   //Lock screen orientation. It is not rotatable within the application.
   app.SetOrientation( app.GetOrientation() )

   canvas = app.CreateLayout( "Absolute", "FillXY" )

   scroller = app.AddScroller( canvas, 1, 1, "ScrollFade" )
   lay = app.CreateLayout( "Linear", "VCenter,FillXY" )
   lay.SetSize( 1, 1 )
   scroller.AddChild( lay )

   var horiz

   for( var i = 0; i < data.length; i++ )
   {
      //Add 2 cards per line on portrait screen and
      //3 cards per line on landscape screen.
      if( i % (isPortrait ? 2 : 3) === 0 )
         horiz = app.AddLayout( lay, "Linear", "FillXY,Horizontal" )

      var card = addCard( data[i], i )
      horiz.AddChild( card )

      if( i === 0 )
        firstCard = card
   }

   layInfo = app.AddLayout( canvas, "Linear", "FillXY,Left" )
   layInfo.SetBackColor( "#212121" )
   layInfo.SetBackAlpha( 0.9 )
   layInfo.Hide()

   btnBack = app.AddText( layInfo, "[fa-arrow-left] Back", -1, -1, "fontawesome" )
   btnBack.SetTextColor( "#EEEEEE" )
   btnBack.SetTextSize( 26, "px" )
   btnBack.SetMargins( 0.1, isPortrait ? 0.025 : 0.05 )
   btnBack.SetOnTouchUp( FlipToBack )
   btnBack.Hide()

   infoTitle = app.AddText( layInfo, "", 1, isPortrait ? 0.3 : 0.2 )
   infoTitle.SetPadding( isPortrait ? 0.35 : 0.3, 0.05 )
   infoTitle.SetTextSize( 32, "px" )
   infoTitle.Hide()

   layInfoScroller = app.AddScroller( layInfo, 1, -1, "FillXY,ScrollFade" )
   infoText = app.CreateText( "", 1, -1, "MultiLine,Left" )
   infoText.SetPadding( isPortrait ? 0.1 : 0.6, 0.02, 0.1, 0.1 )
   infoText.Hide()
   layInfoScroller.AddChild( infoText )

   //Add layout to app.
   app.AddLayout( canvas )

   //We subtract the distance of the first element from the screen and
   //the distance from its parent and find the extra space added to each element.
   diff = firstCard.GetPosition( "screen" ).top - firstCard.GetPosition().top
}

//Called when the back key is pressed.
function OnBack()
{
	if(flippedPos !== null) FlipToBack()
	else app.Exit()
}

function addCard( row )
{
   var card = app.CreateLayout( "Card", "TouchSpy" )
   card.SetCornerRadius( 5 )
   card.SetBackColor( "#212121" )
   card.SetSize( width )
   card.SetOnTouchUp( FlipToInfo )
   card.SetMargins( isPortrait ? 0.05 : 0.015, 0.02, isPortrait ? 0.05 : 0.015, 0.02 )

   var contentLay = app.AddLayout( card, "Linear", "FillXY" )

   var img = app.AddImage( contentLay, "/Sys/Img/Sky.jpg", width, height )

   txtTitle = app.AddText( contentLay, row.title, -1, 0.1, "Left,FillX" )
   txtTitle.SetPadding( 0.025, 0.02 )
   txtTitle.SetTextSize( 24, "px" )
   txtTitle.SetEllipsize(  "end" )
   txtTitle.SetTextColor( "#FFFFFF" )

   //We keep this information so that
   //we can access it after the card has been clicked.
   card.data.text = row.text
   card.data.title = row.title
   card.data.image = img

   return card
}

function FlipToInfo()
{
   //this: clicked card.
   canvas.Show()
   var from = this.GetPosition( "screen" )

   //The image on the clicked card does not have an absolute layout,
   //so its position cannot be changed.
   //We can change the position of this copy by creating a similar image and
   //adding it to the absolute layout.
   createdImg = app.CreateLayout( "Card" )
   createdImg.SetPosition( from.left, from.top - diff )
   createdImg.SetCornerRadius( 5 )
   createdImg.SetSize( width, height )

   app.AddImage( createdImg, "/Sys/Img/Sky.jpg", width, height )

   canvas.AddChild( createdImg )

   canvas.ChildToFront( layInfo )

	 //Hide the picture on the clicked card.
   this.data.image.Hide()
   infoTitle.SetText( this.data.title )
   infoText.SetText( this.data.text )
   layInfo.Animate( "Fadein", null, 500 )

   //We added 0.02 to make it a little curvy.
   var target = {
      x: 0.1,
      y: [ 0.02, isPortrait ? 0.1 : 0.15 ]
   }

   createdImg.Tween( target, 500, "Exponential.InOut", 0, false, function() {
     btnBack.Animate( "SlideFromTop", null, 250 )
     infoTitle.Animate( "SlideFromRight", null, 500 )
     infoText.Animate( "SlideFromBottom", null, 500 )
   })

   //We can restore it by keeping the initial information.
   flippedPos = from
   flippedImage = this.data.image
}

function FlipToBack()
{
   btnBack.Animate( "SlideToTop", null, 250 )
   infoTitle.Animate( "SlideToRight", null, 250 )
   infoText.Animate( "SlideToBottom", null, 250 )
   layInfo.Animate( "Fadeout", null, 500 )

    //We added 0.02 to make it a little curvy.
    var target = {
   	    x: [ 0.02, flippedPos.left ],
   	    y: flippedPos.top - diff
    }

    flippedPos = null

   createdImg.Tween( target, 500, "Exponential.InOut", 0, false, function() {
      flippedImage.Show()

      //When we destroy the image we created, there is a small dark flash.
      //To avoid this, let's bring the card layout forward and leave the clone behind.
      canvas.ChildToFront( scroller )

      //When we return to the old place, we destroy the copy we created.
      canvas.RemoveChild( createdImg )
      flippedImage = null
   })
}

