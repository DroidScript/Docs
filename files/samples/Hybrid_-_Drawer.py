# cfg.Hybrid

from native import ui

def OnStart():
    layMain = ui.addLayout("main", "linear", "fillxy")
    bar = ui.addAppBar(layMain, "My App", "menu", 1)
    bar.setOnMenu(lambda: drawer.show())
    layDrawer = ui.addLayout(None, "Linear", "VCenter", 1)
    menus1 = [["music_note", "Audio"], ["movie", "Video"]]
    lstMenu1 = ui.addList(layDrawer, menus1, "icon", 1)
    lstMenu1.setOnTouch(lstMenu_OnTouch)
    div = ui.addDivider(layDrawer, "", 1)
    menus2 = [["mail", "All Mail"], ["inbox", "Inbox"]]
    lstMenu2 = ui.addList(layDrawer, menus2, "icon", 1)
    lstMenu2.setOnTouch(lstMenu_OnTouch)
    drawerWidth = platform.mobile ? 0.6 : 0.2
    drawer = ui.createDrawer(layDrawer, "left", drawerWidth)
    drawer.setOnClose(lambda: print("onClose"))

def lstMenu_OnTouch(title, body, icon, index):
    print(title)
    drawer.hide()