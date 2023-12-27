from native import app

txtSize = 32

def OnStart():
	lay = app.CreateLayout("linear", "VCenter,FillXY")

	txt = app.CreateText("[fa-cogs] Settings", 0.8, 0.1, "FontAwesome")
	txt.SetTextSize(txtSize)
	txt.SetOnTouch(OnTouch)
	lay.AddChild(txt)

	txt = app.CreateText("[fa-heart] Like", 0.8, 0.1, "FontAwesome")
	txt.SetMargins(0, 0.01)
	txt.SetOnTouch(OnTouch)
	txt.SetTextSize(txtSize)
	lay.AddChild(txt)

	txt = app.CreateText("\uf04c Pause", 0.8, 0.1, "FontAwesome")
	txt.SetMargins(0, 0.01)
	txt.SetOnTouch(OnTouch)
	txt.SetTextSize(txtSize)
	lay.AddChild(txt)

	text = "<font color=#008800>[fa-check-square-o]</font> Done"
	txt = app.CreateText(text, 0.8, 0.1, "FontAwesome,Html")
	txt.SetMargins(0, 0.01)
	txt.SetOnTouchUp(OnTouchTick)
	txt.SetTextSize(txtSize)
	txt.isChecked = True
	lay.AddChild(txt)

	list = "[fa-file-text-o] Text,[fa-file-photo-o] Photo, [fa-file-audio-o] Sound, [fa-file-video-o] Video"
	lst = app.CreateList(list, 0.8, 0.25, "FontAwesome")
	lst.SetTextSize(25)
	lay.AddChild(lst)

	layHoriz = app.CreateLayout("Linear", "Horizontal")
	layHoriz.SetSize(0.8, 0.15)
	layHoriz.SetMargins(0, 0.05)
	layHoriz.SetPadding(0, 0.02, 0, 0)
	layHoriz.SetBackColor("#cccccc")
	lay.AddChild(layHoriz)

	txt = app.CreateText("[fa-facebook-square]", 0.2, 0.2, "FontAwesome")
	txt.SetTextSize(60)
	txt.SetTextColor("#3B5999")
	layHoriz.AddChild(txt)
	txt = app.CreateText("[fa-google-plus-square]", 0.2, 0.2, "FontAwesome")
	txt.SetTextSize(60)
	txt.SetTextColor("#C54F3F")
	layHoriz.AddChild(txt)
	txt = app.CreateText("[fa-twitter]", 0.2, 0.2, "FontAwesome")
	txt.SetTextSize(60)
	txt.SetTextColor("#4488D5")
	layHoriz.AddChild(txt)

	app.AddLayout(lay)

def OnTouch(ev):
	if ev.action == "Down":
		this.SetTextSize(txtSize - 4)
	elif ev.action == "Up":
		this.SetTextSize(txtSize)

def OnTouchTick(ev):
	if this.isChecked:
		this.SetHtml("<font color=#aa0000>[fa-square-o]</font> Done")
	else:
		this.SetHtml("<font color=#008800>[fa-check-square-o]</font> Done")

	this.isChecked = not this.isChecked