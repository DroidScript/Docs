// ------------- HEADER SECTION ------------- 


/** # AddButton #
 * @abbrev btn

 * Adds a MUI button to a given layout. See @CreateButtonElegant, @CreateButtonFlat, @CreateButtonRaised, @CreateButtonRaisedO, @CreateButtonRound, and @CreateButtonRoundO for full documentation
 * $$ btn = MUI.AddButton(parent, text, width, height, options) $$ 
 * @param {obj} parent MUI Layout or DS Layout control
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options raised|raisedo|roundo|round|elegant|outlined|contained|text|flat
 * @returns obj
*/




// ------------- SAMPLES ------------- 


    
/**
@sample AddButton
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    	
    	btn1 = MUI.AddButton(lay, "Button 1", 0.35, null, "raised")
        btn2 = MUI.AddButton(lay, "Button 2", 0.35, null, "raisedo")
        btn3 = MUI.AddButton(lay, "Button 3", 0.35, null, "round")
        btn4 = MUI.AddButton(lay, "Button 4", 0.35, null, "roundo")
        btn5 = MUI.AddButton(lay, "Button 5", 0.35, null, "elegant")
        btn6 = MUI.AddButton(lay, "Button 6", 0.35, null, "outlined")
        btn7 = MUI.AddButton(lay, "Button 7", 0.35, null, "contained")
        btn8 = MUI.AddButton(lay, "Button 8", 0.35, null, "text")
        btn9 = MUI.AddButton(lay, "Button 9", 0.35, null, "flat")
        btn10 = MUI.AddButton(lay, "[fa-android] Android", 0.35, null, "text")
        btn11 = MUI.AddButton(lay, "[fa-folder] Folder", 0.35, null, "flat")

    app.AddLayout(lay)
}
 */
    
            