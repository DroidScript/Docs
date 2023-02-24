
/** # CreateVideoView #
 * @abbrev vid
 * 
 * $$ vid = app.CreateVideoView(width, height, options) $$ 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options 
 * @returns dso-VideoView
*/


// CreateVideoView.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
The **VideoView** can be used to play local video files from the filesystem or video streams from remote sources.
Use **SetFile** to set the video file or video stream address.
<js>player.SetFile( "https://file-examples.com/wp-content/uploads/2017/04/file\_example\_MP4\_640\_3MG.mp4" );</js>
When the video is ready to play, the **OnReady** callback function will be called, you can then use **Play** to start playing the video.

If the video cannot be played, the OnError callback function will be called. Use **SetOnReady** and **SetOnError** to set the names of your **OnReady** and OnError callback functions.
 */

/** ## Methods ##
 * These are the methods available for CreateVideoView
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ vid.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ vid.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ vid.ClearFocus() $$
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ vid.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ vid.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ vid.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetDuration ###
 * Retunrs the video duration in seconds.
 * $$ vid.GetDuration() $$
 * @returns num_flt
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ vid.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ vid.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ vid.GetParent() $$
 * @returns dso
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ vid.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ vid.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ vid.GetType() $$
 * @returns str-VideoView
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ vid.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ vid.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ vid.Gone() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ vid.Hide() $$
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ vid.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ vid.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsPlaying ###
 * Returns whether the VideoView is currently playing a video
 * $$ vid.IsPlaying() $$
 * @returns bin
 */


/** ### IsReady ###
 * Returns whether the video is ready for playing.
 * $$ vid.IsReady() $$
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ vid.IsVisible() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ vid.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### Pause ###
 * Pauses the video.
 * $$ vid.Pause() $$
 */


/** ### Play ###
 * Plays the video.
 * $$ vid.Play() $$
 */


/** ### SeekTo ###
 * Seek the video to given time in seconds.
 * $$ vid.SeekTo(seconds) $$
 * @param {num_int} seconds 
 */


/** ### SetBackAlpha ###
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ vid.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ vid.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ vid.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ vid.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
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
 * $$ vid.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ vid.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ vid.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ vid.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetFile ###
 * Set the video file path or url
 * $$ vid.SetFile(file) $$
 * @param {str_pth||str_url} file http(s)://url
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ vid.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetOnComplete ###
 * %cb% the playback has finished playing
 * $$ vid.SetOnComplete(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnError ###
 * %cb% an error occured.
 * $$ vid.SetOnError(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnReady ###
 * %cb% the video is ready for playback.
 * $$ vid.SetOnReady(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetOnSubtitle ###
 * %cb% the subtitle text changed.
 * $$ vid.SetOnSubtitle(callback) $$
 * @param {fnc_json} callback {}
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ vid.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ vid.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ vid.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ vid.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetSubtitles ###
 * Set a subtitle file where to retreive the video subtitles from.
 * $$ vid.SetSubtitles(file) $$
 * @param {str_ptf} file 
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ vid.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### SetVolume ###
 * Change the video player volume
 * $$ vid.SetVolume(left, right) $$
 * @param {num_prc} left 
 * @param {num_prc} right 
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ vid.Show() $$
 */


/** ### Stop ###
 * Stop the video playback.
 * $$ vid.Stop() $$
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ vid.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */

// CreateVideoView.txt --> All the sample codes

/** @Sample
<sample Video Stream>
function OnStart()
{
    lay = app.CreateLayout( "Linear", "FillXY,VCenter" );

    app.ShowProgress( "Buffering..." );

    player = app.CreateVideoView( 0.9, 0.4 );
    player.SetOnReady( playerOnReady );
    player.SetOnError( player_OnError );
    lay.AddChild( player );

    <b>player.SetFile( "https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_640_3MG.mp4" );</b>

    app.AddLayout( lay );
}

function playerOnReady()
{
    app.HideProgress();
    app.ShowPopup( "Ready" );
    player.Play();
}

function player_OnError(e)
{
    app.HideProgress();
    app.ShowPopup( "Error" );
}
</sample>

 */

