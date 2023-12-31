// ------------- HEADER SECTION -------------


/** # CreateListSimple #
 * @abbrev lss
 * @brief Creates a simple list that has an optional badge and icon with no body text.
 * Creates a simple list that has an optional badge and icon with no body text.
 * $$ lss = MUI.CreateListSimple(list, width, height, options) $$ 
 * @param {lst} list {title:str|icon:str-Material icon|color:str_col|badge:num}
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options Divider
 * @returns dso
*/




// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnTouch ###
 * Calls a function when an item is click.
 * $$ lss.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["title","index","icon","badge"],"pTypes":["str","num_int","str-Material icon","num"]}
 */


/** ### AppendItem ###
 * Appends an item at the bottom of the list
 * $$ lss.AppendItem(data) $$
 * @param {obj} data A single element of the list
 */


/** ### RemoveItem ###
 * Removes an item in the list.
 * $$ lss.RemoveItem(index) $$
 * @param {num_int} index 
 */


/** ### SetBadge ###
 * @brief Sets a new badge
 * Set the badge of the corresponding item
 * $$ lss.SetBadge(newBadge, index) $$
 * @param {num_int} newBadge 
 * @param {num_int} index 
 */


/** ### SetTitleText ###
 * Sets a new title to a corresponding item
 * $$ lss.SetTitleText(newTitle, index) $$
 * @param {str} newTitle New title text
 * @param {num_int} index 
 */


/** ### GetList ###
 * Returns the current list object
 * $$ lss.GetList() $$
 * @returns obj
 */


/** ### SetList ###
 * Sets a new list
 * $$ lss.SetList(list) $$
 * @param {obj} list ListSimple list
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
@sample Basic
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Downloads"},
            {title: "Folders"},
            {title: "Images"},
            {title: "Videos"}
        ]
        lst = MUI.CreateListSimple(list, 1)
        lst.SetOnTouch()
        lay.AddChild(lst)

    app.AddLayout(lay)
}

function OnTouch(title, index, icon, badge)
{
    app.ShowPopup(title+" : "+index)
}
 */
    
            
    
/**
@sample With Icon & Color
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Downloads", icon: "play_for_work", color:"#673ab7"},
            {title: "Folders", icon: "folder", color:"#009688"},
            {title: "Images", icon: "photo", color:"#1e88e5"},
            {title: "Videos", icon: "subscriptions", color:"#e53935"}
        ]
        lst = MUI.CreateListSimple(list, 1)
        lay.AddChild(lst)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample With Icon, Color & Badge
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Downloads", icon: "play_for_work", badge: 9, color:"#673ab7"},
            {title: "Folders", icon: "folder", badge: 11, color:"#009688"},
            {title: "Images", icon: "photo", badge: 2, color:"#1e88e5"},
            {title: "Videos", icon: "subscriptions", badge: 24, color:"#e53935"}
        ]
        lst = MUI.CreateListSimple(list, 1)
        lay.AddChild(lst)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Badge Color
cfg.Light
cfg.MUI

function OnStart()
{
    MUI.theme.badgeColor = "#ec407a"
    app.InitializeUIKit()

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Downloads", icon: "play_for_work", badge: 9, color:"#673ab7"},
            {title: "Folders", icon: "folder", badge: 11, color:"#009688"},
            {title: "Images", icon: "photo", badge: 2, color:"#1e88e5"},
            {title: "Videos", icon: "subscriptions", badge: 24, color:"#e53935"}
        ]
        lst = MUI.CreateListSimple(list, 1)
        lay.AddChild(lst)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample Dark With Divider
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Downloads", icon: "play_for_work", badge: 9, color:"#673ab7"},
            {title: "Folders", icon: "folder", badge: 11, color:"#009688"},
            {title: "Images", icon: "photo", badge: 2, color:"#1e88e5"},
            {title: "Videos", icon: "subscriptions", badge: 24, color:"#e53935"}
        ]
        lst = MUI.CreateListSimple(list, 1, null, "Divider")
        lay.AddChild(lst)

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

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = [
        {title: "Downloads"},
        {title: "Folders"},
        {title: "Images"},
        {title: "Videos"}
    ]
    lst = MUI.CreateListSimple(list, 1)
    lst.SetOnTouch()
    lay.AddChild(lst)

    app.AddLayout(lay)

def OnTouch(title, index, icon, badge):
    app.ShowPopup(title+" : "+index)
 */
    
            
    
/**
@sample Python With Icon & Color
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = [
        {title: "Downloads", icon: "play_for_work", color:"#673ab7"},
        {title: "Folders", icon: "folder", color:"#009688"},
        {title: "Images", icon: "photo", color:"#1e88e5"},
        {title: "Videos", icon: "subscriptions", color:"#e53935"}
    ]
    lst = MUI.CreateListSimple(list, 1)
    lay.AddChild(lst)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python With Icon, Color & Badge
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = [
        {title: "Downloads", icon: "play_for_work", badge: 9, color:"#673ab7"},
        {title: "Folders", icon: "folder", badge: 11, color:"#009688"},
        {title: "Images", icon: "photo", badge: 2, color:"#1e88e5"},
        {title: "Videos", icon: "subscriptions", badge: 24, color:"#e53935"}
    ]
    lst = MUI.CreateListSimple(list, 1)
    lay.AddChild(lst)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python Badge Color
# cfg.Light, cfg.MUI

from native import app

def OnStart():
    MUI.theme.badgeColor = "#ec407a"
    app.InitializeUIKit()

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = [
        {title: "Downloads", icon: "play_for_work", badge: 9, color:"#673ab7"},
        {title: "Folders", icon: "folder", badge: 11, color:"#009688"},
        {title: "Images", icon: "photo", badge: 2, color:"#1e88e5"},
        {title: "Videos", icon: "subscriptions", badge: 24, color:"#e53935"}
    ]
    lst = MUI.CreateListSimple(list, 1)
    lay.AddChild(lst)

    app.AddLayout(lay)
 */
    
            
    
/**
@sample Python Dark With Divider
# cfg.Dark, cfg.MUI

from native import app

def OnStart():
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

    list = [
        {title: "Downloads", icon: "play_for_work", badge: 9, color:"#673ab7"},
        {title: "Folders", icon: "folder", badge: 11, color:"#009688"},
        {title: "Images", icon: "photo", badge: 2, color:"#1e88e5"},
        {title: "Videos", icon: "subscriptions", badge: 24, color:"#e53935"}
    ]
    lst = MUI.CreateListSimple(list, 1, None, "Divider")
    lay.AddChild(lst)

    app.AddLayout(lay)
 */
    
            