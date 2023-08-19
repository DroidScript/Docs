// ------------- HEADER SECTION ------------- 


/** # IsLocationEnabled #
 * @brief Check if location method is enabled
 * Checks if a specific location mode was enabled.
 * 
 * See Also: @CreateLocator
 * $$ app.IsLocationEnabled(mode) $$ 
 * @param {str} mode GPS|Network
 * @returns bin
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Check Locatoin Enabled
function OnStart()
{
    <b>var locEnabled = app.IsLocationEnabled();</b>
    app.Alert( locEnabled, "Location Enabled:" );
}
 */
    
            