// ------------- HEADER SECTION ------------- 


/** # GetSharedFiles #
 * @brief Get list of shared files
 * Returns a path list of files shared with the app. If the results were retreived they can't be read an other time, unless they will be shared again.
 * 
 * See Also: @GetSharedText, @SendFile, @SendText
 * $$ app.GetSharedFiles() $$ 
 * @returns lst-[ path:str_pth ]
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show Shared Files
function OnStart()
{
	<b>var files = app.GetSharedFiles();</b>

	if( files ) app.Alert( files.join( "\n" ) );
	else app.ShowPopup( "No shared files received." );
}
 */
    
            