// ------------- HEADER SECTION -------------


/** # CreateTabFixed #
 * @abbrev tbf
 * 
 * $$ tbf = MUI.CreateTabFixed(title, width, height, options, color, animation) $$ 
 * @param {str_com} title titles
 * @param {num} width 
 * @param {num} height 
 * @param {str_com} options DS layout options
 * @param {str_col} color 
 * @param {bin} animation 
 * @returns obj
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Creates a simple fixed tab.

A basic tab implementation.

<sample Basic>

To add a sliding animation into the fixed tab, pass a boolean to the **animation** argument

<sample With Slide Animation>

To add a callback when the user selects a tab use the **SetOnSelect** method.

<sample With Callback>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### GetLayout ###
 * Get the corresponding layout of a given name where you can add your controls
 * $$ tbf.GetLayout(name) $$
 * @param {str} name The layout name
 * @returns dso-@../app/CreateLayout
 */


/** ### SetActiveTabByIndex ###
 * Open the a tab by passing an index
 * $$ tbf.SetActiveTabByIndex(index) $$
 * @param {num} index 
 */


/** ### SetOnSelect ###
 * @brief Calls a function when the tab is click.
 * Calls a function when the tab is click.
 * $$ tbf.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["name","index"],"pTypes":["str","num_int"]}
 */


/** @extern Animate */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** ### GetType ###
 * 
 * $$ tbf.GetType() $$
 * @returns str-Tab
 */


/** @extern GetWidth */

/** @extern Gone */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern SetPosition */

/** @extern SetVisibility */

/** @extern Tween */


// ------------- SAMPLES ------------- 


    
/**
@sample Basic
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal, "Light")

    lay = MUI.CreateLayout("Linear", "FillXY")

        tab = MUI.CreateTabFixed("Songs,Albums,Artists", 1, 1, "VCenter,FillXY")

        songsLay = tab.GetLayout("Songs")
        btn = MUI.CreateButtonRaisedO("BUTTON")
        songsLay.AddChild(btn)

        albumsLay = tab.GetLayout("Albums")
        ted = MUI.CreateTextEditFilled(0.75, "", "Text hint", true)
        albumsLay.AddChild(ted)

        artistLay = tab.GetLayout("Artists")
        img = app.CreateImage("/Sys/Img/Droid1.png", 0.3)
        artistLay.AddChild(img)

        lay.AddChild(tab)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample With Slide Animation
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY")

        tab = MUI.CreateTabFixed("Songs,Albums,Artists", 1, 1, "VCenter,FillXY", "#673ab7", true)

        songsLay = tab.GetLayout("Songs")
        btn = MUI.CreateButtonRaisedO("BUTTON")
        songsLay.AddChild(btn)

        albumsLay = tab.GetLayout("Albums")
        ted = MUI.CreateTextEditFilled(0.75, null, "Text hint", true)
        albumsLay.AddChild(ted)

        artistLay = tab.GetLayout("Artists")
        img = app.CreateImage("/Sys/Img/Droid1.png", 0.3)
        artistLay.AddChild(img)

        lay.AddChild(tab)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample With Callback
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal, "Light")

    lay = MUI.CreateLayout("Linear", "FillXY")

        tab = MUI.CreateTabFixed("Songs,Albums,Artists", 1, 1, "VCenter,FillXY", "#673ab7", true)
        tab.SetOnSelect(OnSelect)

        songsLay = tab.GetLayout("Songs")
        btn = MUI.CreateButtonRaisedO("BUTTON")
        songsLay.AddChild(btn)

        albumsLay = tab.GetLayout("Albums")
        ted = MUI.CreateTextEditFilled(0.75, null, "Text hint", true)
        albumsLay.AddChild(ted)

        artistLay = tab.GetLayout("Artists")
        img = app.CreateImage("/Sys/Img/Droid1.png", 0.3)
        artistLay.AddChild(img)

        lay.AddChild(tab)

    app.AddLayout(lay)
}

function OnSelect(name, index)
{
    app.ShowPopup(name+" : "+index)
}
 */
    
            
    
