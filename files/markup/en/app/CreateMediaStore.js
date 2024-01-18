// ------------- HEADER SECTION -------------


/** # CreateMediaStore #
 * @abbrev med
 * @brief Returns a new MediaStore object
 * The MediaStore is used to query audio information from the android provider or from the device in the “/sdcard/Music” folder.
 * $$ med = app.CreateMediaStore() $$
 * @returns dso-MediaStore
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern Batch */

/** ### GetAlbumArt ###
 * @brief Load the album art to an image
 * Loads the album image to an existing image:dso-CreateImage.
 * $$ med.GetAlbumArt(image, id, options?) $$
 * @param {dso} image CreateImage
 * @param {num_int} id
 * @param {str} [options] internal|external
 * @returns bin
 */


/** ### GetSongArt ###
 * @brief Load the song art to an image
 * Loads the song image to an existing image:dso-CreateImage.
 * $$ med.GetSongArt(image, id, options?) $$
 * @param {dso} image CreateImage
 * @param {num_int} id
 * @param {str} [options] internal|external
 * @returns bin
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ med.GetType() $$
 * @returns str-MediaStore
 */


/** ### QueryAlbums ###
 * Search for media albums.
 * $$ med.QueryAlbums(filter?, sort?, options?) $$
 * @param {str_sql} [filter]
 * @param {str:coloumns} [sort] album,\_id,albumArt,artist,numSongs,firstYear,lastYear
 * @param {str} [options] internal|external
 */


/** ### QueryArtists ###
 * Search for media artists.
 * $$ med.QueryArtists(filter?, sort?, options?) $$
 * @param {str_sql} [filter]
 * @param {str:coloumns} [sort] \_id,artist,numAlbums,numTracks,
 * @param {str} [options] internal|external
 */


/** ### QueryMedia ###
 * Search for media.
 * $$ med.QueryMedia(filter?, sort?, options?) $$
 * @param {str_sql} [filter]
 * @param {str_com:coloumns} [sort] title,\_id,duration,size,uri,album,albumID,artist,artistId
 * @param {str} [options] internal|external
 */


/** ### SetOnAlbumsResult ###
 * @brief Called when album query has finished
 * %cb% an album query has finished.
 * $$ med.SetOnAlbumsResult(callback) $$
 * @param {fnc_json} callback {"pNames":["result"],"pTypes":["lst-[{ album:str&comma; id:num_int&comma; albumArt:str_pth&comma; artist:str&comma; numSongs:num_int&comma; firstYear:str&comma; lastYear:str }]"]}
 */


/** ### SetOnArtistsResult ###
 * @brief Called when artist query has finished
 * %cb% a artist query has finished.
 * $$ med.SetOnArtistsResult(callback) $$
 * @param {fnc_json} callback {"pNames":["result"],"pTypes":["lst-[{ id:num_int&comma; artist:str&comma; numAlbums:num_int&comma; numTracks:num_int }]"]}
 */


/** ### SetOnMediaResult ###
 * @brief Called when media query has finished
 * %cb% a media query has finished.
 * $$ med.SetOnMediaResult(callback) $$
 * @param {fnc_json} callback {"pNames":["result"],"pTypes":["lst-[{ title:str&comma; id:num_int&comma; duration:num_mls&comma; size:num_byt&comma; uri:str_uri&comma; album:str&comma; albumID:num_int&comma; artist:str&comma; artistId:num_int }]"]}
 */



// ------------- SAMPLES -------------



/**
@sample Query Artists
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    lst = app.CreateList( "", 1, .9 );
    lay.AddChild( lst );

    app.AddLayout( lay );

    app.ShowProgress( "Query Artists" );
    media = app.CreateMediaStore();
    media.SetOnArtistsResult( media_OnArtistsResult );
    media.QueryArtists( "", "artist", "external" );
}

function media_OnArtistsResult( result )
{
    result.forEach( function( m )
    {
        var s = "";
        for( var k in m ) s += k + ": " + m[k] + "\n";
        lst.AddItem( m.artist, s.slice( 0, -4 ), "" );
    } );
    app.HideProgress();
}
 */



/**
@sample Query Albums
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    lst = app.CreateList( "", 1, .9 );
    lst.SetColumnWidths( 0.3 );
    lst.SetIconSize( 0.2 );
    lay.AddChild( lst );

    app.AddLayout( lay );

    app.ShowProgress( "Query Albums" );
    media = app.CreateMediaStore();
    media.SetOnAlbumsResult( media_OnAlbumsResult );
    media.QueryAlbums( "", "album", "external" );
}

function media_OnAlbumsResult( result )
{
    result.forEach( function( m )
    {
        var s = "";
        for( var k in m ) s += k + ": " + m[k] + "\n";
        lst.AddItem( m.album, s.slice( 0, -4 ), m.albumArt == "null" ? "audio" : m.albumArt );
    } );
    app.HideProgress();
}
 */



/**
@sample Query Media
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    lst = app.CreateList( "", 1, .9 );
    lay.AddChild( lst );

    app.AddLayout( lay );

    app.ShowProgress( "Query Media" );
    media = app.CreateMediaStore();
    media.SetOnMediaResult( media_OnMediaResult );
    media.QueryMedia( "", "title", "external" );
}

function media_OnMediaResult( result )
{
    result.forEach( function( m )
    {
        var s = "";
        for( var k in m ) s += k + ": " + m[k] + "\n";
        lst.AddItem( m.title, s.slice( 0, -4 ), "" );
    } );
    app.HideProgress();
}
 */



/**
@sample Python Query Artists
from native import app

def OnStart():
    global lst
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    lst = app.CreateList("", 1, 0.9)
    lay.AddChild(lst)

    app.AddLayout(lay)

    app.ShowProgress("Query Artists")
    media = app.CreateMediaStore()
    media.SetOnArtistsResult(media_OnArtistsResult)
    media.QueryArtists("", "artist", "external")

def media_OnArtistsResult(result):
    for m in result:
        s = ""
        for k in m:
            s += k + ": " + m[k] + "\n"
        lst.AddItem(m["artist"], s[:-1], "")

    app.HideProgress()
 */



/**
@sample Python Query Albums
from native import app

def OnStart():
    global lst
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    lst = app.CreateList("", 1, 0.9)
    lst.SetColumnWidths(0.3)
    lst.SetIconSize(0.2)
    lay.AddChild(lst)

    app.AddLayout(lay)

    app.ShowProgress("Query Albums")
    media = app.CreateMediaStore()
    media.SetOnAlbumsResult(media_OnAlbumsResult)
    media.QueryAlbums("", "album", "external")

def media_OnAlbumsResult(result):
    for m in result:
        s = ""
        for k in m:
            s += k + ": " + m[k] + "\n"
        lst.AddItem(m["album"], s[:-1], "audio" if m["albumArt"] == "null" else m["albumArt"])

    app.HideProgress()
 */



/**
@sample Python Query Media
from native import app

def OnStart():
    global lst
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    lst = app.CreateList("", 1, 0.9)
    lay.AddChild(lst)

    app.AddLayout(lay)

    app.ShowProgress("Query Media")
    media = app.CreateMediaStore()
    media.SetOnMediaResult(media_OnMediaResult)
    media.QueryMedia("", "title", "external")

def media_OnMediaResult(result):
    for m in result:
        s = ""
        for k in m:
            s += k + ": " + m[k] + "\n"
        lst.AddItem(m["title"], s[:-1], "")

    app.HideProgress()
 */
