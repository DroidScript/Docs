from native import app, ui

def OnStart():
    app.Alert("This demo is best viewed on a tablet")

    mainLay = ui.addLayout("main", "linear", "fillxy")
    mainLay.setOnTouch(lambda: ui.ShowPopup("You click the main layout"))

    apb = ui.addAppBar(mainLay, "My App", "menu", 1)
    apb.setOnMenu(openDrawer)
    apb.setOnTouch(lambda: print("Hello world"))

    apbLay = ui.addLayout(None, "Linear", "Horizontal,Right,NoDom,VCenter")
    apbTextField = ui.addTextField(apbLay, "", "outlined,secondary,small", 0.2)
    apbTextField.SetPlaceholder('Search something...')
    apbBadge = ui.addButton(apbLay, "notifications", "icon")
    apbBadge.SetTextColor('#ffffff')
    apbBadge.SetBadge(9, 'primary')
    apbBadge.setOnTouch(lambda: print("badge is click"))

    apbBtn = ui.addButton(apbLay, "account_circle", "Icon")
    apbBtn.SetTextColor('#ffffff')
    apbBtn = ui.addButton(apbLay, "more_vert", "Icon")
    apbBtn.SetTextColor('#ffffff')

    apb.AddLayout(apbLay)

    # Dark/light toggle button
    btnBright = ui.addButton(mainLay, "brightness_5", "icon,primary")
    btnBright.setOnTouch(btnBright_onTouch)

    # Change the theme color of the ui~

    # btnBright.setOnTouch(lambda: ui.SetThemeColor({
    #     "primary": "#009688",
    #     "secondary": "#673ab7"
    # }))

    myTabs = "Layout,Text,Buttons,Forms,Slider,Dropdown,Images,Pickers,Lists,Dialogs,Progress,BottomNavbar,Stepper,Accordion,Chips"
    tab = ui.addTabs(mainLay, myTabs, "center,scrollable", 1, 1)
    tab.SetMargins(0, 0.01, 0, 0)
    tab.SetTextColor('primary')

    # layout lay
    layoutLay = tab.GetLayout('Layout')
    layoutLay.SetOptions('Horizontal')
    layoutLay.SetMargins(0.01, 0.01, 0, 0)
    layoutLay.SetChildMargins(0.02, 0.02, 0, 0)

    lay12 = ui.addLayout(layoutLay, "Linear", "VCenter,ScrollX", 0.5, 0.2)
    lay12.setOnTouch(lambda e: print("Layout is click"))
    lay12.SetBackColor("rgba(0,0,0,0.1)")

    btn12_1 = ui.addButton(lay12, "Stop Propagation")
    btn12_1.setOnTouch(lambda e: print("Button is click"))
    btn12_1.setOnTouchDown(lambda e: print("Button is touch down"))    ...

    # text lay
    textLay = tab.GetLayout('Text')
    textLay.SetOptions('Horizontal')
    textLay.SetMargins(0, 0.01, 0, 0)

    textLay1 = ui.addLayout(textLay, "Linear", "VCenter,Left,ScrollY", 0.48, 0.8)
    # text styling
    h1 = ui.addText(textLay1, "This is heading", "Multiline,H1")
    h2 = ui.addText(textLay1, "This is heading", "Multiline,H2")
    h3 = ui.addText(textLay1, "This is heading", "Multiline,H3")
    h4 = ui.addText(textLay1, "This is heading", "Multiline,H4")
    h5 = ui.addText(textLay1, "This is heading", "Multiline,H5")
    h6 = ui.addText(textLay1, "This is heading", "Multiline,H6")

    # support for text truncation
    _ss = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet vero obcaecati, quasi quisquam nihil soluta minima illum tempore, alias sequi tempora a porro accusamus consequatur magnam dolorum nobis possimus."
    body1 = ui.addText(textLay1, _ss, "Singleline,body1", 0.4)
    body1.SetEllipsize("ellipsis")

    body2 = ui.addText(textLay1, "This is body2 text", "Multiline,body2")
    buttonText = ui.addText(textLay1, "This is button text", "Multiline,button")
    caption = ui.addText(textLay1, "This is caption text", "Multiline,caption")
    overline = ui.addText(textLay1, "This is caption text", "Multiline,overline")
    subtitle1 = ui.addText(textLay1, "This is caption text", "Multiline,subtitle1")
    subtitle2 = ui.addText(textLay1, "This is caption text", "Multiline,subtitle2")

    textLay2 = ui.addLayout(textLay, "Linear", "VCenter,Left", 0.48)
    text1 = ui.addText(textLay2, "This is a sample text designing in EnjineIO", "Multiline")
    text1.SetBackColor('#673ab7')
    text1.SetTextColor('#ffffff')
    text1.SetPadding(16, 16, 16, 16, 'px')
    text1.SetCornerRadius(20)
    text1.SetMargins(0, 0, 0, 0.1)

    text = ui.addText(textLay2, "This is a <strong>strong</strong> html text with <i>italic words</i>.", "Multiline,Html")
    text.SetMargins(0, 0, 0, 0.1)
    text.SetFontFile('fonts/Montserrat.ttf')

    # Change fontFile, textSize and Color
    text2 = ui.addText(textLay2, "This is a new text with setFontFile method. The textSize also is set to 25.", "Multiline")
    text2.SetFontFile('fonts/