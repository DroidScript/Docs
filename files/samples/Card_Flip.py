Here is the translated code:

```python
import native

isPortrait = native.app.IsPortrait()

width = 0.7 if isPortrait else 0.25
height = 0.7 if isPortrait else 0.7

def OnStart():
    lay = native.app.CreateLayout("linear", "VCenter,FillXY")
    
    front = native.app.CreateLayout("Card")
    front.SetBackColor("#FFFFFF")
    front.SetSize(width, height)
    front.SetCornerRadius(10)
    front.SetElevation(0)
    
    frontContent = native.app.AddLayout(front, "Linear", "VCenter,FillXY")
    native.app.AddImage(frontContent, "/Sys/Img/Hello.png", width / 2, -1, "FillXY")
    
    btnInfo = native.app.AddButton(front, "[fa-info-circle]", -1, -1, "FillX,FontAwesome")
    btnInfo.SetTextSize(26)
    btnInfo.SetTextColor("#212121")
    btnInfo.SetOnTouch(flipCard)
    btnInfo.SetBackAlpha(0.1)
    
    back = native.app.CreateLayout("Card", "TouchSpy")
    back.SetBackColor("#FFFFFF")
    back.SetSize(width, height)
    back.SetCornerRadius(10)
    back.SetElevation(0)
    
    backContent = native.app.AddLayout(back, "Linear", "VCenter,FillXY")
    
    btnReturn = native.app.AddButton(backContent, "[fa-close]", -1, -1, "FillX,FontAwesome")
    btnReturn.SetTextSize(26)
    btnReturn.SetTextColor("#212121")
    btnReturn.SetOnTouch(flipCard)
    btnReturn.SetBackAlpha(0.1)
    
    scroller = native.app.AddScroller(backContent, -1, -1, "FillXY")
    text = native.app.CreateText("Lorem ipsum dolor sit amet " * 40, width, -1, "Left,Multiline")
    text.SetPadding(0.04, 0.01, 0.04, 0.02)
    text.SetTextColor("#212121")
    text.SetTextSize(16)
    scroller.AddChild(text)
    
    flipLayout = createFlipLayout(front, back)
    lay.AddChild(flipLayout)
    
    native.app.AddLayout(lay)
    native.app.SetDebugEnabled(False)

def flipCard():
    flipLayout.Flip()

def createFlipLayout(front, back):
    visibleCtrl = front
    invisibleCtrl = back
    isFlipping = False
    
    frame = native.app.CreateLayout("Frame")
    frame.AddChild(back)
    frame.AddChild(front)
    
    invisibleCtrl.SetScale(0, 1)
    
    def onAnimationEnd():
        nonlocal visibleCtrl, invisibleCtrl, isFlipping
        _visible = visibleCtrl
        visibleCtrl = invisibleCtrl
        invisibleCtrl = _visible
        isFlipping = False
    
    def flip():
        nonlocal isFlipping
        if isFlipping:
            return
        isFlipping = True
        visibleCtrl.Tween({"sw": 0}, 250, "Linear.None", 0, False, lambda: (
            frame.ChildToFront(invisibleCtrl),
            invisibleCtrl.Animate("FlipFromHorizontal", onAnimationEnd, 250)
        ))
    
    frame.Flip = flip
    return frame
```