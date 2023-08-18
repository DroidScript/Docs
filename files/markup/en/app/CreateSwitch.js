
/** # CreateSwitch #
 * @abbrev swi
 * @brief Creates a switch control
 * 
 * $$ swi = app.CreateSwitch(text, width, height, options) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options Monospace,Custom,NoPad,FillX/Y,NoSound
 * @returns dso-Switch
*/


// CreateSwitch.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Switches are a variant of [toggle buttons](CreateToggle.htm) with another look.
%c
Use the **SetOnTouch** method of the switch object to set the name of a function you want to be called when the switch is touched.

You can get the state of the switch at any time using the **GetChecked** method. The switch state is also passed into your OnTouch callback function as a parameter every time the switch is touched.

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

/** ### GetChecked ###
 * Returns whether the switch is currently activated
 * $$ swi.GetChecked() $$
 * @returns bin
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
 * @extern GetText
 */

/**
 * @extern GetTextSize
 */

/**
 * @extern GetTop
 */

/** ### GetType ###
 * Returns the control class name.
 * $$ swi.GetType() $$
 * @returns str-Switch
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

/** ### SetChecked ###
 * Change the current checked state of the switch.
 * $$ swi.SetChecked(checked) $$
 * @param {bin} checked 
 */


/**
 * @extern SetColorFilter
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

/** ### SetOnTouch ###
 * Called when the control has been clicked by the user.
 * $$ swi.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["value"],"pTypes":["bin"]}
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

/** ### SetStyle ###
 * Customize the look of the toggle.
 * $$ swi.SetStyle(color1, color2, radius, strokeClr, strokeWidth, shadow) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {num_pxl} radius 
 * @param {str_col} strokeClr 
 * @param {num_pxl} strokeWidth 
 * @param {num_frc} shadow 
 */


/**
 * @extern SetText
 */

/**
 * @extern SetTextColor
 */

/**
 * @extern SetTextSize
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
// CreateSwitch.txt --> All the sample codes

/** @Sample
 
 */

