
/** # CreateTabs #
 * @abbrev tab
 * @brief Returns a new Tabs object
 * 
 * $$ tab = app.CreateTabs(list, width, height, options) $$ 
 * @param {str_com} list 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options NoMargins|Fade|FontAwesome
 * @returns dso-Tabs
*/


// CreateTabs.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Tabs are useful if you have multiple subsections in your app. The user can then press the title of a tab and the control will automatically switch to the corresponding layout.
%c
To add children to a tab layout you have to retreive it first (because they were already created by the control):
<js>var layTab1 = tab.GetLayout( "TabName1" );</js>
Then you canuse it as every normal layout:dso-"CreateLayout" control
 */



// -------- VISIBLE METHODS & PROPERTIES --------- 


/**
 * @extern AdjustColor
 */

/**
 * @extern Animate
 */

/**
 * @extern Batch
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

/** ### GetCurrentTabName ###
 * Returns the currently displayed tab name
 * $$ tab.GetCurrentTabName() $$
 * @returns str
 */


/**
 * @extern GetHeight
 */

/** ### GetLayout ###
 * Returns the content layout of a given tab.
 * $$ tab.GetLayout(name) $$
 * @param {str} name 
 * @returns dso-CreateLayout
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
 * Returns the control class name.
 * $$ tab.GetType() $$
 * @returns str-Tabs
 */


/**
 * @extern GetVisibility
 */

/**
 * @extern GetWidth
 */

/**
 * @extern Gone
 */

/**
 * @extern Hide
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
 * @extern Method
 */

/** ### parent.AddTab ###
 * Adds a new tab to the tabs control.
 * $$ tab.parent.AddTab(name) $$
 * @param {str} name 
 */


/**
 * @extern SetBackAlpha
 */

/**
 * @extern SetBackColor
 */

/**
 * @extern SetBackGradient
 */

/**
 * @extern SetBackGradientRadial
 */

/**
 * @extern SetBackground
 */

/**
 * @extern SetColorFilter
 */

/** ### SetCornerRadius ###
 * Applies a corner radius to card layouts.
 * $$ tab.SetCornerRadius(radius) $$
 * @param {num_pxl} radius 
 */


/**
 * @extern SetDescription
 */

/**
 * @extern SetEnabled
 */

/**
 * @extern SetMargins
 */

/** ### SetOnChange ###
 * %cb% the tab has been changed by the user.
 * $$ tab.SetOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["name"],"pTypes":["str"]}
 */


/** ### SetOnChildChange ###
 * Defines a callback function which is called when the content of a child control has been changed by the user.
 * $$ tab.SetOnChildChange(callback) $$
 * @param {fnc_json} callback {"pNames":["src"],"pTypes":["dso"]}
 */


/**
 * @extern SetOnLongTouch
 */

/**
 * @extern SetOnTouch
 */

/**
 * @extern SetPadding
 */

/**
 * @extern SetPosition
 */

/**
 * @extern SetScale
 */

/**
 * @extern SetSize
 */

/** ### SetTextSize ###
 * 
 * $$ tab.SetTextSize(size, mode) $$
 * @param {num} size 
 * @param {str} mode px|sp|dip|mm|pt
 */


/**
 * @extern SetTouchable
 */

/** ### SetTouchThrough ###
 * Define whether the layout should forward OnTouch events to underlying controls.
 * $$ tab.SetTouchThrough(through) $$
 * @param {bin} through 
 */


/**
 * @extern SetVisibility
 */

/**
 * @extern Show
 */

/** ### ShowTab ###
 * Switch to a given tab name
 * $$ tab.ShowTab(name) $$
 * @param {str} name 
 */


/**
 * @extern Tween
 */
// CreateTabs.txt --> All the sample codes

/** @Sample
<sample Basic>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    var tabs = app.CreateTabs( "Tab 1,Tab 2,Tab 3", 0.8, 0.8, "VCenter" );
    lay.AddChild( tabs );

    tab1 = tabs.GetLayout( "Tab 1" );
    tab1.SetBackGradient( "red", "green", "", "left-right" );

    tab1 = tabs.GetLayout( "Tab 2" );
    tab1.SetBackGradient( "green", "blue", "", "left-right" );

    tab1 = tabs.GetLayout( "Tab 3" );
    tab1.SetBackGradient( "blue", "red", "", "left-right" );

	app.AddLayout( lay );
}
</sample>

 */

