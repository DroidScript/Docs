
/** # PlaySound #
 * Plays a sound file stored remotely or on the local filesystem.
 * 
 * See Also: @CreateMediaPlayer
 * $$ app.PlaySound(file) $$ 
 * @param {str_ptf||str_url} file 
*/


// PlaySound.txt --> All the sample codes

/** @Sample
<sample Play Local Sound File>
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
}</sample>

<!--https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3-->

<sample Play Remote Sound File>
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
}</sample>

 */

