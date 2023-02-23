
/** # CreateImage #
 * @abbrev img
 * 
 * $$ img = app.CreateImage(file, width, height, options, pxw, pxh) $$ 
 * @param {str_ptc} file 
 * @param {num} width 
 * @param {num} height 
 * @param {str_com} options fix:image with fixed resolution,alias,px:use pixel values for size,Button:causes image to depress like a button when touched,ScaleCenter,async:loads the image asynchronously,FontAwesome,Resize,TouchThrough,Icon:allows loading of app icons,wallpaper,NoPlay:prevent gifs from playing automatically
 * @param {num_pxl} pxw 
 * @param {num_pxl} pxh 
 * @returns dso-Image
*/


// CreateImage.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
Image controls can be used to display images such like png, jpg or gif.
Just pass the file path and you're done.
%c
Without the **width** and **height** dimensions the image will be shown without any scaling.
<sample Original Size>

If you specify one of them and leave the other _null_, _-1_ or blank, it will be scaled so that the aspect ratio is kept.
<sample Maintain Aspect>

And if you specify both parameters it will be scaled to your wishes.
<sample Stretched>

If you want images to depress like buttons if touched you can use the “Button” **option**.
<sample Button>


### Drawing on Images
Images are also useful for drawing basic shapes and other images on it and therefore for creating dynamic animations or even basic games. To create an empty image you can pass _null_ as file parameter.

This way you can also specify a fixed pixel size to the image you can use the “fix” **option** and pass values for the **pxw** and **pxh** parameters.
<js>
img = app.CreateImage( null, 0.8, 0.5, "fix", 20, 20 );
img.DrawLine( 0, 0, 1, 1 );
</js>

If you dislike the anti-alias effect you can apply the “alias” **option** on a higher resolution image and draw a low-resolution image on it:
<js>
img2 = app.CreateImage( null, .8, .5, "alias" );
img2.DrawImage( img, 0, 0, 1, 1, 0 );
</js>

