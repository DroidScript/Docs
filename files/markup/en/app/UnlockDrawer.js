// ------------- HEADER SECTION ------------- 


/** # UnlockDrawer #
 * @brief Unlock a locked drawer
 * Unlocks a locked drawer.
 * See Also @LockDrawer, @AddDrawer
 * $$ app.UnlockDrawer(side) $$ 
 * @param {str} side left|right
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Basic
function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY,VCenter" );

	tgl = app.CreateToggle( "Locked", -1, -1, "fontawesome" );
	tgl.SetPadding( .1, .05, .1, .05 );
	tgl.SetOnTouch( OnLockChange );
	tgl.SetTextSize( 30 );
	lay.AddChild( tgl );

	app.AddLayout( lay );

	layDrawer = app.CreateLayout( "Linear", "FillXY,VCenter" );
	layDrawer.SetBackground( "/Sys/Img/BlueBack.jpg" );

	app.AddDrawer( layDrawer, "left", 0.8 );
}

function OnLockChange( lock )
{
    <b>if( lock ) app.LockDrawer( "left" );
    else app.UnlockDrawer( "left" );</b>
}
 */
    
            