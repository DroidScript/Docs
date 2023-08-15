
/** # CreateList #
 * @abbrev lst
 * 
 * $$ lst = app.CreateList(list, width, height, options, delim) $$ 
 * @param {str_lst} list 
 * @param {num_frc} width 
 * @param {num_frc} height 
 * @param {str_com} options bold:bold item titles|Expand:Expand list to full height inside scrollers,Menu:applies various settings to make the list appear like an in
 * @param {str} delim 
 * @returns dso-List
*/


// CreateList.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
If you want to display many dataset of the same structure you might consider using the **List** object.
 The List object supports multi-line list items and can show icons. Multi-line items are created by dividing each list item up using the “:” (colon) character. If you need to use a colon character in your item text then use this character sequence: “^c^”.
You can have one icon and some body text using the following formats:

“title”
“title&colon;icon”
“title&colon;body&colon;icon”

Alternatively you can use the **AddItem** method which accepts _title_, _body_ and _icon_ as parameters to generically build up your list.

You can specify your own icon file for example “Img/MyIcon.png”, or one of the special built-in icons using the following key words: “audio”, “photo”, “video”, “folder”, “audiofolder”, “photofolder”, “videofolder” and “playlist”.
<sample Title + Icon>
<sample Title + Body>

You can use the **SetOnTouch** and **SetOnLongTouch** methods to define a function you want to be called when a list item is selected. The selected item title, body, type and index are passed into your OnTouch callback function as parameters.
<sample Simple>

You can change the look of a List using the **SetBackColor** and **SetTextColor** functions on the list object. You can also set a background image/pattern or background gradient for the List using the **SetBackground** and **SetBackGradient** functions.
<sample Gray on White>

You can also create lists items that look like buttons by using one of the following options: “AlumButton”, “GreenButton”, “OrangeButton”.
<sample Orange Buttons>

Or create lists with Gradient backgrounds like this:<sample Gradient Background>

 */

/** ## Methods ##
 * These are the methods available for CreateList
 */


/** ### AddItem ###
 * Adds an entry to the list.
 * $$ lst.AddItem(title, body, image) $$
 * @param {str} title 
 * @param {str} body 
 * @param {str||str_ptf} image 
 */


/** ### AdjustColor ###
 * Adjust the visual color effect of the control by setting the Hue (by angle in degrees in a color circle), the saturation, brightness and contrast of the control.
 * $$ lst.AdjustColor(hue, saturation, brightness, contrast) $$
 * @param {num} hue 
 * @param {num} saturation 
 * @param {num} brightness 
 * @param {num} contrast 0..100
 */


/** ### Animate ###
 * Animates the control. *  * There are * 	“in”-Animations which are used to show objects from hidden state * 	“out”-animations which are used to hide objects in visible state and * 	“static”-animations which keep the visible state.
 * $$ lst.Animate(type, callback, time) $$
 * @param {str} type NewsPaper|Jelly|Flash|RubberBand|Swing|TaDa|Bounce|Fall|FallRotate|<br><img width='300px' src='../animate.png'></img>
 * @param {fnc_json} callback {"pNames":["type"],"pTypes":["str"]}
 * @param {num_mls} time 
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ lst.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### ClearFocus ###
 * Removes the focus of the control so that the user no longer has immediate access to it.
 * $$ lst.ClearFocus() $$
 */


/** ### Focus ###
 * Set the focus to the control so that the user can interact with it immediately.
 * $$ lst.Focus() $$
 */


/** ### GetAbsHeight ###
 * Get the absolute height of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ lst.GetAbsHeight() $$
 * @returns num_int
 */


/** ### GetAbsWidth ###
 * Get the absolute width of the control in pixels. * Note that unlike the objects margins its padding does change this value.
 * $$ lst.GetAbsWidth() $$
 * @returns num_int
 */


