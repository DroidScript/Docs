
/** # CreateSysProc #
 * @abbrev sys
 * Creates a shell SystemProcess (ie&period; “sh”, “su” if <red>root</red> or “busybox” if <blue>installed</blue>) which can be reused throughout the program.
 * 
 * If env or dir are not provided HOME and TMDDIR are set by the component.
 * $$ sys = app.CreateSysProc(cmd, env, dir, options) $$ 
 * @param {str:program name} cmd sh|su|busybox
 * @param {str} env 
 * @param {str_ptd} dir 
 * @param {str_com} options combine:combines stdout and stderr|builder:force use of proc builder
 * @returns dso-SysProc
*/


/** ## Methods ##
 * These are the methods available for CreateSysProc
 */


/** ### Batch ###
 * Batch method calls to be able to set all object's properties at once. * Note that you need to specify each parameter (use “” or <js nobox>null</js> to leave some out) * Inherited methods can be called by appending an underscore to the function name (ie. <js nobox>txt.Batch({ SetBackColor_: [“red”] })</js>
 * $$ sys.Batch(properties) $$
 * @param {obj} properties { COMMAND:lst
 */


/** ### Err ###
 * Read data from stderr
 * $$ sys.Err(maxLines, options) $$
 * @param {num_int} maxLines 
 * @param {str_com} options nowait:dont wait for input
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ sys.GetType() $$
 * @returns str-SysProc
 */


/** ### In ###
 * Read data from stdin
 * $$ sys.In(maxLines, options) $$
 * @param {num_int} maxLines 
 * @param {str_com} options nowait:dont wait for input
 */


/** ### Method ###
 * Allows access to other functions defined on the object in Java via reflection. *  * <premium>
 * $$ sys.Method(name, types, p1, p2, p3, p4) $$
 * @param {str} name 
 * @param {lst} types boolean,char,byte,short,int,long,float,double,String,CharSequence,...
 * @param {str} p1 
 * @param {str} p2 
 * @param {str} p3 
 * @param {str} p4 
 * @returns all
 */


/** ### Out ###
 * Writes a command to stdout. A trailing linebreak will execute it.
 * $$ sys.Out(command) $$
 * @param {str} command 
 */


/** ### ReadFileAsByte ###
 * Returns the first byte of a file.
 * $$ sys.ReadFileAsByte(file) $$
 * @param {str_ptf} file 
 * @returns num_byt
 */


/** ### SetOnError ###
 * %cb% something was written to stderr
 * $$ sys.SetOnError(callback) $$
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["str"]}
 */


/** ### SetOnInput ###
 * %cb% something was written to stdout
 * $$ sys.SetOnInput(callback) $$
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["str"]}
 */


/** ### WriteToFile ###
 * Write a binary string to a file.
 * $$ sys.WriteToFile(file, data) $$
 * @param {str_ptf} file 
 * @param {str} data 
 */

// CreateSysProc.txt --> All the sample codes

/** @Sample
<sample Basic>
function OnStart()
{
    lay = app.CreateLayout( "linear" );

    txt = app.CreateText( "", 1, 1, "Log,Monospace,autoscale" );
    lay.AddChild( txt );

    app.AddLayout( lay );

    sys = app.CreateSysProc( "sh" );
    sys.Out( "netstat\n" );
    sys.SetOnInput( sys_OnInput );
    sys.SetOnError( sys_OnError );
    sys.Out( "netstoat\n" );
}

function sys_OnInput( msg )
{
    txt.Log( msg );
}

function sys_OnError( msg )
{
    txt.Log( msg );
}
</sample>

<sample Colored>
function OnStart()
{
    lay = app.CreateLayout( "linear" );

    scr = app.CreateScroller( 1, 1, "horizontal" );
    lay.AddChild( scr );

    txt = app.CreateText( "", 1, -1, "monospace,log" );
    txt.SetTextSize( 8 );
    txt.SetLog( 1000 );
    scr.AddChild( txt );

    app.AddLayout( lay );

    sys = app.CreateSysProc( "sh" );
    sys.SetOnInput( sys_OnInput );
    sys.SetOnError( sys_OnError );

    Exec( "netstat\n" );

    // filter files containing 'D' in /sdcard/ and forward to stderr
    Exec( "ls -al /sdcard/ | grep D >&2\n" );

}

function Exec( cmd )
{
    sys.Out( cmd );
    txt.Log( cmd, "green" );
    scr.ScrollTo( 0, txt.GetHeight() );
}

function sys_OnInput( msg )
{
    txt.Log( msg );
    scr.ScrollTo( 0, txt.GetHeight() );
}

function sys_OnError( msg )
{
    txt.Log( msg, "red" );
    scr.ScrollTo( 0, txt.GetHeight() );
}
</sample>

 */

