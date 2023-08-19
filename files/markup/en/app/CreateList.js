
/** # CreateList #
 * @abbrev lst
 * @brief Returns a new List object
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



// -------- VISIBLE METHODS & PROPERTIES --------- 


/** ### AddItem ###
 * Adds an entry to the list.
 * $$ lst.AddItem(title, body, image) $$
 * @param {str} title 
 * @param {str} body 
 * @param {str||str_ptf} image 
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

/**
 * @extern ClearFocus
 */

/** ### Expand ###
 * ?
 * $$ lst.Expand() $$
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


/**
 * @extern GetLeft
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


/**
 * @extern GetParent
 */

/**
 * @extern GetPosition
 */

/**
 * @extern GetTextSize
 */

/**
 * @extern GetTop
 */

/** ### GetType ###
 * Returns the control class name.
 * $$ lst.GetType() $$
 * @returns str-List
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

/** ### InsertItem ###
 * Inserts an item at s specific index in the list.
 * $$ lst.InsertItem(index, title, body, image) $$
 * @param {num_int} index 
 * @param {str} title 
 * @param {str} body 
 * @param {str||str_ptf} image 
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


/**
 * @extern SetEllipsize
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


/**
 * @extern SetDescription
 */

/**
 * @extern SetEnabled
 */

/**
 * @extern SetFontFile
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


/**
 * @extern SetMargins
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
 * @extern SetTextColor
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


/**
 * @extern SetTextShadow
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


/**
 * @extern SetTextSize
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


/**
 * @extern SetVisibility
 */

/**
 * @extern Show
 */

/**
 * @extern Tween
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