/** ### GetHeight ###
 * Get the height of the control as screen height relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ lst.GetHeight(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetItem ###
 * Returns item data of an item with a specific title.
 * $$ lst.GetItem(title) $$
 * @param {str} title 
 * @returns obj-{ title:str&comma; body:str&comma; image:str_pth }
 */


/** ### GetItemByIndex ###
 * Returns item data of an item on a specific index.
 * $$ lst.GetItemByIndex(index) $$
 * @param {num_int} index 
 * @returns obj-{ title:str&comma; body:str&comma; image:str_pth }
 */


/** ### GetLeft ###
 * Get the distance from the control to the left parent border as width relative float or in pixels with the `px` option.
 * $$ lst.GetLeft(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetLength ###
 * Returns the amount of items in the lists.
 * $$ lst.GetLength() $$
 * @returns num_int
 */


/** ### GetList ###
 * When passing no argument it returns the full list data as a list of objects. Otherwise it will return a string list instead.
 * $$ lst.GetList(delim) $$
 * @param {str} delim 
 * @returns lst_obj-[{ title:str&comma; body:str&comma; image:str_pth }]||str-title1[DELIM]title2[DELIM]...
 */


/** ### GetParent ###
 * Returns the parent control object where the object was added to - commonly a layout.
 * $$ lst.GetParent() $$
 * @returns dso
 */


/** ### GetPosition ###
 * Returns data about the position and size of the control. * If the `screen` option is given the position on the screen will be returned. Otherwise relative to the parent control. * The `px` options turns the relative values into pixels.
 * $$ lst.GetPosition(options) $$
 * @param {str} options screen,px
 * @returns obj-{ left:num, top:num, width:num, height:num }
 */


/** ### GetTextSize ###
 * Returns the current size of the contained text. If the `px` option is given the size will be retured in pixels.
 * $$ lst.GetTextSize(mode) $$
 * @param {str} mode px
 * @returns num
 */


/** ### GetTop ###
 * Get the distance from the control to the upper parent border as height relative float or in pixels with the `px` option.
 * $$ lst.GetTop(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ lst.GetType() $$
 * @returns str-List
 */


/** ### GetVisibility ###
 * Returns the current visibility state of the control. The Values are: * `Show`: visible * `Hide`: invisible but still consuming space * `Gone`: invisible and not consuming space
 * $$ lst.GetVisibility() $$
 * @returns str-Show|Hide|Gone
 */


/** ### GetWidth ###
 * Get the width of the control as screen width relative float or in pixels with the `px` option. * Note that unlike the objects margins its padding does change this value.
 * $$ lst.GetWidth(options) $$
 * @param {str} options px
 * @returns num
 */


/** ### Gone ###
 * Hides the control without consuming any more layout space as if it were never there.
 * $$ lst.Gone() $$
 */


/** ### Hide ###
 * Hide the control but keep the layout space free.
 * $$ lst.Hide() $$
 */


/** ### InsertItem ###
 * Inserts an item at s specific index in the list.
 * $$ lst.InsertItem(index, title, body, image) $$
 * @param {num_int} index 
 * @param {str} title 
 * @param {str} body 
 * @param {str||str_ptf} image 
 */


/** ### IsEnabled ###
 * Returns whether the control is currently useable by the user.
 * $$ lst.IsEnabled() $$
 * @returns bin
 */


/** ### IsOverlap ###
 * Returns whether the control overlaps with another by a given distance.
 * $$ lst.IsOverlap(obj, depth) $$
 * @param {dso} obj 
 * @param {num_frc} depth 
 * @returns bin
 */


/** ### IsVisible ###
 * Returns whether the control is currently visible to the user, ignoring overlaying controls.
 * $$ lst.IsVisible() $$
 * @returns bin
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ lst.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### RemoveAll ###
 * Removes all entries of the list.
 * $$ lst.RemoveAll() $$
 */


/** ### RemoveItem ###
 * Removes an item with a specific title from the list.
 * $$ lst.RemoveItem(title) $$
 * @param {str} title 
 */