There are a whole bunch of drawing methods defined here. Some of the were already used above. You can draw lines, rectangles, circles and other images, just to name a few. You can even draw a transformed image using an [transformation matrix](https://docs.rainmeter.net/tips/transformation-matrix-guide). Check out the **Draw\*** methods in the method list below to get more details about all drawing functions.
<sample Draw Shapes>

### Drawing on Images _fast_
If you have many draw operations to perform at runtime (ie. for games) you might want to disable the automatic canvas update after each Draw* call using the **SetAutoUpdate** method. To force the rendering now, you have to call **Update**.

Another way to increase the animation speed is using the _NoDom_ configuration. This will disable html and js Dom elements in your app that consume a lot of resources, but app functions can still be used.
For animations you can then use the **Animate** function of the app object which calls a function for a given amount per second. Note that the canvas still needs some time to refresh - so going over 60 fps makes no sense at all.
<sample Advanced Clock Animating>

 */

/** ## Methods ##
 * These are the methods available for CreateImage
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ img.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Animate ###
 * Animates the control. *  * There are * 	“in”-Animations which are used to show objects from hidden state * 	“out”-animations which are used to hide objects in visible state and * 	“static”-animations which keep the visible state.
 * $$ img.Animate(type, callback, time) $$
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} callback {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} time 
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ img.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### Clear ###
 * Clears everything on the image except the background.
 * $$ img.Clear() $$
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ img.ClearFocus() $$
 */


/** ### _Draw ###
 * Cache draw command when not autoupdating
 * $$ img._Draw(func, p1, p2, p3, p4, p5, p6, p7) $$
 * @param {str} func 
 * @param {str} p1 
 * @param {num} p2 
 * @param {num} p3 
 * @param {num} p4 
 * @param {num} p5 
 * @param {num} p6 
 * @param {num} p7 
 */


/** ### DrawArc ###
 * Draws an elliptical arc by specifying the corners of the surrounding rectangle and the angle range of the arc to be drawn.
 * $$ img.DrawArc(x1, y1, x2, y2, start, sweep) $$
 * @param {num:corner 1} x1 
 * @param {num:corner 1} y1 
 * @param {num:corner 2} x2 
 * @param {num:corner 2} y2 
 * @param {num_deg} start 
 * @param {num_deg} sweep 
 */


/** ### DrawCircle ###
 * Draws a Circle.
 * $$ img.DrawCircle(x, y, radius) $$
 * @param {num} x 
 * @param {num} y 
 * @param {num:width relative} radius 
 */


/** ### DrawFrame ###
 * Draws the frame on a given time of a loaded gif file.
 * $$ img.DrawFrame(ms) $$
 * @param {num_mls} ms 
 */


/** ### DrawImage ###
 * Draws an Image:dso-CreateImage. * See [Android Developers](https://developer.android.com/reference/android/graphics/PorterDuff.Mode#enum-values_1) for 'mode' info
 * $$ img.DrawImage(image, x, y, w, h, angle, mode) $$
 * @param {dso} image CreateImage
 * @param {num} x 
 * @param {num} y 
 * @param {num} w 
 * @param {num} h 
 * @param {num_deg} angle 
 * @param {str} mode ADD|CLEAR|DARKEN|DST|DST_ATOP|DST_IN|DST_OUT|DST_OVER|LIGHTEN|MULTIPLY|OVERLAY|SCREEN|SRC|SRC_ATOP|SRC_IN|SRC_OUT|SRC_OVER|XOR
 */


/** ### DrawImageMtx ###
 * Draws an image with a 2d [transformation matrix](https://docs.rainmeter.net/tips/transformation-matrix-guide).
 * $$ img.DrawImageMtx(image, matrix) $$
 * @param {dso} image CreateImage
 * @param {lst} matrix [a, b, c, d, tx, ty]
 */


/** ### DrawLine ###
 * Draws a line.
 * $$ img.DrawLine(x1, y1, x2, y2) $$
 * @param {num} x1 
 * @param {num} y1 
 * @param {num} x2 
 * @param {num} y2 
 */


/** ### DrawPoint ###
 * Draws a single pixel.
 * $$ img.DrawPoint(x, y) $$
 * @param {num} x 
 * @param {num} y 
 */


/** ### DrawRectangle ###
 * Draws a rectangle.
 * $$ img.DrawRectangle(x1, y1, x2, y2) $$
 * @param {num} x1 
 * @param {num} y1 
 * @param {num} x2 
 * @param {num} y2 
 */


/** ### DrawSamples ###
 * Draws a vertically centered graph in relation to the specified range in both direction. * The sample value _0_ would be vertically centered, _-range_ at the top and _range_ at the bottom. * The sample x positions are evenly distributed over the whole image width.
 * $$ img.DrawSamples(data, range) $$
 * @param {lst} data [ data:num_int ]
 * @param {num} range 
 */


/** ### DrawText ###
 * Draws a text.
 * $$ img.DrawText(txt, x, y) $$
 * @param {str} txt 
 * @param {num} x 
 * @param {num} y 
 */


/** ### Flatten ###
 * Applies certain modifications to the image data, such as translate, scale, skew or alpha.
 * $$ img.Flatten() $$
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ img.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ img.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ img.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ img.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ img.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetName ###
 * Returns the name set via SetName.
 * $$ img.GetName() $$
 * @returns str
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ img.GetParent() $$
 * @returns dso
 */


/** ### GetPixelColor ###
 * Returns the [r,g,b] values from a pixel on the image.
 * $$ img.GetPixelColor(x, y) $$
 * @param {num} x 
 * @param {num} y 
 * @returns lst-[ red:num_dhx, green:num_dhx, blue:num_dhx ]
 */


/** ### GetPixelData ###
 * Returns the raw, png or jpg image data encoded as base64.
 * $$ img.GetPixelData(format, left, top, width, height) $$
 * @param {str} format rawbase64|pngbase64|jpgbase64
 * @param {num_int} left 
 * @param {num_int} top 
 * @param {num_int} width 
 * @param {num_int} height 
 * @returns str_b64
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ img.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ img.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ img.GetType() $$
 * @returns str-Image
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ img.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ img.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ img.Gone() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ img.Hide() $$
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ img.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ img.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ img.IsVisible() $$
 * @returns bin
 */


/** ### MeasureText ###
 * Measure width and height of a given text with the current image settings.
 * $$ img.MeasureText(txt) $$
 * @param {str} txt 
 * @returns obj-{ width:num_frc&comma; height:num_frc }
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ img.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### Move ###
 * Moves the content of the image to the specified position.
 * $$ img.Move(x, y) $$
 * @param {num} x 
 * @param {num} y 
 */


/** ### Reset ###
 * Resets all transformations.
 * $$ img.Reset() $$
 */


/** ### Rotate ###
 * Rotates the content.
 * $$ img.Rotate(angle, pivotX, pivotY) $$
 * @param {num_deg} angle 
 * @param {num} pivotX 
 * @param {num} pivotY 
 */


/** ### Save ###
 * Saves the image to a file on the local filesystem.
 * $$ img.Save(fileName, quality) $$
 * @param {str_ptf} fileName 
 * @param {num_prc} quality for jpg files
 */


/** ### Scale ###
 * Scales the content by the given factors.
 * $$ img.Scale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetAlpha ###
 * Change the image alpha to a value between 0 and 255, where 0 is full transparent.
 * $$ img.SetAlpha(alpha) $$
 * @param {num_dhx} alpha 
 */


/** ### SetAutoUpdate ###
 * En/disable updating the view after every drawing or transformation method.
 * $$ img.SetAutoUpdate(onoff) $$
 * @param {bin} onoff 
 */


/** ### SetBackAlpha ###
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ img.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ img.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ img.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ img.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
 * @param {num_frc} x 
 * @param {num_frc} y 
 * @param {num_frc} radius 
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str_com} options 
 */


/** ### SetBackground ###
 * Changes the background to an image which can be repeated using the `repeat` option. * An image which is often used with that option is '/res/drawable/pattern_carbon' - try it out!
 * $$ img.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColor ###
 * Fills the image with a specific color.
 * $$ img.SetColor(color) $$
 * @param {str_col} color 
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ img.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ img.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ img.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetFontFile ###
 * Change the font style by defining a font file.
 * $$ img.SetFontFile(file) $$
 * @param {str_ptf} file 
 */


/** ### SetImage ###
 * Set the content to an image:dso-"CreateImage" control or specify a path to an image which will then be loaded.
 * $$ img.SetImage(image, width, height, options) $$
 * @param {str_pth||dso} image Image
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str} options rescale
 */


/** ### SetLineWidth ###
 * Set the stroke width to a number in pixels.
 * $$ img.SetLineWidth(width) $$
 * @param {num_pxl} width 
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ img.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetMaxRate ###
 * Set a minimum timeout between two touch 'move' actions fired.
 * $$ img.SetMaxRate(milliseconds) $$
 * @param {num_mls} milliseconds 
 */


/** ### SetName ###
 * Change the name of the image.
 * $$ img.SetName(name) $$
 * @param {str} name 
 */


/** ### SetOnLoad ###
 * %cb% the image has loaded in “async” mode.
 * $$ img.SetOnLoad(callback) $$
 * @param {fnc_json} callback {"pNames":["img"],"pTypes":["dso-CreateImage"]}
 */


/** ### SetOnLongTouch ###
 * %cb% the object has been long pressed.
 * $$ img.SetOnLongTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["src"],"pTypes":["dso"]}
 */


/** ### SetOnTouch ###
 * Define a callback function that is called when the user touches the control. In addition, an `event` object is passed to the callback function to obtain information about the touch `type`, the touch `position(s)`, the `amount` of touches and the `control` that was touched.
 * $$ img.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-\"Down|Move|Up\", count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchDown ###
 * %cb% the user started toching the control.
 * $$ img.SetOnTouchDown(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Down, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchMove ###
 * %cb% the user drags a finger over the screen.
 * $$ img.SetOnTouchMove(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Move, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetOnTouchUp ###
 * %cb% the users finger leaves the screen.
 * $$ img.SetOnTouchUp(callback) $$
 * @param {fnc_json} callback {"pNames":["event"],"pTypes":["obj-{ source:dso, action:str-Up, count:num_int, x:\"Multitouch positions\"&colon; [ x1:num_frc&comma; x2:num_frc&comma; x3:num_frc ], y:\"Multitouch positions\"&colon; [ y1:num_frc&comma; y2:num_frc&comma; y3:num_frc ] }"]}
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ img.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPaintColor ###
 * Change the current paint color for drawing methods.
 * $$ img.SetPaintColor(color) $$
 * @param {str_col} color 
 */


/** ### SetPaintStyle ###
 * Change the current paint style for drawing methods.
 * $$ img.SetPaintStyle(style) $$
 * @param {str} style Fill|Line
 */


/** ### SetPixelData ###
 * Set the image to base64 encoded pixel data.
 * $$ img.SetPixelData(data, width, height, options) $$
 * @param {str_b64} data &lt;rawbase64&gt;|data&colon;image/jpg;base64&comma;&lt;jpgbase64&gt;,data&colon;image/png;base64&comma;&lt;pngbase64&gt;
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px,icon,resize|rescale|square,fix:set bitmap size
 */


/** ### SetPixelMode ###
 * En-/Disable pixel mode for the image so that all drawing methods use either control relative or pixel values.
 * $$ img.SetPixelMode(onoff) $$
 * @param {bin} onoff 
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ img.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ img.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ img.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetTextSize ###
 * Change the size of drawn text.
 * $$ img.SetTextSize(size) $$
 * @param {num} size 
 */


/** ### SetTouchable ###
 * En/Disables touch events to be fired on the control. Other events like OnChange will still be fired.
 * $$ img.SetTouchable(touchable) $$
 * @param {bin} touchable 
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ img.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ img.Show() $$
 */


/** ### Skew ###
 * Skews the content.
 * $$ img.Skew(x, y) $$
 * @param {num} x 
 * @param {num} y 
 */


/** ### Transform ###
 * Transform the content with a 2d transformation matrix.
 * $$ img.Transform(matrix) $$
 * @param {lst} matrix 
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ img.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */


/** ### Update ###
 * Update the view in disabled AutoUpdate mode.
 * $$ img.Update() $$
 */

// CreateImage.txt --> All the sample codes

/** @Sample
<sample Original Size>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>img = app.CreateImage( "/Sys/Img/Droid1.png" );
	img.SetOnTouch( img_OnTouch );
	lay.AddChild( img );</b>

	app.AddLayout( lay );
}

function img_OnTouch( ev )
{
	if( ev.action=="Down" )
		app.ShowPopup( "Ouch!" );
}
</sample>

<sample Stretched>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>img = app.CreateImage( "/Sys/Img/Droid1.png", 0.5, 0.7 );
	img.SetOnTouch( img_OnTouch );
	lay.AddChild( img );</b>

	app.AddLayout( lay );
}

function img_OnTouch( ev )
{
	if( ev.action=="Down" )
		app.ShowPopup( "Aaaargh!" );
}
</sample>

<sample Maintain Aspect>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>img = app.CreateImage( "/Sys/Img/Droid1.png", 0.5, -1 );
	img.SetOnTouch( img_OnTouch );
	lay.AddChild( img );</b>

	app.AddLayout( lay );
}

function img_OnTouch( ev )
{
	if( ev.action=="Down" )
		app.ShowPopup( ev.x[0] + ", " + ev.y[0], "Short" );
}
</sample>

<sample Draw Shapes>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>img = app.CreateImage( null, 0.8, 0.8 );
	lay.AddChild( img );

	img.SetColor( "#8888ff" );
	img.SetPaintColor( "#ff0000" );
	img.DrawCircle( 0.5, 0.5, 0.1 );
	img.DrawRectangle( 0.7, 0.7, 0.1, 0.75 );</b>

	app.AddLayout( lay );
}
</sample>

<sample Advanced Clock Animating>
cfg.No_Dom, cfg.Portrait;

var wh;

function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    // clock pointer
    ptr = app.CreateImage( null, 0.1, 0.1, "fix,alias", 30, 30 );
    ptr.SetTextSize( 4.3 );

    // image aspect ratio for drawing square images
    wh = ptr.GetAbsWidth() / ptr.GetAbsHeight();

    // main canvas
	img = app.CreateImage( null, 1, 1, "alias" );
    img.SetPaintStyle( "line" );
	img.SetAutoUpdate( false );
    img.SetLineWidth( 15 );
	lay.AddChild( img );

	app.AddLayout( lay );

    app.SetDebug( "console" );
    app.Animate( OnAnimate, 40 );
}

function OnAnimate( time, dtime )
{
    time = Date.now();

    // calculate pointer position from current time
    var secs = time / 1000;
    var angle = Math.PI * secs / 2 + Math.abs( Math.sin( Math.PI * secs ));
    var px = 0.5 + 0.5 * Math.cos( angle );
    var py = 0.5 + 0.5 * Math.sin( angle );

    // get current datetime
    var hrs = Math.floor( secs / 3600 ) % 60;
    var min = Math.floor( secs / 60 ) % 60;
    var sec = Math.floor( secs ) % 60;
    var time = min + ":" + sec;

    // measure text dimensions for centering
    var tsize = ptr.MeasureText( time );
    var tx = (1 - tsize.width ) / 2;
    var ty = (1 + tsize.height) / 2;

    // draw pointer and datetime text
    ptr.Clear();
    ptr.SetPaintColor( "red" );
    ptr.DrawLine( .5, .5, px, py );
    ptr.SetPaintColor( "white" );
    ptr.DrawText( time, tx, ty );

    // render
    img.Clear();
    img.DrawCircle( .5, .5, .48 );
    img.DrawImage( ptr, 0, (1 - wh) / 2, 1, wh );
    img.Update();
}
</sample>

<sample Button>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btn = app.CreateImage( "/Sys/Img/Hello.png", 0.2, -1, "button" );
    btn.SetOnTouchUp( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
	app.ShowPopup( "Hello World!" );
	app.Vibrate( "0,100,30,100,50,300" );
}
</sample>

 */

