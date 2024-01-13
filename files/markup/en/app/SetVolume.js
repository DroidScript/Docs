// ------------- HEADER SECTION -------------


/** # SetVolume #
 * @brief Change volume of a given audio type
 * Set the volume of a given volume type as a number between 0 and 1.
 * 
 * See Also: @GetVolume
 * $$ app.SetVolume(stream, level, options?) $$ 
 * @param {str} stream Alarm|DTMF:Dual Tone Multi-Frequency|Music|Notification|Ring|System|Voicecall
 * @param {num_frc} level 
 * @param {str} [options] ShowUI
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Set Volume
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
 */
    
            
    
/**
@sample Python Set Volume
from native import app

def OnStart():
    lay = app.CreateLayout("linear", "VCenter,FillXY")

    skb = app.CreateSeekBar(1)
    skb.SetRange(1)
    skb.SetOnChange(SetVolume)
    lay.AddChild(skb)

    app.AddLayout(lay)

def SetVolume(value):
    app.SetVolume("Music", value)
    app.PlaySound("/Sys/Snd/Poing.ogg")
 */
    
            