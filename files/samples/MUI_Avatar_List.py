import native.app as app
import native.gfx as gfx
import native.ui as ui
import native.MUI as MUI

cfg.MUI, cfg.Light

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")
    
    data = [
        {"title": "Arya Stark", "body": "Some body text here.", "rightIcon": "more_vert"},
        {"title": "John Snow", "body": "Some body text here.", "image": "/Sys/demos/mui/Img/1.png", "rightIcon": "more_vert"},
        {"title": "Sansa Stark", "body": "Some body text here.", "image": "Img/1.png", "rightIcon": "more_vert"},
        {"title": "Rob Stark", "body": "Some body text here.", "rightIcon": "star"},
    ]
    
    lst = MUI.CreateListModern(data, 1, 0.8, "Avatar,Selectable")
    lst.SetOnSelect(lst_OnSelect)
    lst.SetOnTouch(lst_OnTouch)
    lst.SetControlOnTouch(lambda i: app.ShowPopup(i))
    lay.AddChild(lst)
    
    layHoriz = app.CreateLayout("Linear", "Horizontal")
    lay.AddChild(layHoriz)
    
    layHoriz.SetSize(1, None)
    btnAdd = MUI.CreateButtonRaised("ADD", 0.33)
    btnAdd.SetOnTouch(btnAdd_OnTouch)
    layHoriz.AddChild(btnAdd)
    
    btnShift = MUI.CreateButtonRaised("SHIFT", 0.33)
    btnShift.SetOnTouch(btnShift_OnTouch)
    layHoriz.AddChild(btnShift)
    
    btnPop = MUI.CreateButtonRaised("POP", 0.33)
    btnPop.SetOnTouch(btnPop_OnTouch)
    layHoriz.AddChild(btnPop)
    
    app.AddLayout(lay)

def lst_OnSelect(i, val):
    selected = lst.GetSelectedItems()
    app.ShowPopup(str(len(selected)) + " Selected")

def lst_OnTouch(i, t):
    app.ShowPopup(t)
    lst.SetUnread(i, False)

def btnAdd_OnTouch():
    data = {"title": "Arya Stark", "body": "Some body text here.", "rightIcon": "more_vert"}
    lst.AppendItem(data, True)

def btnShift_OnTouch():
    data = lst.GetList()
    if len(data) > 0:
        lst.ShiftItem()

def btnPop_OnTouch():
    data = lst.GetList()
    if len(data) > 0:
        lst.PopItem()