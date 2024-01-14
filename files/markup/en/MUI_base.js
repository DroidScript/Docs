
/** ### Animate
 * @brief Animates a control
 * Animates the control.
 *
 * There are
 * 	“in”-Animations which are used to show objects from hidden state
 * 	“out”-animations which are used to hide objects in visible state and
 * 	“static”-animations which keep the visible state.
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} [callback] {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} [time] 
 */


/** ### AdjustColor
 * @brief Adjust the visual color effect of the control
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * @param {num} hue -180..180
 * @param {num} [saturation] -100..100
 * @param {num} [brightness] -100..100
 * @param {num} [contrast] 0..100
 */


/** ### Batch
 * @brief Batch method calls to set object properties
 * Batch method calls to be able to set all object's properties at once.
 * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out)
 * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * @param {obj} properties { command:str: args:lst }
 */


/** ### ClearFocus
 * @brief Removes the focus of the control
 * Removes the focus of the control so that the user no longer has immediate access to it.
 */


/** ### data
 * @prop
 * 
 * @returns obj
 */


/** ### Dismiss
 * @brief Hides the control and removes it from the screen
 * Hide the control and remove it from the screen.
 */


/** ### Focus
 * @brief Set the focus to the control for immediate access
 * Set the focus to the control so that the user can interact with it immediately.
 */


/** ### GetAbsHeight
 * @brief Get the control height in pixels
 * Get the absolute height of the control in pixels.
 * @returns num_int
 */


/** ### GetAbsWidth
 * @brief Get the control width in pixels
 * Get the absolute width of the control in pixels.
 * @returns num_int
 */


/** ### GetHeight
 * @brief Get the height of the control
 * Get the height of the control as screen height relative float or in pixels with the **px** option.
 * @param {str} options px
 * @returns num
 */


/** ### GetLeft
 * @brief Get distance to the left parent border
 * Get the distance from the control to the left parent border as width relative float or in pixels with the **px** option.
 * @param {str} options px
 * @returns num
 */


/** ### GetParent
 * @brief Returns the parent control object
 * Returns the parent control object where the object was added to - commonly a layout.
 * @returns dso
 */


/** ### GetPosition
 * @brief Returns data about position and size
 * Returns data about the position and size of the control.
 * If the **screen** option is given the position on the screen will be returned. Otherwise relative to the parent control.
 * The **px** options turns the relative values into pixels.
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetText
 * @brief Returns the currently contained text
 * Returns the current displayed text of the control.
 * @returns str
 */


/** ### GetIcon
 * @brief Returns the icon information
 * Returns the icons of the form { checkIcon, uncheckedIcon }
 * @returns obj-{ checkIcon, uncheckedIcon }
 */


/** ### GetTextSize
 * @brief Returns the current text size
 * Returns the current size of the contained text. If the **px** option is given the size will be retured in pixels.
 * @param {str} mode px
 * @returns num
 */


/** ### GetTop
 * @brief Get distance to the upper parent border
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the **px** option.
 * @param {str} options px
 * @returns num
 */


/** ### GetType
 * Get the type of MUI control.
 * @returns str
 */


/** ### GetVisibility
 * @brief Returns the current visibility state
 * Returns the current visibility state of the control. The Values are:
 * **Show**: visible
 * **Hide**: invisible but still consuming space
 * **Gone**: invisible and not consuming space
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth
 * @brief Get the width of the control
 * Get the width of the control as screen width relative float or in pixels with the **px** option.
 * @param {str} options px
 * @returns num
 */


/** ### Gone
 * @brief Make it gone. It was never there!
 * Hides the control without consuming any more layout space as if it were never there.
 */


/** ### Hide
 * @brief Hides the control visually
 * Hide the control but keep the layout space free.
 */


/** ### IsEnabled
 * @brief Checks if the control is useable
 * Returns whether the control is currently useable by the user.
 * @returns bin
 */


/** ### IsOverlap
 * @brief Checks if the control overlaps with another
 * Returns whether the control overlaps with another by a given distance.
 * @param {dso} obj 
 * @param {num_frc} [depth] 
 * @returns bin
 */


/** ### IsVisible
 * @brief Checks if the control is currently visible
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * @returns bin
 */


/** ### Method
 * @brief Access Java object methods via reflection
 * Allows access to other functions defined on the object in Java via reflection.
 * 
 * <premium>
 * @param {str} name 
 * @param {str_com} [types] boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} [p1] 
 * @param {str} [p2] 
 * @param {str} [p3] 
 * @param {str} [p4] 
 * @returns all
 */


/** ### Resize
 * @brief resize a control after device rotation
 * Resize a control after device rotation by keeping the original width/height ratios.
 */


/** ### SetFontFile
 * @brief Change the used font
 * Change the font style by defining a font file.
 * @param {str_ptf} file 
 */


