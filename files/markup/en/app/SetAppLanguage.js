
/** # SetAppLanguage #
 * @brief Load the language code from lang.json
 * Loads the current language code from the lang.json file in your project root folder. Make sure you use the [standard 2 letter language codes](http://www.loc.gov/standards/iso639-2/php/code_list.php).
 * 
 * See Also: @GetAppLanguages
 * $$ app.SetAppLanguage(name) $$ 
 * @param {str} name 
*/


// SetAppLanguage.txt --> All the sample codes

/** @Sample
<sample Switch Language>
var langJson = `
{
    "langs": [ "English", "Español" ],
    "codes": { "english":"en", "español":"es" },
    "trans" : {
        "SelectLang" : {
            "en":"Please select your prefered language from the 'Settings' menu",
            "es":"Selecciona tu idioma preferido en el menú 'Configuración'"
        }
    }
}`;
 
function OnStart()
{
    app.WriteFile( "lang.json", langJson );
    app.SetAppLanguage( "English" );

    lay = app.CreateLayout( "linear", "VCenter,FillXY" );

    spinLang = app.CreateSpinner( "English,Español", 0.4 );
    spinLang.SetOnChange( spinLang_OnChange );
    lay.AddChild( spinLang );

    app.AddLayout( lay );

    app.ShowPopup(T( "SelectLang" ));
}

function spinLang_OnChange()
{
    language = spinLang.GetText();
    app.SetAppLanguage( language );

    app.DestroyLayout( lay );
    OnStart();
}
</sample>

 */

