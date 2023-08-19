
/** # CreateSpinner #
 * @abbrev spn
 * @brief Creates a material designed dropdown or spinner.
 * Creates a material designed dropdown. Let the user select from a predefined options.
 * $$ spn = MUI.CreateSpinner(list, width, height) $$ 
 * @param {lst} list String. A comma separated options
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @returns dso
*/




// -------- VISIBLE METHODS & PROPERTIES --------- 


/** ### SetOnChange ###
 * Calls a function when value changes
 * $$ spn.SetOnChange(callback) $$
 * @param {fnc_json} callback {"pNames":["value","index"],"pTypes":["str-Value of the spinner","num_int-The index of the value"]}
 */


/** ### SelectItem ###
 * Select an option
 * $$ spn.SelectItem(value) $$
 * @param {str} value Must be one of the provided values
 */


/** ### SelectItemByIndex ###
 * Select an option with a given index.
 * $$ spn.SelectItemByIndex(index) $$
 * @param {num_int} index The index of the option in the given values
 */


/** ### SetList ###
 * Sets a new list of options.
 * $$ spn.SetList(list) $$
 * @param {lst} list A comma separated values for options.
 */


/** ### SetHint ###
 * Sets the hint when there is no active selection.
 * $$ spn.SetHint(hint) $$
 * @param {str} hint The hint text.
 */


/**
 * @extern GetText
 */

/**
 * @extern SetTextSize
 */

/**
 * @extern SetTextColor
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
 * @extern SetEnabled
 */

/**
 * @extern SetMargins
 */

/**
 * @extern SetPosition
 */

/**
 * @extern SetVisibility
 */

/**
 * @extern Show
 */

/**
 * @extern Tween
 */
// CreateSpinner.txt --> All the sample codes

/** @Sample
<sample Basic>
cfg.Light
cfg.MUI

function OnStart()
{
    color = MUI.colors.teal
    app.InitializeUIKit(color.teal)

    lay = MUI.CreateLayout("Linear", "FillXY,VCenter")

        spn = MUI.CreateSpinner("Item 1, Item 2, Item 3", 0.6, 0.1)
        spn.SetOnChange(OnChange)
        lay.AddChild(spn)

    app.AddLayout(lay)
}

function OnChange(value, index) 
{
    app.ShowPopup(value)
}
</sample>
 */

