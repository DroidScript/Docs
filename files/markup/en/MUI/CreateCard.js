// ------------- HEADER SECTION -------------


/** # CreateCard #
 * @abbrev crd
 * 
 * $$ crd = MUI.CreateCard(options) $$ 
 * @param {obj} options {title:str, body:str, image:str_ptf, buttonText:str_com, color:str, width:num_frc, dividerAvatar:bin, dividerBody:bin, avatar:str_pth, avatarOnTop:bin, buttonType:str-"raised|raisedoutline|round|roundoutline|flat"}
 * @returns obj
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
A material implementation of a card. It is fully customizable to suit your likings.<h5>options properties<i style='font-size: 75%;'>definitions</i></h5><p> <b>title</b><i style='font-size: 75%;'>String</i> Title text</p><p> <b>body</b><i style='font-size: 75%;'>String</i> Body text</p><p> <b>image</b><i style='font-size: 75%;'>String</i> Path to the image</p><p> <b>buttonText</b><i style='font-size: 75%;'>String</i> Comma separated string for button text</p><p> <b>color</b><i style='font-size: 75%;'>String</i> Color string</p><p> <b>width</b><i style='font-size: 75%;'>Number</i> Fraction of the screen width</p><p> <b>divider1</b><i style='font-size: 75%;'>Boolean</i> Divider below the avatar</p><p> <b>divider2</b><i style='font-size: 75%;'>Boolean</i> Divider below the body</p><p> <b>avatar</b><i style='font-size: 75%;'>String</i> Path to the avatar image</p><p> <b>avatarOnTop</b><i style='font-size: 75%;'>Boolean</i> Is the avatar on top of the image </p><p> <b>buttonType</b><i style='font-size: 75%;'>String</i> Can be 'raised', 'raisedoutline', 'round', 'roundoutline' or 'flat'</p><p> <b>name</b><i style='font-size: 75%;'>String</i> Name of the card</p>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnButtonTouch ###
 * Calls a function when buttons are click.
 * $$ crd.SetOnButtonTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["btnText","cardName"],"pTypes":["str","str"]}
 */


/** ### SetOnImageTouch ###
 * Calls a function when the image is click.
 * $$ crd.SetOnImageTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["cardName"],"pTypes":["str"]}
 */


/** ### SetOnAvatarTouch ###
 * Calls a function when avatar is click.
 * $$ crd.SetOnAvatarTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["cardName"],"pTypes":["str"]}
 */


/** ### SetOnTitleTouch ###
 * Calls a function when title item is click.
 * $$ crd.SetOnTitleTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["title","cardName"],"pTypes":["str","str"]}
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

/** @extern SetMargins */

/** @extern SetPosition */

