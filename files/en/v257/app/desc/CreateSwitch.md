Switches are a variant of [toggle buttons](CreateToggle.htm) with another look.
%c
Use the **SetOnTouch** method of the switch object to set the name of a function you want to be called when the switch is touched.

You can get the state of the switch at any time using the **GetChecked** method. The switch state is also passed into your OnTouch callback function as a parameter every time the switch is touched.
