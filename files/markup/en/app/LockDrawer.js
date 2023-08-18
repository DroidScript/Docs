
/** # LockDrawer #
 * @brief Hide and lock a drawer
 * Make drawer on a specific side unaccessible for the app and the user, hiding it if necessary. You can only unlock it using the @UnlockDrawer method.
 * 
 * See Also: @AddDrawer
 * $$ app.LockDrawer(side) $$ 
 * @param {str} side left|right
*/


// LockDrawer.txt --> All the sample codes

/** @Sample
<sample Basic>
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
</sample>

<sample Open and Close Drawer via Button>
function OnStart()
{
	lay = app.CreateLayout( "Linear", "FillXY,VCenter,Left" );

	btnOpen = app.CreateButton( "»", .1, .3, "gray" );
    btnOpen.SetOnTouch( btn_OnTouch );
    btnOpen.SetTextSize( 20 );
	lay.AddChild( btnOpen );

	app.AddLayout( lay );

	layDrawer = app.CreateLayout( "Linear", "Horizontal,FillXY,VCenter,Right" );
	layDrawer.SetBackground( "/Sys/Img/BlueBack.jpg" );

	txt2 = app.CreateText( "Hello" );
	txt2.SetTextSize( 40 );
	layDrawer.AddChild( txt2 );

	btnClose = app.CreateButton( "«", .1, .3, "gray" );
    btnClose.SetOnTouch( btn_OnTouch );
    btnClose.SetTextSize( 20 );
    btnClose.SetMargins( .2 );
	layDrawer.AddChild( btnClose );

	app.AddDrawer( layDrawer, "left", 0.8 );

    <b>app.LockDrawer( "left" );</b>
}

function btn_OnTouch()
{
    if(app.GetDrawerState("left") == "Closed")
        app.OpenDrawer( "left" );
    else // "Open"
        app.CloseDrawer( "left" );
}
</sample>

 */

