
/** # DisableKeys #
 * 
 * $$ app.DisableKeys(keyList) $$ 
 * @param {str_com} keyList VOLUME_DOWN,VOLUME_UP,FORWARD,BACK,MENU,ENTER,...
*/


// DisableKeys.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
DisableKeys prevents the default behavior of several hard, soft or keyboard keys.
This way you can apply a custom action for them using @SetOnKey.

You can find the complete list of keycodes on the [Android Developer Page](https://developer.android.com/reference/android/view/KeyEvent#summary)
 */

// DisableKeys.txt --> All the sample codes

/** @Sample
<sample Surprise>
var prev;

function OnStart()
{
    <b>app.DisableKeys( "VOLUME_DOWN,VOLUME_UP" );</b>

    lay = app.CreateLayout( "Linear", "FillX" );
    lay.SetPadding( 0, .85 );
    lay.Hide();

    img = app.CreateImage( "/Sys/Img/Hello.png", -1, .3 );
    lay.AddChild( img );

    app.AddLayout( lay );

    app.ShowPopup( "Press the volume keys!" );
    app.SetOnKey( OnKey );
}

function OnKey(action, name, code, extra)
{
    if( action != prev ) {
        if( action == "Down" ) lay.Animate( "SlideFromBottom", null, 300 );
        if( action ==   "Up" ) lay.Animate( "SlideToBottom"  , null, 300 );
    }
    prev = action;
}
</sample>

 */

