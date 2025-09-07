// ------------- HEADER SECTION -------------


/** # GetCountryCode #
 * @brief Get users country code
 * Returns the code of the device country (ie. “GB” or “DE”)
 *
 * See Also: @GetCountry, GetLanguageCode
 * $$ app.GetCountryCode() $$
 * @returns str
*/




// ------------- SAMPLES -------------



/**
@sample Show Country Code
function OnStart()
{
    <b>var code = app.GetCountryCode();</b>
    app.Alert( code );
}
 */



/**
@sample Python Show Country Code
from native import app

def OnStart():
    code = app.GetCountryCode()
    app.Alert(code)
 */
