# Make this a Hybrid app.
import native

# Called when application starts.
def OnStart():
    # Add main layout and set default child margins.
    layMain = native.ui.addLayout("main", "linear", "fillxy")
    layMain.setChildMargins(.02, .01, .02, .01)

    # Add an image to main layout and handle touch events.
    # (local image files can be used too eg. Img/robot.png)
    url = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Hapus_Mango.jpg/220px-Hapus_Mango.jpg"
    img = native.ui.addImage(layMain, url, "", None, 0.3)
    img.setBorderRadius(20, 20, 20, 20, "px")
    img.setOnTouch(img_OnTouch)

# Handle touching the image.
def img_OnTouch():
    native.ui.showPopup("Mango")
    native.app.Vibrate("0,100,30,100,50,300")