/**
@sample Python No-options
from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = [
        { "title": "Sample Title", "body": "The quick brown fox jumps..."},
        { "title": "Sample Title", "body": "The quick brown fox jumps...", "image": "/Sys/Img/Droid1.png"},
        { "title": "Sample Title", "body": "The quick brown fox jumps...", "image": "/Sys/Img/Droid1.png", "rightIcon": "more_vert"}
    ]

    lsm = MUI.CreateListModern(list)
    lsm.SetOnTouch(OnTouch)
    lay.AddChild(lsm)

    app.AddLayout(lay)

def OnTouch(title, body, index):
    app.ShowPopup(title+" : "+body+" : "+index)
 */
    
            
    
/**
@sample Python With-Color No Options
from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = [
        { "title": "Sample Title", "body": "The quick brown fox jumps...", "rightIcon": "more_vert", "color": "#673ab7"},
        { "title": "Sample Title", "body": "The quick brown fox jumps...", "rightIcon": "more_vert", "color": "#673ab7"},
        { "title": "Sample Title", "body": "The quick brown fox jumps...", "rightIcon": "more_vert", "color": "#673ab7"}
    ]

    lsm = MUI.CreateListModern(list, 0.96)
    lsm.SetOnTouch(OnTouch)
    lay.AddChild(lsm)

    app.AddLayout(lay)

def OnTouch(title, body, index):
    app.ShowPopup(title+" : "+body+" : "+index)
 */
    
            
    
/**
@sample Python Selectable
from native import app

def OnStart():
    global lsm
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = [
        { "title": "Sample Title", "body": "The quick brown fox jumps..."},
        { "title": "Sample Title", "body": "The quick brown fox jumps...", "image": "/Sys/Img/Droid1.png"},
        { "title": "Sample Title", "body": "The quick brown fox jumps...", "image": "/Sys/Img/Droid1.png", "rightIcon": "more_vert"}
    ]

    lsm = MUI.CreateListModern(list, 0.96, None, "Selectable")
    lsm.SetOnTouch(ListOnTouch)
    lay.AddChild(lsm)

    btn = MUI.CreateButtonRound("GET SELECTED ITEMS", 0.6)
    btn.SetMargins(0, 0.075, 0, 0)
    lay.AddChild(btn)
    btn.SetOnTouch(GetSelectedItems)

    app.AddLayout(lay)

    app.ShowPopup("Click the icon/avatar to select")

def ListOnTouch(title, body, index):
    app.ShowPopup("You choose "+title)

def GetSelectedItems():
    items = lsm.GetSelectedItems()
    for i in range(len(items)):
        item = lsm.GetItem(items[i])
        app.Alert(app.JSONstringify(item))
 */
    
            
    
/**
@sample Python CreateListInitialIcon
from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = [
        { "title": "Title 1", "body": "The quick brown fox jumps...", "rightNote": "Aug 5"},
        { "title": "Title 2", "body": "The quick brown fox jumps...", "rightNote": "Aug 6"},
        { "title": "Title 3", "body": "The quick brown fox jumps...", "rightNote": "Aug 7"}
    ]

    lsm = MUI.CreateListModern(list, 1, None, "Initial,RightNote")
    lay.AddChild(lsm)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python CreateListMaterialIcon
from native import app

def OnStart():
    global lsm
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = [
        { "title": "Folder", "body": "The quick brown fox jumps...", "icon": "folder", "rightIcon": "more_vert"},
        { "title": "Favorites", "body": "The quick brown fox jumps...", "icon": "favorite", "rightIcon": "more_vert"},
        { "title": "Music", "body": "The quick brown fox jumps...", "icon": "music_note", "rightIcon": "more_vert"}
    ]

    lsm = MUI.CreateListModern(list, 1, None, "Material,RightNote,Selectable")
    lay.AddChild(lsm)

    btn = MUI.CreateButtonRound("GET SELECTED ITEMS", 0.6)
    btn.SetMargins(0, 0.075, 0, 0)
    lay.AddChild(btn)
    btn.SetOnTouch(GetSelectedItems)

    app.AddLayout(lay)
    app.ShowPopup("Click the icon/avatar to select")

def GetSelectedItems():
    items = lsm.GetSelectedItems()
    for i in range(len(items)):
        item = lsm.GetItem(items[i])
        app.Alert(app.JSONstringify(item))
 */
    
            
    
/**
@sample Python CreateListWithAvatar

 */
    
            