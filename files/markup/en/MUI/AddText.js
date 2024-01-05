// ------------- HEADER SECTION -------------


/** # AddText #
 * @abbrev txt
 * Adds a mui text control to the layout. See @CreateTextH1, @CreateTextH2, @CreateTextH3, @CreateTextH4, @CreateTextH5, @CreateTextH6, @CreateTextJumbo, @CreateTextParagraph and @CreateTextSecondary for full documentation on each type of mui typhography.
 * $$ txt = MUI.AddText(parent, text, width, height, options, color) $$ 
 * @param {dso} parent @../app/CreateLayout
 * @param {str} text 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options DS text options with addition Thin|Light|Regular|Medium|Bold,h1|h2|h3|h4|h5|h6|secondary|jumbo|paragraph
 * @param {str_col} color 
 * @returns obj
*/




// ------------- SAMPLES ------------- 


    
/**
@sample All Typography
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
        text = "Lorem ipsum dolor set amit"
        h1 = MUI.AddText(lay, "text", 0.8, null, "h1,Medium")
        h2 = MUI.AddText(lay, "text", 0.8, null, "h2,Bold")
        h3 = MUI.AddText(lay, "text", 0.8, null, "h3,Light")
        h4 = MUI.AddText(lay, "text", 0.8, null, "h4,Regular")
        h5 = MUI.AddText(lay, "text", 0.8, null, "h5,Medium")
        h6 = MUI.AddText(lay, "text", 0.8, null, "h6")
        p = MUI.AddText(lay, "text", 0.8, null, "paragraph,thin")
        j = MUI.AddText(lay, "text", 0.8, null, "h1,Medium")
        s = MUI.AddText(lay, "text", 0.8, null, "secondary,light")
    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python All Typography
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    text = "Lorem ipsum dolor set amit"
    h1 = MUI.AddText(lay, "text", 0.8, None, "h1,Medium")
    h2 = MUI.AddText(lay, "text", 0.8, None, "h2,Bold")
    h3 = MUI.AddText(lay, "text", 0.8, None, "h3,Light")
    h4 = MUI.AddText(lay, "text", 0.8, None, "h4,Regular")
    h5 = MUI.AddText(lay, "text", 0.8, None, "h5,Medium")
    h6 = MUI.AddText(lay, "text", 0.8, None, "h6")
    p = MUI.AddText(lay, "text", 0.8, None, "paragraph,thin")
    j = MUI.AddText(lay, "text", 0.8, None, "h1,Medium")
    s = MUI.AddText(lay, "text", 0.8, None, "secondary,light")
    app.AddLayout(lay)
 */
    
            