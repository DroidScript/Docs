// ------------- HEADER SECTION -------------


/** # CreateSysProc #
 * @abbrev sys
 * @brief Returns a new SysProc object
 * Creates a shell SystemProcess (ie&period; “sh”, “su” if <red>root</red> or “busybox” if <blue>installed</blue>) which can be reused throughout the program.
 *
 * If env or dir are not provided HOME and TMDDIR are set by the component.
 * $$ sys = app.CreateSysProc(cmd, env?, dir?, options?) $$
 * @param {str:program name} cmd sh|su|busybox
 * @param {str} [env]
 * @param {str_ptd} [dir]
 * @param {str_com} [options] combine:combines stdout and stderr|builder:force use of proc builder
 * @returns dso-SysProc
*/




// ------------- VISIBLE METHODS & PROPERTIES -------------


/** @extern Batch */

/** @extern data */

/** ### Err ###
 * @brief Read from stderr
 * Read data from stderr
 * $$ sys.Err(maxLines, options?) $$
 * @param {num_int} maxLines
 * @param {str_com} [options] nowait:dont wait for input
 */


/** ### GetType ###
 * Returns the control class name.
 * $$ sys.GetType() $$
 * @returns str-SysProc
 */


/** ### In ###
 * @brief Read from stdin
 * Read data from stdin
 * $$ sys.In(maxLines, options?) $$
 * @param {num_int} maxLines
 * @param {str_com} [options] nowait:dont wait for input
 */


/** @extern Method */

/** ### Out ###
 * @brief Write to stdout
 * Writes a command to stdout. A trailing linebreak will execute it.
 * $$ sys.Out(command) $$
 * @param {str} command
 */


/** ### ReadFileAsByte ###
 * @brief Read first byte of a file
 * Returns the first byte of a file.
 * $$ sys.ReadFileAsByte(file) $$
 * @param {str_ptf} file
 * @returns num_byt
 */


/** ### SetOnError ###
 * @brief called when stderr changed
 * %cb% something was written to stderr
 * $$ sys.SetOnError(callback) $$
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["str"]}
 */


/** ### SetOnInput ###
 * @brief called when stdout changed
 * %cb% something was written to stdout
 * $$ sys.SetOnInput(callback) $$
 * @param {fnc_json} callback {"pNames":["data"],"pTypes":["str"]}
 */


/** ### WriteToFile ###
 * @brief Write binary data to file
 * Write a binary string to a file.
 * $$ sys.WriteToFile(file, data) $$
 * @param {str_ptf} file
 * @param {str} data
 */



// ------------- SAMPLES -------------



/**
@sample Basic
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
 */



/**
@sample Colored
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
 */



/**
@sample Python Basic
from native import app

def OnStart():
    global txt
    lay = app.CreateLayout( "linear" )

    txt = app.CreateText( "", 1, 1, "Log,Monospace,autoscale" )
    lay.AddChild( txt )

    app.AddLayout( lay )

    sys = app.CreateSysProc( "sh" )
    sys.Out( "netstat\n" )
    sys.SetOnInput( sys_OnInput )
    sys.SetOnError( sys_OnError )
    sys.Out( "netstoat\n" )

def sys_OnInput( msg ):
    txt.Log( msg )

def sys_OnError( msg ):
    txt.Log( msg )
 */



/**
@sample Python Colored
from native import app

def OnStart():
    global scr, txt, sys
    lay = app.CreateLayout( "linear" )

    scr = app.CreateScroller( 1, 1, "horizontal" )
    lay.AddChild( scr )

    txt = app.CreateText( "", 1, -1, "monospace,log" )
    txt.SetTextSize( 8 )
    txt.SetLog( 1000 )
    scr.AddChild( txt )

    app.AddLayout( lay )

    sys = app.CreateSysProc( "sh" )
    sys.SetOnInput( sys_OnInput )
    sys.SetOnError( sys_OnError )

    Exec( "netstat\n" )

    # filter files containing 'D' in /sdcard/ and forward to stderr
    Exec( "ls -al /sdcard/ | grep D >&2\n" )

def Exec( cmd ):
    sys.Out( cmd )
    txt.Log( cmd, "green" )
    scr.ScrollTo( 0, txt.GetHeight() )

def sys_OnInput( msg ):
    txt.Log( msg )
    scr.ScrollTo( 0, txt.GetHeight() )

def sys_OnError( msg ):
    txt.Log( msg, "red" )
    scr.ScrollTo( 0, txt.GetHeight() )
 */