/** @extern SetVisibility */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES ------------- 


    
/**
@sample No-image, No-Avatar
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal, "Light")

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        var options = {
            title: "Card Title",
            body: "Lorem ipsum dolor set amit consectetur elit",
            buttonText: "SEE MORE",
            width: 0.94
        }
        var card = UI.CreateCard(options)
        lay.AddChild(card)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample With-image, No-Avatar
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        var options = {
            title: "Card Title",
            body: "Lorem ipsum dolor set amit consectetur elit",
            buttonText: "LINKS,SEE MORE",
            image: "/Sys/Img/Sky.jpg",
            width: 0.94
        }
        var card = UI.CreateCard(options)
        lay.AddChild(card)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample With Image, With Avatar
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

        var options = {
            title: "Card Title",
            body: "Lorem ipsum dolor set amit consectetur elit",
            buttonText: "LINKS,SEE MORE",
            image: "/Sys/Img/Sky.jpg",
            width: 0.94,
            avatar: "/Sys/Img/Droid1.png"
        }
        var card = UI.CreateCard(options)
        lay.AddChild(card)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Complete
cfg.Dark
cfg.MUI

function OnStart()
{
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
        scrl = app.CreateScroller(1, 1, "NoScrollBar")
            lay2 = MUI.CreateLayout("Linear", "VCenter")
            lay2.SetPadding(0, 0.02, 0, 0.02)
            lay2.SetSize(1)
                var options = {
                    title: "Card Title",
                    body: "Lorem ipsum dolor set amit consectetur elit",
                    buttonText: "LINKS,SEE MORE",
                    image: "/Sys/Img/Sky.jpg",
                    width: 0.94,
                    avatar: "/Sys/Img/Droid1.png",
                    avatarOnTop: true,
                    divider1: true,
                    divider2: true
                }

                options.name = "my-card1"
                card1 = UI.CreateCard(options)
                lay2.AddChild(card1)
                card1.SetOnButtonTouch(OnBtnTouch)

                options.name = "my-card2"
                options.buttonType = "raised"
                card2 = UI.CreateCard(options)
                card2.SetMargins(0, 0.02, 0, 0)
                lay2.AddChild(card2)
                card2.SetOnButtonTouch(OnBtnTouch)
            scrl.AddChild(lay2)
        lay.AddChild(scrl)
    app.AddLayout(lay)
}

function OnBtnTouch(btnText, cardName)
{
    app.ShowPopup(btnText + " : " + cardName)
}
 */
    
            
    
/**
@sample Python No-image, No-Avatar
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal, "Light")

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    options = {
        "title": "Card Title",
        "body": "Lorem ipsum dolor set amit consectetur elit",
        "buttonText": "SEE MORE",
        "width": 0.94
    }
    card = MUI.CreateCard(options)
    lay.AddChild(card)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python With-image, No-Avatar
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    options = {
        "title": "Card Title",
        "body": "Lorem ipsum dolor set amit consectetur elit",
        "buttonText": "LINKS,SEE MORE",
        "image": "/Sys/Img/Sky.jpg",
        "width": 0.94
    }
    card = MUI.CreateCard(options)
    lay.AddChild(card)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python With Image, With Avatar
# cfg.Light, cfg.MUI

from native import app
from native import cfg

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")

    options = {
        "title": "Card Title",
        "body": "Lorem ipsum dolor set amit consectetur elit",
        "buttonText": "LINKS,SEE MORE",
        "image": "/Sys/Img/Sky.jpg",
        "width": 0.94,
        "avatar": "/Sys/Img/Droid1.png"
    }
    card = MUI.CreateCard(options)
    lay.AddChild(card)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python Complete
# cfg.Dark, cfg.MUI

from native import app
from native import cfg

def OnStart():
    lay = MUI.CreateLayout("Linear", "VCenter,FillXY")
    scrl = app.CreateScroller(1, 1, "NoScrollBar")
    lay2 = MUI.CreateLayout("Linear", "VCenter")
    lay2.SetPadding(0, 0.02, 0, 0.02)
    lay2.SetSize(1)

    options = {
        "title": "Card Title",
        "body": "Lorem ipsum dolor set amit consectetur elit",
        "buttonText": "LINKS,SEE MORE",
        "image": "/Sys/Img/Sky.jpg",
        "width": 0.94,
        "avatar": "/Sys/Img/Droid1.png",
        "avatarOnTop": True,
        "divider1": True,
        "divider2": True
    }

    options["name"] = "my-card1"
    card1 = MUI.CreateCard(options)
    lay2.AddChild(card1)
    card1.SetOnButtonTouch(OnBtnTouch)

    options["name"] = "my-card2"
    options["buttonType"] = "raised"
    card2 = MUI.CreateCard(options)
    card2.SetMargins(0, 0.02, 0, 0)
    lay2.AddChild(card2)
    card2.SetOnButtonTouch(OnBtnTouch)

    scrl.AddChild(lay2)
    lay.AddChild(scrl)
    app.AddLayout(lay)

def OnBtnTouch(btnText, cardName):
    app.ShowPopup(btnText + " : " + cardName)
 */
    
            