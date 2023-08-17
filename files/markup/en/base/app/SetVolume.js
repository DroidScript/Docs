
/** # SetVolume #
 * Set the volume of a given volume type as a number between 0 and 1.
 * 
 * See Also: @GetVolume
 * $$ app.SetVolume(stream, level, options) $$ 
 * @param {str} stream Alarm|DTMF:Dual Tone Multi
 * @param {num_frc} level 
 * @param {str} options ShowUI
*/


// SetVolume.txt --> All the sample codes

/** @Sample
<sample Set Volume>
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	skb = app.CreateSeekBar( 1 );
	skb.SetRange( 1 );
	skb.SetOnChange( SetVolume );
	lay.AddChild( skb );

	app.AddLayout( lay );
}

function SetVolume( value )
{
    <b>app.SetVolume( "Music", value );</b>
    app.PlaySound( "/Sys/Snd/Poing.ogg" );
}
</sample>

 */
