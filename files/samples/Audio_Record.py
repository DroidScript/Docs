destFile = "/sdcard/test.wav"
timer = 0

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetBackGradient("#888888", "#555555")
    
    txt = app.CreateText("Level: 0%", 0.8)
    txt.SetTextColor("#222222")
    txt.SetTextShadow(1, 0, 1, "#88ffffff")
    txt.SetTextSize(24)
    lay.AddChild(txt)
    
    btnStart = app.CreateButton("Start", 0.6, -1, "Alum,NoSound")
    btnStart.SetMargins(0, 0.05, 0, 0)
    btnStart.SetOnTouch(btnStart_OnTouch)
    lay.AddChild(btnStart)
    
    btnPause = app.CreateButton("Pause", 0.6, -1, "Alum,NoSound")
    btnPause.SetMargins(0, 0.05, 0, 0)
    btnPause.SetOnTouch(btnPause_OnTouch)
    lay.AddChild(btnPause)
    
    btnStop = app.CreateButton("Stop", 0.6, -1, "Alum,NoSound")
    btnStop.SetMargins(0, 0.05, 0, 0)
    btnStop.SetOnTouch(btnStop_OnTouch)
    lay.AddChild(btnStop)
    
    btnPlay = app.CreateButton("Play File", 0.6, -1, "Alum,NoSound")
    btnPlay.SetMargins(0, 0.1, 0, 0)
    btnPlay.SetOnTouch(btnPlay_OnTouch)
    lay.AddChild(btnPlay)
    
    app.AddLayout(lay)
    
    rec = app.CreateAudioRecorder()
    rec.SetFile(destFile)
    
    player = app.CreateMediaPlayer()
    player.SetOnReady(player_OnReady)
    
    app.SetDebugEnabled(False)

def btnStart_OnTouch():
    rec.Start()
    txt.SetTextColor("#aa2222")
    clearInterval(timer)
    timer = setInterval(GetLevel, 250)

def btnPause_OnTouch():
    rec.Pause()
    txt.SetTextColor("#222222")

def btnStop_OnTouch():
    rec.Stop()
    txt.SetTextColor("#222222")
    txt.SetText("Level: 0%")
    clearInterval(timer)

def GetLevel():
    level = rec.GetRMS()
    txt.SetText("Level: " + str(int(round(100 * level / 0.72))) + "%")

def btnPlay_OnTouch():
    player.SetFile(destFile)

def player_OnReady():
    player.Play()