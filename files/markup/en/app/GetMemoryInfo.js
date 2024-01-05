// ------------- HEADER SECTION -------------


/** # GetMemoryInfo #
 * @brief Get RAM memory information
 * Returns an object containing informations about the RAM memory.
 * $$ app.GetMemoryInfo() $$ 
 * @returns obj-{ avail:num_byt&comma; low:bin&comma; threshold:num_byt&comma; total:num_byt }
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Basic
function OnStart()
{
    <b>var mem = app.GetMemoryInfo();</b>
    var s = JSON.stringify( mem );
    app.Alert( s.replace( /,/g, ",\n ") );
}
 */
    
            
    
/**
@sample Show Memory
function OnStart()
{
    lay = app.CreateLayout( "linear", "fillxy,vcenter" );

    txt = app.CreateText( "", .8, -1, "monospace,multiline" );
    txt.SetTextSize( 25 );
    lay.AddChild( txt );

    app.AddLayout( lay );

    app.Animate( ShowMemory, 2 );
}

function ShowMemory() {

    var mem = app.GetMemoryInfo();

    text =
        Math.round( mem.avail / 1024 ** 2 ) + "/" +
        Math.round( mem.total / 1024 ** 2 ) + " MB<br><br>" +
        Math.round( 100 * mem.avail / mem.total ) + "%";

    if( mem.low ) color = "red";
    else color = "white";

    txt.SetHtml( text.fontcolor( color ));
}
 */
    
            
    
/**
@sample Python Basic
from native import app

def OnStart():
    mem = app.GetMemoryInfo()
    s = str(mem).replace(",", ",\n")
    app.Alert(s)
 */
    
            
    
/**
@sample Python Show Memory
from native import app

def OnStart():
    global txt
    lay = app.CreateLayout("linear", "fillxy,vcenter")

    txt = app.CreateText("", .8, -1, "monospace,multiline")
    txt.SetTextSize(25)
    lay.AddChild(txt)

    app.AddLayout(lay)

    app.Animate(ShowMemory, 2)

def ShowMemory(time, dtime):
    mem = app.GetMemoryInfo()

    text = str(round(mem.avail / 1024 ** 2)) + "/" + str(round(mem.total / 1024 ** 2)) + " MB<br><br>" + str(
        round(100 * mem.avail / mem.total)) + "%"

    if mem.low:
        color = "red"
    else:
        color = "white"

    txt.SetHtml(text.fontcolor(color))
 */
    
            