// ------------- HEADER SECTION -------------


/** # CreateAppBar #
 * @abbrev apb
 * The most common type of material design app bar.
 * $$ apb = MUI.CreateAppBar(title, leadingIcon?, controls?) $$ 
 * @param {str} title Title text
 * @param {str} [leadingIcon] A material font icon for the leading control
 * @param {str_com} [controls] material icon font for the right controls
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetMenuIcon ###
 * Sets a new heading icon
 * $$ apb.SetMenuIcon(newIcon) $$
 * @param {str} newIcon New material icon font
 */


/** ### SetMenuIconColor ###
 * Change the color of the heading icon
 * $$ apb.SetMenuIconColor(newColor) $$
 * @param {str_col} newColor New color of the heading icon
 */


/** ### SetOnControlTouch ###
 * Calls a function when the right controls are click
 * $$ apb.SetOnControlTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["btnTxt","index"],"pTypes":["str","num_int"]}
 */


/** ### SetOnMenuTouch ###
 * Calls a function when the heading icon is click
 * $$ apb.SetOnMenuTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetTitleText ###
 * Sets a new title
 * $$ apb.SetTitleText(newTitle) $$
 * @param {str} newTitle New title text
 */


/** ### SetTitleTextColor ###
 * Change the color of the title
 * $$ apb.SetTitleTextColor(newColor) $$
 * @param {str_col} newColor 
 */


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

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern SetEnabled */

/** @extern SetPosition */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES ------------- 


    
/**
@sample Just a title
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

        apb = MUI.CreateAppBar("My Title")
        var apbHeight = apb.GetHeight()

        scr = app.CreateScroller(1, 1, "NoScrollBar")

            pageLay = MUI.CreateLayout("Linear")
            pageLay.SetSize(1, 1.5)
            pageLay.SetPadding(0, 0, apbHeight, 0)
                var txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ..."
                pageLay.AddChild( MUI.CreateTextParagraph(txt) )
            scr.AddChild(pageLay)
        
        lay.AddChild(scr)
        lay.AddChild(apb)

    app.AddLayout(lay)

    /*
    * We add the app bar after the scroller to make sure
    * that the app bar will stay on top of 
    * the page layout
    *
    * Btw, apb.GetHeight() is a function that returns the exact height of the appbar
    *_
}
 */
    
            
    
/**
@sample Sample page
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    layHome = MUI.CreateLayout("Linear", "VCenter,FillXY")
        btn = MUI.CreateButtonRaised("SHOW PAGE", 0.5)
        btn.SetOnTouch(ShowPage)
        layHome.AddChild(btn)
    app.AddLayout(layHome)

    lay = MUI.CreateLayout("Absolute", "FillXY")
    lay.Hide()

        apb = MUI.CreateAppBar("My Title", "arrow_back", "search")
        apb.SetOnMenuTouch(OnMenuTouch)

        var apbHeight = apb.GetHeight()

        scr = app.CreateScroller(1, 1, "NoScrollBar")
            pageLay = MUI.CreateLayout("Linear")
            pageLay.SetSize(1, 1.5)
            pageLay.SetPadding(0, 0, apbHeight, 0)
                var txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ..."
                pageLay.AddChild( MUI.CreateTextParagraph(txt) )
            scr.AddChild(pageLay)
        lay.AddChild(scr)
        
        lay.AddChild(apb)

    app.AddLayout(lay)
}

function ShowPage()
{
    lay.Animate("SlideFromBottom")
}

function OnMenuTouch()
{
    lay.Animate("SlideToBottom")
}
 */
    
            
    
/**
@sample Complete controls
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

        apb = MUI.CreateAppBar("My Title", "menu", "search,more_vert")
        var apbHeight = apb.GetHeight()

        scr = app.CreateScroller(1, 1, "NoScrollBar")

            pageLay = MUI.CreateLayout("Linear", "VCenter")
            pageLay.SetSize(1, 1.2)
            pageLay.SetPadding(0, 0, apbHeight, 0)
                var txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ..."
                pageLay.AddChild( MUI.CreateTextParagraph(txt) )
            scr.AddChild(pageLay)
        
        lay.AddChild(scr)
        lay.AddChild(apb)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Dark mode
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

        apb = MUI.CreateAppBar("My Title", "menu", "search,more_vert")
        apb.SetOnMenuTouch(OnMenuTouch)
        apb.SetOnControlTouch(OnControlTouch)
        

        var apbHeight = apb.GetHeight()

        scr = app.CreateScroller(1, 1, "NoScrollBar")
            pageLay = MUI.CreateLayout("Linear")
            pageLay.SetSize(1, 1.5)
            pageLay.SetPadding(0, 0, apbHeight, 0)
                var txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ..."
                pageLay.AddChild( MUI.CreateTextParagraph(txt) )
            scr.AddChild(pageLay)
        
        lay.AddChild(scr)
        lay.AddChild(apb)

    app.AddLayout(lay)
}

function OnMenuTouch()
{
    app.ShowPopup("You click the menu. Might as well display a drawer.")
}

function OnControlTouch(text, index)
{
    app.ShowPopup("You click " + text + ": Control index = "+index)
}
 */
    
            
    
/**
@sample Python Dark mode
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

    apb = MUI.CreateAppBar("My Title", "menu", "search,more_vert")
    apb.SetOnMenuTouch(OnMenuTouch)
    apb.SetOnControlTouch(OnControlTouch)

    apbHeight = apb.GetHeight()

    scr = app.CreateScroller(1, 1, "NoScrollBar")
    pageLay = MUI.CreateLayout("Linear")
    pageLay.SetSize(1, 1.5)
    pageLay.SetPadding(0, 0, apbHeight, 0)
    txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ..."
    pageLay.AddChild(MUI.CreateTextParagraph(txt))
    scr.AddChild(pageLay)

    lay.AddChild(scr)
    lay.AddChild(apb)

    app.AddLayout(lay)

def OnMenuTouch():
    app.ShowPopup("You click the menu. Might as well display a drawer.")

def OnControlTouch(text, index):
    app.ShowPopup("You click " + text + ": Control index = "+index)
 */
    
            