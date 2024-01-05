// ------------- HEADER SECTION -------------


/** # CreateLayout #
 * @abbrev lay
 * 
 * $$ lay = MUI.CreateLayout(type, options) $$ 
 * @param {str} type Linear|Absolute|Frame|Card
 * @param {str} options Comma separated DroidScript layout options
 * @returns obj
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
It is just the **CreateLayout** method of DroidScript with predefined values on background color just to be consistent on MUI theming.

It is highly recommended to use this method instead of directly calling **CreateLayout** from the app object.

<sample Just Layout>

### Card Layouts
Card layout is ligter than other types of layouts to make it appear as a primary focus on a page.

<sample Dark Layout with Card>

Since it returns a DroidScript layout object, you can use all the layout methods you know.
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Just Layout
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        txt = MUI.CreateTextParagraph("DroidScript is awesome!")
        lay.AddChild(txt)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Dark Layout with Card
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        cardLay = MUI.CreateLayout("Card")
        cardLay.SetSize(0.85, 0.25)
        lay.AddChild(cardLay)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Python Just Layout
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    txt = MUI.CreateTextParagraph("DroidScript is awesome!")
    lay.AddChild(txt)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python Dark Layout with Card
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    cardLay = MUI.CreateLayout("Card")
    cardLay.SetSize(0.85, 0.25)
    lay.AddChild(cardLay)

    app.AddLayout(lay)
 */
    
            