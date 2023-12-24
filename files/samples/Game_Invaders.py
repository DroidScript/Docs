from random import random
from time import sleep

level=1
clear=False
gameOver=False
missileFlying=False
explodeFrame=1
xInv=0.4
yInv=0.02
wInv=0.15
hInv=0.08
dirInv=1
xDef=0.4
yDef=0.8
dirDef=1
xDefLast=0
xMis=0
yMis=0
wMis=0.05
hMis=0.03

def OnStart():
  app.SetOrientation("Portrait")
  
  layBack = app.CreateLayout("Linear", "FillXY")
  imgBack = app.CreateImage("/Sys/Img/BlackBack.jpg",1.0,1.0)
  imgBack.SetOnTouchDown(imgBack_OnTouchDown)
  layBack.AddChild(imgBack)
  
  lay = app.CreateLayout("Absolute", "FillXY,TouchThrough")
  
  txt = app.CreateText("Invaders",1,0.1,"bold")
  txt.SetPosition(0,0.4)
  txt.SetTextSize(48)
  txt.SetTextColor("#ffBEDF51")
  lay.AddChild(txt)
  
  imgInvader = app.CreateImage("/Sys/Img/Icon.png",wInv)
  imgInvader.SetPosition(xInv,yInv)
  lay.AddChild(imgInvader)
  
  imgDefender = app.CreateImage("/Sys/Img/Hello.png",0.15)
  imgDefender.SetPosition(xDef,yDef)
  lay.AddChild(imgDefender)
  
  imgMissile = app.CreateImage("/Sys/Img/Hello.png",wMis)
  imgMissile.SetVisibility("Hide")
  lay.AddChild(imgMissile)
  
  imgExplode = app.CreateImage("/Sys/Img/Explode1.png",wInv*2)
  imgExplode.SetVisibility("Hide")
  lay.AddChild(imgExplode)
  
  app.AddLayout(layBack)
  app.AddLayout(lay)
  
  synthInv = app.CreateSynth("VCA,VCF")
  synthInv.SetWaveShape("Saw")
  synthInv.SetVca(200,100,0.25,1000)
  
  synthDef = app.CreateSynth("VCA,VCF")
  synthDef.SetWaveShape("White")
  synthDef.SetVca(1,900,0,0)
  synthDef.SetVcf(10,500,0,0,1000,0.85,2.0)
  
  synthExp = app.CreateSynth("VCA,VCF")
  synthExp.SetWaveShape("White")
  synthExp.SetVca(1,1,0.8,800)
  synthExp.SetVcf(1,1,0,400,1000,0.85,2.0)
  
  synthEnd = app.CreateSynth("VCA,VCF")
  synthEnd.SetWaveShape("Saw")
  synthEnd.SetVca(10,400,0.8,100)
  synthEnd.SetVcf(10,400,0.8,100,1000,0.85,2.0)
  
  orient = app.CreateSensor("Orientation")
  orient.Start()
  
  setTimeout(ClearMessage,1000)
  setTimeout(UpdateInvader,1000)
  setTimeout(UpdateDefender,100)

def UpdateInvader():
  if clear or gameOver:
    return
  moveDown = False
  if xInv > 0.8:
    dirInv = -1
    moveDown=True
  if xInv < 0.05:
    dirInv = 1
    moveDown=True
  xInv = xInv + 0.05 * dirInv
  if moveDown:
    yInv = yInv + 0.1
  imgInvader.SetPosition(xInv,yInv)
  
  synthInv.PlayTone(60,1000)
  
  speed = 400 - level * 40
  if speed < 50:
    speed = 50
  val = random() * (30 - level)
  if val < 1.0:
    dirInv = -dirInv
  if yInv > 0.8:
    GameOver()
  setTimeout(UpdateInvader,speed)

def UpdateDefender():
  roll = orient.GetRoll()
  if abs(roll) > 5:
    if roll > 0:
      xDef += 0.05
    else:
      xDef -= 0.05
    if xDef < 0.05:
      xDef = 0.05
    elif xDef > 0.8:
      xDef = 0.8
    if xDef != xDefLast:
      imgDefender.SetPosition(xDef,yDef)
    xDefLast = xDef
  setTimeout(UpdateDefender,100)

def imgBack_OnTouchDown():
  global missileFlying, clear, gameOver
  if not gameOver:
    if missileFlying or clear:
      return
  else:
    if resetEnabled:
      Reset()
      return
  synthDef.PlayTone(1000,600)
  xMis = xDef+0.05
  yMis = yDef-0.05
  imgMissile.SetPosition(xMis,yMis)
  imgMissile.SetVisibility("Show")
  missileFlying = True
  setTimeout(UpdateMissile,100)

def UpdateMissile():
  global missileFlying
  yMis -= 0.02
  imgMissile.SetPosition(xMis,yMis)
  yCenterInv = (yInv+hInv)/2
  xCenterInv = (xInv+wInv)/2
  yCenterMis = (yMis+hMis)/2
  xCenterMis = (xMis+wMis)/2
  if abs(yCenterInv-yCenterMis) < 0.03 and abs(xCenterInv-xCenterMis) < 0.03:
    imgInvader.SetVisibility("Hide")
    imgMissile.SetVisibility("Hide")
    clear = True
    Explode()
    synthExp.PlayTone(100,1000)
    setTimeout(NextLevel, ...