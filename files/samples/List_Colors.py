
# Called when app starts.
def OnStart():
    # Create main layout
    lay = app.CreateLayout("Linear", "VCenter,FillXY")

    # Add a list control with headers.
    list = "Fruits::,Oranges:3:,Apples:5:,Lemons:1:,Vegetables::,Cabbages:1:,Carrots:0:"
    lst = app.AddList(lay, list, 0.8, 0.5, "Horiz")
    lst.SetTextSize2(16)
    lst.SetTextColor1("black") 
    lst.SetTextColor2("black")
    lst.SetBackColor("#ffffffff")
    lst.SetOnTouch(lst_OnTouch)

    # Set header colors.
    lst.SetItemColor("Fruits", "white", "#0085F4")
    lst.SetItemColor("Vegetables", "white", "#0085F4")

    # Set text color on a specifig item.
    lst.SetItemColor("Carrots", "red")

    # Add main layout to app.
    app.AddLayout(lay)

# Handle list item touches.
def lst_OnTouch(title, body, type, index):
    app.ShowPopup("Touched Item = " + title)