from native import app, gfx

cfg.Game
cfg.Landscape

bunnys = []
gravity = 1/gfx.height
startBunnyCount = 3
amount = 10
isAdding = False

def OnLoad():
    gfx.SetBackColor(0xffffff)
    
    wabbitTexture = gfx.CreateTexture("/Sys/Img/Bunny.png")
    
    gfx.SetOnTouchDown(lambda ev: isAdding = True)
    gfx.SetOnTouchUp(lambda ev: isAdding = False)

def OnReady():
    for i in range(startBunnyCount):
        AddBunny()
    
    gfx.Play()

def AddBunny():
    bunny = gfx.CreateBasicSprite(wabbitTexture)
    bunny.vx = (Math.random()*10) / gfx.width
    bunny.vy = ((Math.random()*10)-5) / gfx.height
    
    bunny.x = bunny.y = 0
    bunnys.append(bunny)
    
    gfx.AddSprite(bunny)

def OnAnimate():
    if isAdding:
        for i in range(amount):
            AddBunny()
    
    for i in range(len(bunnys)):
        bunny = bunnys[i]
        bunny.x += bunny.vx
        bunny.y += bunny.vy
        bunny.vy += gravity
        
        if bunny.x > 1:
            bunny.vx *= -1
            bunny.x = 1
        elif bunny.x < 0:
            bunny.vx *= -1
            bunny.x = 0
        
        if bunny.y > 1:
            bunny.vy *= -0.85
            bunny.y = 1
            if Math.random() > 0.5:
                bunny.vy -= Math.random() * 6 / gfx.height
        elif bunny.y < 0:
            bunny.vy = 0
            bunny.y = 0