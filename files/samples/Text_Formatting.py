from native import app
import random

Translated code:

```python
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetBackground("/Sys/Img/StarField.jpg")

    # Button with image in between chars.
    text = "<big><b>Andr<img src=/Sys/Img/AScript.png>id</b></big>"
    btn = app.CreateButton(text, 0.6, -1, "Html")
    btn.SetTextSize(20)
    btn.SetMargins(0, 0.03, 0, 0)
    btn.SetBackAlpha(0.6)
    btn.SetTextColor("#aaaaaa")
    btn.SetTextShadow(20, 5, 10, "#000000")
    lay.AddChild(btn)

    # Button with image at end.
    text = "Explode <img src=/Sys/Img/Explode1.png>"
    btn = app.CreateButton(text, 0.6, -1, "Html")
    btn.SetTextSize(25)
    btn.SetMargins(0, 0.03, 0, 0)
    btn.SetBackAlpha(0.6)
    btn.SetTextColor("#888888")
    btn.SetTextShadow(20, 5, 10, "#000000")
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    # Create a text with formatting.
    text = "<p><font color=#77CECF>A <i>long</i> time ago, " + \
           "in a galaxy <br><small>far,<small> far away...</small></small></font></p>" + \
           "It is a period of civil war. <font color=#00aa00>Rebel</font> " + \
           "<tt>spaceships</tt>, striking from a <u>hidden</u> " + \
           "base, have won their first victory " + \
           "against the <big><i><font color=#ff0000>evil</font></i></big> " + \
           "<a href=http://www.google.co.uk/search?q=galactic+empire>" + \
           "Galactic Empire&#8482;</a>"
    txt = app.CreateText(text, 0.8, -1, "Html,Link")
    txt.SetMargins(0, 0.02, 0, 0)
    txt.SetPadding(0.03, 0.03, 0.03, 0.03)
    txt.SetTextSize(20)
    txt.SetTextColor("#F7E273")
    lay.AddChild(txt)

    # Create list with formatting.
    data = \
        "Luke Skywalker:Actor^c^ <font color=#77CECF>Mark Hamill</font><br>" + \
        "<i>(Cool dude with a Lightsaber)</i>:null" + \
        ",R2D2:Actor^c^ <font color=#77CECF>Kenny Baker</font><br>" + \
        "<i>(Lukes loyal robot companion)</i>:null"
    lst = app.CreateList(data, 0.8, 0.25, "Html")
    lst.SetMargins(0, 0.02, 0, 0)
    lst.SetBackColor("#77444444")
    lst.SetTextColor("#cccccc")
    lst.SetEllipsize1("end")
    lst.SetTextSize(18)
    lst.SetTextShadow1(2, 2, 4, "#000000")
    lst.SetTextShadow2(1.5, 2, 4, "#000000")
    lst.SetDivider(0.002, "#222222")
    lst.SetOnTouch(lst_OnTouch)
    lay.AddChild(lst)

    # Add layout to app.
    app.AddLayout(lay)

def btn_OnTouch():
    global imgBack
    # Lets have some fun!
    layExp = app.CreateLayout("linear", "VCenter,FillXY")
    imgBack = app.CreateImage(None, 1.0, 1.0)
    layExp.AddChild(imgBack)
    app.AddLayout(layExp)
    player = app.CreateMediaPlayer()
    player.SetOnReady(player_OnReady)
    player.SetFile("/Sys/Snd/Explode.mp3")
    Explode(0)

def lst_OnTouch(item, body, icon, index):
    global synth
    if item == "R2D2":
        # Make R2D2 sounds (sort of).
        synth = app.CreateSynth("VCF")
        synth.SetWaveShape("Square")
        synth.SetVca(10, 400, 0.8, 100)
        synth.SetVcf(10, 400, 0.8, 100, 1000, 0.85, 2.0)
        synth.SetVcfEnabled(False)
        synth.SetVolume(0.5, 0.5)
        synth.PlayTone(1000, 1400)
        RandomBeeps(50)

def RandomBeeps(beeps):

    if beeps is not None:
        beepCount = beeps
    else:
        beepCount -= 1

    if beepCount > 40:
        if native.random.random() > 0.4:
            synth.SetVcfEnabled(False)
            synth.SetFrequency(500 + 500 * native.random.random())
        else:
            synth.SetVcfEnabled(True)
            synth.SetFrequency(200 * native.random.random())
        app.SetTimeout(RandomBeeps, 100 + 2 * native.random.random())
    elif beepCount == 40:
        freq = 3600
        add = (30 if native.random.random() > 0.6 else -30)
        synth.SetWaveShape("Sin")
        synth.SetVcfEnabled(False)
        setTimeout(RandomBeeps, 0)
    elif beepCount > 0:
        synth.SetFrequency(freq + add)
        app.SetTimeout(RandomBeeps, 2)

def Explode(startFrame):

    if startFrame is not None:
        explodeFrame = startFrame

    if explodeFrame < 5:
        file = f"Explode{explodeFrame}.png"
        imgBack.SetImage(f"/Sys/Img/{file}", 1)
        app