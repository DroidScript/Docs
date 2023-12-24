from native import app

#This demos creating dialog boxes.  You can add
#any type of control to a dialog box.  Here we
#just adding a list control.

#Called when application is started.
def OnStart():
    #Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    #Create a button to launch the dialog.
    btn = app.CreateButton("Show Dialog Box", 0.6, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    #Add layout to app.
    app.AddLayout(lay)

#Called when user touches our button.
def btn_OnTouch():
    global dlg
    #Create dialog window.
    dlg = app.CreateDialog("Choose a Fruit")
    dlg.SetTitleColor("#00796B")
    dlg.SetBackColor("#ffffff", 5)

    #Create a layout for dialog.
    layDlg = app.CreateLayout("linear", "vertical,fillxy,left")
    layDlg.SetMargins(0,0,0,0.01)
    dlg.AddLayout(layDlg)

    #Create a list control.
    list = "Apples,Oranges,Bananas,Cheese,Milk,Eggs,Flour"
    lst = app.CreateList(list, 0.8, 0.35)
    lst.SetTextColor("#222222")
    lst.SetOnTouch(lst_OnTouch)
    layDlg.AddChild(lst)

    #Show dialog.
    dlg.Show()

#Handle list item selection.
def lst_OnTouch(item):
    #Hide the dialog window.
    dlg.Hide()

    #Show which fruit the user chose.
    app.ShowPopup("You chose " + item, "Short")