// ------------- HEADER SECTION -------------


/** # SysExec #
 * @brief Execute a shell command on the android shell
 * Executes a shell command on the android shell. **NOTE:** You have to add a '`exit`' command at the end of your script because the shell does not terminate automatically after finishing.
 * 
 * See Also: @ExtExec
 * $$ app.SysExec(command, options='', maxRead?, timeout?) $$ 
 * @param {str} command 
 * @param {str} [options=''] log:logs output to console,noread:dont read result (just execute),sh|su
 * @param {num} [maxRead] 
 * @param {num_sec} [timeout] 
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample ListDir SH
function OnStart()
{
    <b>var delim = "\0";
    var list = app.SysExec( 'ls -ap /sdcard/;exit', "sh,log" );
    list = list.split( "\n" ).join( delim );</b>

	lay = app.CreateLayout( "linear", "VCenter,FillXY" );

	lst = app.CreateList( list, 1, 1, "", delim );
	lay.AddChild( lst );

	app.AddLayout( lay );
}
 */
    
            
    
/**
@sample Python ListDir SH
from native import app

def OnStart():
    delim = "\0"
    list = app.SysExec('ls -ap /sdcard/;exit', "sh,log")
    list = list.split("\n").join(delim)

    lay = app.CreateLayout("linear", "VCenter,FillXY")

    lst = app.CreateList(list, 1, 1, "", delim)
    lay.AddChild(lst)

    app.AddLayout(lay)
 */
    
            