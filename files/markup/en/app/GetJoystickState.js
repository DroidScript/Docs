// ------------- HEADER SECTION -------------


/** # GetJoystickState #
 * 
 * $$ app.GetJoystickState(id, key) $$ 
 * @param {num_int} id 
 * @param {str} key A|B|C|X|Y|Z|R1|L1|Left|Right|Up|Down|Start|ThumbLeft|ThumbRight|axis-0..9|btn-1..12
 * @returns num
*/


// ------------- LONG DESCRIPTION ------------- 

/** @Description
Returns the state of a connected joystick. The key can have many values depending on the used controller. The axis-n keys are for different joystick x/y/z axes or the D-Pad - you will best try which key stands for which button with the attached example.

See Also: @GetJoystickName
 */



// ------------- SAMPLES ------------- 


    
/**
@sample Show States
function OnStart()
{
	lay = app.CreateLayout( "linear" );

    txt = app.CreateText( "", 1, 1, "monospace,left,multiline" );
	lay.AddChild( txt );

	app.AddLayout( lay );

    app.SetDebug( "console" );
	app.Animate( ShowStates, 10 );
}

function ShowStates()
{
    var keys = "A|B|C|X|Y|Z|R1|L1|Up|Down|Left|Right|Start|ThumbLeft|ThumbRight|" +
        "axis-0|axis-1|axis-2|axis-3|axis-4|axis-5|axis-6|axis-7|axis-8|axis-9";

    keys = keys.split("|");

    var lst = [];
    for(var i in keys)
    {
        <b>var state = app.GetJoystickState(0, keys[i]);</b>
        lst.push(keys[i] + ": " + state);
    }

    txt.SetText( lst.join( "\n" ) );
}
 */
    
            
    
/**
@sample Python Show States
from native import app

def OnStart():
    global txt
    lay = app.CreateLayout("linear")

    txt = app.CreateText("", 1, 1, "monospace,left,multiline")
    lay.AddChild(txt)

    app.AddLayout(lay)

    app.SetDebug("console")
    app.Animate(ShowStates, 10)

def ShowStates(time, dtime):
    keys = "A|B|C|X|Y|Z|R1|L1|Up|Down|Left|Right|Start|ThumbLeft|ThumbRight|" \
           "axis-0|axis-1|axis-2|axis-3|axis-4|axis-5|axis-6|axis-7|axis-8|axis-9"

    keys = keys.split("|")

    lst = []
    for i in keys:
        state = app.GetJoystickState(0, i)
        lst.append(i + ": " + str(state))

    txt.SetText("\n".join(lst))
 */
    
            