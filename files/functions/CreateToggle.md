Toggle buttons are basically [Buttons](CreateButton.htm) with an additional light bar indicating if it is activated or not. The user can toggle this state by pressing on it.
%c
You can allow the toggle button to auto-size by leaving out the dimensions or you can specify a **width** and **height** as decimal fractions of the screen's width and height.

Use the **SetOnTouch** method of your button object to set the name of a function you want to be called when the button is touched.

You can get the state of the toggle button at any time using the **GetChecked** method of the button. The button state is also passed into your OnTouch callback function as a parameter every time the button is touched.
