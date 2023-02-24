
/** # ExtExec #
 * 
 * $$ app.ExtExec(name, file, args, options) $$ 
 * @param {str} name termux
 * @param {str_ptf} file 
 * @param {str} args 
 * @param {str} options hide
*/


// ExtExec.md --> Complete documentation. Sample codes is at the bottom of this file.

/** @Description
ExtExec allows you to execute Linux shell commands in the powerful Linux environment provided by the free app called Termux.

<premium>

The Termux app runs as a service and there's almost no limit to what you can achieve with a full blown Linux machine running on your Android device!

How about installing git, or nodejs or using ssh or gzip.
Try typing 'busybox' at the terminal prompt to see what built-in commands are already available to you.

### Enable Termux
To **enable termux** support you have to install [Termux](https://play.google.com/store/apps/details?id=com.termux) and the [Tasker](https://play.google.com/store/apps/details?id=com.termux.tasker) Plugin from PlayStore first.

Then give termux **sdcard permissions** in the Android settings under apps/termux.

After that create a symbolic link from the tasker plugin folder to your home directory:
<bash>mkdir -p .termux /sdcard/termux/scripts
ln -s /sdcard/termux/scripts .termux/tasker</bash>Finally you can run a termux shell script from inside DroidScript:
 */

// ExtExec.txt --> All the sample codes

/** @Sample
<sample Open Termux and pass arguments>
function OnStart()
{
    app.WriteFile( "/sdcard/termux/scripts/hello.sh", "echo Hello $1 and $2" );
    <b>var err = app.ExtExec( "termux", "hello.sh", 'World "' + app.GetUser() + '"', "" );</b>
    if( err ) app.Alert( "Termux Error:" + err );
}
</sample>

<sample Execute in Background and retreive output>
var itv, lock = "/sdcard/.termuxlock";
var script = `
{  # this is a comment
    echo This is a message  # prints to stdout
    sleep 1  # waits 1 second
    echo This is an error  1>&2  # prints to stderr
} 1>/sdcard/out.txt 2>/sdcard/err.txt; # forward stdout and stderr to files
rm ` + lock; // remove script lock file

function OnStart()
{
    app.WriteFile( "/sdcard/termux/scripts/hello.sh", script );
    app.WriteFile( lock, "" );

    app.ShowProgress( "Script is running" );
    <b>var err = app.ExtExec( "termux", "hello.sh", "", "hide" );</b>
    if(err) app.Alert(err);


    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    txt = app.CreateText( "", .8, .8, "monospace,multiline,left" );
    lay.AddChild( txt );

    app.AddLayout( lay );

    itv = setInterval( CheckReady, 100 );
}

function CheckReady()
{
    if( !app.FileExists( lock ))
    {
        app.HideProgress();
        clearInterval(itv);

        var stdout = app.ReadFile( "/sdcard/out.txt" );
        var stderr = app.ReadFile( "/sdcard/err.txt" );

        var text =
            "stdout:\n" + stdout + "\n\n" +
            "stderr:\n" + stderr;

        txt.SetText( text );
    }
}
</sample>

 */

