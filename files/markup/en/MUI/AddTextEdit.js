// ------------- HEADER SECTION ------------- 


/** # AddTextEdit #
 * @abbrev ted
 * 
 * $$ ted = MUI.AddTextEdit(parent, width, options, p1, p2, p3, p4, p5) $$ 
 * @param {obj} parent MUI Layout or DS Layout control
 * @param {num} width 
 * @param {str} options outline|filled|unique|search|active|icon and for icon can be  left|right
 * @param {str} p1 See corresponding MUI TextEdit
 * @param {str} p2 See corresponding MUI TextEdit
 * @param {str} p3 See corresponding MUI TextEdit
 * @param {str} p4 See corresponding MUI TextEdit
 * @param {str} p5 See corresponding MUI TextEdit
 * @returns obj
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Adds a TextEdit control to a given layout. See @CreateTextEditFilled, @CreateTextEditFilledA, @CreateTextEditOutline, @CreateTextEditOutlineA, @CreateTEFilledIconLeft, @CreateTEFilledIconRight, @CreateTEOutlineIconLeft, @CreateTEOutlineIconRight, @CreateTESearchElegant, @CreateTESearchUnique, @CreateTextEditSearch and @CreateTextEditUnique for full documentation on each type of MUI TextEdit. For p1, p2, p3, p4 and p5 parameters, these are the params after the options. You can refer to the corresponding Create*** method to see what this parameters are. Example for @CreateTextEditFilled 'p1' is 'hint', 'p2' is 'label' and 'p3' is 'color'. For @CreateTextEditOutline 'p1' is 'hint', 'p2' is 'label', 'p3' is 'color' and 'p4' is 'backColor'.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample AddTextEdit
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
        ted1 = MUI.AddTextEdit(lay, 0.8, "filled", "Enter Name", true)
        ted1 = MUI.AddTextEdit(lay, 0.8, "filled,active,password", "Enter password", true)
        ted1 = MUI.AddTextEdit(lay, 0.8, "outline,number", "Enter Number", true)
        ted1 = MUI.AddTextEdit(lay, 0.8, "outline,active", "Enter PIN", true)
        ted1 = MUI.AddTextEdit(lay, 0.8, "elegant", "Enter name")
        ted1 = MUI.AddTextEdit(lay, 0.8, "outline,icon,left", "person", "Enter name", true)
        ted1 = MUI.AddTextEdit(lay, 0.8, "outline,icon,right", "password", "Enter password", true)
    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python AddTextEdit
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    ted1 = MUI.AddTextEdit(lay, 0.8, "filled", "Enter Name", True)
    ted2 = MUI.AddTextEdit(lay, 0.8, "filled,active,password", "Enter password", True)
    ted3 = MUI.AddTextEdit(lay, 0.8, "outline,number", "Enter Number", True)
    ted4 = MUI.AddTextEdit(lay, 0.8, "outline,active", "Enter PIN", True)
    ted5 = MUI.AddTextEdit(lay, 0.8, "elegant", "Enter name")
    ted6 = MUI.AddTextEdit(lay, 0.8, "outline,icon,left", "person", "Enter name", True)
    ted7 = MUI.AddTextEdit(lay, 0.8, "outline,icon,right", "password", "Enter password", True)

    app.AddLayout(lay)
 */
    
            