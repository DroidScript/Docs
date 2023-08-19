
/** # CreateTabFixed #
 * @abbrev tbf

 * 
 * $$ tbf = MUI.CreateTabFixed(title, width, height, options, color, animation) $$ 
 * @param {str_com} title titles
 * @param {num} width 
 * @param {num} height 
 * @param {str_com} options DS layout options
 * @param {str_col} color 
 * @param {bin} animation 
 * @returns obj
*/


// CreateTabFixed.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Creates a simple fixed tab.

A basic tab implementation.

<sample Basic>

To add a sliding animation into the fixed tab, pass a boolean to the **animation** argument

<sample With Slide Animation>

To add a callback when the user selects a tab use the **SetOnSelect** method.

<sample With Callback>
 */



// -------- VISIBLE METHODS & PROPERTIES --------- 


/** ### GetLayout ###
 * Get the corresponding layout of a given name where you can add your controls
 * $$ tbf.GetLayout(name) $$
 * @param {str} name The layout name
 * @returns dso-@../app/CreateLayout
 */


/** ### SetActiveTabByIndex ###
 * Open the a tab by passing an index
 * $$ tbf.SetActiveTabByIndex(index) $$
 * @param {num} index 
 */


/** ### SetOnSelect ###
 * Calls a function when the tab is click.
 * $$ tbf.SetOnSelect(callback) $$
 * @param {fnc_json} callback {"pNames":["name","index"],"pTypes":["str","num_int"]}
 */


/**
 * @extern Animate
 */

/**
 * @extern ClearFocus
 */

/**
 * @extern Focus
 */

/**
 * @extern GetAbsHeight
 */

/**
 * @extern GetAbsWidth
 */

/**
 * @extern GetHeight
 */

/**
 * @extern GetLeft
 */

/**
 * @extern GetParent
 */

/**
 * @extern GetPosition
 */

/**
 * @extern GetTop
 */

/** ### GetType ###
 * 
 * $$ tbf.GetType() $$
 * @returns str-Tab
 */


/**
 * @extern GetWidth
 */

/**
 * @extern Gone
 */

/**
 * @extern IsEnabled
 */

/**
 * @extern IsOverlap
 */

/**
 * @extern IsVisible
 */

/**
 * @extern SetEnabled
 */

/**
 * @extern SetPosition
 */

/**
 * @extern SetVisibility
 */

/**
 * @extern Tween
 */
// CreateTabFixed.txt --> All the sample codes

/** @Sample
<sample Basic>
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal, "Light")

    lay = MUI.CreateLayout("Linear", "FillXY")

        tab = MUI.CreateTabFixed("Songs,Albums,Artists", 1, 1, "VCenter,FillXY")

        songsLay = tab.GetLayout("Songs")
        btn = MUI.CreateButtonRaisedO("BUTTON")
        songsLay.AddChild(btn)

        albumsLay = tab.GetLayout("Albums")
        ted = MUI.CreateTextEditFilled(0.75, "", "Text hint", true)
        albumsLay.AddChild(ted)

        artistLay = tab.GetLayout("Artists")
        img = app.CreateImage("/Sys/Img/Droid1.png", 0.3)
        artistLay.AddChild(img)

        lay.AddChild(tab)

    app.AddLayout(lay)
}
</sample>


<sample With Slide Animation>
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY")

        tab = MUI.CreateTabFixed("Songs,Albums,Artists", 1, 1, "VCenter,FillXY", "#673ab7", true)

        songsLay = tab.GetLayout("Songs")
        btn = MUI.CreateButtonRaisedO("BUTTON")
        songsLay.AddChild(btn)

        albumsLay = tab.GetLayout("Albums")
        ted = MUI.CreateTextEditFilled(0.75, null, "Text hint", true)
        albumsLay.AddChild(ted)

        artistLay = tab.GetLayout("Artists")
        img = app.CreateImage("/Sys/Img/Droid1.png", 0.3)
        artistLay.AddChild(img)

        lay.AddChild(tab)

    app.AddLayout(lay)
}
</sample>


<sample With Callback>
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal, "Light")

    lay = MUI.CreateLayout("Linear", "FillXY")

        tab = MUI.CreateTabFixed("Songs,Albums,Artists", 1, 1, "VCenter,FillXY", "#673ab7", true)
        tab.SetOnSelect(OnSelect)

        songsLay = tab.GetLayout("Songs")
        btn = MUI.CreateButtonRaisedO("BUTTON")
        songsLay.AddChild(btn)

        albumsLay = tab.GetLayout("Albums")
        ted = MUI.CreateTextEditFilled(0.75, null, "Text hint", true)
        albumsLay.AddChild(ted)

        artistLay = tab.GetLayout("Artists")
        img = app.CreateImage("/Sys/Img/Droid1.png", 0.3)
        artistLay.AddChild(img)

        lay.AddChild(tab)

    app.AddLayout(lay)
}

function OnSelect(name, index)
{
    app.ShowPopup(name+" : "+index)
}
</sample>
 */

