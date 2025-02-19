
//Called when application is started.
function OnStart()
{
    //Create a layout with objects vertically centered.
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )    

    //Create an image.
    img = app.CreateImage( "/Sys/Img/Droid1.png", 0.2 )
    lay.AddChild( img )
  
    //Create a 'Media' button.
    btn = app.CreateButton( "Get Media", 0.3, 0.1 )
    btn.SetMargins( 0, 0.05, 0, 0 )
    lay.AddChild( btn )
    btn.SetOnTouch( btnMedia_OnTouch )
    
    //Create a 'Artists' button.
    btn = app.CreateButton( "Get Artists", 0.3, 0.1 )
    btn.SetMargins( 0, 0.05, 0, 0 )
    lay.AddChild( btn )
    btn.SetOnTouch( btnArtists_OnTouch )
    
    //Create a 'Albums' button.
    btn = app.CreateButton( "Get Albums", 0.3, 0.1 )
    btn.SetMargins( 0, 0.05, 0, 0 )
    lay.AddChild( btn )
    btn.SetOnTouch( btnAlbums_OnTouch )
    
    //Add layout to app.    
    app.AddLayout( lay )
    
    //Create media player.
    player = app.CreateMediaPlayer()
    player.SetOnReady( player_OnReady )
    
    //Create media store and set callbacks.
    media = app.CreateMediaStore()
    media.SetOnMediaResult( media_OnMediaResult )
    media.SetOnArtistsResult( media_OnArtistsResult )
    media.SetOnAlbumsResult( media_OnAlbumsResult )
}

//Called when user touches our button.
function btnMedia_OnTouch()
{
    //Usage:- QueryMedia( select, sort, options )
    
    //Some sample queries:-
    //media.QueryMedia( "title='Code Monkey'", "")
    //media.QueryMedia( "title like '%'", "" )
    //media.QueryMedia( "title like '%fire%'", "", "external" )
    //media.QueryMedia( "", "album" )
    //media.QueryMedia( "title like '%fire%'", "album" )
    
    app.ShowProgress( "Searching..." )
    media.QueryMedia( "", "artist,album", "external" )
}

//Show media query results.
function media_OnMediaResult( result )
{
    s = "";
    for( var i=0; i<result.length; i++ )
    {
        var item = result[i];

        s += item.title+", "+item.albumId+", "+item.album
            +", "+item.artistId+", "+ item.artist+
            ", "+ Math.round(item.duration/1000)+"s" +
            ", "+ Math.round(item.size/1000)+"KB" + 
            ", "+ item.uri +"\n\n";
    }
    
    app.HideProgress()
    alert( s.substr(0,2048) )
    
    //Play first file found.
    if( result.length > 0 )
        player.SetFile( result[0].uri )
}


//Called when user touches 'Artists' button.
function btnArtists_OnTouch()
{
    //Format: Query( select, sort, options )
    app.ShowProgress( "..." )
    media.QueryArtists( "", "", "external" )
}

//Show artists query results.
function media_OnArtistsResult( result )
{
    s = "";
    for( var i=0; i<result.length; i++ )
    {
        var item = result[i];
        s += item.id+", "+item.artist+", "+item.numAlbums+
            ", "+ item.numTracks +"\n\n";
    }
    
    app.HideProgress()
    alert( s.substr(0,2048) )
}


//Called when user touches 'Albums' button.
function btnAlbums_OnTouch()
{
    //Format: Query( select, sort, options )
    app.ShowProgress( "..." )
    
    //eg: media.QueryAlbums( "_id=223", "", "external" )
    media.QueryAlbums( "", "", "external" )
}

//Show albums query results.
function media_OnAlbumsResult( result )
{
    s = "";
    for( var i=0; i<result.length; i++ )
    {
        var item = result[i];
        s += item.id+", "+item.album+", "+item.artist+
            ", "+ item.numSongs +"\n\n";
    }
    
    app.HideProgress()
    alert( s.substr(0,2048) )
    
    //Show album art.
    var ok = media.GetAlbumArt( img, result[1].id, "external" )
}


//Called when file is ready to play.
function player_OnReady()
{
    player.Play()
}

