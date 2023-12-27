from native import app

'''
 This demonstrates a very basic app launcher (home screen).
 You can set this app as your home screen by adding the
 'homeScreen=true' option to your build.json file.
'''

# Called when application is started.
def OnStart():
    global lay, scroller
    # Lock screen orientation to Portrait.
    app.SetOrientation("Portrait")

    # Create the main layout with background image.
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetBackground("/res/drawable/pattern_carbon", "repeat")

    # Create a full screen scroller.
    scroller = app.CreateScroller(1.0, 1.0)
    lay.AddChild(scroller)

    # Display all activity icons.
    DisplayIcons(scroller)

    # Add layout to app.
    app.AddLayout(lay)

# Draw the icons
def DisplayIcons(lay):
    global layIcons, packageName, className, layIcon, label
    app.ShowProgress()

    # Switch off debugging for max speed.
    app.SetDebugEnabled(False)

    # Create a layout to contain icons.
    layIcons = app.CreateLayout("Linear")
    layIcons.SetSize(1, -1)
    lay.AddChild(layIcons)

    # Get a list of launchable app activities.
    list = app.GetActivities()

    # Set icons per row count.
    iconsPerRow = 4
    iconW = 0.6/(iconsPerRow)

    # Create an icon for each activity.
    for i in range(len(list)):
        # Get activity info.
        a = list[i]
        # print( a.label )

        # Create horizontal layout for rows.
        if i % iconsPerRow == 0:
            layIconsHoriz = app.CreateLayout("Linear", "Horizontal")
            layIcons.AddChild(layIconsHoriz)

        # Create layout to wrap icon and text.
        layIcon = app.CreateLayout("Linear", "Vertical")
        layIcon.SetMargins(0.038/iconsPerRow, 0.015, 0.038/iconsPerRow, 0)
        layIconsHoriz.AddChild(layIcon)

        # Load icon image and set touch callbacks.
        imgIcon = app.CreateImage(a.packageName+"/"+a.className, iconW, -1, "Icon")
        imgIcon.SetOnTouchDown(img_OnTouchDown)
        imgIcon.SetOnTouchUp(img_OnTouchUp)
        imgIcon.SetOnLongTouch(img_OnLongTouch)
        layIcon.AddChild(imgIcon)

        # Store activity info and icon layout in image object for convenience.
        imgIcon.label = a.label
        imgIcon.packageName = a.packageName
        imgIcon.className = a.className
        imgIcon.layIcon = layIcon

        # Create text label.
        txtIcon = app.CreateText(a.label, iconW*1.5, -1, "Multiline")
        txtIcon.SetTextSize(14)
        txtIcon.SetTextColor("#ffeeeeee")
        layIcon.AddChild(txtIcon)

    app.SetDebugEnabled(True)
    app.HideProgress()

# Destroy and redraw all icons.
def RedrawIcons():
    scroller.DestroyChild(layIcons)
    DisplayIcons(scroller)

# Handle icon touch down.
def img_OnTouchDown(event):
    # Shrink and fade icon.
    this.Scale(0.95, 0.95)
    this.SetAlpha(0.7)

# Handle icon touch up.
def img_OnTouchUp(event):
    # Restore icon appearance.
    this.Scale(1, 1)
    this.SetAlpha(1)

    # Launch activity.
    action = "android.intent.action.MAIN"
    app.SendIntent(this.packageName, this.className, action)

# Handle icon long touch.
def img_OnLongTouch(src):
    global curIcon
    # Restore icon appearance.
    this.Scale(1, 1)
    this.SetAlpha(1)

    # Store current icon.
    curIcon = this

    # Show options dialog.
    list = "Remove,Uninstall,Info"
    lstOps = app.CreateListDialog("", list, "AutoCancel")
    lstOps.SetOnTouch(lstOps_Select)
    lstOps.Show()

# Called when icon long click option chosen.
def lstOps_Select(item, checked):
    if item == "Remove":
        curIcon.layIcon.SetVisibility("Gone")
    elif item == "Info":
        msg = "Name: " + curIcon.label + "\n\nPackage Name: " + \
            curIcon.packageName + "\n\nClass Name: " + curIcon.className
        app.Alert(msg, "App Info")
    elif item == "Uninstall":
        action = "android.intent.action.DELETE"
        uri = "package:" + curIcon.packageName
        cb = OnResult
        app.SendIntent(None, None, action,
                       None, uri, None, None, "result", cb)

# Handle intent result.
def OnResult(resultCode):
    print(resultCode)

    # Check if app is still installed and remove icon if gone.
    isInstalled = app.IsAppInstalled(curIcon.packageName)
    if not isInstalled:
        curIcon.layIcon.SetVisibility("Gone")