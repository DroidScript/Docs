from native import app, ui

# Set light theme.
cfg.Light

# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create card layout.
    layCard = app.CreateLayout("Card")
    layCard.SetBackColor("white")
    layCard.SetElevation(4)
    layCard.SetCornerRadius(4)
    lay.AddChild(layCard)

    # Create card contents.
    pad = 0.02
    cardWidth = 0.7
    layInfo = app.CreateLayout("Linear")
    layInfo.SetMargins(pad, pad, pad, pad)
    layCard.AddChild(layInfo)
    img = app.AddImage(layInfo, "/Sys/Img/Sky.jpg", cardWidth)
    txtTitle = app.AddText(layInfo, "Card Title", -1, -1, "Left,FillX")
    txtTitle.SetMargins(0, 0.01, 0, 0.01)
    txtTitle.SetTextColor("#333333")
    txtTitle.SetTextSize(18)
    s = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
    txt = app.AddText(layInfo, s, cardWidth, -1, "Left,,MultiLine")
    txt.SetTextColor("#333333")

    # Create card info display.
    txt = app.AddText(lay, "")
    txt.SetMargins(0, 0.1)

    # Create an elevation seek bar.
    skbElev = app.AddSeekBar(lay, 0.8)
    skbElev.SetMargins(0, 0.1, 0, 0)
    skbElev.SetRange(20)
    skbElev.SetValue(4)
    skbElev.SetOnTouch(skbElev_OnTouch)

    # Create a radius seek bar.
    skbRad = app.AddSeekBar(lay, 0.8)
    skbRad.SetMargins(0, 0.1, 0, 0)
    skbRad.SetRange(20)
    skbRad.SetValue(4)
    skbRad.SetOnTouch(skbRad_OnTouch)

    # Add layout to app and show info.
    app.AddLayout(lay)
    ShowInfo()

def skbElev_OnTouch():
    layCard.SetElevation(skbElev.GetValue())
    ShowInfo()

def skbRad_OnTouch():
    layCard.SetCornerRadius(skbRad.GetValue())
    ShowInfo()

def ShowInfo():
    s = " elevation: {}  radius: {}".format(skbElev.GetValue(), skbRad.GetValue())
    txt.SetText(s)