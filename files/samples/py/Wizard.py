from native import app

# Called when application is started.
def OnStart():
    global lay
    # Create a theme for all controls.
    CreateTheme()

    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a button to start the wizard.
    btn = app.CreateButton("Wizard", 0.2, 0.15)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    # Add layout to app.
    app.AddLayout(lay)

# Show the wizard.
def btn_OnTouch():
    global wiz
    # Create a wizard dialog.
    wiz = app.CreateWizard("My Wizard", 0.7, 0.7, OnWizard)
    wiz.Show()

# Handle wizard pages.
def OnWizard(lay, page):
    print("Wizard page:" + str(page))

    if page == 0:  # Page zero is for setup.
        # Create text box for user instructions.
        wizTxt = app.CreateText("", -1, -1, "MultiLine")
        wizTxt.SetTextSize(19)
        wizTxt.SetTextColor("#555555")
        lay.AddChild(wizTxt)

        # Create controls for wizard (some can start hidden).
        wizFrm = app.CreateLayout("Frame")
        wizFrm.SetMargins(0, 0.05, 0, 0)
        wizFrm.SetBackground("/res/drawable/picture_frame")
        wizFrm.Gone()
        lay.AddChild(wizFrm)

        wizImg = app.CreateImage("/Sys/Img/Hello.png", 0.1, -1, "button")
        wizImg.SetOnTouchUp(lambda event: app.ShowPopup("Button Pressed"))
        wizFrm.AddChild(wizImg)

        # Create text box for checkered flag icon.
        wizFlag = app.CreateText("[fa-flag-checkered]", -1, -1, "FontAwesome")
        wizFlag.SetMargins(0, 0.05, 0, 0)
        wizFlag.SetTextSize(64)
        wizFlag.Gone()
        lay.AddChild(wizFlag)

    elif page == 1:
        msg = "This is the first page of your wizard"
        wizTxt.SetText(msg)
        wizFrm.Gone()

    elif page == 2:
        msg = "This second page contains an image button\n\nYou can put any controls you like here, including a webview and have as many pages as you like"
        wizTxt.SetText(msg)
        wizFrm.Show()  # Make the image button visible on this page only
        wizFlag.Gone()

    elif page == 3:
        msg = "Wizard complete!"
        wizTxt.SetText(msg)
        wizFrm.Gone()
        wizFlag.Show()
        wiz.Finish()

    elif page == 4:
        wiz.Dismiss()
        app.ShowPopup("Wizard finished")

    elif page < 0:
        app.ShowPopup("Wizard cancelled")

# Create a theme for all controls and dialogs.
def CreateTheme():
    theme = app.CreateTheme("Light")
    theme.AdjustColor(35, 0, -10)
    theme.SetBackColor("#ffffffff")
    theme.SetBtnTextColor("#000000")
    theme.SetButtonOptions("custom")
    theme.SetButtonStyle("#fafafa", "#fafafa", 5, "#999999", 0, 1, "#ff9000")
    theme.SetCheckBoxOptions("dark")
    theme.SetTextEditOptions("underline")
    theme.SetDialogColor("#ffffffff")
    theme.SetDialogBtnColor("#ffeeeeee")
    theme.SetDialogBtnTxtColor("#ff666666")
    theme.SetTitleHeight(42)
    theme.SetTitleColor("#ff888888")
    theme.SetTitleDividerColor("#ff0099CC")
    theme.SetTextColor("#000000")
    app.SetTheme(theme)