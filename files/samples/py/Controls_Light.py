# cfg.Light

from native import app

# Use light theme.
# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetChildMargins(0, 0.02, 0, 0.02)

    # Add some text.
    txt = app.AddText(lay, "Light Theme")
    txt.SetTextSize(16)

    # Create tabs.
    tabs = app.CreateTabs("CONTROLS,DIALOGS,LISTS", 0.95, 0.8, "VCenter,Fade")
    tabs.SetOnChange(tabs_OnChange)
    tabCtrl = tabs.GetLayout("CONTROLS")
    tabCtrl.SetChildMargins(0, 0.03, 0, 0)
    tabDlg = tabs.GetLayout("DIALOGS")
    tabDlg.SetChildMargins(0, 0.04, 0, 0)
    tabLst = tabs.GetLayout("LISTS")
    lay.AddChild(tabs)

    # --- CONTROLS ---------

    # Add buttons.
    btn = app.AddButton(tabCtrl, "Button")
    tgl = app.AddToggle(tabCtrl, "Toggle")
    tgl = app.AddToggle(tabCtrl, "Toggle", -1,-1, "Vertical")
    swi = app.AddSwitch(tabCtrl, "Switch")
    chk = app.AddCheckBox(tabCtrl, "Check Box")

    # Add a text edit box.
    edt = app.AddTextEdit(tabCtrl, "", 0.6)
    edt.SetHint("text edit")

    # Add some text.
    txt = app.AddText(tabCtrl, "Seek Bar")
    txt.SetMargins(0, 0.02, 0, 0)

    # Add a seek bar.
    skb = app.AddSeekBar(tabCtrl, 0.7)
    skb.SetRange(1.0)
    skb.SetValue(0.5)

    # --- DIALOGS ----------

    # Add a Custom Dialog button.
    btnCust = app.AddButton(tabDlg, "Custom", 0.3)
    btnCust.SetOnTouch(CustomDialog)

    # Add a YesNo Dialog button.
    btn = app.AddButton(tabDlg, "YesNo", 0.3)
    btn.SetOnTouch(YesNoDialog)

    # Add an Alert button.
    btn = app.AddButton(tabDlg, "Alert", 0.3)
    btn.SetOnTouch(AlertDialog)

    # Add a List Dialog button.
    btn = app.AddButton(tabDlg, "List", 0.3)
    btn.SetOnTouch(ListDialog)

    # Add a CheckList Dialog button.
    btn = app.AddButton(tabDlg, "CheckList", 0.3)
    btn.SetOnTouch(CheckListDialog)

    # --- LISTS ------------

    # Add a list box.
    lst = app.AddList(tabLst, "Fred,Bill,Jim,Anne,Jane", 0.6)

    # Add layout to app.
    app.AddLayout(lay)

# Handle tab selection.
def tabs_OnChange(name):
    print("TAB=" + name)

# Show a custom dialog with current theme.
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

# Show a list dialog with current theme.
def ListDialog():
    dlg = app.CreateListDialog("My Title", "Apples,Oranges,Bananas")
    dlg.Show()

# Show a check list dialog with current theme.
def CheckListDialog():
    lst = [{"title": "Sheep", "check": True},
           {"title": "Cows", "check": False},
           {"title": "Pigs", "check": True},
           {"title": "Goats", "check": True}]
    app.ShowCheckList("Select Animals", lst)

# Show an Alert dialog with current theme.
def AlertDialog():
    app.Alert("Hi", "My Title")

# Show a Yes/No dialog with current theme.
def YesNoDialog():
    dlg = app.CreateYesNoDialog("Are you sure?")
    dlg.Show()