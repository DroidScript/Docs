from native import app, ui

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    img = app.CreateImage("/Sys/Img/Droid1.png", 0.2)
    lay.AddChild(img)
    btn = app.CreateButton("Get Media", 0.3, 0.1)
    btn.SetMargins(0, 0.05, 0, 0)
    lay.AddChild(btn)
    btn.SetOnTouch(btnMedia_OnTouch)
    btn = app.CreateButton("Get Artists", 0.3, 0.1)
    btn.SetMargins(0, 0.05, 0, 0)
    lay.AddChild(btn)
    btn.SetOnTouch(btnArtists_OnTouch)
    btn = app.CreateButton("Get Albums", 0.3, 0.1)
    btn.SetMargins(0, 0.05, 0, 0)
    lay.AddChild(btn)
    btn.SetOnTouch(btnAlbums_OnTouch)
    app.AddLayout(lay)
    player = app.CreateMediaPlayer()
    player.SetOnReady(player_OnReady)
    media = app.CreateMediaStore()
    media.SetOnMediaResult(media_OnMediaResult)
    media.SetOnArtistsResult(media_OnArtistsResult)
    media.SetOnAlbumsResult(media_OnAlbumsResult)

def btnMedia_OnTouch():
    app.ShowProgress("Searching...")
    media.QueryMedia("", "artist,album", "external")

def media_OnMediaResult(result):
    s = ""
    for item in result:
        s += item.title + ", " + item.albumId + ", " + item.album + ", " + item.artistId + ", " + item.artist + ", " + str(int(item.duration/1000)) + "s" + ", " + str(int(item.size/1000)) + "KB" + ", " + item.uri + "\n\n"
    app.HideProgress()
    native.ui.app.Alert(s[0:2048])
    if len(result) > 0:
        player.SetFile(result[0].uri)

def btnArtists_OnTouch():
    app.ShowProgress("...")
    media.QueryArtists("", "", "external")

def media_OnArtistsResult(result):
    s = ""
    for item in result:
        s += item.id + ", " + item.artist + ", " + item.numAlbums + ", " + item.numTracks + "\n\n"
    app.HideProgress()
    native.ui.app.Alert(s[0:2048])

def btnAlbums_OnTouch():
    app.ShowProgress("...")
    media.QueryAlbums("", "", "external")

def media_OnAlbumsResult(result):
    s = ""
    for item in result:
        s += item.id + ", " + item.album + ", " + item.artist + ", " + item.numSongs + "\n\n"
    app.HideProgress()
    native.ui.app.Alert(s[0:2048])
    ok = media.GetAlbumArt(img, result[1].id, "external")

def player_OnReady():
    player.Play()