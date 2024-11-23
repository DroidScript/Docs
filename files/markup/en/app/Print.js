// ------------- HEADER SECTION -------------


/** # Print #
 * @brief Print content of the app screen
 * Print the content of the app screen.
 * $$ app.Print() $$
*/



// ------------- SAMPLES -------------



/**
@sample Print the screen
function OnStart()
{
	 lay = app.CreateLayout("Linear", "VCenter,FillXY")
   lay.SetBackColor("yellow")

   txt = app.AddText(lay, "Hello world")

   app.AddLayout( lay )

   setTimeout(Print, 1000)
}

function Print()
{
   app.Print()
}
 */
