
/** ### Animate
 * Animates the control. *  * There are * 	“in”-Animations which are used to show objects from hidden state * 	“out”-animations which are used to hide objects in visible state and * 	“static”-animations which keep the visible state.
 * $$ obj.Animate(type, callback, time) $$
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} callback {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} time 
 */


/** ### AdjustColor
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ obj.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### ClearFocus
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ obj.ClearFocus() $$
 */


/** ### Dismiss
 * Hide the control and remove it from the screen.
 * $$ obj.Dismiss() $$
 */


/** ### Focus
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ obj.Focus() $$
 */


/** ### GetAbsHeight
 * Get the absolute height of the control in pixels.
 * $$ obj.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth
 * Get the absolute width of the control in pixels.
 * $$ obj.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetHeight
 * Get the height of the control as screen height relative float or in pixels with the `px` option.
 * $$ obj.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLeft
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ obj.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetParent
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ obj.GetParent() $$
 * @returns dso
 */


/** ### GetPosition
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ obj.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, right:num, bottom:num }
 */


/** ### GetText
 * Returns the current displayed text of the control.
 * $$ obj.GetText() $$
 * @returns str
 */


/** ### GetTextSize
 * Returns the current size of the contained text. If the `px` option is given the size will be retured in pixels.
 * $$ obj.GetTextSize(mode) $$
 * @param {str} mode px
 * @returns num
 */


/** ### GetTop
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ obj.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType
 * Get the type of MUI control.
 * $$ obj.GetType() $$
 * @returns str
 */


/** ### GetVisibility
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ obj.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth
 * Get the width of the control as screen width relative float or in pixels with the `px` option.
 * $$ obj.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ obj.Gone() $$
 */


/** ### Hide
 * Hide the control but keep the layout space free.
 * $$ obj.Hide() $$
 */


/** ### IsEnabled
 * Returns whether the control is currently useable by the user.
 * $$ obj.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap
 * Returns whether the control overlaps with another by a given distance.
 * $$ obj.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ obj.IsVisible() $$
 * @returns bin
 */


/** ### Method
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ obj.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### SetFontFile
 * Change the font style by defining a font file.
 * $$ obj.SetFontFile(file) $$
 * @param {str_ptf} file 
 */


/** ### SetBackAlpha
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ obj.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor
 * Changes the background color of the control.
 * $$ obj.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ obj.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial
 * Define a radial color gradient for the background of control.
 * $$ obj.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @param {num_frc} radius 
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str_com} options 
 */


/** ### SetBackground
 * Changes the background to an image which can be repeated using the `repeat` option. * An image which is often used with that option is '/res/drawable/pattern_carbon' - try it out!
 * $$ obj.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColorFilter
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ obj.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetEnabled
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ obj.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetEllipsize
 * Will cause the inner text to be broken with ... at the start or the end if it cannot fit in the control.
 * $$ obj.SetEllipsize(mode) $$
 * @param {str} mode start|middle|end
 */


/** ### SetHtml
 * Change the current text of the control to html-formatted text.
 * $$ obj.SetHtml(str) $$
 * @param {str_htm} str 
 */


/** ### SetMargins
 * Define a distance to other controls on each side of the control.
 * $$ obj.SetMargins(left, top, right, bottom, mode) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetOnChange
 * Called when the containing data has been changed by the user.
 * $$ obj.SetOnChange(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnFocus
 * Define a callback function called when the user focuses the control.
 * $$ obj.SetOnFocus(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnLongTouch
 * %cb% the object has been long pressed.
 * $$ obj.SetOnLongTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["src"],"pTypes":["dso"]}
 */


/** ### SetOnTouch
 * Define a callback function that is called when the user touches the control.
 * $$ obj.SetOnTouch(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnTouch
 * Define a callback function that is called when the user touches the control. In addition, an `event` object is passed to the callback function to obtain information about the touch `type`, the touch `position(s)`, the `amount` of touches and the `control` that was touched.
 * $$ obj.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-\"Down|Move|Up\", count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchDown
 * %cb% the user started toching the control.
 * $$ obj.SetOnTouchDown(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Down, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchMove
 * %cb% the user drags his finger over the screen.
 * $$ obj.SetOnTouchMove(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Move, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchUp
 * %cb% the users finger leaves the screen.
 * $$ obj.SetOnTouchUp(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Up, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetPadding
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ obj.SetPadding(left, top, right, bottom, mode) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPosition
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ obj.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetScale
 * Scales the control along with its contents by the factors passed to the function.
 * $$ obj.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ obj.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetText
 * Change the currently displayed text in the control.
 * $$ obj.SetText(text) $$
 * @param {str} text 
 */


/** ### SetTextColor
 * Change the text color of the contained text.
 * $$ obj.SetTextColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTextShadow
 * Define a shadow displayed around the control. * The sun is always shining so there has to be one. Always.
 * $$ obj.SetTextShadow(radius, dx, dy, color) $$
 * @param {num_int} radius 
 * @param {num_int} dx 
 * @param {num_int} dy 
 * @param {str_col} color 
 */


/** ### SetTextSize
 * Change the size of the contained text.
 * $$ obj.SetTextSize(size, mode) $$
 * @param {num} size 
 * @param {str} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
 */


/** ### SetTouchable
 * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired.
 * $$ obj.SetTouchable(touchable) $$
 * @param {bin} touchable 
 */


/** ### SetVisibility
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ obj.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show
 * Set the visibility of the control to “Show”.
 * $$ obj.Show() $$
 */


/** ### Tween
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ obj.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, w:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */


/** ### SetTitle
 * Sets a new title text
 * $$ obj.SetTitle(newTitle) $$
 * @param {str} newTitle New title text
 */


/** ### SetTitleColor
 * Change the color of the title text
 * $$ obj.SetTitleColor(color) $$
 * @param {str_col} color 
 */


/** ### SetHeight
 * Change the height of the control
 * $$ obj.SetHeight(height) $$
 * @param {num} height Fraction of the screen height
 */


/** ### SetColor
 * Change the color of the control
 * $$ obj.SetColor(color, backColor) $$
 * @param {str_col} color 
 * @param {str_col} backColor 
 */


/** ### SetTextEdit
 * Pass texedit control to display input values
 * $$ obj.SetTextEdit(textEdit) $$
 * @param {obj} textEdit An MUI TextEdit control
 */


/** ### SetOnClose
 * Define a callback to be called when the dialog of control is closed.
 * $$ obj.SetOnClose(callback) $$
 * @param {fnc_json} callback {}
 */

