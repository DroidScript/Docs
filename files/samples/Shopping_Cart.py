```python
cartSize = 0
clonedCard = None
clickedBtn = None
diff = None
isPortrait = native.app.IsPortrait()
width = 0.44 if isPortrait else 0.25

def OnStart():
    global canvas, lay, btnCart, firstCard, diff
    native.app.SetDebugEnabled(False)
    canvas = native.app.CreateLayout("Absolute", "FillXY")
    scroller = native.app.AddScroller(canvas, 1, 1, "ScrollFade")
    lay = native.app.CreateLayout("Linear", "VCenter,FillXY")
    lay.SetSize(1, 1)
    scroller.AddChild(lay)
    btnCart = native.app.AddButton(lay, "[fa-shopping-cart]", -1, -1, "fontawesome")
    btnCart.SetStyle("#395B64", "#395B64", 100, "", 0, 0)
    btnCart.SetSize(150, 150, "px")
    btnCart.SetTextSize(50, "px")
    btnCart.SetMargins(0, 0.02)
    btnCart.Focus()
    for i in range(6):
        if i % (2 if isPortrait else 3) == 0:
            horiz = native.app.AddLayout(lay, "Linear", "Horizontal")
            horiz.SetChildMargins(0.02, 0.02, 0.02, 0.02 if isPortrait else 0.05)
        card = addCard()
        horiz.AddChild(card)
        if i == 0:
            firstCard = horiz
    native.app.AddLayout(canvas)
    diff = firstCard.GetPosition("Screen").top - firstCard.GetPosition().top

def addCard(blockClick=False):
    card = native.app.CreateLayout("Card")
    card.SetBackColor("#E7F6F2")
    card.SetCornerRadius(10)
    layContent = native.app.AddLayout(card, "Linear", "FillXY,Left")
    layContent.SetPadding(0, 0, 0, 0.05)
    native.app.AddImage(layContent, "/Sys/Img/Xylophone.png", width)
    innerCard = native.app.AddLayout(layContent, "Card", "FillXY")
    innerCard.SetBackColor("#E7F6F2")
    innerCard.SetCornerRadius(0)
    innerCard.SetElevation(10)
    layInfo = native.app.AddLayout(innerCard, "Linear", "Left,FillXY")
    title = native.app.AddText(layInfo, "Xylophone", -1, -1, "Bold")
    title.SetPadding(0.02, 0.02, 0.02)
    title.SetTextColor("#395B64")
    text = native.app.AddText(layInfo, "Price: <b>$99.99</b>", -1, -1, "HTML")
    text.SetPadding(0.02, 0.01, 0, 0.08 if isPortrait else 0.15)
    text.SetTextColor("#395B64")
    layContentEnd = native.app.AddLayout(card, "Linear", "FillXY,Bottom")
    btnAdd = native.app.AddButton(layContentEnd, "[fa-shopping-cart]  Add To Chart", -1, -1, "FontAwesome,FillX")
    btnAdd.SetStyle("#2C3333", "#2C3333", 30, "", 0, 0)
    btnAdd.SetMargins(0.02, 0, 0.02, 0.02)
    btnAdd.SetOnTouch(addToCart)
    btnAdd.data.card = card
    return card

def addToCart():
    global clonedCard, clickedBtn
    if clonedCard is not None:
        return
    pos = clickedBtn.data.card.GetPosition("Screen")
    targetPos = btnCart.GetPosition("Screen")
    clickedBtn.SetOnTouch(None)
    clonedCard = native.app.CreateLayout("Card")
    clonedCard.SetPosition(pos.left, pos.top - diff)
    clonedCard.SetSize(pos.width, pos.height)
    clonedCard.SetBackColor("#EEEEEE")
    clonedCard.SetCornerRadius(10)
    clonedCard.SetBackAlpha(0.5)
    clonedCard.SetElevation(0)
    clonedCard.Hide()
    cover = native.app.AddLayout(clonedCard, "Linear", "VCenter,FillXY")
    icon = native.app.AddButton(cover, "[fa-cart-plus]", -1, -1, "FontAwesome")
    icon.SetStyle("#395B64", "#395B64", 100, "", 0, 0)
    icon.SetMargins(0, 10, 0, 0, "px")
    icon.SetSize(150, 150, "px")
    icon.SetTextSize(50, "px")
    canvas.AddChild(clonedCard)
    target = {
        "x": targetPos.left,
        "y": [targetPos.top - targetPos.height / 2],
        "w": targetPos.width,
        "h": targetPos.height
    }
    clickedBtn = clonedCard
    clonedCard.Animate("ZoominEnter", lambda: startTween(target), 250)

def startTween(target):
    global clonedCard, clickedBtn, cartSize
    clonedCard.Tween(target, 250, "Exponential.InOut", 0, False, lambda: finishTween(clickedBtn))
    btnCart.Animate("RubberBand", None, 500)
    cartSize += 1
    btnCart.SetText("[fa-shopping-cart] " + str(cartSize))

def finishTween(button):
    global clonedCard, clickedBtn
    canvas.RemoveChild(clonedCard)
    button.SetOnTouch(addToCart)
    clonedCard = None

```