// ------------- HEADER SECTION ------------- 


/** # WriteFile #
 * @brief Write text to a local file
 * Writes text to a local file.
 * 
 * See Also: @ReadFile.
 * $$ app.WriteFile(file, text, mode, encoding) $$ 
 * @param {str_ptf} file 
 * @param {str} text 
 * @param {str} mode Append|ASCII
 * @param {str} encoding US-ASCII|UTF-8|UTF-16|UTF-16BE|UTF-16LE|windows-1252|ISO-8859-1:Latin-1
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Append file and get line count
function OnStart()
{
    <b>app.WriteFile( "myFile.txt", "Hello World from Write\n", "Append" );</b>

    var txt = app.ReadFile("myFile.txt");
    var length = txt.split("\n").length;
    app.ShowPopup("myFile contains " + length + " lines");
}
 */
    
            