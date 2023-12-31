// ------------- HEADER SECTION -------------


/** # CreateBanner #
 * @abbrev bnr
 * A banner dialog is a nice popup that slides from the top of your current page
 * $$ bnr = MUI.CreateBanner(text, okText, cancelText) $$ 
 * @param {str} text 
 * @param {str} okText Truthy button text
 * @param {str} cancelText Falsey button text
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnTouch ###
 * Calls a function when buttons are click (prev. SetOnTouchOK)
 * $$ bnr.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["isOkBtnClick","btnText"],"pTypes":["bin","str"]}
 */


/** @extern Show */

/** @extern SetText */

/** @extern SetHtml */

/** @extern SetTextColor */

/** @extern SetTextSize */

/** @extern Hide */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern SetVisibility */

/** @extern SetOnClose */


// ------------- SAMPLES ------------- 


    
/**
@sample Light
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.blue
    app.InitializeUIKit(color.lighten1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    app.AddLayout(lay)

    ban = MUI.CreateBanner("There is no internet connection at the moment.", "LEARN MORE", "CLOSE")
    ban.Show()
}
 */
    
            
    
/**
@sample Dark
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.blue
    app.InitializeUIKit(color.lighten1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    app.AddLayout(lay)

    ban = MUI.CreateBanner("There is no internet connection at the moment.", "LEARN MORE", "CLOSE")
    ban.SetOnTouch(OnTouch)
    ban.Show()
}

function OnTouch(v)
{
	if(v)
		app.ShowPopup("Learn more")
	else
		app.ShowPopup("Banner close")
}
 */
    
            
    
/**
@sample Python Light
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.blue
    app.InitializeUIKit(color.lighten1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    app.AddLayout(lay)

    ban = MUI.CreateBanner("There is no internet connection at the moment.", "LEARN MORE", "CLOSE")
    ban.Show()
 */
    
            
    
/**
@sample Python Dark
# cfg.Dark, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.blue
    app.InitializeUIKit(color.lighten1)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    app.AddLayout(lay)

    ban = MUI.CreateBanner("There is no internet connection at the moment.", "LEARN MORE", "CLOSE")
    ban.SetOnTouch(OnTouch)
    ban.Show()

def OnTouch(v, btnText):
    if v:
        app.ShowPopup("Learn more")
    else:
        app.ShowPopup("Banner close")
 */
    
            