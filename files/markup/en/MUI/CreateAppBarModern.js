// ------------- HEADER SECTION -------------


/** # CreateAppBarModern #
 * @abbrev abm
 * A modern appbar with a search input, leading icon and trailing icon
 * $$ abm = MUI.CreateAppBarModern(hint?, controlIcon?, options?, color?) $$
 * @param {str} [hint] Hint text for the search input
 * @param {str} [controlIcon] Material font for the control icon
 * @param {str} [options] Round|Rectangle
 * @param {str_col} [color]
 * @returns obj
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern GetHeight */

/** ### SetOnControlTouch ###
 * Calls a function when right control is touch
 * $$ abm.SetOnControlTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnMenuTouch ###
 * Call a function when the menu icon is touch
 * $$ abm.SetOnMenuTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern ClearFocus */

/** ### ClearHistory ###
 *
 * $$ abm.ClearHistory() $$
 */


/** @extern Focus */

/** ### GetCursorLine ###
 *
 * $$ abm.GetCursorLine() $$
 * @returns num
 */


/** ### GetCursorPos ###
 *
 * $$ abm.GetCursorPos() $$
 * @returns num
 */


/** @extern GetSelectedText */

/** @extern GetSelectionEnd */

/** @extern GetSelectionStart */

/** @extern GetText */

/** @extern InsertText */

/** ### Redo ###
 * Redo an undone action.
 * $$ abm.Redo() $$
 */


/** ### ReplaceText ###
 * Replaces a given range in the text with some string.
 * $$ abm.ReplaceText(text, start, end) $$
 * @param {str} text
 * @param {num_int} start
 * @param {num_int} end
 */


/** ### SetCursorPos ###
 * Change the curernt cursor position.
 * $$ abm.SetCursorPos(position) $$
 * @param {num_int} position
 */


/** @extern SetOnChange */

/** ### SetOnEnter ###
 * %cb% the user pressed 'Done' or 'Enter' on the keyboard (line can still be inserted via Shift+Enter)
 * $$ abm.SetOnEnter(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnFocus ###
 * %cb% the user focuses the control.
 * $$ abm.SetOnFocus(callback) $$
 * @param {fnc_json} callback {}
 */


/** @extern SetPosition */

/** @extern SetText */

/** ### Undo ###
 * Undo an action.
 * $$ abm.Undo() $$
 */



// ------------- SAMPLES -------------



/**
@sample Basic
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

        apb = MUI.CreateAppBarModern("Search for games", "more_vert")
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
@sample Sample page
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

        apb = MUI.CreateAppBarModern("Search for games", "more_vert", "Round")
        apb.SetOnMenuTouch(OnMenuTouch)
        apb.SetOnControlTouch(OnCtrlTouch)

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

function OnMenuTouch()
{
    lay.Animate("SlideToBottom")
}

function OnCtrlTouch()
{
    app.ShowPopup("You click for more options.")
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

        apb = MUI.CreateAppBarModern("My Title", "menu", "search,more_vert")
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
@sample Python Basic
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

    apb = MUI.CreateAppBarModern("Search for games", "more_vert")
    apbHeight = apb.GetHeight()

    scr = app.CreateScroller(1, 1, "NoScrollBar")

    pageLay = MUI.CreateLayout("Linear", "VCenter")
    pageLay.SetSize(1, 1.2)
    pageLay.SetPadding(0, 0, apbHeight, 0)
    txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ..."
    pageLay.AddChild(MUI.CreateTextParagraph(txt))
    scr.AddChild(pageLay)

    lay.AddChild(scr)
    lay.AddChild(apb)

    app.AddLayout(lay)
 */



/**
@sample Python Sample page
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    global lay
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

    apb = MUI.CreateAppBarModern("Search for games", "more_vert", "Round")
    apb.SetOnMenuTouch(OnMenuTouch)
    apb.SetOnControlTouch(OnCtrlTouch)

    apbHeight = apb.GetHeight()

    scr = app.CreateScroller(1, 1, "NoScrollBar")

    pageLay = MUI.CreateLayout("Linear", "VCenter")
    pageLay.SetSize(1, 1.2)
    pageLay.SetPadding(0, 0, apbHeight, 0)
    txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ..."
    pageLay.AddChild(MUI.CreateTextParagraph(txt))
    scr.AddChild(pageLay)

    lay.AddChild(scr)
    lay.AddChild(apb)

    app.AddLayout(lay)

def OnMenuTouch():
    lay.Animate("SlideToBottom")

def OnCtrlTouch():
    app.ShowPopup("You click for more options.")
 */



/**
@sample Python Dark mode
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Absolute", "FillXY")

    apb = MUI.CreateAppBarModern("My Title", "menu", "search,more_vert")
    apbHeight = apb.GetHeight()

    scr = app.CreateScroller(1, 1, "NoScrollBar")

    pageLay = MUI.CreateLayout("Linear", "VCenter")
    pageLay.SetSize(1, 1.2)
    pageLay.SetPadding(0, 0, apbHeight, 0)
    txt = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ..."
    pageLay.AddChild(MUI.CreateTextParagraph(txt))
    scr.AddChild(pageLay)

    lay.AddChild(scr)
    lay.AddChild(apb)

    app.AddLayout(lay)
 */
