
/*
 * A small example to use in your Google Maps app.
 * You can use our MapView plugin for more advanced features.
*/

//Called when application is started.
function OnStart()
{
    //Create the main layout.
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" )

    //Create a horizontal layout for the search box and button.
	var horiz = app.AddLayout( lay, "Linear", "FillX,VCenter,Horizontal" )
	horiz.SetMargins( 0, 0.02, 0, 0.02 )

	//Add the search box and button
	edt = app.AddTextEdit( horiz, "Eiffel Tower, Paris France", 0.6, -1, "SingleLine" )
	search = app.AddButton( horiz, "[fa-search] Search", -1, -1, "FontAwesome" )
	search.SetOnTouch( search_OnTouch )

	//We add it to the Card layout for a soft angular look.
	card = app.AddLayout( lay, "Card" )
	card.SetCornerRadius( 10 )
	card.SetElevation( 0 )

	//Create the map (use true for dark theme).
	map = CreateMap( 0.95, 0.85, false )
	card.AddChild( map )

	//Add layout to app.
	app.AddLayout( lay )

	//We add the language code in whichever language we searched,
	//otherwise the marking may not appear.
	map.Search( "Eiffel Tower, Paris France", "en" )
}

//Handle the search button.
function search_OnTouch()
{
    map.Search( edt.GetText(), "en" )
}

//Create a webview showing a Google map.
function CreateMap( width, height, useDarkTheme )
{
    var style = "<style>* { margin: 0; padding: 0; }"
    style += "iframe { width: 100%; height: 100%; border: 0;"
    if( useDarkTheme ) style += "filter: grayscale(100%) invert(92%) contrast(83%);"
    style += "}</style>"

    //If click on "view larger map", open it in browser.
    //But since the Maps app will detect the link, it will open it in the Maps app.
    var web = app.CreateWebView( width, height, "FillXY,Progress,UseBrowser" )

    web.Search = function( query, lang ) {
        var url = "http://maps.google.com/maps?z=16&hl=" + lang + "&output=embed&q=" + query.trim()
        var html = style + '<iframe scrolling="no" src="' + url + '"></iframe>'

        web.LoadHtml( html )
    }
    return web
}

