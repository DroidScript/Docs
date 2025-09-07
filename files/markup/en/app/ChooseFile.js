// ------------- HEADER SECTION -------------


/** # ChooseFile #
 * @brief Let the user choose a file
 * ChooseFile opens a file picker for user to select a local file or a file from GoogleDrive, OneDrive or DropBox.
 *
 * See Also: @ReadFile
 * $$ app.ChooseFile(message, type, callback, fldr?, options?) $$
 * @param {str} message
 * @param {str} type file mimetype
 * @param {fnc_json} callback {"pNames":["path","name"],"pTypes":["str_pth||str_uri","str"]}
 * @param {str_pth} [fldr]
 * @param {str_com} [options] persist:keep file permission after reboot,nodownload:prevents file downloads
*/




// ------------- SAMPLES -------------



/**
@sample Choose File by Mimetype
function OnStart()
{
    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    var list = "*_*,application/text,application/apk,application/zip," +
        "audio/mpeg,audio/mp4,audio/ogg,image/png,image/jpeg,text/css," +
        "text/html,text/javascript,text/plain,video/mpeg,video/mp4,video/ogg";

    spnMime = app.CreateSpinner(list);
    lay.AddChild(spnMime);

    btnChoose = app.CreateButton( "Choose File", 0.5, 0.1 );
    btnChoose.SetOnTouch( btnChoose_OnTouch );
    lay.AddChild( btnChoose );

    app.AddLayout( lay );
}

function btnChoose_OnTouch()
{
    <b>app.ChooseFile( "Choose a File", spnMime.GetText(), OnChoose );</b>
}

function OnChoose( file )
{
    alert( "file path: " + file );
}
 */



/**
@sample Python Choose File by Mimetype
from native import app

spnMime = None

def OnStart():
    global spnMime
    lay = app.CreateLayout( "linear", "VCenter,FillXY" )

    list = "*_*,application/text,application/apk,application/zip,"
    list += "audio/mpeg,audio/mp4,audio/ogg,image/png,image/jpeg,text/css,"
    list += "text/html,text/javascript,text/plain,video/mpeg,video/mp4,video/ogg"

    spnMime = app.CreateSpinner(list)
    lay.AddChild(spnMime)

    btnChoose = app.CreateButton( "Choose File", 0.5, 0.1 )
    btnChoose.SetOnTouch( btnChoose_OnTouch )
    lay.AddChild( btnChoose )

    app.AddLayout( lay )

def btnChoose_OnTouch():
    global spnMime
    app.ChooseFile( "Choose a File", spnMime.GetText(), OnChoose )

def OnChoose( file ):
    app.Alert( "file path: " + file )
 */

