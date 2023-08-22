// ------------- HEADER SECTION ------------- 


/** # CreateListModern #
 * @abbrev lsm
 * 
 * $$ lsm = MUI.CreateListModern(list, width, height, options) $$ 
 * @param {lst} list An array of object elements. See list example
 * @param {num} width 
 * @param {num} height 
 * @param {str} options Initial|Material|Avatar, RightIcon|RightNote, Selectable
 * @returns obj
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
A modern implementation of list using the available controls of DroidScript.

<sample No-options>

To make the list selectable, add the ***Selectable*** option.

<sample Selectable>

_Please note that CreateListInitialIcon, CreateListMaterialIcon and CreateListWithAvatar are now deprecated. But still you can achieve these designs by passing appropriate comma-separated options to the options param of CreateListModern method_

<sample CreateListInitialIcon>
<sample CreateListMaterialIcon>
<sample CreateListWithAvatar>

ListModern has lots of very useful function you can use to manipulate your list. Here's a basic implementation on Removing items from _Selectable_ list.

<sample RemoveItems>
 */



// ------------- VISIBLE METHODS & PROPERTIES ------------- 


/** ### SetOnTouch ###
 * Calls a function when an item is click.
 * $$ lsm.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["title","body","index"],"pTypes":["str","str","num_int"]}
 */


/** ### SetOnSelect ###
 * @brief Calls a function when an item in the list is select.
 * Calls a function when an item in the list is select. List must be selectable.
 * $$ lsm.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["index","isSelected"],"pTypes":["num_int","bin"]}
 */


/** ### SetAvatarOnTouch ###
 * Calls a function when an icon or avatar is click. The same as SetIconOnTouch.
 * $$ lsm.SetAvatarOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["index"],"pTypes":["num_int"]}
 */


/** ### SetSelectable ###
 * Enable or disable selectable option.
 * $$ lsm.SetSelectable(selectable) $$
 * @param {bin} selectable 
 */


/** ### SetControlOnTouch ###
 * Calls a function when a right icon is click
 * $$ lsm.SetControlOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["index"],"pTypes":["num_int"]}
 */


/** ### AppendItem ###
 * Appends an item at the bottom of the list
 * $$ lsm.AppendItem(data) $$
 * @param {obj} data A single element of the list
 */


/** ### RemoveItem ###
 * Removes a single item in the list.
 * $$ lsm.RemoveItem(index) $$
 * @param {num_int} index 
 */


/** ### RemoveItems ###
 * Removes multiple items in the list.
 * $$ lsm.RemoveItems(indexes) $$
 * @param {lst} indexes An array of indexes.
 */


/** ### SetTitleText ###
 * Set a new title to a respective index
 * $$ lsm.SetTitleText(newTitle, index) $$
 * @param {str} newTitle New title text
 * @param {num_int} index 
 */


/** ### SetBodyText ###
 * Set a new body to a respective index
 * $$ lsm.SetBodyText(newBody, index) $$
 * @param {str} newBody New body text
 * @param {num_int} index 
 */


/** ### SetRightIcon ###
 * Set a new material icon to the right icon
 * $$ lsm.SetRightIcon(newIcon, index) $$
 * @param {str} newIcon New right icon
 * @param {num_int} index 
 */


/** ### SetNoteText ###
 * Set a new note text for a respective item on the list
 * $$ lsm.SetNoteText(newNote, index) $$
 * @param {str} newNote New note text
 * @param {num_int} index 
 */


/** ### SetList ###
 * Sets a new list
 * $$ lsm.SetList(list) $$
 * @param {obj} list List Modern list
 */


/** ### PopItem ###
 * Removes an item at the bottom of the list
 * $$ lsm.PopItem() $$
 */


/** ### ShiftItem ###
 * Removes an item at the beginning of the list
 * $$ lsm.ShiftItem() $$
 */


/** ### GetList ###
 * Returns the current list object
 * $$ lsm.GetList() $$
 * @returns obj
 */


