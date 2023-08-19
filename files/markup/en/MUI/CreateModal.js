// ------------- HEADER SECTION ------------- 


/** # CreateModal #
 * @abbrev mdl

 * 
 * $$ mdl = MUI.CreateModal(title, body, okTxt, cancelTxt, show, options) $$ 
 * @param {str} title 
 * @param {str} body Body text. If you want to customize the modal layout pass an empty string.
 * @param {str} okTxt Truthy button text
 * @param {str} cancelTxt Falsy button text
 * @param {bin} show 
 * @param {str} options Dialog options with additional Full option
 * @returns obj
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
A modal is a popup with more controls that can be added.

You can display a modal with text directly by providing a body text. You can use the "Full" as options if you want your modal to occupy the whole screen.

<sample Basic>

If you want to add your custom controls on the modal such as images and buttons, you can
do so by passing an empty string or null to the body text param

<sample Custom Controls>

Use **SetOnTouch** method to call a function when the user touches the control buttons.

<sample With Callback>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnTouch ###
 * Calls a function when control buttons are click
 * $$ mdl.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["isOkBtnClick","btnText"],"pTypes":["bin","str"]}
 */


/** ### GetLayout ###
 * Get the layout of the modal where you can add your controls.
 * $$ mdl.GetLayout() $$
 * @returns dso-@../app/CreateLayout
 */


/** @extern SetText */

/** @extern SetTextColor */

/** ### SetTitle ###
 * Sets a new title to the modal
 * $$ mdl.SetTitle(title) $$
 * @param {str} title 
 */


/** ### SetHeaderColor ###
 * Change the background color of the header
 * $$ mdl.SetHeaderColor(color) $$
 * @param {str_col} color 
 */


/** @extern Show */

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

/** @extern SetOnClose */


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

        btn = MUI.CreateButtonRaised("SHOW MODAL", 0.35)
        btn.SetOnTouch(ShowModal)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    modal = UI.CreateModal("Modal title", text)
}

function ShowModal()
{
    modal.Show()
}
 */
    
            
    
/**
@sample Custom Controls
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW MODAL", 0.4)
        btn.SetOnTouch(ShowModal)
        lay.AddChild(btn)

        modal = UI.CreateModal("Modal title", "", "PROCEED", "CANCEL", false)

        //Add custom controls to your modal
        modalLay = modal.GetLayout()

        img = app.CreateImage("/Sys/Img/Droid1.png", 0.5)
        modalLay.AddChild(img)

        button = MUI.CreateButtonRound("SOME BUTTON", 0.4)
        modalLay.AddChild(button)

    app.AddLayout(lay)
}

function ShowModal()
{
    modal.Show()
}
 */
    
            
    
/**
@sample With Callback
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.CreateButtonRaised("SHOW MODAL", 0.35)
        btn.SetOnTouch(ShowModal)
        lay.AddChild(btn)

    app.AddLayout(lay)

    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    modal = UI.CreateModal("Modal title", text)
    modal.SetOnTouch(OnControlTouch)
}

function ShowModal()
{
    modal.Show()
}

function OnControlTouch(isOk, btnText)
{
    app.ShowPopup(isOk+" : "+btnText)
}
 */
    
            
    
/**
@sample Full Modal
cfg.Light
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        btn = MUI.AddButtonRaised(lay, "SHOW MODAL", 0.35)
        btn.SetOnTouch(ShowModal)

    app.AddLayout(lay)

    var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    modal = UI.CreateModal("Modal title", text, "Save", "Close", false, "Full")
    modal.SetOnTouch(OnControlTouch)
}

function ShowModal()
{
    modal.Show()
}

function OnControlTouch(isOk, btnText)
{
    app.ShowPopup(isOk+" : "+btnText)
}
 */
    
            