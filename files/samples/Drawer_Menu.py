import native

# Called when application is started.
def OnStart():
    # Lock screen orientation to Portrait.
    native.app.SetOrientation("Portrait")

    # Create the main app layout with objects vertically centered.
    layMain = native.app.CreateLayout("Linear", "VCenter,FillXY")
    layMain.SetBackground("/Res/drawable/android")

    # Create a text label and add it to main layout.
    txt = native.app.CreateText("<-- swipe from left")
    txt.SetTextSize(24, "dip")
    layMain.AddChild(txt)

    # Create a drawer containing a menu list.
    CreateDrawer()

    # Add main layout and drawer to app.
    native.app.AddLayout(layMain)
    native.app.AddDrawer(drawerScroll, "Left", drawerWidth)

# Create the drawer contents.
def CreateDrawer():
    global drawerWidth, drawerScroll
    # Create a layout for the drawer.
    #(Here we also put it inside a scroller to allow for long menus)
    drawerWidth = 0.75
    drawerScroll = native.app.CreateScroller(drawerWidth, -1, "FillY")
    drawerScroll.SetBackColor("White")
    layDrawer = native.app.CreateLayout("Linear", "Left")
    drawerScroll.AddChild(layDrawer)

    # Create layout for top of drawer.
    layDrawerTop = native.app.CreateLayout("Absolute")
    layDrawerTop.SetBackground("/Sys/Img/GreenBack.jpg")
    layDrawerTop.SetSize(drawerWidth, 0.23)
    layDrawer.AddChild(layDrawerTop)

    # Add an icon to top layout.
    img = native.app.CreateImage("/Sys/Img/Icon.png", 0.15)
    img.SetPosition(drawerWidth*0.06, 0.04)
    layDrawerTop.AddChild(img)

    # Add user name to top layout.
    txtUser = native.app.CreateText("Dave Smart", -1, -1, "Bold")
    txtUser.SetPosition(drawerWidth*0.07, 0.155)
    txtUser.SetTextColor("White")
    txtUser.SetTextSize(13.7, "dip")
    layDrawerTop.AddChild(txtUser)

    # Add user email to top layout.
    txtEmail = native.app.CreateText("david@droidscript.org")
    txtEmail.SetPosition(drawerWidth*0.07, 0.185)
    txtEmail.SetTextColor("#bbffffff")
    txtEmail.SetTextSize(14, "dip")
    layDrawerTop.AddChild(txtEmail)

    # Create menu layout.
    layMenu = native.app.CreateLayout("Linear", "Left")
    layDrawer.AddChild(layMenu)

    # Add a list to menu layout (with the menu style option).
    listItems = "Primary::[fa-home],Social::[fa-users],Promotions::[fa-tag]"
    lstMenu1 = native.app.CreateList(listItems, drawerWidth, -1, "Menu,Expand")
    lstMenu1.SetColumnWidths(-1, 0.35, 0.18)
    lstMenu1.SelectItemByIndex(0, True)
    lstMenu1.SetItemByIndex(0, "Primary", 21)
    lstMenu1.SetOnTouch(lstMenu_OnTouch)
    layMenu.AddChild(lstMenu1)

    # Add separator to menu layout.
    sep = native.app.CreateImage(None, drawerWidth, 0.001, "fix", 2, 2)
    sep.SetSize(-1, 1, "px")
    sep.SetColor("#cccccc")
    layMenu.AddChild(sep)

    # Add title between menus.
    txtTitle = native.app.CreateText("All labels", -1, -1, "Left")
    txtTitle.SetTextColor("#666666")
    txtTitle.SetMargins(16, 12, 0, 0, "dip")
    txtTitle.SetTextSize(14, "dip")
    layMenu.AddChild(txtTitle)

    # Add a second list to menu layout.
    listItems = "Starred::[fa-star],Important::[fa-flag],Settings::[fa-cog]"
    lstMenu2 = native.app.CreateList(listItems, drawerWidth, -1, "Menu,Expand")
    lstMenu2.SetColumnWidths(-1, 0.35, 0.18)
    lstMenu2.SetOnTouch(lstMenu_OnTouch)
    layMenu.AddChild(lstMenu2)

# Handle menu item selection.
def lstMenu_OnTouch(title, body, type, index):
    # Close the drawer.
    native.app.CloseDrawer("Left")

    # Highlight the chosen menu item in the appropriate list.
    if lstMenu1 == this:
        lstMenu2.SelectItemByIndex(-1)
    else:
        lstMenu1.SelectItemByIndex(-1)
    this.SelectItemByIndex(index, True)

    native.app.ShowPopup(title)

# Called when a drawer is opened or closed.
def OnDrawer(side, state):
    print(side + " : " + state)

# Called when hardware menu key pressed.
def OnMenu(name):
    native.app.OpenDrawer()