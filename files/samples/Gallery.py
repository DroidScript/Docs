from native import app

def OnStart():
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

    def __init__(self, lay, folder, width, height):
        self.lay = lay
        self.folder = folder
        self.width = width
        self.height = height

        self.layFrame = None

        def img_OnLoad(img):
            img.Save(img.thumbFile)

        def img_OnTouchUp(ev):
            layView.SetBackColor("#ff000000")
            self.imgView = app.CreateImage(ev.source.fname, 1.0, -1)
            layView.AddChild(self.imgView)

        self.Load()

    def Load(self):
        if self.layFrame:
            lay.DestroyChild(self.layFrame)

        app.MakeFolder(self.folder + "/.thumbs")

        list = app.ListFolder(self.folder, ".jpg")

        orient = app.GetOrientation()
        xmarg = self.width / 100
        ymarg = self.height / 150
        picsPerRow = 2
        w = self.width / 2 - xmarg * 2
        h = self.height / 5 - ymarg * 2

        if orient == "Landscape":
            xmarg = self.width / 150
            ymarg = self.height / 100
            picsPerRow = 4
            w = self.width / 4 - xmarg * 2
            h = self.height / 3 - ymarg * 2

        self.layFrame = app.CreateLayout("Frame", 1.0, 1.0)
        lay.AddChild(self.layFrame)

        scroll = app.CreateScroller(self.width, self.height, "")
        self.layFrame.AddChild(scroll)

        layView = app.CreateLayout("Linear", "VCenter")
        layView.SetSize(1, 1)
        self.layFrame.AddChild(layView)

        layPics = app.CreateLayout("Linear", "Left")
        scroll.AddChild(layPics)

        for i in range(len(list)):
            if i == 0 or i % picsPerRow == 0:
                layRow = app.CreateLayout("Linear", "Horizontal")
                layPics.AddChild(layRow)

            if list[i][:1] != "~":
                file = self.folder + "/" + list[i]
                thumbFile = self.folder + "/.thumbs/" + list[i]
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

    def IsViewerOpen(self):
        return hasattr(self, 'imgView')

    def CloseViewer(self):
        if hasattr(self, 'imgView'):
            layView.DestroyChild(self.imgView)
            self.imgView = None
            layView.SetBackColor("#00000000")

lay = app.CreateLayout("linear", "VCenter,FillXY")
gal = Gallery(lay, "/sdcard/Inspector", 1, 1)
app.AddLayout(lay)
app.EnableBackKey(False)
```