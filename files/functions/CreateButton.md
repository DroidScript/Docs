Buttons created with the **CreateButton** method are used for interacting with the app. This is done by calling a callback function after clicking on the button. You can specify such a callback function with the **SetOnTouch** Method:
<js>
btn.SetOnTouch( btn\_OnTouch );

function btn\_OnTouch() {
	// your OnTouch code goes here
}
</js>

### Styling
You can allow the button to auto-size by leaving out the dimensions
<sample Default Size>

or you can specify a **width** and **height** as decimal fractions.
<sample Fixed Size>

Setting the width and height to _-1_ whilst using the “FillX” option will allow it to fill the layout width.
<sample Fill Layout Width>

You can customize the visual look in many ways by either using one of the existing style **options** “Alum” or “Gray”, or you can use “Custom” and define a custom style with the **SetStyle** method.
<sample Change Style>
