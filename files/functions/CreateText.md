If you want to display text in your app you can use the Text object. You can use the “Multiline” **option** to allow multi-line text and the “Left” or “Right” options to align the text. The default is single line centered text.
Other options you will see used in the samples include “AutoScale”, “Bold”, “Html” and “FontAwesome”.
Use the **SetText** and **GetText** functions of the Text object to set and get it's text.
<sample Single line>

You can change the look of a Text using the **SetBackColor** and **SetTextColor** functions on the Text object.
<sample Multi line>

Text can be shortened using ellipsis (...) when the size of the control is too small to show all the text. Use the **SetEllipsize** to control where the ellipsis is placed. Available modes are “start”, “middle”, “end” and “marq”.
<sample Ellipsize>

You can also set a background image/pattern or background gradient for the Text using the **SetBackground** and **SetBackGradient** functions. See [Layouts](CreateLayout.htm) for examples of how to use these functions.