/** ### GetItem ###
 * Returns the respective item in the list
 * $$ lsm.GetItem(index) $$
 * @param {num_int} index 
 * @returns obj
 */


/** ### GetSelectedItems ###
 * Returns the selected items in the list
 * $$ lsm.GetSelectedItems() $$
 * @returns lst-List of indexes for slected items
 */


/** ### Highlight ###
 * Highlight a respective item in the list
 * $$ lsm.Highlight(index) $$
 * @param {num_int} index 
 */


/** ### RemoveHighlight ###
 * Removes a highlight to a respective item in the list
 * $$ lsm.RemoveHighlight(index) $$
 * @param {num_int} index 
 */


/** ### SetImage ###
 * Set a new image to a respective item in the list
 * $$ lsm.SetImage(newImagePath, index) $$
 * @param {str_ptf} newImagePath Path to the new image
 * @param {num_int} index 
 */


/** ### SetItem ###
 * 
 * $$ lsm.SetItem(data, index) $$
 * @param {obj} data A single element of the list object
 * @param {num_int} index 
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
@sample No-options
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Sample Title", body:"The quick brown fox jumps..."},
            {title: "Sample Title", body:"The quick brown fox jumps...", image: "/Sys/Img/Droid1.png"},
            {title: "Sample Title", body:"The quick brown fox jumps...", image: "/Sys/Img/Droid1.png", rightIcon: "more_vert"}
        ]

        lsm = MUI.CreateListModern(list)
        lsm.SetOnTouch(OnTouch)
        lay.AddChild(lsm)

    app.AddLayout(lay)
}

function OnTouch(title, body, index)
{
    app.ShowPopup(title+" : "+body+" : "+index)
}
 */
    
            
    
/**
@sample With-Color No Options
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Sample Title", body:"The quick brown fox jumps...", rightIcon: "more_vert", color: "#673ab7"},
            {title: "Sample Title", body:"The quick brown fox jumps...", rightIcon: "more_vert", color: "#673ab7"},
            {title: "Sample Title", body:"The quick brown fox jumps...", rightIcon: "more_vert", color: "#673ab7"}
        ]

        lsm = MUI.CreateListModern(list, 0.96)
        lsm.SetOnTouch(OnTouch)
        lay.AddChild(lsm)

    app.AddLayout(lay)
}

function OnTouch(title, body, index)
{
    app.ShowPopup(title+" : "+body+" : "+index)
}
 */
    
            
    
/**
@sample Selectable
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Sample Title", body:"The quick brown fox jumps..."},
            {title: "Sample Title", body:"The quick brown fox jumps...", image: "/Sys/Img/Droid1.png"},
            {title: "Sample Title", body:"The quick brown fox jumps...", image: "/Sys/Img/Droid1.png", rightIcon: "more_vert"}
        ]

        lsm = MUI.CreateListModern(list, 0.96, null, "Selectable")
        lsm.SetOnTouch(ListOnTouch)
        lay.AddChild(lsm)

        btn = MUI.CreateButtonRound("GET SELECTED ITEMS", 0.6)
        btn.SetMargins(0, 0.075, 0, 0)
        lay.AddChild(btn)
        btn.SetOnTouch(GetSelectedItems)

    app.AddLayout(lay)

    app.ShowPopup("Click the icon/avatar to select")
}

function ListOnTouch(title, body, index)
{
    app.ShowPopup("You choose "+title)
}

function GetSelectedItems()
{
    var items = lsm.GetSelectedItems()
    for(var i = 0; i<items.length; i++)
    {
        var item = lsm.GetItem(items[i])
        app.Alert(JSON.stringify(item))
    }
}
 */
    
            
    
/**
@sample CreateListInitialIcon
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Title 1", body:"The quick brown fox jumps...", rightNote: "Aug 5"},
            {title: "Title 2", body:"The quick brown fox jumps...", rightNote: "Aug 6"},
            {title: "Title 3", body:"The quick brown fox jumps...", rightNote: "Aug 7"}
        ]

        lsm = MUI.CreateListModern(list, 1, null, "Initial,RightNote")
        lay.AddChild(lsm)

    app.AddLayout(lay)
}
 */
    
            
    
