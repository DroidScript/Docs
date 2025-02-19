// ------------- HEADER SECTION -------------


/** # GetLanguage #
 * @brief Get device language
 * GetLanguage returns the name of the devices language (ie. “English” or “Deutsch”).
 * %c
 *
 * See Also: @GetLanguageCode, @GetCountry
 * $$ app.GetLanguage() $$
 * @returns str
*/




// ------------- SAMPLES -------------



/**
@sample Show User Language
function OnStart()
{
    <b>var lang = app.GetLanguage();</b>
    app.Alert( lang );
}
 */



/**
@sample Python
from native import app

def OnStart():
    lang = app.GetLanguage()
    app.Alert( lang )
 */
