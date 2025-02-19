// ------------- HEADER SECTION -------------


/** # CreateSeekBar #
 * @abbrev skb
 * @brief Returns a new SeekBar object
 *
 * $$ skb = app.CreateSeekBar(width=-1, height=-1, options?) $$
 * @param {num_frc} [width=-1]
 * @param {num_frc} [height=-1]
 * @param {str_com} [options] FillX/Y
 * @returns dso-SeekBar
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
SeekBars are bars with a moveable pointer which let the user select a value in a given range.
The **SetRange** method of the SeekBar object to sets the value range of the SeekBar and the **SetValue** method sets the current value.
Use the SetOnChange method to define a function you want to be called when the SeekBar value has changed. You can read the _value_ parameter in your callback function to get the current SeekBar value.
 */



// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern AdjustColor */

/** @extern Animate */

/** @extern Batch */

/** @extern data */

/** @extern ClearFocus */

/** @extern Focus */

/** @extern GetAbsHeight */

/** @extern GetAbsWidth */

/** @extern GetHeight */

/** @extern GetLeft */

/** @extern GetParent */

/** @extern GetPosition */

/** @extern GetTop */

/** ### GetType ###
 * Returns the control class name.
 * $$ skb.GetType() $$
 * @returns str-SeekBar
 */


/** ### GetValue ###
 * @brief Get current value
 * Returns the current value of the seek bar.
 * $$ skb.GetValue() $$
 * @returns num
 */


/** @extern GetVisibility */

/** @extern GetWidth */

/** @extern Gone */

/** @extern Hide */

/** @extern IsEnabled */

/** @extern IsOverlap */

/** @extern IsVisible */

/** @extern Method */

/** @extern SetBackAlpha */

/** @extern Resize */

/** @extern SetBackColor */

/** @extern SetBackGradient */

/** @extern SetBackGradientRadial */

/** @extern SetBackground */

/** ### SetColorFilter ###
 * @brief Adjust the visual color effect with different BlendModes
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ skb.SetColorFilter(color, mode?, options?) $$
 * @param {str_col} color
 * @param {str} [mode] Add|Multiply|clear|darken|lighten|overlay|screen|xor|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 * @param {str} [options]
 */


/** @extern SetDescription */

/** @extern SetEnabled */

/** @extern SetMargins */

/** ### SetMaxRate ###
 * @brief Set rate of OnChange calls
 * Change the minimum timeout in milliseconds between two OnChange calls.
 * $$ skb.SetMaxRate(rate) $$
 * @param {num_mls} rate
 */


/** ### SetOnChange ###
 * @brief Called when content was changed by the user
 * Called when the containing data has been changed by the user.
 * $$ skb.SetOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["num"]}
 */


/** ### SetOnTouch ###
 * @brief Called when content was changed by the user
 * Called when the containing data has been changed by the user.
 * <deprecated in favour of SetOnChange>
 * $$ skb.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["num"]}
 */


/** @extern SetPadding */

/** @extern SetPosition */

/** ### SetRange ###
 * @brief Set value range.
 * Change the value which represents 100% of the seek bar. Default is 100
 * $$ skb.SetRange(range) $$
 * @param {num} range
 */


/** @extern SetScale */

/** @extern SetSize */

/** ### SetValue ###
 * @brief Set current seekbar value
 * Change the current seekbar value in the defined range.
 * $$ skb.SetValue(val) $$
 * @param {num} val
 */


/** @extern SetVisibility */

/** @extern SetWeight */

/** @extern Show */

/** @extern Tween */


// ------------- SAMPLES -------------



/**
@sample Example
function OnStart()
{
    lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

    <b>skb = app.CreateSeekBar( 0.8 );
    skb.SetRange( 1.0 );
    skb.SetValue( 0.5 );
    skb.SetOnTouch( skb_OnTouch );
    lay.AddChild( skb );</b>

    app.AddLayout( lay );
}

function skb_OnTouch( value )
{
    app.ShowPopup( "Value = " + value );
}
 */



/**
@sample Python Example
from native import app

def OnStart():
    lay = app.CreateLayout("Linear", "VCenter,FillXY")

    skb = app.CreateSeekBar(0.8)
    skb.SetRange(1.0)
    skb.SetValue(0.5)
    skb.SetOnTouch(skb_OnTouch)
    lay.AddChild(skb)

    app.AddLayout(lay)

def skb_OnTouch(value):
    app.ShowPopup("Value = " + str(value))
 */

