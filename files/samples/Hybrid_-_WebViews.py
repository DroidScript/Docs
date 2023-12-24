from native import ui

# Called when application starts.
def OnStart():
    # Add main layout and set default child margins.
    layMain = ui.addLayout("main", "linear", "fillxy")
    layMain.setChildMargins(0.02, 0.01, 0.02, 0.01)

    # Add webview.
    web = ui.addWebView(layMain, "https://droidscript.org", "", 0.95, 0.9)

    # Add a navigation button.
    btnNavigate = ui.addButton(layMain, "Load News", "primary")
    btnNavigate.setOnTouch(lambda: web.loadUrl("https://droidscript.org/news-2"))