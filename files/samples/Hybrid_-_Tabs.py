# cfg.Hybrid

from native import ui

# Make this a Hybrid app
= True

# Called when application starts
def OnStart():
    # Add main layout
    layMain = ui.addLayout("main", "linear", "fillxy")

    # Add tab control
    tab = ui.addTabs(layMain, "Tab1,Tab2,Tab3", "", 1, 1)
    tab.setMargins(0, 0.01, 0, 0)

    # Get first tab's layout and set default margins for its children
    layTab1 = tab.getLayout("Tab1")
    layTab1.setChildMargins(0.02, 0.02, 0.02, 0.02)

    # Add a button to the first tab with primary color
    btnHello = ui.addButton(layTab1, "My Button", "primary")
    btnHello.setOnTouch(btnHello_onTouch)

# Called when button is pressed
def btnHello_onTouch():
    ui.showPopup("Hello World")