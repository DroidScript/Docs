Here is the translated code:

```python
from native import app, ui

# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    lay.SetChildMargins(0.02, 0.02, 0.02, 0.02)

    # Create some text.
    txt = app.AddText(lay, "Text")
    txt.SetTextSize(22)

    # Create an image with width of 0.1 x screen width.
    img = app.AddImage(lay, "/Sys/Img/Icon.png", 0.1)
    img.SetOnTouchDown(img_OnTouchDown)

    # Create a button.
    btn = app.AddButton(lay, "Button")
    btn.SetOnTouch(btn_OnTouch)

    # Create a toggle button.
    tgl = app.AddToggle(lay, "Toggle Button")
    tgl.SetOnTouch(tgl_OnTouch)

    # Create a check box.
    chk = app.AddCheckBox(lay, "Check Box")
    chk.SetOnTouch(chk_OnTouch)

    # Create spinner.
    spin = app.AddSpinner(lay, "Spinner,A,B,C")
    spin.SetOnTouch(spin_OnChange)

    # Create a text edit box.
    edt = app.AddTextEdit(lay, "Text Edit", 0.6)

    # Create a list box.
    lst = app.AddList(lay, "Fred,Bill,Jim", 0.6, 0.2)
    lst.SetOnTouch(lst_OnTouch)
    lst.SetOnLongTouch(lst_OnLongTouch)

    # Create a seek bar.
    skb = app.AddSeekBar(lay, 0.8)
    skb.SetOnTouch(skb_OnTouch)
    skb.SetRange(1.0)
    skb.SetValue(0.5)

    # Add layout to app.
    app.AddLayout(lay)

# Handle when the user touches the image.
def img_OnTouchDown(ev):
    # Display the x y posn within image.
    x = ev.x[0]
    y = ev.y[0]
    app.ShowPopup("Image: " + str(x) + ", " + str(y))

# Called when user touches our button.
def btn_OnTouch():
    app.ShowPopup("Button pressed")

# Called when user touches check box.
def chk_OnTouch(isChecked):
    app.ShowPopup("Checked = " + str(isChecked))

# Called when user touches our toggle button.
def tgl_OnTouch(isChecked):
    app.ShowPopup("Checked = " + str(isChecked))

# Called when user changes the selection.
def spin_OnChange(item):
    app.ShowPopup("Item = " + item)

# Called when user touches a list item.
def lst_OnTouch(item):
    app.ShowPopup("Item = " + item)

# Called when user long-touches a list item.
def lst_OnLongTouch(item):
    app.ShowPopup("Long Touch = " + item)

# Called when seek bar is touched.
def skb_OnTouch(value):
    app.ShowPopup("Value = " + str(value))
```