/** ### SetBackAlpha
 * @brief Set the background transparency by alpha value
 * Set the transparency of the background by an alpha value between **0** (_no transparency_) and **0.99** (_full transparent_) or **1** (_no transparency_) and **256** (_full transparent_)
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor
 * @brief Change the background color
 * Changes the background color of the control.
 * @param {str_col} color 
 */


/** ### SetBackGradient
 * @brief Define the background color of the control with a gradient
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * @param {str_col} color1 
 * @param {str_col} [color2] 
 * @param {?} [color3] 
 * @param {str} [options] left-right|right-left|top-bottom|bottom-top|bl-tr|br-tl|tl-br|tr-bl
 */


/** ### SetBackGradientRadial
 * @brief Define a radial background color gradient
 * Define a radial color gradient for the background of control.
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @param {num_frc} [radius] 
 * @param {str_col} [color1] 
 * @param {str_col} [color2] 
 * @param {?} [color3] 
 * @param {str_com} [options] 
 */


/** ### SetBackground
 * @brief Change the background to an image
 * Changes the background to an image which can be repeated using the **repeat** option.
 * An image which is often used with that option is '/res/drawable/pattern_carbon' - try it out!
 * @param {str_ptf} file 
 * @param {str} [options] repeat
 */


/** ### SetColorFilter
 * @brief Adjust the visual color effect with different BlendModes
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * @param {str_col} color 
 * @param {str} [mode] Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetEnabled
 * @brief En/Disable the control
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * @param {bin} enable 
 */


/** ### SetEllipsize
 * @brief Auto-crop text to fit in control
 * Will cause the inner text to be broken with ... at the start or the end if it cannot fit in the control.
 * @param {str} mode start|middle|end
 */


/** ### SetHtml
 * @brief Set current text to html-formatted text
 * Change the current text of the control to html-formatted text.
 * @param {str_htm} str 
 */


/** ### SetMargins
 * @brief Define distances to other controls
 * Define a distance to other controls on each side of the control.
 * @param {num_frc} [left=0] 
 * @param {num_frc} [top=0] 
 * @param {num_frc} [right=0] 
 * @param {num_frc} [bottom=0] 
 * @param {str} [mode='px'] px|sp|dip|mm|pt
 */


/** ### SetOnChange
 * @brief Called when content was changed by the user
 * Called when the containing data has been changed by the user.
 * @param {fnc_json} callback {}
 */


/** ### SetOnFocus
 * @brief Called when the control gets focused
 * Define a callback function called when the user focuses the control.
 * @param {fnc_json} callback {}
 */


/** ### SetOnLongTouch
 * @brief Called when the control was pressed for eons
 * %cb% the object has been long pressed.
 * @param {fnc_json} callback {"pNames":["src"],"pTypes":["dso"]}
 */


/** ### SetOnTouch
 * @brief Define a callback function for touch events
 * Define a callback function that is called when the user touches the control.
 * @param {fnc_json} callback {}
 */


/** ### 2088093920
 * @name SetOnTouch
 * @brief Called when user touched the control
 * Define a callback function that is called when the user touches the control. In addition, an **event** object is passed to the callback function to obtain information about the touch **type**, the touch **position(s)**, the **amount** of touches and the **control** that was touched.
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-\"Down|Move|Up\", count:num_int, x: [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y: [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchDown
 * @brief Called when the user starts touching the control
 * %cb% the user started toching the control.
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Down, count:num_int, x: [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y: [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchMove
 * @brief Called when the user drags a finger over the screen
 * %cb% the user drags a finger over the screen.
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Move, count:num_int, x: [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y: [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchUp
 * @brief Called when the user finger leaves te screen
 * %cb% the users finger leaves the screen.
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Up, count:num_int, x: [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y: [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetPadding
 * @brief Define distances to contained elements
 * Define distances that elements within the control are to maintain from the control borders.
 * @param {num_frc} [left=0] 
 * @param {num_frc} [top=0] 
 * @param {num_frc} [right=0] 
 * @param {num_frc} [bottom=0] 
 * @param {str} [mode='px'] px|sp|dip|mm|pt
 */


/** ### SetPosition
 * @brief Defines position and size on absolute layouts
 * Defines the position and size for the control if the parent is an absolute layout.
 * @param {num} left 
 * @param {num} top 
 * @param {num} [width] 
 * @param {num} [height] 
 * @param {str} [options] px
 */


/** ### SetScale
 * @brief Scale the control by the given factors
 * Scales the control along with its contents by the factors passed to the function.
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize
 * @brief Change the size of the control
 * Change the size of the control in either screen relative values or in pixels if the **px** option was given.
 * @param {num} width 
 * @param {num} height 
 * @param {str} [options] px|sp|dip|dp|mm|pt
 */


