If you want the user to enter custom data you probably need the **TextEdit** control. For number input only you can apply the “numbers” **option**.

You can use the **SetOnChange** method of the TextEdit to set the name of a function you want to be called when a the text is changed.

Use the **SetText** and **GetText** functions to set and get the text in the TextEdit.
<sample Using OnChange>

You can change the look of a TextEdit using the **SetBackColor** and **SetTextColor** functions on the TextEdit object.
<sample Blue on White>

You can also set a background image/pattern or background gradient for the List using the **SetBackground** and **SetBackGradient** functions. See [Layouts](CreateLayout.htm) for examples of how to use these functions.
