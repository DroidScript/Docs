// ------------- HEADER SECTION -------------


/** # SetOnKey #
 * @brief Catch key events fired in your app
 *
 * $$ app.SetOnKey(callback) $$
 * @param {fnc_json} callback {"pNames":["action","name","keycode","extrakeys"],"pTypes":["str-DOWN|UP","str-ENTER,VOLUME_DOWN,VOLUME_UP,BACK,MENU,...","num_int","str-Shift,Ctrl,Alt,Meta"]}
*/


// ------------- LONG DESCRIPTION -------------

/** @Description
You can use SetOnKey for receiving and handling all key events fired in the application.

You may want to use it with **DisableKeys** - i.e. for defining a custom _ENTER_ command for automatic control focussing.

You can find the complete list of keys and their codes on the [Android Developer Page](https://developer.android.com/reference/android/view/KeyEvent#summary).

See Also: @SimulateKey
 */



// ------------- SAMPLES -------------



/**
@sample Demonstration
app.DisableKeys( 'VOLUME_DOWN,VOLUME_UP,BACK' );

function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    txt = app.CreateText( "", -1, -1, "multiline,left,monospace" );
    lay.AddChild( txt );

    edt = app.CreateTextEdit( "", .8, .1 );
    lay.AddChild( edt );

    app.AddLayout( lay );

    <b>app.SetOnKey( OnKey );</b>

    edt.Focus();
    app.ShowKeyboard( edt )
    edt.Gone();
}

function OnKey(action, name, code, extra) {
    var text =
        "action:" + action +
        "\nname  :" + name +
        "\ncode  :" + code +
        "\nextra :" + extra;

    txt.SetText( text );
}
 */



/**
@sample Surprise
var prev;

function OnStart()
{
    app.DisableKeys( "VOLUME_DOWN,VOLUME_UP" );
    app.ShowPopup( "Press the volume keys!" );

    lay = app.CreateLayout( "Linear", "FillX" );
    lay.SetPadding( 0, .85 );
    lay.Hide();

    img = app.CreateImage( "/Sys/Img/Hello.png", -1, .3 );
    lay.AddChild( img );

    app.AddLayout( lay );

    <b>app.SetOnKey( OnKey );</b>
}

function OnKey(action, name, code, extra)
{
    if( action != prev ) {
        if( action == "Down" ) lay.Animate( "SlideFromBottom", null, 300 );
        if( action ==   "Up" ) lay.Animate( "SlideToBottom"  , null, 300 );
    }
    prev = action;
}
 */



/**
@sample Python Demonstration
from native import app

app.DisableKeys( "VOLUME_DOWN,VOLUME_UP,BACK" )

def OnStart():
    global txt
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    txt = app.CreateText( "", -1, -1, "multiline,left,monospace" )
    lay.AddChild( txt )

    edt = app.CreateTextEdit( "", .8, .1 )
    lay.AddChild( edt )

    app.AddLayout( lay )

    <b>app.SetOnKey( OnKey )</b>

    edt.Focus()
    app.ShowKeyboard( edt )
    edt.Gone()

def OnKey(action, name, code, extra):
    text = f"""
    action: {action}
    name: {name}
    code: {code}
    extra: {extra}"""

    txt.SetText( text )
 */



/**
@sample Python Surprise
from native import app

prev = None

def OnStart():
    global lay
    app.DisableKeys( "VOLUME_DOWN,VOLUME_UP" )
    app.ShowPopup( "Press the volume keys!" )

    lay = app.CreateLayout( "Linear", "FillX" )
    lay.SetPadding( 0, .85 )
    lay.Hide()

    img = app.CreateImage( "/Sys/Img/Hello.png", -1, .3 )
    lay.AddChild( img )

    app.AddLayout( lay )

    app.SetOnKey( OnKey )

def OnKey(action, name, code, extra):
    global prev

    if action != prev:
        if action == "Down":
            lay.Animate( "SlideFromBottom", None, 300 )
        if action == "Up":
            lay.Animate( "SlideToBottom", None, 300 )
    prev = action
 */
