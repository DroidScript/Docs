```python
import native.app as app
import native.gfx as gfx
import native.ui as ui
import native.MUI as MUI

isFullscreen = False

videoIds = [
    "zZTs3bYRyzs", "AK31U2f1nl0",
    "cKzK4oqiDd8", "ZlojAcd9lGc"]

videoTitles = ["Part 1", "Part 2", "Part 3", "Part 4"]


def OnStart():
    app.SetOrientation("Portrait")

    lay = app.CreateLayout("Linear", "FillXY")
    lay.SetChildMargins(0.02, 0.02, 0.02, 0.02)
    lay.SetBackColor("#333333")

    web = app.AddWebView(lay, 1, 0.4, "UseBrowser")
    web.SetOnProgress(web_OnProgress)
    web.SetOnConsole(web_OnConsole)
    web.SetOnError(web_OnError)
    web.SetBackColor("#000000")

    title = app.AddText(lay, "Build a Password Vault", 1, -1, "Bold")
    title.SetTextColor("#FFFFFF")
    title.SetTextSize(22, "sp")
    title.SetEllipsize("End")

    list = app.AddList(lay, videoTitles, 1, -1, "Bold")
    list.SetHiTextColor1("#FF0000")
    list.SetOnTouch(list_OnTouch)
    list.SelectItemByIndex(0)
    list.SetEnabled(False)

    app.AddLayout(lay)

    web.LoadUrl("https://www.youtube.com/embed/" + videoIds[0] + "?&rel=0")


def list_OnTouch(title, body, icon, index):
    list.SelectItemByIndex(index)

    web.Execute(
        "document.querySelector('#movie_player').loadVideoById('" + videoIds[index] + "')"
    )


def web_OnProgress(progress):
    if progress != 100:
        return

    inject = (
        'document.querySelector("button.ytp-fullscreen-button.ytp-button").addEventListener("click", () => console.log("fullscreen"))'
    )
    web.Execute(inject)

    list.SetEnabled(True)
    web.Show()


def web_OnConsole(msg):
    global isFullscreen

    if msg == "fullscreen":
        goFullscreen()


def goFullscreen():
    global isFullscreen

    isFullscreen = not isFullscreen

    app.SetOrientation("Landscape" if isFullscreen else "Portrait")
    app.SetScreenMode("Game" if isFullscreen else "Normal")


def OnConfig():
    web.SetSize(1, 0.4) if app.IsPortrait() else web.SetSize(1, 1)


def web_OnError(message, code):
    if code == -2:
        app.Quit("No network connection!")
```