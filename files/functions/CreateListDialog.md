If you want a quick way to let the user select one or even multiple items of a given dataset you can use the ListDialog.
Use the **SetOnTouch** method of the ListDialog object to set the name of a function you want to be called every times a list item is selected. The selected item is passed that function as parameter.
<sample Basic>

ou can use the “Multi” **option** to create a ListDialog with check boxes against each item. This allows multiple list items to be selected. An extra parameter isChecked is passed to the OnTouch callback function when a check box is checked or unchecked.
<Example Multi>