/** ### RemoveItemByIndex ###
 * Removes an item on a specific index from the list
 * $$ lst.RemoveItemByIndex(index) $$
 * @param {num_int} index 
 */


/** ### ScrollToItem ###
 * Scrolls the list to an item with a specific title.
 * $$ lst.ScrollToItem(title, body) $$
 * @param {str} title 
 * @param {str} body 
 */


/** ### ScrollToItemByIndex ###
 * Scrolls the list to an item on a specific index.
 * $$ lst.ScrollToItemByIndex(index) $$
 * @param {num_int} index 
 */


/** ### SelectItem ###
 * Highlights an item with a specific title.
 * $$ lst.SelectItem(title, body, scroll) $$
 * @param {str} title 
 * @param {str} body 
 * @param {bin} scroll 
 */


/** ### SelectItemByIndex ###
 * Highlights an item on a specific index.
 * $$ lst.SelectItemByIndex(index, scroll) $$
 * @param {num_int} index 
 * @param {bin} scroll 
 */


/** ### SetBackAlpha ###
 * Set the transparency of the background by an alpha value between `0` (_no transparency_) and `0.99` (_full transparent_) or `1` (_no transparency_) and `256` (_full transparent_)
 * $$ lst.SetBackAlpha(alpha) $$
 * @param {num} alpha 0..0.99|1..256
 */


/** ### SetBackColor ###
 * Changes the background color of the control.
 * $$ lst.SetBackColor(color) $$
 * @param {str_col} color 
 */


/** ### SetBackGradient ###
 * Define the background color of the control with a gradient. The default gradient direction is from top to bottom, but you can change it from left to right and the reversed versions of course.
 * $$ lst.SetBackGradient(color1, color2, color3, options) $$
 * @param {str_col} color1 
 * @param {str_col} color2 
 * @param {?} color3 
 * @param {str} options left
 */


/** ### SetBackGradientRadial ###
 * Define a radial color gradient for the background of control.
 * $$ lst.SetBackGradientRadial(x, y, radius, color1, color2, color3, options) $$
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
 * $$ lst.SetBackground(file, options) $$
 * @param {str_ptf} file 
 * @param {str} options repeat
 */


/** ### SetColorFilter ###
 * Adjust the visual color effect with a color and a given BlendMode. More information about BlendMode can be found in the [Android Developer page](https://developer.android.com/reference/android/graphics/BlendMode.html).
 * $$ lst.SetColorFilter(color, mode) $$
 * @param {str_col} color 
 * @param {str} mode Add|Multiply|clear|darken|lighten|overlay|screen|xor|color|color_burn|color_dodge|difference|exclusion|hard_light|hue|luminosity|modulate|saturation|soft_light|src|dst|src_in|src_out|src_atop|src_over|dst_in|dst_out|dst_atop|dst_over
 */


/** ### SetColumnWidths ###
 * Changes the coloumn withs for title, body and icon. Often used with the “Horiz” option.
 * $$ lst.SetColumnWidths(icon, title, body, mode) $$
 * @param {num_frc} icon 
 * @param {num_frc} title 
 * @param {num_frc} body 
 * @param {str_com} mode px|sp|dip|mm|pt
 */


/** ### SetDivider ###
 * Changes the item divider height and color.
 * $$ lst.SetDivider(height, color) $$
 * @param {num_frc} height 
 * @param {str_col} color 
 */


/** ### SetEllipsize ###
 * Will cause the inner text to be broken with ... at the start or the end if it cannot fit in the control.
 * $$ lst.SetEllipsize(mode) $$
 * @param {str} mode start|middle|end
 */


/** ### SetEllipsize1 ###
 * Will cause the element titles to be broken with ... at the start or the end if it cannot fit in the control.
 * $$ lst.SetEllipsize1(mode) $$
 * @param {str} mode start|middle|end
 */


/** ### SetEllipsize2 ###
 * Will cause the element bodies to be broken with ... at the start or the end if it cannot fit in the control.
 * $$ lst.SetEllipsize2(mode) $$
 * @param {str} mode start|middle|end
 */


