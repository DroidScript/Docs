/*
 * This example lists and plays YouTube videos with
 * optional full screen mode. The videos are taken
 * from the DroidScript YouTube channel.
*/

//Initialise variables.
var isFullscreen = false

var videoIds = [
    "zZTs3bYRyzs", "AK31U2f1nl0",
    "cKzK4oqiDd8", "ZlojAcd9lGc" ]

var videoTitles = [ "Part 1", "Part 2", "Part 3", "Part 4" ]


//Called when application is started.
function OnStart()
{
	app.SetOrientation( "Portrait" )

	lay = app.CreateLayout( "Linear", "FillXY" )
	lay.SetChildMargins( 0.02, 0.02, 0.02, 0.02 )
	lay.SetBackColor( "#333333" )

	web = app.AddWebView( lay, 1, 0.4, "UseBrowser" )
	web.SetOnProgress( web_OnProgress )
	web.SetOnConsole( web_OnConsole )
	web.SetOnError( web_OnError )
	web.SetBackColor( "#000000" )

	title = app.AddText( lay, "Build a Password Vault", 1, -1, "Bold" )
	title.SetTextColor( "#FFFFFF" )
	title.SetTextSize( 22, "sp" )
	title.SetEllipsize( "End" )

	list = app.AddList( lay, videoTitles, 1, -1, "Bold" )
	list.SetHiTextColor1( "#FF0000" )
	list.SetOnTouch( list_OnTouch )
	list.SelectItemByIndex( 0 )
	list.SetEnabled( false )

	//Add layout to app.
	app.AddLayout( lay )

	//rel = If the parameter's value is set to 0, then the player does not show related videos.
	web.LoadUrl( "https://www.youtube.com/embed/" + videoIds[0] + "?&rel=0"  )
}

function list_OnTouch( title, body, icon, index )
{
    list.SelectItemByIndex( index )

    //We can change the index of the video played by entering the YouTube player api on the page.
    //https://developers.google.com/youtube/iframe_api_reference
    web.Execute( "document.querySelector('#movie_player').loadVideoById('" + videoIds[index] + "')" )
}

function web_OnProgress( progress )
{
    //We cannot run our code until the page is fully loaded.
    //Wait until it is fully loaded.
    if( progress !== 100 ) return

    //Detect full screen click. In this way,
    //we can turn the screen sideways and enlarge it.
    var inject = 'document.querySelector("button.ytp-fullscreen-button.ytp-button").addEventListener("click", () => console.log("fullscreen"))'
    web.Execute( inject )

    list.SetEnabled( true )
    web.Show()
}

//We printed a message when the button was clicked to understand that the screen went into full screen mode.
//By detecting this, we can learn whether the button has been clicked or not.
function web_OnConsole( msg )
{
    if( msg === "fullscreen" ) goFullscreen()
}

function goFullscreen()
{
    isFullscreen = !isFullscreen

    app.SetOrientation( isFullscreen ? "Landscape" : "Portrait" )
    app.SetScreenMode( isFullscreen ? "Game" : "Normal" )
}

// If the screen is turned sideways,
//make the video full screen and hide the list.
function OnConfig()
{
    if( app.IsPortrait() ) web.SetSize( 1, 0.4 )
    else web.SetSize( 1, 1 )
}

function web_OnError( message, code )
{
	if( code === -2 )
	{
		app.Quit( "No network connection!" )
  }
}

