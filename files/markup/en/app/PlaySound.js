// ------------- HEADER SECTION -------------


/** # PlaySound #
 * @brief Plays a local or remote sound file
 * Plays a sound file stored remotely or on the local filesystem.
 *
 * See Also: @CreateMediaPlayer
 * $$ app.PlaySound(file) $$
 * @param {str_ptf||str_url} file
*/




// ------------- SAMPLES -------------



/**
@sample Play Local Sound File
function OnStart(){
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btn = app.CreateButton( "Press Me", 0.3, 0.1 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
    <b>app.PlaySound( "/Sys/Snd/Trill.ogg" );</b>
}
 */



/**
@sample Play Remote Sound File
function OnStart(){
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btn = app.CreateButton( "Press Me", 0.3, 0.1 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
    <b>app.PlaySound( "https://sgarman.net/silly.mp3" );</b>
}
 */



/**
@sample Python Play Local Sound File
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    btn = app.CreateButton("Press Me", 0.3, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    app.AddLayout(lay)

def btn_OnTouch():
    app.PlaySound("/Sys/Snd/Trill.ogg")
 */



/**
@sample Python Play Remote Sound File
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    btn = app.CreateButton("Press Me", 0.3, 0.1)
    btn.SetOnTouch(btn_OnTouch)
    lay.AddChild(btn)

    app.AddLayout(lay)

def btn_OnTouch():
    app.PlaySound("https://sgarman.net/silly.mp3")
 */
