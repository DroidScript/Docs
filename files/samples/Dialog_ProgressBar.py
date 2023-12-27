from native import app

# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    # Create a button to start demo.
    btn = app.CreateButton("Start", 0.3, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    # Add layout to app.
    app.AddLayout(lay)

# Called when user touches our button.
def btn_OnTouch():
    app.ShowProgressBar("Processing...", 0)
    setInterval(lambda: Update(10), 1000)
    app.SetInterval(2000, lambda: Update(30))
    app.SetInterval(3000, lambda: Update(40))
    app.SetInterval(4000, lambda: Update(60))
    app.SetInterval(5000, lambda: Update(100))
    app.SetTimeout(6000, lambda: Hide())

# Update the progress bar.
def Update(progress):
    app.UpdateProgressBar(progress)

# Hide the progress bar.
def Hide():
    app.HideProgressBar()