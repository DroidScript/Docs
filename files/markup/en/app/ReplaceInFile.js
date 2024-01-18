// ------------- HEADER SECTION -------------


/** # ReplaceInFile #
 * @brief Replace text in a local file
 * Replaces all occurances of some text or a regex pattern in a local file with some other text.
 * $$ app.ReplaceInFile(file, txt, rep, options?) $$
 * @param {str_ptf} file
 * @param {str} txt
 * @param {str} rep
 * @param {str_com} [options]
*/




// ------------- SAMPLES -------------



/**
@sample Replace Text in File
function OnStart()
{
    app.WriteFile( "file.txt", "Hello world, exciting world." );
	<b>app.ReplaceInFile( "file.txt", "world", "user" );</b>
    app.Alert( app.ReadFile( "file.txt" ), "Result" );
}
 */



/**
@sample Replace Regular Expression
function OnStart()
{
    app.WriteFile( "file.txt", "Hello world, exciting world." );
	<b>app.ReplaceInFile( "file.txt", "(\\w+)o (\\w+)", "$2 is $1" );</b>
    app.Alert( app.ReadFile( "file.txt" ), "Result" );
}
 */



/**
@sample Python Replace Text in File
from native import app

def OnStart():
    app.WriteFile("file.txt", "Hello world, exciting world.")
    app.ReplaceInFile("file.txt", "world", "user")
    app.Alert(app.ReadFile("file.txt"), "Result")
 */



/**
@sample Python Replace Regular Expression
from native import app

def OnStart():
    app.WriteFile("file.txt", "Hello world, exciting world.")
    app.ReplaceInFile("file.txt", "(\\w+)o (\\w+)", "$2 is $1")
    app.Alert(app.ReadFile("file.txt"), "Result")
 */
