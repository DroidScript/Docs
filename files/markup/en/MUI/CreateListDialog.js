// ------------- HEADER SECTION -------------


/** # CreateListDialog #
 * @abbrev lsd
 * Creates a more customizable list dialog
 * $$ lsd = MUI.CreateListDialog(title, list, color?, bottom?) $$ 
 * @param {str} title 
 * @param {lst} list An array of objects of the form {name: 'string', icon: 'material-icon', color: 'string'}
 * @param {str_col} [color] 
 * @param {bin} [bottom] 
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnSelect ###
 * @brief Calls a function selects an item in the list
 * Calls a function when a user selects an item in the list
 * $$ lsd.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["name","index"],"pTypes":["str","num_int"]}
 */


/** @extern Show */

/** @extern SetHeight */

/** @extern Hide */

/** @extern GetVisibility */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** @extern GetWidth */

/** @extern Gone */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern SetVisibility */

/** @extern SetTextEdit */


// ------------- SAMPLES ------------- 


    
/**
@sample Basic
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW LISTDIALOG", 0.6)
        btn.SetOnTouch(ShowListDialog)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var list = [
        {name: "Choice 1"},
        {name: "Choice 2"},
        {name: "Choice 3"},
        {name: "Choice 4"}
    ]
    lsd = MUI.CreateListDialog("Choices Title", list)
    lsd.SetOnSelect(OnTouch)
}

function ShowListDialog()
{
    lsd.Show()
}

function OnTouch(name)
{
    app.ShowPopup(name)
}
 */
    
            
    
/**
@sample With Icon
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW LISTDIALOG", 0.6)
        btn.SetOnTouch(ShowListDialog)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var list = [
        {name: "Choice 1", icon: "person"},
        {name: "Choice 2", icon: "room"},
        {name: "Choice 3", icon: "account_circle"},
        {name: "Choice 4", icon: "email"}
    ]
    lsd = MUI.CreateListDialog("Choices Title", list)
    lsd.SetOnSelect(OnTouch)
}

function ShowListDialog()
{
    lsd.Show()
}

function OnTouch(name)
{
    app.ShowPopup(name)
}
 */
    
            
    
/**
@sample With Icon & Colors
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW LISTDIALOG", 0.6)
        btn.SetOnTouch(ShowListDialog)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var list = [
        {name: "Choice 1", icon: "person", color: "#f44336"},
        {name: "Choice 2", icon: "room", color: "#9c27b0"},
        {name: "Choice 3", icon: "account_circle", color: "#4285f4"},
        {name: "Choice 4", icon: "email", color: "#009688"}
    ]
    lsd = MUI.CreateListDialog("Choices Title", list)
    lsd.SetOnSelect(OnTouch)
}

function ShowListDialog()
{
    lsd.Show()
}

function OnTouch(name)
{
    app.ShowPopup(name)
}
 */
    
            
    
/**
@sample Dark Bottom
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW LISTDIALOG", 0.6)
        btn.SetOnTouch(ShowListDialog)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var list = [
        {name: "Choice 1", icon: "person", color: "#f44336"},
        {name: "Choice 2", icon: "room", color: "#9c27b0"},
        {name: "Choice 3", icon: "account_circle", color: "#4285f4"},
        {name: "Choice 4", icon: "email", color: "#009688"}
    ]
    lsd = MUI.CreateListDialog("Choices Title", list, null, true)
    lsd.SetOnSelect(OnTouch)
}

function ShowListDialog()
{
    lsd.Show()
}

function OnTouch(name)
{
    app.ShowPopup(name)
}
 */
    
            
    
/**
@sample Python Basic
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    global lsd
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("SHOW LISTDIALOG", 0.6)
    btn.SetOnTouch(ShowListDialog)
    lay.AddChild(btn)

    app.AddLayout(lay)

    list = [
        {"name": "Choice 1"},
        {"name": "Choice 2"},
        {"name": "Choice 3"},
        {"name": "Choice 4"}
    ]
    lsd = MUI.CreateListDialog("Choices Title", list)
    lsd.SetOnSelect(OnTouch)

def ShowListDialog():
    lsd.Show()

def OnTouch(name, index):
    app.ShowPopup(name)
 */
    
            
    
/**
@sample Python With Icon
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    global lsd
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("SHOW LISTDIALOG", 0.6)
    btn.SetOnTouch(ShowListDialog)
    lay.AddChild(btn)

    app.AddLayout(lay)

    list = [
        {"name": "Choice 1", "icon": "person"},
        {"name": "Choice 2", "icon": "room"},
        {"name": "Choice 3", "icon": "account_circle"},
        {"name": "Choice 4", "icon": "email"}
    ]
    lsd = MUI.CreateListDialog("Choices Title", list)
    lsd.SetOnSelect(OnTouch)

def ShowListDialog():
    lsd.Show()

def OnTouch(name, index):
    app.ShowPopup(name)
 */
    
            
    
/**
@sample Python With Icon & Colors
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    global lsd
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("SHOW LISTDIALOG", 0.6)
    btn.SetOnTouch(ShowListDialog)
    lay.AddChild(btn)

    app.AddLayout(lay)

    list = [
        {"name": "Choice 1", "icon": "person", "color": "#f44336"},
        {"name": "Choice 2", "icon": "room", "color": "#9c27b0"},
        {"name": "Choice 3", "icon": "account_circle", "color": "#4285f4"},
        {"name": "Choice 4", "icon": "email", "color": "#009688"}
    ]
    lsd = MUI.CreateListDialog("Choices Title", list)
    lsd.SetOnSelect(OnTouch)

def ShowListDialog():
    lsd.Show()

def OnTouch(name, index):
    app.ShowPopup(name)
 */
    
            
    
/**
@sample Python Dark Bottom
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    global lsd
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    btn = MUI.CreateButtonRaised("SHOW LISTDIALOG", 0.6)
    btn.SetOnTouch(ShowListDialog)
    lay.AddChild(btn)

    app.AddLayout(lay)

    list = [
        {"name": "Choice 1", "icon": "person", "color": "#f44336"},
        {"name": "Choice 2", "icon": "room", "color": "#9c27b0"},
        {"name": "Choice 3", "icon": "account_circle", "color": "#4285f4"},
        {"name": "Choice 4", "icon": "email", "color": "#009688"}
    ]
    lsd = MUI.CreateListDialog("Choices Title", list, None, True)
    lsd.SetOnSelect(OnTouch)

def ShowListDialog():
    lsd.Show()

def OnTouch(name, index):
    app.ShowPopup(name)
 */
    
            