from native import app

def OnStart():
    global gal
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    gal = Gallery(lay, "/sdcard/Inspector", 1, 1)

    app.AddLayout(lay)

    app.EnableBackKey(False)

def OnBack():
    if gal.IsViewerOpen():
        gal.CloseViewer()
    else:
        app.Exit()

def OnConfig():
    gal.Load()

class Gallery:

    def __init__(lay, folder, width, height):
        lay = lay
        folder = folder
        width = width
        height = height

        layFrame = None

        def img_OnLoad(img):
            img.Save(img.thumbFile)

        def img_OnTouchUp(ev):
            layView.SetBackColor("#ff000000")
            imgView = app.CreateImage(ev.source.fname, 1.0, -1)
            layView.AddChild(imgView)

        Load()

    def Load():
        if layFrame:
            lay.DestroyChild(layFrame)

        app.MakeFolder(folder + "/.thumbs")

        list = app.ListFolder(folder, ".jpg")

        orient = app.GetOrientation()
        xmarg = width / 100
        ymarg = height / 150
        picsPerRow = 2
        w = width / 2 - xmarg * 2
        h = height / 5 - ymarg * 2

        if orient == "Landscape":
            xmarg = width / 150
            ymarg = height / 100
            picsPerRow = 4
            w = width / 4 - xmarg * 2
            h = height / 3 - ymarg * 2

        layFrame = app.CreateLayout("Frame", 1.0, 1.0)
        lay.AddChild(layFrame)

        scroll = app.CreateScroller(width, height, "")
        layFrame.AddChild(scroll)

        layView = app.CreateLayout("Linear", "VCenter")
        layView.SetSize(1, 1)
        layFrame.AddChild(layView)

        layPics = app.CreateLayout("Linear", "Left")
        scroll.AddChild(layPics)

        for i in range(len(list)):
            if i == 0 or i % picsPerRow == 0:
                layRow = app.CreateLayout("Linear", "Horizontal")
                layPics.AddChild(layRow)

            if list[i][:1] != "~":
                file = folder + "/" + list[i]
                thumbFile = folder + "/.thumbs/" + list[i]
                thumbFile = thumbFile.replace(".png", ".jpg")

                img = None
                if app.FileExists(thumbFile):
                    img = app.CreateImage(thumbFile, w, h, "Resize,Async")
                else:
                    img = app.CreateImage(file, w, h, "Resize,Async")
                    img.SetOnLoad(img_OnLoad)
                img.SetMargins(xmarg, ymarg, xmarg, ymarg)
                img.SetOnTouchUp(img_OnTouchUp)
                layRow.AddChild(img)

                img.fname = file
                img.thumbFile = thumbFile

    def IsViewerOpen():
        return hasattr('imgView')

    def CloseViewer():
        if hasattr('imgView'):
            layView.DestroyChild(imgView)
            imgView = None
            layView.SetBackColor("#00000000")

lay = app.CreateLayout("linear", "VCenter,FillXY")
gal = Gallery(lay, "/sdcard/Inspector", 1, 1)
app.AddLayout(lay)
app.EnableBackKey(False)
```