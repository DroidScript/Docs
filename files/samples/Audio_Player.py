from native import app

def OnStart():
    lay = app.CreateLayout("linear", "fillxy,vcenter")
    spin = app.CreateSpinner("[No tracks found]")
    spin.SetSize(0.8, -1)
    spin.SetOnTouch(spn_OnTouch)
    lay.AddChild(spin)

    btnPlay = app.CreateButton("Play", 0.4, 0.1)
    btnPlay.SetMargins(0, 0.05, 0, 0)
    btnPlay.SetOnTouch(btnPlay_OnTouch)
    lay.AddChild(btnPlay)

    btnPause = app.CreateButton("Pause", 0.4, 0.1)
    btnPause.SetOnTouch(btnPause_OnTouch)
    lay.AddChild(btnPause)

    btnStop = app.CreateButton("Stop", 0.4, 0.1)
    btnStop.SetOnTouch(btnStop_OnTouch)
    lay.AddChild(btnStop)

    skb = app.CreateSeekBar(0.8, -1)
    skb.SetMargins(0, 0.05, 0, 0)
    skb.SetRange(1.0)
    skb.SetOnTouch(skb_OnTouch)
    lay.AddChild(skb)

    skbVol = app.CreateSeekBar(0.8, -1)
    skbVol.SetMargins(0, 0.05, 0, 0)
    skbVol.SetOnTouch(skbVol_OnTouch)
    skbVol.SetRange(1.0)
    skbVol.SetValue(0.5)
    lay.AddChild(skbVol)

    app.AddLayout(lay)

    player = app.CreateMediaPlayer()
    player.SetOnReady(player_OnReady)
    player.SetOnComplete(player_OnComplete)

    mp3List = app.ListFolder("/sdcard/music", ".mp3")
    spin.SetList(mp3List)

    player.SetFile("/sdcard/music/" + spin.GetText())
    dur = None

    # Set up timer to update seek bar every second.
    app.TimerInterval(1000, Update)

def player_OnReady():
    global dur
    dur = player.GetDuration()
    app.ShowPopup("Ready")

def player_OnComplete():
    app.ShowPopup("Finished")

def spn_OnTouch(item):
    player.SetFile("/sdcard/music/" + item)

def btnPlay_OnTouch():
    player.Play()

def btnPause_OnTouch():
    player.Pause()

def btnStop_OnTouch():
    player.Stop()

def skb_OnTouch(value):
    player.SeekTo(dur * value)

def Update():
    prog = player.GetPosition()
    if dur:
        skb.SetValue(prog / dur)

def skbVol_OnTouch(value):
    player.SetVolume(value, value)