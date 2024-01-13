// ------------- HEADER SECTION -------------


/** # GetMetadata #
 * Returns a string list of metadata values contained in an audio file.
 * 
 * See Also: @CreateMediaPlayer
 * $$ app.GetMetadata(file, keys?) $$ 
 * @param {str_ptf} file 
 * @param {str_com} [keys] album,artist,genre,title,composer,author,duration,bitrate,width,height
 * @returns str_com
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Retreive all Metadata
function OnStart()
{
    app.ChooseFile( "Choose an audio file", "audio/mpeg", OnChoose );
}

function OnChoose( path )
{
    <b>var keys = (
        "album,artist,genre,title,composer," +
        "author,duration"
        ).split(",");

    var data = app.GetMetadata( path, keys )
    data = data.slice(1).split(",");</b>

    var lst = [];
    for(var i in keys) lst.push(keys[i] + ": " + data[i]);

    app.Alert( lst.join( "\n" ), path );
}
 */
    
            
    
/**
@sample Python Retreive all Metadata
from native import app

def OnStart():
    app.ChooseFile("Choose an audio file", "audio/mpeg", OnChoose)

def OnChoose(path):
    keys = (
        "album,artist,genre,title,composer," +
        "author,duration"
    ).split(",")

    data = app.GetMetadata(path, keys)
    data = data.slice(1).split(",")

    lst = []
    for i in range(len(keys)):
        lst.append(keys[i] + ": " + data[i])

    app.Alert("\n".join(lst), path)
 */
    
            