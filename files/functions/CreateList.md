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
