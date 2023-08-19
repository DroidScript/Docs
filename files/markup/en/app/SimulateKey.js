// ------------- HEADER SECTION ------------- 


/** # SimulateKey #

 * Simulates a key event on an app object.
 * 
 * You can find the complete list of key names on the [Android Developer Page](https://developer.android.com/reference/android/view/KeyEvent#KEYCODE_0)
 * $$ app.SimulateKey(obj, keyName, modifiers, pause) $$ 
 * @param {dso} obj 
 * @param {str} keyName 
 * @param {str} modifiers META_META_ON,META_RIGHT_ON,NUM_LOCK_ON,SCROLL_LOCK_ON,SHIFT_LEFT_ON,SHIFT_MASK,SHIFT_ON,SHIFT_RIGHT_ON,SYM_ON
 * @param {num} pause 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Infinite Monkey
function OnStart()
{
	lay = app.CreateLayout( "linear", "VCenter,FillXY" );
	edt = app.CreateTextEdit( "", 0.8, 0.3, "nokeyboard" );
	lay.AddChild( edt );
	app.AddLayout( lay );

	app.Animate( SimulateKey, 2 );
}

function SimulateKey()
{
    var ran = 65 + Math.floor(Math.random() * 26);
    var char = String.fromCharCode( ran );
    <b>app.SimulateKey( edt, char );</b>
}
 */
    
            