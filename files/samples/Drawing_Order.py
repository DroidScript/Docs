Here is the translated code:

```python
from native import app, gfx, ui, MUI

# Called when application is started.
def OnStart():
    # Create a layout with objects vertically centered.
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    
    # Create an absolute layout so we can position objects.
    layAbs = app.AddLayout(lay, "Absolute")
    
    # Create first image.
    img1 = app.AddImage(layAbs, "/Sys/Img/Droid1.png", 0.3, -1)
    
    # Create second image.
    img2 = app.AddImage(layAbs, "/Sys/Img/Hello.png", 0.3, -1)
    img2.SetPosition(0.1, 0.1)
    
    # Create a button to swap drawing order.
    btn = app.AddButton(lay, "Change Draw Order", 0.3, 0.1)
    btn.SetMargins(0, 0.05, 0, 0)
    btn.SetOnTouch(btn_OnTouch)
    
    # Add layout to app.   
    app.AddLayout(lay)

# Called when user touches our button.
def btn_OnTouch():
    # Get drawing order of image1.
    order = layAbs.GetChildOrder(img1)

    # Bring one of the images to the front.
    if order == 0:
        layAbs.ChildToFront(img1)
    else:
        layAbs.ChildToFront(img2)
```

Note that the original code did not declare the `layAbs` variable. I assumed it should be declared as a global variable outside the `OnStart()` function.