/** ### SetDescription ###
 * Set a control description for accessibility
 * $$ lst.SetDescription(desc) $$
 * @param {str} desc 
 */


/** ### SetEnabled ###
 * En/Disable the control physically and visually so that the user can/can not access the control. Events like OnTouch will still be fired.
 * $$ lst.SetEnabled(enable) $$
 * @param {bin} enable 
 */


/** ### SetFontFile ###
 * Change the font style by defining a font file.
 * $$ lst.SetFontFile(file) $$
 * @param {str_ptf} file 
 */


/** ### SetHiTextColor1 ###
 * Change the highlight color of titles when selected.
 * $$ lst.SetHiTextColor1(color) $$
 * @param {str_col} color 
 */


/** ### SetHiTextColor2 ###
 * Change the highlight color of bodies when selected.
 * $$ lst.SetHiTextColor2(color) $$
 * @param {str_col} color 
 */


/** ### SetIconMargins ###
 * Change the outer icon border distance.
 * $$ lst.SetIconMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str_com} mode px|sp|dip|mm|pt
 */


/** ### SetIconSize ###
 * Changes the icon size.
 * $$ lst.SetIconSize(size, mode) $$
 * @param {num} size 
 * @param {str_com} mode px|sp|dip|mm|pt
 */


/** ### SetItem ###
 * Change the content of an element with a specific title.
 * $$ lst.SetItem(title, newTitle, newBody, newImage) $$
 * @param {str} title 
 * @param {str} newTitle 
 * @param {str} newBody 
 * @param {str_ptf} newImage 
 */


/** ### SetItemByIndex ###
 * Change the content of an element on a specific index.
 * $$ lst.SetItemByIndex(index, newTitle, newBody, newImage) $$
 * @param {num_int} index 
 * @param {str} newTitle 
 * @param {str} newBody 
 * @param {str_ptf} newImage 
 */


/** ### SetItemColor ###
 * Set the color of a list item.
 * $$ lst.SetItemColor(name, textClr, backClr) $$
 * @param {str} name 
 * @param {str_col} textClr 
 * @param {str_col} backClr 
 */


/** ### SetItemColorByIndex ###
 * Set the color of a list item by its index.
 * $$ lst.SetItemColorByIndex(index, textClr, backClr) $$
 * @param {num_int} index 
 * @param {str_col} textClr 
 * @param {str_col} backClr 
 */


/** ### SetList ###
 * Set the content of the whole list.
 * $$ lst.SetList(list, delim) $$
 * @param {str_lst} list title|title&colon;icon|title&colon;body&colon;icon
 * @param {str} delim 
 */


/** ### SetMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ lst.SetMargins(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetOnLongTouch ###
 * Define a callback function that is called when the user touches a list item.
 * $$ lst.SetOnLongTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["title","body","icon","index"],"pTypes":["str","str","str","num_int"]}
 */


/** ### SetOnTouch ###
 * Define a callback function that is called when the user touches a list item.
 * $$ lst.SetOnTouch(callback) $$
 * @param {fnc_json} callback {"pNames":["title","body","icon","index"],"pTypes":["str","str","str","num_int"]}
 */


/** ### SetPadding ###
 * Define distances that elements within the control are to maintain from the control borders.
 * $$ lst.SetPadding(left, top, right, bottom, mode) $$
 * @param {num_frc} left 
 * @param {num_frc} top 
 * @param {num_frc} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 */


/** ### SetPosition ###
 * Defines the position and size for the control if the parent is an absolute layout.
 * $$ lst.SetPosition(left, top, width, height, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px
 */


/** ### SetScale ###
 * Scales the control along with its contents by the factors passed to the function.
 * $$ lst.SetScale(x, y) $$
 * @param {num_fac} x 
 * @param {num_fac} y 
 */


