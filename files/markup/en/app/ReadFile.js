// ------------- HEADER SECTION -------------


/** # ReadFile #
 * @brief Read the content of a local file
 * Reads a file from the local filesystem and returns its contents.
 * 
 * See also: @WriteFile
 * $$ app.ReadFile(file, encoding?) $$ 
 * @param {str_ptc} file 
 * @param {str} [encoding] US-ASCII|UTF-8|UTF-16|UTF-16BE|UTF-16LE|windows-1252|ISO-8859-1:Latin-1|base64
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Append file and get line count
function OnStart()
{
    app.WriteFile( "myFile.txt", "Hello World from Copy\n", "Append" );

    <b>var txt = app.ReadFile("myFile.txt");</b>
    var length = txt.split("\n").length;
    app.ShowPopup("myFile contains " + length + " lines");
}
 */
    
            
    
/**
@sample Python Append file and get line count
from native import app

def OnStart():
    app.WriteFile("myFile.txt", "Hello World from Copy\n", "Append")

    txt = app.ReadFile("myFile.txt")
    length = len(txt.split("\n"))
    app.ShowPopup("myFile contains " + str(length) + " lines")
 */
    
            