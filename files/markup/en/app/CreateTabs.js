
/** # CreateTabs #
 * @abbrev tab
 * @brief Returns a new Tabs object
 * 
 * $$ tab = app.CreateTabs(list, width, height, options) $$ 
 * @param {str_com} list 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options NoMargins
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


/** ### _AddChild ###
 * Adds a control to the layout.
 * $$ tab._AddChild(child, order) $$
 * @param {dso} child 
 * @param {num_int} order 
 */


/**
 * @extern AdjustColor
 */

/**
 * @extern Animate
 */

/**
 * @extern Batch
 */

/** ### _ChildToFront ###
 * Moves a child in front of all other children.
 * $$ tab._ChildToFront(child) $$
 * @param {dso} child 
 */


/**
 * @extern ClearFocus
 */

/** ### _DestroyChild ###
 * Destroys and removes a child from the layout.
 * $$ tab._DestroyChild(child) $$
 * @param {dso} child 
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

/** ### _GetChildOrder ###
 * Returns the z order of a child.
 * $$ tab._GetChildOrder(child) $$
 * @param {dso} child 
 * @returns num_int
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


/** ### _RemoveChild ###
 * Removes a child from the layout.
 * $$ tab._RemoveChild(child) $$
 * @param {dso} child 
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

/** ### _SetGravity ###
 * Adjust the placing of contained children.
 * $$ tab._SetGravity(gravity) $$
 * @param {str} gravity Left,Top,Right,Bottom,VCenter,HCenter,FillX,FillY,FillXY
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
 * @extern _SetOnTouchDown
 */

/**
 * @extern _SetOnTouchMove
 */

/**
 * @extern _SetOnTouchUp
 */

/** ### _SetOrientation ###
 * Change the children orientation.
 * $$ tab._SetOrientation(orient) $$
 * @param {str} orient Horizontal|Vertical
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

