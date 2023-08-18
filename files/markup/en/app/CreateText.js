
/** # CreateText #
 * @abbrev txt
 * @brief Returns a new Text object
 * 
 * $$ txt = app.CreateText(text, width, height, options) $$ 
 * @param {str} text 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options AutoScale,AutoSize,Multiline,Left|Right|Bottom|VCenter,Html,Bold,Monospace,AutoShrink:Auto
 * @returns dso-Text
*/


// CreateText.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
If you want to display text in your app you can use the Text object. You can use the “Multiline” **option** to allow multi-line text and the “Left” or “Right” options to align the text. The default is single line centered text.
Other options you will see used in the samples include “AutoScale”, “Bold”, “Html” and “FontAwesome”.
Use the **SetText** and **GetText** functions of the Text object to set and get it's text.
<sample Single line>

You can change the look of a Text using the **SetBackColor** and **SetTextColor** functions on the Text object.
<sample Multi line>

Text can be shortened using ellipsis (...) when the size of the control is too small to show all the text. Use the **SetEllipsize** to control where the ellipsis is placed. Available modes are “start”, “middle”, “end” and “marq”.
<sample Ellipsize>

You can also set a background image/pattern or background gradient for the Text using the **SetBackground** and **SetBackGradient** functions. See [Layouts](CreateLayout.htm) for examples of how to use these functions.

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

/**
 * @extern GetHeight
 */

/** ### GetHtml ###
 * Returns the html formatted content.
 * $$ txt.GetHtml() $$
 * @returns str_htm
 */


/**
 * @extern GetLeft
 */

/** ### GetLineCount ###
 * Returns the amount of lines in the text even with html formatting
 * $$ txt.GetLineCount() $$
 * @returns num_int
 */


/** ### GetLineStart ###
 * Returns at which character in the text a certain line begins.
 * $$ txt.GetLineStart(line) $$
 * @param {num_int} line 
 * @returns num_int
 */


/** ### GetLineTop ###
 * Returns the top position of a given line on the screen.
 * $$ txt.GetLineTop(line) $$
 * @param {num_int} line 
 * @returns num_frc
 */


/** ### GetMaxLines ###
 * Returns the maximum amount of lines the control can hold with the current control and font height
 * $$ txt.GetMaxLines() $$
 * @returns num_int
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
 * $$ txt.GetType() $$
 * @returns str-Text
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

/** ### Log ###
 * Append a string to the text separated with a line break
 * $$ txt.Log(message, options) $$
 * @param {str} message 
 * @param {str_com} options Clear:Clears the log before writing,Red|Green|Blue
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

/**
 * @extern SetColorFilter
 */

/**
 * @extern SetEllipsize
 */

/**
 * @extern SetDescription
 */

/**
 * @extern SetEnabled
 */

/**
 * @extern SetFontFile
 */

/**
 * @extern SetHtml
 */

/** ### SetLog ###
 * Define a maximum amount of log lines
 * $$ txt.SetLog(maxLines) $$
 * @param {num_int} maxLines 
 */


/**
 * @extern SetMargins
 */

/**
 * @extern SetOnLongTouch
 */

/**
 * @extern SetOnTouch
 */

/**
 * @extern SetOnTouchDown
 */

/**
 * @extern SetOnTouchMove
 */

/**
 * @extern SetOnTouchUp
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

/**
 * @extern SetText
 */

/**
 * @extern SetTextColor
 */

/**
 * @extern SetTextShadow
 */

/**
 * @extern SetTextSize
 */

/**
 * @extern SetTouchable
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
// CreateText.txt --> All the sample codes

/** @Sample
<sample Single line>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>txt = app.CreateText( "Hello" );
	txt.SetTextSize( 22 );
	lay.AddChild( txt );</b>

	app.AddLayout( lay );
}</sample>

<sample Multi line>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>txt = app.CreateText( "Hello\nWorld", 0.8, 0.2, "Multiline"  );
	txt.SetTextSize( 12 );
	txt.SetTextColor( "#ff6666ff" );
	txt.SetBackColor( "#ffffffff" );
	lay.AddChild( txt );</b>

	app.AddLayout( lay );
}
</sample>

<sample Ellipsize>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>txt = app.CreateText( "The quick brown fox jumps over the lazy dog", 0.75 );
	txt.SetTextSize( 28 );
	txt.SetEllipsize( "end" );
	lay.AddChild( txt );</b>

	app.AddLayout( lay );
}
</sample>

 */