/**
@sample CreateListMaterialIcon
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Folder", body:"The quick brown fox jumps...", icon: "folder", rightIcon: "more_vert"},
            {title: "Favorites", body:"The quick brown fox jumps...", icon: "favorite", rightIcon: "more_vert"},
            {title: "Music", body:"The quick brown fox jumps...", icon: "music_note", rightIcon: "more_vert"}
        ]

        lsm = MUI.CreateListModern(list, 1, null, "Material,RightNote,Selectable")
        lay.AddChild(lsm)

        btn = MUI.CreateButtonRound("GET SELECTED ITEMS", 0.6)
        btn.SetMargins(0, 0.075, 0, 0)
        lay.AddChild(btn)
        btn.SetOnTouch(GetSelectedItems)

    app.AddLayout(lay)
    app.ShowPopup("Click the icon/avatar to select")
}

function GetSelectedItems()
{
    var items = lsm.GetSelectedItems()
    for(var i = 0; i<items.length; i++)
    {
        var item = lsm.GetItem(items[i])
        app.Alert(JSON.stringify(item))
    }
}
 */
    
            
    
/**
@sample CreateListWithAvatar
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Someone", body:"The quick brown fox jumps...", image: "/Sys/Img/Droid1.png", rightIcon: "more_vert"},
            {title: "Anybody", body:"The quick brown fox jumps...", image: "/Sys/Img/Droid1.png", rightIcon: "more_vert"},
            {title: "Everyone", body:"The quick brown fox jumps...", image: "/Sys/Img/Droid1.png", rightIcon: "more_vert"}
        ]

        lsm = MUI.CreateListModern(list, 1, null, "Avatar,RightNote,Selectable")
        lay.AddChild(lsm)

        btn = MUI.CreateButtonRound("GET SELECTED ITEMS", 0.6)
        btn.SetMargins(0, 0.075, 0, 0)
        lay.AddChild(btn)
        btn.SetOnTouch(GetSelectedItems)

    app.AddLayout(lay)
    app.ShowPopup("Click the icon/avatar to select")
}

function GetSelectedItems()
{
    var items = lsm.GetSelectedItems()
    for(var i = 0; i<items.length; i++)
    {
        var item = lsm.GetItem(items[i])
        app.Alert(JSON.stringify(item))
    }
}
 */
    
            
    
/**
@sample RemoveItems
cfg.Dark
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        var list = [
            {title: "Folder", body:"The quick brown fox jumps...", icon: "folder", rightIcon: "more_vert"},
            {title: "Downloads", body:"The quick brown fox jumps...", icon: "play_for_work", rightIcon: "more_vert"},
            {title: "Music", body:"The quick brown fox jumps...", icon: "music_note", rightIcon: "more_vert"},
            {title: "Account", body:"The quick brown fox jumps...", icon: "person", rightIcon: "more_vert"},
            {title: "Password", body:"The quick brown fox jumps...", icon: "lock", rightIcon: "more_vert"}
        ]

        lsm = MUI.CreateListModern(list, 1, null, "Material,RightNote,Selectable")
        lsm.SetOnSelect(OnSelect)
        lay.AddChild(lsm)

        btn = MUI.CreateButtonRaised("REMOVE SELECTED", 0.75)
        btn.SetMargins(0, 0.075, 0, 0)
        btn.SetOnTouch(RemoveSelected)
        btn.Hide()
        lay.AddChild(btn)
    
    app.AddLayout(lay)
    app.ShowPopup("Click the icon/avatar to select")
}

function OnSelect()
{
    var items = lsm.GetSelectedItems()
    btn.SetText(items.length+" REMOVE SELECTED")
    if(items.length) btn.Show()
    else btn.Hide()
}

function RemoveSelected()
{
    var items = lsm.GetSelectedItems()
    lsm.RemoveItems(items)
}
 */
    
            