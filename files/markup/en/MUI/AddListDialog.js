// ------------- HEADER SECTION -------------


/** # AddListDialog #
 * @abbrev lsd
 * Adds a more customizable list dialog or checklist dialog. See @CreateListDialog and @CreateCheckList for a full documentation on each type.
 * $$ lsd = MUI.AddListDialog(parent, title, list, color?, options?) $$ 
 * @param {dso} parent @../app/CreateTextEdit
 * @param {str} title 
 * @param {lst} list An array of objects
 * @param {str_col} [color] 
 * @param {str_com} [options] CheckList|ListDialog|Bottom
 * @returns obj
*/




// ------------- SAMPLES ------------- 


    
/**
@sample AddPicker
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    	
    tlsd = MUI.AddTextEdit(lay, 0.7, "outline", "Enter time", true)
    tlsd.SetOnTouch( ShowListDialog )

    tckl = MUI.AddTextEdit(lay, 0.7, "outline", "Enter date", true)
    tckl.SetOnTouch( ShowChecklist )

    // using buttons

    btn1 = MUI.AddButton(lay, "Show ListDialog", null, null, "Outline")
    btn1.SetOnTouch( ShowListDialog )

    btn2 = MUI.AddButton(lay, "Show Checklist", null, null, "Outline")
    btn2.SetOnTouch( ShowChecklist )

    app.AddLayout( lay )

    lst = [
        {name: "Choice 1"},
        {name: "Choice 2"},
        {name: "Choice 3"},
        {name: "Choice 4"}
    ]
    lsd = MUI.AddListDialog(tlsd, "List Title", lst, null, "ListDialog")
    ckl = MUI.AddListDialog(tckl, "List Title", lst, "#673ab7", "checklist")
}

function ShowListDialog()
{
    lsd.Show()
}

function ShowChecklist()
{
    ckl.Show()
}
 */
    
            
    
/**
@sample Python AddPicker
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    global lsd, ckl
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    tlsd = MUI.AddTextEdit(lay, 0.7, "outline", "Enter time", True)
    tlsd.SetOnTouch(ShowListDialog)

    tckl = MUI.AddTextEdit(lay, 0.7, "outline", "Enter date", True)
    tckl.SetOnTouch(ShowChecklist)

    # using buttons

    btn1 = MUI.AddButton(lay, "Show ListDialog", None, None, "Outline")
    btn1.SetOnTouch(ShowListDialog)

    btn2 = MUI.AddButton(lay, "Show Checklist", None, None, "Outline")
    btn2.SetOnTouch(ShowChecklist)

    app.AddLayout(lay)

    lst = [
        {"name": "Choice 1"},
        {"name": "Choice 2"},
        {"name": "Choice 3"},
        {"name": "Choice 4"}
    ]
    lsd = MUI.AddListDialog(tlsd, "List Title", lst, None, "ListDialog")
    ckl = MUI.AddListDialog(tckl, "List Title", lst, "#673ab7", "checklist")

def ShowListDialog():
    lsd.Show()

def ShowChecklist():
    ckl.Show()
 */
    
            