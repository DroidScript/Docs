from native import app

lay = None
themeName = "None"

def OnStart():
    CreateLayout()

def CreateLayout():
    if lay:
        app.DestroyLayout(lay)

    lay = app.CreateLayout("linear", "VCenter,FillXY")

    txt = app.CreateText("Theme")
    txt.SetTextSize(16)
    lay.AddChild(txt)

    spin = app.CreateSpinner("None,Dark,Light,Carbon,Material", 0.3)
    spin.SetText(themeName)
    spin.SetOnTouch(spin_OnChange)
    lay.AddChild(spin)

    txt = app.CreateText("Dialogs")
    txt.SetMargins(0, 0.04, 0, 0.02)
    lay.AddChild(txt)

    layHoriz = app.CreateLayout("Linear", "Horizontal")
    lay.AddChild(layHoriz)

    btnCust = app.CreateButton("Custom")
    btnCust.SetOnTouch(CustomDialog)
    layHoriz.AddChild(btnCust)

    btn = app.CreateButton("List")
    btn.SetOnTouch(ListDialog)
    layHoriz.AddChild(btn)

    btn = app.CreateButton("YesNo")
    btn.SetOnTouch(YesNoDialog)
    layHoriz.AddChild(btn)

    btn = app.CreateButton("Alert")
    btn.SetOnTouch(AlertDialog)
    layHoriz.AddChild(btn)

    tgl = app.CreateToggle("Toggle Button")
    tgl.SetMargins(0, 0.02, 0, 0)
    lay.AddChild(tgl)

    chk = app.CreateCheckBox("Check Box")
    chk.SetMargins(0, 0.02, 0, 0)
    lay.AddChild(chk)

    edt = app.CreateTextEdit("Text Edit", 0.6, 0.1)
    edt.SetMargins(0, 0.02, 0, 0)
    lay.AddChild(edt)

    lst = app.CreateList("Fred,Bill,Jim", 0.6, 0.2)
    lst.SetMargins(0, 0.03, 0, 0)
    lay.AddChild(lst)

    skb = app.CreateSeekBar(0.8)
    skb.SetRange(1.0)
    skb.SetValue(0.5)
    lay.AddChild(skb)

    app.AddLayout(lay)

def spin_OnChange(item):
    themeName = item

    if themeName == "Dark":
        theme = app.CreateTheme("Dark")
        app.SetTheme(theme)
    elif themeName == "Light":
        theme = app.CreateTheme("Light")
        app.SetTheme(theme)
    elif themeName == "Carbon":
        theme = app.CreateTheme("Dark")
        theme.AdjustColor(-30, 0, 0)
        theme.SetBackground("/Res/drawable/pattern_carbon", "repeat")
        theme.SetButtonOptions("custom")
        theme.SetButtonStyle("#353535","#161616",2,"#222222",1,1,"#00E1B6")
        theme.SetBtnTextColor("#bbffffff")
        theme.SetBackColor("#99000000")
        theme.SetDialogBtnColor("#ff222222")
        theme.SetDialogBtnTxtColor("#ffffff")
        theme.SetTitleHeight(42)
        app.SetTheme(theme)
    elif themeName == "Material":
        theme = app.CreateTheme("Light")
        theme.AdjustColor(35, 0, -10)
        theme.SetBackColor("#ffffffff")
        theme.SetBtnTextColor("#ffffffff")
        theme.SetButtonOptions("custom")
        theme.SetButtonStyle("#4285F4","#4285F4",2,"#999999",0,1,"#ff9000")
        theme.SetCheckBoxOptions("dark")
        theme.SetTextEditOptions("underline")
        theme.SetDialogColor("#ffffffff")
        theme.SetDialogBtnColor("#ffeeeeee")
        theme.SetDialogBtnTxtColor("#ff666666")
        theme.SetTitleHeight(42)
        theme.SetTitleColor("#ff888888")
        theme.SetTitleDividerColor("#ff0099CC")
        theme.SetTextColor("#ff666666")
        app.SetTheme(theme)
    elif themeName == "None":
        theme = app.CreateTheme("Default")
        app.SetTheme(theme)

    CreateLayout()

def CustomDialog():
    dlg = app.CreateDialog("Custom Dialog")
    layDlg = app.CreateLayout("linear", "vertical,fillxy,center")
    dlg.AddLayout(layDlg)
    txt = app.CreateText("Hello World", 0.6)
    txt.SetMargins(0, 0.02, 0, 0.02)
    layDlg.AddChild(txt)
    lst = app.CreateList("Fred,Bill,Jim", 0.8)
    lst.SetMargins(0, 0.02, 0, 0.02)
    layDlg.AddChild(lst)
    edt = app.CreateTextEdit("Hello World", 0.6)
    edt.SetMargins(0, 0.02, 0, 0.04)
    layDlg.AddChild(edt)
    dlg.Show()

def ListDialog():
    dlg = app.CreateListDialog("My Title", "Apples,Oranges,Bananas")
    dlg.Show()

def AlertDialog():
    app.Alert("Hi", "My Title")

def YesNoDialog():
    dlg = app.CreateYesNoDialog("Are you sure?")
    dlg.Show()