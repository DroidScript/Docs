// ------------- HEADER SECTION ------------- 


/** # LoadScript #
 * @brief Asynchronously import a .js file
 * Loads a local JavaScript file asynchronously to your app to make its functionality available in your app.
 * 
 * See Also: @Script
 * $$ app.LoadScript(path, callback) $$ 
 * @param {str_pth} path 
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Compute the Answer to the Ultimate Question of Life, the Universe, and Everything
var scriptJS = `
var num = 7;
function computeNum() { return 6 * num; }
`;

function OnStart() {
    app.WriteFile( "script.js", scriptJS )
    <b>app.LoadScript( "script.js", OnLoad );</b>
}

function OnLoad() {
    app.ShowPopup( "script.js loaded." );
    app.Alert( computeNum(), "computed number: " );
}
 */
    
            