/** ### SetSize ###
 * Change the size of the control in either screen relative values or in pixels if the `px` option was given.
 * $$ lst.SetSize(width, height, options) $$
 * @param {num} width 
 * @param {num} height 
 * @param {str} options px|sp|dip|dp|mm|pt
 */


/** ### SetTextColor ###
 * Change the text color of the contained text.
 * $$ lst.SetTextColor(color) $$
 * @param {str_col} color 
 */


/** ### SetTextColor1 ###
 * Change the default text color of titles.
 * $$ lst.SetTextColor1(color) $$
 * @param {str_col} color 
 */


/** ### SetTextColor2 ###
 * Change the default text color of bodies.
 * $$ lst.SetTextColor2(color) $$
 * @param {str_col} color 
 */


/** ### SetTextMargins ###
 * Define a distance to other controls on each side of the control.
 * $$ lst.SetTextMargins(left, top, right, bottom, mode, options) $$
 * @param {num} left 
 * @param {num} top 
 * @param {num} right 
 * @param {num_frc} bottom 
 * @param {str} mode px|sp|dip|mm|pt
 * @param {str} options inner:around each individual title and body|outer:around both title and body together
 */


/** ### SetTextShadow ###
 * Define a shadow displayed around the control. * The sun is always shining so there has to be one. Always.
 * $$ lst.SetTextShadow(radius, dx, dy, color) $$
 * @param {num_int} radius 
 * @param {num_int} dx 
 * @param {num_int} dy 
 * @param {str_col} color 
 */


/** ### SetTextShadow1 ###
 * Apply text shadows to titles.
 * $$ lst.SetTextShadow1(radius, dx, dy, color) $$
 * @param {num_deg} radius 
 * @param {num_int} dx 
 * @param {num_int} dy 
 * @param {str_col} color 
 */


/** ### SetTextShadow2 ###
 * Apply text shadows to bodies.
 * $$ lst.SetTextShadow2(radius, dx, dy, color) $$
 * @param {num_deg} radius 
 * @param {num_int} dx 
 * @param {num_int} dy 
 * @param {str_col} color 
 */


/** ### SetTextSize ###
 * Change the size of the contained text.
 * $$ lst.SetTextSize(size, mode) $$
 * @param {num} size 
 * @param {str} mode px|dip|sp|mm|pt|pl:scales text in proportion with device resolution|ps:scales text in proportion with device resolution
 */


/** ### SetTextSize1 ###
 * Change the text size for titles.
 * $$ lst.SetTextSize1(size, mode) $$
 * @param {num} size 
 * @param {str_com} mode px|sp|dip|mm|pt
 */


/** ### SetTextSize2 ###
 * Change the text size for bodies.
 * $$ lst.SetTextSize2(size, mode) $$
 * @param {num} size 
 * @param {str_com} mode px|sp|dip|mm|pt
 */


/** ### SetVisibility ###
 * Change the visibility of the control to one of the available modes: * `Show:` visible * `Hide:` invisible but still consuming space * `Gone:` invisible and not consuming space
 * $$ lst.SetVisibility(mode) $$
 * @param {str} mode Show|Hide|Gone
 */


/** ### Show ###
 * Set the visibility of the control to “Show”.
 * $$ lst.Show() $$
 */


/** ### Tween ###
 * Performs an animation on the control. * The `target` object is for the position, size and rotation that the control has at the end of the animation. *  * The `type` specifies the behavior and the speed of the animation. Separated by a dot, you must also specify whether you want to apply this behavior to the beginning (In), end (Out), or to both (InOut) times of the animation. *  * With the amount of `repeat`s you can control how many times you want to play the animation. *  * If you have `jojo` activated, the animation will alternate between forward and backward playback, so that if the repetition value is odd, the control will be at the start position again at the end of the animation. *  * Finally the `callback` function will be called after the animation has finished. Well, it's about time!
 * $$ lst.Tween(target, duration, type, repeat, yoyo, callback) $$
 * @param {obj} target { x:num_frc, y:num_frc, w:num_frc, h:num_frc, sw:num_frc
 * @param {num_mls} duration 
 * @param {str} type Linear.None|Quadratic.In/Out|Cubic.In/Out|Quartic.In/Out|Quintic.In/Out|Sinusoidal.In/Out|Exponential.In/Out|Circular.In/Out|Elastic.In/Out|Back.In/Out|Bounce.In/Out
 * @param {num_int} repeat 
 * @param {bin} yoyo 
 * @param {fnc_json} callback {}
 */

