// ------------- HEADER SECTION ------------- 


/** # PlayRingtone #
 * @brief Play specific ringtone type
 * Play a specific ringtone type based on the users device settings for ringtones. _Type_ can be “Alarm”, “Notification” or “Ringtone”.
 * $$ app.PlayRingtone(type) $$ 
 * @param {str} type Alarm|Notification|Ringtone
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Play Notification Sound
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	btn = app.CreateButton( "Press Me", 0.3, 0.1 );
	btn.SetOnTouch( btn_OnTouch );
	lay.AddChild( btn );

	app.AddLayout( lay );
}

function btn_OnTouch()
{
    app.PlayRingtone("Notification");
}
 */
    
            