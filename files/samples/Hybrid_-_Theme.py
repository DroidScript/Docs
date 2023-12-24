from native import app, ui

#Make this a Hybrid app.
app.cfg.Hybrid

#Called when application starts.
def OnStart():
    #Add main layout and set default child margins.
    layMain = ui.addLayout("main", "linear", "fillxy")
    layMain.setChildMargins(.02, .01, .02, .01)

    #Add a Dark/light theme icon button.
    btnTheme = ui.addButton(layMain, "brightness_5", "icon,primary")
    btnTheme.setOnTouch(btnTheme_onTouch)

    #Add some text.
    txt = ui.addText(layMain, "Light / Dark theme")

    #Add a button with primary color.
    btn = ui.addButton(layMain, "My Button", "primary")

    #Add a SwitchGroup.
    lst = "Bluetooth:bluetooth,Wi-fi:wifi"
    swg = ui.addSwitchGroup(layMain, lst, "secondary", app.platform.mobile * 0.6 or 0.3)
    swg.setValueByIndex(1, True)
    swg.setLabel("Wireless")

    #Add a RadioGroup.
    rag = ui.addRadioGroup(layMain, "Banana,Mango,Orange", "primary")
    rag.setLabel("Flavor")

#Called when button is pressed.
def btnTheme_onTouch():
    if not ui.theme.dark:
        ui.setTheme("dark")
    else:
        ui.setTheme("light")