// CreateList.txt --> All the sample codes

/** @Sample

<sample Simple>

function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>lst = app.CreateList( "Fred,Bill,Jim", 0.8, 0.4 );
	lst.SetOnTouch( lst_OnTouch );
	lst.SetOnLongTouch( lst_OnLongTouch );
	lay.AddChild( lst );</b>

	app.AddLayout( lay );
}

function lst_OnTouch( title, body, icon, index )
{
	app.ShowPopup( "Item = " + title + ", Index = " + index, "Short" );
}

function lst_OnLongTouch( title, body, icon, index )
{
	app.ShowPopup( "Long Touch Item = " + title + ", Index = " + index, "Short" );
}
</sample>

<sample Gray on White>

function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>lst = app.CreateList( "Fred,Bill,Jim", 0.8, 0.4  );
	lst.SetTextColor( "#ff666666" );
	lst.SetBackColor( "#ffffffff" );
	lst.SetOnTouch( lst_OnTouch );
	lay.AddChild( lst );</b>

	app.AddLayout( lay );
}

function lst_OnTouch( title, body, type, index )
{
	app.ShowPopup( "Touched Item = " + title );
}
</sample>

<sample Title + Icon>

function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>var data = "Folder:folder,Audio:audio,Photo:photo,Video:video";
	lst = app.CreateList( data, 0.8, 0.4 );
	lst.SetOnTouch( lst_OnTouch );
	lay.AddChild( lst );</b>

	app.AddLayout( lay );
}

function lst_OnTouch( title, body, type, index )
{
	app.ShowPopup( "Touched Item = " + title );
}
</sample>

<sample Title + Body>

function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>var data = "The Hobbit:Author^c^ J.R.R. Tolkien:null";
	data += ",Watership Down:Author^c^ Richard Adams:null";
	lst = app.CreateList( data, 0.8, 0.4 );
	lst.SetOnTouch( lst_OnTouch );
	lay.AddChild( lst );</b>

	app.AddLayout( lay );
}

function lst_OnTouch( title, body, type, index )
{
	app.ShowPopup( "Touched Item = " + title );
}
</sample>

<sample Orange Buttons>

function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>var data = "Button 1,Button 2,Button 3,Button 4";
	lst = app.CreateList( data, 0.8, 0.8, "OrangeButton" );
	lst.SetBackColor( "#ffffff" );
	lst.SetPadding( 0.1, 0.1, 0.1, 0.1 );
	lst.SetOnTouch( lst_OnTouch );
	lay.AddChild( lst );</b>

	app.AddLayout( lay );
}

function lst_OnTouch( title, body, type, index )
{
	app.ShowPopup( "Touched Item = " + title );
}
</sample>

<sample Gradient Background>

function OnStart()
{
	lay = app.CreateLayout( "Linear", "VCenter,FillXY" );

	<b>var data = "";
	for( var i = 1; i <= 30; i++ )
	{
		if( i > 1 ) data += ",";
		data += "Item " + i + ":Details for item " + i + ":null";
	}
	lst = app.CreateList( data, 1, 1, "WhiteGrad" );
	lst.SetTextColor1( "#ff555558");
	lst.SetTextColor2( "#ff555558" );
	lst.SetTextMargins( 0.04, 0, 0, 0 );
	lst.SetOnTouch( lst_OnTouch );
	lay.AddChild( lst );</b>

	app.AddLayout( lay );
}

function lst_OnTouch( title, body, type, index )
{
	app.ShowPopup( "Touched Item = " + title );
}
</sample>

 */