/** ### SetStyle
 * 
 * @param {str_col} [color1='sky'] 
 * @param {str_col} [color2='sky'] 
 * @param {num_pxl} [radius=0] 
 * @param {str_col} [strokeClr='sky'] 
 * @param {num_pxl} [strokeWidth=0] 
 * @param {num_frc} [shadow=0] 
 */


/** ### SetText
 * @brief Change displayed text
 * Change the currently displayed text in the control.
 * @param {str} text 
 */


/** ### SetTextColor
 * @brief Change the text color
 * Change the text color of the contained text.
 * @param {str_col} color 
 */


/** ### SetTextShadow
 * @brief Define a shadow around the control
 * Define a shadow displayed around the control.
 * The sun is always shining so there has to be one. Always.
 * @param {num_int} radius 
 * @param {num_int} [dx] 
 * @param {num_int} [dy] 
 * @param {str_col} [color] 
 */


/** ### SetTextSize
 * @brief Change the text size
 * Change the size of the contained text.
 * @param {num} size 
 * @param {str} [mode] px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
 */


/** ### SetTouchable
 * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired.
 * @param {bin} touchable 
 */


/** ### SetVisibility
 * @brief Change the visibility mode
 * Change the visibility of the control to one of the available modes:
 * **Show:** visible
 * **Hide:** invisible but still consuming space
 * **Gone:** invisible and not consuming space
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show
 * @brief Set the visibility to “Show”
 * Set the visibility of the control to “Show”.
 */


/** ### Tween
 * @brief Animates the control
 * Performs an animation on the control.
 * The **target** object is for the position, size and rotation that the control has at the end of the animation.
 * 
 * The **type** specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation.
 * 
 * With the amount of **repeat**s you can control how many times you want to play the animation.
 * 
 * If you have **jojo** activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation.
 * 
 * Finally the **callback** function will be called after the animation has finished. Well, it's about time!
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc-horizontal scale, sh:num_frc-vertical scale, rot:num_deg }
 * @param {num_mls} [duration] 
 * @param {str} [type] Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} [repeat] 
 * @param {bin} [yoyo] 
 * @param {fnc_json} [callback] {}
 */


/** ### SetTitle
 * Sets a new title text
 * @param {str} newTitle New title text
 */


/** ### SetTitleColor
 * Change the color of the title text
 * @param {str_col} color 
 */


/** ### SetHeight
 * Change the height of the control
 * @param {num} height Fraction of the screen height
 */


/** ### SetColor
 * Change the color of the control
 * @param {str_col} color 
 * @param {str_col} backColor 
 */


/** ### SetTextEdit
 * Pass texedit control to display input values
 * @param {obj} textEdit An MUI TextEdit control
 */


/** ### SetOnClose
 * @brief Called when the dialog or control has been closed.
 * Define a callback to be called when the dialog of control is closed.
 * @param {fnc_json} callback {}
 */


/** ### ClearHistory
 * Clear input history
 */


/** ### GetCursorLine
 * Get cursor line
 * @returns num
 */


/** ### GetCursorPos
 * Get cursor position
 */


/** ### GetSelectedText
 * @brief Get the selected text
 * Returns the currently selected text.
 * @returns str
 */


/** ### GetSelectionEnd
 * @brief Get selection end position
 * Returns the position of where the user selection ends.
 * @returns num_int
 */


/** ### GetSelectionStart
 * @brief Get selection start position
 * Returns the position of where the user selection begins.
 * @returns num_int
 */


/** ### InsertText
 * Inserts a string at a given position.
 * @param {str} text 
 * @param {num_int} start 
 */


/** ### Redo
 * Redo an undone action.
 */


/** ### ReplaceText
 * Replaces a given range in the text with some string.
 * @param {str} text 
 * @param {num_int} start 
 * @param {num_int} end 
 */


/** ### SetCursorPos
 * Change the curernt cursor position.
 * @param {num_int} position 
 */


/** ### SetOnEnter
 * @brief %cb% the user pressed 'Done' or 'Enter' on the keyboard
 * %cb% the user pressed 'Done' or 'Enter' on the keyboard
 * @param {fnc_json} callback {}
 */


/** ### Undo
 * Undo an action
 */


/** ### GetHtml
 * 
 * @returns obj
 */


/** ### GetLineCount
 * 
 * @returns num_int
 */


/** ### GetLineStart
 * 
 * @param {num_int} line 
 * @returns num_int
 */


/** ### GetLineTop
 * 
 * @param {num_int} line 
 * @returns num
 */


/** ### GetMaxLines
 * 
 * @returns num_int
 */


/** ### Log
 * 
 * @param {str} msg 
 * @param {str_com} [options] 
 */


/** ### SetLog
 * 
 * @param {num_int} maxLines 
 */


/** ### SetOnIconTouch
 * @brief Calls a function when icon is touch
 * Calls a function when icon is touch
 * @param {fnc_json} callback {}
 */

