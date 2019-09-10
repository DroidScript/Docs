CheckBoxes can be used to let the user en- or disable specific options in your app. They consist of a ticker box on the left and a text label on the right side.

It is disabled by default, but you can enable it with the **SetChecked** method to change its initial state.

Use the SetOnTouch method of the CheckBox object to define a function you want to be called when the CheckBox is touched. There you can read  the 'isChecked' parameter to get the current state of the CheckBox: