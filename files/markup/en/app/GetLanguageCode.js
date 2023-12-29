// ------------- HEADER SECTION ------------- 


/** # GetLanguageCode #
 * @brief Get user language code
 * GetLanguageCode returns the user language code (ie&period; “en” or “de”).
 * 
 * See Also: @GetLanguage, @GetCountryCode
 * $$ app.GetLanguageCode() $$ 
 * @returns str
*/




// ------------- SAMPLES ------------- 


    
/**
@sample Show User Language Code
function OnStart()
{
    <b>var code = app.GetLanguageCode();</b>
    app.Alert( code );
}
 */
    
            
    
/**
@sample Python Show User Language Code
from native import app

def OnStart():
    code = app.GetLanguageCode()
    app.Alert(code)
 */
    
            